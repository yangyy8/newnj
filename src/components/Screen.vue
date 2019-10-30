<template lang="html">
  <div class="screen">
    <div class="banner"><span>{{realTime}}</span></div>
    <div class="main">
    <el-row :gutter="3">
      <el-col :span="6"  style="">
           <div class="bgline1" style="height:296px">
              <div class="title gradient-text-one">
                  案件6个月变化量
              </div>
              <div class = "chart" style="width:100%">
                <div id = "ajecharts" style = "width: 100%; height:280px;top:35px;"></div>
              </div>
           </div>
           <div class="bgline1" style="height:296px;margin-top:14px;">
              <div class="title gradient-text-one">
                常住人员身份分析
              </div>
              <div class="tb1">
                <ul>
                   <li :class="{'color1':index==0,'color2':index==1,'color3':index==2,'color4':index==3,'color5':index==4}" v-for="(item,index) in czList">{{item}}</li>
                </ul>
              </div>
           </div>
           <div class="bgline11" style="height:255px;margin-top:14px;">
              <div class="title gradient-text-one">
                重点国家人员
              </div>
              <el-row :gutter="10" class="zdgj">
                <el-col :span="12">
                  <div class="tabLeft">
                    <p class="tabTitle">涉恐重点敏感国家</p>
                    <ul class="tabContent" :class="{anim:animate==true}">
                      <li v-for="(item,index) in zddata" class="tabC-li" :class="{'color-shu':(index+1)%2==0,'color-dan':(index+1)%2!=0}">
                        <span class="tabC-sl">{{item.MC}}</span>
                        <span class="tabC-sr">{{item.COUNT}}</span>
                      </li>
                    </ul>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="tabRight">
                    <p class="tabTitle">反恐"防回流"10国</p>
                    <ul class="tabContent" :class="{anim:animate==true}">
                      <li v-for="(item,index) in sgdata" class="tabC-li" :class="[(index+1)%2==0?'color-shu':'color-dan']">
                        <span class="tabC-sl">{{item.MC}}</span>
                        <span class="tabC-sr">{{item.COUNT}}</span>
                      </li>
                    </ul>
                  </div>
                </el-col>
              </el-row>
           </div>
      </el-col>
      <el-col :span="12" style="padding:25px 62px;">
        <div class="warning">
          <ul :class="{anim:animate==true}" @mouseover="sbEnter()" @mouseout="sbleave()">
             <li  v-for="(item,index) in yjList" @click="$router.push({name:item.url})" class="hand" style="float:left;width:33%;  padding: 0px 0px 4px 0px;">● {{item.mc}}<span class="cred tt-pad">{{item.num}}</span>条</li>
          </ul>
        </div>
        <div class="content">

          <img src="../assets/img/sg/map2.png" />
          <div id="home_bg1" class="mapdwbg1"></div>
          <div id="home_bg1" class="mapdwbg2"></div>
          <div id="home_bg1" class="mapdwbg3"></div>
          <div id="home_bg1" class="mapdwbg4"></div>
          <div id="home_bg1" class="mapdwbg5"></div>
          <div id="home_bg1" class="mapdwbg6"></div>
          <div id="home_bg1" class="mapdwbg7"></div>
          <div id="home_map" class="mapy"></div>
          <div id="home_line" class="mapline"></div>
          <div id="home_map1" class="mapdw"></div>
          <div id="home_map2" class="mapdw"></div>
          <div id="home_map3" class="mapdw"></div>
          <div id="home_map4" class="mapdw"></div>
          <div id="home_map5" class="mapdw"></div>
          <div id="home_map6" class="mapdw"></div>
          <div id="home_map7" class="mapdw"></div>
          <div id="home_map8" class="mapdw"></div>
          <div id="home_map9" class="mapdw"></div>
          <div id="home_map10" class="mapdw"></div>
          <div id="home_map11" class="mapdw"></div>
          <div id="home_map12" class="mapdw"></div>

        </div>
        <div class="lineup">
            <img src="../assets/img/sg/warm.png">
        </div>
        <div class="pdjh">
              <ul>
                 <li style="float:left;margin-top:10px;padding:0 3px;" v-for="(i,ind) in pdjhdata">
                   <div>{{i.centername}}</div>
                   <div class="mt4">
                    <span  v-for="s in i.queuesum">
                    <span class="sz ml4">{{s}}</span>
                   </span>
                    <span class="ci">人</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48" v-if="ind==0">
                   <img src="../assets/img/sg/wd_2.png" width="48" v-if="ind==1">
                   <img src="../assets/img/sg/wd_3.png" width="48" v-if="ind==2">
                   <img src="../assets/img/sg/wd_4.png" width="48" v-if="ind!=0 && ind!=1 &&ind!=2">
                 </li>

              </ul>
        </div>
      </el-col>
      <el-col :span="6" style="margin-left:-30px;">
        <div class="bgline2" style="height:296px">
           <div class="title gradient-text-one">
             临住6个月变化量
           </div>
           <div class = "chart" style="width:100%">
             <div id = "lzecharts" style = "width: 100%;height:280px;top:35px;"></div>
           </div>
        </div>
        <div class="bgline2" style="height:296px;margin-top:14px;">
           <div class="title gradient-text-one">
             中管6个月办理量
           </div>
           <div class = "chart" style="width:100%">
             <div id = "zgecharts" style = "width: 100%;height:280px;top:35px;"></div>
           </div>
        </div>
        <div class="bgline21" style="height:255px;margin-top:14px;">
           <div class="title gradient-text-one">
             居留、停留6个月签发量
           </div>
           <div class = "chart" style="width:100%">
             <div id = "jtecharts" style = "width: 100%;height:240px;top:35px;"></div>
           </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
     <el-col class="footer">
        <img src="../assets/img/sg/auto.png" width="55" height="26">
        <img src="../assets/img/sg/tc_nor.png"  width="55" height="26" @click="$router.push('Index')" style="cursor:pointer">
     </el-col>
   </el-row>
    </div>

  </div>
</template>
<script scoped>
import {formatDate} from '@/assets/js/date.js'
import echarts from 'echarts'
import '../assets/js/jquery-3.4.1.min.js'
import '../assets/js/scroll.js'
export default {
  data() {
    return {
      mapCenter:null,
      pdjhdata:[],
        czList:[],
        yjList:[],
        animate:false,
        ajCharts:null,
        lzCharts:null,
        zgCharts:null,
        jtCharts:null,
        zddata:[],
        sgdata:[],
        realTime:'',
        maptype:'L',
        year:'',
        month:'',
        day:'',
        seriesData:[
          [[13, 27, '六合区', 12, 40]],
          [[11, 12, '江宁区', 10, 40]],
          [[3, 17, '浦口区', 10, 40]],
          [[18, 7, '溧水区', 10, 40]],
          [[12, 0.5, '高淳区', 10, 40]],
          [[11, 22, '栖霞区', 10, 30]],
          [[7, 16, '雨花台区', 10, 20]],
          [[10, 20, '鼓楼区', 10, 20]],
          [[13, 21, '玄武区', 10, 25]],
          [[8.5, 18, '建邺区', 10, 20]],
          [[11.5, 19, '秦淮区', 10, 20]],
          [[9, 23, '江北新区', 10, 20]]
         ],

    }
  },
  mounted() {
    this.getpdjh();
    setInterval(this.realTimeFun,100);
    setInterval(this.scrollYj,2000);
    setInterval(this.scroll,2000);
    setInterval(this.scrollt,2000);
    this.maptype=this.$route.query.mtype;
    if(this.maptype==undefined){
      this.maptype="L";
    }
    this.year=this.$route.query.year;
    this.month=this.$route.query.month;
    this.day=this.$route.query.day;
    this.allEcharts();



  },

  methods:{
        realTimeFun(){
          this.realTime = formatDate(new Date(),'yyyy-MM-dd hh:mm:ss')
        },
        allEcharts(){
          this.yjFun();
          this.zdFun();
          this.czFun();
          this.ajFun();
          this.lzFun();
          this.zgFun();
          this.jtFun();
          this.mapFun(this.maptype);
          window.addEventListener("resize", () => {
            this.ajCharts.resize();
            this.lzCharts.resize();
            this.zgCharts.resize();
            this.jtCharts.resize();
          });
        },
        scroll(){
           this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
          if(this.zddata.length>0){
           setTimeout(()=>{
              //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                   this.zddata.push(this.zddata[0]);  // 将数组的第一个元素添加到数组的
                   this.zddata.shift();               //删除数组的第一个元素
                   this.animate=false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
           },0)
         }
        },
        scrollt(){
           this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
           if(this.sgdata.length>0){
           setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多

                   this.sgdata.push(this.sgdata[0]);  // 将数组的第一个元素添加到数组的
                   this.sgdata.shift();               //删除数组的第一个元素
                   this.animate=false;
                 // margin-top 为0 的时候取消过渡动画，实现无缝滚动
           },0)
           }
        },
        //预警提示滚动
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

      //预警提示接口
      yjFun(){
          this.$api.post(this.Global.aport+'/home/getWaringData',{},
           r =>{
             this.yjList = r.data
           })
        },

        //重点国家
      zdFun(){
          this.$api.post(this.Global.aport+'/home/getCzzdryData',{},
           r =>{
             if(r.success){
               this.zddata = r.data.SK;
               this.sgdata = r.data.FK;
             }
           })
        },

      getpdjh(){
        this.$api.get(this.Global.aport3+'/pdjh/getCenterNumToday', null,
          r => {
            this.pdjhdata=r;
          })
      },
      sbEnter(){
        // console.log('enter')
        // this.animate=false;
        clearInterval(this.timer);
        this.timer=null;
      },
      sbleave(){
        // console.log('leave')
        // this.animate=true;
        this.timer=setInterval(this.scrollYj,2000);
      },

      mapFun(val){
        let p={
          year:this.year,
          month:this.month,
          day:this.date,
          type:val
        }
        this.$api.post(this.Global.aport+'/home/getCenterData',p,
         r =>{
           if(r.success){

            this.drawLine1(r.data.series,r.data.legend,r.data.name);
                  this.drawLineline();
               var arr=r.data.series;
                for (var i = 0; i < arr.length; i++) {
                  var gg=this.getGrid(i);
                  this.drawLine(arr[i],gg,'home_map'+(i+1),r.data.series[i]['lzvalue'],r.data.series[i]['czvalue']);
                }
           }
         })
      },
      drawLineline(){
        this.mapLine= echarts.init(document.getElementById('home_line'));

        let _this = this
        _this.mapLine.setOption({
                xAxis: {
                  splitLine:{
  　　　                 　show:false
  　　              },
                  axisLabel: {
                          show: false
                    },
                  show: false
              },
                yAxis: {
                  splitLine:{
  　　　                 　show:false
  　　              },
                  axisLabel: {
                          show: false
                    },
                  show: false
                },
                series: [{ //江北新区
                    data: [[17,90], [4, 107]],
                    type: 'line',
                    itemStyle:{
            						normal:{
            							show:true,
            							color:'#05DDF2'
            						}
					           },
                     symbolSize: 7,
                     symbol: 'image://static/cyc.png',
                },
                {//栖霞区
                    data: [[21, 86], [32, 117], [36, 117]],
                    type: 'line',
                    itemStyle:{
            						normal:{
            							show:true,
            							color:'#05DDF2'
            						}
					           },
                     symbolSize: 7,
                     symbol: 'image://static/cyc.png',
                },
                {//鼓楼区
                    data: [[19, 77], [5, 87],[0, 87]],
                    type: 'line',
                    itemStyle:{
                        normal:{
                          show:true,
                          color:'#05DDF2'
                        }
                     },
                     symbolSize: 7,
                     symbol: 'image://static/cyc.png',
                },
                {//玄武区
                    data: [[25, 81], [35, 92], [40, 93]],
                    type: 'line',
                    itemStyle:{
                        normal:{
                          show:true,
                          color:'#05DDF2'
                        }
                     },
                     symbolSize: 7,
                     symbol: 'image://static/cyc.png',
                },
                {//秦淮区
                    data: [[23,73],[40, 74]],
                    type: 'line',
                    itemStyle:{
                        normal:{
                          show:true,
                          color:'#05DDF2'
                        }
                     },
                     symbolSize: 7,
                     symbol: 'image://static/cyc.png',
                },
                {//建邺区
                    data: [[18, 64], [32, 51], [36, 51]],
                    type: 'line',
                    itemStyle:{
                        normal:{
                          show:true,
                          color:'#05DDF2'
                        }
                     },
                     symbolSize: 7,
                     symbol: 'image://static/cyc.png',
                },
                {//雨花台区
                    data: [[13, 55.5],[8, 38],[4, 38]],
                    type: 'line',
                    itemStyle:{
                        normal:{
                          show:true,
                          color:'#05DDF2',
                          borderColor:'#277cdc'
                        }
                     },
                    // symbol: 'emptyCircle',
                    // smooth: true,
                    symbolSize: 7,
                    symbol: 'image://static/cyc.png',


                }
              ]
          },true)
      },
      drawLine1(data,legend,name){
        this.mapCenter = echarts.init(document.getElementById('home_map'));
        var shadowColor='';

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

                      return "#0D1D44";
                    },

                },
              },
              label: {
                  normal: {
                      show: true,
                      color:'#fff',
                      formatter: function(v) {
                          return v.value[2];
                      },
                      fontSize: 14,
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
                        return "#0D1D44";
                      },

                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 14,
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
                          return "#0D1D44";
                        },

                    },
                  },
                  label: {
                      normal: {
                          show: true,
                          color:'#fff',
                          formatter: function(v) {
                              return v.value[2];
                          },
                          fontSize: 14,
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
                          return "#0D1D44";
                          },

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
                            fontSize: 14,
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
                      return "#0D1D44";
                    },

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
                      fontSize: 14,
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
                        return "#0D1D44";
                      },
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
                        fontSize: 14,
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
                        return "#0D1D44";
                      },

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
                        fontSize: 14,
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
                         return "#0D1D44";
                      },

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
                        fontSize: 14,
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
                         return "#0D1D44";
                      },

                  },
                },
                label: {
                    normal: {
                        show: true,
                        color:'#fff',
                        formatter: function(v) {
                            return v.value[2];
                        },
                        fontSize: 14,
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
                         return "#0D1D44";
                      },

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
                        fontSize: 14,
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }
                },
            },
            {//秦淮
                name:name['qihuai'],
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
                        return "#0D1D44";
                      },

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
                        fontSize: 14,
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
                        return "#0D1D44";
                      },

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
                        fontSize: 14,
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

      },
      getGrid(i){
        // console.log(i);
        var gg=
        {
          left: '47%',
          right: '44%',
          bottom: '82%',
          top:'12%',
          containLabel: true
        }//六合区
        switch (i) {
          case 1://江北新区
          gg=
          {
            left: '10%',
            right: '78%',
            bottom: '79%',
            top:'15%',
            containLabel: true
          }
          break;
          case 2://栖霞区
          gg=
          {
            left: '74%',
            right: '14%',
            bottom: '86%',
            top:'8%',
            containLabel: true
          }
          break;
          case 3://玄武区
          gg=
          {
            left: '79%',
            right: '9%',
            bottom: '70%',
            top:'24%',
            containLabel: true
          }
          break;
          case 4://秦淮区
          gg=
          {
            left: '80%',
            right: '8%',
            bottom: '56%',
            top:'38%',
            containLabel: true
          }
          break;
          case 5://鼓楼区
          gg=
          {
            left: '5%',
            right: '83%',
            bottom: '66%',
            top:'28%',
            containLabel: true
          }
          break;
          case 6://浦口区
          gg=
          {
            left: '27%',
            right: '66%',
            bottom: '54%',
            top:'40%',
            containLabel: true
          }
          break;
          case 7://建邺区
          gg=
          {
            left: '74%',
            right: '14%',
            bottom: '40%',
            top:'54%',
            containLabel: true
          }
          break;
          case 8://雨花台区
          gg=
          {
            left: '10%',
            right: '78%',
            bottom: '32%',
            top:'62%',
            containLabel: true
          }
          break;
          case 9://江宁区
          gg=
          {
            left: '43%',
            right: '50%',
            bottom: '40%',
            top:'54%',
            containLabel: true
          }
          break;
          case 10://溧水区
          gg=
          {
            left: '58%',
            right: '33%',
            bottom: '26%',
            top:'68%',
            containLabel: true
          }
          break;
          case 11://高淳区
          gg=
          {
            left: '58%',
            right: '33%',
            bottom: '6%',
            top:'88%',
            containLabel: true
          }
          break;
          default:

        }

        return gg;
      },

      drawLine(data,grid,name,lzdata,czdata){
        // console.log(grid);
        this.mapCenter = echarts.init(document.getElementById(name));
        var shadowColor='';
        let _this = this;
        _this.mapCenter.setOption({
          xAxis: {
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
            },

           },
           grid:grid,
           yAxis: {
             type: 'category',
             data: ['常住','临住'],
             axisLine:{
                 lineStyle:{
                     color:'#01DEEC',
                     width:0,
                     fontSize:11
                 }
             },
             splitLine: { //网格线
               show: false
             },
             axisTick:{//去掉坐标刻度线
               show:false,
             },


           }
         ,
           series: [
             {

              type: 'bar',
              barWidth:8,
              // barGap:'1%',/*多个并排柱子设置柱子之间的间距*/
              barCategoryGap:-1,/*多个并排柱子设置柱子之间的间距*/
              data: [

                {
                    name:'常住',
                    type:'bar',
                    // barGap:'1%',/*多个并排柱子设置柱子之间的间距*/
                    // barCategoryGap:'1%',/*多个并排柱子设置柱子之间的间距*/
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
                      position: 'right', //在上方显示
                      fontSize:12
                    },
                    value:czdata
                },
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
                      position: 'right', //在上方显示
                      fontSize:12,
                    },
                    value:lzdata,
                },
              ],
           },
         ]
        },true)


      },

      //常住人员身份分析
      czFun(){
        this.$api.post(this.Global.aport+'/home/getCzsfdata',{},
         r =>{
           if(r.success){
             this.czList = r.data;
           }
         })
      },
      //案件6个月变化量
      ajFun(){

        this.$api.post(this.Global.aport+'/home/getaj12data',{},
         r =>{

           if(r.success){
             // console.log(r.data.series['非法就业'])
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
              y:_this.ajyjl,
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
            y:40,

            // containLabel: true
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
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
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
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
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
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
                  itemStyle:{
                    normal:{
                      color:'#D48265'
                    }
                  },

                  data: series['非法入境']
              },
              {
                  name: '其它',
                  type: 'bar',
                  stack: '总量',
                  barGap:'90%', // 控制柱子的间隔
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
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
      //临住6个月变化量
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
      //中管6个月办理量
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
      //居留、停留6个月签发量
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
  },
}
</script>
