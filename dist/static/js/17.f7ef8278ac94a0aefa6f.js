webpackJsonp([17],{NE4y:function(t,n,a){"use strict";var e={data:function(){return{memuData:this.pl.menu,h2Id:null,menuPath:null,showArray:[!0,!0,!0,!0],suibain:!0,color:["#02ffd0","#e09144","#50c6ea"]}},watch:{h2Id:function(t){},$route:function(t){this.menuPath=t.name}},mounted:function(){this.menuPath=this.$route.name,this.getNav()},methods:{checkH2:function(t){this.h2Id=t},checklast:function(t){this.$router.push({name:t}),this.$store.commit("getKey",{id:0,name:t})},getNav:function(){var t=this,n=new FormData;n.append("token",this.$store.state.token);var a=n,e=this.Global.aport1+"/fun/getMyNavigation";this.$api.post(e,a,function(n){n.success&&(t.memuData=n.data)})},getHS:function(t){this.showArray[t]=!this.showArray[t],this.suibain=!this.suibain,console.log(this.showArray[t])}}},s={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"side_nav"},t._l(t.memuData,function(n,e){return a("div",{key:e,staticClass:"side_nav_item"},[a("span",{staticStyle:{display:"none"}},[t._v("\n          "+t._s(t.suibain)+"\n    ")]),t._v(" "),a("div",{staticClass:"h1",on:{click:function(n){t.getHS(e)}}},[a("i",{class:n.icon,style:{color:t.color[e]}}),t._v(" "),a("span",[t._v(t._s(n.mc))])]),t._v(" "),t._l(n.children,function(n,s){return t.showArray[e]?a("div",{key:s,staticClass:"h2",class:{h2checked:t.h2Id==n.dm},on:{mouseover:function(a){t.checkH2(n.dm)},mouseout:function(n){t.h2Id=null}}},[a("i",{style:{background:t.color[e]}}),t._v(" "),a("span",{staticClass:"hand",staticStyle:{"font-size":"15px","padding-left":"10px"}},[t._v("● "+t._s(n.mc))]),t._v(" "),t.h2Id==n.dm&&n.children.length?a("div",{staticClass:"h3"},t._l(n.children,function(n,e){return a("div",{key:e,staticClass:"h3_content"},[n.children?t._e():a("div",[a("div",{staticClass:"h3_2",class:{h3_2check:t.menuPath==n.url},on:{click:function(a){t.checklast(n.url)}}},[a("i",{staticClass:"el-icon-caret-right",staticStyle:{color:"#a3a7a8"}}),t._v(t._s(n.mc))])]),t._v(" "),n.children?a("div",[a("div",{staticClass:"h3_1"},[t._v(t._s(n.mc))]),t._v(" "),a("el-row",{attrs:{gutter:2}},t._l(n.children,function(n,e){return a("div",{key:e,staticClass:"h3_2",class:{h3_2check:t.menuPath==n.url},on:{click:function(a){t.checklast(n.url)}}},[a("el-col",{attrs:{span:11}},[a("i",{staticClass:"el-icon-caret-right",staticStyle:{color:"#a3a7a8"}}),t._v(t._s(n.mc)+"\n                ")])],1)}),0)],1):t._e()])}),0):t._e()]):t._e()})],2)}),0)},staticRenderFns:[]};var i=a("VU/8")(e,s,!1,function(t){a("WKt6")},"data-v-946db80a",null);n.a=i.exports},TOKn:function(t,n){},WKt6:function(t,n){},dAjm:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={components:{NAV:a("NE4y").a},mounted:function(){console.log(this.Global.indexstate),0!=this.Global.indexstate&&(this.Global.indexstate=0,window.location.reload());var t=document.getElementById("index_iframe"),n=document.documentElement.clientWidth,a=document.documentElement.clientHeight;t.style.width=n+"px",t.style.height=a+"px",this.getNavmune(),this.iURL=window.IPConfig.IP+"/api-reporter/home/index?token="+this.$store.state.token,console.log("this.iURL",this.iURL)},data:function(){return{nav1Id:0,nav1:this.pl.menu,color:["#02ffd0","#e09144","#50c6ea"],navShow:!1,iURL:"",nav2Id:0,nav2:[],nav3Id:0,nav3:[],menuPath:null}},methods:{getNav:function(t,n){this.navShow=!0,this.nav1Id=t.dm,this.nav2=t.children,this.getNav2(this.nav2[0])},getNav2:function(t){this.nav2Id=t.dm,this.nav3=t.children},getNavmune:function(){var t=this,n=new FormData;n.append("token",this.$store.state.token);var a=n,e=this.Global.aport1+"/fun/getMyNavigation";this.$api.post(e,a,function(n){n.success&&(t.nav1=n.data)})}}},s={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"bg"},[a("div",{staticClass:"index_nav_1"},t._l(t.nav1,function(n,e){return a("div",{staticClass:"nav_1",class:{nav_1_check:t.nav1Id==n.dm},on:{mouseover:function(a){t.getNav(n,e)}}},[a("i",{class:n.icon,style:{color:t.color[e]}}),t._v(" "),a("span",[t._v(t._s(n.mc))])])}),0),t._v(" "),t.navShow?a("div",{staticClass:"index_nav"},[a("div",{staticClass:"index_nav2"},t._l(t.nav2,function(n,e){return a("div",{staticClass:"index_nav2_box",class:{nav_2_check:t.nav2Id==n.dm},staticStyle:{"font-size":"15px"},on:{click:function(a){t.getNav2(n)}}},[t._v("\n        ● "+t._s(n.mc)+"\n      ")])}),0),t._v(" "),a("div",{staticClass:"index_nav3"},t._l(t.nav3,function(n,e){return a("div",{staticClass:"index_nav3_box",class:{nav_3_check:t.nav3Id==n.dm}},[n.children?t._e():a("div",[a("router-link",{staticClass:"h3_2",class:{h3_2check:t.menuPath==n.url},attrs:{to:{name:n.url}}},[a("i",{staticClass:"el-icon-caret-right",staticStyle:{color:"#a3a7a8"}}),t._v(t._s(n.mc))])],1),t._v(" "),n.children?a("div",[a("div",{staticClass:"h3_1"},[t._v(t._s(n.mc))]),t._v(" "),a("el-row",{attrs:{gutter:2}},t._l(n.children,function(n,e){return a("router-link",{key:e,staticClass:"h3_2",class:{h3_2check:t.menuPath==n.url},attrs:{to:{name:n.url}}},[a("el-col",{attrs:{span:12}},[a("i",{staticClass:"el-icon-caret-right",staticStyle:{color:"#a3a7a8"}}),t._v(t._s(n.mc)+"\n                ")])],1)}),1)],1):t._e()])}),0)]):t._e(),t._v(" "),a("div",{staticClass:"index_main",on:{mouseover:function(n){t.navShow=!1}}},[a("iframe",{staticStyle:{"min-height":"1100px"},attrs:{id:"index_iframe",frameborder:"0",name:"showHere",scrolling:"no",src:t.iURL}})])])},staticRenderFns:[]};var i=a("VU/8")(e,s,!1,function(t){a("TOKn")},"data-v-5f57384f",null);n.default=i.exports}});
//# sourceMappingURL=17.f7ef8278ac94a0aefa6f.js.map