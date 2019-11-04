<template lang="html">
<el-form :model="mhinfo">
    <el-row :gutter="2"  class="mb-6">
        <el-col :span="8" class="input-item">
          <span class="input-text">居住地址：</span>
          <span class="input-input detailinput">  {{mhinfo.ADRESS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客出入境标识：</span>
          <span class="input-input detailinput">  {{mhinfo.BORDER_TYPE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件号码：</span>
          <span class="input-input detailinput">  {{mhinfo.CERT_NO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件类型：</span>
          <span class="input-input detailinput">  {{mhinfo.CERT_TYPE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">城市：</span>
          <span class="input-input detailinput">  {{mhinfo.CITY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">值机更改标识：</span>
          <span class="input-input detailinput">  {{mhinfo.CKI_CHG}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">旅客注释标识：</span>
         <span class="input-input detailinput">  {{mhinfo.CMT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">导入数据时间：</span>
         <span class="input-input detailinput">  {{mhinfo.CT_DT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">数据来源：</span>
          <span class="input-input detailinput">  {{mhinfo.DATASOURCE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">删除标志：</span>
          <span class="input-input detailinput">  {{mhinfo.DELETE_FLAG}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">删除航班ID：</span>
          <span class="input-input detailinput">  {{mhinfo.DELETE_FLT_ID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">联程旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.EDI}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text">常客号：</span>
          <span class="input-input detailinput">  {{mhinfo.FFQNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">原始数据包的文件名：</span>
          <span class="input-input detailinput">  {{mhinfo.FILENAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">航班日期：</span>
          <span class="input-input detailinput">  {{mhinfo.FLT_DATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">航班号：</span>
          <span class="input-input detailinput">  {{mhinfo.FLT_NUMBER}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">航班后缀：</span>
          <span class="input-input detailinput">  {{mhinfo.FLT_SUFFIX}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">国家ICAO编码：</span>
          <span class="input-input detailinput">  {{mhinfo.ICAO_CODE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">占用折椅旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.JMP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">舱位：</span>
          <span class="input-input detailinput">  {{mhinfo.PAXCLASS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{mhinfo.PDT_BIRTHDAY}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text">出生地：</span>
          <span class="input-input detailinput">  {{mhinfo.PDT_BIR_ADRESS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">过期日期：</span>
          <span class="input-input detailinput">  {{mhinfo.PDT_EXPRIRYDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客名：</span>
          <span class="input-input detailinput">  {{mhinfo.PDT_FIRSTNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">发证日期：</span>
          <span class="input-input detailinput">  {{mhinfo.PDT_ISSUEDATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">发证国家或城市：</span>
          <span class="input-input detailinput">  {{mhinfo.PDT_ISSUE_COUNTR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客姓：</span>
          <span class="input-input detailinput">  {{mhinfo.PDT_LASTNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">旅客中间名：</span>
         <span class="input-input detailinput">  {{mhinfo.PDT_MIDNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">ICSpnr记录编号：</span>
         <span class="input-input detailinput">  {{mhinfo.PNR_REF}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">邮编：</span>
          <span class="input-input detailinput">  {{mhinfo.POSTCODE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">省份：</span>
          <span class="input-input detailinput">  {{mhinfo.PROVINCE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">值机标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_ACC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">AEC旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_AEC}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text">执行值机的代理号：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_AGENT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">入库时间：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_ARRIVE_TIME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">分配/预留座位类型：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_ARST}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="被他人占用的座位标识信息">被他人占用的座位标识信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_ASOBOI}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">手提狗笼标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_AVIH}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">行李：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_BAGGAGE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">行李总件数：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_BAGS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">行李总重量：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_BAGWGT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">盲人旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_BLND}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text">旅客登机号信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_BRDNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">摇篮类型：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_BSCT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客姓名：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_CHNNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">城市取消标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_CITYCANC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">执行旅客操作的终端号：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_CKIPID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">执行值机时间信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_CKITIME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">旅客舱位信息：</span>
         <span class="input-input detailinput">  {{mhinfo.PSR_CLASS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">CRS中记录信息：</span>
         <span class="input-input detailinput">  {{mhinfo.PSR_CRS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">联系订票人信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_CTCA}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">耳聋旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_DEAF}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">拉下类型标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_DEP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="进港联乘EDI旅客标识">进港联乘EDI旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_EDII}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text" title="出港联乘EDI旅客标识">出港联乘EDI旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_EDIO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">EDI旅客始发站：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_EDI_DEPT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">EDI旅客到达站：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_EDI_DEST}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="EDIFACT警告项">EDIFACT警告项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_EDI_WARN}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">电子客票旅客：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_EFMN}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">移民旅客：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_EMIG}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">额外占座：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_EXSTSEAT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">常旅客/ASR旅客信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_FFFR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">非电子客票旅客的身份证号：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_FOID_NONET}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text">性别：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_GENDER}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">团体人数：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_GROUP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">HBPR指令中行李带信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_HBPRBG}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_HOSTNBR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">ICS中记录信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_ICS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">不许可旅客：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_INAD}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">入港：</span>
         <span class="input-input detailinput">  {{mhinfo.PSR_INBOUND}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">婴儿标识：</span>
         <span class="input-input detailinput">  {{mhinfo.PSR_INF}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">婴儿姓名：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_INFNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客信息项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_MSG}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客姓名：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_NAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="广播通知消息">广播通知消息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_NOTIFY}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text" title="执行值机操作的办公室">执行值机操作的办公室：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_OFFICE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">被拉下旅客表示信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_OFL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="最初预定+D163座位项">最初预定+D163座位项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_OSR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="EDIFACT警告项">EDIFACT警告项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_EDI_WARN}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出港：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_OUTBOUND}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">紧急联系信息项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_PCTC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">宠物笼子标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_PETC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客信息清单项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_PIL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客服务信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_PSM}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text">过境信息项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_PSPT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">给AEC旅客重新订座标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_REA}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">从某航班再值机信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_RFFI}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">预留座位种类信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_RST}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">再值机到某航班信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_RTFI}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">速运行李标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_RUSH}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">候补号：</span>
         <span class="input-input detailinput">  {{mhinfo.PSR_SBYNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text" title="给AEC旅客重新分配座位标识">给AEC旅客重新分配座位标识：</span>
         <span class="input-input detailinput">  {{mhinfo.PSR_SEA}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">当前航站的座位号：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_SEATNBR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客座位信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_SEG_SEATNBR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">共享航班：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_SIP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="座位个人喜好项">座位个人喜好项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_SPE}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text" title="执行值机操作的办公室">执行值机操作的办公室：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_OFFICE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">特殊餐食：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_SPML}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="最初预定+D163座位项">特殊餐食标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_SPML_ID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="旅客状态">旅客状态：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_STATUS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">候补原因编码：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_STDRS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅行状态标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_TSI}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">身份类型：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_TYPE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">升降舱类型：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_UDGRADE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">不跟人行李标识信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_UNATTACH}}</span>
        </el-col>



        <el-col :span="8" class="input-item">
          <span class="input-text">自愿升降舱标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_VUDGRADE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">轮椅-干燥信息项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_WCBD}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">轮椅-潮湿信息项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_WCBW}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">轮椅-机上信息项：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_WCOB}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">轮椅类型信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_WTYPE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">取消ABP旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_XABP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">取消ASR旅客标识：</span>
         <span class="input-input detailinput">  {{mhinfo.PSR_XASR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text" title="取消订座标识">取消订座标识：</span>
         <span class="input-input detailinput">  {{mhinfo.PSR_XRES}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">取消转港标识信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_XT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">候补标识：</span>
          <span class="input-input detailinput">  {{mhinfo.SBY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">起飞航站序号：</span>
          <span class="input-input detailinput">  {{mhinfo.SEG_DEPTNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="到达航站序号">到达航站序号：</span>
          <span class="input-input detailinput">  {{mhinfo.SEG_DESTNO}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text" title="所属航班序号">所属航班序号：</span>
          <span class="input-input detailinput">  {{mhinfo.SEG_FLTID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">序列号：</span>
          <span class="input-input detailinput">  {{mhinfo.SN_ID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="特殊行李标识">特殊行李标识：</span>
          <span class="input-input detailinput">  {{mhinfo.SPECIAL_BG}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="特殊座位标识">特殊座位标识：</span>
          <span class="input-input detailinput">  {{mhinfo.SPECIAL_SEAT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">进港时间：</span>
          <span class="input-input detailinput">  {{mhinfo.STA_ARVETM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">离港时间：</span>
          <span class="input-input detailinput">  {{mhinfo.STA_DEPTTM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">担架旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.STCR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">省厅更新时间：</span>
          <span class="input-input detailinput">  {{mhinfo.STGXSJ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">省厅入库时间：</span>
          <span class="input-input detailinput">  {{mhinfo.STRKSJ}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text">特殊服务：</span>
          <span class="input-input detailinput">  {{mhinfo.SVC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">电话：</span>
          <span class="input-input detailinput">  {{mhinfo.TELNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">未订座旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.URES}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">贵宾旅客标识：</span>
          <span class="input-input detailinput">  {{mhinfo.VIP}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">轮椅标识：</span>
          <span class="input-input detailinput">  {{mhinfo.WL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">该条记录的插入时间：</span>
          <span class="input-input detailinput">  {{mhinfo.CREATE_DATE}}</span>
        </el-col>
    </el-row>

</el-form>
</template>
<script>
export default {
  name:'MHXX',
  props:['type','xid'],
  data(){
    return{
      mhinfo:{},
      page:this.type,
      id:this.xid,
      pp:{},
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',
    }
  },
  mounted(){
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.initData();
   },
  watch:{
      type: function(val){
        this.page=val;
      },
      xid:{
        handler(val){
        this.id=val;
        this.userCode=this.$store.state.uid;
        this.userName=this.$store.state.uname;
        this.orgName=this.$store.state.orgname;
        this.orgCode=this.$store.state.orgid;
        this.juState=this.$store.state.juState;
        this.token=this.$store.state.token;
        this.initData()
      },
      immediate: true
      },
    },

  methods:{
    initData(){
      switch (this.page) {
        case 2://人员画像
            this.getData2();
            break;
        default:
      }
    },

    getData2(){
      this.pp.RGUID=this.id;
      let p = {
        "pd": this.pp,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
       this.$api.post(this.Global.aport3+'/ryhx/getstmhjgxxn', p,
        r => {

          if(r.data.resultList.length){
          this.mhinfo=r.data.resultList[0];
         }
      })
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
