(ns xmas.state
  (:require [threeagent.core :as th]))


(def default-code
 "
(defn snowman []
  [:object
    [:sphere]
    [:sphere {:scale [0.7 0.7 0.7]
              :position [0 1 0]}]])
")
(def default-code2
 "
(defn snowman []
  ^{:on-added (fn [c] (js/console.log c))
    :key (rand)}
  [:object
    [:sphere]
    [:box {:scale [0.7 0.7 0.7]
           :position [0 1 0]}]])
")
(defonce state (th/atom {:code default-code
                         :time 0
                         :compile-tick 0}))

