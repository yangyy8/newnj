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
                <div id = "ajecharts" style = "width: 100%"></div>
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
             <li  v-for="(item,index) in yjList" @click="$router.push({name:item.url})" class="hand" style="float:left;width:33%;">● {{item.mc}}<span class="cred tt-pad">{{item.num}}</span>条</li>
          </ul>
        </div>
        <div class="content">

          <img src="../assets/img/sg/map2.png" />
          <div id="home_map" style="width: 377px; height: 685px; position: absolute; top: 10%;left:39%;"></div>

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
             <div id = "lzecharts" style = "width: 100%"></div>
           </div>
        </div>
        <div class="bgline2" style="height:296px;margin-top:14px;">
           <div class="title gradient-text-one">
             中管6个月办理量
           </div>
           <div class = "chart" style="width:100%">
             <div id = "zgecharts" style = "width: 100%;"></div>
           </div>
        </div>
        <div class="bgline21" style="height:255px;margin-top:14px;">
           <div class="title gradient-text-one">
             居留、停留6个月签发量
           </div>
           <div class = "chart" style="width:100%">
             <div id = "jtecharts" style = "width: 100%;"></div>
           </div>
        </div>
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
    }
  },
  mounted() {
    var ss=[];
    ss.push({dm:1,mc:'六合区',value:123});
    ss.push({dm:2,mc:'江宁区',value:123});
    ss.push({dm:3,mc:'栖霞区',value:123});
    this.drawLine(ss,null);
    this.getpdjh();
    setInterval(this.realTimeFun,100);
    setInterval(this.scrollYj,2000);
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
          window.addEventListener("resize", () => {
            this.ajCharts.resize();
            this.lzCharts.resize();
            this.zgCharts.resize();
            this.jtCharts.resize();
          });
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
      drawLine(data,level){
        if (this.mapCenter != null) {
            this.mapCenter.clear();
        }
        //x, y, 名称， 数值， symbolSize
        var seriesData = [
            [13, 27, '六合区', 12, 40],
            [11, 13, '江宁区', 10, 40],
            [3, 18, '浦口区', 10, 40],
            [18, 7, '溧水区', 10, 40],
            [15, 1, '高淳区', 10, 40],
            [11, 22, '栖霞区', 10, 30],
            [7, 16, '雨花台区', 10, 20],
            [10, 20, '鼓楼区', 10, 20],
            [13, 21, '玄武区', 10, 25],
            [8.5, 18, '建邺区', 10, 20],
            [11.5, 19, '秦淮区', 10, 20],
            [9, 23, '江北新区', 10, 20]
        ];

        for (var i =0; i < seriesData.length; i++) {
            for (var j =0; j< data.length; j++) {

                if (seriesData[i][2] == data[j].mc) {
                    seriesData[i][3] = data[j].value;
                    seriesData[i][6] = data[j].dm;
                }
            }
        }
        //玄武区、秦淮区、鼓楼区、建邺区、栖霞区、雨花台区、浦口区、江宁区、六合区、溧水区、高淳区
        var option = {
            //backgroundColor: '#404a59',
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
                formatter: function (params, ticket, callback) {
                  console.log(params);
                    var html = "<div style='border-bottom: 1px dotted #666'>" + params.value[2] + "统计情况</div>";
                    html+= "<div style='text-align: left'>总人数：" + params.value[3] + "</div>";
                    return html;
                }
            },
            series: [{
                data: seriesData,
                symbolSize: function (v) {
                    return v[4];
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke'
                },
                itemStyle: {
                    normal: {

                        color:'#f36334',
                        shadowBlur: 20,
                        shadowColor: '#333'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        //position: app.config.position,
                        //distance: app.config.distance,
                        //align: app.config.align,
                        //verticalAlign: app.config.verticalAlign,
                        //rotate: app.config.rotate,
                        //formatter: '{c}  {name|{a}}',
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
            }]
        };
        this.mapCenter = echarts.init(document.getElementById('home_map'));
        this.mapCenter.setOption(option);
        this.allEcharts();

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
