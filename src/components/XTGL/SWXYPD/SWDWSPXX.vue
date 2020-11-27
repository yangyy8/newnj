<template lang="html">
  <div class="">
    <iframe name="myiframe"  id="myrame-record-query"  :src="url"  frameborder="0" align="middle"  width="100%"  height="700px"></iframe>
  </div>
</template>

<script>
export default {
  data(){
    return{
      url:''
    }
  },
  mounted() {
    this.$store.dispatch('getTokenT');
    if(this.$store.state.tokenT){
      this.url = "http://10.33.72.147:8080/njswdw/auth/swdwspEmbed.do?token="+this.$store.state.tokenT;
    }
    // this.url = 'http://10.0.30.101:8080/#/Frame?jh=code&sfzh=ceshi&page=ZrqVistManage'
  },
  activated(){
    // var url="http://10.33.72.147:8080/njswdw/auth/swdwspEmbed.do?token="+this.$store.state.tokenT;
    // this.closeP(this.Global.tabLists,this.routeList);
    // window.open(url, '_blank');
  },

}
</script>

<style lang="css" scoped>
</style>
