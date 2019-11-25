<template lang="html">
  <!-- 重点国家境外人员临住预警 -->
  <div class="yymain tshu">

    <div class="yycontent">
       <div class="yylbt mb-15">临住信息</div>

      <el-table
           :data="tableData"
           border
           style="width: 100%">
           <el-table-column
             prop="DDRQ"
             label="住宿时间">
           </el-table-column>
           <!-- <el-table-column
             prop="LKRQ"
             label="离开日期">
           </el-table-column> -->
           <el-table-column
             prop="LSDWDZ"
             label="住宿地址">
           </el-table-column>
           <el-table-column
             prop="LRDW_DESC"
             label="登记单位">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getlzxx(scope.row)"></el-button>
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
          :current-page:sync="CurrentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>

    <div class="yylbt mb-15 stu-footerd" v-if='isshow'>通报人员信息</div>

     <el-table
          :data="tableData1"
          border
          style="width: 100%"  v-if='isshow'>
          <el-table-column
            prop="TBRYZL"
            label="通报人员类别">
          </el-table-column>
          <el-table-column
            prop="TBBH"
            label="通报编号">
          </el-table-column>
          <el-table-column
            prop="FBSJ"
            label="发布时间">
          </el-table-column>
          <el-table-column
            prop="BZ"
            label="备注">
          </el-table-column>
          <el-table-column
            label="操作" width="120">
            <template slot-scope="scope">
            <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="gettbry(scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>


        <div class="stu-footerd">
          <div class="stu-titled">预警处理</div>
          <el-row type="flex">
           <el-col :span="20">
             <el-input
               type="textarea"
               :autosize="{ minRows: 3, maxRows: 4}"
               placeholder="预警处理必须填写原因(不超过100个字符)"
               v-model="pm.CHANGE_RESON">
             </el-input>
           </el-col>
           <el-col :span="4"  class="down-btn-area">
             <el-button type="primary"  class="mb-5" size="small" @click="chuli()" >确定</el-button>
             <!-- <el-button type="warning"  class="m0" size="small" @click="$router.go(-1)">返回</el-button> -->
           </el-col>
         </el-row>
           <el-row type="flex">
             <el-col :span="24" class="czfont">处理人：{{withname}}</el-col>
           </el-row>
        </div>

    </div>

    <el-dialog title="临住信息详情" :visible.sync="lzxxDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
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
                 :data="tableData2"
                 border
                 style="width: 100%">
                 <el-table-column
                   prop="ZWXM"
                   label="姓名">
                 </el-table-column>
                 <el-table-column
                   prop="XB"
                   label="性别">
                 </el-table-column>
                 <el-table-column
                   prop="GJDQ"
                   label="国家地区">
                 </el-table-column>
                 <el-table-column
                   prop="ZJZL"
                   label="证件种类">
                 </el-table-column>
                 <el-table-column
                   prop="ZJHM"
                   label="证件号码">
                 </el-table-column>
                 <el-table-column
                   prop="YXQZ"
                   label="证件有效期">
                 </el-table-column>
                 <el-table-column
                   prop="QZZL"
                   label="签证种类">
                 </el-table-column>
                 <el-table-column
                   prop="QZHM"
                   label="签证号码">
                 </el-table-column>
               </el-table>
          </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="lzxxDialogVisible = false" size="small">取 消</el-button>
      </div>

    </el-dialog>


      <el-dialog title="通报人员详情" :visible.sync="tbryDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <TBRY :type="type" :xid="xid"></TBRY>
        <div slot="footer" class="dialog-footer">
          <el-button @click="tbryDialogVisible = false" size="small">取 消</el-button>
        </div>
      </el-dialog>

  </div>

</template>
<script>
import LZXX from '../../../common/lzxx_xq'
import TBRY from '../../../common/tbry_xq'
export default {
  components:{LZXX,TBRY},
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{},
      pm:{},
      po:{},
      options: this.pl.ps,
      tableData: [],
      tableData1: [],
      tableData2: [],
      row:{},
      px:{},
      pcl:{},
      withname:'',
      types:'',
      type:0,
      xid:'',
      lzxxDialogVisible:false,
      tbryDialogVisible:false,
      page:0,
      isshow:false,
    }
  },
  activated(){
    this.row=this.$route.query.row;
    console.log('this.royyyw',this.row.YJID);
    this.types=this.$route.query.type;
    this.pd.RYBH=this.row.RYBH;
    this.getList(this.CurrentPage, this.pageSize, this.pd);
    this.px.YWX=this.row.YWX;
    this.px.YWM=this.row.YWM;
    this.px.XB=this.row.XB;
    this.px.CSRQ=this.row.CSRQ;
    this.getList1(this.px);
    console.log('this.row',this.row);
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.withname=this.$store.state.uname;
  },
  methods: {
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
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
      this.$api.post(this.Global.aport4+'/focusCountryPersonWarningController/getLinZhuListByRybh', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },

    getList1(px) {

      let p = {
        "pd":px
      };
      this.$api.post(this.Global.aport4+'/focusCountryPersonWarningController/getTongBaoListByRyxx', p,
        r => {
          this.tableData1 = r.data;
        })
    },


    chuli(){
      this.pcl.YJID=this.row.YJID;
      this.pcl.CLJG=this.pm.CHANGE_RESON;
      this.pcl.CLDW=this.$store.state.orgname;
      this.pcl.CLR=this.withname;
      let p = {
        "pd":this.pcl
      };
      this.$api.post(this.Global.aport4+'/warningInfoController/saveCLJG', p,
        r => {
           if(r.success){
             this.$message({
               message: '保存成功',
               type: 'success'
             });

           }
           this.$router.push({name: 'GJYWWYLZYJ'})
        })
    },
    getlzxx(n){
        this.xid=n.DTID;
        this.po.DZDTID=n.DZDTID;
        this.po.ZSRQ=n.ZSRQ;
      let p = {
        "pd": this.po
      };
      this.$api.post(this.Global.aport4+'/focusCountryPersonWarningController/getTongAddressPersonListByDZDTIDAndZSRQ', p,
        r => {
          this.tableData2 = r.data.resultList;
        });
      this.lzxxDialogVisible=true;
    },
    gettbry(n){
      this.xid=n.DTID;
      this.tbryDialogVisible=true;
    },
  }
}
</script>
<style scoped>

</style>
