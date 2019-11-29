<template lang="html">
  <!-- 持短期签证-->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="20" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8" :offset="2" class="input-item">
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
      <el-table
           :data="tableData"
           border
           :highlight-current-row="true"
           style="width: 100%"
           class="t-table1">
            <el-table-column prop="rq" label="日期" >
            </el-table-column>
            <el-table-column label="违 法 犯 罪 案 件 （起）">
              <el-table-column prop="hj1" label="合计" width="100px">
              </el-table-column>
              <el-table-column label="“三非”行政案件">
                <el-table-column
                prop="xj1"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column
                prop="ffrj"
                label="非法入境" width="70px">
                </el-table-column>
                <el-table-column
                prop="ffjl"
                label="非法居留" width="70px">
                </el-table-column>
                <el-table-column
                prop="ffjy"
                label="非法就业" width="70px">
                </el-table-column>
              </el-table-column>
              <el-table-column  label="妨害国边境管理案件">
                <el-table-column
                prop="xj2"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column
                prop="zztrtygbj"
                label="组织他人偷越国边境" width="70px">
                </el-table-column>
                <el-table-column
                prop="cscrjzj"
                label="出售出入境证件" width="70px">
                </el-table-column>
                <el-table-column
                prop="ystrtygbj"
                label="运送他人偷越国边境" width="70px">
                </el-table-column>
                <el-table-column
                prop="tygbj"
                label="偷越国边境" width="70px">
                </el-table-column>
                <el-table-column
                prop="xj3"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column
                prop="bd"
                label="部督" width="70px">
                </el-table-column>
                <el-table-column
                prop="sd"
                label="省督" width="70px">
                </el-table-column>
              </el-table-column>
            </el-table-column>
            <el-table-column label="违 法 犯 罪 外 国 人 （人次）">
              <el-table-column prop="hj2" label="合计" width="100px">
              </el-table-column>
              <el-table-column label="查 获 人 次">
                <el-table-column
                prop="xj4"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column
                prop="ffrjrc"
                label="非法入境外国人" width="70px">
                </el-table-column>
                <el-table-column
                prop="ffjlrc"
                label="非法居留外国人" width="70px">
                </el-table-column>
                <el-table-column
                prop="ffjyrc"
                label="非法就业外国人" width="70px">
                </el-table-column>
                <el-table-column
                prop="fhgbjrc"
                label="妨害国边境涉案外国人" width="70px">
                </el-table-column>
              </el-table-column>
              <el-table-column label="行政强制措施(人次)" width="70px">
                <el-table-column
                prop="xj5"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column
                prop="jxpw"
                label="继续盘问" width="70px">
                </el-table-column>
                <el-table-column
                prop="jlsc"
                label="拘留审查" width="70px">
                </el-table-column>
                <el-table-column
                prop="xzhdfw"
                label="限制活动范围" width="70px">
                </el-table-column>
                <el-table-column
                prop="qscj"
                label="遣送出境" width="70px">
                </el-table-column>
              </el-table-column>
              <el-table-column label="行政处罚(人次)" width="70px">
                <el-table-column
                prop="xj6"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column
                prop="jg"
                label="警告" width="70px">
                </el-table-column>
                <el-table-column
                prop="fk"
                label="罚款" width="70px">
                </el-table-column>
                <el-table-column
                prop="xzjl"
                label="行政拘留" width="70px">
                </el-table-column>
                <el-table-column
                prop="xqcj"
                label="限期出境" width="70px">
                </el-table-column>
                <el-table-column
                prop="qzcj"
                label="驱逐出境" width="70px">
                </el-table-column>
              </el-table-column>
              <el-table-column label="刑事强制措施(人次)" width="70px">
                <el-table-column
                prop="xj7"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column
                prop="qbhs"
                label="取保候审" width="70px">
                </el-table-column>
                <el-table-column
                prop="jsjz"
                label="监视居住" width="70px">
                </el-table-column>
                <el-table-column
                prop="xsjl"
                label="刑事拘留" width="70px">
                </el-table-column>
                <el-table-column
                prop="db"
                label="逮捕" width="70px">
                </el-table-column>
                <el-table-column
                prop="jc"
                label="拘传" width="70px">
                </el-table-column>
              </el-table-column>
              <el-table-column label="其他刑事案件外国籍嫌疑人(人次)" width="70px">
                <el-table-column
                prop="xj8"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column
                prop="sdrc"
                label="涉毒" width="70px">
                </el-table-column>
                <el-table-column
                prop="sq"
                label="涉枪" width="70px">
                </el-table-column>
                <el-table-column
                prop="sg"
                label="涉拐" width="70px">
                </el-table-column>
                <el-table-column
                prop="dqp"
                label="盗抢骗" width="70px">
                </el-table-column>
              </el-table-column>

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
    }
  },
    activated(){
        this.getList(this.CurrentPage, this.pageSize, this.pd);
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
      this.$api.post(this.Global.aport2+'/ajbbController/sfzgtjb', p,
        r => {
          this.tableData = r.data.data;
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
      this.$api.post(this.Global.aport2+'/ajbbController/exportSftjb',p,
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
