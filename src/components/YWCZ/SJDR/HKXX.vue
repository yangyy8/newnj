<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="20" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">航班号：</span>
              <el-input placeholder="请输入内容" size="small" v-model="pd.JWJTGJBS"   class="input-input"></el-input>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
              <span class="input-text">往来国：</span>
              <el-select v-model="pd.WLGDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                <el-option
                  v-for="item in $store.state.wlg"
                  :key="item.dm"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
         </el-col>
            <el-col :span="4" class="down-btn-area">
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)">查询</el-button>
              <!-- <el-button type="warning" size="small" @click="download" class="mb-15">导出</el-button> -->
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="showUpload()">批量导入</el-button>
        <el-button type="success" size="small" @click="downloadXz()">模板下载</el-button>
      </el-row>
      <el-table
         ref="multipleTable"
         :data="tableData"
         border
         style="width: 100%"
         @select="selectfn">
         <!-- <el-table-column
           type="selection"
           width="55">
         </el-table-column> -->
         <el-table-column
           prop="JWJTGJBS"
           label="航班号"
           min-width="100">
         </el-table-column>
         <el-table-column
           prop="WLGMC"
           label="往来国">
         </el-table-column>
         <el-table-column
           prop="JTGJMC"
           label="交通工具">
         </el-table-column>
         <el-table-column
           prop="CRJKAMC"
           label="出入境口岸">
         </el-table-column>
         <el-table-column
           prop="CZR"
           label="操作人"
           min-width="100">
         </el-table-column>
         <el-table-column
           prop="CZSJ"
           label="操作时间">
         </el-table-column>
         <el-table-column
           prop="XGR"
           label="修改人"
           min-width="100">
         </el-table-column>
         <el-table-column
           prop="XGSJ"
           label="修改时间"
           min-width="100">
         </el-table-column>
         <el-table-column
           label="操作" width="70">
           <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row)"></el-button>
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
      <!-- <div class="bj"> -->
        <el-dialog title="编辑" :visible.sync="editsDialogVisible">
          <el-form   ref="editForm">
            <el-row :gutter="2"  class="mb-6">
              <el-col :span="12" class="input-item">
               <span class="input-text">航班号：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm.JWJTGJBS" class="input-input"></el-input>
             </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">往来国：</span>
                <el-select v-model="editForm.WLGDM" @change="getLable('wlg',editForm.WLGDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                  <el-option
                    v-for="(item,ind10) in $store.state.wlg"
                    :key="ind10"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">交通工具：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.JTGJMC" class="input-input"></el-input>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text" title="出入境口岸">出入境口岸：</span>
                <el-select v-model="editForm.CRJKADM" @change="getLable('crjkn',editForm.CRJKADM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                  <el-option
                    v-for="(item,ind8) in $store.state.rjkn"
                    :key="ind8"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
              </el-col>
              <!-- <el-col :span="12" class="input-item">
                <span class="input-text">操作人：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.CZR" class="input-input"></el-input>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">操作时间：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.CZSJ" class="input-input"></el-input>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">修改人：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.XGR" class="input-input"></el-input>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">修改时间：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.XGSJ" class="input-input"></el-input>
              </el-col> -->
            </el-row>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="editsItem" size="small">确 定</el-button>
            <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
          </div>
        </el-dialog>
        <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">
          <el-form>
          <el-row type="flex" class="mb-6">
           <el-col :span="24" class="input-item">
                <el-upload
                  class="input-input"
                  ref="upload"
                  :action='actions+"/drhkxx/readExcel"'
                  :file-list="fileList"
                  multiple
                  :on-success="upSuccess"
                  :data="uploadIconData"
                  :limit="1"
                  :auto-upload="false">
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                  <br/>
                  <span slot="tip" class="el-upload__tip">只能上传EXCEL文件</span>
                </el-upload>
              </el-col>
            </el-row>
          </el-form>
        </el-dialog>
     <!-- </div> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {},
      tableData:[],
      editsDialogVisible:false,
      uploadDialogVisible:false,
      fileList: [],
      actions: "",
      uploadIconData:{token:this.$store.state.token},
      editForm:{},
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
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  activated() {
    this.getList(this.CurrentPage,this.pageSize,this.pd);
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getWlg');
    this.$store.dispatch('getRjkn');
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
  },
  methods: {
    getLable(type,val){
      if(type=='wlg'){
        let obj = {};
         obj = this.$store.state.wlg.find((item)=>{
             return item.dm === val;
         });
         this.editForm.WLGMC = obj.mc;
      }
      if(type=='crjkn'){//出入境口岸
        let obj = {};
         obj = this.$store.state.rjkn.find((item)=>{
             return item.dm === val;
         });
         this.editForm.CRJKAMC = obj.mc;
      }
    },
    edits(val){
      this.editsDialogVisible = true;
      this.editForm = val;
    },
    editsItem(){
      this.editForm.token=this.$store.state.token;
      this.$api.post(this.Global.aport3 + '/drhkxx/updateHkxx',this.editForm,
       r =>{
         if(r.success){
           this.$message({
             message: '保存成功！',
             type: 'success'
           });
           this.editsDialogVisible = false;
           this.getList(this.CurrentPage, this.pageSize, this.pd);
         }else {
           this.$message.error(r.message);
         }
       }, e => {
         this.$message.error('失败了');
       })
    },
    deletes(val){
      let p = {
        "GUID": val.GUID,
        "token":this.$store.state.token,
      };
      var url = this.Global.aport3 + '/drhkxx/deleteHkxxById';
      this.$confirm('您是否确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api.post(url, p,
          r => {
            if(r.code=="1000001"){
                window.location.href ="#/";
            }
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
    showUpload() {
      this.actions = window.IPConfig.IP+this.Global.aport3;
      this.uploadDialogVisible = true;
      if (this.$refs.upload) {
        this.$refs.upload.clearFiles();
      }
    },
    upSuccess(r) {
      if (r.success) {
        this.$message({
          message: r.data,
          type: 'success'
        });
      } else {
        this.$message.error(r.message);
      }
      this.uploadDialogVisible = false;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    submitUpload() {
      if (this.$refs.upload.uploadFiles.length == 0) {
        this.$message({
          message: '请先选择文件！',
          type: 'warning'
        });
        return
      }
      this.$refs.upload.submit();
    },
    downloadXz(){
      window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/航班信息导入.xlsx'
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
      if(this.selectionAll.length==0){//人员全部导出
        p={
          "pd":this.pd,
          'userCode':this.userCode,
          'userName':this.userName,
          'orgJB':this.juState,
          'orgCode':this.orgCode,
          'token':this.token
          // "orderBy":{value:"ZSRQ",dataType:"date"},
          // "orderType":"DESC"
        }
      }else{//人员部分导出
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].GUID)
        }
        this.pd.GUID=this.yuid;
        p={
          "pd":this.pd,
          'userCode':this.userCode,
          'userName':this.userName,
          'orgJB':this.juState,
          'orgCode':this.orgCode,
          'token':this.token
        }
      }
      this.$api.post(this.Global.aport5+'/changZhuController/childexport',p,
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
        link.setAttribute('download', '常住境外人员综合分析列表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
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

      if(pd.hasOwnProperty('GUID')){
        delete pd['GUID']
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        // 'userCode':this.userCode,
        // 'userName':this.userName,
        // 'orgJB':this.juState,
        // 'orgCode':this.orgCode,
        'token':this.token
      };
      this.$api.post(this.Global.aport3+'/drhkxx/getHkxxPage', p,
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
                if(this.tableData[i].GUID==this.selectionAll[j].GUID){
                  this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                }
              }
            }
          })
        })
    },
    details(i) {

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
