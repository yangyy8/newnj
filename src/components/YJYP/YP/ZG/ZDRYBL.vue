<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
              <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">身份证号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.SFZH" class="input-input"></el-input>
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
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.CSRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.CSRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">办证类别：</span>
                    <el-select v-model="pd.SQLB" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.bzlb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">户籍地：</span>
                  <el-select v-model="pd.HKSZD" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.hjd"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生地：</span>
                  <el-select v-model="pd.CSD" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.xzqh"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">受理日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.SPRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.SPRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
              </el-row>
             </el-col>
                <el-col :span="2" class="down-btn-area">
                  <el-button type="success" size="small" class="mb-15" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
                  <!-- <el-button type="" size="small" @click="" class="mb-15"> 重置</el-button> -->
                  <!-- <el-button type="primary"  size="small" class="t-ml0" @click="download">导出</el-button> -->
                </el-col>
              </el-row>
        </div>
        <div class="yycontent">
          <div class="yylbt mb-15">统计类别</div>
          <div class="mb-15">
            <el-checkbox-group v-model="checkedList">
              <el-checkbox v-for="item in checkItem" :label="item.code" :key="item.code">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div v-if="falg">
            <el-table
               ref="multipleTable"
               :data="tableData"
               border
               @select="selectfn"
               style="width: 100%"
               @header-click="titleShow">
               <!-- <el-table-column
                 type="selection"
                 width="55">
               </el-table-column> -->
               <el-table-column
                   v-for="(val,i) in configHeader"
                   :key="i"
                   :prop="val.code"
                   :label="val.label">
               </el-table-column>
               <el-table-column
                 prop="COUNT"
                 label="统计数量">
               </el-table-column>
               <el-table-column
                 label="操作" width="100">
                 <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit-outline" @click="$router.push({name:'ZDRYRYXX',query:{row:scope.row,queryPd:pd}})"></el-button>
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
            <div class="totalClass">
              总数量：<span>{{totalAllResult}}</span>
            </div>
        </div>
        <div v-else>
          <el-table
             ref="multipleTable"
             :data="tableData"
             border
             @select="selectfn"
             style="width: 100%"
             @header-click="titleShow">
             <!-- <el-table-column
               type="selection"
               width="55">
             </el-table-column> -->
             <!-- <el-table-column
               prop="ZWXM"
               label="申请编号">
             </el-table-column> -->
             <el-table-column
               prop="SFZH"
               label="身份证号">
             </el-table-column>
             <el-table-column
               prop="ZWXM"
               label="姓名">
             </el-table-column>
             <el-table-column
               prop="XB_DESC"
               label="性别">
             </el-table-column>
             <el-table-column
               prop="CSRQ"
               label="出生日期">
             </el-table-column>
             <el-table-column
               prop="QZZL_DESC"
               label="证件种类">
             </el-table-column>
             <el-table-column
               prop="HKSZD_DESC"
               label="户籍地">
             </el-table-column>
             <el-table-column
               prop="SQLB_DESC"
               label="办证类别">
             </el-table-column>
             <el-table-column
               prop="CSD_DESC"
               label="出生地">
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
              :current-page.sync ="CurrentPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="TotalResult">
            </el-pagination>
          </div>
        </div>
        </div>
     <div class="bj">
       <el-dialog title="详情" :visible.sync="detailsqDialogVisible"  custom-class="big_dialog combine" :append-to-body="false" :modal="false">
         <el-form  ref="detailForm">
           <el-row :gutter="1"  class="mb-6">
               <el-col :span="8" class="input-item">
                 <span class="input-text">申请编号：</span>
                 <span class="input-input detailinput">{{detailForm.RGUID}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="input-text">身份证号：</span>
                <span class="input-input detailinput">{{detailForm.SFZH}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="input-text">姓名：</span>
                 <span class="input-input detailinput">{{detailForm.ZWXM}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="input-text">性别：</span>
                <span class="input-input detailinput">{{detailForm.XB_DESC}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="input-text">出生日期：</span>
                <span class="input-input detailinput">{{detailForm.CSRQ}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="input-text">证件种类：</span>
                <span class="input-input detailinput">{{detailForm.ZJZL_DESC}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="input-text">户籍地：</span>
                <span class="input-input detailinput">{{detailForm.HKSZD_DESC}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="input-text">出生地：</span>
                 <span class="input-input detailinput">{{detailForm.CSD_DESC}}</span>
               </el-col>
           </el-row>
         </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsqDialogVisible = false" size="small">取 消</el-button>
           </div>
      </el-dialog>
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
          pd: {
            SPRQ_DateRange:{begin:'',end:'',dataType:'date'},
            CSRQ_DateRange:{begin:'',end:'',dataType:'date'},
          },
          detailsqDialogVisible:false,
          detailForm:{},
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
          tableData: [],
          checkItem:[
            {
              code:'SK',
              label:'涉恐'
            },
            // {
            //   code:'FDBZCRJRY',
            //   label:'法定不准出境人员'
            // },
            {
              code:'XB',
              label:'性别'
            },
            {
              code:'SQLB',
              label:'办证类别'
            },
          ],
          checkedList:[],
          checkItemReal:[],
          tableHead:[
            {
              code:'HKSZD_DESC',
              label:'户籍地'
            },
            {
              code:'XB_DESC',
              label:'性别'
            },
            {
              code:'MZ_DESC',
              label:'民族'
            },
            {
              code:'SQLB_DESC',
              label:'办证类别'
            },
          ],

          configHeader:[],
          falg:false,

          multipleSelection:[],
          selectionAll:[],
          yuid:[],
          selectionReal:[],

          totalAllResult:0,
          userCode:'',
          userName:'',
          orgCode:'',
          orgName:'',
          token:'',
          juState:'',
        }
      },
      mounted() {
         this.$store.dispatch("getXB");
         this.$store.dispatch("getHjd");
         this.$store.dispatch("getXzqh");
         this.$store.dispatch("getBzlb");
         this.userCode=this.$store.state.uid;
         this.userName=this.$store.state.uname;
         this.orgName=this.$store.state.orgname;
         this.orgCode=this.$store.state.orgid;
         this.juState=this.$store.state.juState;
         this.token=this.$store.state.token;
      },
      watch:{
        falg:function(newVal,oldVal){
          this.multipleSelection=[];
          this.selectionAll=[];
          this.selectionReal=[];
        },
        checkedList:{
          handler(newVal, oldVal) {
            if(!(newVal.toString()==oldVal.toString())){
              this.multipleSelection=[];
              this.selectionAll=[];
              this.selectionReal=[];
            }
          },
        }
      },
      methods: {
        checkFun(e){
          console.log(e);
           // val = val.replace(/[^\d]/g,'');
        },
        titleShow(e,el){
          el.target.title = e.label;
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
          if(this.tableData.length==0){
             this.$message.error('无可导出数据！');
             return
          }
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
          this.$api.post(this.Global.aport5+'/esFnvisasController/exportFnvisas',p,
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
            link.setAttribute('download', '签证信息统计人员列表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
            document.body.appendChild(link)
            link.click()
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        pageSizeChange(val) {
          this.getList(this.CurrentPage, val, this.pd);
        },
        handleCurrentChange(val) {
          this.getList(val, this.pageSize, this.pd);
        },
        open(content) {
          this.$alert(content, '提示', {
            confirmButtonText: '确定',
          });
        },
        getList(currentPage, showCount, pd) {
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
          if(this.checkedList.length==0){
            let p = {
              "currentPage": currentPage,
              "showCount": showCount,
              "pd": pd,
              'token':this.token
            };
            this.falg=false;
            var url = this.Global.aport11 + "/zdryblqktj/getZdryblqktjDataList";
            this.$api.post(url, p,
              r => {
                if (r.success) {
                 this.tableData = r.data.resultList;
                 this.TotalResult = r.data.totalResult;
                 if(this.selectionReal.length==0){//声明一个数组对象
                   this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
                 }
                 this.$nextTick(()=>{
                   this.multipleSelection=[]
                   for(var i=0;i<this.tableData.length;i++){
                     for(var j=0;j<this.selectionAll.length;j++){
                       if(this.tableData[i].RGUID==this.selectionAll[j].RGUID){
                         this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                       }
                     }
                   }
                 })
                }
              });
          }else{
            let p = {
              "currentPage": currentPage,
              "showCount": showCount,
              "pd": pd,
              "groupList":this.checkedList,
              'token':this.token
            };
            this.falg=true;
            this.$api.post(this.Global.aport11+'/zdryblqktj/getCount', p,
              r => {
                  this.tableData = r.data.resultList;
                  this.TotalResult = r.data.totalResult;
                  this.totalAllResult = r.data.totalAllResult;
                  this.configHeader=[];
                  let _this = this;
                  for(var i=0;i<_this.checkItemReal.length;i++){
                    var obj={};
                    var obj1={};
                    for(var j=0;j<_this.tableHead.length;j++){
                      if(_this.checkItemReal[i].code=='SK'){
                        obj.code="HKSZD_DESC";
                        obj.label="户籍地";
                        obj1.code="MZ_DESC";
                        obj1.label="民族";
                        // _this.configHeader=[{'code':'HKSZD_DESC','label':'户籍地'},{'code':'MZ_DESC','label':'民族'}]
                        _this.configHeader.push(obj1);
                      }
                      if(_this.tableHead[j].label==_this.checkItemReal[i].label){
                        obj.code=_this.tableHead[j].code;
                        obj.label=_this.tableHead[j].label;
                      }
                    }
                    _this.configHeader.push(obj);
                  }
                  var arrAfter=[];
                  var arrReal=[];
                  for(var h=0;h<this.configHeader.length;h++){
                    if(arrAfter.indexOf(this.configHeader[h].code)==-1){
                      arrAfter.push(this.configHeader[h].code);
                      arrReal.push(this.configHeader[h]);
                    }
                  }
                  this.configHeader=arrReal;
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
              })
          }
        },
        details(i) {
          this.detailForm=i;
          this.detailsqDialogVisible=true;
        },
      }
    }
    </script>

    <style scoped>
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
      /* .el-button+.el-button{margin-left: 0!important;} */
      .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
      .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
      .bj .el-dialog__wrapper {
        background: #000;
        background: rgba(0, 0, 0, 0.3);
      }
    </style>
