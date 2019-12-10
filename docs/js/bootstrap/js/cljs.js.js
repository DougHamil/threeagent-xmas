goog.provide('cljs.js');
goog.provide("cljs.core$macros");
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33637 = arguments.length;
var i__4731__auto___33638 = (0);
while(true){
if((i__4731__auto___33638 < len__4730__auto___33637)){
args__4736__auto__.push((arguments[i__4731__auto___33638]));

var G__33639 = (i__4731__auto___33638 + (1));
i__4731__auto___33638 = G__33639;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__32177 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__32178 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32178;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32177;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq32169){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32169));
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
var _STAR_ns_STAR__orig_val__32213 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__32214 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__32214;

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__32213;
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
cljs.js.js_eval = (function cljs$js$js_eval(p__32271){
var map__32272 = p__32271;
var map__32272__$1 = (((((!((map__32272 == null))))?(((((map__32272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32272):map__32272);
var resource = map__32272__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32272__$1,new cljs.core.Keyword(null,"source","source",-433931539));
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
var G__32280 = arguments.length;
switch (G__32280) {
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
var G__32292 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__32292,((function (G__32292){
return (function (state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),cljs.core.PersistentHashMap.EMPTY);
});})(G__32292))
);

return G__32292;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__32305 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__32305,init);

return G__32305;
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
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__32315){
var map__32316 = p__32315;
var map__32316__$1 = (((((!((map__32316 == null))))?(((((map__32316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32316):map__32316);
var opts = map__32316__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32316__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32316__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var source_map_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32316__$1,new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633));
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__32321 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace(G__32321,".","/");
} else {
return G__32321;
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
var src = (function (){var G__32323 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__32323__$1 = ((source_map_timestamp === true)?[G__32323,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__32323);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__32323__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__32323__$1;
}
})();
var file = (function (){var G__32332 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__32332__$1 = ((source_map_timestamp === true)?[G__32332,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__32332);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__32332__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__32332__$1;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(mn)], null),cljs.source_map.invert_reverse_map(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",file,"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32346 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__32316,map__32316__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__32348){
var vec__32353 = p__32348;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32353,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32353,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__32316,map__32316__$1,opts,output_dir,asset_path,source_map_timestamp))
);
return goog.crypt.base64.encodeString(G__32346);
})())].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__32356){
var vec__32357 = p__32356;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32357,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32357,(1),null);
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
var G__32363 = cljs.core.first(coll);
var G__32364 = ((function (G__32363){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__32365 = proc;
var G__32366 = cljs.core.rest(coll);
var G__32367 = break_QMARK_;
var G__32368 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__32365,G__32366,G__32367,G__32368) : cljs.js.run_async_BANG_.call(null,G__32365,G__32366,G__32367,G__32368));
}
});})(G__32363))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__32363,G__32364) : proc.call(null,G__32363,G__32364));
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
return cljs.core.not((function (){var fexpr__32378 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null);
return (fexpr__32378.cljs$core$IFn$_invoke$arity$1 ? fexpr__32378.cljs$core$IFn$_invoke$arity$1(name) : fexpr__32378.call(null,name));
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
var G__32389 = arguments.length;
switch (G__32389) {
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
var aname = (function (){var G__32390 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__32390);
} else {
return G__32390;
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
try{var G__32394 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name)], null);
var G__32395 = ((function (G__32394,env,bound_vars__$1,aname){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__32398 = resource;
var map__32398__$1 = (((((!((map__32398 == null))))?(((((map__32398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32398):map__32398);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__32400 = cljs.core.keyword_identical_QMARK_;
var expr__32401 = lang;
if(cljs.core.truth_((function (){var G__32403 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__32404 = expr__32401;
return (pred__32400.cljs$core$IFn$_invoke$arity$2 ? pred__32400.cljs$core$IFn$_invoke$arity$2(G__32403,G__32404) : pred__32400.call(null,G__32403,G__32404));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__32400,expr__32401,map__32398,map__32398__$1,lang,source,cache,source_map,file,G__32394,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__32405 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32405) : cb.call(null,G__32405));
}
});})(pred__32400,expr__32401,map__32398,map__32398__$1,lang,source,cache,source_map,file,G__32394,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_((function (){var G__32406 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__32407 = expr__32401;
return (pred__32400.cljs$core$IFn$_invoke$arity$2 ? pred__32400.cljs$core$IFn$_invoke$arity$2(G__32406,G__32407) : pred__32400.call(null,G__32406,G__32407));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__32400,expr__32401,map__32398,map__32398__$1,lang,source,cache,source_map,file,G__32394,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__32400,expr__32401,map__32398,map__32398__$1,lang,source,cache,source_map,file,G__32394,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{var fexpr__32414_33690 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__32414_33690.cljs$core$IFn$_invoke$arity$1 ? fexpr__32414_33690.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__32414_33690.call(null,resource));

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
}catch (e32411){var cause = e32411;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__32415 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32415) : cb.call(null,G__32415));
}
}
});})(pred__32400,expr__32401,map__32398,map__32398__$1,lang,source,cache,source_map,file,G__32394,env,bound_vars__$1,aname))
);
}
});})(pred__32400,expr__32401,map__32398,map__32398__$1,lang,source,cache,source_map,file,G__32394,env,bound_vars__$1,aname))
);
} else {
var G__32418 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32418) : cb.call(null,G__32418));
}
}
} else {
var G__32427 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__32428 = (cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812));
var G__32429 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__32428,G__32429) : cljs.analyzer.error_message.call(null,G__32428,G__32429));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32427) : cb.call(null,G__32427));
}
});})(G__32394,env,bound_vars__$1,aname))
;
var fexpr__32393 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__32393.cljs$core$IFn$_invoke$arity$2 ? fexpr__32393.cljs$core$IFn$_invoke$arity$2(G__32394,G__32395) : fexpr__32393.call(null,G__32394,G__32395));
}catch (e32391){var cause = e32391;
var G__32392 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32392) : cb.call(null,G__32392));
}} else {
var G__32437 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32437) : cb.call(null,G__32437));
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
return (function (acc,p__32460){
var vec__32461 = p__32460;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32461,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32461,(1),null);
var entry = vec__32461;
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
var G__32473 = arguments.length;
switch (G__32473) {
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

var _STAR_cljs_dep_set_STAR__orig_val__32481 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__32482 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__32482;

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32481,_STAR_cljs_dep_set_STAR__temp_val__32482){
return (function (p1__32468_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__32468_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32481,_STAR_cljs_dep_set_STAR__temp_val__32482))
,deps)))){
var G__32483 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32483) : cb.call(null,G__32483));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32481,_STAR_cljs_dep_set_STAR__temp_val__32482){
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
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32481,_STAR_cljs_dep_set_STAR__temp_val__32482){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32481,_STAR_cljs_dep_set_STAR__temp_val__32482){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__32487 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32487) : cb.call(null,G__32487));
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32481,_STAR_cljs_dep_set_STAR__temp_val__32482))
);
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32481,_STAR_cljs_dep_set_STAR__temp_val__32482))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32481,_STAR_cljs_dep_set_STAR__temp_val__32482))
);
} else {
var G__32488 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32488) : cb.call(null,G__32488));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__32481;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__32506 = arguments.length;
switch (G__32506) {
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
var _STAR_cljs_dep_set_STAR__orig_val__32523 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__32524 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__32524;

try{var compiler = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32523,_STAR_cljs_dep_set_STAR__temp_val__32524){
return (function (p1__32490_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__32490_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32523,_STAR_cljs_dep_set_STAR__temp_val__32524))
,deps)))){
var G__32530 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32530) : cb.call(null,G__32530));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__32551 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(dep)], null);
var G__32552 = ((function (G__32551,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32523,_STAR_cljs_dep_set_STAR__temp_val__32524){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not(resource)){
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,((function (cljs_dep,temp__5733__auto__,G__32551,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32523,_STAR_cljs_dep_set_STAR__temp_val__32524){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__32567 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32567) : cb.call(null,G__32567));
}
});})(cljs_dep,temp__5733__auto__,G__32551,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32523,_STAR_cljs_dep_set_STAR__temp_val__32524))
);
} else {
var G__32574 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__32575 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__32576 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__32575,G__32576) : cljs.analyzer.error_message.call(null,G__32575,G__32576));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32574) : cb.call(null,G__32574));
}
} else {
var map__32582 = resource;
var map__32582__$1 = (((((!((map__32582 == null))))?(((((map__32582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32582):map__32582);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32582__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32582__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32582__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__32588 = cljs.core.keyword_identical_QMARK_;
var expr__32589 = lang;
if(cljs.core.truth_((function (){var G__32591 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__32592 = expr__32589;
return (pred__32588.cljs$core$IFn$_invoke$arity$2 ? pred__32588.cljs$core$IFn$_invoke$arity$2(G__32591,G__32592) : pred__32588.call(null,G__32591,G__32592));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__32588,expr__32589,map__32582,map__32582__$1,name,lang,source,file,G__32551,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32523,_STAR_cljs_dep_set_STAR__temp_val__32524){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(pred__32588,expr__32589,map__32582,map__32582__$1,name,lang,source,file,G__32551,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32523,_STAR_cljs_dep_set_STAR__temp_val__32524))
);
} else {
if(cljs.core.truth_((function (){var G__32593 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__32594 = expr__32589;
return (pred__32588.cljs$core$IFn$_invoke$arity$2 ? pred__32588.cljs$core$IFn$_invoke$arity$2(G__32593,G__32594) : pred__32588.call(null,G__32593,G__32594));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(G__32551,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__32523,_STAR_cljs_dep_set_STAR__temp_val__32524))
;
var fexpr__32550 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__32550.cljs$core$IFn$_invoke$arity$2 ? fexpr__32550.cljs$core$IFn$_invoke$arity$2(G__32551,G__32552) : fexpr__32550.call(null,G__32551,G__32552));
}catch (e32548){var cause = e32548;
var G__32549 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32549) : cb.call(null,G__32549));
}} else {
var G__32599 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32599) : cb.call(null,G__32599));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__32523;
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
var G__32612 = bound_vars;
var G__32613 = k__$1;
var G__32614 = cljs.core.next(macros);
var G__32615 = lib;
var G__32616 = reload;
var G__32617 = reloads;
var G__32618 = opts;
var G__32619 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__32612,G__32613,G__32614,G__32615,G__32616,G__32617,G__32618,G__32619) : cljs.js.load_macros.call(null,G__32612,G__32613,G__32614,G__32615,G__32616,G__32617,G__32618,G__32619));
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

var G__32622 = bound_vars;
var G__32623 = k__$1;
var G__32624 = cljs.core.next(macros);
var G__32625 = lib;
var G__32626 = reload;
var G__32627 = reloads;
var G__32628 = opts;
var G__32629 = ((function (G__32622,G__32623,G__32624,G__32625,G__32626,G__32627,G__32628,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__32630 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32630) : cb.call(null,G__32630));
}
});})(G__32622,G__32623,G__32624,G__32625,G__32626,G__32627,G__32628,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__32622,G__32623,G__32624,G__32625,G__32626,G__32627,G__32628,G__32629) : cljs.js.load_macros.call(null,G__32622,G__32623,G__32624,G__32625,G__32626,G__32627,G__32628,G__32629));
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
var G__32631 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32631) : cb.call(null,G__32631));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__32639 = arguments.length;
switch (G__32639) {
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
var vec__32640 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32640,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32640,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32640,(2),null);
var rewrite_renames = ((function (vec__32640,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__32640,uk,rk,renk){
return (function (acc,p__32648){
var vec__32650 = p__32648;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32650,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32650,(1),null);
var entry = vec__32650;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if((!((to == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__32640,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__32640,uk,rk,renk))
;
var rewrite_deps = ((function (vec__32640,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (vec__32640,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5733__auto__)){
var new_dep = temp__5733__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__32640,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__32640,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__32640,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__32636_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__32636_SHARP_);
});})(vec__32640,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__32640,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__32637_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__32637_SHARP_)], 0));
});})(vec__32640,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__32673,cenv){
var map__32674 = p__32673;
var map__32674__$1 = (((((!((map__32674 == null))))?(((((map__32674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32674):map__32674);
var ast = map__32674__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32674__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32674__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__32674,map__32674__$1,ast,requires,name){
return (function (p__32689){
var vec__32694 = p__32689;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32694,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32694,(1),null);
var map__32697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__32697__$1 = (((((!((map__32697 == null))))?(((((map__32697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32697):map__32697);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32697__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32697__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4131__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__32674,map__32674__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__32707 = arguments.length;
switch (G__32707) {
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

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__32712,opts,cb){
var map__32713 = p__32712;
var map__32713__$1 = (((((!((map__32713 == null))))?(((((map__32713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32713):map__32713);
var ast = map__32713__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32713__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__32715 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__32715.cljs$core$IFn$_invoke$arity$1 ? fexpr__32715.cljs$core$IFn$_invoke$arity$1(op) : fexpr__32715.call(null,op));
})())){
var check_uses_and_load_macros = ((function (map__32713,map__32713__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__32793 = rewritten_ast;
var map__32793__$1 = (((((!((map__32793 == null))))?(((((map__32793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32793):map__32793);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32793__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32793__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32793__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32793__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__32793,map__32793__$1,uses,use_macros,reload,reloads,name,map__32713,map__32713__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var map__32819 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__32819__$1 = (((((!((map__32819 == null))))?(((((map__32819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32819):map__32819);
var rewritten_ast__$1 = map__32819__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32819__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__32819,map__32819__$1,rewritten_ast__$1,require_macros,env,map__32793,map__32793__$1,uses,use_macros,reload,reloads,name,map__32713,map__32713__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb.call(null,res_SINGLEQUOTE_));
} else {
var map__32822 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__32822__$1 = (((((!((map__32822 == null))))?(((((map__32822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32822):map__32822);
var rewritten_ast__$2 = map__32822__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32822__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__32833_33718 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__32834_33719 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__32835_33720 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__32836_33721 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__32835_33720;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__32836_33721;

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__32834_33719;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__32833_33718;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e32832){var cause = e32832;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb.call(null,res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR__orig_val__32843 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__32844 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__32845 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__32846 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__32845;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__32846;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__32848 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32848) : cb.call(null,G__32848));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__32844;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__32843;
}}catch (e32841){var cause = e32841;
var G__32842 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32842) : cb.call(null,G__32842));
}}
}
});})(map__32819,map__32819__$1,rewritten_ast__$1,require_macros,env,map__32793,map__32793__$1,uses,use_macros,reload,reloads,name,map__32713,map__32713__$1,ast,op))
);
}
});})(env,map__32793,map__32793__$1,uses,use_macros,reload,reloads,name,map__32713,map__32713__$1,ast,op))
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

var G__32851 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32851) : cb.call(null,G__32851));
}catch (e32849){var cause = e32849;
var G__32850 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32850) : cb.call(null,G__32850));
}}
}
});})(map__32713,map__32713__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4120__auto__ = load;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})())){
var map__32852 = ast;
var map__32852__$1 = (((((!((map__32852 == null))))?(((((map__32852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32852):map__32852);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32852__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32852__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32852__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__32852,map__32852__$1,reload,name,deps,map__32713,map__32713__$1,ast,op){
return (function (p1__32704_SHARP_){
return check_uses_and_load_macros(p1__32704_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__32704_SHARP_)));
});})(map__32852,map__32852__$1,reload,name,deps,map__32713,map__32713__$1,ast,op))
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
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__32713,map__32713__$1,ast,op){
return (function (p1__32705_SHARP_){
return check_uses_and_load_macros(p1__32705_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__32705_SHARP_)));
});})(map__32713,map__32713__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
var G__32859 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__32859) : cb.call(null,G__32859));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__32868_33735 = cljs.core.seq(deps);
var chunk__32869_33736 = null;
var count__32870_33737 = (0);
var i__32871_33738 = (0);
while(true){
if((i__32871_33738 < count__32870_33737)){
var dep_33739 = chunk__32869_33736.cljs$core$IIndexed$_nth$arity$2(null,i__32871_33738);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32904_33740 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32905_33741 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32906_33742 = true;
var _STAR_print_fn_STAR__temp_val__32907_33743 = ((function (seq__32868_33735,chunk__32869_33736,count__32870_33737,i__32871_33738,_STAR_print_newline_STAR__orig_val__32904_33740,_STAR_print_fn_STAR__orig_val__32905_33741,_STAR_print_newline_STAR__temp_val__32906_33742,sb__4661__auto__,dep_33739){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__32868_33735,chunk__32869_33736,count__32870_33737,i__32871_33738,_STAR_print_newline_STAR__orig_val__32904_33740,_STAR_print_fn_STAR__orig_val__32905_33741,_STAR_print_newline_STAR__temp_val__32906_33742,sb__4661__auto__,dep_33739))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32906_33742;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32907_33743;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_33739)," = require('",dep_33739,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32905_33741;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32904_33740;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__33744 = seq__32868_33735;
var G__33745 = chunk__32869_33736;
var G__33746 = count__32870_33737;
var G__33747 = (i__32871_33738 + (1));
seq__32868_33735 = G__33744;
chunk__32869_33736 = G__33745;
count__32870_33737 = G__33746;
i__32871_33738 = G__33747;
continue;
} else {
var temp__5735__auto___33748 = cljs.core.seq(seq__32868_33735);
if(temp__5735__auto___33748){
var seq__32868_33749__$1 = temp__5735__auto___33748;
if(cljs.core.chunked_seq_QMARK_(seq__32868_33749__$1)){
var c__4550__auto___33750 = cljs.core.chunk_first(seq__32868_33749__$1);
var G__33751 = cljs.core.chunk_rest(seq__32868_33749__$1);
var G__33752 = c__4550__auto___33750;
var G__33753 = cljs.core.count(c__4550__auto___33750);
var G__33754 = (0);
seq__32868_33735 = G__33751;
chunk__32869_33736 = G__33752;
count__32870_33737 = G__33753;
i__32871_33738 = G__33754;
continue;
} else {
var dep_33755 = cljs.core.first(seq__32868_33749__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32924_33756 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32925_33757 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32926_33758 = true;
var _STAR_print_fn_STAR__temp_val__32927_33759 = ((function (seq__32868_33735,chunk__32869_33736,count__32870_33737,i__32871_33738,_STAR_print_newline_STAR__orig_val__32924_33756,_STAR_print_fn_STAR__orig_val__32925_33757,_STAR_print_newline_STAR__temp_val__32926_33758,sb__4661__auto__,dep_33755,seq__32868_33749__$1,temp__5735__auto___33748){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__32868_33735,chunk__32869_33736,count__32870_33737,i__32871_33738,_STAR_print_newline_STAR__orig_val__32924_33756,_STAR_print_fn_STAR__orig_val__32925_33757,_STAR_print_newline_STAR__temp_val__32926_33758,sb__4661__auto__,dep_33755,seq__32868_33749__$1,temp__5735__auto___33748))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32926_33758;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32927_33759;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_33755)," = require('",dep_33755,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32925_33757;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32924_33756;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__33760 = cljs.core.next(seq__32868_33749__$1);
var G__33761 = null;
var G__33762 = (0);
var G__33763 = (0);
seq__32868_33735 = G__33760;
chunk__32869_33736 = G__33761;
count__32870_33737 = G__33762;
i__32871_33738 = G__33763;
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
var map__32928 = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__32928__$1 = (((((!((map__32928 == null))))?(((((map__32928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32928):map__32928);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32928__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__32930_33771 = cljs.core.seq(deps);
var chunk__32931_33772 = null;
var count__32932_33773 = (0);
var i__32933_33774 = (0);
while(true){
if((i__32933_33774 < count__32932_33773)){
var dep_33775 = chunk__32931_33772.cljs$core$IIndexed$_nth$arity$2(null,i__32933_33774);
var map__32968_33776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_33775));
var map__32968_33777__$1 = (((((!((map__32968_33776 == null))))?(((((map__32968_33776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32968_33776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32968_33776):map__32968_33776);
var global_exports_33778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32968_33777__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32979_33779 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32980_33780 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32981_33781 = true;
var _STAR_print_fn_STAR__temp_val__32982_33782 = ((function (seq__32930_33771,chunk__32931_33772,count__32932_33773,i__32933_33774,_STAR_print_newline_STAR__orig_val__32979_33779,_STAR_print_fn_STAR__orig_val__32980_33780,_STAR_print_newline_STAR__temp_val__32981_33781,sb__4661__auto__,map__32968_33776,map__32968_33777__$1,global_exports_33778,dep_33775,map__32928,map__32928__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__32930_33771,chunk__32931_33772,count__32932_33773,i__32933_33774,_STAR_print_newline_STAR__orig_val__32979_33779,_STAR_print_fn_STAR__orig_val__32980_33780,_STAR_print_newline_STAR__temp_val__32981_33781,sb__4661__auto__,map__32968_33776,map__32968_33777__$1,global_exports_33778,dep_33775,map__32928,map__32928__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32981_33781;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32982_33782;

try{cljs.compiler.emit_global_export(ns_name,global_exports_33778,dep_33775);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32980_33780;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32979_33779;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__33783 = seq__32930_33771;
var G__33784 = chunk__32931_33772;
var G__33785 = count__32932_33773;
var G__33786 = (i__32933_33774 + (1));
seq__32930_33771 = G__33783;
chunk__32931_33772 = G__33784;
count__32932_33773 = G__33785;
i__32933_33774 = G__33786;
continue;
} else {
var temp__5735__auto___33787 = cljs.core.seq(seq__32930_33771);
if(temp__5735__auto___33787){
var seq__32930_33788__$1 = temp__5735__auto___33787;
if(cljs.core.chunked_seq_QMARK_(seq__32930_33788__$1)){
var c__4550__auto___33789 = cljs.core.chunk_first(seq__32930_33788__$1);
var G__33790 = cljs.core.chunk_rest(seq__32930_33788__$1);
var G__33791 = c__4550__auto___33789;
var G__33792 = cljs.core.count(c__4550__auto___33789);
var G__33793 = (0);
seq__32930_33771 = G__33790;
chunk__32931_33772 = G__33791;
count__32932_33773 = G__33792;
i__32933_33774 = G__33793;
continue;
} else {
var dep_33794 = cljs.core.first(seq__32930_33788__$1);
var map__33001_33795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_33794));
var map__33001_33796__$1 = (((((!((map__33001_33795 == null))))?(((((map__33001_33795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33001_33795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33001_33795):map__33001_33795);
var global_exports_33797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33001_33796__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33006_33798 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33007_33799 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33008_33800 = true;
var _STAR_print_fn_STAR__temp_val__33009_33801 = ((function (seq__32930_33771,chunk__32931_33772,count__32932_33773,i__32933_33774,_STAR_print_newline_STAR__orig_val__33006_33798,_STAR_print_fn_STAR__orig_val__33007_33799,_STAR_print_newline_STAR__temp_val__33008_33800,sb__4661__auto__,map__33001_33795,map__33001_33796__$1,global_exports_33797,dep_33794,seq__32930_33788__$1,temp__5735__auto___33787,map__32928,map__32928__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__32930_33771,chunk__32931_33772,count__32932_33773,i__32933_33774,_STAR_print_newline_STAR__orig_val__33006_33798,_STAR_print_fn_STAR__orig_val__33007_33799,_STAR_print_newline_STAR__temp_val__33008_33800,sb__4661__auto__,map__33001_33795,map__33001_33796__$1,global_exports_33797,dep_33794,seq__32930_33788__$1,temp__5735__auto___33787,map__32928,map__32928__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33008_33800;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33009_33801;

try{cljs.compiler.emit_global_export(ns_name,global_exports_33797,dep_33794);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33007_33799;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33006_33798;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__33802 = cljs.core.next(seq__32930_33788__$1);
var G__33803 = null;
var G__33804 = (0);
var G__33805 = (0);
seq__32930_33771 = G__33802;
chunk__32931_33772 = G__33803;
count__32932_33773 = G__33804;
i__32933_33774 = G__33805;
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
var bound_vars__$1 = (function (){var G__33037 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33037,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__33037;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__33039 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__33040 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__33041 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__33042 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__33043 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__33044 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__33045 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__33046 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__33047 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__33048 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__33049 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__33050 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__33051 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__33052 = ns;
var _STAR_checked_arrays_STAR__temp_val__33053 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__33054 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__33055 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__33056 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_passes_STAR__temp_val__33057 = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__33058 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__33059 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__33060 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__33061 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__33062 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33051;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__33052;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__33053;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__33054;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__33055;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__33056;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__33057;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__33058;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__33059;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__33060;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__33061;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__33062;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e33085){var cause = e33085;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__33090 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__33090__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33090,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__33090);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33090__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__33090__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e33095){var cause = e33095;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__33099 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__33098 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__33098.cljs$core$IFn$_invoke$arity$1 ? fexpr__33098.cljs$core$IFn$_invoke$arity$1(G__33099) : fexpr__33098.call(null,G__33099));
})())){
var G__33103 = bound_vars__$1;
var G__33104 = aenv__$1;
var G__33105 = ast;
var G__33106 = opts;
var G__33107 = ((function (G__33103,G__33104,G__33105,G__33106,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33039,_STAR_cljs_ns_STAR__orig_val__33040,_STAR_checked_arrays_STAR__orig_val__33041,_STAR_cljs_static_fns_STAR__orig_val__33042,_STAR_fn_invoke_direct_STAR__orig_val__33043,_STAR_ns_STAR__orig_val__33044,_STAR_passes_STAR__orig_val__33045,_STAR_alias_map_STAR__orig_val__33046,_STAR_data_readers_STAR__orig_val__33047,resolve_symbol_orig_val__33048,_STAR_source_map_data_STAR__orig_val__33049,_STAR_cljs_file_STAR__orig_val__33050,_STAR_compiler_STAR__temp_val__33051,_STAR_cljs_ns_STAR__temp_val__33052,_STAR_checked_arrays_STAR__temp_val__33053,_STAR_cljs_static_fns_STAR__temp_val__33054,_STAR_fn_invoke_direct_STAR__temp_val__33055,_STAR_ns_STAR__temp_val__33056,_STAR_passes_STAR__temp_val__33057,_STAR_alias_map_STAR__temp_val__33058,_STAR_data_readers_STAR__temp_val__33059,resolve_symbol_temp_val__33060,_STAR_source_map_data_STAR__temp_val__33061,_STAR_cljs_file_STAR__temp_val__33062,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$analyze_str_STAR__$_analyze_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
}
});})(G__33103,G__33104,G__33105,G__33106,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33039,_STAR_cljs_ns_STAR__orig_val__33040,_STAR_checked_arrays_STAR__orig_val__33041,_STAR_cljs_static_fns_STAR__orig_val__33042,_STAR_fn_invoke_direct_STAR__orig_val__33043,_STAR_ns_STAR__orig_val__33044,_STAR_passes_STAR__orig_val__33045,_STAR_alias_map_STAR__orig_val__33046,_STAR_data_readers_STAR__orig_val__33047,resolve_symbol_orig_val__33048,_STAR_source_map_data_STAR__orig_val__33049,_STAR_cljs_file_STAR__orig_val__33050,_STAR_compiler_STAR__temp_val__33051,_STAR_cljs_ns_STAR__temp_val__33052,_STAR_checked_arrays_STAR__temp_val__33053,_STAR_cljs_static_fns_STAR__temp_val__33054,_STAR_fn_invoke_direct_STAR__temp_val__33055,_STAR_ns_STAR__temp_val__33056,_STAR_passes_STAR__temp_val__33057,_STAR_alias_map_STAR__temp_val__33058,_STAR_data_readers_STAR__temp_val__33059,resolve_symbol_temp_val__33060,_STAR_source_map_data_STAR__temp_val__33061,_STAR_cljs_file_STAR__temp_val__33062,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
;
var fexpr__33102 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__33102.cljs$core$IFn$_invoke$arity$5 ? fexpr__33102.cljs$core$IFn$_invoke$arity$5(G__33103,G__33104,G__33105,G__33106,G__33107) : fexpr__33102.call(null,G__33103,G__33104,G__33105,G__33106,G__33107));
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33039,_STAR_cljs_ns_STAR__orig_val__33040,_STAR_checked_arrays_STAR__orig_val__33041,_STAR_cljs_static_fns_STAR__orig_val__33042,_STAR_fn_invoke_direct_STAR__orig_val__33043,_STAR_ns_STAR__orig_val__33044,_STAR_passes_STAR__orig_val__33045,_STAR_alias_map_STAR__orig_val__33046,_STAR_data_readers_STAR__orig_val__33047,resolve_symbol_orig_val__33048,_STAR_source_map_data_STAR__orig_val__33049,_STAR_cljs_file_STAR__orig_val__33050,_STAR_compiler_STAR__temp_val__33051,_STAR_cljs_ns_STAR__temp_val__33052,_STAR_checked_arrays_STAR__temp_val__33053,_STAR_cljs_static_fns_STAR__temp_val__33054,_STAR_fn_invoke_direct_STAR__temp_val__33055,_STAR_ns_STAR__temp_val__33056,_STAR_passes_STAR__temp_val__33057,_STAR_alias_map_STAR__temp_val__33058,_STAR_data_readers_STAR__temp_val__33059,resolve_symbol_temp_val__33060,_STAR_source_map_data_STAR__temp_val__33061,_STAR_cljs_file_STAR__temp_val__33062,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33039,_STAR_cljs_ns_STAR__orig_val__33040,_STAR_checked_arrays_STAR__orig_val__33041,_STAR_cljs_static_fns_STAR__orig_val__33042,_STAR_fn_invoke_direct_STAR__orig_val__33043,_STAR_ns_STAR__orig_val__33044,_STAR_passes_STAR__orig_val__33045,_STAR_alias_map_STAR__orig_val__33046,_STAR_data_readers_STAR__orig_val__33047,resolve_symbol_orig_val__33048,_STAR_source_map_data_STAR__orig_val__33049,_STAR_cljs_file_STAR__orig_val__33050,_STAR_compiler_STAR__temp_val__33051,_STAR_cljs_ns_STAR__temp_val__33052,_STAR_checked_arrays_STAR__temp_val__33053,_STAR_cljs_static_fns_STAR__temp_val__33054,_STAR_fn_invoke_direct_STAR__temp_val__33055,_STAR_ns_STAR__temp_val__33056,_STAR_passes_STAR__temp_val__33057,_STAR_alias_map_STAR__temp_val__33058,_STAR_data_readers_STAR__temp_val__33059,resolve_symbol_temp_val__33060,_STAR_source_map_data_STAR__temp_val__33061,_STAR_cljs_file_STAR__temp_val__33062,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
var G__33108 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__33108) : cb__$1.call(null,G__33108));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__33050;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__33049;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__33048;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__33047;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__33046;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__33045;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__33044;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__33043;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__33042;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__33041;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__33040;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33039;
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
var G__33131 = arguments.length;
switch (G__33131) {
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
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

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
var bound_vars__$1 = (function (){var G__33160 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33160,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__33160;
}
})();
cljs.js.clear_fns_BANG_();

var _STAR_compiler_STAR__orig_val__33174 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__33175 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__33176 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__33177 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__33178 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__33179 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__33180 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__33181 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__33182 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__33183 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__33184 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__33185 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__33186 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__33187 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__33188 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__33189 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__33190 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__33191 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__33192 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__33193 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__33194 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__33195 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33185;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__33186;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__33187;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__33188;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__33189;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__33190;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__33191;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__33192;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__33193;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__33194;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__33195;

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__33200 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__33200__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33200,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__33200);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33200__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__33200__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e33201){var cause = e33201;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__33204 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__33207 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__33207__$1 = (((((!((map__33207 == null))))?(((((map__33207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33207):map__33207);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33207__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33207__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33204,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33204,(1),null);
if(cljs.core.truth_((function (){var G__33214 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__33213 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__33213.cljs$core$IFn$_invoke$arity$1 ? fexpr__33213.cljs$core$IFn$_invoke$arity$1(G__33214) : fexpr__33213.call(null,G__33214));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__33204,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__33174,_STAR_eval_fn_STAR__orig_val__33175,_STAR_cljs_ns_STAR__orig_val__33176,_STAR_checked_arrays_STAR__orig_val__33177,_STAR_cljs_static_fns_STAR__orig_val__33178,_STAR_fn_invoke_direct_STAR__orig_val__33179,_STAR_ns_STAR__orig_val__33180,_STAR_alias_map_STAR__orig_val__33181,_STAR_data_readers_STAR__orig_val__33182,resolve_symbol_orig_val__33183,_STAR_source_map_data_STAR__orig_val__33184,_STAR_compiler_STAR__temp_val__33185,_STAR_eval_fn_STAR__temp_val__33186,_STAR_cljs_ns_STAR__temp_val__33187,_STAR_checked_arrays_STAR__temp_val__33188,_STAR_cljs_static_fns_STAR__temp_val__33189,_STAR_fn_invoke_direct_STAR__temp_val__33190,_STAR_ns_STAR__temp_val__33191,_STAR_alias_map_STAR__temp_val__33192,_STAR_data_readers_STAR__temp_val__33193,resolve_symbol_temp_val__33194,_STAR_source_map_data_STAR__temp_val__33195,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33219_33842 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33220_33843 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33221_33844 = true;
var _STAR_print_fn_STAR__temp_val__33222_33845 = ((function (_STAR_print_newline_STAR__orig_val__33219_33842,_STAR_print_fn_STAR__orig_val__33220_33843,_STAR_print_newline_STAR__temp_val__33221_33844,sb__4661__auto__,ns_name,sb,ast,vec__33204,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__33174,_STAR_eval_fn_STAR__orig_val__33175,_STAR_cljs_ns_STAR__orig_val__33176,_STAR_checked_arrays_STAR__orig_val__33177,_STAR_cljs_static_fns_STAR__orig_val__33178,_STAR_fn_invoke_direct_STAR__orig_val__33179,_STAR_ns_STAR__orig_val__33180,_STAR_alias_map_STAR__orig_val__33181,_STAR_data_readers_STAR__orig_val__33182,resolve_symbol_orig_val__33183,_STAR_source_map_data_STAR__orig_val__33184,_STAR_compiler_STAR__temp_val__33185,_STAR_eval_fn_STAR__temp_val__33186,_STAR_cljs_ns_STAR__temp_val__33187,_STAR_checked_arrays_STAR__temp_val__33188,_STAR_cljs_static_fns_STAR__temp_val__33189,_STAR_fn_invoke_direct_STAR__temp_val__33190,_STAR_ns_STAR__temp_val__33191,_STAR_alias_map_STAR__temp_val__33192,_STAR_data_readers_STAR__temp_val__33193,resolve_symbol_temp_val__33194,_STAR_source_map_data_STAR__temp_val__33195,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33219_33842,_STAR_print_fn_STAR__orig_val__33220_33843,_STAR_print_newline_STAR__temp_val__33221_33844,sb__4661__auto__,ns_name,sb,ast,vec__33204,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__33174,_STAR_eval_fn_STAR__orig_val__33175,_STAR_cljs_ns_STAR__orig_val__33176,_STAR_checked_arrays_STAR__orig_val__33177,_STAR_cljs_static_fns_STAR__orig_val__33178,_STAR_fn_invoke_direct_STAR__orig_val__33179,_STAR_ns_STAR__orig_val__33180,_STAR_alias_map_STAR__orig_val__33181,_STAR_data_readers_STAR__orig_val__33182,resolve_symbol_orig_val__33183,_STAR_source_map_data_STAR__orig_val__33184,_STAR_compiler_STAR__temp_val__33185,_STAR_eval_fn_STAR__temp_val__33186,_STAR_cljs_ns_STAR__temp_val__33187,_STAR_checked_arrays_STAR__temp_val__33188,_STAR_cljs_static_fns_STAR__temp_val__33189,_STAR_fn_invoke_direct_STAR__temp_val__33190,_STAR_ns_STAR__temp_val__33191,_STAR_alias_map_STAR__temp_val__33192,_STAR_data_readers_STAR__temp_val__33193,resolve_symbol_temp_val__33194,_STAR_source_map_data_STAR__temp_val__33195,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33221_33844;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33222_33845;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33220_33843;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33219_33842;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

var G__33234 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33234) : cb.call(null,G__33234));
}
});})(ast,vec__33204,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__33174,_STAR_eval_fn_STAR__orig_val__33175,_STAR_cljs_ns_STAR__orig_val__33176,_STAR_checked_arrays_STAR__orig_val__33177,_STAR_cljs_static_fns_STAR__orig_val__33178,_STAR_fn_invoke_direct_STAR__orig_val__33179,_STAR_ns_STAR__orig_val__33180,_STAR_alias_map_STAR__orig_val__33181,_STAR_data_readers_STAR__orig_val__33182,resolve_symbol_orig_val__33183,_STAR_source_map_data_STAR__orig_val__33184,_STAR_compiler_STAR__temp_val__33185,_STAR_eval_fn_STAR__temp_val__33186,_STAR_cljs_ns_STAR__temp_val__33187,_STAR_checked_arrays_STAR__temp_val__33188,_STAR_cljs_static_fns_STAR__temp_val__33189,_STAR_fn_invoke_direct_STAR__temp_val__33190,_STAR_ns_STAR__temp_val__33191,_STAR_alias_map_STAR__temp_val__33192,_STAR_data_readers_STAR__temp_val__33193,resolve_symbol_temp_val__33194,_STAR_source_map_data_STAR__temp_val__33195,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33244_33846 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33245_33847 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33246_33848 = true;
var _STAR_print_fn_STAR__temp_val__33247_33849 = ((function (_STAR_print_newline_STAR__orig_val__33244_33846,_STAR_print_fn_STAR__orig_val__33245_33847,_STAR_print_newline_STAR__temp_val__33246_33848,sb__4661__auto__,ast,vec__33204,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__33174,_STAR_eval_fn_STAR__orig_val__33175,_STAR_cljs_ns_STAR__orig_val__33176,_STAR_checked_arrays_STAR__orig_val__33177,_STAR_cljs_static_fns_STAR__orig_val__33178,_STAR_fn_invoke_direct_STAR__orig_val__33179,_STAR_ns_STAR__orig_val__33180,_STAR_alias_map_STAR__orig_val__33181,_STAR_data_readers_STAR__orig_val__33182,resolve_symbol_orig_val__33183,_STAR_source_map_data_STAR__orig_val__33184,_STAR_compiler_STAR__temp_val__33185,_STAR_eval_fn_STAR__temp_val__33186,_STAR_cljs_ns_STAR__temp_val__33187,_STAR_checked_arrays_STAR__temp_val__33188,_STAR_cljs_static_fns_STAR__temp_val__33189,_STAR_fn_invoke_direct_STAR__temp_val__33190,_STAR_ns_STAR__temp_val__33191,_STAR_alias_map_STAR__temp_val__33192,_STAR_data_readers_STAR__temp_val__33193,resolve_symbol_temp_val__33194,_STAR_source_map_data_STAR__temp_val__33195,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33244_33846,_STAR_print_fn_STAR__orig_val__33245_33847,_STAR_print_newline_STAR__temp_val__33246_33848,sb__4661__auto__,ast,vec__33204,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__33174,_STAR_eval_fn_STAR__orig_val__33175,_STAR_cljs_ns_STAR__orig_val__33176,_STAR_checked_arrays_STAR__orig_val__33177,_STAR_cljs_static_fns_STAR__orig_val__33178,_STAR_fn_invoke_direct_STAR__orig_val__33179,_STAR_ns_STAR__orig_val__33180,_STAR_alias_map_STAR__orig_val__33181,_STAR_data_readers_STAR__orig_val__33182,resolve_symbol_orig_val__33183,_STAR_source_map_data_STAR__orig_val__33184,_STAR_compiler_STAR__temp_val__33185,_STAR_eval_fn_STAR__temp_val__33186,_STAR_cljs_ns_STAR__temp_val__33187,_STAR_checked_arrays_STAR__temp_val__33188,_STAR_cljs_static_fns_STAR__temp_val__33189,_STAR_fn_invoke_direct_STAR__temp_val__33190,_STAR_ns_STAR__temp_val__33191,_STAR_alias_map_STAR__temp_val__33192,_STAR_data_readers_STAR__temp_val__33193,resolve_symbol_temp_val__33194,_STAR_source_map_data_STAR__temp_val__33195,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33246_33848;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33247_33849;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33245_33847;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33244_33846;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var G__33256 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33256) : cb.call(null,G__33256));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__33184;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__33183;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__33182;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__33181;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__33180;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__33179;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__33178;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__33177;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__33176;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__33175;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33174;
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
var G__33258 = arguments.length;
switch (G__33258) {
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
var bound_vars__$1 = (function (){var G__33265 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33265,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__33265;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__33266 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__33267 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__33268 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__33269 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__33270 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__33271 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__33272 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__33273 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__33274 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__33275 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__33276 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__33277 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__33278 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__33279 = ns;
var _STAR_checked_arrays_STAR__temp_val__33280 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__33281 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__33282 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__33283 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__33284 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__33285 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__33286 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__33287 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33277;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__33278;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__33279;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__33280;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__33281;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__33282;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__33283;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__33284;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__33285;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__33286;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__33287;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e33292){var cause = e33292;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__33293 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__33293__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33293,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__33293);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33293__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__33293__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e33295){var cause = e33295;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__33296 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__33299 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__33299__$1 = (((((!((map__33299 == null))))?(((((map__33299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33299):map__33299);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33296,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33296,(1),null);
if(cljs.core.truth_((function (){var G__33306 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__33305 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__33305.cljs$core$IFn$_invoke$arity$1 ? fexpr__33305.cljs$core$IFn$_invoke$arity$1(G__33306) : fexpr__33305.call(null,G__33306));
})())){
var G__33309 = bound_vars__$1;
var G__33310 = aenv__$1;
var G__33311 = ast__$1;
var G__33312 = opts;
var G__33313 = ((function (G__33309,G__33310,G__33311,G__33312,ast,vec__33296,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33266,_STAR_eval_fn_STAR__orig_val__33267,_STAR_cljs_ns_STAR__orig_val__33268,_STAR_checked_arrays_STAR__orig_val__33269,_STAR_cljs_static_fns_STAR__orig_val__33270,_STAR_fn_invoke_direct_STAR__orig_val__33271,_STAR_ns_STAR__orig_val__33272,_STAR_alias_map_STAR__orig_val__33273,_STAR_data_readers_STAR__orig_val__33274,resolve_symbol_orig_val__33275,_STAR_source_map_data_STAR__orig_val__33276,_STAR_compiler_STAR__temp_val__33277,_STAR_eval_fn_STAR__temp_val__33278,_STAR_cljs_ns_STAR__temp_val__33279,_STAR_checked_arrays_STAR__temp_val__33280,_STAR_cljs_static_fns_STAR__temp_val__33281,_STAR_fn_invoke_direct_STAR__temp_val__33282,_STAR_ns_STAR__temp_val__33283,_STAR_alias_map_STAR__temp_val__33284,_STAR_data_readers_STAR__temp_val__33285,resolve_symbol_temp_val__33286,_STAR_source_map_data_STAR__temp_val__33287,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33314_33865 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33315_33866 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33316_33867 = true;
var _STAR_print_fn_STAR__temp_val__33317_33868 = ((function (_STAR_print_newline_STAR__orig_val__33314_33865,_STAR_print_fn_STAR__orig_val__33315_33866,_STAR_print_newline_STAR__temp_val__33316_33867,sb__4661__auto__,ns_name,G__33309,G__33310,G__33311,G__33312,ast,vec__33296,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33266,_STAR_eval_fn_STAR__orig_val__33267,_STAR_cljs_ns_STAR__orig_val__33268,_STAR_checked_arrays_STAR__orig_val__33269,_STAR_cljs_static_fns_STAR__orig_val__33270,_STAR_fn_invoke_direct_STAR__orig_val__33271,_STAR_ns_STAR__orig_val__33272,_STAR_alias_map_STAR__orig_val__33273,_STAR_data_readers_STAR__orig_val__33274,resolve_symbol_orig_val__33275,_STAR_source_map_data_STAR__orig_val__33276,_STAR_compiler_STAR__temp_val__33277,_STAR_eval_fn_STAR__temp_val__33278,_STAR_cljs_ns_STAR__temp_val__33279,_STAR_checked_arrays_STAR__temp_val__33280,_STAR_cljs_static_fns_STAR__temp_val__33281,_STAR_fn_invoke_direct_STAR__temp_val__33282,_STAR_ns_STAR__temp_val__33283,_STAR_alias_map_STAR__temp_val__33284,_STAR_data_readers_STAR__temp_val__33285,resolve_symbol_temp_val__33286,_STAR_source_map_data_STAR__temp_val__33287,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33314_33865,_STAR_print_fn_STAR__orig_val__33315_33866,_STAR_print_newline_STAR__temp_val__33316_33867,sb__4661__auto__,ns_name,G__33309,G__33310,G__33311,G__33312,ast,vec__33296,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33266,_STAR_eval_fn_STAR__orig_val__33267,_STAR_cljs_ns_STAR__orig_val__33268,_STAR_checked_arrays_STAR__orig_val__33269,_STAR_cljs_static_fns_STAR__orig_val__33270,_STAR_fn_invoke_direct_STAR__orig_val__33271,_STAR_ns_STAR__orig_val__33272,_STAR_alias_map_STAR__orig_val__33273,_STAR_data_readers_STAR__orig_val__33274,resolve_symbol_orig_val__33275,_STAR_source_map_data_STAR__orig_val__33276,_STAR_compiler_STAR__temp_val__33277,_STAR_eval_fn_STAR__temp_val__33278,_STAR_cljs_ns_STAR__temp_val__33279,_STAR_checked_arrays_STAR__temp_val__33280,_STAR_cljs_static_fns_STAR__temp_val__33281,_STAR_fn_invoke_direct_STAR__temp_val__33282,_STAR_ns_STAR__temp_val__33283,_STAR_alias_map_STAR__temp_val__33284,_STAR_data_readers_STAR__temp_val__33285,resolve_symbol_temp_val__33286,_STAR_source_map_data_STAR__temp_val__33287,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33316_33867;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33317_33868;

try{cljs.compiler.emit(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33315_33866;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33314_33865;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$compile_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1)], 0));
}
});})(G__33309,G__33310,G__33311,G__33312,ast,vec__33296,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33266,_STAR_eval_fn_STAR__orig_val__33267,_STAR_cljs_ns_STAR__orig_val__33268,_STAR_checked_arrays_STAR__orig_val__33269,_STAR_cljs_static_fns_STAR__orig_val__33270,_STAR_fn_invoke_direct_STAR__orig_val__33271,_STAR_ns_STAR__orig_val__33272,_STAR_alias_map_STAR__orig_val__33273,_STAR_data_readers_STAR__orig_val__33274,resolve_symbol_orig_val__33275,_STAR_source_map_data_STAR__orig_val__33276,_STAR_compiler_STAR__temp_val__33277,_STAR_eval_fn_STAR__temp_val__33278,_STAR_cljs_ns_STAR__temp_val__33279,_STAR_checked_arrays_STAR__temp_val__33280,_STAR_cljs_static_fns_STAR__temp_val__33281,_STAR_fn_invoke_direct_STAR__temp_val__33282,_STAR_ns_STAR__temp_val__33283,_STAR_alias_map_STAR__temp_val__33284,_STAR_data_readers_STAR__temp_val__33285,resolve_symbol_temp_val__33286,_STAR_source_map_data_STAR__temp_val__33287,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
var fexpr__33308 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__33308.cljs$core$IFn$_invoke$arity$5 ? fexpr__33308.cljs$core$IFn$_invoke$arity$5(G__33309,G__33310,G__33311,G__33312,G__33313) : fexpr__33308.call(null,G__33309,G__33310,G__33311,G__33312,G__33313));
} else {
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33319_33869 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33320_33870 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33321_33871 = true;
var _STAR_print_fn_STAR__temp_val__33322_33872 = ((function (_STAR_print_newline_STAR__orig_val__33319_33869,_STAR_print_fn_STAR__orig_val__33320_33870,_STAR_print_newline_STAR__temp_val__33321_33871,sb__4661__auto__,ast,vec__33296,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33266,_STAR_eval_fn_STAR__orig_val__33267,_STAR_cljs_ns_STAR__orig_val__33268,_STAR_checked_arrays_STAR__orig_val__33269,_STAR_cljs_static_fns_STAR__orig_val__33270,_STAR_fn_invoke_direct_STAR__orig_val__33271,_STAR_ns_STAR__orig_val__33272,_STAR_alias_map_STAR__orig_val__33273,_STAR_data_readers_STAR__orig_val__33274,resolve_symbol_orig_val__33275,_STAR_source_map_data_STAR__orig_val__33276,_STAR_compiler_STAR__temp_val__33277,_STAR_eval_fn_STAR__temp_val__33278,_STAR_cljs_ns_STAR__temp_val__33279,_STAR_checked_arrays_STAR__temp_val__33280,_STAR_cljs_static_fns_STAR__temp_val__33281,_STAR_fn_invoke_direct_STAR__temp_val__33282,_STAR_ns_STAR__temp_val__33283,_STAR_alias_map_STAR__temp_val__33284,_STAR_data_readers_STAR__temp_val__33285,resolve_symbol_temp_val__33286,_STAR_source_map_data_STAR__temp_val__33287,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33319_33869,_STAR_print_fn_STAR__orig_val__33320_33870,_STAR_print_newline_STAR__temp_val__33321_33871,sb__4661__auto__,ast,vec__33296,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33266,_STAR_eval_fn_STAR__orig_val__33267,_STAR_cljs_ns_STAR__orig_val__33268,_STAR_checked_arrays_STAR__orig_val__33269,_STAR_cljs_static_fns_STAR__orig_val__33270,_STAR_fn_invoke_direct_STAR__orig_val__33271,_STAR_ns_STAR__orig_val__33272,_STAR_alias_map_STAR__orig_val__33273,_STAR_data_readers_STAR__orig_val__33274,resolve_symbol_orig_val__33275,_STAR_source_map_data_STAR__orig_val__33276,_STAR_compiler_STAR__temp_val__33277,_STAR_eval_fn_STAR__temp_val__33278,_STAR_cljs_ns_STAR__temp_val__33279,_STAR_checked_arrays_STAR__temp_val__33280,_STAR_cljs_static_fns_STAR__temp_val__33281,_STAR_fn_invoke_direct_STAR__temp_val__33282,_STAR_ns_STAR__temp_val__33283,_STAR_alias_map_STAR__temp_val__33284,_STAR_data_readers_STAR__temp_val__33285,resolve_symbol_temp_val__33286,_STAR_source_map_data_STAR__temp_val__33287,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33321_33871;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33322_33872;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33320_33870;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33319_33869;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

return ((function (ast,vec__33296,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33266,_STAR_eval_fn_STAR__orig_val__33267,_STAR_cljs_ns_STAR__orig_val__33268,_STAR_checked_arrays_STAR__orig_val__33269,_STAR_cljs_static_fns_STAR__orig_val__33270,_STAR_fn_invoke_direct_STAR__orig_val__33271,_STAR_ns_STAR__orig_val__33272,_STAR_alias_map_STAR__orig_val__33273,_STAR_data_readers_STAR__orig_val__33274,resolve_symbol_orig_val__33275,_STAR_source_map_data_STAR__orig_val__33276,_STAR_compiler_STAR__temp_val__33277,_STAR_eval_fn_STAR__temp_val__33278,_STAR_cljs_ns_STAR__temp_val__33279,_STAR_checked_arrays_STAR__temp_val__33280,_STAR_cljs_static_fns_STAR__temp_val__33281,_STAR_fn_invoke_direct_STAR__temp_val__33282,_STAR_ns_STAR__temp_val__33283,_STAR_alias_map_STAR__temp_val__33284,_STAR_data_readers_STAR__temp_val__33285,resolve_symbol_temp_val__33286,_STAR_source_map_data_STAR__temp_val__33287,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop(ns);
});
;})(ast,vec__33296,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33266,_STAR_eval_fn_STAR__orig_val__33267,_STAR_cljs_ns_STAR__orig_val__33268,_STAR_checked_arrays_STAR__orig_val__33269,_STAR_cljs_static_fns_STAR__orig_val__33270,_STAR_fn_invoke_direct_STAR__orig_val__33271,_STAR_ns_STAR__orig_val__33272,_STAR_alias_map_STAR__orig_val__33273,_STAR_data_readers_STAR__orig_val__33274,resolve_symbol_orig_val__33275,_STAR_source_map_data_STAR__orig_val__33276,_STAR_compiler_STAR__temp_val__33277,_STAR_eval_fn_STAR__temp_val__33278,_STAR_cljs_ns_STAR__temp_val__33279,_STAR_checked_arrays_STAR__temp_val__33280,_STAR_cljs_static_fns_STAR__temp_val__33281,_STAR_fn_invoke_direct_STAR__temp_val__33282,_STAR_ns_STAR__temp_val__33283,_STAR_alias_map_STAR__temp_val__33284,_STAR_data_readers_STAR__temp_val__33285,resolve_symbol_temp_val__33286,_STAR_source_map_data_STAR__temp_val__33287,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__33326 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__33326) : cb__$1.call(null,G__33326));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__33276;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__33275;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__33274;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__33273;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__33272;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__33271;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__33270;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__33269;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__33268;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__33267;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33266;
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
var G__33328 = arguments.length;
switch (G__33328) {
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
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

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
var bound_vars__$1 = (function (){var G__33339 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33339,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__33339;
}
})();
var aname = (function (){var G__33347 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__33347);
} else {
return G__33347;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

cljs.js.clear_fns_BANG_();

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__33350 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__33351 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__33352 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__33353 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__33354 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__33355 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__33356 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__33357 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__33358 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__33359 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__33360 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__33361 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__33362 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__33363 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__33364 = ns;
var _STAR_checked_arrays_STAR__temp_val__33365 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__33366 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__33367 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__33368 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__33369 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__33370 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__33371 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__33372 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__33373 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33362;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__33363;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__33364;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__33365;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__33366;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__33367;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__33368;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__33369;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__33370;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__33371;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__33372;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__33373;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e33396){var cause = e33396;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__33401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__33401__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33401,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__33401);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33401__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__33401__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e33407){var cause = e33407;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__33414 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__33424 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__33424__$1 = (((((!((map__33424 == null))))?(((((map__33424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33424):map__33424);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33424__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33424__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33414,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33414,(1),null);
if(cljs.core.truth_((function (){var G__33439 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__33438 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__33438.cljs$core$IFn$_invoke$arity$1 ? fexpr__33438.cljs$core$IFn$_invoke$arity$1(G__33439) : fexpr__33438.call(null,G__33439));
})())){
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33443_33892 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33444_33893 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33445_33894 = true;
var _STAR_print_fn_STAR__temp_val__33446_33895 = ((function (_STAR_print_newline_STAR__orig_val__33443_33892,_STAR_print_fn_STAR__orig_val__33444_33893,_STAR_print_newline_STAR__temp_val__33445_33894,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__33414,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33443_33892,_STAR_print_fn_STAR__orig_val__33444_33893,_STAR_print_newline_STAR__temp_val__33445_33894,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__33414,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33445_33894;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33446_33895;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33444_33893;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33443_33892;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

var G__33459 = true;
var G__33460 = bound_vars__$1;
var G__33461 = aenv__$1;
var G__33462 = ast__$1;
var G__33463 = opts;
var G__33464 = ((function (G__33459,G__33460,G__33461,G__33462,G__33463,ast,ns_SINGLEQUOTE_,vec__33414,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
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
});})(G__33459,G__33460,G__33461,G__33462,G__33463,ast,ns_SINGLEQUOTE_,vec__33414,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var fexpr__33458 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__33458.cljs$core$IFn$_invoke$arity$6 ? fexpr__33458.cljs$core$IFn$_invoke$arity$6(G__33459,G__33460,G__33461,G__33462,G__33463,G__33464) : fexpr__33458.call(null,G__33459,G__33460,G__33461,G__33462,G__33463,G__33464));
} else {
var env__28736__auto___33897 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__28736__auto___33898__$1 = ((cljs.core.map_QMARK_(env__28736__auto___33897))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__28736__auto___33897):(((((env__28736__auto___33897 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__28736__auto___33897)))))?env__28736__auto___33897:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__28736__auto___33897))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__33479_33904 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__33480_33905 = env__28736__auto___33898__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__33480_33905;

try{sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33485_33907 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33486_33908 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33487_33909 = true;
var _STAR_print_fn_STAR__temp_val__33488_33910 = ((function (_STAR_print_newline_STAR__orig_val__33485_33907,_STAR_print_fn_STAR__orig_val__33486_33908,_STAR_print_newline_STAR__temp_val__33487_33909,sb__4661__auto__,_STAR_compiler_STAR__orig_val__33479_33904,_STAR_compiler_STAR__temp_val__33480_33905,env__28736__auto___33897,env__28736__auto___33898__$1,ast,ns_SINGLEQUOTE_,vec__33414,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33485_33907,_STAR_print_fn_STAR__orig_val__33486_33908,_STAR_print_newline_STAR__temp_val__33487_33909,sb__4661__auto__,_STAR_compiler_STAR__orig_val__33479_33904,_STAR_compiler_STAR__temp_val__33480_33905,env__28736__auto___33897,env__28736__auto___33898__$1,ast,ns_SINGLEQUOTE_,vec__33414,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33487_33909;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33488_33910;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33486_33908;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33485_33907;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33479_33904;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__33414,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__33414,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
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
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e33489){var cause = e33489;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__33350,_STAR_eval_fn_STAR__orig_val__33351,_STAR_cljs_ns_STAR__orig_val__33352,_STAR_checked_arrays_STAR__orig_val__33353,_STAR_cljs_static_fns_STAR__orig_val__33354,_STAR_fn_invoke_direct_STAR__orig_val__33355,_STAR_ns_STAR__orig_val__33356,_STAR_alias_map_STAR__orig_val__33357,_STAR_data_readers_STAR__orig_val__33358,resolve_symbol_orig_val__33359,_STAR_source_map_data_STAR__orig_val__33360,_STAR_cljs_file_STAR__orig_val__33361,_STAR_compiler_STAR__temp_val__33362,_STAR_eval_fn_STAR__temp_val__33363,_STAR_cljs_ns_STAR__temp_val__33364,_STAR_checked_arrays_STAR__temp_val__33365,_STAR_cljs_static_fns_STAR__temp_val__33366,_STAR_fn_invoke_direct_STAR__temp_val__33367,_STAR_ns_STAR__temp_val__33368,_STAR_alias_map_STAR__temp_val__33369,_STAR_data_readers_STAR__temp_val__33370,resolve_symbol_temp_val__33371,_STAR_source_map_data_STAR__temp_val__33372,_STAR_cljs_file_STAR__temp_val__33373,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5733__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
var fexpr__33492 = cljs.js.trampoline_safe(f);
return (fexpr__33492.cljs$core$IFn$_invoke$arity$2 ? fexpr__33492.cljs$core$IFn$_invoke$arity$2(evalm,complete) : fexpr__33492.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__33361;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__33360;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__33359;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__33358;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__33357;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__33356;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__33355;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__33354;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__33353;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__33352;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__33351;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__33350;
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
var G__33501 = arguments.length;
switch (G__33501) {
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
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

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
var G__33591 = arguments.length;
switch (G__33591) {
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
var st_33927 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(st_33927,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (st_33927,result){
return (function (p__33615){
var map__33616 = p__33615;
var map__33616__$1 = (((((!((map__33616 == null))))?(((((map__33616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33616):map__33616);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33616__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33616__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_(result,value);
}
});})(st_33927,result))
);

return cljs.core.deref(result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;

//# sourceMappingURL=cljs.js.js.map
