<template lang="html">
<div class="czxx">
  <div class="ak-tabs">
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
      签证申请信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
      证件信息
    </div>
  </div>
  <div class="ak-tab-pane">
    <div v-show="page==0" style="padding:0 15px;">
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
            <span class="input-text">所办签证号码：</span>
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
            <span class="input-text">境内联系电话：</span>
            <span class="input-input detailinput">  {{qzinfo.JNLXDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">所持签证种类：</span>
            <span class="input-input detailinput">  {{qzinfo.QZZL_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">所持签证号码：</span>
            <span class="input-input detailinput">  {{qzinfo.XCQZHM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="所持居留许可事由">所持居留许可事由：</span>
            <span class="input-input detailinput">  {{qzinfo.XCJLXKSY_DESC}}</span>
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
    </div>
    <div v-show="page==1" style="padding:0 15px;">
      <el-row :gutter="2"  class="mb-6">
          <el-col :span="8" class="input-item">
           <span class="input-text">英文姓名：</span>
           <span class="input-input detailinput">  {{zjinfo.YWXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">中文姓名：</span>
            <span class="input-input detailinput">  {{zjinfo.ZWXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">性别：</span>
            <span class="input-input detailinput">  {{zjinfo.XB_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">出生日期：</span>
            <span class="input-input detailinput">  {{zjinfo.CSRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">国家地区：</span>
            <span class="input-input detailinput">  {{zjinfo.GJDQ_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">证件号码：</span>
            <span class="input-input detailinput">  {{zjinfo.ZJHM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">签证种类：</span>
            <span class="input-input detailinput">  {{zjinfo.QZZL_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">签证号码：</span>
            <span class="input-input detailinput">  {{zjinfo.QZHM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">签发单位：</span>
            <span class="input-input detailinput">  {{zjinfo.QZQFJG_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">签发日期：</span>
            <span class="input-input detailinput">  {{zjinfo.QZQFRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="个人签证类别">个人签证类别：</span>
            <span class="input-input detailinput">  {{zjinfo.QZXXLB_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">本次停留期：</span>
            <span class="input-input detailinput">  {{zjinfo.QZTLQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="本次停留期单位">本次停留期单位：</span>
           <span class="input-input detailinput">  {{zjinfo.QZTLQDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">有效次数：</span>
            <span class="input-input detailinput">  {{zjinfo.QZYXCS_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text">有效期：</span>
           <span class="input-input detailinput">  {{zjinfo.QZYXQ_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">有效期单位：</span>
            <span class="input-input detailinput">  {{zjinfo.QZYXQDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">有效期限制：</span>
            <span class="input-input detailinput">  {{zjinfo.QZYXQXZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">有效期至：</span>
            <span class="input-input detailinput">  {{zjinfo.QZYXQZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="停留有效期至">停留有效期至：</span>
            <span class="input-input detailinput">  {{zjinfo.TLYXQZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">下次停留期：</span>
            <span class="input-input detailinput">  {{zjinfo.XCTLQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">签证委托书号：</span>
            <span class="input-input detailinput">  {{zjinfo.QZWTSH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="申请签证种类">申请签证种类：</span>
            <span class="input-input detailinput">  {{zjinfo.QZZL_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="居留许可事由">居留许可事由：</span>
            <span class="input-input detailinput">  {{zjinfo.JLXKSY_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="邀请单位名称">邀请单位名称：</span>
            <span class="input-input detailinput">  {{zjinfo.YQDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">受理日期：</span>
            <span class="input-input detailinput">  {{zjinfo.SLRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">审批结果：</span>
            <span class="input-input detailinput">  {{zjinfo.SPJG_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">制证单位：</span>
            <span class="input-input detailinput">  {{zjinfo.ZZDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">制证日期：</span>
            <span class="input-input detailinput">  {{zjinfo.ZZRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="境内居住地派出所">境内居住地派出所：</span>
            <span class="input-input detailinput">  {{zjinfo.JNJZDPCS_TEXT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="境内居住地详细地址">境内居住地详细地址：</span>
            <span class="input-input detailinput">  {{zjinfo.JNJZDXXDZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="境内居住地行政区划">境内居住地行政区划：</span>
            <span class="input-input detailinput">  {{zjinfo.JNJZDXZQH_TEXT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="工作单位名称">工作单位名称：</span>
            <span class="input-input detailinput">  {{zjinfo.GZDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="工作单位电话">工作单位电话：</span>
            <span class="input-input detailinput">  {{zjinfo.GZDWDH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
            <span class="input-text" title="工作单位所在地派出所">工作单位所在地派出所：</span>
            <span class="input-input detailinput">  {{zjinfo.GZDWSZDPCS_TEXT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="工作单位详细地址">工作单位详细地址：</span>
            <span class="input-input detailinput">  {{zjinfo.GZDWSZDXXDZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="工作单位行政区划">工作单位行政区划：</span>
            <span class="input-input detailinput">  {{zjinfo.GZDWSZDXZQ_TEXT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">备注：</span>
            <span class="input-input detailinput">  {{zjinfo.BZ}}</span>
          </el-col>
      </el-row>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:'QZXXTJXQ',
  props:['type','xid','rybh','random'],
  data(){
    return{
      page:0,
      qzinfo:{},
      zjinfo:{},
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  mounted(){
    this.getData();
  },
  watch:{
      random:function(newVal,oldVal){
        this.random=newVal;
        this.userCode=this.$store.state.uid;
        this.userName=this.$store.state.uname;
        this.orgName=this.$store.state.orgname;
        this.orgCode=this.$store.state.orgid;
        this.juState=this.$store.state.juState;
        this.token=this.$store.state.token;
        this.getData();
      },
    },
  methods:{
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
    },
    getData(){
      let p = {
        "pd":{"RGUID":this.xid.RGUID},
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport5+'/esFnsqxxController/getEntityByRGUID',p,
      r =>{
        if(r.success){
          this.qzinfo = r.data;
        }
      })
      let pp={
        "pd":{
          'YWBH':this.xid.YWBH
        },
        'currentPage':1,
        'showCount':10,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport5+'/esFnvisasController/getResultListByParams',pp,
      r =>{
        if(r.success){
          this.zjinfo = r.data.resultList[0];
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
  max-width: 100%;
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
  text-align: left !important; width: 32%!important;
}
.input-input{
  width:60%!important;
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
