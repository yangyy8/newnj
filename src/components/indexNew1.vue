<template lang="html">
  <div class="t-screen" :class="{'tt-screent':isFull,'tt-screenM':isFullM}" ref="fullS" style="">
    <div class="">
      <div class="index_nav_1" style="z-index:1000">
        <div class="nav_1" :class="{'nav_1_check':nav1Id==a.dm}" v-for="(a,ind) in nav1" @mouseover="getNav(a,ind)">
          <i :class="a.icon" :style="{'color':color[ind]}"></i>
          <span>{{a.mc}}</span>
        </div>
      </div>
      <div class="index_nav" v-if="navShow" style="z-index:1000">
        <div class="index_nav2">
          <div class="index_nav2_box" :class="{'nav_2_check':nav2Id==b.dm}" v-for="(b,ind2) in nav2" @click="getNav2(b)" style="font-size:15px;">
            ● {{b.mc}}
          </div>
        </div>
        <div class="index_nav3">
          <div class="index_nav3_box" :class="{'nav_3_check':nav3Id==c.dm}" v-for="(c,ind3) in nav3">
            <div v-if="!c.children">
              <router-link class="h3_2" :class="{'h3_2check':menuPath==c.url}" :to="{ name: c.url }"><i class="el-icon-caret-right" style="color:#a3a7a8"></i>{{c.mc}}</router-link>
            </div>
            <div v-if="c.children">
              <div class="h3_1" >{{c.mc}}</div>
              <el-row  :gutter="2">
                <router-link :to="{ name: d.url }" class="h3_2" :class="{'h3_2check':menuPath==d.url}" v-for="(d,ind4) in c.children" :key="ind4">
                    <el-col :span="12">
                    <i class="el-icon-caret-right" style="color:#a3a7a8"></i>{{d.mc}}
                    </el-col>
                </router-link>
             </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="" @mouseover="navShow=false">
      <div class="banner">
        <!-- <img src="../assets/img/sg/tc_nor.png" alt="链至大屏" class="toScreen" @click="$router.push({name:'Screen',query:{mtype:mapList.type,year:lzyear,month:lzmonth,day:lzdate}})"> -->
        <div class="common-report hand" @click="shortMenu">
          常用报表
        </div>
        <span class="el-icon-switch-button login-out hand" title="退出" @click="loginOut"></span>
        <transition name="el-zoom-in-top">
          <div class="arrow_content" v-show="bjShow">
              <div class="arrow_box">
                  <div class="arrow"></div>
                  <div class="arrow_up"></div>
              </div>
              <div class="arrow_line" style="left: 2px; top: 2px; border-bottom-width: 0; border-right-width: 0"></div>
              <div class="arrow_line" style="right: 2px; top: 2px; border-bottom-width: 0; border-left-width: 0"></div>
              <div class="arrow_line" style="left: 2px; bottom: 2px; border-top-width: 0; border-right-width: 0"></div>
              <div class="arrow_line" style="right: 2px; bottom: 2px; border-top-width: 0; border-left-width: 0"></div>
              <div class="buttonpanel">
                 <el-button size="mini" @click="eidtMenu" v-show="menuSwitch">编辑</el-button>
                <div v-show="!menuSwitch">
                  <el-button size="mini" @click="saveMenu">保存</el-button>
                  <el-button size="mini" @click="cancelMenu">取消</el-button>
                </div>
              </div>
              <div class="buttonMenu">
                <div class="show-menu" v-show="menuSwitch">
                  <ul>
                      <li v-for="(item,ind) in showMenuData" @click="$router.push({name:item.URL})" class="hand">{{item.MC}}</li>
                  </ul>
                  <div style="clear:both"></div>
                </div>
                <div class="all-menu" v-show="!menuSwitch">
                  <div v-for="(item,index) in dataList" class="menuClass">
                    <div class="arrow_title">{{item.parentName}}</div>
                    <el-checkbox-group v-model="checkedList">
                      <el-checkbox v-for="val in item.child" :label="val.id" :key="val.id">{{val.mc}}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
          </div>
        </transition>
      </div>
      <div class="time">
        {{realTime}}
      </div>
      <div class="main">
      <el-row :gutter="3">
        <el-col :span="6"  style="">
             <div class="bgline1 tu4">
                <img src="../assets/img/sg/frame_1.png" class="img1" ref="ajC">
                <div class="title gradient-text-one">
                  案件6个月变化量
                </div>
                <div class = "chart1" style="width:100%">
                  <div id = "ajecharts" style = "width: 100%"></div>
                </div>
             </div>

             <div class="bgline1 tu4 tu-mt">
                <img src="../assets/img/sg/frame_2.png" class="img1">
                <div class="title gradient-text-one">
                  常住人员身份分析
                </div>
                <div class="tb1">
                  <img src="../assets/img/sg/tb1.png" class="cz-img">
                   <ul class="huan huan-font huan-li">
                      <li :class="{'color1':index==0,'color2':index==1,'color3':index==2,'color4':index==3,'color5':index==4}" v-for="(item,index) in czList">{{item}}</li>
                   </ul>
                </div>
             </div>
             <div class="bgline11 tu3 tu-mt">
                <img src="../assets/img/sg/frame_21.png" class="img4">
                <div class="title gradient-text-one">
                  重点国家人员
                </div>
                <el-row :gutter="10" class="zdgj">
                  <el-col :span="12">
                    <div class="tabLeft">
                      <p class="tabTitle">涉恐重点敏感国家</p>
                      <ul class="tabContent" :class="{anim:animate==true}">
                        <li v-for="(item,index) in data" class="tabC-li" :class="{'color-shu':(index+1)%2==0,'color-dan':(index+1)%2!=0}">
                          <span class="tabC-sl">{{item.MC}}</span>
                          <span class="tabC-sr">{{item.COUNT}}</span>
                        </li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="tabRight">
                      <p class="tabTitle">反恐“防回流”10国</p>
                      <ul class="tabContent" :class="{anim:animate==true}">
                        <li v-for="(item,index) in data1" class="tabC-li" :class="[(index+1)%2==0?'color-shu':'color-dan']">
                          <span class="tabC-sl">{{item.MC}}</span>
                          <span class="tabC-sr">{{item.COUNT}}</span>
                        </li>
                      </ul>
                    </div>
                  </el-col>
                </el-row>
             </div>
        </el-col>
        <el-col :span="12" class="center-map">
          <div class="content-head">
            <img src="../assets/img/sg/yjts.png" alt="" class="t-yjts">
            <ul class="show-yj" :class="{anim:animate==true}" @mouseover="sbEnter()" @mouseout="sbleave()">
               <li v-for="(item,index) in yjList" @click="$router.push({name:item.url})" class="hand">● {{item.mc}}<span class="cred tt-pad">{{item.num}}</span>条</li>
            </ul>
          </div>
          <div class="content">
            <div class="map">
                <div class="lzrq">
                  <div class="fun-choose">
                    <span @click="mapFun('L');page=0" :class="{'checktab':page==0}" class="tab-fun hand" style="position:relative;z-index:999;border-right:1px solid #02C8E8">临住登记量</span
                    ><span @click="mapFun('C');page=1" :class="{'checktab':page==1}" class="tab-fun hand" style="position:relative;z-index:999">常住人员量</span>
                  </div>
                  <div class="choose" v-show="page==0">
                    <el-select v-model="lzyear" size="small" placeholder="年" style="z-index: 999" clearable @change="mapFun">
                      <el-option
                        v-for="(item,ind) in years"
                        :key="ind"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                    <el-select v-model="lzquarter" size="small" placeholder="季度" v-show="false">
                      <el-option
                        v-for="(item,ind) in quarters"
                        :key="ind"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                    <el-select v-model="lzmonth" size="small" placeholder="月" style="z-index: 999" @visible-change='monthFun' clearable @change="mapFun">
                      <el-option
                        v-for="(item,ind) in months"
                        :key="ind"
                        :label="item+'月'"
                        :value="item">
                      </el-option>
                    </el-select>
                    <el-select v-model="lzdate" size="small" placeholder="日" @visible-change='dayFun' style="z-index: 999" clearable @change="mapFun">
                      <el-option
                        v-for="(item,ind) in dates"
                        :key="ind"
                        :label="item+'日'"
                        :value="item">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div id="mapall" class="map-all">
                  <img src="../assets/img/sg/map2.png" alt="" class="map-img">
                  <div id="home_map" class="zuobiao"></div>
                  <transition name="el-fade-in-linear">
                    <div class = "chart tooltipm" v-show="isShow" :class="claname" id="tt">
                      <div id = "mapecharts" style = "width: 100%;height:80px"></div>
                    </div>
                  </transition>
                </div>
            </div>
          </div>
          <div class="content-foot">
            <div class="foot-title">
              <div>
                <img src="../assets/img/sg/pdjh.png" class="img-tl">
              </div>
              <div class="img-tr">
                <ul>
                  <li><img src="../assets/img/sg/wd_33.png" class="foot-imgbz"><span>正常</span></li>
                  <li><img src="../assets/img/sg/wd_22.png" class="foot-imgbz"><span>繁忙</span></li>
                  <li><img src="../assets/img/sg/wd_11.png" class="foot-imgbz"><span>拥挤</span></li>
                  <div style="clear:both"></div>
                </ul>
              </div>
            </div>
          </div>
          <div class="pdjh-content">
              <img src="../assets/img/sg/pdjhtb.png" class="img-people">
              <ul class="pdjh-ul">
                 <li v-for="(i,ind) in pdjhdata">
                   <span>{{i.centername}}</span>
                   <div class="mt4">
                    <span  v-for="s in i.queuesum">
                      <span class="sz ml4">{{s}}</span>
                    </span>
                    <span class="ci">人</span>
                   </div>
                   <img :src="i.isbusy=='拥挤'?imgOne:i.isbusy=='繁忙'?imgTwo:imgFor" width="48">
                 </li>
              </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bgline2 tu4">
             <img src="../assets/img/sg/frame_2.png" class="img4" ref="lzC">
             <div class="title gradient-text-one">
               临住6个月变化量
             </div>
             <div class = "chart4" style="width:100%">
               <div id = "lzecharts" style = "width: 100%" class="tu4-4"></div>
             </div>
          </div>
          <div class="bgline2 tu4 tu-mt">
             <img src="../assets/img/sg/frame_2.png" class="img4" ref='zgC'>
             <div class="title gradient-text-one">
               中管6个月办理量
             </div>
             <div class = "chart4" style="width:100%;">
               <div id = "zgecharts" style = "width: 100%"></div>
             </div>
          </div>
          <div class="bgline21 tu3 tu-mt">
             <img src="../assets/img/sg/frame_21.png" class="img4" ref='jtC'>
             <div class="title gradient-text-one">
               居留、停留6个月签发量
             </div>
             <div class = "chart4" style="width:100%;height:100%">
               <div id = "jtecharts" style = "width: 100%;height:100%"></div>
             </div>
          </div>
        </el-col>
      </el-row>
      </div>
    </div>
    <div class="bgh1">
      <el-dialog :visible.sync="mapDialogVisible"  width="1000px" :before-close="handClose" custom-class="map-class">
        <div id='tts' ref="ttsId"></div>
      </el-dialog>
      <el-dialog :title="diatext" :visible.sync="bzhDialogVisible">
           <el-table
                :data="tableData"
                style="width: 100%"
                >
                <el-table-column
                  label="照片">
                  <template slot-scope="scope">
                    <div v-if="scope.row.zp">
                     <el-popover placement="right" title="" trigger="hover">
                       <img :src="scope.row.zp"  style="max-width:700px; max-height:700px;"/>
                       <img slot="reference" :src="scope.row.zp" :alt="scope.row.zp"  width="50" height="50">
                     </el-popover>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="sf"
                  label="身份" v-if="czshow">
                </el-table-column>
                <el-table-column
                  prop="fwcs"
                  label="服务处所" v-if="czshow">
                </el-table-column>
                <el-table-column
                  prop="ywxm"
                  label="英文姓名">
                </el-table-column>
                <el-table-column
                  prop="zwxm"
                  label="中文姓名">
                </el-table-column>
                <el-table-column
                  prop="xb"
                  label="性别">
                </el-table-column>
                <el-table-column
                  prop="csrq"
                  label="出生日期">
                </el-table-column>
                <el-table-column
                  prop="djrq"
                  label="登记日期">
                </el-table-column>
                <el-table-column
                  prop="gjdq"
                  label="国家地区">
                </el-table-column>
                <el-table-column
                  prop="zjzl"
                  label="证件种类">
                </el-table-column>
                <el-table-column
                  prop="zjhm"
                  label="证件号码">
                  <template slot-scope="scope">
                     <span style="color:yellow; cursor:pointer"  @click="gotos(scope.row.zjhm,scope.row.gjdqdm)">{{scope.row.zjhm}}</span>
                  </template>
                </el-table-column>
            </el-table>
            <div class="middle-foot mt-10">
               <div class="page-msg">
                 <div class="crrcolor">
                 共{{TotalResult}}条记录
                 </div>
                 <div class="crrcolor">
                   <!-- 每页显示
                   <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
                     <el-option
                       v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
                     </el-option>
                   </el-select>
                   条 -->
                 </div>
                 <div class="crrcolor">
                   <!-- 共{{Math.ceil(TotalResult/pageSize)}}页 -->
                 </div>
               </div>
               <el-pagination
               background
                 @current-change="handleCurrentChange"
                 :current-page.sync ="CurrentPage"
                 :page-size="pageSize"
                 layout="prev, pager, next"
                 :total="TotalResult">
               </el-pagination>
             </div>
           <div slot="footer">
             <img src="../assets/img/qx.png" border="0" @click="bzhDialogVisible = false" style="cursor:pointer" >
           </div>
          <div class="arrow_line" style="left:0px;top:0px; border-bottom-width:0;border-right-width:0"></div>
          <div class="arrow_line" style="right:0px;top:0px; border-bottom-width:0;border-left-width:0"></div>
          <div class="arrow_line" style="left:0px;bottom:0px; border-top-width:0;border-right-width:0"></div>
          <div class="arrow_line" style="right:0px;bottom:0px; border-top-width:0;border-left-width:0"></div>
         </el-dialog>
    </div>
  </div>
</template>
<script scoped>
let vm;
import {formatDate} from '@/assets/js/date.js'
import {createMapL} from '@/assets/js/SuperMap/indexmap.js'
import NAV from './NAV'
import echarts from 'echarts'
import '../assets/js/jquery-3.4.1.min.js'
import '../assets/js/scroll.js'
import imgUrlOne from "../assets/img/sg/wd_1.png"
import imgUrlTwo from "../assets/img/sg/wd_2.png"
// import imgUrlThr from "../assets/img/sg/wd_3.png"
import imgUrlFor from "../assets/img/sg/wd_4.png"
export default {
  components:{NAV},
  data() {
    return {
      imgOne:imgUrlOne,
      imgTwo:imgUrlTwo,
      // imgThr:imgUrlThr,
      imgFor:imgUrlFor,
      mapCenter:null,
      ajCharts:null,
      lzCharts:null,
      zgCharts:null,
      jtCharts:null,
      mapCharts:null,
      dialogTableVisible:false,
      mapDialogVisible:false,
      claname:'',
      animate:false,
      isShow:false,
      num:0,
      lzrq:{},
      years:[],
      lzyear:'',
      months:[],
      lzmonth:'',
      quarters:[],
      lzquarter:'',
      dates:[],
      lzdate:'',
      mapList:{},
      screenWidth: document.body.clientWidth,
      fullHeight: document.documentElement.clientHeight,
      imgHeightOne:this.$store.state.imgHeightOne,
      imgHeightTwo:this.$store.state.imgHeightTwo,
      imgHeightThr:this.$store.state.imgHeightThr,
      imgHeightFor:this.$store.state.imgHeightFor,
      data:[
        {
          gj:'阿尔及利亚',
          count:'2人'
        },
        {
          gj:'尼日利亚',
          count:'5人'
        },
        {
          gj:'菲力宾',
          count:'8人'
        },
        {
          gj:'孟加拉国',
          count:'1人'
        },
        {
          gj:'阿尔及利亚',
          count:'2人'
        },
        {
          gj:'尼日利亚',
          count:'5人'
        },
      ],
      data1:[
        {
          gj:'印度尼西亚',
          count:'2人'
        },
        {
          gj:'拉克',
          count:'5人'
        },
        {
          gj:'借耳机四斯坦',
          count:'8人'
        },
        {
          gj:'巴基斯坦',
          count:'1人'
        },
        {
          gj:'阿尔及利亚',
          count:'2人'
        },
        {
          gj:'尼日利亚',
          count:'5人'
        },
      ],
      mapdata:[],
      seriesData:[],
      czList:[],
      yjList:[],
      name:{
        'liuhe':'5000以下',
      },
      yjl:'',
      ajyjl:'',
      nav1Id:0,
      nav1:this.pl.menu,
      color:['#02ffd0','#e09144','#50c6ea'],
      navShow:false,
      iURL:'',
      nav2Id:0,
      nav2:[],
      nav3Id:0,
      nav3:[],
      menuPath:null,
      pdjhdata:[],

      lrdw:'',
      aaDom:null,

      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
      xzqh:'',
      pd:{},
      diatext:'标准化地址',
      tableData:[],
      options:this.pl.options,
      bzhDialogVisible:false,
      lrdw:'320115',
      lrdwmc:'秦淮区',//320113   320112江北
      rs:'11523',
      type:'L',
      yf:'M',
      sevalue:[],
      bzhid:'',
      czshow:false,
      ssfj:'',
      timer:null,
      page:0,
      realTime:'',
      bjShow:false,
      menuSwitch:true,

      showMenuData:[],
      dataList:[],
      checkedList:[],
      isFull:false,
      isFullM:false,
    }
  },
  mounted() {
     window.vm=this;
     console.log(this.Global.indexstate);
     if(this.Global.indexstate!=0){
       this.Global.indexstate=0;
       window.location.reload();
     }
     this.getNavmune();
     const that = this
     window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth;
            that.screenWidth = window.screenWidth;
            window.fullHeight = document.documentElement.clientHeight
            that.fullHeight = window.fullHeight;
            that.imgHeightOne=that.$refs.ajC.offsetHeight;
            that.imgHeightTwo=that.$refs.lzC.offsetHeight;
            that.imgHeightThr=that.$refs.zgC.offsetHeight;
            that.imgHeightFor=that.$refs.jtC.offsetHeight;
            that.$store.commit('getOne',that.imgHeightOne);
            that.$store.commit('getTwo',that.imgHeightTwo);
            that.$store.commit('getThr',that.imgHeightThr);
            that.$store.commit('getFor',that.imgHeightFor);
            console.log('mounted',that.imgHeightOne,that.imgHeightTwo,that.imgHeightThr,that.imgHeightFor);
        })()
     }
     if(this.fullHeight>=657&&this.fullHeight<=768){
       this.isFullM = true;
     }else{
       this.isFullM = false;
     }
     if(this.fullHeight>800){
       // this.isFull = true
       console.log('this.fullHeight',this.fullHeight)
       this.$refs.fullS.style.height = this.fullHeight +'px';
     }
    if(this.screenWidth<1550){
      this.seriesData=[
                        [[13, 27, '六合区', 12, 28]],
                        [[11, 13, '江宁区', 10, 28]],
                        [[3, 18, '浦口区', 10, 28]],
                        [[18, 7, '溧水区', 10, 28]],
                        [[15, 1, '高淳区', 10, 28]],
                        [[15, 22, '栖霞区', 10, 20]],
                        [[7, 16, '雨花台区', 10, 15]],
                        [[10, 20, '鼓楼区', 10, 13]],
                        [[13, 21, '玄武区', 10, 13]],
                        [[8.5, 18, '建邺区', 10, 13]],
                        [[11.5, 19, '秦淮区', 10, 13]],
                        [[9, 23, '江北新区', 10, 25]]
                    ];
      this.yjl='370px';
      this.ajyjl="155px";
    }else{
      this.seriesData=[
                        [[13, 27, '六合区', 12, 40]],
                        [[11, 13, '江宁区', 10, 40]],
                        [[3, 18, '浦口区', 10, 40]],
                        [[18, 7, '溧水区', 10, 40]],
                        [[15, 1, '高淳区', 10, 40]],
                        [[15, 22, '栖霞区', 10, 30]],
                        [[7, 16, '雨花台区', 10, 20]],
                        [[10, 20, '鼓楼区', 10, 20]],
                        [[13, 21, '玄武区', 10, 25]],
                        [[8.5, 18, '建邺区', 10, 20]],
                        [[11.5, 19, '秦淮区', 10, 20]],
                        [[9, 23, '江北新区', 10, 20]]
                    ];
      this.yjl='500px';
      this.ajyjl="240px";
    }
    // this.mapdata=[
    //   {dm:1,mc:'六合区',value:50000,cla:'liuhe'},
    //   {dm:2,mc:'江北新区',value:30000,cla:'jiangbei'},
    //   {dm:3,mc:'栖霞区',value:5000,cla:'qixia'},
    //   {dm:4,mc:'玄武区',value:100,cla:'xuanwu'},
    //   {dm:5,mc:'鼓楼区',value:123,cla:'gulou'},
    //   {dm:6,mc:'秦淮区',value:123,cla:'qinhuai'},
    //   {dm:7,mc:'建邺区',value:123,cla:'jianye'},
    //   {dm:8,mc:'雨花台区',value:123,cla:'yuhua'},
    //   {dm:9,mc:'浦口区',value:123,cla:'pukou'},
    //   {dm:10,mc:'溧水区',value:123,cla:'lishui'},
    //   {dm:11,mc:'江宁区',value:123,cla:'jiangning'},
    //   {dm:12,mc:'高淳区',value:123,cla:'gaochun'},
    // ];
    // this.$nextTick(()=>{
    //   this.imgHeightOne=this.$refs.ajC.offsetHeight;
    //   this.imgHeightTwo=this.$refs.lzC.offsetHeight;
    //   this.imgHeightThr=this.$refs.zgC.offsetHeight;
    //   this.imgHeightFor=this.$refs.jtC.offsetHeight;
    //   console.log('mounted==',this.imgHeightOne,this.imgHeightTwo,this.imgHeightThr,this.imgHeightFor);
    // })

    this.allEcharts();
    this.yearFun();
    this.aaa();
    this.pdjhFun();
  },
  activated(){},
  watch: {
    fullHeight (val) {
       // if(!this.timer) {
       //   this.fullHeight = val
       //   this.timer = true
       //   let that = this
       //    setTimeout(function (){
       //     that.timer = false
       //    },400)
       // }
       if(val>=657&&val<=768){
         this.isFullM = true;
       }else{
         this.isFullM = false;
       }
       if(val>800){
         // this.isFull = true
         this.$refs.fullS.style.height = val+'px';
       }
       // else{
       //   this.isFull = false
       // }
     },
      screenWidth (val) {
          this.screenWidth = val;
          if(this.screenWidth<1550){
            this.seriesData=[
                              [[13, 27, '六合区', 12, 28]],
                              [[11, 13, '江宁区', 10, 28]],
                              [[3, 18, '浦口区', 10, 28]],
                              [[18, 7, '溧水区', 10, 28]],
                              [[15, 1, '高淳区', 10, 28]],
                              [[15, 22, '栖霞区', 10, 20]],
                              [[7, 16, '雨花台区', 10, 15]],
                              [[10, 20, '鼓楼区', 10, 13]],
                              [[13, 21, '玄武区', 10, 13]],
                              [[8.5, 18, '建邺区', 10, 13]],
                              [[11.5, 19, '秦淮区', 10, 13]],
                              [[9, 23, '江北新区', 10, 25]]
                          ];
            this.yjl='370px';
            this.ajyjl="155px";
          }else{
            this.seriesData=[
                            [[13, 27, '六合区', 12, 40]],
                            [[11, 13, '江宁区', 10, 40]],
                            [[3, 18, '浦口区', 10, 40]],
                            [[18, 7, '溧水区', 10, 40]],
                            [[15, 1, '高淳区', 10, 40]],
                            [[15, 22, '栖霞区', 10, 30]],
                            [[7, 16, '雨花台区', 10, 20]],
                            [[10, 20, '鼓楼区', 10, 20]],
                            [[13, 21, '玄武区', 10, 25]],
                            [[8.5, 18, '建邺区', 10, 20]],
                            [[11.5, 19, '秦淮区', 10, 20]],
                            [[9, 23, '江北新区', 10, 20]]
                          ];
            this.yjl='500px';
            this.ajyjl="240px";
          }
          this.mapFun();
          this.ajFun();
      },
      imgHeightOne(val){
        this.$nextTick(()=>{
          console.log('one==',val);
          document.getElementById("ajecharts").style.height=(val-20)+'px';
        })

      },
      imgHeightTwo(val){
        this.$nextTick(()=>{
          console.log('two==',val);
          document.getElementById("lzecharts").style.height=(val-20)+'px';
        })

      },
      imgHeightThr(val){
        this.$nextTick(()=>{
          console.log('thr==',val);
          document.getElementById("zgecharts").style.height=(val-20)+'px';
        })

      },
      imgHeightFor(val){
        this.$nextTick(()=>{
          console.log('for==',val);
          document.getElementById("jtecharts").style.height=(val)+'px';
        })

      },
  },
  created(){
      setInterval(this.scroll,2000);
      setInterval(this.scrollt,2000);
      this.timer=setInterval(this.scrollYj,2000);
      setInterval(this.realTimeFun,1000);
  },
  methods:{
      loginOut(){
          if(this.$store.state.wtoken!='' && this.$store.state.wtoken!=undefined && this.$store.state.serverip!='' && this.$store.state.serverip!=undefined){
           window.location.href='http://tymh.gaj.nkg.js:908/loginOperate/toUserLogin';return ;
          }else {
            var url=this.Global.aport1+'/user/logout';
            var formData = new FormData();
            formData.append("token",this.$store.state.token);
            let p=formData;
            this.$api.post(url, p,
              r => {
                if (r.success) {
                  // this.$message({
                  //   message: '退出成功',
                  //   type: 'success'
                  // });
                }
                localStorage.clear();
                this.$router.push('/')
              })
        }
      },
      realTimeFun(){
        this.realTime = formatDate(new Date(),'yyyy-MM-dd hh:mm')
      },
      handClose(){
        this.aaDom.innerHTML='';
        this.mapDialogVisible=false;
      },
      shortMenu(n){
        this.menuSwitch = true;
        if(n==0){
          this.bjShow = true;
        }else{
          this.bjShow = !this.bjShow;
        }
        this.$api.post(this.Global.aport+'/home/getCustomReport',{token:this.$store.state.token},
         r =>{
           if(r.success){
             this.showMenuData = r.data;
           }
         })
      },
      eidtMenu(){
        this.menuSwitch = !this.menuSwitch;
        this.$api.post(this.Global.aport+'/home/getEditCustomReport',{token:this.$store.state.token},
         r =>{
           if(r.success){
             this.dataList = r.data.dataList;
             this.checkedList = r.data.checkList;
           }
         })
      },
      saveMenu(){
        let p={
          token:this.$store.state.token,
          funids:this.checkedList
        }
        this.$api.post(this.Global.aport+'/home/updateCustomReport',p,
         r =>{
           if(r.success){
             this.$message({
                message: '保存成功',
                type: 'success'
             });
             this.shortMenu(0);
           }
         })
      },
      cancelMenu(){
        this.bjShow = false
      },
      //得到派出所
      getpcs(n,callback){
        console.log('this.mapList.type',this.mapList.type)
          var searchResult = [];
            let p={
              "lrdw":this.mapList.lrdw,
              "year":this.lzyear,
              "month":this.lzmonth,
              'day':this.lzdate
            };
          var url=this.Global.aport+"/zxdt/getLSZSDJXXPCSList";
           if(this.mapList.type=="C"){
             p={
               "lrdw":this.mapList.lrdw,
             };
             url=this.Global.aport+"/zxdt/getCZDJXXPCSList";
           }
           this.$api.post(url, p,
              r => {
                if (r.success) {
                  var arr=r.data;
                  for (var i = 0; i < arr.length; i++) {
                  searchResult.push(arr[i]);
                  }
                  callback && callback(searchResult)
                }
              });
      },
      pageSizeChange(val) {
        this.getRyxx(this.CurrentPage,val,this.bzhid,this.mc,this.lrdw);
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.getRyxx(val,this.pageSize,this.bzhid,this.mc,this.lrdw);
        console.log(`当前页: ${val}`);
      },
      //获取标准化地址
      getbzhdz(n,callback){
        var searchResult = [];
          this.ssfj=n;
          let p={
            "year":this.lzyear,
            "month":this.lzmonth,
            'day':this.lzdate,
            "lrdw":n,
          };
          var url=this.Global.aport+"/zxdt/getLSZSDJXXBZHDZList";
          if(this.mapList.type=="C"){
            p={
              "ssfj":n,
            };
            url=this.Global.aport+"/zxdt/getCZDJXXJZDList";
          }
          this.$api.post(url, p,
            r => {
              if (r.success) {
                var arr=r.data;
                for (var i = 0; i < arr.length; i++) {
                searchResult.push(arr[i]);
                }
                callback && callback(searchResult)
              }
            });
      },
      //人员信息
      getRyxx(currentPage,showCount,bzhid,mc,lrdw){
        if(currentPage==1){
          this.CurrentPage=1;
          this.tableData=[];this.TotalResult=0;
        }
         this.bzhid=bzhid;
         this.mc=mc;
         this.lrdw=lrdw;
         this.diatext=this.mc;
         let p={
           "currentPage":currentPage,
           "showCount":showCount,
           "bzhdzMc":this.bzhid,
           "year":this.lzyear,
           "month":this.lzmonth,
           'day':this.lzdate,
           "lrdw":this.ssfj,
         };
          var url=this.Global.aport+"/zxdt/getLSZSDJXXRYList";
         if(this.mapList.type=="C"){
           p={
             "currentPage":currentPage,
             "showCount":showCount,
             "xxdz":this.bzhid,
             "ssfj":this.ssfj,
           };
           url=this.Global.aport+"/zxdt/getCZDJXXRYList";
         }
         this.$api.post(url, p,
           r => {
             if (r.success) {
               this.tableData=r.data.resultList;
               this.TotalResult=r.data.totalResult;
             }
           });
         this.bzhDialogVisible=true;
      },
      gotos(zjhms,gjdq){
       let routeData=this.$router.resolve({path:'/Home/RYHX_NX',query:{zjhm:zjhms,gjdq:gjdq}});
       window.open(routeData.href,'_blank')
      },
      //后期匹配地址
      getXY(data, callback) {
        var url = this.Global.xyaddress + "?dz=" + data;
        let p = {
          "url": url,
        };
        this.$api.post(this.Global.aport + "/zxdt/getCtUrl", p,
          r => {
            callback && callback(r.data.result)
          });
      },
      getNav(item,index){
        this.navShow=true;
        this.nav1Id=item.dm;
        this.nav2=item.children;
        this.getNav2(this.nav2[0])
      },
      getNav2(item){
        this.nav2Id=item.dm;
        this.nav3=item.children;
      },
      getNavmune(){
        var formData = new FormData();
        formData.append("token", this.$store.state.token);
        let p=formData;
        var url=this.Global.aport1+'/fun/getMyNavigation';
        this.$api.post(url, p,
         r => {
           if(r.success){
             this.nav1=r.data;
           }
         });
      },
      pdjhFun(){
        this.$api.post(this.Global.aport+'/home/getPdjhData',{},
         r =>{
           this.pdjhdata = r.data
         })
      },
      scroll(){
         this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
         setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                 this.data.push(this.data[0]);  // 将数组的第一个元素添加到数组的
                 this.data.shift();               //删除数组的第一个元素
                 this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
         },0)
      },
      scrollt(){
         this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
         setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                 this.data1.push(this.data1[0]);  // 将数组的第一个元素添加到数组的
                 this.data1.shift();               //删除数组的第一个元素
                 this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
         },0)
      },
      scrollYj(){
        this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                this.yjList.push(this.yjList[0]);  // 将数组的第一个元素添加到数组的
                this.yjList.shift();               //删除数组的第一个元素
                this.yjList.push(this.yjList[1]);  // 将数组的第一个元素添加到数组的
                this.yjList.splice(1,1);
                this.yjList.push(this.yjList[2]);  // 将数组的第一个元素添加到数组的
                this.yjList.splice(2,1);
                this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        },0)
      },
      sbEnter(){
        console.log('enter')
        // this.animate=false;
        clearInterval(this.timer);
        this.timer=null;
      },
      sbleave(){
        console.log('leave')
        // this.animate=true;
        this.timer=setInterval(this.scrollYj,2000);
      },
      yjFun(){
        this.$api.post(this.Global.aport+'/home/getWaringData',{},
         r =>{
           this.yjList = r.data
         })
      },
      yearFun(){
        this.$api.post(this.Global.aport+'/home/getYear',{},
         r =>{
           if(r.success){
             this.years = r.data;
           }
         })
      },
      monthFun(){
        let p={
          year:this.lzyear
        }
        this.$api.post(this.Global.aport+'/home/getMonth',p,
         r =>{
           if(r.success){
             this.months = r.data.MONTH;
             if(this.lzyear==''){this.lzyear = r.data.YEAR;}
           }
         })
      },
      dayFun(){
        let p={
          year:this.lzyear,
          month:this.lzmonth
        }
        this.$api.post(this.Global.aport+'/home/getDay',p,
         r =>{
           if(r.success){
             this.dates = r.data.DAY;
             if(this.lzmonth==''){this.lzmonth = r.data.MONTH;}
             if(this.lzyear==''){this.lzyear = r.data.YEAR;}
           }
         })
      },
      czFun(){
        this.$api.post(this.Global.aport+'/home/getCzsfdata',{},
         r =>{
           if(r.success){
             this.czList = r.data;
           }
         })
      },
      zdFun(){
        this.$api.post(this.Global.aport+'/home/getCzzdryData',{},
         r =>{
           if(r.success){
             this.data = r.data.SK;
             this.data1 = r.data.FK;
           }
         })
      },
      mapFun(val){
        let p={
          year:this.lzyear,
          month:this.lzmonth,
          day:this.lzdate,
          type:val
        }
        this.$api.post(this.Global.aport+'/home/getCenterData',p,
         r =>{
           if(r.success){
             this.drawLine(r.data.series,r.data.legend,r.data.name)
           }
         })
      },
      drawLine(data,legend,name){
        this.mapCenter = echarts.init(document.getElementById('home_map'));
        var shadowColor='';
        //x, y, 名称， 数值， symbolSize
        // var seriesData = [
        //     [13, 27, '六合区', 12, 40],
        //     [11, 13, '江宁区', 10, 40],
        //     [3, 18, '浦口区', 10, 40],
        //     [18, 7, '溧水区', 10, 40],
        //     [15, 1, '高淳区', 10, 40],
        //     [11, 22, '栖霞区', 10, 30],
        //     [7, 16, '雨花台区', 10, 20],
        //     [10, 20, '鼓楼区', 10, 20],
        //     [13, 21, '玄武区', 10, 25],
        //     [8.5, 18, '建邺区', 10, 20],
        //     [11.5, 19, '秦淮区', 10, 20],
        //     [9, 23, '江北新区', 10, 20]
        // ];
        //玄武区、秦淮区、鼓楼区、建邺区、栖霞区、雨花台区、浦口区、江宁区、六合区、溧水区、高淳区
        for (var i =0; i < this.seriesData.length; i++) {
          for(var h=0;h<this.seriesData[i].length;h++){
            for (var j =0; j< data.length; j++) {
              // console.log('=====',this.seriesData[i][h][2])
                if (this.seriesData[i][h][2] == data[j].mc) {
                    this.seriesData[i][h][3] = data[j].lzvalue;
                    this.seriesData[i][h][5] = data[j].dm;
                    this.seriesData[i][h][6] = data[j].cla;
                    this.seriesData[i][h][7] = data[j].level;
                    this.seriesData[i][h][8] = data[j].czvalue;
                    this.seriesData[i][h][9] = data[j].name;
                    if(data[j].level==3){
                      // 绿色3
                      this.seriesData[i][h][10]='#56e4c1';
                      this.seriesData[i][h][11]='#3ee28d';
                    }
                    else if(data[j].level==2){
                      // 蓝色2
                      this.seriesData[i][h][10]='#409AFE';
                      this.seriesData[i][h][11]='#5581FF';
                    }
                    else if(data[j].level==1){
                      // 黄色1
                      this.seriesData[i][h][10]='#FE9554';
                      this.seriesData[i][h][11]='#FC5435';
                    }
                    else if(data[j].level==0){
                      // 红色0
                      this.seriesData[i][h][10]='#ff5b60';
                      this.seriesData[i][h][11]='#fe3a75';
                    }
                }

            }
          }
        }
        let _this = this
        _this.mapCenter.setOption({
          xAxis: {
              type: 'category',
              data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
              show: false
          },
          legend:{
            data:legend,
            textStyle:{
              color:'#fff'
            },
            y:_this.yjl,
            x:'10px',
            orient: 'vertical', // 'vertical'
          },
          yAxis: {
              type: 'category',
              data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,35,26,27,28,29,30,31,32],
              show: false,
              boundaryGap: false
          },
          grid: {
              left: '0%',
              right: '0%',
              bottom: '0%',
              containLabel: true
          },
          tooltip : {
              trigger: 'item',
              formatter: function (params, ticket, callback) {}
          },
          series: [
            {//六合
              name:name['liuhe'],
              data: _this.seriesData[0],
              symbolSize: function (v) {
                  return v[4];
              },
              type: 'effectScatter',
              hoverAnimation:true,
              rippleEffect: {
                  brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                  scale:1.7
              },
              itemStyle: {
                normal: {
                    color:function(params){
            					//颜色渐变，右/下/左/上，从下往上渐变
                      // console.log('===',params);
            					return new echarts.graphic.LinearGradient(0,0,1,1,[
            						{offset: 0,color: params.value[10]},
            						{offset: 1,color: params.value[11]},
            					])
                    },
                    shadowBlur: 18,
                    shadowColor: _this.seriesData[0][0][11],
                },
              },
              label: {
                  normal: {
                      show: true,
                      color:'#fff',
                      formatter: function(v) {
                          return v.value[2];
                      },
                      fontSize: 10,
                      fontWeight:'bold',
                      rich: {
                          name: {
                              textBorderColor: '#fff'
                          }
                      }
                  }
              },
            },
            {//江宁
                name:name['jiangning'],
                data: _this.seriesData[1],
                hoverAnimation:true,
                symbolSize: function (v) {
                    return v[4];
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                    scale:1.7
                },
                itemStyle: {
                  normal: {
                      color:function(params){
              					//颜色渐变，右/下/左/上，从下往上渐变
                        shadowColor = params.value[10]
              					return new echarts.graphic.LinearGradient(0,0,1,1,[
              						{offset: 0,color: params.value[10]},
              						{offset: 1,color: params.value[11]},
              					])
                      },
                      shadowBlur: 18,
                      shadowColor: _this.seriesData[1][0][11]
                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 10,
                        fontWeight:'bold',
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }
                },
            },
            {//浦口
                  name:name['pukou'],
                  data: _this.seriesData[2],
                  hoverAnimation:true,
                  symbolSize: function (v) {
                      return v[4];
                  },
                  type: 'effectScatter',
                  rippleEffect: {
                      brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                      scale:1.7
                  },
                  itemStyle: {
                    normal: {
                        color:function(params){
                          //颜色渐变，右/下/左/上，从下往上渐变
                          return new echarts.graphic.LinearGradient(0,0,1,1,[
                            {offset: 0,color: params.value[10]},
                            {offset: 1,color: params.value[11]},
                          ])
                        },
                        shadowBlur: 18,
                        shadowColor: _this.seriesData[2][0][11]
                    },
                  },
                  label: {
                      normal: {
                          show: true,
                          color:'#fff',
                          formatter: function(v) {
                              return v.value[2];
                          },
                          fontSize: 10,
                          fontWeight:'bold',
                          rich: {
                              name: {
                                  textBorderColor: '#fff'
                              }
                          }
                      }
                  },
            },
            {//溧水
                    name:name['lishui'],
                    data: _this.seriesData[3],
                    hoverAnimation:true,
                    symbolSize: function (v) {
                        return v[4];
                    },
                    type: 'effectScatter',
                    rippleEffect: {
                        brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                        scale:1.7
                    },
                    itemStyle: {
                      normal: {
                          color:function(params){
                            //颜色渐变，右/下/左/上，从下往上渐变
                            return new echarts.graphic.LinearGradient(0,0,1,1,[
                              {offset: 0,color: params.value[10]},
                              {offset: 1,color: params.value[11]},
                            ])
                          },
                          shadowBlur: 18,
                          shadowColor: _this.seriesData[3][0][11]
                      },
                    },
                    label: {
                        normal: {
                            show: true,
                            color:'#fff',
                            fontWeight:'bold',
                            formatter: function(v) {
                                return v.value[2];
                            },
                            fontSize: 10,
                            rich: {
                                name: {
                                    textBorderColor: '#fff'
                                }
                            }
                        }
                    },
            },
            {//高淳
              name:name['gaochun'],
              data: _this.seriesData[4],
              hoverAnimation:true,
              symbolSize: function (v) {
                  return v[4];
              },
              type: 'effectScatter',
              rippleEffect: {
                  brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                  scale:1.7
              },
              itemStyle: {
                normal: {
                    color:function(params){
                      //颜色渐变，右/下/左/上，从下往上渐变
                      return new echarts.graphic.LinearGradient(0,0,1,1,[
                        {offset: 0,color: params.value[10]},
                        {offset: 1,color: params.value[11]},
                      ])
                    },
                    shadowBlur: 18,
                    shadowColor: _this.seriesData[4][0][11]
                },
              },
              label: {
                  normal: {
                      show: true,
                      color:'#fff',
                      fontWeight:'bold',
                      formatter: function(v) {
                          return v.value[2];
                      },
                      fontSize: 10,
                      rich: {
                          name: {
                              textBorderColor: '#fff'
                          }
                      }
                  }
              },
            },
            {//栖霞
                name:name['qixia'],
                data: _this.seriesData[5],
                hoverAnimation:true,
                symbolSize: function (v) {
                    return v[4];
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                    scale:1.7
                },
                itemStyle: {
                  normal: {
                      color:function(params){
                        //颜色渐变，右/下/左/上，从下往上渐变
                        return new echarts.graphic.LinearGradient(0,0,1,1,[
                          {offset: 0,color: params.value[10]},
                          {offset: 1,color: params.value[11]},
                        ])
                      },
                      shadowBlur: 10,
                      shadowColor: _this.seriesData[5][0][11]
                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        fontWeight:'bold',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 10,
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }
                },
            },
            {//雨花台
                name:name['yuhua'],
                data: _this.seriesData[6],
                hoverAnimation:true,
                symbolSize: function (v) {
                    return v[4];
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                    scale:1.7
                },
                itemStyle: {
                  normal: {
                      color:function(params){
              					//颜色渐变，右/下/左/上，从下往上渐变
              					return new echarts.graphic.LinearGradient(0,0,1,1,[
              						{offset: 0,color: params.value[10]},
              						{offset: 1,color: params.value[11]},
              					])
                      },
                      shadowBlur: 10,
                      shadowColor: _this.seriesData[6][0][11]
                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        fontWeight:'bold',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 10,
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }
                },
            },
            {//鼓楼
                name:name['gulou'],
                data: _this.seriesData[7],
                hoverAnimation:true,
                symbolSize: function (v) {
                    return v[4];
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                    scale:1.7
                },
                itemStyle: {
                  normal: {
                      color:function(params){
              					//颜色渐变，右/下/左/上，从下往上渐变
              					return new echarts.graphic.LinearGradient(0,0,1,1,[
              						{offset: 0,color: params.value[10]},
              						{offset: 1,color: params.value[11]},
              					])
                      },
                      shadowBlur: 10,
                      shadowColor: _this.seriesData[7][0][11]
                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        fontWeight:'bold',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 10,
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }
                },
            },
            {//玄武
                name:name['xuanwu'],
                data: _this.seriesData[8],
                hoverAnimation:true,
                symbolSize: function (v) {
                    return v[4];
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                    scale:1.7
                },
                itemStyle: {
                  normal: {
                      color:function(params){
                        //颜色渐变，右/下/左/上，从下往上渐变
                        return new echarts.graphic.LinearGradient(0,0,1,1,[
                          {offset: 0,color: params.value[10]},
                          {offset: 1,color: params.value[11]},
                        ])
                      },
                      shadowBlur: 10,
                      shadowColor: _this.seriesData[8][0][11]
                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 10,
                        fontWeight:'bold',
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }
                },
            },
            {//建邺
                name:name['jianye'],
                data: _this.seriesData[9],
                hoverAnimation:true,
                symbolSize: function (v) {
                    return v[4];
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                    scale:1.7
                },
                itemStyle: {
                  normal: {
                      color:function(params){
              					//颜色渐变，右/下/左/上，从下往上渐变
              					return new echarts.graphic.LinearGradient(0,0,1,1,[
              						{offset: 0,color: params.value[10]},
              						{offset: 1,color: params.value[11]},
              					])
                      },
                      shadowBlur: 10,
                      shadowColor: _this.seriesData[9][0][11]
                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        fontWeight:'bold',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 10,
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }
                },
            },
            {//秦淮
                name:name['qinhuai'],
                data: _this.seriesData[10],
                hoverAnimation:true,
                hoverAnimation:true,
                symbolSize: function (v) {
                    return v[4];
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                    scale:1.7
                },
                itemStyle: {
                  normal: {
                      color:function(params){
                        //颜色渐变，右/下/左/上，从下往上渐变
                        return new echarts.graphic.LinearGradient(0,0,1,1,[
                          {offset: 0,color: params.value[10]},
                          {offset: 1,color: params.value[11]},
                        ])
                      },
                      shadowBlur: 10,
                      shadowColor: _this.seriesData[10][0][11]
                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        fontWeight:'bold',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 10,
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }
                },
            },
            {//江北
                name:name['jiangbei'],
                data: _this.seriesData[11],
                hoverAnimation:true,
                symbolSize: function (v) {
                    return v[4];
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果:3
                    scale:1.7
                },
                itemStyle: {
                  normal: {
                      color:function(params){
                        //颜色渐变，右/下/左/上，从下往上渐变
                        return new echarts.graphic.LinearGradient(0,0,1,1,[
                          {offset: 0,color: params.value[10]},
                          {offset: 1,color: params.value[11]},
                        ])
                      },
                      shadowBlur: 15,
                      shadowColor: _this.seriesData[11][0][11]
                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        fontWeight:'bold',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 10,
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }
                },
            },
        ]
        })
        window.addEventListener("resize", () => {
          _this.mapCenter.resize();
        });
        _this.mapCenter.on('mouseover',function(params){

          _this.claname = params.value[6];
          _this.isShow=true;

            console.log('params',params.value[3],params.value[8],params.value[5],params.value[2]);
          _this.aaa(params.value[3],params.value[8],params.value[5],params.value[2]);
        })
        var mapCan = document.getElementById('mapall');
         mapCan.onmouseleave = function (e) {
           // console.log(e.target.lastChild.id,e.target.firstChild.id)
           if(e.target.lastChild.id=='tt'||e.target.firstChild.id=='home_map'){
             // console.log('鼠标离开',e);
            _this.isShow=false;
           }
         }
      },
      mapColor(val){
        if(val==0){return '#91071a'};
        if(val==1){return '#f36334'};
        if(val==2){return '#c3a820'};
        if(val==3){return '#46FF7F'};
      },
      aaa(lzdata,czdata,lrdw,lrdwmc){
        console.log('lzdata',lzdata,czdata);
        this.mapCharts = echarts.init(document.getElementById('mapecharts'));
        let _this = this;
        _this.mapCharts.setOption({
          xAxis: {
               type: 'category',
               data: ['临住', '常住'],
               // data: ['临住'],
               axisLine:{
                   lineStyle:{
                       color:'#01DEEC',
                       fontSize:12
                   }
               },
               splitLine: { //网格线
                 show: false
               },
               axisTick:{//去掉坐标刻度线
                 show:false,
               },
               triggerEvent:true
           },
           grid: {
             left:'2px',
             containLabel: true
           },
           yAxis: {
               type: 'value',
               axisLine:{
                   lineStyle:{
                       color:'#fff',
                       width:0,
                   },
               },
               axisTick:{//去掉坐标刻度线
                 show:false,
               },
               axisLabel: {
                 show: false //这行代码控制着坐标轴x轴的文字是否显示
               },
               splitLine:{
                 show:false
               }
           },
           series: [{
              type: 'bar',
              barWidth:10,
              barGap:'1%',/*多个并排柱子设置柱子之间的间距*/
  	          barCategoryGap:'1%',/*多个并排柱子设置柱子之间的间距*/
              data: [
                {
                    name:'临住',
                    type:'bar',
                    itemStyle:{
                      normal:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#C95062'
                         }, {
                           offset: 1,
                           color: '#D4BE65'
                         }])
                      },
                      emphasis:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#D5C95D'
                         }, {
                           offset: 1,
                           color: '#C39E69'
                         }])
                      },
                    },
                    label:{
                      show:true,
                      color:'#fff',
                      position: 'top', //在上方显示
                      fontSize:12
                    },
                    value:lzdata,
                },
                {
                    name:'常住',
                    type:'bar',
                    barGap:'1%',/*多个并排柱子设置柱子之间的间距*/
        	          barCategoryGap:'1%',/*多个并排柱子设置柱子之间的间距*/
                    itemStyle:{
                      normal:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#1CC9A1'
                         }, {
                           offset: 1,
                           color: '#4371CE'
                         }])
                      },
                      emphasis:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#D5C95D'
                         }, {
                           offset: 1,
                           color: '#C39E69'
                         }])
                      },
                    },
                    label:{
                      show:true,
                      color:'#fff',
                      position: 'top', //在上方显示
                      fontSize:12
                    },
                    value:czdata
                }
              ],
           }]
        },true)
        _this.mapCharts.off('click');
        _this.mapCharts.on('click',function(params){
            // console.log('====',params);
            if(params.name=='临住'||params.value=='临住'){_this.mapList.type="L",_this.mapList.rs=lzdata}
            if(params.name=='常住'||params.value=='常住'){_this.mapList.type="C",_this.mapList.rs=czdata}

            _this.lrdw = lrdw;
            _this.mapList.lrdw = lrdw;
            _this.mapList.lrdwmc = lrdwmc;
            _this.mapDialogVisible=true;
            _this.$nextTick(()=>{
                _this.aaDom = _this.$refs.ttsId;
                var bb = document.createElement('div');
                bb.setAttribute('id','mainMap');
                bb.setAttribute('class','mapbjindex');
                 _this.aaDom.appendChild(bb);
                 console.log(_this.aaDom);
            })
            createMapL(_this.mapList.lrdw,_this.mapList.lrdwmc,_this.mapList.rs,_this.mapList.type);
            if(_this.mapList.type=="C"){
              this.czshow=true;
            }else {
              this.czshow=false;
            }
        })
      },
      ajFun(){
        this.$api.post(this.Global.aport+'/home/getaj12data',{},
         r =>{
           if(r.success){
             console.log(r.data.series['非法就业'])
             this.drawAjchart(r.data.legend,r.data.yAxis,r.data.series);
           }
         })
      },
      drawAjchart(legend,ydata,series){
        this.ajCharts = echarts.init(document.getElementById('ajecharts'));
        let _this = this;
        _this.ajCharts.setOption({
          tooltip : {
              formatter:function(){},
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
              },
          },
          legend: {
              // y:_this.ajyjl,
              bottom:10,
              type: 'scroll',
              data: legend,
              textStyle:{
                color:'#fff'
              },
              padding: [
                  5,  // 上
                  0, // 右
                  0,  // 下
                  0, // 左
              ],
              itemWidth: 20,
              pageIconColor: '#fff',
              pageIconInactiveColor: '#aaa',
              pageFormatter: '',//隐藏翻页的数字
              pageButtonItemGap: -6,//翻页按钮的两个之间的间距
          },
          grid: {
            x:70,
            y:5,
          },
          xAxis:  {
              type: 'value',
              axisLine:{
                  lineStyle:{
                      color:'#fff',
                      // fontSize:12
                  }
              },
              splitLine: { //网格线
                show: false
              },
          },
          yAxis: {
              type: 'category',
              data: ydata,
              axisLine:{
                  lineStyle:{
                      color:'#fff',
                  }
              },
          },
          series: [
              {
                  name: '非法就业',
                  type: 'bar',
                  barWidth : 20,
                  stack: '总量',
                  barGap:'90%', // 控制柱子的间隔
                  // label: {
                  //     normal: {
                  //         show: true,
                  //         position: 'insideRight'
                  //     }
                  // },
                  itemStyle:{
                    normal:{
                      color:'#DCAD68'
                    }
                  },
                  data: series['非法就业']
              },
              {
                  name: '非法居留',
                  type: 'bar',
                  stack: '总量',
                  barGap:'90%', // 控制柱子的间隔
                  // label: {
                  //     normal: {
                  //         show: true,
                  //         position: 'insideRight'
                  //     }
                  // },
                  itemStyle:{
                    normal:{
                      color:'#7583A0'
                    }
                  },
                  data: series['非法居留']
              },
              {
                  name: '非法入境',
                  type: 'bar',
                  stack: '总量',
                  barGap:'90%', // 控制柱子的间隔
                  // label: {
                  //     normal: {
                  //         show: true,
                  //         position: 'insideRight'
                  //     }
                  // },
                  itemStyle:{
                    normal:{
                      color:'#E7D188'
                    }
                  },

                  data: series['非法入境']
              },
              {
                  name: '其它',
                  type: 'bar',
                  stack: '总量',
                  barGap:'90%', // 控制柱子的间隔
                  // label: {
                  //     normal: {
                  //         show: true,
                  //         position: 'insideRight'
                  //     }
                  // },
                  itemStyle:{
                    normal:{
                      color:'#8CBCC0'
                    }
                  },
                  data: series['其它']
              },
          ]
        })

      },
      lzFun(){
        this.$api.post(this.Global.aport+'/home/getlz6Data',{},
         r =>{
           if(r.success){
             this.drawLzchart(r.data.xAxis,r.data.series);
           }
         })
      },
      drawLzchart(xdata,series){
        this.lzCharts = echarts.init(document.getElementById('lzecharts'));
        let _this = this;
        _this.lzCharts.setOption({
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'none',
                  crossStyle: {
                      color: '#999'
                  }
              },
              formatter:function(){},
          },
          grid: {
            x:60,
            y:30,
            // containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  data: xdata,
                  axisPointer: {
                      type: 'none'
                  },
                  axisLine:{
                      lineStyle:{
                          color:'#fff',
                      }
                  },
              }
          ],
          yAxis: [
              {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#fff',
                        width:0,
                    },
                },
                axisTick:{//去掉坐标刻度线
                  show:false,
                },
                axisLabel: {
                  show: true //这行代码控制着坐标轴x轴的文字是否显示
                },
                splitLine:{
                  lineStyle:{
                    color:'#1C3156'
                  }
                }
              },
          ],
          series: [
              {
                  name:'临住',
                  type:'bar',
                  itemStyle:{
                    normal:{
                      label: {
      									show: true, //开启显示
      									position: 'top', //在上方显示
      									textStyle: { //数值样式
      										color: '#fff',
      										fontSize: 12
  									    }
      								},
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#895EDB'
                       }, {
                         offset: 1,
                         color: '#5568D4'
                       }])
                    },
                    emphasis:{
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#D5C95D'
                       }, {
                         offset: 1,
                         color: '#C39E69'
                       }])
                    },
                  },
                  barWidth:15,
                  data:series
              },
              // {
              //     name:'临住',
              //     type:'line',
              //     symbolSize:5,
              //     color:['#F88C68'],  //折线条的颜色
              //     smooth:true,
              //     symbol:'roundRect',
              //     itemStyle:{
              //           normal:{
              //               lineStyle:{
              //                   width:1,
              //                   type:'dotted'  //'dotted'虚线 'solid'实线
              //               }
              //           }
              //       },
              //     data:series
              // }
          ]
        })
      },
      zgFun(){
        this.$api.post(this.Global.aport+'/home/getZg12Data',{},
         r =>{
           if(r.success){
             this.drawZgchart(r.data.xAxis,r.data.series);
           }
         })
      },
      drawZgchart(xdata,series){
        this.zgCharts = echarts.init(document.getElementById('zgecharts'));
        let _this = this;
        _this.zgCharts.setOption({
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'none',
                  crossStyle: {
                      color: '#999'
                  }
              },
              formatter:function(){},
          },
          grid: {
            x:60,
            y:30,
            // containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  data: xdata,
                  axisPointer: {
                      type: 'none'
                  },
                  axisLine:{
                      lineStyle:{
                          color:'#fff',
                      }
                  },
              }
          ],
          yAxis: [
              {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#fff',
                        width:0,
                    },
                },
                axisTick:{//去掉坐标刻度线
                  show:false,
                },
                axisLabel: {
                  show: true //这行代码控制着坐标轴x轴的文字是否显示
                },
                splitLine:{
                  lineStyle:{
                    color:'#1C3156'
                  }
                }
              },
          ],
          series: [
              {
                  name:'',
                  type:'bar',
                  itemStyle:{
                    normal:{
                      label: {
      									show: true, //开启显示
      									position: 'top', //在上方显示
      									textStyle: { //数值样式
      										color: '#fff',
      										fontSize: 12
  									    }
      								},
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#2BADD3'
                       }, {
                         offset: 1,
                         color: '#466FD3'
                       }])
                    },
                    emphasis:{
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#D5C95D'
                       }, {
                         offset: 1,
                         color: '#C39E69'
                       }])
                    },
                  },
                  barWidth:15,
                  data:series
              },
              // {
              //     name:'',
              //     type:'line',
              //     symbolSize:5,
              //     color:['#F88C68'],  //折线条的颜色
              //     smooth:true,
              //     symbol:'roundRect',
              //     itemStyle:{
              //           normal:{
              //               lineStyle:{
              //                   width:1,
              //                   type:'dotted'  //'dotted'虚线 'solid'实线
              //               }
              //           }
              //       },
              //     data:series
              // }
          ]
        })
      },
      jtFun(){
        this.$api.post(this.Global.aport+'/home/getQzxx6Data',{},
         r =>{
           if(r.success){
             this.drawJtchart(r.data.legend,r.data.xAxis,r.data.series);
           }
         })
      },
      drawJtchart(legend,xdata,series){
        this.jtCharts = echarts.init(document.getElementById('jtecharts'));
        let _this = this;
        _this.jtCharts.setOption({
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'none',
                  crossStyle: {
                      color: '#999'
                  }
              }
          },
          grid: {
            x:60,
            y:40,
            // containLabel: true
          },
          legend: {
              data:legend,
              textStyle:{
                color:'#fff'
              },
              width:'100%',
              x:'right',
              y:'10px',
              padding: [
                  0,  // 上
                  45, // 右
                  0,  // 下
                  0, // 左
              ],
              itemWidth: 10,
              itemHeight: 10,// 标志图形的宽度
          },
          xAxis: [
              {
                  type: 'category',
                  data: xdata,
                  axisPointer: {
                      type: 'none'
                  },
                  axisLine:{
                      lineStyle:{
                          color:'#fff',
                      }
                  },
              }
          ],
          yAxis: [
              {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#fff',
                        width:0,
                    },
                },
                axisTick:{//去掉坐标刻度线
                  show:false,
                },
                axisLabel: {
                  show: true //这行代码控制着坐标轴x轴的文字是否显示
                },
                splitLine:{
                  lineStyle:{
                    color:'#1C3156'
                  }
                }
              },
          ],
          series: [
              {
                  name:'签证',
                  type:'bar',
                  itemStyle:{
                    normal:{
                      label: {
      									show: true, //开启显示
      									position: 'top', //在上方显示
      									textStyle: { //数值样式
      										color: '#fff',
      										fontSize: 12
  									    }
      								},
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#1DC7A2'
                       }, {
                         offset: 1,
                         color: '#4375CC'
                       }])
                    },
                    emphasis:{
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#D6CD5B'
                       }, {
                         offset: 1,
                         color: '#C1966B'
                       }])
                    },
                  },
                  barWidth:15,
                  data:series['签证']
              },
              {
                  name:'居留',
                  type:'bar',
                  itemStyle:{
                    normal:{
                      label: {
      									show: true, //开启显示
      									position: 'top', //在上方显示
      									textStyle: { //数值样式
      										color: '#fff',
      										fontSize: 12
  									    }
      								},
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#D5C95D'
                       }, {
                         offset: 1,
                         color: '#C39E69'
                       }])
                    },
                    emphasis:{
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#D5C95D'
                       }, {
                         offset: 1,
                         color: '#C39E69'
                       }])
                    },
                  },
                  barWidth:15,
                  data:series['居留']
              },
          ]
        })
      },
      allEcharts(){
        this.yjFun();
        this.zdFun();
        this.czFun();
        this.ajFun();
        this.lzFun();
        this.zgFun();
        this.jtFun();
        this.mapFun();
        this.$nextTick(()=>{
          if(this.imgHeightTwo==0){
            this.imgHeightOne=this.$refs.ajC.offsetHeight;
            this.imgHeightTwo=this.$refs.lzC.offsetHeight;
            this.imgHeightThr=this.$refs.zgC.offsetHeight;
            this.imgHeightFor=this.$refs.jtC.offsetHeight;
          }
          document.getElementById("lzecharts").style.height=(this.imgHeightTwo-20)+'px';
          document.getElementById("zgecharts").style.height=(this.imgHeightThr-20)+'px';
          document.getElementById("ajecharts").style.height=(this.imgHeightOne-20)+'px';
          document.getElementById("jtecharts").style.height=(this.imgHeightFor)+'px';
          this.$store.commit('getOne',this.imgHeightOne);
          this.$store.commit('getTwo',this.imgHeightTwo);
          this.$store.commit('getThr',this.imgHeightThr);
          this.$store.commit('getFor',this.imgHeightFor);
          // console.log(document.getElementById("lzecharts"),document.getElementById("zgecharts"),document.getElementById("ajecharts"),document.getElementById("jtecharts"))
          console.log(this.imgHeightTwo-20,this.imgHeightThr-20,this.imgHeightOne-20,this.imgHeightFor);
        })

        // this.drawAjchart();
        // this.drawLzchart();
        // this.drawZgchart();
        // this.drawJtchart();
        // this.drawLine(this.mapdata,null);
        window.addEventListener("resize", () => {
          this.ajCharts.resize();
          this.lzCharts.resize();
          this.zgCharts.resize();
          this.jtCharts.resize();
          this.mapCenter.resize();
          this.$nextTick(()=>{
            this.imgHeightOne=this.$refs.ajC.offsetHeight;
            this.imgHeightTwo=this.$refs.lzC.offsetHeight;
            this.imgHeightThr=this.$refs.zgC.offsetHeight;
            this.imgHeightFor=this.$refs.jtC.offsetHeight;
            document.getElementById("lzecharts").style.height=(this.imgHeightTwo-20)+'px';
            document.getElementById("zgecharts").style.height=(this.imgHeightThr-20)+'px';
            document.getElementById("ajecharts").style.height=(this.imgHeightOne-20)+'px';
            document.getElementById("jtecharts").style.height=(this.imgHeightFor)+'px';
          })
        });
      },
  },
}
</script>
<style scoped>
.bg{
  /* background: url(/static/img/bg.1e8500d.jpg) no-repeat; */
  background: #000314;
  min-height: 700px;
  background-size: 100%;
}
/* .index_nav_1{
  position: fixed;
  height: 584px;
  top:50%;
  margin-top: -292px;
  left: 0;
  width: 18px;
  background: rgba(3, 19, 40, 0.79);
  padding:0 14px;
  border-radius: 0 8px 8px 0;
  border: 1px solid #133358;
  font-size: 14px;
  display: flex;
  flex-direction: column;
} */
/* .nav_1{
  width: 16px;
  font-size: 16px;
  color: #787e8c;
  padding: 20px 0;
  border-bottom: 1px solid #273542;
} */
.nav_1_check,.nav_1:hover{
  color: #fff;
}
.nav_1 i{
  margin-bottom: 10px;
}
.nav_1:last-child{
  border: none;
}
.bd_b{
  border-bottom: 1px solid #273542;
}
.index_nav2_box{
  width: 100%;
  padding: 10px 0;
  text-indent: 15px;
  /* padding: 10px; */
}
.nav_2_check,.index_nav2_box:hover{
  background: rgba(6, 62, 121, 0.77);
  color: #28dbef;
}
.index_nav3{
  background:rgba(6, 62, 121, 0.95);
  color: #148de0;
  width: 380px;
  padding:20px 15px;
  line-height: 32px;
  font-size: 14px;
}
.h3_2{
  color: #95b9db;
}
.h3_2:hover{
  color: #fff;
}
.bg{background: #ffffff; width: 100%; height: 100%; min-height: 700px;}

.arrow_line {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #06B4FB;
}
</style>
<style>
  .my-div-icon {
         background: blue;
         border-radius: 50%;
        /* width: 50 !important;
        height: 50px !important; */
        line-height:50px;
        text-align: center;
        background: url(../assets/img/tb/mapt.png) no-repeat;
        background-position: 100% 100%;
        color: #ffffff;
        vertical-align: middle;
        font-weight:border;
}
.icon1{background: url(../assets/img/tb/map1.png)  no-repeat;}

.icon2{background: url(../assets/img/tb/map2.png)  no-repeat;}
.bgh1 .crrcolor{color: #1BA5C2!important;}

.bgh1 .el-dialog{ width: 90%!important;
  color: #ffffff!important;
  border: 1px solid #2e9de7;
  background-color: rgba(7,67,124,0.9);
  border-radius: 2px;}
  .bgh1 .el-dialog__title{
        color: #86cdfb!important;
  font-size: 18px;font-weight: lighter;
        border-left: 4px #86cdfb solid;padding-left: 10px;
      }
    .bgh1  .el-dialog__headerbtn{
        position: absolute;
        top: -6px;
        right: -11px;
        padding: 0px;
        background: #fff;
        border: none;
        border-radius: 50%;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
        width: 25px;
        height: 25px;
        color: #000;
      }
      .bgh1 .el-dialog__wrapper{
        top: -79px!important;
      }
    .bgh1 .el-dialog__header{
        border-bottom: none;
        padding: 0px 20px 10px!important;
      }
    .bgh1 .el-dialog__body {
      padding: 10px 20px;
      line-height: 30px!important;
  }
      .bgh1 .el-dialog__footer{
        background: none;
      }
      .bgh1 .el-table {
        border: none;
        background: none;

      }
     .bgh1 .el-table::before {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0px!important;
  }
      .bgh1 .el-table th{
         background:rgba(1,34,79,0.9) !important;
         color: #25daf5; border: none;
         border-top:  1px #2071A0 dashed;
      }
      .bgh1 .el-table tr{
          background-color: rgba(7,67,124);color:#a9d6fd;
          border: none;

      }
      .bgh1 .el-table tr td{
        border: none;
        border-top:  1px #2071A0 dashed;
        border-bottom:   1px #2071A0 dashed;
      }
      .bgh1 .el-table--border, .el-table--group{
        border: none;
      }
      .bgh1 .el-table--enable-row-hover .el-table__body tr:hover>td {
           background-color: rgba(7,67,124);color:#a9d6fd;
      }
      .bgh1 .el-table__expanded-cell{
       background:#023062 !important;
      }
        .bgh1 .el-table__empty-block{
            background:rgba(7,67,124);
            border-bottom:   1px #2071A0 dashed;
        }
        .bgh1 .el-table__empty-text{
          color: #a9d6fd;
        }
      .bgh1 .el-pagination.is-background .btn-next.disabled, .el-pagination.is-background .btn-next:disabled, .el-pagination.is-background .btn-prev.disabled, .el-pagination.is-background .btn-prev:disabled, .el-pagination.is-background .el-pager li.disabled
      {
        background: none;
      }
      .map-class .el-dialog__title{
        border-left: 0!important;
        padding-left: 0!important;
      }
      /* .map-class .el-dialog__header{
        padding: 0!important;
      } */
</style>
