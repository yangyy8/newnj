webpackJsonp([86],{Z47W:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{ssfj:[],CurrentPage:1,pageSize:10,TotalResult:0,pd0:{},options:this.pl.ps,tableData:[],zrq:[],pd:{ZSRQ_DateRange:{dataType:"date"},BJSJ_DateRange:{}}}},activated:function(){var t=this;setTimeout(function(){t.getList(t.CurrentPage,t.pageSize,t.pd)},1e3)},mounted:function(){this.$store.dispatch("getGjdq"),this.$store.dispatch("getPcs"),this.$store.dispatch("getXzqh"),this.$store.dispatch("getClzt"),this.$store.dispatch("getShzt"),this.getZrq(),this.getFJ()},methods:{getFJ:function(){var t=this,e={operatorId:this.$store.state.uid,operatorNm:this.$store.state.uname};this.$api.post(this.Global.aport2+"/data_report/selectSsfjDm",e,function(e){t.ssfj=e.data.SSFJ})},getZrq:function(){var t=this,e={operatorId:this.$store.state.uid,operatorNm:this.$store.state.uname},a=this.Global.aport2+"/data_report/selectZrqDm";this.$api.post(a,e,function(e){t.zrq=e.data.ZRQ})},pageSizeChange:function(t){this.pageSize=t,this.getList(this.CurrentPage,this.pageSize,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.CurrentPage=t,this.getList(this.CurrentPage,this.pageSize,this.pd),console.log("当前页: "+t)},getList:function(t,e,a){var s=this;a.MXLX="CZW_ZDGZYJ",a.ZSRQ_DateRange.begin=this.pd0.beginZSRQ,a.ZSRQ_DateRange.end=this.pd0.endZSRQ,a.BJSJ_DateRange.begin=this.pd0.beginBJSJ,a.BJSJ_DateRange.end=this.pd0.endBJSJ;var l={currentPage:t,showCount:e,pd:a,orderBy:"BJSJ",orderType:"DESC"};this.$api.post(this.Global.aport4+"/fangWuWarningInfoController/getInfoListByMxLx",l,function(t){s.tableData=t.data.resultList,s.TotalResult=t.data.totalResult})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain"},[a("div",{staticClass:"yytitle"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"br pr-20",attrs:{span:22}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("所属分局：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.XZQHDM,callback:function(e){t.$set(t.pd,"XZQHDM",e)},expression:"pd.XZQHDM"}},t._l(t.ssfj,function(t,e){return a("el-option",{key:e,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("派出所：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.PCS,callback:function(e){t.$set(t.pd,"PCS",e)},expression:"pd.PCS"}},t._l(t.$store.state.pcs,function(t){return a("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("责任区：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.JWZRQ,callback:function(e){t.$set(t.pd,"JWZRQ",e)},expression:"pd.JWZRQ"}},t._l(t.zrq,function(t){return a("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("街道名称：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.JLXMC_Like,callback:function(e){t.$set(t.pd,"JLXMC_Like",e)},expression:"pd.JLXMC_Like"}})],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("入住时间：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd0.beginZSRQ,callback:function(e){t.$set(t.pd0,"beginZSRQ",e)},expression:"pd0.beginZSRQ"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd0.endZSRQ,callback:function(e){t.$set(t.pd0,"endZSRQ",e)},expression:"pd0.endZSRQ"}})],1)]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("预警时间：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"开始时间"},model:{value:t.pd0.beginBJSJ,callback:function(e){t.$set(t.pd0,"beginBJSJ",e)},expression:"pd0.beginBJSJ"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"结束时间"},model:{value:t.pd0.endBJSJ,callback:function(e){t.$set(t.pd0,"endBJSJ",e)},expression:"pd0.endBJSJ"}})],1)]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("审核状态：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.SHZT,callback:function(e){t.$set(t.pd,"SHZT",e)},expression:"pd.SHZT"}},t._l(t.$store.state.shzt,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("处理状态：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.CLZT,callback:function(e){t.$set(t.pd,"CLZT",e)},expression:"pd.CLZT"}},t._l(t.$store.state.clzt,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1)],1)],1),t._v(" "),a("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.CurrentPage=1,t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{staticClass:"yycontent"},[a("div",{staticClass:"yylbt mb-15"},[t._v("甄别信息列表")]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"XZQH_DESC",label:"行政区划"}}),t._v(" "),a("el-table-column",{attrs:{prop:"PCS_DESC",label:"派出所"}}),t._v(" "),a("el-table-column",{attrs:{prop:"JWZRQ",label:"责任区"}}),t._v(" "),a("el-table-column",{attrs:{prop:"JLXMC",label:"街道名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ZSRQ",label:"入住时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"BJSJ",label:"预警时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SHZT_DESC",label:"审核状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CLZT_DESC",label:"处理状态"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(a){t.$router.push({name:"CZFWYHYJ_XQ",query:{type:0,row:e.row,leiType:"zd",zdsh:"zdsh"}})}}})]}}])})],1),t._v(" "),a("div",{staticClass:"middle-foot"},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n      共"+t._s(t.TotalResult)+"条记录\n        ")]),t._v(" "),a("div",{},[t._v("\n          每页显示\n          "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n          条\n        ")],1),t._v(" "),a("div",{},[t._v("\n          共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n        ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(s,l,!1,function(t){a("yljP")},"data-v-7172f986",null);e.default=i.exports},yljP:function(t,e){}});
//# sourceMappingURL=86.76de5a845fa80d4ad1c6.js.map