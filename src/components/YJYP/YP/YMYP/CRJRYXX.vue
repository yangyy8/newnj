<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="pd.XM"   class="input-input"></el-input>
            </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">单位名称：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.DWMC"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">身份证号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.SFZH" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="4" >
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
              <!-- <el-button type="info" size="small" @click="$router.go(-1)" class="mb-15">返回</el-button> -->
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">人员列表</div>
      <el-table
         ref="multipleTable"
         :data="tableData"
         border
         style="width: 100%">
         <el-table-column
           prop="XM"
           label="姓名">
         </el-table-column>
         <el-table-column
           prop="YMZLMC"
           label="移民种类">
         </el-table-column>
         <el-table-column
           prop="QYSJ"
           label="签约时间">
         </el-table-column>
         <el-table-column
           prop="SFZH"
           label="身份证号">
         </el-table-column>
         <el-table-column
           prop="YMSQZLMC"
           label="移民申请种类">
         </el-table-column>
         <el-table-column
           prop="QWGMC"
           label="前往国">
         </el-table-column>
         <el-table-column
           prop="DWMC"
           label="单位名称">
         </el-table-column>
         <el-table-column
           prop="PFRQ"
           label="批复时间">
         </el-table-column>
         <el-table-column
           label="操作" width="70">
           <template slot-scope="scope">
           <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
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
      <div class="bj">
        <el-dialog title="代办签证信息详情" :visible.sync="crjDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
          <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
              <span class="input-text">姓名：</span>
              <span class="input-input detailinput">  {{czinfo.XM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">身份证号：</span>
              <span class="input-input detailinput">  {{czinfo.SFZH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">移民签证种类名称：</span>
              <span class="input-input detailinput">  {{czinfo.YMQZZLMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">前往国名称：</span>
              <span class="input-input detailinput">  {{czinfo.QWGMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">移民种类名称：</span>
              <span class="input-input detailinput">  {{czinfo.QWGMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">单位名称：</span>
              <span class="input-input detailinput">  {{czinfo.DWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">移民状态：</span>
              <span class="input-input detailinput">  {{czinfo.YXZT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">同行人姓名：</span>
              <span class="input-input detailinput">  {{czinfo.TXRXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">填表时间：</span>
              <span class="input-input detailinput">  {{czinfo.TBSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">签约时间：</span>
              <span class="input-input detailinput"> {{czinfo.QYSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">批复时间：</span>
              <span class="input-input detailinput">  {{czinfo.PFRQ}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
              <span class="input-text">操作人：</span>
              <span class="input-input detailinput">  {{czinfo.CZR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">操作时间：</span>
              <span class="input-input detailinput">  {{czinfo.CZSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改人：</span>
              <span class="input-input detailinput">  {{czinfo.XGR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改时间：</span>
              <span class="input-input detailinput"> {{czinfo.XGSJ}}</span>
            </el-col>
          </el-row>
            <div slot="footer" class="dialog-footer">
              <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
            </div>
       </el-dialog>
     </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      type:1,
      xid:'',
      random:'',
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      form:{},
      pd: {},
      imagess:[],
      radio1:'0',
      radio2:'0',
      typet:'1',
      imgshow1:false,
      imgshow2:true,
      shm:false,
      lg:false,
      tableData:[],
      crjDialogVisible:false,
      options:[{
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
      row:[],
      czinfo:{},
      queryPd:{},
    }
  },
  activated() {
    this.row = this.$route.query.row;
    this.queryPd = this.$route.query.queryPd;
    console.log('row',this.row);
    this.getList(this.CurrentPage,this.pageSize,this.pd);
  },
  mounted() {
      this.$store.dispatch('getGjdq');
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage, showCount, pd) {
      this.objCompare(this.row,this.queryPd)
      pd = Object.assign({},pd,this.row,this.queryPd);
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport5+'/esYmController/getResultListByParams', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    details(i) {
      let p={
        pd:{
          RGUID:i.RGUID
        }
      }
      this.$api.post(this.Global.aport5+'/esYmController/getResultListByParams',p,
       r =>{
         if(r.success){
           if(r.data.resultList[0]){
             this.czinfo=r.data.resultList[0]
           }else{
             this.czinfo={}
           }
           this.crjDialogVisible = true;
         }
       })
    },
  }
}
</script>

<style scoped>
.input-text{width: 30%!important}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item img {
  width: 100%;
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
  background: #EFF3F6;
}
.yy-input-text {
  text-align: left !important;
}
</style>
<style>

.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
</style>
