(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[190,246],{334:function(e,t,n){"use strict";n.r(t);var o=n(830);var r=n(861);var i=n.n(r);var s=n(796);t["default"]=Object(o["a"])({modes:{puzzle:{module:r["Elm"].ParsonsProblem.PuzzleMode,validInteractiveTypes:["submittable"],afterInitializing:s["default"]},static:{module:r["Elm"].ParsonsProblem.StaticMode,validInteractiveTypes:["playground"]},solution:{module:r["Elm"].ParsonsProblem.SolutionMode,validInteractiveTypes:["playground"]}}})},796:function(e,t,n){"use strict";n.r(t);n.d(t,"default",(function(){return d}));var o=n(848);var r=n.n(o);const i="dandy-draggable";const s="dandy-dragging";const a=".dandy-base";const c=".dandyDropZone";const l=".dandyDropBeacon";const u={subtree:true,childList:true,attributes:true,attributeOldValue:true,attributeFilter:[i]};function d(e){if(!e.ports.dandyIn){return()=>{}}let t=null;function n(n){const o=n;if(!o.currentTarget||!o.isPrimary||o.button!==0){return}p(e,o,t);o.target.releasePointerCapture(o.pointerId);const s=o.currentTarget.getBoundingClientRect();let a=o.clientX-s.left;let c=o.clientY-s.top;const l=y(o.currentTarget);if(l){const e=l.getBoundingClientRect();a=a+e.left;c=c+e.top}const u=new CustomEvent("dandydown",{detail:{clientX:o.clientX,clientY:o.clientY,offsetX:a,offsetY:c}});o.currentTarget.dispatchEvent(u);o.stopPropagation();o.preventDefault();document.addEventListener("pointermove",r);document.addEventListener("pointerup",i);document.addEventListener("pointercancel",i)}const o=new MutationObserver(e=>v(e,n));o.observe(e.root,u);f(e.root,n);const r=n=>{if(n.isPrimary){t=p(e,n,t);e.ports.dandyIn.send(n)}};const i=t=>{if(t.isPrimary){e.ports.dandyIn.send(t);e.ports.dandyIn.send({type:"cleardropzonesandbeacons"});document.removeEventListener("pointermove",r);document.removeEventListener("pointerup",i);document.removeEventListener("pointercancel",i);const n=e=>{e.stopPropagation()};document.addEventListener("click",n,true);setTimeout(()=>document.removeEventListener("click",n,true))}};const s=()=>{document.removeEventListener("pointermove",r);document.removeEventListener("pointerup",i);document.removeEventListener("pointercancel",i)};return s}function p(e,t,n){const o=e.root.querySelectorAll(".dandyDropBeacon");let r=null;let i=null;for(let e=0;e<o.length;e++){const n=o[e];const{left:s,right:a,top:c,bottom:l}=n.getBoundingClientRect();const u=(s+a)/2;const d=(c+l)/2;const p=Math.pow(t.clientX-u,2)+Math.pow(t.clientY-d,2);if(!r||p<r){r=p;i=n}}if(i&&i!==n){i.dispatchEvent(new Event("closestbeacon"))}return i}function v(e,t){e.forEach(e=>{if(e.type==="childList"){e.addedNodes.forEach(e=>f(e,t))}else if(e.type==="attributes"&&e.attributeName===i){b(e.target,t)}})}function f(e,t){if(!(e instanceof Element)){return}const n=e=>{e.addEventListener("pointerdown",t);e.addEventListener("touchstart",m)};const o=e.querySelectorAll(`[${i}]`);if(e.hasAttribute(i)){n(e)}o.forEach(n)}function b(e,t){const n=e;if(n.getAttribute(i)==="true"){n.addEventListener("pointerdown",t);n.addEventListener("touchstart",m)}else{n.removeEventListener("pointerdown",t);n.removeEventListener("touchstart",m)}}function m(e){e.preventDefault()}function g(e){const t=getComputedStyle(e);const n=t.getPropertyValue("transform");const o=t.getPropertyValue("perspective");const r=t.getPropertyValue("will-change");const i=t.getPropertyValue("filter");const s=t.getPropertyValue("contain");return n!=="none"||o!=="none"||r==="transform"||r==="perspective"||i!=="none"||s==="paint"}function h(e){if(g(e)){return e}if(e.parentElement){return h(e.parentElement)}return null}function y(e){const t=e.closest(a);if(t){return h(t)}return null}},830:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n.d(t,"b",(function(){return h}));var o=n(796);var r=n(850);var i=n(12);var s=n.n(i);var a=n(4);var c=n.n(a);var l=n(862);var u=n.n(l);if(false){}function d(e){return e==="submittable"||e==="auto-check"?e:null}function p(e){const t=t=>v(t,e);if(Object.values(e.modes).some(g)){const n=(t,n)=>f(t,n,e);return{createInteractive:t,createInteractiveSolvable:n}}return{createInteractive:t}}function v(e,{modes:t}){const n=t[e.authoredData.mode||"default"];const[o,r]=m(n,e,"playground");return r}function f(e,t,{modes:n}){const o=n[e.authoredData.mode||"default"];if(!o){throw new Error(`${o} is not a valid mode for this type of interactive.`)}const r=o.validInteractiveTypes.reduce((e,t)=>{const n=d(t);if(n!==null){e.push(n)}return e},[]);let i;if(r.length===0){throw new Error("This is not a solvable interactive.")}else if(r.length===1){i=r[0]}else{const t=d(e.authoredData.solvableType);if(!e.authoredData.solvableType){throw new Error(`This interactive can be either Submittable or Auto-Checked.\n        Please select one in the configuration for this interactive.`)}else if(t===null){throw new Error(`${e.authoredData.solvableType} is not a valid type for an Interactive Solvable.\n        Please make sure that the 'solvableType' attribute is set to 'auto-check' or 'submittable'.`)}else{i=t}}const[s,a]=m(o,e,i,{hasBeenSolved:t.hasBeenSolved});s.ports.solvableOut.subscribe(e=>E(t,e));return Object.assign({solvableType:i,checkAnswerPressed:()=>s.ports.solvableIn.send("checkAnswerPressed"),resetPressed:()=>s.ports.solvableIn.send("resetPressed")},a)}const b=["Macintosh","MacIntel","MacPPC","Mac68K"];function m(e,t,n,i){const s=document.getElementById(t.visualizationKey);if(!s){throw new Error(`No element found at ${t.visualizationKey}`)}else{s.innerHTML="";s.classList.add("viz-elm");s.classList.add("notranslate");const a=document.createElement("div");s.append(a);const c=b.includes(window.navigator.platform)?"cmd":"ctrl";const l=Object.assign(Object.assign(Object.assign(Object.assign({},t),{interactiveType:n}),i),{mainModifierKey:c,initialWidth:Math.floor(a.getBoundingClientRect().width)});const u=Object.assign(Object.assign({},e.module.init({flags:l,node:a})),{root:s});Object(r["setupAnalytics"])(u,t.slug);h(u,t.visualizationKey);y(u,t.onError);if(e.usesDandy){Object(o["default"])(u)}let d=null;if(e.afterInitializing){d=e.afterInitializing(u)}const p=()=>{u.ports.kill.send(null);if(d){d()}};const v=e=>{return new Promise(t=>{if(u.ports.getConfigValue&&u.ports.sendConfigValue){function n(e){u.ports.sendConfigValue.unsubscribe(n);t(e)}u.ports.sendConfigValue.subscribe(n);u.ports.getConfigValue.send(e)}else{return null}})};return[u,{getConfigValue:v,kill:p}]}}function g(e){return e.validInteractiveTypes.includes("auto-check")||e.validInteractiveTypes.includes("submittable")}function h(e,t){if(!e.ports.problemContainerEvents){return}a["$window"].on(i["EVT_QUIZ_POSITION_WILL_CHANGE"],()=>{e.ports.problemContainerEvents.send({eventType:"quizPositionWillChange"})});a["$window"].on(i["EVT_DAILYPROBLEM_MAINBODY_EXPANDED"],()=>{e.ports.problemContainerEvents.send({eventType:"dailyChallengeMainBodyExpanded"})})}function y(e,t){e.ports.loadingFailed.subscribe(e=>{if(t){t(new Error(e))}else{throw new Error(e)}})}function E({callbacks:e},t){switch(t.type){case"setCaption":e.setCaption(t.caption);break;case"saveState":e.saveState(t.state,t.solved);break;case"setSubmitButtonEnabled":e.setSubmitButtonEnabled(t.enabled);break;case"setResetButtonEnabled":e.setResetButtonEnabled(t.enabled);break}}}}]);
//# sourceMappingURL=viz-02-parsons-problem.bbaf1c07c50d9f6b2965.js.map