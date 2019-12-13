<template lang="html">
   <div class="qwjs">
          <el-card shadow="always">
     <div class="top">
       <i class="el-icon-search" style="line-height:2.2;margin-right:5px"></i>
       <el-input placeholder="" v-model="content" class="inputs" @keyup.enter.native="CurrentPage=1;getList(CurrentPage,pageSize)">
          <el-select v-model="type" slot="prepend" placeholder="请选择" max="500" style="width:100px;">
            <el-option label="综合" value="all"></el-option>
            <el-option label="组织" value="org"></el-option>
            <el-option label="人员" value="user"></el-option>
            <el-option label="案件" value="aj"></el-option>
            <el-option label="地址" value="addr"></el-option>
          </el-select>
       </el-input>
      <el-button type="primary"  @click="CurrentPage=1;getList(CurrentPage,pageSize)" style="margin-left:-10px;">查询</el-button>
       <el-button type="success" @click="$router.push({name:'RYHX'})">返回</el-button>
     </div>
 <div class="navinfo" v-if="type=='all'||type=='user'">
  <span :class="{'redy':check==0}" @click="check=0;CurrentPage=1;getList(CurrentPage,pageSize,'lz')"> 临住数据 ( <b>{{info.lz}}</b> 条)  </span>
  <span :class="{'redy':check==1}" @click="check=1;CurrentPage=1;getList(CurrentPage,pageSize,'cz')"> 常住数据 ( <b>{{info.cz}}</b>  条)  </span>
  <span :class="{'redy':check==2}" @click="check=2;CurrentPage=1;getList(CurrentPage,pageSize,'qz')"> 签证数据 ( <b>{{info.qz}}</b>  条)  </span>
  <span :class="{'redy':check==3}" @click="check=3;CurrentPage=1;getList(CurrentPage,pageSize,'ajxx')"> 案件数据 ( <b>{{info.ajxx}}</b>  条)  </span>
  <span :class="{'redy':check==4}" @click="check=4;CurrentPage=1;getList(CurrentPage,pageSize,'crj')"> 出入境数据 ( <b>{{info.crj}}</b>  条)  </span>
 </div>
  </el-card>
    <div class="main">
      <div v-if="items.length!=0">
        <el-row v-for="(item,index) in items" :key="index">
          <el-card class="box-card" style="margin:5px 0;">
            <el-row type="flex">
            <el-col :span="2" style="padding:10px;width:120px;">
              <div class="shover"  @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type,gjdq:item.gjdq}})">
              <img :src="item.photo" v-if="item.photo!=''" width="100" height="120">
              <img src="../../../../assets/img/mrzp.png" width="100" height="120" v-else >
             </div>
            </el-col>
            <el-col :span="22">
              <div class="shover" @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type,gjdq:item.gjdq}})">
                <div class="list">
                  <p style="margin-bottom:15px!important"><b>{{item.ywxm}}</b></p>
                  <el-row type="flex"  class="t-detail">
                    <el-col :span="22">
                      <el-row class="t-mb15">
                        <el-col :span="6" class="t-el-content"><div class="t-el-text">性别：</div><div class="t-el-sub">{{item.xb}}</div></el-col>
                        <el-col :span="6" class="t-el-content"><div class="t-el-text">出生日期：</div><div class="t-el-sub">{{item.csrq}}</div></el-col>
                        <el-col :span="6" class="t-el-content"><div class="t-el-text">国家地区：</div><div class="t-el-sub">{{item.gjdqmc}}</div></el-col>
                        <el-col :span="6" class="t-el-content"><div class="t-el-text">证件号码：</div><div class="t-el-sub">{{item.zjhm}}</div></el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="24" class="t-el-content"><div class="t-el-text">命中信息：</div><div class="t-el-sub"><span v-html='item.cusHighlight'></span></div></el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="2">
                      <!-- <el-button type="text" title="详情">详情</el-button> -->
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
            </el-row>
            </el-card>
        </el-row>
      </div>
      <div v-else>
        <el-row >
          <div class="redx text-center t-mt20">
            没有查询到相关数据！
          </div>
        </el-row>
      </div>

       <div class="middle-foot" style="margin-top:10px;" v-if="TotalResult!=0">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page.sync ="CurrentPage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="TotalResult">
          </el-pagination>
        </div>
    </div>

   </div>
</template>
<script scoped>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
      items:[],
      type:'',
      content:'',
      info:{lz:0,cz:0,qz:0,ajxx:0,crj:0},
      datatype:'',
      check:7,
    }
  },
    activated(){
      this.type=this.$route.query.stype;
      this.content=this.$route.query.zjhmes;
      this.getList(this.CurrentPage, this.pageSize,this.$store.state.queryType);
    },
  mounted() {
    // this.getList(this.CurrentPage, this.pageSize);
  },
  methods: {
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val,this.datatype);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize,this.datatype);
      console.log(`当前页: ${val}`);
    },
    getListType(currentPage,showCount,type){
      if(type=='lz'){this.check=0}
      if(type=='cz'){this.check=1}
      if(type=='qz'){this.check=2}
      if(type=='ajxx'){this.check=3}
      if(type=='crj'){this.check=4}
      let p={
        "keywords":this.content,
        "type":type,
        "pageSize":showCount,
        "page":currentPage,
        "token":this.$store.state.token,
        "userCode":this.$store.state.uid,
        "userName":this.$store.state.uname
      };
      this.$api.post(this.Global.aport6+"/api/es/search/generalCountSearch",p,r=>{
        if(r.success){
          this.items=r.respondResult.respondData;
          this.TotalResult=r.respondResult.totalSize;
        }
      })
    },

    getList(currentPage,showCount,type){

      if(this.content!=this.$route.query.zjhmes || this.type!=this.$route.query.stype)
      {
        this.$router.push({name:'QWJS',query:{zjhmes:this.content,stype:this.type}});
      }
      this.items=[];
      this.TotalResult=0;
      let p={
        "keywords":this.content,
        "type":this.type,
        "pageSize":showCount,
        "page":currentPage,
        "token":this.$store.state.token,
        "userCode":this.$store.state.uid,
        "userName":this.$store.state.uname
      };
      if(type!="" && type!=undefined){
         this.datatype=type;
         this.getListType(currentPage,showCount,type);
         this.$api.post(this.Global.aport6+"/api/es/search/generalSearch",p,r=>{
           if(r.success){
             if(r.respondResult.respondCount!=undefined){
              this.info=r.respondResult.respondCount;
             }
           }
         })
      }else {
        this.datatype="";
      if(this.content==undefined || this.content==""){
        this.$message.error("请输入查询内容!");return ;
      }
      if(this.type==undefined || this.type==""){
        this.$message.error("请选择类型!");return ;
      }
     this.$api.post(this.Global.aport6+"/api/es/search/generalSearch",p,r=>{
       if(r.success){
         this.items=r.respondResult.respondData;
         console.log(r.respondResult.respondCount)
         this.info=r.respondResult.respondCount;
         this.TotalResult=r.respondResult.totalSize;
       }else{
         this.info={lz:0,cz:0,qz:0,ajxx:0,crj:0}
       }
     })
       }
      this.$store.commit('getQueryType',this.datatype);
    },
  },
}
</script>
<style scoped>
.qwjs{background: #ffffff; min-height: 700px; margin: 10px;}
.qwjs .top {
  width: 100%;
  height: 40px;
  display: flex;
}
.qwjs .inputs{
  width: 480px;
}
.qwjs .main{
  width: 95%;  padding-left: 30px; font-size:13px; margin-top: 20px; padding-bottom: 20px;
}
.qwjs .main .list{
  width: 99%;margin-top: 10px;
}
.qwjs .main .list span{margin-left: 10px;}
.shover{cursor:pointer;}
.shover:hover{font-size: 14px;font-weight: bold;}
.navinfo{color: blue;margin-top: 10px; font-size: 14px;}
.navinfo span{ padding-left: 20px;cursor: pointer; }
.navinfo span :hover{color: #333}
.navinfo span b{color: red}
</style>
<style>
.qwjs  .el-input-group__prepend {
    background-color: #fff;
  }
.box-card .el-card__body{
  padding: 5px 20px!important;
}
</style>
