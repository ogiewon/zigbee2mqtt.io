(function(){"use strict";var e={9936:function(e,n,t){t(8324),t(1628),t(8242),t(4163);var o=t(5102),r=t(9269),i={class:"supported-devices"},l={class:"filters"},u={key:"no-results"};function a(e,n,t,a,c,s){var d=(0,r.up)("filters"),v=(0,r.up)("device"),f=(0,r.up)("infinite-scroll");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",l,[(0,r.Wm)(d,{modelValue:a.currentFilters,"onUpdate:modelValue":n[0]||(n[0]=function(e){return a.currentFilters=e})},null,8,["modelValue"])]),(0,r.Wm)(f,{onLoad:a.loadItemsByScroll},{default:(0,r.w5)((function(){return[(0,r.Wm)(o.W3,{class:"devices-list",tag:"div",name:"device"},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.devicesToShow,(function(e){return(0,r.wg)(),(0,r.j4)(v,{key:e.vendor+e.model,device:e,onClick:a.storePosition},null,8,["device","onClick"])})),128)),0===a.devicesToShow.length?((0,r.wg)(),(0,r.iD)("p",u,"No devices found.")):(0,r.kq)("",!0)]})),_:1})]})),_:1},8,["onLoad"])])}t(1669),t(8725),t(9497),t(9741),t(1590);var c=t(3201),s={class:"device"},d=["href"],v={class:"thumb"},f={class:"top-right"},p={class:"vendor"},m=(0,r.Uk)("White-Label Device"),h={key:0,class:"is-new"},w=(0,r.Uk)("new"),b=["href"],y={class:"desc"},g={class:"model"};function P(e,n,t,o,i,l){var u=(0,r.up)("q-tooltip"),a=(0,r.up)("q-icon");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("a",{class:"title",href:o.baseUri+t.device.link},(0,c.zw)(t.device.description),9,d),(0,r._)("div",v,[(0,r._)("div",f,[(0,r._)("div",null,[(0,r._)("div",p,[(0,r.Uk)((0,c.zw)(t.device.vendor),1),t.device.isWhiteLabel?((0,r.wg)(),(0,r.j4)(a,{key:0,name:"more"},{default:(0,r.w5)((function(){return[(0,r.Wm)(u,{self:"center end"},{default:(0,r.w5)((function(){return[m]})),_:1})]})),_:1})):(0,r.kq)("",!0)])])]),o.isNew?((0,r.wg)(),(0,r.iD)("div",h,[w,(0,r.Wm)(u,{self:"center start"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Added at "+(0,c.zw)(new Date(t.device.addedAt).toLocaleString()),1)]})),_:1})])):(0,r.kq)("",!0),(0,r._)("a",{class:"device-img",href:o.baseUri+t.device.link,style:(0,c.j5)({backgroundImage:"url("+o.baseUri+t.device.image+")"})},null,12,b)]),(0,r._)("div",y,[(0,r._)("div",g,"["+(0,c.zw)(t.device.model)+"]",1),(0,r.Uk)((0,c.zw)(t.device.exposes.join(", ")),1)])])}var _=t(6237),k={name:"Device",props:["device"],setup:function(e){var n="./";var t=(0,_.iH)(!1);return(0,r.YP)(e.device,(function(e){t.value=new Date(e.addedAt)>Date.now()-2592e6}),{immediate:!0}),{isNew:t,baseUri:n}}},I=t(7617),U=t(4633),Z=t(4806),x=t(1410),S=t.n(x);const F=(0,I.Z)(k,[["render",P]]);var H=F;S()(k,"components",{QIcon:U.Z,QTooltip:Z.Z});var V={class:"device-filters"},E={class:"vendor-filter"},O={class:"exposes-filter"},T={class:"search-filter"},q=(0,r.Uk)("RegEx support. E.g you can use"),D=(0,r._)("code",null," (wall|switch)",-1),j=(0,r.Uk)(" to search for wall OR switch.");function W(e,n,t,o,i,l){var u=(0,r.up)("multi-select"),a=(0,r.up)("q-icon"),c=(0,r.up)("q-tooltip"),s=(0,r.up)("q-input");return(0,r.wg)(),(0,r.iD)("div",V,[(0,r._)("div",E,[(0,r.Wm)(u,{label:"Vendor",options:e.vendors,modelValue:e.vendorFilter,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.vendorFilter=n})},null,8,["options","modelValue"])]),(0,r._)("div",O,[(0,r.Wm)(u,{label:"Exposes",options:e.exposes,modelValue:e.exposesFilter,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.exposesFilter=n})},null,8,["options","modelValue"])]),(0,r._)("div",T,[(0,r.Wm)(s,{modelValue:e.searchFilter,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.searchFilter=n}),filled:"",debounce:500,type:"search",placeholder:e.searchPlaceholder,label:e.searchFilter||"type to search"===e.searchPlaceholder?"Search":"Press / to search",onFocus:n[3]||(n[3]=function(n){return e.searchPlaceholder="type to search"}),onBlur:n[4]||(n[4]=function(n){return e.searchPlaceholder="Press / to search"}),clearable:""},{append:(0,r.w5)((function(){return[(0,r.Wm)(a,{name:"info"}),(0,r.Wm)(c,{offset:[0,15],self:"bottom middle"},{default:(0,r.w5)((function(){return[q,D,j]})),_:1})]})),_:1},8,["modelValue","placeholder","label"])])])}var C=(0,r.Uk)("No results");function Y(e,n,t,o,i,l){var u=this,a=(0,r.up)("q-item-section"),c=(0,r.up)("q-item"),s=(0,r.up)("q-select");return(0,r.wg)(),(0,r.j4)(s,{label:e.label,filled:"",clearable:"","use-chips":"","use-input":"","input-debounce":"0",options:e.filteredOptions,onFilter:e.filterFn,multiple:"","options-dense":"",onPopupHide:n[0]||(n[0]=function(n){return e.clearSearch(u)}),ref:"el","onUpdate:modelValue":e.hidePopup},{"no-option":(0,r.w5)((function(){return[(0,r.Wm)(c,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(a,{class:"text-grey"},{default:(0,r.w5)((function(){return[C]})),_:1})]})),_:1})]})),_:1},8,["label","options","onFilter","onUpdate:modelValue"])}t(2496),t(7120),t(7527);var L=(0,r.aZ)({name:"multi-select",props:["label","options"],inheritAttrs:!0,setup:function(e,n){var t=n.emit,o=n.attrs,i=(0,_.iH)(null),l=(0,_.iH)(e.options);((0,_.dq)(e.options)||(0,_.PG)(e.options))&&(0,r.YP)(e.options,(function(e){t("update:modelValue",o.modelValue.value.filter((function(n){return e.includes(n)})))}));var u=function(){i.value.hidePopup()};return{el:i,hidePopup:u,clearSearch:function(e){setTimeout((function(){e.$el.querySelector("input").value=""}),10)},filteredOptions:l,filterFn:function(n,t){t((function(){var t=n.toLowerCase();l.value=e.options.filter((function(e){return e.toLowerCase().includes(t)}))}))}}}}),A=t(6257),Q=t(5730),R=t(2278);const N=(0,I.Z)(L,[["render",Y]]);var z=N;S()(L,"components",{QSelect:A.Z,QItem:Q.Z,QItemSection:R.Z});t(6312),t(5785),t(2597),t(2057),t(860),t(7192),t(168);var K=window.ZIGBEE2MQTT_SUPPORTED_DEVICES,B=new Set,M=new Set;K.forEach((function(e){var n=e.exposes,t=e.vendor;M.add(t),n.forEach((function(e){return B.add(e)}))}));var G=function(e,n){return e.localeCompare(n,void 0,{sensitivity:"base"})},J=K,$=Array.from(M).sort(G),X=Array.from(B).sort(G),ee=function(e){return e.sort((function(e,n){var t=G(e.vendor,n.vendor);return 0===t?G(e.model,n.model):t}))},ne=t(821),te=(t(636),t(2058),t(8823),t(6055),t(1822),t(6699),{arrayKeys:[],parseHash:function(){var e=this,n=location.hash.substr(1).split("&").map((function(e){return e.split("=")})).map((function(n){var t=(0,ne.Z)(n,2),o=t[0],r=t[1];return e.arrayKeys.includes(o)?[o,r.split(",").map((function(e){return decodeURIComponent(e)}))]:[o,decodeURIComponent(r)]})).filter((function(e){var n=(0,ne.Z)(e,2),t=n[0],o=n[1];return t.length>0&&o.length>0}));return Object.fromEntries(n)},updateHash:function(e){var n=this,t=this.parseHash();Object.entries(e).forEach((function(e){var n=(0,ne.Z)(e,2),o=n[0],r=n[1];t[o]=r}));var o="#";Object.entries(t).forEach((function(e){var t=(0,ne.Z)(e,2),r=t[0],i=t[1];if(void 0!==i&&null!==i&&""!==i)if(n.arrayKeys.includes(r)){var l=i.map((function(e){return encodeURIComponent(e)})).join(",");o+="".concat(r,"=").concat(l,"&")}else o+="".concat(r,"=").concat(encodeURIComponent(i),"&")})),location.hash=o.substr(0,o.length-1)}});te.arrayKeys.push("v"),te.arrayKeys.push("e");var oe=(0,r.aZ)({name:"filters",components:{MultiSelect:z},setup:function(e,n){var t=n.emit,o=te.parseHash(),i=(0,_.iH)(o.e||null),l=(0,_.iH)(o.v||null),u=(0,_.iH)(o.s||null),a=function(e){return function(){Array.isArray(e.value)&&0===e.value.length&&(e.value=null)}},c=function(){te.updateHash({e:i.value,v:l.value,s:u.value}),i.value||l.value||u.value?t("update:modelValue",{exposes:i.value,vendors:l.value,search:u.value}):t("update:modelValue",null)};c(),(0,r.YP)(i,a(i)),(0,r.YP)(l,a(l)),(0,r.YP)(i,c),(0,r.YP)(l,c),(0,r.YP)(u,c);var s=function(e){"/"===e.key&&"INPUT"!==e.target.tagName&&(e.preventDefault(),document.querySelector(".search-filter input").focus())};return(0,r.bv)((function(){document.body.addEventListener("keypress",s)})),(0,r.Jd)((function(){document.removeEventListener("keypress",s)})),{searchPlaceholder:(0,_.iH)("Press / to search"),exposes:X,vendors:$,exposesFilter:i,vendorFilter:l,searchFilter:u}}}),re=t(6874);const ie=(0,I.Z)(oe,[["render",W]]);var le=ie;S()(oe,"components",{QInput:re.Z,QIcon:U.Z,QTooltip:Z.Z});t(438);function ue(e){var n,t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,r=!1;return function(){for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];n?r=!0:(e.apply(t,l),n=setTimeout((function(){n=void 0,r&&e.apply(t,l),r=!1}),o))}}var ae={name:"InfiniteScroll",props:{debounce:{default:350,type:Number},offset:{default:500,type:Number}},emits:["load"],setup:function(e,n){var t=n.slots,o=n.emit,i=(0,_.iH)(null),l=ue((function(){i.value&&i.value.getBoundingClientRect().bottom-window.innerHeight<e.offset&&o("load")}),e.debounce);return(0,r.bv)((function(){window.addEventListener("scroll",l)})),(0,r.Ah)((function(){window.removeEventListener("scroll",l)})),function(){return(0,r.h)("div",{class:"q-infinite-scroll",ref:i},t.default())}}},ce=t(2672);const se=ae;var de=se;S()(ae,"components",{QInfiniteScroll:ce.Z});t(2008),t(1254),t(5706);function ve(e,n){(0,r.YP)(e,(function(){if(e.value){var t=e.value,o=t.exposes,r=t.vendors,i=t.search,l=!1;if(i)try{l=new RegExp(i,"i")}catch(a){}var u=J.filter((function(e){return!(o&&!o.every((function(n){return e.exposes.includes(n)})))&&(!(r&&!r.includes(e.vendor))&&!(l&&!["model","vendor","description"].some((function(n){return l.test(e[n])}))))}));n.value=ee(u)}else n.value=J}),{immediate:!0})}var fe=t(5857),pe={name:"SupportedDevices",components:{InfiniteScroll:de,Filters:le,Device:H},setup:function(){var e=(0,_.iH)(null),n=(0,_.iH)(fe.Z.getItem("loadIndex")||1),t=(0,_.iH)([]),o=(0,_.iH)([]);(0,r.YP)(t,(function(){o.value=t.value.slice(0,20),n.value=1})),(0,r.YP)(n,(function(e){o.value=t.value.slice(0,20*e)})),ve(e,t);var i=function(){20*n.value>=t.value.length||n.value++},l=function(){fe.Z.set("zigbee2mqtt-devices-overview",{loadIndex:n.value,scrollTop:window.scrollY})};return(0,r.bv)((function(){var e=fe.Z.getItem("zigbee2mqtt-devices-overview")||{};e.loadIndex&&(n.value=e.loadIndex),e.scrollTop&&setTimeout((function(){window.scrollTo(null,e.scrollTop)}))})),{currentFilters:e,devicesToShow:o,loadItemsByScroll:i,storePosition:l}}};const me=(0,I.Z)(pe,[["render",a]]);var he=me,we=t(9858),be={config:{},plugins:{}};(0,o.ri)(he).use(we.Z,be).mount("#supported-devices-app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var l=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||l>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(u=!1,i<l&&(l=i));if(u){e.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,l=o[0],u=o[1],a=o[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var s=a(t)}for(n&&n(o);c<l.length;c++)i=l[c],t.o(e,i)&&e[i]&&e[i][0](),e[l[c]]=0;return t.O(s)},o=self["webpackChunkdevices_overview"]=self["webpackChunkdevices_overview"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(9936)}));o=t.O(o)})();
//# sourceMappingURL=app-legacy.js.map