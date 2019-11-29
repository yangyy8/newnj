<template lang="html">
  <!-- 难民和寻求庇护者分析 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.GJDQDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">案卷编号：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.AJBH"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">户室人数：</span>
                    <el-input-number v-model="rs" @change="handleChange" :min="0" :max="100" size="small" label="描述文字" class="input-input"></el-input-number>
              </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.XBDM" placeholder="请选择"  filterable clearable  default-first-option size="small" class="input-input">
                    <el-option v-for="item in $store.state.xb"
                     :key="item.dm"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm"
                    >
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginCS" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endCS" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">身份类型：</span>
                  <el-select v-model="pd.SFDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.sflx"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">护照号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.HZHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">注册日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginZC" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endZC" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">电话：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.DHHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">邮箱：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YXDZ" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">详细地址：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XXDZ_Like" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
              <el-button type="primary" size="small"  class="t-ml0" @click="download">导出</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">统计类别</div>
      <div class="mb-15 t-tjCheck">
        <el-checkbox-group v-model="checkedList">
          <el-checkbox v-for="item in checkItem" :label="item.code" :key="item.code">{{item.label}}</el-checkbox>
        </el-checkbox-group>
        <!-- <el-checkbox label="国家地区" v-model="pm.GJDQDM" :disabled="disa"></el-checkbox>
        <el-checkbox label="性别" v-model="pm.XBDM" :disabled="disa"></el-checkbox>
        <el-checkbox label="户室人数" v-model="pm.RS_Nokeyword" :disabled="disa"></el-checkbox>
        <el-checkbox label="身份类型" v-model="pm.SFDM" :disabled="disa"></el-checkbox> -->
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
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'NMFX_LIST',query:{row:scope.row,queryPd:pd}})"></el-button>
                 </template>
               </el-table-column>
          </el-table>
          </div>
          <div v-else>
              <el-table
                ref="multipleTable"
                :data="tableData"
                border
                style="width: 100%;"
                @select="selectfn"
                @header-click="titleShow">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="XM"
                  label="姓名">
                </el-table-column>
                <el-table-column
                  prop="XBDM_DESC"
                  label="性别">
                </el-table-column>
                <el-table-column
                  prop="GJDQ_DESC"
                  label="国家地区">
                </el-table-column>
                <el-table-column
                  prop="AJBH"
                  label="案卷编号">
                </el-table-column>
                <el-table-column
                  prop="ZCRQ"
                  label="注册时间">
                </el-table-column>
                <el-table-column
                  prop="HZHM"
                  label="护照号码">
                </el-table-column>
                <el-table-column
                  prop="SFDM_DESC"
                  label="身份类型">
                </el-table-column>
                <el-table-column
                  prop="DHHM"
                  label="电话号码">
                </el-table-column>
                <el-table-column
                  prop="RS"
                  label="户室人数">
                </el-table-column>
                <el-table-column
                  label="操作" width="100">
                  <template slot-scope="scope">
                  <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'NMFX_XQ',query:{row:scope.row,jumpTo:'main'}})"></el-button>
                  </template>
                </el-table-column>
              </el-table>
              </div>
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
                :current-page.sync ="CurrentPage"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="TotalResult">
              </el-pagination>
            </div>
            <div style="color:blue">统计总数量：{{ALLResult}}</div>
  </div>

  </div>
</template>
<script>

export default {

  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      ALLResult:0,
      pd: {CSRQ_DateRange:{begin:'',end:''},ZCRQ_DateRange:{begin:'',end:''}},
      pd0: {
        beginCS:'',
        endCS:'',
        beginZC:'',
        endZC:'',
      },
      pm:{},
      configHeader:[],
      tableData:[],
      tableData1:[],
      falg:false,
      disa:true,
      rs:0,
      detailsDialogVisible:false,
      options: [{
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
      },
    ],
    checkItem:[
      {
        code:'GJDQDM',
        label:'国家地区'
      },
      {
        code:'XBDM',
        label:'性别'
      },
      {
        code:'RS',
        label:'户室人数'
      },
      {
        code:'SFDM',
        label:'身份类型'
      },
    ],
    checkedList:[],
    checkItemReal:[],
    tableHead:[
      {
        code:'GJDQ_DESC',
        label:'国家地区'
      },
      {
        code:'XBDM_DESC',
        label:'性别'
      },
      {
        code:'RS',
        label:'户室人数'
      },
      {
        code:'SFDM_DESC',
        label:'身份类型'
      },
    ],
    num:0,
    multipleSelection:[],
    selectionAll:[],
    yuid:[],
    selectionReal:[],

    userCode:'',
    userName:'',
    orgCode:'',
    orgName:'',
    token:'',
    juState:'',
    }
  },
  mounted() {
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
   this.$store.dispatch("getGjdq");
   this.$store.dispatch("getXB");
   this.$store.dispatch("getSflx");
  },
  watch:{
    falg:function(newVal,oldVal){
      this.multipleSelection=[];
      this.selectionAll=[];
      this.selectionReal=[];
    },
    checkedList:{
      handler(newVal, oldVal) {
        console.log(newVal,oldVal);
        if(!(newVal.toString()==oldVal.toString())){
          this.multipleSelection=[];
          this.selectionAll=[];
          this.selectionReal=[];
        }
      },
    }
  },
  methods: {
    titleShow(e,el){
      el.target.title = e.label;
    },
    handleChange(val){
      // console.log(val);
    },
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
      if(this.checkedList.length==0){//人员导出
        if(this.selectionAll.length==0){//人员全部导出,无选中的数据
          p={
            "pd":this.pd,
            userCode:this.userCode,
            userName:this.userName,
            orgJB:this.juState,
            orgCode:this.orgCode,
            token:this.token
          }
        }else{//人员部分导出
          this.yuid=[];
          for(var i in this.selectionAll){
            this.yuid.push(this.selectionAll[i].RGUID)
          }
          this.pd.RGUID=this.yuid;
          p={
            "pd":this.pd,
            userCode:this.userCode,
            userName:this.userName,
            orgJB:this.juState,
            orgCode:this.orgCode,
            token:this.token
          }
        }
      }else{//统计导出
        if(this.selectionAll.length==0){//统计全部导出
          p={
            "pd":this.pd,
            "groupList":this.checkedList,
            userCode:this.userCode,
            userName:this.userName,
            orgJB:this.juState,
            orgCode:this.orgCode,
            token:this.token
          }
        }else{//统计部分导出
          p={
            "requestTempList":this.selectionAll,
            "groupList":this.checkedList,
            userCode:this.userCode,
            userName:this.userName,
            orgJB:this.juState,
            orgCode:this.orgCode,
            token:this.token
          }
        }
      }
      this.$api.post(this.Global.aport5+'/nanMinController/export',p,
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
        link.setAttribute('download', '难民综合分析列表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
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
    open(content) {
      this.$alert(content, '提示', {
        confirmButtonText: '确定',
      });
    },
    getList(currentPage, showCount, pd) {
   // if(this.pd.XM!=undefined || this.pd.XBDM!=undefined || this.pd.HZHM!=undefined){
   //   this.falg=false;
   //   this.disa=true;
   // }else {
   //    this.disa=false;
   // }
     //  if(this.pd0.beginCS!=undefined && this.pd0.endCS!=undefined && this.pd0.beginCS!=null && this.pd0.endCS!=null){
     //    this.pd.CSRQ_DateRange.begin=this.pd0.beginCS;
     //    this.pd.CSRQ_DateRange.end=this.pd0.endCS;
     //  }else if(this.pd0.beginCS==null && this.pd0.endCS==null){
     //      this.pd.ZCRQ_DateRange={};
     //   }else{
     //      this.open("出生日期开始时间和结束时间都不能为空！");return ;
     //  }
     //  if(this.pd0.beginZC!=undefined && this.pd0.endZC!=undefined && this.pd0.beginZC!=null && this.pd0.endZC!=null){
     //    this.pd.ZCRQ_DateRange.begin=this.pd0.beginZC;
     //    this.pd.ZCRQ_DateRange.end=this.pd0.endZC;
     //  }else if(this.pd0.beginZC==null && this.pd0.endZC==null){
     //    this.pd.ZCRQ_DateRange={};
     // }else{
     //      this.open("注册日期的开始时间和结束时间都不能为空！");return ;
     //  }
      this.pd.CSRQ_DateRange.begin=this.pd0.beginCS;
      this.pd.CSRQ_DateRange.end=this.pd0.endCS;
      this.pd.ZCRQ_DateRange.begin=this.pd0.beginZC;
      this.pd.ZCRQ_DateRange.end=this.pd0.endZC;
      if(this.rs!=0)
      {
        this.pd.RS=this.rs;
      }else{
        if(this.pd.hasOwnProperty('RS')){
          delete this.pd.RS
        }
      }
      this.checkItemReal=[];
      for(var i=0;i<this.checkedList.length;i++){
        for(var j=0;j<this.checkItem.length;j++){
          if(this.checkedList[i] == this.checkItem[j].code){
            this.checkItemReal.push(this.checkItem[j])
          }
        }
      }
      if(pd.hasOwnProperty('RGUID')){
        delete pd['RGUID']
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "orderBy":'ZCRQ',
        "orderType":'DESC',
        "groupList":this.checkedList,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };

      this.$api.post(this.Global.aport5+'/nanMinController/getCount', p,
        r => {
          if(r.data.isFenLei=="true"){
            this.falg=true;
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
            this.ALLResult=r.data.totalAllResult;
            this.configHeader=[];
            let _this = this;
            for(var i=0;i<_this.checkItemReal.length;i++){
              var obj={};
              for(var j=0;j<_this.tableHead.length;j++){
                if(_this.tableHead[j].label==_this.checkItemReal[i].label){
                  obj.code=_this.tableHead[j].code;
                  obj.label=_this.tableHead[j].label;
                }
              }
              _this.configHeader.push(obj);
            }
            if(this.selectionReal.length==0){//声明一个数组对象
              this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
            }
            this.$nextTick(()=>{
              this.multipleSelection=[];
              for(var a=0;a<this.tableData.length;a++){
                for(var b=0;b<this.selectionAll.length;b++){
                  // console.log('======',this.chargeObjectEqual(this.tableData[a],this.selectionAll[b]))
                  if(this.chargeObjectEqual(this.tableData[a],this.selectionAll[b])){
                    // console.log(this.chargeObjectEqual(this.tableData[a],this.selectionAll[b]))
                    this.$refs.multipleTable.toggleRowSelection(this.tableData[a],true);
                  }
                }
              }
            })
          }else {
            this.falg=false;
            var url = this.Global.aport5 + "/nanMinController/getCount";
            this.$api.post(url, p,
              r => {
                if (r.success) {
                   this.tableData = r.data.resultList;
                   this.TotalResult = r.data.totalResult;
                   this.ALLResult=r.data.totalAllResult;
                   if(this.selectionReal.length==0){//声明一个数组对象
                     this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
                   }
                   this.$nextTick(()=>{
                     this.multipleSelection=[]
                     for(var i=0;i<this.tableData.length;i++){
                       for(var j=0;j<this.selectionAll.length;j++){
                         if(this.tableData[i].RGUID==this.selectionAll[j].RGUID){
                           // console.log(this.tableData[i].RGUID,this.selectionAll[j].RGUID,'this.selectionAll======',this.selectionAll)
                           this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                         }
                       }
                     }
                   })
                }
              });
          }
        })
    },
    getInfo(key){
      switch (key) {
        case 'count_DESC':
          return  "分析结果";
          break;
        case 'GJDQ_DESC':
          return  "国家地区";
          break;
        case 'RS':
          return  "户室人数";
          break;
        case 'SFDM_DESC':
          return  "身份类型";
          break;
        case 'XBDM_DESC':
          return  "性别";
          break;
        default:
        break;

      }

    },

  }
}
</script>

<style scoped>

</style>
<style>
.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
</style>
