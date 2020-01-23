<template lang="html">
  <!-- 宾馆临住信息趋势 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">录入日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                        v-model="pd.LRRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.LRRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">住宿日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.ZSRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.ZSRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
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
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
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
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
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
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">停留事由：</span>
                    <el-select v-model="pd.JLSY" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjsy"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">所属分局：</span>
                    <div class="input-input t-fuzzy-8 t-flex">
                      <el-select v-model="pd.LRDW_Like" multiple :multiple-limit="5" @change="getFJ()"  collapse-tags  filterable clearable default-first-option placeholder="请选择"  size="small" :disabled="juState=='1'?false:true">
                        <el-option
                          v-for="item in fjlist"
                          :key="item.dm"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>&nbsp;&nbsp;
                      <el-checkbox v-model="checkedfj"  @change="getRadiofj(checkedfj)">包含</el-checkbox>
                    </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">派出所：</span>
                    <div class="input-input t-fuzzy-8 t-flex">
                      <el-select v-model="pd.LRDW" multiple :multiple-limit="5" @change="getZrq(pd.LRDW)"  @visible-change="getPCS(pd.LRDW_Like)" collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" :disabled="juState=='3'||juState=='4'" :no-data-text="pd.LRDW_Like==''||pd.LRDW_Like==undefined?'请先选择所属分局':'无数据'">
                        <el-option
                          v-for="item in pcslist"
                          :key="item.dm"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                      <el-checkbox v-model="checkedpcs"  @change="getRadiopcs(checkedpcs)">包含</el-checkbox>
                    </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">责任区：</span>
                    <el-select v-model="pd.SSZRQ" multiple :multiple-limit="5" collapse-tags filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input"
                    :no-data-text="pd.LRDW_Like==''||pd.LRDW_Like==undefined?'请先选择所属分局':pd.LRDW==''||pd.LRDW==undefined?'请先选择派出所':'无数据'">
                      <el-option
                        v-for="item in zrq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">旅馆名称：</span>
                    <el-select v-model="pd.DJDWDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zsbg"
                        :key="item.dm"
                        :label="item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">投宿于：</span>
                    <el-select v-model="pd.LB_DJDW" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="1" label="1 - 社会面">
                      </el-option>
                      <el-option value="2" label="2 - 旅馆">
                      </el-option>
                    </el-select>
                </el-col> -->
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">日期选择：</span>
                    <el-select v-model="pd.ZSLX" filterable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="0" label="0 - 请选择">
                      </el-option>
                      <el-option value="1" label="1 - 按日查询">
                      </el-option>
                      <el-option value="2" label="2 - 按月查询">
                      </el-option>
                      <el-option value="3" label="3 - 按季度查询">
                      </el-option>
                      <el-option value="4" label="4 - 按年查询">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">快速预览：</span>
                  <div class="alone-flex">
                    <el-button type="primary" size="mini" @click="pd.TYPE='YN';page=0;tableData=[];CurrentPage=1;TotalResult=0;getList()">年</el-button>
                    <el-button type="primary" size="mini" @click="pd.TYPE='BN';page=0;tableData=[];CurrentPage=1;TotalResult=0;getList()">半年</el-button>
                    <el-button type="primary" size="mini" @click="pd.TYPE='JD';page=0;tableData=[];CurrentPage=1;TotalResult=0;getList()">季度</el-button>
                    <el-button type="primary" size="mini" @click="pd.TYPE='YF';page=0;tableData=[];CurrentPage=1;TotalResult=0;getList()">月</el-button>
                  </div>
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
        <div class="">
          <span class="t-fr">
            <i class="iconbtn hand" :class="{'el-icon-open':numChange==true,'el-icon-turn-off':numChange==false}" :title="numChange==true?'关闭数字':'展示数字'" @click="numChange=!numChange;getList()" v-show="page==0&&pageC==true"></i>
            <i class="iconbtn hand" :class="{'el-icon-s-grid':pageC==true,'el-icon-s-data':pageC==false}" :title="pageC==true?'转为列表':'转为图表'" @click="changeTu()" v-show="page==0"></i>
          </span>
          <el-button type="primary" size="small"  @click="downloadC()" v-show="pageC==false&&page==0">导出</el-button>
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
               style="width: 100%"
               @header-click="titleShow">
               <el-table-column
                 prop="rq"
                 label="日期">
               </el-table-column>
               <el-table-column
                   v-for="(val,i) in tableHeader"
                   :key="i"
                   :prop="val.code"
                   :label="val.lable">
               </el-table-column>
             </el-table>
          </div>
        </div>

        <div v-show="page==1"  style="width:100%;text-align:right;">
                <el-button type="primary" size="small" class="mb-5" @click="exportexcel">导出</el-button>
          <el-table
             :data="tableData"
             border
             style="width: 100%"
             @header-click="titleShow">
             <el-table-column
               prop="YWXM"
               label="英文姓名">
             </el-table-column>
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
               prop="ZJZL_DESC"
               label="证件种类">
             </el-table-column>
             <el-table-column
               prop="ZJHM"
               label="证件号码">
             </el-table-column>
             <el-table-column
               prop="QZZL_DESC"
               label="签证种类">
             </el-table-column>
             <el-table-column
               prop="QZHM"
               label="签证号码">
             </el-table-column>
             <el-table-column
               prop="LRDW_DESC"
               label="派出所名称">
             </el-table-column>
             <el-table-column
               prop="LSDWDZ"
               label="地址">
             </el-table-column>
             <el-table-column
               prop="ZSRQ"
               label="入住日期">
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

    <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
        <LZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()"></LZXX>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
import {formatDate} from '@/assets/js/date.js'
import LZXX from '../../../common/lzxx_xq'
 export default {
   components:{LZXX},
  data() {
    return {
      numChange:true,
      pageC:true,
      tableDataC:[],
      tableHeader:[],
      rybh:'',
      detailsDialogVisible:false,
      type:1,
      xid:'',
      page:0,
      fjlist:[],
      pcslist:[],
      zrq:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{LRRQ_DateRange:{begin:'',end:''},ZSRQ_DateRange:{begin:'',end:''},LRDW_BH_Like:'1',LRDW_BH:'1',DJDWXZQH:'3201',LB_SFBG:'2',ZSLX:'0',TYPE:'YF'},
      pdTu:{},
      pd0:{
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
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  mounted(){
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;

    this.$store.dispatch("getGjdq");
    this.$store.dispatch("getZjzl");
    this.$store.dispatch("getQzzl");
    this.$store.dispatch("getPcs");
    this.$store.dispatch("getRjsy");
    this.$store.dispatch("getZsbg");
    // this.pd0.begin=formatDate(new Date(),'yyyyMMdd');
    // this.pd0.end=formatDate(new Date(),'yyyyMMdd');
    this.getFJ();
    if(this.juState=='2'){//分局登录
      this.pd.LRDW_Like = [this.orgCode];
      this.getPCS(this.pd.LRDW_Like);
    }
    if(this.juState=='3'){//派出所登录
      this.pd.LRDW_Like = [this.$store.state.pcsToju];
      this.getPCS(this.pd.LRDW_Like);
      this.pd.LRDW = [this.orgCode];
    }
    if(this.juState=='4'){
      this.pd.LRDW_Like = [this.$store.state.pcsToju];
      this.getPCS(this.pd.LRDW_Like);
      this.pd.LRDW = [this.$store.state.zrqTopcs];
      this.getZrq(this.pd.LRDW);
    }
    this.getList();
  },
  activated(){

  },
  methods:{
    titleShow(e,el){
      el.target.title = e.label;
    },
    changeTu(){
      this.pageC=!this.pageC;
      if(this.pageC==true){
        this.getList();
      }else{
        this.getListC()
      }
    },
    getListC(){
      //表格
      let p={
        pd:this.pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getListByParam',p,
       r =>{
         if(r.success){
           this.tableHeader = r.data.table;
           this.tableDataC = r.data.resultList;
         }
       })
    },
    downloadC(){
      if(this.tableDataC.length==0){
        this.$message({
          message: '列表无数据！',
          type: 'warning'
        });
        return
      }
      let p={
        pd:this.pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/exportList',p,
       r =>{
         this.downloadM(r,'宾馆临住信息趋势');
       },e=>{},{},'blob')
    },
    details(i){
      this.xid=i.DTID;
      this.rybh=i.RYBH;
      this.detailsDialogVisible = true;
    },
    pageSizeChange(val) {
      this.getListTu(this.CurrentPage,val,this.pdTu);
    },
    handleCurrentChange(val) {
      this.getListTu(val,this.pageSize,this.pdTu);
    },
    getRadiofj(n){
      if(n==true){
        this.pd.LRDW_BH_Like='0'
      }
      else if (n==false) {
        this.pd.LRDW_BH_Like='1'
      }
    },
    getRadiopcs(n){
      if(n==true){
        this.pd.LRDW_BH='0'
      }else if(n==false){
        this.pd.LRDW_BH='1'
      }
    },
    getFJ(){
      this.$set(this.pd,'LRDW',[]);
      let p={
        "operatorId":this.$store.state.uid,
        "operatorNm":this.$store.state.uname
      };
      this.$api.post(this.Global.aport2+'/data_report/selectSsfjDm', p,
        r => {
          this.fjlist = r.data.SSFJ;
        })
    },
    getZrq(arr) {
      this.$set(this.pd,'SSZRQ',[]);
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname,
        "pcsdm":arr
      };
      var url = this.Global.aport2 + "/data_report/selectZrqDm";
      this.$api.post(url, p,
        r => {
          this.zrq = r.data.ZRQ;
        })
    },
    getList(){
      if(((this.pd.LRRQ_DateRange.begin!=''&&this.pd.LRRQ_DateRange.begin!=null)||(this.pd.LRRQ_DateRange.end!=''&&this.pd.LRRQ_DateRange.end!=null))&&((this.pd.ZSRQ_DateRange.begin!=''&&this.pd.ZSRQ_DateRange.begin!=null)||(this.pd.ZSRQ_DateRange.begin!=''&&this.pd.ZSRQ_DateRange.begin!=null))){
        this.$alert('录入日期和住宿日二者只能选其一！', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
        return
      }
      let p = {
        "pd": this.pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getCountByParam', p,
        r => {
            this.drawLine(r.data.legend,r.data.header,r.data.series);
        })
    },
    getPCS(arr){
      let p={
        "fjdmList":arr
      }
      this.$api.post(this.Global.aport3+'/data_report/selectPcsDm',p,
       r=>{
         if(r.success){
           this.pcslist = r.data.PCS;
         }
       })
    },
    getListTu(currentPage,pageSize,pd){
      let p={
        'currentPage':currentPage,
        'showCount':pageSize,
        'pd':pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getLzListByParams',p,
        r =>{
          if(r.success){
            this.tableData=r.data.resultList;
            this.TotalResult=r.data.totalResult;
          }
        })
    },
    //折线图
    drawLine(dataname,ydata,series){
      this.lineChart = echarts.init(document.getElementById('echarts'));
      window.onresize = echarts.init(document.getElementById('echarts')).resize;
      let label={
          normal: {
              show: this.numChange,
              position: 'top'
          }
       }
       for(var i=0;i<series.length;i++){
         let s=0;
         for(var j=0;j<series[i].data.length;j++){
           // s+=series[i].data[j];
           // if(s!=0){
             series[i].label=label;
           // }
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
         let p={};
         p=Object.assign({}, that.pd);
         if(p.hasOwnProperty('LRDW_BH_Like')){delete p.LRDW_BH_Like};
         if(p.hasOwnProperty('LRDW_BH')){delete p.LRDW_BH};
         p.HEADER=ydata;
         p.TIME=params.name;
         p.DW=params.seriesName;
         that.pdTu=p;
         that.page=1;
         that.CurrentPage=1;
         that.selectionAll=[];
         that.getListTu(that.CurrentPage,that.pageSize,that.pdTu);
       })
      that.lineChart.resize()
   },

   exportexcel(){
     if(this.tableData.length==0){
        this.$message.error('无可导出数据');
        return
     }
     let p={
       'currentPage':1,
       'showCount':10000,
       'pd':this.pdTu,
       userCode:this.userCode,
       userName:this.userName,
       orgJB:this.juState,
       orgCode:this.orgCode,
       token:this.token
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
       link.click();
       this.$refs.multipleTable.clearSelection();
       this.selectionAll=[];
   },
  }
}
</script>
