<template lang="html">
  <!-- 持短期签证-->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM_Like" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">中文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM_Like" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">预警时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginBJSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endBJSJ" format="yyyy-MM-dd"
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
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                        <span class="input-text">所属分局：</span>
                        <el-select v-model="pd.FJ" @change="getPSC(pd.FJ)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='1'?false:true">
                          <el-option
                            v-for="item in getallfj"
                            :key="item.DM"
                            :label="item.DM+' - '+item.MC"
                            :value="item.DM">
                          </el-option>
                        </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                        <span class="input-text" title="所属派出所">所属派出所：</span>
                        <el-select v-model="pd.PCS" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='3'" :no-data-text="pd.FJ==''||pd.FJ==undefined?'请先选择所属分局':'无数据'">
                          <el-option
                            v-for="item in PSC"
                            :key="item.DM"
                            :label="item.MC"
                            :value="item.DM">
                          </el-option>
                        </el-select>
                    </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="juState=='1'">
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
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item"  v-if="juState=='1'||juState=='2'">
                  <span class="input-text" title="分局处理状态">分局处理状态：</span>
                  <el-select v-model="pd.FJCLZT" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.fjclzt"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small" class="t-mb"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd,1)">查询</el-button>
          <el-button type="primary" size="small"  class="t-ml0" @click="download">导出</el-button>
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
           @selection-change="handleSelectionChange"
           @header-click="titleShow">
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
             label="性别" width="60">
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
             prop="SSFJ_DESC"
             label="所属分局">
           </el-table-column>
           <el-table-column
             prop="PCS_DESC"
             label="所属派出所">
           </el-table-column>
           <el-table-column
             prop="CLZT_DESC"
             label="处理状态"
             v-if="juState=='1'">
           </el-table-column>
           <el-table-column
             prop="FJCLZT_DESC"
             label="分局处理状态"
             v-if="juState=='1'||juState=='2'">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
               <div>
                  <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit-outline" @click="$router.push({name:'DQQZFFJYYJ_XQ',query:{yjType:2,row:scope.row}})"></el-button>
                  <el-button type="text"  class="a-btn"  title="设为关注人员"  icon="iconfont el-icon-yy-jiaoseyonghu" @click="adds(scope.row);form={};"></el-button>
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
    <el-dialog title="设为关注人员" :visible.sync="addsDialogVisible" width="600px" >
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
      pd: {BJSJ_DateRange:{},YWXM_Like:''},
      pd0:{},
      options: this.pl.ps,
      tableData: [],
      addsDialogVisible :false,
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      form:{},
      addlg:{},
      getallfj:[],
      PSC:[],

      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],
      juState:'',
    }
  },
  mounted() {
    if(this.Global.serviceState==0){this.$set(this.pd,'CLZT','CLZT_1')};
    if(this.Global.serviceState==1){this.$set(this.pd,'CLZT','1')};
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getClzt');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getRjqzzl');
    this.$store.dispatch('getLgyj');
    this.$store.dispatch('getGljb');
    this.$store.dispatch('getFjclzt');
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    if(this.juState=='2'){
      this.$set(this.pd,'CLZT','')
    }
    this.getFj();
   },
   activated(){
     if(this.juState=='2'){//分局登录
       this.pd.FJ = this.orgCode;
       this.getPSC(this.pd.FJ);
     }
     if(this.juState=='3'){//派出所登录
       this.pd.FJ = this.$store.state.pcsToju;
       this.getPSC(this.pd.FJ);
       this.pd.PCS = this.orgCode;
     }
     let _this = this;
     setTimeout(function(){
       _this.getList(_this.CurrentPage, _this.pageSize, _this.pd);
     },1000)
   },
  methods: {
    getFj(){
      this.$api.post(this.Global.aport5+'/djbhl/getallfj',{userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.getallfj=r.data;
         }
       })
    },
    getPSC(i){
      this.$set(this.pd,'PCS','');
      this.$api.post(this.Global.aport5+'/djbhl/getpcsbyfjdm',{pd:{fjdm:i},userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
      r =>{
        if(r.success){
          this.PSC=r.data;
        }
      })
    },
    titleShow(e,el){
      el.target.title = e.label;
    },
    handleSelectionChange(val) {},
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
      this.pd.YWXM_Like = (this.pd.YWXM_Like).toUpperCase();
      if(this.selectionAll.length==0){//全部导出
         p={
          "pd":this.pd,
          "orderBy":'BJSJ',
          "orderType":'DESC',
          'userCode':this.userCode,
          'userName':this.userName,
          'orgJB':this.juState,
          'orgCode':this.orgCode,
          'token':this.token
        }
      }else{//导出选中
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].YJID)
        };
        this.pd.YJID=this.yuid;
         p={
          "pd":this.pd,
          "orderBy":'BJSJ',
          "orderType":'DESC',
          'userCode':this.userCode,
          'userName':this.userName,
          'orgJB':this.juState,
          'orgCode':this.orgCode,
          'token':this.token
        }
      }
      this.$api.post(this.Global.aport4+'/warningInfoController/exportByMxLx',p,
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
        link.setAttribute('download', '持短期签证非法就业报表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    getList(currentPage, showCount, pd,type) {
      this.pd.MXLX='ASJ_DQQZFFJY';
      this.pd.BJSJ_DateRange.begin=this.pd0.beginBJSJ;
      this.pd.BJSJ_DateRange.end=this.pd0.endBJSJ;
      this.pd.YWXM_Like = (this.pd.YWXM_Like).toUpperCase();
      if(pd.hasOwnProperty('YJID')){
        delete pd['YJID']
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "orderBy":'BJSJ',
        "orderType":'DESC',
        'userCode':this.userCode,
        'userName':this.userName,
        'orgJB':this.juState,
        'orgCode':this.orgCode,
        'token':this.token
      };
      this.$api.post(this.Global.aport4+'/warningInfoController/getInfoListByMxLx1', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
          if(this.selectionReal.length==0){//声明一个数组对象
            this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
          }
          if(type==1){
            this.selectionAll=[];
          }else{
            this.$nextTick(()=>{
              this.multipleSelection=[]
              for(var i=0;i<this.tableData.length;i++){
                for(var j=0;j<this.selectionAll.length;j++){
                  if(this.tableData[i].YJID==this.selectionAll[j].YJID){
                    this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                  }
                }
              }
            })
          }
        })
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
           },
           'userCode':this.userCode,
           'userName':this.userName,
           'orgJB':this.juState,
           'orgCode':this.orgCode,
           'token':this.token
         }
        this.$api.post(this.Global.aport4+'/zDRYController/isLGRY', p,
         r => {
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
           orgName:this.orgName,
           orgJB:this.juState,
           token:this.token
         }
        this.$api.post(this.Global.aport4+'/zDRYController/setZdry', p,
         r => {
           if(r.success){
                 this.$message({
                 message: '保存成功！',
                 type: 'success'
               });
                this.addsDialogVisible=false;
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
