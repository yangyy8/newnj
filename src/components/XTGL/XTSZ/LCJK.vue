<template lang="html">
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="12" class="padR5">
          <div class="yylbt mb-15" style="text-align:left">Task最近执行状况</div>
          <el-table
               :data="tableData1"
               border
               ref="multipleTable"
               :highlight-current-row="true"
               style="width: 100%"
               @selection-change="handleSelectionChange"
               @header-click="titleShow">
               <el-table-column
                 prop="taskInfo.taskMc"
                 label="Task名称">
                  <template slot-scope="scope">
                     <span class="redx hand" @click="detailFun(scope.row,1)">{{scope.row.taskInfo.taskMc}}</span>
                  </template>
               </el-table-column>
               <el-table-column
                 prop="taskHistoryInfo.timeBegin"
                 label="开始时间">
               </el-table-column>
               <el-table-column
                 prop="taskHistoryInfo.timeEnd"
                 label="结束时间">
               </el-table-column>
               <el-table-column
                 prop="taskHistoryInfo.states"
                 label="执行状况">
               </el-table-column>
             </el-table>
        </el-col>
        <el-col :span="12" class="padL5" style="border-left:1px solid rgba(239,235,235,1)">
          <div class="yylbt mb-15" style="text-align:left">Task执行状况</div>
          <div class="">
            <el-row type="flex">
              <el-col :span="22" class="br">
                <el-row align="center"   :gutter="2">
                  <el-col  :sm="24" :md="12" :lg="12"   class="input-item">
                     <span class="input-text t-width25">Task名称：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="pd.taskBm" class="input-input"></el-input>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="12"   class="input-item">
                     <span class="input-text t-width25">执行状况：</span>
                     <el-select v-model="pd.status" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                       <el-option label="0 - 正在执行" value='0'></el-option>
                       <el-option label="1 - 执行完成" value='1'></el-option>
                       <el-option label="2 - 执行异常" value='2'></el-option>
                     </el-select>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text t-width25">开始时间：</span>
                    <el-date-picker
                       v-model="pd.startDate" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间"
                       class="input-input">
                    </el-date-picker>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text t-width25">结束时间：</span>
                    <el-date-picker
                       v-model="pd.endDate" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间"
                       class="input-input">
                    </el-date-picker>
                  </el-col>
                </el-row>
               </el-col>
              <el-col :span="2" class="down-btn-area">
                <el-button type="success" size="small" class="t-mb"  @click="CurrentPage=1;getList2(CurrentPage,pageSize,pd)">查询</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="yycontent">
            <el-table
                 :data="tableData2"
                 border
                 ref="multipleTable"
                 :highlight-current-row="true"
                 style="width: 100%"
                 @selection-change="handleSelectionChange"
                 @header-click="titleShow">
                 <el-table-column
                   prop="taskMc"
                   label="Task名称">
                    <template slot-scope="scope">
                       <span>{{scope.row.taskMc}}</span>
                    </template>
                 </el-table-column>
                 <el-table-column
                   prop="timeBegin"
                   label="开始时间">
                 </el-table-column>
                 <el-table-column
                   prop="timeEnd"
                   label="结束时间">
                 </el-table-column>
                 <el-table-column
                   prop="states"
                   label="执行状况">
                 </el-table-column>
                 <el-table-column
                   label="操作" width="70">
                   <template slot-scope="scope">
                     <div>
                        <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-tickets" @click="detailFun(scope.row)"></el-button>
                     </div>
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
        </el-col>
      </el-row>
    </div>
    <el-dialog title="详情" :visible.sync="detailsDialogVisible" width="1200px">
      <el-table
           :data="tableData3"
           border
           ref="multipleTable"
           :highlight-current-row="true"
           style="width: 100%"
           @selection-change="handleSelectionChange"
           @header-click="titleShow">
           <el-table-column
             prop="jobMc"
             label="Job名称">
           </el-table-column>
           <el-table-column
             prop="param"
             label="参数">
           </el-table-column>
           <el-table-column
             prop="timeBegin"
             label="开始时间">
           </el-table-column>
           <el-table-column
             prop="timeEnd"
             label="结束时间">
           </el-table-column>
           <el-table-column
             prop="step"
             label="执行步骤">
           </el-table-column>
           <el-table-column
             prop="states"
             label="执行状态">
           </el-table-column>
           <el-table-column
             prop="msg"
             label="异常信息">
           </el-table-column>
         </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailsDialogVisible=false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      options: this.pl.ps,
      tableData1:[],
      tableData2:[],
      tableData3:[],
      detailsDialogVisible:false,
      pd:{},
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  mounted(){
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
  },
  activated(){
    this.getList1();
    this.getList2(this.CurrentPage, this.pageSize, this.pd);
  },
  methods:{
    titleShow(e,el){
      el.target.title = e.label;
    },
    handleSelectionChange(val) {},
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList2(this.CurrentPage, this.pageSize, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList2(this.CurrentPage, this.pageSize, this.pd);
    },
    detailFun(val,type){
      this.detailsDialogVisible = true;
      let p={};
      if(type==1){
         p={
          hid:val.taskHistoryInfo.hid,
          taskBm:val.taskHistoryInfo.taskBm
        }
      }else{
         p={
          hid:val.hid,
          taskBm:val.taskBm
        }
      }

      this.$api.post(this.Global.aport12+'/manager/getTaskInfoByTask',p,
       r =>{
         this.tableData3 = r;
       })
    },
    getList1(){
      this.$api.post(this.Global.aport12+'/manager/getTaskStateByDay',{},
        r =>{
          // if(r.success){
            this.tableData1 = r;
          // }
        })
    },
    getList2(currentPage, showCount, pd){
      var formData = new FormData();
      formData.append('map',pd);
      formData.append('currentPage',currentPage);
      formData.append('showCount',showCount);

      this.$api.post(this.Global.aport12+'/manager/getTaskByCondition',formData,
       r =>{
         // if(r.success){
           this.tableData2 = r.data;
           this.TotalResult = r.count;
         // }
       })
    },
  }
}
</script>

<style lang="css" scoped>
</style>
