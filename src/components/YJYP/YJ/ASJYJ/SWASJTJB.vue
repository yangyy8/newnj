<template lang="html">
  <!-- 持短期签证-->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="20" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8" :offset="2" class="input-item">
                  <span class="input-text">查询时间：</span>
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
            <el-table-column prop="lb" label="类别" width="120px">
            </el-table-column>
            <el-table-column prop="hj" label="合计">
            </el-table-column>
            <el-table-column label="治安案件">
              <el-table-column
              prop="xj1"
              label="小计" width="70px">
              </el-table-column>
              <el-table-column
              prop="tq"
              label="偷窃" width="70px">
              </el-table-column>
              <el-table-column
              prop="xxzs"
              label="寻衅滋事" width="70px">
              </el-table-column>
              <el-table-column
              prop="odtr"
              label="殴打他人" width="70px">
              </el-table-column>
              <el-table-column
              prop="zp"
              label="诈骗" width="70px">
              </el-table-column>
              <el-table-column
              prop="wx"
              label="猥亵" width="70px">
              </el-table-column>
              <el-table-column
              prop="qtzaaj"
              label="其他" width="70px">
              </el-table-column>
            </el-table-column>
            <el-table-column  label="刑事案件">
              <el-table-column
              prop="xj2"
              label="小计" width="70px">
              </el-table-column>
              <el-table-column
              prop="bz"
              label="爆炸" width="70px">
              </el-table-column>
              <el-table-column
              prop="fh"
              label="放火" width="70px">
              </el-table-column>
              <el-table-column
              prop="bj"
              label="绑架" width="70px">
              </el-table-column>
              <el-table-column
              prop="td"
              label="投毒" width="70px">
              </el-table-column>
              <el-table-column
              prop="sr"
              label="杀人" width="70px">
              </el-table-column>
              <el-table-column
              prop="sh"
              label="伤害" width="70px">
              </el-table-column>
              <el-table-column
              prop="q"
              label="强奸" width="70px">
              </el-table-column>
              <el-table-column
              prop="qj"
              label="抢劫" width="70px">
              </el-table-column>
              <el-table-column
              prop="qd"
              label="抢夺" width="70px">
              </el-table-column>
              <el-table-column
              prop="fmdp"
              label="贩卖毒品" width="70px">
              </el-table-column>
              <el-table-column
              prop="dq"
              label="盗窃" width="70px">
              </el-table-column>
              <el-table-column
              prop="zpa"
              label="诈骗" width="70px">
              </el-table-column>
              <el-table-column
              prop="qtxsaj"
              label="其他" width="70px">
              </el-table-column>
            </el-table-column>
            <el-table-column label="交通案事件">
              <el-table-column
               prop="xj3"
               label="小计" width="70px">
              </el-table-column>
              <el-table-column
               prop="jtsg"
               label="交通事故" width="70px">
              </el-table-column>
              <el-table-column
               prop="jtzs"
               label="交通肇事"  width="70px">
              </el-table-column>
            </el-table-column>
              <el-table-column label="出入境案事件">
                <el-table-column
                prop="xj4"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column label="三非">
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
                <el-table-column
                prop="wfzsdj"
                label="违反住宿登记" width="70px">
                </el-table-column>
                <el-table-column
                prop="qtcrjaj"
                label="其他" width="70px">
                </el-table-column>
              </el-table-column>
              <el-table-column label="其他案事件">
                <el-table-column
                prop="xj5"
                label="小计" width="70px">
                </el-table-column>
                <el-table-column
                prop="yscw"
                label="遗失财务" width="70px">
                </el-table-column>
                <el-table-column
                prop="yszj"
                label="遗失证件" width="70px">
                </el-table-column>
                <el-table-column  label="死亡">
                  <el-table-column
                  prop="zcsw"
                  label="正常死亡" width="70px">
                  </el-table-column>
                  <el-table-column
                  prop="fzcsw"
                  label="非正常死亡" width="70px">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                prop="qtaj"
                label="其他" width="70px">
                </el-table-column>
              </el-table-column>
         </el-table>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      pd: {BASJ_DateRange:{begin:'',end:''}},
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
      this.$api.post(this.Global.aport2+'/ajbbController/swasjtj', p,
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
        this.$api.post(this.Global.aport2+'/ajbbController/exportNjsf',p,
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
