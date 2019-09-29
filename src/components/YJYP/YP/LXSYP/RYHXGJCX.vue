<template lang="html">
  <!-- 人员画像 -->
  <div class="yymain">
    <div class="yycontent">
      <el-row>
        <el-col :span="12">
             <div class="yylbt mb-15">人员信息列表</div>
        </el-col>
        <el-col :span="12" style="text-align:right; padding-right:2px;">
          <!-- <el-button type="success" @click="$router.go(-1)" size="mini">返回</el-button> -->
        </el-col>
      </el-row>
      <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <el-table-column
             prop="ZWXM"
             label="中文姓名">
           </el-table-column>
           <el-table-column
             prop="YWXM"
             label="英文姓名">
           </el-table-column>
           <el-table-column
             prop="XB_DESC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="CSRQ"
             label="出生日期">
           </el-table-column>
           <el-table-column
             prop="GJDQ_DESC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="ZJXY_DESC"
             label="宗教信仰">
           </el-table-column>
           <el-table-column
             prop="SJLY"
             label="数据来源">
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
             prop="ZJYXQ"
             label="证件有效期">
           </el-table-column>
           <el-table-column
             label="操作" width="80">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'RYHX_XQ',query:{row:scope.row}})"></el-button>
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
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {CSRQ_DateRange:{},TLYXQ_DateRange:{},DDRQ_DateRange:{}},
      pd0:{},
      detailsDialogVisible:false,
      options:this.pl.options,
      tableData: [],
    }
  },
  activated() {

    if(this.$route.query.row)
    {
      console.log('this.row',this.$route.query.row);
      if(this.$route.query.row.ZWXM){
        console.log('---111');
         this.pd.ZWXM=this.$route.query.row.ZWXM;
       }
      if(this.$route.query.row.YWXM){
          console.log('---222');
       this.pd.YWXM=this.$route.query.row.YWXM;
       }

         if(this.$route.query.row.XB){
           console.log('---333');
       this.pd.XB=this.$route.query.row.XB;
     }
     if(this.$route.query.row.GJDQ){
        console.log('---4444');
       this.pd.GJDQ=this.$route.query.row.GJDQ;
     }
     if(this.$route.query.row.ZJHM){
         console.log('---5555');
       this.pd.ZJHM=this.$route.query.row.ZJHM;
     }
     if(this.$route.query.row.CSRQ_DateRange.begin){
     this.pd.CSRQ_DateRange.begin=this.$route.query.row.CSRQ_DateRange.begin;
     }
     if( this.$route.query.row.CSRQ_DateRange.end){
     this.pd.CSRQ_DateRange.end=this.$route.query.row.CSRQ_DateRange.end;
     }
     if(this.$route.query.row.TLYXQ_DateRange.begin){
     this.pd.TLYXQ_DateRange.begin=this.$route.query.row.TLYXQ_DateRange.begin;
     }
     if(this.$route.query.row.TLYXQ_DateRange.end){
     this.pd.TLYXQ_DateRange.end=this.$route.query.row.TLYXQ_DateRange.end;
     }
     if(this.$route.query.row.DDRQ_DateRange.begin){
     this.pd.DDRQ_DateRange.begin=this.$route.query.row.DDRQ_DateRange.begin;
     }
     if(this.$route.query.row.DDRQ_DateRange.end){
     this.pd.DDRQ_DateRange.end=this.$route.query.row.DDRQ_DateRange.end;
     }
     if(this.$route.query.row.XZZ_Like){
     this.pd.XZZ_Like=this.$route.query.row.XZZ_Like;
     }
    }
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  mounted() {

    // this.$store.dispatch('getGjdq');
    // this.$store.dispatch('getXB');
    // this.$store.dispatch('getZjzl');

  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage, showCount, pd) {

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getjbxx', p,
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
<style>

</style>
