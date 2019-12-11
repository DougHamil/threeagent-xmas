(ns xmas.util
  (:require ["three" :as three]
            [oops.core :refer [oget oset!]]))


(defonce ^:private temp-vec (three/Vector3.))

(def pi-over-2 (/ js/Math.PI 2.0))
(def pi-over-4 (/ js/Math.PI 4.0))
(def pi js/Math.PI)

(defn obj->vec3 [o]
  [(oget o "x") (oget o "y") (oget o "z")])

(defn vec3->obj [[x y z]]
  (clj->js {:x x :y y :z z}))

(defn get-world-position [obj]
  (.getWorldPosition obj temp-vec)
  (obj->vec3 temp-vec))

