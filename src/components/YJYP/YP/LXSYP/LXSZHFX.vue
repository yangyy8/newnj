<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
              <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">学校：</span>
                   <el-select v-model="pd.SCHOOLID"  filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="item in $store.state.xxdm"
                       :key="item.dm"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">性别：</span>
                   <el-select v-model="pd.SEX" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="item in $store.state.xb"
                       :key="item.dm"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">国籍：</span>
                   <el-select v-model="pd.COUNTRYID" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="item in $store.state.gjdq"
                       :key="item.dm"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">婚姻状态：</span>
                  <el-select v-model="pd.MARRYSTATUS" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option v-for="item in $store.state.hyzt"
                     :key="item.dm"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">学习专业：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.MAJORNAME" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">母语：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.LANGUAGENAME" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">是否华裔：</span>
                  <el-select v-model="pd.ISOVERSEA" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option  value="0" label="是"></el-option>
                    <el-option  value="1" label="否"></el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">宗教信仰：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.RELIGIONNAME" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">出生国家：</span>
                   <el-select v-model="pd.BORNEDCOUNTRYID" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="item in $store.state.gjdq"
                       :key="item.dm"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">出生地点：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.BORNEDADDRESS" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">护照证件种类：</span>
                   <el-select v-model="pd.PASSPORTTYPE" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="item in $store.state.zjzl"
                       :key="item.dm"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">学生类别：</span>
                   <el-select v-model="pd.APPLYTYPE" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="item in $store.state.xslb"
                       :key="item.dm"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">报到时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.SIGNUPDATE.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.SIGNUPDATE.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">结毕业时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.GRADUATEDATE.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.GRADUATEDATE.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.BORNEDDATE.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.BORNEDDATE.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">入境日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.ENTERDATE.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.ENTERDATE.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
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
                <el-checkbox v-for="item in checkItem" :label="item.code" :key="item.code">{{item.label}}</el-checkbox>
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
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'JYTRYXX',query:{row:scope.row,queryPd:pd}})"></el-button>
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
                :current-page.sync="CurrentPage"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="TotalResult">
              </el-pagination>
            </div>
        </div>
        <div v-else>
          <el-table
             ref="multipleTable"
             :data="tableData"
             border
             style="width: 100%"
             @header-click="headerClick"
             @select="selectfn">
             <el-table-column
               type="selection"
               width="55">
             </el-table-column>
             <el-table-column
               prop="ENGLISHNAME"
               label="英文姓名">
             </el-table-column>
             <el-table-column
               prop="SEX_DESC"
               label="性别">
             </el-table-column>
             <el-table-column
               prop="GJDQ_DESC"
               label="国籍">
             </el-table-column>
             <el-table-column
               prop="PASSPORTNO"
               label="证件号码">
             </el-table-column>
             <el-table-column
               prop="RELIGIONNAME"
               label="宗教信仰">
             </el-table-column>
             <el-table-column
               prop="SCHOOLID_DESC"
               label="学校名称">
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
              :current-page.sync="CurrentPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="TotalResult">
            </el-pagination>
          </div>
        </div>
        </div>
     <div class="bj">
       <!-- 留学生信息详情 -->
       <el-dialog title="留学生申请信息详情" :visible.sync="lxsDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
           <LXSXX :type="type" :xid="xid" :random="random"></LXSXX>
           <div slot="footer" class="dialog-footer">
             <el-button @click="lxsDialogVisible = false" size="small">取 消</el-button>
           </div>
      </el-dialog>
    </div>

      </div>

    </template>
    <script>
    import LXSXX from '../../../common/lxsxx_xq'
    export default {
      components:{LXSXX},
      data() {
        return {
          radio1:'0',
          radio2:'0',
          typet:'1',
          CurrentPage: 1,
          pageSize: 10,
          TotalResult: 0,
          pd: {
            SIGNUPDATE:{begin:'',end:''},
            GRADUATEDATE:{begin:'',end:''},
            BORNEDDATE:{begin:'',end:''},
            ENTERDATE:{begin:'',end:''},
          },
          pm:{},
          imagess:[],
          imgshow1:false,
          imgshow2:true,
          shm:false,
          lg:false,
          type:3,
          xid:'',
          random:'',
          lxsDialogVisible:false,
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
              code:'SCHOOLID',
              label:'学校'
            },
            {
              code:'SEX',
              label:'性别'
            },
            {
              code:'COUNTRYID',
              label:'国籍'
            },
            {
              code:'MARRYSTATUS',
              label:'婚姻状态'
            },
            {
              code:'MAJORNAME',
              label:'学习专业'
            },
            {
              code:'LANGUAGENAME',
              label:'母语'
            },
            {
              code:'ISOVERSEA',
              label:'是否华裔'
            },
            {
              code:'RELIGIONNAME',
              label:'宗教信仰'
            },
            {
              code:'BORNEDCOUNTRYID',
              label:'出生国家'
            },

            {
              code:'BORNEDADDRESS',
              label:'出生地点'
            },
            {
              code:'PASSPORTTYPE',
              label:'护照证件种类'
            },
            {
              code:'APPLYTYPE',
              label:'学生类别'
            },
            {
              code:'HOBBY',
              label:'爱好特长'
            },
          ],
          checkedList:[],
          checkItemReal:[],
          tableHead:[
            {
              code:'SCHOOLID_DESC',
              label:'学校'
            },
            {
              code:'SEX_DESC',
              label:'性别'
            },
            {
              code:'GJDQ_DESC',
              label:'国籍'
            },
            {
              code:'MARRYSTATUS_DESC',
              label:'婚姻状态'
            },
            {
              code:'MAJORNAME',
              label:'学习专业'
            },
            {
              code:'LANGUAGENAME',
              label:'母语'
            },
            {
              code:'ISOVERSEA_DESC',
              label:'是否华裔'
            },
            {
              code:'RELIGIONNAME',
              label:'宗教信仰'
            },
            {
              code:'BORNEDCOUNTRYID_DESC',
              label:'出生国家'
            },

            {
              code:'BORNEDADDRESS',
              label:'出生地点'
            },
            {
              code:'PASSPORTTYPE_DESC',
              label:'护照证件种类'
            },
            {
              code:'APPLYTYPE_DESC',
              label:'学生类别'
            },
            {
              code:'HOBBY',
              label:'爱好特长'
            },
          ],
          configHeader:[],
          pd0:{},
          form:{},
          falg:false,
          disa:false,

          multipleSelection:[],
          selectionAll:[],
          yuid:[],
          selectionReal:[],
        }
      },
      mounted() {
         this.$store.dispatch("getGjdq");
         this.$store.dispatch("getXB");
         this.$store.dispatch("getZjzl");
         this.$store.dispatch("getXxdm");
         this.$store.dispatch("getHyzt");
         this.$store.dispatch("getXslb");
      },
      methods: {
        selectfn(a,b){
          this.multipleSelection = a;
          this.dataSelection()
        },
        dataSelection(){
          console.log('this.multipleSelection',this.multipleSelection)
          this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection);
          console.log('this.selectionReal',this.selectionReal);
          this.selectionAll=[];
          for(var i=0;i<this.selectionReal.length;i++){
            if(this.selectionReal[i]){
              for(var j=0;j<this.selectionReal[i].length;j++){
                this.selectionAll.push(this.selectionReal[i][j])
              }
            }
          }
          console.log('this.selectionAll',this.selectionAll);
        },
        download(){
          let p={};
          if(this.checkedList.length==0){//人员导出
            if(this.selectionAll.length==0){//人员全部导出,无选中的数据
              p={
                "pd":this.pd
              }
            }else{//人员部分导出
              this.yuid=[];
              for(var i in this.selectionAll){
                this.yuid.push(this.selectionAll[i].RGUID)
              }
              this.pd.RGUID=this.yuid;
              p={
                "pd":this.pd,
              }
            }
          }else{//统计导出
            if(this.selectionAll.length==0){//统计全部导出
              p={
                "pd":this.pd,
                "groupList":this.checkedList,
              }
            }else{//统计部分导出
              p={
                "requestTempList":this.selectionAll,
                "groupList":this.checkedList,
              }
            }
          }
          this.$api.post(this.Global.aport5+'/jiaoYuTing202Controller/export',p,
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
            link.setAttribute('download', '教育厅综合分析列表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
            document.body.appendChild(link)
            link.click()
        },
        headerClick(column,event){
          event.target.title=column.label
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        pageSizeChange(val) {
          this.pageSize=val;
          this.getList(this.CurrentPage, val, this.pd);
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.CurrentPage=val;
          this.getList(val, this.pageSize, this.pd);
          console.log(`当前页: ${val}`);
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
            "orderBy":'',
            "orderType":'DESC',
            "groupList":this.checkedList,
          };

          this.$api.post(this.Global.aport5+'/esLxsController/getCount', p,
            r => {
              if(r.data.isFenLei=="true"){//统计列表
                this.falg=true;
                this.tableData = r.data.resultList;
                this.TotalResult = r.data.totalResult;
                this.configHeader=[];
                let _this = this;
                for(var i=0;i<_this.checkItemReal.length;i++){
                  var obj={};
                  for(var j=0;j<_this.tableHead.length;j++){
                    if(_this.checkItemReal[i].code=='SHIGUO'||_this.checkItemReal[i].code=='SANSHIYIGUO'){
                      obj.code='GJDQ_DESC';
                      obj.label='国家地区';
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
              }else {
                this.falg=false;
                var url = this.Global.aport5 + "/esLxsController/getResultListByParams";
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
        details(i) {
          this.random=new Date().getTime();
          this.xid=i.RGUID;
          this.lxsDialogVisible = true;
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
