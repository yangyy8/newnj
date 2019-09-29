<template>
    <div class="yymain">
      <div class="yycontent">
      <div class="ak-tabs">
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
          临住信息
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
          同一地址人
        </div>
      </div>
      <div class="ak-tab-pane" >
          <div v-show="page==0">
             <LZXX :type='type' :xid="xid"></LZXX>
          </div>
          <div v-show="page==1">
            <el-table
                 ref="multipleTable"
                 :data="tableData"
                 border
                 style="width: 100%">
                 <el-table-column
                   prop="address"
                   label="姓名">
                 </el-table-column>
                 <el-table-column
                   prop="address"
                   label="性别">
                 </el-table-column>
                 <el-table-column
                   prop="address"
                   label="国家地区">
                 </el-table-column>
                 <el-table-column
                   prop="address"
                   label="证件种类">
                 </el-table-column>
                 <el-table-column
                   prop="address"
                   label="证件号码">
                 </el-table-column>
                 <el-table-column
                   prop="address"
                   label="证件有效期">
                 </el-table-column>
                 <el-table-column
                   prop="address"
                   label="签证种类">
                 </el-table-column>
                 <el-table-column
                   prop="address"
                   label="签证号码">
                 </el-table-column>
               </el-table>
          </div>
      </div>
      <!-- <div class="mt-10">
      <div class="yylbt mb-10">通报人员</div>
      <el-table
           ref="multipleTable"
           :data="tableData1"
           border
           style="width: 100%">
           <el-table-column
             prop="address"
             label="通报人员类别">
           </el-table-column>
           <el-table-column
             prop="address"
             label="通报编号">
           </el-table-column>
           <el-table-column
             prop="address"
             label="发布时间">
           </el-table-column>
           <el-table-column
             prop="address"
             label="备注">
           </el-table-column>
           <el-table-column
             label="操作" width="80">
             <template slot-scope='scope'>
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getTBRY(scope.row)"></el-button>
            </template>
           </el-table-column>
         </el-table>
       </div>
       <div class="stu-footerd">
         <div class="stu-titled">预警处理：</div>
         <el-row type="flex">
          <el-col :span="20">
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 4}"
              placeholder="必须填写原因(不超过100个字符)"
              v-model="pd.CHANGE_RESON">
            </el-input>
          </el-col>
          <el-col :span="4"  class="down-btn-area">
            <el-button type="primary"  class="mb-5" size="small" @click="" >确定</el-button>
            <el-button type="warning"  class="m0" size="small" @click="$router.go(-1)">返回</el-button>
          </el-col>
        </el-row>
          <el-row type="flex">
            <el-col :span="24" class="czfont">处理人：{{withname}}</el-col>
          </el-row>
       </div>

     <div class="bjdialog">
     <el-dialog title="通报人员详情" :visible.sync="tbryDialogVisible">
        <TBRY :type="type"></TBRY>
         <div slot="footer" class="dialog-footer">
          <el-button @click="tbryDialogVisible = false" size="small">取 消</el-button>
         </div>
    </el-dialog>
     </div> -->
    </div>
</div>
</template>
<script>
import LZXX from '../../../common/lzxx_xq'
import TBRY from '../../../common/tbry_xq'
export default {
  components:{LZXX,TBRY},
  data() {
    return {
      pd: {},
      withname:'',
      form:{},
      tbryDialogVisible:false,
      tableData: [],
      tableData1: [],
      type:1,
      xid:'',
      page:0,

    }
  },
  activated(){

  },
  mounted() {
     this.withname=this.$store.state.uname;
  },
  methods: {
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
    },

    getList(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport4+'', p,
        r => {
          this.tableData = r.data;
        })
    },
    getTBRY(n){
      this.tbryDialogVisible=true;
    },
  }
}
</script>
<style scoped>
</style>
