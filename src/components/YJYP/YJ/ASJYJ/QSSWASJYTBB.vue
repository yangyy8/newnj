<template lang="html">
  <!-- 全市涉外案事件月通报表-->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="20" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="12" :offset="2" class="input-item">
                  <span class="input-text">受理时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.BASJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.BASJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
          <el-button type="success" size="small"  @click="download">导出</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">信息列表</div>
      <el-table
           :data="tableData"
           border
           :highlight-current-row="true"
           style="width: 100%"
           class="t-table1">
           <el-table-column
             prop="xh"
             label="序号" width="60">
           </el-table-column>
           <el-table-column
             prop="dw"
             label="单位">
           </el-table-column>
           <el-table-column
             prop="xj"
             label="小计">
           </el-table-column>
            <el-table-column label="违临">
              <el-table-column
                prop="jywl"
                label="简易"
                width="120">
              </el-table-column>
              <el-table-column
                prop="ybwl"
                label="一般"
                width="120">
              </el-table-column>
            </el-table-column>
           <el-table-column
             prop="ffjl"
             label="非法居留">
           </el-table-column>
           <el-table-column
             prop="ffrj"
             label="非法入境">
           </el-table-column>
           <el-table-column
             prop="ffjy"
             label="非法就业">
           </el-table-column>
           <el-table-column
             prop="qt"
             label="其他出入境案件（不包括非法聘用）">
           </el-table-column>
           <el-table-column
             prop="fhgbj"
             label="妨害国边境">
           </el-table-column>
           <el-table-column
             prop="swsj"
             label="涉外事件">
           </el-table-column>
           <el-table-column
             prop="fzcsw"
             label="非正常死亡">
           </el-table-column>
           <el-table-column
             prop="xsaj"
             label="刑事案件">
           </el-table-column>
           <el-table-column
             prop="qsry"
             label="遣送人员">
           </el-table-column>
         </el-table>
     <div class="middle-foot">
        <div class="page-msg">
          <div class="">
        共{{TotalResult}}条记录
          </div>
        </div>

      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {BASJ_DateRange:{begin:"",end:""}},
      tableData: [],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
    activated(){
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
    getList(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport2+'/ajbbController/swajbb', p,
        r => {
          this.tableData = r.data.data;
          this.TotalResult = r.data.data.length;
        })
    },
    download(){
      if(this.tableData.length==0){
         this.$message.error('无可导出数据！');
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
        this.$api.post(this.Global.aport2+'/ajbbController/exportSwajbb',p,
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
        link.setAttribute('download', '报表.xls')
        document.body.appendChild(link)
        link.click()
    },
  }
}
</script>
<style scoped>

</style>
