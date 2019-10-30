<template lang="html">
  <div class="ansj">
    <!-- 案事件信息详情 -->

          <div class="ak-tabs">
            <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
              案件基本信息
            </div>
            <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
              涉案人员基本信息
            </div>
            <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==2}" @click="base2">
              涉案人员嫌疑人信息
            </div>
            <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==3}" @click="base3">
              案件人员证件信息
            </div>
            <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==4}" @click="base4">
              案件涉案单位
            </div>
            <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==5}" @click="base5">
              处理结果
            </div>
          </div>
          <div class="ak-tab-pane" >
              <div v-show="page==0">
                        <el-form   ref="aForm1">
                          <el-row :gutter="3"  class="mb-6">
                              <el-col :span="8" class="input-item">
                               <span class="input-text">案事件编号：</span>
                               <span class="input-input detailinput">  {{aForm1.caseNO}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">案件来源：</span>
                                <span class="input-input detailinput">  {{aForm1.caseOrigion_desc}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                               <span class="input-text">案件名称：</span>
                               <span class="input-input detailinput">  {{aForm1.caseName}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                               <span class="input-text">案件侵害关系：</span>
                               <span class="input-input detailinput">  {{aForm1.aggressionRelation_desc}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">被侵害对象类别：</span>
                                <span class="input-input detailinput">  {{aForm1.aggrievedPartyType_desc}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">案事件类型：</span>
                                <span class="input-input detailinput">  {{aForm1.caseType_desc}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">涉案事件主要类别：</span>
                                <span class="input-input detailinput">  {{aForm1.casePrimaryType}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">案发时间：</span>
                                <span class="input-input detailinput">  {{aForm1.caseTime}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">案发场所：</span>
                                <span class="input-input detailinput">  {{aForm1.casePlace_desc}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">案发地区：</span>
                                <span class="input-input detailinput">  {{aForm1.caseRegion_desc}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">案发具体位置：</span>
                                <span class="input-input detailinput">  {{aForm1.casePosition}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">承办单位：</span>
                                <span class="input-input detailinput">  {{aForm1.undertakerOrgName}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">案发地管辖机关：</span>
                                <span class="input-input detailinput">  {{aForm1.venueOrgName}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案发地管辖机关联系人">案发地管辖机关联系人：</span>
                                <span class="input-input detailinput">  {{aForm1.venueOrgContact}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案发地管辖机关联系电话">案发地管辖机关联系电话：</span>
                                <span class="input-input detailinput">  {{aForm1.venueOrgTel}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">基本案情：</span>
                                <span class="input-input detailinput">  {{aForm1.basicCase}}</span>
                              </el-col>

                              <el-col :span="8" class="input-item">
                               <span class="input-text" title="采取措施">采取措施：</span>
                               <span class="input-input detailinput">  {{aForm1.measure}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="对外说辞">对外说辞：</span>
                                <span class="input-input detailinput">  {{aForm1.foreignDiction}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                               <span class="input-text" title="受理时间">受理时间：</span>
                               <span class="input-input detailinput">  {{aForm1.transactTime}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                               <span class="input-text" title="上报日期">上报日期：</span>
                               <span class="input-input detailinput">  {{aForm1.reportDate}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="上报单位">上报单位：</span>
                                <span class="input-input detailinput">  {{aForm1.reportOrg}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="上报省份">上报省份：</span>
                                <span class="input-input detailinput">  {{aForm1.reportProvince}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="上报城市">上报城市：</span>
                                <span class="input-input detailinput">  {{aForm1.reportCity}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="数据来源">数据来源：</span>
                                <span class="input-input detailinput">  {{aForm1.dataSource}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">备注：</span>
                                <span class="input-input detailinput">  {{aForm1.remarks}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">案事件所有涉案类型：</span>
                                <span class="input-input detailinput">  {{aForm1.FNCaseCatalogArray}}</span>
                              </el-col>
                              <!-- <el-col :span="8" class="input-item">
                                <span class="input-text">发现时间：</span>
                                <span class="input-input detailinput">  {{aForm1.FXSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="发案时间上限">发案时间上限：</span>
                                <span class="input-input detailinput">  {{aForm1.FASJSX}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="发案时间下限">发案时间下限：</span>
                                <span class="input-input detailinput">  {{aForm1.FASJXX}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="省市县区">省市县区：</span>
                                <span class="input-input detailinput">  {{aForm1.AJSSXQ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="街路巷">街路巷：</span>
                                <span class="input-input detailinput">  {{aForm1.AJJLX}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="门楼牌号">门楼牌号：</span>
                                <span class="input-input detailinput">  {{aForm1.AJMLPH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="门牌后缀">门牌后缀：</span>
                                <span class="input-input detailinput">  {{aForm1.AJMPHZ}}</span>
                              </el-col>

                              <el-col :span="8" class="input-item">
                               <span class="input-text" title="门楼详址">门楼详址：</span>
                               <span class="input-input detailinput">  {{aForm1.AJMLXZ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案件详细地址名称">案件详细地址名称：</span>
                                <span class="input-input detailinput">  {{aForm1.AJDZMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                               <span class="input-text" title="案件所属责任区">案件所属责任区：</span>
                               <span class="input-input detailinput">  {{aForm1.AJSSZRQ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                               <span class="input-text" title="案件所属责任区名称">案件所属责任区名称：</span>
                               <span class="input-input detailinput">  {{aForm1.AJSSZRQMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="发案地域">发案地域：</span>
                                <span class="input-input detailinput">  {{aForm1.FADY}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">发案处所：</span>
                                <span class="input-input detailinput">  {{aForm1.FACS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">发案部位：</span>
                                <span class="input-input detailinput">  {{aForm1.FABW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">受理时间：</span>
                                <span class="input-input detailinput">  {{aForm1.SLSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">受理人姓名：</span>
                                <span class="input-input detailinput">  {{aForm1.SLRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">受理单位：</span>
                                <span class="input-input detailinput">  {{aForm1.SLDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">受理单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.SLDWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">受理方式：</span>
                                <span class="input-input detailinput">  {{aForm1.SLFS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">简要案情：</span>
                                <span class="input-input detailinput">  {{aForm1.JYAQ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="对外说辞">对外说辞：</span>
                                <span class="input-input detailinput">  {{aForm1.DWSC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="主办单位">主办单位：</span>
                                <span class="input-input detailinput">  {{aForm1.ZBDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="主办单位名称">主办单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.ZBDWMC}}</span>
                              </el-col>

                              <el-col :span="8" class="input-item">
                               <span class="input-text" title="主办单位警种">主办单位警种：</span>
                               <span class="input-input detailinput">  {{aForm1.ZBDWJZ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案件协办单位">案件协办单位：</span>
                                <span class="input-input detailinput">  {{aForm1.XBDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                               <span class="input-text" title="直属办案单位">直属办案单位：</span>
                               <span class="input-input detailinput">  {{aForm1.ZSBADW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                               <span class="input-text" title="直属办案单位名称">直属办案单位名称：</span>
                               <span class="input-input detailinput">  {{aForm1.ZSBADWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案发地管辖机关联系人">案发地管辖机关联系人：</span>
                                <span class="input-input detailinput">  {{aForm1.AFDGXJGLXR}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案发地管辖机关联系电话">案发地管辖机关联系电话：</span>
                                <span class="input-input detailinput">  {{aForm1.AFDGXJGLXDH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="主办人姓名">主办人姓名：</span>
                                <span class="input-input detailinput">  {{aForm1.ZBRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="协办人姓名">协办人姓名：</span>
                                <span class="input-input detailinput">  {{aForm1.XBRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="立案单位">立案单位：</span>
                                <span class="input-input detailinput">  {{aForm1.LADW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="立案单位名称">立案单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.LADWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text">立案时间：</span>
                                <span class="input-input detailinput">  {{aForm1.LASJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="立案批准人姓名">立案批准人姓名：</span>
                                <span class="input-input detailinput">  {{aForm1.LAPZRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="专案标记">专案标记：</span>
                                <span class="input-input detailinput">  {{aForm1.ZABJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="补立原因">补立原因：</span>
                                <span class="input-input detailinput">  {{aForm1.BLYY}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="危害程度">危害程度：</span>
                                <span class="input-input detailinput">  {{aForm1.WHCD}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="督办级别">督办级别：</span>
                                <span class="input-input detailinput">  {{aForm1.DBJB}}</span>
                              </el-col>

                              <el-col :span="8" class="input-item">
                                <span class="input-text">督办编号：</span>
                                <span class="input-input detailinput">  {{aForm1.DBBH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="管辖分工">管辖分工：</span>
                                <span class="input-input detailinput">  {{aForm1.GXFG}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="犯罪主体类型">犯罪主体类型：</span>
                                <span class="input-input detailinput">  {{aForm1.FZZTLX}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="破案日期">破案日期：</span>
                                <span class="input-input detailinput"> {{aForm1.PARQ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="破案方式">破案方式：</span>
                                <span class="input-input detailinput">  {{aForm1.PAFS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="破案类型">破案类型：</span>
                                <span class="input-input detailinput">  {{aForm1.PALX}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >破案单位：</span>
                                <span class="input-input detailinput">  {{aForm1.PADW}}</span>
                              </el-col>

                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="破案单位名称">破案单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.PADWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >协破单位：</span>
                                <span class="input-input detailinput">  {{aForm1.XPDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >破案简况：</span>
                                <span class="input-input detailinput">  {{aForm1.PAJK}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >案情综述：</span>
                                <span class="input-input detailinput">  {{aForm1.AQZS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >结案日期：</span>
                                <span class="input-input detailinput">  {{aForm1.JARQ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >撤销日期：</span>
                                <span class="input-input detailinput">  {{aForm1.CXRQ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >撤销原因：</span>
                                <span class="input-input detailinput">  {{aForm1.CXYY}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >归档状态：</span>
                                <span class="input-input detailinput">  {{aForm1.GDZT}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >归档时间：</span>
                                <span class="input-input detailinput">  {{aForm1.GDSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >接收单位：</span>
                                <span class="input-input detailinput">  {{aForm1.JSDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >移送时间：</span>
                                <span class="input-input detailinput">  {{aForm1.YSSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >移送单位：</span>
                                <span class="input-input detailinput">  {{aForm1.YSDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >移送人：</span>
                                <span class="input-input detailinput">  {{aForm1.YSR}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="移送单位联系电话">移送单位联系电话：</span>
                                <span class="input-input detailinput">  {{aForm1.YSDWLXDH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >移送原因：</span>
                                <span class="input-input detailinput">  {{aForm1.YSYY}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >涉案总价值：</span>
                                <span class="input-input detailinput">  {{aForm1.SAZJZ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" >经济损失：</span>
                                <span class="input-input detailinput">  {{aForm1.JJSS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="挽回总价值">挽回总价值：</span>
                                <span class="input-input detailinput">  {{aForm1.WHZJZ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="缴获总价值">缴获总价值：</span>
                                <span class="input-input detailinput">  {{aForm1.PAZJZ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="作案人数">作案人数：</span>
                                <span class="input-input detailinput">  {{aForm1.ZARS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="解救儿童数">解救儿童数：</span>
                                <span class="input-input detailinput">  {{aForm1.AJJJETS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="解救妇女数">解救妇女数：</span>
                                <span class="input-input detailinput">  {{aForm1.AJJJFNS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="解救人质数">解救人质数：</span>
                                <span class="input-input detailinput">  {{aForm1.AJJJRZS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="人员受伤数">人员受伤数：</span>
                                <span class="input-input detailinput">  {{aForm1.AJRYSSS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="人员死亡数">人员死亡数：</span>
                                <span class="input-input detailinput">  {{aForm1.AJRYSWS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="是否有现场">是否有现场：</span>
                                <span class="input-input detailinput">  {{aForm1.SFYXC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="是否勘查现场">是否勘查现场：</span>
                                <span class="input-input detailinput">  {{aForm1.SFKCXC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="分局串案编号">分局串案编号：</span>
                                <span class="input-input detailinput">  {{aForm1.FJCABH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="市局串案编号">市局串案编号：</span>
                                <span class="input-input detailinput">  {{aForm1.SJCABH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="线索编号">线索编号：</span>
                                <span class="input-input detailinput">  {{aForm1.XSBH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="转案件编号">转案件编号：</span>
                                <span class="input-input detailinput">  {{aForm1.ZAJBH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="登记时间">登记时间：</span>
                                <span class="input-input detailinput">  {{aForm1.DJSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="登记人">登记人：</span>
                                <span class="input-input detailinput">  {{aForm1.DJRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="登记单位">登记单位：</span>
                                <span class="input-input detailinput">  {{aForm1.DJDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="登记单位名称">登记单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.DJDWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="修改时间">修改时间：</span>
                                <span class="input-input detailinput">  {{aForm1.XGSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="修改人姓名">修改人姓名：</span>
                                <span class="input-input detailinput">  {{aForm1.XGRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="修改单位">修改单位：</span>
                                <span class="input-input detailinput">  {{aForm1.XGDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="修改单位名称">修改单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.XGDWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="接收时间">接收时间：</span>
                                <span class="input-input detailinput">  {{aForm1.JSSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="分类案件编号">分类案件编号：</span>
                                <span class="input-input detailinput">  {{aForm1.FLAJBH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="省厅串案编号">省厅串案编号：</span>
                                <span class="input-input detailinput">  {{aForm1.STCABH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="撤销单位">撤销单位：</span>
                                <span class="input-input detailinput">  {{aForm1.CXDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="撤销单位名称">撤销单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.CXDWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="撤销批准人姓名">撤销批准人姓名：</span>
                                <span class="input-input detailinput">  {{aForm1.CXPZRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="破案批准时间">破案批准时间：</span>
                                <span class="input-input detailinput">  {{aForm1.PAPZSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="破案批准人">破案批准人：</span>
                                <span class="input-input detailinput">  {{aForm1.PAPZR}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="破案批准单位">破案批准单位：</span>
                                <span class="input-input detailinput">  {{aForm1.PAPZDW}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="受理单位联系电话">受理单位联系电话：</span>
                                <span class="input-input detailinput">  {{aForm1.SLDWDH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="主办人电话">主办人电话：</span>
                                <span class="input-input detailinput">  {{aForm1.ZBRDH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="其他受害人数">其他受害人数：</span>
                                <span class="input-input detailinput">  {{aForm1.AJQTSHRS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="接收单位名称">接收单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.JSDWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="移送单位名称">移送单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.YSDWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="移送人姓名">移送人姓名：</span>
                                <span class="input-input detailinput">  {{aForm1.YSRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="接收姓名">接收姓名：</span>
                                <span class="input-input detailinput">  {{aForm1.JSRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案件移送接收单位联系电话">案件移送接收单位联系电话：</span>
                                <span class="input-input detailinput">  {{aForm1.YSJSDWLXDH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="直属分局案件－是否">直属分局案件－是否：</span>
                                <span class="input-input detailinput">  {{aForm1.ZSAJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="关联编号">关联编号：</span>
                                <span class="input-input detailinput">  {{aForm1.GLBH}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="外部接收单位">外部接收单位：</span>
                                <span class="input-input detailinput">  {{aForm1.WBJSDWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="外部接收人">外部接收人：</span>
                                <span class="input-input detailinput">  {{aForm1.WBJSRXM}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="发案时间段">发案时间段：</span>
                                <span class="input-input detailinput">  {{aForm1.FASJD}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="涉及国家地区">涉及国家地区：</span>
                                <span class="input-input detailinput">  {{aForm1.SJGJDQ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案件内外勾结">案件内外勾结：</span>
                                <span class="input-input detailinput">  {{aForm1.NWGJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="内外勾结对象">内外勾结对象：</span>
                                <span class="input-input detailinput">  {{aForm1.NWGJDX}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="立案审查到期时间">立案审查到期时间：</span>
                                <span class="input-input detailinput">  {{aForm1.SCDQSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="审查时间">审查时间：</span>
                                <span class="input-input detailinput">  {{aForm1.SCSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="经侦案件属性">经侦案件属性：</span>
                                <span class="input-input detailinput">  {{aForm1.JZAJSX}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案件报案单位名称">案件报案单位名称：</span>
                                <span class="input-input detailinput">  {{aForm1.BADWMC}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案件报案单位地址">案件报案单位地址：</span>
                                <span class="input-input detailinput">  {{aForm1.BADWDZ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案件报案单位联系人">案件报案单位联系人：</span>
                                <span class="input-input detailinput">  {{aForm1.BADWLXR}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案件报案单位联系方式">案件报案单位联系方式：</span>
                                <span class="input-input detailinput">  {{aForm1.BADWLXFS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="破案时间段">破案时间段：</span>
                                <span class="input-input detailinput">  {{aForm1.PASJD}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="大要案标识">大要案标识：</span>
                                <span class="input-input detailinput">  {{aForm1.DYABS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="典型案例标识">典型案例标识：</span>
                                <span class="input-input detailinput">  {{aForm1.DXALBS}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="结案报告的文件类型">结案报告的文件类型：</span>
                                <span class="input-input detailinput">  {{aForm1.JABGDWJLX}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="结案报告的文件内容">结案报告的文件内容：</span>
                                <span class="input-input detailinput">  {{aForm1.JABGDWJNR}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="更新时间">更新时间：</span>
                                <span class="input-input detailinput">  {{aForm1.GXSJ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="数据来源">数据来源：</span>
                                <span class="input-input detailinput">  {{aForm1.SJLY}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="数据状态">数据状态：</span>
                                <span class="input-input detailinput">  {{aForm1.ZT}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="注销原因">注销原因：</span>
                                <span class="input-input detailinput">  {{aForm1.ZXYY}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="恢复原因">恢复原因：</span>
                                <span class="input-input detailinput">  {{aForm1.HFYY}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="案事件种类">案事件种类：</span>
                                <span class="input-input detailinput">  {{aForm1.ASJZL=="01"?"案件":aForm1.ASJZL=="04"?"事件":""}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="是否单位案事件">是否单位案事件：</span>
                                <span class="input-input detailinput">  {{aForm1.SFDWASJ=="0"?"人员":aForm1.SFDWASJ=="0"?"企业单位":""}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="报案人国家地区">报案人国家地区：</span>
                                <span class="input-input detailinput">  {{aForm1.BARGJDQ}}</span>
                              </el-col>
                              <el-col :span="8" class="input-item">
                                <span class="input-text" title="入库时间">入库时间：</span>
                                <span class="input-input detailinput">  {{aForm1.RKSJ}}</span>
                              </el-col> -->
                          </el-row>
                        </el-form>

              </div>

              <div v-show="page==1">
                <el-table
                     ref="multipleTable"
                     :data="aForm2"
                     border
                     style="width: 100%" class="stu-table"
                     >
                     <el-table-column
                       prop="caseNO"
                       label="案事件编号">
                     </el-table-column>
                     <el-table-column
                       prop="caseRole_desc"
                       label="涉案角色">
                     </el-table-column>
                     <el-table-column
                       prop="enName"
                       label="英文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="chName"
                       label="中文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="gender_desc"
                       label="性别">
                     </el-table-column>
                     <el-table-column
                       prop="birthday"
                       label="出生日期">
                     </el-table-column>
                     <el-table-column
                       prop="nationnality_desc"
                       label="国家/地区">
                     </el-table-column>
                     <el-table-column
                       label="操作" width="80">
                       <template slot-scope="scope">
                         <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,2)"></el-button>
                       </template>
                     </el-table-column>
                 </el-table>
              </div>

              <div v-show="page==2">
                <el-table
                   ref="multipleTable"
                   :data="aForm3"
                   border
                   style="width: 100%" class="stu-table">
                   <el-table-column
                     prop="JLBH"
                     label="嫌疑人记录编号">
                   </el-table-column>
                   <el-table-column
                     prop="BMJB_DESC"
                     label="保密级别">
                   </el-table-column>
                   <el-table-column
                     prop="XZZ"
                     label="现住址">
                   </el-table-column>
                   <el-table-column
                     prop="XYRSX_DESC"
                     label="嫌疑人属性">
                   </el-table-column>
                   <el-table-column
                     prop="ZAYY_DESC"
                     label="作案原因">
                   </el-table-column>
                   <el-table-column
                     prop="ZHRQ"
                     label="抓获日期">
                   </el-table-column>
                   <el-table-column
                     label="操作" width="80">
                     <template slot-scope="scope">
                       <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,3)"></el-button>
                     </template>
                   </el-table-column>
                 </el-table>
                 <div class="middle-foot">
                    <div class="page-msg">
                      <div class="">
                    共{{TotalResult3}}条记录
                      </div>
                      <div class="">
                        每页显示
                        <el-select v-model="pageSize3" @change="pageSizeChange3(pageSize3)" placeholder="10" size="mini" class="page-select">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        条
                      </div>
                      <div class="">
                      共{{Math.ceil(TotalResult3/pageSize3)}}页
                      </div>
                    </div>
                    <el-pagination
                      background
                      @current-change="handleCurrentChange3"
                      :current-page:sync="CurrentPage3"
                      :page-size="pageSize3"
                      layout="prev, pager, next"
                      :total="TotalResult3">
                    </el-pagination>
                  </div>
              </div>

              <div v-show="page==3">
                <el-table
                     ref="multipleTable"
                     :data="aForm4.length==0?aForm4:aForm4.slice((CurrentPage4-1)*pageSize4,CurrentPage4*pageSize4)"
                     border
                     style="width: 100%" class="stu-table"
                     >
                     <el-table-column
                       prop="casePaperNO"
                       label="案件编号">
                     </el-table-column>
                     <el-table-column
                       prop="enName"
                       label="英文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="chName"
                       label="中文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="gender_desc"
                       label="性别">
                     </el-table-column>
                     <!-- <el-table-column
                       prop="CSRQ"
                       label="出生日期">
                     </el-table-column> -->
                     <el-table-column
                       prop="paperNO"
                       label="证件号码">
                     </el-table-column>
                     <el-table-column
                       prop="paperType_desc"
                       label="证件种类">
                     </el-table-column>
                     <el-table-column
                       prop="usefulLifeLimit"
                       label="证件有效期至">
                     </el-table-column>
                     <el-table-column
                       label="操作" width="80">
                       <template slot-scope="scope">
                         <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,4)"></el-button>
                       </template>
                     </el-table-column>
                 </el-table>
                 <div class="middle-foot">
                    <div class="page-msg">
                      <div class="">
                    共{{TotalResult4}}条记录
                      </div>
                      <div class="">
                        每页显示
                        <el-select v-model="pageSize4" @change="pageSizeChange4(pageSize4)" placeholder="10" size="mini" class="page-select">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        条
                      </div>
                      <div class="">
                      共{{Math.ceil(TotalResult4/pageSize4)}}页
                      </div>
                    </div>
                    <el-pagination
                      background
                      @current-change="handleCurrentChange4"
                      :current-page:sync="CurrentPage4"
                      :page-size="pageSize4"
                      layout="prev, pager, next"
                      :total="TotalResult4">
                    </el-pagination>
                  </div>
              </div>

              <div v-show="page==4">
                <el-table
                   ref="multipleTable"
                   :data="aForm5"
                   border
                   style="width: 100%" class="stu-table">
                   <el-table-column
                     prop="ASJBH"
                     label="案件编号">
                   </el-table-column>
                   <el-table-column
                     prop="SALB_DESC"
                     label="涉案类别">
                   </el-table-column>
                   <el-table-column
                     prop="SAJS"
                     label="涉案角色">
                   </el-table-column>
                   <el-table-column
                     prop="SAJE"
                     label="涉案金额">
                   </el-table-column>
                   <el-table-column
                     prop="JJSS"
                     label="经济损失">
                   </el-table-column>
                   <el-table-column
                     prop="DJRXM"
                     label="登记人">
                   </el-table-column>
                   <el-table-column
                     prop="DJDWMC"
                     label="登记单位">
                   </el-table-column>
                   <el-table-column
                     prop="DJSJ"
                     label="登记时间">
                   </el-table-column>
                   <el-table-column
                     label="操作" width="80">
                     <template slot-scope="scope">
                       <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,5)"></el-button>
                     </template>
                   </el-table-column>
                 </el-table>
                 <div class="middle-foot">
                    <div class="page-msg">
                      <div class="">
                    共{{TotalResult5}}条记录
                      </div>
                      <div class="">
                        每页显示
                        <el-select v-model="pageSize5" @change="pageSizeChange5(pageSize5)" placeholder="10" size="mini" class="page-select">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        条
                      </div>
                      <div class="">
                      共{{Math.ceil(TotalResult5/pageSize5)}}页
                      </div>
                    </div>
                    <el-pagination
                      background
                      @current-change="handleCurrentChange5"
                      :current-page:sync="CurrentPage5"
                      :page-size="pageSize5"
                      layout="prev, pager, next"
                      :total="TotalResult5">
                    </el-pagination>
                  </div>
              </div>

              <div v-show="page==5">
                <el-table
                     ref="multipleTable"
                     :data="aForm6.length==0?aForm6:aForm6.slice((CurrentPage6-1)*pageSize6,CurrentPage6*pageSize6)"
                     border
                     style="width: 100%" class="stu-table"
                     >
                     <el-table-column
                       prop="caseNO"
                       label="案件编号">
                     </el-table-column>
                     <el-table-column
                       prop="arbitrationDate"
                       label="裁决日期">
                     </el-table-column>
                     <el-table-column
                       prop="arbitrationOrg_desc"
                       label="裁决单位">
                     </el-table-column>
                     <el-table-column
                       prop="arbitrationResult_desc"
                       label="裁决结果">
                     </el-table-column>
                     <!-- <el-table-column
                       prop="CSRQ"
                       label="出生日期">
                     </el-table-column> -->
                     <el-table-column
                       prop="executeOrg_desc"
                       label="执行单位">
                     </el-table-column>
                     <el-table-column
                       prop="executeDate"
                       label="执行日期">
                     </el-table-column>
                     <el-table-column
                       prop="executeResult"
                       label="执行结果">
                     </el-table-column>
                     <el-table-column
                       label="操作" width="80">
                       <template slot-scope="scope">
                         <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,6)"></el-button>
                       </template>
                     </el-table-column>
                 </el-table>
                 <div class="middle-foot">
                    <div class="page-msg">
                      <div class="">
                    共{{TotalResult6}}条记录
                      </div>
                      <div class="">
                        每页显示
                        <el-select v-model="pageSize6" @change="pageSizeChange6(pageSize6)" placeholder="10" size="mini" class="page-select">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        条
                      </div>
                      <div class="">
                      共{{Math.ceil(TotalResult6/pageSize6)}}页
                      </div>
                    </div>
                    <el-pagination
                      background
                      @current-change="handleCurrentChange6"
                      :current-page:sync="CurrentPage6"
                      :page-size="pageSize6"
                      layout="prev, pager, next"
                      :total="TotalResult6">
                    </el-pagination>
                  </div>
              </div>
          </div>
          <el-dialog title="详情" :visible.sync="detailsDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
              <ASJXQXQ :typec="typec" :xidc="xidc" :randomc="(new Date()).getTime()"></ASJXQXQ>
                 <div slot="footer" class="dialog-footer">
                   <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
                 </div>
          </el-dialog>
  </div>
</template>
<script scoped>
import ASJXQXQ from '../../../common/asjxq_xq'
export default {
  components:{ASJXQXQ},
  name: 'ANSJRY',
  props: ['type', 'xid','random','rybh'],
  data() {
    return {
      detailsDialogVisible:false,
      typec:0,
      xidc:{},
      page: 0,
      aForm1: {},
      aForm2: [],
      aForm3: [],
      CurrentPage3:1,
      pageSize3:10,
      TotalResult3:0,
      aForm4: [],
      CurrentPage4:1,
      pageSize4:10,
      TotalResult4:0,
      aForm5: [],
      CurrentPage5:1,
      pageSize5:10,
      TotalResult5:0,
      aForm6: [],
      CurrentPage6:1,
      pageSize6:10,
      TotalResult6:0,
      asjbh: '',
      pd: {},
      px:{},
      options:[{
        value: 10,
        label: "10"
      },
      {
        value: 20,
        label: "20"
      },
      {
        value: 30,
        label: "30"
      }],
    }
  },
  activated() {
    this.getData(this.xid);
  },
  mounted() {
    this.getData(this.xid);
  },
  watch: {
    random:function(newVal,oldVal){
      this.random = newVal;
      this.getData(this.xid);
    }
  },
  methods: {
    getDetails(i,type){
      this.xidc=i;
      this.typec=type;
      this.detailsDialogVisible=true;
    },
    pageSizeChange3(val) {
      this.getData3(this.CurrentPage3,val,this.rybh);
    },
    handleCurrentChange3(val) {
      this.getData3(val,this.pageSize3,this.rybh);
    },
    pageSizeChange4(val) {
      this.pageSize4=val;
      // this.getData4(this.CurrentPage4,val,this.rybh);
    },
    handleCurrentChange4(val) {
      this.CurrentPage4=val;
      // this.getData4(val,this.pageSize4,this.rybh);
    },
    pageSizeChange6(val) {
      this.pageSize6=val;
      // this.getData4(this.CurrentPage4,val,this.rybh);
    },
    handleCurrentChange6(val) {
      this.CurrentPage6=val;
      // this.getData4(val,this.pageSize4,this.rybh);
    },
    pageSizeChange5(val) {
      this.getData5(this.CurrentPage5,val,this.rybh);
    },
    handleCurrentChange5(val) {
      this.getData5(val,this.pageSize5,this.rybh);
    },
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
      this.getData2();
    },
    base2() {
      this.page = 2;
      this.getData3(this.CurrentPage3,this.pageSize3,this.rybh);
    },
    base3() {
      this.page = 3;
      this.getData4();
    },
    base4() {
      this.page = 4;
      this.getData5(this.CurrentPage5,this.pageSize5,this.rybh);
    },
    base5() {
      this.page = 5;
      this.getData6();
    },
    //涉案人员基本信息
    getData2(){
      this.$api.post(this.Global.aport3 + '/ryhxhx/getsaryjbxx',{caseNO: this.xid.caseNO},
        r => {
          this.aForm2 = r.data;
        })
    },
    //涉案人员嫌疑人信息
    getData3(currentPage,pageSize,pd){
      let p={
        "currentPage":currentPage,
        "showCount":pageSize,
        "pd":{"RYBH":pd}
      }
      this.$api.post(this.Global.aport3 + '/ryhx/getajxyrxx', p,
        r => {
          this.aForm3 = r.data.resultList;
          this.TotalResult3 = r.data.totalResult;
        })
    },
    //案件人员证件信息
    getData4(currentPage,pageSize,pd){
      let p={
        // "currentPage":currentPage,
        // "showCount":pageSize,
        "pd":{"RYBH":this.rybh,"caseNO": this.xid.caseNO}
      }
      this.$api.post(this.Global.aport3 + '/ryhxhx/getajryzjxx', p,
        r => {
          this.aForm4 = r.data;
          this.TotalResult4 = r.data.length;
        })
    },
    //案件涉案单位
    getData5(currentPage,pageSize,pd){
      let p={
        "currentPage":currentPage,
        "showCount":pageSize,
        "pd":{"RYBH":pd}
      }
      this.$api.post(this.Global.aport3 + '/ryhx/getajsadw', p,
        r => {
          this.aForm5 = r.data.resultList;
          this.TotalResult5 = r.data.totalResult
        })
    },

    getData6(currentPage,pageSize,pd){
      let p={
        // "currentPage":currentPage,
        // "showCount":pageSize,
        "pd":{"RYBH":this.rybh,"caseNO": this.xid.caseNO}
      }
      this.$api.post(this.Global.aport3 + '/ryhxhx/getajcljg', p,
        r => {
          this.aForm6 = r.data;
          this.TotalResult6 = r.data.length;
        })
    },
    getData(xid) {
      //人员基本信息
      this.aForm1 = xid;
      //涉案人员基本信息
      this.getData2();
      //涉案人员嫌疑人信息
      this.getData3(this.CurrentPage3,this.pageSize3,this.rybh);
      //案件人员证件信息
      this.getData4();
      //案件涉案单位
      this.getData5(this.CurrentPage5,this.pageSize5,this.rybh);
      //处理结果
      this.getData6();

    },

  },
}
</script>
<style scoped>
.input-text{width: 35%!important; text-align: left;}
.input-input{width: 55%!important;}
</style>
