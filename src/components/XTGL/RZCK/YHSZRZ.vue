<template lang="html">
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item yzform" data-scope="demo" data-name="tableName" data-type="input"
                 v-validate-easy="[['required']]">
                  <span class="input-text"><span class="redx">* </span>资源类型：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.tableName"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item yzform" data-scope="demo" data-name="sourceColName" data-type="input"
                 v-validate-easy="[['required']]">
                  <span class="input-text"><span class="redx">* </span>接口名称：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.sourceColName"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">检索关键字：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.sourceColFilterVal"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8" class="input-item">
                  <span class="input-text"><span class="redx">* </span>时间范围：</span>
                  <div class="input-input t-flex timeSpecial">
                    <el-date-picker
                       v-model="pd.lowRowKey"
                       format="yyyy-MM-dd"
                       type="date" size="small"
                       :clearable='false'
                       value-format="timestamp"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.upRowKey"
                        format="yyyy-MM-dd"
                        type="date" size="small"
                        :clearable='false'
                        value-format="timestamp"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" class="t-mb" @click="getList(CurrentPage,pageSize,pd)">查 &nbsp;&nbsp;&nbsp;&nbsp; 询</el-button>
              <el-button type="primary" size="small" class="t-ml0" @click="download()">数据下载</el-button>
            </el-col>
          </el-row>
          <el-table
             :data="tableData"
             border
             ref="multipleTable"
             :highlight-current-row="true"
             style="width: 100%"
             @selection-change="handleSelectionChange">
             <el-table-column
               type="selection"
               width="55">
             </el-table-column>
             <el-table-column
               prop="rowKey"
               label="时间">
             </el-table-column>
             <el-table-column
               label="日志">
               <template slot-scope="scope">
                 <el-popover
                    placement="top-start"
                    width="700"
                    trigger="hover"
                    :content="scope.row[pd.sourceColName]">
                    <span slot="reference">{{scope.row[pd.sourceColName] | ellipsis}}</span>
                  </el-popover>
               </template>
             </el-table-column>
             <el-table-column
               label="操作" width="70">
               <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
                 <el-button type="text"  class="a-btn"  title="导出"  icon="el-icon-download" @click="downOnly(scope.row)"></el-button>
               </template>
             </el-table-column>
           </el-table>
           <div class="middle-foot" style="margin-top:10px;" v-if="TotalResult!=0">
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
    <el-dialog title="日志详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog combine" :append-to-body="false" :modal="false">
      <div>{{content}}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{
        tableName: "test",
        sourceColName: "name",
      },
      tableData:[],
      detailsDialogVisible:false,
      content:'',
      downNum:0,
      multipleSelection:[],
    }
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 60) {
        return value.slice(0, 60) + "...";
      }
      return value;
    }
  },
  methods:{
    getList(currentPage,showCount,pd){
      this.V.$submit('demo',(canSumit,data) => {
        if(!canSumit) return;
        if(this.pd.lowRowKey==''||this.pd.lowRowKey==null||this.pd.upRowKey==''||this.pd.upRowKey==null){
          this.$message({
             message: '时间范围不能为空！',
             type: 'warning'
           });
           return;
        }
        var timeC = this.pd.upRowKey - this.pd.lowRowKey;
        var  days = timeC/3600/24/1000;
        if(days>2){
          this.$alert('时间范围不大于2天', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
            });
          }
        });
        return
        }
          pd.token = this.$store.state.token;
          pd.page = currentPage;
          pd.pageSize = showCount;
          this.$api.post(this.Global.aport9+'/api/hbase/findData',pd,
           r =>{
             this.tableData = r.resultdata.data
             this.TotalResult=r.resultdata.totalCount
           })
      })
    },

    pageSizeChange(val) {
      this.getList(this.CurrentPage, val,this.pd);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize,this.pd);
    },
    handleSelectionChange(val){
      this.multipleSelection = val;
    },
    details(val){
      this.detailsDialogVisible = true;
      this.content = val[this.pd.sourceColName];
    },
    downOnly(val){
      let p={
        data:[val],
        token:this.$store.state.token
      }
      this.$api.post(this.Global.aport9+'/api/hbase/loadPageData',p,
       r =>{
          this.downloadM(r)
       },e=>{},{},'blob')
    },
    download(n){
      this.V.$submit('demo',(canSumit,data) => {
        if(!canSumit) return;
        if(this.pd.lowRowKey==''||this.pd.lowRowKey==null||this.pd.upRowKey==''||this.pd.upRowKey==null){
          this.$message({
             message: '时间范围不能为空！',
             type: 'warning'
           });
           return;
        }
        var timeC = this.pd.upRowKey - this.pd.lowRowKey;
        var  days = timeC/3600/24/1000;
        if(days>2){
          this.$alert('时间范围不大于2天', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
            });
          }
        });
        return
        }
        if(this.multipleSelection.length==0){
          this.$message({
             message: '请先选择数据！',
             type: 'warning'
           });
           return;
        }
        let p={
          data:this.multipleSelection,
          token:this.$store.state.token
        }
          this.$api.post(this.Global.aport9+'/api/hbase/loadPageData',p,
           r =>{
             // if(r.resultdata.callBack){
               // this.downNum++
               // if(this.downNum==1){
               //   this.$confirm('最多只能导出 10 条,是否继续?','提示',{
               //      confirmButtonText: '确定',
               //      cancelButtonText: '取消',
               //      type: 'warning'
               //    }).then(() => {
               //      this.downLoadM(r.resultdata.data)
               //      setTimeout(function(){
               //        that.$alert('点击 导出按钮 可继续导出数据', '提示', {
               //          confirmButtonText: '确定',
               //        });
               //      },1000)
               //    }).catch(() => {
               //      that.$message({
               //        type: 'info',
               //        message: '已取消导出'
               //      });
               //    });
               // }else{
               //
               // }

               this.downloadM(r)
               // this.download()
             // }else{
             //   this.$message({
             //      message: '已导出全部数据',
             //      type: 'success'
             //    });
             //    return;
             // }
           },e=>{},{},'blob')

      })
    },
    getFile(){
      this.pd.token = this.$store.state.token
      this.$api.post(this.Global.aport9+'/api/hbase/loadData',this.pd,
       r =>{
          this.downloadM(r.resultdata.data)
       })
    },
    downloadM(data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/txt"}))
        // let url='data:application/vnd.ms-excel;base64,'+data
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', this.pd.sourceColName+'.txt')
        document.body.appendChild(link)
        link.click();
    },
  },
}
</script>

<style scoped>
</style>
<style media="screen">
  .timeSpecial .el-input--prefix .el-input__inner{
    padding-left: 18px!important;
  }
  .timeSpecial .el-input--suffix .el-input__inner{
    padding-right: 0px!important;
  }
  .timeSpecial .el-input__icon{
    width: 10px!important;
  }
</style>
