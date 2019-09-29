<template lang="html">
  <!-- 留学生录入未报到信息导入 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.XBDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="(item,ind0) in $store.state.xb"
                      :key="ind0"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.CSRQKSSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.CSRQJSSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
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
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
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
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="YWXM"
             label="英文姓名">
           </el-table-column>
           <el-table-column
             prop="XBMC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="CSRQ"
             label="出生日期">
           </el-table-column>
           <el-table-column
             prop="HZHM"
             label="护照号码">
           </el-table-column>
           <el-table-column
             prop="GJDQMC"
             label="国家地区">
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
            <el-select v-model="pageSize" @change="CurrentPage=1;pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
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
    <el-row type="flex" class="mb-6">
     <el-col :span="24" class="input-item">
          <el-upload
            class="input-input"
            ref="upload"
            :action='actions+"/drlxslrwbd/readExcel"'
            :file-list="fileList"
            :data="uploadIconData"
             multiple
            :on-success="upSuccess"
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
  <el-dialog title="编辑" :visible.sync="editsDialogVisible">
    <el-form   ref="editform">
      <el-row :gutter="2"  class="mb-6">

        <el-col :span="12" class="input-item">
          <span class="input-text">英文姓名：</span>
          <el-input placeholder="请输入内容" size="small" v-model="editform.YWXM"  class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">性别：</span>
          <el-select v-model="editform.XBDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
            <el-option
              v-for="(item,ind1) in $store.state.xb"
              :key="ind1"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">护照号：</span>
          <el-input placeholder="请输入内容" size="small" v-model="editform.HZHM"  class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">国家地区：</span>
          <el-select v-model="editform.GJDQDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
            <el-option
              v-for="item in $store.state.gjdq"
              :key="item.dm"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">出生日期：</span>
          <el-date-picker
                v-model="editform.CSRQ" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                placeholder="选择时间" >
          </el-date-picker>
        </el-col>
      </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="editsItem('editForm')" size="small">确 定</el-button>
        <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
      </div>

  </el-dialog>
  <el-dialog title="详情" :visible.sync="detailsDialogVisible">
    <el-form   ref="mapForm">
      <el-row :gutter="2"  class="mb-6">
          <el-col :span="12" class="input-item">
           <span class="input-text">英文姓名：</span>
           <span class="input-input detailinput">  {{mapForm.YWXM}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">性别：</span>
            <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
           <span class="input-text">护照号：</span>
           <span class="input-input detailinput">  {{mapForm.HZHM}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">国家地区：</span>
            <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">出生日期：</span>
            <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
          </el-col>
      </el-row>
      <el-row :gutter="2">
          <el-col :span="12" class="input-item">
            <span class="input-text">操作人：</span>
            <span class="input-input detailinput">  {{mapForm.CZR}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">操作日期：</span>
            <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
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
      mapForm:{},
      nation: [],
      fileList: [],
      actions: "",
      uploadDialogVisible: false,
      detailsDialogVisible:false,
      editsDialogVisible:false,
      editform:{},
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
    }
  },
  activated(){
    this.getList(this.CurrentPage,this.pageSize,this.pd);
  },
  mounted() {
     this.$store.dispatch('getGjdq');
     this.$store.dispatch('getXB');
     //this.getList(this.CurrentPage,this.pageSize,this.pd);
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
        "token":this.$store.state.token
      };
      this.$api.post(this.Global.aport3+'/drlxslrwbd/getLXSLRWBDPage', p,
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
      this.detailsDialogVisible=true;
      this.mapForm=n;
    },
    edits(n){

      this.editsDialogVisible=true;
      this.editform=n;
    },
    editsItem(formName)
    {
      this.editform.token=this.$store.state.token;
      this.$api.post(this.Global.aport3+'/drlxslrwbd/updateLXSLRWBD', this.editform,
      r => {
        if(r.code=="1000001"){
            window.location.href ="#/";
        }
        if (r.success) {
          this.$message({
            message: '保存成功！',
            type: 'success'
          });
        } else {
          this.$message.error(r.Message);
        }
        this.$refs[afrom].resetFields();
        this.editsDialogVisible = false;
        this.getList(this.CurrentPage,this.pageSize,this.pd);
      }, e => {
        this.$message.error('失败了');
      });
    },
    deletes(i) {
    let p = {
      "RYBH":i.RYBH,
      "token":this.$store.state.token
    };
    this.$confirm('您是否确认删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$api.post(this.Global.aport3+'/drlxslrwbd/deleteLXSLRWBDById', p,
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
      // console.log(file.type)
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
      this.actions = window.IPConfig.IP+this.Global.aport3;

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
      window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/未报到留学生导入模板.xls'
    },
  },
  computed: {
     //！！！在computed里面可以设置头部信息，如增加tooken
     headers () {
       return {
         'token': this.$store.state.token
       }
     }
   }
}
</script>

<style scoped>
.el-dialog{
  width: 60%!important;
  /* max-height: 400px!important;
  overflow-y: scroll; */
}
</style>
<style>

</style>
