<template lang="html">
  <el-container>
    <el-header style="height:90px;">
    <div class="top-l">
      <img src="../assets/img/logoo.png" alt="南京市外国人管理信息应用系统">
    </div>
    <div class="top-r">
    <div class="top-center">
      <img src="../assets/img/topr.png">
    </div>
    <div class="top-right">
      <img src="../assets/img/r1.png">
      <img src="../assets/img/r2.png">
      <img src="../assets/img/r3.png">
      <img src="../assets/img/r4.png">
    </div>
  </div>
      <!-- <el-dropdown split-button type="primary">
        管理员
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    </el-header>

    <el-container style="background-color: #EDF2F6;">
      <el-aside style="width:auto; font-size:16px;">
        <el-menu :default-active="selected"
        background-color="#083457"
        text-color="#87B5D7"
        active-text-color="#ffd04b"
        class="el-menu-vertical-demo"
        :router="true" @select="handleMenuSelect" :collapse="isCollapse">

          <el-submenu class="menucolor" :index="a.serial" v-for="(a,ind) in memuData" :key="ind">
            <template slot="title">
              <i :class="a.icon"></i>
              <span slot="title">{{a.name}}</span>
            </template>
            <el-submenu :index="b.serial" v-for="(b,ind2) in a.menuChild" :key="ind2">
              <template slot="title">{{b.name}}</template>
              <el-menu-item :index="c.path" v-for="(c,ind3) in b.menuChild" :key="ind3" v-if="!c.menuChild">{{c.name}}</el-menu-item>
              <el-submenu :index="c.serial" v-for="(c,ind3) in b.menuChild" :key="ind3" v-if="c.menuChild">
                <span slot="title">{{c.name}}</span>
                <el-menu-item :index="d.path" v-for="(d,ind4) in c.menuChild" :key="ind4">{{d.name}}</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-row style="border-bottom:1px solid #E4E9ED;padding-right:31px;">
        <el-col :span="18" style="display:flex;">
          <span style="font-size:14px;"><i class="el-icon-location"></i>当前位置：</span>

        <el-breadcrumb separator-class="el-icon-arrow-right" class="mb-15">
          <el-breadcrumb-item v-for="(x,ind) in routeList" :key="ind">
            {{x}}</el-breadcrumb-item>
        </el-breadcrumb>

        </el-col>
        <el-col :span="6" align="right">2019-01-31</el-col>
      </el-row>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import pl from '../assets/js/pl.js'
export default {
  data() {
    return {
      isCollapse: false,
      memuData:pl.menu,
      routeList: [],
      selected:this.$route.name,
    };
  },
  watch:{
    $route:function(newV,oldV) {
      this.routeList =newV.meta.title;
    }
  },
  mounted(){
    this.getRoutePath();
  },
  methods: {
    getRoutePath() {
     this.routeList = this.$route.meta.title;
   },
    handleMenuSelect(index,indexPath){
      this.selected=index
   }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #FFFFFF;
  color: #2E99DF;
  line-height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.el-header img{}
.el-aside {
  color: #333;
}
.el-main {
    min-width: 700px!important;
}
.el-container{min-width: 975px!important;}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-width: 275px;
    min-height: 600px;
  }

.top-l{width: 50%; padding: 32px 50px 5px 30px;}
.top-r{width: 490px;  display: flex;align-items: right;}
.top-center{width: 100px;border:1px solid #cccccc; border-width: 0px 1px;padding: 32px 50px 5px 40px; }
.top-right{padding: 32px 30px 5px 40px; width: 230px;}
</style>
<style>
.el-submenu__title{font-size: 16px!important;}
</style>
