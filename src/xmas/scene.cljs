(ns xmas.scene
  (:require ["three" :as three]
            [xmas.util :refer [pi-over-2 pi]]))


(defn- model [type pos rot]
  [:object {:position pos
            :rotation rot}
   [:model {:type type}]])

(defn rock-wall []
  [:object
   (for [i (range 10)]
     (let [r (rand 1.8)
           s (+ 2.4 (rand 0.2))
           sx (+ 2.4 (rand 0.2))
           p (rand 10)]
       [:model {:type "rockFormationLarge"
                :position [(- (* i 20) 70) -2 (- p 80)]
                :rotation [0 r 0]
                :scale [sx s sx]}]))])


(defn cabin []
  [:object
   [:model {:type "cabinDoor"}]
   [:object {:rotation [0 0 0]
             :position [0 20 0]
             :scale [1 0.5 1]}
    [:model {:type "cabinRoofCenter"}]]
   [:object {:rotation [0 0 0]
             :scale [0.5 0.5 0.5]
             :position [10 20 0]}
    [:model {:type "cabinSide"}]]
   [:object {:rotation [0 0 0]
             :scale [-0.5 0.5 0.5]
             :position [10 20 0]}
    [:model {:type "cabinSide"}]]
   [:object {:rotation [0 pi-over-2 0]}
    [:model {:type "cabinWall"}]]
   [:object {:rotation [0 pi-over-2 0]
             :position [20 0 0]}
    [:model {:type "cabinWall"}]]
   [:object {:rotation [0 0 0]
             :position [0 0 -20]}
    [:model {:type "cabinWall"}]]])

(defn ground []
  [:object
   [:cylinder {:scale [4 2 4]
               :position [0 -2 0]
               :material {:color "rgb(62%, 40%, 26%)"
                          :flatShading true
                          :shininess 0}
               :radius-top 8
               :radius-bottom 10
               :radial-segments 20
               :height-segments 2
               :height 2
               :open-ended? false}]
   [:model {:type "snowPatch"
            :scale [0.9 0.9 0.9]
            :position [0 0 4]}]])

(defn render []
  [:object
   [:object {:position [0 0 -20]}
    [ground]
    [:object {:rotation [0 -0.45 0]}
     [cabin]
     [:model {:type "treePine"
              :position [-8 0 -10]}]
     [:model {:type "treePine"
              :scale [0.8 0.8 0.8]
              :rotation [0 0.2 0]
              :position [-18 0 -8]}]
     [:model {:type "lightpost"
              :position [-8 0 0]}]
     [:model {:type "lightsMulti"
              :rotation [0 (+ pi 0.4) 0]
              :position [-8 0 0]}]
     [:model {:type "lightpost"
              :position [-24 0 10]}]
     [:model {:type "wreath"
              :scale [0.5 0.5 0.5]
              :position [10 19 1.0]}]]]])
