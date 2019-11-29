<template lang="html">
    <!-- 持长期签证非法就业预警(留学生非法预警) -->
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
                  <el-col  :span="24">
                     <span class="input-text" style="width:25%!important;">距离设置：</span>
                     <el-input-number v-model="jlsz" controls-position="right" size="mini" :min="5" :max="10"></el-input-number>
                     <span style="font-size:12px;">公里</span>
                  </el-col>
                  <el-col :span="24">
                    <span style="font-size:12px; color:red">* 距离设置区间5-10</span>
                  </el-col>
                </el-row>
                <div class="resultpaneltitle">南京高校列表</div>
                <div  style="max-height:500px;  overflow-y: scroll;">
                <div id="resultpanel" v-for="item in datastr">
                    <div class="fflist" @click="getInfo(item.jgid,item.mc)">
                      {{item.mc}}
                     </div>
                </div>
              </div>
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
  ToArray
} from '@/assets/js/ToArray.js'
import {
  createMapL,
  createDWMap
} from '@/assets/js/SuperMap/ffjymap.js'
let ffvm;
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
      pd: {},
      swdw: [],
      show: true,
      bzhshow: false,
      lgshow: false,
      jlsz: 10,
      pcs: [],
      xzqh: [],
      tableData: [],
      datastr: [],
      bzhDialogVisible: false,
      diatext: '标准化地址',
      bzhid: '',
      mc: '',
      lrdw: '',
      iid: '',
      xydata: [],
      cuint: 0,
    }
  },
  mounted() {
    window.ffvm = this;
    createMapL();
    this.getGX();
  },
  methods: {
    pageSizeChange(val) {
      this.getRyxx(this.CurrentPage, val, this.bzhid, this.mc, this.lrdw);
    },
    handleCurrentChange(val) {
      this.getRyxx(val, this.pageSize, this.bzhid, this.mc, this.lrdw);
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
    getPcs() {
      var url = this.Global.aport1 + this.Global.pcs;
      this.$api.get(url, null,
        r => {
          this.pcs = ToArray(r.data);
        })
    },
    getXzqh() {
      var url = this.Global.aport1 + this.Global.xzqh;
      this.$api.get(url, null,
        r => {
          this.xzqh = ToArray(r.data);
        })
    },
    doset() {
      this.$set(this.pd, "dwlb", '');

    },
    getGX() {


      this.$api.get(this.Global.aport1 + '/servicemap/getUniversity', null,
        r => {
          // console.log(r.data);
          this.datastr = r.data;
        });
    },
    getInfo(dm, mc) {

      if (this.jlsz == undefined) {
        this.$message.error("距离设置不能为空！");
        return;
      }
      this.show = !this.show;
      this.iid = mc;
      createDWMap(dm, mc);
    },
    //得到学校信息
    getxxinfo(dm, callback) {
      let p = {
        "xxbh": dm,
      };
      var url = this.Global.aport + "/zxdt/getXXDZList";
      this.$api.post(url, p,
        r => {
          if (r.success) {
            callback && callback(r.data);
          }
        })

    },
    //后期匹配地址
    getXY1(data,callback) {

      let _this=this;
      let nextfun=function(dz){
        return new Promise(function(resolve,reject){
          var url = _this.Global.xyaddress + "?dz=" + dz;
          let p = {
            "url": url,
          };
          _this.$api.post(_this.Global.aport + "/zxdt/getCtUrl", p,
            r => {
               var arr=[];
               arr.push(r.data.result.ycoord);
               arr.push(r.data.result.xcoord);
               var obj={};
               obj.dm=dz;
               obj.zb=arr;
               resolve(obj);
            });
        });
      }

var srr=[];
for (var i = 0; i < data.length; i++) {
  srr.push(nextfun(data[i].DZXQ))
  // console.log(nextfun(data[i].DZXQ));
}

    callback && callback(srr);

    },
    //得到学校详细地址
    getXXDZ(dm, callback) {
      var searchResult = [];
      let p = {
        "xxdm": dm,
        "xxmc": this.iid,
        "sf":"61",
        "postType":"ffjy"
      };
      this.$api.post(this.Global.aport + '/ywczdt/getFfjlBzhdz', p,
        r => {
          callback && callback(r.data);
        });
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
    //人员信息
    getRyxx(currentPage, showCount, bzhid, mc) {

      if (currentPage == 1) {
        this.tableData = [];
        this.TotalResult = 0;
        this.CurrentPage = 1;
      }
      this.bzhid = bzhid;
      this.mc = mc;

      this.diatext = this.mc;

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "xxdz": this.bzhid,
        "fwcs": this.iid,
        "sf":"61",
        "postType":"ffjy"
      };
      var url = this.Global.aport + "/ywczdt/getCZDJXXRYList";
      this.$api.post(url, p,
        r => {
          if (r.success) {

            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
          }
        });
      this.bzhDialogVisible = true;
    },

    getXY2(data, callback) {
      var url = this.Global.xyaddress + "?dz=" + data.dm;
      let p = {
        "url": url,
      };
      this.$api.post(this.Global.aport + "/zxdt/getCtUrl", p,
        r => {
          callback && callback(r.data.result, data.dm, data.count)
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
  width: 25% !important;
}

.yy-input-input {
  width: 70% !important;
}

.resultpaneltitle {
  color: #fff;
  background-color: #3992d0;
  text-align: center;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
}

#resultpanel {
  line-height: 25px;
  font-size: 12px;
}

.fflist {
  color: #333333;
  cursor: pointer;
}

.fflist:hover {
  color: #0E93DA
}

.arrow_line {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid #06B4FB;
}
</style>
<style>
.lzxx .my-div-icon {
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
}

.lzxx .cqgreen {
  background: url(../../../../assets/img/tb/location_green.png) no-repeat;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}

.lzxx .cqred {
  background: url(../../../../assets/img/tb/location_red.png) no-repeat;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}

.bghome .el-dialog {
  width: 70% !important;
}
</style>
