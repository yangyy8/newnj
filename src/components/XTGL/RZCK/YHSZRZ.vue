<template lang="html">
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item yzform" data-scope="demo" data-name="tableName" data-type="input"
                 v-validate-easy="[['required']]">
                  <span class="input-text"><span class="redx">* </span>资源类型：</span>
                   <!-- <el-select v-model="pd.org"  filterable clearable default-first-option  class="input-input" placeholder="请选择"  size="small">
                     <el-option
                      v-for="item in company"
                      :key="item.dm"
                      :label="item.mc"
                      :value="item.dm">
                    </el-option>
                   </el-select> -->
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
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">导出方式：</span>
                  <div class="input-input">
                    <el-radio v-model="pd.pageSize" label="null">一次导出</el-radio>
                    <el-radio v-model="pd.pageSize" label="10">批次导出</el-radio>
                  </div>
                </el-col> -->
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="getList()">查询</el-button>
              <el-button type="success" size="small" @click="download(pd.pageSize)">数据下载</el-button>
            </el-col>
          </el-row>
          <el-table
             :data="tableData"
             border
             ref="multipleTable"
             :highlight-current-row="true"
             style="width: 100%">
             <el-table-column
               prop="rowKey"
               label="时间">
             </el-table-column>
             <el-table-column
               label="日志">
               <template slot-scope="scope">
                 <span>{{scope.row.this.pd.sourceColName}}</span>
               </template>
             </el-table-column>
             <el-table-column
               label="操作" width="70">
               <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
                 <el-button type="text"  class="a-btn"  title="导出"  icon="el-icon-document" @click="downOnly(scope.row)"></el-button>
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
    <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
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
      pageSize: 5,
      TotalResult: 0,
      pd:{
        pageSize:10,
        page:1,
      },
      tableData:[],
      detailsDialogVisible:false,
      content:'',
      downNum:0,
    }
  },
  methods:{
    getList(){
      this.V.$submit('demo',(canSumit,data) => {
        if(!canSumit) return;
          this.pd.token = this.$store.state.token
          this.$api.post(this.Global.aport9+'/api/hbase/findData',this.pd,
           r =>{
             // this.tableData = r.resultdata.data
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
    details(val){
      this.detailsDialogVisible = true;
      this.content = val.this.pd.sourceColName;
    },
    downOnly(val){

    },
    download(n){
      this.V.$submit('demo',(canSumit,data) => {
        if(!canSumit) return;
        if(n=='10'){//递归
          this.pd.token = this.$store.state.token
          this.$api.post(this.Global.aport9+'/api/hbase/loadData',this.pd,
           r =>{
             if(r.resultdata.callBack){
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

               this.downloadM(r.resultdata.data)
               this.download()
             }else{
               this.$message({
                  message: '已导出全部数据',
                  type: 'success'
                });
                return;
             }
           },e=>{},{},'blob')
        }else if(n=='null'){
          this.getFile();
        }
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
        // let url = window.URL.createObjectURL(new Blob([data],{type:"application/txt"}))
        let url='data:application/vnd.ms-excel;base64,'+data
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '日志打印.txt')
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
