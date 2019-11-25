<template>
  <div v-loading="loading" style="min-height:700px; background:#ffffff">
    <div class="mmsg">{{msg}}</div>
  </div>
</template>
<script scoped>
 export default{
   data(){
     return{

       loading: true,
       tabList:[],
       msg:'',
     }
   },
   activated()
   {
  //  setInterval(this.getinit, 10000);
  this.getinit();
   },
   mounted(){

   },
    methods:{
      getinit(){
        var url="http://218.94.87.2/njswdw/auth/indexAction.do?token=";


        let p={
             'token':this.$store.state.token,
        };
          this.$api.post(this.Global.aport4+"/SWDWXYDJPDController/getSwdwxydjpd",p,
          r => {
                 var tt='';
                 if(r.data.success=="0"){
                   this.msg=r.data.msg;
                   this.loading=false;return;
                 }
                 tt=r.data.data;
                 this.getcc();
                 this.loading=false;

                 window.open(url+tt, '_blank');
          });
      },
      getcc(){
          this.tabList=this.Global.tabLists;
        if(this.Global.tabLists==undefined){
          this.close1(0);
        }else {
          if(this.Global.tabLists.length==0){
              this.close1(0);
          }else {
            this.close1(this.Global.tabLists.length-1);
          }
        }
      },
      tabClick(i){
        this.$router.push({name:i.name})
      },
      close1(index) {
        console.log('index',index);
        if(this.tabList!=undefined){
            this.tabList.splice(index, 1);
        }
        if (index > 0) {
          this.tabClick(this.tabList[index - 1])
        }
        if (index == 0) {
          if (this.tabList!=undefined && this.tabList.length != 0) {
            this.tabClick(this.tabList[index])
          } else {
            this.$router.push({name:'Home'})
            this.routeList=[]
          }
        }
      },
    },
 }
</script>
<style>
.mmsg{text-align:center;padding-top: 100px;font-size: 25px;color: red;font-weight: bold;}
</style>
