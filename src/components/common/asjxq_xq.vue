<template lang="html">
  <div class="asjqx">
    <div v-if="typec==2">
      <el-form  ref="data2">
        <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
             <span class="input-text">案事件编号：</span>
             <span class="input-input detailinput">  {{data2.caseNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">上报省份代码：</span>
              <span class="input-input detailinput">  {{data2.province}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">涉案人员编号：</span>
             <span class="input-input detailinput">  {{data2.casePersonNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">涉案角色名称：</span>
             <span class="input-input detailinput">  {{data2.caseRole_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">涉案人员类别：</span>
              <span class="input-input detailinput">  {{data2.casePersonType}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">侵害对象：</span>
              <span class="input-input detailinput">  {{data2.trespasser}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">人身伤害程度：</span>
              <span class="input-input detailinput">  {{data2.injuryExtent_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">涉案情况：</span>
              <span class="input-input detailinput">  {{data2.caseSituation}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文/拼音姓：</span>
              <span class="input-input detailinput">  {{data2.enLastName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文/拼音名：</span>
              <span class="input-input detailinput">  {{data2.enFirstName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文姓名：</span>
              <span class="input-input detailinput">  {{data2.enName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">中文姓：</span>
              <span class="input-input detailinput">  {{data2.chLastName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">中文名：</span>
              <span class="input-input detailinput">  {{data2.chFirstName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">性别名称：</span>
              <span class="input-input detailinput">  {{data2.gender_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出生日期：</span>
              <span class="input-input detailinput">  {{data2.birthday}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">宗教信仰：</span>
              <span class="input-input detailinput">  {{data2.religion_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">身份名称：</span>
             <span class="input-input detailinput">  {{data2.figure_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">国籍/地区：</span>
              <span class="input-input detailinput">  {{data2.nationnality_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">户口所在地：</span>
             <span class="input-input detailinput">  {{data2.registerRegion}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">身份证号码：</span>
             <span class="input-input detailinput">  {{data2.idNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">境内居住地址/现住址：</span>
              <span class="input-input detailinput">  {{data2.residePlace}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="境内居住所属派出所/户口所属派出所">境内居住所属派出所/户口所属派出所：</span>
              <span class="input-input detailinput">  {{data2.belongedToPolice}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">联系电话：</span>
              <span class="input-input detailinput">  {{data2.tel}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">工作单位：</span>
              <span class="input-input detailinput">  {{data2.workPlace}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">单位联系电话：</span>
              <span class="input-input detailinput">  {{data2.workPlaceTel}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">邀请单位：</span>
              <span class="input-input detailinput">  {{data2.inviteOrg}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">备注：</span>
              <span class="input-input detailinput">  {{data2.remarks}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">核查条件：</span>
              <span class="input-input detailinput">  {{data2.queryStr}}</span>
            </el-col>
        </el-row>
      </el-form>
    </div>
    <div v-if="typec==3">
      <el-form  ref="data3">
        <el-row :gutter="3"  class="mb-6">
            <!-- <el-col :span="8" class="input-item">
             <span class="input-text">人员编号：</span>
             <span class="input-input detailinput">  {{data3.RYBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">DTID：</span>
              <span class="input-input detailinput">  {{data3.DTID}}</span>
            </el-col> -->
            <el-col :span="8" class="input-item">
             <span class="input-text">嫌疑人记录编号：</span>
             <span class="input-input detailinput">  {{data3.JLBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">案事件编号：</span>
             <span class="input-input detailinput">  {{data3.ASJBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">警综案事件编号：</span>
              <span class="input-input detailinput">  {{data3.JZASJBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">警综人员编号：</span>
              <span class="input-input detailinput">  {{data3.JZRYBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">保密级别：</span>
              <span class="input-input detailinput">  {{data3.BMJB_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">现住址：</span>
              <span class="input-input detailinput">  {{data3.XZZ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">嫌疑人属性：</span>
              <span class="input-input detailinput">  {{data3.XYRSX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">口音：</span>
              <span class="input-input detailinput">  {{data3.KY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">现实状况：</span>
              <span class="input-input detailinput">  {{data3.XSZK_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">健康状况：</span>
              <span class="input-input detailinput">  {{data3.JKZK_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">人员标识：</span>
              <span class="input-input detailinput">  {{data3.RYBS_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">作案原因：</span>
              <span class="input-input detailinput">  {{data3.ZAYY_DESC}}</span>
            </el-col>
            <el-col :span="24" class="input-item">
              <span class="input-text" style="width:10%!important">违法事实：</span>
              <span class="input-input detailinput" style="width:86.6%!important">  {{data3.WFSS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">可疑依据：</span>
              <span class="input-input detailinput">  {{data3.KYYJ_DESC}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
             <span class="input-text">抓获方式：</span>
             <span class="input-input detailinput">  {{data3.ZHFS_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">抓获日期：</span>
              <span class="input-input detailinput">  {{data3.ZHRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">抓获地区：</span>
             <span class="input-input detailinput">  {{data3.ZHDQ_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">抓获地点：</span>
             <span class="input-input detailinput">  {{data3.ZHDD}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">抓获单位：</span>
              <span class="input-input detailinput">  {{data3.ZHDWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">抓获人：</span>
              <span class="input-input detailinput">  {{data3.ZHR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">局外抓获单位：</span>
              <span class="input-input detailinput">  {{data3.JWZHDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">标识：</span>
              <span class="input-input detailinput">  {{data3.RAS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">备注：</span>
              <span class="input-input detailinput">  {{data3.BZXX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">抓获地域：</span>
              <span class="input-input detailinput">  {{data3.ZHDY_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">违法犯罪经历：</span>
              <span class="input-input detailinput">  {{data3.WFFZJL}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">在逃形式：</span>
              <span class="input-input detailinput">  {{data3.ZTXS_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">在逃日期：</span>
              <span class="input-input detailinput">  {{data3.ZTRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">在逃编号：</span>
              <span class="input-input detailinput">  {{data3.ZTBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">转案件编号：</span>
              <span class="input-input detailinput">  {{data3.ZAJBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">更新时间：</span>
              <span class="input-input detailinput">  {{data3.GXSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">创建时间：</span>
              <span class="input-input detailinput">  {{data3.CJSJ}}</span>
            </el-col>
        </el-row>
      </el-form>
    </div>
    <div v-if="typec==4">
      <el-form  ref="data4">
        <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
             <span class="input-text">涉案证件编号：</span>
             <span class="input-input detailinput">  {{data4.casePaperNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">上报省份代码：</span>
              <span class="input-input detailinput">  {{data4.province}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文/拼音姓：</span>
              <span class="input-input detailinput">  {{data4.enLastName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文/拼音名：</span>
              <span class="input-input detailinput">  {{data4.enFirstName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文姓名：</span>
              <span class="input-input detailinput">  {{data4.enName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">中文姓：</span>
              <span class="input-input detailinput">  {{data4.chLastName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">中文名：</span>
              <span class="input-input detailinput">  {{data4.chFirstName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">中文姓名：</span>
             <span class="input-input detailinput">  {{data4.chName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">涉案人员编号：</span>
             <span class="input-input detailinput">  {{data4.casePersonNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">性别：</span>
              <span class="input-input detailinput">  {{data4.gender_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出生日期：</span>
              <span class="input-input detailinput">  {{data4.birth}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">国籍/地区：</span>
              <span class="input-input detailinput">  {{data4.nationality_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件种类：</span>
              <span class="input-input detailinput">  {{data4.paperType_desc}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
              <span class="input-text">证件号码：</span>
              <span class="input-input detailinput">  {{data4.paperNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件有效期至：</span>
              <span class="input-input detailinput">  {{data4.usefulLifeLimit}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">本次入境持用证件标识：</span>
              <span class="input-input detailinput">  {{data4.currentPaper_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">居留事由：</span>
             <span class="input-input detailinput">  {{data4.resideReason}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="居留许可（签证）种类">居留许可（签证）种类：</span>
              <span class="input-input detailinput">  {{data4.labelType_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text" title="居留许可（签证）号码">居留许可（签证）号码：</span>
             <span class="input-input detailinput">  {{data4.labelNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text" title="居留许可（签证）发证日期">居留许可（签证）发证日期：</span>
             <span class="input-input detailinput">  {{data4.labelSignedDate}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="居留许可（签证）有效期至">居留许可（签证）有效期至：</span>
              <span class="input-input detailinput">  {{data4.labelUsefulLifeLimit}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">停留期限：</span>
              <span class="input-input detailinput">  {{data4.settleDateLimit}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">签发机关：</span>
              <span class="input-input detailinput">  {{data4.signedOrg}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">入境口岸：</span>
              <span class="input-input detailinput">  {{data4.entrancePort}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">入境日期：</span>
              <span class="input-input detailinput">  {{data4.entranceDate}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">签证注销单位：</span>
              <span class="input-input detailinput">  {{data4.labelLoginoutOrg}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">签证注销人：</span>
              <span class="input-input detailinput">  {{data4.labelLoginoutPerson}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">签证注销时间：</span>
              <span class="input-input detailinput">  {{data4.labelLoginoutDate}}</span>
            </el-col>
        </el-row>
      </el-form>
    </div>
    <div v-if="typec==5">
      <el-form  ref="data5">
        <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
             <span class="input-text">人员编号：</span>
             <span class="input-input detailinput">  {{data5.DTID}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">记录编号：</span>
              <span class="input-input detailinput">  {{data5.JLBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">案事件编号：</span>
              <span class="input-input detailinput">  {{data5.ASJBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">警综案件编号：</span>
              <span class="input-input detailinput">  {{data5.JZASJBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">机构编号：</span>
              <span class="input-input detailinput">  {{data5.JGBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">警综机构编号：</span>
              <span class="input-input detailinput">  {{data5.JZJGBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">涉案类别：</span>
              <span class="input-input detailinput">  {{data5.SALB_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">涉案角色：</span>
             <span class="input-input detailinput">  {{data5.SAJS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">被害地点：</span>
             <span class="input-input detailinput">  {{data5.BHDD}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">被害时间：</span>
              <span class="input-input detailinput">  {{data5.BHSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">违法事实：</span>
              <span class="input-input detailinput">  {{data5.WFSS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">被害经过：</span>
              <span class="input-input detailinput">  {{data5.BHJG}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">简要案情：</span>
              <span class="input-input detailinput">  {{data5.JYAQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">直接责任人：</span>
              <span class="input-input detailinput">  {{data5.ZJZRR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">主管人员：</span>
              <span class="input-input detailinput">  {{data5.ZGRY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">涉案金额：</span>
              <span class="input-input detailinput">  {{data5.SAJE}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">经济损失：</span>
             <span class="input-input detailinput">  {{data5.JJSS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">损失金额：</span>
              <span class="input-input detailinput">  {{data5.SSJE}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">挽回损失金额：</span>
             <span class="input-input detailinput">  {{data5.WHSSJE}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">标识：</span>
             <span class="input-input detailinput">  {{data5.RAS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">备注：</span>
              <span class="input-input detailinput">  {{data5.BZXX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">登记时间：</span>
              <span class="input-input detailinput">  {{data5.DJSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">登记人：</span>
              <span class="input-input detailinput">  {{data5.DJRXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">登记单位：</span>
              <span class="input-input detailinput">  {{data5.DJDWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">审批时间：</span>
              <span class="input-input detailinput">  {{data5.XGSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改人：</span>
              <span class="input-input detailinput">  {{data5.XGR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改人姓名：</span>
              <span class="input-input detailinput">  {{data5.XGRXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改单位：</span>
              <span class="input-input detailinput">  {{data5.XGDWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">涉案标识：</span>
              <span class="input-input detailinput">  {{data5.SABS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">排除原因：</span>
              <span class="input-input detailinput">  {{data5.PCYY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">排除时间：</span>
              <span class="input-input detailinput">  {{data5.PCSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">排除审批单位：</span>
              <span class="input-input detailinput">  {{data5.PCSPDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">排除批准人：</span>
              <span class="input-input detailinput">  {{data5.PCPZR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">排除审批意见：</span>
              <span class="input-input detailinput">  {{data5.PCSPYJ}}</span>
            </el-col>
        </el-row>
      </el-form>
    </div>
    <div v-if="typec==6">
      <el-form  ref="data6">
        <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
             <span class="input-text">案事件编号：</span>
             <span class="input-input detailinput">  {{data6.caseNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">上报省份代码：</span>
              <span class="input-input detailinput">  {{data6.province}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">涉案人员编号：</span>
              <span class="input-input detailinput">  {{data6.casePersonNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处理对象类别：</span>
              <span class="input-input detailinput">  {{data6.objectType}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">案事件类别：</span>
              <span class="input-input detailinput">  {{data6.caseType_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">裁决日期：</span>
              <span class="input-input detailinput">  {{data6.arbitrationDate}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">裁决人：</span>
              <span class="input-input detailinput">  {{data6.arbitrator}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">裁决单位：</span>
             <span class="input-input detailinput">  {{data6.arbitrationOrg}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">裁决书号：</span>
             <span class="input-input detailinput">  {{data6.arbitrationAward}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">裁决法律依据：</span>
              <span class="input-input detailinput">  {{data6.arbitrationLaw}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">裁决结果：</span>
              <span class="input-input detailinput">  {{data6.arbitrationResult}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">罚款金额：</span>
              <span class="input-input detailinput">  {{data6.penalty}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">拘留天数：</span>
              <span class="input-input detailinput">  {{data6.detentionPeriod}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">签证（注）号码：</span>
              <span class="input-input detailinput">  {{data6.labelNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">执行地点：</span>
              <span class="input-input detailinput">  {{data6.executePlace}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">执行人：</span>
              <span class="input-input detailinput">  {{data6.executor}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">执行单位：</span>
             <span class="input-input detailinput">  {{data6.executeOrg}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">执行日期：</span>
              <span class="input-input detailinput">  {{data6.executeDate}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">执行结果：</span>
             <span class="input-input detailinput">  {{data6.executeResult}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">执行标识：</span>
             <span class="input-input detailinput">  {{data6.executeFlag}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">撤销原因：</span>
              <span class="input-input detailinput">  {{data6.repealReason}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">撤销时间：</span>
              <span class="input-input detailinput">  {{data6.repealTime}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">撤销审批单位：</span>
              <span class="input-input detailinput">  {{data6.repealApprovingOrg}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">撤销批准人：</span>
              <span class="input-input detailinput">  {{data6.repealApprover}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">撤销审批意见：</span>
              <span class="input-input detailinput">  {{data6.repealApprovingIdea}}</span>
            </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {

  name:'ASJXQXQ',
  props:['typec','xidc','randomc'],
  data(){
    return{
      data2:{},
      data3:{},
      data4:{},
      data5:{},
      data6:{},
    }
  },
  mounted(){
    this.getData();
  },
  watch: {
    randomc:function(newVal,oldVal){
      this.randomc = newVal;
      this.getData();
    }
  },
  methods:{
    getData(){
      if(this.typec==2){
        this.data2 = this.xidc;
      }
      if(this.typec==3){
        this.data3 = this.xidc;
      }
      if(this.typec==4){
        this.data4 = this.xidc;
      }
      if(this.typec==5){
        this.data5 = this.xidc;
      }
      if(this.typec==6){
        this.data6 = this.xidc;
      }
    },
  }
}
</script>

<style lang="css" scoped>
</style>
