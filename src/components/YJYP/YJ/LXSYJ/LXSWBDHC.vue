<template lang="html">
  <!-- 留学生预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">性别：</span>
                    <el-select v-model="pd.XBDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.xb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">护照号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.HZHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">核查时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.SCSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.SCSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">是否入境：</span>
                    <el-select v-model="pd.SFRJ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="0" label="否"></el-option>
                      <el-option value="1" label="是"></el-option>
                      <el-option value="2" label="已出境"></el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">是否存在临住：</span>
                    <el-select v-model="pd.SFCZLZ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="0" label="否"></el-option>
                      <el-option value="1" label="是"></el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">是否申请居留许可：</span>
                    <el-select v-model="pd.SFSQJLXK" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="0" label="否"></el-option>
                      <el-option value="1" label="是"></el-option>
                    </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  class="t-mb" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">预警信息列表</div>
      <el-table
           :data="tableData"
           border
           ref="multipleTable"
           :highlight-current-row="true"
           style="width: 100%">
           <el-table-column
             prop="YWXM"
             label="英文姓名">
           </el-table-column>
           <el-table-column
             prop="XBMC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="GJDQMC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="HZHM"
             label="护照号码">
           </el-table-column>
           <el-table-column
             prop="CSRQ"
             label="出生日期">
           </el-table-column>
           <el-table-column
             prop="SFRJ_DESC"
             label="是否入境">
             <template slot-scope="scope">
               <span :class="scope.row.SFRJ_DESC=='否'?'redx':''">{{scope.row.SFRJ_DESC}}</span>
              </template>
           </el-table-column>
           <el-table-column
             prop="SFCZLZ_DESC"
             label="是否有临住">
             <template slot-scope="scope">
               <span :class="scope.row.SFCZLZ_DESC=='否'?'redx':''">{{scope.row.SFCZLZ_DESC}}</span>
              </template>
           </el-table-column>
           <el-table-column
             prop="SFSQJLXK_DESC"
             label="是否申请居留许可">
             <template slot-scope="scope">
               <span :class="scope.row.SFSQJLXK_DESC=='否'?'redx':''">{{scope.row.SFSQJLXK_DESC}}</span>
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
      pd: {SCSJ_DateRange:{begin:'',end:''}},
      pd0:{SCSJ_DateRange:{begin:'',end:''}},
      options: this.pl.ps,
      tableData: [],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
    }
  },
  activated(){
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  mounted() {
    this.Global.indexstate=1;
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.userName=this.$store.state.uname;
    this.userCode=this.$store.state.uid;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;

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
      this.pd0.SCSJ_DateRange.begin==''?this.pd.SCSJ_DateRange.begin='':this.pd0.SCSJ_DateRange.begin==null?this.pd.SCSJ_DateRange.begin=null:this.pd.SCSJ_DateRange.begin=this.pd0.SCSJ_DateRange.begin+'000000';
      this.pd0.SCSJ_DateRange.end==''?this.pd.SCSJ_DateRange.end='':this.pd0.SCSJ_DateRange.end==null?this.pd.SCSJ_DateRange.end=null:this.pd.SCSJ_DateRange.end=this.pd0.SCSJ_DateRange.end+'000000';
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "userCode":this.userCode,
	      "userName":this.userName
      };
      this.$api.post(this.Global.aport3+'/lxslqwbd/getlxslqwbd', p,
        r => {
          if(r.success){
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
          }
        })
    },
  }
}
</script>
<style scoped>

</style>
