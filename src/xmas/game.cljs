(ns xmas.game
  (:require [xmas.state :refer [state]]
            [xmas.util :refer [get-world-position]]
            [oops.core :refer [oget]]
            ["@tweenjs/tween.js" :as tween :refer [Tween]]))

(def modes #{:puzzle :complete})

(defn tick! [delta-time]
  (.update tween))

(defn- vec3->obj [[x y z]] (clj->js {:x x :y y :z z}))

(defn animate-puzzle-complete! [puzzle-key puzzle puzzle-obj]
  (let [t (-> (Tween. #js {:x 0.0})
              (.to #js {:x 1.0} 5000))]
    (.easing t (oget tween "Easing.Quadratic.In"))
    (.start t)
    (.onUpdate t (fn [v]
                   (.rotateY puzzle-obj (+ 0.1
                                           (* 0.1 (.-x v))))))
    (.onComplete t (fn [v]
                     (swap! state assoc-in [:puzzle-statuses puzzle-key] :complete)))))

(defn move-camera! [target]
  (when-let [t (:camera-tween @state)]
    (.stop t))
  (let [pos (:camera-position @state)
        t (-> (Tween. (vec3->obj pos))
              (.to (vec3->obj target)
                   1000))]
    (.start t)
    (.onUpdate t (fn [v]
                   (swap! state assoc :camera-position [(.-x v)
                                                        (.-y v)
                                                        (.-z v)])))
    (swap! state assoc :camera-tween t)))

(defn set-active-puzzle! [puzzle obj]
  (let [world-pos (get-world-position obj)
        cam-pos (map + (:cam-position puzzle) world-pos)]
    (move-camera! cam-pos)))

(defn init! []
  (js/Promise. (fn [res rej]
                 (swap! state assoc :camera-position [9 20 -10])
                 (move-camera! [0 35 40])
                 (res))))
(comment
  (move-camera! {:x 20 :y 35 :z 40}))
