<template lang="html">
    <!-- 出入境记录核查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="1">
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">时间范围：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.beginTime" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.endTime" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">证件号码：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.zjhm"  class="yy-input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">国家列表：</span>
                  <el-select v-model="pd.type" filterable clearable  default-first-option placeholder="请选择"  size="small" class="ts-judge">
                    <el-option value="0" label="等于"></el-option>
                    <el-option value="1" label="不等于"></el-option>
                  </el-select>
                  <el-select v-model="pd.gjdq" filterable clearable multiple collapse-tags :multiple-limit="5" default-first-option placeholder="请选择" class="ts-country" size="small">
                    <el-option
                      v-for="(item,ind) in $store.state.gjdq"
                      :key="ind"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
         </el-row>
         </el-col>

            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
          <el-table
           ref="multipleTable"
           :data="tableData"
           border
           show-summary
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->

           <el-table-column
             prop="fj"
             label="所属分局">
           </el-table-column>
           <el-table-column
             prop="jsts"
             label="接收数据">
             <template slot-scope="scope">
             <a class="sb" @click="toLink (scope.row,'jsts')"> {{scope.row.jsts}} </a>
             </template>
           </el-table-column>
           <el-table-column
             prop="cgts"
             label="无差错上报">
             <template slot-scope="scope">
             <a class="sb" @click="toLink (scope.row,'cgts')" > {{scope.row.cgts}} </a>
             </template>
           </el-table-column>
           <!-- <el-table-column
             prop="sbts"
             label="差错修改上报">
             <template slot-scope="scope">
             <a class="sb" @click="toLink (scope.row,'sbts')" href="#"> {{scope.row.sbts}} </a>
             </template>
           </el-table-column> -->
           <el-table-column
             prop="ygy"
             label="已干预">
             <template slot-scope="scope">
                <a class="sb" @click="toLink (scope.row,'ygy')"> {{scope.row.ygy}} </a>
             </template>
           </el-table-column>
           <el-table-column
             prop="rgsbts"
             label="待人工干预">
             <template slot-scope="scope">
             <a class="sb" @click="toLink (scope.row,'rgsbts')" > {{scope.row.rgsbts}} </a>
             </template>
           </el-table-column>
         </el-table>
     <!-- <div class="middle-foot">
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
      </div> -->
    </div>

  </div>

</template>
<script>
import {ToArray} from '@/assets/js/ToArray.js'
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {beginTime:'',endTime:''},
      form:{},
      nation:[],
      tableData:[],
      eidtsDialogVisible:false,
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
    userCode:'',
    userName:'',
    orgCode:'',
    orgName:'',
    token:'',
    juState:'',
    }
  },
  activated(){
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  mounted() {
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.$store.dispatch('getGjdq');
  //  this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
    },

    getList(currentPage, showCount, pd) {
      var btime=this.pd.beginTime;
      var etime=this.pd.endTime;

      if(this.pd.beginTime!='' && this.pd.beginTime!=undefined)
      {
        btime=this.pd.beginTime+"000000";
      }
      if(this.pd.endTime!='' && this.pd.endTime!=undefined)
      {
        etime=this.pd.endTime+"235959";
      }

      let p = {
        "beginTime": btime,
        "endTime":etime,
        'zjhm':pd.zjhm,
        'type':pd.type,
        'gjdqList':pd.gjdq,
        "operatorId":this.$store.state.uid,
        "operatorNm":this.$store.state.uname,
         token:this.token,
         orgJB:this.juState,
         orgCode:this.orgCode,
      };

      var url=this.Global.aport2+'/data_report/selectSbList';
      this.$api.post(url, p,
        r => {
          if(r.success){
          this.tableData = r.data;}
        })
    },
    toLink(i,type){
      var btime=this.pd.beginTime;
      var etime=this.pd.endTime;
      if(this.pd.beginTime!='' && this.pd.beginTime!=undefined)
        {
          btime=this.pd.beginTime+"000000";
        }
      if(this.pd.endTime!='' && this.pd.endTime!=undefined)
        {
          etime=this.pd.endTime+"235959";
        }
        let p={
           "beginTime":btime,
           "endTime":etime,
           "ssfjmc":i.fj,
           "sblx":type,
           'zjhm':this.pd.zjhm,
           'type':this.pd.type,
           'gjdqList':this.pd.gjdq,
           "operatorId":this.$store.state.uid,
           "operatorNm":this.$store.state.uname,
        }
        this.$router.push({name: 'LZSJHE',query:{ cdt:p}});
    }

  }
}
</script>

<style scoped>
a{color: blue}
.sb{display:block;width:100%;height:100%;cursor:pointer;}
.sb:hover{color: red}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
  background: url(../../../assets/img/t1.png);
  background-size: 100% 100%;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{padding-top: 5px;}
  .crcolor{background: #EFF3F6;}
  .yy-input-text{text-align:left!important;}
</style>
