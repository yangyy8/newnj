<template lang="html">
  <!-- 用户管理 -->
  <div class="yymain">
    <div class="yytitle">

      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
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
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">姓名：</span>
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
        <el-button type="primary"  size="small" @click="from={};adds(0,'');">新增</el-button>
        </el-row>
      <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <el-table-column
             type="selection"
             width="55">
           </el-table-column>

           <el-table-column
             prop="dlm"
             label="登录号/警号">
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
           <el-table-column
             label="状态">
             <template slot-scope="scope">
              <span :class="{'yyred':scope.row.sfyx == '0','yyblue':scope.row.sfyx == '1'}">  {{scope.row.sfyx | fifterstatus}}</span>
             </template>
           </el-table-column>
           <el-table-column
             label="操作" width="260">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit-outline" @click="adds(1,scope.row);"></el-button>
             <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="停用"  v-if='scope.row.sfyx=="1"'  icon="iconfont el-icon-yy-tingyong3" @click="stop(scope.row,false)"></el-button>
             <el-button type="text"  class="a-btn"  title="启用"  v-if='scope.row.sfyx=="0"' icon="iconfont el-icon-yy-kaiqi" @click="stop(scope.row,true)"></el-button>
             <el-button type="text"  class="a-btn"  title="重置密码"  icon="iconfont el-icon-yy-zhongzhimima1" @click="resetpwd(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="临时赋权"  icon="iconfont el-icon-yy-jiaoseguanli" @click="menus(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="关联到角色"  icon="iconfont el-icon-yy-jiaoseliebiao" @click="relationjs(scope.row)"></el-button>
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
    <el-form :model="from" ref="addForm">
         <el-row :gutter="1">
           <el-col :span="24" class="yzform" data-scope="demo" data-name="dlm" data-type="input"
            v-validate-easy="[['required']]">
           <span class="yy-input-text">登录名/警号：</span>
             <el-input placeholder="请输入内容" size="small" v-model="from.dlm"  class="yy-input-input"></el-input>
           </el-col>
           <el-col :span="24" class="yzform" data-scope="demo" data-name="pwd" data-type="input"
            v-validate-easy="[['required']]">
           <span class="yy-input-text" >密码：</span>
             <el-input type="password" placeholder="请输入内容" size="small" v-model="from.pwd"  class="yy-input-input"></el-input>
           </el-col>
           <el-col :span="24" class="yzform" data-scope="demo" data-name="mc" data-type="input"
            v-validate-easy="[['required']]">
           <span class="yy-input-text" >姓名：</span>
             <el-input placeholder="请输入内容" size="small" v-model="from.mc"  class="yy-input-input"></el-input>
           </el-col>
           <el-col :span="24" class="yzform" data-scope="demo" data-name="sfzh" data-type="input"
            v-validate-easy="[['required']]">
           <span class="yy-input-text" >身份证号：</span>
             <el-input placeholder="请输入内容" size="small" v-model="from.sfzh"  class="yy-input-input"></el-input>
           </el-col>

           <el-col :span="24" class="yzform" data-scope="demo" data-name="dwdm" data-type="multiple"
            v-validate-easy="[['required']]">
           <span class="yy-input-text" >所属单位：</span>
           <el-select v-model="from.dwdm" multiple class="yy-input-input" placeholder="请选择"  size="small">
             <el-option
              v-for="item in company"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
           </el-select>
            <el-input  placeholder="请输入内容" size="small" v-model="from.ssdwmc" v-show='ssdwmc'></el-input>
           </el-col>
           <el-col :span="24" class="yzform" data-scope="demo" data-name="dlm" data-type="input"
            v-validate-easy="[['required']]">
           <span class="yy-input-text" >状态：</span>
           <el-select v-model="from.sfyx"  filterable clearable  default-first-option class="yy-input-input" placeholder="请选择"  size="small">
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
    <el-dialog title="详情" :visible.sync="detailsDialogVisible" width="600px">
      <el-form   ref="mapForm">
        <el-row :gutter="1"  class="mb-6">
            <el-col :span="24" class="input-item">
             <span class="input-text">登录名/警号：</span>
             <span class="input-input detailinput">  {{mapForm.dlm}}</span>
            </el-col>
            <el-col :span="24" class="input-item">
              <span class="input-text">姓名：</span>
              <span class="input-input detailinput">  {{mapForm.mc}}</span>
            </el-col>
            <el-col :span="24" class="input-item">
              <span class="input-text">身份证号：</span>
              <span class="input-input detailinput">  {{mapForm.sfzh}}</span>
            </el-col>
            <el-col :span="24" class="input-item">
             <span class="input-text">所属单位：</span>
             <span class="input-input detailinput">  {{mapForm.ssdwmc}}</span>
            </el-col>
            <el-col :span="24" class="input-item">
              <span class="input-text">状态：</span>
              <span class="input-input detailinput">  {{mapForm.sfyx | fifterstatus}}</span>
            </el-col>
        </el-row>
      </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
    </div>
    </el-dialog>
<div class="mnus">
    <el-dialog title="临时赋权" :visible.sync="menuDialogVisible" width="600px">
      <el-row  :gutter="1">
        <el-col :span="24">
          <span class="yy-input-text">所属单位：</span>
           <el-select v-model="pd2.org"  filterable clearable  default-first-option class="yy-input-input" @change="getMnus(pd2.org)" placeholder="请选择"  size="small">
             <el-option
              v-for="item in this.ssdw"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
           </el-select>
        </el-col>

      <el-col :span="24">
          <span class="yy-input-text">单位赋权：</span>

      <el-tree
        :data="menudata"
        show-checkbox
        default-expand-all
        node-key="dm"
        :default-checked-keys="defaultChecked"
        ref="tree"
        highlight-current
        class="yy-input-input"
        style="padding-left:20%;"
        :props="defaultProps">
      </el-tree>
    </el-col>
   </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="menuItem" size="small">保 存</el-button>
        <el-button @click="menuDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
</div>

  <el-dialog title="关联到角色" :visible.sync="jsDialogVisible">
    <el-row type="flex">
      <el-col :span="24">
            <el-row type="flex">
              <el-col :span="21" class="pr-20">
                <el-row align="center"   :gutter="2">
                  <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">所属单位：</span>
                    <el-select v-model="pd1.org"  filterable clearable  @change="getorgchange()"  class="input-input" placeholder="请选择"  size="small">
                      <el-option
                       v-for="item in this.ssdw"
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
               @selection-change="handleSelectionChange1">
               <el-table-column
                 type="selection"
                 width="55">
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
      <el-button type="primary" @click="jsItem" size="small">保 存</el-button>
      <el-button @click="jsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script>
import {
  ToData
} from '@/assets/js/ToArray.js'
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      rddw: false,
      pd: {},
      pd1: {},
      pd2: {},
      from: {
        ssdwdm: '',
        ssdwmc: ''
      },
      mapForm: {},
      tp: 0,
      company: [],
      dialogText: '新增',
      ssdwmc: false,
      addsDialogVisible: false,
      detailsDialogVisible: false,
      menuDialogVisible: false,
      jsDialogVisible: false,
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
      tableData1: [],
      multipleSelection: [],
      multipleSelection1: [],
      menudata: [],
      defaultProps: {
        children: 'children',
        label: 'mc'
      },
      defaultChecked: [],
      userid: '',
      org: '',
      ssdw: [],
      menurr: [],

    }
  },
  mounted() {
    this.getCompany();
    this.getList(this.CurrentPage, this.pageSize, this.pd);
    console.log(this.from)
  },
  methods: {

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSelectionChange1(val) {
      this.multipleSelection1 = val;
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
      this.getLis1t(this.CurrentPage1, val, this.pd1);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      this.getList1(val, this.pageSize1, this.pd1);
      console.log(`当前页: ${val}`);
    },
    changeValue(value) {
      this.$forceUpdate();
      let obj = {};
      obj = this.company.find((item) => {
        return item.dm === value;
      });
      this.from.ssdwmc = obj.mc;
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

      let _this = this;
      if (this.pd1.org == '' || this.pd1.org == undefined) {
        this.$message.error('所属单位不能为空！');
        return;
      }
      var formData = new FormData();
      formData.append("currentPage", currentPage);
      formData.append("showCount", showCount);
      formData.append("org", this.pd1.org == undefined ? this.Global.org : this.pd1.org);
      formData.append("mc", this.pd1.mc == undefined ? "" : this.pd1.mc);
      formData.append("token", this.$store.state.token);
      formData.append("userid", this.userid);
      let p = formData;
      var url = this.Global.aport1 + '/role/getAllByRelationalUser';
      this.$api.post(url, p,
        r => {
          this.tableData1 = r.data.resultList;
          this.TotalResult1 = r.data.totalCount;
          _this.$refs.multipleTable1.$nextTick(() => {
            _this.tableData1.forEach(obj => {
              _this.$refs.multipleTable1.toggleRowSelection(obj, obj.checked)
            })
          })

        });
    },

    getDM(n) {

      var sum = '';
      for (var i = 0; i < n.length; i++) {
        sum = sum + ',' + n[i].mc;
      }
      return sum.substring(1, sum.length);;
    },
    adds(n, i) {

      // this.V.$reset("demo");

      if (n != 0) {
        //this.from.ssdwdm=ToData(i.ssdw.dm);
        var formData = new FormData();
        formData.append("id", i.id);
        formData.append("token", this.$store.state.token);
        let p = formData;
        this.$api.post(this.Global.aport1 + '/user/getById', p,
          r => {
            this.from = r.data;
            var arr = r.data.dwdm.split(',');
            this.from.dwdm = arr;

          });
        this.dialogText = "编辑";
        this.tp = 1;
      } else {
        this.from = {};
        this.$set(this.from, 'dwdm', []);
        this.dialogText = "新增";
        this.tp = 0;
      }
      this.addsDialogVisible = true;

    },
    //添加和编辑
    addItem(addForm) {

      this.V.$submit('demo', (canSumit, data) => {
        // canSumit为true时，则所有该scope的所有表单验证通过
        if (!canSumit) return;
        // 只有验证全部通过才会执行
        var formData = new FormData();
        formData.append("token", this.$store.state.token);
        formData.append("dlm", this.from.dlm);
        formData.append("pwd", this.from.pwd);
        formData.append("mc", this.from.mc);
        formData.append("sfyx", this.from.sfyx);
        formData.append("sfzh", this.from.sfzh);
        formData.append("dwdm", this.from.dwdm);
        // formData.append("ssdw.mc", this.from.ssdwmc);
        var url = this.Global.aport1 + '/user/insertUser';
        if (this.tp == 1) {
          formData.append("id", this.from.id);
          url = this.Global.aport1 + '/user/updateUser';
        }
        let p = formData;
        this.$api.post(url, p,
          r => {
            if (r.success) {
              this.$message({
                message: '保存成功！',
                type: 'success'
              });
              this.addsDialogVisible = false;
              this.getList(this.CurrentPage, this.pageSize, this.pd);
            } else {
              this.$message.error(r.message);
            }
          }, e => {
            this.$message.error('失败了');
          }

        );
        this.getList(this.CurrentPage, this.pageSize, this.pd);
      });
    },

    //详情
    details(i) {
      this.mapForm = i;
      var array=i.ssdw;
      var srr="";
      for (var i = 0; i < array.length; i++) {
          srr += array[i].mc+',';
      }
      this.mapForm.ssdwmc = srr.substring(0,srr.length-1);
      this.detailsDialogVisible = true;
    },
    //删除
    deletes(i) {
      var ff = new FormData();
      ff.append("token", this.$store.state.token);
      ff.append("id", i.id);
      let p = ff;
      var url = this.Global.aport1 + '/user/deleteUser';
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
    //重置密码
    resetpwd(i) {
      var ff = new FormData();
      ff.append("token", this.$store.state.token);
      ff.append("id", i.id);
      let p = ff;
      var url = this.Global.aport1 + '/user/resetPassword';
      this.$confirm('您是否要重置密码为0000？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api.post(url, p,
          r => {
            if (r.success) {
              this.$message({
                message: '重置成功！',
                type: 'success'
              });
              this.getList(this.CurrentPage, this.pageSize, this.pd);
            } else {
              this.$message.error(r.message);
            }
          }, e => {
            this.$message.error('失败了');
          });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消重置'
        });
      });
    },
    //停用
    stop(i, type) {
      var ff = new FormData();
      ff.append("token", this.$store.state.token);
      ff.append("id", i.id);
      ff.append("use", type);
      let p = ff;
      var ss = "停用成功！"
      if (type) {
        ss = "启用成功！";
      }
      var url = this.Global.aport1 + '/user/changeUser';
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
      this.pd2 = {};
      this.menudata = [];
      this.menuDialogVisible = true;
      this.userid = i.id;
      var ff = new FormData();
      ff.append("token", this.$store.state.token);
      ff.append("org", this.pd2.org);
      ff.append("userid", this.userid);
      let p = ff;

      this.$api.post(this.Global.aport1 + '/user/getSsdwByUserId', p,
        rr => {
          this.ssdw = rr.data;
        });

    },

    getMnus(v) {
      var ff = new FormData();
      ff.append("token", this.$store.state.token);
      ff.append("org", v);
      ff.append("userid", this.userid);
      let p = ff;

      //var lists = new Array();
      // var url1 = this.Global.aport1 + '/fun/getByUserID';
      // this.$api.post(url1, p,
      //   rr => {
      //     var arrs = rr.data;
      //     for (var i = 0; i < arrs.length; i++) {
      //       lists.push(arrs[i].id);
      //     }
      //   });
      var url = this.Global.aport1 + '/fun/getFunTreeByUserID';
      this.$api.post(url, p,
        r => {
          if (r.success) {
            this.menudata = r.data;
            var arr = r.data;
            console.log(arr);
            this.menurr = [];
            this.uniteChildSame(arr);
            console.log('menurr',  this.menurr.length);
            this.defaultChecked = this.menurr;
          }
        })
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

    open(content) {
      this.$alert(content, '提示', {
        confirmButtonText: '确定',
      });
    },
    //保存赋权
    menuItem() {

      if (this.pd2.org == undefined || this.pd2.org == '') {
        this.open("请选择所属单位！");
        return;
      }

      let checkList = this.$refs.tree.getCheckedNodes();

      if (checkList.length == 0) {
        this.open("请选择权限！");
        return;
      }
      var array = checkList;
      var childrenlist = new Array();
      // for (var i = 0; i < array.length; i++) {
      //
      //   childrenlist.push(array[i].dm);
      // }
      childrenlist = this.$refs.tree.getHalfCheckedKeys().concat(this.$refs.tree.getCheckedKeys());
      var ff = new FormData();
      ff.append("token", this.$store.state.token);
      ff.append("userid", this.userid);
      if (this.pd2.org != undefined) {
        ff.append("org", this.pd2.org);
      }
      ff.append("funids", childrenlist);
      let p = ff;
      var url = this.Global.aport1 + '/fun/updateFunsToUser';
      this.$api.post(url, p,
        r => {
          if (r.success) {
            this.$message({
              type: 'success',
              message: '保存成功'
            });
          } else {

            this.$message.error('保存失败');
          }
        })
      this.menuDialogVisible = false;

    },
    //关联到角色
    relationjs(i) {
      this.userid = i.id;

      var ffs = new FormData();
      ffs.append("token", this.$store.state.token);
      ffs.append("userid", i.id);
      let pp = ffs;
      this.$api.post(this.Global.aport1 + '/user/getSsdwByUserId', pp,
        rr => {
        this.ssdw = rr.data;
        this.pd1 = {};


        this.$set(this.pd1,'org', this.ssdw[0].dm)
        this.tableData1 = [];

        this.getList1(this.CurrentPage1,this.pageSize1,this.pd1);
        this.jsDialogVisible = true;
        });


      // var formData = new FormData();
      //   formData.append("currentPage", this.CurrentPage1);
      //   formData.append("showCount", this.pageSize1);
      //   formData.append("org", this.pd1.org);
      //   formData.append("mc", this.pd1.mc==undefined?"":this.pd1.mc);
      //   formData.append("token", this.$store.state.token);
      //   let p=formData;
      //   var url=this.Global.aport1+'/role/getAll';
      //   this.$api.post(url, p,
      //    r => {
      //      this.tableData1 = r.data.resultList;
      //      this.TotalResult1 = r.data.totalCount;
      //    });
    },
    getorgchange(){
      // this.pd1.org=this.pd1.org;
      console.log(this.pd1.org);
    },
    //保存关联到角色
    jsItem() {

      var formData = new FormData();
      if (this.multipleSelection1.length == 0) {
        this.$message.error('请选择角色列表内容！');
        return;
      }
      var checkeds = [];
      var roleids = [];
      for (var i = 0; i < this.multipleSelection1.length; i++) {
        var s = this.multipleSelection1[i].id;
        roleids.push(s);
        var gg = true;
        checkeds.push(gg);
      }

      formData.append("userid", this.userid);
      formData.append("roleids", roleids);
      formData.append("checkeds", checkeds);
      formData.append("token", this.$store.state.token);
      let p = formData;
      var url = this.Global.aport1 + '/role/updateAllByRelationalUser';
      this.$api.post(url, p,
        r => {
          if (r.success) {
            this.$message({
              type: 'success',
              message: '保存成功'
            });
            this.jsDialogVisible = false;
          } else {

            this.$message.error('保存失败');
          }
        });
    },
  },
  filters: {

    fifterstatus(val) {
      if (val == '0') {

        return "无效"

      } else if (val == '1') {
        return "有效"
      }
    },
  }
}
</script>

<style scoped>
.yy-input-text {
  width: 20% !important;
}

.yy-input-input {
  width: 75% !important;
}
</style>
<style>
.mnus .el-dialog__body {
  max-height: 400px !important;
  overflow-y: scroll;
}
</style>
