<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="20" class="br pr-20">
              <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWX_Like" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWM_Like" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">中文姓：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWX_Like" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">案件类别：</span>
                  <el-select v-model="pd.AJLB" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="input-input">
                    <el-option v-for="item in $store.state.ajlb"
                     :key="item.dm"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>
             </el-col>
                <el-col :span="4" class="alone-flex">
                  <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)" class="mb-15 tt-mr10">查询</el-button>
                  <el-button type="info" size="small" @click="$router.go(-1)" class="mb-15 tt-mr10">返回</el-button>
                  <el-button type="warning" size="small"  class="mb-15" @click="download">导出</el-button>
                  <!-- <el-button type="" size="small" @click="" class="mb-15"> 重置</el-button> -->
                </el-col>
              </el-row>
        </div>
        <div class="yycontent">
          <div>
          <el-table
               ref="multipleTable"
               :data="tableData"
               border
               style="width: 100%"
               @select="selectfn"
               @header-click="titleShow">
               <el-table-column
                 type="selection"
                 width="55">
               </el-table-column>
               <el-table-column
                 prop="AJLB_DESC"
                 label="案件类别">
               </el-table-column>
               <el-table-column
                 prop="AJMC"
                 label="案件名称">
               </el-table-column>
               <el-table-column
                 prop="AJZT_DESC"
                 label="案件状态">
               </el-table-column>
               <el-table-column
                 prop="SLSJ"
                 label="受理时间">
               </el-table-column>
               <el-table-column
                 prop="SLDW_DESC"
                 label="受理单位">
               </el-table-column>
               <el-table-column
                 label="操作" width="70">
                 <template slot-scope="scope">
                   <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
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
        </div>
        </div>
        <div class="bj">
          <el-dialog title="案事件信息详情" :visible.sync="asjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
            <ANSJ :type="type" :xid="xid"  :random="(new Date()).getTime()"></ANSJ>
            <div slot="footer" class="dialog-footer">
              <el-button @click="asjDialogVisible = false" size="small">取 消</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </template>
    <script>
import { ToArray, sortByKey } from "@/assets/js/ToArray.js";
import ANSJ from "../../../common/ansj_xq";
export default {
  components: { ANSJ },
  data() {
    return {
      //查询条件
      pd: {},
      queryPd: {},

      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      type: 1,
      xid: "",
      asjDialogVisible: false,
      options: [
        {
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
      checkItemReal: [],
      configHeader: [],

      falg: false,
      totalAllResult: 0,

      multipleSelection: [],
      selectionAll: [],
      yuid: [],
      selectionReal: [],

      userCode: "",
      userName: "",
      orgCode: "",
      orgName: "",
      token: "",
      juState: ""
    };
  },
  mounted() {
    this.userCode = this.$store.state.uid;
    this.userName = this.$store.state.uname;
    this.orgName = this.$store.state.orgname;
    this.orgCode = this.$store.state.orgid;
    this.juState = this.$store.state.juState;
    this.token = this.$store.state.token;
    this.$store.dispatch("getAjlb");
    this.getGJDQ();
    this.getSLDW();
  },
  activated() {
    this.row = this.$route.query.row;
    this.queryPd = this.$route.query.queryPd;
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  methods: {
    titleShow(e, el) {
      el.target.title = e.label;
    },
    selectfn(a, b) {
      this.multipleSelection = a;
      this.dataSelection();
    },
    dataSelection() {
      // console.log('this.multipleSelection',this.multipleSelection)
      this.selectionReal.splice(
        this.CurrentPage - 1,
        1,
        this.multipleSelection
      );
      // console.log('this.selectionReal',this.selectionReal);
      this.selectionAll = [];
      for (var i = 0; i < this.selectionReal.length; i++) {
        if (this.selectionReal[i]) {
          for (var j = 0; j < this.selectionReal[i].length; j++) {
            this.selectionAll.push(this.selectionReal[i][j]);
          }
        }
      }
      // console.log('this.selectionAll',this.selectionAll);
    },
    download() {
      if (this.tableData.length == 0) {
        this.$message.error("无可导出数据！");
        return;
      }
      let p = {};
      this.objCompare(this.row, this.queryPd);
      this.pd = Object.assign({}, this.row, this.queryPd, this.pd);
      let url = "/ajController/exportFnvisas";
      if (this.checkedList.length == 0) {
        //人员导出
        if (this.selectionAll.length == 0) {
          //人员全部导出
          p = {
            pd: this.pd,
            userCode: this.userCode,
            userName: this.userName,
            orgJB: this.juState,
            orgCode: this.orgCode,
            token: this.token
          };
        } else {
          //人员部分导出
          this.yuid = [];
          for (var i in this.selectionAll) {
            this.yuid.push(this.selectionAll[i].DTID);
          }
          this.pd.DTID = this.yuid;
          p = {
            pd: this.pd,
            userCode: this.userCode,
            userName: this.userName,
            orgJB: this.juState,
            orgCode: this.orgCode,
            token: this.token
          };
        }
      }
      this.$api.post(
        this.Global.aport5 + url,
        p,
        r => {
          this.downloadM(r);
        },
        e => {},
        {},
        "blob"
      );
    },
    downloadM(data) {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(
        new Blob([data], { type: "application/xls" })
      );
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute(
        "download",
        "案件综合分析列表" + this.format(new Date(), "yyyyMMddhhmmss") + ".xls"
      );
      document.body.appendChild(link);
      link.click();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.pageSize = val;
      this.getList(this.CurrentPage, val, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage = val;
      this.getList(val, this.pageSize, this.pd);
    },
    getList(currentPage, showCount, pd) {
      this.objCompare(this.row, this.queryPd);
      pd = Object.assign({}, this.row, this.queryPd, pd);
      if (pd.hasOwnProperty("DTID")) {
        delete pd["DTID"];
      }
      let p = {
        currentPage: currentPage,
        showCount: showCount,
        pd: pd,
        orderBy: "",
        orderType: "DESC",
        groupList: this.checkedList,
        userCode: this.userCode,
        userName: this.userName,
        orgJB: this.juState,
        orgCode: this.orgCode,
        token: this.token
      };
      var url = this.Global.aport5 + "/ajController/getResultListByParams";
      this.$api.post(url, p, r => {
        if (r.success) {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
          if (this.selectionReal.length == 0) {
            //声明一个数组对象
            this.selectionReal = new Array(
              Math.ceil(this.TotalResult / showCount)
            );
          }
          this.$nextTick(() => {
            this.multipleSelection = [];
            for (var i = 0; i < this.tableData.length; i++) {
              for (var j = 0; j < this.selectionAll.length; j++) {
                if (this.tableData[i].DTID == this.selectionAll[j].DTID) {
                  this.$refs.multipleTable.toggleRowSelection(
                    this.tableData[i],
                    true
                  );
                }
              }
            }
          });
        }
      });
    },
    details(n) {
      this.xid = n.RGUID + "," + n.DTID;
      this.type = 1;
      this.asjDialogVisible = true;
    }
  }
};
</script>

    <style scoped>
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.crcolor {
  background: #eff3f6;
}
.yy-input-text {
  text-align: left !important;
}
</style>
    <style>
.el-button + .el-button {
  margin-left: 0 !important;
}
.t-tjCheck .el-checkbox {
  margin-left: 20px !important;
  line-height: 30px;
}
.t-tjCheck .el-checkbox + .el-checkbox {
  margin-left: 20px !important;
}
.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
</style>
