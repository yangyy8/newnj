<template lang="html">
  <!-- 功能授权 -->
  <div class="yymain">
    <div class="yycontent">
        <el-row type="flex">
          <el-col :span="12" >
                <el-row type="flex">
                  <el-col :span="21" class=" pr-20">
                    <el-row align="center"   :gutter="2">
                      <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                        <span class="input-text">所属单位：</span>
                        <el-select v-model="pd.org"  filterable clearable default-first-option class="input-input" placeholder="请选择"  size="small">
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
                 <el-col :span="2">
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
                   @row-click="getMenu"
                    highlight-current-row
                   @selection-change="handleSelectionChange">
                   <el-table-column
                     prop="mc"
                     label="角色名称">
                   </el-table-column>
                   <el-table-column
                     prop="ssdw.mc"
                     label="所属单位">
                   </el-table-column>
                   <!-- <el-table-column
                     type="selection"
                     width="60">
                   </el-table-column> -->
                 </el-table>
               </el-row>
               <div class="middle-foot" style="margin-top:10px">
                  <div class="page-msg">
                    <div class="">
                  共{{TotalResult}}条记录
                    </div>
                    <!-- <div class="">
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
                    </div> -->
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

          </el-col>
          <el-col :span="8">
            <el-tree
              :data="menudata"
              show-checkbox
              default-expand-all
              node-key="dm"
              :default-checked-keys="defaultChecked"
              ref="tree"
              highlight-current
              :props="defaultProps">
            </el-tree>
          </el-col>
          <el-col :span="2" class="down-btn-area">
              <el-button type="primary" @click="save" size="small">保存功能授权</el-button>
          </el-col>
        </el-row>
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
      pd:{},
      tableData:[],
      company:[],
      menudata: [],
      defaultProps: {
        children: 'children',
        label: 'mc'
      },
      defaultChecked:[],
      roleid:'',
      menurr: [],
    }
  },
  mounted() {
     this.getList(this.CurrentPage,this.pageSize,this.pd);
     this.getCompany();
  },
  methods: {
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
    getMenu(row,event,column){
     this.roleid=row.id
      var ff=new FormData();
      ff.append("token",this.$store.state.token);
      ff.append("roleid",this.roleid);
      let p =ff;
      var lists=new Array();
      var url=this.Global.aport1+'/fun/getByRoleID';
      this.$api.post(url, p,
      rr=>{
        var arrs=rr.data;
        for (var i = 0; i < arrs.length; i++) {
           lists.push(arrs[i].id);
        }
      });

     var url1=this.Global.aport1+'/fun/getFunTreeByRoleID';
      this.$api.post(url1, p,
       r => {
         this.menudata = r.data;
         var arr = r.data;
         console.log(arr);
         this.menurr = [];
         this.uniteChildSame(arr);
         console.log('menurr',  this.menurr.length);
         this.defaultChecked = this.menurr;

       });


    },
    uniteChildSame(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked == true || arr[i].children != null) {
            this.selectChildSame(arr[i].children);
        }
      }
    },
    selectChildSame(arr){

      for (var i = 0; i < arr.length; i++) {

            if(arr[i].children!=null){
                this.selectChildSame(arr[i].children);
            }else {
                if(arr[i].checked==true){
                  this.menurr.push(arr[i].dm);
                }
            }
      }
    },
    save(){
      let checkList=this.$refs.tree.getCheckedNodes();
      var array=checkList;
      var childrenlist=new Array();
      console.log('checkList',checkList);

    if(checkList.length==0){
         this.$message.error('请选择功能项！');return false;
    }

     // for (var i = 0; i < array.length; i++) {
     //
     //    childrenlist.push(array[i].dm);
     // }
     childrenlist = this.$refs.tree.getHalfCheckedKeys().concat(this.$refs.tree.getCheckedKeys());
      var ff=new FormData();
      ff.append("token",this.$store.state.token);
      ff.append("roleid",this.roleid);
      ff.append("funids",childrenlist);
        let p=ff;
        var url=this.Global.aport1+'/fun/updateFunsToRole';
      this.$api.post(url, p,
        r => {
          if (r.success) {
            this.$message({
              type: 'success',
              message: '保存成功'
            });
            this.getList(this.CurrentPage,this.pageSize,this.pd);
this.menudata=[];
          }else{

            this.$message.error('保存失败');
          }
        })
    },
  }

}
</script>
<style scoped>
.yycontent{min-height: 600px!important;}
.el-col-8{border-right: 1px solid #eeeeee;padding:0px 20px; min-width: 350px!important;}
.el-col-4{padding:0px 30px;}
.input-text{ width: 40%!important;}
.input-input{width: 60%!important;}
.el-tree{max-height: 600px!important;overflow-y: scroll;}

</style>
<style>
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row>td, .el-table__body tr.hover-row.current-row>td, .el-table__body tr.hover-row.el-table__row--striped.current-row>td, .el-table__body tr.hover-row.el-table__row--striped>td, .el-table__body tr.hover-row>td
{background-color:#ECB96C !important;}
</style>
