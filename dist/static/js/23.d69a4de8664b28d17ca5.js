webpackJsonp([23],{"7LDj":function(t,s){},M5W9:function(t,s){},jbeW:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("woOf"),e=a.n(i),l={data:function(){return{type:1,xid:"",random:"",CurrentPage:1,pageSize:10,TotalResult:0,form:{},pd:{},imagess:[],radio1:"0",radio2:"0",typet:"1",imgshow1:!1,imgshow2:!0,shm:!1,lg:!1,tableData:[],dbqzDialogVisible:!1,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],row:[],czinfo:{},queryPd:{}}},activated:function(){this.row=this.$route.query.row,this.queryPd=this.$route.query.queryPd,this.getList(this.CurrentPage,this.pageSize,this.pd)},mounted:function(){this.$store.dispatch("getGjdq")},methods:{handleSelectionChange:function(t){this.multipleSelection=t},pageSizeChange:function(t){this.getList(this.CurrentPage,t,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getList(t,this.pageSize,this.pd),console.log("当前页: "+t)},getList:function(t,s,a){var i=this;this.objCompare(this.row,this.queryPd);var l={currentPage:t,showCount:s,pd:a=e()({},a,this.row,this.queryPd)};this.$api.post(this.Global.aport5+"/esDbqzController/getResultListByParams",l,function(t){i.tableData=t.data.resultList,i.TotalResult=t.data.totalResult})},details:function(t){var s=this,a={pd:{RGUID:t.RGUID}};this.$api.post(this.Global.aport5+"/esDbqzController/getResultListByParams",a,function(t){t.success&&(t.data.resultList[0]?s.czinfo=t.data.resultList[0]:s.czinfo={},s.dbqzDialogVisible=!0)})}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"yymain tshu"},[a("div",{staticClass:"yytitle"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"br pr-20",attrs:{span:22}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("姓名：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.XM,callback:function(s){t.$set(t.pd,"XM",s)},expression:"pd.XM"}})],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("单位名称：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.DWMC,callback:function(s){t.$set(t.pd,"DWMC",s)},expression:"pd.DWMC"}})],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("身份证号：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.SFZH,callback:function(s){t.$set(t.pd,"SFZH",s)},expression:"pd.SFZH"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{staticClass:"mb-15",attrs:{type:"success",size:"small"},on:{click:function(s){t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{staticClass:"yycontent"},[a("div",{staticClass:"yylbt mb-15"},[t._v("人员列表")]),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"XM",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"XBMC",label:"性别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CSRQ",label:"出生日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SFZH",label:"身份证号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"YMQZZLMC",label:"移民签证种类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"QZGJMC",label:"签证国家"}}),t._v(" "),a("el-table-column",{attrs:{prop:"DWMC",label:"单位名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SQSJ",label:"申请时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"70"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(a){t.details(s.row)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"middle-foot"},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n      共"+t._s(t.TotalResult)+"条记录\n        ")]),t._v(" "),a("div",{},[t._v("\n          每页显示\n          "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(s){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(s){t.pageSize=s},expression:"pageSize"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n          条\n        ")],1),t._v(" "),a("div",{},[t._v("\n        共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n        ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(s){t.CurrentPage=s}}})],1)],1),t._v(" "),a("div",{staticClass:"bj"},[a("el-dialog",{attrs:{title:"代办签证信息详情",visible:t.dbqzDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(s){t.dbqzDialogVisible=s}}},[a("el-row",{staticClass:"mb-6",attrs:{gutter:3}},[a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("姓名：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.XM))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("性别名称：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.XBMC))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("出生日期：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v(" "+t._s(t.czinfo.CSRQ))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("身份证号：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.SFZH))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("移民签证种类名称：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.YMQZZLMC))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("签证国家名称：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.QZGJMC))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("单位名称：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.DWMC))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("申请时间：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.SQSJ))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("操作人：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.CZR))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("操作时间：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.CZSJ))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("修改人：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.XGR))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("修改时间：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v(" "+t._s(t.czinfo.XGSJ))])])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(s){t.dbqzDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)])},staticRenderFns:[]};var p=a("VU/8")(l,n,!1,function(t){a("M5W9"),a("7LDj")},"data-v-e8e6ecae",null);s.default=p.exports}});
//# sourceMappingURL=23.d69a4de8664b28d17ca5.js.map