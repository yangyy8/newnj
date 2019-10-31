<template lang="html">
    <!-- 境外人员出租房屋隐患分析 -->
      <div class="yymain ">
        <!-- 地图 -->

        <div id="mainMap" class="mapbj lzxx"></div>

        <!-- 查询导航 -->
        <div class="fxleft">
             <div class="fxbnt">
               <el-button  size="mini" type="primary" @click="changtab()" v-if="show" icon="iconfont el-icon-yy-xiangshangjiantou" style="border-radius:0px!important;border-width: 1px 1px 0px 1px"></el-button>
               <el-button  size="mini" type="primary" @click="changtab()" v-else icon="iconfont el-icon-yy-xiangxiajiantou" style="border-radius:0px!important;"></el-button>
             </div>
             <el-collapse-transition>
             <div class="fxcont" v-if="show">
                <el-row :gutter="1">
                  <el-col :span="24">
                      <span class="yy-input-text"><font color=red>*</font> 所属分局：</span>
                      <el-select v-model="pd.ssfj" filterable clearable default-first-option @change="getSSPCS(pd.ssfj)" placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in ssfj"
                          :key="ind1"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">派出所：</span>
                        <el-select v-model="pd.sspcs" filterable clearable default-first-option placeholder="请输入关键字"  size="small" class="yy-input-input">
                       <el-option
                         v-for="(item,ind1) in sspcs"
                         :key="ind1"
                         :label="item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">责任区：</span>
                      <el-select v-model="pd.zrq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in zrq"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text"><font color=red>*</font> 入住时间：</span>
                        <el-date-picker class="yy-input-input"
                           v-model="pd.beginTime" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy/MM/dd"
                           placeholder="开始时间" >
                        </el-date-picker>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text"></span>
                        <el-date-picker class="yy-input-input"
                            v-model="pd.endTime" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyy/MM/dd"
                            placeholder="结束时间" >
                        </el-date-picker>
                  </el-col>
                </el-row>
                <el-row type="flex">
                  <el-col :span="24" style="text-align:center;">
                    <el-button type="primary" size="mini" @click="doSearch()">查询</el-button>
                    <el-button type="primary" size="mini" @click="doset()">重置</el-button>
                  </el-col>
                </el-row>
                <el-row type="flex" v-if="ccshow">
                  <el-col :span="24" style="text-align:center;font-size:16px;">
                        统计总数：<span style="color:red">{{count}}</span>
                  </el-col>
                </el-row>
             </div>
            </el-collapse-transition>
        </div>


        <!--弹出的人员信息-->
        <div class="bghome">
          <el-dialog :title="diatext" :visible.sync="bzhDialogVisible">

            <div v-if="tshow1" :key="Math.random()">
                  <el-row align="center"   :gutter="2">
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="input-text">证件种类：</span>
                      <el-select v-model="pm.zjzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                        <el-option
                          v-for="(item,ind4) in $store.state.zjzl"
                          :key="ind4"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="input-text">签证种类：</span>
                      <el-select v-model="pm.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.qzzl"
                          :key="ind"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                    </el-col>
                        <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                          <span class="input-text">国家地区：</span>
                          <el-select v-model="pm.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                            <el-option
                              v-for="(item,ind5) in $store.state.gjdq"
                              :key="ind5"
                              :label="item.dm+' - '+item.mc"
                              :value="item.dm">
                            </el-option>
                          </el-select>
                        </el-col>
                        <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                          <span class="input-text">停留事由：</span>
                          <el-select v-model="pm.tlsy" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                            <el-option
                              v-for="(item,ind) in $store.state.rjsy"
                              :key="ind"
                              :label="item.dm+' - '+item.mc"
                              :value="item.dm">
                            </el-option>
                          </el-select>
                        </el-col>

                        <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                           <span class="input-text">英文姓名：</span>
                           <el-input placeholder="请输入内容" size="small" v-model="pm.ywxm" class="input-input"></el-input>
                        </el-col>
                        <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                          <span class="input-text">性别：</span>
                          <el-select v-model="pm.xb" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                            <el-option
                              v-for="(item,ind) in $store.state.xb"
                              :key="ind"
                              :label="item.dm+' - '+item.mc"
                              :value="item.dm">
                            </el-option>
                          </el-select>
                        </el-col>
                        <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                          <span class="input-text">出生日期：</span>
                          <div class="input-input t-flex t-date">
                            <el-date-picker
                               v-model="pm.begincsrq" format="yyyy-MM-dd"
                               type="date" size="small" value-format="yyyy/MM/dd"
                               placeholder="开始时间" >
                            </el-date-picker>
                            <span class="septum">-</span>
                            <el-date-picker
                                v-model="pm.endcsrq" format="yyyy-MM-dd"
                                type="date" size="small" value-format="yyyy/MM/dd"
                                placeholder="结束时间" >
                            </el-date-picker>
                         </div>
                        </el-col>
               <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                &nbsp;&nbsp; <el-button type="primary"  size="mini" @click="getRyxx(CurrentPage,pageSize,bzhid,mc,1)" class="mb-15">查询</el-button>
               </el-col>
                  </el-row>
                        <el-table
                             :data="tableData"
                             style="width: 100%"
                             >
                             <el-table-column
                               label="照片">
                               <template slot-scope="scope">
                                 <div v-if="scope.row.zp">
                                  <el-popover placement="right" title="" trigger="hover">
                                    <img :src="scope.row.zp" style="max-width:700px; max-height:700px;"/>
                                    <img slot="reference" :src="scope.row.zp" :alt="scope.row.zp"  width="50" height="50">
                                  </el-popover>
                                 </div>
                               </template>
                             </el-table-column>
                             <el-table-column
                               prop="ywxm"
                               label="英文姓名">
                             </el-table-column>
                             <el-table-column
                               prop="zwxm"
                               label="中文姓名">
                             </el-table-column>
                             <el-table-column
                               prop="xb"
                               label="性别">
                             </el-table-column>
                             <el-table-column
                               prop="csrq"
                               label="出生日期">
                             </el-table-column>
                             <el-table-column
                               prop="djrq"
                               label="登记日期">
                             </el-table-column>
                             <el-table-column
                               prop="gjdq"
                               label="国家地区">
                             </el-table-column>
                             <el-table-column
                               prop="zjzl"
                               label="证件种类">
                             </el-table-column>
                             <el-table-column
                               prop="zjhm"
                               label="证件号码">
                               <template slot-scope="scope">
                                <span style="color:yellow;cursor:pointer" @click="gotos(scope.row.zjhm,scope.row.gjdqdm)">{{scope.row.zjhm}}</span>
                               </template>
                             </el-table-column>

                         </el-table>
                         <div class="middle-foot mt-10">
                            <div class="page-msg">
                              <div class="crrcolor">
                              共{{TotalResult}}条记录
                              </div>
                            </div>
                            <el-pagination
                              background
                              @current-change="handleCurrentChange"
                              :current-page="CurrentPage"
                              :page-size="pageSize"
                              layout="prev, pager, next"
                              :total="TotalResult">
                            </el-pagination>
                          </div>
            </div>
            <!-- <div v-if="tshow2" :key="Math.random()">
              <el-row>
              <el-col :span="24" style="text-align:right">
                <el-button type="primary" size="mini" @click="back()">返回</el-button>
              </el-col>
             </el-row>
             <div class="rrtitle">签证信息</div>
             <el-table
                  :data="tableqz"
                  style="width: 100%"
                  >
                  <el-table-column
                    prop="qzzl"
                    label="签证种类">
                  </el-table-column>
                  <el-table-column
                    prop="qzhm"
                    label="签证号码">
                  </el-table-column>
                  <el-table-column
                    prop="qzyxqz"
                    label="签证有效期">
                  </el-table-column>


              </el-table>
              <div class="middle-foot mt-10">
                 <div class="page-msg">
                   <div class="crrcolor">
                   共{{TotalResult1}}条记录
                   </div>
                   <div class="crrcolor">
                   </div>
                   <div class="crrcolor">
                   </div>
                 </div>
                 <el-pagination
                   background
                   @current-change="handleCurrentChange1"
                   :current-page:sync="CurrentPage1"
                   :page-size="pageSize1"
                   layout="prev, pager, next"
                   :total="TotalResult1">
                 </el-pagination>
               </div>
             <div class="rrtitle">出入境信息</div>
             <el-table
                  :data="tablecrj"
                  style="width: 100%"
                  >
                  <el-table-column
                    prop="crjbs"
                    label="出入境状态">
                  </el-table-column>
                  <el-table-column
                    prop="crjsj"
                    label="出入境时间">
                  </el-table-column>
                  <el-table-column
                    prop="crjka"
                    label="出入境口岸">
                  </el-table-column>
              </el-table>
              <div class="middle-foot mt-10">
                 <div class="page-msg">
                   <div class="crrcolor">
                   共{{TotalResult2}}条记录
                   </div>
                   <div class="crrcolor">

                   </div>
                   <div class="crrcolor">
                   </div>
                 </div>
                 <el-pagination
                   background
                   @current-change="handleCurrentChange2"
                   :current-page:sync="CurrentPage2"
                   :page-size="pageSize2"
                   layout="prev, pager, next"
                   :total="TotalResult2">
                 </el-pagination>
               </div>
             <div class="rrtitle">临住信息</div>
             <el-table
                  :data="tablelz"
                  style="width: 100%"
                  >
                  <el-table-column
                    prop="zsrq"
                    label="入住日期">
                  </el-table-column>
                  <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                      <el-button type="text" @click="getLX(scope.row)">查看详情</el-button>
                    </template>
                  </el-table-column>
              </el-table>
              <div class="middle-foot mt-10">
                 <div class="page-msg">
                   <div class="crrcolor">
                   共{{TotalResult3}}条记录
                   </div>
                   <div class="crrcolor">
                   </div>
                   <div class="crrcolor">
                   </div>
                 </div>
                 <el-pagination
                   background
                   @current-change="handleCurrentChange3"
                   :current-page:sync="CurrentPage3"
                   :page-size="pageSize3"
                   layout="prev, pager, next"
                   :total="TotalResult3">
                 </el-pagination>
               </div>
            </div> -->
            <div slot="footer">
              <img src="../../../../assets/img/qx.png" border="0" @click="bzhDialogVisible = false" style="cursor:pointer" >
            </div>
           <div class="arrow_line" style="left:0px;top:0px; border-bottom-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="right:0px;top:0px; border-bottom-width:0;border-left-width:0"></div>
           <div class="arrow_line" style="left:0px;bottom:0px; border-top-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="right:0px;bottom:0px; border-top-width:0;border-left-width:0"></div>
          </el-dialog>
        </div>
      </div>
</template>

<script scoped>
import {
  ToArray,sortByKey
} from '@/assets/js/ToArray.js'
import {
  createMapL,
  getSearch
} from '@/assets/js/SuperMap/czwyhmap.js'
import {
  format
} from '@/assets/js/date.js'
let czwvm;
export default {
  inject: ['reload'],
  data() {
    return {
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
      // CurrentPage1: 1,
      // pageSize1: 3,
      // TotalResult1: 0,
      // CurrentPage2: 1,
      // pageSize2: 3,
      // TotalResult2: 0,
      // CurrentPage3: 1,
      // pageSize3: 3,
      // TotalResult3: 0,
      pd: {},
      pm: {},
      swdw: [],
      tableData: [],
      tableqz: [],
      tablecrj: [],
      tablelz: [],
      show: true,
      bzhshow: false,
      lgshow: false,
      pcs: [],
      xzqh: [],
      pcs: [],
      loading: false,
      listpcs: [],
      list: [],
      diatext: '标准化地址',
      yf: 'Y',
      zrq: [],
      bzhDialogVisible: false,
      tshow1: true,
      tshow2: false,
      bzhid: '',
      mc: '',
      rybh: '',
      ssfj: [],
      centers: [],
      sspcs: [],
      ccshow:false,
      count:0,


    }
  },

  mounted() {
    window.czwvm = this;


    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getRjsy');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getQzzl');
    this.getSsfj();
    this.getPcs();
    this.getZrq();
    createMapL();

  },
  methods: {
    pageSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.getRyxx(this.CurrentPage, val, this.bzhid, this.mc);

    },
    handleCurrentChange(val) {
      this.CurrentPage = val;
      this.getRyxx(this.CurrentPage, this.pageSize, this.bzhid, this.mc);
      console.log(`当前页: ${val}`);
    },
    // pageSizeChange1(val) {
    //   this.getRYinfo(this.CurrentPage1, val, this.rybh, 1);
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange1(val) {
    //   this.getRYinfo(val, this.pageSize1, this.rybh, 1);
    //   console.log(`当前页: ${val}`);
    // },
    // pageSizeChange2(val) {
    //   this.getRYinfo(this.CurrentPage2, val, this.rybh, 2);
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange2(val) {
    //   this.getRYinfo(val, this.pageSize2, this.rybh, 2);
    //   console.log(`当前页: ${val}`);
    // },
    // pageSizeChange3(val) {
    //   this.getRYinfo(this.CurrentPage3, val, this.rybh, 3);
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange3(val) {
    //   this.getRYinfo(val, this.pageSize3, this.rybh, 3);
    //   console.log(`当前页: ${val}`);
    // },
    details(n) {
      this.tableqz = [];
      this.tablecrj = [];
      this.tablelz = [];
      this.diatext = n.ywxm;
      if (n.zwxm != undefined && n.zwxm != "") {
        this.diatext = this.diatext + "(" + n.zwxm + ")"
      }
      this.tshow1 = false;
      this.tshow2 = true;
      this.rybh = n.rybh;
      console.log(n.rybh);
      this.getRYinfo(this.CurrentPage1, this.pageSize1, n.rybh, 1);
      this.getRYinfo(this.CurrentPage2, this.pageSize2, n.rybh, 2);
      this.getRYinfo(this.CurrentPage3, this.pageSize3, n.rybh, 3);
    },
    back() {
      this.diatext = this.mc;
      this.tshow1 = true;
      this.tshow2 = false;
    },
    //风琴效果
    // toogleExpad(row){
    //   console.log(row);
    //   let $table=this.$refs.table;
    //   this.tableData.map((item)=>{
    //     $table.toggleRowExpansion(item,false)
    //   })
    //   $table.toggleRowExpansion(row);
    // },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.xzqh = this.list.filter(item => {
            return item.mc.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.xzqh = [];
      }
    },
    // remoteMethodpcs(query) {
    //   if (query !== '') {
    //     this.loading = true;
    //     setTimeout(() => {
    //       this.loading = false;
    //       this.pcs = this.listpcs.filter(item => {
    //         return item.mc.toLowerCase()
    //           .indexOf(query.toLowerCase()) > -1;
    //       });
    //     }, 200);
    //   } else {
    //     this.pcs = [];
    //   }
    // },
    changtab() {
      this.show = !this.show;
    },
    changeTSY(t) {
      if (t == "1") {
        this.lgshow = true;
        this.bzhshow = false;
      } else if (t == "2") {
        this.lgshow = false;
        this.bzhshow = true;
      } else {
        this.lgshow = false;
        this.bzhshow = false;
      }
    },
    getSsfj() {
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname
      };
      var url = this.Global.aport2 + "/data_report/selectSsfjDm";
      this.$api.post(url, p,
        r => {
          this.ssfj = sortByKey(r.data.SSFJ,'dm');
        })
    },
    getPcs() {
      var url = this.Global.aport1 + this.Global.pcs;
      this.$api.get(url, null,
        r => {
          this.listpcs = ToArray(r.data);
        })
    },
    getSSPCS(arr) {
      this.$set(this.pd, "sspcs", '');
      var srr = [];
      srr.push(arr);
      console.log(srr);
      let p = {
        "fjdmList": srr
      }
      this.$api.post(this.Global.aport2 + '/data_report/selectPcsDm', p,
        r => {
          if (r.success) {
            this.sspcs = r.data.PCS;
          }
        })
    },
    getXzqh() {
      var url = this.Global.aport1 + this.Global.xzqh;
      this.$api.get(url, null,
        r => {
          this.list = ToArray(r.data);
        })
    },
    getZrq() {
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname
      };
      var url = this.Global.aport2 + "/data_report/selectZrqDm";
      this.$api.post(url, p,
        r => {
          this.zrq =sortByKey(r.data.ZRQ,'dm');
        })
    },
    doset() {
      this.reload();
      // this.$set(this.pd,"xzqh",[]);
      // this.$set(this.pd, "ssfj", []);
      // this.$set(this.pd, "sspcs", []);
      // this.$set(this.pd, "zrq", []);
      // this.$set(this.pd, "beginTime", '');
      // this.$set(this.pd, "endTime", '');
    },
    //得到标准化地址
    getBZHDZ(callback) {
      var searchResult = [];
      let p = {
        "ssfj": this.pd.ssfj.substr(0, 6),
        "pcs": this.pd.sspcs.substr(0, 12),
        "zrq": this.pd.zrq,
        "rzsjStart": this.pd.beginTime,
        "rzsjEnd": this.pd.endTime,
        "postType":'czw',
      };
      var url = this.Global.aport + "/zxdt/getLSZSDJXXBZHDZList";
      this.$api.post(url, p,
        r => {
          if (r.success) {
            var arr = r.data;
            for (var i = 0; i < arr.length; i++) {
              if(arr[i].SumList==undefined)
              {
                searchResult.push(arr[i]);
              }else {
                this.count=arr[i].SumList;
                this.ccshow=true;
              }
            }
            if (searchResult.length == 0) {
              this.ccshow=false;
              this.$message.error("没有查询到数据信息! ");
              return;
            }
            callback && callback(searchResult)
          }
        });
      // callback(searchResult);
    },
    getRyxx(currentPage, showCount, bzhid, mc,n) {
      if (currentPage == 1) {
        this.CurrentPage = 1;
        this.tableData = [];
        this.TotalResult = 0;
        this.bzhid = bzhid;
        this.mc = mc;
      }
      if(n!=1){
        this.pm={};
      }
      this.diatext = this.mc;
      // this.tshow1 = true;
      // this.tshow2 = false;
      let p = {
        "zjzl": this.pm.zjzl,
        "qzzl": this.pm.qzzl,
        "gjdq": this.pm.gjdq,
        "jlsy": this.pm.tlsy,
        "ywxm": this.pm.ywxm,
        "xb": this.pm.xb,
        "csrqStart": this.pm.begincsrq,
        "csrqEnd": this.pm.endcsrq,
        "currentPage": currentPage,
        "showCount": showCount,
        "bzhdzMc": this.bzhid,
        "ssfj": this.pd.ssfj.substr(0, 6),
        "pcs": this.pd.sspcs.substr(0, 12),
        "zrq": this.pd.zrq,
        "rzsjStart": this.pd.beginTime,
        "rzsjEnd": this.pd.endTime,
        "postType":'czw',
      };
      var url = this.Global.aport + "/zxdt/getLSZSDJXXRYList";
      this.$api.post(url, p,
        r => {
          if (r.success) {
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
          }
        });
      this.bzhDialogVisible = true;
    },
    // getRYinfo(currentPage, showCount, rybh, n) {
    //   if (currentPage == 1) {
    //     this.CurrentPage1 = 1;
    //     this.CurrentPage2 = 1;
    //     this.CurrentPage3 = 1;
    //   }
    //   let p = {
    //     "currentPage": currentPage,
    //     "showCount": showCount,
    //     "rybh": rybh,
    //     "type": n,
    //   };
    //   var url = this.Global.aport + "/ywlz/getLZUserInforList";
    //   this.$api.post(url, p,
    //     r => {
    //       if (r.success) {
    //         if (n == 1) {
    //           this.tableqz = r.data.resultList;
    //           this.TotalResult1 = r.data.totalResult;
    //         } else if (n == 2) {
    //           this.tablecrj = r.data.resultList;
    //           this.TotalResult2 = r.data.totalResult;
    //         } else if (n == 3) {
    //           this.tablelz = r.data.resultList;
    //           this.TotalResult3 = r.data.totalResult;
    //         }
    //       }
    //     });
    // },
    doSearch() {
      // 以下为查询ES，由于es_lz_lzxx被删除，暂时注释掉。
      // 数据模拟
      if (this.pd.ssfj == undefined || this.pd.ssfj == "") {
        this.$message.error("请选择所属分局!");
        return;
      } else {
        var ssj = this.pd.ssfj.substr(0, 6);
        switch (ssj) {
          case '320116': //六合区
            this.centers = [32.39215480155289, 118.81641980133281];
            break;
          case '320112': //江北新区
            this.centers = [32.03613281, 118.78211975];
            break;
          case '320113': //栖霞区
            this.centers = [32.137307901838255, 118.9995913711449];
            break;
          case '320102': //玄武区
            this.centers = [32.062475576087024, 118.8436456413333];
            break;
          case '320106': //鼓楼区
            this.centers = [32.08265178165445, 118.75812113098544];
            break;
          case '320111': //浦口区
            this.centers = [31.943626916199264, 118.35524238617728];
            break;
          case '320104': //秦淮区
            this.centers = [32.01143013679143, 118.81736758064937];
            break;
          case '320105': //建邺区
            this.centers = [32.0275950355325, 118.70538415685343];
            break;
          case '320114': //雨花台区
            this.centers = [31.94205101079558, 118.69497417187063];
            break;
          case '320115': //江宁区
            this.centers = [31.865733721334237, 118.79198266097109];
            break;
          case '320124 ': //溧水区
            this.centers = [31.726803147547287, 119.1224894259463];
            break;
          case '320125 ': //高淳区
            this.centers = [31.3703836314495, 119.19202124153713];
            break;
          default:

        }
      }

      if (this.pd.beginTime == undefined && this.pd.endTime == undefined) {
        this.$message.error("请选择入住开始时间或结束时间");
        return;
      } else {
        var date = parseInt(format(new Date(), 'yyyyMMdd') + '');
        var bb = 0;
        var ee = 0;
        if (this.pd.beginTime != undefined) {
          bb = parseInt(this.pd.beginTime.replace('/', '').replace('/', ''));
          if (bb > date) {
            this.$message.error("入住开始时间不能大于当前时间！");
            return;
          }
        }
        if (this.pd.endTime != undefined) {
          ee = parseInt(this.pd.endTime.replace('/', '').replace('/', ''));
          if (ee > date) {
            this.$message.error("入住结束时间不能大于当前时间！");
            return;
          }
        }
        if(this.pd.beginTime != undefined && this.pd.endTime != undefined){
            bb = parseInt(this.pd.beginTime.replace('/', '').replace('/', ''));
            ee = parseInt(this.pd.endTime.replace('/', '').replace('/', ''));
          if (bb > ee) {
            this.$message.error("开始时间不能大于当前时间！");
            return;
          }
        }

      }

      getSearch(this.centers);


    },
    //后期匹配地址
    getXY(data, callback) {
      var url = this.Global.xyaddress + "?dz=" + data;
      let p = {
        "url": url,
      };
      this.$api.post(this.Global.aport + "/zxdt/getCtUrl", p,
        r => {
          callback && callback(r.data.result)
        });
    },
    gotos(zjhms,gjdq){
     let routeData=this.$router.resolve({path:'/Home/RYHX_NX',query:{zjhm:zjhms,gjdq:gjdq}});
     window.open(routeData.href,'_blank')
    },



  },

}
</script>

<style scoped>
.yy-input-text {
  text-align: left !important;
  width: 30% !important;
}

.yy-input-input {
  width: 65% !important;
}

.rrtitle {
  font-size: 16px;
  color: #a9d6fd;
  line-height: 40px;
}

.input-text {
  color: #89BAE4;
}
</style>
<style>
.lzxx .my-div-icon {

  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
}
.lzxx .jwgg {
  background: url(../../../../assets/img/tb/location_green.png) no-repeat;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}
.bghome .el-dialog {
  width: 70% !important;
}

.bghome .el-input--small .el-input__inner {
  background: #0E4477;
  color: #89BAE4;
  border: 1px solid #012553;
}

.bghome .el-button--primary {
  background-color: #0e4477 !important;
  border: 1px solid ##19AFFB !important;
}

.bghome .el-dialog {
  width: 70% !important;
}
</style>
