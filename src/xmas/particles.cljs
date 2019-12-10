(ns xmas.particles
  (:require ["shader-particle-engine" :as spe]
            ["three" :as three]
            [oops.core :refer [oget oset!]]))

(defonce ^:private emitters (atom {}))


(defn render []
  ^{:on-added (fn [o]
                (.traverse o (fn [c]
                               (oset! c "frustumCulled" false))))}
  [:object {:position [0 40 10]}
   [:instance {:object (.-mesh (:default @emitters))}]])

(defn tick! [delta-time]
  (doseq [[k group] @emitters]
    (.tick group delta-time)))

(defn init! []
  (js/Promise. (fn [res rej]
                 (let [g (spe/Group. (clj->js {:texture {:value (.loadTexture (oget three "ImageUtils")
                                                                              "assets/smokeparticle.png")}}))
                       emitter (spe/Emitter. (clj->js {:maxAge {:value 5}
                                                       :position {:value (three/Vector3. 0 0 0)
                                                                  :spread (three/Vector3. 60 0 -20)}
                                                       :acceleration {:value (three/Vector3. 0 -1 0)
                                                                      :spread (three/Vector3. 0 0 0)}
                                                       :velocity {:value (three/Vector3. 0 -1 0)
                                                                  :spread (three/Vector3. 10 7.5 10.0)}
                                                       :color {:value (three/Color. "white")}
                                                       :size {:value 1}
                                                       :particleCount 1000}))]
                   (.addEmitter g emitter)
                   (swap! emitters assoc :default g))
                 (res))))

