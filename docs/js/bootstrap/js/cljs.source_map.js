goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__26102){
var vec__26104 = p__26102;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26104,(1),null);
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
var vec__26119 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(4),null);
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
var vec__26127 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26127,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26127,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26127,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26127,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26127,(4),null);
var vec__26130 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26130,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26130,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26130,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26130,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26130,(4),null);
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
var map__26141 = segmap;
var map__26141__$1 = (((((!((map__26141 == null))))?(((((map__26141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26141):map__26141);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26141__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26141__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26141__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26141__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26141__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26141,map__26141__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26141,map__26141__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26141,map__26141__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__26141,map__26141__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26141,map__26141__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__26141,map__26141__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__26150 = arguments.length;
switch (G__26150) {
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
var vec__26163 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__27596 = cljs.core.next(segs__$1);
var G__27597 = nrelseg;
var G__27598 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__27596;
relseg__$1 = G__27597;
result__$1 = G__27598;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(1),null);
var G__27599 = (gline + (1));
var G__27600 = cljs.core.next(lines__$1);
var G__27601 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__27602 = result__$1;
gline = G__27599;
lines__$1 = G__27600;
relseg = G__27601;
result = G__27602;
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
var map__26175 = segmap;
var map__26175__$1 = (((((!((map__26175 == null))))?(((((map__26175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26175):map__26175);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26175__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26175__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26175__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26175__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26175__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26175,map__26175__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26175,map__26175__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__26169_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26169_SHARP_,d__$1);
});})(map__26175,map__26175__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26175,map__26175__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__26188 = arguments.length;
switch (G__26188) {
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
var vec__26212 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__27608 = cljs.core.next(segs__$1);
var G__27609 = nrelseg;
var G__27610 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__27608;
relseg__$1 = G__27609;
result__$1 = G__27610;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212,(1),null);
var G__27611 = (gline + (1));
var G__27612 = cljs.core.next(lines__$1);
var G__27613 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__27614 = result__$1;
gline = G__27611;
lines__$1 = G__27612;
relseg = G__27613;
result = G__27614;
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
return (function (p__26226){
var vec__26227 = p__26226;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26227,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26227,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26227,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26227,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26227,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__26238){
var vec__26239 = p__26238;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(4),null);
var seg = vec__26239;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__26239,gcol,sidx,line,col,name,seg,relseg){
return (function (p__26243){
var vec__26245 = p__26243;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__26239,gcol,sidx,line,col,name,seg,relseg))
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
var seq__26262 = cljs.core.seq(infos);
var chunk__26263 = null;
var count__26264 = (0);
var i__26265 = (0);
while(true){
if((i__26265 < count__26264)){
var info = chunk__26263.cljs$core$IIndexed$_nth$arity$2(null,i__26265);
var segv_27635 = info__GT_segv(info,source_idx,line,col);
var gline_27636 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27637 = cljs.core.count(cljs.core.deref(lines));
if((gline_27636 > (lc_27637 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26262,chunk__26263,count__26264,i__26265,segv_27635,gline_27636,lc_27637,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_27636 - (lc_27637 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27635], null));
});})(seq__26262,chunk__26263,count__26264,i__26265,segv_27635,gline_27636,lc_27637,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26262,chunk__26263,count__26264,i__26265,segv_27635,gline_27636,lc_27637,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27636], null),cljs.core.conj,segv_27635);
});})(seq__26262,chunk__26263,count__26264,i__26265,segv_27635,gline_27636,lc_27637,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27639 = seq__26262;
var G__27640 = chunk__26263;
var G__27641 = count__26264;
var G__27642 = (i__26265 + (1));
seq__26262 = G__27639;
chunk__26263 = G__27640;
count__26264 = G__27641;
i__26265 = G__27642;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26262);
if(temp__5735__auto__){
var seq__26262__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26262__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26262__$1);
var G__27644 = cljs.core.chunk_rest(seq__26262__$1);
var G__27645 = c__4550__auto__;
var G__27646 = cljs.core.count(c__4550__auto__);
var G__27647 = (0);
seq__26262 = G__27644;
chunk__26263 = G__27645;
count__26264 = G__27646;
i__26265 = G__27647;
continue;
} else {
var info = cljs.core.first(seq__26262__$1);
var segv_27648 = info__GT_segv(info,source_idx,line,col);
var gline_27649 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27650 = cljs.core.count(cljs.core.deref(lines));
if((gline_27649 > (lc_27650 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26262,chunk__26263,count__26264,i__26265,segv_27648,gline_27649,lc_27650,info,seq__26262__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_27649 - (lc_27650 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27648], null));
});})(seq__26262,chunk__26263,count__26264,i__26265,segv_27648,gline_27649,lc_27650,info,seq__26262__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26262,chunk__26263,count__26264,i__26265,segv_27648,gline_27649,lc_27650,info,seq__26262__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27649], null),cljs.core.conj,segv_27648);
});})(seq__26262,chunk__26263,count__26264,i__26265,segv_27648,gline_27649,lc_27650,info,seq__26262__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27652 = cljs.core.next(seq__26262__$1);
var G__27653 = null;
var G__27654 = (0);
var G__27655 = (0);
seq__26262 = G__27652;
chunk__26263 = G__27653;
count__26264 = G__27654;
i__26265 = G__27655;
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
var seq__26277_27661 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__26278_27662 = null;
var count__26279_27663 = (0);
var i__26280_27664 = (0);
while(true){
if((i__26280_27664 < count__26279_27663)){
var vec__26512_27682 = chunk__26278_27662.cljs$core$IIndexed$_nth$arity$2(null,i__26280_27664);
var source_idx_27683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26512_27682,(0),null);
var vec__26515_27684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26512_27682,(1),null);
var __27685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26515_27684,(0),null);
var lines_27686__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26515_27684,(1),null);
var seq__26518_27696 = cljs.core.seq(lines_27686__$1);
var chunk__26519_27697 = null;
var count__26520_27698 = (0);
var i__26521_27699 = (0);
while(true){
if((i__26521_27699 < count__26520_27698)){
var vec__26574_27700 = chunk__26519_27697.cljs$core$IIndexed$_nth$arity$2(null,i__26521_27699);
var line_27701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26574_27700,(0),null);
var cols_27702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26574_27700,(1),null);
var seq__26577_27703 = cljs.core.seq(cols_27702);
var chunk__26578_27704 = null;
var count__26579_27705 = (0);
var i__26580_27706 = (0);
while(true){
if((i__26580_27706 < count__26579_27705)){
var vec__26592_27707 = chunk__26578_27704.cljs$core$IIndexed$_nth$arity$2(null,i__26580_27706);
var col_27708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26592_27707,(0),null);
var infos_27709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26592_27707,(1),null);
encode_cols(infos_27709,source_idx_27683,line_27701,col_27708);


var G__27710 = seq__26577_27703;
var G__27711 = chunk__26578_27704;
var G__27712 = count__26579_27705;
var G__27713 = (i__26580_27706 + (1));
seq__26577_27703 = G__27710;
chunk__26578_27704 = G__27711;
count__26579_27705 = G__27712;
i__26580_27706 = G__27713;
continue;
} else {
var temp__5735__auto___27714 = cljs.core.seq(seq__26577_27703);
if(temp__5735__auto___27714){
var seq__26577_27715__$1 = temp__5735__auto___27714;
if(cljs.core.chunked_seq_QMARK_(seq__26577_27715__$1)){
var c__4550__auto___27716 = cljs.core.chunk_first(seq__26577_27715__$1);
var G__27725 = cljs.core.chunk_rest(seq__26577_27715__$1);
var G__27726 = c__4550__auto___27716;
var G__27727 = cljs.core.count(c__4550__auto___27716);
var G__27728 = (0);
seq__26577_27703 = G__27725;
chunk__26578_27704 = G__27726;
count__26579_27705 = G__27727;
i__26580_27706 = G__27728;
continue;
} else {
var vec__26598_27735 = cljs.core.first(seq__26577_27715__$1);
var col_27736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26598_27735,(0),null);
var infos_27737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26598_27735,(1),null);
encode_cols(infos_27737,source_idx_27683,line_27701,col_27736);


var G__27738 = cljs.core.next(seq__26577_27715__$1);
var G__27739 = null;
var G__27740 = (0);
var G__27741 = (0);
seq__26577_27703 = G__27738;
chunk__26578_27704 = G__27739;
count__26579_27705 = G__27740;
i__26580_27706 = G__27741;
continue;
}
} else {
}
}
break;
}


var G__27742 = seq__26518_27696;
var G__27743 = chunk__26519_27697;
var G__27744 = count__26520_27698;
var G__27745 = (i__26521_27699 + (1));
seq__26518_27696 = G__27742;
chunk__26519_27697 = G__27743;
count__26520_27698 = G__27744;
i__26521_27699 = G__27745;
continue;
} else {
var temp__5735__auto___27752 = cljs.core.seq(seq__26518_27696);
if(temp__5735__auto___27752){
var seq__26518_27753__$1 = temp__5735__auto___27752;
if(cljs.core.chunked_seq_QMARK_(seq__26518_27753__$1)){
var c__4550__auto___27757 = cljs.core.chunk_first(seq__26518_27753__$1);
var G__27758 = cljs.core.chunk_rest(seq__26518_27753__$1);
var G__27759 = c__4550__auto___27757;
var G__27760 = cljs.core.count(c__4550__auto___27757);
var G__27761 = (0);
seq__26518_27696 = G__27758;
chunk__26519_27697 = G__27759;
count__26520_27698 = G__27760;
i__26521_27699 = G__27761;
continue;
} else {
var vec__26607_27766 = cljs.core.first(seq__26518_27753__$1);
var line_27767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26607_27766,(0),null);
var cols_27768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26607_27766,(1),null);
var seq__26610_27773 = cljs.core.seq(cols_27768);
var chunk__26611_27774 = null;
var count__26612_27775 = (0);
var i__26613_27776 = (0);
while(true){
if((i__26613_27776 < count__26612_27775)){
var vec__26620_27777 = chunk__26611_27774.cljs$core$IIndexed$_nth$arity$2(null,i__26613_27776);
var col_27778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620_27777,(0),null);
var infos_27779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620_27777,(1),null);
encode_cols(infos_27779,source_idx_27683,line_27767,col_27778);


var G__27782 = seq__26610_27773;
var G__27783 = chunk__26611_27774;
var G__27784 = count__26612_27775;
var G__27785 = (i__26613_27776 + (1));
seq__26610_27773 = G__27782;
chunk__26611_27774 = G__27783;
count__26612_27775 = G__27784;
i__26613_27776 = G__27785;
continue;
} else {
var temp__5735__auto___27786__$1 = cljs.core.seq(seq__26610_27773);
if(temp__5735__auto___27786__$1){
var seq__26610_27787__$1 = temp__5735__auto___27786__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26610_27787__$1)){
var c__4550__auto___27788 = cljs.core.chunk_first(seq__26610_27787__$1);
var G__27789 = cljs.core.chunk_rest(seq__26610_27787__$1);
var G__27790 = c__4550__auto___27788;
var G__27791 = cljs.core.count(c__4550__auto___27788);
var G__27792 = (0);
seq__26610_27773 = G__27789;
chunk__26611_27774 = G__27790;
count__26612_27775 = G__27791;
i__26613_27776 = G__27792;
continue;
} else {
var vec__26625_27794 = cljs.core.first(seq__26610_27787__$1);
var col_27795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26625_27794,(0),null);
var infos_27796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26625_27794,(1),null);
encode_cols(infos_27796,source_idx_27683,line_27767,col_27795);


var G__27798 = cljs.core.next(seq__26610_27787__$1);
var G__27799 = null;
var G__27800 = (0);
var G__27801 = (0);
seq__26610_27773 = G__27798;
chunk__26611_27774 = G__27799;
count__26612_27775 = G__27800;
i__26613_27776 = G__27801;
continue;
}
} else {
}
}
break;
}


var G__27802 = cljs.core.next(seq__26518_27753__$1);
var G__27803 = null;
var G__27804 = (0);
var G__27805 = (0);
seq__26518_27696 = G__27802;
chunk__26519_27697 = G__27803;
count__26520_27698 = G__27804;
i__26521_27699 = G__27805;
continue;
}
} else {
}
}
break;
}


var G__27806 = seq__26277_27661;
var G__27807 = chunk__26278_27662;
var G__27808 = count__26279_27663;
var G__27809 = (i__26280_27664 + (1));
seq__26277_27661 = G__27806;
chunk__26278_27662 = G__27807;
count__26279_27663 = G__27808;
i__26280_27664 = G__27809;
continue;
} else {
var temp__5735__auto___27810 = cljs.core.seq(seq__26277_27661);
if(temp__5735__auto___27810){
var seq__26277_27812__$1 = temp__5735__auto___27810;
if(cljs.core.chunked_seq_QMARK_(seq__26277_27812__$1)){
var c__4550__auto___27813 = cljs.core.chunk_first(seq__26277_27812__$1);
var G__27814 = cljs.core.chunk_rest(seq__26277_27812__$1);
var G__27815 = c__4550__auto___27813;
var G__27816 = cljs.core.count(c__4550__auto___27813);
var G__27817 = (0);
seq__26277_27661 = G__27814;
chunk__26278_27662 = G__27815;
count__26279_27663 = G__27816;
i__26280_27664 = G__27817;
continue;
} else {
var vec__26632_27818 = cljs.core.first(seq__26277_27812__$1);
var source_idx_27819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26632_27818,(0),null);
var vec__26635_27820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26632_27818,(1),null);
var __27821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635_27820,(0),null);
var lines_27822__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635_27820,(1),null);
var seq__26639_27824 = cljs.core.seq(lines_27822__$1);
var chunk__26640_27825 = null;
var count__26641_27826 = (0);
var i__26642_27827 = (0);
while(true){
if((i__26642_27827 < count__26641_27826)){
var vec__26707_27829 = chunk__26640_27825.cljs$core$IIndexed$_nth$arity$2(null,i__26642_27827);
var line_27830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26707_27829,(0),null);
var cols_27831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26707_27829,(1),null);
var seq__26710_27837 = cljs.core.seq(cols_27831);
var chunk__26711_27838 = null;
var count__26712_27839 = (0);
var i__26713_27840 = (0);
while(true){
if((i__26713_27840 < count__26712_27839)){
var vec__26725_27841 = chunk__26711_27838.cljs$core$IIndexed$_nth$arity$2(null,i__26713_27840);
var col_27842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26725_27841,(0),null);
var infos_27843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26725_27841,(1),null);
encode_cols(infos_27843,source_idx_27819,line_27830,col_27842);


var G__27849 = seq__26710_27837;
var G__27850 = chunk__26711_27838;
var G__27851 = count__26712_27839;
var G__27852 = (i__26713_27840 + (1));
seq__26710_27837 = G__27849;
chunk__26711_27838 = G__27850;
count__26712_27839 = G__27851;
i__26713_27840 = G__27852;
continue;
} else {
var temp__5735__auto___27853__$1 = cljs.core.seq(seq__26710_27837);
if(temp__5735__auto___27853__$1){
var seq__26710_27854__$1 = temp__5735__auto___27853__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26710_27854__$1)){
var c__4550__auto___27855 = cljs.core.chunk_first(seq__26710_27854__$1);
var G__27856 = cljs.core.chunk_rest(seq__26710_27854__$1);
var G__27857 = c__4550__auto___27855;
var G__27858 = cljs.core.count(c__4550__auto___27855);
var G__27859 = (0);
seq__26710_27837 = G__27856;
chunk__26711_27838 = G__27857;
count__26712_27839 = G__27858;
i__26713_27840 = G__27859;
continue;
} else {
var vec__26729_27860 = cljs.core.first(seq__26710_27854__$1);
var col_27861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26729_27860,(0),null);
var infos_27862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26729_27860,(1),null);
encode_cols(infos_27862,source_idx_27819,line_27830,col_27861);


var G__27866 = cljs.core.next(seq__26710_27854__$1);
var G__27867 = null;
var G__27868 = (0);
var G__27869 = (0);
seq__26710_27837 = G__27866;
chunk__26711_27838 = G__27867;
count__26712_27839 = G__27868;
i__26713_27840 = G__27869;
continue;
}
} else {
}
}
break;
}


var G__27871 = seq__26639_27824;
var G__27872 = chunk__26640_27825;
var G__27873 = count__26641_27826;
var G__27874 = (i__26642_27827 + (1));
seq__26639_27824 = G__27871;
chunk__26640_27825 = G__27872;
count__26641_27826 = G__27873;
i__26642_27827 = G__27874;
continue;
} else {
var temp__5735__auto___27875__$1 = cljs.core.seq(seq__26639_27824);
if(temp__5735__auto___27875__$1){
var seq__26639_27877__$1 = temp__5735__auto___27875__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26639_27877__$1)){
var c__4550__auto___27878 = cljs.core.chunk_first(seq__26639_27877__$1);
var G__27879 = cljs.core.chunk_rest(seq__26639_27877__$1);
var G__27880 = c__4550__auto___27878;
var G__27881 = cljs.core.count(c__4550__auto___27878);
var G__27882 = (0);
seq__26639_27824 = G__27879;
chunk__26640_27825 = G__27880;
count__26641_27826 = G__27881;
i__26642_27827 = G__27882;
continue;
} else {
var vec__26735_27883 = cljs.core.first(seq__26639_27877__$1);
var line_27884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26735_27883,(0),null);
var cols_27885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26735_27883,(1),null);
var seq__26739_27886 = cljs.core.seq(cols_27885);
var chunk__26740_27887 = null;
var count__26741_27888 = (0);
var i__26742_27889 = (0);
while(true){
if((i__26742_27889 < count__26741_27888)){
var vec__26756_27892 = chunk__26740_27887.cljs$core$IIndexed$_nth$arity$2(null,i__26742_27889);
var col_27893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26756_27892,(0),null);
var infos_27894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26756_27892,(1),null);
encode_cols(infos_27894,source_idx_27819,line_27884,col_27893);


var G__27895 = seq__26739_27886;
var G__27896 = chunk__26740_27887;
var G__27897 = count__26741_27888;
var G__27898 = (i__26742_27889 + (1));
seq__26739_27886 = G__27895;
chunk__26740_27887 = G__27896;
count__26741_27888 = G__27897;
i__26742_27889 = G__27898;
continue;
} else {
var temp__5735__auto___27901__$2 = cljs.core.seq(seq__26739_27886);
if(temp__5735__auto___27901__$2){
var seq__26739_27902__$1 = temp__5735__auto___27901__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26739_27902__$1)){
var c__4550__auto___27903 = cljs.core.chunk_first(seq__26739_27902__$1);
var G__27904 = cljs.core.chunk_rest(seq__26739_27902__$1);
var G__27905 = c__4550__auto___27903;
var G__27906 = cljs.core.count(c__4550__auto___27903);
var G__27907 = (0);
seq__26739_27886 = G__27904;
chunk__26740_27887 = G__27905;
count__26741_27888 = G__27906;
i__26742_27889 = G__27907;
continue;
} else {
var vec__26765_27909 = cljs.core.first(seq__26739_27902__$1);
var col_27910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26765_27909,(0),null);
var infos_27911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26765_27909,(1),null);
encode_cols(infos_27911,source_idx_27819,line_27884,col_27910);


var G__27915 = cljs.core.next(seq__26739_27902__$1);
var G__27916 = null;
var G__27917 = (0);
var G__27918 = (0);
seq__26739_27886 = G__27915;
chunk__26740_27887 = G__27916;
count__26741_27888 = G__27917;
i__26742_27889 = G__27918;
continue;
}
} else {
}
}
break;
}


var G__27919 = cljs.core.next(seq__26639_27877__$1);
var G__27920 = null;
var G__27921 = (0);
var G__27922 = (0);
seq__26639_27824 = G__27919;
chunk__26640_27825 = G__27920;
count__26641_27826 = G__27921;
i__26642_27827 = G__27922;
continue;
}
} else {
}
}
break;
}


var G__27923 = cljs.core.next(seq__26277_27812__$1);
var G__27924 = null;
var G__27925 = (0);
var G__27926 = (0);
seq__26277_27661 = G__27923;
chunk__26278_27662 = G__27924;
count__26279_27663 = G__27925;
i__26280_27664 = G__27926;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__26768 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26252_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26252_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26253_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26253_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26254_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__26254_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__26774 = G__26768;
var G__26775_27929 = G__26774;
var G__26776_27930 = "sourcesContent";
var G__26777_27931 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__26775_27929,G__26776_27930,G__26777_27931);

return G__26774;
} else {
return G__26768;
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
var vec__26783 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26783,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26783,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__26792 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26792,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26792,(1),null);
var G__27934 = cljs.core.next(col_map_seq);
var G__27935 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__26792,col,infos,vec__26783,line,col_map){
return (function (v,p__26800){
var map__26801 = p__26800;
var map__26801__$1 = (((((!((map__26801 == null))))?(((((map__26801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26801):map__26801);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26801__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26801__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__26792,col,infos,vec__26783,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__27934;
new_cols = G__27935;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__27938 = cljs.core.next(line_map_seq);
var G__27939 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__27938;
new_lines = G__27939;
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
var seq__26817_27940 = cljs.core.seq(reverse_map);
var chunk__26818_27941 = null;
var count__26819_27942 = (0);
var i__26820_27943 = (0);
while(true){
if((i__26820_27943 < count__26819_27942)){
var vec__27238_27944 = chunk__26818_27941.cljs$core$IIndexed$_nth$arity$2(null,i__26820_27943);
var line_27945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27238_27944,(0),null);
var columns_27946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27238_27944,(1),null);
var seq__27241_27947 = cljs.core.seq(columns_27946);
var chunk__27242_27948 = null;
var count__27243_27949 = (0);
var i__27244_27950 = (0);
while(true){
if((i__27244_27950 < count__27243_27949)){
var vec__27336_27952 = chunk__27242_27948.cljs$core$IIndexed$_nth$arity$2(null,i__27244_27950);
var column_27953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27336_27952,(0),null);
var column_info_27954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27336_27952,(1),null);
var seq__27340_27956 = cljs.core.seq(column_info_27954);
var chunk__27341_27957 = null;
var count__27342_27958 = (0);
var i__27343_27959 = (0);
while(true){
if((i__27343_27959 < count__27342_27958)){
var map__27356_27961 = chunk__27341_27957.cljs$core$IIndexed$_nth$arity$2(null,i__27343_27959);
var map__27356_27962__$1 = (((((!((map__27356_27961 == null))))?(((((map__27356_27961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27356_27961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27356_27961):map__27356_27961);
var gline_27963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27356_27962__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27356_27962__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27356_27962__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27963], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27340_27956,chunk__27341_27957,count__27342_27958,i__27343_27959,seq__27241_27947,chunk__27242_27948,count__27243_27949,i__27244_27950,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27356_27961,map__27356_27962__$1,gline_27963,gcol_27964,name_27965,vec__27336_27952,column_27953,column_info_27954,vec__27238_27944,line_27945,columns_27946,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27964], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27945,new cljs.core.Keyword(null,"col","col",-1959363084),column_27953,new cljs.core.Keyword(null,"name","name",1843675177),name_27965], null));
});})(seq__27340_27956,chunk__27341_27957,count__27342_27958,i__27343_27959,seq__27241_27947,chunk__27242_27948,count__27243_27949,i__27244_27950,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27356_27961,map__27356_27962__$1,gline_27963,gcol_27964,name_27965,vec__27336_27952,column_27953,column_info_27954,vec__27238_27944,line_27945,columns_27946,inverted))
,cljs.core.sorted_map()));


var G__27981 = seq__27340_27956;
var G__27982 = chunk__27341_27957;
var G__27983 = count__27342_27958;
var G__27984 = (i__27343_27959 + (1));
seq__27340_27956 = G__27981;
chunk__27341_27957 = G__27982;
count__27342_27958 = G__27983;
i__27343_27959 = G__27984;
continue;
} else {
var temp__5735__auto___27985 = cljs.core.seq(seq__27340_27956);
if(temp__5735__auto___27985){
var seq__27340_27986__$1 = temp__5735__auto___27985;
if(cljs.core.chunked_seq_QMARK_(seq__27340_27986__$1)){
var c__4550__auto___27987 = cljs.core.chunk_first(seq__27340_27986__$1);
var G__27988 = cljs.core.chunk_rest(seq__27340_27986__$1);
var G__27989 = c__4550__auto___27987;
var G__27990 = cljs.core.count(c__4550__auto___27987);
var G__27991 = (0);
seq__27340_27956 = G__27988;
chunk__27341_27957 = G__27989;
count__27342_27958 = G__27990;
i__27343_27959 = G__27991;
continue;
} else {
var map__27360_27992 = cljs.core.first(seq__27340_27986__$1);
var map__27360_27993__$1 = (((((!((map__27360_27992 == null))))?(((((map__27360_27992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27360_27992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27360_27992):map__27360_27992);
var gline_27994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27360_27993__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27360_27993__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27360_27993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27994], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27340_27956,chunk__27341_27957,count__27342_27958,i__27343_27959,seq__27241_27947,chunk__27242_27948,count__27243_27949,i__27244_27950,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27360_27992,map__27360_27993__$1,gline_27994,gcol_27995,name_27996,seq__27340_27986__$1,temp__5735__auto___27985,vec__27336_27952,column_27953,column_info_27954,vec__27238_27944,line_27945,columns_27946,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27995], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27945,new cljs.core.Keyword(null,"col","col",-1959363084),column_27953,new cljs.core.Keyword(null,"name","name",1843675177),name_27996], null));
});})(seq__27340_27956,chunk__27341_27957,count__27342_27958,i__27343_27959,seq__27241_27947,chunk__27242_27948,count__27243_27949,i__27244_27950,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27360_27992,map__27360_27993__$1,gline_27994,gcol_27995,name_27996,seq__27340_27986__$1,temp__5735__auto___27985,vec__27336_27952,column_27953,column_info_27954,vec__27238_27944,line_27945,columns_27946,inverted))
,cljs.core.sorted_map()));


var G__27999 = cljs.core.next(seq__27340_27986__$1);
var G__28000 = null;
var G__28001 = (0);
var G__28002 = (0);
seq__27340_27956 = G__27999;
chunk__27341_27957 = G__28000;
count__27342_27958 = G__28001;
i__27343_27959 = G__28002;
continue;
}
} else {
}
}
break;
}


var G__28003 = seq__27241_27947;
var G__28004 = chunk__27242_27948;
var G__28005 = count__27243_27949;
var G__28006 = (i__27244_27950 + (1));
seq__27241_27947 = G__28003;
chunk__27242_27948 = G__28004;
count__27243_27949 = G__28005;
i__27244_27950 = G__28006;
continue;
} else {
var temp__5735__auto___28007 = cljs.core.seq(seq__27241_27947);
if(temp__5735__auto___28007){
var seq__27241_28009__$1 = temp__5735__auto___28007;
if(cljs.core.chunked_seq_QMARK_(seq__27241_28009__$1)){
var c__4550__auto___28010 = cljs.core.chunk_first(seq__27241_28009__$1);
var G__28012 = cljs.core.chunk_rest(seq__27241_28009__$1);
var G__28013 = c__4550__auto___28010;
var G__28014 = cljs.core.count(c__4550__auto___28010);
var G__28015 = (0);
seq__27241_27947 = G__28012;
chunk__27242_27948 = G__28013;
count__27243_27949 = G__28014;
i__27244_27950 = G__28015;
continue;
} else {
var vec__27380_28016 = cljs.core.first(seq__27241_28009__$1);
var column_28017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27380_28016,(0),null);
var column_info_28018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27380_28016,(1),null);
var seq__27383_28019 = cljs.core.seq(column_info_28018);
var chunk__27384_28020 = null;
var count__27385_28021 = (0);
var i__27386_28022 = (0);
while(true){
if((i__27386_28022 < count__27385_28021)){
var map__27414_28023 = chunk__27384_28020.cljs$core$IIndexed$_nth$arity$2(null,i__27386_28022);
var map__27414_28024__$1 = (((((!((map__27414_28023 == null))))?(((((map__27414_28023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27414_28023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27414_28023):map__27414_28023);
var gline_28025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27414_28024__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27414_28024__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27414_28024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28025], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27383_28019,chunk__27384_28020,count__27385_28021,i__27386_28022,seq__27241_27947,chunk__27242_27948,count__27243_27949,i__27244_27950,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27414_28023,map__27414_28024__$1,gline_28025,gcol_28026,name_28027,vec__27380_28016,column_28017,column_info_28018,seq__27241_28009__$1,temp__5735__auto___28007,vec__27238_27944,line_27945,columns_27946,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28026], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27945,new cljs.core.Keyword(null,"col","col",-1959363084),column_28017,new cljs.core.Keyword(null,"name","name",1843675177),name_28027], null));
});})(seq__27383_28019,chunk__27384_28020,count__27385_28021,i__27386_28022,seq__27241_27947,chunk__27242_27948,count__27243_27949,i__27244_27950,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27414_28023,map__27414_28024__$1,gline_28025,gcol_28026,name_28027,vec__27380_28016,column_28017,column_info_28018,seq__27241_28009__$1,temp__5735__auto___28007,vec__27238_27944,line_27945,columns_27946,inverted))
,cljs.core.sorted_map()));


var G__28035 = seq__27383_28019;
var G__28036 = chunk__27384_28020;
var G__28037 = count__27385_28021;
var G__28038 = (i__27386_28022 + (1));
seq__27383_28019 = G__28035;
chunk__27384_28020 = G__28036;
count__27385_28021 = G__28037;
i__27386_28022 = G__28038;
continue;
} else {
var temp__5735__auto___28039__$1 = cljs.core.seq(seq__27383_28019);
if(temp__5735__auto___28039__$1){
var seq__27383_28041__$1 = temp__5735__auto___28039__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27383_28041__$1)){
var c__4550__auto___28042 = cljs.core.chunk_first(seq__27383_28041__$1);
var G__28043 = cljs.core.chunk_rest(seq__27383_28041__$1);
var G__28044 = c__4550__auto___28042;
var G__28045 = cljs.core.count(c__4550__auto___28042);
var G__28046 = (0);
seq__27383_28019 = G__28043;
chunk__27384_28020 = G__28044;
count__27385_28021 = G__28045;
i__27386_28022 = G__28046;
continue;
} else {
var map__27419_28048 = cljs.core.first(seq__27383_28041__$1);
var map__27419_28049__$1 = (((((!((map__27419_28048 == null))))?(((((map__27419_28048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27419_28048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27419_28048):map__27419_28048);
var gline_28051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27419_28049__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27419_28049__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27419_28049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28051], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27383_28019,chunk__27384_28020,count__27385_28021,i__27386_28022,seq__27241_27947,chunk__27242_27948,count__27243_27949,i__27244_27950,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27419_28048,map__27419_28049__$1,gline_28051,gcol_28053,name_28054,seq__27383_28041__$1,temp__5735__auto___28039__$1,vec__27380_28016,column_28017,column_info_28018,seq__27241_28009__$1,temp__5735__auto___28007,vec__27238_27944,line_27945,columns_27946,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28053], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27945,new cljs.core.Keyword(null,"col","col",-1959363084),column_28017,new cljs.core.Keyword(null,"name","name",1843675177),name_28054], null));
});})(seq__27383_28019,chunk__27384_28020,count__27385_28021,i__27386_28022,seq__27241_27947,chunk__27242_27948,count__27243_27949,i__27244_27950,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27419_28048,map__27419_28049__$1,gline_28051,gcol_28053,name_28054,seq__27383_28041__$1,temp__5735__auto___28039__$1,vec__27380_28016,column_28017,column_info_28018,seq__27241_28009__$1,temp__5735__auto___28007,vec__27238_27944,line_27945,columns_27946,inverted))
,cljs.core.sorted_map()));


var G__28063 = cljs.core.next(seq__27383_28041__$1);
var G__28064 = null;
var G__28065 = (0);
var G__28066 = (0);
seq__27383_28019 = G__28063;
chunk__27384_28020 = G__28064;
count__27385_28021 = G__28065;
i__27386_28022 = G__28066;
continue;
}
} else {
}
}
break;
}


var G__28068 = cljs.core.next(seq__27241_28009__$1);
var G__28069 = null;
var G__28070 = (0);
var G__28071 = (0);
seq__27241_27947 = G__28068;
chunk__27242_27948 = G__28069;
count__27243_27949 = G__28070;
i__27244_27950 = G__28071;
continue;
}
} else {
}
}
break;
}


var G__28074 = seq__26817_27940;
var G__28075 = chunk__26818_27941;
var G__28076 = count__26819_27942;
var G__28077 = (i__26820_27943 + (1));
seq__26817_27940 = G__28074;
chunk__26818_27941 = G__28075;
count__26819_27942 = G__28076;
i__26820_27943 = G__28077;
continue;
} else {
var temp__5735__auto___28079 = cljs.core.seq(seq__26817_27940);
if(temp__5735__auto___28079){
var seq__26817_28081__$1 = temp__5735__auto___28079;
if(cljs.core.chunked_seq_QMARK_(seq__26817_28081__$1)){
var c__4550__auto___28082 = cljs.core.chunk_first(seq__26817_28081__$1);
var G__28083 = cljs.core.chunk_rest(seq__26817_28081__$1);
var G__28084 = c__4550__auto___28082;
var G__28085 = cljs.core.count(c__4550__auto___28082);
var G__28086 = (0);
seq__26817_27940 = G__28083;
chunk__26818_27941 = G__28084;
count__26819_27942 = G__28085;
i__26820_27943 = G__28086;
continue;
} else {
var vec__27431_28087 = cljs.core.first(seq__26817_28081__$1);
var line_28088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27431_28087,(0),null);
var columns_28089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27431_28087,(1),null);
var seq__27434_28090 = cljs.core.seq(columns_28089);
var chunk__27435_28091 = null;
var count__27436_28092 = (0);
var i__27437_28093 = (0);
while(true){
if((i__27437_28093 < count__27436_28092)){
var vec__27509_28094 = chunk__27435_28091.cljs$core$IIndexed$_nth$arity$2(null,i__27437_28093);
var column_28095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27509_28094,(0),null);
var column_info_28096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27509_28094,(1),null);
var seq__27512_28097 = cljs.core.seq(column_info_28096);
var chunk__27513_28098 = null;
var count__27514_28099 = (0);
var i__27515_28100 = (0);
while(true){
if((i__27515_28100 < count__27514_28099)){
var map__27531_28101 = chunk__27513_28098.cljs$core$IIndexed$_nth$arity$2(null,i__27515_28100);
var map__27531_28102__$1 = (((((!((map__27531_28101 == null))))?(((((map__27531_28101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27531_28101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27531_28101):map__27531_28101);
var gline_28103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27531_28102__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27531_28102__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27531_28102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28103], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27512_28097,chunk__27513_28098,count__27514_28099,i__27515_28100,seq__27434_28090,chunk__27435_28091,count__27436_28092,i__27437_28093,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27531_28101,map__27531_28102__$1,gline_28103,gcol_28104,name_28105,vec__27509_28094,column_28095,column_info_28096,vec__27431_28087,line_28088,columns_28089,seq__26817_28081__$1,temp__5735__auto___28079,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28104], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28088,new cljs.core.Keyword(null,"col","col",-1959363084),column_28095,new cljs.core.Keyword(null,"name","name",1843675177),name_28105], null));
});})(seq__27512_28097,chunk__27513_28098,count__27514_28099,i__27515_28100,seq__27434_28090,chunk__27435_28091,count__27436_28092,i__27437_28093,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27531_28101,map__27531_28102__$1,gline_28103,gcol_28104,name_28105,vec__27509_28094,column_28095,column_info_28096,vec__27431_28087,line_28088,columns_28089,seq__26817_28081__$1,temp__5735__auto___28079,inverted))
,cljs.core.sorted_map()));


var G__28109 = seq__27512_28097;
var G__28110 = chunk__27513_28098;
var G__28111 = count__27514_28099;
var G__28112 = (i__27515_28100 + (1));
seq__27512_28097 = G__28109;
chunk__27513_28098 = G__28110;
count__27514_28099 = G__28111;
i__27515_28100 = G__28112;
continue;
} else {
var temp__5735__auto___28113__$1 = cljs.core.seq(seq__27512_28097);
if(temp__5735__auto___28113__$1){
var seq__27512_28114__$1 = temp__5735__auto___28113__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27512_28114__$1)){
var c__4550__auto___28115 = cljs.core.chunk_first(seq__27512_28114__$1);
var G__28116 = cljs.core.chunk_rest(seq__27512_28114__$1);
var G__28117 = c__4550__auto___28115;
var G__28118 = cljs.core.count(c__4550__auto___28115);
var G__28119 = (0);
seq__27512_28097 = G__28116;
chunk__27513_28098 = G__28117;
count__27514_28099 = G__28118;
i__27515_28100 = G__28119;
continue;
} else {
var map__27537_28120 = cljs.core.first(seq__27512_28114__$1);
var map__27537_28121__$1 = (((((!((map__27537_28120 == null))))?(((((map__27537_28120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27537_28120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27537_28120):map__27537_28120);
var gline_28122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27537_28121__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27537_28121__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27537_28121__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28122], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27512_28097,chunk__27513_28098,count__27514_28099,i__27515_28100,seq__27434_28090,chunk__27435_28091,count__27436_28092,i__27437_28093,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27537_28120,map__27537_28121__$1,gline_28122,gcol_28123,name_28124,seq__27512_28114__$1,temp__5735__auto___28113__$1,vec__27509_28094,column_28095,column_info_28096,vec__27431_28087,line_28088,columns_28089,seq__26817_28081__$1,temp__5735__auto___28079,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28123], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28088,new cljs.core.Keyword(null,"col","col",-1959363084),column_28095,new cljs.core.Keyword(null,"name","name",1843675177),name_28124], null));
});})(seq__27512_28097,chunk__27513_28098,count__27514_28099,i__27515_28100,seq__27434_28090,chunk__27435_28091,count__27436_28092,i__27437_28093,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27537_28120,map__27537_28121__$1,gline_28122,gcol_28123,name_28124,seq__27512_28114__$1,temp__5735__auto___28113__$1,vec__27509_28094,column_28095,column_info_28096,vec__27431_28087,line_28088,columns_28089,seq__26817_28081__$1,temp__5735__auto___28079,inverted))
,cljs.core.sorted_map()));


var G__28133 = cljs.core.next(seq__27512_28114__$1);
var G__28134 = null;
var G__28135 = (0);
var G__28136 = (0);
seq__27512_28097 = G__28133;
chunk__27513_28098 = G__28134;
count__27514_28099 = G__28135;
i__27515_28100 = G__28136;
continue;
}
} else {
}
}
break;
}


var G__28137 = seq__27434_28090;
var G__28138 = chunk__27435_28091;
var G__28139 = count__27436_28092;
var G__28140 = (i__27437_28093 + (1));
seq__27434_28090 = G__28137;
chunk__27435_28091 = G__28138;
count__27436_28092 = G__28139;
i__27437_28093 = G__28140;
continue;
} else {
var temp__5735__auto___28141__$1 = cljs.core.seq(seq__27434_28090);
if(temp__5735__auto___28141__$1){
var seq__27434_28142__$1 = temp__5735__auto___28141__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27434_28142__$1)){
var c__4550__auto___28143 = cljs.core.chunk_first(seq__27434_28142__$1);
var G__28144 = cljs.core.chunk_rest(seq__27434_28142__$1);
var G__28145 = c__4550__auto___28143;
var G__28146 = cljs.core.count(c__4550__auto___28143);
var G__28147 = (0);
seq__27434_28090 = G__28144;
chunk__27435_28091 = G__28145;
count__27436_28092 = G__28146;
i__27437_28093 = G__28147;
continue;
} else {
var vec__27545_28148 = cljs.core.first(seq__27434_28142__$1);
var column_28149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27545_28148,(0),null);
var column_info_28150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27545_28148,(1),null);
var seq__27548_28154 = cljs.core.seq(column_info_28150);
var chunk__27549_28155 = null;
var count__27550_28156 = (0);
var i__27551_28157 = (0);
while(true){
if((i__27551_28157 < count__27550_28156)){
var map__27564_28161 = chunk__27549_28155.cljs$core$IIndexed$_nth$arity$2(null,i__27551_28157);
var map__27564_28162__$1 = (((((!((map__27564_28161 == null))))?(((((map__27564_28161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27564_28161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27564_28161):map__27564_28161);
var gline_28163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27564_28162__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27564_28162__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27564_28162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28163], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27548_28154,chunk__27549_28155,count__27550_28156,i__27551_28157,seq__27434_28090,chunk__27435_28091,count__27436_28092,i__27437_28093,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27564_28161,map__27564_28162__$1,gline_28163,gcol_28164,name_28165,vec__27545_28148,column_28149,column_info_28150,seq__27434_28142__$1,temp__5735__auto___28141__$1,vec__27431_28087,line_28088,columns_28089,seq__26817_28081__$1,temp__5735__auto___28079,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28164], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28088,new cljs.core.Keyword(null,"col","col",-1959363084),column_28149,new cljs.core.Keyword(null,"name","name",1843675177),name_28165], null));
});})(seq__27548_28154,chunk__27549_28155,count__27550_28156,i__27551_28157,seq__27434_28090,chunk__27435_28091,count__27436_28092,i__27437_28093,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27564_28161,map__27564_28162__$1,gline_28163,gcol_28164,name_28165,vec__27545_28148,column_28149,column_info_28150,seq__27434_28142__$1,temp__5735__auto___28141__$1,vec__27431_28087,line_28088,columns_28089,seq__26817_28081__$1,temp__5735__auto___28079,inverted))
,cljs.core.sorted_map()));


var G__28172 = seq__27548_28154;
var G__28173 = chunk__27549_28155;
var G__28174 = count__27550_28156;
var G__28175 = (i__27551_28157 + (1));
seq__27548_28154 = G__28172;
chunk__27549_28155 = G__28173;
count__27550_28156 = G__28174;
i__27551_28157 = G__28175;
continue;
} else {
var temp__5735__auto___28176__$2 = cljs.core.seq(seq__27548_28154);
if(temp__5735__auto___28176__$2){
var seq__27548_28181__$1 = temp__5735__auto___28176__$2;
if(cljs.core.chunked_seq_QMARK_(seq__27548_28181__$1)){
var c__4550__auto___28185 = cljs.core.chunk_first(seq__27548_28181__$1);
var G__28186 = cljs.core.chunk_rest(seq__27548_28181__$1);
var G__28187 = c__4550__auto___28185;
var G__28188 = cljs.core.count(c__4550__auto___28185);
var G__28189 = (0);
seq__27548_28154 = G__28186;
chunk__27549_28155 = G__28187;
count__27550_28156 = G__28188;
i__27551_28157 = G__28189;
continue;
} else {
var map__27570_28190 = cljs.core.first(seq__27548_28181__$1);
var map__27570_28191__$1 = (((((!((map__27570_28190 == null))))?(((((map__27570_28190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27570_28190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27570_28190):map__27570_28190);
var gline_28192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27570_28191__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27570_28191__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27570_28191__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28192], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27548_28154,chunk__27549_28155,count__27550_28156,i__27551_28157,seq__27434_28090,chunk__27435_28091,count__27436_28092,i__27437_28093,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27570_28190,map__27570_28191__$1,gline_28192,gcol_28193,name_28194,seq__27548_28181__$1,temp__5735__auto___28176__$2,vec__27545_28148,column_28149,column_info_28150,seq__27434_28142__$1,temp__5735__auto___28141__$1,vec__27431_28087,line_28088,columns_28089,seq__26817_28081__$1,temp__5735__auto___28079,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28193], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28088,new cljs.core.Keyword(null,"col","col",-1959363084),column_28149,new cljs.core.Keyword(null,"name","name",1843675177),name_28194], null));
});})(seq__27548_28154,chunk__27549_28155,count__27550_28156,i__27551_28157,seq__27434_28090,chunk__27435_28091,count__27436_28092,i__27437_28093,seq__26817_27940,chunk__26818_27941,count__26819_27942,i__26820_27943,map__27570_28190,map__27570_28191__$1,gline_28192,gcol_28193,name_28194,seq__27548_28181__$1,temp__5735__auto___28176__$2,vec__27545_28148,column_28149,column_info_28150,seq__27434_28142__$1,temp__5735__auto___28141__$1,vec__27431_28087,line_28088,columns_28089,seq__26817_28081__$1,temp__5735__auto___28079,inverted))
,cljs.core.sorted_map()));


var G__28212 = cljs.core.next(seq__27548_28181__$1);
var G__28213 = null;
var G__28214 = (0);
var G__28215 = (0);
seq__27548_28154 = G__28212;
chunk__27549_28155 = G__28213;
count__27550_28156 = G__28214;
i__27551_28157 = G__28215;
continue;
}
} else {
}
}
break;
}


var G__28218 = cljs.core.next(seq__27434_28142__$1);
var G__28219 = null;
var G__28220 = (0);
var G__28221 = (0);
seq__27434_28090 = G__28218;
chunk__27435_28091 = G__28219;
count__27436_28092 = G__28220;
i__27437_28093 = G__28221;
continue;
}
} else {
}
}
break;
}


var G__28224 = cljs.core.next(seq__26817_28081__$1);
var G__28225 = null;
var G__28226 = (0);
var G__28227 = (0);
seq__26817_27940 = G__28224;
chunk__26818_27941 = G__28225;
count__26819_27942 = G__28226;
i__26820_27943 = G__28227;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
