(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{223:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return v}));var r=n(574),o=n(1),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),v=Object(o.g)("v-card__title");r.a},600:function(t,e,n){var content=n(604);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("706f4510",content,!0,{sourceMap:!1})},601:function(t,e,n){var content=n(606);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("25499bc1",content,!0,{sourceMap:!1})},602:function(t,e,n){"use strict";n.r(e);n(8),n(9),n(177),n(10),n(178),n(14),n(15),n(11),n(12),n(41);var r=n(2),o=n(70),c=n(81),l=n(179),d=n(58),v=Object(d.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg mt-5",staticStyle:{color:"gray"},attrs:{align:"center"}},[e("h2",[this._v("投稿がありません")])])}],!1,null,null,null).exports;function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{Bottoms:l.default,Nopost:v},methods:m({deleteOverduePost:function(){var t=Date.now()-864e5;o.a.collection("posts").where("createdAtMs","<",t).get().then((function(t){t.forEach((function(t){var e=t.id;console.log("times up"),o.a.collection("posts").doc(e).delete()}))}))},deletePost:function(t){confirm("削除してもよろしいですか？")&&o.a.collection("posts").doc(t).delete()}},Object(c.b)(["setUser"])),computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},smallDisp:function(){return this.$vuetify.breakpoint.width<960}},mounted:function(){var t=this;o.a.collection("posts").orderBy("createdAt").onSnapshot((function(e){e.docChanges().forEach((function(e){var n=e.doc,r=t.posts.findIndex((function(t){return t.id===e.doc.id}));"added"===e.type&&t.posts.unshift(m({id:n.id},n.data())),"removed"===e.type&&t.posts.splice(r,1)}))}))},data:function(){return{posts:[],times:[],show:!1}},created:function(){var t=this;setInterval((function(){t.deleteOverduePost()}),1e4)}},h=(n(603),n(605),n(60)),w=n.n(h),y=n(574),x=n(223),O=n(594),j=n(595),C=n(598),k=n(211),P=n(139),V=n(88),D=n(591),E=Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mb-10",attrs:{fluid:""}},[n("p",{staticClass:"pl-1",class:{smalldisp:t.smallDisp}},[t._v("現在の投稿数"),n("br"),t._v(t._s(t.posts.length))]),t._v(" "),n("transition",{attrs:{appear:""}},[n("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.posts,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[n("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[n("v-card",t._g(t._b({staticClass:"py-5 mx-auto",attrs:{"max-width":"400",rounded:"xl",align:"center",justify:"center"}},"v-card",c,!1),o),[n("v-card-title",[n("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-message-bulleted\n                ")]),t._v(" "),n("span",{staticClass:"title font-weight-light"},[t._v(t._s(e.title))])],1),t._v(" "),n("v-card-text",{staticClass:"headline font-weight-bold"},[t._v("\n                "+t._s(e.comment.slice(0,50))+" ...\n              ")]),t._v(" "),n("v-list-item",{staticClass:"grow"},[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v("mdi-account")]),t._v("\n                  "+t._s(e.name)+"\n                  ")],1)],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"end"}},[n("small",{staticClass:"subheading mr-5"},[t._v(t._s(e.createdAt))])])],1)],1)]}}],null,!0)},[t._v(" "),n("v-card",{staticClass:"pa-8",attrs:{align:"center",justify:"center",rounded:"xl",width:"500"}},[n("v-card-title",{staticClass:"pl-0"},[n("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-message-bulleted\n                ")]),t._v(" "),n("span",{staticClass:"title font-weight-light"},[t._v(t._s(e.title))])],1),t._v(" "),n("v-card-text",{staticClass:"\n                font-weight-light \n                text-body-2 \n                text-sm-body-1\n                text-md-body-1\n                text-lg-body-1\n                text-xl-body-1\n                post-comment \n                px-0\n                pt-1",attrs:{align:"left"}},[t._v(t._s(e.comment))]),t._v(" "),n("v-list-item",{staticClass:"grow"},[n("v-list-item-content",[n("v-list-item-title",{attrs:{align:"left"}},[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v("mdi-account")]),t._v("\n                  "+t._s(e.name)+"\n                  ")],1)],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"end"}},[n("small",{staticClass:"subheading mr-5"},[t._v(t._s(e.createdAt))])])],1)],1)],1)],1)})),1)],1)],1)}),[],!1,null,"43f73b22",null);e.default=E.exports;w()(E,{VCard:y.a,VCardText:x.a,VCardTitle:x.b,VCol:O.a,VContainer:j.a,VDialog:C.a,VIcon:k.a,VListItem:P.a,VListItemContent:V.a,VListItemTitle:V.b,VRow:D.a})},603:function(t,e,n){"use strict";n(600)},604:function(t,e,n){(e=n(17)(!1)).push([t.i,".smalldisp[data-v-43f73b22]{text-align:center;margin-top:0}*[data-v-43f73b22]{color:grey}textarea[data-v-43f73b22]{width:80%;margin:0 auto;border:1px solid #000}.post-comment[data-v-43f73b22]{white-space:pre-wrap;word-wrap:break-word}.v-enter-active[data-v-43f73b22],.v-leave-active[data-v-43f73b22]{-webkit-transition:all .5s;transition:all .5s}.v-enter[data-v-43f73b22],.v-leave-to[data-v-43f73b22]{opacity:0}.v-move[data-v-43f73b22]{-webkit-transition:all .4s;transition:all .4s}.created-time[data-v-43f73b22]{color:grey;font-size:small}",""]),t.exports=e},605:function(t,e,n){"use strict";n(601)},606:function(t,e,n){(e=n(17)(!1)).push([t.i,".smalldisp{text-align:center}",""]),t.exports=e},618:function(t,e,n){var content=n(659);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("3d38c81e",content,!0,{sourceMap:!1})},658:function(t,e,n){"use strict";n(618)},659:function(t,e,n){(e=n(17)(!1)).push([t.i,".main-container[data-v-a8d0ecd6]{text-align:center}textarea[data-v-a8d0ecd6]{width:80%;margin:0 auto;border:1px solid #000}h3[data-v-a8d0ecd6]{font-weight:400}.post-comment[data-v-a8d0ecd6]{white-space:pre-wrap;word-wrap:break-word}.v-enter-active[data-v-a8d0ecd6]{-webkit-transition:all .5s;transition:all .5s}.v-leave-active[data-v-a8d0ecd6]{-webkit-transition:all 2s;transition:all 2s}.v-enter[data-v-a8d0ecd6],.v-leave-to[data-v-a8d0ecd6]{opacity:0}.v-move[data-v-a8d0ecd6]{-webkit-transition:all .4s;transition:all .4s}.created-time[data-v-a8d0ecd6]{color:grey;font-size:small}",""]),t.exports=e},686:function(t,e,n){"use strict";n.r(e);var r={components:{Contents:n(602).default}},o=(n(658),n(58)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-container",attrs:{align:"center",justify:"center"}},[e("Post2")],1)}),[],!1,null,"a8d0ecd6",null);e.default=component.exports}}]);