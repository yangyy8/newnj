webpackJsonp([71],{nz1C:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("I9qK"),a={inject:["reload"],data:function(){return{cities1:[],cities2:[],cities3:[],checkedCities1:[],checkedCities2:[],checkedCities3:[],card2:!1,card1:!1,input3:"",name2:"",name3:"",cshow:!0,val1:"",val3:"",val01:"",val03:""}},mounted:function(){this.$store.dispatch("getGjdq"),this.$store.dispatch("getQzzl"),this.getlist()},methods:{getlist:function(){var t=this;this.$api.get(this.Global.aport7+"/drools/getAllModels",null,function(e){t.cities1=e.data;for(var s=e.data,i=0;i<s.length;i++)"1"==s[i].sfyx&&t.checkedCities1.push(s[i].id)})},getZJ:function(t,e,s){var i=this;if(1==e){this.val1=t,this.val3=s,this.name2=s,this.cities2=[];var a={args:t};this.$api.get(this.Global.aport7+"/drools/getRules",a,function(t){i.cities2=t.data;for(var e=t.data,s=0;s<e.length;s++)"1"==e[s].sfyx&&i.checkedCities2.push(e[s].id)}),this.card1=!0,this.card2=!1}else{this.val01=t,this.val03=s,this.name3=s,this.cities3=[];var l={args:t};this.$api.get(this.Global.aport7+"/drools/getLable",l,function(t){var e=t.data;i.cshow=!0;for(var s=0;s<e.length;s++){i.cshow=!1,i.card2=!0;var a={};if(a.bjmc=e[s].bjmc,a.bjsm=e[s].bjsm,e[s].bjmc.indexOf("GJDQ")>=0||e[s].bjmc.indexOf("QZZL")>=0||e[s].bjmc.indexOf("ZJZL")>=0){var l=e[s].bjz.replace(/\"/g,""),c=l.substring(1,l.length-1).split(",");a.bjz=c}else a.bjz=e[s].bjz;a.cjr=e[s].cjr,a.cjsj=e[s].cjsj,a.gxr=e[s].gxr,a.gxsj=e[s].gxsj,a.gzmc=e[s].gzmc,a.mxmc=e[s].mxmc,i.cities3.push(a)}})}},save:function(t){var e=this;if(1==t){for(var s=[],a=this.cities1,l=this.checkedCities1,c=0;c<a.length;c++){(d={}).id=a[c].id,d.mxmc=a[c].mxmc,d.mxnr=a[c].mxnr,d.sfyx="0",d.gxsj=Object(i.b)(new Date,"yyyy-MM-dd hh:mm:ss"),d.cjsj=a[c].cjsj,d.czr=this.$store.state.uid,d.mxsm=a[c].mxsm,d.mxlx=a[c].mxlx,d.sfxs=a[c].sfxs;for(var n=0;n<l.length;n++)a[c].id==l[n]&&(d.sfyx="1");s.push(d)}var o={args:s};this.$api.post(this.Global.aport7+"/drools/updateModel",o,function(t){t.success&&e.$message({message:"更新成功！",type:"success"})})}else if(2==t){for(s=[],a=this.cities2,l=this.checkedCities2,c=0;c<a.length;c++){(d={}).id=a[c].id,d.mxmc=a[c].mxmc,d.gzmc=a[c].gzmc,d.gzsm=a[c].gzsm,d.sfyx="0";for(n=0;n<l.length;n++)a[c].id==l[n]&&(d.sfyx="1");s.push(d)}var r={args:s};this.$api.post(this.Global.aport7+"/drools/updateRules",r,function(t){t.success&&e.$message({message:"更新成功！",type:"success"})})}else if(3==t){for(s=[],a=this.cities3,c=0;c<a.length;c++){var d;(d={}).mxmc=a[c].mxmc,d.gzmc=a[c].gzmc,d.bjmc=a[c].bjmc,d.bjz=a[c].bjz,d.bjsm=a[c].bjsm,d.cjr=a[c].cjr,d.cjsj=a[c].cjsj,d.gxr=this.$store.state.uid,d.gxsj=Object(i.b)(new Date,"yyyy-MM-dd hh:mm:ss"),s.push(d)}this.$api.post(this.Global.aport7+"/drools/updateLable",s,function(t){t.success&&e.$message({message:"更新成功！",type:"success"})})}},canel:function(t){1==t?this.getlist():2==t?this.getZJ(this.val1,1,this.val3):3==t&&this.getZJ(this.val01,2,this.val03)},doset:function(){this.reload()}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gzgl"},[s("div",{staticStyle:{color:"red","font-size":"12px","line-height":"40px","padding-left":"10px"}},[t._v("  注：勾选才为有效状态，在点保存时请再次确认是否勾选正确！   "),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.doset()}}},[t._v("刷新")])],1),t._v(" "),s("el-row",{attrs:{align:"center",gutter:2}},[s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("预警规则管理")]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 5px",color:"#999999"},attrs:{type:"text"},on:{click:function(e){t.canel(1)}}},[t._v("重置")]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.save(1)}}},[t._v("保存")])],1),t._v(" "),s("el-checkbox-group",{staticClass:"text item",model:{value:t.checkedCities1,callback:function(e){t.checkedCities1=e},expression:"checkedCities1"}},t._l(t.cities1,function(e,i){return s("el-checkbox",{key:i,attrs:{label:e.id},on:{change:function(t){}}},[s("span",{on:{click:function(s){s.preventDefault(),t.getZJ(e.mxmc,1,e.mxsm)}}},[t._v(t._s(e.mxsm))])])}),1)],1)],1),t._v(" "),t.card1?s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v(t._s(t.name2))]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 5px",color:"#999999"},attrs:{type:"text"},on:{click:function(e){t.canel(2)}}},[t._v("重置")]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.save(2)}}},[t._v("保存")])],1),t._v(" "),s("el-checkbox-group",{staticClass:"text item",model:{value:t.checkedCities2,callback:function(e){t.checkedCities2=e},expression:"checkedCities2"}},t._l(t.cities2,function(e){return s("el-checkbox",{key:e.id,attrs:{label:e.id},on:{change:function(t){}}},[s("span",{on:{click:function(s){s.preventDefault(),t.getZJ(e.gzmc,2,e.gzsm)}}},[t._v(t._s(e.gzsm))])])}),1)],1)],1):t._e(),t._v(" "),t.card2?s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v(t._s(t.name3))]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 5px",color:"#999999"},attrs:{type:"text"},on:{click:function(e){t.canel(3)}}},[t._v("重置")]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.save(3)}}},[t._v("保存")])],1),t._v(" "),t.cshow?s("div",{staticStyle:{"text-align":"center","line-height":"40px",color:"red","font-size":"14px"}},[t._v(" 暂无数据")]):t._l(t.cities3,function(e){return s("div",{key:e.bjmc,staticStyle:{"font-size":"14px","line-height":"40px"}},[s("el-row",{attrs:{type:"display"}},[s("el-col",{staticStyle:{"line-height":"45px","text-align":"right"},attrs:{span:12}},[t._v("\n                  "+t._s(e.bjsm)+" ：\n              ")]),t._v(" "),e.bjmc.indexOf("GJDQ")>=0?s("el-col",{attrs:{span:12}},[s("el-select",{staticClass:"yy-input-input",attrs:{multiple:"",filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:e.bjz,callback:function(s){t.$set(e,"bjz",s)},expression:"city.bjz"}},t._l(t.$store.state.gjdq,function(t){return s("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1)],1):e.bjmc.indexOf("QZZL")>=0?s("el-col",{attrs:{span:12}},[s("el-select",{staticClass:"yy-input-input",attrs:{multiple:"",filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:e.bjz,callback:function(s){t.$set(e,"bjz",s)},expression:"city.bjz"}},t._l(t.$store.state.qzzl,function(t){return s("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1)],1):e.bjmc.indexOf("ZJZL")>=0?s("el-col",{attrs:{span:12}},[s("el-select",{staticClass:"yy-input-input",attrs:{multiple:"",filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:e.bjz,callback:function(s){t.$set(e,"bjz",s)},expression:"city.bjz"}},t._l(t.$store.state.zjzl,function(t){return s("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1)],1):s("el-col",{attrs:{span:12}},[s("el-input",{staticClass:"yy-input-input",attrs:{size:"mini"},model:{value:e.bjz,callback:function(s){t.$set(e,"bjz",s)},expression:"city.bjz"}})],1)],1)],1)})],2)],1):t._e()],1)],1)},staticRenderFns:[]};var c=s("VU/8")(a,l,!1,function(t){s("zjOQ")},"data-v-df0d2c22",null);e.default=c.exports},zjOQ:function(t,e){}});
//# sourceMappingURL=71.272976d33756e4113059.js.map