<template lang="html">
  <!-- 公安机关查处非法居留-->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="20" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8" :offset="2" class="input-item">
                  <span class="input-text">受理日期：</span>
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
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8" :offset="2" class="input-item">
                  <span class="input-text">案件类别：</span>
                  <el-select v-model="pd.TYPE" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option value="0" label="0 - 非法居留"></el-option>
                    <el-option value="1" label="1 - 非法就业"></el-option>
                  </el-select>
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
           style="width: 100%">
           <el-table-column
             prop="wfzl"
             label="违法种类">
           </el-table-column>
           <el-table-column
             prop="xh"
             label="序号" >
           </el-table-column>
           <el-table-column
             prop="gj"
             label="国籍">
           </el-table-column>
           <el-table-column
             prop="lhsy"
             label="来华事由">
           </el-table-column>
            <el-table-column
              prop="zjhm"
              label="入境证件号码"
              width="120">
            </el-table-column>
            <el-table-column
              prop="qzlx"
              label="签证类型"
              width="120">
            </el-table-column>
           <el-table-column
             prop="rjka"
             label="入境口岸">
           </el-table-column>
           <el-table-column
             prop="ffrj"
             label="签证签发地点">
           </el-table-column>
           <el-table-column
             prop="zjzl"
             label="现持证件类型">
           </el-table-column>
           <el-table-column
             prop="xzd"
             label="现住地">
           </el-table-column>
           <el-table-column
             prop="jyjglx"
             label="就业机构类型">
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
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
      <div class="totalClass">
        非法居留：<span>{{num.ffjl}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        非法就业：<span>{{num.ffjy}}</span>
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
      pd: {BASJ_DateRange:{begin:'',end:''}},
      options: this.pl.ps,
      tableData: [],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
      num:{
        ffjl:0,
        ffjy:0,
      }
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
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
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
      this.$api.post(this.Global.aport2+'/ajbbController/gajggzqk', p,
        r => {
          this.tableData = r.data.data;
          this.num.ffjl = r.data.ffjl;
          this.num.ffjy = r.data.ffjy;
          this.TotalResult = r.data.totalResult;
        })
    },
    download(){
      let p={
        pd:this.pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport2+'/ajbbController/exportGajggzqk',p,
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
