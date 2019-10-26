<template lang="html">
  <el-form :model="lxsinfo">
    <el-row :gutter="2"  class="mb-6">
      <el-col :span="8" class="input-item">
        <span class="input-text">学校名称：</span>
        <span class="input-input detailinput">  {{lxsinfo.SCHOOLID_DESC}}</span>
      </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">申请编号：</span>
          <span class="input-input detailinput">  {{lxsinfo.APPLYNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学号：</span>
          <span class="input-input detailinput">  {{lxsinfo.STUDENTNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">中文姓名：</span>
         <span class="input-input detailinput">  {{lxsinfo.NAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">护照姓名：</span>
         <span class="input-input detailinput">  {{lxsinfo.ENGLISHNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">护照姓：</span>
          <span class="input-input detailinput">  {{lxsinfo.LASTNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">护照名：</span>
          <span class="input-input detailinput">  {{lxsinfo.GIVENNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">性别：</span>
          <span class="input-input detailinput">  {{lxsinfo.SEX_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">国籍：</span>
          <span class="input-input detailinput">  {{lxsinfo.COUNTRYID_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">婚姻状况：</span>
          <span class="input-input detailinput">  {{lxsinfo.MARRYSTATUS_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.BORNEDDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生国家：</span>
          <span class="input-input detailinput">  {{lxsinfo.BORNEDCOUNTRYID_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生地点：</span>
          <span class="input-input detailinput">  {{lxsinfo.BORNEDADDRESS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">护照号码：</span>
          <span class="input-input detailinput">  {{lxsinfo.PASSPORTNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旧护照号码：</span>
          <span class="input-input detailinput">  {{lxsinfo.OLDPASSPORTNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">护照证件种类：</span>
          <span class="input-input detailinput">  {{lxsinfo.PASSPORTTYPE_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">入境日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.ENTERDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学生类别：</span>
          <span class="input-input detailinput">  {{lxsinfo.APPLYTYPE_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">授课语言：</span>
          <span class="input-input detailinput">  {{lxsinfo.TEACHLANGUAGE_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">院系名称：</span>
          <span class="input-input detailinput">  {{lxsinfo.COLLEGENAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学习专业：</span>
          <span class="input-input detailinput">  {{lxsinfo.MAJORNAME}}</span>
        </el-col>
        <!-- <el-col :span="8" class="input-item">
          <span class="input-text">通道号：</span>
          <span class="input-input detailinput">  {{lxsinfo.CHANNELNO}}</span>
        </el-col> -->
        <el-col :span="8" class="input-item">
          <span class="input-text" title="专业学习开始时间">专业学习开始时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.STUDYSTARTDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">专业学习结束时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.STUDYENDDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">汉语水平：</span>
          <span class="input-input detailinput">  {{lxsinfo.LANGUAGESKILL_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">英语水平：</span>
          <span class="input-input detailinput">  {{lxsinfo.ENGLISHLANGUAGESKILL_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">其他语言能力：</span>
          <span class="input-input detailinput">  {{lxsinfo.OTHERLANGUAGE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">职业：</span>
          <span class="input-input detailinput">  {{lxsinfo.CAREERNAME}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
          <span class="input-text">最后学历：</span>
          <span class="input-input detailinput">  {{lxsinfo.LASTEDUCATIONNAME}}</span>
        </el-col>
        <el-col :span="16" class="input-item">
          <span class="input-text"  style="width:15%!important">学习或工作单位：</span>
          <span class="input-input detailinput" style="width:80%!important">  {{lxsinfo.WORKPLACE}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
          <span class="input-text">停留期限：</span>
          <span class="input-input detailinput">  {{lxsinfo.TLQX}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">学籍状态：</span>
         <span class="input-input detailinput">  {{lxsinfo.STUDYSTATUS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">学生状态：</span>
         <span class="input-input detailinput">  {{lxsinfo.STATUS_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">申请人个人邮箱：</span>
          <span class="input-input detailinput">  {{lxsinfo.MEMBEREMAIL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">申请人学校邮箱：</span>
          <span class="input-input detailinput">  {{lxsinfo.SCHOOLEMAIL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">数据来源：</span>
          <span class="input-input detailinput">  {{lxsinfo.DATAFROM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">申请时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.APPLYDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">录取时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.FINISHDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">结毕业时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.GRADUATEDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">弃权时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.ABSTAINDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">离校时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.LEAVEDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">离校原因：</span>
          <span class="input-input detailinput">  {{lxsinfo.LEAVEREASON}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">汉补学校：</span>
          <span class="input-input detailinput">  {{lxsinfo.TUISCHOOLNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">原就读院系：</span>
          <span class="input-input detailinput">  {{lxsinfo.DEPARTMENT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">母语：</span>
          <span class="input-input detailinput">  {{lxsinfo.LANGUAGENAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">是否华裔：</span>
          <span class="input-input detailinput">  {{lxsinfo.ISOVERSEA}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">原就读专业：</span>
          <span class="input-input detailinput">  {{lxsinfo.OLDMAJOR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">爱好特长：</span>
          <span class="input-input detailinput">  {{lxsinfo.HOBBY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">原来自国家或地区：</span>
          <span class="input-input detailinput">  {{lxsinfo.RESTRICT_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">何时取得当前国籍：</span>
          <span class="input-input detailinput">  {{lxsinfo.GAINCOUNTRYDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学制：</span>
          <span class="input-input detailinput">  {{lxsinfo.YEARS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">身高：</span>
          <span class="input-input detailinput">  {{lxsinfo.BODYHEIGHT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">专业学习学校：</span>
          <span class="input-input detailinput">  {{lxsinfo.EMAJORSCHOOL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">宗教信仰：</span>
          <span class="input-input detailinput">  {{lxsinfo.RELIGIONNAME_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">原就读大学：</span>
          <span class="input-input detailinput">  {{lxsinfo.UNIVERSITY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">通知书收件人姓名：</span>
          <span class="input-input detailinput">  {{lxsinfo.RECEIVERNAME}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
         <span class="input-text">当前联系地址：</span>
         <span class="input-input detailinput">  {{lxsinfo.CONTACTADDRESS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">紧急事务联系人单位：</span>
          <span class="input-input detailinput">  {{lxsinfo.EMERGENCYCOMPANY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">永久家庭联系手机：</span>
          <span class="input-input detailinput">  {{lxsinfo.HOMEMOBILE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐人姓名：</span>
          <span class="input-input detailinput">  {{lxsinfo.GUARANTORENNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐单位：</span>
          <span class="input-input detailinput">  {{lxsinfo.GUARWORKPLACE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">经济担保人与申请人关系：</span>
          <span class="input-input detailinput">  {{lxsinfo.SSRELATIVE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">护照到期日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.PASSPORTEXPIRE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">居住区域类型：</span>
          <span class="input-input detailinput">  {{lxsinfo.ACCOMHOTELTYPE_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">收件人联系手机：</span>
          <span class="input-input detailinput">  {{lxsinfo.RECEIVERMOBILE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">收件人国家：</span>
          <span class="input-input detailinput">  {{lxsinfo.RECEIVERCOUNTRYID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">收件人省/城市：</span>
          <span class="input-input detailinput">  {{lxsinfo.RECEIVERCITY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">收件人地址：</span>
          <span class="input-input detailinput">  {{lxsinfo.RECEIVERADDRESS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">当前联系地址邮编：</span>
          <span class="input-input detailinput">  {{lxsinfo.CONTACTZIP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">永久家庭联系电话：</span>
          <span class="input-input detailinput">  {{lxsinfo.HOMEPHONE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐人国籍：</span>
          <span class="input-input detailinput">  {{lxsinfo.GUARCOUNTRY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐单位传真：</span>
          <span class="input-input detailinput"> {{lxsinfo.GUARFAX}} </span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">经济担保人姓名：</span>
          <span class="input-input detailinput">  {{lxsinfo.SELFSUPPORTER}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证种类：</span>
          <span class="input-input detailinput">{{lxsinfo.VISATYPENAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="派出所地址">派出所地址：</span>
          <span class="input-input detailinput">  {{lxsinfo.POLICESTATION}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text">紧急事务联系人姓名：</span>
          <span class="input-input detailinput">  {{lxsinfo.EMERGENCYNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">永久家庭邮编：</span>
          <span class="input-input detailinput">  {{lxsinfo.HOMEZIP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐人职务：</span>
          <span class="input-input detailinput">  {{lxsinfo.GUARCAREER}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐单位电子邮件：</span>
          <span class="input-input detailinput">  {{lxsinfo.GUAREMAIL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">经济担保人工作单位：</span>
          <span class="input-input detailinput">  {{lxsinfo.SELFWORK}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">校区：</span>
          <span class="input-input detailinput">  {{lxsinfo.SCHOOLRESTRICT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证号码：</span>
          <span class="input-input detailinput">  {{lxsinfo.VISANO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学位证书编号：</span>
          <span class="input-input detailinput">  {{lxsinfo.XWZSNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">通知书投寄邮编：</span>
          <span class="input-input detailinput">  {{lxsinfo.RECEIVERZIP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">紧急事务联系人手机：</span>
          <span class="input-input detailinput">  {{lxsinfo.EMERGENCYMOBILE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">永久家庭地址：</span>
          <span class="input-input detailinput">  {{lxsinfo.HOMEADDRESS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐单位地址：</span>
          <span class="input-input detailinput">  {{lxsinfo.GUARADDRESS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐单位与申请人关系：</span>
          <span class="input-input detailinput">  {{lxsinfo.GUARRELATION}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">经济担保人电话：</span>
          <span class="input-input detailinput">  {{lxsinfo.SELFPHONE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证到期日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.VISAEXPIRE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学位证书授予时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.XWZSDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">当前联系电话：</span>
          <span class="input-input detailinput">  {{lxsinfo.CONTACTPHONE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">通知书接收方式：</span>
          <span class="input-input detailinput">  {{lxsinfo.RECEIVERTYPE_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">紧急事务联系人电话：</span>
          <span class="input-input detailinput">  {{lxsinfo.EMERGENCYPHONE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">紧急事务联系人电邮：</span>
          <span class="input-input detailinput">  {{lxsinfo.EMERGENCYEMAIL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">永久国家：</span>
          <span class="input-input detailinput">  {{lxsinfo.HOMECOUNTRYID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">永久省/城市：</span>
          <span class="input-input detailinput">  {{lxsinfo.HOMECITY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐人手机：</span>
          <span class="input-input detailinput">  {{lxsinfo.GUARMOBILE}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
         <span class="input-text">推荐人电话：</span>
         <span class="input-input detailinput">  {{lxsinfo.GUARPHONE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">经济担保人email：</span>
          <span class="input-input detailinput">  {{lxsinfo.SELFEMAIL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">经济担保人地址：</span>
          <span class="input-input detailinput">  {{lxsinfo.SELFADDRESS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">201/202表编号：</span>
          <span class="input-input detailinput">  {{lxsinfo.NO201}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">办学类别：</span>
          <span class="input-input detailinput">  {{lxsinfo.BXLB_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学位类别：</span>
          <span class="input-input detailinput">  {{lxsinfo.DEGREE_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">经费来源：</span>
          <span class="input-input detailinput">  {{lxsinfo.JFLY_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">缴费类别：</span>
          <span class="input-input detailinput">  {{lxsinfo.JFLB}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">CSC/CIS编号：</span>
          <span class="input-input detailinput">  {{lxsinfo.CSCNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">银行卡号：</span>
          <span class="input-input detailinput">  {{lxsinfo.CREDITNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">银行卡姓名：</span>
          <span class="input-input detailinput">  {{lxsinfo.CREDITNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">奖学金开始日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.SCHOLARSTARTDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">奖学金结束日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.SCHOLARENDDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学费支付方式：</span>
          <span class="input-input detailinput">  {{lxsinfo.JXJSTUDYSCHOLAR_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">是全额奖学金：</span>
          <span class="input-input detailinput">  {{lxsinfo.JXJFULLSCHOLARSHIP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">派遣途径：</span>
          <span class="input-input detailinput"> {{lxsinfo.SENDWAY}} </span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">派遣区域：</span>
          <span class="input-input detailinput">  {{lxsinfo.SENDRESTICT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">异动类型名称：</span>
          <span class="input-input detailinput">{{lxsinfo.ACCIDENT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="异动期限开始日期">异动期限开始日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.POLICESTATION}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
         <span class="input-text">异动期限结束日期：</span>
         <span class="input-input detailinput">  {{lxsinfo.ACCIDENTENDDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">异动备注：</span>
          <span class="input-input detailinput">  {{lxsinfo.ACCIDENTMEMO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-开始时间1：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTARTDATE1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">2教育经历-结束时间1：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUENDDATE1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-就读学校1：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTUDYPLACE1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="教育经历-专业或所获证书1">教育经历-专业或所获证书1：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTUHISMAJOR1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-开始时间2：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTARTDATE2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-结束时间2：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUENDDATE2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-就读学校2：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTUDYPLACE2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-专业或所获证书2：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTUHISMAJOR2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-开始时间3：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTARTDATE3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-结束时间3：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUENDDATE3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-就读学校3：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTUDYPLACE3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-专业或所获证书3：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTUHISMAJOR3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-开始时间4：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTARTDATE4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-结束时间4：</span>
          <span class="input-input detailinput"> {{lxsinfo.EDUENDDATE4}} </span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-就读学校4：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUSTUDYPLACE4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">教育经历-专业或所获证书4：</span>
          <span class="input-input detailinput">{{lxsinfo.EDUSTUHISMAJOR4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作经历-开始时间1">工作经历-开始时间1：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHSTARTDATE1}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
         <span class="input-text">工作经历-结束时间1：</span>
         <span class="input-input detailinput">  {{lxsinfo.WHENDDATE1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-学习或工作单位1：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHWORKPLACE1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-职务1：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHCAREER1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-开始时间2：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHSTARTDATE2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-结束时间2：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHENDDATE2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作经历-学习或工作单位2">工作经历-学习或工作单位2：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHWORKPLACE2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-职务2：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHCAREER2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-开始时间3：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHSTARTDATE3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-结束时间3：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHENDDATE3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-学习或工作单位3：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHWORKPLACE3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-职务3：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHCAREER3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-开始时间4：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHSTARTDATE4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-结束时间4：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHENDDATE4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-学习或工作单位4：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHWORKPLACE4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作经历-职务4：</span>
          <span class="input-input detailinput">  {{lxsinfo.WHCAREER4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-关系1：</span>
          <span class="input-input detailinput"> {{lxsinfo.FMRELATIVE1}} </span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-姓名1：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMNAME1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-电话1：</span>
          <span class="input-input detailinput">{{lxsinfo.FMPHONE1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-Email1：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMEMAIL1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-职务1：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMDUTY1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-工作单位1：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMWORKPLACE1}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-关系2：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMRELATIVE2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-姓名2：</span>
          <span class="input-input detailinput"> {{lxsinfo.FMNAME2}} </span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-电话2：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMPHONE2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-Email2：</span>
          <span class="input-input detailinput">{{lxsinfo.FMEMAIL2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-职务2：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMDUTY2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-工作单位2：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMWORKPLACE2}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-关系3：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMRELATIVE3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-姓名3：</span>
          <span class="input-input detailinput"> {{lxsinfo.FMNAME3}} </span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-电话3：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMPHONE3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-Email3：</span>
          <span class="input-input detailinput">{{lxsinfo.FMEMAIL3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-职务3：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMDUTY3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-工作单位3：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMWORKPLACE3}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-关系4：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMRELATIVE4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-姓名4：</span>
          <span class="input-input detailinput"> {{lxsinfo.FMNAME4}} </span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-电话4：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMPHONE4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-Email4：</span>
          <span class="input-input detailinput">{{lxsinfo.FMEMAIL4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-职务4：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMDUTY4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭成员-工作单位4：</span>
          <span class="input-input detailinput">  {{lxsinfo.FMWORKPLACE4}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">更新时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.UPDATETIME}}</span>
        </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name:'LXSXXZX',
  props:['type','xid','random'],
  data(){
    return{
      lxsinfo:{},
    }
  },
  mounted(){
      this.initData();
   },
  watch:{
    random:function(newVal,oldVal){
      this.random=newVal;
      this.initData();
    },
  },

  methods:{
    initData(){
      switch (this.type) {
        case 2://人员画像&在校学生突发增量预警&留学生综合分析
            this.getData2();
            break;
        default:

      }
    },
    getData2(){
      this.lxsinfo = this.xid;
    },
  },
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.el-carousel__item:nth-child(2n) {
  /* background: url(../../../assets/img/t1.png); */
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.crcolor {
  background: #EFF3F6;padding:0 10px;
}
.input-text {
  text-align: left !important; width: 30%!important;
}
.input-input {
  width: 60%!important;
}
</style>
<style>
  .el-button+.el-button{margin-left: 0!important;}
  .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
  .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
  .bj .el-dialog__wrapper {
    background: #000;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
