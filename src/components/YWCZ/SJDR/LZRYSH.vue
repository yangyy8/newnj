<template lang="html">
  <!-- 临住布控人员导入 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.XBDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="(item,ind1) in $store.state.xb"
                      :key="ind1"
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
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">身份证号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.SFZH" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind1) in $store.state.gjdq"
                        :key="ind1"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">布控时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.BKKSSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.BKJSSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">审核状态：</span>
                    <el-select v-model="pd.SHBM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind) in $store.state.shzt"
                        :key="ind"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">

      <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange"
           @header-click="titleShow">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="XM"
             label="姓名">
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
             prop="ZJHM"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="SFZH"
             label="身份证号">
           </el-table-column>
           <el-table-column
             prop="BKRQSTART"
             label="布控开始时间">
           </el-table-column>
           <el-table-column
             prop="BKRQEND"
             label="布控结束时间">
           </el-table-column>
           <el-table-column
             prop="GJDQMC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="SHMC"
             label="审核状态">
             <template slot-scope="scope">
                <span v-if="scope.row.SHMC=='审批不通过'" style="color:red">{{scope.row.SHMC}}</span>
                <span v-else-if="scope.row.SHMC=='审批通过'" style="color:blue">{{scope.row.SHMC}}</span>
                <span v-else>{{scope.row.SHMC}}</span>
             </template>
           </el-table-column>
           <el-table-column
             label="操作" width="70">
             <template slot-scope="scope">
             <el-button type="text" class="a-btn"  title="审核"  icon="el-icon-setting" v-if="scope.row.SHBM=='0'" @click="edits(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
             <!-- <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row)"></el-button> -->
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
  <el-dialog title="审核" :visible.sync="editsDialogVisible">
    <el-form   ref="editform">
      <el-row :gutter="1"  class="mb-6">
        <el-col :span="24" class="input-item">
          <span class="input-text">审核结果：</span>
          <el-select v-model="editform.SHBM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
            <el-option
              v-for="(item,ind2) in $store.state.shzt"
              v-if="item.dm!='0'"
              :key="ind2"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="24" class="input-item">
          <span class="input-text">审核意见：</span>
          <el-input
            type="textarea" class="input-input"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="editform.SHYJ">
          </el-input>
        </el-col>
      </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="editsItem()" size="small">确 定</el-button>
        <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
      </div>
  </el-dialog>
  <el-dialog title="详情" :visible.sync="detailsDialogVisible">
    <el-form   ref="mapForm">
      <el-row :gutter="2"  class="mb-6">
          <el-col :span="12" class="input-item">
           <span class="input-text">姓名：</span>
           <span class="input-input detailinput">  {{mapForm.XM}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">性别：</span>
            <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
           <span class="input-text">证件号码：</span>
           <span class="input-input detailinput">  {{mapForm.ZJHM}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
           <span class="input-text">身份证号：</span>
           <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">出生日期：</span>
            <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">国家地区：</span>
            <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text" title="布控开始时间">布控开始时间：</span>
            <span class="input-input detailinput">  {{mapForm.BKRQSTART}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text" title="布控结束时间">布控结束时间：</span>
            <span class="input-input detailinput">  {{mapForm.BKRQEND}}</span>
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

      <el-row :gutter="2">
          <el-col :span="12" class="input-item">
            <span class="input-text">审核结果：</span>
            <span class="input-input detailinput">  {{mapForm.SHMC}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">审核意见：</span>
            <span class="input-input detailinput">  {{mapForm.SHYJ}}</span>
          </el-col>
      </el-row>
      <el-row :gutter="2">
            <el-col :span="12" class="input-item">
              <span class="input-text" title="最后审核时间">最后审核时间：</span>
              <span class="input-input detailinput">  {{mapForm.ZHSHSJ}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text" title="最后审核人">最后审核人：</span>
              <span class="input-input detailinput">  {{mapForm.ZHSHR}}</span>
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
      editform:{},
      uploadIconData:{token:this.$store.state.token},
      mapForm:{},
      options:this.pl.options,
      tableData: [],

    }
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getShzt');
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  methods: {
    titleShow(e,el){
      el.target.title = e.label;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
    },
    getList(currentPage, showCount, pd) {

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "token":this.$store.state.token,
      };
      this.$api.post(this.Global.aport3+'/drlzbk/getLZBKPage', p,
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
      this.editform={};
      // this.editform=n;
      this.editform.RYBH=n.RYBH;
    },
    editsItem()
    {
      let p={
        "RYBH":this.editform.RYBH,
        "SHBM":this.editform.SHBM,
        "SHYJ":this.editform.SHYJ,
        "token":this.$store.state.token,
      };
      this.$api.post(this.Global.aport3+'/drlzbk/updateShLzbk', p,
      r => {
        if(r.code=="1000001"){
            window.location.href ="#/";
        }
        if (r.success) {
          this.$message({
            message: '审核成功！',
            type: 'success'
          });
        } else {
          this.$message.error(r.message);
        }

        this.editsDialogVisible = false;
        this.getList(this.CurrentPage,this.pageSize,this.pd);

      }, e => {
        this.$message.error('失败了');
      });
    },
    deletes(i) {
    let p = {
      "RYBH": i.RYBH,
      "token":this.$store.state.token
    };
    this.$confirm('您是否确认删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$api.post(this.Global.aport3+'/drlzbk/deleteLZBKById', p,
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

  }
}
</script>

<style scoped>
.input-text{ width: 25%!important;}
</style>
<style>

</style>
