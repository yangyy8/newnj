<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain tshu">
    <div class="yycontent">
      <div class="yylbt mb-15" >
        <el-row type="flex">
          <el-col :span="12">
                  基本信息
          </el-col>
          <el-col :span="12" style="text-align:right;margin-top:-10px;">
                    <el-button type="info" size="small" @click="$router.go(-1)">返回</el-button>
          </el-col>
        </el-row>
      </div>

      <el-row type="flex">
        <el-col :span="24" class="br pr-20">
          <el-row align="center"   :gutter="2">

                <el-col  :sm="24" :md="12" :lg="6"  class="input-item">
                  <span class="input-text">国家地区：</span>
                    {{basedata.GJDQ_DESC}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">案卷编号：</span>
                    {{basedata.AJBH}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">注册时间：</span>
                    {{basedata.ZCRQ}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">户室人数：</span>
                    {{basedata.RS}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">姓名：</span>
                    {{basedata.XM}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">性别：</span>
                    {{basedata.XBDM_DESC}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">出生日期：</span>
                    {{basedata.CSRQ}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">护照号码：</span>
                    {{basedata.HZHM}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">身份类型：</span>
                    {{basedata.SFDM_DESC}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">电话号码：</span>
                    {{basedata.DHHM}}
                </el-col>
                <el-col  :sm="24" :md="12" :lg="6"   class="input-item">
                   <span class="input-text">邮箱地址：</span>
                    {{basedata.YXDZ}}
                </el-col>

          </el-row>
          <el-row :gutter="1">
            <el-col  :span="24"  class="input-item">
               <span class="input-text" style="width:7.5%!important;">详细地址：</span>
                {{basedata.XXDZ}}
            </el-col>
          </el-row>
         </el-col>

          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">临住信息列表</div>
      <el-table
           :data="tableData"
           border
           style="width: 100%"
          >
          <el-table-column
            prop="ZSRQ"
            label="住宿时间">
          </el-table-column>
          <el-table-column
            prop="LSDWDZ"
            label="住宿地址">
          </el-table-column>
          <el-table-column
            prop="NLKRQ"
            label="拟离开时间">
          </el-table-column>
          <el-table-column
            prop="ZFZL_DESC"
            label="住宿类型">
          </el-table-column>
          <el-table-column
            prop="DJDWMC"
            label="登记单位">
          </el-table-column>
           <el-table-column
             label="操作" width="100">
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
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
    </div>
      <div class="bj">
         <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
              <LZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()"></LZXX>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
     </div>
    </div>
</template>
<script>
import LZXX from '../../../common/lzxx_xq'
export default {
    components:{LZXX},
  data() {
    return {
      rybh:'',
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      form:{},
      pd: {},
      pm:{},
      type:0,
      xid:'',
      tableData:[],
      basedata:[],
      detailsDialogVisible:false,
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
    }
  },
  activated() {
    this.row = this.$route.query.row;
    console.log('row',this.row);

    this.getBase(this.row.RGUID);
    this.getList(this.CurrentPage,this.pageSize);
  },
  mounted() {
      this.$store.dispatch('getGjdq');
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize);
      console.log(`当前页: ${val}`);
    },
    getBase(guid) {

      this.pd.RGUID=guid;
      let p = {
        "pd": this.pd,
      };
      this.$api.post(this.Global.aport5+'/nanMinController/getEntityByRGUID', p,
        r => {
          this.basedata = r.data;
        })
    },
    getList(currentPage, showCount) {

      this.pd = Object.assign({}, this.pd, this.row);
      console.log(this.pd);
      this.pm.RYBH=this.pd.RYBH;
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.pm,
        "orderBy":{value:"ZSRQ",dataType:"date"},
        "orderType":'DESC'
      };
      this.$api.post(this.Global.aport5+'/eS_LZ_LZXXController/getResultListByParams', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    details(i) {
      this.xid=i.DTID;
      this.rybh=i.RYBH;
      this.detailsDialogVisible = true;

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
.input-item{font-size: 12px;color: #999999}
.input-item span{color: #333333;font-size: 12px;}
</style>
<style>

.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
</style>
