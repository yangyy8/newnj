<template lang="html">
  <el-container class="content">
    <el-header style="height:86px;">
      <div class="newlogo"></div>

      <div class="top-right">
        <div class="top-center">
        <div v-for="(s,ind) in topData" :key="ind" :class="{'topbg topbg-a':s.mc==isA,'topbg':s.mc!=isA}" @click="getmemu(s.dm,s.mc)">
          {{s.mc}}
        </div>
        </div>

       <div class="top-nav">
         <!-- <ul class="top-nav-ul">
           <li class="top-nav-li hand" >
             <img src="../assets/img/nicon.png" /> {{adminname}}  {{dwname}}
           </li>
           <li class="top-nav-li hand" @click="$router.push({name:'Index'})">
             <img src="../assets/img/home.png" class="base-line"/>
             <span>首页</span>
           </li>
           <li class="top-nav-li hand" @click="logOut">
             <img src="../assets/img/close.png" class="base-line"/>
             <span>退出</span>
           </li>
         </ul> -->
          <ul class="top-nav-ul">
            <li class="top-nav-li hand">
              <div><img src="../assets/img/nicon.png" class="base-line"/></div>
              <span>{{adminname}} {{dwname}}</span>
              <!-- <span class="modpwd" v-if="an" @click="$router.push({name:'XGMM'})">修改密码</span> -->
            </li>
            <li class="top-nav-li hand" @click="$router.push({name:'Index'})">
              <div><img src="../assets/img/home.png" class="base-line"/></div>
              <span style="width:30px">首页</span>
            </li>
            <li class="top-nav-li hand" @click="logOut">
              <div><img src="../assets/img/close.png" class="base-line"/></div>
              <span style="width:30px">退出</span>
            </li>
          </ul>
        </div>
      </div>
    </el-header>
    <el-container class="main">

      <div class="newside_nav">
        <div class="h1 icon1" v-if="isA=='预警研判'"><span>{{isA}}</span></div>
        <div class="h1 icon2" v-if="isA=='数据分析'"><span>{{isA}}</span></div>
        <div class="h1 icon3" v-if="isA=='日常管理'"><span>{{isA}}</span></div>
        <div class="h1 icon4" v-if="isA=='系统管理'"><span>{{isA}}</span></div>


        <el-menu
            default-active="15"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#092A44"
            :unique-opened='true'
            text-color="#859396"
            active-text-color="#ffd04b">
            <el-submenu :index="ind+''" v-for="(a,ind) in memuData" :key="ind">
              <template slot="title">
                ●
                <span style="color:#fff">{{a.mc}}</span>
              </template>
              <el-menu-item v-for="(b,ind2) in a.children" :key="ind2" :index="ind+'-'+ind2">
              <div @click="checklast(b.url)" :title="b.mc" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; ">   {{b.mc}} </div>
              </el-menu-item>
            </el-submenu>


          </el-menu>

      </div>
      <!-- <NAV></NAV> -->
      <!-- <div class="rList">
        当前位置：
        <span v-for="(x,ind) in routeList" :key="ind" class="rItem">{{x}}</span>
      </div> -->
      <el-main class="right-main">
        <!-- <div class="right-main-top"> -->
          <ul class="tabList">
            <li class="tabList-item hand" :title="i.meta.title[i.meta.title.length-1]" :style="{width:tabliwidth}" :class="{'tabList-checked':tabListCheck==i.name}" v-for="(i, index) in tabList">
              <span :id="i.name" @click="tabClick(i,index)">{{i.meta.title[i.meta.title.length-1]}}</span>
              <img src="../assets/img/tab-close1.png" alt="guanbi"  @click="close1(index,i)" class="hand" style="padding:8px" v-if="tabListCheck==i.name">
              <img src="../assets/img/tab-close2.png" alt=""  @click="close2(index,i)" style="padding:8px" class="hand" v-else>
            </li>
          </ul>
        <!-- </div> -->
        <div class="tab-content">
          <keep-alive>
            <router-view></router-view>
            <!--
            <router-view v-if="$store.state.key.id==99"></router-view>
            <router-view v-if="$store.state.key.id==0" :key="$store.state.key2"></router-view> -->
          </keep-alive>
        </div>
      </el-main>
    </el-container>
    <div class="footer">

    </div>
  </el-container>
</template>
<script>
// import NAV from './NAV'
export default {
  // components:{NAV},
  data() {
    return {
      tabList: [],
      adminname:'',
      dwname:'',
      tabliwidth:'10%',
      tabListCheck:null,
      // routeList:this.$route.meta.title,
      an:false,
      key:'',
      currentKey:{},
      checkeditem:null,
      topData:[],
      isA:"",
      memuData:[],
      color:['#02ffd0','#e09144','#50c6ea'],
      showArray:[true,true,true,true],
      h2Id:null,
      menuPath:null,
    };
  },
  computed: {

  },
  watch: {

    tabList: function(val) {
      if (val.length > 9) {
        this.tabliwidth = Math.floor(100 / (this.tabList.length+1)) + '%'
      }
      this.$store.commit('getTabList',val);
    },
    $route:function(val){
      console.log('val==',val);
      // console.log("$store.state",this.$store.state.key,this.$store.state.key.id)
      if(val.meta.title&&!val.meta.father){
        this.tabListCheck=val.name
        // this.routeList=val.meta.title
        if(this.tabList.length>0){
          for(var j=0;j<this.tabList.length;j++){
            if(this.tabList[j].name==val.name){
              if(this.tabList[j].query!=val.query){
                this.tabList[j]=val;
              }
              return ;
            }

          }
        }
        this.checkeditem=val;
        this.tabList.push(val);
        this.Global.tabLists=this.tabList;
      }
    }
  },
  mounted() {
    // console.log('this.$route.name',this.$route.name);
    if(this.$route.name!="Home"){
      if(this.$route.meta.father){
        this.$router.push({name:this.$route.meta.father})
        this.tabListCheck=this.$route.meta.father
      }else{
        this.tabList.push(this.$route)
        this.tabListCheck=this.$route.name
      }
      this.isA=this.$route.meta.title[0];
    }

    this.getname();
    this.getTOP();
    this.getmemu("",this.isA);
  },

  methods: {
    handleOpen(key, keyPath) {
    // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },

    checklast(url){
        this.$router.push({name:url});
    },
    getTOP(){
      var formData = new FormData();
      formData.append("token", this.$store.state.token);
      let p=formData;
      var url=this.Global.aport1+'/fun/getMyTopNavigation';
      this.$api.post(url, p,
       r => {
         if(r.success){
           this.topData=r.data;
         }
       });
    },
    getmemu(dm,mc){
      // console.log('-----------mc',mc);
      if(mc==""){
        if(this.$route.meta.title==undefined){
           this.$router.push({name:"Index"});
        }else {
            mc=this.$route.meta.title[0];
        }
      }
      this.isA=mc;
      if(dm==""){
        switch (mc) {
          case "预警研判":
            dm="02000000000";
            break;
          case "数据分析":
            dm="04000000000";
            break;
          case "日常管理":
            dm="03000000000";
            break;
          case "系统管理":
            dm="01000000000";
            break;
          default:
        }
      }
      var formData = new FormData();
      formData.append("token", this.$store.state.token);
      formData.append("menuid", dm);
      let p=formData;
      var url=this.Global.aport1+'/fun/getMyTopNavigation';
      this.$api.post(url, p,
       r => {
         if(r.success){
           this.memuData=r.data;
         }
       });
    },
    tabClick(i,index,is){
      this.$router.push({name:i.name,query:i.query});
      // console.log("this.checkeditem",this.checkeditem)
      if(is){
        this.close1(index,i,is)
      }else{
        this.checkeditem=i;
      }
      this.$store.commit('getActiveTab',i);
    },
    tabClicknew(i,n){
      this.$router.push({name:i.name,query:i.query});
      this.$store.commit('getKey',{id:99,name:i.name});

    },
    close2(index,item){

     this.tabClick(item,index,1)


    },
    // 关闭tab页面==========================
    close1(index, item,is) {
      this.tabList.splice(index, 1);
      if (index > 0) {
        if(is){
          this.tabClick(this.checkeditem)
        }else{
          this.tabClick(this.tabList[index - 1])
        }
      }
      if (index == 0) {
        if (this.tabList.length != 0) {
          this.tabClick(this.tabList[index])
        } else {
          this.$router.push({name:'Home'})
          this.routeList=[]
        }

      }
    },
    getname(){
      this.adminname=this.$store.state.uname;
      this.dwname="，"+this.$store.state.orgname;
      if(this.adminname!='管理员'){

        this.an=true;
      }
    },
    logOut() {

      if(this.$store.state.wtoken!='' && this.$store.state.wtoken!=undefined && this.$store.state.serverip!='' && this.$store.state.serverip!=undefined)
      {
       window.location.href='http://tymh.gaj.nkg.js:908/loginOperate/toUserLogin';return ;
      }else {


      var url=this.Global.aport1+'/user/logout';
      var formData = new FormData();
      formData.append("token",this.$store.state.token);
      let p=formData;
      this.$api.post(url, p,
        r => {
          if (r.success) {
            // this.$message({
            //   message: '退出成功',
            //   type: 'success'
            // });
          }
          localStorage.clear();
          this.$router.push('/')
        })

    }
    },
  }
}
</script>
<style scoped>
.h2{
  color: #ffffff;
  height: 32px;
  position: relative;

}
.h2>span{
  line-height: 32px;
  vertical-align: top;
}
.el-header {
  padding: 18px 50px 30px 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  /* height:101px; */
}
.footer{
  height: 103px;
}
.content {
  /* min-width: 975px !important; */
  background: url(../assets/img/bg.png);
  background-size: 100%;
  height: 100%;
}
.main{
  padding: 0 30px;
  position: relative;
}
.right-main{
  background:rgba(27, 92, 168, 0.502);
  border-radius: 0 7px 7px 0;
  padding: 0!important;
  /* min-height: 888px; */
  /* overflow: inherit !important; */
}
.tab-content{
  /* padding: 15px; */
  min-height: 710px;
  overflow: inherit !important;
  background: #dee8f2 url('../assets/img/bbg.png') no-repeat center;
}
.right-main-top{
  width: 100%;
  display: flex;
  justify-content: space-between;

}

.tabList{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 36px;
  width: 100%;
  padding-top: 5px;
  flex-wrap: nowrap;
}
.tabList-item{
  font-size: 14px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 7px 7px 0 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-right: 5px;
}
.tabList-item:last-child{
  margin-right: 0;
}
.tabList-item span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 8px;
  width: 90%;
}
.tabList-checked {
  background: #def0fc;
  color: #0084cc;
}
.rList{
  position: absolute;
  right: 35px;
  top:-25px;
  font-size: 14px;
  color: #5dafe7;

}
.rList span{
  /* color: #fff; */
  color: #5dafe7;
}
.rItem:not(:last-child):after{
  content: " > ";
}
.top-right {
  display: flex;
  align-items: center;
  /* position: absolute;
  right: 40px; */
}

.top-center {
  display: flex;
  align-items: center;
  /* position: absolute;
  right: 40px; */
}

/*new*/
.top-nav {
  display: flex;
  align-items: flex-end;
  font-size: 14px;
  width: 100%;
  padding-top: 20px;
  flex-direction: column;
}

.top-nav-ul {
  height: 28px;
  display: flex;
  background: rgba(27, 92, 168, 0.50);
  color: #fff;
  line-height: 28px;
  border-radius: 6px 0 0 6px;
}

.top-nav-li {
  text-align: left;
  padding-left: 10px;
  display: flex;
}

.top-nav-li:hover,
.topCheckLi {
  cursor: pointer;
  color:#FFCC00;
}
.base-line{vertical-align: -3px;}
.topbg-a{background: url('../assets/img/btn_pre.png') no-repeat;font-weight: bold;}
.topbg:hover{background: url('../assets/img/btn_pre.png') no-repeat;font-weight: bold;}
</style>
