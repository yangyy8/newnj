<template lang="html">
  <div class="bgright">
    <div class="border-content">
      <img src="../assets/img/zg/borderR.png" class="borderL" alt="">
      <div class="r-con-con">
        <div class="rr-child">
          <div class="topLeft">
            <div class="tl-title sim-title text-shadow">
              调控地区近一年受理总量统计
            </div>
            <div class = "tkchart1" style="width:100%">
              <div id = "tkecharts" style = "width: 100%;height:500px"></div>
            </div>
          </div>
          <div class="topRight">
            <div class="tl-title sim-title text-shadow">
              重点人员办理情况统计
            </div>
            <div class="tr-con">
              <div class="tr-conOne">
                <div class="tl-title sim-title text-shadow" style="font-size:30px">
                  涉恐人员数量
                </div>
                <div class = "skchart1" style="width:100%;margin-top: 45px;">
                  <div id = "skecharts" style = "width: 100%;height:350px"></div>
                </div>
              </div>
              <div class="tr-conTwo">
                <div class="tl-title sim-title text-shadow" style="font-size:30px">
                  不准出境人员数量
                </div>
                <div class = "bzcjchart1" style="width:100%;margin-top: 45px;">
                  <div id = "buzcjecharts" style = "width: 100%;height:350px"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="zgtitle t-mtt">
            <img src="../assets/img/zg/titleL.png" alt="">
            <span class="sim-title text-shadow">重点关注地区近一年受理总量</span>
            <img src="../assets/img/zg/titleR.png" alt="">
          </div>
          <div class = "zdgzchart1" style="width:100%">
            <div id = "zdgzecharts" style = "width: 100%;height:500px"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import imgUrl from '../assets/img/zg/img.png'
export default {
  data(){
    return{
      tkecharts:null,
      zdgzecharts:null,
      skecharts:null,
      buzcjecharts:null,
      imgUrl:imgUrl,
    }
  },
  mounted(){
    this.allEcharts();
  },
  methods:{
    allEcharts(){
      // this.drawTkChart();
      this.TkFun();
      this.ZdryFun();
      this.ZdgzFun();
      // this.drawZdgzChart();
      // this.drawSkCharts();
      // this.drawBucjCharts();
      window.addEventListener("resize", () => {
        this.tkecharts.resize();
        this.zdgzecharts.resize();
        this.skecharts.resize();
        this.buzcjecharts.resize();
      });
    },
    ZdgzFun(){
      let url = this.Global.aport10+'/home/getCnsqInImportanPart';
      // let url = 'http://192.168.3.217:9433/home/getCnsqInImportanPart'
      this.$api.post(url,{},
       r =>{
          this.drawZdgzChart(r.data.xAxis,r.data.series)
       })
    },
    drawZdgzChart(xdata,series){
      this.zdgzecharts = echarts.init(document.getElementById('zdgzecharts'));
      let _this = this;
      _this.zdgzecharts.setOption({
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
          x:130,
          y:40,
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
                        color:'#1187A9',
                        width:0
                    }
                },
                axisLabel: {
                  interval:0, //强制显示文字
             			textStyle:{
             				color:'#F3F4F5',  //坐标的字体颜色
                    fontSize:18,
             			},
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
           			textStyle:{
           				color:'#F3F4F5',  //坐标的字体颜色
                  fontSize:16,
           			},
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
                name:'护照',
                type:'bar',
                stack: '广告',
                itemStyle:{
                  normal:{
                    label: {
                      // show: true, //开启显示
                      // position: 'top', //在上方显示
                      textStyle: { //数值样式
                        color: '#fff',
                        fontSize: 12
                      }
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                       offset: 0,
                       color: '#04fcff'
                     }, {
                       offset: 1,
                       color: '#04fcff'
                     }])
                  },
                  // emphasis:{
                  //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  //      offset: 0,
                  //      color: '#D6CD5B'
                  //    }, {
                  //      offset: 1,
                  //      color: '#C1966B'
                  //    }])
                  // },
                },
                barWidth:40,
                data:series['护照']
            },
            {
                name:'港澳证',
                type:'bar',
                stack: '广告',
                itemStyle:{
                  normal:{
                    label: {
                      // show: true, //开启显示
                      // position: 'top', //在上方显示
                      textStyle: { //数值样式
                        color: '#fff',
                        fontSize: 12
                      }
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                       offset: 0,
                       color: '#a77cfd'
                     }, {
                       offset: 1,
                       color: '#a77cfd'
                     }])
                  },
                  // emphasis:{
                  //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  //      offset: 0,
                  //      color: '#D5C95D'
                  //    }, {
                  //      offset: 1,
                  //      color: '#C39E69'
                  //    }])
                  // },
                },
                barWidth:40,
                data:series['港澳证']
            },
            {
                name:'大陆证',
                type:'bar',
                stack: '广告',
                itemStyle:{
                  normal:{
                    label: {
                      // show: true, //开启显示
                      // position: 'top', //在上方显示
                      textStyle: { //数值样式
                        color: '#fff',
                        fontSize: 12
                      }
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                       offset: 0,
                       color: '#3472fe'
                     }, {
                       offset: 1,
                       color: '#3472fe'
                     }])
                  },
                  // emphasis:{
                  //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  //      offset: 0,
                  //      color: '#D5C95D'
                  //    }, {
                  //      offset: 1,
                  //      color: '#C39E69'
                  //    }])
                  // },
                },
                barWidth:40,
                data:series['大陆证']
            },
        ]
      })
    },
    TkFun(){
      let url = this.Global.aport10+'/home/getCnsqInTKPart';
      // let url = 'http://192.168.3.217:9433/home/getCnsqInTKPart'
      this.$api.post(url,{},
       r =>{
          this.drawTkChart(r.data)
       })
    },
    drawTkChart(series){
      this.tkecharts = echarts.init(document.getElementById('tkecharts'));
      let _this = this;
      _this.tkecharts.setOption({
        tooltip: {
            trigger: 'item',
            // formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            textStyle:{
              color:'#fff',
              fontSize:16,
            },
            x:'left',
            itemGap:30,
            padding:[30,10,10,200],
            data: ['护照', '港澳证', '大陆证']
        },
        graphic: [
            {
                type: 'image',
                left: '26.5%',
                top: '18%',
                bounding: 'all',
                style: {
                    image: _this.imgUrl,
                    width: 350,
                }
            }
        ],
        title:{
          text:"总量",
          subtext:series['total'],
          left:'50%',
          top:'45%',
          textStyle:{
            fontSize: 30,
            color:'#fff',
            align:'center',
            textShadowColor:'#7df9ff',
            textShadowBlur:35,
          },
          subtextStyle:{
              fontFamily : "微软雅黑",
              fontSize: 48,
              color:'#fff',
              align:'center',
              textShadowColor:'#7df9ff',
              textShadowBlur:48,
          }
        },
        series: [
            {
                name: '访问来源',
                avoidLabelOverlap: false,
                type: 'pie',
                radius: ['45%', '60%'],
                center: ["55%", "53%"], 　
                data: [
                    {
                      value: series['护照'],
                      name: '护照',
                      label:{
                        color:'#47E5FD',
                        fontSize:20,
                        formatter:'{c}\n{b}'
                      },
                      itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#3a8afc'
                         }, {
                           offset: 1,
                           color: '#3ed0fe'
                         }])
                      },
                      labelLine:{
                         length:30,
                          lineStyle:{
                            width:2,
                          },
                      },
                    },
                    {
                      value: series['港澳证'],
                      name: '港澳证',
                      label:{
                        color:'#A77CFD',
                        fontSize:20,
                        formatter:'{c}\n{b}',
                        align: 'right',
                      },
                      itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#5d59fb'
                         }, {
                           offset: 1,
                           color: '#9573fb'
                         }])
                      },
                      labelLine:{
                         length:30,
                          lineStyle:{
                            width:2,
                          },
                      },
                    },
                    {
                          value: series['大陆证'],
                          name: '大陆证',
                          label:{
                            color:'#fff',
                            fontSize:20,
                            formatter:'{c}\n{b}'
                          },
                          itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                               offset: 0,
                               color: '#fff'
                             }, {
                               offset: 1,
                               color: '#fff'
                             }])
                          },
                          labelLine:{
                             length:30,
                              lineStyle:{
                                width:2,
                              },
                          },
                         },
                ]
            }
        ]
      })
    },
    ZdryFun(){
      let url = this.Global.aport10+'/home/getCnsqOfImportantPerson';
      // let url = 'http://192.168.3.217:9433/home/getCnsqOfImportantPerson'
      this.$api.post(url,{},
       r =>{
          this.drawSkCharts(r.data['涉恐人员数量']);
          this.drawBucjCharts(r.data['不准出境人员数量']);
       })
    },
    drawSkCharts(series){
      this.skecharts = echarts.init(document.getElementById('skecharts'));
      let _this = this;
      _this.skecharts.setOption({
        tooltip: {
            trigger: 'item',
            formatter:function(){},
        },
        // legend: {
        //     textStyle:{
        //       color:'#fff',
        //       fontSize:16,
        //     },
        //     x:'left',
        //     itemGap:30,
        //     padding:[30,10,10,100],
        //     data: ['护照', '港澳证', '大陆证']
        // },
        title:{
          text:"总量",
          subtext:series['total'],
          left:'center',
          top:'35%',
          textStyle:{
            fontSize: 30,
            color:'#fff',
            align:'center',
            textShadowColor:'#7df9ff',
            textShadowBlur:35,
          },
          subtextStyle:{
              fontFamily : "微软雅黑",
              fontSize: 44,
              color:'#fff',
          }
        },
        series: [
            {
                name: '访问来源',
                avoidLabelOverlap: false,
                type: 'pie',
                radius: ['50%', '60%'],
                data: [{
                      value: series['护照'],
                      name: '护照',
                      label:{
                        color:'#fff',
                        fontSize:20,
                        formatter:'{c}\n{b}'
                      },
                      itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#4297FC'
                         }, {
                           offset: 0.5,
                           color: '#5D7CFB'
                         },{
                           offset: 1,
                           color: '#7171FA'
                         }])
                      },
                      labelLine:{
                         length:30,
                          lineStyle:{
                            width:2,
                            color:'#fff',
                          },
                      },
                     },
                    {
                      value: series['港澳证'],
                      name: '港澳证',
                      label:{
                        color:'#fff',
                        fontSize:20,
                        formatter:'{c}\n{b}'
                      },
                      itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#22686D'
                         }, {
                           offset: 1,
                           color: '#22686D'
                         }])
                      },
                      labelLine:{
                         length:30,
                          lineStyle:{
                            width:2,
                            color:'#fff',
                          },
                      },
                    },
                    {
                      value: series['大陆证'],
                      name: '大陆证',
                      label:{
                        color:'#fff',
                        fontSize:20,
                        formatter:'{c}\n{b}',
                        align: 'right',
                      },
                      itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#4297FC'
                         },
                         {
                           offset: 0.3,
                           color: '#40DBFB'
                         },
                         {
                           offset: 1,
                           color: '#1DFDEE'
                         }])
                      },
                      labelLine:{
                         length:30,
                         lineStyle:{
                           width:2,
                           color:'#fff',
                         },
                      },
                    },
                ]
            }
        ]
      })
    },
    drawBucjCharts(series){
      this.buzcjecharts = echarts.init(document.getElementById('buzcjecharts'));
      let _this = this;
      _this.buzcjecharts.setOption({
        tooltip: {
            trigger: 'item',
            formatter:function(){},
        },
        // legend: {
        //     textStyle:{
        //       color:'#fff',
        //       fontSize:16,
        //     },
        //     x:'left',
        //     itemGap:30,
        //     padding:[30,10,10,100],
        //     data: ['护照', '港澳证', '大陆证']
        // },
        title:{
          text:"总量",
          subtext:series['total'],
          left:'center',
          top:'35%',
          textStyle:{
            fontSize: 30,
            color:'#fff',
            align:'center',
            textShadowColor:'#7df9ff',
            textShadowBlur:35,
          },
          subtextStyle:{
              fontFamily : "微软雅黑",
              fontSize: 44,
              color:'#fff',
          }
        },
        series: [
            {
                name: '访问来源',
                avoidLabelOverlap: false,
                type: 'pie',
                radius: ['50%', '60%'],
                data: [{
                      value: series['护照'],
                      name: '护照',
                      label:{
                        color:'#fff',
                        fontSize:20,
                        formatter:'{c}\n{b}'
                      },
                      itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#4297FC'
                         }, {
                           offset: 0.5,
                           color: '#5D7CFB'
                         },{
                           offset: 1,
                           color: '#7171FA'
                         }])
                      },
                      labelLine:{
                         length:30,
                          lineStyle:{
                            width:2,
                            color:'#fff',
                          },
                      },
                     },
                    {
                      value: series['港澳证'],
                      name: '港澳证',
                      label:{
                        color:'#fff',
                        fontSize:20,
                        formatter:'{c}\n{b}'
                      },
                      itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#22686D'
                         }, {
                           offset: 1,
                           color: '#22686D'
                         }])
                      },
                      labelLine:{
                         length:30,
                          lineStyle:{
                            width:2,
                            color:'#fff',
                          },
                      },
                    },
                    {
                      value: series['大陆证'],
                      name: '大陆证',
                      label:{
                        color:'#fff',
                        fontSize:20,
                        formatter:'{c}\n{b}',
                        align: 'right',
                      },
                      itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#4297FC'
                         },
                         {
                           offset: 0.3,
                           color: '#40DBFB'
                         },
                         {
                           offset: 1,
                           color: '#1DFDEE'
                         }])
                      },
                      labelLine:{
                         length:30,
                         lineStyle:{
                           width:2,
                           color:'#fff',
                         },
                      },
                    },
                ]
            }
        ]
      })
    },
  }
}
</script>

<style lang="css" scoped>
</style>
