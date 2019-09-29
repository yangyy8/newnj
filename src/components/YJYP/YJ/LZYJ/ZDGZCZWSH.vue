<template lang="html">
  <!-- 重点出租房屋隐患预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                <span class="input-text">所属分局：</span>
                <el-select v-model="pd.XZQHDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                  <el-option
                    v-for="(item,ind) in ssfj"
                    :key="ind"
                    :label="item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                <span class="input-text">派出所：</span>
                <el-select v-model="pd.PCS" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                  <el-option
                    v-for="item in $store.state.pcs"
                    :key="item.dm"
                    :label="item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
            </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">责任区：</span>
                    <el-select v-model="pd.JWZRQ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in zrq"
                        :key="item.dm"
                        :label="item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">街道名称：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.JLXMC_Like" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">入住时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginZSRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endZSRQ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">预警时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginBJSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间">
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endBJSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">审核状态：</span>
                  <el-select v-model="pd.SHZT" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.shzt"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">处理状态：</span>
                    <el-select v-model="pd.CLZT" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.clzt"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">甄别信息列表</div>
      <el-table
           :data="tableData"
           border
           style="width: 100%">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="XZQH_DESC"
             label="行政区划">
           </el-table-column>
           <el-table-column
             prop="PCS_DESC"
             label="派出所">
           </el-table-column>
           <el-table-column
             prop="JWZRQ"
             label="责任区">
           </el-table-column>
           <el-table-column
             prop="JLXMC"
             label="街道名称">
           </el-table-column>
           <el-table-column
             prop="ZSRQ"
             label="入住时间">
           </el-table-column>
           <el-table-column
             prop="BJSJ"
             label="预警时间">
           </el-table-column>
           <el-table-column
             prop="SHZT_DESC"
             label="审核状态">
             <!-- <template slot-scope="scope">
                <span>{{scope.row.SHZT=="0"?"已通过":scope.row.SHZT=="1"?"未通过":""}}</span>
              </template> -->
           </el-table-column>
           <el-table-column
             prop="CLZT_DESC"
             label="处理状态">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'CZFWYHYJ_XQ',query:{type:0,row:scope.row,leiType:'zd',zdsh:'zdsh'}})"></el-button>
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
</template>
<script>
export default {
  data() {
    return {
      ssfj:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd0: {},
      options: this.pl.ps,
      tableData: [],
        zrq: [],
      pd:{ZSRQ_DateRange:{dataType:'date'},BJSJ_DateRange:{}}
    }
  },
  activated(){
    let _this = this;
    setTimeout(function(){
      _this.getList(_this.CurrentPage, _this.pageSize, _this.pd);
    },1000)

  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getPcs');
    this.$store.dispatch('getXzqh');
    this.$store.dispatch('getClzt');
    this.$store.dispatch('getShzt');
    this.getZrq();
    this.getFJ();
  },

  methods: {
    getFJ() {
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname
      };
      this.$api.post(this.Global.aport2 + '/data_report/selectSsfjDm', p,
        r => {
          this.ssfj = r.data.SSFJ;
        })
    },
    getZrq() {
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname
      };
      var url = this.Global.aport2 + "/data_report/selectZrqDm";
      this.$api.post(url, p,
        r => {
          this.zrq = r.data.ZRQ;
        })
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage, showCount, pd) {
      pd.MXLX='CZW_ZDGZYJ';
      pd.ZSRQ_DateRange.begin=this.pd0.beginZSRQ;
      pd.ZSRQ_DateRange.end=this.pd0.endZSRQ;
      pd.BJSJ_DateRange.begin=this.pd0.beginBJSJ;
      pd.BJSJ_DateRange.end=this.pd0.endBJSJ;
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "orderBy":'BJSJ',
        "orderType":'DESC'
      };
      this.$api.post(this.Global.aport4+'/fangWuWarningInfoController/getInfoListByMxLx', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
  }

}
</script>
<style scoped>

</style>
