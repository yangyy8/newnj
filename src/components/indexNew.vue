<template lang="html">
  <div class="t-screen">
    <div class="banner"></div>
    <div class="time">
      2019-09-25 11:50
    </div>
    <div class="main">
    <el-row :gutter="3">
      <el-col :span="6"  style="">
           <div class="bgline1" style="height:296px">
              <div class="title gradient-text-one">
                案件12个月变化量
              </div>
              <div class = "chart" style="width:100%">
                <div id = "ajecharts" style = "width: 100%;height:295px"></div>
              </div>
           </div>
           <div class="bgline1" style="height:296px;margin-top:14px;">
              <div class="title gradient-text-one">
                常住人员身份分析
              </div>
              <div class="tb1">
                   <ul class="huan">
                      <li class="color1">90.0%  高校留学生  (30010)</li>
                      <li class="color2">42.2%  亲属  (11214)</li>
                      <li class="color3">25.5%  文教专家  (8689)</li>
                      <li class="color4">9.0%  企业工作人员  (2250)</li>
                      <li class="color5">1.0%  其他  (265)</li>
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
                      <li v-for="(item,index) in data" class="tabC-li" :class="{'color-shu':(index+1)%2==0,'color-dan':(index+1)%2!=0}">
                        <span class="tabC-sl">{{item.gj}}</span>
                        <span class="tabC-sr">{{item.count}}</span>
                      </li>
                    </ul>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="tabRight">
                    <p class="tabTitle">反恐“防回流”10国人质</p>
                    <ul class="tabContent" :class="{anim:animate==true}">
                      <li v-for="(item,index) in data1" class="tabC-li" :class="[(index+1)%2==0?'color-shu':'color-dan']">
                        <span class="tabC-sl">{{item.gj}}</span>
                        <span class="tabC-sr">{{item.count}}</span>
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
          <ul class="show-yj">
             <li>布控预警 <span class="cred">50</span> 条</li>
             <li>临住核查 <span class="cred">50</span> 条</li>
             <li>违临预判预警 <span class="cred">50</span> 条</li>
             <li>布控预警 <span class="cred">50</span> 条</li>
             <li>临住核查 <span class="cred">50</span> 条</li>
             <li>违临预判预警 <span class="cred">50</span> 条</li>
             <li>持短期签证非法就业 <span class="cred">50</span> 条</li>
             <div style="clear:both;"></div>
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
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>
                 <li style="width:10%;float:left;">
                   <div>江宁区</div>
                   <div class="mt4"><span class="sz">5</span><span class="sz ml4">0</span><span class="sz ml4">0</span><span class="ci">次</span></div>
                   <img src="../assets/img/sg/wd_1.png" width="48">
                 </li>

              </ul>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bgline2" style="height:296px">
           <div class="title gradient-text-one">
             临住12个月变化量
           </div>
           <div class = "chart" style="width:100%">
             <div id = "lzecharts" style = "width: 100%;height:290px"></div>
           </div>
        </div>
        <div class="bgline2" style="height:296px;margin-top:14px;">
           <div class="title gradient-text-one">
             中管12个月办理量
           </div>
           <div class = "chart" style="width:100%">
             <div id = "zgecharts" style = "width: 100%;height:290px"></div>
           </div>
        </div>
        <div class="bgline21" style="height:255px;margin-top:14px;">
           <div class="title gradient-text-one">
             居留、停留12个月签发量
           </div>
           <div class = "chart" style="width:100%">
             <div id = "jtecharts" style = "width: 100%;height:250px"></div>
           </div>
        </div>
      </el-col>
    </el-row>
    </div>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
import '../assets/js/jquery-3.4.1.min.js'
import '../assets/js/scroll.js'
export default {
  data() {
    return {
      mapCenter:null,
      ajCharts:null,
      lzCharts:null,
      zgCharts:null,
      jtCharts:null,
      animate:false,
      num:0,
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
    }
  },
  mounted() {
    var ss=[];
    ss.push({dm:1,mc:'六合区',value:123});
    ss.push({dm:2,mc:'江宁区',value:123});
    ss.push({dm:3,mc:'栖霞区',value:123});
    this.drawLine(ss,null);
    this.allEcharts();
    console.log('===',$)
  },
  activated(){


  },
  created(){
      setInterval(this.scroll,2000);
      setInterval(this.scrollt,2000);
      this.scrollYj();
  },
  methods:{
      scroll(){
         this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
         setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                 this.data.push(this.data[0]);  // 将数组的第一个元素添加到数组的
                 this.data.shift();               //删除数组的第一个元素
                 this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
         },1)
      },
      scrollt(){
         this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
         setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                 this.data1.push(this.data1[0]);  // 将数组的第一个元素添加到数组的
                 this.data1.shift();               //删除数组的第一个元素
                 this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
         },1)
      },
      scrollYj(){
          $('.content-head').myScroll({
            speed: 40, //数值越大，速度越慢
            rowHeight: 22 //li的高度
          });
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
            },
            series: [{
                data: seriesData,
                itemStyle:{
                  color :'transparent'
                },
                type: 'effectScatter',
                rippleEffect: {
                    brushType: 'stroke'
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

      },
      drawAjchart(){
        this.ajCharts = echarts.init(document.getElementById('ajecharts'));
        let _this = this;
        _this.ajCharts.setOption({
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
              },
          },
          legend: {
              y:'240px',
              type: 'scroll',
              data: ['直接访问', '邮件营销','联盟广告','视频广告'],
              textStyle:{
                color:'#fff'
              },
              itemWidth: 20,
              pageIconColor: '#fff',
              pageIconInactiveColor: '#aaa',
              pageFormatter: '',//隐藏翻页的数字
              pageButtonItemGap: -6,//翻页按钮的两个之间的间距
          },
          grid: {
            y:20,
            containLabel: true
          },
          xAxis:  {
              type: 'value',
              axisLine:{
                  lineStyle:{
                      color:'#fff',
                  }
              },
              splitLine: { //网格线
                show: false
              },
          },
          yAxis: {
              type: 'category',
              data: ['周一','周二','周三','周四','周五'],
              axisLine:{
                  lineStyle:{
                      color:'#fff',
                  }
              },
          },
          series: [
              {
                  name: '直接访问',
                  type: 'bar',
                  barWidth : 25,
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
                  data: [320, 302, 301, 334, 390]
              },
              {
                  name: '邮件营销',
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
                  data: [120, 132, 101, 134, 90]
              },
              {
                  name: '联盟广告',
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
                      color:'#E7D188'
                    }
                  },

                  data: [220, 182, 191, 234, 290]
              },
              {
                  name: '视频广告',
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
                  data: [150, 212, 201, 154, 190]
              },

          ]
        })
      },
      drawLzchart(){
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
              }
          },
          toolbox: {

          },
          xAxis: [
              {
                  type: 'category',
                  data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
                  name:'蒸发量',
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
                  data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
              },
              {
                  name:'平均温度',
                  type:'line',
                  symbolSize:5,
                  color:['#F88C68'],  //折线条的颜色
                  smooth:true,
                  symbol:'roundRect',
                  itemStyle:{
                        normal:{
                            lineStyle:{
                                width:1,
                                type:'dotted'  //'dotted'虚线 'solid'实线
                            }
                        }
                    },
                  data:[0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
              }
          ]
        })
      },
      drawZgchart(){
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
              }
          },
          toolbox: {

          },
          xAxis: [
              {
                  type: 'category',
                  data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
                  name:'蒸发量',
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
                  data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
              },
              {
                  name:'平均温度',
                  type:'line',
                  symbolSize:5,
                  color:['#F88C68'],  //折线条的颜色
                  smooth:true,
                  symbol:'roundRect',
                  itemStyle:{
                        normal:{
                            lineStyle:{
                                width:1,
                                type:'dotted'  //'dotted'虚线 'solid'实线
                            }
                        }
                    },
                  data:[0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
              }
          ]
        })
      },
      drawJtchart(){
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
          toolbox: {

          },
          legend: {
              data:['蒸发量','降水量'],
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
                  data: ['1月','2月','3月','4月','5月'],
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
                  name:'蒸发量',
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
                  data:[2.0, 25.6, 76.7, 135.6,3.3]
              },
              {
                  name:'降水量',
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
                  data:[2.6,70.7, 175.6,18.8, 6.0]
              },
          ]
        })
      },
      allEcharts(){
        this.drawAjchart();
        this.drawLzchart();
        this.drawZgchart();
        this.drawJtchart();
        window.addEventListener("resize", () => {
          this.ajCharts.resize();
          this.lzCharts.resize();
          this.zgCharts.resize();
          this.jtCharts.resize();
        });
      },
  },
}
</script>
