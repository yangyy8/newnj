<template lang="html">
  <!-- 在校学生突发增量预警 -->
  <div class="yymain">
    <div class="yytitle" id="target">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">时间范围：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.BJSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间">
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.BJSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">学校代码：</span>
                    <el-select v-model="pd.DWID" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.xxdm"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="page=0;tableData=[];CurrentPage=1;TotalResult=0;getListTu(pd)">查询</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="yycontent">
      <div class="ak-tabs">
        <div class="ak-tab-item hand" :class="{'ak-checked':page==0}" @click="page=0;getListTu(pd)">
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
        <div v-show="page==1">
          <el-table
             :data="tableData"
             border
             style="width: 100%">
             <el-table-column
               prop="NAME"
               label="中文姓名">
             </el-table-column>
             <el-table-column
               prop="STUDENTNO"
               label="学号">
             </el-table-column>
             <el-table-column
               prop="XB_DESC"
               label="性别">
             </el-table-column>
             <el-table-column
               prop="GJDQ_DESC"
               label="国籍">
             </el-table-column>
             <el-table-column
               prop="BORNEDDATE"
               label="出生日期">
             </el-table-column>
             <el-table-column
               prop="PASSPORTNO"
               label="护照号码">
             </el-table-column>
             <el-table-column
               prop="COLLEGENAME"
               label="院系名称">
             </el-table-column>
             <el-table-column
               prop="FINISHDATE"
               label="到校时间">
             </el-table-column>
             <el-table-column
               prop="SCHOOLID_DESC"
               label="学校名称">
             </el-table-column>
             <el-table-column
               prop="HOMEMOBILE"
               label="联系方式">
             </el-table-column>
             <el-table-column
               prop="CONTACTADDRESS"
               label="地址">
             </el-table-column>
             <el-table-column
               prop="STATUS_DESC"
               label="学生状态">
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
    <!-- 留学生信息详情 -->
    <el-dialog title="留学生在校信息详情" :visible.sync="lxsZXDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
        <LXSXXZX :type="type" :xid="xid" :random="new Date().getTime()"></LXSXXZX>
        <div slot="footer" class="dialog-footer">
          <el-button @click="lxsZXDialogVisible = false" size="small">取 消</el-button>
        </div>
   </el-dialog>
  </div>
</template>
<script scoped>
import LXSXXZX from '../../../common/lxsZx_xq'
import echarts from 'echarts'
 export default {
   components:{LXSXXZX},
  data() {
    return {
      lxsZXDialogVisible:false,
      type:2,
      xid:'',
      pd:{
        MXLX:"LXS_GXTFZL",
        BJSJ_DateRange:{begin:'',end:''}
      },
      pdList:{},
      lineChart:null,
      page:0,
      tableData:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
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
        }],
    }
  },
  mounted(){
    this.$store.dispatch("getXxdm");
    this.getListTu(this.pd);
  },
  methods:{
    pageSizeChange(val) {
      this.getList(this.CurrentPage,val,this.pdList);
    },
    handleCurrentChange(val) {
      this.getList(val,this.pageSize,this.pdList);
    },
    details(i){
      this.xid=i;
      target.scrollIntoView();
      this.lxsZXDialogVisible=true;
    },
    getList(currentPage,pageSize,pd){
      let p={
        "currentPage":currentPage,
        "showCount":pageSize,
        "pd":pd,
        "orderBy":"STUDENTID",
        "orderType":"ASC"
      }
      this.$api.post(this.Global.aport4+'/eS_ZYXD_CRJSTUDENTController/getListByParams',p,
       r =>{
         if(r.success){
           this.tableData=r.data.resultList;
           this.TotalResult=r.data.totalResult;
         }
       })
    },
    getListTu(pd){
      pd.BJSJ_DateRange.begin==''?pd.BJSJ_DateRange.begin='':pd.BJSJ_DateRange.begin==null?pd.BJSJ_DateRange.begin=null:pd.BJSJ_DateRange.begin=pd.BJSJ_DateRange.begin+'000000';
      pd.BJSJ_DateRange.end==''?pd.BJSJ_DateRange.end='':pd.BJSJ_DateRange.end==null?pd.BJSJ_DateRange.end=null:pd.BJSJ_DateRange.end=pd.BJSJ_DateRange.end+'000000';
      let p={
        "pd":pd
      }
      this.$api.post(this.Global.aport4+'/warningInfoController/getGxtfzlyjxx',p,
       r =>{
         if(r.success){
           this.drawLine(r.data.legend,r.data.header,r.data.series);
         }
       })
    },
    drawLine(legend,xdata,series){
       this.lineChart = echarts.init(document.getElementById('echarts'));
       window.onresize = echarts.init(document.getElementById('echarts')).resize;
       let that = this;
       that.lineChart.setOption({
        legend: {
          data:legend
        },
        tooltip: {trigger: 'axis',},
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                },
                data: xdata
            },
        ],
        yAxis: [{
                type: 'value'
            }],
        series: series
      },true)
      that.lineChart.on('click',function(params){
        console.log(params);
        let p={};
        p.YEAR=params.name;
        p.SCHOOLID=params.seriesName;
        that.pdList=p;
        that.page=1;
        that.CurrentPage=1;
        that.getList(that.CurrentPage,that.pageSize,that.pdList);
      })
      that.lineChart.resize()
    }

  },
}
</script>
