<template lang="html">
  <!-- 宾馆临住信息趋势 -->
  <div class="yymain ndjmbhl">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">受理时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                        v-model="pd0.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间">
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">户口所在地：</span>
                    <el-select v-model="pd.HKSZD" filterable clearable multiple collapse-tags default-first-option placeholder="请输入所在地"  size="small" class="input-input" :filter-method="userFilter">
                      <el-option
                        v-for="item in hkszd"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">性别：</span>
                    <el-select v-model="pd.XB" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.xb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">年龄段：</span>
                  <div class="input-input t-flex t-date">
                      <el-input placeholder="请输入内容" size="small" v-model="pd1.begin" style="width:66%;"></el-input>
                    <span class="septum" style="padding:0 5px;">-</span>
                      <el-input placeholder="请输入内容" size="small" v-model="pd1.end" style="width:66%;"></el-input>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">申请类别：</span>
                    <el-select v-model="pd.SQLB" filterable clearable multiple collapse-tags default-first-option placeholder="请输入所在地"  size="small" class="input-input" :filter-method="userFilter">
                      <el-option
                        v-for="item in $store.state.sqlb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">选择显示类别：</span>
                    <el-select v-model="pd.XSLB" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="day" label="按日显示"></el-option>
                      <el-option value="month" label="按月显示"></el-option>
                      <el-option value="quarter" label="按季度显示"></el-option>
                      <el-option value="year" label="按年显示"></el-option>
                    </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="page=0;tableData=[];CurrentPage=1;TotalResult=0;getList()">查询</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="yycontent">
      <div class="ak-tabs">
        <div class="ak-tab-item hand" :class="{'ak-checked':page==0}" @click="page=0;getList()">
          图表
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==1}" @click="page=1">
          列表
        </div>
      </div>
      <div class="ak-tab-pane">
        <div class = "chart" style="width:100%" v-show="page==0">
          <div id = "echarts" style = "width: 100%;height: 400px"></div>
        </div>
        <div v-show="page==1"  style="width:100%;text-align:right;">
                <!-- <el-button type="primary" size="small" class="mb-5" @click="exportexcel">导出</el-button> -->
          <el-table
             :data="tableData"
             border
             style="width: 100%">

             <el-table-column
               prop="ZWXM"
               label="中文姓名">
             </el-table-column>
             <el-table-column
               prop="XB_DESC"
               label="性别">
             </el-table-column>
             <el-table-column
               prop="GJDQ_DESC"
               label="国家地区">
             </el-table-column>
             <el-table-column
               prop="CSRQ"
               label="出生日期">
             </el-table-column>
             <el-table-column
               prop="MZ_DESC"
               label="民族">
             </el-table-column>
             <el-table-column
               prop="CJSY_DESC"
               label="出境事由">
             </el-table-column>
             <el-table-column
               prop="SLRQ"
               label="受理日期">
             </el-table-column>
             <el-table-column
               prop="SLDW_TEXT"
               label="受理单位">
             </el-table-column>
             <el-table-column
               label="操作">
               <template slot-scope="scope">
                 <el-button type="text"  class="a-btn" title="详情" size="mini" icon="el-icon-tickets" @click="details(scope.row)"></el-button>
               </template>
             </el-table-column>
           </el-table>
           <div class="middle-foot">
              <div class="page-msg">
                <div class="">
                        共{{TotalResult}}条记录
                </div>
                <div class="">
                  每页显示
                  <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  条
                </div>
                <div class="">
                共{{Math.ceil(TotalResult/pageSize)}}页
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
        </div>
      </div>
    </div>

    <el-dialog title="内地居民申请变化量详情" :visible.sync="detailsDialogVisible">
        <!-- <LZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()"></LZXX> -->

        <el-form :model="form"  class="crcolor" style="padding:10px;line-height:35px;">
          <el-row  :gutter="3">
            <el-col :span="8">
              <span class="yy-input-text" title="中文姓名">中文姓名：</span>
                  <el-input placeholder=""  readonly="true" size="small" v-model="form.ZWXM"  class="yy-input-input"></el-input>
            </el-col>

            <el-col :span="8">
              <span class="yy-input-text">英文姓名：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.YWXM"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">性别：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.XB_DESC"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">出生日期：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.CSRQ"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">出生地：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.CSD_DESC"  class="yy-input-input"></el-input>
            </el-col>

            <el-col :span="8">
              <span class="yy-input-text">民族：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.MZ_DESC"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">国家地区：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.GJDQ_DESC"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">户口所在地：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.HKSZD_DESC"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">身份证号码：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.SFZH"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">手机号码：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.SJHM"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">出境事由：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.CJSY_DESC"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="所属派出所">所属派出所：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.SSPCS_TEXT"  class="yy-input-input"></el-input>
            </el-col>

            <el-col :span="8">
              <span class="yy-input-text">受理单位：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.SLDW_TEXT"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="受理日期">受理日期：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.SLRQ"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="审批单位">审批单位：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.SPDW_TEXT"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="审批日期">审批日期：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.SPJG_DESC"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="审批结果">审批结果：</span>
              <el-input placeholder="" size="small" v-model="form.SPRQ"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">发证日期：</span>
              <el-input placeholder="" size="small" readonly="true" v-model="form.FZRQ"  class="yy-input-input"></el-input>
            </el-col>

          </el-row>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
import {formatDate} from '@/assets/js/date.js'
import LZXX from '../common/lzxx_xq'
import {
  ToArray
} from '@/assets/js/ToArray.js'
 export default {
   components:{LZXX},
  data() {
    return {
      rybh:'',
      detailsDialogVisible:false,
      type:2,
      xid:'',
      page:0,
      fjlist:[],
      pcslist:[],
      form:{},
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{SLRQ_DateRange:{},CSRQ_DateRange:{}},
      pdTu:{},
      pd0:{
        begin:'',
        end:'',
      },
      pd1:{
        begin:'',
        end:'',
      },
      checkedfj:false,
      checkedpcs:false,
      options: [{
          value: 10,
          label: "10"
        },
        {
          value: 20,
          label: "20"
        },
        {
          value: 30,
          label: "30"
        }
      ],
      tableData: [],
      lineChart:null,
      allUserList:{},
      hkszd:[],
    }
  },
  mounted(){
    this.$store.dispatch("getXB");
    this.$store.dispatch("getSqlb");
    // this.pd0.begin=formatDate(new Date(),'yyyyMMdd');
    // this.pd0.end=formatDate(new Date(),'yyyyMMdd');
    // this.getFJ();
    this.getList();
    this.getUserWhiteList();
  },
  activated(){

  },
  methods:{
    userFilter(query = '') {
             let arr = this.allUserList.filter((item) => {
              if(item.mc!=undefined){
                  return item.mc.includes(query)
               }
             })
             if (arr.length > 50) {
               this.hkszd = arr.slice(0, 50)
             } else {
               this.hkszd= arr
             }
           },
           getUserWhiteList() {
               this.$api.get(this.Global.aport1+this.Global.xzqh, null,
                r => {
                    this.allUserList=ToArray(r.data);
                    this.userFilter();
               });
           },
    details(i){
      this.xid=i.RGUID;
      this.rybh=i.RYBH;
      this.form=i;
      this.detailsDialogVisible = true;
    },
    pageSizeChange(val) {
      this.getListTu(this.CurrentPage,val,this.pdTu);
    },
    handleCurrentChange(val) {
      this.getListTu(val,this.pageSize,this.pdTu);
    },
    getList(){
      // if((this.pd0.begin==''||this.pd0.begin==undefined||this.pd0.begin==null)&&(this.pd0.end==''||this.pd0.end==undefined||this.pd0.end==null)){
      //   this.$message({
      //     message: '时间范围不能为空',
      //     type: 'warning'
      //   });
      //   return
      // }
      this.pd0.begin==''?this.pd.SLRQ_DateRange.begin='':this.pd0.begin==null?this.pd.SLRQ_DateRange.begin=null:this.pd.SLRQ_DateRange.begin=this.pd0.begin+'000000';
      this.pd0.end==''?this.pd.SLRQ_DateRange.end='':this.pd0.end==null?this.pd.SLRQ_DateRange.end=null:this.pd.SLRQ_DateRange.end=this.pd0.end+'000000';
      this.pd1.begin==''?this.pd.CSRQ_DateRange.begin='':this.pd1.begin==null?this.pd.CSRQ_DateRange.begin=null:this.pd.CSRQ_DateRange.begin=this.pd1.begin;
      this.pd1.end==''?this.pd.CSRQ_DateRange.end='':this.pd1.end==null?this.pd.CSRQ_DateRange.end=null:this.pd.CSRQ_DateRange.end=this.pd1.end;
      let p = {
        "pd": this.pd
      };
      this.$api.post(this.Global.aport8+'/ndjm/ndjmbhl', p,
        r => {
            this.drawLine(r.data.legend,r.data.xAxis,r.data.series);
        })
    },

    getListTu(currentPage,pageSize,pd){
      let p={
        'currentPage':currentPage,
        'showCount':pageSize,
        'pd':pd
      }
      this.$api.post(this.Global.aport8+'/ndjm/ndjmjbxx',p,
        r =>{
          if(r.success){
            this.tableData=r.data.resultList;
            console.log(r.data.totalResult);
            if(r.data.totalResult!=undefined){
            this.TotalResult=r.data.totalResult;
            }
          }
        })
    },
    //折线图
    drawLine(dataname,ydata,series){
      this.lineChart = echarts.init(document.getElementById('echarts'));
      window.onresize = echarts.init(document.getElementById('echarts')).resize;
      let label={
          normal: {
              show: true,
              position: 'top'
          }
       }
       for(var i=0;i<series.length;i++){
         let s=0;
         for(var j=0;j<series[i].data.length;j++){
           s+=series[i].data[j];
           if(s!=0){
             series[i].label=label;
           }
         }
       }
      let that = this;
      var colors = ['#5793f3', '#d14a61', '#675bba'];
              // 折线图初始化
       that.lineChart.setOption({
          color: colors,
          tooltip: {
              // trigger: 'none',
              axisPointer: {
                  type: 'cross'
              }
          },
          legend: {
              data:dataname
          },
          grid: {
              top: 70,
              bottom: 50
          },
          xAxis: [
              {
                  type: 'category',
                  axisTick: {
                      alignWithLabel: true
                  },
                  axisLine: {
                      onZero: false,
                  },
                  data: ydata
              },
              // {
              //     type: 'category',
              //     axisTick: {
              //         alignWithLabel: true
              //     },
              //     axisLine: {
              //         onZero: false,
              //     },
              //     data: ydata
              // },
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: series
       },true)
       that.lineChart.off('click');
       that.lineChart.on('click',function(params){
         console.log(params);
         let p={};
         p=Object.assign({}, that.pd);

         p.SLRQ_DateRange={
           'begin':that.pd0.begin==''?'':that.pd0.begin==null?null:that.pd0.begin+'000000',
           'end':that.pd0.end==''?'':that.pd0.end==null?null:that.pd0.end+'000000',
         };
         p.CSRQ_DateRange={
           'begin':that.pd1.begin==''?'':that.pd1.begin==null?null:that.pd1.begin,
           'end':that.pd1.end==''?'':that.pd1.end==null?null:that.pd1.end,
         };

         p.SJD=params.name;
         p.LEGEND=params.seriesName;
         that.pdTu=p;
         console.log('p',that.pdTu);
         that.page=1;
         that.CurrentPage=1;
         that.getListTu(that.CurrentPage,that.pageSize,that.pdTu);
       })
      that.lineChart.resize()
   },

   exportexcel(){
     console.log('this.pddc',this.pdTu);
     let p={
       'currentPage':1,
       'showCount':10000,
       'pd':this.pdTu
     }
     this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/export',p,

           r =>{
             this.downloadM(r,'宾馆临住信息趋势');
           },e=>{},{},'blob')

   },
   downloadM (data,name) {
       if (!data) {
           return
       }
       let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
       let link = document.createElement('a')
       link.style.display = 'none'
       link.href = url
       link.setAttribute('download', name+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
       document.body.appendChild(link)
       link.click()
   },
  }
}
</script>

<style>
.ndjmbhl .el-dialog{
  min-width: 800px;
}
</style>
