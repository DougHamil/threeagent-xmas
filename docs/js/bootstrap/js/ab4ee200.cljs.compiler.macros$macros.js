goog.provide('cljs.compiler.macros$macros');
var ret__4776__auto___49241 = (function (){
cljs.compiler.macros$macros.emit_wrap = (function cljs$compiler$macros$macros$emit_wrap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49242 = arguments.length;
var i__4731__auto___49243 = (0);
while(true){
if((i__4731__auto___49243 < len__4730__auto___49242)){
args__4736__auto__.push((arguments[i__4731__auto___49243]));

var G__49245 = (i__4731__auto___49243 + (1));
i__4731__auto___49243 = G__49245;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"env__49204__auto__","env__49204__auto__",-1263807288,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"return","return",-1891502105),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"env__49204__auto__","env__49204__auto__",-1263807288,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.compiler","emits","cljs.compiler/emits",-1296164997,null),null,(1),null)),(new cljs.core.List(null,"return ",null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expr","expr",745722291),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"env__49204__auto__","env__49204__auto__",-1263807288,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.compiler","emitln","cljs.compiler/emitln",-1309380807,null),null,(1),null)),(new cljs.core.List(null,";",null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

cljs.compiler.macros$macros.emit_wrap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.compiler.macros$macros.emit_wrap.cljs$lang$applyTo = (function (seq49205){
var G__49206 = cljs.core.first(seq49205);
var seq49205__$1 = cljs.core.next(seq49205);
var G__49207 = cljs.core.first(seq49205__$1);
var seq49205__$2 = cljs.core.next(seq49205__$1);
var G__49208 = cljs.core.first(seq49205__$2);
var seq49205__$3 = cljs.core.next(seq49205__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49206,G__49207,G__49208,seq49205__$3);
});

return null;
})()
;
cljs.compiler.macros$macros.emit_wrap.cljs$lang$macro = true;

