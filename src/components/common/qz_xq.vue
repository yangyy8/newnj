<template lang="html">
  <el-form :model="qzinfo">
    <el-row :gutter="2"  class="mb-6">
        <el-col :span="12" class="input-item">
         <span class="input-text">签证号码：</span>
         <span class="input-input detailinput">  {{qzinfo.QZHM}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签发机关：</span>
          <span class="input-input detailinput">  {{qzinfo.QFJG_DESC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签发日期：</span>
          <span class="input-input detailinput">  {{qzinfo.QZQFRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">本次停留期：</span>
          <span class="input-input detailinput">  {{qzinfo.QZTLQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签证委托书号：</span>
          <span class="input-input detailinput">  {{qzinfo.QZWTSH}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">个人签证详细类别：</span>
          <span class="input-input detailinput">  {{qzinfo.QZXXLB}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">有效次数：</span>
          <span class="input-input detailinput">  {{qzinfo.QZYXCS}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">签证有效期至：</span>
         <span class="input-input detailinput">  {{qzinfo.QZYXQZ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签证种类：</span>
          <span class="input-input detailinput">  {{qzinfo.QZZL_DESC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">受理日期：</span>
         <span class="input-input detailinput">  {{qzinfo.SLRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">审批结果：</span>
          <span class="input-input detailinput">  {{qzinfo.SPJG}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">申请签证种类：</span>
          <span class="input-input detailinput">  {{qzinfo.SQQZZL_DESC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">填表单位编号：</span>
          <span class="input-input detailinput">  {{qzinfo.TBDWBH}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">停留有效期至：</span>
          <span class="input-input detailinput">  {{qzinfo.TLYXQZ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="工作单位[服务处所]名称">工作单位[服务处所]名称：</span>
          <span class="input-input detailinput">  {{qzinfo.GZDWMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="工作单位[服务处所]编号">工作单位[服务处所]编号：</span>
          <span class="input-input detailinput">  {{qzinfo.GZDWBH}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="工作单位[服务处所]电话">工作单位[服务处所]电话：</span>
          <span class="input-input detailinput">  {{qzinfo.GZDWDH}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="工作单位所在地派出所">工作单位所在地派出所：</span>
          <span class="input-input detailinput">  {{qzinfo.GZDWSZDPCS_TEXT}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="工作单位所在地详细地址">工作单位所在地详细地址：</span>
          <span class="input-input detailinput">  {{qzinfo.GZDWSZDXZQ_TEXT}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="工作单位所在地行政区划">工作单位所在地行政区划：</span>
          <span class="input-input detailinput">  {{qzinfo.GZDWSZDXZQH_DESC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">居留许可事由：</span>
          <span class="input-input detailinput">  {{qzinfo.JLSY_DESC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">境内居住地派出所：</span>
          <span class="input-input detailinput">  {{qzinfo.JNJZDPCS_TEXT}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">境内居住地详细地址：</span>
          <span class="input-input detailinput">  {{qzinfo.JNJZDXXDZ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">境内居住地行政区划：</span>
          <span class="input-input detailinput">  {{qzinfo.JNJZDXZQH_TEXT}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">制证单位：</span>
          <span class="input-input detailinput">  {{qzinfo.ZZDW}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">制证日期：</span>
          <span class="input-input detailinput">  {{qzinfo.ZZRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">代办单位编号：</span>
          <span class="input-input detailinput">  {{qzinfo.DBDW}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">备注：</span>
          <span class="input-input detailinput">  {{qzinfo.BZ}}</span>
        </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name:'QZ',
  props:['xid','random'],
  data(){
    return{
      qzinfo:{},
    }
  },
  mounted(){
      this.getData1();
   },
  watch:{
      random:function(newVal,oldVal){
        this.random = newVal;
        this.getData1();
      },
    },
  methods:{
    // initData(){
    //   switch (this.page) {
    //     case 1://教育厅招生统计
    //         this.getData1();
    //         break;
    //     case 2://人员画像
    //         this.getData2();
    //         break;
    //     default:
    //   }
    // },

    //持短期（WGRFFJLYJ_XQ）
    getData1(){
      let p={
        "pd":{"RGUID":this.xid}
      }
      this.$api.post(this.Global.aport4+'/eS_FNVISASController/getEntityByRGUID',p,
      r =>{
        if(r.success){
          this.qzinfo = r.data;
        }
      })
    },
    getData2(){

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
