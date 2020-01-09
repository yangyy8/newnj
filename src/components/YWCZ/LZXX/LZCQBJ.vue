<template lang="html">
    <!-- 出入境记录核查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="1">
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">住宿日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">证件号码：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.zjhm"  class="yy-input-input"></el-input>
                </el-col>
         </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" class="t-mb" @click="getList(pd)">查询</el-button>
              <el-button type="primary" size="small" class="t-ml0" @click="download">导出</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
          <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange"
           @header-click="titleShow">
           <el-table-column
             prop="SSFJMC"
             label="所属分局">
           </el-table-column>
           <el-table-column
             prop="ZS"
             label="总数">
             <template slot-scope="scope">
             <a class="sb" @click="toLink (scope.row,'ZS',scope.row.ZS)"> {{scope.row.ZS}}</a>
             </template>
           </el-table-column>
           <el-table-column
             prop="YCL"
             label="已处理">
             <template slot-scope="scope">
             <a class="sb" @click="toLink (scope.row,'YCL',scope.row.YCL)" > {{scope.row.YCL}}</a>
             </template>
           </el-table-column>
           <el-table-column
             prop="WCL"
             label="未处理">
             <template slot-scope="scope">
                <a class="sb" @click="toLink (scope.row,'WCL',scope.row.WCL)"> {{scope.row.WCL}}</a>
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
      pd: {zjhm:''},
      tableData:[],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  activated(){
    this.getList(this.pd);
  },
  mounted() {
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
  },
  methods: {
    titleShow(e,el){
      el.target.title = e.label;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    download(){
      if(this.tableData.length==0){
         this.$message.error('无可导出数据！');
         return
      }
      let p = {
         pd:this.pd,
         userName:this.userName,
         userCode:this.userCode,
         token:this.token,
         orgJB:this.juState,
         orgCode:this.orgCode,
         currentPage:1,
         showCount:10000,
      };
      this.$api.post(this.Global.aport2+'/lzbjxx/exportLzbjxxData',p,
       r =>{
         this.downloadM(r)
       },e=>{},{},'blob')
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/octet-stream"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '临住超期报警.xls')
        document.body.appendChild(link)
        link.click()
    },
    getList(pd) {
      let p = {
        pd:pd,
        userName:this.userName,
        userCode:this.userCode,
        token:this.token,
        orgJB:this.juState,
        orgCode:this.orgCode,
        currentPage:1,
        showCount:10000,
      };

      var url=this.Global.aport2+'/lzbjxx/getLzbjxxData';
      this.$api.post(url, p,
        r => {
          if(r.success){
           this.tableData = r.data;
          }
        })
    },
    toLink(i,type,num){
        let p={
           "begin":this.pd.begin,
           "end":this.pd.end,
           "type":type,
           "ssfj":i.SSFJ,
           'zjhm':this.pd.zjhm,
           // 'size':num
        }
        this.$router.push({name: 'CQBJRYXX',query:{cdt:p}});
        // if(i.fj=='合计'){
        //     p.ssfjmc='';
        //     this.$router.push({name: 'LZSJHE',query:{ cdt:p}});
        // }else{
        //   p.ssfjmc=i.fj;
        //   this.$router.push({name: 'LZSJHE',query:{ cdt:p}});
        // }
    }
  }
}
</script>

<style scoped>
.sb{display:block;width:100%;height:100%;cursor:pointer;color: blue}
.sb:hover{color: red}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
  background: url(../../../assets/img/t1.png);
  background-size: 100% 100%;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{padding-top: 5px;}
  .crcolor{background: #EFF3F6;}
  .yy-input-text{text-align:left!important;}
</style>
