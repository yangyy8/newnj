<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
              <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.GJDQ" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
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
                       v-model="pd.SLRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.SLRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">证件种类：</span>
                  <el-select v-model="pd.XCZJZL" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.zjzl"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text" title="所持签证种类">所持签证种类：</span>
                  <el-select v-model="pd.XCQZZL" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.rjqzzl"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text" title="申请签证种类">签证种类：</span>
                    <el-select v-model="pd.QZZL" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjqzzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">办证类别：</span>
                    <el-select v-model="pd.BZLX" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.bzlb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col> -->

                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">申请类别：</span>
                    <el-select v-model="pd.SQLB" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.sqlb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">身份：</span>
                    <el-select v-model="pd.SF" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.sf"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text" title="人员地域类别">人员地域类别：</span>
                    <el-select v-model="pd.RYDYLB" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rydylb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col> -->
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XCZJHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">签证号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.SBQZHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text" title="申请事由">申请事由：</span>
                    <el-select v-model="pd.SQSY" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjsy"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
              </el-row>
             </el-col>
                <el-col :span="2" class="down-btn-area">
                  <el-button type="success" size="small" class="mb-15" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
                  <!-- <el-button type="" size="small" @click="" class="mb-15"> 重置</el-button> -->
                  <el-button type="primary"  size="small" class="t-ml0" @click="download">导出</el-button>
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
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'QZRYXX',query:{row:scope.row,queryPd:pd}})"></el-button>
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
               prop="GJDQ_DESC"
               label="国家地区">
             </el-table-column>
             <el-table-column
               prop="CSRQ"
               label="出生日期">
             </el-table-column>
             <el-table-column
               prop="XCZJHM"
               label="证件号码">
             </el-table-column>
             <el-table-column
               prop="QZZL_DESC"
               label="签证种类">
             </el-table-column>
             <el-table-column
               prop="SBQZHM"
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
              :current-page.sync ="CurrentPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="TotalResult">
            </el-pagination>
          </div>
        </div>
        </div>
     <div class="bj">
       <!-- 留学生信息详情 -->
       <el-dialog title="证件信息详情" :visible.sync="qzsqDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
           <QZXXTJXQ  :xid="xid" :random="random"></QZXXTJXQ>
           <div slot="footer" class="dialog-footer">
             <el-button @click="qzsqDialogVisible = false" size="small">取 消</el-button>
           </div>
      </el-dialog>
    </div>

      </div>

    </template>
    <script>
    import QZXXTJXQ from '../../../common/qzxxtj_xq'
    export default {
      components:{QZXXTJXQ},
      data() {
        return {
          radio1:'0',
          radio2:'0',
          typet:'1',
          CurrentPage: 1,
          pageSize: 10,
          TotalResult: 0,
          pd: {
            SLRQ_DateRange:{begin:'',end:'',dataType:'date'},
            QZQFJG_Like:'3201'
          },
          imagess:[],
          imgshow1:false,
          imgshow2:true,
          shm:false,
          lg:false,
          type:1,
          xid:'',
          random:'',
          qzsqDialogVisible:false,
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
              code:'GJDQ',
              label:'国家地区'
            },
            {
              code:'XCZJZL',
              label:'证件种类'
            },
            {
              code:'XCQZZL',
              label:'所持签证种类'
            },
            {
              code:'QZZL',
              label:'签证种类'
            },
            {
              code:'SQSY',
              label:'申请事由'
            },
            {
              code:'SQLB',
              label:'申请类别'
            },
            {
              code:'BZLX',
              label:'办证类型'
            },
            {
              code:'SF',
              label:'身份'
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
              code:'XCZJZL_DESC',
              label:'证件种类'
            },
            {
              code:'XCQZZL_DESC',
              label:'所持签证种类'
            },
            {
              code:'QZZL_DESC',
              label:'签证种类'
            },
            {
              code:'SQSY_DESC',
              label:'申请事由'
            },
            {
              code:'SQLB_DESC',
              label:'申请类别'
            },
            {
              code:'BZLX_DESC',
              label:'办证类型'
            },
            {
              code:'SF_DESC',
              label:'身份'
            },
          ],

          configHeader:[],
          pd0:{},
          form:{},
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
         this.$store.dispatch("getGjdq");
         this.$store.dispatch("getZjzl");
         this.$store.dispatch("getQzzl");
         this.$store.dispatch("getRjqzzl");
         this.$store.dispatch("getRjsy");
         this.$store.dispatch("getSf");
         this.$store.dispatch("getBzlb");
         this.$store.dispatch("getSqsy");
         this.$store.dispatch("getRydylb");
         this.$store.dispatch("getSqqzzl");
         this.$store.dispatch("getSqlb");
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
          let p = {
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": pd,
            "groupList":this.checkedList,
            userCode:this.userCode,
            userName:this.userName,
            orgJB:this.juState,
            orgCode:this.orgCode,
            token:this.token
          };
          this.$api.post(this.Global.aport5+'/esFnvisasController/getCount', p,
            r => {
              if(r.data.isFenLei==true){//统计列表
                this.falg=true;
                this.tableData = r.data.resultList;
                this.TotalResult = r.data.totalResult;
                this.totalAllResult = r.data.totalAllResult;
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
                var url = this.Global.aport5 + "/esFnvisasController/getResultListByParams";
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
              }
            })
        },
        details(i) {
          this.random=new Date().getTime();
          this.xid=i;
          this.qzsqDialogVisible = true;
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
