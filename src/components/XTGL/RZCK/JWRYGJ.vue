<template lang="html">
<div>
  <!-- <iframe id="index_iframe" frameborder=0 name="showHere" scrolling="auto" style="min-height:900px; height:100%;  width:100%;" :src="iURL"></iframe> -->
</div>
</template>
<script scoped>
 export default{
   data(){
     return{
      iURL:'',
      tabList:[],
     };
   },
   activated()
   {
      var tt= this.$store.state.wtoken;
      var ss=this.$store.state.serverip;
      var url="http://10.33.68.49/hcfacehit/hcfacehit_index.html?token="+tt+"&serverip="+ss+"";
      //console.log(url);
      console.log('this.Global.tabLists',this.Global.tabLists);
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
      window.open(url, '_blank');
   },
   mounted(){

   },
   methods:{
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
   }
 }
</script>
<style>
/* .tab-content{padding: 1px!important;} */
</style>
