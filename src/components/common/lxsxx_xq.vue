<template lang="html">
  <el-form :model="lxsinfo">
    <el-row :gutter="2"  class="mb-6">
        <el-col :span="8" class="input-item">
          <span class="input-text">201/202表编号：</span>
          <span class="input-input detailinput">  {{lxsinfo.TABID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">英文姓名：</span>
          <span class="input-input detailinput">  {{lxsinfo.EFAMILY+' '+lxsinfo.ENAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">护照姓：</span>
         <span class="input-input detailinput">  {{lxsinfo.PASSFAMILY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">护照名：</span>
         <span class="input-input detailinput">  {{lxsinfo.PASSNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">英文姓：</span>
          <span class="input-input detailinput">  {{lxsinfo.EFAMILY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">英文名：</span>
          <span class="input-input detailinput">  {{lxsinfo.ENAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">本国语言名：</span>
          <span class="input-input detailinput">  {{lxsinfo.LANGUAGE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">中文姓名：</span>
          <span class="input-input detailinput">  {{lxsinfo.CNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">性别：</span>
          <span class="input-input detailinput">  {{lxsinfo.SEX_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.BIRTHDAY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">国籍：</span>
          <span class="input-input detailinput">  {{type==2?lxsinfo.NATIONALITY_DESC:lxsinfo.GJDQ_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生国籍：</span>
          <span class="input-input detailinput">  {{lxsinfo.BCOUNTRY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生地：</span>
          <span class="input-input detailinput">  {{lxsinfo.BPLACE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">身份证：</span>
          <span class="input-input detailinput">  {{lxsinfo.IDCARD}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">护照号：</span>
          <span class="input-input detailinput">  {{lxsinfo.PASSNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">最高学历：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDUCATION}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">婚姻状况：</span>
          <span class="input-input detailinput">  {{lxsinfo.MARITAL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">宗教信仰：</span>
          <span class="input-input detailinput">  {{type==2?lxsinfo.RELIGIOUS_DESC:lxsinfo.RELIGIOUS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="宗教信仰（其他）">宗教信仰（其他）：</span>
          <span class="input-input detailinput">  {{type==2?lxsinfo.OTHERRELIGIOUS_DESC:lxsinfo.RELIGIOUS_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">母语：</span>
          <span class="input-input detailinput">  {{lxsinfo.MLANGUAGE}}</span>
        </el-col>
        <!-- <el-col :span="8" class="input-item">
          <span class="input-text">通道号：</span>
          <span class="input-input detailinput">  {{lxsinfo.CHANNELNO}}</span>
        </el-col> -->
        <el-col :span="8" class="input-item">
          <span class="input-text" title="特殊身份类别">特殊身份类别：</span>
          <span class="input-input detailinput">  {{lxsinfo.SPECIALID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">停留期限：</span>
          <span class="input-input detailinput">  {{lxsinfo.RESTIME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">职业：</span>
          <span class="input-input detailinput">  {{lxsinfo.OCCUPATION}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作或学习单位">工作或学习单位：</span>
          <span class="input-input detailinput">  {{lxsinfo.WORK}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="家庭所在国家">家庭所在国家：</span>
          <span class="input-input detailinput">  {{lxsinfo.RECOUNTRY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">家庭电话：</span>
          <span class="input-input detailinput">  {{lxsinfo.AMILYTEL}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
          <span class="input-text">电子邮箱：</span>
          <span class="input-input detailinput">  {{lxsinfo.EMAIL}}</span>
        </el-col>
        <el-col :span="16" class="input-item">
          <span class="input-text"  style="width:15%!important">家庭地址：</span>
          <span class="input-input detailinput" style="width:80%!important">  {{lxsinfo.REPLACE}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
          <span class="input-text">英语水平：</span>
          <span class="input-input detailinput">  {{lxsinfo.ELEVEL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text" title="新旧汉语水平">新旧汉语水平：</span>
         <span class="input-input detailinput">  {{lxsinfo.CNLEVEL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text" title="汉语水平考试等级">汉语水平考试等级：</span>
         <span class="input-input detailinput">  {{lxsinfo.HSKLEVEL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="汉语水平考试听力成绩">汉语水平考试听力成绩：</span>
          <span class="input-input detailinput">  {{lxsinfo.HSKLISTENING}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="汉语水平考试阅读成绩">汉语水平考试阅读成绩：</span>
          <span class="input-input detailinput">  {{lxsinfo.HSKREADING}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="汉语水平考试书写成绩">汉语水平考试书写成绩：</span>
          <span class="input-input detailinput">  {{lxsinfo.HSKWRITE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">推荐单位：</span>
          <span class="input-input detailinput">  {{lxsinfo.COMPANY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="推荐单位电话">推荐单位电话：</span>
          <span class="input-input detailinput">  {{lxsinfo.REFTEL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="在华事务担保人">在华事务担保人：</span>
          <span class="input-input detailinput">  {{lxsinfo.LINKNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="在华事务担保人电话">在华事务担保人电话：</span>
          <span class="input-input detailinput">  {{lxsinfo.LINKTEL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="经费担保人或机构">经费担保人或机构：</span>
          <span class="input-input detailinput">  {{lxsinfo.GUNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">csc编号：</span>
          <span class="input-input detailinput">  {{lxsinfo.CSC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">招收单位：</span>
          <span class="input-input detailinput">  {{lxsinfo.ACCACADEMY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">申请编号：</span>
          <span class="input-input detailinput">  {{lxsinfo.APPLICATIONID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">录取编号：</span>
          <span class="input-input detailinput">  {{lxsinfo.RECRUITID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学号：</span>
          <span class="input-input detailinput">  {{lxsinfo.STUID}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学生类别：</span>
          <span class="input-input detailinput">  {{lxsinfo.STUTYPE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学科门类：</span>
          <span class="input-input detailinput">  {{lxsinfo.SCI}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">一级学科：</span>
          <span class="input-input detailinput">  {{lxsinfo.MADEGREE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">院系中文名称：</span>
          <span class="input-input detailinput">  {{lxsinfo.CFACULTY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">院系英文名称：</span>
          <span class="input-input detailinput">  {{lxsinfo.EFACULTY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="专业中文名称">专业中文名称：</span>
          <span class="input-input detailinput">  {{lxsinfo.CPROFESSIONAL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="专业英文名称">专业英文名称：</span>
          <span class="input-input detailinput">  {{lxsinfo.EPROFESSIONAL}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="研究方向中文名称">研究方向中文名称：</span>
          <span class="input-input detailinput">  {{lxsinfo.DIRECTION}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="研究方向英文名称">研究方向英文名称：</span>
          <span class="input-input detailinput">  {{lxsinfo.EDIRECTION}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学制：</span>
          <span class="input-input detailinput">  {{lxsinfo.SCHOOLSYS}}</span>
        </el-col>

        <el-col :span="8" class="input-item">
         <span class="input-text">报到开始时间：</span>
         <span class="input-input detailinput">  {{lxsinfo.STAREPORTS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">报到截止时间：</span>
          <span class="input-input detailinput">  {{lxsinfo.ENDREPORTS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学习开始日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.STASTUDY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">学习结束日期：</span>
          <span class="input-input detailinput">  {{lxsinfo.ENDSTUDY}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">重点关注类别：</span>
          <span class="input-input detailinput">  {{lxsinfo.FOCUSTYPE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">重点关注说明：</span>
          <span class="input-input detailinput">  {{lxsinfo.INSTRUCTIONS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">授课语言：</span>
          <span class="input-input detailinput">  {{lxsinfo.TLANGUAGE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">入学学年度：</span>
          <span class="input-input detailinput">  {{lxsinfo.YEAR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">入学学期：</span>
          <span class="input-input detailinput">  {{lxsinfo.SEMESTER}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="博士生导师姓名">博士生导师姓名：</span>
          <span class="input-input detailinput">  {{lxsinfo.DOCNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">导师编号：</span>
          <span class="input-input detailinput">  {{lxsinfo.DOCNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="学历学籍注册号">学历学籍注册号：</span>
          <span class="input-input detailinput">  {{lxsinfo.REGISTEREDNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">备注：</span>
          <span class="input-input detailinput">  {{lxsinfo.NOTE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">审核标识：</span>
          <span class="input-input detailinput">  {{lxsinfo.FLAG=='1'?"未审核":lxsinfo.FLAG=='2'?"审核未通过":lxsinfo.FLAG=='3'?"审核通过":""}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">审核结果：</span>
          <span class="input-input detailinput">  {{lxsinfo.JGFLAG=='1'?"未审核":lxsinfo.JGFLAG=='2'?"审核未通过":lxsinfo.JGFLAG=='3'?"审核通过":""}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="教育厅审核标识">教育厅审核标识：</span>
          <span class="input-input detailinput"> {{lxsinfo.JYFLAG=='1'?"未审核":lxsinfo.JYFLAG=='2'?"审核未通过":lxsinfo.JYFLAG=='3'?"审核通过":""}} </span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">当前年份：</span>
          <span class="input-input detailinput">  {{lxsinfo.NOWYEAR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">是否到校：</span>
          <span class="input-input detailinput">{{lxsinfo.ISARRIVE=='1'?"到校":lxsinfo.ISARRIVE=='2'?"未到校":""}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="公安审核不通过备注信息">公安审核不通过备注信息：</span>
          <span class="input-input detailinput">  {{lxsinfo.POLICEINFO}}</span>
        </el-col>
    </el-row>


  </el-form>
</template>
<script>
export default {
  name:'LXSXX',
  props:['type','xid','random'],
  data(){
    return{
      lxsinfo:{},
      page:this.type,
      id:this.xid,
      pp:{},
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',
    }
  },
  mounted(){
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.initData();
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
        this.initData();
      },
      type:{
        handler(val){
        this.page=val;
        this.initData()
      },
      immediate: true
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
        case 1://
            this.getData1();
            break;
        case 2://人员画像
            this.getData2();
            break;
        case 3://教育厅招生统计
            this.getData3();
            break;
        default:
      }
    },
    getData1(){
      this.pp.DTID=this.id;
      let p={
        "pd":this.pp,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      this.$api.post(this.Global.aport5+'/jiaoYuTing202Controller/getEntityByDTID', p,
       r => {
        this.lxsinfo=r.data;
     })
    },
    getData2(){
      // this.pp.RGUID=this.id;
      // let p = {
      //   "pd": this.pp
      // };
      //  this.$api.post(this.Global.aport3+'/ryhx/getlxjsbaseinfo', p,
      //   r => {
      //     if(r.data.resultList.length){
      //       this.lxsinfo=r.data.resultList[0];
      //     }
      // })
      this.lxsinfo=this.id;
    },
    getData3(){
      this.pp.RGUID=this.id;
      let p={
        "pd":this.pp,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      this.$api.post(this.Global.aport5+'/jiaoYuTing202Controller/getEntityByRGUID', p,
       r => {
        this.lxsinfo=r.data;
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
  /* .el-button+.el-button{margin-left: 0!important;} */
  .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
  .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
  .bj .el-dialog__wrapper {
    background: #000;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
