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
            <el-table-column prop="gjdq" label="国别" >
            </el-table-column>
            <el-table-column prop="chzs" label="查获总数（人）" width="120px">
            </el-table-column>
            <el-table-column label="违法种类（人次）嫌疑人">
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
            <el-table-column  label="来华事由">
              <el-table-column
              prop="xx"
              label="学习" width="70px">
              </el-table-column>
              <el-table-column
              prop="ly"
              label="旅游" width="70px">
              </el-table-column>
              <el-table-column
              prop="my"
              label="贸易" width="70px">
              </el-table-column>
              <el-table-column
              prop="fw"
              label="访问" width="70px">
              </el-table-column>
              <el-table-column
              prop="qstj"
              label="亲属团聚" width="70px">
              </el-table-column>
              <el-table-column
              prop="srsw"
              label="私人事务" width="70px">
              </el-table-column>
              <el-table-column
              prop="jy"
              label="就业" width="70px">
              </el-table-column>
              <el-table-column
              prop="qt"
              label="其他" width="70px">
              </el-table-column>
            </el-table-column>
            <el-table-column label="强制措施">
              <el-table-column prop="jlsc" label="拘留审查" width="100px">
              </el-table-column>
              <el-table-column prop="xzhdfw" label="限制活动范围">
              </el-table-column>
            </el-table-column>
              <el-table-column label="处理结果" width="70px">
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
                prop="qscj"
                label="拦阻劝返" width="70px">
                </el-table-column>
                <el-table-column
                prop="qscj"
                label="遣送出境" width="70px">
                </el-table-column>
                <el-table-column
                prop="qscj"
                label="其他" width="70px">
                </el-table-column>
              </el-table-column>
              <el-table-column label="发现方式" width="70px">
                <el-table-column
                prop="jczjh"
                label="检查站截获" width="70px">
                </el-table-column>
                <el-table-column
                prop="sjfx"
                label="数据分析" width="70px">
                </el-table-column>
                <el-table-column
                prop="qtfx"
                label="前台发现" width="70px">
                </el-table-column>
                <el-table-column
                prop="zfjc"
                label="走访检查" width="70px">
                </el-table-column>
                <el-table-column
                prop="qzjb"
                label="群众举报" width="70px">
                </el-table-column>
                <el-table-column
                prop="shmqc"
                label="社会面清查" width="70px">
                </el-table-column>
                <el-table-column
                prop="apphc"
                label="APP 核查" width="70px">
                </el-table-column>
              </el-table-column>
              <el-table-column label="活动场所" width="70px">
                <el-table-column
                prop="ldmjxqy"
                label="劳动密集型企业" width="70px">
                </el-table-column>
                <el-table-column
                prop="pxjg"
                label="培训机构" width="70px">
                </el-table-column>
                <el-table-column
                prop="swyx"
                label="涉外院校" width="70px">
                </el-table-column>
                <el-table-column
                prop="jzzj"
                label="家政中介" width="70px">
                </el-table-column>
                <el-table-column
                prop="ylcs"
                label="娱乐场所" width="70px">
                </el-table-column>
                <el-table-column
                prop="czw"
                label="出租屋" width="70px">
                </el-table-column>
                <el-table-column
                prop="qthdcs"
                label="其他活动场所" width="70px">
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
    }
  },
    activated(){
        this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
  mounted() {
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
      /* this.pd.MXLX='ASJ_DQQZFFJY'; */
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport2+'/ajbbController/njsfzgtjb', p,
        r => {
          this.tableData = r.data.data;
          this.TotalResult = r.data.totalResult;
        })
    },
    download(){
        this.$api.post(this.Global.aport2+'/ajbbController/exportNjsf',{pd:this.pd},
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
        link.setAttribute('download', '报表.xlsx')
        document.body.appendChild(link)
        link.click()
    },
  }
}
</script>
<style scoped>
</style>
