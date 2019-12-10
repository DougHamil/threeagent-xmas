(ns xmas.shim
  (:require ["three" :as three]))

(set! (.-THREE js/window) three)

