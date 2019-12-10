goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__30815 = s;
var map__30815__$1 = (((((!((map__30815 == null))))?(((((map__30815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30815):map__30815);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30815__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30815__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__30820 = info;
var map__30821 = G__30820;
var map__30821__$1 = (((((!((map__30821 == null))))?(((((map__30821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30821):map__30821);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30821__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__30820__$1 = G__30820;
while(true){
var d__$2 = d__$1;
var map__30827 = G__30820__$1;
var map__30827__$1 = (((((!((map__30827 == null))))?(((((map__30827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30827):map__30827);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30827__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__32094 = (d__$2 + (1));
var G__32095 = shadow__$1;
d__$1 = G__32094;
G__30820__$1 = G__32095;
continue;
} else {
if(cljs.core.truth_((cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)) : cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__30836){
var map__30837 = p__30836;
var map__30837__$1 = (((((!((map__30837 == null))))?(((((map__30837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30837):map__30837);
var name_var = map__30837__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__30844 = info;
var map__30844__$1 = (((((!((map__30844 == null))))?(((((map__30844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30844):map__30844);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30844__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30844__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__30846 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__30846) : cljs.compiler.munge.call(null,G__30846));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__30853 = arguments.length;
switch (G__30853) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__30858 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",17,1,11478,11478,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__30858.cljs$core$IFn$_invoke$arity$1 ? fexpr__30858.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__30858.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__30860 = cp;
switch (G__30860) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__30871_32143 = cljs.core.seq(s);
var chunk__30872_32144 = null;
var count__30873_32145 = (0);
var i__30874_32146 = (0);
while(true){
if((i__30874_32146 < count__30873_32145)){
var c_32147 = chunk__30872_32144.cljs$core$IIndexed$_nth$arity$2(null,i__30874_32146);
sb.append(cljs.compiler.escape_char(c_32147));


var G__32148 = seq__30871_32143;
var G__32149 = chunk__30872_32144;
var G__32150 = count__30873_32145;
var G__32151 = (i__30874_32146 + (1));
seq__30871_32143 = G__32148;
chunk__30872_32144 = G__32149;
count__30873_32145 = G__32150;
i__30874_32146 = G__32151;
continue;
} else {
var temp__5735__auto___32154 = cljs.core.seq(seq__30871_32143);
if(temp__5735__auto___32154){
var seq__30871_32155__$1 = temp__5735__auto___32154;
if(cljs.core.chunked_seq_QMARK_(seq__30871_32155__$1)){
var c__4550__auto___32156 = cljs.core.chunk_first(seq__30871_32155__$1);
var G__32159 = cljs.core.chunk_rest(seq__30871_32155__$1);
var G__32160 = c__4550__auto___32156;
var G__32161 = cljs.core.count(c__4550__auto___32156);
var G__32162 = (0);
seq__30871_32143 = G__32159;
chunk__30872_32144 = G__32160;
count__30873_32145 = G__32161;
i__30874_32146 = G__32162;
continue;
} else {
var c_32163 = cljs.core.first(seq__30871_32155__$1);
sb.append(cljs.compiler.escape_char(c_32163));


var G__32164 = cljs.core.next(seq__30871_32155__$1);
var G__32165 = null;
var G__32166 = (0);
var G__32167 = (0);
seq__30871_32143 = G__32164;
chunk__30872_32144 = G__32165;
count__30873_32145 = G__32166;
i__30874_32146 = G__32167;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30888 = cljs.core.get_global_hierarchy;
return (fexpr__30888.cljs$core$IFn$_invoke$arity$0 ? fexpr__30888.cljs$core$IFn$_invoke$arity$0() : fexpr__30888.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__30890_32170 = ast;
var map__30890_32171__$1 = (((((!((map__30890_32170 == null))))?(((((map__30890_32170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30890_32170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30890_32170):map__30890_32170);
var env_32172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30890_32171__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_32172))){
var map__30892_32173 = env_32172;
var map__30892_32174__$1 = (((((!((map__30892_32173 == null))))?(((((map__30892_32173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30892_32173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30892_32173):map__30892_32173);
var line_32175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30892_32174__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30892_32174__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__30892_32173,map__30892_32174__$1,line_32175,column_32176,map__30890_32170,map__30890_32171__$1,env_32172){
return (function (m){
var minfo = (function (){var G__30897 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__30899 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__30898 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__30898.cljs$core$IFn$_invoke$arity$1 ? fexpr__30898.cljs$core$IFn$_invoke$arity$1(G__30899) : fexpr__30898.call(null,G__30899));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30897,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__30897;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_32175 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__30892_32173,map__30892_32174__$1,line_32175,column_32176,map__30890_32170,map__30890_32171__$1,env_32172){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_32176)?(column_32176 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__30892_32173,map__30892_32174__$1,line_32175,column_32176,map__30890_32170,map__30890_32171__$1,env_32172){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__30892_32173,map__30892_32174__$1,line_32175,column_32176,map__30890_32170,map__30890_32171__$1,env_32172))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__30892_32173,map__30892_32174__$1,line_32175,column_32176,map__30890_32170,map__30890_32171__$1,env_32172))
,cljs.core.sorted_map()));
});})(map__30892_32173,map__30892_32174__$1,line_32175,column_32176,map__30890_32170,map__30890_32171__$1,env_32172))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__30918 = arguments.length;
switch (G__30918) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___32196 = arguments.length;
var i__4731__auto___32197 = (0);
while(true){
if((i__4731__auto___32197 < len__4730__auto___32196)){
args_arr__4751__auto__.push((arguments[i__4731__auto___32197]));

var G__32198 = (i__4731__auto___32197 + (1));
i__4731__auto___32197 = G__32198;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_32204 = (function (){var G__30932 = a;
if((!(typeof a === 'string'))){
return G__30932.toString();
} else {
return G__30932;
}
})();
var temp__5739__auto___32205 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___32205 == null)){
} else {
var sm_data_32208 = temp__5739__auto___32205;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_32208,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_32208,temp__5739__auto___32205,s_32204){
return (function (p1__30900_SHARP_){
return (p1__30900_SHARP_ + s_32204.length);
});})(sm_data_32208,temp__5739__auto___32205,s_32204))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_32204], 0));

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__30938 = cljs.core.seq(xs);
var chunk__30939 = null;
var count__30940 = (0);
var i__30941 = (0);
while(true){
if((i__30941 < count__30940)){
var x = chunk__30939.cljs$core$IIndexed$_nth$arity$2(null,i__30941);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__32218 = seq__30938;
var G__32219 = chunk__30939;
var G__32220 = count__30940;
var G__32221 = (i__30941 + (1));
seq__30938 = G__32218;
chunk__30939 = G__32219;
count__30940 = G__32220;
i__30941 = G__32221;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30938);
if(temp__5735__auto__){
var seq__30938__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30938__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30938__$1);
var G__32225 = cljs.core.chunk_rest(seq__30938__$1);
var G__32226 = c__4550__auto__;
var G__32227 = cljs.core.count(c__4550__auto__);
var G__32228 = (0);
seq__30938 = G__32225;
chunk__30939 = G__32226;
count__30940 = G__32227;
i__30941 = G__32228;
continue;
} else {
var x = cljs.core.first(seq__30938__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__32229 = cljs.core.next(seq__30938__$1);
var G__32230 = null;
var G__32231 = (0);
var G__32232 = (0);
seq__30938 = G__32229;
chunk__30939 = G__32230;
count__30940 = G__32231;
i__30941 = G__32232;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq30904){
var G__30907 = cljs.core.first(seq30904);
var seq30904__$1 = cljs.core.next(seq30904);
var G__30909 = cljs.core.first(seq30904__$1);
var seq30904__$2 = cljs.core.next(seq30904__$1);
var G__30911 = cljs.core.first(seq30904__$2);
var seq30904__$3 = cljs.core.next(seq30904__$2);
var G__30912 = cljs.core.first(seq30904__$3);
var seq30904__$4 = cljs.core.next(seq30904__$3);
var G__30914 = cljs.core.first(seq30904__$4);
var seq30904__$5 = cljs.core.next(seq30904__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30907,G__30909,G__30911,G__30912,G__30914,seq30904__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__30961){
var map__30962 = p__30961;
var map__30962__$1 = (((((!((map__30962 == null))))?(((((map__30962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30962):map__30962);
var m = map__30962__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30962__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__30972 = arguments.length;
switch (G__30972) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___32258 = arguments.length;
var i__4731__auto___32259 = (0);
while(true){
if((i__4731__auto___32259 < len__4730__auto___32258)){
args_arr__4751__auto__.push((arguments[i__4731__auto___32259]));

var G__32270 = (i__4731__auto___32259 + (1));
i__4731__auto___32259 = G__32270;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__30979_32274 = cljs.core.seq(xs);
var chunk__30980_32275 = null;
var count__30981_32276 = (0);
var i__30982_32277 = (0);
while(true){
if((i__30982_32277 < count__30981_32276)){
var x_32279 = chunk__30980_32275.cljs$core$IIndexed$_nth$arity$2(null,i__30982_32277);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_32279);


var G__32281 = seq__30979_32274;
var G__32282 = chunk__30980_32275;
var G__32283 = count__30981_32276;
var G__32284 = (i__30982_32277 + (1));
seq__30979_32274 = G__32281;
chunk__30980_32275 = G__32282;
count__30981_32276 = G__32283;
i__30982_32277 = G__32284;
continue;
} else {
var temp__5735__auto___32285 = cljs.core.seq(seq__30979_32274);
if(temp__5735__auto___32285){
var seq__30979_32286__$1 = temp__5735__auto___32285;
if(cljs.core.chunked_seq_QMARK_(seq__30979_32286__$1)){
var c__4550__auto___32287 = cljs.core.chunk_first(seq__30979_32286__$1);
var G__32288 = cljs.core.chunk_rest(seq__30979_32286__$1);
var G__32289 = c__4550__auto___32287;
var G__32290 = cljs.core.count(c__4550__auto___32287);
var G__32291 = (0);
seq__30979_32274 = G__32288;
chunk__30980_32275 = G__32289;
count__30981_32276 = G__32290;
i__30982_32277 = G__32291;
continue;
} else {
var x_32295 = cljs.core.first(seq__30979_32286__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_32295);


var G__32296 = cljs.core.next(seq__30979_32286__$1);
var G__32297 = null;
var G__32298 = (0);
var G__32299 = (0);
seq__30979_32274 = G__32296;
chunk__30980_32275 = G__32297;
count__30981_32276 = G__32298;
i__30982_32277 = G__32299;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq30966){
var G__30967 = cljs.core.first(seq30966);
var seq30966__$1 = cljs.core.next(seq30966);
var G__30968 = cljs.core.first(seq30966__$1);
var seq30966__$2 = cljs.core.next(seq30966__$1);
var G__30969 = cljs.core.first(seq30966__$2);
var seq30966__$3 = cljs.core.next(seq30966__$2);
var G__30970 = cljs.core.first(seq30966__$3);
var seq30966__$4 = cljs.core.next(seq30966__$3);
var G__30971 = cljs.core.first(seq30966__$4);
var seq30966__$5 = cljs.core.next(seq30966__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30967,G__30968,G__30969,G__30970,G__30971,seq30966__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31010_32301 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31011_32302 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31012_32303 = true;
var _STAR_print_fn_STAR__temp_val__31013_32304 = ((function (_STAR_print_newline_STAR__orig_val__31010_32301,_STAR_print_fn_STAR__orig_val__31011_32302,_STAR_print_newline_STAR__temp_val__31012_32303,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31010_32301,_STAR_print_fn_STAR__orig_val__31011_32302,_STAR_print_newline_STAR__temp_val__31012_32303,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31012_32303;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31013_32304;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31011_32302;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31010_32301;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31018 = cljs.core.get_global_hierarchy;
return (fexpr__31018.cljs$core$IFn$_invoke$arity$0 ? fexpr__31018.cljs$core$IFn$_invoke$arity$0() : fexpr__31018.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__31030 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31030,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31030,(1),null);
var G__31033 = ns;
var G__31034 = name;
var G__31035 = ((function (G__31033,G__31034,vec__31030,ns,name){
return (function (){
var G__31036 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__31036) : cljs.compiler.emit_constant.call(null,G__31036));
});})(G__31033,G__31034,vec__31030,ns,name))
;
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__31033,G__31034,G__31035) : cljs.compiler.emit_record_value.call(null,G__31033,G__31034,G__31035));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__31037 = cljs.core.keys(x);
var G__31038 = cljs.core.vals(x);
var G__31039 = cljs.compiler.emit_constants_comma_sep;
var G__31040 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__31037,G__31038,G__31039,G__31040) : cljs.compiler.emit_map.call(null,G__31037,G__31038,G__31039,G__31040));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return (cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.compiler.emit_constant_STAR_.call(null,x));

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__31044 = ((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta(v);
});})(m))
;
var G__31045 = ((function (G__31044,m){
return (function (){
return cljs.compiler.emit_constant_no_meta(m);
});})(G__31044,m))
;
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__31044,G__31045) : cljs.compiler.emit_with_meta.call(null,G__31044,G__31045));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__31050 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31050,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31050,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31050,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
var G__31069 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__31069) : x.call(null,G__31069));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
var G__31074 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__31074) : x.call(null,G__31074));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__31080 = items;
var G__31081 = ((function (G__31080,items){
return (function (p1__31079_SHARP_){
return ((function (G__31080,items){
return (function (){
return cljs.compiler.emit_constant(p1__31079_SHARP_);
});
;})(G__31080,items))
});})(G__31080,items))
;
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__31080,G__31081) : cljs.compiler.emit_js_object.call(null,G__31080,G__31081));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__31087){
var map__31088 = p__31087;
var map__31088__$1 = (((((!((map__31088 == null))))?(((((map__31088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31088):map__31088);
var ast = map__31088__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31088__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31088__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31088__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__31091 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__31091__$1 = (((((!((map__31091 == null))))?(((((map__31091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31091):map__31091);
var cenv = map__31091__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31091__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4131__auto__ = js_module_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__31100 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var G__31104 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__31104) : cljs.compiler.es5_GT__EQ_.call(null,G__31104));
})();
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__31100,cljs.analyzer.es5_allowed);
} else {
return G__31100;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__31106 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__31106,reserved);
} else {
return G__31106;
}
})();
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__31107_32371 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__31107_32372__$1 = (((G__31107_32371 instanceof cljs.core.Keyword))?G__31107_32371.fqn:null);
switch (G__31107_32372__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4120__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__31111){
var map__31112 = p__31111;
var map__31112__$1 = (((((!((map__31112 == null))))?(((((map__31112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31112):map__31112);
var arg = map__31112__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31112__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31112__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31112__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31112__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__31115 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__31115__$1 = (((((!((map__31115 == null))))?(((((map__31115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31115):map__31115);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__31125){
var map__31126 = p__31125;
var map__31126__$1 = (((((!((map__31126 == null))))?(((((map__31126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31126):map__31126);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_(((function (keys__$1){
return (function (p1__31130_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__31130_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__31132 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__31132) : comma_sep.call(null,G__31132));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__31133 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__31133) : comma_sep.call(null,G__31133));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__31137){
var map__31138 = p__31137;
var map__31138__$1 = (((((!((map__31138 == null))))?(((((map__31138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31138):map__31138);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31138__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31138__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31138__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__31141){
var map__31142 = p__31141;
var map__31142__$1 = (((((!((map__31142 == null))))?(((((map__31142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31142):map__31142);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31142__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31142__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_(((function (items__$1){
return (function (p1__31149_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__31149_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__31151 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__31151) : comma_sep.call(null,G__31151));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__31152){
var map__31153 = p__31152;
var map__31153__$1 = (((((!((map__31153 == null))))?(((((map__31153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31153):map__31153);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31153__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31153__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___32416 = cljs.core.seq(items);
if(temp__5735__auto___32416){
var items_32417__$1 = temp__5735__auto___32416;
var vec__31157_32419 = items_32417__$1;
var seq__31158_32420 = cljs.core.seq(vec__31157_32419);
var first__31159_32421 = cljs.core.first(seq__31158_32420);
var seq__31158_32422__$1 = cljs.core.next(seq__31158_32420);
var vec__31160_32423 = first__31159_32421;
var k_32424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31160_32423,(0),null);
var v_32425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31160_32423,(1),null);
var r_32426 = seq__31158_32422__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_32424),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_32425) : emit_js_object_val.call(null,v_32425)));

var seq__31163_32430 = cljs.core.seq(r_32426);
var chunk__31164_32431 = null;
var count__31165_32432 = (0);
var i__31166_32433 = (0);
while(true){
if((i__31166_32433 < count__31165_32432)){
var vec__31179_32434 = chunk__31164_32431.cljs$core$IIndexed$_nth$arity$2(null,i__31166_32433);
var k_32435__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31179_32434,(0),null);
var v_32436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31179_32434,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_32435__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_32436__$1) : emit_js_object_val.call(null,v_32436__$1)));


var G__32438 = seq__31163_32430;
var G__32439 = chunk__31164_32431;
var G__32440 = count__31165_32432;
var G__32441 = (i__31166_32433 + (1));
seq__31163_32430 = G__32438;
chunk__31164_32431 = G__32439;
count__31165_32432 = G__32440;
i__31166_32433 = G__32441;
continue;
} else {
var temp__5735__auto___32442__$1 = cljs.core.seq(seq__31163_32430);
if(temp__5735__auto___32442__$1){
var seq__31163_32443__$1 = temp__5735__auto___32442__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31163_32443__$1)){
var c__4550__auto___32444 = cljs.core.chunk_first(seq__31163_32443__$1);
var G__32445 = cljs.core.chunk_rest(seq__31163_32443__$1);
var G__32446 = c__4550__auto___32444;
var G__32447 = cljs.core.count(c__4550__auto___32444);
var G__32448 = (0);
seq__31163_32430 = G__32445;
chunk__31164_32431 = G__32446;
count__31165_32432 = G__32447;
i__31166_32433 = G__32448;
continue;
} else {
var vec__31185_32449 = cljs.core.first(seq__31163_32443__$1);
var k_32450__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31185_32449,(0),null);
var v_32451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31185_32449,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_32450__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_32451__$1) : emit_js_object_val.call(null,v_32451__$1)));


var G__32456 = cljs.core.next(seq__31163_32443__$1);
var G__32457 = null;
var G__32458 = (0);
var G__32459 = (0);
seq__31163_32430 = G__32456;
chunk__31164_32431 = G__32457;
count__31165_32432 = G__32458;
i__31166_32433 = G__32459;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__31193){
var map__31194 = p__31193;
var map__31194__$1 = (((((!((map__31194 == null))))?(((((map__31194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31194):map__31194);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31194__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31194__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31194__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__31198){
var map__31199 = p__31198;
var map__31199__$1 = (((((!((map__31199 == null))))?(((((map__31199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31199):map__31199);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__31205){
var map__31206 = p__31205;
var map__31206__$1 = (((((!((map__31206 == null))))?(((((map__31206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31206):map__31206);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31206__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__31212){
var map__31213 = p__31212;
var map__31213__$1 = (((((!((map__31213 == null))))?(((((map__31213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31213):map__31213);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31213__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31213__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__31220 = cljs.analyzer.unwrap_quote(expr);
var map__31220__$1 = (((((!((map__31220 == null))))?(((((map__31220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31220):map__31220);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31220__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31220__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31220__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4120__auto__){
var and__4120__auto____$1 = form;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__31231 = cljs.analyzer.unwrap_quote(expr);
var map__31231__$1 = (((((!((map__31231 == null))))?(((((map__31231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31231):map__31231);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4131__auto__ = (function (){var fexpr__31243 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__31243.cljs$core$IFn$_invoke$arity$1 ? fexpr__31243.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__31243.call(null,tag));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__31248){
var map__31251 = p__31248;
var map__31251__$1 = (((((!((map__31251 == null))))?(((((map__31251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31251):map__31251);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4131__auto__ = unchecked;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__31269){
var map__31271 = p__31269;
var map__31271__$1 = (((((!((map__31271 == null))))?(((((map__31271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31271):map__31271);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31271__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31271__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31271__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31271__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__31283_32495 = cljs.core.seq(nodes);
var chunk__31284_32496 = null;
var count__31285_32497 = (0);
var i__31286_32498 = (0);
while(true){
if((i__31286_32498 < count__31285_32497)){
var map__31327_32499 = chunk__31284_32496.cljs$core$IIndexed$_nth$arity$2(null,i__31286_32498);
var map__31327_32500__$1 = (((((!((map__31327_32499 == null))))?(((((map__31327_32499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31327_32499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31327_32499):map__31327_32499);
var ts_32501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31327_32500__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__31328_32502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31327_32500__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__31328_32503__$1 = (((((!((map__31328_32502 == null))))?(((((map__31328_32502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31328_32502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31328_32502):map__31328_32502);
var then_32504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31328_32503__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__31335_32507 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_32501));
var chunk__31336_32508 = null;
var count__31337_32509 = (0);
var i__31338_32510 = (0);
while(true){
if((i__31338_32510 < count__31337_32509)){
var test_32511 = chunk__31336_32508.cljs$core$IIndexed$_nth$arity$2(null,i__31338_32510);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_32511,":");


var G__32512 = seq__31335_32507;
var G__32513 = chunk__31336_32508;
var G__32514 = count__31337_32509;
var G__32515 = (i__31338_32510 + (1));
seq__31335_32507 = G__32512;
chunk__31336_32508 = G__32513;
count__31337_32509 = G__32514;
i__31338_32510 = G__32515;
continue;
} else {
var temp__5735__auto___32516 = cljs.core.seq(seq__31335_32507);
if(temp__5735__auto___32516){
var seq__31335_32517__$1 = temp__5735__auto___32516;
if(cljs.core.chunked_seq_QMARK_(seq__31335_32517__$1)){
var c__4550__auto___32518 = cljs.core.chunk_first(seq__31335_32517__$1);
var G__32519 = cljs.core.chunk_rest(seq__31335_32517__$1);
var G__32520 = c__4550__auto___32518;
var G__32521 = cljs.core.count(c__4550__auto___32518);
var G__32522 = (0);
seq__31335_32507 = G__32519;
chunk__31336_32508 = G__32520;
count__31337_32509 = G__32521;
i__31338_32510 = G__32522;
continue;
} else {
var test_32525 = cljs.core.first(seq__31335_32517__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_32525,":");


var G__32526 = cljs.core.next(seq__31335_32517__$1);
var G__32527 = null;
var G__32528 = (0);
var G__32529 = (0);
seq__31335_32507 = G__32526;
chunk__31336_32508 = G__32527;
count__31337_32509 = G__32528;
i__31338_32510 = G__32529;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_32504);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_32504);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__32531 = seq__31283_32495;
var G__32532 = chunk__31284_32496;
var G__32533 = count__31285_32497;
var G__32534 = (i__31286_32498 + (1));
seq__31283_32495 = G__32531;
chunk__31284_32496 = G__32532;
count__31285_32497 = G__32533;
i__31286_32498 = G__32534;
continue;
} else {
var temp__5735__auto___32535 = cljs.core.seq(seq__31283_32495);
if(temp__5735__auto___32535){
var seq__31283_32536__$1 = temp__5735__auto___32535;
if(cljs.core.chunked_seq_QMARK_(seq__31283_32536__$1)){
var c__4550__auto___32537 = cljs.core.chunk_first(seq__31283_32536__$1);
var G__32538 = cljs.core.chunk_rest(seq__31283_32536__$1);
var G__32539 = c__4550__auto___32537;
var G__32540 = cljs.core.count(c__4550__auto___32537);
var G__32541 = (0);
seq__31283_32495 = G__32538;
chunk__31284_32496 = G__32539;
count__31285_32497 = G__32540;
i__31286_32498 = G__32541;
continue;
} else {
var map__31341_32542 = cljs.core.first(seq__31283_32536__$1);
var map__31341_32543__$1 = (((((!((map__31341_32542 == null))))?(((((map__31341_32542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31341_32542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31341_32542):map__31341_32542);
var ts_32544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31341_32543__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__31342_32545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31341_32543__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__31342_32546__$1 = (((((!((map__31342_32545 == null))))?(((((map__31342_32545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31342_32545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31342_32545):map__31342_32545);
var then_32547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31342_32546__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__31346_32553 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_32544));
var chunk__31347_32554 = null;
var count__31348_32555 = (0);
var i__31349_32556 = (0);
while(true){
if((i__31349_32556 < count__31348_32555)){
var test_32559 = chunk__31347_32554.cljs$core$IIndexed$_nth$arity$2(null,i__31349_32556);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_32559,":");


var G__32562 = seq__31346_32553;
var G__32563 = chunk__31347_32554;
var G__32564 = count__31348_32555;
var G__32565 = (i__31349_32556 + (1));
seq__31346_32553 = G__32562;
chunk__31347_32554 = G__32563;
count__31348_32555 = G__32564;
i__31349_32556 = G__32565;
continue;
} else {
var temp__5735__auto___32566__$1 = cljs.core.seq(seq__31346_32553);
if(temp__5735__auto___32566__$1){
var seq__31346_32568__$1 = temp__5735__auto___32566__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31346_32568__$1)){
var c__4550__auto___32569 = cljs.core.chunk_first(seq__31346_32568__$1);
var G__32570 = cljs.core.chunk_rest(seq__31346_32568__$1);
var G__32571 = c__4550__auto___32569;
var G__32572 = cljs.core.count(c__4550__auto___32569);
var G__32573 = (0);
seq__31346_32553 = G__32570;
chunk__31347_32554 = G__32571;
count__31348_32555 = G__32572;
i__31349_32556 = G__32573;
continue;
} else {
var test_32577 = cljs.core.first(seq__31346_32568__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_32577,":");


var G__32578 = cljs.core.next(seq__31346_32568__$1);
var G__32579 = null;
var G__32580 = (0);
var G__32581 = (0);
seq__31346_32553 = G__32578;
chunk__31347_32554 = G__32579;
count__31348_32555 = G__32580;
i__31349_32556 = G__32581;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_32547);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_32547);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__32584 = cljs.core.next(seq__31283_32536__$1);
var G__32585 = null;
var G__32586 = (0);
var G__32587 = (0);
seq__31283_32495 = G__32584;
chunk__31284_32496 = G__32585;
count__31285_32497 = G__32586;
i__31286_32498 = G__32587;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__31369){
var map__31371 = p__31369;
var map__31371__$1 = (((((!((map__31371 == null))))?(((((map__31371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31371):map__31371);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31395 = env;
var G__31396 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__31395,G__31396) : cljs.compiler.resolve_type.call(null,G__31395,G__31396));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__31397 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31397,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31397,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__31397,fstr,rstr,ret_t,axstr){
return (function (p1__31392_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__31392_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__31392_SHARP_));
});})(idx,vec__31397,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__31404 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__31404,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__31404;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31407 = env;
var G__31408 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__31407,G__31408) : cljs.compiler.resolve_type.call(null,G__31407,G__31408));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__31409_SHARP_){
return cljs.compiler.resolve_type(env,p1__31409_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__31411 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__31412 = cljs.core.seq(vec__31411);
var first__31413 = cljs.core.first(seq__31412);
var seq__31412__$1 = cljs.core.next(seq__31412);
var p = first__31413;
var first__31413__$1 = cljs.core.first(seq__31412__$1);
var seq__31412__$2 = cljs.core.next(seq__31412__$1);
var ts = first__31413__$1;
var first__31413__$2 = cljs.core.first(seq__31412__$2);
var seq__31412__$3 = cljs.core.next(seq__31412__$2);
var n = first__31413__$2;
var xs = seq__31412__$3;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__31414 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__31415 = cljs.core.seq(vec__31414);
var first__31416 = cljs.core.first(seq__31415);
var seq__31415__$1 = cljs.core.next(seq__31415);
var p = first__31416;
var first__31416__$1 = cljs.core.first(seq__31415__$1);
var seq__31415__$2 = cljs.core.next(seq__31415__$1);
var ts = first__31416__$1;
var xs = seq__31415__$2;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__31422 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__31421 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__31421.cljs$core$IFn$_invoke$arity$1 ? fexpr__31421.cljs$core$IFn$_invoke$arity$1(G__31422) : fexpr__31421.call(null,G__31422));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__31433 = arguments.length;
switch (G__31433) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__31453 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__31427_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__31427_SHARP_);
} else {
return p1__31427_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__31454 = cljs.core.seq(vec__31453);
var first__31455 = cljs.core.first(seq__31454);
var seq__31454__$1 = cljs.core.next(seq__31454);
var x = first__31455;
var ys = seq__31454__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__31460 = cljs.core.seq(ys);
var chunk__31461 = null;
var count__31462 = (0);
var i__31464 = (0);
while(true){
if((i__31464 < count__31462)){
var next_line = chunk__31461.cljs$core$IIndexed$_nth$arity$2(null,i__31464);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__32653 = seq__31460;
var G__32654 = chunk__31461;
var G__32655 = count__31462;
var G__32656 = (i__31464 + (1));
seq__31460 = G__32653;
chunk__31461 = G__32654;
count__31462 = G__32655;
i__31464 = G__32656;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31460);
if(temp__5735__auto__){
var seq__31460__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31460__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31460__$1);
var G__32661 = cljs.core.chunk_rest(seq__31460__$1);
var G__32662 = c__4550__auto__;
var G__32663 = cljs.core.count(c__4550__auto__);
var G__32664 = (0);
seq__31460 = G__32661;
chunk__31461 = G__32662;
count__31462 = G__32663;
i__31464 = G__32664;
continue;
} else {
var next_line = cljs.core.first(seq__31460__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__32665 = cljs.core.next(seq__31460__$1);
var G__32666 = null;
var G__32667 = (0);
var G__32668 = (0);
seq__31460 = G__32665;
chunk__31461 = G__32666;
count__31462 = G__32667;
i__31464 = G__32668;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__31472_32669 = cljs.core.seq(docs__$2);
var chunk__31473_32670 = null;
var count__31474_32671 = (0);
var i__31475_32672 = (0);
while(true){
if((i__31475_32672 < count__31474_32671)){
var e_32675 = chunk__31473_32670.cljs$core$IIndexed$_nth$arity$2(null,i__31475_32672);
if(cljs.core.truth_(e_32675)){
print_comment_lines(e_32675);
} else {
}


var G__32677 = seq__31472_32669;
var G__32678 = chunk__31473_32670;
var G__32679 = count__31474_32671;
var G__32680 = (i__31475_32672 + (1));
seq__31472_32669 = G__32677;
chunk__31473_32670 = G__32678;
count__31474_32671 = G__32679;
i__31475_32672 = G__32680;
continue;
} else {
var temp__5735__auto___32681 = cljs.core.seq(seq__31472_32669);
if(temp__5735__auto___32681){
var seq__31472_32682__$1 = temp__5735__auto___32681;
if(cljs.core.chunked_seq_QMARK_(seq__31472_32682__$1)){
var c__4550__auto___32683 = cljs.core.chunk_first(seq__31472_32682__$1);
var G__32684 = cljs.core.chunk_rest(seq__31472_32682__$1);
var G__32685 = c__4550__auto___32683;
var G__32686 = cljs.core.count(c__4550__auto___32683);
var G__32687 = (0);
seq__31472_32669 = G__32684;
chunk__31473_32670 = G__32685;
count__31474_32671 = G__32686;
i__31475_32672 = G__32687;
continue;
} else {
var e_32688 = cljs.core.first(seq__31472_32682__$1);
if(cljs.core.truth_(e_32688)){
print_comment_lines(e_32688);
} else {
}


var G__32690 = cljs.core.next(seq__31472_32682__$1);
var G__32691 = null;
var G__32692 = (0);
var G__32693 = (0);
seq__31472_32669 = G__32690;
chunk__31473_32670 = G__32691;
count__31474_32671 = G__32692;
i__31475_32672 = G__32693;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4120__auto__ = cljs.core.some(((function (opts){
return (function (p1__31488_SHARP_){
return goog.string.startsWith(p1__31488_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = opts;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4120__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__31498){
var map__31499 = p__31498;
var map__31499__$1 = (((((!((map__31499 == null))))?(((((map__31499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31499):map__31499);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4131__auto__ = init;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4120__auto__){
return test;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__31501){
var map__31502 = p__31501;
var map__31502__$1 = (((((!((map__31502 == null))))?(((((map__31502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31502):map__31502);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31502__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31502__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__31504_32718 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__31505_32719 = null;
var count__31506_32720 = (0);
var i__31507_32721 = (0);
while(true){
if((i__31507_32721 < count__31506_32720)){
var vec__31517_32722 = chunk__31505_32719.cljs$core$IIndexed$_nth$arity$2(null,i__31507_32721);
var i_32723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31517_32722,(0),null);
var param_32724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31517_32722,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_32724);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__32727 = seq__31504_32718;
var G__32728 = chunk__31505_32719;
var G__32729 = count__31506_32720;
var G__32730 = (i__31507_32721 + (1));
seq__31504_32718 = G__32727;
chunk__31505_32719 = G__32728;
count__31506_32720 = G__32729;
i__31507_32721 = G__32730;
continue;
} else {
var temp__5735__auto___32731 = cljs.core.seq(seq__31504_32718);
if(temp__5735__auto___32731){
var seq__31504_32732__$1 = temp__5735__auto___32731;
if(cljs.core.chunked_seq_QMARK_(seq__31504_32732__$1)){
var c__4550__auto___32733 = cljs.core.chunk_first(seq__31504_32732__$1);
var G__32734 = cljs.core.chunk_rest(seq__31504_32732__$1);
var G__32735 = c__4550__auto___32733;
var G__32736 = cljs.core.count(c__4550__auto___32733);
var G__32737 = (0);
seq__31504_32718 = G__32734;
chunk__31505_32719 = G__32735;
count__31506_32720 = G__32736;
i__31507_32721 = G__32737;
continue;
} else {
var vec__31524_32740 = cljs.core.first(seq__31504_32732__$1);
var i_32741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31524_32740,(0),null);
var param_32742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31524_32740,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_32742);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__32749 = cljs.core.next(seq__31504_32732__$1);
var G__32750 = null;
var G__32751 = (0);
var G__32752 = (0);
seq__31504_32718 = G__32749;
chunk__31505_32719 = G__32750;
count__31506_32720 = G__32751;
i__31507_32721 = G__32752;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__31528_32757 = cljs.core.seq(params);
var chunk__31529_32758 = null;
var count__31530_32759 = (0);
var i__31531_32760 = (0);
while(true){
if((i__31531_32760 < count__31530_32759)){
var param_32763 = chunk__31529_32758.cljs$core$IIndexed$_nth$arity$2(null,i__31531_32760);
cljs.compiler.emit(param_32763);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32763,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32768 = seq__31528_32757;
var G__32769 = chunk__31529_32758;
var G__32770 = count__31530_32759;
var G__32771 = (i__31531_32760 + (1));
seq__31528_32757 = G__32768;
chunk__31529_32758 = G__32769;
count__31530_32759 = G__32770;
i__31531_32760 = G__32771;
continue;
} else {
var temp__5735__auto___32772 = cljs.core.seq(seq__31528_32757);
if(temp__5735__auto___32772){
var seq__31528_32773__$1 = temp__5735__auto___32772;
if(cljs.core.chunked_seq_QMARK_(seq__31528_32773__$1)){
var c__4550__auto___32774 = cljs.core.chunk_first(seq__31528_32773__$1);
var G__32776 = cljs.core.chunk_rest(seq__31528_32773__$1);
var G__32777 = c__4550__auto___32774;
var G__32778 = cljs.core.count(c__4550__auto___32774);
var G__32779 = (0);
seq__31528_32757 = G__32776;
chunk__31529_32758 = G__32777;
count__31530_32759 = G__32778;
i__31531_32760 = G__32779;
continue;
} else {
var param_32780 = cljs.core.first(seq__31528_32773__$1);
cljs.compiler.emit(param_32780);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32780,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32783 = cljs.core.next(seq__31528_32773__$1);
var G__32784 = null;
var G__32785 = (0);
var G__32786 = (0);
seq__31528_32757 = G__32783;
chunk__31529_32758 = G__32784;
count__31530_32759 = G__32785;
i__31531_32760 = G__32786;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__31536_32788 = cljs.core.seq(params);
var chunk__31537_32789 = null;
var count__31538_32790 = (0);
var i__31539_32791 = (0);
while(true){
if((i__31539_32791 < count__31538_32790)){
var param_32792 = chunk__31537_32789.cljs$core$IIndexed$_nth$arity$2(null,i__31539_32791);
cljs.compiler.emit(param_32792);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32792,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32794 = seq__31536_32788;
var G__32795 = chunk__31537_32789;
var G__32796 = count__31538_32790;
var G__32797 = (i__31539_32791 + (1));
seq__31536_32788 = G__32794;
chunk__31537_32789 = G__32795;
count__31538_32790 = G__32796;
i__31539_32791 = G__32797;
continue;
} else {
var temp__5735__auto___32799 = cljs.core.seq(seq__31536_32788);
if(temp__5735__auto___32799){
var seq__31536_32800__$1 = temp__5735__auto___32799;
if(cljs.core.chunked_seq_QMARK_(seq__31536_32800__$1)){
var c__4550__auto___32802 = cljs.core.chunk_first(seq__31536_32800__$1);
var G__32803 = cljs.core.chunk_rest(seq__31536_32800__$1);
var G__32804 = c__4550__auto___32802;
var G__32805 = cljs.core.count(c__4550__auto___32802);
var G__32806 = (0);
seq__31536_32788 = G__32803;
chunk__31537_32789 = G__32804;
count__31538_32790 = G__32805;
i__31539_32791 = G__32806;
continue;
} else {
var param_32807 = cljs.core.first(seq__31536_32800__$1);
cljs.compiler.emit(param_32807);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32807,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32809 = cljs.core.next(seq__31536_32800__$1);
var G__32810 = null;
var G__32811 = (0);
var G__32812 = (0);
seq__31536_32788 = G__32809;
chunk__31537_32789 = G__32810;
count__31538_32790 = G__32811;
i__31539_32791 = G__32812;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__31544 = cljs.core.seq(params);
var chunk__31545 = null;
var count__31546 = (0);
var i__31547 = (0);
while(true){
if((i__31547 < count__31546)){
var param = chunk__31545.cljs$core$IIndexed$_nth$arity$2(null,i__31547);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32823 = seq__31544;
var G__32824 = chunk__31545;
var G__32825 = count__31546;
var G__32826 = (i__31547 + (1));
seq__31544 = G__32823;
chunk__31545 = G__32824;
count__31546 = G__32825;
i__31547 = G__32826;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31544);
if(temp__5735__auto__){
var seq__31544__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31544__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31544__$1);
var G__32828 = cljs.core.chunk_rest(seq__31544__$1);
var G__32829 = c__4550__auto__;
var G__32830 = cljs.core.count(c__4550__auto__);
var G__32831 = (0);
seq__31544 = G__32828;
chunk__31545 = G__32829;
count__31546 = G__32830;
i__31547 = G__32831;
continue;
} else {
var param = cljs.core.first(seq__31544__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32837 = cljs.core.next(seq__31544__$1);
var G__32838 = null;
var G__32839 = (0);
var G__32840 = (0);
seq__31544 = G__32837;
chunk__31545 = G__32838;
count__31546 = G__32839;
i__31547 = G__32840;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__31552){
var map__31553 = p__31552;
var map__31553__$1 = (((((!((map__31553 == null))))?(((((map__31553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31553):map__31553);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31553__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31553__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31553__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31553__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31553__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31553__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__31555){
var map__31556 = p__31555;
var map__31556__$1 = (((((!((map__31556 == null))))?(((((map__31556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31556):map__31556);
var f = map__31556__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31556__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31556__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31556__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31556__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31556__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31556__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31556__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_32860__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_32861 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_32860__$1);
var delegate_name_32862 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_32861),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_32862," = function (");

var seq__31559_32863 = cljs.core.seq(params);
var chunk__31560_32864 = null;
var count__31561_32865 = (0);
var i__31562_32866 = (0);
while(true){
if((i__31562_32866 < count__31561_32865)){
var param_32867 = chunk__31560_32864.cljs$core$IIndexed$_nth$arity$2(null,i__31562_32866);
cljs.compiler.emit(param_32867);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32867,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32872 = seq__31559_32863;
var G__32873 = chunk__31560_32864;
var G__32874 = count__31561_32865;
var G__32875 = (i__31562_32866 + (1));
seq__31559_32863 = G__32872;
chunk__31560_32864 = G__32873;
count__31561_32865 = G__32874;
i__31562_32866 = G__32875;
continue;
} else {
var temp__5735__auto___32876 = cljs.core.seq(seq__31559_32863);
if(temp__5735__auto___32876){
var seq__31559_32877__$1 = temp__5735__auto___32876;
if(cljs.core.chunked_seq_QMARK_(seq__31559_32877__$1)){
var c__4550__auto___32878 = cljs.core.chunk_first(seq__31559_32877__$1);
var G__32879 = cljs.core.chunk_rest(seq__31559_32877__$1);
var G__32880 = c__4550__auto___32878;
var G__32881 = cljs.core.count(c__4550__auto___32878);
var G__32882 = (0);
seq__31559_32863 = G__32879;
chunk__31560_32864 = G__32880;
count__31561_32865 = G__32881;
i__31562_32866 = G__32882;
continue;
} else {
var param_32887 = cljs.core.first(seq__31559_32877__$1);
cljs.compiler.emit(param_32887);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32887,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32888 = cljs.core.next(seq__31559_32877__$1);
var G__32889 = null;
var G__32890 = (0);
var G__32891 = (0);
seq__31559_32863 = G__32888;
chunk__31560_32864 = G__32889;
count__31561_32865 = G__32890;
i__31562_32866 = G__32891;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_32861," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_32897 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_32897,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_32862,".call(this,");

var seq__31567_32899 = cljs.core.seq(params);
var chunk__31568_32900 = null;
var count__31569_32901 = (0);
var i__31570_32902 = (0);
while(true){
if((i__31570_32902 < count__31569_32901)){
var param_32903 = chunk__31568_32900.cljs$core$IIndexed$_nth$arity$2(null,i__31570_32902);
cljs.compiler.emit(param_32903);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32903,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32908 = seq__31567_32899;
var G__32909 = chunk__31568_32900;
var G__32910 = count__31569_32901;
var G__32911 = (i__31570_32902 + (1));
seq__31567_32899 = G__32908;
chunk__31568_32900 = G__32909;
count__31569_32901 = G__32910;
i__31570_32902 = G__32911;
continue;
} else {
var temp__5735__auto___32912 = cljs.core.seq(seq__31567_32899);
if(temp__5735__auto___32912){
var seq__31567_32913__$1 = temp__5735__auto___32912;
if(cljs.core.chunked_seq_QMARK_(seq__31567_32913__$1)){
var c__4550__auto___32914 = cljs.core.chunk_first(seq__31567_32913__$1);
var G__32915 = cljs.core.chunk_rest(seq__31567_32913__$1);
var G__32916 = c__4550__auto___32914;
var G__32917 = cljs.core.count(c__4550__auto___32914);
var G__32918 = (0);
seq__31567_32899 = G__32915;
chunk__31568_32900 = G__32916;
count__31569_32901 = G__32917;
i__31570_32902 = G__32918;
continue;
} else {
var param_32919 = cljs.core.first(seq__31567_32913__$1);
cljs.compiler.emit(param_32919);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32919,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32920 = cljs.core.next(seq__31567_32913__$1);
var G__32921 = null;
var G__32922 = (0);
var G__32923 = (0);
seq__31567_32899 = G__32920;
chunk__31568_32900 = G__32921;
count__31569_32901 = G__32922;
i__31570_32902 = G__32923;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32861,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_32861,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_32860__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32861,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_32862,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_32861,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__31583){
var map__31584 = p__31583;
var map__31584__$1 = (((((!((map__31584 == null))))?(((((map__31584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31584):map__31584);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31584__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31584__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31584__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31584__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31584__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31584__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31584__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__31584,map__31584__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__31578_SHARP_){
var and__4120__auto__ = p1__31578_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__31578_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__31584,map__31584__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_32936__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_32937 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_32936__$1);
var maxparams_32938 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_32939 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_32936__$1,mname_32937,maxparams_32938,loop_locals,map__31584,map__31584__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_32937),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_32936__$1,mname_32937,maxparams_32938,loop_locals,map__31584,map__31584__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_32940 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_32936__$1,mname_32937,maxparams_32938,mmap_32939,loop_locals,map__31584,map__31584__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__31579_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__31579_SHARP_)));
});})(name_32936__$1,mname_32937,maxparams_32938,mmap_32939,loop_locals,map__31584,map__31584__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq(mmap_32939));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_32937," = null;");

var seq__31593_32952 = cljs.core.seq(ms_32940);
var chunk__31594_32953 = null;
var count__31595_32954 = (0);
var i__31596_32955 = (0);
while(true){
if((i__31596_32955 < count__31595_32954)){
var vec__31603_32960 = chunk__31594_32953.cljs$core$IIndexed$_nth$arity$2(null,i__31596_32955);
var n_32961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31603_32960,(0),null);
var meth_32962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31603_32960,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_32961," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_32962))){
cljs.compiler.emit_variadic_fn_method(meth_32962);
} else {
cljs.compiler.emit_fn_method(meth_32962);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__32963 = seq__31593_32952;
var G__32964 = chunk__31594_32953;
var G__32965 = count__31595_32954;
var G__32966 = (i__31596_32955 + (1));
seq__31593_32952 = G__32963;
chunk__31594_32953 = G__32964;
count__31595_32954 = G__32965;
i__31596_32955 = G__32966;
continue;
} else {
var temp__5735__auto___32967 = cljs.core.seq(seq__31593_32952);
if(temp__5735__auto___32967){
var seq__31593_32969__$1 = temp__5735__auto___32967;
if(cljs.core.chunked_seq_QMARK_(seq__31593_32969__$1)){
var c__4550__auto___32970 = cljs.core.chunk_first(seq__31593_32969__$1);
var G__32972 = cljs.core.chunk_rest(seq__31593_32969__$1);
var G__32973 = c__4550__auto___32970;
var G__32974 = cljs.core.count(c__4550__auto___32970);
var G__32975 = (0);
seq__31593_32952 = G__32972;
chunk__31594_32953 = G__32973;
count__31595_32954 = G__32974;
i__31596_32955 = G__32975;
continue;
} else {
var vec__31612_32976 = cljs.core.first(seq__31593_32969__$1);
var n_32977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31612_32976,(0),null);
var meth_32978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31612_32976,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_32977," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_32978))){
cljs.compiler.emit_variadic_fn_method(meth_32978);
} else {
cljs.compiler.emit_fn_method(meth_32978);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__32983 = cljs.core.next(seq__31593_32969__$1);
var G__32984 = null;
var G__32985 = (0);
var G__32986 = (0);
seq__31593_32952 = G__32983;
chunk__31594_32953 = G__32984;
count__31595_32954 = G__32985;
i__31596_32955 = G__32986;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32937," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_32938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_32938)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_32938));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__31616_32988 = cljs.core.seq(ms_32940);
var chunk__31617_32989 = null;
var count__31618_32990 = (0);
var i__31619_32991 = (0);
while(true){
if((i__31619_32991 < count__31618_32990)){
var vec__31632_32998 = chunk__31617_32989.cljs$core$IIndexed$_nth$arity$2(null,i__31619_32991);
var n_32999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31632_32998,(0),null);
var meth_33000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31632_32998,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33000))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_33003 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_33003," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_33005 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_33003," = new cljs.core.IndexedSeq(",a_33005,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_32999,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_32938)),(((cljs.core.count(maxparams_32938) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_33003,");"], 0));
} else {
var pcnt_33010 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33000));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_33010,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_32999,".call(this",(((pcnt_33010 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_33010,maxparams_32938)),null,(1),null)),(2),null))),");");
}


var G__33011 = seq__31616_32988;
var G__33012 = chunk__31617_32989;
var G__33013 = count__31618_32990;
var G__33014 = (i__31619_32991 + (1));
seq__31616_32988 = G__33011;
chunk__31617_32989 = G__33012;
count__31618_32990 = G__33013;
i__31619_32991 = G__33014;
continue;
} else {
var temp__5735__auto___33015 = cljs.core.seq(seq__31616_32988);
if(temp__5735__auto___33015){
var seq__31616_33016__$1 = temp__5735__auto___33015;
if(cljs.core.chunked_seq_QMARK_(seq__31616_33016__$1)){
var c__4550__auto___33017 = cljs.core.chunk_first(seq__31616_33016__$1);
var G__33018 = cljs.core.chunk_rest(seq__31616_33016__$1);
var G__33019 = c__4550__auto___33017;
var G__33020 = cljs.core.count(c__4550__auto___33017);
var G__33021 = (0);
seq__31616_32988 = G__33018;
chunk__31617_32989 = G__33019;
count__31618_32990 = G__33020;
i__31619_32991 = G__33021;
continue;
} else {
var vec__31640_33024 = cljs.core.first(seq__31616_33016__$1);
var n_33025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31640_33024,(0),null);
var meth_33026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31640_33024,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33026))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_33027 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_33027," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_33028 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_33027," = new cljs.core.IndexedSeq(",a_33028,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_33025,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_32938)),(((cljs.core.count(maxparams_32938) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_33027,");"], 0));
} else {
var pcnt_33029 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33026));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_33029,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_33025,".call(this",(((pcnt_33029 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_33029,maxparams_32938)),null,(1),null)),(2),null))),");");
}


var G__33030 = cljs.core.next(seq__31616_33016__$1);
var G__33031 = null;
var G__33032 = (0);
var G__33033 = (0);
seq__31616_32988 = G__33030;
chunk__31617_32989 = G__33031;
count__31618_32990 = G__33032;
i__31619_32991 = G__33033;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_33036 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_32940)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_33036,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32937,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32937,".cljs$lang$applyTo = ",cljs.core.some(((function (name_32936__$1,mname_32937,maxparams_32938,mmap_32939,ms_32940,loop_locals,map__31584,map__31584__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__31581_SHARP_){
var vec__31649 = p1__31581_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31649,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31649,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_32936__$1,mname_32937,maxparams_32938,mmap_32939,ms_32940,loop_locals,map__31584,map__31584__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_32940),".cljs$lang$applyTo;");
} else {
}

var seq__31652_33064 = cljs.core.seq(ms_32940);
var chunk__31653_33065 = null;
var count__31654_33066 = (0);
var i__31655_33067 = (0);
while(true){
if((i__31655_33067 < count__31654_33066)){
var vec__31667_33069 = chunk__31653_33065.cljs$core$IIndexed$_nth$arity$2(null,i__31655_33067);
var n_33070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31667_33069,(0),null);
var meth_33071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31667_33069,(1),null);
var c_33072 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33071));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33071))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32937,".cljs$core$IFn$_invoke$arity$variadic = ",n_33070,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_32937,".cljs$core$IFn$_invoke$arity$",c_33072," = ",n_33070,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__33074 = seq__31652_33064;
var G__33075 = chunk__31653_33065;
var G__33076 = count__31654_33066;
var G__33077 = (i__31655_33067 + (1));
seq__31652_33064 = G__33074;
chunk__31653_33065 = G__33075;
count__31654_33066 = G__33076;
i__31655_33067 = G__33077;
continue;
} else {
var temp__5735__auto___33078 = cljs.core.seq(seq__31652_33064);
if(temp__5735__auto___33078){
var seq__31652_33079__$1 = temp__5735__auto___33078;
if(cljs.core.chunked_seq_QMARK_(seq__31652_33079__$1)){
var c__4550__auto___33080 = cljs.core.chunk_first(seq__31652_33079__$1);
var G__33081 = cljs.core.chunk_rest(seq__31652_33079__$1);
var G__33082 = c__4550__auto___33080;
var G__33083 = cljs.core.count(c__4550__auto___33080);
var G__33084 = (0);
seq__31652_33064 = G__33081;
chunk__31653_33065 = G__33082;
count__31654_33066 = G__33083;
i__31655_33067 = G__33084;
continue;
} else {
var vec__31670_33086 = cljs.core.first(seq__31652_33079__$1);
var n_33087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31670_33086,(0),null);
var meth_33088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31670_33086,(1),null);
var c_33089 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33088));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33088))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32937,".cljs$core$IFn$_invoke$arity$variadic = ",n_33087,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_32937,".cljs$core$IFn$_invoke$arity$",c_33089," = ",n_33087,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__33091 = cljs.core.next(seq__31652_33079__$1);
var G__33092 = null;
var G__33093 = (0);
var G__33094 = (0);
seq__31652_33064 = G__33091;
chunk__31653_33065 = G__33092;
count__31654_33066 = G__33093;
i__31655_33067 = G__33094;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_32937,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__31676){
var map__31677 = p__31676;
var map__31677__$1 = (((((!((map__31677 == null))))?(((((map__31677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31677):map__31677);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31677__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31677__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31677__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__31683_33109 = cljs.core.seq(statements);
var chunk__31684_33110 = null;
var count__31685_33111 = (0);
var i__31686_33112 = (0);
while(true){
if((i__31686_33112 < count__31685_33111)){
var s_33113 = chunk__31684_33110.cljs$core$IIndexed$_nth$arity$2(null,i__31686_33112);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_33113);


var G__33114 = seq__31683_33109;
var G__33115 = chunk__31684_33110;
var G__33116 = count__31685_33111;
var G__33117 = (i__31686_33112 + (1));
seq__31683_33109 = G__33114;
chunk__31684_33110 = G__33115;
count__31685_33111 = G__33116;
i__31686_33112 = G__33117;
continue;
} else {
var temp__5735__auto___33118 = cljs.core.seq(seq__31683_33109);
if(temp__5735__auto___33118){
var seq__31683_33119__$1 = temp__5735__auto___33118;
if(cljs.core.chunked_seq_QMARK_(seq__31683_33119__$1)){
var c__4550__auto___33120 = cljs.core.chunk_first(seq__31683_33119__$1);
var G__33121 = cljs.core.chunk_rest(seq__31683_33119__$1);
var G__33122 = c__4550__auto___33120;
var G__33123 = cljs.core.count(c__4550__auto___33120);
var G__33124 = (0);
seq__31683_33109 = G__33121;
chunk__31684_33110 = G__33122;
count__31685_33111 = G__33123;
i__31686_33112 = G__33124;
continue;
} else {
var s_33125 = cljs.core.first(seq__31683_33119__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_33125);


var G__33126 = cljs.core.next(seq__31683_33119__$1);
var G__33127 = null;
var G__33128 = (0);
var G__33129 = (0);
seq__31683_33109 = G__33126;
chunk__31684_33110 = G__33127;
count__31685_33111 = G__33128;
i__31686_33112 = G__33129;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__31709){
var map__31714 = p__31709;
var map__31714__$1 = (((((!((map__31714 == null))))?(((((map__31714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31714):map__31714);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31714__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31714__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31714__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31714__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31714__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__31744,is_loop){
var map__31745 = p__31744;
var map__31745__$1 = (((((!((map__31745 == null))))?(((((map__31745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31745):map__31745);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31745__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31745__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__31747_33138 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__31748_33139 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR__orig_val__31747_33138,context,map__31745,map__31745__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__31747_33138,context,map__31745,map__31745__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__31748_33139;

try{var seq__31753_33140 = cljs.core.seq(bindings);
var chunk__31754_33141 = null;
var count__31755_33142 = (0);
var i__31756_33143 = (0);
while(true){
if((i__31756_33143 < count__31755_33142)){
var map__31765_33147 = chunk__31754_33141.cljs$core$IIndexed$_nth$arity$2(null,i__31756_33143);
var map__31765_33148__$1 = (((((!((map__31765_33147 == null))))?(((((map__31765_33147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31765_33147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31765_33147):map__31765_33147);
var binding_33149 = map__31765_33148__$1;
var init_33150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31765_33148__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_33149);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_33150,";");


var G__33155 = seq__31753_33140;
var G__33156 = chunk__31754_33141;
var G__33157 = count__31755_33142;
var G__33158 = (i__31756_33143 + (1));
seq__31753_33140 = G__33155;
chunk__31754_33141 = G__33156;
count__31755_33142 = G__33157;
i__31756_33143 = G__33158;
continue;
} else {
var temp__5735__auto___33159 = cljs.core.seq(seq__31753_33140);
if(temp__5735__auto___33159){
var seq__31753_33161__$1 = temp__5735__auto___33159;
if(cljs.core.chunked_seq_QMARK_(seq__31753_33161__$1)){
var c__4550__auto___33165 = cljs.core.chunk_first(seq__31753_33161__$1);
var G__33166 = cljs.core.chunk_rest(seq__31753_33161__$1);
var G__33167 = c__4550__auto___33165;
var G__33168 = cljs.core.count(c__4550__auto___33165);
var G__33169 = (0);
seq__31753_33140 = G__33166;
chunk__31754_33141 = G__33167;
count__31755_33142 = G__33168;
i__31756_33143 = G__33169;
continue;
} else {
var map__31767_33170 = cljs.core.first(seq__31753_33161__$1);
var map__31767_33171__$1 = (((((!((map__31767_33170 == null))))?(((((map__31767_33170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31767_33170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31767_33170):map__31767_33170);
var binding_33172 = map__31767_33171__$1;
var init_33173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31767_33171__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_33172);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_33173,";");


var G__33196 = cljs.core.next(seq__31753_33161__$1);
var G__33197 = null;
var G__33198 = (0);
var G__33199 = (0);
seq__31753_33140 = G__33196;
chunk__31754_33141 = G__33197;
count__31755_33142 = G__33198;
i__31756_33143 = G__33199;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__31747_33138;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__31774){
var map__31775 = p__31774;
var map__31775__$1 = (((((!((map__31775 == null))))?(((((map__31775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31775):map__31775);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31775__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31775__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31775__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___33202 = cljs.core.count(exprs);
var i_33203 = (0);
while(true){
if((i_33203 < n__4607__auto___33202)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_33203) : temps.call(null,i_33203))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_33203) : exprs.call(null,i_33203)),";");

var G__33208 = (i_33203 + (1));
i_33203 = G__33208;
continue;
} else {
}
break;
}

var n__4607__auto___33209 = cljs.core.count(exprs);
var i_33211 = (0);
while(true){
if((i_33211 < n__4607__auto___33209)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_33211) : params.call(null,i_33211)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_33211) : temps.call(null,i_33211)),";");

var G__33212 = (i_33211 + (1));
i_33211 = G__33212;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__31785){
var map__31786 = p__31785;
var map__31786__$1 = (((((!((map__31786 == null))))?(((((map__31786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31786):map__31786);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31786__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31786__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31786__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__31795_33215 = cljs.core.seq(bindings);
var chunk__31796_33216 = null;
var count__31797_33217 = (0);
var i__31798_33218 = (0);
while(true){
if((i__31798_33218 < count__31797_33217)){
var map__31804_33223 = chunk__31796_33216.cljs$core$IIndexed$_nth$arity$2(null,i__31798_33218);
var map__31804_33224__$1 = (((((!((map__31804_33223 == null))))?(((((map__31804_33223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31804_33223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31804_33223):map__31804_33223);
var binding_33225 = map__31804_33224__$1;
var init_33226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31804_33224__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_33225)," = ",init_33226,";");


var G__33228 = seq__31795_33215;
var G__33229 = chunk__31796_33216;
var G__33230 = count__31797_33217;
var G__33231 = (i__31798_33218 + (1));
seq__31795_33215 = G__33228;
chunk__31796_33216 = G__33229;
count__31797_33217 = G__33230;
i__31798_33218 = G__33231;
continue;
} else {
var temp__5735__auto___33232 = cljs.core.seq(seq__31795_33215);
if(temp__5735__auto___33232){
var seq__31795_33233__$1 = temp__5735__auto___33232;
if(cljs.core.chunked_seq_QMARK_(seq__31795_33233__$1)){
var c__4550__auto___33235 = cljs.core.chunk_first(seq__31795_33233__$1);
var G__33236 = cljs.core.chunk_rest(seq__31795_33233__$1);
var G__33237 = c__4550__auto___33235;
var G__33238 = cljs.core.count(c__4550__auto___33235);
var G__33239 = (0);
seq__31795_33215 = G__33236;
chunk__31796_33216 = G__33237;
count__31797_33217 = G__33238;
i__31798_33218 = G__33239;
continue;
} else {
var map__31809_33240 = cljs.core.first(seq__31795_33233__$1);
var map__31809_33241__$1 = (((((!((map__31809_33240 == null))))?(((((map__31809_33240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31809_33240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31809_33240):map__31809_33240);
var binding_33242 = map__31809_33241__$1;
var init_33243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31809_33241__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_33242)," = ",init_33243,";");


var G__33249 = cljs.core.next(seq__31795_33233__$1);
var G__33250 = null;
var G__33251 = (0);
var G__33252 = (0);
seq__31795_33215 = G__33249;
chunk__31796_33216 = G__33250;
count__31797_33217 = G__33251;
i__31798_33218 = G__33252;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__31817){
var map__31820 = p__31817;
var map__31820__$1 = (((((!((map__31820 == null))))?(((((map__31820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31820):map__31820);
var expr = map__31820__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31820__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31820__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31820__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4120__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4120__auto__ = protocol;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tag;
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = (function (){var and__4120__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto____$2){
var and__4120__auto____$3 = protocol;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$2 = (function (){var or__4131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4120__auto____$2)){
var or__4131__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto____$3 = (!(cljs.core.set_QMARK_(tag)));
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not((function (){var fexpr__31836 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__31836.cljs$core$IFn$_invoke$arity$1 ? fexpr__31836.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__31836.call(null,tag));
})());
if(and__4120__auto____$4){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag(env,f));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__31823 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (arity > mfa);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31820,map__31820__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31820,map__31820__$1,expr,f,args,env){
return (function (p1__31815_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31815_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31820,map__31820__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31820,map__31820__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31820,map__31820__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31820,map__31820__$1,expr,f,args,env){
return (function (p1__31816_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31816_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31820,map__31820__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31820,map__31820__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823,(1),null);
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_33307 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_33307,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_33318 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_33318,args)),(((mfa_33318 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_33318,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = js_QMARK_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var G__31846 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__31845 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__31845.cljs$core$IFn$_invoke$arity$1 ? fexpr__31845.cljs$core$IFn$_invoke$arity$1(G__31846) : fexpr__31845.call(null,G__31846));
} else {
return and__4120__auto__;
}
})())){
var fprop_33325 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_33325," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_33325,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_33325," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_33325,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__31850){
var map__31851 = p__31850;
var map__31851__$1 = (((((!((map__31851 == null))))?(((((map__31851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31851):map__31851);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31851__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31851__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31851__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__31853){
var map__31855 = p__31853;
var map__31855__$1 = (((((!((map__31855 == null))))?(((((map__31855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31855):map__31855);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31855__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31855__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31855__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target," = ",val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__31861 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__31861__$1 = (((((!((map__31861 == null))))?(((((map__31861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31861):map__31861);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31861__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31861__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__31863 = options;
var map__31863__$1 = (((((!((map__31863 == null))))?(((((map__31863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31863):map__31863);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31863__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31863__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__31864 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__31873 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__31873__$1 = (((((!((map__31873 == null))))?(((((map__31873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31873):map__31873);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__31876_33340 = cljs.core.seq(libs_to_load);
var chunk__31877_33341 = null;
var count__31878_33342 = (0);
var i__31879_33343 = (0);
while(true){
if((i__31879_33343 < count__31878_33342)){
var lib_33346 = chunk__31877_33341.cljs$core$IIndexed$_nth$arity$2(null,i__31879_33343);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_33346)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_33346),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33346),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_33346),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33346),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_33346,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33346),"');");
}

}
}
}


var G__33378 = seq__31876_33340;
var G__33379 = chunk__31877_33341;
var G__33380 = count__31878_33342;
var G__33381 = (i__31879_33343 + (1));
seq__31876_33340 = G__33378;
chunk__31877_33341 = G__33379;
count__31878_33342 = G__33380;
i__31879_33343 = G__33381;
continue;
} else {
var temp__5735__auto___33382 = cljs.core.seq(seq__31876_33340);
if(temp__5735__auto___33382){
var seq__31876_33383__$1 = temp__5735__auto___33382;
if(cljs.core.chunked_seq_QMARK_(seq__31876_33383__$1)){
var c__4550__auto___33385 = cljs.core.chunk_first(seq__31876_33383__$1);
var G__33387 = cljs.core.chunk_rest(seq__31876_33383__$1);
var G__33388 = c__4550__auto___33385;
var G__33389 = cljs.core.count(c__4550__auto___33385);
var G__33390 = (0);
seq__31876_33340 = G__33387;
chunk__31877_33341 = G__33388;
count__31878_33342 = G__33389;
i__31879_33343 = G__33390;
continue;
} else {
var lib_33394 = cljs.core.first(seq__31876_33383__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_33394)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_33394),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33394),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_33394),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33394),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_33394,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_33394),"');");
}

}
}
}


var G__33397 = cljs.core.next(seq__31876_33383__$1);
var G__33398 = null;
var G__33399 = (0);
var G__33400 = (0);
seq__31876_33340 = G__33397;
chunk__31877_33341 = G__33398;
count__31878_33342 = G__33399;
i__31879_33343 = G__33400;
continue;
}
} else {
}
}
break;
}

var seq__31881_33402 = cljs.core.seq(node_libs);
var chunk__31882_33403 = null;
var count__31883_33404 = (0);
var i__31884_33405 = (0);
while(true){
if((i__31884_33405 < count__31883_33404)){
var lib_33406 = chunk__31882_33403.cljs$core$IIndexed$_nth$arity$2(null,i__31884_33405);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_33406)," = require('",lib_33406,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__33408 = seq__31881_33402;
var G__33409 = chunk__31882_33403;
var G__33410 = count__31883_33404;
var G__33411 = (i__31884_33405 + (1));
seq__31881_33402 = G__33408;
chunk__31882_33403 = G__33409;
count__31883_33404 = G__33410;
i__31884_33405 = G__33411;
continue;
} else {
var temp__5735__auto___33412 = cljs.core.seq(seq__31881_33402);
if(temp__5735__auto___33412){
var seq__31881_33413__$1 = temp__5735__auto___33412;
if(cljs.core.chunked_seq_QMARK_(seq__31881_33413__$1)){
var c__4550__auto___33419 = cljs.core.chunk_first(seq__31881_33413__$1);
var G__33420 = cljs.core.chunk_rest(seq__31881_33413__$1);
var G__33421 = c__4550__auto___33419;
var G__33422 = cljs.core.count(c__4550__auto___33419);
var G__33423 = (0);
seq__31881_33402 = G__33420;
chunk__31882_33403 = G__33421;
count__31883_33404 = G__33422;
i__31884_33405 = G__33423;
continue;
} else {
var lib_33426 = cljs.core.first(seq__31881_33413__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_33426)," = require('",lib_33426,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__33427 = cljs.core.next(seq__31881_33413__$1);
var G__33428 = null;
var G__33429 = (0);
var G__33430 = (0);
seq__31881_33402 = G__33427;
chunk__31882_33403 = G__33428;
count__31883_33404 = G__33429;
i__31884_33405 = G__33430;
continue;
}
} else {
}
}
break;
}

var seq__31886_33433 = cljs.core.seq(global_exports_libs);
var chunk__31887_33434 = null;
var count__31888_33435 = (0);
var i__31889_33436 = (0);
while(true){
if((i__31889_33436 < count__31888_33435)){
var lib_33437 = chunk__31887_33434.cljs$core$IIndexed$_nth$arity$2(null,i__31889_33436);
var map__31896_33440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_33437));
var map__31896_33441__$1 = (((((!((map__31896_33440 == null))))?(((((map__31896_33440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31896_33440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31896_33440):map__31896_33440);
var global_exports_33442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31896_33441__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_33442,lib_33437);


var G__33447 = seq__31886_33433;
var G__33448 = chunk__31887_33434;
var G__33449 = count__31888_33435;
var G__33450 = (i__31889_33436 + (1));
seq__31886_33433 = G__33447;
chunk__31887_33434 = G__33448;
count__31888_33435 = G__33449;
i__31889_33436 = G__33450;
continue;
} else {
var temp__5735__auto___33451 = cljs.core.seq(seq__31886_33433);
if(temp__5735__auto___33451){
var seq__31886_33452__$1 = temp__5735__auto___33451;
if(cljs.core.chunked_seq_QMARK_(seq__31886_33452__$1)){
var c__4550__auto___33453 = cljs.core.chunk_first(seq__31886_33452__$1);
var G__33454 = cljs.core.chunk_rest(seq__31886_33452__$1);
var G__33455 = c__4550__auto___33453;
var G__33456 = cljs.core.count(c__4550__auto___33453);
var G__33457 = (0);
seq__31886_33433 = G__33454;
chunk__31887_33434 = G__33455;
count__31888_33435 = G__33456;
i__31889_33436 = G__33457;
continue;
} else {
var lib_33465 = cljs.core.first(seq__31886_33452__$1);
var map__31898_33466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_33465));
var map__31898_33467__$1 = (((((!((map__31898_33466 == null))))?(((((map__31898_33466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31898_33466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31898_33466):map__31898_33466);
var global_exports_33468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_33467__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_33468,lib_33465);


var G__33469 = cljs.core.next(seq__31886_33452__$1);
var G__33470 = null;
var G__33471 = (0);
var G__33472 = (0);
seq__31886_33433 = G__33469;
chunk__31887_33434 = G__33470;
count__31888_33435 = G__33471;
i__31889_33436 = G__33472;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__31900){
var map__31901 = p__31900;
var map__31901__$1 = (((((!((map__31901 == null))))?(((((map__31901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31901):map__31901);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31901__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31901__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31901__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31901__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31901__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31901__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__31903){
var map__31904 = p__31903;
var map__31904__$1 = (((((!((map__31904 == null))))?(((((map__31904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31904):map__31904);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__31907){
var map__31908 = p__31907;
var map__31908__$1 = (((((!((map__31908 == null))))?(((((map__31908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31908):map__31908);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31908__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31908__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31908__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31908__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31908__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__31914_33496 = cljs.core.seq(protocols);
var chunk__31915_33497 = null;
var count__31916_33498 = (0);
var i__31917_33499 = (0);
while(true){
if((i__31917_33499 < count__31916_33498)){
var protocol_33500 = chunk__31915_33497.cljs$core$IIndexed$_nth$arity$2(null,i__31917_33499);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33500)),"}");


var G__33502 = seq__31914_33496;
var G__33503 = chunk__31915_33497;
var G__33504 = count__31916_33498;
var G__33505 = (i__31917_33499 + (1));
seq__31914_33496 = G__33502;
chunk__31915_33497 = G__33503;
count__31916_33498 = G__33504;
i__31917_33499 = G__33505;
continue;
} else {
var temp__5735__auto___33506 = cljs.core.seq(seq__31914_33496);
if(temp__5735__auto___33506){
var seq__31914_33507__$1 = temp__5735__auto___33506;
if(cljs.core.chunked_seq_QMARK_(seq__31914_33507__$1)){
var c__4550__auto___33508 = cljs.core.chunk_first(seq__31914_33507__$1);
var G__33509 = cljs.core.chunk_rest(seq__31914_33507__$1);
var G__33510 = c__4550__auto___33508;
var G__33511 = cljs.core.count(c__4550__auto___33508);
var G__33512 = (0);
seq__31914_33496 = G__33509;
chunk__31915_33497 = G__33510;
count__31916_33498 = G__33511;
i__31917_33499 = G__33512;
continue;
} else {
var protocol_33513 = cljs.core.first(seq__31914_33507__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33513)),"}");


var G__33514 = cljs.core.next(seq__31914_33507__$1);
var G__33515 = null;
var G__33516 = (0);
var G__33517 = (0);
seq__31914_33496 = G__33514;
chunk__31915_33497 = G__33515;
count__31916_33498 = G__33516;
i__31917_33499 = G__33517;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__31918_33518 = cljs.core.seq(fields__$1);
var chunk__31919_33519 = null;
var count__31920_33520 = (0);
var i__31921_33521 = (0);
while(true){
if((i__31921_33521 < count__31920_33520)){
var fld_33522 = chunk__31919_33519.cljs$core$IIndexed$_nth$arity$2(null,i__31921_33521);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_33522," = ",fld_33522,";");


var G__33523 = seq__31918_33518;
var G__33524 = chunk__31919_33519;
var G__33525 = count__31920_33520;
var G__33526 = (i__31921_33521 + (1));
seq__31918_33518 = G__33523;
chunk__31919_33519 = G__33524;
count__31920_33520 = G__33525;
i__31921_33521 = G__33526;
continue;
} else {
var temp__5735__auto___33527 = cljs.core.seq(seq__31918_33518);
if(temp__5735__auto___33527){
var seq__31918_33528__$1 = temp__5735__auto___33527;
if(cljs.core.chunked_seq_QMARK_(seq__31918_33528__$1)){
var c__4550__auto___33529 = cljs.core.chunk_first(seq__31918_33528__$1);
var G__33530 = cljs.core.chunk_rest(seq__31918_33528__$1);
var G__33531 = c__4550__auto___33529;
var G__33532 = cljs.core.count(c__4550__auto___33529);
var G__33533 = (0);
seq__31918_33518 = G__33530;
chunk__31919_33519 = G__33531;
count__31920_33520 = G__33532;
i__31921_33521 = G__33533;
continue;
} else {
var fld_33534 = cljs.core.first(seq__31918_33528__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_33534," = ",fld_33534,";");


var G__33535 = cljs.core.next(seq__31918_33528__$1);
var G__33536 = null;
var G__33537 = (0);
var G__33538 = (0);
seq__31918_33518 = G__33535;
chunk__31919_33519 = G__33536;
count__31920_33520 = G__33537;
i__31921_33521 = G__33538;
continue;
}
} else {
}
}
break;
}

var seq__31923_33539 = cljs.core.seq(pmasks);
var chunk__31924_33540 = null;
var count__31925_33541 = (0);
var i__31926_33542 = (0);
while(true){
if((i__31926_33542 < count__31925_33541)){
var vec__31933_33543 = chunk__31924_33540.cljs$core$IIndexed$_nth$arity$2(null,i__31926_33542);
var pno_33544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31933_33543,(0),null);
var pmask_33545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31933_33543,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_33544,"$ = ",pmask_33545,";");


var G__33546 = seq__31923_33539;
var G__33547 = chunk__31924_33540;
var G__33548 = count__31925_33541;
var G__33549 = (i__31926_33542 + (1));
seq__31923_33539 = G__33546;
chunk__31924_33540 = G__33547;
count__31925_33541 = G__33548;
i__31926_33542 = G__33549;
continue;
} else {
var temp__5735__auto___33550 = cljs.core.seq(seq__31923_33539);
if(temp__5735__auto___33550){
var seq__31923_33551__$1 = temp__5735__auto___33550;
if(cljs.core.chunked_seq_QMARK_(seq__31923_33551__$1)){
var c__4550__auto___33552 = cljs.core.chunk_first(seq__31923_33551__$1);
var G__33553 = cljs.core.chunk_rest(seq__31923_33551__$1);
var G__33554 = c__4550__auto___33552;
var G__33555 = cljs.core.count(c__4550__auto___33552);
var G__33556 = (0);
seq__31923_33539 = G__33553;
chunk__31924_33540 = G__33554;
count__31925_33541 = G__33555;
i__31926_33542 = G__33556;
continue;
} else {
var vec__31944_33557 = cljs.core.first(seq__31923_33551__$1);
var pno_33558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31944_33557,(0),null);
var pmask_33559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31944_33557,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_33558,"$ = ",pmask_33559,";");


var G__33560 = cljs.core.next(seq__31923_33551__$1);
var G__33561 = null;
var G__33562 = (0);
var G__33563 = (0);
seq__31923_33539 = G__33560;
chunk__31924_33540 = G__33561;
count__31925_33541 = G__33562;
i__31926_33542 = G__33563;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__31947){
var map__31948 = p__31947;
var map__31948__$1 = (((((!((map__31948 == null))))?(((((map__31948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31948):map__31948);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31948__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31948__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31948__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31948__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31948__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__31954_33564 = cljs.core.seq(protocols);
var chunk__31955_33565 = null;
var count__31956_33566 = (0);
var i__31957_33567 = (0);
while(true){
if((i__31957_33567 < count__31956_33566)){
var protocol_33568 = chunk__31955_33565.cljs$core$IIndexed$_nth$arity$2(null,i__31957_33567);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33568)),"}");


var G__33569 = seq__31954_33564;
var G__33570 = chunk__31955_33565;
var G__33571 = count__31956_33566;
var G__33572 = (i__31957_33567 + (1));
seq__31954_33564 = G__33569;
chunk__31955_33565 = G__33570;
count__31956_33566 = G__33571;
i__31957_33567 = G__33572;
continue;
} else {
var temp__5735__auto___33573 = cljs.core.seq(seq__31954_33564);
if(temp__5735__auto___33573){
var seq__31954_33574__$1 = temp__5735__auto___33573;
if(cljs.core.chunked_seq_QMARK_(seq__31954_33574__$1)){
var c__4550__auto___33575 = cljs.core.chunk_first(seq__31954_33574__$1);
var G__33576 = cljs.core.chunk_rest(seq__31954_33574__$1);
var G__33577 = c__4550__auto___33575;
var G__33578 = cljs.core.count(c__4550__auto___33575);
var G__33579 = (0);
seq__31954_33564 = G__33576;
chunk__31955_33565 = G__33577;
count__31956_33566 = G__33578;
i__31957_33567 = G__33579;
continue;
} else {
var protocol_33580 = cljs.core.first(seq__31954_33574__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33580)),"}");


var G__33581 = cljs.core.next(seq__31954_33574__$1);
var G__33582 = null;
var G__33583 = (0);
var G__33584 = (0);
seq__31954_33564 = G__33581;
chunk__31955_33565 = G__33582;
count__31956_33566 = G__33583;
i__31957_33567 = G__33584;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__31958_33585 = cljs.core.seq(fields__$1);
var chunk__31959_33586 = null;
var count__31960_33587 = (0);
var i__31961_33588 = (0);
while(true){
if((i__31961_33588 < count__31960_33587)){
var fld_33590 = chunk__31959_33586.cljs$core$IIndexed$_nth$arity$2(null,i__31961_33588);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_33590," = ",fld_33590,";");


var G__33592 = seq__31958_33585;
var G__33593 = chunk__31959_33586;
var G__33594 = count__31960_33587;
var G__33595 = (i__31961_33588 + (1));
seq__31958_33585 = G__33592;
chunk__31959_33586 = G__33593;
count__31960_33587 = G__33594;
i__31961_33588 = G__33595;
continue;
} else {
var temp__5735__auto___33596 = cljs.core.seq(seq__31958_33585);
if(temp__5735__auto___33596){
var seq__31958_33597__$1 = temp__5735__auto___33596;
if(cljs.core.chunked_seq_QMARK_(seq__31958_33597__$1)){
var c__4550__auto___33598 = cljs.core.chunk_first(seq__31958_33597__$1);
var G__33599 = cljs.core.chunk_rest(seq__31958_33597__$1);
var G__33600 = c__4550__auto___33598;
var G__33601 = cljs.core.count(c__4550__auto___33598);
var G__33602 = (0);
seq__31958_33585 = G__33599;
chunk__31959_33586 = G__33600;
count__31960_33587 = G__33601;
i__31961_33588 = G__33602;
continue;
} else {
var fld_33603 = cljs.core.first(seq__31958_33597__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_33603," = ",fld_33603,";");


var G__33604 = cljs.core.next(seq__31958_33597__$1);
var G__33605 = null;
var G__33606 = (0);
var G__33607 = (0);
seq__31958_33585 = G__33604;
chunk__31959_33586 = G__33605;
count__31960_33587 = G__33606;
i__31961_33588 = G__33607;
continue;
}
} else {
}
}
break;
}

var seq__31962_33608 = cljs.core.seq(pmasks);
var chunk__31963_33609 = null;
var count__31964_33610 = (0);
var i__31965_33611 = (0);
while(true){
if((i__31965_33611 < count__31964_33610)){
var vec__31980_33612 = chunk__31963_33609.cljs$core$IIndexed$_nth$arity$2(null,i__31965_33611);
var pno_33613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31980_33612,(0),null);
var pmask_33614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31980_33612,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_33613,"$ = ",pmask_33614,";");


var G__33618 = seq__31962_33608;
var G__33619 = chunk__31963_33609;
var G__33620 = count__31964_33610;
var G__33621 = (i__31965_33611 + (1));
seq__31962_33608 = G__33618;
chunk__31963_33609 = G__33619;
count__31964_33610 = G__33620;
i__31965_33611 = G__33621;
continue;
} else {
var temp__5735__auto___33622 = cljs.core.seq(seq__31962_33608);
if(temp__5735__auto___33622){
var seq__31962_33623__$1 = temp__5735__auto___33622;
if(cljs.core.chunked_seq_QMARK_(seq__31962_33623__$1)){
var c__4550__auto___33624 = cljs.core.chunk_first(seq__31962_33623__$1);
var G__33625 = cljs.core.chunk_rest(seq__31962_33623__$1);
var G__33626 = c__4550__auto___33624;
var G__33627 = cljs.core.count(c__4550__auto___33624);
var G__33628 = (0);
seq__31962_33608 = G__33625;
chunk__31963_33609 = G__33626;
count__31964_33610 = G__33627;
i__31965_33611 = G__33628;
continue;
} else {
var vec__31983_33629 = cljs.core.first(seq__31962_33623__$1);
var pno_33630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31983_33629,(0),null);
var pmask_33631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31983_33629,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_33630,"$ = ",pmask_33631,";");


var G__33632 = cljs.core.next(seq__31962_33623__$1);
var G__33633 = null;
var G__33634 = (0);
var G__33635 = (0);
seq__31962_33608 = G__33632;
chunk__31963_33609 = G__33633;
count__31964_33610 = G__33634;
i__31965_33611 = G__33635;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__31991){
var map__31996 = p__31991;
var map__31996__$1 = (((((!((map__31996 == null))))?(((((map__31996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31996):map__31996);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__32019){
var map__32020 = p__32019;
var map__32020__$1 = (((((!((map__32020 == null))))?(((((map__32020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32020):map__32020);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32020__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32020__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32020__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32020__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32020__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
var G__32022 = clojure.string.trim(code);
var G__32023 = "/*";
return goog.string.startsWith(G__32022,G__32023);
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__30748__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30748__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__32028 = cljs.core.seq(table);
var chunk__32029 = null;
var count__32030 = (0);
var i__32031 = (0);
while(true){
if((i__32031 < count__32030)){
var vec__32044 = chunk__32029.cljs$core$IIndexed$_nth$arity$2(null,i__32031);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,(1),null);
var ns_33643 = cljs.core.namespace(sym);
var name_33644 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__33645 = seq__32028;
var G__33646 = chunk__32029;
var G__33647 = count__32030;
var G__33648 = (i__32031 + (1));
seq__32028 = G__33645;
chunk__32029 = G__33646;
count__32030 = G__33647;
i__32031 = G__33648;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32028);
if(temp__5735__auto__){
var seq__32028__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32028__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32028__$1);
var G__33649 = cljs.core.chunk_rest(seq__32028__$1);
var G__33650 = c__4550__auto__;
var G__33651 = cljs.core.count(c__4550__auto__);
var G__33652 = (0);
seq__32028 = G__33649;
chunk__32029 = G__33650;
count__32030 = G__33651;
i__32031 = G__33652;
continue;
} else {
var vec__32053 = cljs.core.first(seq__32028__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32053,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32053,(1),null);
var ns_33654 = cljs.core.namespace(sym);
var name_33655 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__33657 = cljs.core.next(seq__32028__$1);
var G__33658 = null;
var G__33659 = (0);
var G__33660 = (0);
seq__32028 = G__33657;
chunk__32029 = G__33658;
count__32030 = G__33659;
i__32031 = G__33660;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__32066 = arguments.length;
switch (G__32066) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_33663 = cljs.core.first(ks);
var vec__32075_33664 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_33663);
var top_33665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32075_33664,(0),null);
var prefix_SINGLEQUOTE__33666 = vec__32075_33664;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_33663)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__33666) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_33665)) || (cljs.core.contains_QMARK_(known_externs,top_33665)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__33666)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_33665);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__33666)),";");
}
} else {
}

var m_33667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_33663);
if(cljs.core.empty_QMARK_(m_33667)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__33666,m_33667,top_level,known_externs);
}

var G__33668 = cljs.core.next(ks);
ks = G__33668;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=cljs.compiler.js.map
