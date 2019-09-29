<template lang="html">
<el-form :model="crjinfo">
    <el-row :gutter="2"  class="mb-6">
        <el-col :span="8" class="input-item">
          <span class="input-text">人员姓名：</span>
          <span class="input-input detailinput">  {{crjinfo.NAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">英文姓名：</span>
          <span class="input-input detailinput">  {{crjinfo.YWXM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">国家地区：</span>
         <span class="input-input detailinput">  {{crjinfo.GJDQ_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">性别：</span>
         <span class="input-input detailinput">  {{crjinfo.XB_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{crjinfo.BIRTH}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">身份证号：</span>
          <span class="input-input detailinput">  {{crjinfo.SFZH}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件种类：</span>
          <span class="input-input detailinput">  {{crjinfo.ZJZL_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件号码：</span>
          <span class="input-input detailinput">  {{crjinfo.CERTIFICATENO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证类型：</span>
          <span class="input-input detailinput">  {{crjinfo.QZZL_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出入境日期：</span>
          <span class="input-input detailinput">  {{crjinfo.IOSTRING}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出入境时间：</span>
          <span class="input-input detailinput">  {{crjinfo.IOTIME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出入口岸：</span>
          <span class="input-input detailinput">  {{crjinfo.IOPORT_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">检查员号：</span>
          <span class="input-input detailinput">  {{crjinfo.INSPECTORID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">交通方式：</span>
          <span class="input-input detailinput">  {{crjinfo.JTFSMC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">交通工具：</span>
          <span class="input-input detailinput">  {{crjinfo.TRAFFICTOOL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">前往地：</span>
          <span class="input-input detailinput">  {{crjinfo.QWDMC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">发证机关：</span>
          <span class="input-input detailinput">  {{crjinfo.QFD_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">发证日期：</span>
          <span class="input-input detailinput">  {{crjinfo.GRANTCERTSTRING}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出境理由：</span>
          <span class="input-input detailinput">  {{crjinfo.JLSY_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">通道号：</span>
          <span class="input-input detailinput">  {{crjinfo.CHANNELNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅游团号：</span>
          <span class="input-input detailinput">  {{crjinfo.TOURGROUPNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">入库时间：</span>
          <span class="input-input detailinput">  {{crjinfo.INTIME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">境内外标识：</span>
          <span class="input-input detailinput">  {{crjinfo.JNWBS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出入口岸名称：</span>
          <span class="input-input detailinput">  {{crjinfo.IOPORT_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出入境标识：</span>
          <span class="input-input detailinput">  {{crjinfo.CRJBS_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">处理错误：</span>
          <span class="input-input detailinput">  {{crjinfo.CLCW}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">处理时间：</span>
          <span class="input-input detailinput">  {{crjinfo.CLSJ}}</span>
        </el-col>
    </el-row>

</el-form>
</template>
<script>
export default {
  name:'CRJXX',
  props:['type','xid','random'],
  data(){
    return{
      crjinfo:{},
      pp:{},
    }
  },
  mounted(){
      this.initData();
   },
  watch:{
    random:function(newVal,oldVal){
      this.random=newVal;
      this.initData()
    },
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
      var arr=this.xid.split(',');
      if(arr.length>1){
         this.pp.CERTIFICATENO=arr[0];// 证件号码
         this.pp.NATIONALITY=arr[1];//国籍
      }else {
        this.pp.RGUID=this.xid;
      }
      let p = {
        "pd": this.pp
      };
       this.$api.post(this.Global.aport4+'/eS_CRJJLBController/getEntityByRGUID', p,
        r => {
          this.crjinfo=r.data;
      })
    },
    getData2(){
      this.pp.RGUID=this.xid;
      let p = {
        "pd": this.pp
      };
       this.$api.post(this.Global.aport3+'/ryhx/getcrjjl', p,
        r => {
          if(r.data.resultList.length){
          this.crjinfo=r.data.resultList[0];
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
