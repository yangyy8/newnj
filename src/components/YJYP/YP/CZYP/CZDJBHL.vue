<template lang="html">
  <!-- 常住登记变化量 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text" title="市局下发时间">市局下发时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.SJXFSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.SJXFSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
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
                        :value="item.dm"
                        :label="item.dm+' - '+item.mc">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.CSRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间">
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.CSRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text" title="停留有效期">停留有效期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.TLYXQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.TLYXQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">停留事由：</span>
                    <el-select v-model="pd.TLSY" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjsy"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="pd.ZJZL" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zjzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">签证种类：</span>
                    <el-select v-model="pd.QZZL" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjqzzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">身份：</span>
                    <el-select v-model="pd.SFDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.sf"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text" title="分局接收时间">分局接收时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.FJJSSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.FJJSSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text" title="派出所接收时间">派出所接收时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.PCSJSSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.PCSJSSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col> -->
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">所属分局：</span>
                    <el-select v-model="pd.SSFJ" @change="getPSC(pd.SSFJ)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in getallfj"
                        :key="item.DM"
                        :label="item.DM+' - '+item.MC"
                        :value="item.DM">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text" title="所属派出所">所属派出所：</span>
                    <el-select v-model="pd.SSPCS" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in PSC"
                        :key="item.DM"
                        :label="item.MC"
                        :value="item.DM">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">显示类别：</span>
                    <el-select v-model="pd.XSLB" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="day" label="日"></el-option>
                      <el-option value="month" label="月"></el-option>
                      <el-option value="quarter" label="季度"></el-option>
                      <el-option value="year" label="年"></el-option>
                    </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="page=0;tableData=[];CurrentPage=1;TotalResult=0;getListTu(pd0,pd);getListC(pd0,pd)">查询</el-button>
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
        <div class="">
          <span class="t-fr"><i class="iconbtn hand" :class="{'el-icon-s-grid':pageC==true,'el-icon-s-data':pageC==false}" :title="pageC==true?'转为列表':'转为图表'" @click="changeTu()" v-show="page==0"></i></span>
          <el-button type="primary" size="small"  @click="downloadC(pd0,pd)" v-show="pageC==false&&page==0">导出</el-button>
          <div style="clear:both"></div>
        </div>

        <div v-show="page==0">
          <div class = "chart" style="width:100%" v-show="pageC==true">
            <div id = "echarts" style = "width: 100%;height: 400px"></div>
          </div>
          <div v-show="pageC==false" class="t-mt10">
            <el-table
               :data="tableDataC"
               border
               style="width: 100%">
               <el-table-column
                 prop="rq"
                 label="日期">
               </el-table-column>
               <el-table-column
                 prop="sl"
                 label="数量">
               </el-table-column>
             </el-table>
          </div>
        </div>
        <div v-show="page==1">
          <el-table
             :data="tableData"
             border
             style="width: 100%">
             <el-table-column
               prop="CSRQ"
               label="出生日期">
             </el-table-column>
             <el-table-column
               prop="GJDQ_DESC"
               label="国家地区">
             </el-table-column>
             <el-table-column
               prop="SFDM_DESC"
               label="身份">
             </el-table-column>
             <el-table-column
               prop="XB_DESC"
               label="性别">
             </el-table-column>
             <el-table-column
               prop="YWXM"
               label="英文姓名">
             </el-table-column>
             <el-table-column
               prop="ZWXM"
               label="中文姓名">
             </el-table-column>
             <el-table-column
               prop="SJXFSJ"
               label="市局下发时间">
             </el-table-column>
             <el-table-column
               prop="SSPCS_DESC"
               label="所属派出所">
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
    <el-dialog title="常住信息详情" :visible.sync="CZDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <CZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()" :row="allData"></CZXX>
      <div slot="footer" class="dialog-footer">
        <el-button @click="CZDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
import CZXX from '../../../common/czxx_xq'
 export default {
  components:{CZXX},
  data() {
    return {
      pageC:true,
      tableDataC:[],
      CZDialogVisible:false,
      type:3,
      rybh:'',
      xid:'',
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      options:[
        {
          value:10,
          label:"10"
        },
        {
          value:20,
          label:"20"
        },
        {
          value:30,
          label:"30"
        }
      ],
      tableData:[],
      getallfj:[],
      PSC:[],
      pd:{
        SJXFSJ_DateRange:{begin:'',end:'',dataType:"date"},
        CSRQ_DateRange:{begin:'',end:'',dataType:"date"},
        TLYXQ_DateRange:{begin:'',end:'',dataType:"date"},
        FJJSSJ_DateRange:{begin:'',end:'',dataType:"date"},
        // PCSJSSJ_DateRange:{begin:'',end:'',dataType:"date"},
      },
      pd0:{
        SJXFSJ_DateRange:{begin:'',end:'',dataType:"date"},
        CSRQ_DateRange:{begin:'',end:'',dataType:"date"},
        TLYXQ_DateRange:{begin:'',end:'',dataType:"date"},
        FJJSSJ_DateRange:{begin:'',end:'',dataType:"date"},
        // PCSJSSJ_DateRange:{begin:'',end:'',dataType:"date"},
      },
      lineChart:null,
      page:0,
      pdTu:{},
      allData:{},
    }
  },
  mounted(){
    this.$store.dispatch("getGjdq");
    this.$store.dispatch("getZjzl");
    this.$store.dispatch("getQzzl");
    this.$store.dispatch("getSf");
    this.$store.dispatch("getXB");
    this.$store.dispatch("getPcs");
    this.$store.dispatch("getRjsy");
    this.$store.dispatch("getZsbg");
    this.$store.dispatch("getRjqzzl");
    this.getFj();
    this.getListTu(this.pd0,this.pd);
  },
  methods:{
    changeTu(){
      this.pageC=!this.pageC;
      if(this.pageC==true){
        this.getListTu(this.pd0,this.pd);
      }else{
        this.getListC(this.pd0,this.pd)
      }
    },
    pageSizeChange(val) {
      // this.pageSize=10;
      this.getList(this.CurrentPage,val,this.pdTu);
    },
    handleCurrentChange(val) {
      // this.CurrentPage=1;
      this.getList(val,this.pageSize,this.pdTu);
    },
    changeTime(time,timeReal){
      time.begin==''?timeReal.begin='':time.begin==null?timeReal.begin=null:timeReal.begin=time.begin+' 00:00:00';
      time.end==''?timeReal.end='':time.end==null?timeReal.end=null:timeReal.end=time.end+' 00:00:00';
    },
    getListC(pd0,pd){
      this.changeTime(pd0.SJXFSJ_DateRange,pd.SJXFSJ_DateRange);
      this.changeTime(pd0.CSRQ_DateRange,pd.CSRQ_DateRange);
      this.changeTime(pd0.TLYXQ_DateRange,pd.TLYXQ_DateRange);
      this.changeTime(pd0.FJJSSJ_DateRange,pd.FJJSSJ_DateRange);
      //表格
      this.$api.post(this.Global.aport5+'/djbhl/getdjbhltjlb',{pd:pd},
       r =>{
         if(r.success){
           this.tableDataC = r.data.resultList
         }
       })
    },
    getListTu(pd0,pd){
      this.changeTime(pd0.SJXFSJ_DateRange,pd.SJXFSJ_DateRange);
      this.changeTime(pd0.CSRQ_DateRange,pd.CSRQ_DateRange);
      this.changeTime(pd0.TLYXQ_DateRange,pd.TLYXQ_DateRange);
      this.changeTime(pd0.FJJSSJ_DateRange,pd.FJJSSJ_DateRange);
      // this.changeTime(pd.PCSJSSJ_DateRange);
      this.$api.post(this.Global.aport5+'/djbhl/getdjbhl',{pd:pd},
       r =>{
         if(r.success){
           this.drawLine(r.data.legend,r.data.xAxis,r.data.series);
         }
       })
    },
    downloadC(pd0,pd){
      if(this.tableDataC.length==0){
        this.$message({
          message: '列表无数据！',
          type: 'warning'
        });
        return
      }
      this.changeTime(pd0.SJXFSJ_DateRange,pd.SJXFSJ_DateRange);
      this.changeTime(pd0.CSRQ_DateRange,pd.CSRQ_DateRange);
      this.changeTime(pd0.TLYXQ_DateRange,pd.TLYXQ_DateRange);
      this.changeTime(pd0.FJJSSJ_DateRange,pd.FJJSSJ_DateRange);
      this.$api.post(this.Global.aport5+'/djbhl/exportdjbhlchart',{pd:pd},
       r =>{
         this.downloadM(r);
       },e=>{},{},'blob')
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '常住登记变化量列表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    getList(currentPage,pageSize,pd){
      let p={
        'currentPage':currentPage,
        'showCount':pageSize,
        'pd':pd
      }
      this.$api.post(this.Global.aport5+'/djbhl/getjbxx',p,
       r =>{
         if(r.success){
           this.tableData=r.data.resultList;
           this.TotalResult=r.data.totalResult;
         }
       })
    },
    details(i){
      this.xid=i.RGUID;
      this.rybh=i.RYBH;
      this.allData=i;
      this.CZDialogVisible=true;
    },
    getFj(){
      this.$api.post(this.Global.aport5+'/djbhl/getallfj',{},
       r =>{
         if(r.success){
           this.getallfj=r.data;
         }
       })
    },
    getPSC(i){
      this.$api.post(this.Global.aport5+'/djbhl/getpcsbyfjdm',{fjdm:i},
      r =>{
        if(r.success){
          this.PSC=r.data;
        }
      })
    },

    //折线图
    drawLine(legend,xAxis,series){
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
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross'
                  }
              },
              legend: {
                  data:legend
              },
              // grid: {
              //     top: 70,
              //     bottom: 50
              // },
              xAxis: [
                  {
                      type: 'category',
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLine: {
                          onZero: false,
                          lineStyle: {
                              color: colors[1]
                          }
                      },
                      data: xAxis
                  },
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
             let p={};
             p=Object.assign({},that.pd);
             that.changeTime(that.pd0.SJXFSJ_DateRange,p.SJXFSJ_DateRange);
             that.changeTime(that.pd0.CSRQ_DateRange,p.CSRQ_DateRange);
             that.changeTime(that.pd0.TLYXQ_DateRange,p.TLYXQ_DateRange);
             that.changeTime(that.pd0.FJJSSJ_DateRange,p.FJJSSJ_DateRange);
             // that.changeTime(pd.PCSJSSJ_DateRange);
             p.SJD=params.name;
             that.pdTu=p;
             that.page=1;
             that.CurrentPage=1;
             that.getList(that.CurrentPage,that.pageSize,that.pdTu);
           })
           that.lineChart.resize();
      },
  }
}
</script>
