<template lang="html">
  <!-- 人员批量查询 -->
  <div class="yymain">
    <div class="yycontent">
      <div class="tjsy" v-if="gjshow">
         <el-row class="t-choose" :gutter="10">
           <el-col  :sm="24" :md="12" :lg="8"  class="input-item t-tjsr">
             <span class="input-text t-tj">选择组合查询条件：</span>
             <el-select v-model="queryTerm" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input t-sr" @change="optionChange">
               <el-option value="1" label="证件号码+证件种类+国籍"></el-option>
               <el-option value="2" label="姓名+性别+国籍"></el-option>
             </el-select>
           </el-col>
           <el-col :sm="24" :md="12" :lg="2" class="input-item">
            <el-button type="success" size="small"  @click="download">下载模板</el-button>
            </el-col>
           <el-col :sm="24" :md="12" :lg="8" class="input-item">
             <!-- <div class=""> -->
               <label class="file">
                 上传文件
                 <input type="file" name=""  @change="uploadFile">
               </label>
               <div class="t-input input-input">
                 <div class="t-input-content" v-for="(x,ind) in fileData" :key="ind">
                   <span class="mr-30" style="color: #606266;font-size:15px">{{x.name}}</span>
                   <!-- <span @click="deleteFile" class="hand redx">删除</span> -->
                 </div>
               </div>
             <!-- </div>
              <div>只能上传EXCEL格式</div> -->
          </el-col>

          <el-col :sm="24" :md="12" :lg="2" class="input-item">
            <el-button type="primary" size="small"  @click="getList()">&nbsp;&nbsp;查询&nbsp;&nbsp;</el-button>
          </el-col>
         </el-row>
         <div class="t-ak-tab-pane" v-show="false">
           <div class="t-pad" v-if="queryTerm=='1'">
             <el-checkbox-group v-model="checkList1" class="o-checkbox-g">
               <el-checkbox v-for="item in checkItem1" :label="item.ITEMNAME" :key="item.ITEMNAME" :disabled="item.disabled">{{item.LABEL}}</el-checkbox>
             </el-checkbox-group>
           </div>

           <div class="t-pad" v-if="queryTerm=='2'">
             <el-checkbox-group v-model="checkList2" class="o-checkbox-g">
               <el-checkbox v-for="item in checkItem2" :label="item.ITEMNAME" :key="item.ITEMNAME">{{item.LABEL}}</el-checkbox>
             </el-checkbox-group>
           </div>
         </div>

        <!-- <el-row type="flex" class="t-mt20">
           <el-col :span="24" style="text-align: center;">

           </el-col>
         </el-row> -->
     </div>
    </div>
    <div class="yycontent" v-if="isShow">
      <el-table
         :data="tableDataDetail"
         border
         style="width: 100%">
         <el-table-column
           prop="zwxm"
           label="中文姓名">
         </el-table-column>
         <el-table-column
           prop="ywxm"
           label="英文姓名">
         </el-table-column>
         <el-table-column
           prop="xb_desc"
           label="性别">
         </el-table-column>
         <el-table-column
           prop="csrq"
           label="出生日期">
         </el-table-column>
         <el-table-column
           prop="gjdq_desc"
           label="国家地区">
         </el-table-column>
         <el-table-column
           prop="zjzl_desc"
           label="证件种类">
         </el-table-column>
         <el-table-column
           prop="zjhm"
           label="证件号码">
           <template slot-scope="scope">
              <span class="tc-b hand" @click="moreFn(scope.row)">{{scope.row.zjhm}}</span>
            </template>
         </el-table-column>
         <el-table-column
           prop="zjyxq"
           label="证件有效期">
         </el-table-column>
       </el-table>
      <!-- <el-table
         :data="tableData"
         border
         style="width: 100%">
         <el-table-column
           prop="zwxm"
           label="中文姓名"
           v-if="((checkList2.indexOf('zwxm')>-1)&&(queryTerm=='2'))">
         </el-table-column>
         <el-table-column
           prop="ywxm"
           label="英文姓名"
           v-if="((checkList2.indexOf('ywxm')>-1)&&(queryTerm=='2'))">
         </el-table-column>
         <el-table-column
           prop="xb_desc"
           label="性别"
           v-if="((checkList2.indexOf('xb')>-1)&&(queryTerm=='2'))">
         </el-table-column>
         <el-table-column
           prop="csrq"
           label="出生日期"
           v-if="((checkList2.indexOf('csrq')>-1)&&(queryTerm=='2'))">
         </el-table-column>
         <el-table-column
           prop="gjdq_desc"
           label="国家地区"
           v-if="((checkList2.indexOf('gjdq')>-1)&&(queryTerm=='2'))||((checkList1.indexOf('gjdq')>-1)&&(queryTerm=='1'))">
         </el-table-column>
         <el-table-column
           prop="zjzl_desc"
           label="证件种类"
           v-if="((checkList1.indexOf('zjzl')>-1)&&(queryTerm=='1'))">
         </el-table-column>
         <el-table-column
           prop="zjhm"
           label="证件号码"
           v-if="((checkList1.indexOf('zjhm')>-1)&&(queryTerm=='1'))">
         </el-table-column>
         <el-table-column
           prop="total"
           label="匹配人数">
         </el-table-column>
         <el-table-column
           label="操作">
           <template slot-scope="scope">
             <el-button type="text"  class="a-btn" title="详情" size="mini" icon="el-icon-tickets" @click="details(scope.row)"></el-button>
           </template>
         </el-table-column>
       </el-table> -->
    </div>
    <el-dialog title="列表" :visible.sync="listDialogVisible"  width="900px">

    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gjshow:false,
      queryTerm:'1',//组合查询条件
      checkItem2:[
        {
          LABEL:'中文姓名',
          ITEMNAME:'zwxm',
        },
        {
          LABEL:'英文姓名',
          ITEMNAME:'ywxm',
        },
        {
          LABEL:'性别',
          ITEMNAME:'xb',
        },
        {
          LABEL:'国家地区',
          ITEMNAME:'gjdq',
        },
        {
          LABEL:'出生日期',
          ITEMNAME:'csrq',
        }
      ],
      checkList2:['zwxm','ywxm','xb','csrq'],
      checkItem1:[
        {
          LABEL:'证件号码',
          ITEMNAME:'zjhm',
          disabled:true,
        },
        {
          LABEL:'证件种类',
          ITEMNAME:'zjzl',
          disabled:true,
        },
        {
          LABEL:'国家地区',
          ITEMNAME:'gjdq',
          disabled:false,
        },
      ],
      checkList1:['zjhm','zjzl','gjdq'],
      fileData:null,
      tableData: [],
      isShow:false,
      listDialogVisible:false,
      tableDataDetail:[],


      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {},
      nation: [],
      checkList:[],
      fileList: [],
      actions: "",
      zwshow:true,
      ywshow:true,
      gjshow:true,
      zjshow:true,
      xbshow:true,
      uploadDialogVisible: false,
      editform:{},
      uploadIconData:{},
      mapForm:{},
      options:this.pl.options,

    }
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
  },
  methods: {
    uploadFile(event){//获取上传的文件
       this.fileData=event.target.files;
     },
     upload(){//上传文件
       var formData = new FormData();
       let arr=this.fileData;
       for(var i=0;i<arr.length;i++){
         formData.append("file",arr[i]);
       }
       if(this.queryTerm=='1'){
         formData.append("type",this.checkList1);
       }else if(this.queryTerm=='2'){
         formData.append("type",this.checkList2);
       }
       let p=formData;
       console.log('formData',formData)
       this.$api.post(this.Global.aport2+'/ryhxhx/gettjxx',p,
        r =>{
          if(r.success){
            this.tableDataDetail=r.data;
            this.isShow=true;
          }else{
            this.$confirm('上传文件存在错误信息, 是否导出错误信息?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$api.post(this.Global.aport2+'/ryhxhx/geterrdata',p,
               r =>{
                 this.downloadM(r,'错误信息')
               },e=>{},{},'blob')
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消导出'
              });
            });
          }
        },e => {
        },{'Content-Type': 'multipart/form-data'})
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
     getList(){
       if(this.fileData==null){
         this.$message({
          message: '上传文件不能为空！',
          type: 'warning'
         });
         return
       }
       // if(this.queryTerm=='2'){
       //   if((this.checkList2.indexOf('zwxm')==-1)&&(this.checkList2.indexOf('ywxm')==-1)){
       //     this.$message({
       //      message: '中文姓名和英文姓名二者必选其一！',
       //      type: 'warning'
       //     });
       //     return
       //   }
       // }
       this.upload();
     },
     // details(i){
     //   this.$api.post(this.Global.aport2+'/ryhxhx/getjbxx',i,
     //    r =>{
     //      if(r.success){
     //        this.listDialogVisible=true;
     //        this.tableDataDetail=r.data
     //      }
     //    })
     // },
     moreFn(i){
       this.$router.push({name:'RYHX_XQ',query:{zjhm:i.zjhm,row:i,gjdq:i.gjdq}});
       this.listDialogVisible=false;
     },
     optionChange(){
       this.isShow=false;
       this.checkList1=['zjhm','zjzl','gjdq'];
       this.checkList2=['zwxm','ywxm','xb','csrq'];
     },
     download() {
       if(this.queryTerm=='1'){
         window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/人员画像证件号码证件种类查询模板.xls'
       }else if(this.queryTerm=='2'){
         window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/人员画像姓名性别查询模板.xls'
       }

     },
  }
}
</script>

<style scoped>
.file {
  position: relative;
  display: inline-block;
  color: #fff;
  background-color: #409EFF;
  border:1px solid #409EFF;
  border-radius: 3px;
  border-top-right-radius: 0!important;
  border-bottom-right-radius: 0!important;
  padding: 9px 15px;;
  overflow: hidden;
  text-decoration: none;
  text-indent: 0;
  /* line-height: 20px; */
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
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
</style>
<style>

</style>
