<template lang="html">
  <!-- 用户授权 -->
  <div class="yymain">
    <div class="yycontent">
        <el-row type="flex">
          <el-col :span="11">
                <el-row type="flex">
                  <el-col :span="21" class=" pr-20">
                    <el-row align="center"   :gutter="2">
                      <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                        <span class="input-text">所属单位：</span>
                        <el-select v-model="pd.org"  filterable clearable default-first-option  class="input-input" placeholder="请选择"  size="small">
                          <el-option
                           v-for="item in company"
                           :key="item.dm"
                           :label="item.mc"
                           :value="item.dm">
                         </el-option>
                        </el-select>
                      </el-col>
                     <el-col  :sm="24" :md="12" :lg="12"   class="input-item">
                        <span class="input-text">角色名称：</span>
                        <el-input placeholder="请输入内容" size="small" v-model="pd.mc"   class="input-input"></el-input>
                    </el-col>
                  </el-row>
                 </el-col>
                 <el-col :span="3">
                    <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)">查询</el-button>
                 </el-col>
                </el-row>
                <el-row type="flex" style="margin-top:10px;">
                  <el-table
                   ref="multipleTable"
                   :data="tableData"
                   border
                   class="stu-table"
                   style="width: 100%"
                   @row-click="rowClick"
                   :highlight-current-row="true"
                   >
                   <el-table-column
                     prop="mc"
                     label="角色名称">
                   </el-table-column>
                   <el-table-column
                     prop="ssdw.mc"
                     label="所属单位">
                   </el-table-column>
                 </el-table>
                </el-row>

          </el-col>
          <el-col :span="11">

            <el-row type="flex">
              <el-col :span="16" class=" pr-20">
                <el-row align="center"   :gutter="2">
                 <el-col  :sm="24" :md="12" :lg="20"   class="input-item">
                    <span class="input-text" style="width:25%!important">姓名：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="pd1.mc"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="4"  class="input-item">
                    <el-button type="success" size="small" @click="getroleUser(CurrentPage,pageSize,pd)">查询</el-button>
                </el-col>
              </el-row>
             </el-col>
             <el-col :span="8" style="text-align:right">
                <el-button type="primary" size="small" @click="adduser">增加用户</el-button>
                <el-button type="warning" size="small" @click="moveuser">移除用户</el-button>
             </el-col>
            </el-row>
            <el-row type="flex" style="margin-top:10px;">
              <el-table
               ref="multipleTable"
               :data="tableData1"
               border
               class="stu-table"
               style="width: 100%"
              @selection-change="handleSelectionChange1">
              <el-table-column
                type="selection"
                width="60">
              </el-table-column>
               <el-table-column
                 prop="mc"
                 label="姓名">
               </el-table-column>
               <el-table-column
                 prop="dlm"
                 label="登录名">
               </el-table-column>

               <el-table-column

                 prop="ssdw.mc"
                 label="所属单位">
               </el-table-column>

             </el-table>
            </el-row>
          </el-col>
          <el-col :span="2" class="down-btn-area">
              <el-button type="primary" @click="saveReuslt()" size="small">保存用户授权</el-button>
          </el-col>
        </el-row>
    </div>

    <el-dialog title="选择用户" :visible.sync="userDialogVisible">

      <el-row type="flex">
        <el-col :span="14" class=" pr-20">
          <el-row align="center"   :gutter="1">
           <el-col  :span="24"   class="input-item">
              <span class="input-text">姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="pd2.mc"   class="input-input"></el-input>
          </el-col>
        </el-row>
       </el-col>
       <el-col :span="10">
          <el-button type="success" size="small" @click="getUser(CurrentPage2,pageSize2,pd2)">查询</el-button>
       </el-col>
      </el-row>
      <el-row type="flex" style="margin:10px 0px;">
        <el-table
         ref="multipleTable"
         :data="tableData2"
         border
         class="stu-table"
         style="width: 100%"
         @selection-change="handleSelectionChange2">
         <el-table-column
           type="selection"
           width="60">
         </el-table-column>
         <el-table-column
           prop="mc"
           label="姓名">
         </el-table-column>
         <el-table-column
           prop="dlm"
           label="登录名">
         </el-table-column>
         <el-table-column
           prop="ssdw.mc"
           label="所属单位">
         </el-table-column>
       </el-table>
       </el-row>

       <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult2}}条记录
            </div>
            <div class="">
              每页显示
              <el-select v-model="pageSize2" @change="pageSizeChange2(pageSize2)" placeholder="10" size="mini" class="page-select">
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
            共{{Math.ceil(TotalResult2/pageSize2)}}页
            </div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange2"
            :current-page.sync ="CurrentPage2"
            :page-size="pageSize2"
            layout="prev, pager, next"
            :total="TotalResult2">
          </el-pagination>
        </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveuser" size="small">保存</el-button>
        <el-button  @click="userDialogVisible=false" size="small">取消</el-button>
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
      CurrentPage2: 1,
      pageSize2: 10,
      TotalResult2: 0,
      pd:{},
      pd1:{},
      pd2:{},
      tableData:[],
      tableData1:[],
      tableData2:[],
      temp:[],
      multipleSelection1: [],
      multipleSelection2: [],
      company:[],
      roleid:'',
      userDialogVisible:false,
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
      }
    ],

    }
  },
  mounted() {
     this.getList(this.CurrentPage,this.pageSize,this.pd);
     this.getCompany();
  },
  methods: {
    pageSizeChange2(val) {
      this.getUser(this.CurrentPage2, val, this.pd2);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange2(val) {
      this.getUser(val, this.pageSize2, this.pd2);
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange1(val) {
      this.multipleSelection1 = val;
    },
    handleSelectionChange2(val) {
      this.multipleSelection2 = val;
    },
    getCompany(){
         var formData = new FormData();
         formData.append("org",this.Global.org);
         formData.append("token",this.$store.state.token);
         let p=formData;
         var url=this.Global.aport1+'/org/getSelfAndChilds';
         this.$api.post(url, p,
         r => {
           this.company=r.data;
         });
    },
    getList(currentPage, showCount, pd) {
      var formData = new FormData();
        formData.append("currentPage", currentPage);
        formData.append("showCount", showCount);
        formData.append("org", this.pd.org==undefined?this.Global.org:this.pd.org);
        formData.append("mc", this.pd.mc==undefined?"":this.pd.mc);
        formData.append("token", this.$store.state.token);
        let p=formData;
         var url=this.Global.aport1+'/role/getAll';
        this.$api.post(url, p,
         r => {
           this.tableData = r.data.resultList;
           this.TotalResult = r.data.totalCount;
         });
    },
    // tableRowClassName({row, rowIndex}) {
    //   console.log({row, rowIndex})
    //     if (rowIndex === 1) {
    //       return 'warning-row';
    //     } else if (rowIndex === 3) {
    //       return 'success-row';
    //     }
    //     return '';
    //   },
    rowClick(row,event,column){
      console.log(row,event,column);
      // let a= event.target
      this.roleid=row.id;
      this.getroleUser();
        // return 'current-row';
    },
    getroleUser(){
      var ff=new FormData();
      ff.append("token",this.$store.state.token);
      ff.append("roleid",this.roleid);
      ff.append("mc",this.pd1.mc==undefined?"":this.pd1.mc);
      let p=ff;
      this.temp=null;
      var url=this.Global.aport1+'/user/getAssignByRoleId';
      this.$api.post(url, p,
       r => {
         this.tableData1 = r.data.resultList;
       });
    },
    adduser(){
      if(this.roleid.length==0)
      {
          this.$message.error('请选择角色！');return false;
      }
      this.userDialogVisible=true;
      this.getUser(this.CurrentPage2,this.pageSize2,this.pd2);
      this.getroleUser();
    },
    getUser(currentPage,showCount,pd)
    {
      var formData = new FormData();
      formData.append("currentPage", currentPage);
      formData.append("showCount", showCount);
      formData.append("roleid", this.roleid);
      formData.append("token", this.$store.state.token);
      let p=formData;
        var url=this.Global.aport1+'/user/getUnassignByRoleId';
      this.$api.post(url, p,
       r => {
         this.tableData2 = r.data.resultList;
         this.TotalResult2 = r.data.totalCount;
       });
    },
    moveuser(){
      if (this.multipleSelection1.length == 0) {
            this.$message.error('请选择列表内容！');
           return;
      }
      var lists=[];
      for (var i = 0; i < this.multipleSelection1.length; i++)
      {  var s = this.multipleSelection1[i].id;
          lists.push(s);
      }
      var formData = new FormData();
      formData.append("roleid", this.roleid);
      formData.append("token", this.$store.state.token);
      formData.append("userids", lists);
      let p=formData;
          var url=this.Global.aport1+'/role/removeUsersFromRole';
      this.$api.post(url, p,
       r => {
         if(r.success){
           this.$message({
             message: '移除成功',
             type: 'success'
           });
             this.getroleUser();
         }else {
           this.$message.error(r.message);
         }
       });

    },
    saveuser(){
      if (this.multipleSelection2.length == 0) {
            this.$message.error('请选择列表内容！');
            return;
      }
      this.temp = this.multipleSelection2
      this.tableData1=this.temp;
      this.userDialogVisible=false;
    },
    saveReuslt(){

      if(this.roleid.length==0)
      {
          this.$message.error('请选择角色！');return false;
      }
      if (this.multipleSelection1.length == 0) {

            this.$message.error('请选择列表内容！');
            return;
      }
      var lists=[];
      for (var i = 0; i < this.multipleSelection1.length; i++)
      {  var s = this.multipleSelection1[i].id;
          lists.push(s);
      }
      var formData = new FormData();
      formData.append("roleid", this.roleid);
      formData.append("token", this.$store.state.token);
      formData.append("userids", lists);
      let p=formData;
      var url=this.Global.aport1+'/role/addUsersToRole';
      this.$api.post(url, p,
       r => {
         if(r.success){
           this.$message({
             message: '保存成功',
             type: 'success'
           });
           this.getroleUser();
         }else {
           this.$message.error(r.message);
         }
       });

    }

  }

}
</script>
<style scoped>

.yycontent{min-height: 600px!important;}
.el-col-11{border-right: 1px solid #eeeeee;padding:0px 20px; min-width: 350px!important; max-height: 600px!important;}
.el-col-2{padding:0px 30px;}
.input-item{
  display: flex;
  margin-bottom: 5px;
  align-items: center;
}
.input-text{width: 30%!important;}

</style>
<style>
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row>td, .el-table__body tr.hover-row.current-row>td, .el-table__body tr.hover-row.el-table__row--striped.current-row>td, .el-table__body tr.hover-row.el-table__row--striped>td, .el-table__body tr.hover-row>td
{background-color:#ECB96C !important;}
</style>
