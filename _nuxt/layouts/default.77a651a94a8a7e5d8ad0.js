webpackJsonp([2],{"8tbR":function(t,i,n){"use strict";i.a={data:function(){return{clipped:!1,drawer:!0,items:[{icon:"local_atm",title:"Ask to Bud",to:"/"},{icon:"business_center",title:"Answer",to:"/answer"}],miniVariant:!1,title:"Bud Fox"}}}},DLCH:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},on:{"update:miniVariant":function(i){t.miniVariant=i}},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[n("v-list",t._l(t.items,function(i,e){return n("v-list-tile",{key:e,attrs:{router:"",to:i.to,exact:""}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(i.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(i.title)}})],1)],1)}))],1),n("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(i){t.drawer=!t.drawer}}}),n("v-btn",{attrs:{icon:""},on:{click:function(i){i.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),n("v-btn",{attrs:{icon:""},on:{click:function(i){i.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-spacer")],1),n("v-content",[n("v-container",[n("nuxt")],1)],1),n("v-footer",{attrs:{app:""}},[n("span",[t._v("© "),n("a",{attrs:{href:"https://github.com/Bud-Fox"}},[t._v("Bud Fox")]),t._v(" - Lucas Draichi Inc.")])])],1)};e._withStripped=!0;var a={render:e,staticRenderFns:[]};i.a=a},Ma2J:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("8tbR"),a=n("DLCH"),r=n("VU/8")(e.a,a.a,!1,null,null,null);r.options.__file="layouts/default.vue",i.default=r.exports}});