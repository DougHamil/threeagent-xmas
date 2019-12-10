(ns xmas.instanced-model
  (:require ["three" :as three]
            ["three/examples/js/loaders/GLTFLoader"]
            [oops.core :refer [oget oset!]])
  (:require-macros [threeagent.macros :refer [defcomponent]]))

;(instanced-mesh three) ;; Path three.js with instanced-mesh library

(defonce GLTFLoader (oget js/window "THREE.GLTFLoader"))
(js/console.log GLTFLoader)
(defonce ^:private loader (new GLTFLoader))

(defonce ^:private meshes (atom {"example" 'i-mesh}))

(def models ["candyCane"
             "bench"
             "cabinDoor"
             "cabinCorner"
             "cabinFloor"
             "cabinRoof"
             "cabinRoofCenter"
             "cabinRoofChimney"
             "cabinRoofCorner"
             "cabinRoofFlat"
             "cabinSide"
             "cabinWall"
             "cabinWallHalf"
             "cabinWindow"
             "cabinWindowHalf"
             "cabinWindowLarge"
             "candyCaneMint"
             "festivusPole"
             "lightsGreen"
             "lightsRed"
             "lightsMulti"
             "snowPatch"
             "treePine"
             "treePineSnow"
             "treePineSnowed"
             "treePineSnowRound"
             "present"
             "presentLow"
             "presentRound"
             "snowman"
             "snowmanFancy"
             "lightpost"
             "rockFormationLarge"
             "wreath"
             "sled"])


(defcomponent :model [{:keys [type color]}]
  (let [o ^js (.clone ^js (get @meshes type))]
    o))

(defn- load-model! [model-name]
  (js/console.log model-name)
  (js/Promise. (fn [res rej]
                 (if (some? (get @meshes model-name))
                   (res)
                   (.load loader (str "assets/models/" model-name ".glb")
                          (fn [gltf]
                            (let [root (oget gltf "scene.children.0")
                                  parent (three/Object3D.)]
                              (js/console.log model-name root)
                              (.traverse root (fn [c]
                                                (oset! c "castShadow" true)
                                                (oset! c "receiveShadow" true)))
                              (.set (oget root "scale") 20 20 20)
                              (.add parent root)
                              (swap! meshes assoc model-name parent)
                              (new three/BufferGeometry)
                              (res)))
                          (fn [prog])
                          rej)))))
                 

(defn init! []
  (js/Promise.all (map load-model! models)))
