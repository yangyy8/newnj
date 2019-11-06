<template lang="html">
  <div class="bgh1">
         <div id="mainMap" class="mapbjindex"></div>
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
                  label="服务处所" v-if="czshow">
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
                  prop="rzrq"
                  label="入住日期" v-if="!czshow">
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
                     <span style="color:yellow; cursor:pointer"  @click="gotos(scope.row.zjhm,scope.row.gjdqdm)">{{scope.row.zjhm}}</span>
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
             <img src="../assets/img/qx.png" border="0" @click="bzhDialogVisible = false" style="cursor:pointer" >
           </div>
          <div class="arrow_line" style="left:0px;top:0px; border-bottom-width:0;border-right-width:0"></div>
          <div class="arrow_line" style="right:0px;top:0px; border-bottom-width:0;border-left-width:0"></div>
          <div class="arrow_line" style="left:0px;bottom:0px; border-top-width:0;border-right-width:0"></div>
          <div class="arrow_line" style="right:0px;bottom:0px; border-top-width:0;border-left-width:0"></div>
         </el-dialog>
  </div>
</template>
<script>
import {createMapL} from '@/assets/js/SuperMap/indexmap.js'
let vm;
export default {
    data(){
      return{
        CurrentPage: 1,
        pageSize: 5,
        TotalResult: 0,
        xzqh:'',
        pd:{},
        diatext:'标准化地址',
        tableData:[],
        options:this.pl.options,
        bzhDialogVisible:false,
        lrdw:'320115',
        lrdwmc:'秦淮区',//320113   320112江北
        rs:'11523',
        type:'L',
        yf:'M',
        sevalue:[],
        bzhid:'',
        czshow:false,
        ssfj:'',
      }
    },
    mounted(){
      window.vm=this;
      this.lrdw=this.$route.query.dqdm;
      this.type=this.$route.query.type;
      this.rs=this.$route.query.rs;
      this.lrdwmc=this.$route.query.mc;
      this.yf=this.$route.query.yf;
      createMapL(this.lrdw,this.lrdwmc,this.rs,this.type);
      if(this.type=="C")
      {
        this.czshow=true;
      }else {
        this.czshow=false;
      }
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
      //得到派出所
      getpcs(n,callback)
        {
          var searchResult = [];
            let p={
              "lrdw":this.lrdw,
              "yf":this.yf,
            };
          var url=this.Global.aport+"/zxdt/getLSZSDJXXPCSList";
           if(this.type=="C"){
             p={
               "lrdw":this.lrdw,
             };
             url=this.Global.aport+"/zxdt/getCZDJXXPCSList";
           }
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
      },
      //获取标准化地址
      getbzhdz(n,callback){
        var searchResult = [];
          this.ssfj=n;
          let p={
            "yf":this.yf,
            "lrdw":n,
          };
          var url=this.Global.aport+"/zxdt/getLSZSDJXXBZHDZList";
          if(this.type=="C"){
            p={
              "ssfj":n,
            };
            url=this.Global.aport+"/zxdt/getCZDJXXJZDList";
          }
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
      },
      //人员信息
      getRyxx(currentPage,showCount,bzhid,mc,lrdw)
      {

        if(currentPage==1){
          this.CurrentPage=1;
          this.tableData=[];this.TotalResult=0;
        }
         this.bzhid=bzhid;
         this.mc=mc;
         this.lrdw=lrdw;
         this.diatext=this.mc;
         let p={
           "currentPage":currentPage,
           "showCount":showCount,
           "bzhdzMc":this.bzhid,
           "yf":this.yf,
           "lrdw":this.ssfj,
         };
          var url=this.Global.aport+"/zxdt/getLSZSDJXXRYList";
         if(this.type=="C"){
           p={
             "currentPage":currentPage,
             "showCount":showCount,
             "xxdz":this.bzhid,
             "ssfj":this.ssfj,
           };
           url=this.Global.aport+"/zxdt/getCZDJXXRYList";
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
      gotos(zjhms,gjdq){
       let routeData=this.$router.resolve({path:'/Home/RYHX_NX',query:{zjhm:zjhms,gjdq:gjdq}});
       window.open(routeData.href,'_blank')
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

    }
}
</script>

<style scoped>
.bg{background: #ffffff; width: 100%; height: 100%; min-height: 700px;}

.arrow_line {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #06B4FB;
}

</style>

<style>
.my-div-icon {
         background: blue;
         border-radius: 50%;
        /* width: 50 !important;
        height: 50px !important; */
        line-height:50px;
        text-align: center;
        background: url(../assets/img/tb/mapt.png) no-repeat;
        background-position: 100% 100%;
        color: #ffffff;
        vertical-align: middle;
        font-weight:border;
}
.icon1{background: url(../assets/img/tb/map1.png)  no-repeat;}

.icon2{background: url(../assets/img/tb/map2.png)  no-repeat;}
.bgh1 .crrcolor{color: #1BA5C2!important;}

.bgh1 .el-dialog{ width: 90%!important;
  color: #ffffff!important;
  border: 1px solid #2e9de7;
  background-color: rgba(7,67,124,0.9);
  border-radius: 2px;}
  .bgh1 .el-dialog__title{
        color: #86cdfb!important;
  font-size: 18px;font-weight: lighter;
        border-left: 4px #86cdfb solid;padding-left: 10px;
      }
    .bgh1 .el-dialog__header{
        border-bottom: none;
      }
    .bgh1 .el-dialog__body {
      padding: 10px 20px;
      line-height: 30px!important;
  }
      .bgh1 .el-dialog__footer{
        background: none;
      }
      .bgh1 .el-table {
        border: none;
        background: none;

      }
     .bgh1 .el-table::before {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0px!important;
  }
      .bgh1 .el-table th{
         background:rgba(1,34,79,0.9) !important;
         color: #25daf5; border: none;
         border-top:  1px #2071A0 dashed;
      }
      .bgh1 .el-table tr{
          background-color: rgba(7,67,124);color:#a9d6fd;
          border: none;

      }
      .bgh1 .el-table tr td{
        border: none;
        border-top:  1px #2071A0 dashed;
        border-bottom:   1px #2071A0 dashed;
      }
      .bgh1 .el-table--border, .el-table--group{
        border: none;
      }
      .bgh1 .el-table--enable-row-hover .el-table__body tr:hover>td {
           background-color: rgba(7,67,124);color:#a9d6fd;
      }
      .bgh1 .el-table__expanded-cell{
       background:#023062 !important;
      }
        .bgh1 .el-table__empty-block{
            background:rgba(7,67,124);
            border-bottom:   1px #2071A0 dashed;
        }
        .bgh1 .el-table__empty-text{
          color: #a9d6fd;
        }
      .bgh1 .el-pagination.is-background .btn-next.disabled, .el-pagination.is-background .btn-next:disabled, .el-pagination.is-background .btn-prev.disabled, .el-pagination.is-background .btn-prev:disabled, .el-pagination.is-background .el-pager li.disabled
      {
        background: none;
      }
</style>
