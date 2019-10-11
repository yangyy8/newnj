<template lang="html">
  <div class="yymain">
    <div class="yytitle">
      <div style="text-align:left">
        <el-button type="primary" size="small" class="mb-5" @click="exportexcel">导出</el-button>
      </div>
      <el-table
          ref="multipleTable"
         :data="tableData"
         border
         @select="selectfn"
         style="width: 100%">
         <!-- <el-table-column
           type="selection"
           width="55">
         </el-table-column> -->
         <el-table-column
           prop="ywxm"
           label="英文姓名">
         </el-table-column>
         <el-table-column
           prop="zwxm"
           label="中文姓名">
         </el-table-column>
         <el-table-column
           prop="xb_desc"
           label="性别">
         </el-table-column>
         <el-table-column
           prop="gjdq_desc"
           label="国家地区">
         </el-table-column>
         <el-table-column
           prop="csrq"
           label="出生日期">
         </el-table-column>
         <el-table-column
           prop="zjzl_desc"
           label="证件种类">
         </el-table-column>
         <el-table-column
           prop="zjhm"
           label="证件号码">
         </el-table-column>
         <el-table-column
           prop="qzzl_desc"
           label="签证种类">
         </el-table-column>
         <el-table-column
           prop="qzhm"
           label="签证号码">
         </el-table-column>
         <el-table-column
           prop="lrdw_desc"
           label="派出所名称">
         </el-table-column>
         <el-table-column
           prop="lsdwdz"
           label="地址">
         </el-table-column>
         <el-table-column
           prop="tlyxq"
           label="停留有效期至">
         </el-table-column>
         <el-table-column
           label="操作">
           <template slot-scope="scope">
             <el-button type="text"  class="a-btn" title="详情" size="mini" icon="el-icon-tickets" @click="details(scope.row)"></el-button>
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
        <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
            <LZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()"></LZXX>
          <div slot="footer" class="dialog-footer">
            <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
          </div>
        </el-dialog>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      options:this.pl.options,
      pd:{},
      xid:'',
      rybh:'',
      detailsDialogVisible:false,
    }
  },
  activated(){
    this.pd = this.$route.query.row;
    this.getList(this.CurrentPage,this.pageSize,this.pd)
  },
  methods:{
    pageSizeChange(val) {
      this.pageSize=val;
      this.getListTu(this.CurrentPage,val,this.pdTu);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getListTu(val,this.pageSize,this.pdTu);
    },
    getList(currentPage,pageSize,pd){
      let p={
        'currentPage':currentPage,
        'showCount':pageSize,
        'pd':pd,
        'userCode':this.$store.state.uid,
        'userName':this.$store.state.uname,
      }
      this.$api.post(this.Global.aport3+'/rxtj/getRxtjList',p,
       r =>{
         if(r.success){
           this.tableData = r.data.list;
           this.TotalResult = r.data.size;
         }
       })
    },
    details(i){
      this.xid=i.DTID;
      this.rybh=i.RYBH;
      this.detailsDialogVisible = true;
    },
    exportexcel(){
      let p={
        'currentPage':1,
        'showCount':10000,
        'pd':this.pd
      }
      this.$api.post(this.Global.aport3+'/rxtj/exportRxList',p,
        r =>{
          this.downloadM(r,'临住人像统计列表');
        },e=>{},{},'blob')
    },
    downloadM (data,name) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
  },
}
</script>

<style lang="css" scoped>
</style>
