<template lang="html">
  <div class="yymain">
    <div class="yycontent" style="margin-top: 0px!important;">
      <div class="mb-15">
        <div class="yylbt mb-15">人员基本信息</div>
        <el-row type="flex" class="yyf">
         <el-col :span="20" class="stu-left">
           <el-row  class="stu-row2">
             <el-col :span="8" class="stu-col-row2">
               <span>姓名：</span>
                  {{baseData.ywxm}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>性别：</span>
                  {{baseData.xb}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>国籍：</span>
                  {{baseData.gj}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>证件种类：</span>
                  {{baseData.zhzl}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span >证件号码：</span>
                  {{baseData.zjhm}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>证件有效期：</span>
                  {{baseData.zjyxq}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>签证号码：</span>
                  {{baseData.qzhm}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>出生日期：</span>
                  {{baseData.csrq}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span></span>
             </el-col>
           </el-row>
         </el-col>
         <el-col :span="4" class="stu-right2">
           <el-button type="primary" class="mb-5" size="small" @click="clDialogVisible=true">处理</el-button>
           <el-button type="warning" class="m0" size="small" @click="$router.go(-1)">返回</el-button>

         </el-col>
        </el-row>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">临时住宿信息</div>
        <el-table
          :data="tableData1"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="RYBH"
          label="人员编号">
          </el-table-column>
          <el-table-column
          prop="BRLXDH"
          label="本人联系电话">
          </el-table-column>
          <el-table-column
          prop="LB_SFBG"
          label="住房性质">
          </el-table-column>
          <el-table-column
          prop="DJDW"
          label="登记单位">
          </el-table-column>
          <el-table-column
          prop="DJRQ"
          label="登记日期">
          </el-table-column>
          <el-table-column
          prop="ZFZL"
          label="住房种类">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc(6,scope.row.dtid)"></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog title="详情" :visible.sync="detailsDialogVisible" width="1100px">
      <XQTC :type="xtype"></XQTC>
    </el-dialog>
    <el-dialog title="处理" :visible.sync="clDialogVisible" width="600px">
      <el-form :model="form">
        <el-row :gutter="1">
          <el-col :span="24" class="input-item">
            <span class="input-text">处理结果：</span>
            <el-input type="textarea" placeholder="请输入内容" :autosize="{ minRows: 3, maxRows: 6}" v-model="form.cljg" class="yy-input-input"></el-input>
          </el-col>
        </el-row>
      </el-form>
       <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="chuli" size="small">提 交</el-button>
        <el-button @click="clDialogVisible = false" size="small">取 消</el-button>
       </div>
    </el-dialog>
  </div>
</template>
<script>
import XQTC from '../../../GYZJ/XQ_TC'
export default {
  components:{XQTC},
  data() {
    return {
      rybh:'',
      yjid:'',
      baseData:{},
      tableData1:[],
      pd:{},
      detailsDialogVisible:false,
      xtype:0,
      xid:'',
      form:{},
      clDialogVisible:false
    }
  },
  activated(){
    this.rybh=this.$route.query.rybh;
    this.yjid=this.$route.query.yjid;

    this.getList('/wadeCouldWarningController/getBasicPersonnelInfo',0);
    this.getList('/wadeCouldWarningController/getESLZLZXXInfo',1);
  },
  mounted() {

  },
  methods: {
    openTc(type,id){
      this.xtype=type;
      this.xid=id;
      this.detailsDialogVisible=true;
    },
    getList(url,type) {
      let p = {
        "rybh": this.rybh
      };
      this.$api.post(url, p,
        r => {
          if(type==0){
            this.baseData=r.data
          }else if(type==1){
            this.tableData1=r.data
          }
        })
    },
    chuli(){
      let p = {
        "yjid": this.yjid,
        "cljg": this.form.cljg,
        "cldw": '',
        "clr":'',
        "shjg":'',
      };
      this.$api.post('/educationParController/saveWarningInfo', p,
        r => {

        })
    }

  }

}
</script>
<style scoped>

</style>
