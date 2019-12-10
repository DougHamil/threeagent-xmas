goog.provide('cljs.js');
goog.provide("cljs.core$macros");
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56492 = arguments.length;
var i__4731__auto___56493 = (0);
while(true){
if((i__4731__auto___56493 < len__4730__auto___56492)){
args__4736__auto__.push((arguments[i__4731__auto___56493]));

var G__56494 = (i__4731__auto___56493 + (1));
i__4731__auto___56493 = G__56494;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__54999 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__55000 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55000;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54999;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq54997){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54997));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR__orig_val__55034 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__55035 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__55035;

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__55034;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_(x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__55057){
var map__55058 = p__55057;
var map__55058__$1 = (((((!((map__55058 == null))))?(((((map__55058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55058):map__55058);
var resource = map__55058__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55058__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__55083 = arguments.length;
switch (G__55083) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__55100 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__55100,((function (G__55100){
return (function (state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),cljs.core.PersistentHashMap.EMPTY);
});})(G__55100))
);

return G__55100;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__55104 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__55104,init);

return G__55104;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),cljs.core.sorted_map(),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0),new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__55133){
var map__55142 = p__55133;
var map__55142__$1 = (((((!((map__55142 == null))))?(((((map__55142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55142):map__55142);
var opts = map__55142__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55142__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55142__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var source_map_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55142__$1,new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633));
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__55166 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace(G__55166,".","/");
} else {
return G__55166;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__4131__auto__ = output_dir;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__55171 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__55171__$1 = ((source_map_timestamp === true)?[G__55171,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__55171);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__55171__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__55171__$1;
}
})();
var file = (function (){var G__55173 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__55173__$1 = ((source_map_timestamp === true)?[G__55173,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__55173);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__55173__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__55173__$1;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(mn)], null),cljs.source_map.invert_reverse_map(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",file,"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__55184 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__55142,map__55142__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__55187){
var vec__55188 = p__55187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55188,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55188,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__55142,map__55142__$1,opts,output_dir,asset_path,source_map_timestamp))
);
return goog.crypt.base64.encodeString(G__55184);
})())].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__55193){
var vec__55197 = p__55193;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55197,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55197,(1),null);
return cljs.core.symbol_identical_QMARK_(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null))], 0))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__55205 = cljs.core.first(coll);
var G__55206 = ((function (G__55205){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__55207 = proc;
var G__55208 = cljs.core.rest(coll);
var G__55209 = break_QMARK_;
var G__55210 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__55207,G__55208,G__55209,G__55210) : cljs.js.run_async_BANG_.call(null,G__55207,G__55208,G__55209,G__55210));
}
});})(G__55205))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__55205,G__55206) : proc.call(null,G__55205,G__55206));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1);
}),names,new cljs.core.Keyword(null,"error","error",-978969032),cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)], 0)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pre-file side-effects",file], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"defs","defs",1398449717)], null));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var fexpr__55214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null);
return (fexpr__55214.cljs$core$IFn$_invoke$arity$1 ? fexpr__55214.cljs$core$IFn$_invoke$arity$1(name) : fexpr__55214.call(null,name));
})());
} else {
return and__4120__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post-file side-effects",file], 0));
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__55219 = arguments.length;
switch (G__55219) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__55223 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__55223);
} else {
return G__55223;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload)){
cljs.core.reset_BANG_(cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)," namespace"].join('')], 0));
} else {
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(cljs.js._STAR_loaded_STAR_),aname)))){
var env = new cljs.core.Keyword(null,"*env*","*env*",1860548436).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{var G__55231 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name)], null);
var G__55232 = ((function (G__55231,env,bound_vars__$1,aname){
return (function (resource){

if(cljs.core.truth_(resource)){
var map__55233 = resource;
var map__55233__$1 = (((((!((map__55233 == null))))?(((((map__55233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55233):map__55233);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55233__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55233__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55233__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55233__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__55235 = cljs.core.keyword_identical_QMARK_;
var expr__55236 = lang;
if(cljs.core.truth_((function (){var G__55238 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__55239 = expr__55236;
return (pred__55235.cljs$core$IFn$_invoke$arity$2 ? pred__55235.cljs$core$IFn$_invoke$arity$2(G__55238,G__55239) : pred__55235.call(null,G__55238,G__55239));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__55235,expr__55236,map__55233,map__55233__$1,lang,source,cache,source_map,file,G__55231,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__55242 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55242) : cb.call(null,G__55242));
}
});})(pred__55235,expr__55236,map__55233,map__55233__$1,lang,source,cache,source_map,file,G__55231,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_((function (){var G__55249 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__55250 = expr__55236;
return (pred__55235.cljs$core$IFn$_invoke$arity$2 ? pred__55235.cljs$core$IFn$_invoke$arity$2(G__55249,G__55250) : pred__55235.call(null,G__55249,G__55250));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__55235,expr__55236,map__55233,map__55233__$1,lang,source,cache,source_map,file,G__55231,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__55235,expr__55236,map__55233,map__55233__$1,lang,source,cache,source_map,file,G__55231,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{var fexpr__55253_56525 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__55253_56525.cljs$core$IFn$_invoke$arity$1 ? fexpr__55253_56525.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__55253_56525.call(null,resource));

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs(cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e55252){var cause = e55252;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__55254 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55254) : cb.call(null,G__55254));
}
}
});})(pred__55235,expr__55236,map__55233,map__55233__$1,lang,source,cache,source_map,file,G__55231,env,bound_vars__$1,aname))
);
}
});})(pred__55235,expr__55236,map__55233,map__55233__$1,lang,source,cache,source_map,file,G__55231,env,bound_vars__$1,aname))
);
} else {
var G__55255 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55255) : cb.call(null,G__55255));
}
}
} else {
var G__55256 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__55257 = (cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812));
var G__55258 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__55257,G__55258) : cljs.analyzer.error_message.call(null,G__55257,G__55258));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55256) : cb.call(null,G__55256));
}
});})(G__55231,env,bound_vars__$1,aname))
;
var fexpr__55230 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__55230.cljs$core$IFn$_invoke$arity$2 ? fexpr__55230.cljs$core$IFn$_invoke$arity$2(G__55231,G__55232) : fexpr__55230.call(null,G__55231,G__55232));
}catch (e55228){var cause = e55228;
var G__55229 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55229) : cb.call(null,G__55229));
}} else {
var G__55259 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55259) : cb.call(null,G__55259));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__4120__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals(replaced));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (patch){
return (function (acc,p__55264){
var vec__55267 = p__55264;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55267,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55267,(1),null);
var entry = vec__55267;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch(new cljs.core.Keyword(null,"requires","requires",-1201390927),true);

patch(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),true);

patch(new cljs.core.Keyword(null,"uses","uses",232664692),false);

patch(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),false);

patch_renames(new cljs.core.Keyword(null,"renames","renames",343278368));

return patch_renames(new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__4120__auto__ = new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__4120__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4120__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__55309 = arguments.length;
switch (G__55309) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR__orig_val__55314 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__55315 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__55315;

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55314,_STAR_cljs_dep_set_STAR__temp_val__55315){
return (function (p1__55281_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__55281_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55314,_STAR_cljs_dep_set_STAR__temp_val__55315))
,deps)))){
var G__55320 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55320) : cb.call(null,G__55320));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55314,_STAR_cljs_dep_set_STAR__temp_val__55315){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading result:",res], 0));
} else {
}

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55314,_STAR_cljs_dep_set_STAR__temp_val__55315){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55314,_STAR_cljs_dep_set_STAR__temp_val__55315){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__55321 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55321) : cb.call(null,G__55321));
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55314,_STAR_cljs_dep_set_STAR__temp_val__55315))
);
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55314,_STAR_cljs_dep_set_STAR__temp_val__55315))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55314,_STAR_cljs_dep_set_STAR__temp_val__55315))
);
} else {
var G__55322 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55322) : cb.call(null,G__55322));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__55314;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__55329 = arguments.length;
switch (G__55329) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR__orig_val__55335 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__55336 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__55336;

try{var compiler = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55335,_STAR_cljs_dep_set_STAR__temp_val__55336){
return (function (p1__55323_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__55323_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55335,_STAR_cljs_dep_set_STAR__temp_val__55336))
,deps)))){
var G__55337 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55337) : cb.call(null,G__55337));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__55354 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(dep)], null);
var G__55355 = ((function (G__55354,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55335,_STAR_cljs_dep_set_STAR__temp_val__55336){
return (function (resource){

if(cljs.core.not(resource)){
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,((function (cljs_dep,temp__5733__auto__,G__55354,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55335,_STAR_cljs_dep_set_STAR__temp_val__55336){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__55361 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55361) : cb.call(null,G__55361));
}
});})(cljs_dep,temp__5733__auto__,G__55354,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55335,_STAR_cljs_dep_set_STAR__temp_val__55336))
);
} else {
var G__55366 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__55368 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__55369 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__55368,G__55369) : cljs.analyzer.error_message.call(null,G__55368,G__55369));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55366) : cb.call(null,G__55366));
}
} else {
var map__55384 = resource;
var map__55384__$1 = (((((!((map__55384 == null))))?(((((map__55384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55384):map__55384);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55384__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55384__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55384__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55384__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__55396 = cljs.core.keyword_identical_QMARK_;
var expr__55397 = lang;
if(cljs.core.truth_((function (){var G__55403 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__55404 = expr__55397;
return (pred__55396.cljs$core$IFn$_invoke$arity$2 ? pred__55396.cljs$core$IFn$_invoke$arity$2(G__55403,G__55404) : pred__55396.call(null,G__55403,G__55404));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__55396,expr__55397,map__55384,map__55384__$1,name,lang,source,file,G__55354,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55335,_STAR_cljs_dep_set_STAR__temp_val__55336){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(pred__55396,expr__55397,map__55384,map__55384__$1,name,lang,source,file,G__55354,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55335,_STAR_cljs_dep_set_STAR__temp_val__55336))
);
} else {
if(cljs.core.truth_((function (){var G__55418 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__55419 = expr__55397;
return (pred__55396.cljs$core$IFn$_invoke$arity$2 ? pred__55396.cljs$core$IFn$_invoke$arity$2(G__55418,G__55419) : pred__55396.call(null,G__55418,G__55419));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(G__55354,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__55335,_STAR_cljs_dep_set_STAR__temp_val__55336))
;
var fexpr__55353 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__55353.cljs$core$IFn$_invoke$arity$2 ? fexpr__55353.cljs$core$IFn$_invoke$arity$2(G__55354,G__55355) : fexpr__55353.call(null,G__55354,G__55355));
}catch (e55338){var cause = e55338;
var G__55342 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55342) : cb.call(null,G__55342));
}} else {
var G__55424 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55424) : cb.call(null,G__55424));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__55335;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__4131__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload.call(null,k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"*reload-macros*","*reload-macros*",-820635806).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"reload","reload",863702807);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760)),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)], 0));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
var G__55452 = bound_vars;
var G__55453 = k__$1;
var G__55454 = cljs.core.next(macros);
var G__55455 = lib;
var G__55456 = reload;
var G__55457 = reloads;
var G__55458 = opts;
var G__55459 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__55452,G__55453,G__55454,G__55455,G__55456,G__55457,G__55458,G__55459) : cljs.js.load_macros.call(null,G__55452,G__55453,G__55454,G__55455,G__55456,G__55457,G__55458,G__55459));
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(nsym);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

var G__55460 = bound_vars;
var G__55461 = k__$1;
var G__55462 = cljs.core.next(macros);
var G__55463 = lib;
var G__55464 = reload;
var G__55465 = reloads;
var G__55466 = opts;
var G__55467 = ((function (G__55460,G__55461,G__55462,G__55463,G__55464,G__55465,G__55466,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__55469 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55469) : cb.call(null,G__55469));
}
});})(G__55460,G__55461,G__55462,G__55463,G__55464,G__55465,G__55466,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__55460,G__55461,G__55462,G__55463,G__55464,G__55465,G__55466,G__55467) : cljs.js.load_macros.call(null,G__55460,G__55461,G__55462,G__55463,G__55464,G__55465,G__55466,G__55467));
}
});})(cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
var G__55474 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55474) : cb.call(null,G__55474));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__55478 = arguments.length;
switch (G__55478) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__55479 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55479,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55479,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55479,(2),null);
var rewrite_renames = ((function (vec__55479,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__55479,uk,rk,renk){
return (function (acc,p__55486){
var vec__55487 = p__55486;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55487,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55487,(1),null);
var entry = vec__55487;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if((!((to == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__55479,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__55479,uk,rk,renk))
;
var rewrite_deps = ((function (vec__55479,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (vec__55479,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5733__auto__)){
var new_dep = temp__5733__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__55479,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__55479,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__55479,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__55475_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__55475_SHARP_);
});})(vec__55479,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__55479,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__55476_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__55476_SHARP_)], 0));
});})(vec__55479,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__55495,cenv){
var map__55496 = p__55495;
var map__55496__$1 = (((((!((map__55496 == null))))?(((((map__55496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55496):map__55496);
var ast = map__55496__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55496__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55496__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__55496,map__55496__$1,ast,requires,name){
return (function (p__55510){
var vec__55515 = p__55510;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55515,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55515,(1),null);
var map__55519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__55519__$1 = (((((!((map__55519 == null))))?(((((map__55519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55519):map__55519);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55519__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55519__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4131__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__55496,map__55496__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__55548 = arguments.length;
switch (G__55548) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__55550,opts,cb){
var map__55556 = p__55550;
var map__55556__$1 = (((((!((map__55556 == null))))?(((((map__55556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55556):map__55556);
var ast = map__55556__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55556__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__55558 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__55558.cljs$core$IFn$_invoke$arity$1 ? fexpr__55558.cljs$core$IFn$_invoke$arity$1(op) : fexpr__55558.call(null,op));
})())){
var check_uses_and_load_macros = ((function (map__55556,map__55556__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__55642 = rewritten_ast;
var map__55642__$1 = (((((!((map__55642 == null))))?(((((map__55642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55642):map__55642);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55642__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55642__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55642__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55642__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55642__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__55642,map__55642__$1,uses,use_macros,reload,reloads,name,map__55556,map__55556__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var map__55658 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__55658__$1 = (((((!((map__55658 == null))))?(((((map__55658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55658):map__55658);
var rewritten_ast__$1 = map__55658__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55658__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__55658,map__55658__$1,rewritten_ast__$1,require_macros,env,map__55642,map__55642__$1,uses,use_macros,reload,reloads,name,map__55556,map__55556__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb.call(null,res_SINGLEQUOTE_));
} else {
var map__55668 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__55668__$1 = (((((!((map__55668 == null))))?(((((map__55668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55668):map__55668);
var rewritten_ast__$2 = map__55668__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__55675_56558 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__55676_56559 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__55677_56560 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__55678_56561 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__55677_56560;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__55678_56561;

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__55676_56559;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__55675_56558;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e55674){var cause = e55674;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb.call(null,res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR__orig_val__55681 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__55682 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__55683 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__55684 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__55683;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__55684;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__55686 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55686) : cb.call(null,G__55686));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__55682;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__55681;
}}catch (e55679){var cause = e55679;
var G__55680 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55680) : cb.call(null,G__55680));
}}
}
});})(map__55658,map__55658__$1,rewritten_ast__$1,require_macros,env,map__55642,map__55642__$1,uses,use_macros,reload,reloads,name,map__55556,map__55556__$1,ast,op))
);
}
});})(env,map__55642,map__55642__$1,uses,use_macros,reload,reloads,name,map__55556,map__55556__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(uses);
} else {
return and__4120__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__55697 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55697) : cb.call(null,G__55697));
}catch (e55687){var cause = e55687;
var G__55688 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55688) : cb.call(null,G__55688));
}}
}
});})(map__55556,map__55556__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4120__auto__ = load;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})())){
var map__55698 = ast;
var map__55698__$1 = (((((!((map__55698 == null))))?(((((map__55698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55698):map__55698);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55698__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55698__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__55698,map__55698__$1,reload,name,deps,map__55556,map__55556__$1,ast,op){
return (function (p1__55545_SHARP_){
return check_uses_and_load_macros(p1__55545_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__55545_SHARP_)));
});})(map__55698,map__55698__$1,reload,name,deps,map__55556,map__55556__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(load);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__55556,map__55556__$1,ast,op){
return (function (p1__55546_SHARP_){
return check_uses_and_load_macros(p1__55546_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__55546_SHARP_)));
});})(map__55556,map__55556__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
var G__55720 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__55720) : cb.call(null,G__55720));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__55725_56568 = cljs.core.seq(deps);
var chunk__55726_56569 = null;
var count__55727_56570 = (0);
var i__55728_56571 = (0);
while(true){
if((i__55728_56571 < count__55727_56570)){
var dep_56572 = chunk__55726_56569.cljs$core$IIndexed$_nth$arity$2(null,i__55728_56571);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55764_56573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55765_56574 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55766_56575 = true;
var _STAR_print_fn_STAR__temp_val__55767_56576 = ((function (seq__55725_56568,chunk__55726_56569,count__55727_56570,i__55728_56571,_STAR_print_newline_STAR__orig_val__55764_56573,_STAR_print_fn_STAR__orig_val__55765_56574,_STAR_print_newline_STAR__temp_val__55766_56575,sb__4661__auto__,dep_56572){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__55725_56568,chunk__55726_56569,count__55727_56570,i__55728_56571,_STAR_print_newline_STAR__orig_val__55764_56573,_STAR_print_fn_STAR__orig_val__55765_56574,_STAR_print_newline_STAR__temp_val__55766_56575,sb__4661__auto__,dep_56572))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55766_56575;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55767_56576;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_56572)," = require('",dep_56572,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55765_56574;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55764_56573;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__56577 = seq__55725_56568;
var G__56578 = chunk__55726_56569;
var G__56579 = count__55727_56570;
var G__56580 = (i__55728_56571 + (1));
seq__55725_56568 = G__56577;
chunk__55726_56569 = G__56578;
count__55727_56570 = G__56579;
i__55728_56571 = G__56580;
continue;
} else {
var temp__5735__auto___56584 = cljs.core.seq(seq__55725_56568);
if(temp__5735__auto___56584){
var seq__55725_56585__$1 = temp__5735__auto___56584;
if(cljs.core.chunked_seq_QMARK_(seq__55725_56585__$1)){
var c__4550__auto___56586 = cljs.core.chunk_first(seq__55725_56585__$1);
var G__56587 = cljs.core.chunk_rest(seq__55725_56585__$1);
var G__56588 = c__4550__auto___56586;
var G__56589 = cljs.core.count(c__4550__auto___56586);
var G__56590 = (0);
seq__55725_56568 = G__56587;
chunk__55726_56569 = G__56588;
count__55727_56570 = G__56589;
i__55728_56571 = G__56590;
continue;
} else {
var dep_56591 = cljs.core.first(seq__55725_56585__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55768_56592 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55769_56593 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55770_56594 = true;
var _STAR_print_fn_STAR__temp_val__55771_56595 = ((function (seq__55725_56568,chunk__55726_56569,count__55727_56570,i__55728_56571,_STAR_print_newline_STAR__orig_val__55768_56592,_STAR_print_fn_STAR__orig_val__55769_56593,_STAR_print_newline_STAR__temp_val__55770_56594,sb__4661__auto__,dep_56591,seq__55725_56585__$1,temp__5735__auto___56584){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__55725_56568,chunk__55726_56569,count__55727_56570,i__55728_56571,_STAR_print_newline_STAR__orig_val__55768_56592,_STAR_print_fn_STAR__orig_val__55769_56593,_STAR_print_newline_STAR__temp_val__55770_56594,sb__4661__auto__,dep_56591,seq__55725_56585__$1,temp__5735__auto___56584))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55770_56594;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55771_56595;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_56591)," = require('",dep_56591,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55769_56593;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55768_56592;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__56596 = cljs.core.next(seq__55725_56585__$1);
var G__56597 = null;
var G__56598 = (0);
var G__56599 = (0);
seq__55725_56568 = G__56596;
chunk__55726_56569 = G__56597;
count__55727_56570 = G__56598;
i__55728_56571 = G__56599;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__55779 = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__55779__$1 = (((((!((map__55779 == null))))?(((((map__55779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55779):map__55779);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55779__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__55785_56600 = cljs.core.seq(deps);
var chunk__55786_56601 = null;
var count__55787_56602 = (0);
var i__55788_56603 = (0);
while(true){
if((i__55788_56603 < count__55787_56602)){
var dep_56607 = chunk__55786_56601.cljs$core$IIndexed$_nth$arity$2(null,i__55788_56603);
var map__55844_56608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_56607));
var map__55844_56609__$1 = (((((!((map__55844_56608 == null))))?(((((map__55844_56608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55844_56608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55844_56608):map__55844_56608);
var global_exports_56610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55844_56609__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55856_56611 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55857_56612 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55858_56613 = true;
var _STAR_print_fn_STAR__temp_val__55859_56614 = ((function (seq__55785_56600,chunk__55786_56601,count__55787_56602,i__55788_56603,_STAR_print_newline_STAR__orig_val__55856_56611,_STAR_print_fn_STAR__orig_val__55857_56612,_STAR_print_newline_STAR__temp_val__55858_56613,sb__4661__auto__,map__55844_56608,map__55844_56609__$1,global_exports_56610,dep_56607,map__55779,map__55779__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__55785_56600,chunk__55786_56601,count__55787_56602,i__55788_56603,_STAR_print_newline_STAR__orig_val__55856_56611,_STAR_print_fn_STAR__orig_val__55857_56612,_STAR_print_newline_STAR__temp_val__55858_56613,sb__4661__auto__,map__55844_56608,map__55844_56609__$1,global_exports_56610,dep_56607,map__55779,map__55779__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55858_56613;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55859_56614;

try{cljs.compiler.emit_global_export(ns_name,global_exports_56610,dep_56607);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55857_56612;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55856_56611;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__56615 = seq__55785_56600;
var G__56616 = chunk__55786_56601;
var G__56617 = count__55787_56602;
var G__56618 = (i__55788_56603 + (1));
seq__55785_56600 = G__56615;
chunk__55786_56601 = G__56616;
count__55787_56602 = G__56617;
i__55788_56603 = G__56618;
continue;
} else {
var temp__5735__auto___56619 = cljs.core.seq(seq__55785_56600);
if(temp__5735__auto___56619){
var seq__55785_56620__$1 = temp__5735__auto___56619;
if(cljs.core.chunked_seq_QMARK_(seq__55785_56620__$1)){
var c__4550__auto___56621 = cljs.core.chunk_first(seq__55785_56620__$1);
var G__56622 = cljs.core.chunk_rest(seq__55785_56620__$1);
var G__56623 = c__4550__auto___56621;
var G__56624 = cljs.core.count(c__4550__auto___56621);
var G__56625 = (0);
seq__55785_56600 = G__56622;
chunk__55786_56601 = G__56623;
count__55787_56602 = G__56624;
i__55788_56603 = G__56625;
continue;
} else {
var dep_56626 = cljs.core.first(seq__55785_56620__$1);
var map__55870_56627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_56626));
var map__55870_56628__$1 = (((((!((map__55870_56627 == null))))?(((((map__55870_56627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55870_56627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55870_56627):map__55870_56627);
var global_exports_56629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55870_56628__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55875_56630 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55876_56631 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55877_56632 = true;
var _STAR_print_fn_STAR__temp_val__55878_56633 = ((function (seq__55785_56600,chunk__55786_56601,count__55787_56602,i__55788_56603,_STAR_print_newline_STAR__orig_val__55875_56630,_STAR_print_fn_STAR__orig_val__55876_56631,_STAR_print_newline_STAR__temp_val__55877_56632,sb__4661__auto__,map__55870_56627,map__55870_56628__$1,global_exports_56629,dep_56626,seq__55785_56620__$1,temp__5735__auto___56619,map__55779,map__55779__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__55785_56600,chunk__55786_56601,count__55787_56602,i__55788_56603,_STAR_print_newline_STAR__orig_val__55875_56630,_STAR_print_fn_STAR__orig_val__55876_56631,_STAR_print_newline_STAR__temp_val__55877_56632,sb__4661__auto__,map__55870_56627,map__55870_56628__$1,global_exports_56629,dep_56626,seq__55785_56620__$1,temp__5735__auto___56619,map__55779,map__55779__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55877_56632;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55878_56633;

try{cljs.compiler.emit_global_export(ns_name,global_exports_56629,dep_56626);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55876_56631;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55875_56630;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__56641 = cljs.core.next(seq__55785_56620__$1);
var G__56642 = null;
var G__56643 = (0);
var G__56644 = (0);
seq__55785_56600 = G__56641;
chunk__55786_56601 = G__56642;
count__55787_56602 = G__56643;
i__55788_56603 = G__56644;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__55909 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55909,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__55909;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__55915 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__55916 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__55917 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__55918 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__55919 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__55920 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__55921 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__55922 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__55923 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__55924 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__55925 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__55926 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__55927 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__55928 = ns;
var _STAR_checked_arrays_STAR__temp_val__55929 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__55930 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__55931 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__55932 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_passes_STAR__temp_val__55934 = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__55936 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__55939 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__55940 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__55941 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__55942 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__55927;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__55928;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__55929;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__55930;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__55931;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__55932;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__55934;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__55936;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__55939;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__55940;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__55941;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__55942;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e55959){var cause = e55959;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__55960 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__55960__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55960,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__55960);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55960__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__55960__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e55961){var cause = e55961;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__55964 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__55963 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__55963.cljs$core$IFn$_invoke$arity$1 ? fexpr__55963.cljs$core$IFn$_invoke$arity$1(G__55964) : fexpr__55963.call(null,G__55964));
})())){
var G__55966 = bound_vars__$1;
var G__55967 = aenv__$1;
var G__55968 = ast;
var G__55969 = opts;
var G__55970 = ((function (G__55966,G__55967,G__55968,G__55969,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__55915,_STAR_cljs_ns_STAR__orig_val__55916,_STAR_checked_arrays_STAR__orig_val__55917,_STAR_cljs_static_fns_STAR__orig_val__55918,_STAR_fn_invoke_direct_STAR__orig_val__55919,_STAR_ns_STAR__orig_val__55920,_STAR_passes_STAR__orig_val__55921,_STAR_alias_map_STAR__orig_val__55922,_STAR_data_readers_STAR__orig_val__55923,resolve_symbol_orig_val__55924,_STAR_source_map_data_STAR__orig_val__55925,_STAR_cljs_file_STAR__orig_val__55926,_STAR_compiler_STAR__temp_val__55927,_STAR_cljs_ns_STAR__temp_val__55928,_STAR_checked_arrays_STAR__temp_val__55929,_STAR_cljs_static_fns_STAR__temp_val__55930,_STAR_fn_invoke_direct_STAR__temp_val__55931,_STAR_ns_STAR__temp_val__55932,_STAR_passes_STAR__temp_val__55934,_STAR_alias_map_STAR__temp_val__55936,_STAR_data_readers_STAR__temp_val__55939,resolve_symbol_temp_val__55940,_STAR_source_map_data_STAR__temp_val__55941,_STAR_cljs_file_STAR__temp_val__55942,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$analyze_str_STAR__$_analyze_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
}
});})(G__55966,G__55967,G__55968,G__55969,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__55915,_STAR_cljs_ns_STAR__orig_val__55916,_STAR_checked_arrays_STAR__orig_val__55917,_STAR_cljs_static_fns_STAR__orig_val__55918,_STAR_fn_invoke_direct_STAR__orig_val__55919,_STAR_ns_STAR__orig_val__55920,_STAR_passes_STAR__orig_val__55921,_STAR_alias_map_STAR__orig_val__55922,_STAR_data_readers_STAR__orig_val__55923,resolve_symbol_orig_val__55924,_STAR_source_map_data_STAR__orig_val__55925,_STAR_cljs_file_STAR__orig_val__55926,_STAR_compiler_STAR__temp_val__55927,_STAR_cljs_ns_STAR__temp_val__55928,_STAR_checked_arrays_STAR__temp_val__55929,_STAR_cljs_static_fns_STAR__temp_val__55930,_STAR_fn_invoke_direct_STAR__temp_val__55931,_STAR_ns_STAR__temp_val__55932,_STAR_passes_STAR__temp_val__55934,_STAR_alias_map_STAR__temp_val__55936,_STAR_data_readers_STAR__temp_val__55939,resolve_symbol_temp_val__55940,_STAR_source_map_data_STAR__temp_val__55941,_STAR_cljs_file_STAR__temp_val__55942,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
;
var fexpr__55965 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__55965.cljs$core$IFn$_invoke$arity$5 ? fexpr__55965.cljs$core$IFn$_invoke$arity$5(G__55966,G__55967,G__55968,G__55969,G__55970) : fexpr__55965.call(null,G__55966,G__55967,G__55968,G__55969,G__55970));
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__55915,_STAR_cljs_ns_STAR__orig_val__55916,_STAR_checked_arrays_STAR__orig_val__55917,_STAR_cljs_static_fns_STAR__orig_val__55918,_STAR_fn_invoke_direct_STAR__orig_val__55919,_STAR_ns_STAR__orig_val__55920,_STAR_passes_STAR__orig_val__55921,_STAR_alias_map_STAR__orig_val__55922,_STAR_data_readers_STAR__orig_val__55923,resolve_symbol_orig_val__55924,_STAR_source_map_data_STAR__orig_val__55925,_STAR_cljs_file_STAR__orig_val__55926,_STAR_compiler_STAR__temp_val__55927,_STAR_cljs_ns_STAR__temp_val__55928,_STAR_checked_arrays_STAR__temp_val__55929,_STAR_cljs_static_fns_STAR__temp_val__55930,_STAR_fn_invoke_direct_STAR__temp_val__55931,_STAR_ns_STAR__temp_val__55932,_STAR_passes_STAR__temp_val__55934,_STAR_alias_map_STAR__temp_val__55936,_STAR_data_readers_STAR__temp_val__55939,resolve_symbol_temp_val__55940,_STAR_source_map_data_STAR__temp_val__55941,_STAR_cljs_file_STAR__temp_val__55942,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__55915,_STAR_cljs_ns_STAR__orig_val__55916,_STAR_checked_arrays_STAR__orig_val__55917,_STAR_cljs_static_fns_STAR__orig_val__55918,_STAR_fn_invoke_direct_STAR__orig_val__55919,_STAR_ns_STAR__orig_val__55920,_STAR_passes_STAR__orig_val__55921,_STAR_alias_map_STAR__orig_val__55922,_STAR_data_readers_STAR__orig_val__55923,resolve_symbol_orig_val__55924,_STAR_source_map_data_STAR__orig_val__55925,_STAR_cljs_file_STAR__orig_val__55926,_STAR_compiler_STAR__temp_val__55927,_STAR_cljs_ns_STAR__temp_val__55928,_STAR_checked_arrays_STAR__temp_val__55929,_STAR_cljs_static_fns_STAR__temp_val__55930,_STAR_fn_invoke_direct_STAR__temp_val__55931,_STAR_ns_STAR__temp_val__55932,_STAR_passes_STAR__temp_val__55934,_STAR_alias_map_STAR__temp_val__55936,_STAR_data_readers_STAR__temp_val__55939,resolve_symbol_temp_val__55940,_STAR_source_map_data_STAR__temp_val__55941,_STAR_cljs_file_STAR__temp_val__55942,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
var G__55977 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__55977) : cb__$1.call(null,G__55977));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__55926;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__55925;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__55924;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__55923;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__55922;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__55921;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__55920;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__55919;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__55918;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__55917;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__55916;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__55915;
}});})(rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,the_ns], 0));
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__56001 = arguments.length;
switch (G__56001) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){





return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*passes*","*passes*",1335562782),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__56029 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56029,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__56029;
}
})();
cljs.js.clear_fns_BANG_();

var _STAR_compiler_STAR__orig_val__56034 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__56035 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__56036 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__56037 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__56038 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__56039 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__56040 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__56041 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__56042 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__56043 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__56044 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__56045 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__56046 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__56047 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__56048 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__56049 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__56050 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__56051 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__56052 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__56053 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__56054 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__56055 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__56045;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__56046;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__56047;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__56048;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__56049;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__56050;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__56051;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__56052;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__56053;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__56054;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__56055;

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__56075 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__56075__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56075,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__56075);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56075__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__56075__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e56076){var cause = e56076;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__56081 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__56084 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__56084__$1 = (((((!((map__56084 == null))))?(((((map__56084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56084):map__56084);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56084__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56084__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56081,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56081,(1),null);
if(cljs.core.truth_((function (){var G__56087 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__56086 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__56086.cljs$core$IFn$_invoke$arity$1 ? fexpr__56086.cljs$core$IFn$_invoke$arity$1(G__56087) : fexpr__56086.call(null,G__56087));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__56081,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__56034,_STAR_eval_fn_STAR__orig_val__56035,_STAR_cljs_ns_STAR__orig_val__56036,_STAR_checked_arrays_STAR__orig_val__56037,_STAR_cljs_static_fns_STAR__orig_val__56038,_STAR_fn_invoke_direct_STAR__orig_val__56039,_STAR_ns_STAR__orig_val__56040,_STAR_alias_map_STAR__orig_val__56041,_STAR_data_readers_STAR__orig_val__56042,resolve_symbol_orig_val__56043,_STAR_source_map_data_STAR__orig_val__56044,_STAR_compiler_STAR__temp_val__56045,_STAR_eval_fn_STAR__temp_val__56046,_STAR_cljs_ns_STAR__temp_val__56047,_STAR_checked_arrays_STAR__temp_val__56048,_STAR_cljs_static_fns_STAR__temp_val__56049,_STAR_fn_invoke_direct_STAR__temp_val__56050,_STAR_ns_STAR__temp_val__56051,_STAR_alias_map_STAR__temp_val__56052,_STAR_data_readers_STAR__temp_val__56053,resolve_symbol_temp_val__56054,_STAR_source_map_data_STAR__temp_val__56055,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56088_56667 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56089_56668 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56090_56669 = true;
var _STAR_print_fn_STAR__temp_val__56091_56670 = ((function (_STAR_print_newline_STAR__orig_val__56088_56667,_STAR_print_fn_STAR__orig_val__56089_56668,_STAR_print_newline_STAR__temp_val__56090_56669,sb__4661__auto__,ns_name,sb,ast,vec__56081,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__56034,_STAR_eval_fn_STAR__orig_val__56035,_STAR_cljs_ns_STAR__orig_val__56036,_STAR_checked_arrays_STAR__orig_val__56037,_STAR_cljs_static_fns_STAR__orig_val__56038,_STAR_fn_invoke_direct_STAR__orig_val__56039,_STAR_ns_STAR__orig_val__56040,_STAR_alias_map_STAR__orig_val__56041,_STAR_data_readers_STAR__orig_val__56042,resolve_symbol_orig_val__56043,_STAR_source_map_data_STAR__orig_val__56044,_STAR_compiler_STAR__temp_val__56045,_STAR_eval_fn_STAR__temp_val__56046,_STAR_cljs_ns_STAR__temp_val__56047,_STAR_checked_arrays_STAR__temp_val__56048,_STAR_cljs_static_fns_STAR__temp_val__56049,_STAR_fn_invoke_direct_STAR__temp_val__56050,_STAR_ns_STAR__temp_val__56051,_STAR_alias_map_STAR__temp_val__56052,_STAR_data_readers_STAR__temp_val__56053,resolve_symbol_temp_val__56054,_STAR_source_map_data_STAR__temp_val__56055,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__56088_56667,_STAR_print_fn_STAR__orig_val__56089_56668,_STAR_print_newline_STAR__temp_val__56090_56669,sb__4661__auto__,ns_name,sb,ast,vec__56081,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__56034,_STAR_eval_fn_STAR__orig_val__56035,_STAR_cljs_ns_STAR__orig_val__56036,_STAR_checked_arrays_STAR__orig_val__56037,_STAR_cljs_static_fns_STAR__orig_val__56038,_STAR_fn_invoke_direct_STAR__orig_val__56039,_STAR_ns_STAR__orig_val__56040,_STAR_alias_map_STAR__orig_val__56041,_STAR_data_readers_STAR__orig_val__56042,resolve_symbol_orig_val__56043,_STAR_source_map_data_STAR__orig_val__56044,_STAR_compiler_STAR__temp_val__56045,_STAR_eval_fn_STAR__temp_val__56046,_STAR_cljs_ns_STAR__temp_val__56047,_STAR_checked_arrays_STAR__temp_val__56048,_STAR_cljs_static_fns_STAR__temp_val__56049,_STAR_fn_invoke_direct_STAR__temp_val__56050,_STAR_ns_STAR__temp_val__56051,_STAR_alias_map_STAR__temp_val__56052,_STAR_data_readers_STAR__temp_val__56053,resolve_symbol_temp_val__56054,_STAR_source_map_data_STAR__temp_val__56055,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56090_56669;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56091_56670;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56089_56668;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56088_56667;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

var G__56092 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__56092) : cb.call(null,G__56092));
}
});})(ast,vec__56081,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__56034,_STAR_eval_fn_STAR__orig_val__56035,_STAR_cljs_ns_STAR__orig_val__56036,_STAR_checked_arrays_STAR__orig_val__56037,_STAR_cljs_static_fns_STAR__orig_val__56038,_STAR_fn_invoke_direct_STAR__orig_val__56039,_STAR_ns_STAR__orig_val__56040,_STAR_alias_map_STAR__orig_val__56041,_STAR_data_readers_STAR__orig_val__56042,resolve_symbol_orig_val__56043,_STAR_source_map_data_STAR__orig_val__56044,_STAR_compiler_STAR__temp_val__56045,_STAR_eval_fn_STAR__temp_val__56046,_STAR_cljs_ns_STAR__temp_val__56047,_STAR_checked_arrays_STAR__temp_val__56048,_STAR_cljs_static_fns_STAR__temp_val__56049,_STAR_fn_invoke_direct_STAR__temp_val__56050,_STAR_ns_STAR__temp_val__56051,_STAR_alias_map_STAR__temp_val__56052,_STAR_data_readers_STAR__temp_val__56053,resolve_symbol_temp_val__56054,_STAR_source_map_data_STAR__temp_val__56055,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56093_56678 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56094_56679 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56095_56680 = true;
var _STAR_print_fn_STAR__temp_val__56096_56681 = ((function (_STAR_print_newline_STAR__orig_val__56093_56678,_STAR_print_fn_STAR__orig_val__56094_56679,_STAR_print_newline_STAR__temp_val__56095_56680,sb__4661__auto__,ast,vec__56081,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__56034,_STAR_eval_fn_STAR__orig_val__56035,_STAR_cljs_ns_STAR__orig_val__56036,_STAR_checked_arrays_STAR__orig_val__56037,_STAR_cljs_static_fns_STAR__orig_val__56038,_STAR_fn_invoke_direct_STAR__orig_val__56039,_STAR_ns_STAR__orig_val__56040,_STAR_alias_map_STAR__orig_val__56041,_STAR_data_readers_STAR__orig_val__56042,resolve_symbol_orig_val__56043,_STAR_source_map_data_STAR__orig_val__56044,_STAR_compiler_STAR__temp_val__56045,_STAR_eval_fn_STAR__temp_val__56046,_STAR_cljs_ns_STAR__temp_val__56047,_STAR_checked_arrays_STAR__temp_val__56048,_STAR_cljs_static_fns_STAR__temp_val__56049,_STAR_fn_invoke_direct_STAR__temp_val__56050,_STAR_ns_STAR__temp_val__56051,_STAR_alias_map_STAR__temp_val__56052,_STAR_data_readers_STAR__temp_val__56053,resolve_symbol_temp_val__56054,_STAR_source_map_data_STAR__temp_val__56055,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__56093_56678,_STAR_print_fn_STAR__orig_val__56094_56679,_STAR_print_newline_STAR__temp_val__56095_56680,sb__4661__auto__,ast,vec__56081,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__56034,_STAR_eval_fn_STAR__orig_val__56035,_STAR_cljs_ns_STAR__orig_val__56036,_STAR_checked_arrays_STAR__orig_val__56037,_STAR_cljs_static_fns_STAR__orig_val__56038,_STAR_fn_invoke_direct_STAR__orig_val__56039,_STAR_ns_STAR__orig_val__56040,_STAR_alias_map_STAR__orig_val__56041,_STAR_data_readers_STAR__orig_val__56042,resolve_symbol_orig_val__56043,_STAR_source_map_data_STAR__orig_val__56044,_STAR_compiler_STAR__temp_val__56045,_STAR_eval_fn_STAR__temp_val__56046,_STAR_cljs_ns_STAR__temp_val__56047,_STAR_checked_arrays_STAR__temp_val__56048,_STAR_cljs_static_fns_STAR__temp_val__56049,_STAR_fn_invoke_direct_STAR__temp_val__56050,_STAR_ns_STAR__temp_val__56051,_STAR_alias_map_STAR__temp_val__56052,_STAR_data_readers_STAR__temp_val__56053,resolve_symbol_temp_val__56054,_STAR_source_map_data_STAR__temp_val__56055,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56095_56680;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56096_56681;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56094_56679;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56093_56678;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var G__56097 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__56097) : cb.call(null,G__56097));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__56044;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__56043;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__56042;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__56041;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__56040;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__56039;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__56038;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__56037;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__56036;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__56035;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__56034;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__56099 = arguments.length;
switch (G__56099) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__56108 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56108,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__56108;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__56109 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__56110 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__56111 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__56112 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__56113 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__56114 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__56115 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__56116 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__56117 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__56118 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__56119 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__56120 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__56121 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__56122 = ns;
var _STAR_checked_arrays_STAR__temp_val__56123 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__56124 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__56125 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__56126 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__56127 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__56128 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__56129 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__56130 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__56120;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__56121;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__56122;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__56123;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__56124;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__56125;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__56126;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__56127;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__56128;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__56129;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__56130;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e56137){var cause = e56137;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__56138 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__56138__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56138,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__56138);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56138__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__56138__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e56139){var cause = e56139;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__56141 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__56147 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__56147__$1 = (((((!((map__56147 == null))))?(((((map__56147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56147):map__56147);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56141,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56141,(1),null);
if(cljs.core.truth_((function (){var G__56150 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__56149 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__56149.cljs$core$IFn$_invoke$arity$1 ? fexpr__56149.cljs$core$IFn$_invoke$arity$1(G__56150) : fexpr__56149.call(null,G__56150));
})())){
var G__56152 = bound_vars__$1;
var G__56153 = aenv__$1;
var G__56154 = ast__$1;
var G__56155 = opts;
var G__56156 = ((function (G__56152,G__56153,G__56154,G__56155,ast,vec__56141,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56109,_STAR_eval_fn_STAR__orig_val__56110,_STAR_cljs_ns_STAR__orig_val__56111,_STAR_checked_arrays_STAR__orig_val__56112,_STAR_cljs_static_fns_STAR__orig_val__56113,_STAR_fn_invoke_direct_STAR__orig_val__56114,_STAR_ns_STAR__orig_val__56115,_STAR_alias_map_STAR__orig_val__56116,_STAR_data_readers_STAR__orig_val__56117,resolve_symbol_orig_val__56118,_STAR_source_map_data_STAR__orig_val__56119,_STAR_compiler_STAR__temp_val__56120,_STAR_eval_fn_STAR__temp_val__56121,_STAR_cljs_ns_STAR__temp_val__56122,_STAR_checked_arrays_STAR__temp_val__56123,_STAR_cljs_static_fns_STAR__temp_val__56124,_STAR_fn_invoke_direct_STAR__temp_val__56125,_STAR_ns_STAR__temp_val__56126,_STAR_alias_map_STAR__temp_val__56127,_STAR_data_readers_STAR__temp_val__56128,resolve_symbol_temp_val__56129,_STAR_source_map_data_STAR__temp_val__56130,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56157_56697 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56158_56698 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56159_56699 = true;
var _STAR_print_fn_STAR__temp_val__56160_56700 = ((function (_STAR_print_newline_STAR__orig_val__56157_56697,_STAR_print_fn_STAR__orig_val__56158_56698,_STAR_print_newline_STAR__temp_val__56159_56699,sb__4661__auto__,ns_name,G__56152,G__56153,G__56154,G__56155,ast,vec__56141,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56109,_STAR_eval_fn_STAR__orig_val__56110,_STAR_cljs_ns_STAR__orig_val__56111,_STAR_checked_arrays_STAR__orig_val__56112,_STAR_cljs_static_fns_STAR__orig_val__56113,_STAR_fn_invoke_direct_STAR__orig_val__56114,_STAR_ns_STAR__orig_val__56115,_STAR_alias_map_STAR__orig_val__56116,_STAR_data_readers_STAR__orig_val__56117,resolve_symbol_orig_val__56118,_STAR_source_map_data_STAR__orig_val__56119,_STAR_compiler_STAR__temp_val__56120,_STAR_eval_fn_STAR__temp_val__56121,_STAR_cljs_ns_STAR__temp_val__56122,_STAR_checked_arrays_STAR__temp_val__56123,_STAR_cljs_static_fns_STAR__temp_val__56124,_STAR_fn_invoke_direct_STAR__temp_val__56125,_STAR_ns_STAR__temp_val__56126,_STAR_alias_map_STAR__temp_val__56127,_STAR_data_readers_STAR__temp_val__56128,resolve_symbol_temp_val__56129,_STAR_source_map_data_STAR__temp_val__56130,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__56157_56697,_STAR_print_fn_STAR__orig_val__56158_56698,_STAR_print_newline_STAR__temp_val__56159_56699,sb__4661__auto__,ns_name,G__56152,G__56153,G__56154,G__56155,ast,vec__56141,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56109,_STAR_eval_fn_STAR__orig_val__56110,_STAR_cljs_ns_STAR__orig_val__56111,_STAR_checked_arrays_STAR__orig_val__56112,_STAR_cljs_static_fns_STAR__orig_val__56113,_STAR_fn_invoke_direct_STAR__orig_val__56114,_STAR_ns_STAR__orig_val__56115,_STAR_alias_map_STAR__orig_val__56116,_STAR_data_readers_STAR__orig_val__56117,resolve_symbol_orig_val__56118,_STAR_source_map_data_STAR__orig_val__56119,_STAR_compiler_STAR__temp_val__56120,_STAR_eval_fn_STAR__temp_val__56121,_STAR_cljs_ns_STAR__temp_val__56122,_STAR_checked_arrays_STAR__temp_val__56123,_STAR_cljs_static_fns_STAR__temp_val__56124,_STAR_fn_invoke_direct_STAR__temp_val__56125,_STAR_ns_STAR__temp_val__56126,_STAR_alias_map_STAR__temp_val__56127,_STAR_data_readers_STAR__temp_val__56128,resolve_symbol_temp_val__56129,_STAR_source_map_data_STAR__temp_val__56130,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56159_56699;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56160_56700;

try{cljs.compiler.emit(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56158_56698;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56157_56697;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$compile_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1)], 0));
}
});})(G__56152,G__56153,G__56154,G__56155,ast,vec__56141,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56109,_STAR_eval_fn_STAR__orig_val__56110,_STAR_cljs_ns_STAR__orig_val__56111,_STAR_checked_arrays_STAR__orig_val__56112,_STAR_cljs_static_fns_STAR__orig_val__56113,_STAR_fn_invoke_direct_STAR__orig_val__56114,_STAR_ns_STAR__orig_val__56115,_STAR_alias_map_STAR__orig_val__56116,_STAR_data_readers_STAR__orig_val__56117,resolve_symbol_orig_val__56118,_STAR_source_map_data_STAR__orig_val__56119,_STAR_compiler_STAR__temp_val__56120,_STAR_eval_fn_STAR__temp_val__56121,_STAR_cljs_ns_STAR__temp_val__56122,_STAR_checked_arrays_STAR__temp_val__56123,_STAR_cljs_static_fns_STAR__temp_val__56124,_STAR_fn_invoke_direct_STAR__temp_val__56125,_STAR_ns_STAR__temp_val__56126,_STAR_alias_map_STAR__temp_val__56127,_STAR_data_readers_STAR__temp_val__56128,resolve_symbol_temp_val__56129,_STAR_source_map_data_STAR__temp_val__56130,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
var fexpr__56151 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__56151.cljs$core$IFn$_invoke$arity$5 ? fexpr__56151.cljs$core$IFn$_invoke$arity$5(G__56152,G__56153,G__56154,G__56155,G__56156) : fexpr__56151.call(null,G__56152,G__56153,G__56154,G__56155,G__56156));
} else {
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56162_56708 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56163_56709 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56164_56710 = true;
var _STAR_print_fn_STAR__temp_val__56165_56711 = ((function (_STAR_print_newline_STAR__orig_val__56162_56708,_STAR_print_fn_STAR__orig_val__56163_56709,_STAR_print_newline_STAR__temp_val__56164_56710,sb__4661__auto__,ast,vec__56141,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56109,_STAR_eval_fn_STAR__orig_val__56110,_STAR_cljs_ns_STAR__orig_val__56111,_STAR_checked_arrays_STAR__orig_val__56112,_STAR_cljs_static_fns_STAR__orig_val__56113,_STAR_fn_invoke_direct_STAR__orig_val__56114,_STAR_ns_STAR__orig_val__56115,_STAR_alias_map_STAR__orig_val__56116,_STAR_data_readers_STAR__orig_val__56117,resolve_symbol_orig_val__56118,_STAR_source_map_data_STAR__orig_val__56119,_STAR_compiler_STAR__temp_val__56120,_STAR_eval_fn_STAR__temp_val__56121,_STAR_cljs_ns_STAR__temp_val__56122,_STAR_checked_arrays_STAR__temp_val__56123,_STAR_cljs_static_fns_STAR__temp_val__56124,_STAR_fn_invoke_direct_STAR__temp_val__56125,_STAR_ns_STAR__temp_val__56126,_STAR_alias_map_STAR__temp_val__56127,_STAR_data_readers_STAR__temp_val__56128,resolve_symbol_temp_val__56129,_STAR_source_map_data_STAR__temp_val__56130,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__56162_56708,_STAR_print_fn_STAR__orig_val__56163_56709,_STAR_print_newline_STAR__temp_val__56164_56710,sb__4661__auto__,ast,vec__56141,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56109,_STAR_eval_fn_STAR__orig_val__56110,_STAR_cljs_ns_STAR__orig_val__56111,_STAR_checked_arrays_STAR__orig_val__56112,_STAR_cljs_static_fns_STAR__orig_val__56113,_STAR_fn_invoke_direct_STAR__orig_val__56114,_STAR_ns_STAR__orig_val__56115,_STAR_alias_map_STAR__orig_val__56116,_STAR_data_readers_STAR__orig_val__56117,resolve_symbol_orig_val__56118,_STAR_source_map_data_STAR__orig_val__56119,_STAR_compiler_STAR__temp_val__56120,_STAR_eval_fn_STAR__temp_val__56121,_STAR_cljs_ns_STAR__temp_val__56122,_STAR_checked_arrays_STAR__temp_val__56123,_STAR_cljs_static_fns_STAR__temp_val__56124,_STAR_fn_invoke_direct_STAR__temp_val__56125,_STAR_ns_STAR__temp_val__56126,_STAR_alias_map_STAR__temp_val__56127,_STAR_data_readers_STAR__temp_val__56128,resolve_symbol_temp_val__56129,_STAR_source_map_data_STAR__temp_val__56130,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56164_56710;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56165_56711;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56163_56709;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56162_56708;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

return ((function (ast,vec__56141,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56109,_STAR_eval_fn_STAR__orig_val__56110,_STAR_cljs_ns_STAR__orig_val__56111,_STAR_checked_arrays_STAR__orig_val__56112,_STAR_cljs_static_fns_STAR__orig_val__56113,_STAR_fn_invoke_direct_STAR__orig_val__56114,_STAR_ns_STAR__orig_val__56115,_STAR_alias_map_STAR__orig_val__56116,_STAR_data_readers_STAR__orig_val__56117,resolve_symbol_orig_val__56118,_STAR_source_map_data_STAR__orig_val__56119,_STAR_compiler_STAR__temp_val__56120,_STAR_eval_fn_STAR__temp_val__56121,_STAR_cljs_ns_STAR__temp_val__56122,_STAR_checked_arrays_STAR__temp_val__56123,_STAR_cljs_static_fns_STAR__temp_val__56124,_STAR_fn_invoke_direct_STAR__temp_val__56125,_STAR_ns_STAR__temp_val__56126,_STAR_alias_map_STAR__temp_val__56127,_STAR_data_readers_STAR__temp_val__56128,resolve_symbol_temp_val__56129,_STAR_source_map_data_STAR__temp_val__56130,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop(ns);
});
;})(ast,vec__56141,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56109,_STAR_eval_fn_STAR__orig_val__56110,_STAR_cljs_ns_STAR__orig_val__56111,_STAR_checked_arrays_STAR__orig_val__56112,_STAR_cljs_static_fns_STAR__orig_val__56113,_STAR_fn_invoke_direct_STAR__orig_val__56114,_STAR_ns_STAR__orig_val__56115,_STAR_alias_map_STAR__orig_val__56116,_STAR_data_readers_STAR__orig_val__56117,resolve_symbol_orig_val__56118,_STAR_source_map_data_STAR__orig_val__56119,_STAR_compiler_STAR__temp_val__56120,_STAR_eval_fn_STAR__temp_val__56121,_STAR_cljs_ns_STAR__temp_val__56122,_STAR_checked_arrays_STAR__temp_val__56123,_STAR_cljs_static_fns_STAR__temp_val__56124,_STAR_fn_invoke_direct_STAR__temp_val__56125,_STAR_ns_STAR__temp_val__56126,_STAR_alias_map_STAR__temp_val__56127,_STAR_data_readers_STAR__temp_val__56128,resolve_symbol_temp_val__56129,_STAR_source_map_data_STAR__temp_val__56130,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__56170 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__56170) : cb__$1.call(null,G__56170));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__56119;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__56118;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__56117;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__56116;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__56115;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__56114;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__56113;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__56112;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__56111;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__56110;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__56109;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_ns], 0));
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source - used as key in :source-maps
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__56172 = arguments.length;
switch (G__56172) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){





return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__56229 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56229,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__56229;
}
})();
var aname = (function (){var G__56234 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__56234);
} else {
return G__56234;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

cljs.js.clear_fns_BANG_();

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__56240 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__56241 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__56242 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__56243 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__56244 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__56245 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__56246 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__56247 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__56248 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__56249 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__56250 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__56251 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__56252 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__56253 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__56254 = ns;
var _STAR_checked_arrays_STAR__temp_val__56255 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__56256 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__56257 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__56258 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__56259 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__56260 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__56261 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__56262 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__56263 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__56252;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__56253;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__56254;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__56255;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__56256;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__56257;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__56258;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__56259;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__56260;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__56261;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__56262;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__56263;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e56278){var cause = e56278;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__56283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__56283__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56283,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__56283);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56283__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__56283__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e56286){var cause = e56286;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__56291 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__56294 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__56294__$1 = (((((!((map__56294 == null))))?(((((map__56294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56294):map__56294);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56291,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56291,(1),null);
if(cljs.core.truth_((function (){var G__56303 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__56302 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__56302.cljs$core$IFn$_invoke$arity$1 ? fexpr__56302.cljs$core$IFn$_invoke$arity$1(G__56303) : fexpr__56302.call(null,G__56303));
})())){
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56304_56720 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56305_56721 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56306_56722 = true;
var _STAR_print_fn_STAR__temp_val__56307_56723 = ((function (_STAR_print_newline_STAR__orig_val__56304_56720,_STAR_print_fn_STAR__orig_val__56305_56721,_STAR_print_newline_STAR__temp_val__56306_56722,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__56291,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__56304_56720,_STAR_print_fn_STAR__orig_val__56305_56721,_STAR_print_newline_STAR__temp_val__56306_56722,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__56291,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56306_56722;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56307_56723;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56305_56721;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56304_56720;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

var G__56309 = true;
var G__56310 = bound_vars__$1;
var G__56311 = aenv__$1;
var G__56312 = ast__$1;
var G__56313 = opts;
var G__56314 = ((function (G__56309,G__56310,G__56311,G__56312,G__56313,ast,ns_SINGLEQUOTE_,vec__56291,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$eval_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_SINGLEQUOTE_], 0));
}
});})(G__56309,G__56310,G__56311,G__56312,G__56313,ast,ns_SINGLEQUOTE_,vec__56291,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var fexpr__56308 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__56308.cljs$core$IFn$_invoke$arity$6 ? fexpr__56308.cljs$core$IFn$_invoke$arity$6(G__56309,G__56310,G__56311,G__56312,G__56313,G__56314) : fexpr__56308.call(null,G__56309,G__56310,G__56311,G__56312,G__56313,G__56314));
} else {
var env__24290__auto___56733 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__24290__auto___56734__$1 = ((cljs.core.map_QMARK_(env__24290__auto___56733))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__24290__auto___56733):(((((env__24290__auto___56733 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__24290__auto___56733)))))?env__24290__auto___56733:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__24290__auto___56733))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__56340_56735 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__56341_56736 = env__24290__auto___56734__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__56341_56736;

try{sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56346_56737 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56347_56738 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56348_56739 = true;
var _STAR_print_fn_STAR__temp_val__56349_56740 = ((function (_STAR_print_newline_STAR__orig_val__56346_56737,_STAR_print_fn_STAR__orig_val__56347_56738,_STAR_print_newline_STAR__temp_val__56348_56739,sb__4661__auto__,_STAR_compiler_STAR__orig_val__56340_56735,_STAR_compiler_STAR__temp_val__56341_56736,env__24290__auto___56733,env__24290__auto___56734__$1,ast,ns_SINGLEQUOTE_,vec__56291,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__56346_56737,_STAR_print_fn_STAR__orig_val__56347_56738,_STAR_print_newline_STAR__temp_val__56348_56739,sb__4661__auto__,_STAR_compiler_STAR__orig_val__56340_56735,_STAR_compiler_STAR__temp_val__56341_56736,env__24290__auto___56733,env__24290__auto___56734__$1,ast,ns_SINGLEQUOTE_,vec__56291,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56348_56739;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56349_56740;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56347_56738;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56346_56737;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__56340_56735;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__56291,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__56291,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs(aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),aname], null))], null);
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e56374){var cause = e56374;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__56240,_STAR_eval_fn_STAR__orig_val__56241,_STAR_cljs_ns_STAR__orig_val__56242,_STAR_checked_arrays_STAR__orig_val__56243,_STAR_cljs_static_fns_STAR__orig_val__56244,_STAR_fn_invoke_direct_STAR__orig_val__56245,_STAR_ns_STAR__orig_val__56246,_STAR_alias_map_STAR__orig_val__56247,_STAR_data_readers_STAR__orig_val__56248,resolve_symbol_orig_val__56249,_STAR_source_map_data_STAR__orig_val__56250,_STAR_cljs_file_STAR__orig_val__56251,_STAR_compiler_STAR__temp_val__56252,_STAR_eval_fn_STAR__temp_val__56253,_STAR_cljs_ns_STAR__temp_val__56254,_STAR_checked_arrays_STAR__temp_val__56255,_STAR_cljs_static_fns_STAR__temp_val__56256,_STAR_fn_invoke_direct_STAR__temp_val__56257,_STAR_ns_STAR__temp_val__56258,_STAR_alias_map_STAR__temp_val__56259,_STAR_data_readers_STAR__temp_val__56260,resolve_symbol_temp_val__56261,_STAR_source_map_data_STAR__temp_val__56262,_STAR_cljs_file_STAR__temp_val__56263,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5733__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
var fexpr__56390 = cljs.js.trampoline_safe(f);
return (fexpr__56390.cljs$core$IFn$_invoke$arity$2 ? fexpr__56390.cljs$core$IFn$_invoke$arity$2(evalm,complete) : fexpr__56390.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__56251;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__56250;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__56249;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__56248;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__56247;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__56246;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__56245;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__56244;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__56243;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__56242;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__56241;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__56240;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)], 0));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source - used as key in :source-maps
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__56405 = arguments.length;
switch (G__56405) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){





return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_index !== 'undefined')){
} else {
cljs.js.fn_index = cljs.core.volatile_BANG_((0));
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_refs !== 'undefined')){
} else {
cljs.js.fn_refs = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Clears saved functions.
 */
cljs.js.clear_fns_BANG_ = (function cljs$js$clear_fns_BANG_(){
return cljs.core.vreset_BANG_(cljs.js.fn_refs,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Saves a function, returning a numeric representation.
 */
cljs.js.put_fn = (function cljs$js$put_fn(f){
var n = cljs.js.fn_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(cljs.js.fn_index.cljs$core$IDeref$_deref$arity$1(null) + (1)));
cljs.js.fn_refs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.js.fn_refs.cljs$core$IDeref$_deref$arity$1(null),n,f));

return n;
});
/**
 * Gets a function, given its numeric representation.
 */
cljs.js.get_fn = (function cljs$js$get_fn(n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.js.fn_refs),n);
});
cljs.js.emit_fn = (function cljs$js$emit_fn(f){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.js.get_fn(",cljs.js.put_fn(f),")"], 0));
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Function,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Var,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.js.eval_impl = (function cljs$js$eval_impl(var_args){
var G__56478 = arguments.length;
switch (G__56478) {
case 1:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2(form,cljs.core._STAR_ns_STAR_.name);
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var st_56759 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(st_56759,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (st_56759,result){
return (function (p__56479){
var map__56480 = p__56479;
var map__56480__$1 = (((((!((map__56480 == null))))?(((((map__56480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56480):map__56480);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56480__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56480__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_(result,value);
}
});})(st_56759,result))
);

return cljs.core.deref(result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;
