<template lang="html">
  <div class="bg">

    <div class="index_nav_1">
    
      <div class="nav_1" :class="{'nav_1_check':nav1Id==a.dm}" v-for="(a,ind) in nav1" @mouseover="getNav(a,ind)">
        <i :class="a.icon" :style="{'color':color[ind]}"></i>
        <span>{{a.mc}}</span>
      </div>
    </div>
    <div class="index_nav" v-if="navShow">
      <div class="index_nav2">
        <div class="index_nav2_box" :class="{'nav_2_check':nav2Id==b.dm}" v-for="(b,ind2) in nav2" @click="getNav2(b)" style="font-size:15px;">
          ● {{b.mc}}
        </div>
      </div>
      <div class="index_nav3">
        <div class="index_nav3_box" :class="{'nav_3_check':nav3Id==c.dm}" v-for="(c,ind3) in nav3">
          <div v-if="!c.children">
            <router-link class="h3_2" :class="{'h3_2check':menuPath==c.url}" :to="{ name: c.url }"><i class="el-icon-caret-right" style="color:#a3a7a8"></i>{{c.mc}}</router-link>
          </div>
          <div v-if="c.children">
            <div class="h3_1" >{{c.mc}}</div>
            <el-row  :gutter="2">
              <router-link :to="{ name: d.url }" class="h3_2" :class="{'h3_2check':menuPath==d.url}" v-for="(d,ind4) in c.children" :key="ind4">
                  <el-col :span="12">
                  <i class="el-icon-caret-right" style="color:#a3a7a8"></i>{{d.mc}}
                  </el-col>
              </router-link>
           </el-row>
          </div>
        </div>
      </div>
    </div>
    <!-- <NAV class="index_nav" v-if="navShow"></NAV> -->
    <div class="index_main" @mouseover="navShow=false">
      <iframe id="index_iframe" frameborder=0 name="showHere" scrolling="no" style="min-height:1100px" :src="iURL"></iframe>
    </div>
  </div>
</template>

<script>
import NAV from './NAV'
export default {
  components:{NAV},
  mounted() {
    console.log(this.Global.indexstate);
   if(this.Global.indexstate!=0){
     this.Global.indexstate=0;
     window.location.reload();
   }

    const oIframe = document.getElementById('index_iframe');
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = deviceWidth + 'px';
    oIframe.style.height = deviceHeight + 'px';
    this.getNavmune();
    this.iURL=window.IPConfig.IP+'/api-reporter/home/index?token='+this.$store.state.token;
    console.log('this.iURL',this.iURL);
  },
  data(){
    return{
      nav1Id:0,
      nav1:this.pl.menu,
      color:['#02ffd0','#e09144','#50c6ea'],
      navShow:false,
      iURL:'',
      nav2Id:0,
      nav2:[],
      nav3Id:0,
      nav3:[],
      menuPath:null,
    }
  },
  methods:{
    getNav(item,index){
      this.navShow=true;
      this.nav1Id=item.dm;
      this.nav2=item.children;
      this.getNav2(this.nav2[0])
    },
    getNav2(item){
      this.nav2Id=item.dm;
      this.nav3=item.children;
    },
    getNavmune(){
      var formData = new FormData();
      formData.append("token", this.$store.state.token);
      let p=formData;
      var url=this.Global.aport1+'/fun/getMyNavigation';
      this.$api.post(url, p,
       r => {
         if(r.success){
           this.nav1=r.data;
         }
       });
    }
  }
}
</script>

<style scoped>
.bg{
  /* background: url(/static/img/bg.1e8500d.jpg) no-repeat; */
  background: #000314;
  min-height: 700px;
  background-size: 100%;
}
.index_nav_1{
  position: fixed;
  height: 584px;
  top:50%;
  margin-top: -292px;
  left: 0;
  width: 18px;
  background: rgba(3, 19, 40, 0.79);
  padding:0 20px;
  border-radius: 0 8px 8px 0;
  border: 1px solid #133358;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* justify-content: space-between; */
}
.nav_1{
  width: 16px;
  /* height: 193px!important; */
  font-size: 16px;
  color: #787e8c;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  padding: 20px 0;
  border-bottom: 1px solid #273542;
}
.nav_1_check,.nav_1:hover{
  color: #fff;
}
.nav_1 i{
  margin-bottom: 10px;
}
.nav_1:last-child{
  border: none;
}
.bd_b{
  border-bottom: 1px solid #273542;
}
.index_nav{
  position: fixed;
  left: 60px;
  top:50%;
  margin-top: -292px;
  min-height: 584px;
  box-sizing: border-box;
  display: flex;
}
.index_nav2{
  background: rgba(6, 44, 83, 0.81);
  width: 120px;
  height: 584px;
  color: #8aacd1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  box-sizing: border-box;font-size: 16px;
}
.index_nav2_box{
  width: 100%;
  padding: 10px 0;
  text-indent: 15px;
  /* padding: 10px; */
}
.nav_2_check,.index_nav2_box:hover{
  background: rgba(6, 62, 121, 0.77);
  color: #28dbef;
}
.index_nav3{
  background:rgba(6, 62, 121, 0.95);
  color: #148de0;
  width: 380px;
  padding:20px 15px;
  line-height: 32px;
  font-size: 14px;
}
.h3_2{
  color: #95b9db;
}
.h3_2:hover{
  color: #fff;
}
</style>
