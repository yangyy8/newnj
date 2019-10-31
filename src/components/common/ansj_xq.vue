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
                <el-form   ref="" :model="aForm1">
                  <el-row :gutter="3"  class="mb-6">
                      <el-col :span="8" class="input-item">
                       <span class="input-text">人员编号：</span>
                       <span class="input-input detailinput">  {{aForm1.RYBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="航信案事件编号">航信案事件编号：</span>
                        <span class="input-input detailinput">  {{aForm1.HXASJBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="案事件编号">案事件编号：</span>
                       <span class="input-input detailinput">  {{aForm1.ASJBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="警综案件编号">警综案件编号：</span>
                       <span class="input-input detailinput">  {{aForm1.JZAJBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">案件密级：</span>
                        <span class="input-input detailinput">  {{aForm1.AJMJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">案件类别：</span>
                        <span class="input-input detailinput">  {{aForm1.AJLB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="案件副案别">案件副案别：</span>
                        <span class="input-input detailinput">  {{aForm1.AJFAB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="案件可防性案件类别">案件可防性案件类别：</span>
                        <span class="input-input detailinput">  {{aForm1.KFXAJLB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="案件侵害关系">案件侵害关系：</span>
                        <span class="input-input detailinput">  {{aForm1.QHGX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="被侵害对象类别">被侵害对象类别：</span>
                        <span class="input-input detailinput">  {{aForm1.BQHDXLB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">案件名称：</span>
                        <span class="input-input detailinput">  {{aForm1.AJMC}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">案件属性：</span>
                        <span class="input-input detailinput">  {{aForm1.AJSX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">案件状态：</span>
                        <span class="input-input detailinput">  {{aForm1.AJZT}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">案件性质：</span>
                        <span class="input-input detailinput">  {{aForm1.AJXZ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="案事件类型">案事件类型：</span>
                        <span class="input-input detailinput">  {{aForm1.ASJLX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">案件来源：</span>
                        <span class="input-input detailinput">  {{aForm1.AJLY}}</span>
                      </el-col>

                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="报案人姓名">报案人姓名：</span>
                       <span class="input-input detailinput">  {{aForm1.BARXM}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="报案人性别">报案人性别：</span>
                        <span class="input-input detailinput">  {{aForm1.BARXB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="报案人出生日期">报案人出生日期：</span>
                       <span class="input-input detailinput">  {{aForm1.BARCSRQ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="报案人单位">报案人单位：</span>
                       <span class="input-input detailinput">  {{aForm1.BARDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="报案人联系方式">报案人联系方式：</span>
                        <span class="input-input detailinput">  {{aForm1.BARLXFS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="报案人住址">报案人住址：</span>
                        <span class="input-input detailinput">  {{aForm1.BARZZ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="报案人证件种类">报案人证件种类：</span>
                        <span class="input-input detailinput">  {{aForm1.BARZJZL}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="报案人证件号码">报案人证件号码：</span>
                        <span class="input-input detailinput">  {{aForm1.BARZJHM}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="报案人保密级别">报案人保密级别：</span>
                        <span class="input-input detailinput">  {{aForm1.BARBMJB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">报案时间：</span>
                        <span class="input-input detailinput">  {{aForm1.BASJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
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
                      <el-col :span="24" class="input-item">
                        <span class="input-text" style="width:11.6%!important">简要案情：</span>
                        <span class="input-input detailinput" style="width:85%!important">  {{aForm1.JYAQ}}</span>
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
                      <!-- <el-col :span="8" class="input-item">
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
                      </el-col> -->
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
                      <!-- <el-col :span="8" class="input-item">
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
                      </el-col> -->

                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="主办人电话">主办人电话：</span>
                        <span class="input-input detailinput">  {{aForm1.ZBRDH}}</span>
                      </el-col>

                      <!-- <el-col :span="8" class="input-item">
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
                      </el-col> -->
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
                      </el-col>
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
                       prop="ASJBH"
                       label="案事件编号">
                     </el-table-column>
                     <el-table-column
                       prop="SAJS"
                       label="涉案角色">
                     </el-table-column>
                     <el-table-column
                       prop="YWXM"
                       label="英文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="ZWXM"
                       label="中文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="XB_DESC"
                       label="性别">
                     </el-table-column>
                     <el-table-column
                       prop="CSRQ"
                       label="出生日期">
                     </el-table-column>
                     <el-table-column
                       prop="GJDQ_DESC"
                       label="国家/地区">
                     </el-table-column>
                     <el-table-column
                       prop="LRSJ"
                       label="录入时间">
                     </el-table-column>
                     <el-table-column
                       prop="LRR"
                       label="录入人">
                     </el-table-column>
                 </el-table>
              </div>

              <div v-show="page==2">
                <el-table
                     ref="multipleTable"
                     :data="aForm3"
                     border
                     style="width: 100%" class="stu-table"
                     >
                     <el-table-column
                       prop="JLBH"
                       label="嫌疑人记录编号">
                     </el-table-column>
                     <el-table-column
                       prop="BMJB"
                       label="保密级别">
                     </el-table-column>
                     <el-table-column
                       prop="XZZ"
                       label="现住址">
                     </el-table-column>
                     <el-table-column
                       prop="XYRSX"
                       label="嫌疑属性">
                     </el-table-column>
                     <el-table-column
                       prop="ZAYY"
                       label="作案原因">
                     </el-table-column>
                     <el-table-column
                       prop="ZHRQ"
                       label="抓获日期">
                     </el-table-column>
                     <el-table-column
                       prop="GXR"
                       label="更新人">
                     </el-table-column>
                     <el-table-column
                       prop="GXSJ"
                       label="更新时间">
                     </el-table-column>

                 </el-table>
              </div>

              <div v-show="page==3">
                <el-table
                     ref="multipleTable"
                     :data="aForm4"
                     border
                     style="width: 100%" class="stu-table"
                     >
                     <el-table-column
                       prop="ASJBH"
                       label="案件编号">
                     </el-table-column>
                     <el-table-column
                       prop="YWX"
                       label="英文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="ZWX"
                       label="中文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="XB_DESC"
                       label="性别">
                     </el-table-column>
                     <el-table-column
                       prop="CSRQ"
                       label="出生日期">
                     </el-table-column>
                     <el-table-column
                       prop="SFZHM"
                       label="身份证号码">
                     </el-table-column>
                     <el-table-column
                       prop="GJDQ_DESC"
                       label="国家地区">
                     </el-table-column>
                     <el-table-column
                       prop="ZJYXQZ"
                       label="证件有效期至">
                     </el-table-column>

                 </el-table>
              </div>

              <div v-show="page==4">
                <el-table
                     ref="multipleTable"
                     :data="aForm5"
                     border
                     style="width: 100%" class="stu-table"
                     >
                     <el-table-column
                       prop="ASJBH"
                       label="案件编号">
                     </el-table-column>
                     <el-table-column
                       prop="SALB"
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
                       prop="DJDW"
                       label="登记单位">
                     </el-table-column>
                     <el-table-column
                       prop="ZJYXQZ"
                       label="登记时间">
                     </el-table-column>

                 </el-table>
              </div>

              <div v-show="page==5">
                <el-form   ref="aForm6">
                  <el-row :gutter="3"  class="mb-6">
                      <el-col :span="8" class="input-item">
                       <span class="input-text">案件编号：</span>
                       <span class="input-input detailinput">  {{aForm6.ASJBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="涉案实体编号">涉案实体编号：</span>
                        <span class="input-input detailinput">  {{aForm6.AJSTBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="案事件类别">案事件类别：</span>
                       <span class="input-input detailinput">  {{aForm6.ASJLB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="措施编号">措施编号：</span>
                       <span class="input-input detailinput">  {{aForm6.CSBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">决定结果：</span>
                        <span class="input-input detailinput">  {{aForm6.JDJG}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">决定期限：</span>
                        <span class="input-input detailinput">  {{aForm6.JDQX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="决定金额">决定金额：</span>
                        <span class="input-input detailinput">  {{aForm6.JDJE}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="决定时间">决定时间：</span>
                        <span class="input-input detailinput">  {{aForm6.JDSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="决定人姓名">决定人姓名：</span>
                        <span class="input-input detailinput">  {{aForm6.JDRXM}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="决定单位">决定单位：</span>
                        <span class="input-input detailinput">  {{aForm6.JDDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="决定单位名称">决定单位名称：</span>
                        <span class="input-input detailinput">  {{aForm6.JDDWMC}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">执行人：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXR}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">执行单位：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">文书号：</span>
                        <span class="input-input detailinput">  {{aForm6.WSH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="对外说辞">对外说辞：</span>
                        <span class="input-input detailinput">  {{aForm6.DWSC}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">签证号码：</span>
                        <span class="input-input detailinput">  {{aForm6.ZJHM}}</span>
                      </el-col>

                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="要求离境时间">要求离境时间：</span>
                       <span class="input-input detailinput">  {{aForm6.YQLJSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="执行金额">执行金额：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXJE}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="拘留天数">拘留天数：</span>
                       <span class="input-input detailinput">  {{aForm6.JLTS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="执行期限">执行期限：</span>
                       <span class="input-input detailinput">  {{aForm6.ZXQX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="执行地点">执行地点：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXDD}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="执行情况">执行情况：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXQK}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="执行开始时间">执行开始时间：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXKSSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="执行结束时间">执行结束时间：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXJSSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="执行标识">执行标识：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXBS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">撤销原因：</span>
                        <span class="input-input detailinput">  {{aForm6.CXYY}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">撤销时间：</span>
                        <span class="input-input detailinput">  {{aForm6.CXSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="撤销审批单位">撤销审批单位：</span>
                        <span class="input-input detailinput">  {{aForm6.CXSPDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="撤销批准人">撤销批准人：</span>
                        <span class="input-input detailinput">  {{aForm6.CXPZR}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="撤销审批意见">撤销审批意见：</span>
                        <span class="input-input detailinput">  {{aForm6.CXSPYJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="拘留审查结束期限">拘留审查结束期限：</span>
                        <span class="input-input detailinput">  {{aForm6.JLSCJSQX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="接收单位">接收单位：</span>
                        <span class="input-input detailinput">  {{aForm6.JSDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="接收人">接收人：</span>
                        <span class="input-input detailinput">  {{aForm6.JSR}}</span>
                      </el-col>

                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="接收时间">接收时间：</span>
                       <span class="input-input detailinput">  {{aForm6.JSSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="RAS标识">RAS标识：</span>
                        <span class="input-input detailinput">  {{aForm6.RAS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="登记时间">登记时间：</span>
                       <span class="input-input detailinput">  {{aForm6.DJSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="登记人">登记人：</span>
                       <span class="input-input detailinput">  {{aForm6.DJRXM}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="登记单位">登记单位：</span>
                        <span class="input-input detailinput">  {{aForm6.DJDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="登记单位名称">登记单位名称：</span>
                        <span class="input-input detailinput">  {{aForm6.DJDWMC}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">修改时间：</span>
                        <span class="input-input detailinput">  {{aForm6.XGSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">修改人：</span>
                        <span class="input-input detailinput">  {{aForm6.XGR}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">修改人姓名：</span>
                        <span class="input-input detailinput">  {{aForm6.XGRXM}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">修改单位：</span>
                        <span class="input-input detailinput">  {{aForm6.XGDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">修改单位名称：</span>
                        <span class="input-input detailinput">  {{aForm6.XGDWMC}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">案件编号：</span>
                        <span class="input-input detailinput">  {{aForm6.AJBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">呈请类别：</span>
                        <span class="input-input detailinput">  {{aForm6.CQLB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="对象编号">对象编号：</span>
                        <span class="input-input detailinput">  {{aForm6.DXBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="对象类别">对象类别：</span>
                        <span class="input-input detailinput">  {{aForm6.DXLB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="对象名称">对象名称：</span>
                        <span class="input-input detailinput">  {{aForm6.DXMC}}</span>
                      </el-col>

                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="执行单位名称">执行单位名称：</span>
                       <span class="input-input detailinput">  {{aForm6.ZXDWMC}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="法律依据">法律依据：</span>
                        <span class="input-input detailinput">  {{aForm6.JGFLYJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="执行原因">执行原因：</span>
                       <span class="input-input detailinput">  {{aForm6.ZXYY}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                       <span class="input-text" title="通知家属情况">通知家属情况：</span>
                       <span class="input-input detailinput">  {{aForm6.TZJSQK}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="不准出境是否登记">不准出境是否登记：</span>
                        <span class="input-input detailinput">  {{aForm6.BZCJSFDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="有无外伤">有无外伤：</span>
                        <span class="input-input detailinput">  {{aForm6.YWWS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="是否进入候问室">是否进入候问室：</span>
                        <span class="input-input detailinput">  {{aForm6.SFJRHWS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="传唤方式">传唤方式：</span>
                        <span class="input-input detailinput">  {{aForm6.CHFS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="继续盘问理由">继续盘问理由：</span>
                        <span class="input-input detailinput">  {{aForm6.JPWLY}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="代收银行">代收银行：</span>
                        <span class="input-input detailinput">  {{aForm6.DSYX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="检察机关措施意见">检察机关措施意见：</span>
                        <span class="input-input detailinput">  {{aForm6.JCJGCSYJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="办理人">办理人：</span>
                        <span class="input-input detailinput">  {{aForm6.BLR}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="辨认检查地点">辨认检查地点：</span>
                        <span class="input-input detailinput">  {{aForm6.BRDD}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="辨认检查人姓名">辨认检查人姓名：</span>
                        <span class="input-input detailinput">  {{aForm6.BRR}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="见证人">见证人：</span>
                        <span class="input-input detailinput">  {{aForm6.JZRXX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="记录人">记录人：</span>
                        <span class="input-input detailinput">  {{aForm6.JLR}}</span>
                      </el-col>

                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="辨认检查对象">辨认检查对象：</span>
                        <span class="input-input detailinput">  {{aForm6.BRDX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="辨认检查人住址">辨认检查人住址：</span>
                        <span class="input-input detailinput">  {{aForm6.BRRZZ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="辨认检查人单位">辨认检查人单位：</span>
                        <span class="input-input detailinput">  {{aForm6.BRRDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="辨认检查目的">辨认检查目的：</span>
                        <span class="input-input detailinput"> {{aForm6.BRMD}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="辨认检查过程及结果">辨认检查过程及结果：</span>
                        <span class="input-input detailinput">  {{aForm6.BRGCJJG}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="鉴定方式">鉴定方式：</span>
                        <span class="input-input detailinput">  {{aForm6.JDFS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >协作具体事项：</span>
                        <span class="input-input detailinput">  {{aForm6.XZSX}}</span>
                      </el-col>

                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="发布范围">发布范围：</span>
                        <span class="input-input detailinput">  {{aForm6.FBFW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="结果执行保证人">结果执行保证人：</span>
                        <span class="input-input detailinput">  {{aForm6.BZR}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="结果执行通知对象">结果执行通知对象：</span>
                        <span class="input-input detailinput">  {{aForm6.TZDX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="结果执行补充信息">结果执行补充信息：</span>
                        <span class="input-input detailinput">  {{aForm6.BCXX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >有效标识：</span>
                        <span class="input-input detailinput">  {{aForm6.YXBS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="关联措施编号">关联措施编号：</span>
                        <span class="input-input detailinput">  {{aForm6.GLCSBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >执行结果：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXJG}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >事实情况：</span>
                        <span class="input-input detailinput">  {{aForm6.SSQK}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >证据情况：</span>
                        <span class="input-input detailinput">  {{aForm6.ZJQK}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >执行方式：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXFS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >复议机关：</span>
                        <span class="input-input detailinput">  {{aForm6.FYJG}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >诉讼机构：</span>
                        <span class="input-input detailinput">  {{aForm6.SSJG}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >材料清单：</span>
                        <span class="input-input detailinput">  {{aForm6.CLQD}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="材料清单数量">材料清单数量：</span>
                        <span class="input-input detailinput">  {{aForm6.CLQDSL}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="结果执行通知对象地址">结果执行通知对象地址：</span>
                        <span class="input-input detailinput">  {{aForm6.TZDXDZ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="主关联措施编号">主关联措施编号：</span>
                        <span class="input-input detailinput">  {{aForm6.ZGLCSBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" >检查机关：</span>
                        <span class="input-input detailinput">  {{aForm6.JCJG}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="检查机关名称">检查机关名称：</span>
                        <span class="input-input detailinput">  {{aForm6.JCJGMC}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="检查机关决定结果">检查机关决定结果：</span>
                        <span class="input-input detailinput">  {{aForm6.JCJGJDJG}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="检查机关决定期限">检查机关决定期限：</span>
                        <span class="input-input detailinput">  {{aForm6.JCJGJDQX}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="检查机关决定时间">检查机关决定时间：</span>
                        <span class="input-input detailinput">  {{aForm6.JCJGJDSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="检查机关意见">检查机关意见：</span>
                        <span class="input-input detailinput">  {{aForm6.JCJGYJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="执行处所名称">执行处所名称：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXCSMC}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="执行处所代码">执行处所代码：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXCSDM}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="人员姓名">人员姓名：</span>
                        <span class="input-input detailinput">  {{aForm6.RYMC}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text">性别：</span>
                        <span class="input-input detailinput">  {{aForm6.RYXB}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="出生日期">出生日期：</span>
                        <span class="input-input detailinput">  {{aForm6.RYCSRQ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="证件种类号码">证件种类号码：</span>
                        <span class="input-input detailinput">  {{aForm6.RYZJZLHM}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="住(地)址">住(地)址：</span>
                        <span class="input-input detailinput">  {{aForm6.RYXZZ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="工作单位">工作单位：</span>
                        <span class="input-input detailinput">  {{aForm6.RYGZDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="联系方式">联系方式：</span>
                        <span class="input-input detailinput">  {{aForm6.RYLXFS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="执行人员证件号码">执行人员证件号码：</span>
                        <span class="input-input detailinput">  {{aForm6.ZXZH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="检察机关文书号">检察机关文书号：</span>
                        <span class="input-input detailinput">  {{aForm6.JCJGWSH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="措施人员编号">措施人员编号：</span>
                        <span class="input-input detailinput">  {{aForm6.CSRYBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="措施执行时间">措施执行时间：</span>
                        <span class="input-input detailinput">  {{aForm6.CSZXSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="结果执行人员工作单位">结果执行人员工作单位：</span>
                        <span class="input-input detailinput">  {{aForm6.JGZXLXDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="结果执行人员联系电话">结果执行人员联系电话：</span>
                        <span class="input-input detailinput">  {{aForm6.JGZXLXDH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="结果执行联系人">结果执行联系人：</span>
                        <span class="input-input detailinput">  {{aForm6.JGZXLXR}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="涉外事件简要描述">涉外事件简要描述：</span>
                        <span class="input-input detailinput">  {{aForm6.SWSJJYMS}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="更新时间">更新时间：</span>
                        <span class="input-input detailinput">  {{aForm6.GXSJ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="更新人">更新人：</span>
                        <span class="input-input detailinput">  {{aForm6.GXR}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="更新单位">更新单位：</span>
                        <span class="input-input detailinput">  {{aForm6.GXDW}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="数据来源">数据来源：</span>
                        <span class="input-input detailinput">  {{aForm6.SJLY}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="数据状态">数据状态：</span>
                        <span class="input-input detailinput">  {{aForm6.ZT}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="备注">备注：</span>
                        <span class="input-input detailinput">  {{aForm6.BZ}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="警综措施结果记录编号">警综措施结果记录编号：</span>
                        <span class="input-input detailinput">  {{aForm6.JZCSJGJLBH}}</span>
                      </el-col>
                      <el-col :span="8" class="input-item">
                        <span class="input-text" title="内部措施结果编号">内部措施结果编号：</span>
                        <span class="input-input detailinput">  {{aForm6.NBCSJGBH}}</span>
                      </el-col>

                  </el-row>
                </el-form>
              </div>
          </div>

  </div>
</template>
<script scoped>
export default {
  name: 'ANSJ',
  props: ['type', 'xid'],
  data() {
    return {
      page: 0,
      aForm1: {},
      aForm2: [],
      aForm3: [],
      aForm4: [],
      aForm5: [],
      aForm6: {},
      asjbh: '',
      pd: {},
      px:{},
      pages: this.type,
      id: this.xid,
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',
    }
  },
  activated() {
    this.getData(this.id);
  },
  mounted() {
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.getData(this.id)
  },
  watch:{
      type: function(val){
        this.pages=val;
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
        this.getData(this.id)
      },
      immediate: true
      },
    },
  methods: {
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
    },
    base2() {
      this.page = 2;
    },
    base3() {
      this.page = 3;
    },
    base4() {
      this.page = 4;
    },
    base5() {
      this.page = 5;
    },

    getData(xid) {

      var arr=xid.split(',');
        this.pd.RGUID = arr[0];
        this.px.DTID=arr[1];
      let p = {
        "pd": this.px,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      //人员基本信息
      this.getData1(this.pd);
      //涉案人员基本信息
      this.$api.post(this.Global.aport4 + '/eS_AJ_RY_JBXXController/getResultListByParams', p,
        r => {
          this.aForm2 = r.data.resultList;
        })
      // //涉案人员嫌疑人信息
      this.$api.post(this.Global.aport4 + '/eS_AJ_RY_XYRXXController/getResultListByParams', p,
        r => {
          this.aForm3 = r.data.resultList;
        })
      // //案件人员证件信息
      this.$api.post(this.Global.aport4 + '/eS_AJ_RY_ZJXXController/getResultListByParams', p,
        r => {
          this.aForm4 = r.data.resultList;
        })
      // //案件涉案单位
      this.$api.post(this.Global.aport4 + '/eS_AJ_SADWController/getResultListByParams', p,
        r => {
          this.aForm5 = r.data.resultList;
        })
      // 处理结果
        this.$api.post(this.Global.aport4 + '/eS_AJ_CLJGController/getEntityByDTID', p,
          r => {
            this.aForm6 = r.data;
          })

    },

    getData1(pp){
      let p={
        "pd":pp,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      }
      this.$api.post(this.Global.aport4 + '/eS_AJ_JBXXController/getEntityByRGUID', p,
        r => {
          this.aForm1 = r.data;
        })
    },

  },
}
</script>
<style scoped>
.input-text{width: 35%!important; text-align: left;}
.input-input{width: 55%!important;}
</style>
