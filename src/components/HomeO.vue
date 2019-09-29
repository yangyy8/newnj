<template lang="html">
  <el-container class="content">
      <div class="bg-carousel"></div>
    <el-header style="height:125px;">
      <img src="../assets/img/logon.png" alt="南京市外国人管理信息应用系统">
      <div class="top-right">
       <div class="top-nav">
          <ul class="top-nav-ul">
            <li class="top-nav-li hand" >欢迎您！管理员</li>
            <li class="top-nav-li hand" >首页</li>
            <li class="top-nav-li hand" >退出</li>
          </ul>
        </div>
      </div>
    </el-header>
    <el-container class="main">
      <el-aside :width="sideWidth" class="left">
        <el-menu :default-active="selected"
        background-color="#17272f"
        text-color="#ffffff"
        active-text-color="#ffd04b"
        class="el-menu-vertical-demo"
        :router="true" @select="handleMenuSelect" :collapse="isCollapse">
          <el-submenu class="menucolor" :index="a.serial" v-for="(a,ind) in memuData" :key="ind">
            <template slot="title">
              <i :class="a.icon"></i>
              <span slot="title" >{{a.name}}</span>
            </template>
            <el-submenu :index="b.serial" v-for="(b,ind2) in a.menuChild" :key="ind2">
              <template slot="title">  <span class="yfont "> &bull; <span class="ym"> {{b.name}}</span> </span></template>
              <el-menu-item :index="c.path" v-for="(c,ind3) in b.menuChild" :key="ind3" v-if="!c.menuChild"> <span class="yfont ">{{c.name}}</span></el-menu-item>
              <el-submenu :index="c.serial" v-for="(c,ind3) in b.menuChild" :key="ind3" v-if="c.menuChild">
                <span slot="title"><span class="yfont ">{{c.name}}</span></span>
                <el-menu-item :index="d.path" v-for="(d,ind4) in c.menuChild" :key="ind4">
                   <span class="yfont ">  {{d.name}}</span>
                </el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-submenu>
        </el-menu>

      </el-aside>
      <el-main class="right-main" :class="{'nobg':tabList.length==0}">
        <ul class="tabList">
        <li class="tabList-item hand" :style="{width:tabliwidth}" :class="{'tabList-checked':nav2Id==i.query.nav2Id}" @click.right="closeRight(index)"  v-for="(i, index) in tabList">
          <span  @click="tabNav2(i)">{{i.query.title}}</span>
          <img src="../assets/img/tab-close1.png" alt="guanbi" @click="close1(index,i)" class="hand" style="padding:8px" v-if="nav2Id==i.query.nav2Id">
          <img src="../assets/img/tab-close2.png" alt="" @click="tabList.splice(index, 1)" style="padding:8px" class="hand" v-else>
        </li>
      </ul>
        <!-- <el-row style="border-bottom:1px solid #E4E9ED;padding-right:31px;">
        <el-col :span="18" style="display:flex;">
          <span style="font-size:14px;"><i class="el-icon-location"></i>当前位置：</span>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="mb-15">
          <el-breadcrumb-item v-for="(x,ind) in routeList" :key="ind">
            {{x}}</el-breadcrumb-item>
        </el-breadcrumb>
        </el-col>
      </el-row> -->
        <div class="tab-content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
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
      memuData: pl.menu,
      routeList: [],
      selected: this.$route.name,
      sideWidth: '135px',
      tabList: [],
      tabliwidth: '120px',
    };
  },
  watch: {
    // $route:function(newV,oldV) {
    //   this.routeList =newV.meta.title;
    // },
    tabList: function(val) {
      if (val.length > 8) {
        //console.log(this.tabList.length)
        this.tabliwidth = Math.floor(100 / (this.tabList.length + 1)) + '%'
        //console.log(this.tabliwidth)
      }
    },
    $route: function(val) {
      if (val.query.title) {
        for (var j = 0; j < this.tabList.length; j++) {
          if (this.tabList[j].query.nav2Id == val.query.nav2Id) {
            // //console.log("重复")
            return
          }
        }
        this.tabList.push(val);

      }
      // console.log("val==========================================", val)
    },

  },
  mounted() {
    this.getRoutePath();
  },
  methods: {
    getRoutePath() {
      this.routeList = this.$route.meta.title;
    },
    handleMenuSelect(index, indexPath) {
      this.selected = index
    },

    tabNav2(nav2Item) {
      console.log("this.$route.params.navId", this.$route.params.navId)
      console.log('nav2Item:', nav2Item);
      if (this.nav2Id == nav2Item.query.nav2Id) return;

      if (nav2Item.params.navId != this.$route.params.navId) {
        this.navId = nav2Item.params.navId;
        console.log("rootId不同", nav2Item.params.navId, this.$route.params.navId)
        let _this = this;
        setTimeout(function() {
          _this.$router.push({
            params: {
              navId: nav2Item.params.navId
            },
            query: {
              nav1Id: nav2Item.query.nav1Id,
              nav2Id: nav2Item.query.nav2Id
            }
          });
          console.log("new", nav2Item.params.navId)
          _this.getNav(nav2Item.params.navId)
        }, 400)
      }
      this.nav1Id = nav2Item.query.nav1Id;
      this.nav2Id = nav2Item.query.nav2Id;
      let _this = this;
      for (var i = 0; i < this.nav1List.length; i++) {
        if (_this.nav1List[i].SERIAL == _this.nav1Id) {
          _this.nav2List = _this.nav1List[i].menuList
        }
      }

      //console.log("nav1List",this.nav1List)
      //console.log("nav2List:",this.nav2List);
      this.$router.push({
        name: nav2Item.name,
        query: {
          nav1Id: this.nav1Id,
          nav2Id: this.nav2Id
        }
      })

    },
    // 关闭tab页面==========================
    close1(index, item) {
      this.tabList.splice(index, 1);
      if (index > 0) {
        // this.nav2Id = this.tabList[index - 1].SERIAL
        this.tabNav2(this.tabList[index - 1])
        // this.$router.push({name: this.tabList[index - 1].url,query:{nav1Id:this.nav1Id,nav2Id:this.nav2Id}})
      }
      if (index == 0) {
        if (this.tabList.length != 0) {
          // this.nav2Id = this.tabList[index].SERIAL
          this.tabNav2(this.tabList[index])

          // this.$router.push({name: this.tabList[index].url,query:{nav1Id:this.nav1Id,nav2Id:this.nav2Id}})
        } else {
          this.nav2Id = null;
          this.$router.push({
            name: 'Content',
            query: {
              nav1Id: this.nav1Id
            }
          })

        }

      }
    },
    logOut() {
      this.$api.post('/manage-platform/landout', {},
        r => {
          if (r.success) {
            this.$message({
              message: '退出成功',
              type: 'success'
            });
          }
          this.$router.push('/')
        })
    },
    closeRight(index) {
      this.rightShow = index;
      document.oncontextmenu = function() {
        return false;
      }
    },
  }
}
</script>
<style scoped>
.el-header {
  padding: 40px 50px 30px 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  /* height:101px; */
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-main {
  min-width: 700px !important;
}

.el-container {
  min-width: 975px !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-width: 134px;
  min-height: 600px;
  padding-top: 30px!important;
}
.tab-content{
  margin-top: 40px;
}

.top-right {
  display: flex;
  align-items: center;
  position: absolute;
  right: 40px;

}

/*new*/

.bg-carousel {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: url(../assets/img/bg.png);
  background-size: 100%;

}

.bg-carousel>div {
  width: 100%;
  height: 100%;
}

.top-nav {
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 100%;
}

.top-nav-ul {
  height: 40px;
  display: flex;
  background: rgba(27, 92, 168, 0.50);
  color: #fff;
  line-height: 40px;
  border-radius: 6px 0 0 6px;

}

.top-nav-li {
  text-align: center;
  padding-left: 20px;
}

.top-nav-li:hover,
.topCheckLi {
  cursor: pointer;
  color: #4a90e2;

}

.main {
  margin: 0 30px;
  padding: 0;
  background-color: rgba(27, 92, 168, 0.502);
  border-radius: 8px;
  min-height: 830px;
  display: flex;

}

.left {
  /* color: #333;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden; */
}

.right-main {
  min-width: 748px;
  padding: 0;
  position: relative;
  overflow: inherit !important;
  background: #def0fc;
}

.tabList {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 36px;
  position: absolute;
  top: -36px;
  flex-wrap: nowrap;
}

.tabList-item {
  margin-right: 5px;
  /* width: 120px; */
  overflow: hidden;
  padding: 0 18px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #fff;
  position: relative;
}
</style>
<style>
.el-submenu__title {
  font-size: 14px !important;
  padding-left: 12px!important;
  height: 40px!important;
  line-height: 40px!important;
}
.el-aside
{border-radius: 8px 0 0 0px;}
.el-menu-item{padding-left: 20px!important;}
</style>
