<template lang="html">
<div class="czxx">
  <div class="ak-tabs">
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
      人员基本信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
      国家地区信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==2}" @click="base2">
      材料信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==3}" @click="base3">
      证件信息
    </div>
  </div>

  <div class="ak-tab-pane">
    <div v-show="page==0" style="padding:0 15px;">
      <el-row :gutter="3"  class="mb-6">
        <el-col :span="8" class="input-item">
          <span class="input-text" title="通报人员类别">通报人员类别：</span>
          <span class="input-input detailinput">  {{jbinfo.TBRYZL_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">英文姓：</span>
          <span class="input-input detailinput">  {{jbinfo.YWX}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">英文名：</span>
          <span class="input-input detailinput"> {{jbinfo.YWM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">性别：</span>
          <span class="input-input detailinput">  {{jbinfo.XB_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{jbinfo.CSRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">通报编号：</span>
          <span class="input-input detailinput">  {{jbinfo.FBSJ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">发布时间：</span>
          <span class="input-input detailinput">  {{jbinfo.FBSJ}}</span>
        </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">更新时间：</span>
            <span class="input-input detailinput">{{jbinfo.GXSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">是否有效：</span>
            <span class="input-input detailinput">{{jbinfo.ISDEL_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="DTID 唯一编号">DTID 唯一编号：</span>
            <span class="input-input detailinput">{{jbinfo.DTID}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="第一次入库时间">第一次入库时间：</span>
            <span class="input-input detailinput">  {{jbinfo.RKSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">备注：</span>
            <span class="input-input detailinput"> {{jbinfo.BZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="最近删除时间">最近删除时间：</span>
            <span class="input-input detailinput">  {{jbinfo.DELTIME}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="出生日期精准度">出生日期精准度：</span>
            <span class="input-input detailinput">  {{jbinfo.CSRQJZD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="导入文件路径">导入文件路径：</span>
            <span class="input-input detailinput">  {{jbinfo.PATHFILE}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">人员编号：</span>
            <span class="input-input detailinput">  {{jbinfo.RYBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">创建时间：</span>
            <span class="input-input detailinput">  {{jbinfo.CJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">修改时间：</span>
            <span class="input-input detailinput">  {{jbinfo.XGSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">入表日期：</span>
            <span class="input-input detailinput">  {{jbinfo.RQRB}}</span>
          </el-col>
      </el-row>
    </div>
    <div v-show="page==1" style="padding:0 15px;">
      <el-table
          :data="tableDatagj"
          @row-click="getGj"
          border
          style="width: 100%">
          <el-table-column
            prop="TBBH"
            label="通报人员编号">
          </el-table-column>
          <el-table-column
            prop="GJDQ_DESC"
            label="国家地区">
          </el-table-column>
          <el-table-column
            prop="SJLX_DESC"
            label="数据类型">
          </el-table-column>
          <el-table-column
            label="操作" width="80">
            <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,'gj')"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult1}}条
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
            :current-page:sync="CurrentPage1"
            :page-size="pageSize1"
            layout="prev, pager, next"
            :total="TotalResult1">
          </el-pagination>
        </div>
      <div v-if="gjshow" class="mt-10">
        <hr/>
        <el-row :gutter="3"  class="mb-6">
          <el-col :span="8" class="input-item">
            <span class="input-text" title="通报人员编号">通报人员编号：</span>
            <span class="input-input detailinput">  {{gjinfo.TBBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="国家地区">国家地区：</span>
            <span class="input-input detailinput">  {{gjinfo.GJDQ_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">数据类型：</span>
            <span class="input-input detailinput"> {{gjinfo.SJLX_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">是否有效：</span>
            <span class="input-input detailinput">  {{gjinfo.SFYX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">人员编号：</span>
            <span class="input-input detailinput">  {{gjinfo.RYBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">创建时间：</span>
            <span class="input-input detailinput">  {{gjinfo.CJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">更新时间：</span>
            <span class="input-input detailinput">  {{gjinfo.GXSJ}}</span>
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-show="page==2" style="padding:0 15px;">
      <el-table
          :data="tableDatacl"
          border
          @row-click="getCl"
          style="width: 100%;">
          <el-table-column
            prop="SJLX"
            label="数据类型">
          </el-table-column>
          <el-table-column
            prop="SJNAME"
            label="数据名称">
          </el-table-column>
          <el-table-column
            prop="SJLY"
            label="数据来源">
          </el-table-column>
          <el-table-column
            label="操作" width="80">
            <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,'cl')"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult2}}条
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
            :current-page:sync="CurrentPage2"
            :page-size="pageSize2"
            layout="prev, pager, next"
            :total="TotalResult2">
          </el-pagination>
        </div>
        <div v-if="clshow" class="mt-10">
          <hr/>
          <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
              <span class="input-text">数据类型：</span>
              <span class="input-input detailinput">  {{clinfo.SJLX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">创建时间：</span>
              <span class="input-input detailinput">  {{clinfo.CREATETIME}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">内容：</span>
              <span class="input-input detailinput">  {{clinfo.NR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="数据材料类型">数据材料类型：</span>
              <span class="input-input detailinput">  {{clinfo.SJPAPERTYPE}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">是否编辑：</span>
              <span class="input-input detailinput">  {{clinfo.CANEDIT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="数据名称">数据名称：</span>
              <span class="input-input detailinput">  {{clinfo.SJNAME}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="数据来源">数据来源：</span>
              <span class="input-input detailinput">  {{clinfo.SJLY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="通报编号">通报编号：</span>
              <span class="input-input detailinput">  {{clinfo.TBBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="MD5加密串">MD5加密串：</span>
              <span class="input-input detailinput">  {{clinfo.MD5STREAM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="人员编号">人员编号：</span>
              <span class="input-input detailinput">  {{clinfo.RYBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="创建时间">创建时间：</span>
              <span class="input-input detailinput">  {{clinfo.CJSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新时间">更新时间：</span>
              <span class="input-input detailinput">  {{clinfo.GXSJ}}</span>
            </el-col>
          </el-row>
        </div>
    </div>
    <div v-show="page==3">
      <el-table
          :data="tableDatazj"
          border
          @row-click="getZj"
          style="width: 100%">
          <el-table-column
            prop="GZXXBT"
            label="走访信息">
          </el-table-column>
          <el-table-column
            prop="GZQKMS"
            label="工作情况描述">
          </el-table-column>
          <el-table-column
            prop="ZFRQ"
            label="走访日期">
          </el-table-column>
          <el-table-column
            prop="JJCS"
            label="解决措施">
          </el-table-column>
          <el-table-column
            prop="ZT"
            label="状态">
          </el-table-column>
          <el-table-column
            label="操作" width="80">
            <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,'zj')"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult3}}条
            </div>
            <div class="">
              每页显示
              <el-select v-model="pageSize3" @change="pageSizeChange3(pageSize3)" placeholder="10" size="mini" class="page-select">
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
              共{{Math.ceil(TotalResult3/pageSize3)}}页
            </div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange3"
            :current-page:sync="CurrentPage3"
            :page-size="pageSize3"
            layout="prev, pager, next"
            :total="TotalResult3">
          </el-pagination>
        </div>

        <div v-if="zjshow" class="mt-10">
          <hr/>
          <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
              <span class="input-text" title="通报编号">通报编号：</span>
              <span class="input-input detailinput">  {{zjinfo.TBBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="证件种类">证件种类：</span>
              <span class="input-input detailinput">  {{zjinfo.ZJZL}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="证件号码">证件号码：</span>
              <span class="input-input detailinput">  {{zjinfo.ZJHM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="业务DTID">业务DTID：</span>
              <span class="input-input detailinput">  {{zjinfo.YWDTID}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="人员编号">人员编号：</span>
              <span class="input-input detailinput">  {{zjinfo.RYBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="创建时间">创建时间：</span>
              <span class="input-input detailinput">  {{zjinfo.CJSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新时间">更新时间：</span>
              <span class="input-input detailinput">  {{zjinfo.GXSJ}}</span>
            </el-col>
          </el-row>
          </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:'TBRYXX',
  props:['xid','random'],
  data(){
    return{
      pd:{},
      page:0,
      jbinfo:{},

      tableDatagj:[],
      gjshow:false,
      gjinfo:{},

      tableDatacl:[],
      clshow:false,
      clinfo:{},

      tableDatazj:[],
      zjshow:false,
      zjinfo:{},

      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      CurrentPage2: 1,
      pageSize2: 10,
      TotalResult2: 0,
      CurrentPage3: 1,
      pageSize3: 10,
      TotalResult3: 0,
      options:[{
        value: 10,
        label: "10"
      },
      {
        value:20,
        label: "20"
      },
      {
        value: 30,
        label: "30"
      }
    ],
    }
  },
  mounted(){
      this.getData();
   },
  watch:{
    random:function(newVal,oldVal){
      this.random=newVal;
      this.getData();
    },
  },

  methods:{
    getDetails(){},
    pageSizeChange1(val) {
      this.gettableDatagj(this.CurrentPage1,val,this.pd);
    },
    handleCurrentChange1(val) {
      this.gettableDatagj(val,this.pageSize1,this.pd);
    },
    pageSizeChange2(val) {
      this.gettableDatacl(this.CurrentPage2,val,this.pd);
    },
    handleCurrentChange2(val) {
      this.gettableDatacl(val,this.pageSize2,this.pd);
    },
    pageSizeChange3(val) {
     this.gettableDatazj(this.CurrentPage3,val,this.pd);
    },
    handleCurrentChange3(val) {
     this.gettableDatazj(val,this.pageSize3,this.pd);
    },
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
    },
    base2() {
      this.page = 2;
    },
    base3() {
      this.page = 3;
    },
    // initData(){
    //   switch (this.types) {
    //     case 1://预警
    //     case 2://人员画像
    //     case 3://数据分析
    //         this.getData2();
    //         break;
    //     default:
    //   }
    // },
    getData(){
      this.jbinfo = this.xid;
      this.pd.YWDTID=this.xid.DTID;
      this.gettableDatagj(this.CurrentPage1,this.pageSize1,this.pd);
      this.gettableDatacl(this.CurrentPage2,this.pageSize2,this.pd);
      this.gettableDatazj(this.CurrentPage3,this.pageSize3,this.pd);
    },
    // 国家信息
   gettableDatagj(currentPage,showCount,pd){
     let pp = {
       "pd": pd,
       "currentPage":currentPage,
       "showCount":showCount,
     };
     this.$api.post(this.Global.aport3+'/ryhx/gettbrygjdq', pp,
      r => {
        if(r.success){
          this.tableDatagj=r.data.resultList;
          this.TotalResult1=r.data.totalResult;
        }
    })
   },
   //材料信息
   gettableDatacl(currentPage,showCount,pd){
     let pp = {
       "pd": pd,
       "currentPage":currentPage,
       "showCount":showCount,
     };
      this.$api.post(this.Global.aport3+'/ryhx/gettbrypaper', pp,
       r => {
         if(r.success){
           this.tableDatacl=r.data.resultList;
           this.TotalResult2=r.data.totalResult;
          }
       })
   },
   //走访信息
   gettableDatazj(currentPage,showCount,pd){
     let pp = {
       "pd": pd,
       "currentPage":currentPage,
       "showCount":showCount,
     };

      this.$api.post(this.Global.aport3+'/ryhx/getczzfxx', pp,
       r => {
         if(r.success){
           this.tableDatazj=r.data.resultList;
           this.TotalResult3=r.data.totalResult;
          }
       })
   },
    getGj(row,event,column){
      console.log(row,event,column);
      this.gjinfo=row;
      this.gjshow=true;
    },
    getCl(row,event,column){
      console.log(row,event,column);
      this.clinfo=row;
      this.clshow=true;
    },
    getZj(row,event,column){
      console.log(row,event,column);
      this.zjinfo=row;
      this.zjshow=true;
    },
  },
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
  max-width: 100%;
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
  background: #EFF3F6;padding:0 10px;
}
.input-text {
  text-align: left !important; width: 32%!important;
}
.input-input{
  width:60%!important;
}

</style>
<style>
  .el-button+.el-button{margin-left: 0!important;}
  .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
  .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
  .bj .el-dialog__wrapper {
    background: #000;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
