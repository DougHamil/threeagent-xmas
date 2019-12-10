(ns xmas.text
  (:require ["three" :as three]
            ["./js/three-bmfont-text" :as bmfont]
            [threeagent.core :as th]
            [xmas.state :refer [state]]
            [xmas.msdf :as msdf-shader])
  (:require-macros [threeagent.macros :refer [defcomponent]]))

(defonce pi js/Math.PI)
(defonce pi2 (/ pi 2.0))

(defonce default-font "indieflower/IndieFlower-Regular")
;(defonce default-font "patrickhandsc/PatrickHandSC-Regular")
;(defonce default-font "shadowsintolighttwo/ShadowsIntoLightTwo-Regular")
(def ^:dynamic *text-material* nil)

(defn get-geo [data] (bmfont (clj->js data)))

(defcomponent :text [{:keys [text width color]}]
  (let [font (:font @state)
        font-texture (:font-texture @state)
        s 0.012
        geo (get-geo {:width (or width 800)
                      :align "left"
                      :text text
                      :font font})
        color (three/Color. (or color 0xFEFEFE))
        ;mat (three/RawShaderMaterial. (msdf-shader/create-shader 1.0 color font-texture))
        ;mat (or *text-material* (msdf-shader/create-material-lit 1.0 (three/Color. 0xFFFFFF) font-texture))
        mat  (msdf-shader/create-material-lit 1.0 color font-texture)
        mesh (three/Mesh. geo mat)
        parent (three/Object3D.)]
    ;(set! *text-material* mat)
    (.update geo text)
    ;(set! (.-castShadow mesh) true)
    ;(set! (.-receiveShadow mesh) true)
    (.add parent mesh)
    (.set (.-scale mesh) s s s)
    (.set (.-position mesh) 0 0.02 0)
    parent))


(defn- fetch-font! []
  (-> (js/window.fetch (str "https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/"
                            default-font
                            ".json"))
      (.then #(.json %))
      (.then (fn [f]
               (swap! state assoc :font f)))))

(defn- fetch-font-image! []
  (js/Promise. (fn [resolve reject]
                 (let [texture-loader (three/TextureLoader.)]
                   (.load texture-loader (str "https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/"
                                              default-font
                                              ".png")
                          (fn [t]
                            (swap! state assoc :font-texture t)
                            (resolve)))))))

(defn- fetch-texture! [k path]
  (js/Promise. (fn [resolve reject]
                 (let [texture-loader (three/TextureLoader.)]
                   (.load texture-loader path
                          (fn [t]
                            (set! (.-wrapS t) three/RepeatWrapping)
                            (set! (.-wrapT t) three/RepeatWrapping)
                            (set! (.-magFilter t) three/NearestFilter)
                            (set! (.-anisotropy t) 4)
                            (js/console.log t)
                            (swap! state assoc k t)
                            (resolve)))))))

(defn init! []
  (js/Promise.all [(fetch-font!)
                   (fetch-font-image!)]))
