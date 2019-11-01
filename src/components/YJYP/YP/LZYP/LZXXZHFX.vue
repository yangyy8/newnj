<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
              <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">中文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="input-text">国家地区：</span>
                      <el-select v-model="pd.GJDQ"  multiple collapse-tags filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                        <el-option
                          v-for="item in $store.state.gjdq"
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
                           v-model="pd0.beginCSRQ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy/MM/dd"
                           placeholder="开始时间" >
                        </el-date-picker>
                        <span class="septum">-</span>
                        <el-date-picker
                            v-model="pd0.endCSRQ" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyy/MM/dd"
                            placeholder="结束时间" >
                        </el-date-picker>
                     </div>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                       <span class="input-text">年龄：</span>
                       <el-input placeholder="请输入内容" size="small" v-model="pd.nianLing" class="input-input"></el-input>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">性别：</span>
                      <el-select v-model="pd.XB" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                        <el-option v-for="item in $store.state.xb"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <!-- <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                       <span class="input-text">所属单位：</span>
                       <el-select v-model="pd.SSDW" placeholder="请选择"  multiple collapse-tags filterable clearable default-first-option   size="small" class="input-input">
                         <el-option v-for="item in $store.state.ssdw"
                          :key="item.dm"
                          :label="item.mc"
                          :value="item.dm"
                         >
                         </el-option>
                       </el-select>
                    </el-col> -->

                  <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                        <span class="input-text"> 所属分局：</span>
                        <el-select v-model="pd.SSFJ" filterable clearable default-first-option @change="getSSPCS(pd.SSFJ)" placeholder="请选择"  size="small" class="input-input" :disabled="juState=='1'?false:true">
                          <el-option
                            v-for="(item,ind1) in ssfj"
                            :key="ind1"
                            :label="item.dm+' - '+item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                  <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                        <span class="input-text">派出所：</span>
                          <el-select v-model="pd.SSPCS" filterable clearable default-first-option placeholder="请输入关键字"  size="small" class="input-input" :disabled="juState=='3'">
                         <el-option
                           v-for="(item,ind1) in sspcs"
                           :key="ind1"
                           :label="item.dm+' - '+item.mc"
                           :value="item.dm">
                         </el-option>
                       </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">证件种类：</span>
                      <el-select v-model="pd.ZJZL" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="input-input">
                        <el-option v-for="item in $store.state.zjzl"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">签证种类：</span>
                      <el-select v-model="pd.QZZL" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="input-input">
                        <el-option v-for="item in $store.state.rjqzzl"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">停留事由：</span>
                      <el-select v-model="pd.JLSY" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="input-input">
                        <el-option v-for="item in $store.state.rjsy"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="input-text">停留有效期：</span>
                      <div class="input-input t-flex t-date">
                        <el-date-picker
                           v-model="pd0.beginTLYXQZ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy/MM/dd"
                           placeholder="开始时间" >
                        </el-date-picker>
                        <span class="septum">-</span>
                        <el-date-picker
                            v-model="pd0.endTLYXQZ" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyy/MM/dd"
                            placeholder="结束时间" >
                        </el-date-picker>
                     </div>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">住房类型：</span>
                      <el-select v-model="pd.ZFZL" placeholder="请选择"  multiple collapse-tags filterable clearable default-first-option  size="small" class="input-input">
                        <el-option v-for="item in $store.state.zsxz"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="input-text">入住日期：</span>
                      <div class="input-input t-flex t-date">
                        <el-date-picker
                           v-model="pd0.beginZSRQ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy/MM/dd"
                           placeholder="开始时间" >
                        </el-date-picker>
                        <span class="septum">-</span>
                        <el-date-picker
                            v-model="pd0.endZSRQ" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyy/MM/dd"
                            placeholder="结束时间" >
                        </el-date-picker>
                     </div>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                       <span class="input-text">住宿地址：</span>
                       <el-input placeholder="请输入内容" size="small" v-model="pd.LSDWDZ_Like" class="input-input"></el-input>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item gjTs">
                      <el-checkbox-group v-model="checkedList">
                        <el-checkbox v-for="item in checkItem" :label="item.code" :key="item.code" v-if="item.code=='SHIGUO'||item.code=='SANSHIYIGUO'">{{item.label}}</el-checkbox>
                      </el-checkbox-group>
                    </el-col>
              </el-row>
             </el-col>
                <el-col :span="2" class="down-btn-area">
                  <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
                  <el-button type="primary" size="small"  class="t-ml0" @click="download">导出</el-button>
                  <!-- <el-button type="" size="small" @click="" class="mb-15"> 重置</el-button> -->
                </el-col>
              </el-row>
        </div>
        <div class="yycontent">

          <div class="yylbt mb-15">统计类别</div>
          <div class="mb-15 t-tjCheck">
            <el-checkbox-group v-model="checkedList">
              <el-checkbox v-for="item in checkItem" :label="item.code" :key="item.code" v-if="item.code!='SHIGUO'&&item.code!='SANSHIYIGUO'">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div v-if="falg">
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
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'JWRYXX',query:{row:scope.row,queryPd:pd}})"></el-button>
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
              :current-page:sync="CurrentPage"
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
               style="width: 100%"
               @select="selectfn">
               <el-table-column
                 type="selection"
                 width="55">
               </el-table-column>
               <el-table-column
                 prop="YWXM"
                 label="英文姓名">
               </el-table-column>
               <el-table-column
                 prop="ZWXM"
                 label="中文姓名">
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
                 prop="LSDWDZ"
                 label="留宿单位地址">
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
              :current-page:sync="CurrentPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="TotalResult">
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
    </div>

      </div>

    </template>
    <script>
    import {
      ToArray,sortByKey
    } from '@/assets/js/ToArray.js'
    import LZXX from '../../../common/lzxx_xq'
    export default {
        components:{LZXX},
      data() {
        return {
          tenArr:[],
          tirArr:[],
          rybh:'',
          radio1:'0',
          radio2:'0',
          typet:'1',
          CurrentPage: 1,
          pageSize: 10,
          TotalResult: 0,
          pd: {
              CSRQ_DateRange:{dataType:'date'},
              TLYXQZ_DateRange:{dataType:'date'},
              ZSRQ_DateRange:{dataType:'date'},
            },
          imagess:[],
          imgshow1:false,
          imgshow2:true,
          shm:false,
          lg:false,
          type:1,
          xid:'',
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
        checkItem:[
          {
            code:'GJDQ',
            label:'国家地区'
          },
          {
            code:'ZJZL',
            label:'证件种类'
          },
          {
            code:'SSFJ',
            label:'所属分局'
          },
          {
            code:'SSPCS',
            label:'所属派出所'
          },
          {
            code:'XB',
            label:'性别'
          },
          {
            code:'QZZL',
            label:'签证(注)种类'
          },
          {
            code:'JLSY',
            label:'停留事由'
          },
          {
            code:'SHIGUO',
            label:'十国人员'
          },
          {
            code:'SANSHIYIGUO',
            label:'三十一国人员'
          },
          {
            code:'WAIGSIG',
            label:'外国人和四种人分布'
          },
          {
            code:'ZFZL',
            label:'住房类型'
          },
          {
            code:'LSDWDZ',
            label:'住宿地址'
          },
        ],
        checkedList:[],
        tableHead:[
          {
            code:'GJDQ_DESC',
            label:'国家地区'
          },
          {
            code:'ZJZL_DESC',
            label:'证件种类'
          },
          {
            code:'SSFJ_DESC',
            label:'所属分局'
          },
          {
            code:'SSPCS_DESC',
            label:'所属派出所'
          },
          {
            code:'XB_DESC',
            label:'性别'
          },
          {
            code:'QZZL_DESC',
            label:'签证(注)种类'
          },
          {
            code:'JLSY_DESC',
            label:'停留事由'
          },
          {
            code:'ZFZL_DESC',
            label:'住房类型'
          },
          {
            code:'LSDWDZ',
            label:'住宿地址'
          },
        ],
          tableData: [],
          configHeader:[],
          pd0:{},
          form:{},
          falg:false,
          totalAllResult:0,

          multipleSelection:[],
          selectionAll:[],
          yuid:[],
          selectionReal:[],
          ssfj: [],
          sspcs: [],

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
        if(this.juState=='2'){//分局登录
          this.pd.SSFJ = this.orgCode;
          this.getSSPCS(this.pd.SSFJ);
        }
        if(this.juState=='3'){//派出所登录
          this.pd.SSFJ = this.$store.state.pcsToju;
          this.getSSPCS(this.pd.SSFJ);
          this.pd.SSPCS = this.orgCode;
        }
         this.$store.dispatch("getGjdq");
         this.$store.dispatch("getXB");
         this.$store.dispatch("getSsdw");
         this.$store.dispatch("getZjzl");
         this.$store.dispatch("getRjqzzl");
         this.$store.dispatch("getRjsy");
         this.$store.dispatch("getZsxz");
         this.$store.dispatch("getSjly");
         this.getSsfj();
      },
      activated(){
        this.getList(this.CurrentPage,this.pageSize, this.pd);
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
        getSsfj() {
          let p = {
            "operatorId": this.$store.state.uid,
            "operatorNm": this.$store.state.uname,
          };
          var url = this.Global.aport2 + "/data_report/selectSsfjDm";
          this.$api.post(url, p,
            r => {
              this.ssfj = sortByKey(r.data.SSFJ,'dm');
            })
        },

        getSSPCS(arr) {
          this.$set(this.pd, "SSPCS", '');
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
          if(this.checkedList.length==0){//人员导出
            url="/linZhuInfoComprehensiveAnalysisController/exportPersonList"
            if(this.selectionAll.length==0){//人员全部导出
              p={
                "pd":this.pd,
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
          }else{//统计导出
            url="/linZhuInfoComprehensiveAnalysisController/export"
            if(this.selectionAll.length==0){//统计全部导出
              p={
                "pd":this.pd,
                "groupList":this.checkedList,
                userCode:this.userCode,
                userName:this.userName,
                orgJB:this.juState,
                orgCode:this.orgCode,
                token:this.token,
              }
            }else{//统计部分导出
              p={
                "requestTempList":this.selectionAll,
                "groupList":this.checkedList,
                userCode:this.userCode,
                userName:this.userName,
                orgJB:this.juState,
                orgCode:this.orgCode,
                token:this.token,
              }
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
        handleSelectionChange(val) {
          this.multipleSelection = val;
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
        // getPdGj(pd){
        //   pd.GJDQ=[];
        //   let arr=[];
        //   if(this.pdGjItem.GJDQITEM!=''){
        //     arr.push(this.pdGjItem.GJDQITEM)
        //   }
        //   if(this.pdGjItem.SHIGUO!=''){
        //     arr.push([this.pdGjItem.SHIGUO])
        //   }
        //   if(this.pdGjItem.SANSHIYI!=''){
        //     arr.push([this.pdGjItem.SANSHIYI])
        //   }
        //   for(var i=0;i<arr.length;i++){
        //     pd.GJDQ = pd.GJDQ.concat(arr[i])
        //   }
        //   return pd;
        // },
        getList(currentPage, showCount, pd) {
          this.pd.CSRQ_DateRange.begin=this.pd0.beginCSRQ;
          this.pd.CSRQ_DateRange.end=this.pd0.endCSRQ;
          this.pd.TLYXQZ_DateRange.begin=this.pd0.beginTLYXQZ;
          this.pd.TLYXQZ_DateRange.end=this.pd0.endTLYXQZ;
          this.pd.ZSRQ_DateRange.begin=this.pd0.beginZSRQ;
          this.pd.ZSRQ_DateRange.end=this.pd0.endZSRQ;
          if(pd.hasOwnProperty('DTID')){
            delete pd['DTID']
          }
          let p = {
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": pd,
            "orderBy":'',
            "orderType":'DESC',
            "groupList":this.checkedList,
            userCode:this.userCode,
            userName:this.userName,
            orgJB:this.juState,
            orgCode:this.orgCode,
            token:this.token,
          };

          this.$api.post(this.Global.aport5+'/linZhuInfoComprehensiveAnalysisController/getComprehensiveAnalysis', p,
            r => {
              if(r.data.isFenLei=="true"){
                this.falg=true;
                this.tableData = r.data.resultList;
                this.TotalResult = r.data.totalResult;
                this.totalAllResult = r.data.totalAllResult;
                this.configHeader=[];
                let _this = this;
                for(var i=0;i<_this.checkedList.length;i++){
                  var obj={};
                  for(var j=0;j<_this.tableHead.length;j++){
                    if(_this.checkedList[i]=='SHIGUO'||_this.checkedList[i]=='SANSHIYIGUO'||_this.checkedList[i]=='WAIGSIG'){
                      obj.code='GJDQ_DESC';
                      obj.label='国家地区';
                    }
                    if(_this.tableHead[j].code.indexOf('DESC')!=-1){
                      if(_this.tableHead[j].code.split('_')[0]==_this.checkedList[i]){
                        obj.code=_this.tableHead[j].code;
                        obj.label=_this.tableHead[j].label;
                      }
                    }else{
                      if(_this.tableHead[j].code==_this.checkedList[i]){
                        obj.code=_this.tableHead[j].code;
                        obj.label=_this.tableHead[j].label;
                      }
                    }
                  }
                  _this.configHeader.push(obj);
                }
                var arrAfter=[];
                var arrReal=[];
                for(var i=0;i<this.configHeader.length;i++){
                  if(arrAfter.indexOf(this.configHeader[i].code)==-1){
                    arrAfter.push(this.configHeader[i].code);
                    arrReal.push(this.configHeader[i])
                  }
                }
                this.configHeader = arrReal;
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
                var url = this.Global.aport5 + "/linZhuInfoComprehensiveAnalysisController/getComprehensivePersonList";
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
                             if(this.tableData[i].DTID==this.selectionAll[j].DTID){
                               console.log(this.tableData[i].RGUID,this.selectionAll[j].RGUID,'this.selectionAll======',this.selectionAll)
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
      .el-button+.el-button{margin-left: 0!important;}
      .t-tjCheck .el-checkbox{margin-left: 20px!important; line-height: 30px;}
      .t-tjCheck .el-checkbox+.el-checkbox{margin-left: 20px!important;}
      .bj .el-dialog__wrapper {
        background: #000;
        background: rgba(0, 0, 0, 0.3);
      }
    </style>
