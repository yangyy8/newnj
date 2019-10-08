<template lang="html">
  <div class="side_nav">
    <div class="side_nav_item" v-for="(a,ind) in memuData" :key="ind">
      <span style="display:none">
            {{suibain}}
      </span>
      <div class="h1" @click="getHS(ind)">
        <i :class="a.icon" :style="{'color':color[ind]}"></i>
        <span>{{a.mc}}</span>
      </div>
      <div class="h2" v-if="showArray[ind]" :class="{'h2checked':h2Id==b.dm}" v-for="(b,ind2) in a.children" :key="ind2" @mouseover="checkH2(b.dm)" @mouseout="h2Id=null">
        <i :style="{'background':color[ind]}"></i>
        <span  class="hand" style="font-size:15px; padding-left:10px;">● {{b.mc}}</span>
        <div class="h3" v-if="h2Id==b.dm&&b.children.length">
          <div class="h3_content" v-for="(c,ind3) in b.children" :key="ind3">
            <div v-if="!c.children">
              <div class="h3_2" :class="{'h3_2check':menuPath==c.url}" @click="checklast(c.url)"><i class="el-icon-caret-right" style="color:#a3a7a8"></i>{{c.mc}}</div>
            </div>
            <div v-if="c.children">
              <div class="h3_1" >{{c.mc}}</div>
              <el-row  :gutter="2">
              <div @click="checklast(d.url)"  class="h3_2" :class="{'h3_2check':menuPath==d.url}" v-for="(d,ind4) in c.children" :key="ind4" >
                  <el-col :span="11">
                    <i class="el-icon-caret-right" style="color:#a3a7a8"></i>{{d.mc}}
                  </el-col>
              </div>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      memuData: this.pl.menu,
      h2Id:null,
      menuPath:null,
      showArray:[true,true,true,true],
      suibain:true,
      color:['#02ffd0','#e09144','#50c6ea']
    }
  },
  watch:{
    h2Id:function(val){
      if(val){
      }
    },
    $route:function(val){
      // console.log("route:",val)
      this.menuPath=val.name
    }
  },
  mounted(){
    this.menuPath=this.$route.name
    this.getNav();
  },
  methods:{
    checkH2(serial){
      this.h2Id=serial;
    },
     checklast(name){
       this.$router.push({name:name});
       this.$store.commit("getKey",{id:0,name:name});

     },
    getNav(){
      var formData = new FormData();
      formData.append("token", this.$store.state.token);
      let p=formData;
      var url=this.Global.aport1+'/fun/getMyNavigation';
      this.$api.post(url, p,
       r => {
         if(r.success){
           this.memuData=r.data;

         }else {
          // this.$message.error(r.message);

         }
       });
    },
    getHS(n){
      this.showArray[n] = !this.showArray[n];
      this.suibain = !this.suibain
      console.log(this.showArray[n]);
    },

  }
}

</script>

<style scoped>
.side_nav{
  flex:0 0 auto;
  background: rgba(1, 28, 46, 0.83);
  width: 135px;
  padding-top: 25px;
  border-radius: 7px 0 0 7px;
}
.h1{
  color: #fff;
  cursor: pointer;
  background: rgba(1, 28, 46, 0.83);
  line-height: 32px;
  padding-left: 20px;
}
.h2{
  color: #999999;
  padding-left: 20px;
  height: 32px;
  position: relative;

}
.h2>span{
  line-height: 32px;
  vertical-align: top;
}
.h2checked{
  background: rgb(255, 255, 255);
  padding-left: 0px;
  color: #1483dd;
}
.h2checked i{
  display: inline-block;
  width: 5px;
  height: 32px;
  margin-right: 10px;
}
.h3{
  position: absolute;
  width:380px;
  right:-400px;
  top:0;
  background: rgb(255, 255, 255);
  z-index: 7;
  color: #212121;
  padding: 10px;
  font-size: 12px;
  border-radius: 0 7px 7px 0;
  box-shadow: 1px -1px 2px 1px rgba(35, 214, 238, 0.5);
  z-index: 9999;
}
.h3_content{
  /* padding-bottom: 10px; */
  padding-top: 10px;
  border-bottom: 1px solid #e7e7e7;
  height: inherit;

}
.h3_content:last-child{
  border: none;
}
.h3_1{
  display: block;
  color: #008fe8;
  margin-bottom: 10px;
  font-size: 14px;
}
.h3_2{
  margin-right: 5px;
  line-height: 20px;
  cursor: pointer;

}
.h3_2:hover,.h3_2check{
  color: #42bff5;
}


</style>
