/*! For license information please see PersonalDataExport.eedf8633e11a1045552e.js.LICENSE */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[92],{1093:function(t,e,a){"use strict";var n=a(901);var i=a.n(n);var s=i.a},1094:function(t,e,a){e=t.exports=a(14)(false);e.push([t.i,'@use "sass:map";\n.no-scroll[data-v-1d8651cc] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.section-header[data-v-1d8651cc] {\n  border-bottom: 1px solid #899098;\n  padding-bottom: 5px;\n  margin-bottom: 16px;\n}\n.section-header h1[data-v-1d8651cc] {\n    font-size: 22px;\n    line-height: 1.4em;\n    font-weight: 500;\n    margin-bottom: 16px;\n}\n.acct-settings[data-v-1d8651cc] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 24px;\n}\n.acct-settings .col-9[data-v-1d8651cc] {\n    width: 876px;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.acct-settings .col-9[data-v-1d8651cc] {\n        width: 704px;\n}\n}\n.acct-settings .sidebar[data-v-1d8651cc] {\n    padding: 8px 0;\n    margin-top: 50px;\n    border: 1px solid #B6BEC7;\n    border-width: 1px 0;\n    width: 276px;\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.acct-settings .sidebar[data-v-1d8651cc] {\n        width: 224px;\n}\n}\n.acct-settings .sidebar ul[data-v-1d8651cc] {\n      margin: 0;\n}\n.acct-settings .sidebar ul a[data-v-1d8651cc] {\n        display: block;\n        color: #5D7E8E;\n        font-size: 13px;\n        line-height: 32px;\n}\n.acct-settings .sidebar ul a[data-v-1d8651cc]:focus, .acct-settings .sidebar ul a[data-v-1d8651cc]:hover {\n          color: #0277BD;\n}\n.acct-settings .sidebar ul a.active[data-v-1d8651cc] {\n          color: #1F1F1F;\n          font-weight: bold;\n}\n.acct-settings #already-logged-in[data-v-1d8651cc] {\n    padding: 0 0 15px 0;\n    margin: 0 0 15px 0;\n    border-bottom: 1px solid #B6BEC7;\n}\n.acct-settings #already-logged-in p[data-v-1d8651cc] {\n      margin: 0;\n}\n.acct-settings .back-buttons[data-v-1d8651cc] {\n    margin-bottom: 24px;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 1.2em;\n    color: #0277BD;\n    text-align: right;\n    position: relative;\n}\n.acct-settings .back-buttons .chevron[data-v-1d8651cc] {\n      position: absolute;\n      left: 0;\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n}\n',""])},1095:function(t,e,a){var n=a(2151);if(typeof n==="string")n=[[t.i,n,""]];if(n.locals)t.exports=n.locals;var i=a(15).default;var s=i("ef504b9e",n,false,{});if(false){}},1311:function(t,e,a){"use strict";var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"container clearfix",attrs:{id:"wrapper"}},[a("div",{staticClass:"acct-settings"},[a("div",{staticClass:"col-9"},[t.isMobile(t.$mq)?a("div",{staticClass:"back-buttons"},[a("router-link",{attrs:{to:{name:"accountsettings_nav"}}},[a("span",{staticClass:"b-sprite-account-chevron-right-dark-blue-bold inline chevron"}),t._v(" "),a("span",{staticClass:"done"},[t._v("Done")])])],1):t._e(),t._v(" "),a("div",{staticClass:"section-header"},[a("h1",[t._v(t._s(t.title))])]),t._v(" "),t._t("default")],2),t._v(" "),!t.isMobile(t.$mq)?a("div",{staticClass:"sidebar col-3"},[a("ul",{staticClass:"unstyled"},t._l(t.links,(function(e){return a("li",{key:e.name},[e.name!=="user_content_download"||t.featureSwitches.enable_user_content_download_page?a("router-link",{class:{active:t.$route.name===e.name},attrs:{to:{name:e.name}}},[t._v("\n            "+t._s(e.title)+"\n          ")]):t._e()],1)})),0)]):t._e()])])};var i=[];n._withStripped=true;var s=a(0);var r=a(3);var o=a(1);var c=a(9);let l=class t extends r["default"]{constructor(){super(...arguments);this.links=[{name:"avatar_change",title:"Avatar"},{name:"account_personalinfo",title:"Personal info"},{name:"socialaccount_connections",title:"Account"},{name:"account_change_password",title:"Password"},{name:"account_email",title:"Email address"},{name:"account_emailpreferences",title:"Email & notifications"},{name:"account_selecttimezone",title:"Timezone"},{name:"user_content_download",title:"Download your content"},{name:"payment_subscription_settings",title:"Subscription"},{name:"personal_data_export_page",title:"Export your data"}]}};Object(s["b"])([Object(o["c"])({default:"Account Settings"})],l.prototype,"title",void 0);l=Object(s["b"])([Object(o["a"])({computed:Object.assign(Object.assign({},Object(c["mapGetters"])("pageHeader",["isMobile"])),Object(c["mapGetters"])("globals",["featureSwitches"]))})],l);var d=l;var p=d;var u=a(1093);var v=a(5);var f=Object(v["a"])(p,n,i,false,null,"1d8651cc",null);if(false){var h}f.options.__file="frontend/views/account/AccountBase.vue";var m=e["a"]=f.exports},2150:function(t,e,a){"use strict";var n=a(1095);var i=a.n(n);var s=i.a},2151:function(t,e,a){e=t.exports=a(14)(false);e.push([t.i,'@use "sass:map";\n.no-scroll[data-v-49a5fcc0] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.underline[data-v-49a5fcc0] {\n  color: var(--color-text-primary);\n  text-decoration: underline;\n}\n.underline[data-v-49a5fcc0]:hover {\n    color: var(--color-text-primary);\n    text-decoration: none;\n}\n.btn.btn-alert[data-v-49a5fcc0],\n.btn.btn-alert[data-v-49a5fcc0]:focus,\n.btn.btn-alert[data-v-49a5fcc0]:hover {\n  color: #E91E63;\n}\n.delete-account-heading[data-v-49a5fcc0] {\n  font-size: 22px;\n  line-height: 1.4em;\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n',""])},2591:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("AccountBase",{attrs:{title:"Export your data"}},[t.exportState==="ready"?a("div",[a("p",[t._v("Your export is done!")]),t._v(" "),a("p",[a("a",{staticClass:"btn",attrs:{href:t.signed_url}},[t._v("\n        Download your data\n      ")])])]):t.exportState==="exporting"?a("div",[a("p",{staticClass:"spinner"}),t._v(" "),a("p",[t._v("\n      Your export has started. This usually takes a few hours\n      (started "+t._s(t.startTime)+").\n    ")]),t._v(" "),a("p",[t._v("\n      You can close this window and come back any time in the next 7 days to\n      download your data.\n    ")]),t._v(" "),a("p",[t._v("\n      We will also send you an email at "+t._s(t.user.email)+" to let\n      you know when it's ready.\n    ")])]):t.exportState!==undefined?a("div",[a("p",[t._v("Start exporting your data regarding your usage of Brilliant.")]),t._v(" "),a("p",[a("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){e.preventDefault();return t.startExporting(e)}}},[t._v("\n        Start exporting your data\n      ")])])]):t._e(),t._v(" "),t.featureSwitches.enable_saved_sets_exporter&&t.exist?a("p",[a("a",{staticClass:"underline",attrs:{href:t.url}},[t._v("\n      Export your old saved sets")]),t._v(" "),a("br"),a("br")]):t._e(),t._v(" "),t.exportState!=="exporting"?a("div",[a("div",{staticClass:"delete-account-heading"},[t._v("Delete your account and data")]),t._v(" "),a("hr"),t._v(" "),t.user.has_brilliant_premium?a("div",[a("p",[t._v("You have an active Premium subscription.")]),t._v(" "),a("p",[t._v("If you delete your account, we will NOT be able to grant you a refund for any of your past transactions.")]),t._v(" "),!t.showDeleteAccount?a("div",{staticClass:"btn btn-alert",on:{click:t.updateShowDeleteAccount}},[t._v("\n        Continue?\n      ")]):t._e()]):t._e(),t._v(" "),t.showDeleteAccount|!t.user.has_brilliant_premium?a("div",[a("p",[t._v("\n        Delete your account, and all your data including account, profile,\n        and analytics data.\n      ")]),t._v(" "),a("p",[a("router-link",{staticClass:"btn btn-alert",attrs:{to:{name:"accountsettings_perma_delete"}}},[t._v("\n          Delete your account and data\n        ")])],1)]):t._e()]):t._e(),t._v(" "),a("ChurnTrackingBlock")],1)};var i=[];n._withStripped=true;var s=a(0);var r=a(3);var o=a(1);var c=a(9);var l=a(127);var d=a(1311);var p=a(959);let u=class t extends r["default"]{constructor(){super(...arguments);this.showDeleteAccount=false;this.startTime=""}updateShowDeleteAccount(){this.showDeleteAccount=true}startExporting(){this.$store.dispatch("exportData/startExporting");if(this.startTime===""){this.startTime=(new Date).toLocaleString()}}mounted(){if(this.exportState==="exporting"){setTimeout(()=>{this.$store.dispatch("exportData/checkExportState")},l["b"])}if(this.startedTime){this.startTime=this.startedTime}}};u=Object(s["b"])([Object(o["a"])({components:{AccountBase:d["a"],ChurnTrackingBlock:p["a"]},computed:Object.assign(Object.assign(Object.assign(Object.assign({},Object(c["mapState"])("exportData",["user","signed_url","started_time"])),Object(c["mapGetters"])("globals",["featureSwitches"])),Object(c["mapGetters"])("exportData",["exportState","startedTime"])),Object(c["mapState"])("savedSets",["exist","url"])),metaInfo(){return{title:"Export your data | Account Settings"}}})],u);var v=u;var f=v;var h=a(2150);var m=a(5);var _=Object(m["a"])(f,n,i,false,null,"49a5fcc0",null);if(false){var b}_.options.__file="frontend/views/account/PersonalDataExport.vue";var g=e["default"]=_.exports},901:function(t,e,a){var n=a(1094);if(typeof n==="string")n=[[t.i,n,""]];if(n.locals)t.exports=n.locals;var i=a(15).default;var s=i("b03b730e",n,false,{});if(false){}},952:function(t,e,a){"use strict";var n={name:"NoSsr",functional:true,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function t(e,a){var n=a.parent;var i=a.slots;var s=a.props;var r=i();var o=r.default;if(o===void 0)o=[];var c=r.placeholder;if(n._isMounted){return o}n.$once("hook:mounted",(function(){n.$forceUpdate()}));if(s.placeholderTag&&(s.placeholder||c)){return e(s.placeholderTag,{class:["no-ssr-placeholder"]},s.placeholder||c)}return o.length>0?o.map((function(){return e(false)})):e(false)}};t.exports=n},959:function(t,e,a){"use strict";var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("no-ssr",[t.token?a("script",{attrs:{type:"application/javascript",id:"profitwell-js","data-pw-auth":t.token,onload:t.startProfitwell}},[t._v("\n    (function(i,s,o,g,r,a,m){i[o]=i[o]||function(){(i[o].q=i[o].q||[]).push(arguments)};\n    a=s.createElement(g);m=s.getElementsByTagName(g)[0];a.async=1;a.src=r+'?auth='+\n    s.getElementById(o+'-js').getAttribute('data-pw-auth');m.parentNode.insertBefore(a,m);\n    })(window,document,'profitwell','script','https://public.profitwell.com/js/profitwell.js');\n  ")]):t._e()])};var i=[];n._withStripped=true;var s=a(0);var r=a(1);var o=a(9);const c=a(952);let l=class t extends r["e"]{mounted(){return Object(s["a"])(this,void 0,void 0,(function*(){if(this.token){yield this.startProfitwell()}}))}startProfitwell(){return Object(s["a"])(this,void 0,void 0,(function*(){if(!this.loaded_profitwell_snippet){yield this.$store.dispatch("globals/loadProfitwellSnippet");window.profitwell("start",{})}yield this.postUserEmailToProfitwell()}))}postUserEmailToProfitwell(){return Object(s["a"])(this,void 0,void 0,(function*(){if(this.isAuthenticated&&this.loaded_profitwell_snippet&&!this.posted_profitwell_user_email){yield this.$store.dispatch("globals/setProfitwellUserEmailAsPosted");window.profitwell("user_email",this.user.email)}}))}};l=Object(s["b"])([Object(r["a"])({computed:Object.assign(Object.assign(Object.assign({},Object(o["mapState"])("globals",["user","loaded_profitwell_snippet","posted_profitwell_user_email"])),Object(o["mapState"])("profitwellApiToken",["token"])),Object(o["mapGetters"])("globals",["isAuthenticated"])),components:{"no-ssr":c}})],l);var d=l;var p=d;var u=a(5);var v=Object(u["a"])(p,n,i,false,null,null,null);if(false){var f}v.options.__file="frontend/components/util/ChurnTrackingBlock.vue";var h=e["a"]=v.exports}}]);
//# sourceMappingURL=PersonalDataExport.eedf8633e11a1045552e.js.map