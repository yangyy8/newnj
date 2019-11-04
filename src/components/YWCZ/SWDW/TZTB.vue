<template lang="html">
  <!-- 违临预判预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="21" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">标题：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.BT" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">单位类别：</span>
                    <el-select v-model="pd.DWLXBM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" @visible-change="dwTypeFun">
                      <el-option
                        v-for="(item,index) in dwTypeList"
                        :key="index"
                        :label="item.DWLXBM+' - '+item.DWLXMC"
                        :value="item.DWLXBM">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">接收单位：</span>
                    <div class="input-input t-fuzzy-12 t-flex">
                      <el-select v-model="pd.JSDWBH" filterable :disabled="pd.isAll" clearable multiple collapse-tags default-first-option placeholder="请选择"  size="small" class="input-input" :filter-method="userFilter" @visible-change="getDw(pd.DWLXBM)">
                        <el-option
                          v-for="(item,index) in dwdata"
                          :key="index"
                          :label="item.ZZJGDM+' - '+item.DWZWMC"
                          :value="item.ZZJGDM">
                        </el-option>
                      </el-select>
                      <el-checkbox v-model="pd.isAll"  @change="dwCheckFun(pd.isAll)" style="margin-left: 13px;">全选</el-checkbox>
                    </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">发送状态：</span>
                  <el-select v-model="pd.SFYX" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option label="1 - 已发送" value="1"></el-option>
                    <el-option label="2 - 未发送" value="2"></el-option>
                  </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="3">
          <el-button type="success" size="small"  class="t-mb" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
          <!-- <el-button type="success" size="small"  class="t-ml0" @click="download">导出</el-button> -->
          <el-button type="primary" size="small"  @click="addNew()">新增</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">甄别信息列表</div>

      <el-table
           :data="tableData"
           border
           ref="multipleTable"
           :highlight-current-row="true"
           style="width: 100%"
           @select="selectfn">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="BT"
             label="标题">
           </el-table-column>
           <el-table-column
             prop="NR"
             label="内容">
           </el-table-column>
           <el-table-column
             prop="JSDWMC"
             label="接收单位"
             :show-overflow-tooltip="true">
           </el-table-column>
           <el-table-column
             prop="CREATETIME"
             label="创建时间">
           </el-table-column>
           <el-table-column
             prop="SFYX"
             label="发送状态">
             <template slot-scope="scope">
               <span>{{scope.row.SFYX=='1'?'已发送':'未发送'}}</span>
             </template>
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
               <div>
                  <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-tickets" @click="details(scope.row)"></el-button>
                  <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" :disabled="scope.row.SFYX=='1'?true:false" @click="cutOff(scope.row)"></el-button>
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
    <el-dialog title="新增"  :visible.sync="addDialogVisible" width="800px">
      <el-form :model="form" ref="addForm">
        <el-row type="flex"  class="mb-6">
          <el-col  :sm="24" :md="24" :lg="24"  class="input-item">
              <span class="input-text w-ts">单位类别：</span>
              <el-select v-model="form.DWLXBM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" @visible-change="dwTypeFun">
                <el-option
                  v-for="(item,index) in dwTypeList"
                  :key="index"
                  :label="item.DWLXBM+' - '+item.DWLXMC"
                  :value="item.DWLXBM">
                </el-option>
              </el-select>
          </el-col>
        </el-row>
        <el-row type="flex"  class="mb-6">
          <el-col :span="24" class="input-item">
            <span class="input-text w-ts">接收单位：</span>
            <el-select v-model="form.JSDWBH" filterable clearable :disabled="form.isAll" multiple collapse-tags default-first-option placeholder="请选择"  size="small" class="input-input" :filter-method="userFilter" @visible-change="getDw(form.DWLXBM)">
              <el-option
                v-for="(item,index) in dwdata"
                :key="index"
                :label="item.ZZJGDM+' - '+item.DWZWMC"
                :value="item.ZZJGDM">
              </el-option>
            </el-select>
            <el-checkbox v-model="form.isAll"  @change="addCheckFun(form.isAll)" style="margin-left: 13px;">全选</el-checkbox>
          </el-col>
        </el-row>
        <el-row type="flex"  class="mb-6">
          <el-col :span="24" class="input-item">
            <span class="input-text w-ts">标题：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.BT" class="input-input"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex"  class="mb-6">
          <el-col :span="24" class="input-item">
            <span class="input-text" style="width: 14.9%!important;">附件：</span>
            <label class="file">
              上传附件
              <input type="file" name=""  @change="reviewUpload" multiple>
            </label>
            <div class="fileColl" v-if="reviewFile">
              <div class="" v-for="(x,ind) in reviewFile" :key="ind">
                <span class="mr-30">{{x.name}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex"  class="mb-6">
          <el-col :span="24" class="input-item">
            <span class="input-text" style="width:17.3%!important">内容：</span>
            <el-input type="textarea" v-model="form.NR" maxlength="300" :autosize="{ minRows: 3, maxRows: 6}" placeholder="请输入描述(不能超过300字)"></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="" size="small" @click="sendOrMoment('2')">暂存</el-button> -->
        <el-button type="primary" @click="" size="small" @click="sendOrMoment('1')">发送</el-button>
        <el-button @click="" size="small" type="warning" @click="addDialogVisible = false">返回</el-button>
      </div>
    </el-dialog>
    <el-dialog title="详情"  :visible.sync="detailDialogVisible" width="1000px" class="tt">
      <el-form :model="dform" ref="addForm">
        <el-row type="flex"  class="mb-6">
          <el-col :span="24" class="input-item">
            <span class="input-text" style="width: 50px!important;text-align:left">标题：</span>
            <span class="review-span" style="padding-left:13px">{{dform.BT}}</span>
          </el-col>
        </el-row>
        <el-row type="flex"  class="mb-6">
          <el-col :span="24" class="input-item">
            <span class="input-text" style="width:50px!important;text-align:left">内容：</span>
            <el-input type="textarea" v-model="dform.NR"  :autosize="{ minRows: 3, maxRows: 6}" :disabled="true"></el-input>
          </el-col>
        </el-row>
        <el-row class="mb-6">
          <el-col :span="24">
            <div v-for="(d4,ind) in inFiles" :key="ind" class="infiledd">
              <span class="mr-30 avgerName">{{d4.FILENAME}}</span>
              <span class="mr-30 tc-999 avgeraTime">上传时间：{{d4.CREATETIME}}</span>
              <!-- <el-button type="text" class="redx" @click="delFileInfo(d4.SERIAL)">删除</el-button> -->
              <el-button type="text" class="avgera"><a class="green" @click="downLoadFj(d4.DTID,d4.FILENAME,d4.SJPAPERTYPE)">下载</a></el-button>
            </div>
          </el-col>
        </el-row>
        <el-table
             :data="tableDataDW"
             border
             ref="multipleTable"
             :highlight-current-row="true"
             style="width: 100%">
             <el-table-column
               prop="JSDWMC"
               label="接收单位">
             </el-table-column>
             <el-table-column
               prop="QSZT"
               label="签收状态">
               <template slot-scope="scope">
                 <span>{{scope.row.QSZT=='0'?'无签收':'已签收'}}</span>
               </template>
             </el-table-column>
             <el-table-column
               prop="QSSJ"
               label="签收时间">
             </el-table-column>
             <el-table-column
               prop="QSR"
               label="签收人">
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
                :current-page.sync ="CurrentPage1"
                :page-size="pageSize1"
                layout="prev, pager, next"
                :total="TotalResult1">
              </el-pagination>
            </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="" size="small" type="warning" @click="detailDialogVisible = false">返回</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// import {format} from '@/assets/js/date.js'
export default {
  data() {
    return {
      dwTypeList:[],

      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,

      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      pd: {SSPCS:this.$store.state.orgid,isAll:false},
      options: this.pl.ps,
      tableData: [],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],
      dwdata:[],
      dwList:{},
      form:{isAll:false},
      dform:{},
      addDialogVisible:false,
      detailDialogVisible:false,
      reviewFile:{},
      reviewFiles:{},
      inFiles:[],
      tableDataDW:[],
      fileId:'',
    }
  },

  activated(){
      let _this = this;
      setTimeout(function(){
        _this.getList(_this.CurrentPage, _this.pageSize, _this.pd);
      },1000)
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getClzt');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getRjqzzl');
    this.$store.dispatch('getLgyj');
    this.$store.dispatch('getGljb');
    this.userCode=this.$store.state.uname;
    this.userName=this.$store.state.uid;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
  },
  methods: {
    dwCheckFun(n){
      if(n==true){
        this.$set(this.pd,'JSDWBH',[]);
      }
    },
    addCheckFun(n){
      if(n==true){
        this.$set(this.form,'JSDWBH',[]);
      }
    },
    dwTypeFun(){
      this.$api.post(this.Global.aport4+'/SWDW_TZTBController/getAllDWLX',{},
       r =>{
         if(r.success){
           this.dwTypeList = r.data.resultList;
         }
       })
    },
    getDw(val){
      this.$api.post(this.Global.aport4+'/SWDW_TZTBController/getAllDW',{pd:{DWLXBM:val}},
        r =>{
          if(r.success){
            this.dwList = r.data.resultList;
            this.userFilter();
          }
        })
    },
    userFilter(query = '') {
             let arr = this.dwList.filter((item) => {
              // console.log(item.DWZWMC);
              if(item.DWZWMC!=undefined){
                  return item.DWZWMC.includes(query)
               }
             })
             if (arr.length > 50) {
               this.dwdata = arr.slice(0, 50)
             } else {
               this.dwdata= arr
             }
           },
    addNew(){
      this.form={isAll:false};
      this.reviewFile={};
      this.addDialogVisible=true;
    },
    downLoadFj(val,name,type){
      let p={
        pd:{DTID:val},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/SWDW_PAPERController/downloadByDTID',p,
        r =>{
          this.downloadMfj(r,name,type)
        },e=>{},{},'blob')
    },
    downloadMfj (data,name,type) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/"+type}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name+'.'+type)
        document.body.appendChild(link)
        link.click()
    },
    reviewUpload(event){//消息回复的附件
      // console.log(this.reviewFile,event.target.files,event);
      this.reviewFile = event.target.files;
      // this.reviewFiles=Object.assign(this.reviewFile,event.target.files);
      // for(var key in event.target.files){
      //   console.log(event.target.files[key])
      // }
      // console.log('====',this.reviewFiles)
    },
    upload(val){//上传文件
      var formData = new FormData();
      let arr=this.reviewFile;
      for(var i=0;i<arr.length;i++){
        formData.append("files",arr[i]);
      }
      formData.append("YWDTID",val);
      formData.append("orgCode",this.orgCode);
      formData.append("orgName",this.orgName);
      formData.append("userCode",this.userCode);
      formData.append("userName",this.userName);
      formData.append("orgJB",this.juState);
      formData.append("token",this.token);
      let p=formData;
      console.log('formData',formData)
      this.$api.post('/zuul/'+this.Global.aport4+'/SWDW_TZTBController/upload',p,
       r =>{
         if(r.success){
           this.$message({
             message: '恭喜你，操作成功！',
             type: 'success'
           });
          this.reviewFile=null;
         }else {
           this.reviewFile=null;
           return
         }
       },e => {
       },{'Content-Type': 'multipart/form-data'})
    },
    sendOrMoment(val){
      this.form.SFYX = val;

      let p={
        "pd":this.form,
        "userCode":this.$store.state.uid,
        "userName":this.$store.state.uname,
        "orgCode":this.$store.state.orgid,
        "orgName":this.$store.state.orgname,
        orgJB:this.juState,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/SWDW_TZTBController/saveOrSend',p,
       r =>{
         if(r.success){
           if(this.reviewFile){
              this.upload(r.data.DTID);
            }else{
              this.$message({
                message: '恭喜你，操作成功',
                type: 'success'
              });
            }
            this.addDialogVisible = false;
            this.getList(this.CurrentPage, this.pageSize, this.pd);
         }
       })
    },
    details(row){
      this.detailDialogVisible=true;
      this.dform = row;
      this.fileId = row.DTID
      let p={
        pd:{YWDTID:row.DTID},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/SWDW_TZTBController/getPAPERByYWDTID',p,
       r =>{
         if(r.success){
           this.inFiles = r.data;
         }
       })
       this.getFiles(this.CurrentPage1,this.pageSize1,row.DTID);
    },
    getFiles(currentPage,showCount, pd){
      let p={
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": {YWDTID:pd},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/SWDW_TZTBController/getTZTBJSDW_EntityByYWDTID',p,
       r =>{
         if(r.success){
           this.tableDataDW = r.data.resultList;
           this.TotalResult1 = r.data.totalResult;
         }
       })
    },
    cutOff(row){
      let p={
        pd:{DTID:row.DTID},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/SWDW_TZTBController/deleteByDTID',p,
       r =>{
         if(r.success){
           this.$message({
             message: '恭喜你，删除成功',
             type: 'success'
           });
           this.getList(this.CurrentPage, this.pageSize, this.pd);
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
      if(this.selectionAll.length==0){//全部导出
         p={
          "pd":this.pd,
          "orderBy":'SBSJ',
          "orderType":'DESC',
          userCode:this.userCode,
          userName:this.userName,
          orgCode:this.orgCode,
          orgJB:this.juState,
          token:this.token,
        }
      }else{//导出选中
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].YJID)
        };
        this.pd.YJID=this.yuid;
         p={
          "pd":this.pd,
          "orderBy":'SBSJ',
          "orderType":'DESC',
          userCode:this.userCode,
          userName:this.userName,
          orgCode:this.orgCode,
          orgJB:this.juState,
          token:this.token,
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
        link.setAttribute('download', '违临预判报表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
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
    pageSizeChange1(val) {
      this.pageSize1=val;
      this.getFiles(this.CurrentPage1, this.pageSize1, this.fileId);
    },
    handleCurrentChange1(val) {
      this.CurrentPage1=val;
      this.getFiles(this.CurrentPage1, this.pageSize1, this.fileId);
    },
    getList(currentPage, showCount, pd) {
      if(pd.hasOwnProperty('YJID')){
        delete pd['YJID']
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
        // "orderBy":'SBSJ',
        // "orderType":'DESC',
      };
      this.$api.post(this.Global.aport4+'/SWDW_TZTBController/getInfoList', p,
        r => {
          if(r.success){
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
            if(this.selectionReal.length==0){//声明一个数组对象
              this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
            }
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
  }
}
</script>
<style scoped>
    .file {
      position: relative;
      display: inline-block;
      background: #ecf5ff;
      border: 1px solid #b3d8ff;
      border-radius: 4px;
      padding: 4px 12px;
      overflow: hidden;
      color: #409EFF;
      text-decoration: none;
      text-indent: 0;
      line-height: 20px;
      font-size: 12px;
    }
    .file input {
      position: absolute;
      font-size: 100px;
      right: 0;
      top: 0;
      opacity: 0;
    }
    .file:hover {
      background: #409EFF;
      border-color: #409EFF;
      color: #ffffff;
    }
    .fileColl{
      padding-left: 20px;
      line-height: 21px!important;
    }
    .fileColl div{
      padding: 2px;
      box-sizing: border-box;
    }
    .infile{
      padding-left: 5%;
    }
    .infiledd{
      padding: 3px 0px;
    }
    .avgera{
      width: 10%;
      display: inline-block;
    }
    .avgerName{
      width: 30%;
      display: inline-block;
    }
    .avgeraTime{
      width: 40%;
      display: inline-block;
    }
    .w-ts{
      width: 15%!important;
    }

</style>
<style media="screen">
  .tt .el-dialog__body{
    padding: 30px 50px!important;
  }
</style>
