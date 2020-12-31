<template lang="html">
  <!-- 分类规则管理 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center" :gutter="2">
              <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">名称：</span>
                  <el-input placeholder="请输入名称" size="small" v-model="pd.MXLX" class="input-input"></el-input>
              </el-col>
              <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">描述：</span>
                  <el-input placeholder="请输入描述" size="small" v-model="pd.RULE_NAME" class="input-input"></el-input>
              </el-col>
          </el-row>
        </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
      <div class="ak-tabs">
        <div class="ak-tab-item hand" :class="{'ak-checked':page==0}" @click="page=0;tabFnc(page)">
          已启用
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==1}" @click="page=1;tabFnc(page)">
          已停用
        </div>
      </div>
      <div class="ak-tab-pane">
        <el-row class="mb-15">
          <el-button type="primary"  size="small" @click="from={};adds(0,'');">新增</el-button>
          <el-button type="primary"  size="small" @click="jbFnc">简表</el-button>
        </el-row>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <template v-for="(lb,i) in lbData">
            <el-table-column
              :key="i"
              :prop="lb.dm"
              :label="lb.cm">
            </el-table-column>
          </template>
          <!-- <el-table-column
            prop="MXLX"
            label="名称">
          </el-table-column>
          <el-table-column
            prop="MXLX_NAME"
            label="描述">
          </el-table-column> -->
          <el-table-column
            label="操作" width="100">
            <template slot-scope="scope">
              <div>
                <el-button
                  type="text"
                  class="a-btn"
                  title="编辑"
                  icon="el-icon-edit-outline"
                  @click="adds(1,scope.row)"
                ></el-button>
                <el-button
                  type="text"
                  class="a-btn"
                  title="停用"
                  icon="el-icon-s-tools"
                  v-if="scope.row.SFYX=='1'"
                  @click="reset(scope.row)"
                ></el-button>
                <el-button
                  type="text"
                  class="a-btn"
                  title="启用"
                  icon="el-icon-setting"
                  v-if="scope.row.SFYX=='0'"
                  @click="reset(scope.row)"
                ></el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult}}条记录</div>
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
    <el-dialog :title="dialogText" :visible.sync="addsDialogVisible" width="1000px" >
      <el-form :model="form" ref="addForm">
        <el-row :gutter="1"  class="mb-6">
            <el-col :span="24"  class="yzform" data-scope="demo" data-name="MXLX" data-type="input"
             v-validate-easy="[['required']]">
              <span class="yy-input-text">名称：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.MXLX" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="24"  class="yzform">
              <span class="yy-input-text">描述：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.MXLX_NAME"  id="mxmc"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="24"  class="yzform">
              <span class="yy-input-text" style="vertical-align: top;">自定义项：</span>
              <div class="transfer">
                <el-transfer
                filterable
                :filter-method="filterMethod"
                v-model="form.custom"
                :render-content="renderFunc"
                :props="propsData"
                :data="$store.state.gjdq"
                :titles="['可选择列', '已选择列']"
                ></el-transfer>
              </div>
            </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addItem('addForm')" size="small">确 定</el-button>
        <el-button @click="qxItem('addForm')" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 简表 -->
    <el-dialog title="简表" :visible.sync="jbDialogVisible" width="1000px">
      <Trans
        :key="timer"
        :transData="lbDataAll"
        :pointData="pointData"
        @transSave="transSave"
        @dialogCancel="jbDialogVisible=false"></Trans>
    </el-dialog>
  </div>
</template>
<script>
import Trans from "@/components/common/Transfer.vue"
export default {
  components:{Trans},
  data() {
    return {
      page:0,
      renderFunc(h, option) {
        return <span>{ option.dm } - { option.mc }</span>;
      },
      propsData:{
        key:'dm',
        label:'cm'
      },
      //简表开始
      timer:'',
      jbDialogVisible:false,
      pointData:[],//选中项
      lbDataAll:[//列表总数据===简表数据源
        {
          dm:'MXLX',
          cm:'名称',
        },
        {
          dm:'MXLX_NAME',
          cm:'描述',
        },
      ],
      lbData:[],//列表简表动态加载数据====简表选中项
      //简表结束
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {},
      options: this.pl.ps,
      tableData: [],
      mapf: {}, //详情
      form: {},
      detailsDialogVisible: false,
      addsDialogVisible: false,
      dialogText: "新增",
      userCode: "",
      userName: "",
      orgCode: "",
      orgName: "",
      token: "",
      juState: ""
    };
  },
  mounted() {
    this.lbData = this.lbDataAll//页面加载 列表选中项 == 列表总数据源
    this.$store.dispatch('getGjdq');
    this.userCode = this.$store.state.uid;
    this.userName = this.$store.state.uname;
    this.orgCode = this.$store.state.orgname;
    this.orgName = this.$store.state.orgid;
    this.juState = this.$store.state.juState;
    this.token = this.$store.state.token;
  },
  activated() {
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  methods: {
    //穿梭框的自定义搜索
    filterMethod(query, item){
      return (item.dm).toLowerCase().indexOf(query) > -1 || (item.dm).toUpperCase().indexOf(query) > -1 || item.mc.indexOf(query) > -1;
    },
    //===========================================================================简表开始==============================================
    jbFnc(){
      this.timer = new Date().getTime();
      this.jbDialogVisible = true
    },
    transSave(data){
      this.pointData = [];
      this.lbDataAll.forEach(item =>{
        data.forEach(jtem => {
          if(item.dm == jtem){
            this.pointData.push(item)
          }
        })
      })
      this.lbData = this.pointData;
      this.jbDialogVisible = false;
    },
    //===========================================================================简表结束==============================================
    tabFnc(){
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    pageSizeChange(val) {
      this.pageSize = val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage = val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    getList(currentPage, showCount, pd) {
      let p = {
        currentPage: currentPage,
        showCount: showCount,
        pd: pd,
        userCode: this.userCode,
        userName: this.userName,
        orgCode: this.orgCode,
        orgJB: this.juState,
        token: this.token
      };
      p.pd.sfyx = this.page+''
      this.$api.post(
        this.Global.aport4 + "/warningSortRuleController/getResultListByParams",
        p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        }
      );
    },
    details(i) {
      this.mapf = i;
      this.detailsDialogVisible = true;
    },
    adds(n, i) {
      this.addsDialogVisible = true;
      this.V.$reset("demo");
      if (n != 0) {
        this.form = Object.assign({}, i);
        this.dialogText = "编辑";
      } else {
        this.dialogText = "新增";
        this.form = {};
      }
    },
    qxItem(addForm) {
      this.addsDialogVisible = false;
    },
    /*  提交修改 */
    addItem(addForm) {
      this.V.$submit("demo", (canSumit, data) => {
        if (!canSumit) return;
        this.form.CREATE_USER_ID = this.userCode;
        this.form.CREATE_USER_NAME = this.userName;
        this.form.orgCode = this.orgCode;
        this.form.token = this.token;
        this.$api.post(
          this.Global.aport4 + "/warningSortRuleController/saveOrUpdate",
          this.form,
          r => {
            if (r.success) {
              this.$message({
                message: "保存成功！",
                type: "success"
              });
              this.addsDialogVisible = false;
              this.getList(this.CurrentPage, this.pageSize, this.pd);
            } else {
              this.$message.error(r.message);
            }
          },
          e => {
            this.$message.error("失败了");
          }
        );
      });
    },
    reset(val) {
      let p = {
        pd: {
          ID: val.ID,
          SFYX: val.SFYX == "1" ? "0" : "1" //无效是0，有效是1
        },
        userCode: this.userCode,
        userName: this.userName,
        orgCode: this.orgCode,
        orgJB: this.juState,
        token: this.token
      };
      this.$api.post(
        this.Global.aport4 + "/warningSortRuleController/updateSFYXByID",
        p,
        r => {
          if (r.success) {
            this.$message({
              message: "设置成功",
              type: "success"
            });
            this.getList(this.CurrentPage, this.pageSize, this.pd);
          }
        }
      );
    }
  }
};
</script>
<style scoped>
.yy-input-text {
  width: 25% !important;
}
.yy-input-input {
  width: 65% !important;
}
.transfer{
    display: inline-block;
    line-height: 0px!important;
}
</style>
