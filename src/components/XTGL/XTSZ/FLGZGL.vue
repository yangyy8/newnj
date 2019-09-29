<template lang="html">
  <!-- 分类规则管理 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">模型类型：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="pd.MXLX" class="input-input"></el-input>
                    <!-- <el-select v-model="pd.MXLX" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" @visible-change="MXType">
                      <el-option
                        v-for="item in mxlx"
                        :key="item.MXLX"
                        :label="item.MXLX+' - '+item.MXLX_NAME"
                        :value="item.MXLX">
                      </el-option>
                    </el-select> -->
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">规则名称：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.RULE_NAME" class="input-input"></el-input>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">是否有效：</span>
                  <el-select v-model="pd.SFYX" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option label="有效" value="1"></el-option>
                    <el-option label="无效" value="0"></el-option>
                  </el-select>
                </el-col>
          </el-row>
        </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
         <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small" @click="adds(0,'');form={};">新增</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
      <el-table
           :data="tableData"
           border
           style="width: 100%">
           <el-table-column
             prop="MXLX"
             label="模型类型">
           </el-table-column>
           <el-table-column
             prop="MXLX_NAME"
             label="导航类型名称">
           </el-table-column>
           <el-table-column
             prop="RULE_NAME"
             label="标签名称">
           </el-table-column>
           <el-table-column
             prop="RULE"
             label="标签规则">
           </el-table-column>
           <el-table-column
             prop="SFYX"
             label="是否有效">
             <template slot-scope="scope">
              <span>{{scope.row.SFYX=='1'?'有效':'无效'}}</span>
            </template>
           </el-table-column>
           <el-table-column
             prop="CREATE_USER_NAME"
             label="创建人姓名">
           </el-table-column>
           <el-table-column
             prop="CREATE_TIME"
             label="创建时间">
           </el-table-column>
           <el-table-column
             label="操作" width="">
             <template slot-scope="scope">
                <div>
                  <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
                  <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit-outline" @click="adds(1,scope.row)"></el-button>
                  <el-button type="text" class="a-btn"  title="设置" @click="reset(scope.row)">{{scope.row.SFYX=='1'?'设为无效':'设为有效'}}</el-button>
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
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
    </div>

    <el-dialog title="详情" :visible.sync="detailsDialogVisible" width="600px" >
      <el-form  ref="mapf">
        <el-row :gutter="1"  class="mb-6">
            <el-col :span="24" class="input-item">
              <span class="input-text">模型类型：</span>
              <span class="input-input detailinput"> {{mapf.MXLX}}</span>
            </el-col>
            <el-col :span="24" class="input-item">
            <span class="input-text">导航类型名称：</span>
            <span class="input-input detailinput">{{mapf.MXLX_NAME}} </span>
            </el-col>
            <el-col :span="24" class="input-item">
            <span class="input-text">标签名称：</span>
            <span class="input-input detailinput">{{mapf.RULE_NAME}} </span>
            </el-col>
            <el-col :span="24" class="input-item">
            <span class="input-text">标签规则：</span>
            <span class="input-input detailinput">{{mapf.RULE}} </span>
            </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="dialogText" :visible.sync="addsDialogVisible" width="600px" >
      <el-form :model="form" ref="addForm">
        <el-row :gutter="1"  class="mb-6">
            <el-col :span="24" class="input-item" data-scope="demo" data-name="MXLX" data-type="input" v-validate-easy="[['required']]">
              <span class="input-text">模型类型：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.MXLX" class="bjinput"></el-input>
              <!-- <el-select v-model="form.MXLX" filterable clearable  default-first-option  placeholder="请选择"  size="small" class="bjinput" @visible-change="MXType" @change="mxtypechange">
                <el-option
                  v-for="item in mxlx"
                  :key="item.MXLX"
                  :label="item.MXLX+' - '+item.MXLX_NAME"
                  :value="item.MXLX">
                </el-option>
              </el-select> -->
            </el-col>
            <el-col :span="24" class="input-item" data-scope="demo" data-name="MXLX_NAME" data-type="input" v-validate-easy="[['required']]">
              <span class="input-text">导航类型名称：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.MXLX_NAME"  id="mxmc"  class="bjinput"></el-input>
            </el-col>
            <el-col :span="24" class="input-item" data-scope="demo" data-name="RULE_NAME" data-type="input" v-validate-easy="[['required']]">
              <span class="input-text">标签名称：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.RULE_NAME"  class="bjinput"></el-input>
            </el-col>
            <el-col :span="24" class="input-item" data-scope="demo" data-name="RULE" data-type="input" v-validate-easy="[['required']]">
              <span class="input-text">标签规则：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.RULE"  class="bjinput"></el-input>
              <el-popover
                placement="top-start"
                title="示例"
                width="250"
                trigger="hover">
                <div>
                  字段=值;字段=值<br/>字段=["值","值"];字段=["值","值"]<br/>字段=值;字段=["值","值"]<br/><hr/>
                  字段!=值;字段!=值<br/>字段!=["值","值"];字段!=["值","值"]<br/>字段!=值;字段!=["值","值"]<br/>
                </div>
                <span class="el-icon-view t-tip" style="margin-left:10px" slot="reference"></span>
              </el-popover>
            </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addItem('addForm')" size="small">确 定</el-button>
        <el-button @click="qxItem('addForm')" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>

</template>
<script>
export default {
  data() {
    return {
      mxlx:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {},
      pd0:{},
      options: this.pl.ps,
      tableData: [],
      type:'',
      mapf:{},
      form:{},
      detailsDialogVisible:false,
      addsDialogVisible:false,
      dialogText:'新增'
    }
  },
  mounted() {

  },
  activated(){
    this.getList(this.CurrentPage,this.pageSize,this.pd)
  },
  methods: {
    MXType(){
      this.$api.post(this.Global.aport4+'/warningSortRuleController/selectMXLXList',{},
        r =>{
          if(r.success){
            this.mxlx=r.data.resultList;
          }
        })
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport4+'/warningSortRuleController/getResultListByParams', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
     details(i) {
      this.mapf = i;
      this.detailsDialogVisible = true;
    },
    adds(n,i){
        this.addsDialogVisible=true;
        if (n != 0) {
          this.form=Object.assign({},i)
          this.tp = 1;
          this.dialogText="编辑";
        } else {
        this.dialogText="新增";
        this.tp = 0;
        }
        /* this.V.$reset("demo"); */
     },
    mxtypechange(){
      let list = this.mxlx;
      let _this=this;
      for(var i=0;i<list.length;i++){
        if(_this.form.MXLX==list[i].MXLX){
            _this.form.MXLX_NAME=list[i].MXLX_NAME;
        }
      }
    },
    qxItem(addForm){

          this.addsDialogVisible = false;
    },
   /*  提交修改 */
    addItem(addForm){
       this.V.$submit('demo', (canSumit,data) =>{
         if(!canSumit) return;
         this.$api.post(this.Global.aport4+'/warningSortRuleController/saveOrUpdate', this.form,
         r => {
               if(r.success){
                 this.$message({
                 message: '保存成功！',
                 type: 'success'
               });
                this.addsDialogVisible=false;
                  this.getList(this.CurrentPage, this.pageSize, this.pd);
               } else {
               this.$message.error(r.message);
             }
         }, e => {
             this.$message.error('失败了');
           }
         );
      });
    },
    reset(val){
      let p={
        "pd":{
          ID:val.ID,
          SFYX:val.SFYX=='1'?'0':'1' //无效是0，有效是1
        }
      }
      this.$api.post(this.Global.aport4+'/warningSortRuleController/updateSFYXByID',p,
        r =>{
          if(r.success){
            this.$message({
              message: '设置成功',
              type: 'success'
            });
            this.getList(this.CurrentPage, this.pageSize, this.pd);
          }
        })
    },
  }
}
</script>
<style scoped>

</style>
