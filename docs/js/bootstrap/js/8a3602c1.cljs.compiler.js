goog.provide('cljs.compiler');
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
var map__53593 = s;
var map__53593__$1 = (((((!((map__53593 == null))))?(((((map__53593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53593):map__53593);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53593__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53593__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__53604 = info;
var map__53605 = G__53604;
var map__53605__$1 = (((((!((map__53605 == null))))?(((((map__53605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53605):map__53605);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53605__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__53604__$1 = G__53604;
while(true){
var d__$2 = d__$1;
var map__53641 = G__53604__$1;
var map__53641__$1 = (((((!((map__53641 == null))))?(((((map__53641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53641):map__53641);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53641__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__54987 = (d__$2 + (1));
var G__54988 = shadow__$1;
d__$1 = G__54987;
G__53604__$1 = G__54988;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__53678){
var map__53679 = p__53678;
var map__53679__$1 = (((((!((map__53679 == null))))?(((((map__53679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53679):map__53679);
var name_var = map__53679__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53679__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53679__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__53686 = info;
var map__53686__$1 = (((((!((map__53686 == null))))?(((((map__53686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53686):map__53686);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__53692 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__53692) : cljs.compiler.munge.call(null,G__53692));
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
var G__53702 = arguments.length;
switch (G__53702) {
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
var ms = (function (){var fexpr__53709 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",17,1,11478,11478,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__53709.cljs$core$IFn$_invoke$arity$1 ? fexpr__53709.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__53709.call(null,ss__$3));
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
var G__53714 = cp;
switch (G__53714) {
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
var seq__53717_55001 = cljs.core.seq(s);
var chunk__53718_55002 = null;
var count__53719_55003 = (0);
var i__53720_55004 = (0);
while(true){
if((i__53720_55004 < count__53719_55003)){
var c_55005 = chunk__53718_55002.cljs$core$IIndexed$_nth$arity$2(null,i__53720_55004);
sb.append(cljs.compiler.escape_char(c_55005));


var G__55006 = seq__53717_55001;
var G__55007 = chunk__53718_55002;
var G__55008 = count__53719_55003;
var G__55009 = (i__53720_55004 + (1));
seq__53717_55001 = G__55006;
chunk__53718_55002 = G__55007;
count__53719_55003 = G__55008;
i__53720_55004 = G__55009;
continue;
} else {
var temp__5735__auto___55010 = cljs.core.seq(seq__53717_55001);
if(temp__5735__auto___55010){
var seq__53717_55011__$1 = temp__5735__auto___55010;
if(cljs.core.chunked_seq_QMARK_(seq__53717_55011__$1)){
var c__4550__auto___55012 = cljs.core.chunk_first(seq__53717_55011__$1);
var G__55013 = cljs.core.chunk_rest(seq__53717_55011__$1);
var G__55014 = c__4550__auto___55012;
var G__55015 = cljs.core.count(c__4550__auto___55012);
var G__55016 = (0);
seq__53717_55001 = G__55013;
chunk__53718_55002 = G__55014;
count__53719_55003 = G__55015;
i__53720_55004 = G__55016;
continue;
} else {
var c_55017 = cljs.core.first(seq__53717_55011__$1);
sb.append(cljs.compiler.escape_char(c_55017));


var G__55022 = cljs.core.next(seq__53717_55011__$1);
var G__55023 = null;
var G__55024 = (0);
var G__55025 = (0);
seq__53717_55001 = G__55022;
chunk__53718_55002 = G__55023;
count__53719_55003 = G__55024;
i__53720_55004 = G__55025;
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53737 = cljs.core.get_global_hierarchy;
return (fexpr__53737.cljs$core$IFn$_invoke$arity$0 ? fexpr__53737.cljs$core$IFn$_invoke$arity$0() : fexpr__53737.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__53742_55026 = ast;
var map__53742_55027__$1 = (((((!((map__53742_55026 == null))))?(((((map__53742_55026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53742_55026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53742_55026):map__53742_55026);
var env_55028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53742_55027__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_55028))){
var map__53744_55030 = env_55028;
var map__53744_55031__$1 = (((((!((map__53744_55030 == null))))?(((((map__53744_55030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53744_55030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53744_55030):map__53744_55030);
var line_55032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53744_55031__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53744_55031__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__53744_55030,map__53744_55031__$1,line_55032,column_55033,map__53742_55026,map__53742_55027__$1,env_55028){
return (function (m){
var minfo = (function (){var G__53748 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__53752 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__53751 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__53751.cljs$core$IFn$_invoke$arity$1 ? fexpr__53751.cljs$core$IFn$_invoke$arity$1(G__53752) : fexpr__53751.call(null,G__53752));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53748,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__53748;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_55032 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__53744_55030,map__53744_55031__$1,line_55032,column_55033,map__53742_55026,map__53742_55027__$1,env_55028){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_55033)?(column_55033 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__53744_55030,map__53744_55031__$1,line_55032,column_55033,map__53742_55026,map__53742_55027__$1,env_55028){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__53744_55030,map__53744_55031__$1,line_55032,column_55033,map__53742_55026,map__53742_55027__$1,env_55028))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__53744_55030,map__53744_55031__$1,line_55032,column_55033,map__53742_55026,map__53742_55027__$1,env_55028))
,cljs.core.sorted_map()));
});})(map__53744_55030,map__53744_55031__$1,line_55032,column_55033,map__53742_55026,map__53742_55027__$1,env_55028))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__53774 = arguments.length;
switch (G__53774) {
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
var len__4730__auto___55044 = arguments.length;
var i__4731__auto___55045 = (0);
while(true){
if((i__4731__auto___55045 < len__4730__auto___55044)){
args_arr__4751__auto__.push((arguments[i__4731__auto___55045]));

var G__55046 = (i__4731__auto___55045 + (1));
i__4731__auto___55045 = G__55046;
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
var s_55050 = (function (){var G__53785 = a;
if((!(typeof a === 'string'))){
return G__53785.toString();
} else {
return G__53785;
}
})();
var temp__5739__auto___55051 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___55051 == null)){
} else {
var sm_data_55053 = temp__5739__auto___55051;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_55053,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_55053,temp__5739__auto___55051,s_55050){
return (function (p1__53753_SHARP_){
return (p1__53753_SHARP_ + s_55050.length);
});})(sm_data_55053,temp__5739__auto___55051,s_55050))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_55050], 0));

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

var seq__53789 = cljs.core.seq(xs);
var chunk__53790 = null;
var count__53791 = (0);
var i__53792 = (0);
while(true){
if((i__53792 < count__53791)){
var x = chunk__53790.cljs$core$IIndexed$_nth$arity$2(null,i__53792);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__55075 = seq__53789;
var G__55076 = chunk__53790;
var G__55077 = count__53791;
var G__55078 = (i__53792 + (1));
seq__53789 = G__55075;
chunk__53790 = G__55076;
count__53791 = G__55077;
i__53792 = G__55078;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53789);
if(temp__5735__auto__){
var seq__53789__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53789__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53789__$1);
var G__55087 = cljs.core.chunk_rest(seq__53789__$1);
var G__55088 = c__4550__auto__;
var G__55089 = cljs.core.count(c__4550__auto__);
var G__55090 = (0);
seq__53789 = G__55087;
chunk__53790 = G__55088;
count__53791 = G__55089;
i__53792 = G__55090;
continue;
} else {
var x = cljs.core.first(seq__53789__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__55092 = cljs.core.next(seq__53789__$1);
var G__55093 = null;
var G__55094 = (0);
var G__55095 = (0);
seq__53789 = G__55092;
chunk__53790 = G__55093;
count__53791 = G__55094;
i__53792 = G__55095;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq53760){
var G__53761 = cljs.core.first(seq53760);
var seq53760__$1 = cljs.core.next(seq53760);
var G__53762 = cljs.core.first(seq53760__$1);
var seq53760__$2 = cljs.core.next(seq53760__$1);
var G__53763 = cljs.core.first(seq53760__$2);
var seq53760__$3 = cljs.core.next(seq53760__$2);
var G__53764 = cljs.core.first(seq53760__$3);
var seq53760__$4 = cljs.core.next(seq53760__$3);
var G__53765 = cljs.core.first(seq53760__$4);
var seq53760__$5 = cljs.core.next(seq53760__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53761,G__53762,G__53763,G__53764,G__53765,seq53760__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__53815){
var map__53816 = p__53815;
var map__53816__$1 = (((((!((map__53816 == null))))?(((((map__53816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53816):map__53816);
var m = map__53816__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53816__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__53826 = arguments.length;
switch (G__53826) {
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
var len__4730__auto___55111 = arguments.length;
var i__4731__auto___55112 = (0);
while(true){
if((i__4731__auto___55112 < len__4730__auto___55111)){
args_arr__4751__auto__.push((arguments[i__4731__auto___55112]));

var G__55113 = (i__4731__auto___55112 + (1));
i__4731__auto___55112 = G__55113;
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

var seq__53852_55138 = cljs.core.seq(xs);
var chunk__53853_55139 = null;
var count__53854_55140 = (0);
var i__53855_55141 = (0);
while(true){
if((i__53855_55141 < count__53854_55140)){
var x_55148 = chunk__53853_55139.cljs$core$IIndexed$_nth$arity$2(null,i__53855_55141);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_55148);


var G__55149 = seq__53852_55138;
var G__55150 = chunk__53853_55139;
var G__55151 = count__53854_55140;
var G__55152 = (i__53855_55141 + (1));
seq__53852_55138 = G__55149;
chunk__53853_55139 = G__55150;
count__53854_55140 = G__55151;
i__53855_55141 = G__55152;
continue;
} else {
var temp__5735__auto___55154 = cljs.core.seq(seq__53852_55138);
if(temp__5735__auto___55154){
var seq__53852_55159__$1 = temp__5735__auto___55154;
if(cljs.core.chunked_seq_QMARK_(seq__53852_55159__$1)){
var c__4550__auto___55160 = cljs.core.chunk_first(seq__53852_55159__$1);
var G__55161 = cljs.core.chunk_rest(seq__53852_55159__$1);
var G__55162 = c__4550__auto___55160;
var G__55163 = cljs.core.count(c__4550__auto___55160);
var G__55164 = (0);
seq__53852_55138 = G__55161;
chunk__53853_55139 = G__55162;
count__53854_55140 = G__55163;
i__53855_55141 = G__55164;
continue;
} else {
var x_55165 = cljs.core.first(seq__53852_55159__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_55165);


var G__55167 = cljs.core.next(seq__53852_55159__$1);
var G__55168 = null;
var G__55169 = (0);
var G__55170 = (0);
seq__53852_55138 = G__55167;
chunk__53853_55139 = G__55168;
count__53854_55140 = G__55169;
i__53855_55141 = G__55170;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq53820){
var G__53821 = cljs.core.first(seq53820);
var seq53820__$1 = cljs.core.next(seq53820);
var G__53822 = cljs.core.first(seq53820__$1);
var seq53820__$2 = cljs.core.next(seq53820__$1);
var G__53823 = cljs.core.first(seq53820__$2);
var seq53820__$3 = cljs.core.next(seq53820__$2);
var G__53824 = cljs.core.first(seq53820__$3);
var seq53820__$4 = cljs.core.next(seq53820__$3);
var G__53825 = cljs.core.first(seq53820__$4);
var seq53820__$5 = cljs.core.next(seq53820__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53821,G__53822,G__53823,G__53824,G__53825,seq53820__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53866_55175 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53867_55176 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53868_55177 = true;
var _STAR_print_fn_STAR__temp_val__53869_55178 = ((function (_STAR_print_newline_STAR__orig_val__53866_55175,_STAR_print_fn_STAR__orig_val__53867_55176,_STAR_print_newline_STAR__temp_val__53868_55177,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__53866_55175,_STAR_print_fn_STAR__orig_val__53867_55176,_STAR_print_newline_STAR__temp_val__53868_55177,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53868_55177;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53869_55178;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53867_55176;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53866_55175;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53871 = cljs.core.get_global_hierarchy;
return (fexpr__53871.cljs$core$IFn$_invoke$arity$0 ? fexpr__53871.cljs$core$IFn$_invoke$arity$0() : fexpr__53871.call(null));
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
var vec__53877 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53877,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53877,(1),null);
var G__53880 = ns;
var G__53881 = name;
var G__53882 = ((function (G__53880,G__53881,vec__53877,ns,name){
return (function (){
var G__53884 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__53884) : cljs.compiler.emit_constant.call(null,G__53884));
});})(G__53880,G__53881,vec__53877,ns,name))
;
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__53880,G__53881,G__53882) : cljs.compiler.emit_record_value.call(null,G__53880,G__53881,G__53882));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__53887 = cljs.core.keys(x);
var G__53888 = cljs.core.vals(x);
var G__53889 = cljs.compiler.emit_constants_comma_sep;
var G__53890 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__53887,G__53888,G__53889,G__53890) : cljs.compiler.emit_map.call(null,G__53887,G__53888,G__53889,G__53890));
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
var G__53900 = ((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta(v);
});})(m))
;
var G__53901 = ((function (G__53900,m){
return (function (){
return cljs.compiler.emit_constant_no_meta(m);
});})(G__53900,m))
;
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__53900,G__53901) : cljs.compiler.emit_with_meta.call(null,G__53900,G__53901));
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
var vec__53916 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53916,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53916,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53916,(2),null);
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
var G__53921 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__53921) : x.call(null,G__53921));
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
var G__53932 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__53932) : x.call(null,G__53932));
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
var G__53947 = items;
var G__53948 = ((function (G__53947,items){
return (function (p1__53944_SHARP_){
return ((function (G__53947,items){
return (function (){
return cljs.compiler.emit_constant(p1__53944_SHARP_);
});
;})(G__53947,items))
});})(G__53947,items))
;
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__53947,G__53948) : cljs.compiler.emit_js_object.call(null,G__53947,G__53948));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__53955){
var map__53956 = p__53955;
var map__53956__$1 = (((((!((map__53956 == null))))?(((((map__53956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53956):map__53956);
var ast = map__53956__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__53965 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__53965__$1 = (((((!((map__53965 == null))))?(((((map__53965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53965):map__53965);
var cenv = map__53965__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__53967 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var G__53970 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__53970) : cljs.compiler.es5_GT__EQ_.call(null,G__53970));
})();
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__53967,cljs.analyzer.es5_allowed);
} else {
return G__53967;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__53976 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__53976,reserved);
} else {
return G__53976;
}
})();
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__53978_55220 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__53978_55221__$1 = (((G__53978_55220 instanceof cljs.core.Keyword))?G__53978_55220.fqn:null);
switch (G__53978_55221__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__53981){
var map__53982 = p__53981;
var map__53982__$1 = (((((!((map__53982 == null))))?(((((map__53982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53982):map__53982);
var arg = map__53982__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53982__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53982__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53982__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53982__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__53985 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__53985__$1 = (((((!((map__53985 == null))))?(((((map__53985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53985):map__53985);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53985__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__53987){
var map__53989 = p__53987;
var map__53989__$1 = (((((!((map__53989 == null))))?(((((map__53989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53989):map__53989);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53989__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53989__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53989__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_(((function (keys__$1){
return (function (p1__53992_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__53992_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__53997 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__53997) : comma_sep.call(null,G__53997));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__53998 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__53998) : comma_sep.call(null,G__53998));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__53999){
var map__54000 = p__53999;
var map__54000__$1 = (((((!((map__54000 == null))))?(((((map__54000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54000):map__54000);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__54008){
var map__54009 = p__54008;
var map__54009__$1 = (((((!((map__54009 == null))))?(((((map__54009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54009):map__54009);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54009__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_(((function (items__$1){
return (function (p1__54016_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__54016_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__54019 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__54019) : comma_sep.call(null,G__54019));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__54020){
var map__54021 = p__54020;
var map__54021__$1 = (((((!((map__54021 == null))))?(((((map__54021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54021):map__54021);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54021__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54021__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___55271 = cljs.core.seq(items);
if(temp__5735__auto___55271){
var items_55272__$1 = temp__5735__auto___55271;
var vec__54028_55273 = items_55272__$1;
var seq__54029_55274 = cljs.core.seq(vec__54028_55273);
var first__54030_55275 = cljs.core.first(seq__54029_55274);
var seq__54029_55276__$1 = cljs.core.next(seq__54029_55274);
var vec__54031_55277 = first__54030_55275;
var k_55278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54031_55277,(0),null);
var v_55279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54031_55277,(1),null);
var r_55280 = seq__54029_55276__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_55278),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_55279) : emit_js_object_val.call(null,v_55279)));

var seq__54034_55282 = cljs.core.seq(r_55280);
var chunk__54035_55283 = null;
var count__54036_55284 = (0);
var i__54037_55285 = (0);
while(true){
if((i__54037_55285 < count__54036_55284)){
var vec__54046_55286 = chunk__54035_55283.cljs$core$IIndexed$_nth$arity$2(null,i__54037_55285);
var k_55287__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54046_55286,(0),null);
var v_55288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54046_55286,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_55287__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_55288__$1) : emit_js_object_val.call(null,v_55288__$1)));


var G__55290 = seq__54034_55282;
var G__55291 = chunk__54035_55283;
var G__55292 = count__54036_55284;
var G__55293 = (i__54037_55285 + (1));
seq__54034_55282 = G__55290;
chunk__54035_55283 = G__55291;
count__54036_55284 = G__55292;
i__54037_55285 = G__55293;
continue;
} else {
var temp__5735__auto___55294__$1 = cljs.core.seq(seq__54034_55282);
if(temp__5735__auto___55294__$1){
var seq__54034_55295__$1 = temp__5735__auto___55294__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54034_55295__$1)){
var c__4550__auto___55300 = cljs.core.chunk_first(seq__54034_55295__$1);
var G__55301 = cljs.core.chunk_rest(seq__54034_55295__$1);
var G__55302 = c__4550__auto___55300;
var G__55303 = cljs.core.count(c__4550__auto___55300);
var G__55304 = (0);
seq__54034_55282 = G__55301;
chunk__54035_55283 = G__55302;
count__54036_55284 = G__55303;
i__54037_55285 = G__55304;
continue;
} else {
var vec__54052_55305 = cljs.core.first(seq__54034_55295__$1);
var k_55306__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54052_55305,(0),null);
var v_55307__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54052_55305,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_55306__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_55307__$1) : emit_js_object_val.call(null,v_55307__$1)));


var G__55310 = cljs.core.next(seq__54034_55295__$1);
var G__55311 = null;
var G__55312 = (0);
var G__55313 = (0);
seq__54034_55282 = G__55310;
chunk__54035_55283 = G__55311;
count__54036_55284 = G__55312;
i__54037_55285 = G__55313;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__54064){
var map__54065 = p__54064;
var map__54065__$1 = (((((!((map__54065 == null))))?(((((map__54065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54065):map__54065);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54065__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54065__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54065__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__54071){
var map__54072 = p__54071;
var map__54072__$1 = (((((!((map__54072 == null))))?(((((map__54072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54072):map__54072);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54072__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54072__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__54082){
var map__54083 = p__54082;
var map__54083__$1 = (((((!((map__54083 == null))))?(((((map__54083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54083):map__54083);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54083__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__54089){
var map__54090 = p__54089;
var map__54090__$1 = (((((!((map__54090 == null))))?(((((map__54090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54090):map__54090);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__54104 = cljs.analyzer.unwrap_quote(expr);
var map__54104__$1 = (((((!((map__54104 == null))))?(((((map__54104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54104):map__54104);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54104__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54104__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54104__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__54111 = cljs.analyzer.unwrap_quote(expr);
var map__54111__$1 = (((((!((map__54111 == null))))?(((((map__54111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54111):map__54111);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54111__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54111__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54111__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4131__auto__ = (function (){var fexpr__54124 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__54124.cljs$core$IFn$_invoke$arity$1 ? fexpr__54124.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__54124.call(null,tag));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__54126){
var map__54127 = p__54126;
var map__54127__$1 = (((((!((map__54127 == null))))?(((((map__54127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54127):map__54127);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54127__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54127__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54127__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54127__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54127__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__54134){
var map__54135 = p__54134;
var map__54135__$1 = (((((!((map__54135 == null))))?(((((map__54135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54135):map__54135);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__54140_55343 = cljs.core.seq(nodes);
var chunk__54141_55344 = null;
var count__54142_55345 = (0);
var i__54143_55346 = (0);
while(true){
if((i__54143_55346 < count__54142_55345)){
var map__54190_55347 = chunk__54141_55344.cljs$core$IIndexed$_nth$arity$2(null,i__54143_55346);
var map__54190_55348__$1 = (((((!((map__54190_55347 == null))))?(((((map__54190_55347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54190_55347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54190_55347):map__54190_55347);
var ts_55349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54190_55348__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__54192_55350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54190_55348__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__54192_55351__$1 = (((((!((map__54192_55350 == null))))?(((((map__54192_55350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54192_55350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54192_55350):map__54192_55350);
var then_55352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54192_55351__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__54204_55356 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_55349));
var chunk__54205_55357 = null;
var count__54206_55358 = (0);
var i__54207_55359 = (0);
while(true){
if((i__54207_55359 < count__54206_55358)){
var test_55360 = chunk__54205_55357.cljs$core$IIndexed$_nth$arity$2(null,i__54207_55359);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_55360,":");


var G__55362 = seq__54204_55356;
var G__55363 = chunk__54205_55357;
var G__55364 = count__54206_55358;
var G__55365 = (i__54207_55359 + (1));
seq__54204_55356 = G__55362;
chunk__54205_55357 = G__55363;
count__54206_55358 = G__55364;
i__54207_55359 = G__55365;
continue;
} else {
var temp__5735__auto___55367 = cljs.core.seq(seq__54204_55356);
if(temp__5735__auto___55367){
var seq__54204_55370__$1 = temp__5735__auto___55367;
if(cljs.core.chunked_seq_QMARK_(seq__54204_55370__$1)){
var c__4550__auto___55371 = cljs.core.chunk_first(seq__54204_55370__$1);
var G__55372 = cljs.core.chunk_rest(seq__54204_55370__$1);
var G__55373 = c__4550__auto___55371;
var G__55374 = cljs.core.count(c__4550__auto___55371);
var G__55375 = (0);
seq__54204_55356 = G__55372;
chunk__54205_55357 = G__55373;
count__54206_55358 = G__55374;
i__54207_55359 = G__55375;
continue;
} else {
var test_55385 = cljs.core.first(seq__54204_55370__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_55385,":");


var G__55388 = cljs.core.next(seq__54204_55370__$1);
var G__55389 = null;
var G__55390 = (0);
var G__55391 = (0);
seq__54204_55356 = G__55388;
chunk__54205_55357 = G__55389;
count__54206_55358 = G__55390;
i__54207_55359 = G__55391;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_55352);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_55352);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__55399 = seq__54140_55343;
var G__55400 = chunk__54141_55344;
var G__55401 = count__54142_55345;
var G__55402 = (i__54143_55346 + (1));
seq__54140_55343 = G__55399;
chunk__54141_55344 = G__55400;
count__54142_55345 = G__55401;
i__54143_55346 = G__55402;
continue;
} else {
var temp__5735__auto___55405 = cljs.core.seq(seq__54140_55343);
if(temp__5735__auto___55405){
var seq__54140_55406__$1 = temp__5735__auto___55405;
if(cljs.core.chunked_seq_QMARK_(seq__54140_55406__$1)){
var c__4550__auto___55407 = cljs.core.chunk_first(seq__54140_55406__$1);
var G__55408 = cljs.core.chunk_rest(seq__54140_55406__$1);
var G__55409 = c__4550__auto___55407;
var G__55410 = cljs.core.count(c__4550__auto___55407);
var G__55411 = (0);
seq__54140_55343 = G__55408;
chunk__54141_55344 = G__55409;
count__54142_55345 = G__55410;
i__54143_55346 = G__55411;
continue;
} else {
var map__54212_55412 = cljs.core.first(seq__54140_55406__$1);
var map__54212_55413__$1 = (((((!((map__54212_55412 == null))))?(((((map__54212_55412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54212_55412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54212_55412):map__54212_55412);
var ts_55414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54212_55413__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__54213_55415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54212_55413__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__54213_55416__$1 = (((((!((map__54213_55415 == null))))?(((((map__54213_55415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54213_55415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54213_55415):map__54213_55415);
var then_55417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54213_55416__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__54216_55420 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_55414));
var chunk__54217_55421 = null;
var count__54218_55422 = (0);
var i__54219_55423 = (0);
while(true){
if((i__54219_55423 < count__54218_55422)){
var test_55425 = chunk__54217_55421.cljs$core$IIndexed$_nth$arity$2(null,i__54219_55423);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_55425,":");


var G__55426 = seq__54216_55420;
var G__55427 = chunk__54217_55421;
var G__55428 = count__54218_55422;
var G__55429 = (i__54219_55423 + (1));
seq__54216_55420 = G__55426;
chunk__54217_55421 = G__55427;
count__54218_55422 = G__55428;
i__54219_55423 = G__55429;
continue;
} else {
var temp__5735__auto___55432__$1 = cljs.core.seq(seq__54216_55420);
if(temp__5735__auto___55432__$1){
var seq__54216_55433__$1 = temp__5735__auto___55432__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54216_55433__$1)){
var c__4550__auto___55434 = cljs.core.chunk_first(seq__54216_55433__$1);
var G__55435 = cljs.core.chunk_rest(seq__54216_55433__$1);
var G__55436 = c__4550__auto___55434;
var G__55437 = cljs.core.count(c__4550__auto___55434);
var G__55438 = (0);
seq__54216_55420 = G__55435;
chunk__54217_55421 = G__55436;
count__54218_55422 = G__55437;
i__54219_55423 = G__55438;
continue;
} else {
var test_55439 = cljs.core.first(seq__54216_55433__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_55439,":");


var G__55440 = cljs.core.next(seq__54216_55433__$1);
var G__55441 = null;
var G__55442 = (0);
var G__55443 = (0);
seq__54216_55420 = G__55440;
chunk__54217_55421 = G__55441;
count__54218_55422 = G__55442;
i__54219_55423 = G__55443;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_55417);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_55417);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__55444 = cljs.core.next(seq__54140_55406__$1);
var G__55445 = null;
var G__55446 = (0);
var G__55447 = (0);
seq__54140_55343 = G__55444;
chunk__54141_55344 = G__55445;
count__54142_55345 = G__55446;
i__54143_55346 = G__55447;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__54236){
var map__54237 = p__54236;
var map__54237__$1 = (((((!((map__54237 == null))))?(((((map__54237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54237):map__54237);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54237__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54237__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__54261 = env;
var G__54262 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__54261,G__54262) : cljs.compiler.resolve_type.call(null,G__54261,G__54262));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__54263 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54263,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54263,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__54263,fstr,rstr,ret_t,axstr){
return (function (p1__54252_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__54252_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__54252_SHARP_));
});})(idx,vec__54263,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__54266 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__54266,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__54266;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__54273 = env;
var G__54274 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__54273,G__54274) : cljs.compiler.resolve_type.call(null,G__54273,G__54274));
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
return (function (p1__54275_SHARP_){
return cljs.compiler.resolve_type(env,p1__54275_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__54276 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__54277 = cljs.core.seq(vec__54276);
var first__54278 = cljs.core.first(seq__54277);
var seq__54277__$1 = cljs.core.next(seq__54277);
var p = first__54278;
var first__54278__$1 = cljs.core.first(seq__54277__$1);
var seq__54277__$2 = cljs.core.next(seq__54277__$1);
var ts = first__54278__$1;
var first__54278__$2 = cljs.core.first(seq__54277__$2);
var seq__54277__$3 = cljs.core.next(seq__54277__$2);
var n = first__54278__$2;
var xs = seq__54277__$3;
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
var vec__54280 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__54281 = cljs.core.seq(vec__54280);
var first__54282 = cljs.core.first(seq__54281);
var seq__54281__$1 = cljs.core.next(seq__54281);
var p = first__54282;
var first__54282__$1 = cljs.core.first(seq__54281__$1);
var seq__54281__$2 = cljs.core.next(seq__54281__$1);
var ts = first__54282__$1;
var xs = seq__54281__$2;
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
var G__54284 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__54283 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__54283.cljs$core$IFn$_invoke$arity$1 ? fexpr__54283.cljs$core$IFn$_invoke$arity$1(G__54284) : fexpr__54283.call(null,G__54284));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__54291 = arguments.length;
switch (G__54291) {
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
var vec__54317 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__54285_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__54285_SHARP_);
} else {
return p1__54285_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__54318 = cljs.core.seq(vec__54317);
var first__54319 = cljs.core.first(seq__54318);
var seq__54318__$1 = cljs.core.next(seq__54318);
var x = first__54319;
var ys = seq__54318__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__54325 = cljs.core.seq(ys);
var chunk__54326 = null;
var count__54327 = (0);
var i__54328 = (0);
while(true){
if((i__54328 < count__54327)){
var next_line = chunk__54326.cljs$core$IIndexed$_nth$arity$2(null,i__54328);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__55498 = seq__54325;
var G__55499 = chunk__54326;
var G__55500 = count__54327;
var G__55501 = (i__54328 + (1));
seq__54325 = G__55498;
chunk__54326 = G__55499;
count__54327 = G__55500;
i__54328 = G__55501;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54325);
if(temp__5735__auto__){
var seq__54325__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54325__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54325__$1);
var G__55502 = cljs.core.chunk_rest(seq__54325__$1);
var G__55503 = c__4550__auto__;
var G__55504 = cljs.core.count(c__4550__auto__);
var G__55505 = (0);
seq__54325 = G__55502;
chunk__54326 = G__55503;
count__54327 = G__55504;
i__54328 = G__55505;
continue;
} else {
var next_line = cljs.core.first(seq__54325__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__55506 = cljs.core.next(seq__54325__$1);
var G__55507 = null;
var G__55508 = (0);
var G__55509 = (0);
seq__54325 = G__55506;
chunk__54326 = G__55507;
count__54327 = G__55508;
i__54328 = G__55509;
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

var seq__54336_55511 = cljs.core.seq(docs__$2);
var chunk__54337_55512 = null;
var count__54338_55513 = (0);
var i__54339_55514 = (0);
while(true){
if((i__54339_55514 < count__54338_55513)){
var e_55518 = chunk__54337_55512.cljs$core$IIndexed$_nth$arity$2(null,i__54339_55514);
if(cljs.core.truth_(e_55518)){
print_comment_lines(e_55518);
} else {
}


var G__55521 = seq__54336_55511;
var G__55522 = chunk__54337_55512;
var G__55523 = count__54338_55513;
var G__55524 = (i__54339_55514 + (1));
seq__54336_55511 = G__55521;
chunk__54337_55512 = G__55522;
count__54338_55513 = G__55523;
i__54339_55514 = G__55524;
continue;
} else {
var temp__5735__auto___55529 = cljs.core.seq(seq__54336_55511);
if(temp__5735__auto___55529){
var seq__54336_55530__$1 = temp__5735__auto___55529;
if(cljs.core.chunked_seq_QMARK_(seq__54336_55530__$1)){
var c__4550__auto___55531 = cljs.core.chunk_first(seq__54336_55530__$1);
var G__55532 = cljs.core.chunk_rest(seq__54336_55530__$1);
var G__55533 = c__4550__auto___55531;
var G__55534 = cljs.core.count(c__4550__auto___55531);
var G__55535 = (0);
seq__54336_55511 = G__55532;
chunk__54337_55512 = G__55533;
count__54338_55513 = G__55534;
i__54339_55514 = G__55535;
continue;
} else {
var e_55536 = cljs.core.first(seq__54336_55530__$1);
if(cljs.core.truth_(e_55536)){
print_comment_lines(e_55536);
} else {
}


var G__55537 = cljs.core.next(seq__54336_55530__$1);
var G__55538 = null;
var G__55539 = (0);
var G__55540 = (0);
seq__54336_55511 = G__55537;
chunk__54337_55512 = G__55538;
count__54338_55513 = G__55539;
i__54339_55514 = G__55540;
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
return (function (p1__54362_SHARP_){
return goog.string.startsWith(p1__54362_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__54363){
var map__54364 = p__54363;
var map__54364__$1 = (((((!((map__54364 == null))))?(((((map__54364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54364):map__54364);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54364__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54364__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54364__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54364__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54364__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54364__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54364__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54364__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54364__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__54375){
var map__54376 = p__54375;
var map__54376__$1 = (((((!((map__54376 == null))))?(((((map__54376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54376):map__54376);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54376__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__54378_55561 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__54379_55562 = null;
var count__54380_55563 = (0);
var i__54381_55564 = (0);
while(true){
if((i__54381_55564 < count__54380_55563)){
var vec__54388_55566 = chunk__54379_55562.cljs$core$IIndexed$_nth$arity$2(null,i__54381_55564);
var i_55567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54388_55566,(0),null);
var param_55568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54388_55566,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_55568);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__55570 = seq__54378_55561;
var G__55571 = chunk__54379_55562;
var G__55572 = count__54380_55563;
var G__55573 = (i__54381_55564 + (1));
seq__54378_55561 = G__55570;
chunk__54379_55562 = G__55571;
count__54380_55563 = G__55572;
i__54381_55564 = G__55573;
continue;
} else {
var temp__5735__auto___55574 = cljs.core.seq(seq__54378_55561);
if(temp__5735__auto___55574){
var seq__54378_55575__$1 = temp__5735__auto___55574;
if(cljs.core.chunked_seq_QMARK_(seq__54378_55575__$1)){
var c__4550__auto___55576 = cljs.core.chunk_first(seq__54378_55575__$1);
var G__55577 = cljs.core.chunk_rest(seq__54378_55575__$1);
var G__55578 = c__4550__auto___55576;
var G__55579 = cljs.core.count(c__4550__auto___55576);
var G__55580 = (0);
seq__54378_55561 = G__55577;
chunk__54379_55562 = G__55578;
count__54380_55563 = G__55579;
i__54381_55564 = G__55580;
continue;
} else {
var vec__54395_55587 = cljs.core.first(seq__54378_55575__$1);
var i_55588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54395_55587,(0),null);
var param_55589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54395_55587,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_55589);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__55591 = cljs.core.next(seq__54378_55575__$1);
var G__55592 = null;
var G__55593 = (0);
var G__55594 = (0);
seq__54378_55561 = G__55591;
chunk__54379_55562 = G__55592;
count__54380_55563 = G__55593;
i__54381_55564 = G__55594;
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

var seq__54398_55599 = cljs.core.seq(params);
var chunk__54399_55600 = null;
var count__54400_55601 = (0);
var i__54401_55602 = (0);
while(true){
if((i__54401_55602 < count__54400_55601)){
var param_55604 = chunk__54399_55600.cljs$core$IIndexed$_nth$arity$2(null,i__54401_55602);
cljs.compiler.emit(param_55604);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_55604,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55606 = seq__54398_55599;
var G__55607 = chunk__54399_55600;
var G__55608 = count__54400_55601;
var G__55609 = (i__54401_55602 + (1));
seq__54398_55599 = G__55606;
chunk__54399_55600 = G__55607;
count__54400_55601 = G__55608;
i__54401_55602 = G__55609;
continue;
} else {
var temp__5735__auto___55614 = cljs.core.seq(seq__54398_55599);
if(temp__5735__auto___55614){
var seq__54398_55615__$1 = temp__5735__auto___55614;
if(cljs.core.chunked_seq_QMARK_(seq__54398_55615__$1)){
var c__4550__auto___55616 = cljs.core.chunk_first(seq__54398_55615__$1);
var G__55617 = cljs.core.chunk_rest(seq__54398_55615__$1);
var G__55618 = c__4550__auto___55616;
var G__55619 = cljs.core.count(c__4550__auto___55616);
var G__55620 = (0);
seq__54398_55599 = G__55617;
chunk__54399_55600 = G__55618;
count__54400_55601 = G__55619;
i__54401_55602 = G__55620;
continue;
} else {
var param_55621 = cljs.core.first(seq__54398_55615__$1);
cljs.compiler.emit(param_55621);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_55621,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55623 = cljs.core.next(seq__54398_55615__$1);
var G__55624 = null;
var G__55625 = (0);
var G__55626 = (0);
seq__54398_55599 = G__55623;
chunk__54399_55600 = G__55624;
count__54400_55601 = G__55625;
i__54401_55602 = G__55626;
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

var seq__54408_55629 = cljs.core.seq(params);
var chunk__54409_55630 = null;
var count__54410_55631 = (0);
var i__54411_55632 = (0);
while(true){
if((i__54411_55632 < count__54410_55631)){
var param_55633 = chunk__54409_55630.cljs$core$IIndexed$_nth$arity$2(null,i__54411_55632);
cljs.compiler.emit(param_55633);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_55633,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55635 = seq__54408_55629;
var G__55636 = chunk__54409_55630;
var G__55637 = count__54410_55631;
var G__55638 = (i__54411_55632 + (1));
seq__54408_55629 = G__55635;
chunk__54409_55630 = G__55636;
count__54410_55631 = G__55637;
i__54411_55632 = G__55638;
continue;
} else {
var temp__5735__auto___55640 = cljs.core.seq(seq__54408_55629);
if(temp__5735__auto___55640){
var seq__54408_55641__$1 = temp__5735__auto___55640;
if(cljs.core.chunked_seq_QMARK_(seq__54408_55641__$1)){
var c__4550__auto___55643 = cljs.core.chunk_first(seq__54408_55641__$1);
var G__55645 = cljs.core.chunk_rest(seq__54408_55641__$1);
var G__55646 = c__4550__auto___55643;
var G__55647 = cljs.core.count(c__4550__auto___55643);
var G__55648 = (0);
seq__54408_55629 = G__55645;
chunk__54409_55630 = G__55646;
count__54410_55631 = G__55647;
i__54411_55632 = G__55648;
continue;
} else {
var param_55649 = cljs.core.first(seq__54408_55641__$1);
cljs.compiler.emit(param_55649);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_55649,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55654 = cljs.core.next(seq__54408_55641__$1);
var G__55655 = null;
var G__55656 = (0);
var G__55657 = (0);
seq__54408_55629 = G__55654;
chunk__54409_55630 = G__55655;
count__54410_55631 = G__55656;
i__54411_55632 = G__55657;
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
var seq__54416 = cljs.core.seq(params);
var chunk__54417 = null;
var count__54418 = (0);
var i__54419 = (0);
while(true){
if((i__54419 < count__54418)){
var param = chunk__54417.cljs$core$IIndexed$_nth$arity$2(null,i__54419);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55660 = seq__54416;
var G__55661 = chunk__54417;
var G__55662 = count__54418;
var G__55663 = (i__54419 + (1));
seq__54416 = G__55660;
chunk__54417 = G__55661;
count__54418 = G__55662;
i__54419 = G__55663;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54416);
if(temp__5735__auto__){
var seq__54416__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54416__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54416__$1);
var G__55664 = cljs.core.chunk_rest(seq__54416__$1);
var G__55665 = c__4550__auto__;
var G__55666 = cljs.core.count(c__4550__auto__);
var G__55667 = (0);
seq__54416 = G__55664;
chunk__54417 = G__55665;
count__54418 = G__55666;
i__54419 = G__55667;
continue;
} else {
var param = cljs.core.first(seq__54416__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55670 = cljs.core.next(seq__54416__$1);
var G__55671 = null;
var G__55672 = (0);
var G__55673 = (0);
seq__54416 = G__55670;
chunk__54417 = G__55671;
count__54418 = G__55672;
i__54419 = G__55673;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__54424){
var map__54425 = p__54424;
var map__54425__$1 = (((((!((map__54425 == null))))?(((((map__54425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54425):map__54425);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54425__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54425__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54425__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54425__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54425__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
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

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__54427){
var map__54428 = p__54427;
var map__54428__$1 = (((((!((map__54428 == null))))?(((((map__54428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54428):map__54428);
var f = map__54428__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_55700__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_55701 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_55700__$1);
var delegate_name_55702 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_55701),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_55702," = function (");

var seq__54435_55703 = cljs.core.seq(params);
var chunk__54436_55704 = null;
var count__54437_55705 = (0);
var i__54438_55706 = (0);
while(true){
if((i__54438_55706 < count__54437_55705)){
var param_55707 = chunk__54436_55704.cljs$core$IIndexed$_nth$arity$2(null,i__54438_55706);
cljs.compiler.emit(param_55707);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_55707,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55708 = seq__54435_55703;
var G__55709 = chunk__54436_55704;
var G__55710 = count__54437_55705;
var G__55711 = (i__54438_55706 + (1));
seq__54435_55703 = G__55708;
chunk__54436_55704 = G__55709;
count__54437_55705 = G__55710;
i__54438_55706 = G__55711;
continue;
} else {
var temp__5735__auto___55712 = cljs.core.seq(seq__54435_55703);
if(temp__5735__auto___55712){
var seq__54435_55713__$1 = temp__5735__auto___55712;
if(cljs.core.chunked_seq_QMARK_(seq__54435_55713__$1)){
var c__4550__auto___55714 = cljs.core.chunk_first(seq__54435_55713__$1);
var G__55715 = cljs.core.chunk_rest(seq__54435_55713__$1);
var G__55716 = c__4550__auto___55714;
var G__55717 = cljs.core.count(c__4550__auto___55714);
var G__55718 = (0);
seq__54435_55703 = G__55715;
chunk__54436_55704 = G__55716;
count__54437_55705 = G__55717;
i__54438_55706 = G__55718;
continue;
} else {
var param_55719 = cljs.core.first(seq__54435_55713__$1);
cljs.compiler.emit(param_55719);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_55719,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55721 = cljs.core.next(seq__54435_55713__$1);
var G__55722 = null;
var G__55723 = (0);
var G__55724 = (0);
seq__54435_55703 = G__55721;
chunk__54436_55704 = G__55722;
count__54437_55705 = G__55723;
i__54438_55706 = G__55724;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_55701," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_55729 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_55729,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_55702,".call(this,");

var seq__54442_55734 = cljs.core.seq(params);
var chunk__54443_55735 = null;
var count__54444_55736 = (0);
var i__54445_55737 = (0);
while(true){
if((i__54445_55737 < count__54444_55736)){
var param_55738 = chunk__54443_55735.cljs$core$IIndexed$_nth$arity$2(null,i__54445_55737);
cljs.compiler.emit(param_55738);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_55738,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55739 = seq__54442_55734;
var G__55740 = chunk__54443_55735;
var G__55741 = count__54444_55736;
var G__55742 = (i__54445_55737 + (1));
seq__54442_55734 = G__55739;
chunk__54443_55735 = G__55740;
count__54444_55736 = G__55741;
i__54445_55737 = G__55742;
continue;
} else {
var temp__5735__auto___55743 = cljs.core.seq(seq__54442_55734);
if(temp__5735__auto___55743){
var seq__54442_55744__$1 = temp__5735__auto___55743;
if(cljs.core.chunked_seq_QMARK_(seq__54442_55744__$1)){
var c__4550__auto___55745 = cljs.core.chunk_first(seq__54442_55744__$1);
var G__55746 = cljs.core.chunk_rest(seq__54442_55744__$1);
var G__55747 = c__4550__auto___55745;
var G__55748 = cljs.core.count(c__4550__auto___55745);
var G__55749 = (0);
seq__54442_55734 = G__55746;
chunk__54443_55735 = G__55747;
count__54444_55736 = G__55748;
i__54445_55737 = G__55749;
continue;
} else {
var param_55751 = cljs.core.first(seq__54442_55744__$1);
cljs.compiler.emit(param_55751);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_55751,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__55752 = cljs.core.next(seq__54442_55744__$1);
var G__55753 = null;
var G__55754 = (0);
var G__55755 = (0);
seq__54442_55734 = G__55752;
chunk__54443_55735 = G__55753;
count__54444_55736 = G__55754;
i__54445_55737 = G__55755;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55701,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_55701,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_55700__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55701,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_55702,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_55701,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__54459){
var map__54460 = p__54459;
var map__54460__$1 = (((((!((map__54460 == null))))?(((((map__54460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54460):map__54460);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54460__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54460__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54460__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54460__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54460__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54460__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54460__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__54460,map__54460__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__54452_SHARP_){
var and__4120__auto__ = p1__54452_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__54452_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__54460,map__54460__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_55772__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_55773 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_55772__$1);
var maxparams_55774 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_55775 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_55772__$1,mname_55773,maxparams_55774,loop_locals,map__54460,map__54460__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_55773),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_55772__$1,mname_55773,maxparams_55774,loop_locals,map__54460,map__54460__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_55776 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_55772__$1,mname_55773,maxparams_55774,mmap_55775,loop_locals,map__54460,map__54460__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__54453_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__54453_SHARP_)));
});})(name_55772__$1,mname_55773,maxparams_55774,mmap_55775,loop_locals,map__54460,map__54460__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq(mmap_55775));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_55773," = null;");

var seq__54466_55781 = cljs.core.seq(ms_55776);
var chunk__54467_55782 = null;
var count__54468_55783 = (0);
var i__54469_55784 = (0);
while(true){
if((i__54469_55784 < count__54468_55783)){
var vec__54481_55789 = chunk__54467_55782.cljs$core$IIndexed$_nth$arity$2(null,i__54469_55784);
var n_55790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54481_55789,(0),null);
var meth_55791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54481_55789,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_55790," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55791))){
cljs.compiler.emit_variadic_fn_method(meth_55791);
} else {
cljs.compiler.emit_fn_method(meth_55791);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__55794 = seq__54466_55781;
var G__55795 = chunk__54467_55782;
var G__55796 = count__54468_55783;
var G__55797 = (i__54469_55784 + (1));
seq__54466_55781 = G__55794;
chunk__54467_55782 = G__55795;
count__54468_55783 = G__55796;
i__54469_55784 = G__55797;
continue;
} else {
var temp__5735__auto___55798 = cljs.core.seq(seq__54466_55781);
if(temp__5735__auto___55798){
var seq__54466_55799__$1 = temp__5735__auto___55798;
if(cljs.core.chunked_seq_QMARK_(seq__54466_55799__$1)){
var c__4550__auto___55800 = cljs.core.chunk_first(seq__54466_55799__$1);
var G__55801 = cljs.core.chunk_rest(seq__54466_55799__$1);
var G__55802 = c__4550__auto___55800;
var G__55803 = cljs.core.count(c__4550__auto___55800);
var G__55804 = (0);
seq__54466_55781 = G__55801;
chunk__54467_55782 = G__55802;
count__54468_55783 = G__55803;
i__54469_55784 = G__55804;
continue;
} else {
var vec__54487_55809 = cljs.core.first(seq__54466_55799__$1);
var n_55810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54487_55809,(0),null);
var meth_55811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54487_55809,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_55810," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55811))){
cljs.compiler.emit_variadic_fn_method(meth_55811);
} else {
cljs.compiler.emit_fn_method(meth_55811);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__55812 = cljs.core.next(seq__54466_55799__$1);
var G__55813 = null;
var G__55814 = (0);
var G__55815 = (0);
seq__54466_55781 = G__55812;
chunk__54467_55782 = G__55813;
count__54468_55783 = G__55814;
i__54469_55784 = G__55815;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55773," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_55774),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_55774)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_55774));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__54490_55816 = cljs.core.seq(ms_55776);
var chunk__54491_55817 = null;
var count__54492_55818 = (0);
var i__54493_55819 = (0);
while(true){
if((i__54493_55819 < count__54492_55818)){
var vec__54511_55823 = chunk__54491_55817.cljs$core$IIndexed$_nth$arity$2(null,i__54493_55819);
var n_55824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54511_55823,(0),null);
var meth_55825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54511_55823,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55825))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_55832 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_55832," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_55833 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_55832," = new cljs.core.IndexedSeq(",a_55833,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_55824,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_55774)),(((cljs.core.count(maxparams_55774) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_55832,");"], 0));
} else {
var pcnt_55839 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_55825));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_55839,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_55824,".call(this",(((pcnt_55839 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_55839,maxparams_55774)),null,(1),null)),(2),null))),");");
}


var G__55840 = seq__54490_55816;
var G__55841 = chunk__54491_55817;
var G__55842 = count__54492_55818;
var G__55843 = (i__54493_55819 + (1));
seq__54490_55816 = G__55840;
chunk__54491_55817 = G__55841;
count__54492_55818 = G__55842;
i__54493_55819 = G__55843;
continue;
} else {
var temp__5735__auto___55845 = cljs.core.seq(seq__54490_55816);
if(temp__5735__auto___55845){
var seq__54490_55846__$1 = temp__5735__auto___55845;
if(cljs.core.chunked_seq_QMARK_(seq__54490_55846__$1)){
var c__4550__auto___55848 = cljs.core.chunk_first(seq__54490_55846__$1);
var G__55849 = cljs.core.chunk_rest(seq__54490_55846__$1);
var G__55850 = c__4550__auto___55848;
var G__55851 = cljs.core.count(c__4550__auto___55848);
var G__55852 = (0);
seq__54490_55816 = G__55849;
chunk__54491_55817 = G__55850;
count__54492_55818 = G__55851;
i__54493_55819 = G__55852;
continue;
} else {
var vec__54520_55853 = cljs.core.first(seq__54490_55846__$1);
var n_55854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54520_55853,(0),null);
var meth_55855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54520_55853,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55855))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_55860 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_55860," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_55861 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_55860," = new cljs.core.IndexedSeq(",a_55861,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_55854,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_55774)),(((cljs.core.count(maxparams_55774) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_55860,");"], 0));
} else {
var pcnt_55866 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_55855));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_55866,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_55854,".call(this",(((pcnt_55866 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_55866,maxparams_55774)),null,(1),null)),(2),null))),");");
}


var G__55868 = cljs.core.next(seq__54490_55846__$1);
var G__55869 = null;
var G__55871 = (0);
var G__55872 = (0);
seq__54490_55816 = G__55868;
chunk__54491_55817 = G__55869;
count__54492_55818 = G__55871;
i__54493_55819 = G__55872;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_55874 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_55776)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_55874,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55773,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55773,".cljs$lang$applyTo = ",cljs.core.some(((function (name_55772__$1,mname_55773,maxparams_55774,mmap_55775,ms_55776,loop_locals,map__54460,map__54460__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__54458_SHARP_){
var vec__54525 = p1__54458_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54525,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54525,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_55772__$1,mname_55773,maxparams_55774,mmap_55775,ms_55776,loop_locals,map__54460,map__54460__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_55776),".cljs$lang$applyTo;");
} else {
}

var seq__54528_55880 = cljs.core.seq(ms_55776);
var chunk__54529_55881 = null;
var count__54530_55882 = (0);
var i__54531_55883 = (0);
while(true){
if((i__54531_55883 < count__54530_55882)){
var vec__54546_55884 = chunk__54529_55881.cljs$core$IIndexed$_nth$arity$2(null,i__54531_55883);
var n_55885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54546_55884,(0),null);
var meth_55886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54546_55884,(1),null);
var c_55887 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_55886));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55886))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55773,".cljs$core$IFn$_invoke$arity$variadic = ",n_55885,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_55773,".cljs$core$IFn$_invoke$arity$",c_55887," = ",n_55885,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__55888 = seq__54528_55880;
var G__55889 = chunk__54529_55881;
var G__55890 = count__54530_55882;
var G__55891 = (i__54531_55883 + (1));
seq__54528_55880 = G__55888;
chunk__54529_55881 = G__55889;
count__54530_55882 = G__55890;
i__54531_55883 = G__55891;
continue;
} else {
var temp__5735__auto___55892 = cljs.core.seq(seq__54528_55880);
if(temp__5735__auto___55892){
var seq__54528_55893__$1 = temp__5735__auto___55892;
if(cljs.core.chunked_seq_QMARK_(seq__54528_55893__$1)){
var c__4550__auto___55894 = cljs.core.chunk_first(seq__54528_55893__$1);
var G__55895 = cljs.core.chunk_rest(seq__54528_55893__$1);
var G__55896 = c__4550__auto___55894;
var G__55897 = cljs.core.count(c__4550__auto___55894);
var G__55898 = (0);
seq__54528_55880 = G__55895;
chunk__54529_55881 = G__55896;
count__54530_55882 = G__55897;
i__54531_55883 = G__55898;
continue;
} else {
var vec__54552_55899 = cljs.core.first(seq__54528_55893__$1);
var n_55900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54552_55899,(0),null);
var meth_55901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54552_55899,(1),null);
var c_55902 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_55901));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55901))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55773,".cljs$core$IFn$_invoke$arity$variadic = ",n_55900,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_55773,".cljs$core$IFn$_invoke$arity$",c_55902," = ",n_55900,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__55903 = cljs.core.next(seq__54528_55893__$1);
var G__55904 = null;
var G__55905 = (0);
var G__55906 = (0);
seq__54528_55880 = G__55903;
chunk__54529_55881 = G__55904;
count__54530_55882 = G__55905;
i__54531_55883 = G__55906;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_55773,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__54555){
var map__54556 = p__54555;
var map__54556__$1 = (((((!((map__54556 == null))))?(((((map__54556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54556):map__54556);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54556__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54556__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54556__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__54565_55910 = cljs.core.seq(statements);
var chunk__54566_55911 = null;
var count__54567_55912 = (0);
var i__54568_55913 = (0);
while(true){
if((i__54568_55913 < count__54567_55912)){
var s_55914 = chunk__54566_55911.cljs$core$IIndexed$_nth$arity$2(null,i__54568_55913);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_55914);


var G__55933 = seq__54565_55910;
var G__55935 = chunk__54566_55911;
var G__55937 = count__54567_55912;
var G__55938 = (i__54568_55913 + (1));
seq__54565_55910 = G__55933;
chunk__54566_55911 = G__55935;
count__54567_55912 = G__55937;
i__54568_55913 = G__55938;
continue;
} else {
var temp__5735__auto___55947 = cljs.core.seq(seq__54565_55910);
if(temp__5735__auto___55947){
var seq__54565_55948__$1 = temp__5735__auto___55947;
if(cljs.core.chunked_seq_QMARK_(seq__54565_55948__$1)){
var c__4550__auto___55949 = cljs.core.chunk_first(seq__54565_55948__$1);
var G__55950 = cljs.core.chunk_rest(seq__54565_55948__$1);
var G__55951 = c__4550__auto___55949;
var G__55952 = cljs.core.count(c__4550__auto___55949);
var G__55953 = (0);
seq__54565_55910 = G__55950;
chunk__54566_55911 = G__55951;
count__54567_55912 = G__55952;
i__54568_55913 = G__55953;
continue;
} else {
var s_55954 = cljs.core.first(seq__54565_55948__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_55954);


var G__55955 = cljs.core.next(seq__54565_55948__$1);
var G__55956 = null;
var G__55957 = (0);
var G__55958 = (0);
seq__54565_55910 = G__55955;
chunk__54566_55911 = G__55956;
count__54567_55912 = G__55957;
i__54568_55913 = G__55958;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__54607){
var map__54609 = p__54607;
var map__54609__$1 = (((((!((map__54609 == null))))?(((((map__54609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54609):map__54609);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54609__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54609__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54609__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54609__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54609__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__54625,is_loop){
var map__54626 = p__54625;
var map__54626__$1 = (((((!((map__54626 == null))))?(((((map__54626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54626):map__54626);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54626__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54626__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54626__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__54636_55972 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__54637_55973 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR__orig_val__54636_55972,context,map__54626,map__54626__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__54636_55972,context,map__54626,map__54626__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__54637_55973;

try{var seq__54638_55978 = cljs.core.seq(bindings);
var chunk__54639_55979 = null;
var count__54640_55980 = (0);
var i__54641_55981 = (0);
while(true){
if((i__54641_55981 < count__54640_55980)){
var map__54646_55982 = chunk__54639_55979.cljs$core$IIndexed$_nth$arity$2(null,i__54641_55981);
var map__54646_55983__$1 = (((((!((map__54646_55982 == null))))?(((((map__54646_55982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54646_55982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54646_55982):map__54646_55982);
var binding_55984 = map__54646_55983__$1;
var init_55985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54646_55983__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_55984);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_55985,";");


var G__55987 = seq__54638_55978;
var G__55988 = chunk__54639_55979;
var G__55989 = count__54640_55980;
var G__55990 = (i__54641_55981 + (1));
seq__54638_55978 = G__55987;
chunk__54639_55979 = G__55988;
count__54640_55980 = G__55989;
i__54641_55981 = G__55990;
continue;
} else {
var temp__5735__auto___55991 = cljs.core.seq(seq__54638_55978);
if(temp__5735__auto___55991){
var seq__54638_55993__$1 = temp__5735__auto___55991;
if(cljs.core.chunked_seq_QMARK_(seq__54638_55993__$1)){
var c__4550__auto___55994 = cljs.core.chunk_first(seq__54638_55993__$1);
var G__55995 = cljs.core.chunk_rest(seq__54638_55993__$1);
var G__55996 = c__4550__auto___55994;
var G__55997 = cljs.core.count(c__4550__auto___55994);
var G__55998 = (0);
seq__54638_55978 = G__55995;
chunk__54639_55979 = G__55996;
count__54640_55980 = G__55997;
i__54641_55981 = G__55998;
continue;
} else {
var map__54649_56002 = cljs.core.first(seq__54638_55993__$1);
var map__54649_56003__$1 = (((((!((map__54649_56002 == null))))?(((((map__54649_56002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54649_56002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54649_56002):map__54649_56002);
var binding_56004 = map__54649_56003__$1;
var init_56005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54649_56003__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_56004);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_56005,";");


var G__56006 = cljs.core.next(seq__54638_55993__$1);
var G__56007 = null;
var G__56008 = (0);
var G__56009 = (0);
seq__54638_55978 = G__56006;
chunk__54639_55979 = G__56007;
count__54640_55980 = G__56008;
i__54641_55981 = G__56009;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__54636_55972;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__54660){
var map__54661 = p__54660;
var map__54661__$1 = (((((!((map__54661 == null))))?(((((map__54661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54661):map__54661);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54661__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54661__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___56016 = cljs.core.count(exprs);
var i_56017 = (0);
while(true){
if((i_56017 < n__4607__auto___56016)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_56017) : temps.call(null,i_56017))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_56017) : exprs.call(null,i_56017)),";");

var G__56018 = (i_56017 + (1));
i_56017 = G__56018;
continue;
} else {
}
break;
}

var n__4607__auto___56019 = cljs.core.count(exprs);
var i_56020 = (0);
while(true){
if((i_56020 < n__4607__auto___56019)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_56020) : params.call(null,i_56020)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_56020) : temps.call(null,i_56020)),";");

var G__56023 = (i_56020 + (1));
i_56020 = G__56023;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__54667){
var map__54668 = p__54667;
var map__54668__$1 = (((((!((map__54668 == null))))?(((((map__54668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54668):map__54668);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54668__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54668__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54668__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__54670_56025 = cljs.core.seq(bindings);
var chunk__54671_56026 = null;
var count__54672_56027 = (0);
var i__54673_56028 = (0);
while(true){
if((i__54673_56028 < count__54672_56027)){
var map__54683_56030 = chunk__54671_56026.cljs$core$IIndexed$_nth$arity$2(null,i__54673_56028);
var map__54683_56031__$1 = (((((!((map__54683_56030 == null))))?(((((map__54683_56030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54683_56030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54683_56030):map__54683_56030);
var binding_56032 = map__54683_56031__$1;
var init_56033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54683_56031__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_56032)," = ",init_56033,";");


var G__56056 = seq__54670_56025;
var G__56057 = chunk__54671_56026;
var G__56058 = count__54672_56027;
var G__56059 = (i__54673_56028 + (1));
seq__54670_56025 = G__56056;
chunk__54671_56026 = G__56057;
count__54672_56027 = G__56058;
i__54673_56028 = G__56059;
continue;
} else {
var temp__5735__auto___56060 = cljs.core.seq(seq__54670_56025);
if(temp__5735__auto___56060){
var seq__54670_56061__$1 = temp__5735__auto___56060;
if(cljs.core.chunked_seq_QMARK_(seq__54670_56061__$1)){
var c__4550__auto___56062 = cljs.core.chunk_first(seq__54670_56061__$1);
var G__56063 = cljs.core.chunk_rest(seq__54670_56061__$1);
var G__56064 = c__4550__auto___56062;
var G__56065 = cljs.core.count(c__4550__auto___56062);
var G__56066 = (0);
seq__54670_56025 = G__56063;
chunk__54671_56026 = G__56064;
count__54672_56027 = G__56065;
i__54673_56028 = G__56066;
continue;
} else {
var map__54685_56067 = cljs.core.first(seq__54670_56061__$1);
var map__54685_56068__$1 = (((((!((map__54685_56067 == null))))?(((((map__54685_56067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54685_56067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54685_56067):map__54685_56067);
var binding_56069 = map__54685_56068__$1;
var init_56070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54685_56068__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_56069)," = ",init_56070,";");


var G__56071 = cljs.core.next(seq__54670_56061__$1);
var G__56072 = null;
var G__56073 = (0);
var G__56074 = (0);
seq__54670_56025 = G__56071;
chunk__54671_56026 = G__56072;
count__54672_56027 = G__56073;
i__54673_56028 = G__56074;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__54702){
var map__54703 = p__54702;
var map__54703__$1 = (((((!((map__54703 == null))))?(((((map__54703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54703):map__54703);
var expr = map__54703__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54703__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54703__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54703__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var and__4120__auto____$4 = cljs.core.not((function (){var fexpr__54719 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__54719.cljs$core$IFn$_invoke$arity$1 ? fexpr__54719.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__54719.call(null,tag));
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
var vec__54706 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54703,map__54703__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54703,map__54703__$1,expr,f,args,env){
return (function (p1__54699_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54699_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54703,map__54703__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54703,map__54703__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54703,map__54703__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54703,map__54703__$1,expr,f,args,env){
return (function (p1__54700_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54700_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54703,map__54703__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54703,map__54703__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54706,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54706,(1),null);
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_56107 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_56107,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_56131 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_56131,args)),(((mfa_56131 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_56131,args)),"], 0))"], 0));
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
var G__54730 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__54729 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__54729.cljs$core$IFn$_invoke$arity$1 ? fexpr__54729.cljs$core$IFn$_invoke$arity$1(G__54730) : fexpr__54729.call(null,G__54730));
} else {
return and__4120__auto__;
}
})())){
var fprop_56136 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_56136," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_56136,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_56136," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_56136,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__54734){
var map__54735 = p__54734;
var map__54735__$1 = (((((!((map__54735 == null))))?(((((map__54735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54735):map__54735);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54735__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54735__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54735__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__54738){
var map__54739 = p__54738;
var map__54739__$1 = (((((!((map__54739 == null))))?(((((map__54739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54739):map__54739);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54739__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54739__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54739__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target," = ",val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
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
var map__54742 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__54742__$1 = (((((!((map__54742 == null))))?(((((map__54742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54742):map__54742);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54742__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54742__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__54743 = options;
var map__54743__$1 = (((((!((map__54743 == null))))?(((((map__54743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54743):map__54743);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54743__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54743__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__54744 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__54754 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__54754__$1 = (((((!((map__54754 == null))))?(((((map__54754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54754):map__54754);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54754__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54754__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54744,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54744,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__54760_56173 = cljs.core.seq(libs_to_load);
var chunk__54761_56174 = null;
var count__54762_56175 = (0);
var i__54763_56176 = (0);
while(true){
if((i__54763_56176 < count__54762_56175)){
var lib_56177 = chunk__54761_56174.cljs$core$IIndexed$_nth$arity$2(null,i__54763_56176);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_56177)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_56177),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_56177),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_56177),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_56177),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_56177,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_56177),"');");
}

}
}
}


var G__56180 = seq__54760_56173;
var G__56181 = chunk__54761_56174;
var G__56182 = count__54762_56175;
var G__56183 = (i__54763_56176 + (1));
seq__54760_56173 = G__56180;
chunk__54761_56174 = G__56181;
count__54762_56175 = G__56182;
i__54763_56176 = G__56183;
continue;
} else {
var temp__5735__auto___56184 = cljs.core.seq(seq__54760_56173);
if(temp__5735__auto___56184){
var seq__54760_56185__$1 = temp__5735__auto___56184;
if(cljs.core.chunked_seq_QMARK_(seq__54760_56185__$1)){
var c__4550__auto___56186 = cljs.core.chunk_first(seq__54760_56185__$1);
var G__56187 = cljs.core.chunk_rest(seq__54760_56185__$1);
var G__56188 = c__4550__auto___56186;
var G__56189 = cljs.core.count(c__4550__auto___56186);
var G__56190 = (0);
seq__54760_56173 = G__56187;
chunk__54761_56174 = G__56188;
count__54762_56175 = G__56189;
i__54763_56176 = G__56190;
continue;
} else {
var lib_56191 = cljs.core.first(seq__54760_56185__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_56191)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_56191),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_56191),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_56191),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_56191),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_56191,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_56191),"');");
}

}
}
}


var G__56198 = cljs.core.next(seq__54760_56185__$1);
var G__56199 = null;
var G__56200 = (0);
var G__56201 = (0);
seq__54760_56173 = G__56198;
chunk__54761_56174 = G__56199;
count__54762_56175 = G__56200;
i__54763_56176 = G__56201;
continue;
}
} else {
}
}
break;
}

var seq__54768_56202 = cljs.core.seq(node_libs);
var chunk__54769_56203 = null;
var count__54770_56204 = (0);
var i__54771_56205 = (0);
while(true){
if((i__54771_56205 < count__54770_56204)){
var lib_56206 = chunk__54769_56203.cljs$core$IIndexed$_nth$arity$2(null,i__54771_56205);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_56206)," = require('",lib_56206,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__56207 = seq__54768_56202;
var G__56208 = chunk__54769_56203;
var G__56209 = count__54770_56204;
var G__56210 = (i__54771_56205 + (1));
seq__54768_56202 = G__56207;
chunk__54769_56203 = G__56208;
count__54770_56204 = G__56209;
i__54771_56205 = G__56210;
continue;
} else {
var temp__5735__auto___56211 = cljs.core.seq(seq__54768_56202);
if(temp__5735__auto___56211){
var seq__54768_56212__$1 = temp__5735__auto___56211;
if(cljs.core.chunked_seq_QMARK_(seq__54768_56212__$1)){
var c__4550__auto___56213 = cljs.core.chunk_first(seq__54768_56212__$1);
var G__56214 = cljs.core.chunk_rest(seq__54768_56212__$1);
var G__56215 = c__4550__auto___56213;
var G__56216 = cljs.core.count(c__4550__auto___56213);
var G__56217 = (0);
seq__54768_56202 = G__56214;
chunk__54769_56203 = G__56215;
count__54770_56204 = G__56216;
i__54771_56205 = G__56217;
continue;
} else {
var lib_56218 = cljs.core.first(seq__54768_56212__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_56218)," = require('",lib_56218,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__56221 = cljs.core.next(seq__54768_56212__$1);
var G__56222 = null;
var G__56223 = (0);
var G__56224 = (0);
seq__54768_56202 = G__56221;
chunk__54769_56203 = G__56222;
count__54770_56204 = G__56223;
i__54771_56205 = G__56224;
continue;
}
} else {
}
}
break;
}

var seq__54784_56225 = cljs.core.seq(global_exports_libs);
var chunk__54785_56226 = null;
var count__54786_56227 = (0);
var i__54787_56228 = (0);
while(true){
if((i__54787_56228 < count__54786_56227)){
var lib_56230 = chunk__54785_56226.cljs$core$IIndexed$_nth$arity$2(null,i__54787_56228);
var map__54811_56231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_56230));
var map__54811_56232__$1 = (((((!((map__54811_56231 == null))))?(((((map__54811_56231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54811_56231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54811_56231):map__54811_56231);
var global_exports_56233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54811_56232__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_56233,lib_56230);


var G__56235 = seq__54784_56225;
var G__56236 = chunk__54785_56226;
var G__56237 = count__54786_56227;
var G__56238 = (i__54787_56228 + (1));
seq__54784_56225 = G__56235;
chunk__54785_56226 = G__56236;
count__54786_56227 = G__56237;
i__54787_56228 = G__56238;
continue;
} else {
var temp__5735__auto___56239 = cljs.core.seq(seq__54784_56225);
if(temp__5735__auto___56239){
var seq__54784_56264__$1 = temp__5735__auto___56239;
if(cljs.core.chunked_seq_QMARK_(seq__54784_56264__$1)){
var c__4550__auto___56265 = cljs.core.chunk_first(seq__54784_56264__$1);
var G__56266 = cljs.core.chunk_rest(seq__54784_56264__$1);
var G__56267 = c__4550__auto___56265;
var G__56268 = cljs.core.count(c__4550__auto___56265);
var G__56269 = (0);
seq__54784_56225 = G__56266;
chunk__54785_56226 = G__56267;
count__54786_56227 = G__56268;
i__54787_56228 = G__56269;
continue;
} else {
var lib_56270 = cljs.core.first(seq__54784_56264__$1);
var map__54820_56271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_56270));
var map__54820_56272__$1 = (((((!((map__54820_56271 == null))))?(((((map__54820_56271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54820_56271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54820_56271):map__54820_56271);
var global_exports_56273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54820_56272__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_56273,lib_56270);


var G__56274 = cljs.core.next(seq__54784_56264__$1);
var G__56275 = null;
var G__56276 = (0);
var G__56277 = (0);
seq__54784_56225 = G__56274;
chunk__54785_56226 = G__56275;
count__54786_56227 = G__56276;
i__54787_56228 = G__56277;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__54822){
var map__54823 = p__54822;
var map__54823__$1 = (((((!((map__54823 == null))))?(((((map__54823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54823):map__54823);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__54825){
var map__54826 = p__54825;
var map__54826__$1 = (((((!((map__54826 == null))))?(((((map__54826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54826):map__54826);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54826__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54826__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54826__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54826__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54826__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54826__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54826__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__54828){
var map__54829 = p__54828;
var map__54829__$1 = (((((!((map__54829 == null))))?(((((map__54829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54829):map__54829);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54829__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54829__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54829__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54829__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54829__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__54831_56315 = cljs.core.seq(protocols);
var chunk__54832_56316 = null;
var count__54833_56317 = (0);
var i__54834_56318 = (0);
while(true){
if((i__54834_56318 < count__54833_56317)){
var protocol_56319 = chunk__54832_56316.cljs$core$IIndexed$_nth$arity$2(null,i__54834_56318);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_56319)),"}");


var G__56322 = seq__54831_56315;
var G__56323 = chunk__54832_56316;
var G__56324 = count__54833_56317;
var G__56325 = (i__54834_56318 + (1));
seq__54831_56315 = G__56322;
chunk__54832_56316 = G__56323;
count__54833_56317 = G__56324;
i__54834_56318 = G__56325;
continue;
} else {
var temp__5735__auto___56326 = cljs.core.seq(seq__54831_56315);
if(temp__5735__auto___56326){
var seq__54831_56327__$1 = temp__5735__auto___56326;
if(cljs.core.chunked_seq_QMARK_(seq__54831_56327__$1)){
var c__4550__auto___56328 = cljs.core.chunk_first(seq__54831_56327__$1);
var G__56329 = cljs.core.chunk_rest(seq__54831_56327__$1);
var G__56330 = c__4550__auto___56328;
var G__56331 = cljs.core.count(c__4550__auto___56328);
var G__56332 = (0);
seq__54831_56315 = G__56329;
chunk__54832_56316 = G__56330;
count__54833_56317 = G__56331;
i__54834_56318 = G__56332;
continue;
} else {
var protocol_56333 = cljs.core.first(seq__54831_56327__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_56333)),"}");


var G__56336 = cljs.core.next(seq__54831_56327__$1);
var G__56337 = null;
var G__56338 = (0);
var G__56339 = (0);
seq__54831_56315 = G__56336;
chunk__54832_56316 = G__56337;
count__54833_56317 = G__56338;
i__54834_56318 = G__56339;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__54835_56342 = cljs.core.seq(fields__$1);
var chunk__54836_56343 = null;
var count__54837_56344 = (0);
var i__54838_56345 = (0);
while(true){
if((i__54838_56345 < count__54837_56344)){
var fld_56350 = chunk__54836_56343.cljs$core$IIndexed$_nth$arity$2(null,i__54838_56345);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_56350," = ",fld_56350,";");


var G__56351 = seq__54835_56342;
var G__56352 = chunk__54836_56343;
var G__56353 = count__54837_56344;
var G__56354 = (i__54838_56345 + (1));
seq__54835_56342 = G__56351;
chunk__54836_56343 = G__56352;
count__54837_56344 = G__56353;
i__54838_56345 = G__56354;
continue;
} else {
var temp__5735__auto___56355 = cljs.core.seq(seq__54835_56342);
if(temp__5735__auto___56355){
var seq__54835_56356__$1 = temp__5735__auto___56355;
if(cljs.core.chunked_seq_QMARK_(seq__54835_56356__$1)){
var c__4550__auto___56357 = cljs.core.chunk_first(seq__54835_56356__$1);
var G__56358 = cljs.core.chunk_rest(seq__54835_56356__$1);
var G__56359 = c__4550__auto___56357;
var G__56360 = cljs.core.count(c__4550__auto___56357);
var G__56361 = (0);
seq__54835_56342 = G__56358;
chunk__54836_56343 = G__56359;
count__54837_56344 = G__56360;
i__54838_56345 = G__56361;
continue;
} else {
var fld_56362 = cljs.core.first(seq__54835_56356__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_56362," = ",fld_56362,";");


var G__56363 = cljs.core.next(seq__54835_56356__$1);
var G__56364 = null;
var G__56365 = (0);
var G__56366 = (0);
seq__54835_56342 = G__56363;
chunk__54836_56343 = G__56364;
count__54837_56344 = G__56365;
i__54838_56345 = G__56366;
continue;
}
} else {
}
}
break;
}

var seq__54842_56367 = cljs.core.seq(pmasks);
var chunk__54843_56368 = null;
var count__54844_56369 = (0);
var i__54845_56370 = (0);
while(true){
if((i__54845_56370 < count__54844_56369)){
var vec__54861_56371 = chunk__54843_56368.cljs$core$IIndexed$_nth$arity$2(null,i__54845_56370);
var pno_56372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54861_56371,(0),null);
var pmask_56373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54861_56371,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_56372,"$ = ",pmask_56373,";");


var G__56375 = seq__54842_56367;
var G__56376 = chunk__54843_56368;
var G__56377 = count__54844_56369;
var G__56378 = (i__54845_56370 + (1));
seq__54842_56367 = G__56375;
chunk__54843_56368 = G__56376;
count__54844_56369 = G__56377;
i__54845_56370 = G__56378;
continue;
} else {
var temp__5735__auto___56382 = cljs.core.seq(seq__54842_56367);
if(temp__5735__auto___56382){
var seq__54842_56384__$1 = temp__5735__auto___56382;
if(cljs.core.chunked_seq_QMARK_(seq__54842_56384__$1)){
var c__4550__auto___56385 = cljs.core.chunk_first(seq__54842_56384__$1);
var G__56386 = cljs.core.chunk_rest(seq__54842_56384__$1);
var G__56387 = c__4550__auto___56385;
var G__56388 = cljs.core.count(c__4550__auto___56385);
var G__56389 = (0);
seq__54842_56367 = G__56386;
chunk__54843_56368 = G__56387;
count__54844_56369 = G__56388;
i__54845_56370 = G__56389;
continue;
} else {
var vec__54864_56391 = cljs.core.first(seq__54842_56384__$1);
var pno_56392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54864_56391,(0),null);
var pmask_56393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54864_56391,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_56392,"$ = ",pmask_56393,";");


var G__56399 = cljs.core.next(seq__54842_56384__$1);
var G__56400 = null;
var G__56401 = (0);
var G__56402 = (0);
seq__54842_56367 = G__56399;
chunk__54843_56368 = G__56400;
count__54844_56369 = G__56401;
i__54845_56370 = G__56402;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__54867){
var map__54868 = p__54867;
var map__54868__$1 = (((((!((map__54868 == null))))?(((((map__54868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54868):map__54868);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__54879_56406 = cljs.core.seq(protocols);
var chunk__54883_56407 = null;
var count__54884_56408 = (0);
var i__54885_56409 = (0);
while(true){
if((i__54885_56409 < count__54884_56408)){
var protocol_56410 = chunk__54883_56407.cljs$core$IIndexed$_nth$arity$2(null,i__54885_56409);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_56410)),"}");


var G__56411 = seq__54879_56406;
var G__56412 = chunk__54883_56407;
var G__56413 = count__54884_56408;
var G__56414 = (i__54885_56409 + (1));
seq__54879_56406 = G__56411;
chunk__54883_56407 = G__56412;
count__54884_56408 = G__56413;
i__54885_56409 = G__56414;
continue;
} else {
var temp__5735__auto___56415 = cljs.core.seq(seq__54879_56406);
if(temp__5735__auto___56415){
var seq__54879_56416__$1 = temp__5735__auto___56415;
if(cljs.core.chunked_seq_QMARK_(seq__54879_56416__$1)){
var c__4550__auto___56417 = cljs.core.chunk_first(seq__54879_56416__$1);
var G__56418 = cljs.core.chunk_rest(seq__54879_56416__$1);
var G__56419 = c__4550__auto___56417;
var G__56420 = cljs.core.count(c__4550__auto___56417);
var G__56421 = (0);
seq__54879_56406 = G__56418;
chunk__54883_56407 = G__56419;
count__54884_56408 = G__56420;
i__54885_56409 = G__56421;
continue;
} else {
var protocol_56424 = cljs.core.first(seq__54879_56416__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_56424)),"}");


var G__56425 = cljs.core.next(seq__54879_56416__$1);
var G__56426 = null;
var G__56427 = (0);
var G__56428 = (0);
seq__54879_56406 = G__56425;
chunk__54883_56407 = G__56426;
count__54884_56408 = G__56427;
i__54885_56409 = G__56428;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__54891_56429 = cljs.core.seq(fields__$1);
var chunk__54892_56430 = null;
var count__54893_56431 = (0);
var i__54894_56432 = (0);
while(true){
if((i__54894_56432 < count__54893_56431)){
var fld_56435 = chunk__54892_56430.cljs$core$IIndexed$_nth$arity$2(null,i__54894_56432);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_56435," = ",fld_56435,";");


var G__56436 = seq__54891_56429;
var G__56437 = chunk__54892_56430;
var G__56438 = count__54893_56431;
var G__56439 = (i__54894_56432 + (1));
seq__54891_56429 = G__56436;
chunk__54892_56430 = G__56437;
count__54893_56431 = G__56438;
i__54894_56432 = G__56439;
continue;
} else {
var temp__5735__auto___56440 = cljs.core.seq(seq__54891_56429);
if(temp__5735__auto___56440){
var seq__54891_56441__$1 = temp__5735__auto___56440;
if(cljs.core.chunked_seq_QMARK_(seq__54891_56441__$1)){
var c__4550__auto___56442 = cljs.core.chunk_first(seq__54891_56441__$1);
var G__56443 = cljs.core.chunk_rest(seq__54891_56441__$1);
var G__56444 = c__4550__auto___56442;
var G__56445 = cljs.core.count(c__4550__auto___56442);
var G__56446 = (0);
seq__54891_56429 = G__56443;
chunk__54892_56430 = G__56444;
count__54893_56431 = G__56445;
i__54894_56432 = G__56446;
continue;
} else {
var fld_56447 = cljs.core.first(seq__54891_56441__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_56447," = ",fld_56447,";");


var G__56448 = cljs.core.next(seq__54891_56441__$1);
var G__56449 = null;
var G__56450 = (0);
var G__56451 = (0);
seq__54891_56429 = G__56448;
chunk__54892_56430 = G__56449;
count__54893_56431 = G__56450;
i__54894_56432 = G__56451;
continue;
}
} else {
}
}
break;
}

var seq__54897_56452 = cljs.core.seq(pmasks);
var chunk__54898_56453 = null;
var count__54899_56454 = (0);
var i__54900_56455 = (0);
while(true){
if((i__54900_56455 < count__54899_56454)){
var vec__54907_56456 = chunk__54898_56453.cljs$core$IIndexed$_nth$arity$2(null,i__54900_56455);
var pno_56457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54907_56456,(0),null);
var pmask_56458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54907_56456,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_56457,"$ = ",pmask_56458,";");


var G__56459 = seq__54897_56452;
var G__56460 = chunk__54898_56453;
var G__56461 = count__54899_56454;
var G__56462 = (i__54900_56455 + (1));
seq__54897_56452 = G__56459;
chunk__54898_56453 = G__56460;
count__54899_56454 = G__56461;
i__54900_56455 = G__56462;
continue;
} else {
var temp__5735__auto___56463 = cljs.core.seq(seq__54897_56452);
if(temp__5735__auto___56463){
var seq__54897_56464__$1 = temp__5735__auto___56463;
if(cljs.core.chunked_seq_QMARK_(seq__54897_56464__$1)){
var c__4550__auto___56465 = cljs.core.chunk_first(seq__54897_56464__$1);
var G__56466 = cljs.core.chunk_rest(seq__54897_56464__$1);
var G__56467 = c__4550__auto___56465;
var G__56468 = cljs.core.count(c__4550__auto___56465);
var G__56469 = (0);
seq__54897_56452 = G__56466;
chunk__54898_56453 = G__56467;
count__54899_56454 = G__56468;
i__54900_56455 = G__56469;
continue;
} else {
var vec__54910_56470 = cljs.core.first(seq__54897_56464__$1);
var pno_56471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54910_56470,(0),null);
var pmask_56472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54910_56470,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_56471,"$ = ",pmask_56472,";");


var G__56473 = cljs.core.next(seq__54897_56464__$1);
var G__56474 = null;
var G__56475 = (0);
var G__56476 = (0);
seq__54897_56452 = G__56473;
chunk__54898_56453 = G__56474;
count__54899_56454 = G__56475;
i__54900_56455 = G__56476;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__54917){
var map__54921 = p__54917;
var map__54921__$1 = (((((!((map__54921 == null))))?(((((map__54921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54921):map__54921);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__54941){
var map__54942 = p__54941;
var map__54942__$1 = (((((!((map__54942 == null))))?(((((map__54942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54942):map__54942);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54942__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54942__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54942__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54942__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54942__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
var G__54944 = clojure.string.trim(code);
var G__54945 = "/*";
return goog.string.startsWith(G__54944,G__54945);
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__24363__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24363__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__54952 = cljs.core.seq(table);
var chunk__54953 = null;
var count__54954 = (0);
var i__54955 = (0);
while(true){
if((i__54955 < count__54954)){
var vec__54962 = chunk__54953.cljs$core$IIndexed$_nth$arity$2(null,i__54955);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54962,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54962,(1),null);
var ns_56482 = cljs.core.namespace(sym);
var name_56483 = cljs.core.name(sym);
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


var G__56484 = seq__54952;
var G__56485 = chunk__54953;
var G__56486 = count__54954;
var G__56487 = (i__54955 + (1));
seq__54952 = G__56484;
chunk__54953 = G__56485;
count__54954 = G__56486;
i__54955 = G__56487;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54952);
if(temp__5735__auto__){
var seq__54952__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54952__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54952__$1);
var G__56488 = cljs.core.chunk_rest(seq__54952__$1);
var G__56489 = c__4550__auto__;
var G__56490 = cljs.core.count(c__4550__auto__);
var G__56491 = (0);
seq__54952 = G__56488;
chunk__54953 = G__56489;
count__54954 = G__56490;
i__54955 = G__56491;
continue;
} else {
var vec__54965 = cljs.core.first(seq__54952__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54965,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54965,(1),null);
var ns_56495 = cljs.core.namespace(sym);
var name_56496 = cljs.core.name(sym);
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


var G__56497 = cljs.core.next(seq__54952__$1);
var G__56498 = null;
var G__56499 = (0);
var G__56500 = (0);
seq__54952 = G__56497;
chunk__54953 = G__56498;
count__54954 = G__56499;
i__54955 = G__56500;
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
var G__54981 = arguments.length;
switch (G__54981) {
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
var k_56502 = cljs.core.first(ks);
var vec__54983_56503 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_56502);
var top_56504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54983_56503,(0),null);
var prefix_SINGLEQUOTE__56505 = vec__54983_56503;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_56502)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__56505) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_56504)) || (cljs.core.contains_QMARK_(known_externs,top_56504)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__56505)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_56504);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__56505)),";");
}
} else {
}

var m_56506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_56502);
if(cljs.core.empty_QMARK_(m_56506)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__56505,m_56506,top_level,known_externs);
}

var G__56507 = cljs.core.next(ks);
ks = G__56507;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

