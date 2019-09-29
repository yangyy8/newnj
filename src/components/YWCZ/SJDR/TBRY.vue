<template lang="html">
    <!-- 247数据导入(通报人员) -->
  <div class="yymain tbry">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWX" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">通报类型：</span>
                  <el-select v-model="pd.TBRYZL" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="(item,ind) in $store.state.tbry"
                      :key="ind"
                      :label="item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">通报编号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.TBBH" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.XB" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
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
                    <el-select v-model="pd.GJDQDM" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind1) in $store.state.gjdq"
                        :key="ind1"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">请求国：</span>
                    <el-select v-model="pd.QQGDM" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind1) in $store.state.gjdq"
                        :key="ind1"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">发布时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.FBSJKSSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.FBSJJSSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">证件种类：</span>
                  <el-select v-model="pd.ZJZL" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="(item,ind1) in $store.state.zjzl"
                      :key="ind1"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">入库时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.RKSJKSSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.RKSJJSSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>

          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <!-- <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="showUpload">批量导入</el-button>
        <el-button type="success" size="small" @click="download">模板下载</el-button>
        </el-row> -->
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
             prop="TBRYZL"
             label="通报类型">
           </el-table-column>
           <el-table-column
             prop="TBBH"
             label="通报编号">
           </el-table-column>
           <el-table-column
             prop="YWX"
             label="英文姓">
           </el-table-column>
           <el-table-column
             prop="YWM"
             label="英文名">
           </el-table-column>
           <el-table-column
             prop="XB_DESC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="CSRQ"
             label="出生日期">
           </el-table-column>
           <!-- <el-table-column
             prop="address"
             label="证件类型">
           </el-table-column>
           <el-table-column
             prop="address"
             label="证件号码">
           </el-table-column> -->
           <!-- <el-table-column
             prop="address"
             label="国家地区">
           </el-table-column> -->
           <!-- <el-table-column
             prop="address"
             label="请求国">
           </el-table-column> -->
           <el-table-column
             prop="FBSJ"
             label="发布时间">
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
       <span >上传类型：</span>
       <el-radio v-model="type" label="1" @change="getTS('1')">数据上传(XML文件)</el-radio>
       <el-radio v-model="type" label="2" @change="getTS('2')">资料上传(PDF文件)</el-radio>
     </el-col>
  </el-row>
    <el-row  type="flex">

     <el-col :span="24">
          <el-upload
            class="input-input"
            ref="upload"
            :action='actions+"/manage-platform/riskNameList/riskReadExcel/"'
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
  <el-dialog title="编辑" :visible.sync="editsDialogVisible" >
   <TBRYEDIT :type="type" :xid="xid" :random="randomtb"></TBRYEDIT>
    <div slot="footer" class="dialog-footer">
      <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
  <el-dialog title="详情" :visible.sync="detailsDialogVisible">
    <TBRYEDIT :xid="xid" :type="type" :random="randomxq"></TBRYEDIT>
    <div slot="footer" class="dialog-footer">
      <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script>
import TBRYEDIT from '../../common/tbry_edit'
export default {
  components:{TBRYEDIT},
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
      randomtb:'',
      randomxq:'',
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
      type:0,
      xid:'',
      rybh:''

    }
  },
  activated(){
    this.detailsDialogVisible=false;
  },
  mounted() {
     this.$store.dispatch('getXB');
     this.$store.dispatch('getGjdq');
     this.$store.dispatch('getZjzl');
     this.$store.dispatch('getTbry');
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
      this.$api.post(this.Global.aport3+'/drtbry/getTBRYPage', p,
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
      this.type=0;
      this.xid=n.DTID;
      this.randomxq=new Date().getTime();
      this.detailsDialogVisible=true;
      this.mapForm=n;
    },
    edits(n){
      this.type=1;
      this.xid=n.DTID;
      console.log(this.type,n.DTID,new Date().getTime());
      this.randomtb=new Date().getTime();

      this.editsDialogVisible=true;

    },
    editsItem(formName)
    {

    },
    deletes(i) {
      let p={
        "DTID":i.dtid,
        "token":this.$store.state.token
      };
    this.$confirm('您是否确认删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$api.post(this.Global.aport3+'/drtbry/deleteTBRYById', p,
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
      this.actions = window.IPConfig.IP+this.Global.aport3;
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
      window.location.href = this.$api.rootUrl + '/manage-platform/templateFile/riskNameListFile.xlsx'
    },
  }
}
</script>

<style>
.tbry .el-dialog{
  width: 65%!important;
}
</style>
<style>

</style>
