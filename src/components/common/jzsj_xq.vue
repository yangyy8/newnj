<template lang="html">
<el-form :model="sjinfo">
  <el-row :gutter="3"  class="mb-6">
      <el-col :span="8" class="input-item">
       <span class="input-text">涉警人员登记单位：</span>
       <span class="input-input detailinput">  {{sjinfo.SJRYDJDW}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员登记单位名称：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYDJDWMC}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
       <span class="input-text">涉警人员登记人：</span>
       <span class="input-input detailinput">  {{sjinfo.SJRYDJR}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
       <span class="input-text">涉警人员登记人姓名：</span>
       <span class="input-input detailinput">  {{sjinfo.SJRYDJRXM}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员登记时间：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYDJSJ}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员接警编号：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYJJBH}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员记录编号：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYJLBH}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员关联标识：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYGLBH}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">人员编号：</span>
        <span class="input-input detailinput">  {{sjinfo.RYBH}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员涉警类别：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYSJLB}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员修改单位：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYXGDW}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员修改单位名称：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYXGDWMC}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员修改人：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYXGR}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员修改人姓名：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYXGRXM}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员修改时间：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYXGSJ}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员现住址：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYXZZ}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员中文姓名：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYZWXM}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员英文姓名：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYYWXM}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员证件号码：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYZJHM}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员证件有效期至：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYZJYXQZ}}</span>
      </el-col>
      <el-col :span="8" class="input-item">
        <span class="input-text">涉警人员证件种类：</span>
        <span class="input-input detailinput">  {{sjinfo.SJRYZJZL}}</span>
      </el-col>
  </el-row>
</el-form>
</template>
<script>
export default {
  name:'JZSJ',
  props:['type','xid'],
  data(){
    return{
      sjinfo:{},
      page:this.type,
      id:this.xid,
      pp:{},
    }
  },
  mounted(){
      this.initData();
      console.log('this.pp.RGUID',this.pp.RGUID);
   },
  watch:{
      type: function(val){
        this.page=val;
      },
      xid:{
        handler(val){
        this.id=val;
        this.initData()
      },
      immediate: true
      },
    },

  methods:{
    initData(){
      switch (this.page) {

        case 1://人员画像
            this.getData1();
            break;
        default:
      }
    },
    getData1(){
      this.pp.RGUID=this.id;
      console.log(this.pp.RGUID);
      let p = {
        "pd": this.pp
      };
       this.$api.post(this.Global.aport4+'/eS_JCJ_SJXXController/getEntityByRGUID', p,
        r => {
          this.sjinfo=r.data;
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
  text-align: left !important; width: 40%!important;
}
.input-input {
  width: 50%!important;
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
