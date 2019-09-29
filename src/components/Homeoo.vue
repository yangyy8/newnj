<template lang="html">
  <el-container class="content">
      <!-- <div class="bg-carousel"></div> -->
    <el-header style="height:100px;">
      <img src="../assets/img/logon.png" alt="南京市外国人管理信息应用系统">
      <div class="top-right">
       <div class="top-nav">
          <ul class="top-nav-ul">
            <li class="top-nav-li hand" ><img src="../assets/img/nicon.png" /> &nbsp;欢迎您！{{adminname}}  {{dwname}}  <span class="modpwd" v-if="an" @click="$router.push({name:'XGMM'})">修改密码</span></li>
            <li class="top-nav-li hand" @click="$router.push({name:'Index'})"><img src="../assets/img/home.png" /> &nbsp;首页</li>
            <li class="top-nav-li hand" @click="logOut"><img src="../assets/img/close.png" /> &nbsp;退出</li>
          </ul>
        </div>
      </div>
    </el-header>
    <el-container class="main">
      <NAV></NAV>
      <div class="rList">
        当前位置：
        <span v-for="(x,ind) in routeList" :key="ind" class="rItem">{{x}}</span>
      </div>
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
import NAV from './NAV'
export default {
  components:{NAV},
  data() {
    return {
      tabList: [],
      adminname:'',
      dwname:'',
      tabliwidth:'10%',
      tabListCheck:null,
      routeList:this.$route.meta.title,
      an:false,
      key:'',
      currentKey:{},
      checkeditem:null
    };
  },
  computed: {
      // key() {
      //   console.log("this.$store.state.key",this.$store.state.key)
      //    if(this.$store.state.key==0){
      //       return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date();
      //       console.log(this.$store.state.key)
      //       console.log('this.$route.name=',this.$route.name,'this.$route.name +new Date()=',this.$route.name +new Date(),'===',this.$route +new Date())
      //    }else {
      //      return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date();
      //
      //    }
      // }
  },
  watch: {

    tabList: function(val) {
      if (val.length > 9) {
        this.tabliwidth = Math.floor(100 / (this.tabList.length+1)) + '%'
      }
    },
    $route:function(val){
      console.log("$store.state",this.$store.state.key,this.$store.state.key.id)
      if(val.meta.title&&!val.meta.father){
        this.tabListCheck=val.name
        this.routeList=val.meta.title
        if(this.tabList.length>0){
          for(var j=0;j<this.tabList.length;j++){
            if(this.tabList[j].name==val.name){
              if(this.tabList[j].query!=val.query){
                this.tabList[j]=val;
                // console.log(this.tabList[j].query,val.query);
              }
              return ;
            }

          }
        }
        this.checkeditem=val;
        this.tabList.push(val);
        this.$store.commit('getTabList',this.tabList);
        this.Global.tabLists=this.tabList;
        // console.log("tabList",this.tabList)
      }
    }
  },
  mounted() {
    if(this.$route.name!="Home"){
      if(this.$route.meta.father){
        this.$router.push({name:this.$route.meta.father})
        this.tabListCheck=this.$route.meta.father
      }else{
        this.tabList.push(this.$route)
        this.tabListCheck=this.$route.name
      }

    }
    this.getname();
  },
  methods: {
    tabClick(i,index,is){
      this.$router.push({name:i.name,query:i.query});
      console.log("this.checkeditem",this.checkeditem)

      if(is){
        // this.tabList.splice(index, 1);
        // for(var j=0;j<this.tabList.length;j++){
        //   if(i.name==this.tabList[j].name){
        //     alert(i.name)
        //     this.tabList.splice(j, 1);
        //   }
        // }
        this.close1(index,i,is)
        // this.$router.push({name:i.name,query:{wjh:'wjh'}});
        // this.tabList.splice(index, 1);
      }else{
        this.checkeditem=i;
        console.log("this.checkeditem",this.checkeditem)
        // this.$router.push({name:i.name,query:i.query});
      }

      this.$store.commit('getActiveTab',i);
    },
    tabClicknew(i,n){
      this.$router.push({name:i.name,query:i.query});
      this.$store.commit('getKey',{id:99,name:i.name});
      // console.log("key",this.$store.state.key)
    },
    close2(index,item){
      // let event = new Event('click');
      // console.log( document.getElementById(item.name))
     // document.getElementById(item.name).dispatchEvent(event);  // 触发点击事件
     this.tabClick(item,index,1)
      // console.log('this.$store.state.currentKey',this.$store.state.currentKey);
      // this.tabList.splice(index, 1);
      // this.tabClick(this.currentKey);

    },
    // 关闭tab页面==========================
    close1(index, item,is) {
      console.log('==========',index,item,is);
      console.log(this.checkeditem,this.tabList[index - 1]);
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

        // console.log('退出成功！');
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
.el-header {
  padding: 40px 50px 30px 65px;
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

/*new*/
.top-nav {
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 100%;
}

.top-nav-ul {
  height: 50px;
  display: flex;
  background: rgba(27, 92, 168, 0.50);
  color: #fff;
  line-height: 50px;
  border-radius: 6px 0 0 6px;

}

.top-nav-li {
  text-align: center;
  padding-left: 20px;
}

.top-nav-li:hover,
.topCheckLi {
  cursor: pointer;
  color:#FFCC00;

}

</style>
