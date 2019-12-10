(ns xmas.msdf
  (:require ["three" :as three]))


(def vertex-shader "
     attribute vec2 uv;
     attribute vec4 position;
     uniform mat4 projectionMatrix;
     uniform mat4 modelViewMatrix;
     varying vec2 vUv;
     void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * position;
     }
  ")

(def fragment-shader "
      #ifdef GL_OES_standard_derivatives
      #extension GL_OES_standard_derivatives : enable
      #endif
      precision highp float;
      uniform float opacity;
      uniform vec3 color;
      uniform sampler2D map;
      varying vec2 vUv;

      float median(float r, float g, float b) {
        return max(min(r, g), min(max(r, g), b));
      }

      void main() {
        vec3 sample = 1.0 - texture2D(map, vUv).rgb;
        float sigDist = median(sample.r, sample.g, sample.b) - 0.5;
        float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);
        gl_FragColor = vec4(color.xyz, alpha * opacity);
        if (gl_FragColor.a < 0.0001) discard;
      }
  ")

(defn create-shader [opacity color map]
  (clj->js
   {:uniforms {:opacity {:type "f" :value opacity}
               :map {:type "t" :value map}
               :color {:type "c" :value color}}
    :vertexShader vertex-shader
    :transparent true
    :opacity opacity
    :side three/DoubleSide
    :fragmentShader fragment-shader}))

(def median-fn "
      #extension GL_OES_standard_derivatives : enable
      float msdf_median(float r, float g, float b) {
        return max(min(r, g), min(max(r, g), b));
      }
  ")
      
;; LIGHTING VERSION
(def my-map-fragment "
  #ifdef USE_MAP
        vec3 msdf_sample = 1.0 - texture2D(map, vUv).rgb;
        float msdf_sigDist = msdf_median(msdf_sample.r, msdf_sample.g, msdf_sample.b) - 0.5;
        float msdf_alpha = clamp(msdf_sigDist/fwidth(msdf_sigDist) + 0.5, 0.0, 1.0) * opacity;
        if (msdf_alpha < 0.0001) discard;
        diffuseColor.a = msdf_alpha;
#endif")

(defn create-material-lit [opacity color map]
  (let [ m (three/MeshPhongMaterial. (clj->js {:map map
                                               :opacity 1.0
                                               :color (three/Color. (or color  0xFFFFFF))
                                               :transparent true}))]
    (set! (.-defines m) (clj->js {:TRANSPARENCY true}))
    (set! (.-shadowSide m) 0)
    (set! (.-flatShading m) true)
    (let [old (.-onBeforeCompile m)]
      (set! (.-onBeforeCompile m) (fn [s r]
                                    (set! (.-fragmentShader s)
                                          (as-> (.-fragmentShader s) a
                                            (str median-fn "\n" a)
                                            (clojure.string/replace a #"#include <map_fragment>" my-map-fragment))))))

    m))


