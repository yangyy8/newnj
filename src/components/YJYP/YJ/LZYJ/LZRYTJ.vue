<template lang="html">
    <!-- 出入境记录核查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="20" class="br pr-20">
          <el-row align="center" :gutter="1">
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">时间范围：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.beginDate" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.endDate" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">宾馆：</span>
                    <el-select v-model="pd.bgList" multiple  :multiple-limit="5"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zsbg"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
         </el-row>
         </el-col>
         <el-col :span="4" >
           <el-button type="success" size="small" @click="getList(pd,deepCli)" class="mb-15 tt-mr10">查询</el-button>
           <el-button type="info" size="small" @click="$router.go(-1)" class="mb-15 tt-mr10">返回</el-button>
           <el-button type="warning" size="small" @click="download" class="mb-15">导出</el-button>
         </el-col>
        </el-row>
    </div>
    <div class="yycontent">
          <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <el-table-column
             prop="dw"
             label="单位">
             <template slot-scope="scope">
               <span class="sb" @click="getList(pd,scope.row)">{{scope.row.dw}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="zrs"
             label="总人数">
             <template slot-scope="scope">
               <span class="sb" @click="toLink (scope.row,'jsts')">{{scope.row.zrs}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="rxz"
             label="人像照数">
             <template slot-scope="scope">
               <span class="sb" @click="toLink (scope.row,'cgts')" >{{scope.row.rxz}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="frxz"
             label="非人像照数">
             <template slot-scope="scope">
               <span class="sb" @click="toLink (scope.row,'rgsbts')" >{{scope.row.frxz}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="qrxz"
             label="缺人像照数">
             <template slot-scope="scope">
                <span class="sb" @click="toLink (scope.row,'sbzts')">{{scope.row.qrxz}}</span>
             </template>
           </el-table-column>
         </el-table>
    </div>
  </div>
</template>
<script>
import {ToArray} from '@/assets/js/ToArray.js'
export default {
  data() {
    return {
      pd: {
        beginDate:'',
        endDate:'',
        bgList:[],
      },
      deepCli:{
        level:'',
        type:'0',
        list:[],//合计
        dwbm:'',
      },
      form:{},
      nation:[],
      tableData:[],
      eidtsDialogVisible:false,
      tableData: [],
    }
  },
  activated(){
    this.getList(this.pd,this.deepCli);
  },
  mounted() {
    this.$store.dispatch('getZsbg');
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getList(pd,deepCli) {
      let p = {
        pd:{
          beginDate:pd.beginDate,
      		endDate:pd.endDate,
      		bgList:pd.bgList,

          level:deepCli.level,
      		dw:deepCli.dwbm,
      		type:deepCli.dw=='合计'?deepCli.type='1':deepCli.type='0',
          list:deepCli.dw=='合计'?deepCli.list=deepCli.hjList:[],
        },
        userCode:this.$store.state.uid,
        userName:this.$store.state.uname,
      };
      var url=this.Global.aport3+'/rxtj/getRxData';
      this.$api.post(url, p,
        r => {
          if(r.success){
            this.tableData = r.data;
          }
        })
    },
    toLink(i,type){
      var btime=this.pd.beginTime;
      var etime=this.pd.endTime;
      if(this.pd.beginTime!='' && this.pd.beginTime!=undefined)
        {
          btime=this.pd.beginTime+"000000";
        }
      if(this.pd.endTime!='' && this.pd.endTime!=undefined)
        {
          etime=this.pd.endTime+"235959";
        }
        let p={
           "beginTime":btime,
           "endTime":etime,
           "ssfjmc":i.fj,
           "sblx":type,
           "operatorId":this.$store.state.uid,
           "operatorNm":this.$store.state.uname,
        }
        this.$router.push({name: 'LZSJHE',query:{ cdt:p}});
    }

  }
}
</script>

<style scoped>
.sb{color: blue}
.sb:hover{color: red}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
  /* background: url(../../../assets/img/t1.png); */
  background-size: 100% 100%;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{padding-top: 5px;}
  .crcolor{background: #EFF3F6;}
  .yy-input-text{text-align:left!important;}
</style>
