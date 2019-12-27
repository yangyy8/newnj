<template lang="html">
  <!-- 功能授权 -->
  <div class="yymain">
    <div class="yycontent">
        <el-row type="flex">
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
          <el-col :span="16"  style="margin:10px;">
            <div class="ak-tabs">
              <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
                 授权到用户
              </div>
              <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
                 授权到角色
              </div>
            </div>

            <div class="ak-tab-pane" >
                <div v-show="page==0" >
                <el-row type="flex">
                  <el-col :span="20" class=" pr-20">
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
                        <span class="input-text">用户名称：</span>
                        <el-input placeholder="请输入内容" size="small" v-model="pd.mc"   class="input-input"></el-input>
                    </el-col>
                  </el-row>
                 </el-col>
                 <el-col :span="4">
                    <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)">查询</el-button>
                 </el-col>
                </el-row>
                <el-row type="flex">
                  <el-table
                   ref="multipleTable"
                   :data="tableData"
                   border
                   class="stu-table"
                   style="width: 100%"
                   @selection-change="handleSelectionChange1">
                   <el-table-column
                     type="selection"
                     width="50">
                   </el-table-column>
                   <el-table-column
                     prop="mc"
                     label="姓名">
                   </el-table-column>
                   <el-table-column
                     prop="ssdw"
                     label="所属单位">
                     <template slot-scope="scope">
                      <span>  {{getDM(scope.row.ssdw)}}</span>
                     </template>
                   </el-table-column>
                 </el-table>
                </el-row>
                 <div class="middle-foot" style="margin-top:10px">
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
                  <el-row type="flex">
                  <el-col style="text-align:right; margin-top:20px;" :span="24">
                      <el-button type="primary" @click="save(0)" size="small">保存功能授权</el-button>
                  </el-col>
                 </el-row>
               </div>
               <div v-show="page==1">
               <el-row type="flex">
                 <el-col :span="20" class=" pr-20">
                   <el-row align="center"   :gutter="2">
                     <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                       <span class="input-text">所属单位：</span>
                       <el-select v-model="pd1.org"  filterable clearable default-first-option  class="input-input" placeholder="请选择"  size="small">
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
                       <el-input placeholder="请输入内容" size="small" v-model="pd1.mc"   class="input-input"></el-input>
                   </el-col>
                 </el-row>
                </el-col>
                <el-col :span="4" class="alone-flex" style="margin-top: -8px;">
                   <el-button type="success" size="small" @click="getList1(CurrentPage,pageSize,pd)" class="tt-mr10">查询</el-button>
                   <el-button type="warning" size="small" @click="changeAll">全选</el-button>
                </el-col>
               </el-row>
               <el-row type="flex" style="margin:10px;">
                 <el-table
                  ref="multipleTable"
                  :data="tableData1"
                  border
                  class="stu-table"
                  style="width: 100%"

                  @selection-change="handleSelectionChange2">
                  <el-table-column
                    type="selection"
                    width="50">
                  </el-table-column>
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
                <div class="middle-foot" style="margin-top:10px">
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
                 <el-row type="flex">
                 <el-col style="text-align:right; margin-top:20px;" :span="24">
                     <el-button type="primary" @click="save(1)" size="small">保存功能授权</el-button>
                 </el-col>
                </el-row>

              </div>

            </div>

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
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      pd: {},
      pd1: {},
      tableData: [],
      tableData1: [],
      company: [],
      menudata: [],
      defaultProps: {
        children: 'children',
        label: 'mc'
      },
      defaultChecked: [],
      roleid: '',
      page: 0,
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
      multipleSelection1: [],
      multipleSelection2: [],
      allArr:[],
    }
  },
  mounted() {
    this.getList(this.CurrentPage, this.pageSize, this.pd);
    this.getList1(this.CurrentPage1, this.pageSize1, this.pd1);
    this.getCompany();
    this.getMenu();
  },
  methods: {
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSelectionChange1(val) {
      this.multipleSelection1 = val;
    },
    handleSelectionChange2(val) {
      this.multipleSelection2 = val;
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
      this.getList1(this.CurrentPage1, val, this.pd1);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      this.getList1(val, this.pageSize1, this.pd1);
      console.log(`当前页: ${val}`);
    },
    getCompany() {
      var formData = new FormData();
      formData.append("org", this.Global.org);
      formData.append("token", this.$store.state.token);
      let p = formData;
      var url = this.Global.aport1 + '/org/getSelfAndChilds';
      this.$api.post(url, p,
        r => {
          this.company = r.data;
        });
    },
    getList(currentPage, showCount, pd) {
      var formData = new FormData();
      formData.append("currentPage", currentPage);
      formData.append("showCount", showCount);
      formData.append("org", this.pd.org == undefined ? this.Global.org : this.pd.org);
      formData.append("mc", this.pd.mc == undefined ? "" : this.pd.mc);
      formData.append("token", this.$store.state.token);
      let p = formData;
      var url = this.Global.aport1 + '/user/getAll';
      this.$api.post(url, p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalCount;
        });
    },
    getList1(currentPage, showCount, pd) {
      var formData = new FormData();
      formData.append("currentPage", currentPage);
      formData.append("showCount", showCount);
      formData.append("org", this.pd1.org == undefined ? this.Global.org : this.pd1.org);
      formData.append("mc", this.pd1.mc == undefined ? "" : this.pd1.mc);
      formData.append("token", this.$store.state.token);
      let p = formData;
      var url = this.Global.aport1 + '/role/getAll';
      this.$api.post(url, p,
        r => {
          this.tableData1 = r.data.resultList;
          this.TotalResult1 = r.data.totalCount;
        });
    },
    getMenu() {
      var ff = new FormData();
      ff.append("token", this.$store.state.token);
      let p = ff;
      var url1 = this.Global.aport1 + '/fun/getBatchNavigation';
      this.$api.post(url1, p,
        r => {
          if(r.success){
            console.log('r.data.checked')
            this.menudata = r.data;
            var url=this.Global.aport1+'/fun/getDefaultFunTree';
            this.$api.post(url, p,
            rr=>{
              if(rr.success){
                console.log('r.data.checked',rr.data.checked)
                this.defaultChecked = rr.data.checked;
                console.log('this.defaultChecked',this.defaultChecked)
              }
            });
          }

      });

    },
    changeAll(){
      this.allArr = [];
      var p = new FormData();
      p.append("token", this.$store.state.token);
      p.append("org", this.pd.org == undefined ? this.Global.org : this.pd.org);
      p.append("mc", this.pd.mc == undefined ? "" : this.pd.mc);
      this.$api.post(this.Global.aport1 + '/role/getAllRole',p,
       r =>{
         if(r.success){
           for(i=0;i<r.data.length;i++){
             this.allArr.push(r.data[i].id)
           }
         }
       })
       return this.allArr
    },
    save(n) {
      let checkList = this.$refs.tree.getCheckedNodes();
      var array = checkList;
      var childrenlist = new Array();
      console.log('checkList', checkList);

      if (checkList.length == 0) {
        this.$message.error('请选择功能项！');
        return false;
      }

      // for (var i = 0; i < array.length; i++) {
      //
      //   childrenlist.push(array[i].dm);
      // }
      childrenlist = this.$refs.tree.getHalfCheckedKeys().concat(this.$refs.tree.getCheckedKeys());
      var url = '';
      var ff = new FormData();
      if (n == 0) {
        url = this.Global.aport1 + '/fun/batchUpdateFunsToUsers';
        if (this.multipleSelection1.length == 0) {
          this.$message.error('请选择用户列表内容！');
          return;
        }
        var orgs = [];
        var users = [];
        for (var i = 0; i < this.multipleSelection1.length; i++) {

          var gg=this.multipleSelection1[i].dwdm;
          orgs.push(gg);
          var s = this.multipleSelection1[i].id;
          var ssr=gg.split(',');
          for (var j = 0; j < ssr.length; j++) {

               users.push(s);
          }
        }
        ff.append("orgs", orgs);
        ff.append("users", users);

      } else if (n == 1){
        url = this.Global.aport1 + '/fun/batchUpdateFunsToRoles';
        if (this.multipleSelection2.length == 0) {
          this.$message.error('请选择角色列表内容！');
          return;
        }
        var roleids = [];
        for (var i = 0; i < this.multipleSelection2.length; i++) {
          var s = this.multipleSelection2[i].id;
          roleids.push(s);
        }
        ff.append("roleids", roleids);
      }else if(n==2){
        url = this.Global.aport1 + '/fun/batchUpdateFunsToRoles';
        ff.append("roleids", this.changeAll());
      }
      ff.append("token", this.$store.state.token);
      ff.append("funids", childrenlist);
      let p = ff;
      this.$api.post(url, p,
        r => {
          if (r.success) {
            this.$message({
              type: 'success',
              message: '保存成功'
            });
            this.getMenu();
            this.getList(this.CurrentPage, this.pageSize, this.pd);
            this.getList1(this.CurrentPage1, this.pageSize1, this.pd1);

          } else {

            this.$message.error('保存失败');
          }
        })
          //this.getList(this.CurrentPage, this.pageSize, this.pd);
          //this.getList1(this.CurrentPage1, this.pageSize1, this.pd1);
    },
    getDM(n) {

      var sum = '';
      for (var i = 0; i < n.length; i++) {
        sum = sum + ',' + n[i].mc;
      }
      return sum.substring(1, sum.length);;
    },
  }

}
</script>
<style scoped>
.yycontent {
  min-height: 600px !important;
}

.el-col-8 {
  border-right: 1px solid #eeeeee;
  padding: 0px 20px;
  min-width: 350px !important;
}

.el-col-4 {
  padding: 0px 30px;
}

.input-text {
  width: 40% !important;
}

.input-input {
  width: 60% !important;
}

.el-tree {
  max-height: 600px !important;
  overflow-y: scroll;
}
</style>
<style>
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row>td,
.el-table__body tr.hover-row.current-row>td,
.el-table__body tr.hover-row.el-table__row--striped.current-row>td,
.el-table__body tr.hover-row.el-table__row--striped>td,
.el-table__body tr.hover-row>td {
  background-color: #ECB96C !important;
}
</style>
