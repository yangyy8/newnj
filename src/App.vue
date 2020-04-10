<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){//孙组件运用祖组件的方法或data  祖组件返回relaod，孙组件inject['reload']接收
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true,
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  }
}
</script>

<style>
@import "assets/css/common.css";
@import "assets/css/commony.css";
@import "assets/css/commont.css";
@import "assets/css/commonhy.css";
@import "assets/css/tingting.css";
@import "assets/css/yangyy.css";
</style>
