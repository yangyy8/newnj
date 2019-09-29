<template lang="html">
  <div class="">
      <div v-show="page==0">
        <el-row :gutter="3"  class="mb-6">
          <el-col :span="8" class="input-item">
           <span class="xq_t">人员编号</span>
           ：<span class="xq_txt">{{xqData0.RYBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">居住地行政区划</span>
           ：<span class="xq_txt">{{xqData0.JZD_XZQH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">居住地所属派出所</span>
           ：<span class="xq_txt">{{xqData0.JZD_PCS}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">派出所中文名称</span>
           ：<span class="xq_txt">{{xqData0.JZD_PCSMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">详细地址</span>
           ：<span class="xq_txt">{{xqData0.XXDZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">房主姓名</span>
           ：<span class="xq_txt">{{xqData0.FZXM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">房主性别</span>
           ：<span class="xq_txt">{{xqData0.FZXB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">房主证件号码</span>
           ：<span class="xq_txt">{{xqData0.FZZJHM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">房主工作单位</span>
           ：<span class="xq_txt">{{xqData0.FZGZDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">房主联系电话</span>
           ：<span class="xq_txt">{{xqData0.FZLXDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">房屋性质</span>
           ：<span class="xq_txt">{{xqData0.FWXZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">入住方式</span>
           ：<span class="xq_txt">{{xqData0.RZFS}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">居住初始状态产生时间</span>
           ：<span class="xq_txt">{{xqData0.JZZTCSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">居住状态确认时间</span>
           ：<span class="xq_txt">{{xqData0.JZZTQRSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">登记单位</span>
           ：<span class="xq_txt">{{xqData0.DJDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">登记人</span>
           ：<span class="xq_txt">{{xqData0.DJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">登记日期</span>
           ：<span class="xq_txt">{{xqData0.DJRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">录入单位</span>
           ：<span class="xq_txt">{{xqData0.LRDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">录入人</span>
           ：<span class="xq_txt">{{xqData0.LRR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">录入日期</span>
           ：<span class="xq_txt">{{xqData0.LRRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">居住状态类型</span>
           ：<span class="xq_txt">{{xqData0.ZT_JZZT}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">是否核对</span>
           ：<span class="xq_txt">{{xqData0.ZT_SFHD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处理单位</span>
           ：<span class="xq_txt">{{xqData0.CLDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处理时间</span>
           ：<span class="xq_txt">{{xqData0.CLSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处理单位级别</span>
           ：<span class="xq_txt">{{xqData0.CLDWJB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处理责任区</span>
           ：<span class="xq_txt">{{xqData0.CLZRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">更新时间</span>
           ：<span class="xq_txt">{{xqData0.GXSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">更新人</span>
           ：<span class="xq_txt">{{xqData0.GXR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">更新单位</span>
           ：<span class="xq_txt">{{xqData0.GXDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">数据来源</span>
           ：<span class="xq_txt">{{xqData0.SJLY}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">数据状态</span>
           ：<span class="xq_txt">{{xqData0.ZT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">是否注销</span>
           ：<span class="xq_txt">{{xqData0.ZT_SFZX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">标准化地址ID</span>
           ：<span class="xq_txt">{{xqData0.JZD_DZDTID}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">标准化地址</span>
           ：<span class="xq_txt">{{xqData0.JZD_DZTXT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">采集类型</span>
           ：<span class="xq_txt">{{xqData0.ZT_CJLX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">记录是否当前居住地信息</span>
           ：<span class="xq_txt">{{xqData0.ZT_SFYX}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">居住地责任区</span>
           ：<span class="xq_txt">{{xqData0.JZD_ZRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">居住地社区</span>
           ：<span class="xq_txt">{{xqData0.JZD_SQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">入住日期</span>
           ：<span class="xq_txt">{{xqData0.RQ_RZRQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">入住确认日期</span>
           ：<span class="xq_txt">{{xqData0.RQ_RZQRRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">离开日期</span>
           ：<span class="xq_txt">{{xqData0.RQ_LKRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">注销日期</span>
           ：<span class="xq_txt">{{xqData0.RQ_ZXRQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">与业主关系</span>
           ：<span class="xq_txt">{{xqData0.YYZGX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">住所安全评估</span>
           ：<span class="xq_txt">{{xqData0.ZSAQPG}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">安保措施</span>
           ：<span class="xq_txt">{{xqData0.ABCS}}</span>
          </el-col>
        </el-row>
      </div>
      <div v-show="page==1">
        <el-row :gutter="3"  class="mb-6">
          <el-col :span="8" class="input-item">
           <span class="xq_t">人员类别</span>
           ：<span class="xq_txt">{{xqData1.PROFCODE}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">人员姓名</span>
           ：<span class="xq_txt">{{xqData1.NAME}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">国家/地区代码</span>
           ：<span class="xq_txt">{{xqData1.NATIONALITY}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">性别</span>
           ：<span class="xq_txt">{{xqData1.GENDER}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">出生日期</span>
           ：<span class="xq_txt">{{xqData1.BIRTH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">证件类型</span>
           ：<span class="xq_txt">{{xqData1.CERTIFICATETYPE}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">证件号码</span>
           ：<span class="xq_txt">{{xqData1.CERTIFICATENO}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">职业代码</span>
           ：<span class="xq_txt">{{xqData1.PROFCODE}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">签证类型</span>
           ：<span class="xq_txt">{{xqData1.VISATYPE}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">出入境日期</span>
           ：<span class="xq_txt">{{xqData1.IOSTRING}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">出入境时间</span>
           ：<span class="xq_txt">{{xqData1.IOTIME}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">出入口岸</span>
           ：<span class="xq_txt">{{xqData1.IOPORT}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">检查员号</span>
           ：<span class="xq_txt">{{xqData1.INSPECTORID}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">交通方式</span>
           ：<span class="xq_txt">{{xqData1.TRAFFICMODE}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">交通工具</span>
           ：<span class="xq_txt">{{xqData1.TRAFFICTOOL}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">前往地</span>
           ：<span class="xq_txt">{{xqData1.TRAFFICTOOL}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">发证机关</span>
           ：<span class="xq_txt">{{xqData1.GRANTCERTORG}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">发证日期</span>
           ：<span class="xq_txt">{{xqData1.GRANTCERTSTRING}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">出入境事由</span>
           ：<span class="xq_txt">{{xqData1.OUTREASON}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">通道号</span>
           ：<span class="xq_txt">{{xqData1.CHANNELNO}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">旅游团号</span>
           ：<span class="xq_txt">{{xqData1.TOURGROUPNO}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">入库时间(出境登记卡号)</span>
           ：<span class="xq_txt">{{xqData1.INTIME}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">人员姓名拼音</span>
           ：<span class="xq_txt">{{xqData1.NAMEPY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">境内外标识</span>
           ：<span class="xq_txt">{{xqData1.JNWBS}}</span>
          </el-col>
        </el-row>
      </div>
      <div v-show="page==2">
        <el-row :gutter="3"  class="mb-6">
          <el-col :span="8" class="input-item">
           <span class="xq_t">人员编号</span>
           ：<span class="xq_txt">{{xqData2.RYBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警补充接警内容</span>
           ：<span class="xq_txt">{{xqData2.BCJJNR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警处警意见</span>
           ：<span class="xq_txt">{{xqData2.BJCJYJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警电话</span>
           ：<span class="xq_txt">{{xqData2.BJDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警电话用户地址</span>
           ：<span class="xq_txt">{{xqData2.BJDHDZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警电话用户姓名</span>
           ：<span class="xq_txt">{{xqData2.BJDHHM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警时间</span>
           ：<span class="xq_txt">{{xqData2.BJDHSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警类型</span>
           ：<span class="xq_txt">{{xqData2.BJLX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警内容</span>
           ：<span class="xq_txt">{{xqData2.BJNR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警人</span>
           ：<span class="xq_txt">{{xqData2.BJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警人性别</span>
           ：<span class="xq_txt">{{xqData2.BJRXB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警退单原因</span>
           ：<span class="xq_txt">{{xqData2.BJTDYY}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警方式</span>
           ：<span class="xq_txt">{{xqData2.BJXS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警毗领情况</span>
           ：<span class="xq_txt">{{xqData2.BLQK}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警标注单位</span>
           ：<span class="xq_txt">{{xqData2.BZDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警标注单位名称</span>
           ：<span class="xq_txt">{{xqData2.BZDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警标注来源</span>
           ：<span class="xq_txt">{{xqData2.BZLY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警标注人</span>
           ：<span class="xq_txt">{{xqData2.BZR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警标注人姓名</span>
           ：<span class="xq_txt">{{xqData2.BZRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警标注时间</span>
           ：<span class="xq_txt">{{xqData2.BZSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警建(构)筑物情况</span>
           ：<span class="xq_txt">{{xqData2.BZWQK}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警处警标识</span>
           ：<span class="xq_txt">{{xqData2.CJBS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警车辆类型</span>
           ：<span class="xq_txt">{{xqData2.CLLX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警车辆去向</span>
           ：<span class="xq_txt">{{xqData2.CLQX}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警登记单位</span>
           ：<span class="xq_txt">{{xqData2.DJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警登记单位名称</span>
           ：<span class="xq_txt">{{xqData2.DJDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警登记人</span>
           ：<span class="xq_txt">{{xqData2.DJR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警登记人姓名</span>
           ：<span class="xq_txt">{{xqData2.DJRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警登记时间</span>
           ：<span class="xq_txt">{{xqData2.DJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警二级接警单位到达时间</span>
           ：<span class="xq_txt">{{xqData2.EJDDSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警二级接警单位</span>
           ：<span class="xq_txt">{{xqData2.EJJSDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警二级接警单位名称</span>
           ：<span class="xq_txt">{{xqData2.EJJSDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警二级接警单位接收人</span>
           ：<span class="xq_txt">{{xqData2.EJJSR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警二级接警单位接收人姓名</span>
           ：<span class="xq_txt">{{xqData2.EJJSRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警二级接警单位接收时间</span>
           ：<span class="xq_txt">{{xqData2.EJJSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警二级接警单位下发时间</span>
           ：<span class="xq_txt">{{xqData2.EJXFSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警X坐标(报警人位置)</span>
           ：<span class="xq_txt">{{xqData2.GIS_X}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警Y坐标(报警人位置)</span>
           ：<span class="xq_txt">{{xqData2.GIS_Y}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警关联接警编号</span>
           ：<span class="xq_txt">{{xqData2.GLJJDBH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警火灾等级</span>
           ：<span class="xq_txt">{{xqData2.HZDJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警编号（警综案件编号关联）</span>
           ：<span class="xq_txt">{{xqData2.JJBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警接警单号</span>
           ：<span class="xq_txt">{{xqData2.JJDBH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警单位</span>
           ：<span class="xq_txt">{{xqData2.JJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警单位名称</span>
           ：<span class="xq_txt">{{xqData2.JJDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警交警短信内容</span>
           ：<span class="xq_txt">{{xqData2.JJDXNR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警交警短信发送时间</span>
           ：<span class="xq_txt">{{xqData2.JJDXSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警管辖单位</span>
           ：<span class="xq_txt">{{xqData2.JJGXDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警接警录音编号</span>
           ：<span class="xq_txt">{{xqData2.JJLYH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警人</span>
           ：<span class="xq_txt">{{xqData2.JJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警日期时间</span>
           ：<span class="xq_txt">{{xqData2.JJRQSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警人姓名</span>
           ：<span class="xq_txt">{{xqData2.JJRXM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警行政区划</span>
           ：<span class="xq_txt">{{xqData2.JJXZQH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警员姓名</span>
           ：<span class="xq_txt">{{xqData2.JJYXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警建筑结构</span>
           ：<span class="xq_txt">{{xqData2.JZJG}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警建筑类别</span>
           ：<span class="xq_txt">{{xqData2.JZLB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警路灯杆编号</span>
           ：<span class="xq_txt">{{xqData2.LDGBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警来话类别</span>
           ：<span class="xq_txt">{{xqData2.LHLBDM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警报警人联系电话</span>
           ：<span class="xq_txt">{{xqData2.LXDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警派警单号</span>
           ：<span class="xq_txt">{{xqData2.PJDBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警派警录音编号</span>
           ：<span class="xq_txt">{{xqData2.PJLYH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警处警单派警时间</span>
           ：<span class="xq_txt">{{xqData2.PJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警派警员姓名</span>
           ：<span class="xq_txt">{{xqData2.PJYXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警起火场所</span>
           ：<span class="xq_txt">{{xqData2.QHCS}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警燃烧物性质</span>
           ：<span class="xq_txt">{{xqData2.RSWXZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警是否拨打电话</span>
           ：<span class="xq_txt">{{xqData2.SFBDDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警事发部位(燃烧部位)</span>
           ：<span class="xq_txt">{{xqData2.SFBW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警事发地址</span>
           ：<span class="xq_txt">{{xqData2.SFDD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警是否已发告知短信</span>
           ：<span class="xq_txt">{{xqData2.SFYFDX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警是否重点单位</span>
           ：<span class="xq_txt">{{xqData2.SFZDDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警是否符合自行协商处理</span>
           ：<span class="xq_txt">{{xqData2.SFZXXS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警涉警车牌</span>
           ：<span class="xq_txt">{{xqData2.SJCPH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警三级接警单位到达时间</span>
           ：<span class="xq_txt">{{xqData2.SJDDSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警三级接警单位</span>
           ：<span class="xq_txt">{{xqData2.SJJSD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警三级接警单位名称</span>
           ：<span class="xq_txt">{{xqData2.SJJSDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警三级接警单位接收人</span>
           ：<span class="xq_txt">{{xqData2.SJJSR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警三级接警单位接收人姓名</span>
           ：<span class="xq_txt">{{xqData2.SJJSRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警三级接警单位接收时间</span>
           ：<span class="xq_txt">{{xqData2.SJJSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警伤员去向</span>
           ：<span class="xq_txt">{{xqData2.SYQX}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警通话时长</span>
           ：<span class="xq_txt">{{xqData2.THSC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警修改单位</span>
           ：<span class="xq_txt">{{xqData2.XGDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警修改单位名称</span>
           ：<span class="xq_txt">{{xqData2.XGDWMC}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警修改人</span>
           ：<span class="xq_txt">{{xqData2.XGR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警修改人姓名</span>
           ：<span class="xq_txt">{{xqData2.XGRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警修改时间</span>
           ：<span class="xq_txt">{{xqData2.XGSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警是否逃逸</span>
           ：<span class="xq_txt">{{xqData2.YFTY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警有无危险物质</span>
           ：<span class="xq_txt">{{xqData2.YFWXWZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警移交单位</span>
           ：<span class="xq_txt">{{xqData2.YJDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警移交人</span>
           ：<span class="xq_txt">{{xqData2.YJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警移交时间</span>
           ：<span class="xq_txt">{{xqData2.YJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警移交说明</span>
           ：<span class="xq_txt">{{xqData2.YJSM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警有无被困人员</span>
           ：<span class="xq_txt">{{xqData2.YWBKRY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警有无爆炸/泄漏</span>
           ：<span class="xq_txt">{{xqData2.YWBZXL}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警重点单位编码</span>
           ：<span class="xq_txt">{{xqData2.ZDDWBM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警指定移交单位</span>
           ：<span class="xq_txt">{{xqData2.ZDYJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警指定移交人</span>
           ：<span class="xq_txt">{{xqData2.ZDYJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警指定移交时间</span>
           ：<span class="xq_txt">{{xqData2.ZDYJSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警指定移交说明</span>
           ：<span class="xq_txt">{{xqData2.ZDYJSM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警警员位置X坐标</span>
           ：<span class="xq_txt">{{xqData2.ZHDDGIS_X}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警警员位置Y坐标</span>
           ：<span class="xq_txt">{{xqData2.ZHDDGIS_Y}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">接警指挥调度接警单位</span>
           ：<span class="xq_txt">{{xqData2.ZHDDJJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警指挥调度警员接收时间</span>
           ：<span class="xq_txt">{{xqData2.ZHDDJJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接警指挥调度接警员</span>
           ：<span class="xq_txt">{{xqData2.ZHDDJJY}}</span>
          </el-col>
        </el-row>
      </div>
      <div v-show="page==3">
        <el-row :gutter="3"  class="mb-6">
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警案件受理单位</span>
           ：<span class="xq_txt">{{xqData3.AJSLDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警案件受理人</span>
           ：<span class="xq_txt">{{xqData3.AJSLR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警补充处理结果</span>
           ：<span class="xq_txt">{{xqData3.BCCLJG}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警标注单位</span>
           ：<span class="xq_txt">{{xqData3.BZDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警标注单位名称</span>
           ：<span class="xq_txt">{{xqData3.BZDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警标注来源</span>
           ：<span class="xq_txt">{{xqData3.BZLY}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警标注人</span>
           ：<span class="xq_txt">{{xqData3.BZR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警标注人姓名</span>
           ：<span class="xq_txt">{{xqData3.BZRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警标注时间</span>
           ：<span class="xq_txt">{{xqData3.BZSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警出动船只</span>
           ：<span class="xq_txt">{{xqData3.CDCZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警出动机动车</span>
           ：<span class="xq_txt">{{xqData3.CDJDC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警出动警力</span>
           ：<span class="xq_txt">{{xqData3.CDJL}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警编号</span>
           ：<span class="xq_txt">{{xqData3.CJBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警处警单位</span>
           ：<span class="xq_txt">{{xqData3.CJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警单位名称</span>
           ：<span class="xq_txt">{{xqData3.CJDWMC}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警反馈时间</span>
           ：<span class="xq_txt">{{xqData3.CJFKSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警结果</span>
           ：<span class="xq_txt">{{xqData3.CJJG}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警街路巷</span>
           ：<span class="xq_txt">{{xqData3.CJJLX}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警类别</span>
           ：<span class="xq_txt">{{xqData3.CJLB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警门楼牌号</span>
           ：<span class="xq_txt">{{xqData3.CJMLPH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警门牌后缀</span>
           ：<span class="xq_txt">{{xqData3.CJMPHZ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警人</span>
           ：<span class="xq_txt">{{xqData3.CJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警人姓名</span>
           ：<span class="xq_txt">{{xqData3.CJRHZXS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警人联系方式</span>
           ：<span class="xq_txt">{{xqData3.CJRLXFS}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警时间</span>
           ：<span class="xq_txt">{{xqData3.CJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警发生地点详址</span>
           ：<span class="xq_txt">{{xqData3.CJXXDD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警详址</span>
           ：<span class="xq_txt">{{xqData3.CJXZ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警行政区划</span>
           ：<span class="xq_txt">{{xqData3.CJXZQH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警移送接收单位</span>
           ：<span class="xq_txt">{{xqData3.CJYSJSDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警移送接收人</span>
           ：<span class="xq_txt">{{xqData3.CJYSJSR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警移送接收时间</span>
           ：<span class="xq_txt">{{xqData3.CJYSJSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警简要警情及处理结果</span>
           ：<span class="xq_txt">{{xqData3.CLJGNR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警到达现场时间</span>
           ：<span class="xq_txt">{{xqData3.DDXCSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警登记单位</span>
           ：<span class="xq_txt">{{xqData3.DJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警登记单位名称</span>
           ：<span class="xq_txt">{{xqData3.DJDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警登记人</span>
           ：<span class="xq_txt">{{xqData3.DJR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警登记人姓名</span>
           ：<span class="xq_txt">{{xqData3.DJRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警登记时间</span>
           ：<span class="xq_txt">{{xqData3.DJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警反馈录音号</span>
           ：<span class="xq_txt">{{xqData3.FKLYH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警发生原因</span>
           ：<span class="xq_txt">{{xqData3.FSYY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警关联案件编号</span>
           ：<span class="xq_txt">{{xqData3.GLAJBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警关联案件状态</span>
           ：<span class="xq_txt">{{xqData3.GLAJZT}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警更新单位</span>
           ：<span class="xq_txt">{{xqData3.GXDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警更新单位名称</span>
           ：<span class="xq_txt">{{xqData3.GXDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警更新人</span>
           ：<span class="xq_txt">{{xqData3.GXR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警更新人姓名</span>
           ：<span class="xq_txt">{{xqData3.GXRXMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警更新时间</span>
           ：<span class="xq_txt">{{xqData3.GXSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警接警编号</span>
           ：<span class="xq_txt">{{xqData3.JJBH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警接警单编号</span>
           ：<span class="xq_txt">{{xqData3.JJDBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警解救儿童数</span>
           ：<span class="xq_txt">{{xqData3.JJETS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警解救妇女数</span>
           ：<span class="xq_txt">{{xqData3.JJFNS}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警解救人质数</span>
           ：<span class="xq_txt">{{xqData3.JJRZS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警警情属性</span>
           ：<span class="xq_txt">{{xqData3.JQSX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警救助群众</span>
           ：<span class="xq_txt">{{xqData3.JZQZ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警救助伤员</span>
           ：<span class="xq_txt">{{xqData3.JZSY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警领导处理时间</span>
           ：<span class="xq_txt">{{xqData3.LDCLSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警继续审查人数</span>
           ：<span class="xq_txt">{{xqData3.LZSCRS}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警破获刑事案件</span>
           ：<span class="xq_txt">{{xqData3.PHXSAJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警破获现行案件</span>
           ：<span class="xq_txt">{{xqData3.PHXXAJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警破获治安案件</span>
           ：<span class="xq_txt">{{xqData3.PHZAAJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警派警单编号</span>
           ：<span class="xq_txt">{{xqData3.PJDBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警人员受伤数</span>
           ：<span class="xq_txt">{{xqData3.RYSSS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警人员死亡数(燃烧部位)</span>
           ：<span class="xq_txt">{{xqData3.RYSWS}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警事发场所</span>
           ：<span class="xq_txt">{{xqData3.SFCS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警事发时间上限</span>
           ：<span class="xq_txt">{{xqData3.SFSJSX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警事发时间下限</span>
           ：<span class="xq_txt">{{xqData3.SFSJXX}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警事发星期</span>
           ：<span class="xq_txt">{{xqData3.SFXQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警审批时间</span>
           ：<span class="xq_txt">{{xqData3.SPSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警审批修改时间</span>
           ：<span class="xq_txt">{{xqData3.SPXGSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警所属辖区</span>
           ：<span class="xq_txt">{{xqData3.SSXQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警损失详细情况</span>
           ：<span class="xq_txt">{{xqData3.SSXXQK}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警逃跑人犯</span>
           ：<span class="xq_txt">{{xqData3.TPRF}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警天气情况</span>
           ：<span class="xq_txt">{{xqData3.TQQK}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警挽回损失</span>
           ：<span class="xq_txt">{{xqData3.WHSS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警修改单位</span>
           ：<span class="xq_txt">{{xqData3.XGDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警修改单位名称</span>
           ：<span class="xq_txt">{{xqData3.XGDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警修改人</span>
           ：<span class="xq_txt">{{xqData3.XGR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警修改人姓名</span>
           ：<span class="xq_txt">{{xqData3.XGRXM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警修改时间</span>
           ：<span class="xq_txt">{{xqData3.XGSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警地址X坐标</span>
           ：<span class="xq_txt">{{xqData3.XZB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警移送接收内部单位</span>
           ：<span class="xq_txt">{{xqData3.YSJSNBDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警地址Y坐标</span>
           ：<span class="xq_txt">{{xqData3.YZB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警值班领导</span>
           ：<span class="xq_txt">{{xqData3.ZBLD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警值班领导单位</span>
           ：<span class="xq_txt">{{xqData3.ZBLDDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警值班领导单位名称</span>
           ：<span class="xq_txt">{{xqData3.ZBLDDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警值班领导姓名</span>
           ：<span class="xq_txt">{{xqData3.ZBLDXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">处警抓获作案成员</span>
           ：<span class="xq_txt">{{xqData3.ZHZACY}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">处警直接经济损失</span>
           ：<span class="xq_txt">{{xqData3.ZJJJSS}}</span>
          </el-col>
        </el-row>
      </div>
      <div v-show="page==4">
        <el-row :gutter="3"  class="mb-6">
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员登记单位</span>
           ：<span class="xq_txt">{{xqData4.DJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员登记单位名称</span>
           ：<span class="xq_txt">{{xqData4.DJDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员登记人</span>
           ：<span class="xq_txt">{{xqData4.DJR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员登记人姓名</span>
           ：<span class="xq_txt">{{xqData4.DJRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员登记时间</span>
           ：<span class="xq_txt">{{xqData4.DJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员接警编号</span>
           ：<span class="xq_txt">{{xqData4.JJBH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员记录编号</span>
           ：<span class="xq_txt">{{xqData4.JLBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员关联标识</span>
           ：<span class="xq_txt">{{xqData4.RAS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">人员编号</span>
           ：<span class="xq_txt">{{xqData4.RYBH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员涉警类别</span>
           ：<span class="xq_txt">{{xqData4.SJLB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员修改单位</span>
           ：<span class="xq_txt">{{xqData4.XGDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员修改单位名称</span>
           ：<span class="xq_txt">{{xqData4.XGDWMC}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员修改人</span>
           ：<span class="xq_txt">{{xqData4.XGR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员修改人姓名</span>
           ：<span class="xq_txt">{{xqData4.XGRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员修改时间</span>
           ：<span class="xq_txt">{{xqData4.XGSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">涉警人员修改住址</span>
           ：<span class="xq_txt">{{xqData4.XZZ}}</span>
          </el-col>

        </el-row>
      </div>
      <!-- 涉恐人员临住详情 -->
      <div v-show="page==6">
        <el-row :gutter="3"  class="mb-6">
          <el-col :span="8" class="input-item">
           <span class="xq_t">本人联系电话</span>
           ：<span class="xq_txt">{{xqData6.BRLXDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">备注</span>
           ：<span class="xq_txt">{{xqData6.BZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">出生日期</span>
           ：<span class="xq_txt">{{xqData6.CSRQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">抵达日期</span>
           ：<span class="xq_txt">{{xqData6.DDRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">登记单位</span>
           ：<span class="xq_txt">{{xqData6.DJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">临时住宿登记单位代码</span>
           ：<span class="xq_txt">{{xqData6.DJDWDM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">临时住宿登记单位名称</span>
           ：<span class="xq_txt">{{xqData6.DJDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">行政区划</span>
           ：<span class="xq_txt">{{xqData6.DJDWXZQH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">登记人</span>
           ：<span class="xq_txt">{{xqData6.DJR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">登记日期</span>
           ：<span class="xq_txt">{{xqData6.DJRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">唯一标识主键</span>
           ：<span class="xq_txt">{{xqData6.DTID}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">标准化地址ID</span>
           ：<span class="xq_txt">{{xqData6.DZDTID}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">房号</span>
           ：<span class="xq_txt">{{xqData6.FH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">房主身份证号码</span>
           ：<span class="xq_txt">{{xqData6.FZSFZH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">国家地区</span>
           ：<span class="xq_txt">{{xqData6.GJDQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">更新单位</span>
           ：<span class="xq_txt">{{xqData6.GXDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">更新人</span>
           ：<span class="xq_txt">{{xqData6.GXR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">更新时间</span>
           ：<span class="xq_txt">{{xqData6.GXSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">航信人员编号</span>
           ：<span class="xq_txt">{{xqData6.HXRYBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">接待单位</span>
           ：<span class="xq_txt">{{xqData6.JDDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">紧急情况联系电话</span>
           ：<span class="xq_txt">{{xqData6.JJLXDH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">紧急情况联系人</span>
           ：<span class="xq_txt">{{xqData6.JJLXR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">停留事由</span>
           ：<span class="xq_txt">{{xqData6.JLSY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">警综人员编号</span>
           ：<span class="xq_txt">{{xqData6.JZRYBH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">登记单位类型</span>
           ：<span class="xq_txt">{{xqData6.LB_DJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">是否住宿在宾馆</span>
           ：<span class="xq_txt">{{xqData6.LB_SFBG}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">离开日期</span>
           ：<span class="xq_txt">{{xqData6.LKRQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">录入派出所</span>
           ：<span class="xq_txt">{{xqData6.LRDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">录入人民警</span>
           ：<span class="xq_txt">{{xqData6.LRR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">录入日期</span>
           ：<span class="xq_txt">{{xqData6.LRRQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">留宿单位(户主) 房主姓名</span>
           ：<span class="xq_txt">{{xqData6.LSDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">留宿单位(户主)电话</span>
           ：<span class="xq_txt">{{xqData6.LSDWDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">留宿单位(户主)地址</span>
           ：<span class="xq_txt">{{xqData6.LSDWDZ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">何处来</span>
           ：<span class="xq_txt">{{xqData6.LYD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">拟离开日期</span>
           ：<span class="xq_txt">{{xqData6.NLKRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">签发地</span>
           ：<span class="xq_txt">{{xqData6.QFD}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">签证注签发日期</span>
           ：<span class="xq_txt">{{xqData6.QFRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">与境外人员关系</span>
           ：<span class="xq_txt">{{xqData6.QSGX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">前往地区</span>
           ：<span class="xq_txt">{{xqData6.QWD}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">签证(注)号码</span>
           ：<span class="xq_txt">{{xqData6.QZHM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">签注种类</span>
           ：<span class="xq_txt">{{xqData6.QZZL}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">数据入表时间</span>
           ：<span class="xq_txt">{{xqData6.RBSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">入境口岸</span>
           ：<span class="xq_txt">{{xqData6.RJKA}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">入境日期</span>
           ：<span class="xq_txt">{{xqData6.RJRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">人员编号</span>
           ：<span class="xq_txt">{{xqData6.RYBH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">是否上报</span>
           ：<span class="xq_txt">{{xqData6.SFSB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">身份证号码</span>
           ：<span class="xq_txt">{{xqData6.SFZH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">数据来源</span>
           ：<span class="xq_txt">{{xqData6.SJLY}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">已正式入库</span>
           ：<span class="xq_txt">{{xqData6.SJZT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">数据当前所属单位</span>
           ：<span class="xq_txt">{{xqData6.SSDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">所属责任区</span>
           ：<span class="xq_txt">{{xqData6.SSZRQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">停留有效期</span>
           ：<span class="xq_txt">{{xqData6.TLYXQZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">性别</span>
           ：<span class="xq_txt">{{xqData6.XB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">英文名</span>
           ：<span class="xq_txt">{{xqData6.YWM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">英文姓</span>
           ：<span class="xq_txt">{{xqData6.YWX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">英文姓名</span>
           ：<span class="xq_txt">{{xqData6.YWXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">证件有效期至</span>
           ：<span class="xq_txt">{{xqData6.YXQZ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">住房种类</span>
           ：<span class="xq_txt">{{xqData6.ZFZL}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">所持证件号码</span>
           ：<span class="xq_txt">{{xqData6.ZJHM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">证件种类</span>
           ：<span class="xq_txt">{{xqData6.ZJZL}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">照片</span>
           ：<span class="xq_txt">{{xqData6.ZPDTID}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">住宿日期</span>
           ：<span class="xq_txt">{{xqData6.ZSRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">中文姓名</span>
           ：<span class="xq_txt">{{xqData6.ZWXM}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">职业</span>
           ：<span class="xq_txt">{{xqData6.ZY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">X坐标</span>
           ：<span class="xq_txt">{{xqData6.DZXZB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">Y坐标</span>
           ：<span class="xq_txt">{{xqData6.DZYZB}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="xq_t">标准化地址名称</span>
           ：<span class="xq_txt">{{xqData6.BZHDZMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="xq_t">停留有效期</span>
           ：<span class="xq_txt">{{xqData6.TLYXQ}}</span>
          </el-col>

        </el-row>
      </div>
  </div>
</template>

<script>
export default {
  name:'XQTC',
  props:['type','xid'],
  data(){
    return{
      xqData0:{},
      xqData1:{},
      xqData2:{},
      xqData3:{},
      xqData4:{},
      xqData6:{},
      page:this.type,
      id:'',
    }
  },
  mounted(){
    this.initData(this.page)

  },
  watch:{
    type:function(val){
      this.page=val;
      this.initData(val)
    },
    xid:function(val){
      this.id=val
    },

  },
  methods:{
    initData(type){
      switch (type) {
        case 0:
          this.getData0();
          break;
        case 1:
          this.getData1();
          break;
        case 2:
          this.getData2();
          break;
        case 3:
          this.getData3();
          break;
        case 4:
          this.getData4();
          break;
        case 5:
          this.getData5();
          break;
        case 6:
          this.getData6();
          break;
        default:

      }
    },
    getData0(){
      let p = {
        "dtid": this.id
      };
      this.$api.post('/refugeesWarningController/getPermanentResidenceParInfo', p,
        r => {
          this.xqData0=r.data
        })
    },
    getData1(){
      let p = {
        "rybh": this.id
      };
      this.$api.post('/refugeesWarningController/getMovementRecordParInfo', p,
        r => {
          this.xqData1=r.data
        })
    },
    getData2(){
      let p = {
        "dtid": this.id
      };
      this.$api.post('/educationParController/getJZJXXParInfo', p,
        r => {
          this.xqData2=r.data
        })
    },
    getData3(){
      let p = {
        "cjbh": this.id
      };
      this.$api.post('/educationParController/getJZCJXXParInfo', p,
        r => {
          this.xqData3=r.data
        })
    },
    getData4(){
      let p = {
        "jlbh": this.id
      };
      this.$api.post('/educationParController/getSJXXParInfo', p,
        r => {
          this.xqData3=r.data
        })
    },
    getData6(){
      let p = {
        "dtid": this.id
      };
      this.$api.post('/wadeCouldWarningController/getESLZLZXXParInfo', p,
        r => {
          this.xqData6=r.data
        })
    },
  }
}
</script>

<style scoped>
</style>
