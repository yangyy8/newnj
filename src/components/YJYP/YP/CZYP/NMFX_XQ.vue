<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain tshu">
    <div class="yycontent">
      <div class="yylbt mb-15" >
        <el-row type="flex">
          <el-col :span="12">
                  基本信息
          </el-col>
          <el-col :span="12" style="text-align:right;margin-top:-10px;">
                    <el-button type="info" size="small" @click="goBack">返回</el-button>
          </el-col>
        </el-row>
      </div>

      <el-row type="flex">
        <el-col :span="3" style="">
         <div class="photo-content">
           <img :src="imgdm" @click="getZP()" style="height:160px;width:128px;cursor:pointer">
           <div class="hisPhoto">
             查看历史照片
           </div>
         </div>
        </el-col>
        <el-col :span="21" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                    {{basedata.GJDQ_DESC}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">案卷编号：</span>
                    {{basedata.AJBH}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">注册时间：</span>
                    {{basedata.ZCRQ}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">户室人数：</span>
                    {{basedata.RS}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                    {{basedata.XM}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">性别：</span>
                    {{basedata.XBDM_DESC}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">出生日期：</span>
                    {{basedata.CSRQ}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">护照号码：</span>
                    {{basedata.HZHM}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">身份类型：</span>
                    {{basedata.SFDM_DESC}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">电话号码：</span>
                    {{basedata.DHHM}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">邮箱地址：</span>
                    {{basedata.YXDZ}}
                </el-col>
                <el-col  :span="24"  class="input-item">
                   <span class="input-text" style="width:9.9%!important;">详细地址：</span>
                    {{basedata.XXDZ}}
                </el-col>
          </el-row>
         </el-col>
          </el-row>
    </div>
    <div class="yycontent">
        <div class="stru-lal">临住信息</div>
        <div class="">
          <el-table
           :data="tableData"
           border
           style="width: 100%"
           class="stu-table t-mt10">
          <el-table-column
            prop="ZSRQ"
            label="住宿时间">
          </el-table-column>
          <el-table-column
            prop="LSDWDZ"
            label="住宿地址">
          </el-table-column>
          <el-table-column
            prop="NLKRQ"
            label="拟离开时间">
          </el-table-column>
          <el-table-column
            prop="ZFZL_DESC"
            label="住宿类型">
          </el-table-column>
          <el-table-column
            prop="DJDWMC"
            label="登记单位">
          </el-table-column>
           <el-table-column
             label="操作" width="100">
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
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="TotalResult">
            </el-pagination>
          </div>
        </div>
        <div class="stru-lal">常住信息</div>
        <div class="">
          <el-table
              :data="tableData3.length==0?tableData3:tableData3.slice((CurrentPage3-1)*pageSize3,CurrentPage3*pageSize3)"
              border
              style="width: 100%" class="stu-table t-mt10">
              <el-table-column
                prop="inhabiDetailAddr"
                label="居住地详细地址">
              </el-table-column>
              <el-table-column
                prop="assignmentOrg_desc"
                label="签发机关">
              </el-table-column>
              <el-table-column
                prop="degreeCode_desc"
                label="身份">
              </el-table-column>
              <el-table-column
                prop="inhabiState_desc"
                label="居住状态">
              </el-table-column>
              <el-table-column
                label="操作" width="120">
                <template slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailscz(scope.row)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          <div class="middle-foot">
           <div class="page-msg">
             <div class="">
           共{{TotalResult3}}条记录
             </div>
             <div class="">
               每页显示
               <el-select v-model="pageSize3" @change="pageSizeChange3(pageSize3)" placeholder="10" size="mini" class="page-select">
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
               共{{Math.ceil(TotalResult3/pageSize3)}}页
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
        </div>
        <div class="stru-lal">出入境记录</div>
        <div class="">
          <el-table
             :data="tableData1.length==0?tableData1:tableData1.slice((CurrentPage1-1)*pageSize1,CurrentPage1*pageSize1)"
             border
             style="width: 100%;" class="stu-table t-mt10">
             <el-table-column
               prop="ioDate"
               label="出入境日期">
             </el-table-column>
             <el-table-column
               prop="personType.value"
               label="人员类别（出入境状态）">
             </el-table-column>
             <el-table-column
               prop="ioPort.value"
               label="出入境口岸">
             </el-table-column>
             <el-table-column
               label="操作" width="120">
               <template slot-scope="scope">
                 <div>
                    <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailscrj(scope.row)"></el-button>
                 </div>
               </template>
             </el-table-column>
           </el-table>
          <div class="middle-foot">
            <div class="page-msg">
              <div class="">
            共{{TotalResult1}}条记录
              </div>
              <div class="">
                每页显示
                <el-select v-model="pageSize1" @change="pageSizeChange1(pageSize1)" placeholder="10" size="mini" class="page-select">
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
                共{{Math.ceil(TotalResult1/pageSize1)}}页
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
        </div>
    </div>
      <div class="bj">
         <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
              <LZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()"></LZXX>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
         <el-dialog title="常住信息详情" :visible.sync="czDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
           <CZXXRY :type="type" :xid="xid" :random="randomczxx" :rid="rid" :rybh="rybh" :gjdq="gjdqxq"></CZXXRY>
           <div slot="footer" class="dialog-footer">
             <el-button @click="czDialogVisible = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
         <!-- 出入境信息 -->
        <el-dialog title="出入境信息详情" :visible.sync="crjDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
             <CRJXXRY :type="type" :xid="xid" :random="randomcrj"></CRJXXRY>
             <div slot="footer" class="dialog-footer">
               <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
             </div>
        </el-dialog>
        <el-dialog title="历史照片" :visible.sync="zpDialogVisible" width="800px">
          <div class="photoCon">
            <div class="photoItem" v-for="img in images">
               <img  :src="img.ZPNR" style="width:100%">
            </div>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="zpDialogVisible = false" size="small">取 消</el-button>
          </div>
        </el-dialog>
     </div>
    </div>
</template>
<script>
import LZXX from '../../../common/lzxx_xq'
import CRJXXRY from '../LXSYP/crjxq_ry'
import CZXXRY from '../LXSYP/czxxxq_ry'
import imgUrl from '../../../../assets/img/mrzp.png'
export default {
    components:{LZXX,CRJXXRY,CZXXRY},
  data() {
    return {
      rybh:'',
      imgdm:imgUrl,
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      //常住
      tableData3:[],
      CurrentPage3: 1,
      pageSize3: 10,
      TotalResult3: 0,
      czDialogVisible:false,
      randomczxx:'',
      rid:{},
      gjdqxq:'',

      tableData1:[],
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      randomcrj:'',
      crjDialogVisible:false,

      zpDialogVisible:false,
      images:[],

      form:{},
      pd: {},
      pm:{},
      type:0,
      xid:'',
      tableData:[],
      basedata:[],
      detailsDialogVisible:false,
      options:[{
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
      row:[],
      zjhm:'',
      gjdq:'',
      queryPd:{},
      rows:[],
    }
  },
  activated() {
    this.row = this.$route.query.row;
    this.rows = this.$route.query.rows;
    this.queryPd = this.$route.query.queryPd;
    this.zjhm=this.row.HZHM;
    this.gjdq=this.row.GJDQDM;
    this.getBase(this.row.RGUID);
    this.getList(this.CurrentPage,this.pageSize);
    this.getCZXX();
    this.getCrj();
    this.getZXZP();
  },
  mounted() {
      this.$store.dispatch('getGjdq');
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize);
    },
    pageSizeChange1(val) {
      this.pageSize1=val;
    },
    handleCurrentChange1(val) {
      this.CurrentPage1=val;
    },
    pageSizeChange3(val) {
      this.pageSize3=val;
    },
    handleCurrentChange3(val) {
      this.CurrentPage3=val;
    },
    goBack(){
      if(this.$route.query.jumpTo=='main'){
        this.$router.push({name:'NMFX'})
      }else if(this.$route.query.jumpTo=='assist'){
        this.$router.push({name:'NMFX_LIST',query:{row:this.rows,queryPd:this.queryPd}})
      }
    },
    //最新照片
    getZXZP(){
      let pd={};
      if(this.zjhm!="" && this.zjhm!=undefined){
         pd.ZJHM=this.zjhm;
      }else if(this.row.RYBH){
         pd.RYBH=this.row.RYBH;
      }else{
        this.pd.RYBH=""
      }
      pd.GJDQ=this.row.GJDQDM
      console.log('----',pd);
      let p = {
        "pd": pd,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getrytpxxpro', p,
        r => {
          this.imgdm = imgUrl
          if(r.data.ZPNR){
            this.imgdm = r.data.ZPNR;
          }
        })
    },
    //历史照片
    getZP(){
      let pd={};
      if(this.row){
        pd.RYBH=this.row.RYBH;
      }else if(this.rybh){
        pd.RYBH=this.rybh;
      }else{
        pd.RYBH='';
      }
      let p={
        "pd":pd,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getrytpxx', p,
        r => {
          this.images = r.data.resultList;
        })
      this.zpDialogVisible=true;
    },
    getBase(guid) {
      this.pd.RGUID=guid;
      let p = {
        "pd": this.pd,
      };
      this.$api.post(this.Global.aport5+'/nanMinController/getEntityByRGUID', p,
        r => {
          this.basedata = r.data;
          this.rybh=r.data.RYBH;
          this.gjdqxq=r.data.GJDQDM;
        })
    },
    // 常住信息
    getCZXX(){
      let p={
        "paperNO":this.zjhm,
        "nationality":this.gjdq,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getczxx', p,
        r => {
          this.tableData3 = r.data.info;
          this.TotalResult3=r.data.info.length;
        })
    },
    //常住信息详情
    detailscz(n){
      this.xid=n.DTID;
      this.rid=n;
      this.type=2;
      this.randomczxx=new Date().getTime();
      // target.scrollIntoView();
      this.czDialogVisible=true;
    },
    //出入境
    getCrj(){
      let p={
        "certificateNO":this.zjhm,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getcrjjl', p,
        r => {
          this.tableData1 = r.data;
          this.TotalResult1=r.data.length;
        })
    },
    //出入境详情
    detailscrj(n){
        this.xid=n;
        this.randomcrj=new Date().getTime();
        this.type=2;
        // target.scrollIntoView();
        this.crjDialogVisible=true;
    },
    getList(currentPage, showCount) {
      this.pd = Object.assign({}, this.pd, this.row);
      this.pm.RYBH=this.pd.RYBH;
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.pm,
        "orderBy":{value:"ZSRQ",dataType:"date"},
        "orderType":'DESC'
      };
      this.$api.post(this.Global.aport5+'/eS_LZ_LZXXController/getResultListByParams', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    details(i) {
      this.xid=i.DTID;
      this.rybh=i.RYBH;
      this.type=0;
      this.detailsDialogVisible = true;
    },
  }
}
</script>

<style scoped>
.input-text{width: 30%!important}
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

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.crcolor {
  background: #EFF3F6;
}
.yy-input-text {
  text-align: left !important;
}
.input-item{font-size: 12px;color: #999999}
.input-item span{color: #333333;font-size: 12px;}
</style>
<style>

.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
</style>
