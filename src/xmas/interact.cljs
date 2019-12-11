(ns xmas.interact
  (:require ["three" :as three]
            [xmas.game :as game]
            [xmas.state :refer [state]]
            [oops.core :refer [oget oset!]]
            [threeagent.core :as th]))

(defn- log [x]
  (js/console.log x))

(def ^:private clickables (atom []))
;; {:object some-obj :id uuid :on-click fn}

(def raycaster (three/Raycaster.))

(defn- relative-pos [[client-x client-y]]
  (let [ctx (:context @state)
        canvas (.-canvas ctx)
        rect (.getBoundingClientRect canvas)]
    [(- client-x (.-left rect))
     (- client-y (.-top rect))]))

(defn- normalize-mouse-pos [[x y]]
  (let [ctx (:context @state)
        canvas (.-canvas ctx)
        [nx ny] (relative-pos [x y])]
    [(- (* (/ nx (.-clientWidth canvas)) 2.0) 1.0)
     (+ (* (/ ny (.-clientHeight canvas)) -2.0) 1.0)]))

(defn- pick [mouse-pos]
  (when-let [ctx (:context @state)]
    (let [[nx ny] (normalize-mouse-pos mouse-pos)
          cam (first (.-cameras ctx))]
      (.setFromCamera raycaster (clj->js {:x nx :y ny}) cam)
      (let [result (first (.intersectObjects raycaster (to-array (map :object @clickables)) true))]
        (->> @clickables
             (filter #(= (:object %) (oget result "object")))
             (first))))))

(defn- on-mouse-down [evt]
  (let [x (.-clientX evt)
        y (.-clientY evt)
        picked (pick [x y])]
    (when picked
      ((:on-click picked) picked evt))))

(defn add-clickable! [obj on-click]
  (swap! clickables conj {:object obj :id (.-uuid obj) :on-click on-click}))

(defn remove-clickable! [obj]
  (swap! clickables (fn [cs] (filter #(not= (:id %) (.-uuid obj))))))

(defn render [])


(defn init! []
  (js/Promise. (fn [res rej]
                 (let [el (js/document.getElementById "root")]
                   (.addEventListener el "mousedown" on-mouse-down))
                 (res))))
