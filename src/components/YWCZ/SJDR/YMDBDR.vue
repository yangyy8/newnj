<template lang="html">
    <!-- 247数据导入(通报人员) -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">身份证号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.SFZH" class="input-input"></el-input>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.XBDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="(item,ind) in $store.state.xb"
                      :key="ind"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text" title="移民签证种类">移民签证种类：</span>
                  <el-select v-model="pd.YMQZZLDM" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="(item,ind1) in $store.state.ymqzzl"
                      :key="ind1"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">申请时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.SQSJStart" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.SQSJEnd" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">签证国家：</span>
                    <el-select v-model="pd.QZGJDM" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind1) in $store.state.gjdq"
                        :key="ind1"
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

      <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="showUpload">批量导入</el-button>
        <el-button type="success" size="small" @click="download">模板下载</el-button>
        </el-row>
      <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <el-table-column
             prop="XM"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="SFZH"
             label="身份证号">
           </el-table-column>
           <el-table-column
             prop="XBMC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="YMQZZLMC"
             label="移民签证种类">
           </el-table-column>
           <el-table-column
             prop="SQSJ"
             label="申请时间">
           </el-table-column>
           <el-table-column
             prop="QZGJMC"
             label="签证国家">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
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
    <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">
    <el-form>

    <el-row  type="flex">
     <el-col :span="24">
          <el-upload
            class="input-input"
            ref="upload"
            :action='actions+"/drymdbqz/readExcel"'
            :file-list="fileList"
             multiple
            :on-success="upSuccess"
            :data="uploadIconData"
            :before-upload="beforeAvatarUpload"
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
  <el-dialog title="编辑" :visible.sync="editsDialogVisible" width="850px">
    <el-form   ref="editForm">
      <el-row :gutter="3"  class="mb-6">
        <el-col :span="12" class="input-item">
         <span class="input-text">姓名：</span>
        <el-input placeholder="请输入内容" size="small" v-model="editForm.XM" class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">身份证号：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.SFZH" class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">性别：</span>
          <el-select v-model="editForm.XBDM" placeholder="请选择" @change="getLable(1,editForm.XBDM)"  filterable clearable default-first-option size="small" class="input-input">
            <el-option
              v-for="(item,ind) in $store.state.xb"
              :key="ind"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">出生日期：</span>
         <el-date-picker class="input-input"
             v-model="editForm.CSRQ" format="yyyy-MM-dd"
             type="date" size="small" value-format="yyyy-MM-dd"
             placeholder="选择日期" >
         </el-date-picker>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="移民签证种类">移民签证种类：</span>
          <el-select v-model="editForm.YMQZZLDM" @change="getLable(2,editForm.YMQZZLDM)"  filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
            <el-option
              v-for="(item,ind1) in $store.state.ymqzzl"
              :key="ind1"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签证国家：</span>
          <el-select v-model="editForm.QZGJDM" @change="getLable(3,editForm.QZGJDM)" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
            <el-option
              v-for="(item,ind1) in $store.state.gjdq"
              :key="ind1"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">单位名称：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.DWMC" class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">申请时间：</span>
          <el-date-picker class="input-input"
              v-model="editForm.SQSJ" format="yyyy-MM-dd"
              type="date" size="small" value-format="yyyy-MM-dd"
              placeholder="选择日期" >
          </el-date-picker>
        </el-col>

      </el-row>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="editsItem('editForm')" size="small">确 定</el-button>
      <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
  <el-dialog title="详情" :visible.sync="detailsDialogVisible" width="900px">
    <el-form   ref="mapForm">
      <el-row :gutter="3"  class="mb-6">
        <el-col :span="12" class="input-item">
         <span class="input-text">姓名：</span>
         <span class="input-input detailinput">  {{mapForm.XM}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">身份证号：</span>
          <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">性别：</span>
         <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="移民签证种类">移民签证种类：</span>
          <span class="input-input detailinput">  {{mapForm.YMQZZLMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签证国家：</span>
          <span class="input-input detailinput">  {{mapForm.QZGJMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">单位名称：</span>
          <span class="input-input detailinput">  {{mapForm.DWMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">申请时间：</span>
         <span class="input-input detailinput">  {{mapForm.SQSJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">操作人：</span>
          <span class="input-input detailinput">  {{mapForm.CZR}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">操作时间：</span>
         <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">修改人：</span>
          <span class="input-input detailinput">  {{mapForm.XGR}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">修改时间：</span>
         <span class="input-input detailinput">  {{mapForm.XGSJ}}</span>
        </el-col>

      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
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
      nation: [],
      fileList: [],
      actions: "",
      uploadDialogVisible: false,
      detailsDialogVisible:false,
      editsDialogVisible:false,
      editForm:{},
      mapForm:{},
      form:{},
      uploadIconData:{token:this.$store.state.token},
      options: [{
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
      tableData: [],
      type:'',
      xid:'',

    }
  },
  activated(){
    this.detailsDialogVisible=false;
  },
  mounted() {
  this.$store.dispatch("getGjdq");
  this.$store.dispatch("getYmqzzl");
  this.$store.dispatch("getXB");
  this.actions = window.IPConfig.IP+this.Global.aport3;
  },
  methods: {
    getLable(t,val){
         if(t==1){//性别

           let obj = {};
            obj = this.$store.state.xb.find((item)=>{
                return item.dm === val;
            });
            this.editForm.XBMC = obj.mc;
         }
         if(t==2){
           let obj = {};
            obj = this.$store.state.ymqzzl.find((item)=>{
                return item.dm === val;
            });
            this.editForm.YMQZZLMC = obj.mc;
         }
         if(t==3){
           let obj = {};
            obj = this.$store.state.gjdq.find((item)=>{
                return item.dm === val;
            });
            this.editForm.QZGJMC = obj.mc;
         }
       },
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
        "token":this.$store.state.token
      };
      this.$api.post(this.Global.aport3+'/drymdbqz/getYMDBQZPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    details(n)
    {
      this.mapForm=n;
      this.detailsDialogVisible=true;

    },
    edits(n){
      this.editForm=n;
      this.editsDialogVisible=true;

    },
    editsItem()
    {
      this.editForm.token=this.$store.state.token;
      this.$api.post(this.Global.aport3+'/drymdbqz/updateYMDBQZ', this.editForm,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          if (r.success) {
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
            this.editsDialogVisible=false;
            this.getList(this.CurrentPage, this.pageSize, this.pd);

          } else {
            this.$message.error(r.Message);
          }
        }, e => {
          this.$message.error('失败了');
        });
    },
    deletes(i) {
    let p = {
      "GUID": i.GUID,
      "token":this.$store.state.token
    };
    this.$confirm('您是否确认删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$api.post(this.Global.aport3+'/drymdbqz/deleteYMDBQZById', p,
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
    beforeAvatarUpload(file) {

      // const isEXL = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      // const isExls=file.type==='application/vnd.ms-excel';
      //
      // if (!isEXL && !isExls) {
      //   this.$message.error('上传文件只能是 xlsx或者xls 格式!');
      // }
      // return isEXL?isEXL:isExls;
    },
    showUpload() {
      this.uploadDialogVisible = true;
      this.typemd = "";

      console.log(this.$refs.upload)
      if (this.$refs.upload) {
        this.$refs.upload.clearFiles();
      }
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
    download() {
      window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/代办签证数据导入模板.xlsx'
    },
  }
}
</script>

<style scoped>
.el-dialog{
  width: 60%!important;
}
.input-text{width: 25%!important;}
</style>
<style>

</style>
