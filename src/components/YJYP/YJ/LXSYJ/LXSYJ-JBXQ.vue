<template lang="html">
<div class="yymain">
  <div class="yycontent">
    <el-row style="text-align:right">
       <el-button   size="small" @click="$router.go(-1)">返回</el-button>
     </el-row>
  <el-row type="flex">
  <el-col :span="20">
      <div class="stu-title"  id="d1">基本信息</div>
          <el-table
           ref="multipleTable"
           :data="tableData1"
           border
           style="width: 100%" class="stu-table"
           >
           <el-table-column type="expand">
              <template slot-scope="props">
               <el-form label-position="left" inline class="demo-table-expand">
                 <el-form-item label="国家地区">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="婚姻状况">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="出身国家">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="出身地点">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="职业">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="作或学习单位">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="宗教信仰">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="特长爱好">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="是否华裔">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="联系email">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
               </el-form>
             </template>
           </el-table-column>
           <el-table-column
             prop="id"
             label="中文名">
           </el-table-column>
           <el-table-column
             prop="name"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="address"
             label="出生日期">
           </el-table-column>
           <el-table-column
             prop="address"
             label="身高">
           </el-table-column>
           <el-table-column
             prop="address"
             label="体重">
           </el-table-column>

          </el-table>

      <div class="stu-title"  id="d2">家庭成员信息</div>
          <el-table
           ref="multipleTable"
           :data="tableData2"
           border
           style="width: 100%" class="stu-table"
           >
           <el-table-column type="expand">
              <template slot-scope="props">
               <el-form label-position="left" inline class="demo-table-expand">
                 <el-form-item label="家庭成员职务">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="家庭成员工作单位">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="微信账号">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="Linkedln账号">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="特推账号">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="QQ账号">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="MSN账号">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>

               </el-form>
             </template>
           </el-table-column>
           <el-table-column
             prop="id"
             label="家庭成员姓名">
           </el-table-column>
           <el-table-column
             prop="name"
             label="家庭成员关系">
           </el-table-column>
           <el-table-column
             prop="address"
             label="家庭成员电话">
           </el-table-column>
           <el-table-column
             prop="address"
             label="家庭成员手机">
           </el-table-column>
           <el-table-column
             prop="address"
             label="家庭成员邮箱">
           </el-table-column>

          </el-table>

      <div class="stu-title" id="d3">通讯地址信息</div>
          <el-table
           ref="multipleTable"
           :data="tableData3"
           border
           style="width: 100%" class="stu-table"
           >
           <el-table-column type="expand">
              <template slot-scope="props">
               <el-form label-position="left" inline class="demo-table-expand">
                 <el-form-item label="永久家庭地址">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="永久家庭联系电话">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="永久家庭联系手机">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="永久家庭联系电话">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="永久家庭联系手机">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="永久家庭邮编">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="当前联系地址">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="当前联系电话">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="当前联系地址邮编">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="通知书接收方式">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="通讯地址方式">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="通知书收件人姓名">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="收件人国家">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="收件人省/城市">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="收件人地址">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="收件人联系手机">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="通知书投寄邮编">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
               </el-form>
             </template>
           </el-table-column>
           <el-table-column
             prop="id"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="name"
             label="地址类型">
           </el-table-column>
           <el-table-column
             prop="address"
             label="居住区域类型">
           </el-table-column>
           <el-table-column
             prop="address"
             label="永久国家">
           </el-table-column>
           <el-table-column
             prop="address"
             label="永久城市">
           </el-table-column>

          </el-table>

      <div class="stu-title" id="d4">教育经历信息</div>
          <el-table
           ref="multipleTable"
           :data="tableData4"
           border
           style="width: 100%" class="stu-table"
           >
           <!-- <el-table-column type="expand">
              <template slot-scope="props">
               <el-form label-position="left" inline class="demo-table-expand">
                 <el-form-item label="国家地区">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="婚姻状况">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="出身国家">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="出身地点">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="职业">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="作或学习单位">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="宗教信仰">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="特长爱好">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="是否华裔">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="联系email">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
               </el-form>
             </template>
           </el-table-column> -->
           <el-table-column
             prop="id"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="name"
             label="开始时间">
           </el-table-column>
           <el-table-column
             prop="address"
             label="结束时间">
           </el-table-column>
           <el-table-column
             prop="address"
             label="就读学校">
           </el-table-column>
           <el-table-column
             prop="address"
             label="专业或所获证书">
           </el-table-column>

            </el-table>

      <div class="stu-title" id="d5">经济担保人信息</div>
        <el-table
           ref="multipleTable"
           :data="tableData5"
           border
           style="width: 100%" class="stu-table"
           >
           <el-table-column type="expand">
              <template slot-scope="props">
               <el-form label-position="left" inline class="demo-table-expand">
                 <el-form-item label="经济担保人邮箱">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="经济担保人地址">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
               </el-form>
             </template>
           </el-table-column>
           <el-table-column
             prop="id"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="name"
             label="经济担保人姓名">
           </el-table-column>
           <el-table-column
             prop="address"
             label="经济担保人与申请人关系">
           </el-table-column>
           <el-table-column
             prop="address"
             label="经济担保人工作单位">
           </el-table-column>
           <el-table-column
             prop="address"
             label="经济担保人电话">
           </el-table-column>
         </el-table>

      <div class="stu-title" id="d6">经费信息</div>
        <el-table
                   ref="multipleTable"
                   :data="tableData6"
                   border
                   style="width: 100%" class="stu-table"
                   >
                   <el-table-column type="expand">
                      <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                         <el-form-item label="奖学金结束日期">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="学费支付方式">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="是否全额奖学金">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="派遣途径">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="派遣区域">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="国际旅费">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="名额性质">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>

                       </el-form>
                     </template>
                   </el-table-column>
                   <el-table-column
                     prop="id"
                     label="姓名">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="经费来源">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="缴费类别">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="CSC/CIS编号">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="奖学金考试日期">
                   </el-table-column>

               </el-table>

      <div class="stu-title" id="d7">留学生申请信息</div>
        <el-table
           ref="multipleTable"
           :data="tableData7"
           border
           style="width: 100%" class="stu-table"
           >
           <el-table-column type="expand">
              <template slot-scope="props">
               <el-form label-position="left" inline class="demo-table-expand">
                 <el-form-item label="注册结束时间">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="授课语言">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="院系">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="学习专业编码">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="专业">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="专业方向">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="专业方向英文">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="学习开始时间">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="学习结束时间">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="学制">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="停留期限">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="导师工号">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="导师名字">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="导师联系方式">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
                 <el-form-item label="项目名称">
                   <span>{{ props.row.address }}</span>
                 </el-form-item>
               </el-form>
             </template>
           </el-table-column>
           <el-table-column
             prop="id"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="name"
             label="学生类别">
           </el-table-column>
           <el-table-column
             prop="address"
             label="申请人个人邮箱">
           </el-table-column>
           <el-table-column
             prop="address"
             label="申请人学校邮箱">
           </el-table-column>
           <el-table-column
             prop="address"
             label="注册开始时间">
           </el-table-column>
       </el-table>
      <div class="stu-title" id="d8">证件信息</div>
        <el-table
                   ref="multipleTable"
                   :data="tableData8"
                   border
                   style="width: 100%" class="stu-table"
                   >
                   <el-table-column type="expand">
                      <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                         <el-form-item label="旧护照号码">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="护照证件种类">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="入境日期">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="护照到期日期">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="签证种类">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="派出所地址">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="签证号码">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="签证到期日期">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="居留许可证到期日期">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="居留许可证号码">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                       </el-form>
                     </template>
                   </el-table-column>
                   <el-table-column
                     prop="id"
                     label="姓名">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="护照姓名">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="护照姓">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="护照名">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="护照号码">
                   </el-table-column>

               </el-table>

      <div class="stu-title" id="d9">推荐人信息</div>
       <el-table
                   ref="multipleTable"
                   :data="tableData9"
                   border
                   style="width: 100%" class="stu-table"
                   >
                   <el-table-column type="expand">
                      <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                         <el-form-item label="推荐单位地址">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="推荐单位">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="推荐人国家地区">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="推荐人职务">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="推荐单位传真">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="推荐单位与申请人关系">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>

                       </el-form>
                     </template>
                   </el-table-column>
                   <el-table-column
                     prop="id"
                     label="姓名">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="推荐人姓名">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="推荐人手机">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="推荐人电话">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="推荐人电子邮件">
                   </el-table-column>

               </el-table>

       <div class="stu-title" id="d10">学籍信息</div>
       <el-table
                   ref="multipleTable"
                   :data="tableData10"
                   border
                   style="width: 100%" class="stu-table"
                   >
                   <el-table-column type="expand">
                      <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                         <el-form-item label="学位证书编号">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="学位证书授予时间">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="学位类别">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>

                       </el-form>
                     </template>
                   </el-table-column>
                   <el-table-column
                     prop="id"
                     label="姓名">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="学籍电子注册号">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="学历注册（毕业）">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="结业证书编号">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="学籍状态">
                   </el-table-column>

               </el-table>

       <div class="stu-title" id="d11">学生状态信息</div>
       <el-table
                   ref="multipleTable"
                   :data="tableData11"
                   border
                   style="width: 100%" class="stu-table"
                   >
                   <el-table-column type="expand">
                      <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                         <el-form-item label="结毕业时间">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="弃权时间">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="离校时间">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="原就读院系">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="原就读专业">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="原就读大学">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="校区">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="办学类别">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="一卡通号码">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="银行卡号">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="银行卡姓名">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="行政班号">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="行政班级名称">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="基本信息备注">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                       </el-form>
                     </template>
                   </el-table-column>
                   <el-table-column
                     prop="id"
                     label="姓名">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="学生状态">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="申请时间">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="录取时间">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="报到时间">
                   </el-table-column>

               </el-table>

       <div class="stu-title" id="d12">语言相关信息</div>
       <el-table
                   ref="multipleTable"
                   :data="tableData12"
                   border
                   style="width: 100%" class="stu-table"
                   >
                   <el-table-column type="expand">
                      <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                         <el-form-item label="专业学校">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="是否汉补">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="汉补学校">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="汉补学校英文">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="汉补开始时间">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="汉补结束时间">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="英语水平">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="其他语言">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="母语">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>

                       </el-form>
                     </template>
                   </el-table-column>
                   <el-table-column
                     prop="id"
                     label="汉语水平">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="HSK等级">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="HSK分数">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="HSKK等级">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="HSKK得分">
                   </el-table-column>

               </el-table>

       <div class="stu-title" id="d13">在华紧急联系人信息</div>
       <el-table
                   ref="multipleTable"
                   :data="tableData13"
                   border
                   style="width: 100%" class="stu-table"
                   >
                   <!-- <el-table-column type="expand">
                      <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                         <el-form-item label="国家地区">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="婚姻状况">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="出身国家">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="出身地点">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="职业">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="作或学习单位">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="宗教信仰">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="特长爱好">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="是否华裔">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="联系email">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                       </el-form>
                     </template>
                   </el-table-column> -->
                   <el-table-column
                     prop="id"
                     label="在华紧急联系人姓名">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="联系人手机">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="联系人电话">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="联系人电子邮件">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="联系人工作单位">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="联系人地址">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="紧急事务联系人邮编">
                   </el-table-column>

               </el-table>

       <div class="stu-title" id="d14">异动信息</div>
              <el-table
                   ref="multipleTable"
                   :data="tableData14"
                   border
                   style="width: 100%" class="stu-table"
                   >
                   <!-- <el-table-column type="expand">
                      <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                         <el-form-item label="国家地区">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="婚姻状况">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="出身国家">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="出身地点">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="职业">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="作或学习单位">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="宗教信仰">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="特长爱好">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="是否华裔">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="联系email">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                       </el-form>
                     </template>
                   </el-table-column> -->
                   <el-table-column
                     prop="id"
                     label="姓名">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="异动类型名称">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="异动期限开始日期">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="异动期限结束日期">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="异动备注">
                   </el-table-column>

               </el-table>

      <div class="stu-title" id="d15">工作经历信息</div>
       <el-table
                   ref="multipleTable"
                   :data="tableData15"
                   border
                   style="width: 100%" class="stu-table"
                   >
                   <!-- <el-table-column type="expand">
                      <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                         <el-form-item label="国家地区">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="婚姻状况">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="出身国家">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="出身地点">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="职业">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="作或学习单位">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="宗教信仰">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="特长爱好">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="是否华裔">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                         <el-form-item label="联系email">
                           <span>{{ props.row.address }}</span>
                         </el-form-item>
                       </el-form>
                     </template>
                   </el-table-column> -->
                   <el-table-column
                     prop="id"
                     label="姓名">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="开始时间">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="结束时间">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="学习或工作单位">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="职务">
                   </el-table-column>
         </el-table>
       </el-col>
       <el-col :span="4">
<div class="yright"  id="searchBar">
         <div class="yyright">
           <div class="ytf" @click="getSQ">收起</div>
           <p @click="getY1" v-show="show">基本信息</p>
           <p @click="getY2" v-show="show">家庭成员信息</p>
           <p @click="getY3" v-show="show">通讯地址信息</p>
           <p @click="getY4" v-show="show">教育经历信息</p>
           <p @click="getY5" v-show="show">经济担保人信息</p>
           <p @click="getY6" v-show="show">经费信息</p>
           <p @click="getY7" v-show="show">留学生申请信息</p>
           <p @click="getY8" v-show="show">证件信息</p>
           <p @click="getY9" v-show="show">推荐人信息</p>
           <p @click="getY10" v-show="show">学籍信息</p>
           <p @click="getY11" v-show="show">学生状态信息</p>
           <p @click="getY12" v-show="show">语言相关信息</p>
           <p @click="getY13" v-show="show">在华紧急联系人信息</p>
           <p @click="getY14" v-show="show">异动信息</p>
           <p @click="getY15" v-show="show">工作经历信息</p>
           <div class="ytf" v-show="show" @click="gettop">返回顶部</div>
         </div>
   </div>
       </el-col>
</el-row>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {

          show:true,
          tableData1: [{
             id: '12987122',
             name: '好滋好味鸡蛋仔',
             address: 'XXXXXX',
           }, {
             id: '12987123',
             name: '好滋好味鸡蛋仔',
             address: 'XXXXXX',
           }, {
             id: '12987125',
             name: '好滋好味鸡蛋仔',
             address: 'XXXXXX',
           }, {
             id: '12987126',
             name: '好滋好味鸡蛋仔',
             address: 'XXXXXX',
           }],
           tableData2: [{
              id: '12987122',
              name: '好滋好味鸡蛋仔',
              address: 'XXXXXX',
            }],
            tableData3: [{
               id: '12987122',
               name: '好滋好味鸡蛋仔',
               address: 'XXXXXX',
             }],
             tableData4: [{
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                address: 'XXXXXX',
              }],
              tableData5: [{
                 id: '12987122',
                 name: '好滋好味鸡蛋仔',
                 address: 'XXXXXX',
               }],
               tableData6: [{
                  id: '12987122',
                  name: '好滋好味鸡蛋仔',
                  address: 'XXXXXX',
                }],
                tableData7: [{
                   id: '12987122',
                   name: '好滋好味鸡蛋仔',
                   address: 'XXXXXX',
                 }],
                 tableData8: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    address: 'XXXXXX',
                  }],
                  tableData9: [{
                     id: '12987122',
                     name: '好滋好味鸡蛋仔',
                     address: 'XXXXXX',
                   }],
                   tableData10: [{
                      id: '12987122',
                      name: '好滋好味鸡蛋仔',
                      address: 'XXXXXX',
                    }],
                    tableData11: [{
                       id: '12987122',
                       name: '好滋好味鸡蛋仔',
                       address: 'XXXXXX',
                     }],
                     tableData12: [{
                        id: '12987122',
                        name: '好滋好味鸡蛋仔',
                        address: 'XXXXXX',
                      }],
                      tableData13: [{
                         id: '12987122',
                         name: '好滋好味鸡蛋仔',
                         address: 'XXXXXX',
                       }],
                       tableData14: [{
                          id: '12987122',
                          name: '好滋好味鸡蛋仔',
                          address: 'XXXXXX',
                        }],
                        tableData15: [{
                           id: '12987122',
                           name: '好滋好味鸡蛋仔',
                           address: 'XXXXXX',
                         }],
        };
  },
  mounted() {
window.addEventListener('scroll', this.handleScroll);
  },
  methods: {

    gettop(){
      d1.scrollIntoView();
    },
    getY15(){
      d15.scrollIntoView();
     },
    getY14(){
      d14.scrollIntoView();
     },
    getY13(){
      d13.scrollIntoView();
     },
    getY12(){
      d12.scrollIntoView();
     },
    getY11(){
       d11.scrollIntoView();
      },
    getY10(){
      d10.scrollIntoView();
      },
    getY9(){
      d9.scrollIntoView();
      },
    getY8(){
        d8.scrollIntoView();
        },
    getY7(){
        d7.scrollIntoView();
      },
    getY6(){
        d6.scrollIntoView();
     },
    getY5(){
        d5.scrollIntoView();
      },
    getY4(){
        d4.scrollIntoView();
      },
    getY3(){
        d3.scrollIntoView();
     },
    getY2(){
        d2.scrollIntoView();
        },
    getY1(){
          d1.scrollIntoView();
    },
    getSQ(){
      if(this.show==false){
        this.show=true;
      }else {
          this.show=false;
      }

    },
    handleScroll () { //改变元素#searchBar的top值
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var offsetTop = document.querySelector('#searchBar').offsetTop;

    if(scrollTop<=200){
      offsetTop = 300 - Number(scrollTop);
      document.querySelector('#searchBar').style.top = offsetTop+'px';
    }else{
      document.querySelector('#searchBar').style.top = '100px';
    }
  },

  },
  destroyed () {//离开该页面需要移除这个监听的事件
  window.removeEventListener('scroll', this.handleScroll)
},

}
</script>
<style scoped>
.stu-title{padding-top:10px;}
.yright{
  position: fixed;
  bottom: 100px;
  top: 265px;/*开始处于距离顶部300px的位置，之后随着滚动条滚动top值改变，然后在top==100时停止*/
  right: 100px;
  box-sizing: border-box;
  z-index: 2;

}
.yyright {
  border: 1px solid #cccccc; margin:15%; font-size: 12px;width: 140px;
}
.yyright p{ height: 20px; padding-left:15px; cursor: pointer;}
.yyright p:hover{ color: red}
.yyright p:active{ color: red}
.ytf{line-height: 20px; background: #BDD9F5; text-align: center; color: #1A77C4; cursor: pointer;}
</style>
<style>
.demo-table-expand {
  font-size: 0;
  text-align: left;
  padding: 0px 10px 0px 50px;
}
.demo-table-expand label {
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 25%;
}
</style>
