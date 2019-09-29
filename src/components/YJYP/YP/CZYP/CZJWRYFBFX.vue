<template lang="html">
    <!-- 常住境外人员分布分析  -->
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
                <el-row :gutter="2">
                  <el-col :span="12">
                      <span class="yy-input-text">
                        <!-- <font color="red">*</font>  -->
                        所属分局：</span>
                      <el-select v-model="pd.ssfj" filterable clearable default-first-option @change="getSSPCS(pd.ssfj)" placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in ssfj"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                   </el-col>
                   <el-col :span="12">
                       <span class="yy-input-text">所属派出所：</span>
                       <el-select v-model="pd.sspcs" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                         <el-option
                           v-for="(item,ind) in sspcs"
                           :key="ind"
                           :label="item.mc"
                           :value="item.dm">
                         </el-option>
                       </el-select>
                    </el-col>

                 <el-col :span="12">
                     <span class="yy-input-text">性别：</span>
                     <el-select v-model="pd.xb" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                       <el-option
                         v-for="(item,ind1) in $store.state.xb"
                         :key="ind1"
                         :label="item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                 </el-col>
                 <el-col :span="12">
                     <span class="yy-input-text">服务处所：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="pd.fwcs" class="yy-input-input"></el-input>
                 </el-col>

               <el-col :span="12">
                   <span class="yy-input-text">证件种类：</span>
                   <el-select v-model="pd.zjzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                     <el-option
                       v-for="(item,ind) in $store.state.zjzl"
                       :key="ind"
                       :label="item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
               </el-col>
               <el-col :span="12">
                   <span class="yy-input-text">居住状态类型：</span>
                   <el-select v-model="pd.jzztlx" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                     <el-option
                       v-for="(item,indj) in $store.state.jzztlx"
                       :key="indj"
                       :label="item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
               </el-col>

                    <el-col :span="12">
                        <span class="yy-input-text">国家地区：</span>
                        <el-select v-model="pd.gjdqArray" multiple   filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind1) in $store.state.gjdq"
                            :key="ind1"
                            :label="item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12">
                        <span class="yy-input-text">身份：</span>
                        <el-select v-model="pd.sfArray" multiple     filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind) in $store.state.sf"
                            :key="ind"
                            :label="item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                    <!-- <el-col :span="12">
                        <span class="yy-input-text">停留有效期：</span>
                        <el-select v-model="pd.tlyxq"  filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind1) in $store.state.tlyxq"
                            :key="ind1"
                            :label="item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col> -->
                    <!-- <el-col :span="12">
                        <span class="yy-input-text">入住方式：</span>
                        <el-select v-model="pd.rzfs" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option label="自租房" value="1">
                          </el-option>
                          <el-option label="自购房" value="2">
                          </el-option>
                          <el-option label="自建房" value="3">
                          </el-option>
                          <el-option label="单位租房" value="4">
                          </el-option>
                          <el-option label="单位购房" value="5">
                          </el-option>
                          <el-option label="单位建房" value="6">
                          </el-option>
                          <el-option label="其他" value="7">
                          </el-option>
                        </el-select>
                    </el-col> -->

                  <!-- <el-col :span="12">
                      <span class="yy-input-text">签证种类：</span>
                      <el-select v-model="pd.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.qzzl"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col> -->
                  <!-- <el-col :span="12">
                      <span class="yy-input-text">住房类型：</span>
                      <el-select v-model="pd.zflx" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option value="1" label="住宅小区">
                        </el-option>
                        <el-option value="2" label="商住楼">
                        </el-option>
                        <el-option value="3" label="单位内部">
                        </el-option>
                        <el-option value="4" label="星级宾馆">
                        </el-option>
                        <el-option value="5" label="中小旅社">
                        </el-option>
                        <el-option value="6" label="居民小区">
                        </el-option>
                        <el-option value="7" label="其他">
                        </el-option>
                      </el-select>
                  </el-col> -->
                  <el-col :span="12">
                      <span class="yy-input-text">居留事由：</span>
                      <el-select v-model="pd.jlsyArray" multiple    filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.rjsy"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>

                   </el-row>

                 <el-row :gutter="1" style="border:1px solid #cccccc;margin-top:10px;margin-right:10px; padding-top: 10px;  background: #EFF3F6;">
                   <el-col :span="24" class="input-item">
                     <span class="input-text">出生日期：</span>
                     <div class="input-input t-flex">
                       <el-date-picker
                          v-model="pd.csrqStart" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyy/MM/dd"
                          placeholder="开始时间" >
                       </el-date-picker>
                       <span class="septum">-</span>
                       <el-date-picker
                           v-model="pd.csrqEnd" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy/MM/dd"
                           placeholder="结束时间" >
                       </el-date-picker>
                    </div>
                   </el-col>
                   <el-col :span="24" class="input-item" >
                     <span class="input-text">停留有效期：</span>
                     <div class="input-input t-flex">
                       <el-date-picker
                          v-model="pd.tlyxqStart" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyy/MM/dd"
                          placeholder="开始时间" >
                       </el-date-picker>
                       <span class="septum">-</span>
                       <el-date-picker
                           v-model="pd.tlyxqEnd" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy/MM/dd"
                           placeholder="结束时间" >
                       </el-date-picker>
                    </div>
                   </el-col>
                   <el-col :span="24" class="input-item" >
                     <span class="input-text">市局下发时间：</span>
                     <div class="input-input t-flex">
                       <el-date-picker
                          v-model="pd.sjxfStart" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyy/MM/dd"
                          placeholder="开始时间" >
                       </el-date-picker>
                       <span class="septum">-</span>
                       <el-date-picker
                           v-model="pd.sjxfEnd" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy/MM/dd"
                           placeholder="结束时间" >
                       </el-date-picker>
                    </div>
                   </el-col>
                   <!-- <el-col :span="24" class="input-item">
                     <span class="input-text">分局接收时间：</span>
                     <div class="input-input t-flex">
                       <el-date-picker
                          v-model="pd.beginfjjs" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyyMMdd"
                          placeholder="开始时间" >
                       </el-date-picker>
                       <span class="septum">-</span>
                       <el-date-picker
                           v-model="pd.endfjjs" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyyMMdd"
                           placeholder="结束时间" >
                       </el-date-picker>
                    </div>
                   </el-col>
                  <el-col :span="24" class="input-item">
                    <span class="input-text">数据下发时间段：</span>
                    <div class="input-input t-flex">
                      <el-date-picker
                         v-model="pd.beginsjd" format="yyyy-MM-dd"
                         type="date" size="small" value-format="yyyyMMdd"
                         placeholder="开始时间" >
                      </el-date-picker>
                      <span class="septum">-</span>
                      <el-date-picker
                          v-model="pd.endsjd" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyyMMdd"
                          placeholder="结束时间" >
                      </el-date-picker>
                   </div>
                  </el-col> -->
                </el-row>
                <el-row type="flex">
                  <el-col :span="24" style="text-align:center;">
                    <el-button type="primary" size="mini" @click="getSearch()">确定</el-button>
                    <el-button type="primary" size="mini" @click="doset()">重置</el-button>
                  </el-col>
                </el-row>
             </div>
            </el-collapse-transition>
        </div>

        <div class="bghome">
          <el-dialog :title="diatext" :visible.sync="bzhDialogVisible">
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
                   prop="sf"
                   label="身份">
                 </el-table-column>
                 <el-table-column
                   prop="fwcs"
                   label="服务处所">
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
                   label="性别" width="60">
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
                  <div class="crrcolor">
                    <!-- 每页显示
                    <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    条 -->
                  </div>
                  <div class="crrcolor">
                    <!-- 共{{Math.ceil(TotalResult/pageSize)}}页 -->
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
} from '@/assets/js/SuperMap/jwrymap.js'
let jwczvm;
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
      tableData: [],
      pd: {jzztlx:'1'},
      swdw: [],
      show: true,
      bzhshow: false,
      lgshow: false,
      bzhDialogVisible: false,
      diatext: '标准化地址',
      pcs: [],
      xzqh: [],
      xxmc: [],
      radio: 1,
      ssfj: [],
      sspcs: [],
      centers: [31.910376, 118.525718],
    }
  },

  mounted() {
    window.jwczvm = this;
    this.$store.dispatch('getQzzl');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getRjsy');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getJzztlx');
    this.$store.dispatch('getSf');
    // this.$store.dispatch('getSsdw');
    //this.getGX();
    createMapL(this.centers);
    this.getFJ();

  },
  methods: {
    pageSizeChange(val) {
      this.getRyxx(this.CurrentPage, val, this.bzhid, this.mc);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getRyxx(val, this.pageSize, this.bzhid, this.mc);
      console.log(`当前页: ${val}`);
    },
    getFJ() {
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname
      };
      this.$api.post(this.Global.aport2 + '/data_report/selectSsfjDm', p,
        r => {
          this.ssfj = sortByKey(r.data.SSFJ,'dm');
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
    getGX() {
      this.$api.get(this.Global.aport1 + '/servicemap/getUniversity', null,
        r => {
          console.log(r.data);
          this.xxmc = r.data;
        });
    },

    doset() {
      this.$set(this.pd, "gjdqArray", []);
      this.$set(this.pd, "sfArray", []);
      this.$set(this.pd, "xb", '');
      this.$set(this.pd, "fwcs", '');
      this.$set(this.pd, "zjzl", '');
      this.$set(this.pd, "jlsyArray", []);
      this.$set(this.pd, "jzztlx", '');
      this.$set(this.pd, "ssfj", '');
      this.$set(this.pd, "sspcs", '');
      this.$set(this.pd, "csrqStart", '');
      this.$set(this.pd, "csrqEnd", '');
      this.$set(this.pd, "tlyxqStart", '');
      this.$set(this.pd, "tlyxqEnd", '');
      this.$set(this.pd, "sjxfStart", '');
      this.$set(this.pd, "sjxfEnd", '');
    },
    getSearch() {

      // if (this.pd.ssfj == undefined || this.pd.ssfj == null || this.pd.ssfj == "") {
      //   this.$message.error("请选择所属分局!");
      //   return;
      // } else {
      //   var ssj = this.pd.ssfj.substr(0, 6);
      //   switch (ssj) {
      //     case '320116': //六合区
      //       this.centers = [32.39215480155289, 118.81641980133281];
      //       break;
      //     case '320112': //江北新区
      //       this.centers = [32.03613281, 118.78211975];
      //       break;
      //     case '320113': //栖霞区
      //       this.centers = [32.137307901838255, 118.9995913711449];
      //       break;
      //     case '320102': //玄武区
      //       this.centers = [32.062475576087024, 118.8436456413333];
      //       break;
      //     case '320106': //鼓楼区
      //       this.centers = [32.08265178165445, 118.75812113098544];
      //       break;
      //     case '320111': //浦口区
      //       this.centers = [31.943626916199264, 118.35524238617728];
      //       break;
      //     case '320104': //秦淮区
      //       this.centers = [32.01143013679143, 118.81736758064937];
      //       break;
      //     case '320105': //建邺区
      //       this.centers = [32.0275950355325, 118.70538415685343];
      //       break;
      //     case '320114': //雨花台区
      //       this.centers = [31.94205101079558, 118.69497417187063];
      //       break;
      //     case '320115': //江宁区
      //       this.centers = [31.865733721334237, 118.79198266097109];
      //       break;
      //     case '320124 ': //溧水区
      //       this.centers = [31.726803147547287, 119.1224894259463];
      //       break;
      //     case '320125 ': //高淳区
      //       this.centers = [31.3703836314495, 119.19202124153713];
      //       break;
      //     default:
      //
      //   }
      // }

      getSearch(this.centers);
    },
    //获取派出所
    getPCS(callback) {
      this.show!=this.show;
      var ssdw = "";
      if (this.pd.sspcs != undefined && this.pd.sspcs != "") {
        ssdw = this.pd.sspcs.substr(0, 12);
      } else {
        if (this.pd.ssfj == undefined || this.pd.ssfj == null || this.pd.ssfj == ""){}else {
          ssdw = this.pd.ssfj.substr(0, 6);
        }

      }
      console.log(ssdw);
      var searchResult = [];
      let p = {
        "gjdqArray": this.pd.gjdqArray,
        "xb": this.pd.xb,
        "sfArray": this.pd.sfArray,
        "fwcs": this.pd.fwcs,
        "zjzl": this.pd.zjzl,
        "jlsyArray": this.pd.jlsyArray,
        "jzztlx": this.pd.jzztlx,
        "ssfj": ssdw,
        "csrqStart": this.pd.csrqStart,
        "csrqEnd": this.pd.csrqEnd,
        "tlyxqStart": this.pd.tlyxqStart,
        "tlyxqEnd": this.pd.tlyxqEnd,
        "sjxfStart": this.pd.sjxfStart,
        "sjxfEnd": this.pd.sjxfEnd,
      };
      var url = this.Global.aport + "/ywczdt/getCZDJXXPCSList";
      this.$api.post(url, p,
        r => {
          if (r.success) {
            var arr = r.data;
            for (var i = 0; i < arr.length; i++) {
              searchResult.push(arr[i]);
            }
            if(searchResult.length==0){
              this.$message.error("没有查询到数据信息! ");return ;
            }
            callback && callback(searchResult)
          }
        });

      callback(searchResult);
    },
    //得到标准化地址
    getBZHDZ(n, callback) {
      var ssdw = "";
      if (this.pd.sspcs != undefined && this.pd.sspcs != "") {
        ssdw = this.pd.sspcs.substr(0, 12);
      } else {
        ssdw = this.pd.ssfj.substr(0, 6);
      }
      var searchResult = [];
      let p = {
        "gjdqArray": this.pd.gjdqArray,
        "xb": this.pd.xb,
        "sfArray": this.pd.sfArray,
        "fwcs": this.pd.fwcs,
        "zjzl": this.pd.zjzl,
        "jlsyArray": this.pd.jlsyArray,
        "jzztlx": this.pd.jzztlx,
        "ssfj": ssdw,
        "csrqStart": this.pd.csrqStart,
        "csrqEnd": this.pd.csrqEnd,
        "tlyxqStart": this.pd.tlyxqStart,
        "tlyxqEnd": this.pd.tlyxqEnd,
        "sjxfStart": this.pd.sjxfStart,
        "sjxfEnd": this.pd.sjxfEnd,
        'ywpcsdm': n
      };
      var url = this.Global.aport + "/ywczdt/getCZDJXXBZHDZList";
      this.$api.post(url, p,
        r => {
          if (r.success) {
            var arr = r.data;
            for (var i = 0; i < arr.length; i++) {
              searchResult.push(arr[i]);
            }

            callback && callback(searchResult)
          }
        });

      callback(searchResult);
    },
    //人员信息
    getRyxx(currentPage, showCount, bzhid, mc, ) {

      var ssdw = "";
      if (this.pd.sspcs != undefined && this.pd.sspcs != "") {
        ssdw = this.pd.sspcs.substr(0, 12);
      } else {
        ssdw = this.pd.ssfj.substr(0, 6);
      }
      if (currentPage == 1) {
        this.tableData=[];this.TotalResult=0;
        this.CurrentPage = 1;
      }
      this.bzhid = bzhid;
      this.mc = mc;
      this.diatext = this.mc;

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "xxdz": this.bzhid,
        "gjdqArray": this.pd.gjdqArray,
        "xb": this.pd.xb,
        "sfArray": this.pd.sfArray,
        "fwcs": this.pd.fwcs,
        "zjzl": this.pd.zjzl,
        "jlsyArray": this.pd.jlsyArray,
        "jzztlx": this.pd.jzztlx,
        "ssfj": ssdw,
        "csrqStart": this.pd.csrqStart,
        "csrqEnd": this.pd.csrqEnd,
        "tlyxqStart": this.pd.tlyxqStart,
        "tlyxqEnd": this.pd.tlyxqEnd,
        "sjxfStart": this.pd.sjxfStart,
        "sjxfEnd": this.pd.sjxfEnd,
      };
      var url = this.Global.aport + "/ywczdt/getCZDJXXRYList";
      this.$api.post(url, p,
        r => {
          if (r.success) {
            console.log(r.data);
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
          }
        });
      this.bzhDialogVisible = true;
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
  width: 35% !important;
  padding-left: 10px;
}

.arrow_line {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid #06B4FB;
}

.yy-input-input {
  width: 55% !important;
}

.fxleft {
  width: 600px !important;
}
</style>
<style>
.lzxx .green {
  background: url(../../../../assets/img/tb/location_green.png) no-repeat;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}

.lzxx .blue {
  background: url(../../../../assets/img/tb/location_blue.png) no-repeat;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}

.bghome .el-dialog {
  width: 70% !important;
}
</style>
