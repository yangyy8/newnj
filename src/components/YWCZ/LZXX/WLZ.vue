<template>
  <div></div>
</template>
<script>
export default {
  activated(){
    var url="http://50.32.166.211:9091/index?SFZH=" + this.$store.state.uid; //身份证号
    // console.log('====',url)
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
    window.open(url,'_blank')
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