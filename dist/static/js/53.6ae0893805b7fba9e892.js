webpackJsonp([53],{"/R6c":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=l("woOf"),i=l.n(s),a={components:{LZXX:l("yHYR").a},data:function(){return{type:1,rybh:"",xid:"",CurrentPage:1,pageSize:10,TotalResult:0,form:{},pd:{},imagess:[],radio1:"0",radio2:"0",typet:"1",imgshow1:!1,imgshow2:!0,shm:!1,lg:!1,tableData:[],detailsDialogVisible:!1,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],row:[],queryPd:{},multipleSelection:[],selectionAll:[],yuid:[],selectionReal:[]}},activated:function(){this.row=this.$route.query.row,this.queryPd=this.$route.query.queryPd,console.log("row",this.row),this.getList(this.CurrentPage,this.pageSize,this.pd)},mounted:function(){this.$store.dispatch("getGjdq")},methods:{selectfn:function(t,e){this.multipleSelection=t,this.dataSelection()},dataSelection:function(){console.log("this.multipleSelection",this.multipleSelection),this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection),console.log("this.selectionReal",this.selectionReal),this.selectionAll=[];for(var t=0;t<this.selectionReal.length;t++)if(this.selectionReal[t])for(var e=0;e<this.selectionReal[t].length;e++)this.selectionAll.push(this.selectionReal[t][e]);console.log("this.selectionAll",this.selectionAll)},download:function(){var t,e=this,l={};if(t="/linZhuInfoComprehensiveAnalysisController/exportPersonList",this.objCompare(this.row,this.queryPd),this.pd=i()({},this.pd,this.row,this.queryPd),0==this.selectionAll.length)l={pd:this.pd,orderBy:{value:"ZSRQ",dataType:"date"},orderType:"DESC"};else{for(var s in this.yuid=[],this.selectionAll)this.yuid.push(this.selectionAll[s].DTID);this.pd.DTID=this.yuid,l={pd:this.pd}}this.$api.post(this.Global.aport5+t,l,function(t){console.log(t),e.downloadM(t)},function(t){},{},"blob")},downloadM:function(t){if(t){var e=window.URL.createObjectURL(new Blob([t],{type:"application/xls"})),l=document.createElement("a");l.style.display="none",l.href=e,l.setAttribute("download","临住信息综合分析列表"+this.format(new Date,"yyyyMMddhhmmss")+".xls"),document.body.appendChild(l),l.click()}},pageSizeChange:function(t){this.pageSize=t,this.getList(this.CurrentPage,t,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.CurrentPage=t,this.getList(t,this.pageSize,this.pd),console.log("当前页: "+t)},getList:function(t,e,l){var s=this;this.objCompare(this.row,this.queryPd),(l=i()({},l,this.row,this.queryPd)).hasOwnProperty("DTID")&&delete l.DTID;var a={currentPage:t,showCount:e,pd:l,orderBy:{value:"ZSRQ",dataType:"date"},orderType:"DESC"};this.$api.post(this.Global.aport5+"/linZhuInfoComprehensiveAnalysisController/getComprehensivePersonList",a,function(t){s.tableData=t.data.resultList,s.TotalResult=t.data.totalResult,0==s.selectionReal.length&&(s.selectionReal=new Array(Math.ceil(s.TotalResult/e))),s.$nextTick(function(){s.multipleSelection=[];for(var t=0;t<s.tableData.length;t++)for(var e=0;e<s.selectionAll.length;e++)s.tableData[t].DTID==s.selectionAll[e].DTID&&s.$refs.multipleTable.toggleRowSelection(s.tableData[t],!0)})})},details:function(t){this.xid=t.DTID,this.rybh=t.RYBH,this.detailsDialogVisible=!0}}},o={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"yymain tshu"},[l("div",{staticClass:"yytitle"},[l("el-row",{attrs:{type:"flex"}},[l("el-col",{staticClass:"br pr-20",attrs:{span:20}},[l("el-row",{attrs:{align:"center",gutter:2}},[l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("姓名：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.ZWXM,callback:function(e){t.$set(t.pd,"ZWXM",e)},expression:"pd.ZWXM"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.GJDQ,callback:function(e){t.$set(t.pd,"GJDQ",e)},expression:"pd.GJDQ"}},t._l(t.$store.state.gjdq,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("证件号码：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.ZJHM,callback:function(e){t.$set(t.pd,"ZJHM",e)},expression:"pd.ZJHM"}})],1)],1)],1),t._v(" "),l("el-col",{staticClass:"t-btnFlex",attrs:{span:4}},[l("el-button",{staticClass:"mb-15 tt-mr10",attrs:{type:"success",size:"small"},on:{click:function(e){t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")]),t._v(" "),l("el-button",{staticClass:"mb-15 tt-mr10",attrs:{type:"primary",size:"small"},on:{click:function(e){t.$router.go(-1)}}},[t._v("返回")]),t._v(" "),l("el-button",{staticClass:"mb-15",attrs:{type:"warning",size:"small"},on:{click:t.download}},[t._v("导出")])],1)],1)],1),t._v(" "),l("div",{staticClass:"yycontent"},[l("div",{staticClass:"yylbt mb-15"},[t._v("人员列表")]),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{select:t.selectfn}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),l("el-table-column",{attrs:{prop:"ZWXM",label:"中文姓名"}}),t._v(" "),l("el-table-column",{attrs:{prop:"YWXM",label:"英文姓名"}}),t._v(" "),l("el-table-column",{attrs:{prop:"XB_DESC",label:"性别"}}),t._v(" "),l("el-table-column",{attrs:{prop:"GJDQ_DESC",label:"国家地区"}}),t._v(" "),l("el-table-column",{attrs:{prop:"ZJZL_DESC",label:"证件种类"}}),t._v(" "),l("el-table-column",{attrs:{prop:"ZJHM",label:"证件号码"}}),t._v(" "),l("el-table-column",{attrs:{prop:"QZZL_DESC",label:"签证种类"}}),t._v(" "),l("el-table-column",{attrs:{prop:"QZHM",label:"签证号码"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(l){t.details(e.row)}}})]}}])})],1),t._v(" "),l("div",{staticClass:"middle-foot"},[l("div",{staticClass:"page-msg"},[l("div",{},[t._v("\n      共"+t._s(t.TotalResult)+"条记录\n        ")]),t._v(" "),l("div",{},[t._v("\n          每页显示\n          "),l("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n          条\n        ")],1),t._v(" "),l("div",{},[t._v("\n        共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n        ")])]),t._v(" "),l("el-pagination",{attrs:{background:"","page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),l("div",{staticClass:"bj"},[l("el-dialog",{attrs:{title:"临住详情",visible:t.detailsDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(e){t.detailsDialogVisible=e}}},[l("LZXX",{attrs:{type:t.type,xid:t.xid,rybh:t.rybh,random:(new Date).getTime()}}),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:function(e){t.detailsDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)])},staticRenderFns:[]};var n=l("VU/8")(a,o,!1,function(t){l("T+C4"),l("KQrI")},"data-v-43ddb540",null);e.default=n.exports},KQrI:function(t,e){},"T+C4":function(t,e){}});
//# sourceMappingURL=53.6ae0893805b7fba9e892.js.map