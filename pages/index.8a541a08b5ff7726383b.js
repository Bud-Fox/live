webpackJsonp([1],{"+ptz":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"align-content-space-around":"true",md6:""}},[a("v-flex",{staticClass:"mb-5",attrs:{xs12:"","align-center":"","justify-center":"",layout:"","text-xs-center":""}},[a("v-avatar",{attrs:{size:200,color:"grey lighten-4"}},[a("img",{attrs:{src:"/bud.jpg",alt:"avatar"}})]),a("blockquote",{staticClass:"blockquote"},[t._v("\n      “Tell me what u wanna know Grodon.\n      "),null!=this.model?a("span",[a("br"),a("strong",[t._v(" Forecast "+t._s(t.forecastDays)+" days "+t._s(this.model)+"/"+t._s(this.currency)+", based on "+t._s(t.days)+" days w/ changepoint of "+t._s(this.changepointPriorScale)+"?")])]):t._e(),t._v("”\n      "),a("footer",[a("small",[a("em",[t._v("—Bud Fox")])])])])],1),a("v-autocomplete",{staticClass:"mb-1",attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,clearable:"","item-text":"name","item-value":"id",label:"Ex: Bitcoin",solo:"",outline:""},on:{"update:searchInput":function(e){t.search=e}},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[a("span",{domProps:{textContent:t._s(n.name)}})]}},{key:"item",fn:function(e){var n=e.item;e.tile;return[a("v-list-tile-avatar",{staticClass:"headline font-weight-light white--text",attrs:{color:"secondary"}},[t._v("\n        "+t._s(n.name.charAt(0))+"\n      ")]),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(n.name)}})],1)]}}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[a("template",{slot:"no-data"},[a("v-list-tile",[a("v-list-tile-title",[t._v("\n          Literally "),a("strong",[t._v("ANY")]),t._v(" cryptocurrency\n        ")])],1)],1)],2),a("v-select",{attrs:{items:t.currencyList,outline:"","return-object":"",label:"Ex: USD","single-line":""},model:{value:t.currency,callback:function(e){t.currency=e},expression:"currency"}}),a("v-select",{attrs:{items:t.changepointList,outline:"",label:"Changepoint Prior Scale","return-object":"","single-line":""},model:{value:t.changepointPriorScale,callback:function(e){t.changepointPriorScale=e},expression:"changepointPriorScale"}}),a("v-flex",[a("v-slider",{attrs:{max:100,min:1,label:"Forecast days","thumb-label":"always"},model:{value:t.forecastDays,callback:function(e){t.forecastDays=e},expression:"forecastDays"}})],1),a("v-flex",[a("v-slider",{attrs:{max:365,min:1,label:"Based in how many days","thumb-label":"always"},model:{value:t.days,callback:function(e){t.days=e},expression:"days"}})],1),this.$store.state.loading?a("v-flex",[a("h1",[t._v("loading")])]):a("v-flex",{attrs:{xs12:"","align-center":"","justify-center":"",layout:"","text-xs-center":""}},[a("v-btn",{attrs:{color:"secondary",large:"",fab:""},on:{click:t.requestPrices}},[t._v("Yeah")])],1)],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("1SXq"),s=a("+ptz"),i=a("VU/8")(n.a,s.a,!1,null,null,null);i.options.__file="pages/index.vue",e.default=i.exports},"1SXq":function(t,e,a){"use strict";var n=a("mtWM"),s=a.n(n);e.a={data:function(){return{days:15,forecastDays:3,changepointPriorScale:null,currency:null,currencyList:["USD","BTC","ETH","EUR","JPY"],changepointList:[.1,.09,.08,.07,.06,.05,.04,.03,.02,.01],isLoading:!1,items:[],model:null,search:null}},methods:{requestPrices:function(){var t=this;return console.log(this.model,this.days,this.currency),s.a.get("https://api.coingecko.com/api/v3/coins/"+this.model+"/market_chart?vs_currency="+this.currency+"&days="+this.days).then(function(e){t.$store.commit("getOptions",{forecastDays:t.forecastDays,changepointPriorScale:t.changepointPriorScale,asset:t.model,currency:t.currency}),t.$store.commit("getPrices",e.data)})}},watch:{search:function(t){var e=this;this.items.length>0||(this.isLoading=!0,s.a.get("https://api.coingecko.com/api/v3/coins/list").then(function(t){e.items=t.data}).catch(function(t){console.log(t)}).finally(function(){return e.isLoading=!1}))}}}}});