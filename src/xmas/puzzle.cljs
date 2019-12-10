(ns xmas.puzzle
  (:require [oops.core :refer [oget oset! oget+]]
            [clojure.data :refer [diff]]
            [threeagent.core :as th]
            [xmas.state :refer [state]]
            [xmas.util :refer [pi]]
            ["three" :as three]))

(defonce ^:private v1 (three/Vector3.))
(defonce ^:private v2 (three/Vector3.))

(declare snowman)
(declare present)

(def ^:private puzzles {:snowman {:component #'snowman
                                  :position [-3 0 -4]
                                  :prompt "Can you finish the snowman?"}
                        :present {:component #'present
                                  :position [2 0 -2]
                                  :prompt "Can you finish the present?"}})

(swap! state assoc :puzzle (get puzzles :snowman))

(defn- vec3->vec [v]
  (vec (map #(oget+ v %)
            ["x" "y" "z"])))

(defn- obj->geo [p o]
  (when-let [geo (oget o "?geometry")]
    (let [pos (do
                (.copy v1 (.getWorldPosition o))
                (.copy v2 (.getWorldPosition p))
                (.sub v1 v2)
                (vec3->vec v1))]
      {:type (oget geo "type")
       :position pos
       :direction (vec3->vec (.getWorldDirection o v1))
       :scale (vec3->vec (.getWorldScale o v1))})))

(defn- obj->geos [o]
  (let [geos (array)]
    (.traverse o (fn [c]
                   (when-let [geo (obj->geo o c)]
                     (.push geos [geo (oget c "?userData.?itemId")]))))
    (into {} geos)))

(defn geo-diff [a b]
  (if (nil? b)
    {:bad (set (map second (obj->geos a)))
     :good #{}}
    (let [a (obj->geos a)
          b (obj->geos b)
          [bad _ good] (diff (set (map first a))
                             (set (map first b)))]
      {:bad (set (map #(get a %) bad))
       :good (set (map #(get a %) good))})))

(defn- item [id type opts]
  (let [{:keys [good bad]} @(th/cursor state [:puzzle-diff])
        color (if (and good (good id))
                "green"
                "red")
        opacity (if (and good (good id))
                  0 0.2)]
    ^{:on-added (fn [o]
                  (oset! o "userData.!itemId" id))}
    [type (merge opts
                 {:material {:color color
                             :opacity opacity
                             :flatShading true
                             :transparent true}})]))

(defn snowman []
  ^{:on-added (fn [o] (swap! state assoc :puzzle-obj o))}
  [:object
   [item "bottom" :sphere {}]
   [item "mid" :sphere {:position [0 1 0]
                        :scale [0.7 0.7 0.7]}]
   [item "top" :sphere {:position [0 2 0]
                        :scale [0.5 0.5 0.5]}]])
(defn present []
  [:object
   [item "box" :box {}]
   [item "lid" :box {:scale [1.1 0.3 1.1]
                     :position [0 0.5 0]}]])

(defn- text [t c]
  [:text {:text t
          :color c
          :width 800}])


(defn- render-prompt []
  (let [hint-text @(th/cursor state [:puzzle :prompt])
        t @(th/cursor state [:time])]
    (if hint-text
      (let [scale 1.8
            y-pos (js/Math.sin (* 2.0 t))]
        [:object {:position [-3 (+ 3 (/ y-pos 8.0)) 0]
                  :rotation [pi 0 0]
                  :scale [scale scale scale]}
         [text hint-text 0xFFFFFF] ;0x00B32C]
         [:object {:position [0.01 0 0.01]}
          [text hint-text 0x000000]]]) ;0x00FF3E]]])
      [:object])))


(defn- render-puzzle []
  [:object
   (for [[puzz-key puzzle] puzzles]
     [:object {:position (:position puzzle)}
      [(:component puzzle)]])])

(defn- render-player-obj []
  [:object
   (let [tick @(th/cursor state [:compile-tick])
         c @(th/cursor state [:custom-comp])
         puzz @(th/cursor state [:puzzle])]
     (when (some? c)
       [:object {:position (:position puzz)}
        (with-meta (c) {:key tick
                        :on-added (fn [a]
                                    (.updateWorldMatrix a true)
                                    (swap! state assoc :player-obj a)
                                    (swap! state assoc :puzzle-diff (geo-diff (:puzzle-obj @state)
                                                                              (:player-obj @state))))})]))])


(defn render []
  [:object {:scale [5 5 5]
            :position [0 2 0]}
   [render-puzzle]
   [render-prompt]
   [:object {:position [0 0 0]}
    [render-player-obj]]])

(comment
  (let [o (:puzzle-obj @state)
        b (:player-obj @state)]
    (println (geo-diff o b))))

