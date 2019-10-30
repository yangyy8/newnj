<template lang="html">
    <!-- 出入境记录核查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="19" class="br pr-20">
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
         <el-col :span="5" >
           <el-button type="success" size="small" @click="getList(pd,deepCli,1)" class="mb-15 tt-mr10">查询</el-button>
           <el-button type="info" size="small" @click="goBack" class="mb-15 tt-mr10">返回</el-button>
           <el-button type="warning" size="small" @click="download(pd,deepCli)" class="mb-15">导出</el-button>
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
               <span class="sb" @click="getList(pd,scope.row)" v-if="scope.row.level!='3'">{{scope.row.dw}}</span>
               <span v-if="scope.row.level=='3'">{{scope.row.dw}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="zrs"
             label="总人数">
             <template slot-scope="scope">
               <span class="sb" @click="toLink (pd,scope.row,'zrs')">{{scope.row.zrs}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="rxz"
             label="人像照数">
             <template slot-scope="scope">
               <span class="sb" @click="toLink (pd,scope.row,'rxz')" >{{scope.row.rxz}}</span>
             </template>
           </el-table-column>
           <!-- <el-table-column
             prop="frxz"
             label="非人像照数">
             <template slot-scope="scope">
               <span class="sb" @click="toLink (pd,scope.row,'frxz')" >{{scope.row.frxz}}</span>
             </template>
           </el-table-column> -->
           <el-table-column
             prop="qrxz"
             label="缺人像照数">
             <template slot-scope="scope">
                <span class="sb" @click="toLink (pd,scope.row,'qrxz')">{{scope.row.qrxz}}</span>
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
      levelSave:'',
      dwSave:'',
      typeSave:'',
      listSave:[],
      levelKon:{
        level:'',
        type:'0',
        list:[],//合计
        dwbm:'',
      },
      levelOne:{},
      levelTwo:{},
    }
  },
  activated(){
    this.getList(this.pd,this.deepCli,1);
  },
  mounted() {
    this.$store.dispatch('getZsbg');
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getList(pd,deepCli,type) {
      let p={};
      if(type==1){//点击查询按钮查询当前
        deepCli.level = this.levelSave;
        if(this.levelSave=='2'){deepCli = this.levelTwo};
        if(this.levelSave=='1'){deepCli = this.levelOne};
        if(this.levelSave==''){deepCli = this.levelKon};
         p = {
          pd:{
            beginDate:pd.beginDate,
            endDate:pd.endDate,
            bgList:pd.bgList,

            level:this.levelSave,
            dw:deepCli.dwbm,
            type:deepCli.type,
            list:deepCli.list,
          },
          userCode:this.$store.state.uid,
          userName:this.$store.state.uname,
        };
      }else{//点击列表嵌入
         p = {
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
        this.levelSave = deepCli.level;
        if(this.levelSave=='2'){this.levelTwo.dwbm = deepCli.dwbm;this.levelTwo.list = deepCli.hjList;this.levelTwo.type = deepCli.type;this.levelTwo.level = deepCli.level;};
        if(this.levelSave=='1'){this.levelOne.dwbm = deepCli.dwbm;this.levelOne.list = deepCli.hjList;this.levelOne.type = deepCli.type;this.levelOne.level = deepCli.level;};
        if(this.levelSave==''){this.levelKon.dwbm = deepCli.dwbm;this.levelKon.list = deepCli.hjList;this.levelKon.type = deepCli.type;this.levelKon.level = deepCli.level;};
      }

      var url=this.Global.aport3+'/rxtj/getRxData';
      this.$api.post(url, p,
        r => {
          if(r.success){
            this.tableData = r.data;
          }
        })
    },
    goBack(){
      console.log(this.deepCli.level)
      if(this.levelSave=='2'){
        this.deepCli.level='1';
        this.getList(this.pd,this.levelOne)
      }else if(this.levelSave=='1'){
        this.deepCli.level='';
        this.getList(this.pd,this.levelKon)
      }
      this.levelSave = this.deepCli.level;
    },
    toLink(pd,deepCli,type){
        let p={
            beginDate:pd.beginDate,
            endDate:pd.endDate,
            bgList:pd.bgList,

            level:deepCli.level,
            dw:deepCli.dwbm,
            type:deepCli.dw=='合计'?deepCli.type='1':deepCli.type='0',
            list:deepCli.dw=='合计'?deepCli.list=deepCli.hjList:[],
            lx:type,
        }
        this.$router.push({name:'LZRYTJLB',query:{row:p}});
    },
    download(pd,deepCli){
      if(this.levelSave=='2'){deepCli = this.levelTwo};
      if(this.levelSave=='1'){deepCli = this.levelOne};
      if(this.levelSave==''){deepCli = this.levelKon};
      let p = {
        pd:{
          beginDate:pd.beginDate,
      		endDate:pd.endDate,
      		bgList:pd.bgList,

          level:deepCli.level,
      		dw:deepCli.dwbm,
      		type:deepCli.type,
          list:deepCli.list,
        },
        userCode:this.$store.state.uid,
        userName:this.$store.state.uname,
      };
      this.$api.post(this.Global.aport3+'/rxtj/exportRxData',p,
        r =>{
          this.downloadM(r,'临住人像统计列表');
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
