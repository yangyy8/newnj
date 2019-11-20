<template lang="html">
    <!-- 留学生散居社会面分析 -->
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
                <span style="font-size:12px; color:red">  注：服务处所、所属分局条件二选一</span>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text"><font color=red>*</font> 服务处所：</span>
                       <el-input placeholder="请输入内容" size="small" v-model="pd.fwcs" class="yy-input-input"></el-input>
                  </el-col>
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
                        <el-select v-model="pd.sspcs" filterable clearable default-first-option placeholder="请输入关键字"  size="small" class="yy-input-input" :no-data-text="pd.ssfj==''||pd.ssfj==undefined?'请先选择所属分局':'无数据'">
                       <el-option
                         v-for="(item,ind1) in sspcs"
                         :key="ind1"
                         :label="item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                  </el-col>

                  <el-col :span="24">
                      <span class="yy-input-text">国家地区：</span>
                      <el-select v-model="pd.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in $store.state.gjdq"
                          :key="ind1"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <!-- <el-col :span="24">
                      <span class="yy-input-text">入住方式：</span>
                      <el-select v-model="pd.rzfs" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,indrz) in $store.state.rzfs"
                          :key="indrz"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col> -->

                  <el-col :span="24">
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
                  <el-col :span="24">
                      <span class="yy-input-text">签证种类：</span>
                      <el-select v-model="pd.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.rjqzzl"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">住房类型：</span>
                      <el-select v-model="pd.zflx" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,indx) in $store.state.zflx"
                          :key="indx"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <!-- <el-col :span="24">
                      <span class="yy-input-text">居留事由：</span>
                      <el-select v-model="pd.rjsy" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in $store.state.rjsy"
                          :key="ind1"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col> -->
                  <el-col :span="24">
                      <span class="yy-input-text">居住状态类型：</span>
                      <el-select v-model="pd.jzztlx" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,indx) in $store.state.jzztlx"
                          :key="indx"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
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
                      <img :src="scope.row.zp" style="max-width:200px; max-height:250px;"/>
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
import {createMapL,getSearch} from '@/assets/js/SuperMap/lxssmmap.js'
let lxsvm;
export default {
  inject:['reload'],
  data(){
    return{
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
       pd:{},
       swdw:[],
       show: true,
       bzhDialogVisible:false,
       form:{},
       xxmc:[],
       ssfj:[],
       tableData:[],
       diatext:'标准化地址',
       bzhid:[],
       sspcs:[],
       mc:'',
       lrdw:'',
       num:0,
       result:[],
       centers:[],
       ssfjsub:'',
       ccshow:false,
       count:0,

    }
  },
  mounted() {
    window.lxsvm=this;
    this.$store.dispatch('getRjqzzl');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getGjdq');
    // this.$store.dispatch('getRzfs');
    this.$store.dispatch('getZflx');
    this.$store.dispatch('getJzztlx');
    //this.getGX();
    this.getSsfj();
    this.$nextTick(()=>{
        createMapL();
    })
  },
  methods:{
    pageSizeChange(val) {
        this.getRyxx(this.CurrentPage,val,this.bzhid,this.mc);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {

        this.getRyxx(val,this.pageSize,this.bzhid,this.mc);
      console.log(`当前页: ${val}`);
    },
    changtab(){
      this.show=!this.show;
    },
    doset1(){
        this.reload();
    },
    doset(){

       this.$set(this.pd,"gjdq",'');
        this.$set(this.pd,"fwcs",'');
        this.$set(this.pd,"zjzl",'');
        this.$set(this.pd,"qzzl",'');
        this.$set(this.pd,"zflx",'');
        this.$set(this.pd,"sspcs",'');
        this.$set(this.pd,"jzztlx",'');
        this.$set(this.pd,"ssfj",'');
        this.ccshow=false;
    },
    getGX(){
      this.$api.get(this.Global.aport1+'/servicemap/getUniversity',null,
         r=>{

          this.xxmc=r.data;
         });
    },
    getSsfj(){
       let p={
         "operatorId":this.$store.state.uid,
         "operatorNm":this.$store.state.uname
       };
      var url=this.Global.aport2+"/data_report/selectSsfjDm";
      this.$api.post(url,p,
      r=>{
        this.ssfj=sortByKey(r.data.SSFJ,'dm');
      })
    },
    getSSPCS(arr) {
      this.$set(this.pd, "sspcs", '');
      var srr = [];
      srr.push(arr);

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
    doSearch() {

      this.ssfjsub='';
      if ((this.pd.ssfj == undefined || this.pd.ssfj == "") && (this.pd.fwcs==undefined || this.pd.fwcs.trim()=="")) {
          this.$message.error("请选择所属分局或者服务处所! ");
        return;
      } else {
        if(this.pd.ssfj != undefined && this.pd.ssfj != ""){
        var ssj = this.pd.ssfj.substr(0, 6);
        this.ssfjsub=ssj;
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
      }
      // this.show=false;
      getSearch(this.centers);
  	},
    //获取派出所   不用
    getPCS(callback){
      var searchResult = [];
        let p={
          "gjdq":this.pd.gjdq,
          "rzfs":this.pd.rzfs,
          "zjzl":this.pd.zjzl,
          "ssfj":this.ssfjsub,
          "fwcs":this.pd.fwcs,
          "jzzt":this.pd.jzztlx,
          "pcs":this.sspcs,
          "postType":'sjshm'
        };
        var url=this.Global.aport+"/ywczdt/getCZDJXXPCSList";
        this.$api.post(url, p,
          r => {
            if (r.success) {
              var arr=r.data;
              for (var i = 0; i < arr.length; i++) {
                searchResult.push(arr[i]);
              }

              callback && callback(searchResult)
            }
          });

          callback(searchResult);
    },
    //地址
    getBZHDZ(callback){

      if(this.pd.sspcs!="" && this.pd.sspcs!=undefined){
        this.ssfjsub=this.pd.sspcs;
      }else {
        if(this.pd.ssfj!=undefined && this.pd.ssfj!=""){
        this.ssfjsub=this.pd.ssfj.substr(0,6);
      }
      }
      console.log(this.ssfjsub);
      var searchResult = [];
        let p={
          "gjdq":this.pd.gjdq,
          "fwcs":this.pd.fwcs,
          "zjzl":this.pd.zjzl,
          "qzzl":this.pd.qzzl,
          "zflx":this.pd.zflx,
          "jzztlx":this.pd.jzztlx,
          "ssfj":this.ssfjsub,
          "postType":'sjshm'
        };
        var url=this.Global.aport+"/ywlz/getLxsSjshmByBzhdzList";
        this.$api.post(url, p,
          r => {
            if (r.success) {
              var arr=r.data;
              for (var i = 0; i < arr.length; i++) {

                  if(arr[i].SumList==undefined)
                  {
                    searchResult.push(arr[i]);
                  }else {
                    this.count=arr[i].SumList;
                    this.ccshow=true;
                  }
              }
              if(searchResult.length==0){
                this.ccshow=false;
                this.$message.error("没有查询到数据信息! ");return ;
              }
              callback && callback(searchResult,this.ssfjsub)
            }
          });

          callback(searchResult,this.ssfjsub)
    },
    //人员信息
    getRyxx(currentPage,showCount,dtids,mc)
    {

      this.mc=mc;
      this.diatext=this.mc;
      this.bzhid=dtids;

      var chunk=5;
      if(currentPage==1){
        this.tableData=[];
        this.TotalResult=0;
        this.CurrentPage=1;
      var ttbal=dtids;
      var rr=[];
            console.log(ttbal.length);
      for (var i = 0,j = ttbal.length;i<j;i+=chunk) {
         rr.push(ttbal.slice(i,i+chunk));
      }
       this.result=rr;
     }
       this.num=currentPage-1;

       this.TotalResult=dtids.length;
      for (var k = this.num; k < this.num+1; k++) {
       // console.log(JSON.stringify(this.result[k]));
       let p={
         "DTIDS":JSON.stringify(this.result[k]),
       };
       var url=this.Global.aport+"/ywlz/getLxsSjshmInforPageList";
       this.$api.post(url, p,
         r => {
           if (r.success) {

             this.tableData=r.data;

           }
         });
       }

       this.bzhDialogVisible=true;
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
.yy-input-text{text-align: left!important;}
</style>
<style>
.lzxx  .my-div-icon {

        border-radius: 50%;
        line-height:20px;
        text-align: center;
        vertical-align: middle;
    }

.lzxx    .lzg {
  background:url(../../../../assets/img/tb/location_green.png) no-repeat;font-size:12px; font-weight: bold;color: #ffffff;
  }

/* .lzxx		.cz {
		background:url(../../../../assets/img/tb/location_blue.png) no-repeat;font-size:12px; font-weight: bold;color: #ffffff;
		} */
.bghome .el-dialog{ width: 70%!important;}
</style>
