<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">地区名称：</span>
              <el-select v-model="pd.DQBM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                <el-option
                  v-for="item in $store.state.xzqh"
                  :key="item.dm"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                <span class="input-text">状态：</span>
                <el-select v-model="pd.ZT" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                  <el-option label="0 - 无效" value="0"></el-option>
                  <el-option label="1 - 有效" value="1"></el-option>
                  <el-option label="2 - 重点关注" value="2"></el-option>
                </el-select>
            </el-col>
          </el-row>
         </el-col>
            <el-col :span="2">
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
              <!-- <el-button type="info" size="small" @click="$router.go(-1)" class="mb-15 tt-mr10">返回</el-button>
              <el-button type="warning" size="small" @click="download" class="mb-15">导出</el-button> -->
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="mb-15">
        <el-button type="primary" size="small" @click="">批量导入</el-button>
        <el-button type="success" size="small" @click="" class="tt-mr10">模板下载</el-button>
        <el-button type="info" size="small" @click="areaFun">行政区划</el-button>
      </div>
      <el-table
         ref="multipleTable"
         :data="tableData"
         border
         style="width: 100%"
         @select="selectfn"
         @header-click="titleShow">
         <!-- <el-table-column
           type="selection"
           width="55">
         </el-table-column> -->
         <el-table-column
           prop="DQMC"
           label="地区名称">
         </el-table-column>
         <el-table-column
           prop="PZSJ"
           label="配置时间">
         </el-table-column>
         <el-table-column
           prop="PZR"
           label="配置人">
         </el-table-column>
         <el-table-column
           prop="ZT"
           label="状态">
         </el-table-column>
         <el-table-column
           label="操作" width="70">
           <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  :title="scope.row.ZT=='2'?'取消重点':'设置重点'"  :icon="scope.row.ZT=='2'?'el-icon-star-on':'el-icon-star-off'" @click="ZdFun(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-delete" @click="deleteFun(scope.row)"></el-button>
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
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="全国行政区划" :visible.sync="areaDialogVisible">
      <el-tree
        :data="menudata"
        :check-strictly="true"
        show-checkbox
        default-expand-all
        node-key="DQBM"
        :default-checked-keys="defaultChecked"
        ref="tree"
        highlight-current
        :props="defaultProps">
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="areaSave" size="small">保 存</el-button>
        <el-button @click="areaDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<script>
export default {

  data() {
    return {
      areaDialogVisible:false,
      menudata:[],
      defaultChecked:[],
      defaultProps:{
        label:'DQMC',
      },
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {},
      tableData:[],

      options:[{
        value: 10,
        label: "10"
      },
      {
        value: 20,
        label: "20"
      },
      {
        value: 30,
        label: "30"
      }
    ],
      row:[],
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],
    }
  },
  activated() {
    this.getList(this.CurrentPage,this.pageSize,this.pd);
  },
  mounted() {
      this.$store.dispatch('getXzqh');
  },
  methods: {
    titleShow(e,el){
      el.target.title = e.label;
    },
    selectfn(a,b){
      this.multipleSelection = a;
      this.dataSelection()
    },
    dataSelection(){
      // console.log('this.multipleSelection',this.multipleSelection)
      this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection);
      // console.log('this.selectionReal',this.selectionReal);
      this.selectionAll=[];
      for(var i=0;i<this.selectionReal.length;i++){
        if(this.selectionReal[i]){
          for(var j=0;j<this.selectionReal[i].length;j++){
            this.selectionAll.push(this.selectionReal[i][j])
          }
        }
      }
      // console.log('this.selectionAll',this.selectionAll);
    },
    download(){
      if(this.tableData.length==0){
         this.$message.error('无可导出数据！');
         return
      }
      let p={};
      if(this.selectionAll.length==0){//人员全部导出,无选中的数据
        p={
          "pd":this.pd,
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token
        }
      }else{//人员部分导出
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].RGUID)
        }
        this.pd.RGUID=this.yuid;
        p={
          "pd":this.pd,
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token
        }
      }
      this.$api.post(this.Global.aport5+'/esFnvisasController/exportFnvisas',p,
        r =>{
          this.downloadM(r)
        },e=>{},{},'blob')
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '签证信息统计人员列表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    areaFun(){

    },
    areaSave(){

    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, val, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(val, this.pageSize, this.pd);
    },
    getList(currentPage, showCount, pd) {
      if(pd.hasOwnProperty('RGUID')){
        delete pd['RGUID']
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        'token':this.$store.state.token,
      };
      this.$api.post(this.Global.aport11+'/tkgzdqpz/getTkdqDataListPage', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
          if(this.selectionReal.length==0){//声明一个数组对象
            this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
          }
          this.$nextTick(()=>{
            this.multipleSelection=[]
            for(var i=0;i<this.tableData.length;i++){
              for(var j=0;j<this.selectionAll.length;j++){
                if(this.tableData[i].RGUID==this.selectionAll[j].RGUID){
                  // console.log(this.tableData[i].RGUID,this.selectionAll[j].RGUID,'this.selectionAll======',this.selectionAll)
                  this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                }
              }
            }
          })
        })
    },
    deleteFun(val){
      let p={
        DTID:val.DTID,
        token:this.$store.state.token
      }
      this.$confirm('您是否确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
       }).then(() => {
        this.$api.post(this.Global.aport11+'/tkgzdqpz/deleteTkgzdqPzData', p,
          r => {
            if (r.success) {
              this.$message({
                message: '删除成功！',
                type: 'success'
              });
              this.getList(this.CurrentPage, this.pageSize, this.pd);
            } else {
              this.$message.error(r.Message);
            }
          }, e => {
            this.$message.error('失败了');
          });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    ZdFun(val){
      let p={
        DTID:val.DTID,
        token:this.$store.state.token
      }
      this.$api.post(this.Global.aport11+'/tkgzdqpz/updateTkgzdqPzData',p,
       r =>{
         if(r.success){
           this.$message({
             message: '设置成功！',
             type: 'success'
           });
           this.getList(this.CurrentPage, this.pageSize, this.pd);
         }
       })
    },
    details(i) {
      this.random=new Date().getTime();
      this.xid=i;
      this.qzsqDialogVisible = true;
    },
  }
}
</script>

<style scoped>
.input-text{width: 30%!important}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.el-carousel__item:nth-child(2n) {
  /* background: url(../../../assets/img/t1.png); */
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.crcolor {
  background: #EFF3F6;
}
.yy-input-text {
  text-align: left !important;
}
</style>
<style>

.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
</style>
