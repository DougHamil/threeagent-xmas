(ns xmas.ui
  (:require [reagent.core :as r]
            [threeagent.core :as th]
            [xmas.state :refer [state]]
            [shadow.cljs.bootstrap.browser :as boot]
            [cljs.js :as cljs]))

(defonce c-state (cljs/empty-state))

(defonce _
  (boot/init c-state
             {:path "js/bootstrap"
              :load-on-init '#{xmas.host}}
             (fn []
               (println "bootstrapped"))))
              

(defn compile! [code]
  (cljs/eval-str
   c-state
   code
   "[test]"
   {:eval cljs/js-eval
    :load (partial boot/load c-state)
    :ns (symbol "xmas.host")}
   (fn [s]
     (println s)
     (js/console.log "error:" (clj->js (:error s)))
     (js/setTimeout (fn []
                      (swap! state assoc :compile-error (:error s));(.. ^js (clj->js (:error s)) -cause -message)
                      (swap! state assoc-in [:player-comps (:active-puzzle @state)] (:value s))
                      (swap! state update-in [:compile-ticks (:active-puzzle @state)] inc))
                    0))))

(defn code-mirror
  [value-atom {:keys [style
                      js-cm-opts
                      on-cm-init]}]

  (let [cm (atom nil)]
    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [el (r/dom-node this)
              inst (js/CodeMirror.
                    el
                    (clj->js
                     (merge
                      {:lineNumbers true
                       :viewportMargin js/Infinity
                       :matchBrackets true
                       :autofocus true
                       :value @value-atom
                       :autoCloseBrackets true
                       :mode "clojure"}
                      js-cm-opts)))]

          (reset! cm inst)
          (.on inst "change"
               (fn []
                 (let [value (.getValue inst)]
                   (when-not (= value @value-atom)
                     (reset! value-atom value)))))
          (when on-cm-init
            (on-cm-init inst))))
          

      :component-did-update
      (fn [this old-argv]
        (when-not (= @value-atom (.getValue @cm))
          (.setValue @cm @value-atom)
          ;; reset the cursor to the end of the text, if the text was changed externally
          (let [last-line (.lastLine ^js @cm)
                last-ch (count (.getLine ^js @cm last-line))]
            (.setCursor ^js @cm last-line last-ch))))

      :reagent-render
      (fn [_ _ _]
        @value-atom
        [:div {:style style}])})))

(defn- editor [active-puzzle]
  (let [active-puzzle @(r/cursor state [:active-puzzle])
        hint @(r/cursor state [:active-puzzle-hint])
        _ @(r/cursor state [:puzzle-code active-puzzle])]
    [:div
     [:div
      hint
      [:div
       ^{:key active-puzzle}
       [code-mirror (r/cursor state [:puzzle-code active-puzzle])
        {:style {:height "auto"}}]]]
     (when-let [error @(r/cursor state [:compile-error])]
       [:div error])
     [:button {:on-click #(let [puzz (:active-puzzle @state)
                                code (get-in @state [:puzzle-code puzz])]
                            (compile! code))}
      "Submit!"]]))
(defn root []
  (if-let [active-puzzle @(r/cursor state [:active-puzzle])]
    [editor active-puzzle]
    [:h2 "Click on a red outline to create the missing object!"]))

(defn init! []
  (r/render [root]
            (js/document.getElementById "ui-root")))


