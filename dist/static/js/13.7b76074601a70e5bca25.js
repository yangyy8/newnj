webpackJsonp([13],{"61jJ":function(t,e){},VbTt:function(t,e){},g712:function(t,e){},hitf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("jxcr"),l=a.n(s),i=(a("xrTZ").Base64,{name:"TBRYEDIT",props:["type","xid","random"],data:function(){return{form:{},imgURL:l.a,tableData1:[],tableData2:[],tableData3:[],tableData4:[],imagess:[],fileList:[],actions:"",imgshow1:!1,imgshow2:!0,uploadIconData:{token:this.$store.state.token,DTID:this.xid},typet:"1",shm:!0,lg:!1,pd:{},dialogtxt:"添加",editDialogVisible:!1,tcDialogVisible:!1,fileDialogVisible:!1,allshow:!0,gjshow:!1,zjshow:!1,pp:{},imgs:"",deg:0,datatype:0,savetype:0,savadtid:""}},mounted:function(){this.tableData1=[],this.tableData2=[],this.tableData3=[],this.tableData4=[],this.imagess=[],this.$store.dispatch("getZjzl"),this.$store.dispatch("getXB"),this.$store.dispatch("getTbry"),this.actions=window.IPConfig.IP+this.Global.aport3},watch:{random:{handler:function(t,e){this.getData0(this.xid)},immediate:!0}},methods:{getData0:function(t){var e=this;1==this.type?this.allshow=!0:this.allshow=!1;var a={DTID:t,token:this.$store.state.token};this.$api.post(this.Global.aport3+"/drtbry/getTBRYInfor",a,function(t){e.form=t.data.JBXX,e.tableData1=t.data.ZJXX,e.tableData2=t.data.GJDQ,e.tableData3=t.data.QQGJDQ,e.tableData4=t.data.SJNAME,e.imagess=t.data.tp,0!=e.imagess.length?e.imgshow1=!0:e.imgshow1=!1})},anadd:function(){this.$refs.upload&&this.$refs.upload.clearFiles(),this.fileDialogVisible=!0},upSuccess:function(t){t.success?this.$message({message:t.data,type:"success"}):this.$message.error(t.message),this.fileDialogVisible=!1,this.getData0(this.xid)},beforeAvatarUpload:function(t){var e=t.name.substring(t.name.lastIndexOf("."),t.name.length);return".jpg"==(e=e.toLowerCase())||".png"==e||".pdf"==e||(this.$message({message:"上传文件只能是pdf文件或者png,jpg图片格式!",type:"warning"}),!1)},showUpload:function(){console.log(this.xid),this.fileDialogVisible=!0,this.typemd="",console.log(this.$refs.upload),this.$refs.upload&&this.$refs.upload.clearFiles()},submitUpload:function(){0!=this.$refs.upload.uploadFiles.length?(this.uploadIconData.fileName=this.$refs.upload.uploadFiles[0].name,this.$refs.upload.submit()):this.$message({message:"请先选择文件！",type:"warning"})},downloadM:function(t,e,a){if(t)if("pdf"==e){var s=this.dataURLtoBlob(t),l=new FileReader;l.readAsDataURL(s),l.onload=function(t){if(console.log(window.navigator.msSaveOrOpenBlob),window.navigator.msSaveOrOpenBlob){for(var e=atob(t.target.result.split(",")[1]),s=e.length,l=new Uint8Array(s);s--;)l[s]=e.charCodeAt(s);var i=new Blob([l]);window.navigator.msSaveOrOpenBlob(i,a+".pdf")}else{var o=document.createElement("a");o.download=a+".pdf",o.href=t.target.result,o.setAttribute("id","export"),o.click()}}}else{var i=t,o=document.createElement("a");o.href=i,o.setAttribute("download",a),o.click()}},dataURLtoBlob:function(t){for(var e=atob(t),a=e.length,s=new Uint8Array(a);a--;)s[a]=e.charCodeAt(a);return new Blob([s],{type:"pdf"})},editdia:function(t,e,a){this.$set(this.pd,"ZJHM",""),this.$set(this.pd,"ZJZLDM",""),this.$set(this.pd,"GJDQDM",""),this.gjshow=!1,this.zjshow=!1,this.datatype=t,this.savetype=e,0==t?(this.savadtid=this.xid,1==e?this.zjshow=!0:2==e?this.gjshow=!0:3==e&&(this.gjshow=!0),this.dialogtxt="添加"):(1==e?(this.pd.ZJZLDM=a.ZJZLDM,this.pd.ZJHM=a.ZJHM,this.savadtid=a.DTID,this.zjshow=!0):2==e?(this.pd.GJDQDM=a.GJDQDM,this.savadtid=a.DTID,this.gjshow=!0):3==e&&(this.pd.GJDQDM=a.GJDQDM,this.savadtid=a.DTID,this.gjshow=!0),this.dialogtxt="编辑"),this.editDialogVisible=!0},basesave:function(){var t=this,e={CSRQ:this.form.CSRQ,YWX:this.form.YWX,YWM:this.form.YWM,TBBH:this.form.TBBH,FBSJ:this.form.FBSJ,TBRYZL:this.form.TBRYZLDM,XB:this.form.XBDM,DTID:this.xid,token:this.$store.state.token};this.$api.post(this.Global.aport3+"/drtbry/updateTBRY",e,function(e){e.success?t.$message({message:"保存成功",type:"success"}):t.$message.error("保存失败")})},addsave:function(){var t=this;if("1"==this.savetype){if(console.log(this.pd.ZJZLDM+"1111"),void 0==this.pd.ZJZLDM||""==this.pd.ZJZLDM)return void this.$message({message:"请选择证件种类!",type:"warning"});if(void 0==this.pd.ZJHM||""==this.pd.ZJHM)return void this.$message({message:"请输入证件号码！!",type:"warning"})}else if("2"==this.savetype){if(void 0==this.pd.GJDQDM||""==this.pd.GJDQDM)return void this.$message({message:"请选择国家地区！!",type:"warning"})}else if("3"==this.savetype&&(void 0==this.pd.GJDQDM||""==this.pd.GJDQDM))return void this.$message({message:"请选择国家地区！!",type:"warning"});if(1==this.datatype){var e={TYPE:this.savetype+"",ZJZL:this.pd.ZJZLDM,GJDQ:this.pd.GJDQDM,ZJHM:this.pd.ZJHM,DTID:this.savadtid,token:this.$store.state.token};this.$api.post(this.Global.aport3+"/drtbry/updateTbryAndZjxxOrGjdqOrQqg",e,function(e){e.success?(t.$message({message:"保存成功",type:"success"}),t.editDialogVisible=!1,t.getData0(t.xid)):t.$message.error("保存失败")})}else if(0==this.datatype){var a={TYPE:this.savetype+"",ZJZL:this.pd.ZJZLDM,GJDQ:this.pd.GJDQDM,ZJHM:this.pd.ZJHM,DTID:this.savadtid,token:this.$store.state.token};this.$api.post(this.Global.aport3+"/drtbry/addTbryAndZjxxOrGjdqOrQqg",a,function(e){e.success?(t.$message({message:"保存成功",type:"success"}),t.editDialogVisible=!1,t.getData0(t.xid)):t.$message.error("保存失败")})}},deletes:function(t,e){var a=this,s={DTID:t,token:this.$store.state.token,TYPE:e+""};this.$api.post(this.Global.aport3+"/drtbry/deleteTbryAndZjxxOrGjdqOrQqgOrAy",s,function(t){t.success?(a.$message({message:"删除成功",type:"success"}),a.getData0(a.xid)):a.$message.error("删除失败")})},rotate:function(){this.deg+=90,this.deg>=360&&(this.deg=0)},opentp:function(t){this.imgs=t,this.tcDialogVisible=!0}}}),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{model:t.form}},[a("el-row",{staticClass:"crcolor",attrs:{type:"flex"}},[a("el-col",{attrs:{span:19}},[a("el-row",{attrs:{gutter:2}},[a("el-col",{attrs:{span:8}},[a("span",{staticClass:"yy-input-text"},[t._v("英文姓：")]),t._v(" "),a("el-input",{staticClass:"yy-input-input",attrs:{placeholder:"",size:"small"},model:{value:t.form.YWX,callback:function(e){t.$set(t.form,"YWX",e)},expression:"form.YWX"}})],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("span",{staticClass:"yy-input-text"},[t._v("英文名：")]),t._v(" "),a("el-input",{staticClass:"yy-input-input",attrs:{placeholder:"",size:"small"},model:{value:t.form.YWM,callback:function(e){t.$set(t.form,"YWM",e)},expression:"form.YWM"}})],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("span",{staticClass:"yy-input-text"},[t._v("通报编号：")]),t._v(" "),a("el-input",{staticClass:"yy-input-input",attrs:{placeholder:"",size:"small"},model:{value:t.form.TBBH,callback:function(e){t.$set(t.form,"TBBH",e)},expression:"form.TBBH"}})],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("span",{staticClass:"yy-input-text"},[t._v("性别：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{placeholder:"请选择",filterable:"",clearable:"","default-first-option":"",size:"small"},model:{value:t.form.XBDM,callback:function(e){t.$set(t.form,"XBDM",e)},expression:"form.XBDM"}},t._l(t.$store.state.xb,function(t,e){return a("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("span",{staticClass:"yy-input-text"},[t._v("出生日期：")]),t._v(" "),a("el-date-picker",{staticClass:"yy-input-input",attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.form.CSRQ,callback:function(e){t.$set(t.form,"CSRQ",e)},expression:"form.CSRQ"}})],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("span",{staticClass:"yy-input-text"},[t._v("入库时间：")]),t._v(" "),a("el-date-picker",{staticClass:"yy-input-input",attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy-MM-dd",placeholder:"选择时间"},model:{value:t.form.RKSJ,callback:function(e){t.$set(t.form,"RKSJ",e)},expression:"form.RKSJ"}})],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("span",{staticClass:"yy-input-text"},[t._v("发布时间：")]),t._v(" "),a("el-date-picker",{staticClass:"yy-input-input",attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy-MM-dd",placeholder:"选择时间"},model:{value:t.form.FBSJ,callback:function(e){t.$set(t.form,"FBSJ",e)},expression:"form.FBSJ"}})],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("span",{staticClass:"yy-input-text"},[t._v("通报类型：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{placeholder:"请选择",filterable:"",clearable:"","default-first-option":"",size:"small"},model:{value:t.form.TBRYZLDM,callback:function(e){t.$set(t.form,"TBRYZLDM",e)},expression:"form.TBRYZLDM"}},t._l(t.$store.state.tbry,function(t,e){return a("el-option",{key:e,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text",staticStyle:{width:"11.7%!important"}},[t._v("备注：")]),t._v(" "),a("el-input",{staticClass:"input-input",staticStyle:{width:"86.8%!important"},attrs:{placeholder:"",size:"small"},model:{value:t.form.BZ,callback:function(e){t.$set(t.form,"BZ",e)},expression:"form.BZ"}})],1),t._v(" "),t.allshow?a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.basesave()}}},[t._v("保存基本信息")])],1):t._e()],1)],1),t._v(" "),a("el-col",{staticStyle:{"margin-left":"20px"},attrs:{span:4}},[a("el-carousel",{staticClass:"photoCar",attrs:{height:"160px","indicator-position":"outside"}},[t._l(t.imagess,function(e,s){return t.imgshow1?a("el-carousel-item",{key:s,staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:e},on:{click:function(a){t.opentp(e)}}})]):t._e()}),t._v(" "),t.imgshow1?t._e():a("el-carousel-item",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:t.imgURL},on:{click:function(e){t.opentp(t.imgURL)}}})])],2)],1)],1),t._v(" "),a("div",{staticClass:"stu-footerd"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"yylbt"},[t._v("证件列表")])]),t._v(" "),t.allshow?a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.editdia(0,1)}}},[t._v("添加")])],1):t._e()],1),t._v(" "),a("el-table",{staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:t.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"ZJZL_DESC",label:"证件种类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ZJHM",label:"证件号码"}}),t._v(" "),t.allshow?a("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"编辑",icon:"el-icon-edit"},on:{click:function(a){t.editdia(1,1,e.row)}}}),t._v(" "),a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"删除",icon:"el-icon-delete"},on:{click:function(a){t.deletes(e.row.DTID,1)}}})]}}])}):t._e()],1)],1),t._v(" "),a("div",{staticClass:"stu-footerd"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"yylbt"},[t._v("国家地区")])]),t._v(" "),t.allshow?a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.editdia(0,2)}}},[t._v("添加")])],1):t._e()],1),t._v(" "),a("el-table",{staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:t.tableData2,border:""}},[a("el-table-column",{attrs:{prop:"GJDQ_DESC",label:"国家地区"}}),t._v(" "),t.allshow?a("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"编辑",icon:"el-icon-edit"},on:{click:function(a){t.editdia(1,2,e.row)}}}),t._v(" "),a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"删除",icon:"el-icon-delete"},on:{click:function(a){t.deletes(e.row.DTID,2)}}})]}}])}):t._e()],1)],1),t._v(" "),a("el-col",{staticStyle:{"padding-left":"20px"},attrs:{span:12}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"yylbt"},[t._v("请求国")])]),t._v(" "),t.allshow?a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.editdia(0,3)}}},[t._v("添加")])],1):t._e()],1),t._v(" "),a("el-table",{staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:t.tableData3,border:""}},[a("el-table-column",{attrs:{prop:"GJDQ_DESC",label:"请求国"}}),t._v(" "),t.allshow?a("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"编辑",icon:"el-icon-edit"},on:{click:function(a){t.editdia(1,3,e.row)}}}),t._v(" "),a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"删除",icon:"el-icon-delete"},on:{click:function(a){t.deletes(e.row.DTID,3)}}})]}}])}):t._e()],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"stu-footerd"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"yylbt"},[t._v("案由信息")])]),t._v(" "),t.allshow?a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.anadd()}}},[t._v("添加")])],1):t._e()],1),t._v(" "),a("el-table",{staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:t.tableData4,border:""}},[a("el-table-column",{attrs:{prop:"SJNAME",label:"附件名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SJPAPERTYPE",label:"附件类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CREATETIME",label:"上传时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{on:{click:function(a){t.downloadM(e.row.AY,e.row.SJPAPERTYPE,e.row.SJNAME)}}},[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"下载",icon:"el-icon-download"}})],1),t._v(" "),t.allshow?a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"删除",icon:"el-icon-delete"},on:{click:function(a){t.deletes(e.row.DTID,4)}}}):t._e()]}}])})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.dialogtxt,visible:t.editDialogVisible,"append-to-body":!0},on:{"update:visible":function(e){t.editDialogVisible=e}}},[t.zjshow?a("el-row",{attrs:{gutter:1}},[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text",staticStyle:{width:"26%!important","text-align":"right!important"}},[t._v("证件种类：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",staticStyle:{width:"55%!important"},attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.ZJZLDM,callback:function(e){t.$set(t.pd,"ZJZLDM",e)},expression:"pd.ZJZLDM"}},t._l(t.$store.state.zjzl,function(t,e){return a("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text",staticStyle:{width:"26%!important","text-align":"right!important"}},[t._v("证件号码：")]),t._v(" "),a("el-input",{staticClass:"yy-input-input",staticStyle:{width:"55%!important"},attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.ZJHM,callback:function(e){t.$set(t.pd,"ZJHM",e)},expression:"pd.ZJHM"}})],1)],1):t._e(),t._v(" "),t.gjshow?a("el-row",{attrs:{gutter:1}},[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text",staticStyle:{width:"26%!important","text-align":"right!important"}},[t._v("国家地区：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",staticStyle:{width:"55%!important"},attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.GJDQDM,callback:function(e){t.$set(t.pd,"GJDQDM",e)},expression:"pd.GJDQDM"}},t._l(t.$store.state.gjdq,function(t,e){return a("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1)],1):t._e(),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.addsave()}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{staticStyle:{"text-align":"center"},attrs:{title:"放大显示",visible:t.tcDialogVisible,"append-to-body":!0},on:{"update:visible":function(e){t.tcDialogVisible=e}}},[a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{size:"small",type:"primary",title:"旋转图片",icon:"iconfont el-icon-yy-icon_rotate"},on:{click:t.rotate}})],1),t._v(" "),a("img",{directives:[{name:"drag",rawName:"v-drag"}],staticStyle:{"max-width":"400px","max-height":"400px"},style:{transform:"rotateZ("+t.deg+"deg)"},attrs:{src:t.imgs}})]),t._v(" "),a("el-dialog",{attrs:{title:"上传文件",visible:t.fileDialogVisible,"append-to-body":!0},on:{"update:visible":function(e){t.fileDialogVisible=e}}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("el-upload",{ref:"upload",staticClass:"input-input",attrs:{action:t.actions+"/drtbry/addReadAy","file-list":t.fileList,multiple:"","on-success":t.upSuccess,data:t.uploadIconData,"before-upload":t.beforeAvatarUpload,limit:1,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器")]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("上传pdf文件或者png,jpg图片格式")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var n={components:{TBRYEDIT:a("VU/8")(i,o,!1,function(t){a("g712"),a("zTeZ")},"data-v-0cd0d412",null).exports},data:function(){return{CurrentPage:1,pageSize:10,TotalResult:0,pd:{},nation:[],fileList:[],actions:"",uploadDialogVisible:!1,detailsDialogVisible:!1,editsDialogVisible:!1,editForm:{},mapForm:{},form:{},uploadIconData:{token:this.$store.state.token},randomtb:"",randomxq:"",options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],tableData:[],type:0,xid:"",rybh:""}},activated:function(){this.detailsDialogVisible=!1},mounted:function(){this.$store.dispatch("getXB"),this.$store.dispatch("getGjdq"),this.$store.dispatch("getZjzl"),this.$store.dispatch("getTbry")},methods:{handleSelectionChange:function(t){this.multipleSelection=t},pageSizeChange:function(t){this.getList(this.CurrentPage,t,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getList(t,this.pageSize,this.pd),console.log("当前页: "+t)},getList:function(t,e,a){var s=this,l={currentPage:t,showCount:e,pd:a,token:this.$store.state.token};this.$api.post(this.Global.aport3+"/drtbry/getTBRYPage",l,function(t){"1000001"==t.code&&(window.location.href="#/"),s.tableData=t.data.resultList,s.TotalResult=t.data.totalResult})},details:function(t){this.type=0,this.xid=t.DTID,this.randomxq=(new Date).getTime(),this.detailsDialogVisible=!0,this.mapForm=t},edits:function(t){this.type=1,this.xid=t.DTID,console.log(this.type,t.DTID,(new Date).getTime()),this.randomtb=(new Date).getTime(),this.editsDialogVisible=!0},editsItem:function(t){},deletes:function(t){var e=this,a={DTID:t.dtid,token:this.$store.state.token};this.$confirm("您是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$api.post(e.Global.aport3+"/drtbry/deleteTBRYById",a,function(t){"1000001"==t.code&&(window.location.href="#/"),t.success?(e.$message({message:"删除成功！",type:"success"}),e.getList(e.CurrentPage,e.pageSize,e.pd)):e.$message.error(t.Message)},function(t){e.$message.error("失败了")})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},upSuccess:function(t){t.success?this.$message({message:t.data,type:"success"}):this.$message.error(t.message),this.uploadDialogVisible=!1,this.getList(this.CurrentPage,this.pageSize,this.pd)},beforeAvatarUpload:function(t){},showUpload:function(){this.uploadDialogVisible=!0,this.typemd="",this.actions=window.IPConfig.IP+this.Global.aport3,console.log(this.$refs.upload),this.$refs.upload&&this.$refs.upload.clearFiles()},submitUpload:function(){0!=this.$refs.upload.uploadFiles.length?this.$refs.upload.submit():this.$message({message:"请先选择文件！",type:"warning"})},download:function(){window.location.href=this.$api.rootUrl+"/manage-platform/templateFile/riskNameListFile.xlsx"}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain tbry"},[a("div",{staticClass:"yytitle"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"br pr-20",attrs:{span:22}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("英文姓：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.YWX,callback:function(e){t.$set(t.pd,"YWX",e)},expression:"pd.YWX"}})],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("英文名：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.YWM,callback:function(e){t.$set(t.pd,"YWM",e)},expression:"pd.YWM"}})],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("通报类型：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{placeholder:"请选择",filterable:"",clearable:"","default-first-option":"",size:"small"},model:{value:t.pd.TBRYZL,callback:function(e){t.$set(t.pd,"TBRYZL",e)},expression:"pd.TBRYZL"}},t._l(t.$store.state.tbry,function(t,e){return a("el-option",{key:e,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("通报编号：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.TBBH,callback:function(e){t.$set(t.pd,"TBBH",e)},expression:"pd.TBBH"}})],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("性别：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{placeholder:"请选择",filterable:"",clearable:"","default-first-option":"",size:"small"},model:{value:t.pd.XB,callback:function(e){t.$set(t.pd,"XB",e)},expression:"pd.XB"}},t._l(t.$store.state.xb,function(t,e){return a("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("出生日期：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy-MM-dd",placeholder:"开始时间"},model:{value:t.pd.CSRQKSSJ,callback:function(e){t.$set(t.pd,"CSRQKSSJ",e)},expression:"pd.CSRQKSSJ"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy-MM-dd",placeholder:"结束时间"},model:{value:t.pd.CSRQJSSJ,callback:function(e){t.$set(t.pd,"CSRQJSSJ",e)},expression:"pd.CSRQJSSJ"}})],1)]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.GJDQDM,callback:function(e){t.$set(t.pd,"GJDQDM",e)},expression:"pd.GJDQDM"}},t._l(t.$store.state.gjdq,function(t,e){return a("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("请求国：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.QQGDM,callback:function(e){t.$set(t.pd,"QQGDM",e)},expression:"pd.QQGDM"}},t._l(t.$store.state.gjdq,function(t,e){return a("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("发布时间：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy-MM-dd",placeholder:"开始时间"},model:{value:t.pd.FBSJKSSJ,callback:function(e){t.$set(t.pd,"FBSJKSSJ",e)},expression:"pd.FBSJKSSJ"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy-MM-dd",placeholder:"结束时间"},model:{value:t.pd.FBSJJSSJ,callback:function(e){t.$set(t.pd,"FBSJJSSJ",e)},expression:"pd.FBSJJSSJ"}})],1)]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("证件种类：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.ZJZL,callback:function(e){t.$set(t.pd,"ZJZL",e)},expression:"pd.ZJZL"}},t._l(t.$store.state.zjzl,function(t,e){return a("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("证件号码：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.ZJHM,callback:function(e){t.$set(t.pd,"ZJHM",e)},expression:"pd.ZJHM"}})],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("入库时间：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy-MM-dd",placeholder:"开始时间"},model:{value:t.pd.RKSJKSSJ,callback:function(e){t.$set(t.pd,"RKSJKSSJ",e)},expression:"pd.RKSJKSSJ"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy-MM-dd",placeholder:"结束时间"},model:{value:t.pd.RKSJJSSJ,callback:function(e){t.$set(t.pd,"RKSJJSSJ",e)},expression:"pd.RKSJJSSJ"}})],1)])],1)],1),t._v(" "),a("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.CurrentPage=1,t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{staticClass:"yycontent"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"TBRYZL",label:"通报类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"TBBH",label:"通报编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"YWX",label:"英文姓"}}),t._v(" "),a("el-table-column",{attrs:{prop:"YWM",label:"英文名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"XB_DESC",label:"性别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CSRQ",label:"出生日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"FBSJ",label:"发布时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(a){t.details(e.row)}}}),t._v(" "),a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"编辑",icon:"el-icon-edit"},on:{click:function(a){t.edits(e.row)}}}),t._v(" "),a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"删除",icon:"el-icon-delete"},on:{click:function(a){t.deletes(e.row)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"middle-foot"},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n                共"+t._s(t.TotalResult)+"条记录\n        ")]),t._v(" "),a("div",{},[t._v("\n          每页显示\n          "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n          条\n        ")],1),t._v(" "),a("div",{},[t._v("\n            共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n        ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"上传模板",visible:t.uploadDialogVisible,width:"640px"},on:{"update:visible":function(e){t.uploadDialogVisible=e}}},[a("el-form",[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("span",[t._v("上传类型：")]),t._v(" "),a("el-radio",{attrs:{label:"1"},on:{change:function(e){t.getTS("1")}},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("数据上传(XML文件)")]),t._v(" "),a("el-radio",{attrs:{label:"2"},on:{change:function(e){t.getTS("2")}},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("资料上传(PDF文件)")])],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("el-upload",{ref:"upload",staticClass:"input-input",attrs:{action:t.actions+"/manage-platform/riskNameList/riskReadExcel/","file-list":t.fileList,multiple:"","on-success":t.upSuccess,data:t.uploadIconData,"before-upload":t.beforeAvatarUpload,limit:1,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器")]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传EXCEL文件")])],1)],1)],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.editsDialogVisible},on:{"update:visible":function(e){t.editsDialogVisible=e}}},[a("TBRYEDIT",{attrs:{type:t.type,xid:t.xid,random:t.randomtb}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.editsDialogVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"详情",visible:t.detailsDialogVisible},on:{"update:visible":function(e){t.detailsDialogVisible=e}}},[a("TBRYEDIT",{attrs:{xid:t.xid,type:t.type,random:t.randomxq}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.detailsDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(n,r,!1,function(t){a("VbTt"),a("61jJ")},null,null);e.default=c.exports},xrTZ:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){module.exports=e(t)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.1",buffer;if(void 0!==module&&module.exports)try{buffer=eval("require('buffer').Buffer")}catch(t){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(t){for(var e={},a=0,s=t.length;a<s;a++)e[t.charAt(a)]=a;return e}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(t){if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?fromCharCode(192|e>>>6)+fromCharCode(128|63&e):fromCharCode(224|e>>>12&15)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return fromCharCode(240|e>>>18&7)+fromCharCode(128|e>>>12&63)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(t){return t.replace(re_utob,cb_utob)},cb_encode=function(t){var e=[0,2,1][t.length%3],a=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[b64chars.charAt(a>>>18),b64chars.charAt(a>>>12&63),e>=2?"=":b64chars.charAt(a>>>6&63),e>=1?"=":b64chars.charAt(63&a)].join("")},btoa=global.btoa?function(t){return global.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t)).toString("base64")}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t)).toString("base64")}:function(t){return btoa(utob(t))},encode=function(t,e){return e?_encode(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):_encode(String(t))},encodeURI=function(t){return encode(t,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(t){switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return fromCharCode(55296+(e>>>10))+fromCharCode(56320+(1023&e));case 3:return fromCharCode((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return fromCharCode((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},btou=function(t){return t.replace(re_btou,cb_btou)},cb_decode=function(t){var e=t.length,a=e%4,s=(e>0?b64tab[t.charAt(0)]<<18:0)|(e>1?b64tab[t.charAt(1)]<<12:0)|(e>2?b64tab[t.charAt(2)]<<6:0)|(e>3?b64tab[t.charAt(3)]:0),l=[fromCharCode(s>>>16),fromCharCode(s>>>8&255),fromCharCode(255&s)];return l.length-=[0,0,2,1][a],l.join("")},_atob=global.atob?function(t){return global.atob(t)}:function(t){return t.replace(/\S{1,4}/g,cb_decode)},atob=function(t){return _atob(String(t).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t,"base64")).toString()}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t,"base64")).toString()}:function(t){return btou(_atob(t))},decode=function(t){return _decode(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var t=global.Base64;return global.Base64=_Base64,t};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(t){return encode(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global.Meteor&&(Base64=global.Base64),void 0!==module&&module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(exports,__webpack_require__("DuR2"))},zTeZ:function(t,e){}});
//# sourceMappingURL=13.7b76074601a70e5bca25.js.map