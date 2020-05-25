<template lang="html">
  <div class="">
    <iframe name="myiframe"  id="myrame-record-query"  :src="url"  frameborder="0" align="middle"  width="100%"  height="700px"></iframe>
  </div>
</template>

<script>
export default {
  data(){
    return{
      url:'',
    }
  },
  mounted() {
    this.$store.dispatch('getTokenT');
    if(this.$store.state.tokenT){
      this.url="http://10.33.72.147:8080/njswdw/auth/swdwxxEmbed.do?token="+this.$store.state.tokenT;
    }
  },
  activated(){
    // this.url="http://10.33.72.147:8080/njswdw/auth/swdwxxEmbed.do?token="+this.$store.state.tokenT;
    // console.log('跳后',aa,this.$store.state.tokenT)
    // this.closeP(this.Global.tabLists,this.routeList);
    // window.open(url, '_blank');
  },
}
</script>

<style lang="css" scoped>
</style>
