<template>
  <div v-loading="loading">
  </div>
</template>
<script scoped>
 export default{
   data(){
     return{

       loading: true,
       tabList:[],
     }
   },
   activated()
   {
    this.getinit();
   },
   mounted(){

   },
    methods:{
      getinit(){
        var url="http://218.94.87.2/njswdw/auth/indexAction.do?token=";
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
        let p={
             'token':this.$store.state.token,
        };
          this.$api.post(this.Global.aport3+"/SWDWXYDJPDController/getSwdwxydjpd",p,
          r => {
                 var tt=r.data;
                 this.loading=false;
                 window.open(url+tt, '_blank');
          });
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
