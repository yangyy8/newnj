<template lang="html">
  <div class="bgleft">
    <div class="border-content">
      <img src="../assets/img/zg/borderL.png" class="borderL" alt="">
      <div class="con-con">
        <div class="">
          <div class="zgtitle">
            <img class="t-tip" src="../assets/img/zg/titleL.png" alt="">
            <span class="sim-title text-shadow">近6个月内地居民受理情况统计</span>
            <img class="t-tip" src="../assets/img/zg/titleR.png" alt="">
          </div>
          <div class="classify">
              <ul class="classify-ul">
                <li>
                  <span class="text-shadow">护照</span>
                  <p>{{cdt.hz}}</p>
                </li>
                <li>
                  <span class="text-shadow">港澳证</span>
                  <p>{{cdt.gaz}}</p>
                </li>
                <li>
                  <span class="text-shadow">大陆证</span>
                  <p>{{cdt.dlz}}</p>
                </li>
                <div style="clear:both"></div>
              </ul>
          </div>
          <div class = "zgchart1" style="width:100%">
            <div id = "jmecharts" style = "width: 100%;height:300px"></div>
          </div>
        </div>
        <div class="t-mtt">
          <div class="zgtitle">
            <img class="t-tip" src="../assets/img/zg/titleL.png" alt="">
            <span class="sim-title text-shadow">13区分局近一周申请总量</span>
            <img class="t-tip" src="../assets/img/zg/titleR.png" alt="">
          </div>
          <div class = "fjchart1" style="width:100%">
            <div id = "fjecharts" style = "width: 100%;height:300px"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data(){
    return{
      jmCharts:null,
      fjCharts:null,
      cdt:{
        hz:0,
        gaz:0,
        dlz:0,
      },
    }
  },
  mounted(){
    this.allEcharts();
  },
  methods:{
    allEcharts(){
      // this.drawJmChart();
      this.JmFun();
      this.FjFun();
      // this.drawFjChart();
      window.addEventListener("resize", () => {
        this.jmCharts.resize();
        this.fjCharts.resize();
      });
    },
    JmFun(){
      let url = this.Global.aport10+'/home/getCnsq6M';
      // let url = 'http://192.168.3.217:9433/home/getCnsq6M'
      this.$api.post(url,{},
       r =>{
          this.cdt.hz=r.data['护照'];
          this.cdt.gaz=r.data['港澳证'];
          this.cdt.dlz=r.data['大陆证'];
          this.drawJmChart(r.data.xAxis,r.data.series)
       })
    },
    drawJmChart(xdata,series){
      this.jmCharts = echarts.init(document.getElementById('jmecharts'));
      let _this = this;
      _this.jmCharts.setOption({
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
           y:30,
         },
         xAxis: {
             type: 'category',
             boundaryGap: true,
             axisPointer: {
                 type: 'none'
             },
             axisLine:{
                 lineStyle:{
                     color:'#1187A9',
                     width:2
                 }
             },
             axisLabel: {
               interval:0, //强制显示文字
               textStyle:{
                 color:'#F3F4F5',  //坐标的字体颜色
                 fontSize:16
               },
             },
             data: xdata
         },
         yAxis: {
             type: 'value',
             axisLine:{
                 lineStyle:{
                     color:'#1187A9',
                     width:3
                 },
             },
             axisLabel: {
               textStyle:{
                 color:'#8897A6',  //坐标的字体颜色
                 fontSize:16
               },
             },
             splitLine:{
               lineStyle:{
                 color:'#174071'
               }
             }
         },
         series: [
             {
                 name: '护照',
                 type: 'line',
                 symbolSize:10,
                 symbol: 'circle',     //设定为实心点
                 label:{
                   show:true,
                   fontSize:16,
                 },
                 itemStyle:{
                   normal:{
                     color:'#0089fe',
                     lineStyle:{
                         width:3,
                         color:'#0089fe',
                         type:'solid'  //'dotted'虚线 'solid'实线
                     }
                   }
                 },
                 areaStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(0,137,254,0.5)'
                      }, {
                          offset: 1,
                          color: 'rgba(0,137,254,0.1)'
                      }])
                  },
                 data: series['护照']
             },
             {
                 name: '港澳证',
                 type: 'line',
                 symbolSize:10,
                 symbol: 'circle',     //设定为实心点
                 label:{
                   show:true,
                   fontSize:16,
                 },
                 itemStyle:{
                   normal:{
                     color:'#78fffc',
                     lineStyle:{
                         width:3,
                         color:'#78fffc',
                         type:'solid'  //'dotted'虚线 'solid'实线
                     },
                    shadowColor:'78fffc'
                   }
                 },
                 areaStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(121,255,253,0.5)'
                      }, {
                          offset: 1,
                          color: 'rgba(121,255,253,0.1)'
                      }])
                  },
                 data: series['港澳证']
             },
             {
                 name: '大陆证',
                 type: 'line',
                 symbolSize:10,
                 symbol: 'circle',     //设定为实心点
                 label:{
                   show:true,
                   fontSize:16,
                 },
                 itemStyle:{
                   shadowColor: 'rgba(246,79,73)',
                   shadowBlur: 50,
                   shadowOffsetX:20,
                   shadowOffsetY:20,
                   normal:{
                     color:'#f15150',
                     lineStyle:{
                         width:3,
                         color:'#f15150',
                         type:'solid'  //'dotted'虚线 'solid'实线
                     },
                   },

                 },
                 areaStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(246,79,73,0.5)'
                      }, {
                          offset: 1,
                          color: 'rgba(246,79,73,0.1)'
                      }])
                  },
                 data: series['大陆证']
             },
         ]
            })
    },
    FjFun(){
      let url = this.Global.aport10+'/home/getCnsqGroupByDw';
      // let url = 'http://192.168.3.217:9433/home/getCnsqGroupByDw'
      this.$api.post(url,{},
       r =>{
          this.drawFjChart(r.data.xAxis,r.data.series)
       })
    },
    drawFjChart(xdata,series){
      this.fjCharts = echarts.init(document.getElementById('fjecharts'));
      let _this = this;
      _this.fjCharts.setOption({
        tooltip: {
            formatter:function(){},
            trigger: 'axis',
            axisPointer: {
                type: 'none',
                crossStyle: {
                    color: '#999'
                }
            }
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
                        width:2
                    }
                },
                axisLabel: {
                  interval:0, //强制显示文字
             			textStyle:{
             				color:'#F3F4F5',  //坐标的字体颜色
                    fontSize:16
             			},
             		},
            }
        ],
        yAxis: [
            {
              type: 'value',
              axisLine:{
                  lineStyle:{
                      color:'#1187A9',
                      width:3
                  }
              },
              axisLabel: {
           			textStyle:{
           				color:'#8897A6',  //坐标的字体颜色
                  fontSize:16
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
                barWidth:20,
                data:series['护照']
            },
            {
                name:'港澳证',
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
                       color: '#24d4f6'
                     }, {
                       offset: 1,
                       color: '#8358e1'
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
                barWidth:20,
                data:series['港澳证']
            },
            {
                name:'大陆证',
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
                       color: '#334FF8'
                     }, {
                       offset: 1,
                       color: '#6A55E8'
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
                barWidth:20,
                data:series['大陆证']
            },
        ]
      })
    },

  }
}
</script>

<style lang="css" scoped>
</style>
