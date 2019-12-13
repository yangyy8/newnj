<template lang="html">
<el-form :model="crjinfo">
    <el-row :gutter="2"  class="mb-6">
        <el-col :span="8" class="input-item">
          <span class="input-text">人员姓名：</span>
          <span class="input-input detailinput">  {{crjinfo.name}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">人员类别：</span>
          <span class="input-input detailinput">  {{crjinfo.personType.value==undefined?'':crjinfo.personType.value}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">国家地区：</span>
         <span class="input-input detailinput">  {{crjinfo.nationality.value==undefined?'':crjinfo.nationality.value}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">性别：</span>
         <span class="input-input detailinput">  {{crjinfo.gender.value==undefined?'':crjinfo.gender.value}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{crjinfo.birth}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件号码：</span>
          <span class="input-input detailinput">  {{crjinfo.certificateNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件类型：</span>
          <span class="input-input detailinput">  {{crjinfo.certificateType.value==undefined?'':crjinfo.certificateType.value}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证类型：</span>
          <span class="input-input detailinput">  {{crjinfo.visaType.value==undefined?'':crjinfo.visaType.value}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">职业代码：</span>
          <span class="input-input detailinput">  {{crjinfo.profCode}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出入境日期：</span>
          <span class="input-input detailinput">  {{crjinfo.ioDate}}</span>
        </el-col>


        <el-col :span="8" class="input-item">
          <span class="input-text">出入境时间：</span>
          <span class="input-input detailinput">  {{crjinfo.ioTime}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出入口岸：</span>
          <span class="input-input detailinput">  {{crjinfo.ioPort.value==undefined?'':crjinfo.ioPort.value}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">检查员号：</span>
          <span class="input-input detailinput">  {{crjinfo.inspectorID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">交通方式：</span>
          <span class="input-input detailinput">  {{crjinfo.trafficMode.value==undefined?'':crjinfo.trafficMode.value}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">交通工具：</span>
          <span class="input-input detailinput">  {{crjinfo.trafficTool}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">前往地：</span>
          <span class="input-input detailinput">  {{crjinfo.destination}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">发证机关：</span>
          <span class="input-input detailinput">  {{crjinfo.grantCertOrg.value==undefined?'':crjinfo.grantCertOrg.value}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">发证日期：</span>
          <span class="input-input detailinput">  {{crjinfo.grantCertString}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出境理由：</span>
          <span class="input-input detailinput">  {{crjinfo.outReason.value==undefined?'':crjinfo.outReason.value}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">通道号：</span>
          <span class="input-input detailinput">  {{crjinfo.channelNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅游团号：</span>
          <span class="input-input detailinput">  {{crjinfo.tourGroupNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">入库时间：</span>
          <span class="input-input detailinput">  {{crjinfo.inTime}}</span>
        </el-col>
        <!-- <el-col :span="8" class="input-item">
          <span class="input-text">境内外标识：</span>
          <span class="input-input detailinput">  {{crjinfo.id}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出入境标识：</span>
          <span class="input-input detailinput">  {{crjinfo.CRJBS_DESC}}</span>
        </el-col> -->
    </el-row>

</el-form>
</template>
<script>
export default {
  name:'CRJXXRY',
  props:['type','xid','random'],
  data(){
    return{
      crjinfo:{},
    }
  },
  mounted(){
      this.initData();
   },
  watch:{
      random:function(newVal,oldVal){
        this.random = newVal;
        this.getData2();
      }
    },

  methods:{
    initData(){
      switch (this.type) {
        case 1://预警
            this.getData1();
            break;
        case 2://人员画像
            this.getData2();
            break;
        default:
      }
    },
    getData1(){
      this.pp.RGUID=this.xid;
      let p = {
        "pd": this.pp
      };
       this.$api.post(this.Global.aport4+'/eS_CRJJLBController/getEntityByRGUID', p,
        r => {
          this.crjinfo=r.data;
      })
    },
    getData2(){//人员画像
      this.crjinfo=this.xid;
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
  /* .el-button+.el-button{margin-left: 0!important;} */
  .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
  .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
  .bj .el-dialog__wrapper {
    background: #000;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
