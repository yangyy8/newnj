webpackJsonp([43],{RqWo:function(e,t){},ZtMm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{show:!0,tableData1:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"},{id:"12987123",name:"好滋好味鸡蛋仔",address:"XXXXXX"},{id:"12987125",name:"好滋好味鸡蛋仔",address:"XXXXXX"},{id:"12987126",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData2:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData3:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData4:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData5:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData6:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData7:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData8:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData9:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData10:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData11:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData12:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData13:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData14:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}],tableData15:[{id:"12987122",name:"好滋好味鸡蛋仔",address:"XXXXXX"}]}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{gettop:function(){d1.scrollIntoView()},getY15:function(){d15.scrollIntoView()},getY14:function(){d14.scrollIntoView()},getY13:function(){d13.scrollIntoView()},getY12:function(){d12.scrollIntoView()},getY11:function(){d11.scrollIntoView()},getY10:function(){d10.scrollIntoView()},getY9:function(){d9.scrollIntoView()},getY8:function(){d8.scrollIntoView()},getY7:function(){d7.scrollIntoView()},getY6:function(){d6.scrollIntoView()},getY5:function(){d5.scrollIntoView()},getY4:function(){d4.scrollIntoView()},getY3:function(){d3.scrollIntoView()},getY2:function(){d2.scrollIntoView()},getY1:function(){d1.scrollIntoView()},getSQ:function(){0==this.show?this.show=!0:this.show=!1},handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#searchBar").offsetTop;e<=200?(t=300-Number(e),document.querySelector("#searchBar").style.top=t+"px"):document.querySelector("#searchBar").style.top="100px"}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"yymain"},[a("div",{staticClass:"yycontent"},[a("el-row",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.$router.go(-1)}}},[e._v("返回")])],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:20}},[a("div",{staticClass:"stu-title",attrs:{id:"d1"}},[e._v("基本信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData1,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"国家地区"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"婚姻状况"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"出身国家"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"出身地点"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"职业"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"作或学习单位"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"宗教信仰"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"特长爱好"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"是否华裔"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"联系email"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"中文名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"性别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"出生日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"身高"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"体重"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d2"}},[e._v("家庭成员信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData2,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"家庭成员职务"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"家庭成员工作单位"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"微信账号"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"Linkedln账号"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"特推账号"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"QQ账号"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"MSN账号"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"家庭成员姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"家庭成员关系"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"家庭成员电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"家庭成员手机"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"家庭成员邮箱"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d3"}},[e._v("通讯地址信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData3,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"永久家庭地址"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"永久家庭联系电话"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"永久家庭联系手机"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"永久家庭联系电话"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"永久家庭联系手机"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"永久家庭邮编"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"当前联系地址"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"当前联系电话"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"当前联系地址邮编"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"通知书接收方式"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"通讯地址方式"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"通知书收件人姓名"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"收件人国家"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"收件人省/城市"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"收件人地址"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"收件人联系手机"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"通知书投寄邮编"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"地址类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"居住区域类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"永久国家"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"永久城市"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d4"}},[e._v("教育经历信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData4,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"开始时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"结束时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"就读学校"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"专业或所获证书"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d5"}},[e._v("经济担保人信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData5,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"经济担保人邮箱"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"经济担保人地址"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"经济担保人姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"经济担保人与申请人关系"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"经济担保人工作单位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"经济担保人电话"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d6"}},[e._v("经费信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData6,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"奖学金结束日期"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"学费支付方式"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"是否全额奖学金"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"派遣途径"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"派遣区域"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"国际旅费"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"名额性质"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"经费来源"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"缴费类别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"CSC/CIS编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"奖学金考试日期"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d7"}},[e._v("留学生申请信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData7,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"注册结束时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"授课语言"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"院系"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"学习专业编码"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"专业"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"专业方向"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"专业方向英文"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"学习开始时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"学习结束时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"学制"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"停留期限"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"导师工号"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"导师名字"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"导师联系方式"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"项目名称"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"学生类别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"申请人个人邮箱"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"申请人学校邮箱"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"注册开始时间"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d8"}},[e._v("证件信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData8,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"旧护照号码"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"护照证件种类"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"入境日期"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"护照到期日期"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"签证种类"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"派出所地址"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"签证号码"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"签证到期日期"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"居留许可证到期日期"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"居留许可证号码"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"护照姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"护照姓"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"护照名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"护照号码"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d9"}},[e._v("推荐人信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData9,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"推荐单位地址"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"推荐单位"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"推荐人国家地区"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"推荐人职务"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"推荐单位传真"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"推荐单位与申请人关系"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"推荐人姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"推荐人手机"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"推荐人电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"推荐人电子邮件"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d10"}},[e._v("学籍信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData10,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"学位证书编号"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"学位证书授予时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"学位类别"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"学籍电子注册号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"学历注册（毕业）"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"结业证书编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"学籍状态"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d11"}},[e._v("学生状态信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData11,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"结毕业时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"弃权时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"离校时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"原就读院系"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"原就读专业"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"原就读大学"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"校区"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"办学类别"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"一卡通号码"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"银行卡号"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"银行卡姓名"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"行政班号"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"行政班级名称"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"基本信息备注"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"学生状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"申请时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"录取时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"报到时间"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d12"}},[e._v("语言相关信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData12,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专业学校"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"是否汉补"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"汉补学校"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"汉补学校英文"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"汉补开始时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"汉补结束时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"英语水平"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"其他语言"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"母语"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"汉语水平"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"HSK等级"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"HSK分数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"HSKK等级"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"HSKK得分"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d13"}},[e._v("在华紧急联系人信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData13,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"在华紧急联系人姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"联系人手机"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"联系人电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"联系人电子邮件"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"联系人工作单位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"联系人地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"紧急事务联系人邮编"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d14"}},[e._v("异动信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData14,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"异动类型名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"异动期限开始日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"异动期限结束日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"异动备注"}})],1),e._v(" "),a("div",{staticClass:"stu-title",attrs:{id:"d15"}},[e._v("工作经历信息")]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:e.tableData15,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"开始时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"结束时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"学习或工作单位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"职务"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"yright",attrs:{id:"searchBar"}},[a("div",{staticClass:"yyright"},[a("div",{staticClass:"ytf",on:{click:e.getSQ}},[e._v("收起")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY1}},[e._v("基本信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY2}},[e._v("家庭成员信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY3}},[e._v("通讯地址信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY4}},[e._v("教育经历信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY5}},[e._v("经济担保人信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY6}},[e._v("经费信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY7}},[e._v("留学生申请信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY8}},[e._v("证件信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY9}},[e._v("推荐人信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY10}},[e._v("学籍信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY11}},[e._v("学生状态信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY12}},[e._v("语言相关信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY13}},[e._v("在华紧急联系人信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY14}},[e._v("异动信息")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getY15}},[e._v("工作经历信息")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"ytf",on:{click:e.gettop}},[e._v("返回顶部")])])])])],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(s,l,!1,function(e){a("xMlL"),a("RqWo")},"data-v-64c5e446",null);t.default=r.exports},xMlL:function(e,t){}});
//# sourceMappingURL=43.d6d151cd0419adc80c84.js.map