<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="pd.CNAME"   class="input-input"></el-input>
            </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.NATIONALITY" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.IDCARD" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="4" >
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15 tt-mr10">查询</el-button>
              <el-button type="info" size="small" @click="$router.go(-1)" class="mb-15 tt-mr10">返回</el-button>
              <el-button type="warning" size="small" @click="download" class="mb-15">导出</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">人员列表</div>
      <el-table
         ref="multipleTable"
         :data="tableData"
         border
         style="width: 100%"
         @select="selectfn">
         <el-table-column
           type="selection"
           width="55">
         </el-table-column>
         <el-table-column
           prop="CNAME"
           label="中文姓名">
         </el-table-column>
         <el-table-column
           prop="EFAMILY"
           label="英文姓">
         </el-table-column>
         <el-table-column
           prop="ENAME"
           label="英文名">
         </el-table-column>
         <el-table-column
           prop="SEX"
           label="性别">
         </el-table-column>
         <el-table-column
           prop="BIRTHDAY"
           label="出生日期">
         </el-table-column>
         <el-table-column
           prop="IDCARD"
           label="证件号码">
         </el-table-column>
         <el-table-column
           prop="STASTUDY"
           label="学习开始时间">
         </el-table-column>
         <el-table-column
           prop="ENDSTUDY"
           label="学习结束时间">
         </el-table-column>
         <el-table-column
           prop="GJDQ_DESC"
           label="国家地区">
         </el-table-column>
         <el-table-column
           prop="STUTYPE"
           label="学生类别">
         </el-table-column>
         <el-table-column
           prop="ACCACADEMY"
           label="申请学校">
         </el-table-column>
         <el-table-column
           prop="COMPANY"
           label="推荐人">
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
        <el-dialog title="留学生申请信息详情" :visible.sync="lxsDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
            <LXSXX :type="type" :xid="xid" :random="random"></LXSXX>
            <div slot="footer" class="dialog-footer">
              <el-button @click="lxsDialogVisible = false" size="small">取 消</el-button>
            </div>
       </el-dialog>
     </div>
    </div>
</template>
<script>
import LXSXX from '../../../common/lxsxx_xq'
export default {
  components:{LXSXX},
  data() {
    return {
      type:3,
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
      lxsDialogVisible:false,
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
      queryPd:{},
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],
    }
  },
  activated() {
    this.row = this.$route.query.row;
    this.queryPd=this.$route.query.queryPd;
    this.getList(this.CurrentPage,this.pageSize,this.pd);
  },
  mounted() {
      this.$store.dispatch('getGjdq');
  },
  methods: {
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
      this.objCompare(this.row,this.queryPd)
      this.pd = Object.assign({},this.pd,this.row,this.queryPd);
      if(this.selectionAll.length==0){//人员全部导出,无选中的数据
        p={
          "pd":this.pd
        }
      }else{//人员部分导出
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].RGUID)
        }
        this.pd.RGUID=this.yuid;
        p={
          "pd":this.pd,
        }
      }

      this.$api.post(this.Global.aport5+'/jiaoYuTing202Controller/export',p,
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
        link.setAttribute('download', '教育厅综合分析列表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, val, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(val, this.pageSize, this.pd);
    },
    getList(currentPage, showCount, pd) {
      this.objCompare(this.row,this.queryPd)
      pd = Object.assign({},pd,this.row,this.queryPd);
      if(pd.hasOwnProperty('RGUID')){
        delete pd['RGUID']
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport5+'/jiaoYuTing202Controller/getResultListByParams', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
          if(this.selectionReal.length==0){//声明一个数组对象
            this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
          }
          this.$nextTick(()=>{
            this.multipleSelection=[]
            for(var i=0;i<this.tableData.length;i++){
              for(var j=0;j<this.selectionAll.length;j++){
                if(this.tableData[i].RGUID==this.selectionAll[j].RGUID){
                  // console.log(this.tableData[i].RGUID,this.selectionAll[j].RGUID,'this.selectionAll======',this.selectionAll)
                  this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                }
              }
            }
          })
        })
    },
    details(i) {
      this.random=new Date().getTime();
      this.xid=i.RGUID;
      this.lxsDialogVisible = true;
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
