<template lang="html">
  <!-- 留学生预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">中文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">预警时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.BJSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.BJSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJ" filterable clearable multiple collapse-tags default-first-option placeholder="请选择"  size="small" class="input-input">
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
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="pd.ZJZL" filterable clearable multiple collapse-tags default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zjzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">性别：</span>
                    <el-select v-model="pd.XB" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.xb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">签证种类：</span>
                    <el-select v-model="pd.QZZL" filterable clearable multiple collapse-tags default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjqzzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">签证号码：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="pd.QZHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">处理状态：</span>
                  <el-select v-model="pd.CLZT" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.clzt"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="24" :lg="24"   class="input-item" v-if="rulesTotal!=0">
                   <span class="input-text" style="width: 7.3%;">分类标签：</span>
                   <el-radio-group v-model="ruleType">
                      <el-radio :label="item.RULE_NAME" v-for="(item,ind) in rules" :key="ind" @change="rulesKey(item.RULE_Map,item.RULE_Map_notIn)">{{item.RULE_NAME}}</el-radio>
                    </el-radio-group>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  class="t-mb" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
          <el-button type="success" size="small"  class="t-ml0" @click="download">导出</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">预警信息列表</div>

      <el-table
           :data="tableData"
           border
           ref="multipleTable"
           :highlight-current-row="true"
           style="width: 100%"
           @select="selectfn"
           @selection-change="handleSelectionChange">
           <el-table-column
             type="selection"
             width="55">
           </el-table-column>
           <el-table-column
             prop="ZWXM"
             label="姓名">
             <template slot-scope="scope">
               <span>{{getXM(scope.row.ZWXM,scope.row.YWXM)}}</span>
             </template>
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
           <el-table-column
             prop="QZZL_DESC"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="QZHM"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="BJSJ"
             label="预警时间">
           </el-table-column>
           <el-table-column
             prop="CLZT_DESC"
             label="处理状态">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
               <div>
                 <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit-outline" @click="getEdit(scope.row)"></el-button>
                 <el-button type="text"  class="a-btn"  title="设为重点人员"  icon="iconfont el-icon-yy-jiaoseyonghu" @click="adds(scope.row);form={};"></el-button>
               </div>
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
          :current-page.sync ="CurrentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="设为重点人员" :visible.sync="addsDialogVisible" width="600px" >
      <el-form :model="form" ref="addForm">
        <el-row :gutter="1"  class="mb-6">
            <el-col :span="24" class="input-item" data-scope="demo" data-name="RULE" data-type="input" v-validate-easy="[['required']]">
              <span class="input-text">列管依据：</span>
                <el-select v-model="form.LGYJ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.lgyj"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                 </el-select>
            </el-col>
            <el-col :span="24" class="input-item" data-scope="demo" data-name="RULE" data-type="input" v-validate-easy="[['required']]">
              <span class="input-text">管理级别：</span>
              <el-select v-model="form.GLJB" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gljb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                 </el-select>
            </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addItem('addForm')" size="small">确 定</el-button>
        <el-button @click="qxItem('addForm')" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>

</template>
<script>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      pd0:{BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      pd1:{BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      pd2:{BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      pd3:{BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      pd4:{BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      pd5:{BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      pd6:{BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      pd7:{BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      pd8:{BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]},
      options: this.pl.ps,
      tableData: [],
      type:'',
      tabList:[],
      ruleType:{},
      ruleMap:null,
      ruleNo:null,
      keyHis:{},
      pdNotIn:{
        // ZJZL:["ZJZL_11","ZJZL_12"],
        // QZZL:["QZZL_05","QZZL_20"]
        // ZJZL:["11","12"],
        // QZZL:["05","20"]
      },
      rules:[],
      rulesTotal:0,
      addsDialogVisible:false,
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      form:{},
      addlg:{},
      multipleSelection0:[],
      selectionAll0:[],
      selectionReal0:[],

      multipleSelection1:[],
      selectionAll1:[],
      selectionReal1:[],

      multipleSelection2:[],
      selectionAll2:[],
      selectionReal2:[],

      multipleSelection3:[],
      selectionAll3:[],
      selectionReal3:[],

      multipleSelection4:[],
      selectionAll4:[],
      selectionReal4:[],

      multipleSelection5:[],
      selectionAll5:[],
      selectionReal5:[],

      multipleSelection6:[],
      selectionAll6:[],
      selectionReal6:[],

      multipleSelection7:[],
      selectionAll7:[],
      selectionReal7:[],

      multipleSelection8:[],
      selectionAll8:[],
      selectionReal8:[],
      yuid:[],
      tabList:this.$store.state.tabList,

    }
  },
  watch:{
    pd:{
        handler(newVal, oldVal){
          console.log(newVal,oldVal,this.type);
          if(this.type==5){
            this.pd5=newVal;
          }else if(this.type==3){
            this.pd3=newVal;
          }else if(this.type==0){
            this.pd0=newVal;
          }else if(this.type==1){
            this.pd1=newVal;
          }else if(this.type==2){
            this.pd2=newVal;
          }else if(this.type==4){
            this.pd4=newVal;
          }else if(this.type==6){
            this.pd6=newVal;
          }else if(this.type==7){
            this.pd7=newVal;
          }else if(this.type==8){
            this.pd8=newVal;
          }
        },
        deep:true
    }
  },
  activated(){
    this.Global.indexstate=1;
    this.selectionAll5=[];
    this.selectionReal5=[];

    this.selectionAll3=[];
    this.selectionReal3=[];

    this.selectionAll0=[];
    this.selectionReal0=[];

    this.selectionAll1=[];
    this.selectionReal1=[];

    this.selectionAll2=[];
    this.selectionReal2=[];

    this.selectionAll4=[];
    this.selectionReal4=[];

    this.selectionAll6=[];
    this.selectionReal6=[];

    this.selectionAll8=[];
    this.selectionReal8=[];
    this.rulesTotal=0;
    this.type=this.$route.query.type;
    // this.pd={BJSJ_DateRange:{begin:'',end:''},GJ:[],ZJZL:[],QZZL:[]};
    // if(this.type==5){
    //   this.pd = this.pd5;
    // }else if(this.type==3){
    //   this.pd = this.pd3;
    // }else if(this.type==0){
    //   this.pd = this.pd0;
    // }else if(this.type==1){
    //   this.pd = this.pd1;
    // }else if(this.type==2){
    //   this.pd = this.pd2;
    // }else if(this.type==4){
    //   this.pd = this.pd4;
    // }else if(this.type==6){
    //   this.pd = this.pd6;
    // }else if(this.type==7){
    //   this.pd = this.pd7;
    // }else if(this.type==8){
    //   this.pd = this.pd8;
    // }
    // console.log('this.type',this.type)
     if(this.type!=undefined){
       this.$store.commit('getType',this.type)
       this.getMXLX(this.type);
       this.getRules();
       this.ruleType = this.keyHis;
     }else {
       this.getMX(this.$store.state.type);
       this.getRules();
       this.ruleType = this.keyHis;
     }

     let _this = this;
     setTimeout(function(){
       console.log('_this.ruleType',_this.ruleType)
       _this.ruleType = _this.keyHis;
       _this.getList(_this.CurrentPage, _this.pageSize, _this.pd,_this.ruleMap,_this.ruleNo);
     },1000)
  },
  mounted() {
    this.Global.indexstate=1;
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getClzt');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getRjqzzl');
    this.$store.dispatch('getLgyj');
    this.$store.dispatch('getGljb');
    this.userCode=this.$store.state.uname;
    this.userName=this.$store.state.uid;
    this.orgCode=this.$store.state.orgname;
    this.orgName=this.$store.state.orgid
  },
  methods: {
    handleSelectionFilter(arrReal,arr,mul) {
      // console.log('this.multipleSelection',mul)
      arrReal.splice(this.CurrentPage-1,1,mul);
      // console.log('this.selectionReal',arrReal);
      arr=[];
      for(var i=0;i<arrReal.length;i++){
        if(arrReal[i]){
          for(var j=0;j<arrReal[i].length;j++){
            arr.push(arrReal[i][j])
          }
        }
      }
      // console.log('this.selectionAll',arr);
      if(this.type==5){this.selectionReal5=arrReal;this.selectionAll5=arr;this.multipleSelection5=mul}
      if(this.type==3){this.selectionReal3=arrReal;this.selectionAll3=arr;this.multipleSelection3=mul}
      if(this.type==2){this.selectionReal2=arrReal;this.selectionAll2=arr;this.multipleSelection2=mul}
      if(this.type==1){this.selectionReal1=arrReal;this.selectionAll1=arr;this.multipleSelection1=mul}
      if(this.type==0){this.selectionReal0=arrReal;this.selectionAll0=arr;this.multipleSelection0=mul}
      if(this.type==4){this.selectionReal4=arrReal;this.selectionAll4=arr;this.multipleSelection4=mul}
      if(this.type==6){this.selectionReal6=arrReal;this.selectionAll6=arr;this.multipleSelection6=mul}
      if(this.type==8){this.selectionReal8=arrReal;this.selectionAll8=arr;this.multipleSelection8=mul}
    },
    handleSelectionChange(val){},
    selectfn(val,b){
      if(this.type==5){
        this.multipleSelection5 = val;
        this.handleSelectionFilter(this.selectionReal5,this.selectionAll5,this.multipleSelection5)
      }
      if(this.type==3){
        this.multipleSelection3 = val;
        this.handleSelectionFilter(this.selectionReal3,this.selectionAll3,this.multipleSelection3)
      }
      if(this.type==0){
        this.multipleSelection0 = val;
        this.handleSelectionFilter(this.selectionReal0,this.selectionAll0,this.multipleSelection0)
      }
      if(this.type==1){
        this.multipleSelection1 = val;
        this.handleSelectionFilter(this.selectionReal1,this.selectionAll1,this.multipleSelection1)
      }
      if(this.type==2){
        this.multipleSelection2 = val;
        this.handleSelectionFilter(this.selectionReal2,this.selectionAll2,this.multipleSelection2)
      }
      if(this.type==4){
        this.multipleSelection4 = val;
        this.handleSelectionFilter(this.selectionReal4,this.selectionAll4,this.multipleSelection4)
      }
      if(this.type==6){
        this.multipleSelection6 = val;
        this.handleSelectionFilter(this.selectionReal6,this.selectionAll6,this.multipleSelection6)
      }
      if(this.type==8){
        this.multipleSelection8 = val;
        this.handleSelectionFilter(this.selectionReal8,this.selectionAll8,this.multipleSelection8)
      }
    },
    download(){
      let p={};
      if(this.type==5){
        if(this.selectionAll5.length==0){//全部导出
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC'
          }
        }else{//导出选中
          this.yuid=[];
          for(var i in this.selectionAll5){
            this.yuid.push(this.selectionAll5[i].YJID)
          };
          console.log('============',this.selectionAll5,this.yuid)
          this.pd.YJID=this.yuid;
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC',
          }
        }
      }else if(this.type==3){
        if(this.selectionAll3.length==0){//全部导出
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC'
          }
        }else{//导出选中
          this.yuid=[];
          for(var i in this.selectionAll3){
            this.yuid.push(this.selectionAll3[i].YJID)
          };
          this.pd.YJID=this.yuid;
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC',
          }
        }
      }else if(this.type==0){
        if(this.selectionAll0.length==0){//全部导出
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC'
          }
        }else{//导出选中
          this.yuid=[];
          for(var i in this.selectionAll0){
            this.yuid.push(this.selectionAll0[i].YJID)
          };
          this.pd.YJID=this.yuid;
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC',
          }
        }
      }else if(this.type==1){
        if(this.selectionAll1.length==0){//全部导出
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC'
          }
        }else{//导出选中
          this.yuid=[];
          for(var i in this.selectionAll1){
            this.yuid.push(this.selectionAll1[i].YJID)
          };
          this.pd.YJID=this.yuid;
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC',
          }
        }
      }else if(this.type==2){
        if(this.selectionAll2.length==0){//全部导出
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC'
          }
        }else{//导出选中
          this.yuid=[];
          for(var i in this.selectionAll2){
            this.yuid.push(this.selectionAll2[i].YJID)
          };
          this.pd.YJID=this.yuid;
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC',
          }
        }
      }else if(this.type==4){
        if(this.selectionAll4.length==0){//全部导出
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC'
          }
        }else{//导出选中
          this.yuid=[];
          for(var i in this.selectionAll4){
            this.yuid.push(this.selectionAll4[i].YJID)
          };
          this.pd.YJID=this.yuid;
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC',
          }
        }
      }else if(this.type==6){
        if(this.selectionAll6.length==0){//全部导出
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC'
          }
        }else{//导出选中
          this.yuid=[];
          for(var i in this.selectionAll6){
            this.yuid.push(this.selectionAll6[i].YJID)
          };
          this.pd.YJID=this.yuid;
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC',
          }
        }
      }else if(this.type==8){
        if(this.selectionAll8.length==0){//全部导出
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC'
          }
        }else{//导出选中
          this.yuid=[];
          for(var i in this.selectionAll8){
            this.yuid.push(this.selectionAll8[i].YJID)
          };
          this.pd.YJID=this.yuid;
           p={
            "pd":this.pd,
            "orderBy":'BJSJ',
            "orderType":'DESC',
          }
        }
      }

      this.$api.post(this.Global.aport4+'/warningInfoController/exportByMxLx',p,
        r =>{
          if(this.type==5){this.downloadM(r,'布控预警报表')}
          if(this.type==3){this.downloadM(r,'临住核查报表')}
          if(this.type==0){this.downloadM(r,'留学生市外临住报表')}
          if(this.type==1){this.downloadM(r,'留学生涉恐报表')}
          if(this.type==2){this.downloadM(r,'留学生市出入境报表')}
          if(this.type==4){this.downloadM(r,'难民和需求庇护者提醒报表')}
          if(this.type==6){this.downloadM(r,'留学生录取未报到报表')}
          if(this.type==8){this.downloadM(r,'涉恐国家人员信息报表')}
        },e=>{},{},'blob')
    },
    downloadM (data,name) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    getRules(){
      if(this.pd.MXLX=="LZ_HC"){
        this.pd2.MXLX=this.pd.MXLX
        this.$api.post(this.Global.aport4+'/warningSortRuleController/selectByMXLX',{pd:this.pd2},
        r =>{
          if(r.success){
            this.rules=r.data.resultList;
            this.rulesTotal=r.data.totalResult;
          }
        })
      }
    },
    rulesChange(){
       // this.getList(this.CurrentPage, this.pageSize,this.pd);
    },
    rulesKey(map,notIn){
      this.keyHis = this.ruleType;
      this.ruleMap = map;
      this.ruleNo = notIn;
      this.getList(this.CurrentPage, this.pageSize,this.pd,this.ruleMap,this.ruleNo);
    },
    getMXLX(type){
      console.log(parseInt(type))
      switch (parseInt(type)) {
      case 0:
          this.pd=this.pd0;
          this.pd.MXLX="LXS_SWLZYJ";//留学生市外临住预警
          break;
      case 1:
        this.pd=this.pd1;
        this.pd.MXLX="LXS_SKYJ";//留学生涉恐预警
        break;
      case 2:
       this.pd=this.pd2;
       this.pd.MXLX="LXS_CRJTX";//留学生出入境提醒
        break;
      case 3:
        this.pd=this.pd3;
        this.pd.MXLX="LZ_HC";//临住核查预警
        break;
      case 4:
          this.pd=this.pd4;
          this.pd.MXLX="CZ_NMYJ";//难民
          break;
      case 5:
          this.pd=this.pd5;
          this.pd.MXLX="BKYJ";//布控预警
          console.log(this.pd,this.pd.MXLX);
          break;
      case 6:
          this.pd=this.pd6;
          this.pd.MXLX="LXS_WBDYJ";//留学生录取未报到预警
          break;
      case 7:
          this.pd=this.pd7;
          this.pd.MXLX="QZ_HCYJ";//受理、签发信息核查预警
          break;
      case 8:
          this.pd=this.pd8;
          this.pd.MXLX="ASJ_SKGJRY";//涉恐国家人员预警
          break;
      default:
         break;
       }

       console.log('this.pd.MXLX',this.pd.MXLX);
      if(this.pd.MXLX!=undefined){
       this.getList(this.CurrentPage, this.pageSize, this.pd,this.ruleMap,this.ruleNo);
       }
    },
    getMX(mm){
      console.log('this.Global.tabLists',this.Global.tabLists);
      this.tabList=this.Global.tabLists;
      if(this.Global.tabLists==undefined){
        this.close1(0);
      }else {
        this.close1(this.Global.tabLists.length-1);
      }
      switch (mm) {
      case '0':
          //留学生市外临住预警
          this.$router.push({name:'LXSSWLZ'});
          break;
       case '1':
       //留学生涉恐预警
       this.$router.push({name:'LXSSKYJ'});
        break;
      case '2':
       //留学生出入境提醒
       this.$router.push({name:'LXSCRJYJ'});
        break;
      case '3':
          //临住核查预警
          this.$router.push({name:'LZHCYJ'});
        break;
      case '4':
         //难民
          this.$router.push({name:'NMXQPHZYJ'});
          break;
      case '5':
         //布控预警
           this.$router.push({name:'ZBKYJ'});
          break;
      case '6':
          //留学生录取未报到预警
          this.$router.push({name:'LXSWBDYJ'});
          break;
      case '7':
           //受理、签发信息核查预警
           this.$router.push({name:'SLQFXXYJ'});
          break;
      case '8':
          //涉恐国家人员预警
          this.$router.push({name:'SKGJRYXXYJ'});
          break;
      default:
         break;
       }

    },
    tabClick(i){
      console.log(i)
      this.$router.push({name:i.name})
    },
    close1(index) {
      console.log('index',index);
      this.tabList.splice(index, 1);
      if (index > 0) {
        this.tabClick(this.tabList[index - 1])
      }
      if (index == 0) {
        if (this.tabList.length != 0) {
          this.tabClick(this.tabList[index])
        } else {
          this.$router.push({name:'Home'})
          this.routeList=[]
        }

      }
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd,this.ruleMap,this.ruleNo);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd,this.ruleMap,this.ruleNo);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage, showCount, pd,map,notIn) {
      if(pd.hasOwnProperty('YJID')){
        delete pd['YJID']
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "orderBy":'BJSJ',
        "orderType":'DESC'
      };
      if(this.type==3){
        let pdReal={};
        pdReal=Object.assign({},pd,map)
        p.pd=pdReal;
        p.pdNotIn=notIn;
      }
      this.$api.post(this.Global.aport4+'/warningInfoController/getInfoListByMxLx1', p,
        r => {
          if(r.success){
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
            if(this.type==5&&this.selectionReal5.length==0){this.selectionReal5=new Array(Math.ceil(this.TotalResult/showCount))}
            if(this.type==3&&this.selectionReal3.length==0){this.selectionReal3=new Array(Math.ceil(this.TotalResult/showCount))}
            if(this.type==0&&this.selectionReal0.length==0){this.selectionReal0=new Array(Math.ceil(this.TotalResult/showCount))}
            if(this.type==1&&this.selectionReal1.length==0){this.selectionReal1=new Array(Math.ceil(this.TotalResult/showCount))}
            if(this.type==2&&this.selectionReal2.length==0){this.selectionReal2=new Array(Math.ceil(this.TotalResult/showCount))}
            if(this.type==4&&this.selectionReal4.length==0){this.selectionReal4=new Array(Math.ceil(this.TotalResult/showCount))}
            if(this.type==6&&this.selectionReal6.length==0){this.selectionReal6=new Array(Math.ceil(this.TotalResult/showCount))}
            if(this.type==8&&this.selectionReal8.length==0){this.selectionReal8=new Array(Math.ceil(this.TotalResult/showCount))}
            this.$nextTick(()=>{
              if(this.type==5){this.selectionXr(this.tableData,this.selectionAll5,this.multipleSelection5)}
              if(this.type==3){this.selectionXr(this.tableData,this.selectionAll3,this.multipleSelection3)}
              if(this.type==0){this.selectionXr(this.tableData,this.selectionAll0,this.multipleSelection0)}
              if(this.type==1){this.selectionXr(this.tableData,this.selectionAll1,this.multipleSelection1)}
              if(this.type==2){this.selectionXr(this.tableData,this.selectionAll2,this.multipleSelection2)}
              if(this.type==4){this.selectionXr(this.tableData,this.selectionAll4,this.multipleSelection4)}
              if(this.type==6){this.selectionXr(this.tableData,this.selectionAll6,this.multipleSelection6)}
              if(this.type==8){this.selectionXr(this.tableData,this.selectionAll8,this.multipleSelection8)}
            })
          }
        })
    },
    selectionXr(table,arr,mul){
      console.log('this.selectionAll',arr);
      mul=[];
      for(var i=0;i<table.length;i++){
        for(var j=0;j<arr.length;j++){
          if(table[i].YJID==arr[j].YJID){
            console.log(table[i].YJID,arr[j].YJID,table[i].YJID==arr[j].YJID)
            this.$refs.multipleTable.toggleRowSelection(table[i],true);
          }
        }
      }
    },
    getEdit(n){

      if(this.type==4){
      this.$router.push({name:'NMXQPHZYJ_XQ',query:{row:n}});
      }else {
      this.$router.push({name:'LXSXXGLYJ_XQ',query:{row:n}});
      }
    },
    getXM(zw,yw){

      if(zw!=undefined && yw!=undefined){
        return yw+"("+zw+")";
      }else {
        if(zw!=undefined){
          return zw;
        }
        if(yw!=undefined){
          return yw;
        }
      }
    },
    adds(i){
        this.addlg={};
        this.addlg={
          ZJHM:i.ZJHM,
          GJDQ:i.GJ,
        }
         let p={
           pd:{
             ZJHM:i.ZJHM,
             GJDQ:i.GJ,
           }
         }
        this.$api.post(this.Global.aport4+'/zDRYController/isLGRY', p,
         r => {
           if(r.success){
             if(r.data==1){
               this.addsDialogVisible=true;
             } else if(r.data==0){
                this.$message('该人员已经被列管');
             } else if(r.data==2){
                this.$confirm('该人员有常住信息，是否设为常住列管', {
                confirmButtonText: '是',
                cancelButtonText: '否',
                type: 'warning'
              }).then(() => {
                  this.addsDialogVisible=true;
              })
            }
          }
        })
     },
      addItem(addForm){
        let p={
          pd:{
            ZJHM:this.addlg.ZJHM,
            GJDQ:this.addlg.GJDQ,
            LGYJ:this.form.LGYJ,
            GLJB:this.form.GLJB,
          },
           userName:this.userName,
           userCode:this.userCode,
           orgCode:this.orgCode,
           orgName:this.orgName
         }
        this.$api.post(this.Global.aport4+'/zDRYController/setZdry', p,
         r => {
           if(r.success){
                 this.$message({
                 message: '保存成功！',
                 type: 'success'
               });
                this.addsDialogVisible=false;
               }else{
                 console.log('==========')
                 this.$message({
                   message: r.message,
                   type: 'warning'
                 });
               }
         })
     },
      qxItem(addForm){
          this.addsDialogVisible = false;
    },
  }
}
</script>
<style scoped>

</style>
