<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="20" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM"   class="input-input"></el-input>
            </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.GJDQ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="4" class="alone-flex">
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15 tt-mr10">查询</el-button>
              <el-button type="primary" size="small" @click="$router.go(-1)" class="mb-15 tt-mr10">返回</el-button>
              <el-button type="warning" size="small" @click="download" class="mb-15">导出</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">人员列表</div>
      <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @select="selectfn">
           <el-table-column
             type="selection"
             width="55">
           </el-table-column>
           <el-table-column
             prop="ZWXM"
             label="中文姓名">
           </el-table-column>
           <el-table-column
             prop="YWXM"
             label="英文姓名">
           </el-table-column>
           <el-table-column
             prop="XB_DESC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="GJDQ_DESC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="ZJZL_DESC"
             label="证件种类">
           </el-table-column>
           <el-table-column
             prop="ZJHM"
             label="证件号码">
           </el-table-column>
           <!-- <el-table-column
             prop="YXQZ"
             label="证件有效期">
           </el-table-column> -->
           <el-table-column
             prop="QZZL_DESC"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="QZHM"
             label="签证号码">
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
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
    </div>
      <div class="bj">
         <!-- <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
           <el-form :model="form"  class="crcolor" style="padding:10px">
             <el-row type="flex">
               <el-col :span="16">
                 <el-row :gutter="2">
                   <el-col :span="12">
                     <span  class="yy-input-text">英文姓：</span>
                       <el-input placeholder="" size="small" v-model="form.YWX"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12">
                     <span class="yy-input-text">英文名：</span>
                     <el-input placeholder="" size="small" v-model="form.YWM"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12">
                     <span class="yy-input-text">英文姓名：</span>
                     <el-input placeholder="" size="small" v-model="form.YWXM"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12">
                     <span class="yy-input-text">中文姓名：</span>
                     <el-input placeholder="" size="small" v-model="form.ZWXM"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12">
                     <span class="yy-input-text">证件种类：</span>
                     <el-input placeholder="" size="small" v-model="form.ZJZL_DESC"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12">
                     <span class="yy-input-text">证件号码：</span>
                     <el-input placeholder="" size="small" v-model="form.ZJHM"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12">
                     <span class="yy-input-text">国家地区：</span>
                     <el-input placeholder="" size="small" v-model="form.GJDQ_DESC"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12">
                     <span class="yy-input-text">出生日期：</span>
                     <el-input placeholder="" size="small" v-model="form.CSRQ"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12">
                     <span class="yy-input-text">性别：</span>
                     <el-input placeholder="" size="small" v-model="form.XB_DESC"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12">
                     <span class="yy-input-text">身份证号：</span>
                     <el-input placeholder="" size="small" v-model="form.SFZH"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12" >
                     <span class="yy-input-text">签证种类：</span>
                     <el-input placeholder="" size="small" v-model="form.QZZL_DESC"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12" >
                     <span class="yy-input-text" title="签证(注)号码">签证(注)号码：</span>
                       <el-input placeholder="" size="small" v-model="form.QZHM"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12" >
                     <span class="yy-input-text">签发机关：</span>
                     <el-input placeholder="" size="small" v-model="form.QFD_DESC"  class="yy-input-input"></el-input>
                   </el-col>
                   <el-col :span="12" >
                     <span class="yy-input-text" title="签证(注)有效期至">停留有效期至：</span>
                       <el-input placeholder="" size="small" v-model="form.TLYXQ"  class="yy-input-input"></el-input>
                   </el-col>
                 </el-row>
               </el-col>
               <el-col :span="8">
                 <div class="block">
                   <el-carousel height="270px">
                     <el-carousel-item v-for="(item,ind7) in imagess" :key="ind7" v-if="imgshow1">
                       <img  :src="item.tp" >
                     </el-carousel-item>
                     <el-carousel-item v-if="imgshow2">
                       <img src="../../../../assets/img/t1.png" >
                     </el-carousel-item>
                   </el-carousel>
                 </div>
               </el-col>

             </el-row>
               <el-row :gutter="3" >
                 <el-col :span="8">
                   <span class="yy-input-text">行政区划：</span>
                     <el-input placeholder="" size="small" v-model="form.XZQH_DESC"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text" title="签证签发日期：">签证签发日期：</span>
                       <el-input placeholder="" size="small" v-model="form.QFRQ"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text" title="与境外联系人员">与境外联系人员：</span>
                   <el-input placeholder="" size="small" v-model="form.QSGX_DESC"  class="yy-input-input"></el-input>
                 </el-col>
               </el-row>
               <el-row :gutter="3" >
                 <el-col :span="8">
                   <span class="yy-input-text">入境日期：</span>
                   <el-input placeholder="" size="small" v-model="form.RJRQ"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text">入境口岸：</span>
                   <el-input placeholder="" size="small" v-model="form.RJKA_DESC"  class="yy-input-input"></el-input>
                 </el-col>

                 <el-col :span="8">
                   <span class="yy-input-text">入境事由：</span>
                   <el-input placeholder="" size="small" v-model="form.JLSY"  class="yy-input-input"></el-input>
                 </el-col>
               </el-row>
               <el-row :gutter="3" >
                 <el-col :span="8">
                   <span class="yy-input-text">入住日期：</span>
                   <el-input placeholder="" size="small" v-model="form.ZSRQ"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text">接待单位：</span>
                     <el-input placeholder="" size="small" v-model="form.JDDW"  class="yy-input-input"></el-input>
                 </el-col>

                 <el-col :span="8">
                   <span class="yy-input-text" title="拟离开日期">拟离开日期：</span>
                     <el-input placeholder="" size="small" v-model="form.NLKRQ"  class="yy-input-input"></el-input>
                 </el-col>

               </el-row>
               <el-row :gutter="3" >
                 <el-col :span="8" class="crcolor">
                   <span class="yy-input-text">投宿于：</span>
                   <el-radio v-model="typet" label="1" >社会面</el-radio>
                   <el-radio v-model="typet" label="2" >旅馆</el-radio>
                 </el-col>
                 <el-col :span="16" v-show="shm"  class="crcolor">
                   <span class="yy-input-text" title="标准化地址" style="width:17.4%">标准化地址：</span>
                    <el-input placeholder="" size="small" v-model="form.BZHDZMC"  class="input-input" style="width:80%!important"></el-input>
                 </el-col>
                 <el-col :span="16" v-show="lg"  class="crcolor">
                   <span class="yy-input-text" style="width:17.4%">旅馆名称：</span>
                    <el-input placeholder="" size="small" v-model="form.DJDWMC"   class="input-input" style="width:80%!important"></el-input>
                 </el-col>
                 <el-col :span="8"  class="crcolor">
                   <span class="yy-input-text">房号：</span>
                   <el-input placeholder="" size="small" v-model="form.FH"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text" title="本人联系电话">本人联系电话：</span>
                   <el-input placeholder="" size="small" v-model="form.BRLXDH"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text" title="紧急情况联系人">紧急情况联系人：</span>
                       <el-input placeholder="" size="small" v-model="form.JJLXR"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text" title="紧急情况联系电话">紧急情况联系电话：</span>
                   <el-input placeholder="" size="small" v-model="form.JJLXDH"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8"   class="crcolor">
                   <span class="yy-input-text">派出所名称：</span>
                     <el-input placeholder="" size="small" v-model="form.SSDW"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text" title="留宿单位(户主)电话" >留宿单位(户主)电话：</span>
                   <el-input placeholder="" size="small" v-model="form.LSDWDH"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="16">
                   <span class="yy-input-text" title="留宿单位(户主)" style="width:17.4%">留宿单位(户主)：</span>
                   <el-input placeholder="" size="small" v-model="form.LSDW"  class="input-input" style="width:80%!important"></el-input>
                 </el-col>

                 <el-col :span="8">
                   <span class="yy-input-text">房屋性质：</span>
                   <el-input placeholder="" size="small" v-model="form.ZFZL_DESC"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text" title="房主身份证号">房主身份证号：</span>
                     <el-input placeholder="" size="small" v-model="form.FZSFZH"  class="yy-input-input"></el-input>
                 </el-col>
               </el-row>
               <el-row :gutter="3" >
                 <el-col :span="8">
                   <span class="yy-input-text">录入人：</span>
                     <el-input placeholder="" size="small" v-model="form.DJ"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text">录入单位：</span>
                   <el-input placeholder="" size="small" v-model="form.DJDWMC"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8">
                   <span class="yy-input-text">录入日期：</span>
                   <el-input placeholder="" size="small" v-model="form.DJRQ"  class="yy-input-input"></el-input>
                 </el-col>
               </el-row>
               <el-row :gutter="3">
                 <el-col :span="8">
                   <span class="yy-input-text">修改人：</span>
                       <el-input placeholder="" size="small" v-model="form.GXR"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8" >
                   <span class="yy-input-text">修改单位：</span>
                       <el-input placeholder="" size="small" v-model="form.GXDW"  class="yy-input-input"></el-input>
                 </el-col>
                 <el-col :span="8" >
                   <span class="yy-input-text">修改日期：</span>
                       <el-input placeholder="" size="small" v-model="form.GXSJ"  class="yy-input-input"></el-input>
                 </el-col>
               </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
           </div>
         </el-dialog> -->
         <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
             <LZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()"></LZXX>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
     </div>
    </div>
</template>
<script>
import LZXX from '../../../common/lzxx_xq'
export default {
  components:{LZXX},
  data() {
    return {
      type:1,
      rybh:'',
      xid:'',
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      form:{},
      pd: {},
        imagess:[],
        radio1:'0',
        radio2:'0',
        typet:'1',
        imgshow1:false,
        imgshow2:true,
        shm:false,
        lg:false,
      tableData:[],
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
      queryPd:{},
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],

      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',
    }
  },
  activated() {
    this.row = this.$route.query.row;
    this.queryPd=this.$route.query.queryPd;
    this.getList(this.CurrentPage,this.pageSize,this.pd);
  },
  mounted() {
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.$store.dispatch('getGjdq');
  },
  methods: {
    selectfn(a,b){
      this.multipleSelection = a;
      this.dataSelection()
    },
    dataSelection(){
      // console.log('this.multipleSelection',this.multipleSelection)
      this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection);
      // console.log('this.selectionReal',this.selectionReal);
      this.selectionAll=[];
      for(var i=0;i<this.selectionReal.length;i++){
        if(this.selectionReal[i]){
          for(var j=0;j<this.selectionReal[i].length;j++){
            this.selectionAll.push(this.selectionReal[i][j])
          }
        }
      }
      // console.log('this.selectionAll',this.selectionAll);
    },
    download(){
      let p={};
      let url="";
      url="/linZhuInfoComprehensiveAnalysisController/exportPersonList";
      this.objCompare(this.row,this.queryPd)
      this.pd = Object.assign({},this.row,this.queryPd,this.pd);
      if(this.selectionAll.length==0){//人员全部导出
        p={
          "pd":this.pd,
          "orderBy":{value:"ZSRQ",dataType:"date"},
          "orderType":"DESC",
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token,
        }
      }else{//人员部分导出
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].DTID)
        }
        this.pd.DTID=this.yuid;
        p={
          "pd":this.pd,
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token,
        }
      }
      this.$api.post(this.Global.aport5+url,p,
        r =>{
          this.downloadM(r)
        },e=>{},{},'blob')
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '临住信息综合分析列表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, val, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(val, this.pageSize, this.pd);
    },
    getList(currentPage, showCount, pd) {
      this.objCompare(this.row,this.queryPd)
      pd = Object.assign({},this.row,this.queryPd,pd);
      if(pd.hasOwnProperty('DTID')){
        delete pd['DTID']
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "orderBy":{value:"ZSRQ",dataType:"date"},
        "orderType":"DESC",
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      this.$api.post(this.Global.aport5+'/linZhuInfoComprehensiveAnalysisController/getComprehensivePersonList', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
          if(this.selectionReal.length==0){//声明一个数组对象
            this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
          }
          this.$nextTick(()=>{
            this.multipleSelection=[]
            for(var i=0;i<this.tableData.length;i++){
              for(var j=0;j<this.selectionAll.length;j++){
                if(this.tableData[i].DTID==this.selectionAll[j].DTID){
                  // console.log(this.tableData[i].RGUID,this.selectionAll[j].RGUID,'this.selectionAll======',this.selectionAll)
                  this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                }
              }
            }
          })
        })
    },
    details(i) {

                // if(i.LB_LYD==undefined){
                //   this.radio1='0';
                // }
                // if(i.LB_QWD==undefined){
                //   this.radio2='0';
                // }
                // if(i.LB_DJDW==undefined){
                //   this.typet='1';
                //   this.shm=true;
                //   this.lg=false;
                // }else if(i.LB_DJDW=='1'){
                //    this.typet='2';
                //    this.shm=false;
                //    this.lg=true;
                // }else {
                //   this.typet='1';
                //   this.shm=true;
                //   this.lg=false;
                // }
      this.xid=i.DTID;
      this.rybh=i.RYBH;
      this.detailsDialogVisible = true;
      // this.form=i;
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
</style>
<style>

.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
</style>
