<template lang="html">
    <!-- 临住信息统计 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="16" class="br pr-20">
          <el-row align="center"   :gutter="1">
                <el-col  :sm="24" :md="24" :lg="24"  class="input-item">
                  <span class="input-text">时间范围：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.beginTime" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMddHHmmss"
                       placeholder="开始时间">
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.endTime" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMddHHmmss"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
         </el-row>
         </el-col>
           <el-col :span="8" class="down-btn-area">
               <el-row  style="text-align:right;">
                   <el-button type="success" size="small" @click="getList(pd)">查询</el-button>
                   <el-button type="info" size="small" @click="getFH(pd)">返回</el-button>
                   <el-button type="primary" size="small" @click="download(0)">导出</el-button>
               </el-row>
           </el-col>

          </el-row>
    </div>
    <div class="yycontent">
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
             prop="dw"
             label="单位" v-if="fj" :key="Math.random()">
             <template slot-scope="scope">
             <a class="sb" @click="getPCS(scope.row.dw)"> {{scope.row.dw}} </a>
             </template>
           </el-table-column>
           <el-table-column
             prop="dw"
             label="宾馆" v-if="bgs" :key="Math.random()">
           </el-table-column>
           <el-table-column
             prop="zs"
             label="总数" :key="Math.random()">
           </el-table-column>
           <el-table-column
             prop="shm"
             label="社会面" v-if="fj" :key="Math.random()">
           </el-table-column>
           <el-table-column
             prop="bg"
             label="旅馆" v-if="fj" :key="Math.random()">
             <template slot-scope="scope">
             <a class="sb" @click="getLG(scope.row.dw,'3')"> {{scope.row.bg}} </a>
             </template>
           </el-table-column>
           <el-table-column
             label="正确率">
                   <el-table-column
                      prop="cwsj"
                      label="错误数">
                      <template slot-scope="scope">
                      <a class="sb" @click="formData.pageIndex=1;toLink(0,scope.row.dw)"> {{scope.row.cwsj}} </a>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="zql"
                      label="正确率">
                    </el-table-column>
           </el-table-column>
           <el-table-column
             label="及时率">
                   <el-table-column
                      prop="cbsj"
                      label="迟报数">
                      <template slot-scope="scope">
                      <a class="sb" @click="formData.pageIndex=1;toLink(1,scope.row.dw)"> {{scope.row.cbsj}} </a>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="jsl"
                      label="及时率">
                    </el-table-column>
           </el-table-column>
           <el-table-column
             label="上报省厅">
                   <el-table-column
                      prop="xtcbs"
                      label="迟报数">
                      <template slot-scope="scope">
                      <a class="sb" @click="formData.pageIndex=1;toLink(2,scope.row.dw)"> {{scope.row.xtcbs}} </a>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="xtjsl"
                      label="及时率">
                    </el-table-column>
           </el-table-column>
         </el-table>
    </div>
  <el-dialog :title="diaglogtitle" customClass="customWidth" :visible.sync="detailsDialogVisible" :append-to-body="true" width="80%">
        <el-row  style="text-align:right;">
            <el-button type="primary" size="small" @click="download(1)">导出</el-button>
        </el-row>
    <el-table
         ref="multipleTable"
         :data="tableData1"
         border
         style="width: 100%"
         @selection-change="handleSelectionChange">
         <el-table-column
           prop="zwxm"
           label="中文姓名">
           <template slot-scope="scope">
           <span :class="{'yycolor':scope.row.zwxm_t==true}">   {{scope.row.zwxm}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="ywxm"
           label="英文姓名">
           <template slot-scope="scope">
           <span :class="{'yycolor':scope.row.ywxm_t==true}">   {{scope.row.ywxm}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="xb"
           label="性别">
           <template slot-scope="scope">
           <span :class="{'yycolor':scope.row.xb_t==true}">   {{scope.row.xb}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="zjzl"
           label="证件种类">
           <template slot-scope="scope">
           <span :class="{'yycolor':scope.row.zjzl_t==true}">   {{scope.row.zjzl}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="zjhm"
           label="证件号码">
           <template slot-scope="scope">
           <span :class="{'yycolor':scope.row.zjhm_t==true}">   {{scope.row.zjhm}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="gjdq"
           label="国家地区">
           <template slot-scope="scope">
           <span :class="{'yycolor':scope.row.gjdq_t==true}">   {{scope.row.gjdq}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="csrq"
           label="出生日期">
           <template slot-scope="scope">
           <span :class="{'yycolor':scope.row.csrq_t==true}">   {{scope.row.csrq}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="zsrq"
           label="住宿日期">
         </el-table-column>
         <el-table-column
           prop="djdw"
           label="登记单位">
         </el-table-column>
         <el-table-column
           prop="ssfj"
           label="所属分局">
         </el-table-column>
         <el-table-column
           prop="cwlx"
           label="错误类型" v-if='cw' :key="Math.random()" width="200">
         </el-table-column>
         <el-table-column
           prop="djrq"
           label="登记日期" v-if='cd' :key="Math.random()">
         </el-table-column>
         <el-table-column
           prop="cjsj"
           label="上报日期" v-if='sb' :key="Math.random()">
         </el-table-column>
         <el-table-column
           prop="bz"
           label="备注">
         </el-table-column>
         <p slot="append" style="text-align:center; line-height:50px;" v-if='datashow'><a href="javascript:;"  @click="getMData()" class="blue01">点击加载更多</a></p>
       </el-table>
       <div slot="footer" class="dialog-footer">
         <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
       </div>
  </el-dialog>
  </div>

</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      pd: {
        beginTime: '',
        endTime: ''
      },
      form: {},
      tableData: [],
      tableData1: [],
      detailsDialogVisible: false,
      fj: true,
      bgs: false,
      level: '1',
      diaglogtitle: '',
      dw: '',
      dwlg: '',
      cw: false,
      cd: false,
      sb: false,
      dc: 0,
      dcdw: '',
      bglevel: '',
      dclevel: '',
      loading: true,
      datashow:true,
      formData: {
                pageIndex: 1,
                pageSize: 10,
      },
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  activated() {
    this.getList(this.pd);
  },
  mounted() {
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.getList(this.pd);
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getList(pd) {
      this.bgs = false;
      this.fj = true;
      this.level = "1";
      this.dclevel = "1";
      this.bglevel = '';
      let p = {
        "level": "1",
        "dw": "",
        "beginTime": this.pd.beginTime,
        "endTime": this.pd.endTime,
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname,
        'orgJB':this.juState,
        'orgCode':this.orgCode,
        'token':this.token

      };
      var url = this.Global.aport2 + '/data_report/selectTjxx';
      this.$api.post(url, p,
        r => {
          this.tableData = r.data;
        })
    },
    getPCS(dw) {
      this.dw = dw;
      this.bglevel = '';
      if (this.level == "1" || this.level == "3") {
        this.dw = dw;
        this.level = "2";
        this.dclevel = "2";
        this.bgs = false;
        this.fj = true;
        let p = {
          "level": "2",
          "dw": dw,
          "beginTime": this.pd.beginTime,
          "endTime": this.pd.endTime,
          "operatorId": this.$store.state.uid,
          "operatorNm": this.$store.state.uname,
        };
        var url = this.Global.aport2 + '/data_report/selectTjxx';
        this.$api.post(url, p,
          r => {
            this.tableData = r.data;
          })
      } else {
        return;
      }
    },
    getLG(dw, ll) {
      this.dwlg = dw;
      this.bglevel = ll;
      this.bgs = true;
      this.fj = false;
      var ll = this.level;
      if (this.dwlg == "合计") {
        if (this.level == "2") {
          ll = 1;
          dw = this.dw;
        }
      } else {
        this.dclevel = "";
      }
      let p = {
        "level": ll,
        "dw": dw,
        "beginTime": this.pd.beginTime,
        "endTime": this.pd.endTime,
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname,
      };
      var url = this.Global.aport2 + '/data_report/selectBgxx';
      this.$api.post(url, p,
        r => {
          this.tableData = r.data;
        })
    },
    getMData(){
      this.formData.pageIndex++;
      this.toLink(this.dc,this.dcdw);
    },
    toLink(i, dw) {
      //this.formData.pageSize=parseInt(this.formData.pageIndex)*parseInt(this.formData.pageSize);
      this.dcdw = dw;
      // console.log('dw1',dw);
      this.dc = i;
      this.tableData1=[];
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      var ll = this.level;
      if (this.bglevel != '') {
        ll = this.bglevel;
      }
      if (this.dcdw == "合计") {
        if(this.level!='1')
         {  dw = this.dwlg; }
        if (this.level == "2") {
          ll = 1;
          dw = this.dw;
        }
        if (this.bglevel != "" && this.level != "") {
          ll = parseInt(this.bglevel) + parseInt(this.level);
        }
        if (this.dclevel == "2") {
          ll = parseInt(this.dclevel) + parseInt(this.level);
        }
        if (ll == 5) {
          dw = this.dwlg;
        }
        }
        console.log('dw2',dw);
      let p = {
        "level": ll,
        "dw": dw,
        "page":this.formData.pageIndex,
        "limit":this.formData.pageSize,
        "beginTime": this.pd.beginTime,
        "endTime": this.pd.endTime,
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname,
      };
      var url = '';
      if (i == 0) {
        this.diaglogtitle = "错误数据详情";
        url = this.Global.aport2 + '/data_report/selectCwsj';
        this.cw = true;
        this.cd = false;
        this.sb = false;
      } else if (i == 1) {
        this.diaglogtitle = "迟报数据详情";
        url = this.Global.aport2 + '/data_report/selectCbsj';
        this.cw = false;
        this.cd = true;
        this.sb = false;
      } else if (i == 2) {
        this.diaglogtitle = "上报省厅迟报数据详情";
        url = this.Global.aport2 + '/data_report/selectXtcbsj';
        this.cw = false;
        this.cd = true;
        this.sb = true;
      }
      this.$api.post(url, p,
        r => {
          if(r.success){

          this.tableData1 = r.data;
          this.detailsDialogVisible = true;
          this.datashow=r.flag;
        }
        })
      }, 2000);
    },
    getFH(pd) {
      if (this.level == "1" || this.level == "2") {
        this.getList(pd);
      } else {
        if (this.dw == "") {
          this.getList(pd);
        } else {
          this.getPCS(this.dw);
        }
      }
    },
    download(t) {
      var url = '';
      var dw = this.dw;
      var ll = this.level;
      if (t == 0) {
        if (this.dclevel == "1") {
          url = window.IPConfig.IP + '/' + this.Global.aport2 + "/data_report/exportTjxx";
        } else if (this.dclevel == "2") {
          url = window.IPConfig.IP + '/' + this.Global.aport2 + "/data_report/exportTjxx";
        } else if (this.bglevel == "3") {
          url = window.IPConfig.IP + '/' + this.Global.aport2 + "/data_report/exportBgxx";
          dw = this.dwlg;
        }
        if (this.dwlg == "合计") {
          dw = this.dwlg;
          url = window.IPConfig.IP + '/' + this.Global.aport2 + "/data_report/exportBgxx";
          if (this.level == "2") {
            ll = 1;
            dw = this.dw;
          }
        } else {

          this.dclevel = "";
        }
      } else if (t == 1) {
        console.log('this.dc',this.dc);
        dw = this.dcdw;
        if (this.dc == 0) {
          url = window.IPConfig.IP + '/' + this.Global.aport2 + "/data_report/exportCwxx";
        } else if (this.dc == 1){
          url = window.IPConfig.IP + '/' + this.Global.aport2 + "/data_report/exportCbxx";
        }else if (this.dc == 2){
          url = window.IPConfig.IP + '/' + this.Global.aport2 + "/data_report/exportXtcbxx";
        }
        if (this.bglevel != '') {
          ll = this.bglevel;
        }

        if (this.dcdw == "合计" ) {
            if(this.level!='1')
             {dw = this.dwlg;}
          if (this.level == "2") {
            ll = 1;
            dw = this.dw;
          }
          if (this.bglevel != "" && this.level != "") {
            ll = parseInt(this.bglevel) + parseInt(this.level);

          }
          if (this.dclevel == "2") {
            ll = parseInt(this.dclevel) + parseInt(this.level);
          }
          if (ll == 5) {
            dw = this.dwlg;
          }

        }

      }


      // console.log('this.bglevel',ll);
      // console.log('this.dw1111',dw);
      // console.log('this.url',url);
      let p = {
        "level": ll,
        "dw": dw,
        "beginTime": this.pd.beginTime,
        "endTime": this.pd.endTime,
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname,
      };
      console.log('this.p', p);
      axios({
        method: 'post',
        url: url,
        data: p,
        responseType: 'blob'
      }).then(response => {
        this.downloadM(response)
      });
    },
    downloadM(data) {
      if (!data) {
        return
      }

      let url = window.URL.createObjectURL(new Blob([data.data], {
        type: "application/octet-stream"
      }))
      let link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.setAttribute('download', '临住统计列表' + '.xlsx')
      document.body.appendChild(link)
      link.click()
    },
  }
}
</script>

<style scoped>
a {
  color: blue
}

.sb {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.sb:hover {
  color: red
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background: url(../../../assets/img/t1.png);
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.block {
  padding-top: 5px;
}

.crcolor {
  background: #EFF3F6;
}

.yycolor {
  color: red;
}

.yy-input-text {
  text-align: left !important;
}
</style>
<style>
.customWidth {
  width: 80%;
}
</style>
