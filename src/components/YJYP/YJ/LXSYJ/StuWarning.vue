<template lang="html">
  <!-- 留學生信息管理預警详情 -->
  <div class="yymain">
    <div class="yycontent" style="margin-top: 0px!important;">
       <div class="yylbt mb-15">基本信息</div>
       <el-row type="flex" class="yyf">
         <el-col :span="20" class="stu-left">
           <el-row type="flex" class="stu-row">
             <el-col :span="6">
               <span>姓名：</span>
               XXXX
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>性别：</span>
                  XXXX
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>国家地区/地区：</span>
                  XXXX
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>证件种类：</span>
                  XXXX
             </el-col>
           </el-row>
           <el-row type="flex" class="stu-row">
             <el-col :span="6">
               <span >证件有效期：</span>
                  XXXX
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>签证种类：</span>
                  XXXX
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>签证号码：</span>
                  XXXX
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>证件号码：</span>
                  XXXX
             </el-col>
           </el-row>
           <el-row type="flex" class="stu-row">
             <el-col :span="6" class="stu-col-row">
               <span>预警时间：</span>
                 XXXX
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span></span>
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span></span>
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span></span>
             </el-col>
           </el-row>
         </el-col>
         <el-col :span="4" class="stu-right">
           <el-button type="primary" size="small" @click="$router.push({name:'StuBaseInfo',query:{id:'11',AlarmType:'11'}})">详情</el-button>
              <el-button type="primary" size="small" @click="$router.push({name:'LXSYJ-JBXQ',query:{id:'11',AlarmType:'11'}})">详情2</el-button>
         </el-col>
       </el-row>
       <div class="yylbt yt-16">预警原因 <span class="yyf ycolor">出入境过多，签证过期</span></div>
       <div class="stru-lal">签证信息</div>
       <el-table
            ref="multipleTable"
            :data="tableData1"
            border
            style="width: 100%" class="stu-table"
            >
            <el-table-column
              prop="date"
              label="证件种类">
            </el-table-column>
            <el-table-column
              prop="name"
              label="证件号码">
            </el-table-column>
            <el-table-column
              prop="address"
              label="签证种类">
            </el-table-column>
            <el-table-column
              prop="address"
              label="签证号码">
            </el-table-column>
            <el-table-column
              prop="address"
              label="签证有效期至">
            </el-table-column>
            <el-table-column
              prop="address"
              label="签发地">
            </el-table-column>
            <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column>
        </el-table>
        <div class="stru-lal">交通信息</div>
        <el-table
             ref="multipleTable"
             :data="tableData2"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="date"
               label="出发时间">
             </el-table-column>
             <el-table-column
               prop="name"
               label="出发地">
             </el-table-column>
             <el-table-column
               prop="address"
               label="到达时间">
             </el-table-column>
             <el-table-column
               prop="address"
               label="到达地">
             </el-table-column>
             <el-table-column
               prop="address"
               label="交通工具">
             </el-table-column>
             <el-table-column
               prop="address"
               label="交通号">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
               </template>
             </el-table-column>
         </el-table>

         <div class="stru-lal">出入境信息</div>
         <el-table
              ref="multipleTable"
              :data="tableData3"
              border
              style="width: 100%" class="stu-table">
              <el-table-column
                prop="date"
                label="出入境日期">
              </el-table-column>
              <el-table-column
                prop="name"
                label="出入境状态">
              </el-table-column>
              <el-table-column
                prop="address"
                label="出入境口岸">
              </el-table-column>

              <el-table-column
                label="操作" width="80">
                <template slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
                </template>
              </el-table-column>
          </el-table>

          <div class="stru-lal">境外人员住宿登记信息</div>
          <el-table
               ref="multipleTable"
               :data="tableData4"
               border
               style="width: 100%" class="stu-table">
               <el-table-column
                 prop="date"
                 label="住宿时间">
               </el-table-column>
               <el-table-column
                 prop="name"
                 label="住宿地址">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="拟离开时间">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="住宿类型">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="登记单位">
               </el-table-column>

               <el-table-column
                 label="操作" width="80">
                 <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
                 </template>
               </el-table-column>
           </el-table>
    </div>

   <div class="stu-footer">
     <div class="stu-title">甄别结果</div>
     <el-row type="flex" class="mb-15">
      <el-col :span="20">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 3}"
          placeholder="甄别说明必须填写原因(不超过100个字符)"
          v-model="pd.CHANGE_RESON">
        </el-input>
      </el-col>
      <el-col :span="4"  class="down-btn-area">
        <el-button type="primary"  size="small" @click="" >确定</el-button>
        <el-button type="warning" size="small" @click="">返回</el-button>
      </el-col>
    </el-row>
   </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      pd:{},
      tableData1: [{
        date: '2016-05-02',
        name: '王小虎',
        address: 'XXXXX'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: 'XXXXX'

      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: 'XXXXX'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: 'XXXXX'
      }],
    }
  },
  mounted() {

  },
  methods: {


  }

}
</script>
<style scoped>

</style>
<style>
.el-table--border, .el-table--group {
    border: 1px solid #E5ECF1!important;
}
</style>
