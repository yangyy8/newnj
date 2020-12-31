<template>
  <div></div>
</template>
<script>
export default {
  activated(){
    var url = ''
    if(this.$store.state.uid == 'admin'){
      url="http://50.32.166.211:9091/login?idnumber=" + this.$store.state.uid + "&vcode=00000000&returnUrl=null"; //身份证号
    }else{
      let idCard = this.$store.state.uid
      let birthday = ''
      if(idCard.length == 15){  
        birthday = "19"+idCard.substr(6,6);  
      } else if(idCard.length == 18){  
        birthday = idCard.substr(6,8);  
      } 
      // console.log('++++',parseInt(this.format(new Date(),'yyyyMMdd')))
      // console.log('===',idCard,parseInt(birthday),birthday) 
      let idnumber = parseInt(birthday) + parseInt(this.format(new Date(),'yyyyMMdd'))
      // console.log('heheh',idnumber)
      url="http://50.32.166.211:9091/login?idnumber=" + this.$store.state.uid + "&vcode=" + idnumber + "&returnUrl=null"; 
    }
    // console.log('url====',url)
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