webpackJsonp([0],{"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("1SXq"),n=a("rGQh"),r=!1;var i=function(t){r||a("NjvP")},o=a("VU/8")(s.a,n.a,!1,i,"data-v-2a183b29",null);o.options.__file="pages/index.vue",e.default=o.exports},"1SXq":function(t,e,a){"use strict";var s=a("mtWM"),n=a.n(s);e.a={data:function(){return{days:15,forecastDays:2,changepointPriorScale:null,currency:null,currencyList:["USD","BTC","ETH","EUR","JPY"],changepointList:[.01,.02,.03,.04,.05,.06,.07],isLoading:!1,items:[],model:null,search:null}},asyncData:function(){n.a.get("https://radiant-forest-48616.herokuapp.com/ping").then(function(t){console.log("Server says:",t.data)})},methods:{requestPrices:function(){var t=this;return console.log(this.model,this.days,this.currency),n.a.get("https://api.coingecko.com/api/v3/coins/"+this.model+"/market_chart?vs_currency="+this.currency+"&days="+this.days).then(function(e){t.$store.commit("getOptions",{forecastDays:t.forecastDays,changepointPriorScale:t.changepointPriorScale,asset:t.model,currency:t.currency}),t.$store.commit("getPrices",e.data)})}},watch:{search:function(t){var e=this;this.items.length>0||(this.isLoading=!0,n.a.get("https://api.coingecko.com/api/v3/coins/list").then(function(t){e.items=t.data}).catch(function(t){console.log(t)}).finally(function(){return e.isLoading=!1}))}}}},"9stG":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".v-progress-circular[data-v-2a183b29]{margin:16px;margin:1rem}",""])},NjvP:function(t,e,a){var s=a("9stG");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("170cdae0",s,!1,{sourceMap:!1})},rGQh:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"align-content-space-around":"true",md6:""}},[a("v-flex",{staticClass:"mb-5",attrs:{xs12:"","align-center":"","justify-center":"",layout:"","text-xs-center":""}},[a("v-avatar",{attrs:{size:200,color:"grey lighten-4"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/Bud-Fox/live/master/bud.jpg",alt:"avatar"}})]),a("blockquote",{staticClass:"blockquote"},[null!=this.model?a("span",[t._v("“Forecast "),a("strong",[t._v(t._s(t.forecastDays))]),t._v(" days "),a("strong",[t._v(t._s(this.model.toUpperCase())+"/"+t._s(this.currency))]),t._v(", based on "),a("strong",[t._v(t._s(t.days))]),t._v(" days w/ changepoint of "),a("strong",[t._v(t._s(this.changepointPriorScale))]),t._v("?”")]):t._e(),a("footer",[a("small",[a("em",[t._v("—Bud Fox")])])])])],1),a("v-autocomplete",{staticClass:"mb-1",attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,clearable:"","item-text":"name","item-value":"id",label:"Asset",solo:"",outline:""},on:{"update:searchInput":function(e){t.search=e}},scopedSlots:t._u([{key:"selection",fn:function(e){var s=e.item;return[a("span",{domProps:{textContent:t._s(s.name)}})]}},{key:"item",fn:function(e){var s=e.item;e.tile;return[a("v-list-tile-avatar",{staticClass:"headline font-weight-light white--text",attrs:{color:"secondary"}},[t._v("\n        "+t._s(s.name.charAt(0))+"\n      ")]),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(s.name)}})],1)]}}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[a("template",{slot:"no-data"},[a("v-list-tile",[a("v-list-tile-title",[t._v("\n          Literally "),a("strong",[t._v("ANY")]),t._v(" cryptocurrency\n        ")])],1)],1)],2),a("v-select",{attrs:{items:t.currencyList,outline:"","return-object":"",label:"Currency","single-line":""},model:{value:t.currency,callback:function(e){t.currency=e},expression:"currency"}}),a("v-select",{attrs:{items:t.changepointList,outline:"",label:"Changepoint Prior Scale","return-object":"","single-line":""},model:{value:t.changepointPriorScale,callback:function(e){t.changepointPriorScale=e},expression:"changepointPriorScale"}}),a("v-flex",[a("v-slider",{attrs:{max:10,min:1,label:"Forecast days","thumb-label":"always"},model:{value:t.forecastDays,callback:function(e){t.forecastDays=e},expression:"forecastDays"}})],1),a("v-flex",[a("v-slider",{attrs:{max:60,min:1,label:"Based in how many days","thumb-label":"always"},model:{value:t.days,callback:function(e){t.days=e},expression:"days"}})],1),this.$store.state.loading?a("v-flex",{staticClass:"mb-5",attrs:{xs12:"","align-center":"","justify-center":"",layout:"","text-xs-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):a("v-flex",{attrs:{xs12:"","align-center":"","justify-center":"",layout:"","text-xs-center":""}},[a("v-btn",{attrs:{color:"secondary",large:"",fab:""},on:{click:t.requestPrices}},[t._v("Yeah")])],1)],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n}});