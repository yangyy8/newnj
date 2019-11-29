<template lang="html">
    <!-- 重点区域监控分析  -->
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
                      <span class="yy-input-text">类别：</span>
                      <el-radio value="1" label="1" v-model="radioe" @change="getBX(1)">常住</el-radio>
                      <el-radio value="2" label="2" v-model="radioe" @change="getBX(2)">临住</el-radio>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text"><font color=red v-if='sjshow'>*</font> 时间范围：</span>
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
                  <el-col :span="24">
                      <span class="yy-input-text">国家地区：</span>
                      <el-select v-model="pd.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in $store.state.gjdq"
                          :key="ind1"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>

                  <el-col :span="24">
                      <span class="yy-input-text">签证种类：</span>
                      <el-select v-model="pd.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.qzzl"
                          :key="ind"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>

                </el-row>
                <el-row type="flex">
                  <el-col :span="24" style="text-align:center;">
                    <el-button type="primary" size="mini" @click="getSearch('leaflet-draw-draw-polygon')">多边形</el-button>
                    <el-button type="primary" size="mini" @click="getSearch('leaflet-draw-draw-rectangle')">矩形</el-button>
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
                        <img :src="scope.row.zp"  style="max-width:700px; max-height:700px;"/>
                        <img slot="reference" :src="scope.row.zp" :alt="scope.row.zp"  width="50" height="50">
                      </el-popover>
                     </div>
                   </template>
                 </el-table-column>
                 <el-table-column
                   prop="sf"
                   label="身份" v-if="czshow">
                 </el-table-column>
                 <el-table-column
                   prop="fwcs"
                   label="服务处所"  v-if="czshow">
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
import {ToArray} from '@/assets/js/ToArray.js'
import {createMapL,doSearch} from '@/assets/js/SuperMap/zdjkmap.js'
let zdvm;
export default {
    inject:['reload'],
  data(){
    return{
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
       pd:{},
       swdw:[],
       show:true,
       bzhshow:false,
       lgshow:false,
       czshow:false,
       sjshow:true,
       pcs:[],
       xzqh:[],
       radioe:'2',
       tableData:[],
       bzhDialogVisible:false,
       diatext:'标准化地址',
       bzhid:'',
       mc:'',
       lrdw:'',
    }
  },

  mounted() {
    window.zdvm=this;
   this.$store.dispatch("getGjdq");
   this.$store.dispatch("getQzzl");
    createMapL();
  },
  methods:{
    pageSizeChange(val) {
      this.getRyxx(this.CurrentPage,val,this.bzhid,this.mc,this.lrdw);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getRyxx(val,this.pageSize,this.bzhid,this.mc,this.lrdw);
      console.log(`当前页: ${val}`);
    },
      changtab(){
        this.show=!this.show;
      },
      changeTSY(t){
        if(t=="1"){
          this.lgshow=true;
          this.bzhshow=false;
        }else if(t=="2"){
          this.lgshow=false;
          this.bzhshow=true;
        }else {
          this.lgshow=false;
          this.bzhshow=false;
        }
      },
      getPcs(){
        var url=this.Global.aport1+this.Global.pcs;
        this.$api.get(url,null,
        r=>{
          this.pcs=ToArray(r.data);
        })
      },
      getXzqh(){
        var url=this.Global.aport1+this.Global.xzqh;
        this.$api.get(url,null,
        r=>{
          this.xzqh=ToArray(r.data);
        })
      },
    doset(){
      this.reload();
      // this.$set(this.pd,"beginTime",'');
      // this.$set(this.pd,"endTime",'');
      // this.$set(this.pd,"gjdq",'');
      // this.$set(this.pd,"qzzl",'');
    },
    getSearch(className) {
        if(this.radioe=="2"){
              if(this.pd.beginTime==undefined && this.pd.endTime==undefined){
                this.$message.error("请输入开始时间或者结束时间！");return;
              }
        }
       doSearch(className);
    },


    //获取标准化地址
    getbzhdz(das,pp,callback){
      var searchResult = [];
      var bb=[];
        for (var i = 0; i < das.length; i++) {
          let mu=bb.find((n)=>n.dm==das[i].dm);
          if(!mu){
              bb.push(das[i]);
          }
        }
     console.log('bb',bb.length);
      console.log('pp',pp);
        //this.ssfj=n;
     let  p={};var url="";

        if(this.radioe=="1"){
          this.czshow=true;
           p={

            "rzsjStart":this.pd.beginTime,
            "rzsjEnd":this.pd.endTime,
            "gjdq":this.pd.gjdq,
            "qzzl":this.pd.qzzl,
            "arrayList":bb,
            "pcsList":pp,
          };
          url=this.Global.aport+"/ywczdt/getZdjkqyBzhdz";
        }else {
          p ={
              "rzsjStart":this.pd.beginTime,
              "rzsjEnd":this.pd.endTime,
              "gjdq":this.pd.gjdq,
              "qzzl":this.pd.qzzl,
              "arrayList":bb,
              "pcsList":pp,
            };
          this.czshow=false;
          url=this.Global.aport+"/ywlz/getZdjkqyBzhdz";
        }
        this.$api.post(url, p,
          r => {
            if (r.success) {
              let arr=r.data;
              for (var i = 0; i < arr.length; i++) {

                  searchResult.push(arr[i]);
             }
             if(searchResult.length==0){
               this.$message.error("地图库中未录入该地址的坐标! ");return ;
             }
              callback && callback(searchResult)
            }
          });
    },
    //人员信息
    getRyxx(currentPage,showCount,bzhid,mc,lrdw)
    {

      if(currentPage==1){
        this.CurrentPage=1;
        this.tableData=[]; this.TotalResult=0;
      }
       this.bzhid=bzhid;
       this.mc=mc;
       this.lrdw=lrdw;
       this.diatext=this.mc;
       let p={}; var url="";

          if(this.radioe=="1"){
         p={
           "currentPage":currentPage,
           "showCount":showCount,
           "xxdz":this.bzhid,
           "djrqStart":this.pd.beginTime,
           "djrqEnd":this.pd.endTime,
           "gjdq":this.pd.gjdq,
           "qzzl":this.pd.qzzl,
         };
         url=this.Global.aport+"/ywczdt/getCZDJXXRYList";
       }else {
         p ={
           "currentPage":currentPage,
           "showCount":showCount,
           "bzhdzMc":this.bzhid,
           "rzsjStart":this.pd.beginTime,
           "rzsjEnd":this.pd.endTime,
           "gjdq":this.pd.gjdq,
           "qzzl":this.pd.qzzl,

         };
          url=this.Global.aport+"/zxdt/getLSZSDJXXRYList";
       }

       this.$api.post(url, p,
         r => {
           if (r.success) {

             this.tableData=r.data.resultList;
             this.TotalResult=r.data.totalResult;
           }
         });
       this.bzhDialogVisible=true;
    },
    getBX(n){
      console.log(n);
      if(n==1){
        this.sjshow=false;
      }else {
          this.sjshow=true;
      }
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
.yy-input-text{text-align: left!important; width: 30%!important;}
.yy-input-input{width: 65%!important;}

</style>
<style>
.lzxx  .my-div-icon {
        border-radius: 50%;
        line-height:20px;
        text-align: center;
        vertical-align: middle;
    }
.lzxx  .lz {
			background:url(../../../../assets/img/tb/location_green.png) no-repeat;font-size:12px; font-weight: bold;color: #ffffff;
		}

.lzxx .cz {
			background-color: rgba(155, 0, 0, 0.8);
		}
.bghome .el-dialog{ width: 70%!important;}
</style>
