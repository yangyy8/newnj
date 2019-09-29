<template lang="html">
<el-form :model="dwinfo">
      <el-row :gutter="3"  class="mb-6">
        <!-- <el-col :span="8" class="input-item">
          <span class="input-text" title="常住基本信息ID">常住基本信息ID：</span>
          <span class="input-input detailinput">  {{dwinfo.YWDTID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="警综业务ID">警综业务ID：</span>
          <span class="input-input detailinput">  {{dwinfo.JZYWID}}</span>
        </el-col> -->
        <el-col :span="8" class="input-item">
          <span class="input-text" title="航信业务ID">航信业务ID：</span>
          <span class="input-input detailinput">  {{dwinfo.HXYWID}}</span>
        </el-col>
        <!-- <el-col :span="8" class="input-item">
          <span class="input-text" title="人员编号">人员编号：</span>
          <span class="input-input detailinput">  {{dwinfo.RYBH}}</span>
        </el-col> -->
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作单位行政区划">工作单位行政区划：</span>
          <span class="input-input detailinput">  {{dwinfo.GZD_XZQH_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作单位所属派出所">工作单位所属派出所：</span>
          <span class="input-input detailinput">  {{dwinfo.GZD_PCS_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作单位机构代码">工作单位机构代码：</span>
          <span class="input-input detailinput">  {{dwinfo.GZD_ZZJG}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作单位名称">工作单位名称：</span>
          <span class="input-input detailinput">  {{dwinfo.GZD_MC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作单位人员身份">工作单位人员身份：</span>
          <span class="input-input detailinput">  {{dwinfo.GZD_SFDM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="任职日期">任职日期：</span>
          <span class="input-input detailinput">  {{dwinfo.RZQSSJ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="离职日期">离职日期：</span>
          <span class="input-input detailinput">  {{dwinfo.RZZZSJ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作初始状态产生时间">工作初始状态产生时间：</span>
          <span class="input-input detailinput">  {{dwinfo.GZZTCSSJ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作状态确认时间">工作状态确认时间：</span>
          <span class="input-input detailinput">  {{dwinfo.GZZTQRSJ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="登记单位">登记单位：</span>
          <span class="input-input detailinput">  {{dwinfo.DJDW}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="登记人">登记人：</span>
          <span class="input-input detailinput">  {{dwinfo.DJR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="登记日期">登记日期：</span>
          <span class="input-input detailinput">  {{dwinfo.DJRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
        <span class="input-text" title="录入单位">录入单位：</span>
        <span class="input-input detailinput">  {{dwinfo.LRDW}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="录入日期">录入日期：</span>
        <span class="input-input detailinput">  {{dwinfo.LRRQ}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="工作状态类型">工作状态类型：</span>
        <span class="input-input detailinput">  {{dwinfo.ZT_GZZT_DESC}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="处理单位">处理单位：</span>
        <span class="input-input detailinput">  {{dwinfo.CLDW}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="处理时间">处理时间：</span>
        <span class="input-input detailinput">  {{dwinfo.CLSJ}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="处理责任区">处理责任区：</span>
        <span class="input-input detailinput">  {{dwinfo.CLZRQ}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="更新时间">更新时间：</span>
        <span class="input-input detailinput">  {{dwinfo.GXSJ}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="更新人">更新人：</span>
        <span class="input-input detailinput">  {{dwinfo.GXR}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="更新单位">更新单位：</span>
        <span class="input-input detailinput">  {{dwinfo.GXDW}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="数据来源">数据来源：</span>
        <span class="input-input detailinput">  {{dwinfo.SJLY_DESC}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="数据状态">数据状态：</span>
        <span class="input-input detailinput">  {{dwinfo.ZT}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text" title="是否注销">是否注销：</span>
        <span class="input-input detailinput">  {{dwinfo.ZT_SFZX}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
      <span class="input-text" title="标准化地址名">标准化地址名：</span>
      <span class="input-input detailinput">  {{dwinfo.GZD_DZTXT}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="记录是否当前工作地信息">记录是否当前工作地信息：</span>
      <span class="input-input detailinput">  {{dwinfo.ZT_SFYX}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="工作地责任区">工作地责任区：</span>
      <span class="input-input detailinput">  {{dwinfo.GZD_ZRQ}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="工作地社区">工作地社区：</span>
      <span class="input-input detailinput">  {{dwinfo.GZD_SQ}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="工作电话">工作电话：</span>
      <span class="input-input detailinput">  {{dwinfo.GZD_GZDH}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="工作单位详细地址">工作单位详细地址：</span>
      <span class="input-input detailinput">  {{dwinfo.XXDZ}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="入驻日志">入驻日志：</span>
      <span class="input-input detailinput">  {{dwinfo.RQ_RZRQ}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="入驻确认日期">入驻确认日期：</span>
      <span class="input-input detailinput">  {{dwinfo.RQ_RZQRRQ}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="注销日期">注销日期：</span>
      <span class="input-input detailinput">  {{dwinfo.RQ_ZXRQ}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="备注">备注：</span>
      <span class="input-input detailinput">  {{dwinfo.BZ}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="地址X坐标">地址X坐标：</span>
      <span class="input-input detailinput">  {{dwinfo.DZXZB}}</span>
    </el-col>
    <el-col :span="8" class="input-item">
      <span class="input-text" title="地址Y坐标">地址Y坐标：</span>
      <span class="input-input detailinput">  {{dwinfo.DZYZB}}</span>
    </el-col>
    </el-row>

</el-form>
</template>
<script>
export default {
  name:'DWXX',
  props:['type','xid','random'],
  data(){
    return{
      dwinfo:{},
    }
  },
  mounted(){
      this.initData();
   },
  watch:{
      random:function(newVal,oldVal){
        this.random=newVal;
        this.initData();
      }
  },
  methods:{
    initData(){
      switch (this.type) {
        case 2://人员画像
            this.getData2();
            break;
        default:
      }
    },
    getData2(){
      this.dwinfo = this.xid;
      // this.pp.RGUID=this.id;
      // let p = {
      //   "pd": this.pp
      // };
      //  this.$api.post(this.Global.aport3+'/ryhx/getczgzdxx', p,
      //   r => {
      //     if(r.data.resultList.length>0){
      //     this.dwinfo=r.data.resultList[0];
      //     }
      // })
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
