<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
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
                   <span class="input-text">中文名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWM_Like" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.XB" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option v-for="item in $store.state.xb"
                     :key="item.dm"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.CSRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.CSRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国籍：</span>
                  <el-select v-model="pd.GJDQ"  multiple collapse-tags filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="(item,ind) in gjdqList"
                      :key="ind"
                      :label="item.BM+' - '+item.MC"
                      :value="item.BM">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">证件种类：</span>
                  <el-select v-model="pd.ZJZL" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="input-input">
                    <el-option v-for="item in $store.state.zjzl"
                     :key="item.dm"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm"
                    >
                    </el-option>
                  </el-select>
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
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">受理单位：</span>
                  <el-select v-model="pd.SLDW" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="input-input">
                    <el-option v-for="(item,ind) in sldwList"
                     :key="ind"
                     :label="item.DM+' - '+item.MC"
                     :value="item.DM">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">受理时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.SLSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.SLSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">处罚结果：</span>
                  <el-select v-model="pd.CQLB" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="input-input">
                    <el-option v-for="item in $store.state.cqlb"
                     :key="item.dm"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>
             </el-col>
                <el-col :span="2" class="down-btn-area">
                  <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
                  <el-button type="primary" size="small"  class="t-ml0" @click="download">导出</el-button>
                  <!-- <el-button type="" size="small" @click="" class="mb-15"> 重置</el-button> -->
                </el-col>
              </el-row>
        </div>
        <div class="yycontent">

          <div class="yylbt mb-15">统计类别</div>
          <div class="mb-15 t-tjCheck">
            <el-checkbox-group v-model="checkedList">
              <el-checkbox v-for="item in checkItem" :label="item.code" :key="item.code" v-if="item.code!='SHIGUO'&&item.code!='SANSHIYIGUO'">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div v-if="falg">
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
                   v-for="(val,i) in configHeader"
                   :key="i"
                   :prop="val.code"
                   :label="val.label">
               </el-table-column>
               <el-table-column
                 prop="count_DESC"
                 label="统计数量">
               </el-table-column>
               <el-table-column
                 label="操作" width="100">
                 <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'AJRYXX',query:{row:scope.row,queryPd:pd}})"></el-button>
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
          <div class="totalClass">
            总数量：<span>{{totalAllResult}}</span>
          </div>
        </div>
        <div v-else>
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
                  <el-button
                    type="text"
                    class="a-btn"
                    title="详情"
                    icon="el-icon-document"
                    @click="details(scope.row)"
                  ></el-button>
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
      pd: {
        CSRQ_DateRange: { begin: "", end: "", dataType: "date" },
        SLSJ_DateRange: { begin: "", end: "", dataType: "date" },
        YWM_Like: "",
        YWX_Like: ""
      },
      gjdqList: [],
      sldwList: [],
      rybh: "",
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
      checkItem: [
        {
          code: "SLDW",
          label: "受理单位"
        },
        {
          code: "CQLB",
          label: "处罚结果"
        },
        {
          code: "AJLB",
          label: "案件类别"
        }
      ],
      checkedList: [],
      tableHead: [
        {
          code: "SLDW_DESC",
          label: "受理单位"
        },
        {
          code: "CQLB_DESC",
          label: "处罚结果"
        },
        {
          code: "AJLB_DESC",
          label: "案件类别"
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
    this.$store.dispatch("getXB");
    this.$store.dispatch("getZjzl");
    this.$store.dispatch("getCqlb");
    this.getGJDQ();
    this.getSLDW();
  },
  activated() {
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  watch: {
    falg: function(newVal, oldVal) {
      this.multipleSelection = [];
      this.selectionAll = [];
      this.selectionReal = [];
    },
    checkedList: {
      handler(newVal, oldVal) {
        if (!(newVal.toString() == oldVal.toString())) {
          this.multipleSelection = [];
          this.selectionAll = [];
          this.selectionReal = [];
        }
      }
    }
  },
  methods: {
    titleShow(e, el) {
      el.target.title = e.label;
    },
    getGJDQ() {
      this.$api.post(
        this.Global.aport5 + "/GJDQController/getGJDQFromFZ",
        {},
        r => {
          if (r.success) {
            this.gjdqList = r.data;
          }
        }
      );
    },
    getSLDW() {
      let p = {
        orgJB: this.juState,
        orgCode: this.orgCode
      };
      this.$api.post(this.Global.aport5 + "/dwController/getSldwList", p, r => {
        if (r.success) {
          this.sldwList = r.data;
        }
      });
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
      let url = "/ajController/exportFnvisas";
      this.pd.YWM_Like = this.pd.YWM_Like.toUpperCase();
      this.pd.YWX_Like = this.pd.YWX_Like.toUpperCase();
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
      } else {
        //统计导出
        if (this.selectionAll.length == 0) {
          //统计全部导出
          p = {
            pd: this.pd,
            groupList: this.checkedList,
            userCode: this.userCode,
            userName: this.userName,
            orgJB: this.juState,
            orgCode: this.orgCode,
            token: this.token
          };
        } else {
          //统计部分导出
          p = {
            requestTempList: this.selectionAll,
            groupList: this.checkedList,
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
      this.checkItemReal = [];
      for (var i = 0; i < this.checkedList.length; i++) {
        for (var j = 0; j < this.checkItem.length; j++) {
          if (this.checkedList[i] == this.checkItem[j].code) {
            this.checkItemReal.push(this.checkItem[j]);
          }
        }
      }
      this.pd.YWM_Like = this.pd.YWM_Like.toUpperCase();
      this.pd.YWX_Like = this.pd.YWX_Like.toUpperCase();
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

      this.$api.post(this.Global.aport5 + "/ajController/getCount", p, r => {
        if (r.data.isFenLei == true) {
          this.falg = true;
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
          this.totalAllResult = r.data.totalAllResult;
          this.configHeader = [];
          let _this = this;
          for (var i = 0; i < _this.checkItemReal.length; i++) {
            var obj = {};
            for (var j = 0; j < _this.tableHead.length; j++) {
              if (_this.tableHead[j].label == _this.checkItemReal[i].label) {
                obj.code = _this.tableHead[j].code;
                obj.label = _this.tableHead[j].label;
              }
            }
            _this.configHeader.push(obj);
          }
          this.configHeader = arrReal;
          if (this.selectionReal.length == 0) {
            //声明一个数组对象
            this.selectionReal = new Array(
              Math.ceil(this.TotalResult / showCount)
            );
          }
          this.$nextTick(() => {
            this.multipleSelection = [];
            for (var a = 0; a < this.tableData.length; a++) {
              for (var b = 0; b < this.selectionAll.length; b++) {
                // console.log('======',this.chargeObjectEqual(this.tableData[a],this.selectionAll[b]))
                if (
                  this.chargeObjectEqual(
                    this.tableData[a],
                    this.selectionAll[b]
                  )
                ) {
                  // console.log(this.chargeObjectEqual(this.tableData[a],this.selectionAll[b]))
                  this.$refs.multipleTable.toggleRowSelection(
                    this.tableData[a],
                    true
                  );
                }
              }
            }
          });
        } else {
          this.falg = false;
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
/* .el-button+.el-button{margin-left: 0!important;} */
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
