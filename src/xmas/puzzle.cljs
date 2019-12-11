(ns xmas.puzzle
  (:require [oops.core :refer [oget oset! oget+]]
            [clojure.data :refer [diff]]
            [threeagent.core :as th]
            [xmas.interact :as interact]
            [xmas.state :refer [state]]
            [xmas.game :as game]
            [xmas.util :refer [pi pi-over-2]]
            ["three" :as three]))

(defonce ^:private v1 (three/Vector3.))
(defonce ^:private v2 (three/Vector3.))

(declare snowman)
(declare present)
(declare wreath)
(declare train)

(def ^:private puzzles {:snowman {:component #'snowman
                                  :position [-3 0 -4]
                                  :rotation [0 0 0]
                                  :completed-model {:type "snowmanFancy"
                                                    :scale [0.15 0.15 0.15]}
                                  :cam-position [0 18 30]
                                  :prompt "Snowman"}
                        :present {:component #'present
                                  :position [2 0 -2]
                                  :rotation [0 0 0]
                                  :completed-model {:type "present"
                                                    :position [0 -0.3 0]
                                                    :scale [0.15 0.15 0.15]}
                                  :cam-position [0 18 30]
                                  :prompt "Present"}
                        :wreath {:component #'wreath
                                 :position [1.7 3.5 -2.9]
                                 :rotation [0 -0.5 0]
                                 :completed-model {:type "wreath"
                                                   :position [0 -0.3 0]
                                                   :scale [0.10 0.10 0.10]}
                                 :cam-position [0 8 20]
                                 :prompt "Wreath"}
                        :train {:component #'train
                                :position [0 0 0]
                                :rotation [0 -0.5 0]
                                :completed-model {:type "trainLocomotive"
                                                  :position [1.4 -0.3 0]
                                                  :scale [0.30 0.30 0.30]}
                                :cam-position [0 8 20]
                                :prompt "Train"}})

;(swap! state assoc :active-puzzle :snowman)

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

(defn- obj->geos [require-id? o]
  (let [geos (array)]
    (.traverse o (fn [c]
                   (when-let [geo (obj->geo o c)]
                     (let [id (oget c "?userData.?itemId")]
                       (when (or (not require-id?)
                                 (some? id))
                         (.push geos [geo id]))))))
    (into {} geos)))

(defn geo-diff [a b]
  (if (nil? b)
    {:bad (set (map second (obj->geos true a)))
     :good #{}}
    (let [a (obj->geos true a)
          b (obj->geos false b)
          [bad _ good] (diff (set (map first a))
                             (set (map first b)))]
      {:bad (set (map #(get a %) bad))
       :puzzle a
       :player b
       :good (set (map #(get a %) good))})))

(defn- item [puzzle-id id type opts]
  (let [{:keys [good bad]} @(th/cursor state [:puzzle-diffs puzzle-id])
        color (if (and good (good id))
                "green"
                "red")
        opacity (if (and good (good id))
                  0 0.2)]
    ^{:on-added (fn [o]
                  (oset! o "!userData.!itemId" id)
                  (interact/add-clickable! o (fn [this evt]
                                               (let [puzz-obj (get-in @state [:puzzle-objects puzzle-id])]
                                                 (game/set-active-puzzle! (get puzzles puzzle-id) puzz-obj)
                                                 (swap! state assoc :active-puzzle-hint (str opts))
                                                 (swap! state assoc :active-puzzle puzzle-id)))))}
    [type (merge opts
                 {:material {:color color
                             :opacity opacity
                             :flatShading true
                             :transparent true}})]))

(defn snowman [item]
  [:object
   [item "bottom" :sphere {}]
   [item "mid" :sphere {:position [0 1 0]
                        :scale [0.7 0.7 0.7]}]
   [item "top" :sphere {:position [0 2 0]
                        :scale [0.5 0.5 0.5]}]])
(defn present [item]
  [:object
   [item "box" :box {}]
   [item "lid" :box {:scale [1.1 0.3 1.1]
                     :position [0 0.5 0]}]])

(defn wreath [item]
  [:object
   [item "wreath" :torus {:radius 0.5
                          :tube 0.2}]])
(defn train [item]
  [:object
   [item "chasis" :box {:scale [1.5 0.5 0.5]}]
   [item "cabin" :box {:scale [0.5 0.5 0.5]
                       :position [0.5 0.5 0]}]])

(defn- text [t c]
  [:text {:text t
          :color c
          :width 800}])


(defn- render-prompt [hint-text]
  (let [t @(th/cursor state [:time])
        scale 1.8
        y-pos (js/Math.sin (* 2.0 t))]
    [:object {:position [-8.5 (+ 3 (/ y-pos 8.0)) 0]
              :rotation [pi 0 0]
              :scale [scale scale scale]}
     [text hint-text 0xFFFFFF] ;0x00B32C]
     [:object {:position [0.01 0 0.01]}
      [text hint-text 0x000000]]])) ;0x00FF3E]]])


(defn- check-puzzle-complete! [puzzle-key]
  (let [puzzle-obj (get-in @state [:puzzle-objects puzzle-key])
        player-obj (get-in @state [:player-objects puzzle-key])
        old-diff (get-in @state [:puzzle-diffs puzzle-key])
        new-diff (geo-diff puzzle-obj player-obj)]
    (swap! state assoc-in [:puzzle-diffs puzzle-key] new-diff)
    (when (and (or (nil? old-diff)
                   (not (empty? (:bad old-diff))))
               (empty? (:bad new-diff)))
      (game/animate-puzzle-complete! puzzle-key (get puzzles puzzle-key)
                                     player-obj))))

(defn- render-player-obj [puzzle-key]
  [:object
   (let [tick @(th/cursor state [:compile-ticks puzzle-key])
         status @(th/cursor state [:puzzle-statuses puzzle-key])
         c @(th/cursor state [:player-comps puzzle-key])]
     (when (and (not= :complete status)
                (some? c))
       [:object
        (with-meta (c) {:key tick
                        :on-added (fn [a]
                                    (swap! state assoc-in [:player-objects puzzle-key] a)
                                    (let [puzzle-key (:active-puzzle @state)]
                                      (.updateWorldMatrix a true)
                                      (check-puzzle-complete! puzzle-key)))})]))])
(defn- render-puzzle [puzzle-key puzzle]
  [:object
   (let [status @(th/cursor state [:puzzle-statuses puzzle-key])]
     (if (= :complete status)
       [:model (:completed-model puzzle)]
       [(:component puzzle) (partial item puzzle-key)]))])

(defn- render-puzzles []
  [:object
   (for [[puzz-key puzzle] puzzles]
     ^{:on-added (fn [o]
                   (swap! state assoc-in [:puzzle-objects puzz-key] o))}
     [:object {:position (:position puzzle)
               :rotation (:rotation puzzle)}
      [render-puzzle puzz-key puzzle]
      ;[render-prompt (:prompt puzzle)]
      [render-player-obj puzz-key]])])



(defn render []
  [:object {:scale [5 5 5]
            :position [0 2 0]}
   [render-puzzles]])

(comment
  (let [o (:puzzle-obj @state)
        b (:player-obj @state)]
    (println (geo-diff o b))))

