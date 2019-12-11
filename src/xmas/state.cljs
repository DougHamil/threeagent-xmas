(ns xmas.state
  (:require [threeagent.core :as th]))


(def default-snowman-code
 "
(defn snowman []
  [:object
    [:sphere]
    [:sphere {:scale [0.7 0.7 0.7]
              :position [0 1 0]}]])
")
(def default-present-code
 "
(defn present []
  [:object
    [:box]])
")
(def default-wreath-code
 "
(defn wreath []
  [:object
    [:torus]])
")
(def default-train-code
 "
(defn train []
  [:object
    [:box]
    [:box]])
")
(defonce state (th/atom {:puzzle-code {}
                         :time 0
                         :compile-ticks {}}))
(defonce _ (do
             (swap! state assoc-in [:puzzle-code :snowman] default-snowman-code)
             (swap! state assoc-in [:puzzle-code :present] default-present-code)
             (swap! state assoc-in [:puzzle-code :wreath] default-wreath-code)
             (swap! state assoc-in [:puzzle-code :train] default-train-code)))
