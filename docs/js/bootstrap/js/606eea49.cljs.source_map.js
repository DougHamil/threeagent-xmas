goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__49127){
var vec__49128 = p__49127;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49128,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49128,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__49134 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49134,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49134,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49134,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49134,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49134,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__49147 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49147,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49147,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49147,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49147,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49147,(4),null);
var vec__49150 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49150,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49150,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49150,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49150,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49150,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4131__auto__ = col;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__49163 = segmap;
var map__49163__$1 = (((((!((map__49163 == null))))?(((((map__49163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49163):map__49163);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__49163,map__49163__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__49163,map__49163__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__49163,map__49163__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__49163,map__49163__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__49163,map__49163__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__49163,map__49163__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__49172 = arguments.length;
switch (G__49172) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__49183 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__50667 = cljs.core.next(segs__$1);
var G__50668 = nrelseg;
var G__50669 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__50667;
relseg__$1 = G__50668;
result__$1 = G__50669;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49183,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49183,(1),null);
var G__50670 = (gline + (1));
var G__50671 = cljs.core.next(lines__$1);
var G__50672 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__50673 = result__$1;
gline = G__50670;
lines__$1 = G__50671;
relseg = G__50672;
result = G__50673;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__49202 = segmap;
var map__49202__$1 = (((((!((map__49202 == null))))?(((((map__49202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49202):map__49202);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49202__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49202__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49202__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49202__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49202__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__49202,map__49202__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__49202,map__49202__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__49201_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49201_SHARP_,d__$1);
});})(map__49202,map__49202__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__49202,map__49202__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__49216 = arguments.length;
switch (G__49216) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__49246 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__50686 = cljs.core.next(segs__$1);
var G__50687 = nrelseg;
var G__50688 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__50686;
relseg__$1 = G__50687;
result__$1 = G__50688;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49246,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49246,(1),null);
var G__50689 = (gline + (1));
var G__50690 = cljs.core.next(lines__$1);
var G__50691 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__50692 = result__$1;
gline = G__50689;
lines__$1 = G__50690;
relseg = G__50691;
result = G__50692;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__49251){
var vec__49253 = p__49251;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49253,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49253,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49253,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49253,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49253,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__49259){
var vec__49260 = p__49259;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(4),null);
var seg = vec__49260;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__49260,gcol,sidx,line,col,name,seg,relseg){
return (function (p__49271){
var vec__49272 = p__49271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49272,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49272,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49272,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49272,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49272,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__49260,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__49285 = cljs.core.seq(infos);
var chunk__49286 = null;
var count__49287 = (0);
var i__49288 = (0);
while(true){
if((i__49288 < count__49287)){
var info = chunk__49286.cljs$core$IIndexed$_nth$arity$2(null,i__49288);
var segv_50703 = info__GT_segv(info,source_idx,line,col);
var gline_50704 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_50705 = cljs.core.count(cljs.core.deref(lines));
if((gline_50704 > (lc_50705 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__49285,chunk__49286,count__49287,i__49288,segv_50703,gline_50704,lc_50705,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_50704 - (lc_50705 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_50703], null));
});})(seq__49285,chunk__49286,count__49287,i__49288,segv_50703,gline_50704,lc_50705,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__49285,chunk__49286,count__49287,i__49288,segv_50703,gline_50704,lc_50705,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50704], null),cljs.core.conj,segv_50703);
});})(seq__49285,chunk__49286,count__49287,i__49288,segv_50703,gline_50704,lc_50705,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__50706 = seq__49285;
var G__50707 = chunk__49286;
var G__50708 = count__49287;
var G__50709 = (i__49288 + (1));
seq__49285 = G__50706;
chunk__49286 = G__50707;
count__49287 = G__50708;
i__49288 = G__50709;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49285);
if(temp__5735__auto__){
var seq__49285__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49285__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49285__$1);
var G__50710 = cljs.core.chunk_rest(seq__49285__$1);
var G__50711 = c__4550__auto__;
var G__50712 = cljs.core.count(c__4550__auto__);
var G__50713 = (0);
seq__49285 = G__50710;
chunk__49286 = G__50711;
count__49287 = G__50712;
i__49288 = G__50713;
continue;
} else {
var info = cljs.core.first(seq__49285__$1);
var segv_50714 = info__GT_segv(info,source_idx,line,col);
var gline_50715 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_50716 = cljs.core.count(cljs.core.deref(lines));
if((gline_50715 > (lc_50716 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__49285,chunk__49286,count__49287,i__49288,segv_50714,gline_50715,lc_50716,info,seq__49285__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_50715 - (lc_50716 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_50714], null));
});})(seq__49285,chunk__49286,count__49287,i__49288,segv_50714,gline_50715,lc_50716,info,seq__49285__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__49285,chunk__49286,count__49287,i__49288,segv_50714,gline_50715,lc_50716,info,seq__49285__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50715], null),cljs.core.conj,segv_50714);
});})(seq__49285,chunk__49286,count__49287,i__49288,segv_50714,gline_50715,lc_50716,info,seq__49285__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__50719 = cljs.core.next(seq__49285__$1);
var G__50720 = null;
var G__50721 = (0);
var G__50722 = (0);
seq__49285 = G__50719;
chunk__49286 = G__50720;
count__49287 = G__50721;
i__49288 = G__50722;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__49293_50723 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__49294_50724 = null;
var count__49295_50725 = (0);
var i__49296_50726 = (0);
while(true){
if((i__49296_50726 < count__49295_50725)){
var vec__49529_50728 = chunk__49294_50724.cljs$core$IIndexed$_nth$arity$2(null,i__49296_50726);
var source_idx_50729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49529_50728,(0),null);
var vec__49532_50730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49529_50728,(1),null);
var __50731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49532_50730,(0),null);
var lines_50732__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49532_50730,(1),null);
var seq__49539_50734 = cljs.core.seq(lines_50732__$1);
var chunk__49540_50735 = null;
var count__49541_50736 = (0);
var i__49542_50737 = (0);
while(true){
if((i__49542_50737 < count__49541_50736)){
var vec__49589_50738 = chunk__49540_50735.cljs$core$IIndexed$_nth$arity$2(null,i__49542_50737);
var line_50739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49589_50738,(0),null);
var cols_50740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49589_50738,(1),null);
var seq__49592_50741 = cljs.core.seq(cols_50740);
var chunk__49593_50742 = null;
var count__49594_50743 = (0);
var i__49595_50744 = (0);
while(true){
if((i__49595_50744 < count__49594_50743)){
var vec__49605_50745 = chunk__49593_50742.cljs$core$IIndexed$_nth$arity$2(null,i__49595_50744);
var col_50746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49605_50745,(0),null);
var infos_50747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49605_50745,(1),null);
encode_cols(infos_50747,source_idx_50729,line_50739,col_50746);


var G__50748 = seq__49592_50741;
var G__50749 = chunk__49593_50742;
var G__50750 = count__49594_50743;
var G__50751 = (i__49595_50744 + (1));
seq__49592_50741 = G__50748;
chunk__49593_50742 = G__50749;
count__49594_50743 = G__50750;
i__49595_50744 = G__50751;
continue;
} else {
var temp__5735__auto___50752 = cljs.core.seq(seq__49592_50741);
if(temp__5735__auto___50752){
var seq__49592_50754__$1 = temp__5735__auto___50752;
if(cljs.core.chunked_seq_QMARK_(seq__49592_50754__$1)){
var c__4550__auto___50755 = cljs.core.chunk_first(seq__49592_50754__$1);
var G__50756 = cljs.core.chunk_rest(seq__49592_50754__$1);
var G__50757 = c__4550__auto___50755;
var G__50758 = cljs.core.count(c__4550__auto___50755);
var G__50759 = (0);
seq__49592_50741 = G__50756;
chunk__49593_50742 = G__50757;
count__49594_50743 = G__50758;
i__49595_50744 = G__50759;
continue;
} else {
var vec__49611_50763 = cljs.core.first(seq__49592_50754__$1);
var col_50764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49611_50763,(0),null);
var infos_50765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49611_50763,(1),null);
encode_cols(infos_50765,source_idx_50729,line_50739,col_50764);


var G__50767 = cljs.core.next(seq__49592_50754__$1);
var G__50768 = null;
var G__50769 = (0);
var G__50770 = (0);
seq__49592_50741 = G__50767;
chunk__49593_50742 = G__50768;
count__49594_50743 = G__50769;
i__49595_50744 = G__50770;
continue;
}
} else {
}
}
break;
}


var G__50771 = seq__49539_50734;
var G__50772 = chunk__49540_50735;
var G__50773 = count__49541_50736;
var G__50774 = (i__49542_50737 + (1));
seq__49539_50734 = G__50771;
chunk__49540_50735 = G__50772;
count__49541_50736 = G__50773;
i__49542_50737 = G__50774;
continue;
} else {
var temp__5735__auto___50775 = cljs.core.seq(seq__49539_50734);
if(temp__5735__auto___50775){
var seq__49539_50776__$1 = temp__5735__auto___50775;
if(cljs.core.chunked_seq_QMARK_(seq__49539_50776__$1)){
var c__4550__auto___50777 = cljs.core.chunk_first(seq__49539_50776__$1);
var G__50779 = cljs.core.chunk_rest(seq__49539_50776__$1);
var G__50780 = c__4550__auto___50777;
var G__50781 = cljs.core.count(c__4550__auto___50777);
var G__50782 = (0);
seq__49539_50734 = G__50779;
chunk__49540_50735 = G__50780;
count__49541_50736 = G__50781;
i__49542_50737 = G__50782;
continue;
} else {
var vec__49620_50786 = cljs.core.first(seq__49539_50776__$1);
var line_50787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49620_50786,(0),null);
var cols_50788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49620_50786,(1),null);
var seq__49623_50789 = cljs.core.seq(cols_50788);
var chunk__49624_50790 = null;
var count__49625_50791 = (0);
var i__49626_50792 = (0);
while(true){
if((i__49626_50792 < count__49625_50791)){
var vec__49634_50793 = chunk__49624_50790.cljs$core$IIndexed$_nth$arity$2(null,i__49626_50792);
var col_50794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49634_50793,(0),null);
var infos_50795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49634_50793,(1),null);
encode_cols(infos_50795,source_idx_50729,line_50787,col_50794);


var G__50796 = seq__49623_50789;
var G__50797 = chunk__49624_50790;
var G__50798 = count__49625_50791;
var G__50799 = (i__49626_50792 + (1));
seq__49623_50789 = G__50796;
chunk__49624_50790 = G__50797;
count__49625_50791 = G__50798;
i__49626_50792 = G__50799;
continue;
} else {
var temp__5735__auto___50800__$1 = cljs.core.seq(seq__49623_50789);
if(temp__5735__auto___50800__$1){
var seq__49623_50801__$1 = temp__5735__auto___50800__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49623_50801__$1)){
var c__4550__auto___50802 = cljs.core.chunk_first(seq__49623_50801__$1);
var G__50803 = cljs.core.chunk_rest(seq__49623_50801__$1);
var G__50804 = c__4550__auto___50802;
var G__50805 = cljs.core.count(c__4550__auto___50802);
var G__50806 = (0);
seq__49623_50789 = G__50803;
chunk__49624_50790 = G__50804;
count__49625_50791 = G__50805;
i__49626_50792 = G__50806;
continue;
} else {
var vec__49640_50807 = cljs.core.first(seq__49623_50801__$1);
var col_50808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49640_50807,(0),null);
var infos_50809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49640_50807,(1),null);
encode_cols(infos_50809,source_idx_50729,line_50787,col_50808);


var G__50811 = cljs.core.next(seq__49623_50801__$1);
var G__50812 = null;
var G__50813 = (0);
var G__50814 = (0);
seq__49623_50789 = G__50811;
chunk__49624_50790 = G__50812;
count__49625_50791 = G__50813;
i__49626_50792 = G__50814;
continue;
}
} else {
}
}
break;
}


var G__50815 = cljs.core.next(seq__49539_50776__$1);
var G__50816 = null;
var G__50817 = (0);
var G__50818 = (0);
seq__49539_50734 = G__50815;
chunk__49540_50735 = G__50816;
count__49541_50736 = G__50817;
i__49542_50737 = G__50818;
continue;
}
} else {
}
}
break;
}


var G__50821 = seq__49293_50723;
var G__50822 = chunk__49294_50724;
var G__50823 = count__49295_50725;
var G__50824 = (i__49296_50726 + (1));
seq__49293_50723 = G__50821;
chunk__49294_50724 = G__50822;
count__49295_50725 = G__50823;
i__49296_50726 = G__50824;
continue;
} else {
var temp__5735__auto___50826 = cljs.core.seq(seq__49293_50723);
if(temp__5735__auto___50826){
var seq__49293_50827__$1 = temp__5735__auto___50826;
if(cljs.core.chunked_seq_QMARK_(seq__49293_50827__$1)){
var c__4550__auto___50828 = cljs.core.chunk_first(seq__49293_50827__$1);
var G__50829 = cljs.core.chunk_rest(seq__49293_50827__$1);
var G__50830 = c__4550__auto___50828;
var G__50831 = cljs.core.count(c__4550__auto___50828);
var G__50832 = (0);
seq__49293_50723 = G__50829;
chunk__49294_50724 = G__50830;
count__49295_50725 = G__50831;
i__49296_50726 = G__50832;
continue;
} else {
var vec__49649_50833 = cljs.core.first(seq__49293_50827__$1);
var source_idx_50834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49649_50833,(0),null);
var vec__49652_50835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49649_50833,(1),null);
var __50836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49652_50835,(0),null);
var lines_50837__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49652_50835,(1),null);
var seq__49655_50838 = cljs.core.seq(lines_50837__$1);
var chunk__49656_50839 = null;
var count__49657_50840 = (0);
var i__49658_50841 = (0);
while(true){
if((i__49658_50841 < count__49657_50840)){
var vec__49724_50842 = chunk__49656_50839.cljs$core$IIndexed$_nth$arity$2(null,i__49658_50841);
var line_50843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49724_50842,(0),null);
var cols_50844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49724_50842,(1),null);
var seq__49728_50845 = cljs.core.seq(cols_50844);
var chunk__49729_50846 = null;
var count__49730_50847 = (0);
var i__49731_50848 = (0);
while(true){
if((i__49731_50848 < count__49730_50847)){
var vec__49742_50849 = chunk__49729_50846.cljs$core$IIndexed$_nth$arity$2(null,i__49731_50848);
var col_50850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49742_50849,(0),null);
var infos_50851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49742_50849,(1),null);
encode_cols(infos_50851,source_idx_50834,line_50843,col_50850);


var G__50852 = seq__49728_50845;
var G__50853 = chunk__49729_50846;
var G__50854 = count__49730_50847;
var G__50855 = (i__49731_50848 + (1));
seq__49728_50845 = G__50852;
chunk__49729_50846 = G__50853;
count__49730_50847 = G__50854;
i__49731_50848 = G__50855;
continue;
} else {
var temp__5735__auto___50856__$1 = cljs.core.seq(seq__49728_50845);
if(temp__5735__auto___50856__$1){
var seq__49728_50860__$1 = temp__5735__auto___50856__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49728_50860__$1)){
var c__4550__auto___50861 = cljs.core.chunk_first(seq__49728_50860__$1);
var G__50862 = cljs.core.chunk_rest(seq__49728_50860__$1);
var G__50863 = c__4550__auto___50861;
var G__50864 = cljs.core.count(c__4550__auto___50861);
var G__50865 = (0);
seq__49728_50845 = G__50862;
chunk__49729_50846 = G__50863;
count__49730_50847 = G__50864;
i__49731_50848 = G__50865;
continue;
} else {
var vec__49748_50866 = cljs.core.first(seq__49728_50860__$1);
var col_50867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49748_50866,(0),null);
var infos_50868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49748_50866,(1),null);
encode_cols(infos_50868,source_idx_50834,line_50843,col_50867);


var G__50869 = cljs.core.next(seq__49728_50860__$1);
var G__50870 = null;
var G__50871 = (0);
var G__50872 = (0);
seq__49728_50845 = G__50869;
chunk__49729_50846 = G__50870;
count__49730_50847 = G__50871;
i__49731_50848 = G__50872;
continue;
}
} else {
}
}
break;
}


var G__50873 = seq__49655_50838;
var G__50874 = chunk__49656_50839;
var G__50875 = count__49657_50840;
var G__50876 = (i__49658_50841 + (1));
seq__49655_50838 = G__50873;
chunk__49656_50839 = G__50874;
count__49657_50840 = G__50875;
i__49658_50841 = G__50876;
continue;
} else {
var temp__5735__auto___50877__$1 = cljs.core.seq(seq__49655_50838);
if(temp__5735__auto___50877__$1){
var seq__49655_50878__$1 = temp__5735__auto___50877__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49655_50878__$1)){
var c__4550__auto___50879 = cljs.core.chunk_first(seq__49655_50878__$1);
var G__50880 = cljs.core.chunk_rest(seq__49655_50878__$1);
var G__50881 = c__4550__auto___50879;
var G__50882 = cljs.core.count(c__4550__auto___50879);
var G__50883 = (0);
seq__49655_50838 = G__50880;
chunk__49656_50839 = G__50881;
count__49657_50840 = G__50882;
i__49658_50841 = G__50883;
continue;
} else {
var vec__49754_50885 = cljs.core.first(seq__49655_50878__$1);
var line_50886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49754_50885,(0),null);
var cols_50887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49754_50885,(1),null);
var seq__49759_50891 = cljs.core.seq(cols_50887);
var chunk__49760_50892 = null;
var count__49761_50893 = (0);
var i__49762_50894 = (0);
while(true){
if((i__49762_50894 < count__49761_50893)){
var vec__49775_50895 = chunk__49760_50892.cljs$core$IIndexed$_nth$arity$2(null,i__49762_50894);
var col_50896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49775_50895,(0),null);
var infos_50897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49775_50895,(1),null);
encode_cols(infos_50897,source_idx_50834,line_50886,col_50896);


var G__50899 = seq__49759_50891;
var G__50900 = chunk__49760_50892;
var G__50901 = count__49761_50893;
var G__50902 = (i__49762_50894 + (1));
seq__49759_50891 = G__50899;
chunk__49760_50892 = G__50900;
count__49761_50893 = G__50901;
i__49762_50894 = G__50902;
continue;
} else {
var temp__5735__auto___50906__$2 = cljs.core.seq(seq__49759_50891);
if(temp__5735__auto___50906__$2){
var seq__49759_50907__$1 = temp__5735__auto___50906__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49759_50907__$1)){
var c__4550__auto___50908 = cljs.core.chunk_first(seq__49759_50907__$1);
var G__50910 = cljs.core.chunk_rest(seq__49759_50907__$1);
var G__50911 = c__4550__auto___50908;
var G__50912 = cljs.core.count(c__4550__auto___50908);
var G__50913 = (0);
seq__49759_50891 = G__50910;
chunk__49760_50892 = G__50911;
count__49761_50893 = G__50912;
i__49762_50894 = G__50913;
continue;
} else {
var vec__49780_50915 = cljs.core.first(seq__49759_50907__$1);
var col_50916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49780_50915,(0),null);
var infos_50917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49780_50915,(1),null);
encode_cols(infos_50917,source_idx_50834,line_50886,col_50916);


var G__50921 = cljs.core.next(seq__49759_50907__$1);
var G__50922 = null;
var G__50923 = (0);
var G__50924 = (0);
seq__49759_50891 = G__50921;
chunk__49760_50892 = G__50922;
count__49761_50893 = G__50923;
i__49762_50894 = G__50924;
continue;
}
} else {
}
}
break;
}


var G__50925 = cljs.core.next(seq__49655_50878__$1);
var G__50926 = null;
var G__50927 = (0);
var G__50928 = (0);
seq__49655_50838 = G__50925;
chunk__49656_50839 = G__50926;
count__49657_50840 = G__50927;
i__49658_50841 = G__50928;
continue;
}
} else {
}
}
break;
}


var G__50929 = cljs.core.next(seq__49293_50827__$1);
var G__50930 = null;
var G__50931 = (0);
var G__50932 = (0);
seq__49293_50723 = G__50929;
chunk__49294_50724 = G__50930;
count__49295_50725 = G__50931;
i__49296_50726 = G__50932;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__49786 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__49276_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49276_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__49277_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__49277_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__49278_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__49278_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__49797 = G__49786;
var G__49799_50937 = G__49797;
var G__49800_50938 = "sourcesContent";
var G__49801_50939 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__49799_50937,G__49800_50938,G__49801_50939);

return G__49797;
} else {
return G__49786;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__49809 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49809,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49809,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__49812 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49812,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49812,(1),null);
var G__50943 = cljs.core.next(col_map_seq);
var G__50944 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__49812,col,infos,vec__49809,line,col_map){
return (function (v,p__49816){
var map__49817 = p__49816;
var map__49817__$1 = (((((!((map__49817 == null))))?(((((map__49817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49817):map__49817);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__49812,col,infos,vec__49809,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__50943;
new_cols = G__50944;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__50961 = cljs.core.next(line_map_seq);
var G__50962 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__50961;
new_lines = G__50962;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__49825_50971 = cljs.core.seq(reverse_map);
var chunk__49826_50972 = null;
var count__49827_50973 = (0);
var i__49828_50974 = (0);
while(true){
if((i__49828_50974 < count__49827_50973)){
var vec__50248_50975 = chunk__49826_50972.cljs$core$IIndexed$_nth$arity$2(null,i__49828_50974);
var line_50976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50248_50975,(0),null);
var columns_50977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50248_50975,(1),null);
var seq__50251_50978 = cljs.core.seq(columns_50977);
var chunk__50252_50979 = null;
var count__50253_50980 = (0);
var i__50254_50981 = (0);
while(true){
if((i__50254_50981 < count__50253_50980)){
var vec__50347_50982 = chunk__50252_50979.cljs$core$IIndexed$_nth$arity$2(null,i__50254_50981);
var column_50983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50347_50982,(0),null);
var column_info_50984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50347_50982,(1),null);
var seq__50350_50985 = cljs.core.seq(column_info_50984);
var chunk__50351_50986 = null;
var count__50352_50987 = (0);
var i__50353_50988 = (0);
while(true){
if((i__50353_50988 < count__50352_50987)){
var map__50367_50989 = chunk__50351_50986.cljs$core$IIndexed$_nth$arity$2(null,i__50353_50988);
var map__50367_50990__$1 = (((((!((map__50367_50989 == null))))?(((((map__50367_50989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50367_50989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50367_50989):map__50367_50989);
var gline_50991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367_50990__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367_50990__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367_50990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50991], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50350_50985,chunk__50351_50986,count__50352_50987,i__50353_50988,seq__50251_50978,chunk__50252_50979,count__50253_50980,i__50254_50981,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50367_50989,map__50367_50990__$1,gline_50991,gcol_50992,name_50993,vec__50347_50982,column_50983,column_info_50984,vec__50248_50975,line_50976,columns_50977,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50992], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50976,new cljs.core.Keyword(null,"col","col",-1959363084),column_50983,new cljs.core.Keyword(null,"name","name",1843675177),name_50993], null));
});})(seq__50350_50985,chunk__50351_50986,count__50352_50987,i__50353_50988,seq__50251_50978,chunk__50252_50979,count__50253_50980,i__50254_50981,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50367_50989,map__50367_50990__$1,gline_50991,gcol_50992,name_50993,vec__50347_50982,column_50983,column_info_50984,vec__50248_50975,line_50976,columns_50977,inverted))
,cljs.core.sorted_map()));


var G__51024 = seq__50350_50985;
var G__51025 = chunk__50351_50986;
var G__51026 = count__50352_50987;
var G__51027 = (i__50353_50988 + (1));
seq__50350_50985 = G__51024;
chunk__50351_50986 = G__51025;
count__50352_50987 = G__51026;
i__50353_50988 = G__51027;
continue;
} else {
var temp__5735__auto___51028 = cljs.core.seq(seq__50350_50985);
if(temp__5735__auto___51028){
var seq__50350_51029__$1 = temp__5735__auto___51028;
if(cljs.core.chunked_seq_QMARK_(seq__50350_51029__$1)){
var c__4550__auto___51030 = cljs.core.chunk_first(seq__50350_51029__$1);
var G__51031 = cljs.core.chunk_rest(seq__50350_51029__$1);
var G__51032 = c__4550__auto___51030;
var G__51033 = cljs.core.count(c__4550__auto___51030);
var G__51034 = (0);
seq__50350_50985 = G__51031;
chunk__50351_50986 = G__51032;
count__50352_50987 = G__51033;
i__50353_50988 = G__51034;
continue;
} else {
var map__50372_51035 = cljs.core.first(seq__50350_51029__$1);
var map__50372_51036__$1 = (((((!((map__50372_51035 == null))))?(((((map__50372_51035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50372_51035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50372_51035):map__50372_51035);
var gline_51037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50372_51036__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_51038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50372_51036__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_51039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50372_51036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_51037], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50350_50985,chunk__50351_50986,count__50352_50987,i__50353_50988,seq__50251_50978,chunk__50252_50979,count__50253_50980,i__50254_50981,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50372_51035,map__50372_51036__$1,gline_51037,gcol_51038,name_51039,seq__50350_51029__$1,temp__5735__auto___51028,vec__50347_50982,column_50983,column_info_50984,vec__50248_50975,line_50976,columns_50977,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_51038], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50976,new cljs.core.Keyword(null,"col","col",-1959363084),column_50983,new cljs.core.Keyword(null,"name","name",1843675177),name_51039], null));
});})(seq__50350_50985,chunk__50351_50986,count__50352_50987,i__50353_50988,seq__50251_50978,chunk__50252_50979,count__50253_50980,i__50254_50981,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50372_51035,map__50372_51036__$1,gline_51037,gcol_51038,name_51039,seq__50350_51029__$1,temp__5735__auto___51028,vec__50347_50982,column_50983,column_info_50984,vec__50248_50975,line_50976,columns_50977,inverted))
,cljs.core.sorted_map()));


var G__51043 = cljs.core.next(seq__50350_51029__$1);
var G__51044 = null;
var G__51045 = (0);
var G__51046 = (0);
seq__50350_50985 = G__51043;
chunk__50351_50986 = G__51044;
count__50352_50987 = G__51045;
i__50353_50988 = G__51046;
continue;
}
} else {
}
}
break;
}


var G__51047 = seq__50251_50978;
var G__51048 = chunk__50252_50979;
var G__51049 = count__50253_50980;
var G__51050 = (i__50254_50981 + (1));
seq__50251_50978 = G__51047;
chunk__50252_50979 = G__51048;
count__50253_50980 = G__51049;
i__50254_50981 = G__51050;
continue;
} else {
var temp__5735__auto___51054 = cljs.core.seq(seq__50251_50978);
if(temp__5735__auto___51054){
var seq__50251_51056__$1 = temp__5735__auto___51054;
if(cljs.core.chunked_seq_QMARK_(seq__50251_51056__$1)){
var c__4550__auto___51061 = cljs.core.chunk_first(seq__50251_51056__$1);
var G__51062 = cljs.core.chunk_rest(seq__50251_51056__$1);
var G__51063 = c__4550__auto___51061;
var G__51064 = cljs.core.count(c__4550__auto___51061);
var G__51065 = (0);
seq__50251_50978 = G__51062;
chunk__50252_50979 = G__51063;
count__50253_50980 = G__51064;
i__50254_50981 = G__51065;
continue;
} else {
var vec__50376_51066 = cljs.core.first(seq__50251_51056__$1);
var column_51067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50376_51066,(0),null);
var column_info_51068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50376_51066,(1),null);
var seq__50379_51069 = cljs.core.seq(column_info_51068);
var chunk__50380_51070 = null;
var count__50381_51071 = (0);
var i__50382_51072 = (0);
while(true){
if((i__50382_51072 < count__50381_51071)){
var map__50407_51073 = chunk__50380_51070.cljs$core$IIndexed$_nth$arity$2(null,i__50382_51072);
var map__50407_51074__$1 = (((((!((map__50407_51073 == null))))?(((((map__50407_51073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50407_51073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50407_51073):map__50407_51073);
var gline_51075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50407_51074__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_51076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50407_51074__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_51077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50407_51074__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_51075], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50379_51069,chunk__50380_51070,count__50381_51071,i__50382_51072,seq__50251_50978,chunk__50252_50979,count__50253_50980,i__50254_50981,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50407_51073,map__50407_51074__$1,gline_51075,gcol_51076,name_51077,vec__50376_51066,column_51067,column_info_51068,seq__50251_51056__$1,temp__5735__auto___51054,vec__50248_50975,line_50976,columns_50977,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_51076], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50976,new cljs.core.Keyword(null,"col","col",-1959363084),column_51067,new cljs.core.Keyword(null,"name","name",1843675177),name_51077], null));
});})(seq__50379_51069,chunk__50380_51070,count__50381_51071,i__50382_51072,seq__50251_50978,chunk__50252_50979,count__50253_50980,i__50254_50981,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50407_51073,map__50407_51074__$1,gline_51075,gcol_51076,name_51077,vec__50376_51066,column_51067,column_info_51068,seq__50251_51056__$1,temp__5735__auto___51054,vec__50248_50975,line_50976,columns_50977,inverted))
,cljs.core.sorted_map()));


var G__51085 = seq__50379_51069;
var G__51086 = chunk__50380_51070;
var G__51087 = count__50381_51071;
var G__51088 = (i__50382_51072 + (1));
seq__50379_51069 = G__51085;
chunk__50380_51070 = G__51086;
count__50381_51071 = G__51087;
i__50382_51072 = G__51088;
continue;
} else {
var temp__5735__auto___51089__$1 = cljs.core.seq(seq__50379_51069);
if(temp__5735__auto___51089__$1){
var seq__50379_51090__$1 = temp__5735__auto___51089__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50379_51090__$1)){
var c__4550__auto___51091 = cljs.core.chunk_first(seq__50379_51090__$1);
var G__51092 = cljs.core.chunk_rest(seq__50379_51090__$1);
var G__51093 = c__4550__auto___51091;
var G__51094 = cljs.core.count(c__4550__auto___51091);
var G__51095 = (0);
seq__50379_51069 = G__51092;
chunk__50380_51070 = G__51093;
count__50381_51071 = G__51094;
i__50382_51072 = G__51095;
continue;
} else {
var map__50410_51097 = cljs.core.first(seq__50379_51090__$1);
var map__50410_51099__$1 = (((((!((map__50410_51097 == null))))?(((((map__50410_51097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50410_51097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50410_51097):map__50410_51097);
var gline_51100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410_51099__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_51101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410_51099__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_51102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410_51099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_51100], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50379_51069,chunk__50380_51070,count__50381_51071,i__50382_51072,seq__50251_50978,chunk__50252_50979,count__50253_50980,i__50254_50981,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50410_51097,map__50410_51099__$1,gline_51100,gcol_51101,name_51102,seq__50379_51090__$1,temp__5735__auto___51089__$1,vec__50376_51066,column_51067,column_info_51068,seq__50251_51056__$1,temp__5735__auto___51054,vec__50248_50975,line_50976,columns_50977,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_51101], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50976,new cljs.core.Keyword(null,"col","col",-1959363084),column_51067,new cljs.core.Keyword(null,"name","name",1843675177),name_51102], null));
});})(seq__50379_51069,chunk__50380_51070,count__50381_51071,i__50382_51072,seq__50251_50978,chunk__50252_50979,count__50253_50980,i__50254_50981,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50410_51097,map__50410_51099__$1,gline_51100,gcol_51101,name_51102,seq__50379_51090__$1,temp__5735__auto___51089__$1,vec__50376_51066,column_51067,column_info_51068,seq__50251_51056__$1,temp__5735__auto___51054,vec__50248_50975,line_50976,columns_50977,inverted))
,cljs.core.sorted_map()));


var G__51108 = cljs.core.next(seq__50379_51090__$1);
var G__51109 = null;
var G__51110 = (0);
var G__51111 = (0);
seq__50379_51069 = G__51108;
chunk__50380_51070 = G__51109;
count__50381_51071 = G__51110;
i__50382_51072 = G__51111;
continue;
}
} else {
}
}
break;
}


var G__51112 = cljs.core.next(seq__50251_51056__$1);
var G__51113 = null;
var G__51114 = (0);
var G__51115 = (0);
seq__50251_50978 = G__51112;
chunk__50252_50979 = G__51113;
count__50253_50980 = G__51114;
i__50254_50981 = G__51115;
continue;
}
} else {
}
}
break;
}


var G__51116 = seq__49825_50971;
var G__51117 = chunk__49826_50972;
var G__51118 = count__49827_50973;
var G__51119 = (i__49828_50974 + (1));
seq__49825_50971 = G__51116;
chunk__49826_50972 = G__51117;
count__49827_50973 = G__51118;
i__49828_50974 = G__51119;
continue;
} else {
var temp__5735__auto___51121 = cljs.core.seq(seq__49825_50971);
if(temp__5735__auto___51121){
var seq__49825_51122__$1 = temp__5735__auto___51121;
if(cljs.core.chunked_seq_QMARK_(seq__49825_51122__$1)){
var c__4550__auto___51123 = cljs.core.chunk_first(seq__49825_51122__$1);
var G__51125 = cljs.core.chunk_rest(seq__49825_51122__$1);
var G__51126 = c__4550__auto___51123;
var G__51127 = cljs.core.count(c__4550__auto___51123);
var G__51128 = (0);
seq__49825_50971 = G__51125;
chunk__49826_50972 = G__51126;
count__49827_50973 = G__51127;
i__49828_50974 = G__51128;
continue;
} else {
var vec__50412_51129 = cljs.core.first(seq__49825_51122__$1);
var line_51130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50412_51129,(0),null);
var columns_51131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50412_51129,(1),null);
var seq__50415_51133 = cljs.core.seq(columns_51131);
var chunk__50416_51134 = null;
var count__50417_51135 = (0);
var i__50418_51136 = (0);
while(true){
if((i__50418_51136 < count__50417_51135)){
var vec__50540_51138 = chunk__50416_51134.cljs$core$IIndexed$_nth$arity$2(null,i__50418_51136);
var column_51139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50540_51138,(0),null);
var column_info_51140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50540_51138,(1),null);
var seq__50543_51141 = cljs.core.seq(column_info_51140);
var chunk__50544_51142 = null;
var count__50545_51143 = (0);
var i__50546_51144 = (0);
while(true){
if((i__50546_51144 < count__50545_51143)){
var map__50567_51145 = chunk__50544_51142.cljs$core$IIndexed$_nth$arity$2(null,i__50546_51144);
var map__50567_51146__$1 = (((((!((map__50567_51145 == null))))?(((((map__50567_51145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50567_51145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50567_51145):map__50567_51145);
var gline_51147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50567_51146__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_51148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50567_51146__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_51149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50567_51146__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_51147], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50543_51141,chunk__50544_51142,count__50545_51143,i__50546_51144,seq__50415_51133,chunk__50416_51134,count__50417_51135,i__50418_51136,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50567_51145,map__50567_51146__$1,gline_51147,gcol_51148,name_51149,vec__50540_51138,column_51139,column_info_51140,vec__50412_51129,line_51130,columns_51131,seq__49825_51122__$1,temp__5735__auto___51121,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_51148], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_51130,new cljs.core.Keyword(null,"col","col",-1959363084),column_51139,new cljs.core.Keyword(null,"name","name",1843675177),name_51149], null));
});})(seq__50543_51141,chunk__50544_51142,count__50545_51143,i__50546_51144,seq__50415_51133,chunk__50416_51134,count__50417_51135,i__50418_51136,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50567_51145,map__50567_51146__$1,gline_51147,gcol_51148,name_51149,vec__50540_51138,column_51139,column_info_51140,vec__50412_51129,line_51130,columns_51131,seq__49825_51122__$1,temp__5735__auto___51121,inverted))
,cljs.core.sorted_map()));


var G__51154 = seq__50543_51141;
var G__51155 = chunk__50544_51142;
var G__51156 = count__50545_51143;
var G__51157 = (i__50546_51144 + (1));
seq__50543_51141 = G__51154;
chunk__50544_51142 = G__51155;
count__50545_51143 = G__51156;
i__50546_51144 = G__51157;
continue;
} else {
var temp__5735__auto___51158__$1 = cljs.core.seq(seq__50543_51141);
if(temp__5735__auto___51158__$1){
var seq__50543_51159__$1 = temp__5735__auto___51158__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50543_51159__$1)){
var c__4550__auto___51160 = cljs.core.chunk_first(seq__50543_51159__$1);
var G__51161 = cljs.core.chunk_rest(seq__50543_51159__$1);
var G__51162 = c__4550__auto___51160;
var G__51163 = cljs.core.count(c__4550__auto___51160);
var G__51164 = (0);
seq__50543_51141 = G__51161;
chunk__50544_51142 = G__51162;
count__50545_51143 = G__51163;
i__50546_51144 = G__51164;
continue;
} else {
var map__50596_51165 = cljs.core.first(seq__50543_51159__$1);
var map__50596_51166__$1 = (((((!((map__50596_51165 == null))))?(((((map__50596_51165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50596_51165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50596_51165):map__50596_51165);
var gline_51167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50596_51166__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_51168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50596_51166__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_51169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50596_51166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_51167], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50543_51141,chunk__50544_51142,count__50545_51143,i__50546_51144,seq__50415_51133,chunk__50416_51134,count__50417_51135,i__50418_51136,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50596_51165,map__50596_51166__$1,gline_51167,gcol_51168,name_51169,seq__50543_51159__$1,temp__5735__auto___51158__$1,vec__50540_51138,column_51139,column_info_51140,vec__50412_51129,line_51130,columns_51131,seq__49825_51122__$1,temp__5735__auto___51121,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_51168], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_51130,new cljs.core.Keyword(null,"col","col",-1959363084),column_51139,new cljs.core.Keyword(null,"name","name",1843675177),name_51169], null));
});})(seq__50543_51141,chunk__50544_51142,count__50545_51143,i__50546_51144,seq__50415_51133,chunk__50416_51134,count__50417_51135,i__50418_51136,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50596_51165,map__50596_51166__$1,gline_51167,gcol_51168,name_51169,seq__50543_51159__$1,temp__5735__auto___51158__$1,vec__50540_51138,column_51139,column_info_51140,vec__50412_51129,line_51130,columns_51131,seq__49825_51122__$1,temp__5735__auto___51121,inverted))
,cljs.core.sorted_map()));


var G__51184 = cljs.core.next(seq__50543_51159__$1);
var G__51185 = null;
var G__51186 = (0);
var G__51187 = (0);
seq__50543_51141 = G__51184;
chunk__50544_51142 = G__51185;
count__50545_51143 = G__51186;
i__50546_51144 = G__51187;
continue;
}
} else {
}
}
break;
}


var G__51188 = seq__50415_51133;
var G__51189 = chunk__50416_51134;
var G__51190 = count__50417_51135;
var G__51191 = (i__50418_51136 + (1));
seq__50415_51133 = G__51188;
chunk__50416_51134 = G__51189;
count__50417_51135 = G__51190;
i__50418_51136 = G__51191;
continue;
} else {
var temp__5735__auto___51196__$1 = cljs.core.seq(seq__50415_51133);
if(temp__5735__auto___51196__$1){
var seq__50415_51197__$1 = temp__5735__auto___51196__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50415_51197__$1)){
var c__4550__auto___51198 = cljs.core.chunk_first(seq__50415_51197__$1);
var G__51199 = cljs.core.chunk_rest(seq__50415_51197__$1);
var G__51200 = c__4550__auto___51198;
var G__51201 = cljs.core.count(c__4550__auto___51198);
var G__51202 = (0);
seq__50415_51133 = G__51199;
chunk__50416_51134 = G__51200;
count__50417_51135 = G__51201;
i__50418_51136 = G__51202;
continue;
} else {
var vec__50603_51203 = cljs.core.first(seq__50415_51197__$1);
var column_51204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50603_51203,(0),null);
var column_info_51205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50603_51203,(1),null);
var seq__50606_51206 = cljs.core.seq(column_info_51205);
var chunk__50607_51207 = null;
var count__50608_51208 = (0);
var i__50609_51209 = (0);
while(true){
if((i__50609_51209 < count__50608_51208)){
var map__50623_51211 = chunk__50607_51207.cljs$core$IIndexed$_nth$arity$2(null,i__50609_51209);
var map__50623_51212__$1 = (((((!((map__50623_51211 == null))))?(((((map__50623_51211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50623_51211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50623_51211):map__50623_51211);
var gline_51213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50623_51212__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_51214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50623_51212__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_51215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50623_51212__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_51213], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50606_51206,chunk__50607_51207,count__50608_51208,i__50609_51209,seq__50415_51133,chunk__50416_51134,count__50417_51135,i__50418_51136,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50623_51211,map__50623_51212__$1,gline_51213,gcol_51214,name_51215,vec__50603_51203,column_51204,column_info_51205,seq__50415_51197__$1,temp__5735__auto___51196__$1,vec__50412_51129,line_51130,columns_51131,seq__49825_51122__$1,temp__5735__auto___51121,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_51214], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_51130,new cljs.core.Keyword(null,"col","col",-1959363084),column_51204,new cljs.core.Keyword(null,"name","name",1843675177),name_51215], null));
});})(seq__50606_51206,chunk__50607_51207,count__50608_51208,i__50609_51209,seq__50415_51133,chunk__50416_51134,count__50417_51135,i__50418_51136,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50623_51211,map__50623_51212__$1,gline_51213,gcol_51214,name_51215,vec__50603_51203,column_51204,column_info_51205,seq__50415_51197__$1,temp__5735__auto___51196__$1,vec__50412_51129,line_51130,columns_51131,seq__49825_51122__$1,temp__5735__auto___51121,inverted))
,cljs.core.sorted_map()));


var G__51221 = seq__50606_51206;
var G__51222 = chunk__50607_51207;
var G__51223 = count__50608_51208;
var G__51224 = (i__50609_51209 + (1));
seq__50606_51206 = G__51221;
chunk__50607_51207 = G__51222;
count__50608_51208 = G__51223;
i__50609_51209 = G__51224;
continue;
} else {
var temp__5735__auto___51225__$2 = cljs.core.seq(seq__50606_51206);
if(temp__5735__auto___51225__$2){
var seq__50606_51227__$1 = temp__5735__auto___51225__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50606_51227__$1)){
var c__4550__auto___51229 = cljs.core.chunk_first(seq__50606_51227__$1);
var G__51231 = cljs.core.chunk_rest(seq__50606_51227__$1);
var G__51232 = c__4550__auto___51229;
var G__51233 = cljs.core.count(c__4550__auto___51229);
var G__51234 = (0);
seq__50606_51206 = G__51231;
chunk__50607_51207 = G__51232;
count__50608_51208 = G__51233;
i__50609_51209 = G__51234;
continue;
} else {
var map__50632_51236 = cljs.core.first(seq__50606_51227__$1);
var map__50632_51237__$1 = (((((!((map__50632_51236 == null))))?(((((map__50632_51236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50632_51236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50632_51236):map__50632_51236);
var gline_51238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50632_51237__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_51239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50632_51237__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_51240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50632_51237__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_51238], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50606_51206,chunk__50607_51207,count__50608_51208,i__50609_51209,seq__50415_51133,chunk__50416_51134,count__50417_51135,i__50418_51136,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50632_51236,map__50632_51237__$1,gline_51238,gcol_51239,name_51240,seq__50606_51227__$1,temp__5735__auto___51225__$2,vec__50603_51203,column_51204,column_info_51205,seq__50415_51197__$1,temp__5735__auto___51196__$1,vec__50412_51129,line_51130,columns_51131,seq__49825_51122__$1,temp__5735__auto___51121,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_51239], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_51130,new cljs.core.Keyword(null,"col","col",-1959363084),column_51204,new cljs.core.Keyword(null,"name","name",1843675177),name_51240], null));
});})(seq__50606_51206,chunk__50607_51207,count__50608_51208,i__50609_51209,seq__50415_51133,chunk__50416_51134,count__50417_51135,i__50418_51136,seq__49825_50971,chunk__49826_50972,count__49827_50973,i__49828_50974,map__50632_51236,map__50632_51237__$1,gline_51238,gcol_51239,name_51240,seq__50606_51227__$1,temp__5735__auto___51225__$2,vec__50603_51203,column_51204,column_info_51205,seq__50415_51197__$1,temp__5735__auto___51196__$1,vec__50412_51129,line_51130,columns_51131,seq__49825_51122__$1,temp__5735__auto___51121,inverted))
,cljs.core.sorted_map()));


var G__51248 = cljs.core.next(seq__50606_51227__$1);
var G__51249 = null;
var G__51250 = (0);
var G__51251 = (0);
seq__50606_51206 = G__51248;
chunk__50607_51207 = G__51249;
count__50608_51208 = G__51250;
i__50609_51209 = G__51251;
continue;
}
} else {
}
}
break;
}


var G__51255 = cljs.core.next(seq__50415_51197__$1);
var G__51256 = null;
var G__51257 = (0);
var G__51258 = (0);
seq__50415_51133 = G__51255;
chunk__50416_51134 = G__51256;
count__50417_51135 = G__51257;
i__50418_51136 = G__51258;
continue;
}
} else {
}
}
break;
}


var G__51259 = cljs.core.next(seq__49825_51122__$1);
var G__51260 = null;
var G__51261 = (0);
var G__51262 = (0);
seq__49825_50971 = G__51259;
chunk__49826_50972 = G__51260;
count__49827_50973 = G__51261;
i__49828_50974 = G__51262;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
