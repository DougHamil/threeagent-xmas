(ns xmas.app
  (:require [threeagent.core :as th]
            ["three" :as three]
            [xmas.shim]
            [xmas.host]
            [xmas.text :as text]
            [xmas.ui :as ui]
            [xmas.game :as game]
            [xmas.instanced-model :as instanced-model]
            [xmas.state :refer [state]]
            [xmas.scene :as scene]
            [xmas.puzzle :as puzzle]
            [xmas.particles :as particles]
            [oops.core :refer [oget oset!]]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [threeagent.macros :refer [defcomponent]]))

(def sky-color 0xC8E4FA)

(defn lighting []
  [:object
    [:hemisphere-light {:intensity 0.7
                        :sky-color "white"}]
    ^{:on-added (fn [o]
                  (oset! o "castShadow" true)
                  (let [c (oget o "shadow.camera")
                        d 40]
                    (oset! o "shadow.mapSize.width" 2048)
                    (oset! o "shadow.mapSize.height" 2048)
                    (oset! c "right" d)
                    (oset! c "top" d)
                    (oset! c "bottom" (- d))
                    (oset! c "left" (- d))
                    (oset! c "near" 2)
                    (oset! c "far" 1000)))}
    [:directional-light {:intensity 0.60
                         :color "white"
                         :position [20 40 20]}]])

(defn ground []
  ^{:on-added (fn [o]
                (.traverse o (fn [c]
                               (oset! c "receiveShadow" true))))}
  [:object
   [:model {:type "snowPatch"
            :scale [0.3 0.3 0.3]
            :position [0 0 -20]}]
   [:model {:type "snowPatch"
            :scale [0.3 0.3 0.3]
            :rotation [0 1.0 0]
            :position [-70 0 -40]}]
   [:model {:type "snowPatch"
            :scale [0.3 0.3 0.3]
            :rotation [0 8.0 0]
            :position [70 0 -40]}]
   [:plane {:position [0 0 0]
            :rotation [(- (/ js/Math.PI 2.0))
                       0
                       0]
            :material {:color "rgb(80.83%, 99.06%, 99.06%)"}
            :width 200
            :height 200}]])

(defn camera []
  (let [cam-pos @(th/cursor state [:camera-position])]
    (if-let [canvas @(th/cursor state [:canvas])]
      (let [aspect (/ (.-height canvas)
                      (.-width canvas))
            width 50
            height (* width aspect)]
        [:object
         [:perspective-camera {:position cam-pos
                               :rotation [-0.5 0 0]
                               :aspect (/ 1.0 aspect)
                               :active true}]
         [:orthographic-camera {:position [0 35 40]
                                :rotation [-0.5 0 0]
                                :left (- width)
                                :right width
                                :top height
                                :bottom (- height)
                                :active false}]])
      [:object])))



(defn root []
  [:object
   [camera]
   [lighting]
   [particles/render]
   [scene/render]
   [puzzle/render]])

(defn tick! [delta-time]
  (swap! state update :time + delta-time)
  (particles/tick! delta-time)
  (game/tick! delta-time))

(defn ^:dev/after-load init []
  (ui/init!)
  (->
   (js/Promise.all [(instanced-model/init!)
                    (text/init!)
                    (particles/init!)
                    (game/init!)])
   (.then (fn []
            (let [ctx (th/render root
                                 (.getElementById js/document "root")
                                 {:on-before-render tick!})
                  renderer (.-renderer ctx)]
              (swap! state assoc :canvas (.-canvas ctx))
              (set! (.-enabled (.-shadowMap renderer)) true)
              (.setClearColor renderer sky-color))))))

