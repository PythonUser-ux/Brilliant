/*! For license information please see vendors-viz-02-canvas-viz-02-escher-viz-02-graph-viz-02-huygens-clock.273f39e5cd9afdfb1c2c.js.LICENSE */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{1012:function(e,t,r){var n,a,i;(function(r){if(true){!(a=[],n=r,i=typeof n==="function"?n.apply(t,a):n,i!==undefined&&(e.exports=i))}else{}})((function(){"use strict";var e="14.0.3";function t(e){return typeof e==="object"&&typeof e.to==="function"&&typeof e.from==="function"}function r(e){e.parentElement.removeChild(e)}function n(e){return e!==null&&e!==undefined}function a(e){e.preventDefault()}function i(e){return e.filter((function(e){return!this[e]?this[e]=true:false}),{})}function o(e,t){return Math.round(e/t)*t}function s(e,t){var r=e.getBoundingClientRect();var n=e.ownerDocument;var a=n.documentElement;var i=m(n);if(/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)){i.x=0}return t?r.top+i.y-a.clientTop:r.left+i.x-a.clientLeft}function l(e){return typeof e==="number"&&!isNaN(e)&&isFinite(e)}function u(e,t,r){if(r>0){d(e,t);setTimeout((function(){v(e,t)}),r)}}function f(e){return Math.max(Math.min(e,100),0)}function c(e){return Array.isArray(e)?e:[e]}function p(e){e=String(e);var t=e.split(".");return t.length>1?t[1].length:0}function d(e,t){if(e.classList){e.classList.add(t)}else{e.className+=" "+t}}function v(e,t){if(e.classList){e.classList.remove(t)}else{e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}function h(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function m(e){var t=window.pageXOffset!==undefined;var r=(e.compatMode||"")==="CSS1Compat";var n=t?window.pageXOffset:r?e.documentElement.scrollLeft:e.body.scrollLeft;var a=t?window.pageYOffset:r?e.documentElement.scrollTop:e.body.scrollTop;return{x:n,y:a}}function g(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function b(){var e=false;try{var t=Object.defineProperty({},"passive",{get:function(){e=true}});window.addEventListener("test",null,t)}catch(e){}return e}function y(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function x(e,t){return 100/(t-e)}function w(e,t){return t*100/(e[1]-e[0])}function S(e,t){return w(e,e[0]<0?t+Math.abs(e[0]):t-e[0])}function E(e,t){return t*(e[1]-e[0])/100+e[0]}function C(e,t){var r=1;while(e>=t[r]){r+=1}return r}function N(e,t,r){if(r>=e.slice(-1)[0]){return 100}var n=C(r,e);var a=e[n-1];var i=e[n];var o=t[n-1];var s=t[n];return o+S([a,i],r)/x(o,s)}function P(e,t,r){if(r>=100){return e.slice(-1)[0]}var n=C(r,t);var a=e[n-1];var i=e[n];var o=t[n-1];var s=t[n];return E([a,i],(r-o)*x(o,s))}function k(e,t,r,n){if(n===100){return n}var a=C(n,e);var i=e[a-1];var s=e[a];if(r){if(n-i>(s-i)/2){return s}return i}if(!t[a-1]){return n}return e[a-1]+o(n-e[a-1],t[a-1])}function U(t,r,n){var a;if(typeof r==="number"){r=[r]}if(!Array.isArray(r)){throw new Error("noUiSlider ("+e+"): 'range' contains invalid value.")}if(t==="min"){a=0}else if(t==="max"){a=100}else{a=parseFloat(t)}if(!l(a)||!l(r[0])){throw new Error("noUiSlider ("+e+"): 'range' value isn't numeric.")}n.xPct.push(a);n.xVal.push(r[0]);if(!a){if(!isNaN(r[1])){n.xSteps[0]=r[1]}}else{n.xSteps.push(isNaN(r[1])?false:r[1])}n.xHighestCompleteStep.push(0)}function O(e,t,r){if(!t){return}if(r.xVal[e]===r.xVal[e+1]){r.xSteps[e]=r.xHighestCompleteStep[e]=r.xVal[e];return}r.xSteps[e]=w([r.xVal[e],r.xVal[e+1]],t)/x(r.xPct[e],r.xPct[e+1]);var n=(r.xVal[e+1]-r.xVal[e])/r.xNumSteps[e];var a=Math.ceil(Number(n.toFixed(3))-1);var i=r.xVal[e]+r.xNumSteps[e]*a;r.xHighestCompleteStep[e]=i}function M(e,t,r){this.xPct=[];this.xVal=[];this.xSteps=[r||false];this.xNumSteps=[false];this.xHighestCompleteStep=[];this.snap=t;var n;var a=[];for(n in e){if(e.hasOwnProperty(n)){a.push([e[n],n])}}if(a.length&&typeof a[0][0]==="object"){a.sort((function(e,t){return e[0][0]-t[0][0]}))}else{a.sort((function(e,t){return e[0]-t[0]}))}for(n=0;n<a.length;n++){U(a[n][1],a[n][0],this)}this.xNumSteps=this.xSteps.slice(0);for(n=0;n<this.xNumSteps.length;n++){O(n,this.xNumSteps[n],this)}}M.prototype.getMargin=function(t){var r=this.xNumSteps[0];if(r&&t/r%1!==0){throw new Error("noUiSlider ("+e+"): 'limit', 'margin' and 'padding' must be divisible by step.")}return this.xPct.length===2?w(this.xVal,t):false};M.prototype.toStepping=function(e){e=N(this.xVal,this.xPct,e);return e};M.prototype.fromStepping=function(e){return P(this.xVal,this.xPct,e)};M.prototype.getStep=function(e){e=k(this.xPct,this.xSteps,this.snap,e);return e};M.prototype.getDefaultStep=function(e,t,r){var n=C(e,this.xPct);if(e===100||t&&e===this.xPct[n-1]){n=Math.max(n-1,1)}return(this.xVal[n]-this.xVal[n-1])/r};M.prototype.getNearbySteps=function(e){var t=C(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}};M.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(p);return Math.max.apply(null,e)};M.prototype.convert=function(e){return this.getStep(this.toStepping(e))};var A={to:function(e){return e!==undefined&&e.toFixed(2)},from:Number};function V(r){if(t(r)){return true}throw new Error("noUiSlider ("+e+"): 'format' requires 'to' and 'from' methods.")}function L(t,r){if(!l(r)){throw new Error("noUiSlider ("+e+"): 'step' is not numeric.")}t.singleStep=r}function j(t,r){if(typeof r!=="object"||Array.isArray(r)){throw new Error("noUiSlider ("+e+"): 'range' is not an object.")}if(r.min===undefined||r.max===undefined){throw new Error("noUiSlider ("+e+"): Missing 'min' or 'max' in 'range'.")}if(r.min===r.max){throw new Error("noUiSlider ("+e+"): 'range' 'min' and 'max' cannot be equal.")}t.spectrum=new M(r,t.snap,t.singleStep)}function T(t,r){r=c(r);if(!Array.isArray(r)||!r.length){throw new Error("noUiSlider ("+e+"): 'start' option is incorrect.")}t.handles=r.length;t.start=r}function z(t,r){t.snap=r;if(typeof r!=="boolean"){throw new Error("noUiSlider ("+e+"): 'snap' option must be a boolean.")}}function D(t,r){t.animate=r;if(typeof r!=="boolean"){throw new Error("noUiSlider ("+e+"): 'animate' option must be a boolean.")}}function F(t,r){t.animationDuration=r;if(typeof r!=="number"){throw new Error("noUiSlider ("+e+"): 'animationDuration' option must be a number.")}}function H(t,r){var n=[false];var a;if(r==="lower"){r=[true,false]}else if(r==="upper"){r=[false,true]}if(r===true||r===false){for(a=1;a<t.handles;a++){n.push(r)}n.push(false)}else if(!Array.isArray(r)||!r.length||r.length!==t.handles+1){throw new Error("noUiSlider ("+e+"): 'connect' option doesn't match handle count.")}else{n=r}t.connect=n}function R(t,r){switch(r){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+e+"): 'orientation' option is invalid.")}}function _(t,r){if(!l(r)){throw new Error("noUiSlider ("+e+"): 'margin' option must be numeric.")}if(r===0){return}t.margin=t.spectrum.getMargin(r);if(!t.margin){throw new Error("noUiSlider ("+e+"): 'margin' option is only supported on linear sliders.")}}function B(t,r){if(!l(r)){throw new Error("noUiSlider ("+e+"): 'limit' option must be numeric.")}t.limit=t.spectrum.getMargin(r);if(!t.limit||t.handles<2){throw new Error("noUiSlider ("+e+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}}function X(t,r){if(!l(r)&&!Array.isArray(r)){throw new Error("noUiSlider ("+e+"): 'padding' option must be numeric or array of exactly 2 numbers.")}if(Array.isArray(r)&&!(r.length===2||l(r[0])||l(r[1]))){throw new Error("noUiSlider ("+e+"): 'padding' option must be numeric or array of exactly 2 numbers.")}if(r===0){return}if(!Array.isArray(r)){r=[r,r]}t.padding=[t.spectrum.getMargin(r[0]),t.spectrum.getMargin(r[1])];if(t.padding[0]===false||t.padding[1]===false){throw new Error("noUiSlider ("+e+"): 'padding' option is only supported on linear sliders.")}if(t.padding[0]<0||t.padding[1]<0){throw new Error("noUiSlider ("+e+"): 'padding' option must be a positive number(s).")}if(t.padding[0]+t.padding[1]>100){throw new Error("noUiSlider ("+e+"): 'padding' option must not exceed 100% of the range.")}}function q(t,r){switch(r){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+e+"): 'direction' option was not recognized.")}}function $(t,r){if(typeof r!=="string"){throw new Error("noUiSlider ("+e+"): 'behaviour' must be a string containing options.")}var n=r.indexOf("tap")>=0;var a=r.indexOf("drag")>=0;var i=r.indexOf("fixed")>=0;var o=r.indexOf("snap")>=0;var s=r.indexOf("hover")>=0;var l=r.indexOf("unconstrained")>=0;if(i){if(t.handles!==2){throw new Error("noUiSlider ("+e+"): 'fixed' behaviour must be used with 2 handles")}_(t,t.start[1]-t.start[0])}if(l&&(t.margin||t.limit)){throw new Error("noUiSlider ("+e+"): 'unconstrained' behaviour cannot be used with margin or limit")}t.events={tap:n||o,drag:a,fixed:i,snap:o,hover:s,unconstrained:l}}function Y(t,r){if(r===false){return}if(r===true){t.tooltips=[];for(var n=0;n<t.handles;n++){t.tooltips.push(true)}}else{t.tooltips=c(r);if(t.tooltips.length!==t.handles){throw new Error("noUiSlider ("+e+"): must pass a formatter for all handles.")}t.tooltips.forEach((function(t){if(typeof t!=="boolean"&&(typeof t!=="object"||typeof t.to!=="function")){throw new Error("noUiSlider ("+e+"): 'tooltips' must be passed a formatter or 'false'.")}}))}}function I(e,t){e.ariaFormat=t;V(t)}function J(e,t){e.format=t;V(t)}function K(t,r){t.keyboardSupport=r;if(typeof r!=="boolean"){throw new Error("noUiSlider ("+e+"): 'keyboardSupport' option must be a boolean.")}}function W(e,t){e.documentElement=t}function G(t,r){if(typeof r!=="string"&&r!==false){throw new Error("noUiSlider ("+e+"): 'cssPrefix' must be a string or `false`.")}t.cssPrefix=r}function Q(t,r){if(typeof r!=="object"){throw new Error("noUiSlider ("+e+"): 'cssClasses' must be an object.")}if(typeof t.cssPrefix==="string"){t.cssClasses={};for(var n in r){if(!r.hasOwnProperty(n)){continue}t.cssClasses[n]=t.cssPrefix+r[n]}}else{t.cssClasses=r}}function Z(t){var r={margin:0,limit:0,padding:0,animate:true,animationDuration:300,ariaFormat:A,format:A};var a={step:{r:false,t:L},start:{r:true,t:T},connect:{r:true,t:H},direction:{r:true,t:q},snap:{r:false,t:z},animate:{r:false,t:D},animationDuration:{r:false,t:F},range:{r:true,t:j},orientation:{r:false,t:R},margin:{r:false,t:_},limit:{r:false,t:B},padding:{r:false,t:X},behaviour:{r:true,t:$},ariaFormat:{r:false,t:I},format:{r:false,t:J},tooltips:{r:false,t:Y},keyboardSupport:{r:true,t:K},documentElement:{r:false,t:W},cssPrefix:{r:true,t:G},cssClasses:{r:true,t:Q}};var i={connect:false,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:true,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};if(t.format&&!t.ariaFormat){t.ariaFormat=t.format}Object.keys(a).forEach((function(o){if(!n(t[o])&&i[o]===undefined){if(a[o].r){throw new Error("noUiSlider ("+e+"): '"+o+"' is required.")}return true}a[o].t(r,!n(t[o])?i[o]:t[o])}));r.pips=t.pips;var o=document.createElement("div");var s=o.style.msTransform!==undefined;var l=o.style.transform!==undefined;r.transformRule=l?"transform":s?"msTransform":"webkitTransform";var u=[["left","top"],["right","bottom"]];r.style=u[r.dir][r.ort];return r}function ee(t,n,o){var l=g();var p=y();var x=p&&b();var w=t;var S;var E;var C;var N;var P;var k=n.spectrum;var U=[];var O=[];var M=[];var A=0;var V={};var L;var j=t.ownerDocument;var T=n.documentElement||j.documentElement;var z=j.body;var D=-1;var F=0;var H=1;var R=2;var _=j.dir==="rtl"||n.ort===1?0:100;function B(e,t){var r=j.createElement("div");if(t){d(r,t)}e.appendChild(r);return r}function X(e,t){var r=B(e,n.cssClasses.origin);var a=B(r,n.cssClasses.handle);B(a,n.cssClasses.touchArea);a.setAttribute("data-handle",t);if(n.keyboardSupport){a.setAttribute("tabindex","0");a.addEventListener("keydown",(function(e){return me(e,t)}))}a.setAttribute("role","slider");a.setAttribute("aria-orientation",n.ort?"vertical":"horizontal");if(t===0){d(a,n.cssClasses.handleLower)}else if(t===n.handles-1){d(a,n.cssClasses.handleUpper)}return r}function q(e,t){if(!t){return false}return B(e,n.cssClasses.connect)}function $(e,t){var r=B(t,n.cssClasses.connects);E=[];C=[];C.push(q(r,e[0]));for(var a=0;a<n.handles;a++){E.push(X(t,a));M[a]=a;C.push(q(r,e[a+1]))}}function Y(e){d(e,n.cssClasses.target);if(n.dir===0){d(e,n.cssClasses.ltr)}else{d(e,n.cssClasses.rtl)}if(n.ort===0){d(e,n.cssClasses.horizontal)}else{d(e,n.cssClasses.vertical)}return B(e,n.cssClasses.base)}function I(e,t){if(!n.tooltips[t]){return false}return B(e.firstChild,n.cssClasses.tooltip)}function J(){return w.hasAttribute("disabled")}function K(e){var t=E[e];return t.hasAttribute("disabled")}function W(){if(P){ye("update.tooltips");P.forEach((function(e){if(e){r(e)}}));P=null}}function G(){W();P=E.map(I);be("update.tooltips",(function(e,t,r){if(!P[t]){return}var a=e[t];if(n.tooltips[t]!==true){a=n.tooltips[t].to(r[t])}P[t].innerHTML=a}))}function Q(){be("update",(function(e,t,r,a,i){M.forEach((function(e){var t=E[e];var a=we(O,e,0,true,true,true);var o=we(O,e,100,true,true,true);var s=i[e];var l=n.ariaFormat.to(r[e]);a=k.fromStepping(a).toFixed(1);o=k.fromStepping(o).toFixed(1);s=k.fromStepping(s).toFixed(1);t.children[0].setAttribute("aria-valuemin",a);t.children[0].setAttribute("aria-valuemax",o);t.children[0].setAttribute("aria-valuenow",s);t.children[0].setAttribute("aria-valuetext",l)}))}))}function ee(t,r,n){if(t==="range"||t==="steps"){return k.xVal}if(t==="count"){if(r<2){throw new Error("noUiSlider ("+e+"): 'values' (>= 2) required for mode 'count'.")}var a=r-1;var i=100/a;r=[];while(a--){r[a]=a*i}r.push(100);t="positions"}if(t==="positions"){return r.map((function(e){return k.fromStepping(n?k.getStep(e):e)}))}if(t==="values"){if(n){return r.map((function(e){return k.fromStepping(k.getStep(k.toStepping(e)))}))}return r}}function te(e,t,r){function n(e,t){return(e+t).toFixed(7)/1}var a={};var o=k.xVal[0];var s=k.xVal[k.xVal.length-1];var l=false;var u=false;var f=0;r=i(r.slice().sort((function(e,t){return e-t})));if(r[0]!==o){r.unshift(o);l=true}if(r[r.length-1]!==s){r.push(s);u=true}r.forEach((function(i,o){var s;var c;var p;var d=i;var v=r[o+1];var h;var m;var g;var b;var y;var x;var w;var S=t==="steps";if(S){s=k.xNumSteps[o]}if(!s){s=v-d}if(d===false||v===undefined){return}s=Math.max(s,1e-7);for(c=d;c<=v;c=n(c,s)){h=k.toStepping(c);m=h-f;y=m/e;x=Math.round(y);w=m/x;for(p=1;p<=x;p+=1){g=f+p*w;a[g.toFixed(5)]=[k.fromStepping(g),0]}b=r.indexOf(c)>-1?H:S?R:F;if(!o&&l){b=0}if(!(c===v&&u)){a[h.toFixed(5)]=[c,b]}f=h}}));return a}function re(e,t,r){var a=j.createElement("div");var i=[];i[F]=n.cssClasses.valueNormal;i[H]=n.cssClasses.valueLarge;i[R]=n.cssClasses.valueSub;var o=[];o[F]=n.cssClasses.markerNormal;o[H]=n.cssClasses.markerLarge;o[R]=n.cssClasses.markerSub;var s=[n.cssClasses.valueHorizontal,n.cssClasses.valueVertical];var l=[n.cssClasses.markerHorizontal,n.cssClasses.markerVertical];d(a,n.cssClasses.pips);d(a,n.ort===0?n.cssClasses.pipsHorizontal:n.cssClasses.pipsVertical);function u(e,t){var r=t===n.cssClasses.value;var a=r?s:l;var u=r?i:o;return t+" "+a[n.ort]+" "+u[e]}function f(e,i,o){o=t?t(i,o):o;if(o===D){return}var s=B(a,false);s.className=u(o,n.cssClasses.marker);s.style[n.style]=e+"%";if(o>F){s=B(a,false);s.className=u(o,n.cssClasses.value);s.setAttribute("data-value",i);s.style[n.style]=e+"%";s.innerHTML=r.to(i)}}Object.keys(e).forEach((function(t){f(t,e[t][0],e[t][1])}));return a}function ne(){if(N){r(N);N=null}}function ae(e){ne();var t=e.mode;var r=e.density||1;var n=e.filter||false;var a=e.values||false;var i=e.stepped||false;var o=ee(t,a,i);var s=te(r,t,o);var l=e.format||{to:Math.round};N=w.appendChild(re(s,n,l));return N}function ie(){var e=S.getBoundingClientRect();var t="offset"+["Width","Height"][n.ort];return n.ort===0?e.width||S[t]:e.height||S[t]}function oe(e,t,r,a){var i=function(i){i=se(i,a.pageOffset,a.target||t);if(!i){return false}if(J()&&!a.doNotReject){return false}if(h(w,n.cssClasses.tap)&&!a.doNotReject){return false}if(e===l.start&&i.buttons!==undefined&&i.buttons>1){return false}if(a.hover&&i.buttons){return false}if(!x){i.preventDefault()}i.calcPoint=i.points[n.ort];r(i,a)};var o=[];e.split(" ").forEach((function(e){t.addEventListener(e,i);o.push([e,i])}));return o}function se(e,t,r){var n=e.type.indexOf("touch")===0;var a=e.type.indexOf("mouse")===0;var i=e.type.indexOf("pointer")===0;var o;var s;if(e.type.indexOf("MSPointer")===0){i=true}if(n){var l=function(e){return e.target===r||r.contains(e.target)};if(e.type==="touchstart"){var u=Array.prototype.filter.call(e.touches,l);if(u.length>1){return false}o=u[0].pageX;s=u[0].pageY}else{var f=Array.prototype.find.call(e.changedTouches,l);if(!f){return false}o=f.pageX;s=f.pageY}}t=t||m(j);if(a||i){o=e.clientX+t.x;s=e.clientY+t.y}e.pageOffset=t;e.points=[o,s];e.cursor=a||i;return e}function le(e){var t=e-s(S,n.ort);var r=t*100/ie();r=f(r);return n.dir?100-r:r}function ue(e){var t=100;var r=false;E.forEach((function(n,a){if(K(a)){return}var i=O[a];var o=Math.abs(i-e);var s=o===100&&t===100;var l=o<t;var u=o<=t&&e>i;if(l||u||s){r=a;t=o}}));return r}function fe(e,t){if(e.type==="mouseout"&&e.target.nodeName==="HTML"&&e.relatedTarget===null){pe(e,t)}}function ce(e,t){if(navigator.appVersion.indexOf("MSIE 9")===-1&&e.buttons===0&&t.buttonsProperty!==0){return pe(e,t)}var r=(n.dir?-1:1)*(e.calcPoint-t.startCalcPoint);var a=r*100/t.baseSize;Ee(r>0,a,t.locations,t.handleNumbers)}function pe(e,t){if(t.handle){v(t.handle,n.cssClasses.active);A-=1}t.listeners.forEach((function(e){T.removeEventListener(e[0],e[1])}));if(A===0){v(w,n.cssClasses.drag);Pe();if(e.cursor){z.style.cursor="";z.removeEventListener("selectstart",a)}}t.handleNumbers.forEach((function(e){xe("change",e);xe("set",e);xe("end",e)}))}function de(e,t){if(t.handleNumbers.some(K)){return false}var r;if(t.handleNumbers.length===1){var i=E[t.handleNumbers[0]];r=i.children[0];A+=1;d(r,n.cssClasses.active)}e.stopPropagation();var o=[];var s=oe(l.move,T,ce,{target:e.target,handle:r,listeners:o,startCalcPoint:e.calcPoint,baseSize:ie(),pageOffset:e.pageOffset,handleNumbers:t.handleNumbers,buttonsProperty:e.buttons,locations:O.slice()});var u=oe(l.end,T,pe,{target:e.target,handle:r,listeners:o,doNotReject:true,handleNumbers:t.handleNumbers});var f=oe("mouseout",T,fe,{target:e.target,handle:r,listeners:o,doNotReject:true,handleNumbers:t.handleNumbers});o.push.apply(o,s.concat(u,f));if(e.cursor){z.style.cursor=getComputedStyle(e.target).cursor;if(E.length>1){d(w,n.cssClasses.drag)}z.addEventListener("selectstart",a,false)}t.handleNumbers.forEach((function(e){xe("start",e)}))}function ve(e){e.stopPropagation();var t=le(e.calcPoint);var r=ue(t);if(r===false){return false}if(!n.events.snap){u(w,n.cssClasses.tap,n.animationDuration)}ke(r,t,true,true);Pe();xe("slide",r,true);xe("update",r,true);xe("change",r,true);xe("set",r,true);if(n.events.snap){de(e,{handleNumbers:[r]})}}function he(e){var t=le(e.calcPoint);var r=k.getStep(t);var n=k.fromStepping(r);Object.keys(V).forEach((function(e){if("hover"===e.split(".")[0]){V[e].forEach((function(e){e.call(L,n)}))}}))}function me(e,t){if(J()||K(t)){return false}var r=["Left","Right"];var a=["Down","Up"];if(n.dir&&!n.ort){r.reverse()}else if(n.ort&&!n.dir){a.reverse()}var i=e.key.replace("Arrow","");var o=i===a[0]||i===r[0];var s=i===a[1]||i===r[1];if(!o&&!s){return true}e.preventDefault();var l=o?0:1;var u=Te(t);var f=u[l];if(f===null){return false}if(f===false){f=k.getDefaultStep(O[t],o,10)}f=Math.max(f,1e-7);f=(o?-1:1)*f;ke(t,k.toStepping(U[t]+f),true,true);xe("slide",t);xe("update",t);xe("change",t);xe("set",t);return false}function ge(e){if(!e.fixed){E.forEach((function(e,t){oe(l.start,e.children[0],de,{handleNumbers:[t]})}))}if(e.tap){oe(l.start,S,ve,{})}if(e.hover){oe(l.move,S,he,{hover:true})}if(e.drag){C.forEach((function(t,r){if(t===false||r===0||r===C.length-1){return}var a=E[r-1];var i=E[r];var o=[t];d(t,n.cssClasses.draggable);if(e.fixed){o.push(a.children[0]);o.push(i.children[0])}o.forEach((function(e){oe(l.start,e,de,{handles:[a,i],handleNumbers:[r-1,r]})}))}))}}function be(e,t){V[e]=V[e]||[];V[e].push(t);if(e.split(".")[0]==="update"){E.forEach((function(e,t){xe("update",t)}))}}function ye(e){var t=e&&e.split(".")[0];var r=t&&e.substring(t.length);Object.keys(V).forEach((function(e){var n=e.split(".")[0];var a=e.substring(n.length);if((!t||t===n)&&(!r||r===a)){delete V[e]}}))}function xe(e,t,r){Object.keys(V).forEach((function(a){var i=a.split(".")[0];if(e===i){V[a].forEach((function(e){e.call(L,U.map(n.format.to),t,U.slice(),r||false,O.slice())}))}}))}function we(e,t,r,a,i,o){if(E.length>1&&!n.events.unconstrained){if(a&&t>0){r=Math.max(r,e[t-1]+n.margin)}if(i&&t<E.length-1){r=Math.min(r,e[t+1]-n.margin)}}if(E.length>1&&n.limit){if(a&&t>0){r=Math.min(r,e[t-1]+n.limit)}if(i&&t<E.length-1){r=Math.max(r,e[t+1]-n.limit)}}if(n.padding){if(t===0){r=Math.max(r,n.padding[0])}if(t===E.length-1){r=Math.min(r,100-n.padding[1])}}r=k.getStep(r);r=f(r);if(r===e[t]&&!o){return false}return r}function Se(e,t){var r=n.ort;return(r?t:e)+", "+(r?e:t)}function Ee(e,t,r,n){var a=r.slice();var i=[!e,e];var o=[e,!e];n=n.slice();if(e){n.reverse()}if(n.length>1){n.forEach((function(e,r){var n=we(a,e,a[e]+t,i[r],o[r],false);if(n===false){t=0}else{t=n-a[e];a[e]=n}}))}else{i=o=[true]}var s=false;n.forEach((function(e,n){s=ke(e,r[e]+t,i[n],o[n])||s}));if(s){n.forEach((function(e){xe("update",e);xe("slide",e)}))}}function Ce(e,t){return n.dir?100-e-t:e}function Ne(e,t){O[e]=t;U[e]=k.fromStepping(t);var r=10*(Ce(t,0)-_);var a="translate("+Se(r+"%","0")+")";E[e].style[n.transformRule]=a;Ue(e);Ue(e+1)}function Pe(){M.forEach((function(e){var t=O[e]>50?-1:1;var r=3+(E.length+t*e);E[e].style.zIndex=r}))}function ke(e,t,r,n){t=we(O,e,t,r,n,false);if(t===false){return false}Ne(e,t);return true}function Ue(e){if(!C[e]){return}var t=0;var r=100;if(e!==0){t=O[e-1]}if(e!==C.length-1){r=O[e]}var a=r-t;var i="translate("+Se(Ce(t,a)+"%","0")+")";var o="scale("+Se(a/100,"1")+")";C[e].style[n.transformRule]=i+" "+o}function Oe(e,t){if(e===null||e===false||e===undefined){return O[t]}if(typeof e==="number"){e=String(e)}e=n.format.from(e);e=k.toStepping(e);if(e===false||isNaN(e)){return O[t]}return e}function Me(e,t){var r=c(e);var a=O[0]===undefined;t=t===undefined?true:!!t;if(n.animate&&!a){u(w,n.cssClasses.tap,n.animationDuration)}M.forEach((function(e){ke(e,Oe(r[e],e),true,false)}));var i=M.length===1?0:1;for(;i<M.length;++i){M.forEach((function(e){ke(e,O[e],true,true)}))}Pe();M.forEach((function(e){xe("update",e);if(r[e]!==null&&t){xe("set",e)}}))}function Ae(e){Me(n.start,e)}function Ve(t,r,n){t=Number(t);if(!(t>=0&&t<M.length)){throw new Error("noUiSlider ("+e+"): invalid handle number, got: "+t)}ke(t,Oe(r,t),true,true);xe("update",t);if(n){xe("set",t)}}function Le(){var e=U.map(n.format.to);if(e.length===1){return e[0]}return e}function je(){for(var e in n.cssClasses){if(!n.cssClasses.hasOwnProperty(e)){continue}v(w,n.cssClasses[e])}while(w.firstChild){w.removeChild(w.firstChild)}delete w.noUiSlider}function Te(e){var t=O[e];var r=k.getNearbySteps(t);var a=U[e];var i=r.thisStep.step;var o=null;if(n.snap){return[a-r.stepBefore.startValue||null,r.stepAfter.startValue-a||null]}if(i!==false){if(a+i>r.stepAfter.startValue){i=r.stepAfter.startValue-a}}if(a>r.thisStep.startValue){o=r.thisStep.step}else if(r.stepBefore.step===false){o=false}else{o=a-r.stepBefore.highestStep}if(t===100){i=null}else if(t===0){o=null}var s=k.countStepDecimals();if(i!==null&&i!==false){i=Number(i.toFixed(s))}if(o!==null&&o!==false){o=Number(o.toFixed(s))}return[o,i]}function ze(){return M.map(Te)}function De(e,t){var r=Le();var a=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];a.forEach((function(t){if(e[t]!==undefined){o[t]=e[t]}}));var i=Z(o);a.forEach((function(t){if(e[t]!==undefined){n[t]=i[t]}}));k=i.spectrum;n.margin=i.margin;n.limit=i.limit;n.padding=i.padding;if(n.pips){ae(n.pips)}else{ne()}if(n.tooltips){G()}else{W()}O=[];Me(e.start||r,t)}function Fe(){S=Y(w);$(n.connect,S);ge(n.events);Me(n.start);if(n.pips){ae(n.pips)}if(n.tooltips){G()}Q()}Fe();L={destroy:je,steps:ze,on:be,off:ye,get:Le,set:Me,setHandle:Ve,reset:Ae,__moveHandles:function(e,t,r){Ee(e,t,O,r)},options:o,updateOptions:De,target:w,removePips:ne,removeTooltips:W,pips:ae};return L}function te(t,r){if(!t||!t.nodeName){throw new Error("noUiSlider ("+e+"): create requires a single element, got: "+t)}if(t.noUiSlider){throw new Error("noUiSlider ("+e+"): Slider was already initialized.")}var n=Z(r,t);var a=ee(t,n,r);t.noUiSlider=a;return a}return{__spectrum:M,version:e,create:te}}))},210:function(e,t,r){(function t(n,a){if(true)e.exports=a(r(48));else{}})(typeof self!=="undefined"?self:this,(function(e){return function(e){var t={};function r(n){if(t[n]){return t[n].exports}var a=t[n]={i:n,l:false,exports:{}};e[n].call(a.exports,a,a.exports,r);a.l=true;return a.exports}r.m=e;r.c=t;r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};r.t=function(e,t){if(t&1)e=r(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="";return r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){"use strict";r.r(t);var n=r(0);var a=r.n(n);var i=function e(t,r,n){var a=n;var i=0;var o=t.length;while(a<r.length){var s=r[a];if(i<=0&&r.slice(a,a+o)===t){return a}else if(s==="\\"){a++}else if(s==="{"){i++}else if(s==="}"){i--}a++}return-1};var o=function e(t,r,n,a){var o=[];for(var s=0;s<t.length;s++){if(t[s].type==="text"){var l=t[s].data;var u=true;var f=0;var c=void 0;c=l.indexOf(r);if(c!==-1){f=c;o.push({type:"text",data:l.slice(0,f)});u=false}while(true){if(u){c=l.indexOf(r,f);if(c===-1){break}o.push({type:"text",data:l.slice(f,c)});f=c}else{c=i(n,l,f+r.length);if(c===-1){break}o.push({type:"math",data:l.slice(f+r.length,c),rawData:l.slice(f,c+n.length),display:a});f=c+n.length}u=!u}o.push({type:"text",data:l.slice(f)})}else{o.push(t[s])}}return o};var s=o;var l=function e(t,r){var n=[{type:"text",data:t}];for(var a=0;a<r.length;a++){var i=r[a];n=s(n,i.left,i.right,i.display||false)}return n};var u=function e(t,r){var n=l(t,r.delimiters);var i=document.createDocumentFragment();for(var o=0;o<n.length;o++){if(n[o].type==="text"){i.appendChild(document.createTextNode(n[o].data))}else{var s=document.createElement("span");var u=n[o].data;r.displayMode=n[o].display;try{if(r.preProcess){u=r.preProcess(u)}a.a.render(u,s,r)}catch(e){if(!(e instanceof a.a.ParseError)){throw e}r.errorCallback("KaTeX auto-render: Failed to parse `"+n[o].data+"` with ",e);i.appendChild(document.createTextNode(n[o].rawData));continue}i.appendChild(s)}}return i};var f=function e(t,r){for(var n=0;n<t.childNodes.length;n++){var a=t.childNodes[n];if(a.nodeType===3){var i=u(a.textContent,r);n+=i.childNodes.length-1;t.replaceChild(i,a)}else if(a.nodeType===1){(function(){var t=" "+a.className+" ";var n=r.ignoredTags.indexOf(a.nodeName.toLowerCase())===-1&&r.ignoredClasses.every((function(e){return t.indexOf(" "+e+" ")===-1}));if(n){e(a,r)}})()}}};var c=function e(t,r){if(!t){throw new Error("No element provided to render")}var n={};for(var a in r){if(r.hasOwnProperty(a)){n[a]=r[a]}}n.delimiters=n.delimiters||[{left:"$$",right:"$$",display:true},{left:"\\(",right:"\\)",display:false},{left:"\\[",right:"\\]",display:true}];n.ignoredTags=n.ignoredTags||["script","noscript","style","textarea","pre","code"];n.ignoredClasses=n.ignoredClasses||[];n.errorCallback=n.errorCallback||console.error;n.macros=n.macros||{};f(t,n)};var p=t["default"]=c}])["default"]}))}}]);
//# sourceMappingURL=vendors-viz-02-canvas-viz-02-escher-viz-02-graph-viz-02-huygens-clock.273f39e5cd9afdfb1c2c.js.map