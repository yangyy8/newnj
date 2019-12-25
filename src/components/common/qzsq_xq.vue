<template lang="html">
  <el-form :model="qzinfo">
    <el-row :gutter="2"  class="mb-6">
        <el-col :span="8" class="input-item">
         <span class="input-text">英文姓名：</span>
         <span class="input-input detailinput">  {{qzinfo.YWXM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">中文姓名：</span>
          <span class="input-input detailinput">  {{qzinfo.ZWXM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">性别：</span>
          <span class="input-input detailinput">  {{qzinfo.XB_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">国家地区：</span>
          <span class="input-input detailinput">  {{qzinfo.GJDQ_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生地：</span>
          <span class="input-input detailinput">  {{qzinfo.CSD_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">身份：</span>
          <span class="input-input detailinput">  {{qzinfo.SF_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="外国人身份证号">外国人身份证号：</span>
          <span class="input-input detailinput">  {{qzinfo.WGRSFZH}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text" title="人员地域类别">人员地域类别：</span>
         <span class="input-input detailinput">  {{qzinfo.RYDYLB_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="境外人员类别">境外人员类别：</span>
          <span class="input-input detailinput">  {{qzinfo.JWRYLB_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text" title="所持证件种类">所持证件种类：</span>
         <span class="input-input detailinput">  {{qzinfo.ZJZL_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="现持证件号码">现持证件号码：</span>
          <span class="input-input detailinput">  {{qzinfo.XCZJHM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所办证件号码">所办证件号码：</span>
          <span class="input-input detailinput">  {{qzinfo.SBZJHM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所办签证号码">所办签证号码：</span>
          <span class="input-input detailinput">  {{qzinfo.SBQZHM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">前往地：</span>
          <span class="input-input detailinput">  {{qzinfo.QWD}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">办证类型：</span>
          <span class="input-input detailinput">  {{qzinfo.BZLX_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">申请类别：</span>
          <span class="input-input detailinput">  {{qzinfo.SQLB_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">申请事由：</span>
          <span class="input-input detailinput">  {{qzinfo.SQSY_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">入境口岸：</span>
          <span class="input-input detailinput">  {{qzinfo.RJKA_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">入境日期：</span>
          <span class="input-input detailinput">  {{qzinfo.RJRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">当前环节：</span>
          <span class="input-input detailinput">  {{qzinfo.CURRENTHJ_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">当前状态：</span>
          <span class="input-input detailinput">  {{qzinfo.CURRENTSTATE_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件内人数：</span>
          <span class="input-input detailinput">  {{qzinfo.ZJNRS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">团队人数：</span>
          <span class="input-input detailinput">  {{qzinfo.QZTDRS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="境内联系电话">境内联系电话：</span>
          <span class="input-input detailinput">  {{qzinfo.JNLXDH}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所持签证种类">所持签证种类：</span>
          <span class="input-input detailinput">  {{qzinfo.QZZL_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所持签证号码">所持签证号码：</span>
          <span class="input-input detailinput">  {{qzinfo.XCQZHM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所持居留许可证事由">所持居留许可证事由：</span>
          <span class="input-input detailinput">  {{qzinfo.XCJLXKSY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所持签证签发机关">所持签证签发机关：</span>
          <span class="input-input detailinput">  {{qzinfo.XCQZQFJG_DESC}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
          <span class="input-text" title="所持签证入境次数">所持签证入境次数：</span>
          <span class="input-input detailinput">  {{qzinfo.XCQZRJCS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所持签证签发日期">所持签证签发日期：</span>
          <span class="input-input detailinput">  {{qzinfo.XCQZQFRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所持签证有效期至">所持签证有效期至：</span>
          <span class="input-input detailinput">  {{qzinfo.XCQZYXQZ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所持签证停留天数">所持签证停留天数：</span>
          <span class="input-input detailinput">  {{qzinfo.XCTLTS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="所持停留有效期至">所持停留有效期至：</span>
          <span class="input-input detailinput">  {{qzinfo.XCTLYXQZ}}</span>
        </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name:'QZSQ',
  props:['xid','random','type','random'],
  data(){
    return{
      qzinfo:{},
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  mounted(){
      this.getData1();
   },
  watch:{
      random:function(newVal,oldVal){
        this.random = newVal;
        this.userCode=this.$store.state.uid;
        this.userName=this.$store.state.uname;
        this.orgName=this.$store.state.orgname;
        this.orgCode=this.$store.state.orgid;
        this.juState=this.$store.state.juState;
        this.token=this.$store.state.token;
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
        "pd":{"RGUID":this.xid},
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport5+'/esFnsqxxController/getEntityByRGUID',p,
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
  /* .el-button+.el-button{margin-left: 0!important;} */
  .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
  .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
  .bj .el-dialog__wrapper {
    background: #000;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
