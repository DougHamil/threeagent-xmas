goog.provide('cljs.reader');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__51704 = b.append("0");
b = G__51704;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_(num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_(year,(4))) && (((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__51515 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51515,(10),null);
var v = vec__51515;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__51563 = months__$1;
var G__51564 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__51563,G__51564) : cljs.reader.days_in_month.call(null,G__51563,G__51564));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5733__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51568 = temp__5733__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__51585_51726 = cljs.core.seq(form);
var chunk__51586_51727 = null;
var count__51587_51728 = (0);
var i__51588_51729 = (0);
while(true){
if((i__51588_51729 < count__51587_51728)){
var x_51736 = chunk__51586_51727.cljs$core$IIndexed$_nth$arity$2(null,i__51588_51729);
arr.push(x_51736);


var G__51737 = seq__51585_51726;
var G__51738 = chunk__51586_51727;
var G__51739 = count__51587_51728;
var G__51740 = (i__51588_51729 + (1));
seq__51585_51726 = G__51737;
chunk__51586_51727 = G__51738;
count__51587_51728 = G__51739;
i__51588_51729 = G__51740;
continue;
} else {
var temp__5735__auto___51741 = cljs.core.seq(seq__51585_51726);
if(temp__5735__auto___51741){
var seq__51585_51743__$1 = temp__5735__auto___51741;
if(cljs.core.chunked_seq_QMARK_(seq__51585_51743__$1)){
var c__4550__auto___51744 = cljs.core.chunk_first(seq__51585_51743__$1);
var G__51745 = cljs.core.chunk_rest(seq__51585_51743__$1);
var G__51746 = c__4550__auto___51744;
var G__51747 = cljs.core.count(c__4550__auto___51744);
var G__51748 = (0);
seq__51585_51726 = G__51745;
chunk__51586_51727 = G__51746;
count__51587_51728 = G__51747;
i__51588_51729 = G__51748;
continue;
} else {
var x_51750 = cljs.core.first(seq__51585_51743__$1);
arr.push(x_51750);


var G__51751 = cljs.core.next(seq__51585_51743__$1);
var G__51752 = null;
var G__51753 = (0);
var G__51754 = (0);
seq__51585_51726 = G__51751;
chunk__51586_51727 = G__51752;
count__51587_51728 = G__51753;
i__51588_51729 = G__51754;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = ({});
var seq__51618_51762 = cljs.core.seq(form);
var chunk__51619_51763 = null;
var count__51620_51764 = (0);
var i__51621_51765 = (0);
while(true){
if((i__51621_51765 < count__51620_51764)){
var vec__51639_51766 = chunk__51619_51763.cljs$core$IIndexed$_nth$arity$2(null,i__51621_51765);
var k_51767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51639_51766,(0),null);
var v_51768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51639_51766,(1),null);
var G__51642_51769 = obj;
var G__51643_51770 = cljs.core.name(k_51767);
var G__51644_51771 = v_51768;
goog.object.set(G__51642_51769,G__51643_51770,G__51644_51771);


var G__51772 = seq__51618_51762;
var G__51773 = chunk__51619_51763;
var G__51774 = count__51620_51764;
var G__51775 = (i__51621_51765 + (1));
seq__51618_51762 = G__51772;
chunk__51619_51763 = G__51773;
count__51620_51764 = G__51774;
i__51621_51765 = G__51775;
continue;
} else {
var temp__5735__auto___51776 = cljs.core.seq(seq__51618_51762);
if(temp__5735__auto___51776){
var seq__51618_51777__$1 = temp__5735__auto___51776;
if(cljs.core.chunked_seq_QMARK_(seq__51618_51777__$1)){
var c__4550__auto___51779 = cljs.core.chunk_first(seq__51618_51777__$1);
var G__51780 = cljs.core.chunk_rest(seq__51618_51777__$1);
var G__51781 = c__4550__auto___51779;
var G__51782 = cljs.core.count(c__4550__auto___51779);
var G__51783 = (0);
seq__51618_51762 = G__51780;
chunk__51619_51763 = G__51781;
count__51620_51764 = G__51782;
i__51621_51765 = G__51783;
continue;
} else {
var vec__51650_51784 = cljs.core.first(seq__51618_51777__$1);
var k_51785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51650_51784,(0),null);
var v_51786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51650_51784,(1),null);
var G__51653_51787 = obj;
var G__51654_51788 = cljs.core.name(k_51785);
var G__51655_51789 = v_51786;
goog.object.set(G__51653_51787,G__51654_51788,G__51655_51789);


var G__51790 = cljs.core.next(seq__51618_51777__$1);
var G__51791 = null;
var G__51792 = (0);
var G__51793 = (0);
seq__51618_51762 = G__51790;
chunk__51619_51763 = G__51791;
count__51620_51764 = G__51792;
i__51621_51765 = G__51793;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__51667 = arguments.length;
switch (G__51667) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__51673,reader){
var map__51674 = p__51673;
var map__51674__$1 = (((((!((map__51674 == null))))?(((((map__51674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51674):map__51674);
var opts = map__51674__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51674__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),((function (map__51674,map__51674__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__51674,map__51674__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__51691 = arguments.length;
switch (G__51691) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
