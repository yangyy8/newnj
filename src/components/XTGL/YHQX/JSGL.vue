<template lang="html">
  <!-- 角色管理 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center" :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">所属单位：</span>
                   <el-select v-model="pd.org"  filterable clearable  default-first-option class="input-input" placeholder="请选择"  size="small">
                     <el-option
                      v-for="item in company"
                      :key="item.dm"
                      :label="item.mc"
                      :value="item.dm">
                    </el-option>
                   </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">角色名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.mc"   class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="adds(0,'');from={};">新增</el-button>
        </el-row>
      <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
            :default-sort = "{prop: 'cjsj', order: 'descending'}">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="mc"
             label="角色名">
           </el-table-column>
           <el-table-column
             prop="ssdw.mc"
             label="所属单位">
           </el-table-column>
           <el-table-column
             prop="sfyx"
             label="状态" width="100">
             <template slot-scope="scope">
              <span :class="{'yyred':scope.row.sfyx == '0','yyblue':scope.row.sfyx == '1'}">  {{scope.row.sfyx | fifterstatus}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="cjr.mc"
             label="创建人">
           </el-table-column>
           <el-table-column
             prop="cjdw.mc"
             label="创建单位">
           </el-table-column>
           <el-table-column
             prop="cjsj"
             label="创建时间">
           </el-table-column>

           <el-table-column
             label="操作" width="150">
             <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit-outline" @click="adds(1,scope.row);"></el-button>
             <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="停用"  v-if='scope.row.sfyx=="1"'  icon="iconfont el-icon-yy-tingyong3" @click="stop(scope.row,false)"></el-button>
             <el-button type="text"  class="a-btn"  title="启用"  v-if='scope.row.sfyx=="0"' icon="iconfont el-icon-yy-kaiqi" @click="stop(scope.row,true)"></el-button>
             <!-- <el-button type="text"  class="a-btn"  title="菜单权限"  icon="el-icon-setting" @click="menus(scope.row)"></el-button> -->
              <el-button type="text"  class="a-btn"  title="关联到用户"  icon="iconfont el-icon-yy-jiaoseyonghu" @click="relationyh(scope.row)"></el-button>
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
    <el-dialog :title="dialogText" :visible.sync="addsDialogVisible" width="600px" >
    <el-form :model="from" ref="addForm" >
         <el-row :gutter="1">
           <el-col :span="24" class="yzform" data-scope="demo" data-name="mc" data-type="input"
            v-validate-easy="[['required']]">
           <span class="yy-input-text" >角色名：</span>
            <el-input placeholder="请输入内容" size="small" v-model="from.mc"  class="yy-input-input"></el-input>
           </el-col>
           <el-col :span="24" class="yzform" data-scope="demo" data-name="ssdwdm" data-type="input"
            v-validate-easy="[['required']]">
           <span class="yy-input-text" >所属单位：</span>
           <el-select v-model="from.ssdwdm"  filterable clearable  default-first-option class="yy-input-input" placeholder="请选择"  size="small">
             <el-option
              v-for="item in company"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
           </el-select>
             <el-input placeholder="请输入内容" size="small" v-model="from.ssdwmc" v-show="ssdwmc"  class="yy-input-input"></el-input>
           </el-col>
           <el-col :span="24" class="yzform" data-scope="demo" data-name="sfyx" data-type="input"
            v-validate-easy="[['required']]">
           <span class="yy-input-text" >状态：</span>
           <el-select v-model="from.sfyx"  filterable clearable default-first-option  class="yy-input-input" placeholder="请选择"  size="small">
               <el-option value="1" label="有效">
               </el-option>
               <el-option value="0" label="无效">
               </el-option>
           </el-select>
           </el-col>
         </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addItem('addForm')" size="small">确 定</el-button>
      <el-button @click="addsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>

<el-dialog title="详情" :visible.sync="detailsDialogVisible" width="600px" >
  <el-form  ref="mapf">
    <el-row :gutter="1"  class="mb-6">

        <el-col :span="24" class="input-item">
          <span class="input-text">角色名：</span>
          <span class="input-input detailinput">  {{mapf.mc}}</span>
        </el-col>
        <el-col :span="24" class="input-item">
         <span class="input-text">所属单位：</span>
         <span class="input-input detailinput">  {{mapf.ssdwmc}}</span>
        </el-col>
        <el-col :span="24" class="input-item">
          <span class="input-text">状态：</span>
          <span class="input-input detailinput">  {{mapf.sfyx | fifterstatus}}</span>
        </el-col>
        <el-col :span="24" class="input-item">
         <span class="input-text">创建人：</span>
         <span class="input-input detailinput">  {{mapf.cjrmc}}</span>
        </el-col>
        <el-col :span="24" class="input-item">
         <span class="input-text">创建单位：</span>
         <span class="input-input detailinput">  {{mapf.cjdwmc}}</span>
        </el-col>
        <el-col :span="24" class="input-item">
         <span class="input-text">创建时间：</span>
         <span class="input-input detailinput">  {{mapf.cjsj}}</span>
        </el-col>
    </el-row>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
  </div>
</el-dialog>

<div class="mnus">
    <el-dialog title="临时赋权" :visible.sync="menuDialogVisible" width="500px">
      <el-tree
        :data="menudata"
        :check-strictly="true"
        show-checkbox
        default-expand-all
        node-key="dm"
        :default-checked-keys="defaultChecked"
        ref="tree"
        highlight-current
        :props="defaultProps">
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="menuItem" size="small">保 存</el-button>
        <el-button @click="menuDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
</div>

<el-dialog title="关联到用户" :visible.sync="yhDialogVisible">
  <el-row type="flex">
    <el-col :span="24">
          <el-row type="flex">
            <el-col :span="21" class="pr-20">
              <el-row align="center"   :gutter="2">
                <!-- <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">所属单位：</span>
                  <el-select v-model="pd1.org"  filterable clearable default-first-option  class="input-input" placeholder="请选择"  size="small">
                    <el-option
                     v-for="item in company"
                     :key="item.dm"
                     :label="item.mc"
                     :value="item.dm">
                   </el-option>
                  </el-select>
                </el-col> -->
               <el-col  :sm="24" :md="12" :lg="12"   class="input-item">
                  <span class="input-text">姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd1.mc"   class="input-input"></el-input>
              </el-col>
            </el-row>
           </el-col>
           <el-col :span="3">
              <el-button type="success" size="small" @click="CurrentPage1=1;getList1(CurrentPage1,pageSize1,pd1)">查询</el-button>
           </el-col>
          </el-row>
            <el-table
             ref="multipleTable1"
             :data="tableData1"
             border
             class="stu-table"
             style="width: 100%"
             @select="selectfn"
             @select-all="selectfn"
             @selection-change="handleSelectionChange1">
             <el-table-column
               type="selection"
               width="55">
             </el-table-column>
             <el-table-column
               prop="mc"
               label="姓名">
             </el-table-column>
             <el-table-column
               prop="ssdw.mc"
               label="所属单位">
             </el-table-column>
           </el-table>
           <div class="middle-foot mt-10">
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


    </el-col>
  </el-row>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="yhItem" size="small">保 存</el-button>
    <el-button @click="yhDialogVisible = false" size="small">取 消</el-button>
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
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      pd: {},
      pd1:{},
      from:{ssdwdm:'',ssdwmc:''},
      mapf:{},
      company:{},
      tp:0,
      dialogText:'新增',
      ssdwmc:false,
      addsDialogVisible:false,
      detailsDialogVisible:false,
      menuDialogVisible:false,
      yhDialogVisible:false,
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
      tableData: [],
      tableData1:[],

      // multipleSelection1:[],
    roleid:'',
    menudata:[],
    defaultProps: {
      children: 'children',
      label: 'mc'
    },
    defaultChecked:[],
    multipleSelection:[],
    selectionAll:[],
    yuid:[],
    selectionReal:[],

    }
  },

  mounted() {
     this.getCompany();
     this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  methods: {
    selectfn(a,b){
      this.multipleSelection = a;
      this.dataSelection()
    },
    dataSelection(){
      // console.log('this.multipleSelection',this.multipleSelection)
      this.selectionReal.splice(this.CurrentPage1-1,1,this.multipleSelection);

      console.log('this.selectionReal',this.selectionReal);
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
    // handleSelectionChange(val) {
    //   this.multipleSelection = val;
    // },
    handleSelectionChange1(val) {
      // this.multipleSelection1 = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange1(val) {
      this.pageSize1=val;
      this.getList1(this.CurrentPage1, val, this.pd1);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      this.CurrentPage1=val;
      this.getList1(val, this.pageSize1, this.pd1);
      console.log(`当前页: ${val}`);
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
           console.log('this.company',this.company);
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
    getList1(currentPage, showCount, pd) {
      // let _this=this;
      var formData = new FormData();
        formData.append("currentPage", currentPage);
        formData.append("showCount", showCount);
        formData.append("roleid", this.roleid);
        formData.append("mc", this.pd1.mc==undefined?"":this.pd1.mc);
        formData.append("token", this.$store.state.token);
        let p=formData;
        var url=this.Global.aport1+'/user/getAllByRelationalRole';
        this.$api.post(url, p,
         r => {
           this.tableData1 = r.data.resultList;
           this.TotalResult1 = r.data.totalCount;
           if(this.selectionReal.length==0){//声明一个数组对象
             this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
           }
           this.$nextTick(()=>{
             this.multipleSelection=[]
             for(var i=0;i<this.tableData1.length;i++){
               // for(var j=0;j<this.selectionAll.length;j++){
               //   if(this.tableData1[i].id==this.selectionAll[j].id){
                   // console.log(this.tableData1[i]);
                   this.$refs.multipleTable1.toggleRowSelection(this.tableData1[i],this.tableData1[i].checked);
               //   }
               // }
             }
           })
           // _this.$refs.multipleTable1.$nextTick(() => {
           //     _this.tableData1.forEach(obj => {
           //       console.log('obj.checked',obj.checked);
           //       _this.$refs.multipleTable1.toggleRowSelection(obj, obj.checked)
           //     })
           // })
         });
    },
    adds(n,i){
        // this.V.$reset("demo");
        this.addsDialogVisible=true;

        if (n != 0) {
          this.from=Object.assign({}, i);
          this.$set(this.from,'ssdwdm',i.ssdw.dm);
          // this.from.ssdwdm=i.ssdw.dm;
          // this.$set(this.from,'ssdwmc',i.ssdw.mc);
          // this.from.ssdwmc=i.ssdw.mc;
          this.dialogText="编辑";
          this.tp = 1;
        }else {
        this.dialogText="新增";
        this.tp = 0;
        }

    },
    addItem(addForm)
    {
       this.V.$submit('demo', (canSumit,data) =>{
         if(!canSumit) return;
         var formData = new FormData();
           formData.append("token", this.$store.state.token);
           formData.append("mc", this.from.mc);
           formData.append("ssdw.dm", this.from.ssdwdm);
           // formData.append("ssdw.mc", this.from.ssdwmc);
           formData.append("sfyx", this.from.sfyx);
         var url=this.Global.aport1+'/role/insertRole';
         if (this.tp == 1) {
           formData.append("id", this.from.id);

            url=this.Global.aport1+'/role/updateRole';
          }
          let p=formData;
         this.$api.post(url, p,
         r => {
               if(r.success){
                 this.$message({
                 message: '保存成功！',
                 type: 'success'
               });
                this.addsDialogVisible=false;
                  this.getList(this.CurrentPage, this.pageSize, this.pd);
               } else {
               this.$message.error(r.message);
             }
         }, e => {
             this.$message.error('失败了');
           }
         );
      });
    },
    //详情
      details(i)
      {
        this.mapf=i;
        this.mapf.ssdwmc=i.ssdw.mc;
        this.mapf.cjdwmc=i.cjdw.mc;
        this.mapf.cjrmc=i.cjr.mc;
        this.detailsDialogVisible=true;
      },
        //删除
      deletes(i) {
        var ff=new FormData();
          ff.append("token",this.$store.state.token);
          ff.append("id",i.id);
          let p = ff;
          var url=this.Global.aport1+'/role/deleteRole';
          this.$confirm('您是否确认删除？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
           }).then(() => {
            this.$api.post(url, p,
              r => {
                if (r.success) {
                  this.$message({
                    message: '删除成功！',
                    type: 'success'
                  });
                  this.getList(this.CurrentPage, this.pageSize, this.pd);
                } else {
                  this.$message.error(r.Message);
                }
              }, e => {
                this.$message.error('失败了');
              });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
    //停用
   stop(i,type) {
     var ff=new FormData();
       ff.append("token",this.$store.state.token);
       ff.append("id",i.id);
       ff.append("use",type);
       let p = ff;
        var ss="停用成功！"
        if(type){
          ss="启用成功！";
        }
          var url=this.Global.aport1+'/role/changeRole';
         this.$api.post(url, p,
           r => {
             if (r.success) {
               this.$message({
                 message: ss,
                 type: 'success'
               });
               this.getList(this.CurrentPage, this.pageSize, this.pd);
             } else {
               this.$message.error(r.Message);
             }
           }, e => {
             this.$message.error('失败了');
           });

     },
     //临时赋权
     menus(i) {
         this.menuDialogVisible = true;
         this.roleid=i.id;
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
            // console.log(r);
             if (r.success) {
               this.menudata = r.data;
               //let arr=r.data.userTreeOne,that=this;
               this.defaultChecked=lists;
             }
           })
       },
       menuItem(){

         let checkList=this.$refs.tree.getCheckedNodes();
         var array=checkList;
         var childrenlist=new Array();
         //console.log('checkList',checkList);
        for (var i = 0; i < array.length; i++) {

           childrenlist.push(array[i].dm);
        }
         // console.log('-----',childrenlist);
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
             }else{

               this.$message.error('保存失败');
             }
           })
               this.menuDialogVisible = false;

       },
       relationyh(i){
         this.roleid=i.id;
         this.getList1(this.CurrentPage1, this.pageSize1, this.pd1);
         this.yhDialogVisible=true;
       },

       yhItem()
       {
         console.log(this.multipleSelection);
         var formData = new FormData();
         if (this.multipleSelection.length == 0) {
               this.$message.error('请选择用户列表内容！');
              return;
         }
         var checkeds=[];var userids=[];
         for (var i = 0; i < this.selectionAll.length; i++)
         {  var s = this.selectionAll[i].id;
             userids.push(s);
             var gg=true;
             checkeds.push(gg);
         }

           formData.append("roleid", this.roleid);
           formData.append("userids", userids);
           formData.append("checkeds", checkeds);
           formData.append("token", this.$store.state.token);
           let p=formData;
           var url=this.Global.aport1+'/role/updateAllByRelationalRole';
           this.$api.post(url, p,
            r => {
              if (r.success) {
                this.$message({
                  type: 'success',
                  message: '保存成功'
                });
                 this.yhDialogVisible=false;
              }else{

                this.$message.error('保存失败');
              }
            });
       },
  },
  filters: {

    fifterstatus(val) {
      if (val == '0') {

        return "无效"

      } else if (val == '1'){
        return "有效"
      }
    },
  }
}
</script>

<style scoped>
.yy-input-text{ width: 20%!important;}
.yy-input-input{ width: 75%!important;}
</style>
<style>
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row>td, .el-table__body tr.hover-row.current-row>td, .el-table__body tr.hover-row.el-table__row--striped.current-row>td, .el-table__body tr.hover-row.el-table__row--striped>td, .el-table__body tr.hover-row>td
{background-color:#ECB96C !important;}
</style>
