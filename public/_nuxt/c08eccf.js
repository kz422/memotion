(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{223:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return v}));var r=n(574),o=n(1),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),v=Object(o.g)("v-card__title");r.a},608:function(t,e,n){var content=n(639);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("2295b958",content,!0,{sourceMap:!1})},609:function(t,e,n){var content=n(641);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6429d666",content,!0,{sourceMap:!1})},629:function(t,e,n){"use strict";n.r(e);n(8),n(9),n(177),n(10),n(178),n(14),n(15),n(11),n(12),n(41);var r=n(2),o=n(70),c=n(81);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={methods:d(d({deleteOverduePost:function(){var t=Date.now()-864e5;o.a.collection("posts").where("createdAtMs","<",t).get().then((function(t){t.forEach((function(t){var e=t.id;console.log("times up"),o.a.collection("posts").doc(e).delete()}))}))}},Object(c.b)(["setUser"])),{},{deletePost:function(t){confirm("削除してもよろしいですか？")&&o.a.collection("posts").doc(t).delete()},login:function(){var t=this;(new o.c.auth).signInAnonymously().then((function(e){var n=e.user;t.setUser(n)})).catch((function(t){alert(t)}))}}),computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},smallDisp:function(){return this.$vuetify.breakpoint.width<960}},mounted:function(){var t=this;o.a.collection("posts").where("category","==","怒り").orderBy("createdAt").onSnapshot((function(e){e.docChanges().forEach((function(e){var n=e.doc,r=t.posts.findIndex((function(t){return t.id===e.doc.id}));"added"===e.type&&t.posts.unshift(d({id:n.id},n.data())),"removed"===e.type&&t.posts.splice(r,1)}))})),this.login()},data:function(){return{posts:[],times:[],show:!1}},created:function(){var t=this;setInterval((function(){t.deleteOverduePost()}),1e4)}},f=(n(638),n(58)),m=n(60),h=n.n(m),_=n(574),w=n(223),y=n(594),x=n(595),O=n(598),C=n(211),j=n(139),A=n(88),k=n(591),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mb-10",attrs:{fluid:""}},[n("p",{staticClass:"pl-1"},[t._v("現在の投稿数"),n("br"),t._v(t._s(t.posts.length))]),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.posts,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[n("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[n("v-card",t._g(t._b({staticClass:"py-5 mx-auto",attrs:{"max-width":"400",rounded:"xl",align:"center",justify:"center"}},"v-card",c,!1),o),[n("v-card-title",[n("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-message-bulleted\n                ")]),t._v(" "),n("span",{staticClass:"title font-weight-light"},[t._v(t._s(e.title))])],1),t._v(" "),n("v-card-text",{staticClass:"headline font-weight-bold"},[t._v("\n                "+t._s(e.comment.slice(0,50))+" ...\n              ")]),t._v(" "),n("v-list-item",{staticClass:"grow"},[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v("mdi-account")]),t._v("\n                  "+t._s(e.name)+"\n                  ")],1)],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"end"}},[n("small",{staticClass:"subheading mr-5"},[t._v(t._s(e.createdAt))])])],1)],1)]}}],null,!0)},[t._v(" "),n("v-card",{staticClass:"pa-8",attrs:{align:"center",justify:"center",rounded:"xl",width:"500"}},[n("v-card-title",{staticClass:"pl-0"},[n("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-message-bulleted\n                ")]),t._v(" "),n("span",{staticClass:"title font-weight-light"},[t._v(t._s(e.title))])],1),t._v(" "),n("v-card-text",{staticClass:"\n                font-weight-light \n                text-body-2 \n                text-sm-body-1\n                text-md-body-1\n                text-lg-body-1\n                text-xl-body-1\n                post-comment \n                px-0\n                pt-1",attrs:{align:"left"}},[t._v(t._s(e.comment))]),t._v(" "),n("v-list-item",{staticClass:"grow"},[n("v-list-item-content",[n("v-list-item-title",{attrs:{align:"left"}},[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v("mdi-account")]),t._v("\n                  "+t._s(e.name)+"\n                  ")],1)],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"end"}},[n("small",{staticClass:"subheading mr-5"},[t._v(t._s(e.createdAt))])])],1),t._v(" "),t.isAuthenticated?n("v-icon",{attrs:{small:""},on:{click:function(n){return t.deletePost(e.id)}}},[t._v("mdi-trash-can")]):t._e()],1)],1)],1)})),1)],1)}),[],!1,null,"4c76ee7d",null);e.default=component.exports;h()(component,{VCard:_.a,VCardText:w.a,VCardTitle:w.b,VCol:y.a,VContainer:x.a,VDialog:O.a,VIcon:C.a,VListItem:j.a,VListItemContent:A.a,VListItemTitle:A.b,VRow:k.a})},638:function(t,e,n){"use strict";n(608)},639:function(t,e,n){(e=n(17)(!1)).push([t.i,".main-container[data-v-4c76ee7d]{text-align:center}textarea[data-v-4c76ee7d]{width:80%;margin:0 auto;border:1px solid #000}h3[data-v-4c76ee7d]{font-weight:400}.post-comment[data-v-4c76ee7d]{white-space:pre-wrap;word-wrap:break-word}.v-enter-active[data-v-4c76ee7d]{-webkit-transition:all .5s;transition:all .5s}.v-leave-active[data-v-4c76ee7d]{-webkit-transition:all 2s;transition:all 2s}.v-enter[data-v-4c76ee7d],.v-leave-to[data-v-4c76ee7d]{opacity:0}.v-move[data-v-4c76ee7d]{-webkit-transition:all .4s;transition:all .4s}.created-time[data-v-4c76ee7d]{color:grey;font-size:small}",""]),t.exports=e},640:function(t,e,n){"use strict";n(609)},641:function(t,e,n){(e=n(17)(!1)).push([t.i,'*[data-v-975a01b2],h1[data-v-975a01b2]{color:grey}h1[data-v-975a01b2]{font-family:"Oswald";font-weight:lighter;height:50px}.smalldisp[data-v-975a01b2]{text-align:center}',""]),t.exports=e},681:function(t,e,n){"use strict";n.r(e);var r=n(629),o=(n(70),{head:function(){return{title:"Anger"}},components:{Anger:r.default},computed:{smallDisp:function(){return this.$vuetify.breakpoint.width<960}}}),c=(n(640),n(58)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{smalldisp:this.smallDisp}},[e("h1",{staticClass:"pt-2 pl-3"},[this._v("Anger")]),this._v(" "),e("small",{staticClass:"pl-3"},[this._v('"怒り"')]),this._v(" "),e("div",[e("Anger")],1)])}),[],!1,null,"975a01b2",null);e.default=component.exports;installComponents(component,{Anger:n(629).default})}}]);