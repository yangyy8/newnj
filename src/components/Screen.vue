<template lang="html">
  <div class="screen">
    <div class="banner"><span>2019-09-25 11:50</span></div>
    <div class="main">
    <el-row :gutter="3">
      <el-col :span="6"  style="">
           <div class="bgline1" style="height:296px">
              <div class="title gradient-text-one">
                案件12个月变化量
              </div>
           </div>
           <div class="bgline1" style="height:296px;margin-top:14px;">
              <div class="title gradient-text-one">
                常住人员身份分析
              </div>
              <div class="tb1">
                   <ul>
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
           </div>
      </el-col>
      <el-col :span="12" style="padding:25px 62px;">
        <div class="warning">
          <ul>
             <li style="float:left;width:33%;list-style:disc">持短期签证非法就业 <span class="cred">50</span> 条</li>
             <li style="float:left;width:33%;list-style:disc">临住核查 <span class="cred">50</span> 条</li>
             <li style="float:left;width:33%;list-style:disc">违临预判预警 <span class="cred">50</span> 条</li>
             <li style="float:left;width:33%;list-style:disc">布控预警 <span class="cred">50</span> 条</li>
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
                 <li style="width:10%;float:left;margin-top:10px;" v-for="(i,ind) in pdjhdata">
                   <div>{{i.centername}}</div>
                   <div class="mt4">
                    <span  v-for="s in i.queuesum">
                    <span class="sz ml4">{{s}}</span>
                   </span>
                    <span class="ci">次</span></div>
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
             临住12个月变化量
           </div>
        </div>
        <div class="bgline2" style="height:296px;margin-top:14px;">
           <div class="title gradient-text-one">
             中管12个月办理量
           </div>
        </div>
        <div class="bgline21" style="height:255px;margin-top:14px;">
           <div class="title gradient-text-one">
             居留、停留12个月签发量
           </div>
        </div>
      </el-col>
    </el-row>
    </div>
  </div>
</template>
<script scoped>

import echarts from 'echarts'
export default {
  data() {
    return {
      mapCenter:null,
      pdjhdata:[],
    }
  },
  mounted() {
    var ss=[];
    ss.push({dm:1,mc:'六合区',value:123});
    ss.push({dm:2,mc:'江宁区',value:123});
    ss.push({dm:3,mc:'栖霞区',value:123});
    this.drawLine(ss,null);
    this.getpdjh();
  },
  methods:{
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

      },
  },
}
</script>
