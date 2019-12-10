(ns xmas.game
  (:require [xmas.state :refer [state]]
            ["@tweenjs/tween.js" :as tween :refer [Tween]]))

(def modes #{:puzzle :complete})

(defn tick! [delta-time]
  (.update tween))

(defn move-camera! [target]
  (when-let [t (:camera-tween @state)]
    (.stop t))
  (let [[x y z] (:camera-position @state)
        t (-> (Tween. #js {:x x :y y :z z})
              (.to (clj->js target)
                   2000))]
    (.start t)
    (.onUpdate t (fn [v]
                   (swap! state assoc :camera-position [(.-x v)
                                                        (.-y v)
                                                        (.-z v)])))
    (swap! state assoc :camera-tween t)))


(defn init! []
  (js/Promise. (fn [res rej]
                 (swap! state assoc :camera-position [9 20 -10])
                 (move-camera! {:x 0 :y 35 :z 40})
                 (res))))
(comment
  (move-camera! {:x 20 :y 35 :z 40}))
