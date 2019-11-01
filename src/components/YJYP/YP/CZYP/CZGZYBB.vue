<template lang="html">
  <!-- 常住登记变化量 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
              <el-radio v-model="radio" label="1" class="input-text">时间点：</el-radio>
              <!-- <span class="input-text">时间点：</span> -->
              <el-date-picker
                 v-model="pd0.TLYXQ_Begin.begin" format="yyyy-MM-dd"
                 type="date" size="small" value-format="yyyy/MM/dd"
                 placeholder="开始时间" class="input-input"
                 :disabled="radio!='1'">
              </el-date-picker>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
              <el-radio v-model="radio" label="2" class="input-text">时间范围：</el-radio>
              <!-- <span class="input-text">时间范围：</span> -->
              <div class="input-input t-flex t-date">
                <el-date-picker
                   v-model="pd1.TLYXQ_Begin.begin" format="yyyy-MM-dd"
                   type="date" size="small" value-format="yyyy/MM/dd"
                   placeholder="开始时间" :disabled="radio!='2'">
                </el-date-picker>
                <span class="septum">-</span>
                <el-date-picker
                    v-model="pd1.SJXFSJ_End.end" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy/MM/dd"
                    placeholder="结束时间" :disabled="radio!='2'">
                </el-date-picker>
             </div>
            </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="getData">查询</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="yycontent">
      <div class="ak-tabs">
        <div class="ak-tab-item hand" :class="{'ak-checked':page==0}" @click="page=0;getList()">
          工作月报表
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==1}" @click="page=1;getList1();getTu1()">
          来宁事由
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==2}" @click="page=2;getList2();getTu2()">
          境外人员分布
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==3}" @click="page=3;getList3(),getTu3()">
          前五国家/地区
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==4}" @click="page=4;getList4(),getTu4()">
          涉恐31国常住人数
        </div>
      </div>
      <div class="ak-tab-pane">
        <el-button  size="small"  class="mb-15" type="primary" plain @click="download">导出</el-button>
        <div v-show="page==0">
          <table cellspacing="0" class="t-table">
            <tr class="th1">
              <th rowspan="2">#</th>
              <th colspan="9" align="center">常住境外人员（人）</th>
            </tr>
            <tr class="th1">
              <td>合计</td>
              <td>文教专家</td>
              <td>留学生</td>
              <td>外商机构常住代表</td>
              <td>三资企业</td>
              <td>工程技术</td>
              <td>家属</td>
              <td>永久居留</td>
              <td>其他</td>
            </tr>
            <tr>
              <td class="th1">合计</td>
              <td @click="getListD(CurrentPage,pageSize,'00','合计')" class="hand tc-b">{{tableData['合计']['00']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'03','合计')" class="hand tc-b">{{tableData['合计']['03']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'02','合计')" class="hand tc-b">{{tableData['合计']['02']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','合计')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'01','合计')" class="hand tc-b">{{tableData['合计']['01']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'06','合计')" class="hand tc-b">{{tableData['合计']['06']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'04','合计')" class="hand tc-b">{{tableData['合计']['04']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','合计')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'05','合计')" class="hand tc-b">{{tableData['合计']['05']}}</td>
            </tr>
            <tr>
              <td class="th1">外国人</td>
              <td @click="getListD(CurrentPage,pageSize,'00','外国人')" class="hand tc-b">{{tableData['外国人']['00']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'03','外国人')" class="hand tc-b">{{tableData['外国人']['03']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'02','外国人')" class="hand tc-b">{{tableData['外国人']['02']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','外国人')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'01','外国人')" class="hand tc-b">{{tableData['外国人']['01']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'06','外国人')" class="hand tc-b">{{tableData['外国人']['06']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'04','外国人')" class="hand tc-b">{{tableData['外国人']['04']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','外国人')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'05','外国人')" class="hand tc-b">{{tableData['外国人']['05']}}</td>
            </tr>
            <tr>
              <td class="th1">华侨</td>
              <td @click="getListD(CurrentPage,pageSize,'00','华侨')" class="hand tc-b">{{tableData['华侨']['00']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'03','华侨')" class="hand tc-b">{{tableData['华侨']['03']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'02','华侨')" class="hand tc-b">{{tableData['华侨']['02']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','华侨')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'01','华侨')" class="hand tc-b">{{tableData['华侨']['01']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'06','华侨')" class="hand tc-b">{{tableData['华侨']['06']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'04','华侨')" class="hand tc-b">{{tableData['华侨']['04']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','华侨')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'05','华侨')" class="hand tc-b">{{tableData['华侨']['05']}}</td>
            </tr>
            <tr>
              <td class="th1">港澳人员</td>
              <td @click="getListD(CurrentPage,pageSize,'00','港澳人员')" class="hand tc-b">{{tableData['港澳人员']['00']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'03','港澳人员')" class="hand tc-b">{{tableData['港澳人员']['03']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'02','港澳人员')" class="hand tc-b">{{tableData['港澳人员']['02']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','港澳人员')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'01','港澳人员')" class="hand tc-b">{{tableData['港澳人员']['01']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'06','港澳人员')" class="hand tc-b">{{tableData['港澳人员']['06']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'04','港澳人员')" class="hand tc-b">{{tableData['港澳人员']['04']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','港澳人员')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'05','港澳人员')" class="hand tc-b">{{tableData['港澳人员']['05']}}</td>
            </tr>
            <tr>
              <td class="th1">台湾居民</td>
              <td @click="getListD(CurrentPage,pageSize,'00','台湾居民')" class="hand tc-b">{{tableData['台湾居民']['00']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'03','台湾居民')" class="hand tc-b">{{tableData['台湾居民']['03']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'02','台湾居民')" class="hand tc-b">{{tableData['台湾居民']['02']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','台湾居民')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'01','台湾居民')" class="hand tc-b">{{tableData['台湾居民']['01']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'06','台湾居民')" class="hand tc-b">{{tableData['台湾居民']['06']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'04','台湾居民')" class="hand tc-b">{{tableData['台湾居民']['04']}}</td>
              <td @click="getListD(CurrentPage,pageSize,'0','台湾居民')" class="hand tc-b">{{0}}</td>
              <td @click="getListD(CurrentPage,pageSize,'05','台湾居民')" class="hand tc-b">{{tableData['台湾居民']['05']}}</td>
            </tr>
          </table>
        </div>
        <div v-show="page==1">
          <el-row>
            <el-col :span="12">
              <table cellspacing="0" class="t-table">
                <tr class="th1">
                  <th>来宁事由</th>
                  <th>数量</th>
                </tr>
                <tr>
                  <td>旅游</td>
                  <td @click="getListD(CurrentPage,pageSize,'05')" class="hand tc-b">{{tableData1['05']}}</td>
                </tr>
                <tr>
                  <td>商务</td>
                  <td @click="getListD(CurrentPage,pageSize,'03')" class="hand tc-b">{{tableData1['03']}}</td>
                </tr>
                <tr>
                  <td>学习</td>
                  <td @click="getListD(CurrentPage,pageSize,'01')" class="hand tc-b">{{tableData1['01']}}</td>
                </tr>
                <tr>
                  <td>访问</td>
                  <td @click="getListD(CurrentPage,pageSize,'04')" class="hand tc-b">{{tableData1['04']}}</td>
                </tr>
                <tr>
                  <td>其余各类事由</td>
                  <td @click="getListD(CurrentPage,pageSize,'qt')" class="hand tc-b">{{tableData1['qt']}}</td>
                </tr>
              </table>
            </el-col>
            <el-col :span="12">
              <div class = "chart" style="width:100%">
                <div id = "echartspie" style = "width: 100%;height: 300px"></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-show="page==2">
          <el-row>
            <el-col :span="12">
              <table cellspacing="0" class="t-table">
                <tr class="th1">
                  <th>类型</th>
                  <th>常住境外人员身份分布</th>
                </tr>
                <tr>
                  <td>企业工作人员</td>
                  <td @click="getListD(CurrentPage,pageSize,'01')" class="hand tc-b">{{tableData2['01']}}</td>
                </tr>
                <tr>
                  <td>高校留学生</td>
                  <td @click="getListD(CurrentPage,pageSize,'02')" class="hand tc-b">{{tableData2['02']}}</td>
                </tr>
                <tr>
                  <td>文教专家</td>
                  <td @click="getListD(CurrentPage,pageSize,'03')" class="hand tc-b">{{tableData2['03']}}</td>
                </tr>
                <tr>
                  <td>亲属</td>
                  <td @click="getListD(CurrentPage,pageSize,'04')" class="hand tc-b">{{tableData2['04']}}</td>
                </tr>
                <tr>
                  <td>其他</td>
                  <td @click="getListD(CurrentPage,pageSize,'05')" class="hand tc-b">{{tableData2['05']}}</td>
                </tr>
              </table>
            </el-col>
            <el-col :span="12">
              <div class = "chart" style="width:100%">
                <div id = "echartspiejw" style = "width: 100%;height: 300px"></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-show="page==3">
          <el-row>
            <el-col :span="12">
              <el-table
                :data="tableData3"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="GJDQ_DESC"
                  label="常住境外人员排名">
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="数量">
                  <template slot-scope="scope">
                    <span @click="getListD(CurrentPage,pageSize,scope.row.GJDQ)" class="hand tc-b">{{ scope.row.count }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="12">
              <div class = "chart" style="width:100%">
                <div id = "echartspieq5" style = "width: 100%;height: 300px"></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-show="page==4">
          <el-row>
            <el-col :span="12">
              <el-table
                :data="tableData4"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="GJDQ_DESC"
                  label="国家">
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="涉恐31国常住人数">
                  <template slot-scope="scope">
                    <span @click="getListD(CurrentPage,pageSize,scope.row.GJDQ)" class="hand tc-b">{{ scope.row.count }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="12">
              <div class = "chart" style="width:100%">
                <div id = "echartspiesk" style = "width: 100%;height: 300px"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <el-dialog title="列表" :visible.sync="listDialogVisible"  width="900px">
      <el-table
         :data="tableDataD"
         border
         style="width: 100%">
         <el-table-column
           prop="CSRQ"
           label="出生日期">
         </el-table-column>
         <el-table-column
           prop="GJDQ_DESC"
           label="国家地区">
         </el-table-column>
         <el-table-column
           prop="SFDM_DESC"
           label="身份">
         </el-table-column>
         <el-table-column
           prop="XB_DESC"
           label="性别">
         </el-table-column>
         <el-table-column
           prop="YWXM"
           label="英文姓名">
         </el-table-column>
         <el-table-column
           prop="ZWXM"
           label="中文姓名">
         </el-table-column>
         <el-table-column
           prop="SJXFSJ"
           label="市局下发时间">
         </el-table-column>
         <el-table-column
           prop="SSPCS_DESC"
           label="所属派出所">
         </el-table-column>
         <el-table-column
           label="操作">
           <template slot-scope="scope">
             <el-button type="text"  class="a-btn" title="详情" size="mini" icon="el-icon-tickets" @click="details(scope.row)"></el-button>
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
    </el-dialog>
    <el-dialog title="常住信息详情" :visible.sync="CZDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <CZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()" :row="allData"></CZXX>
      <div slot="footer" class="dialog-footer">
        <el-button @click="CZDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
import CZXX from '../../../common/czxx_xq'
 export default {
  components:{CZXX},
  data() {
    return {
      page:0,
      type:3,
      rybh:'',
      xid:'',
      allData:{},
      radio:'1',
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{
        TLYXQ_Begin:{begin:'',dataType:"date"},
        SJXFSJ_End:{end:'',dataType:"date"}
      },
      pd0:{
        TLYXQ_Begin:{begin:'',dataType:"date"},
      },
      pd1:{
        TLYXQ_Begin:{begin:'',dataType:"date"},
        SJXFSJ_End:{end:'',dataType:"date"}
      },
      tableData:{
        "华侨": {
          "00": "0",
          "01": "0",
          "02": "0",
          "03": "0",
          "04": "0",
          "05": "0",
          "06": "0"
        },
        "港澳人员": {
          "00": "0",
          "01": "0",
          "02": "0",
          "03": "0",
          "04": "0",
          "05": "0",
          "06": "0"
        },
        "合计": {
          "00": "0",
          "01": "0",
          "02": "0",
          "03": "0",
          "04": "0",
          "05": "0",
          "06": "0"
        },
        "台湾居民": {
          "00": "0",
          "01": "0",
          "02": "0",
          "03": "0",
          "04": "0",
          "05": "0",
          "06": "0"
        },
        "外国人": {
          "00": "0",
          "01": "0",
          "02": "0",
          "03": "0",
          "04": "0",
          "05": "0",
          "06": "0"
        }
      },
      tableData1:{},
      tableData2:{},
      tableData3:[],
      tableData4:[],
      pieChart:null,
      barChart:null,

      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      options:[
        {
          value:10,
          label:"10"
        },
        {
          value:20,
          label:"20"
        },
        {
          value:30,
          label:"30"
        }
      ],
      tableDataD:[],
      listDialogVisible:false,
      CZDialogVisible:false,
      specialKey:'',
      keyOne:'',
      pdKey0:{},
      pdKey1:{},
      pdKey2:{},
      pdKey3:{},
      pdKey4:{},
      pdAll:{},

      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  mounted(){
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.getList()
  },
  watch:{
    radio:function(newVal,oldVal){
      this.radio=newVal;
      this.getPd();
    },
  },
  methods:{
    getListD(currentPage,showCount,val,valOne){
      this.getPd();
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.specialKey = val;
      this.keyOne = valOne;
      if(this.page==0){
        this.pdKey0.SFDM = val;
        this.pdKey0.GJDQ = valOne;
        this.pdAll = Object.assign({},this.pd,this.pdKey0)
        p.pd=this.pdAll;
        this.$api.post(this.Global.aport2+'/gzybb/getgzybbryxx',p,
         r =>{
           if(r.success){
              this.tableDataD = r.data.resultList;
              this.TotalResult=r.data.totalResult;
              this.listDialogVisible=true;
           }
         })
      }
      if(this.page==1){
        this.pdKey1.TLSY = val;
        this.pdAll = Object.assign({},this.pd,this.pdKey1)
        p.pd=this.pdAll;
        this.$api.post(this.Global.aport2+'/gzybb/czlnsyryxx',p,
         r =>{
           if(r.success){
              this.tableDataD = r.data.resultList;
              this.TotalResult=r.data.totalResult;
              this.listDialogVisible=true;
           }
         })
      }
      if(this.page==2){
        this.pdKey2.SFDM = val;
        this.pdAll = Object.assign({},this.pd,this.pdKey2)
        p.pd=this.pdAll;
        this.$api.post(this.Global.aport2+'/gzybb/czsffbryxx',p,
         r =>{
           if(r.success){
              this.tableDataD = r.data.resultList;
              this.TotalResult=r.data.totalResult;
              this.listDialogVisible=true;
           }
         })
      }
      if(this.page==3){
        this.pdKey3.GJDQ = val;
        this.pdAll = Object.assign({},this.pd,this.pdKey3)
        p.pd=this.pdAll;
        this.$api.post(this.Global.aport2+'/gzybb/czpmq5gjdqryxx',p,
         r =>{
           if(r.success){
              this.tableDataD = r.data.resultList;
              this.TotalResult=r.data.totalResult;
              this.listDialogVisible=true;
           }
         })
      }
      if(this.page==4){
        this.pdKey4.GJDQ = val;
        this.pdAll = Object.assign({},this.pd,this.pdKey4)
        p.pd=this.pdAll;
        this.$api.post(this.Global.aport2+'/gzybb/czpmq5gjdqryxx',p,
         r =>{
           if(r.success){
              this.tableDataD = r.data.resultList;
              this.TotalResult=r.data.totalResult;
              this.listDialogVisible=true;
           }
         })
      }
    },
    details(i){
      this.xid=i.RGUID;
      this.rybh=i.RYBH;
      this.allData=i;
      this.CZDialogVisible=true;
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getListD(this.CurrentPage,val,this.specialKey,this.keyOne);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getListD(val,this.pageSize,this.specialKey,this.keyOne);
    },
    download(){
      this.getPd();
      if(this.page==0){
        this.$api.post(this.Global.aport2+'/gzybb/exportgzybb',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
         r =>{
           this.downloadM(r)
         },e=>{},{},'blob')
      }else{
        this.$api.post(this.Global.aport2+'/gzybb/exportyptb',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
         r =>{
           this.downloadM(r)
         },e=>{},{},'blob')
      }
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '报表.xls')
        document.body.appendChild(link)
        link.click()
    },
    getData(){
      if(this.page==0){
        this.getList();
      }else if(this.page==1){
        this.getList1();
        this.getTu1();
      }else if(this.page==2){
        this.getList2();
        this.getTu2();
      }else if(this.page==3){
        this.getList3();
        this.getTu3();
      }else if(this.page==4){
        this.getList4();
        this.getTu4();
      }
    },
    changeTime(time,timeReal){
      if(this.radio=='1'){
        if(timeReal.hasOwnProperty('begin')){
          time.begin==''?timeReal.begin='':time.begin==null?timeReal.begin=null:timeReal.begin=time.begin+' 00:00:00';
        }
        if(timeReal.hasOwnProperty('end')){
          time.begin==''?timeReal.end='':time.begin==null?timeReal.end=null:timeReal.end=time.begin+' 00:00:00';
        }
      }else if(this.radio=='2'){
        if(timeReal.hasOwnProperty('begin')){
          time.begin==''?timeReal.begin='':time.begin==null?timeReal.begin=null:timeReal.begin=time.begin+' 00:00:00';
        }
        if(timeReal.hasOwnProperty('end')){
          time.end==''?timeReal.end='':time.end==null?timeReal.end=null:timeReal.end=time.end+' 00:00:00';
        }
      }
    },
    getPd(){
      if(this.radio=='1'){
        this.pd1={
          TLYXQ_Begin:{begin:'',dataType:"date"},
          SJXFSJ_End:{end:'',dataType:"date"}
        }
        this.changeTime(this.pd1.TLYXQ_Begin,this.pd.TLYXQ_Begin);
        this.changeTime(this.pd1.SJXFSJ_End,this.pd.SJXFSJ_End);
        this.changeTime(this.pd0.TLYXQ_Begin,this.pd.TLYXQ_Begin);
        this.changeTime(this.pd0.TLYXQ_Begin,this.pd.SJXFSJ_End);
        console.log(this.pd);
      }else if(this.radio=='2'){
        this.pd0={
          TLYXQ_Begin:{begin:'',dataType:"date"},
        }
        this.changeTime(this.pd0.TLYXQ_Begin,this.pd.TLYXQ_Begin);
        this.changeTime(this.pd0.TLYXQ_Begin,this.pd.SJXFSJ_End);
        this.changeTime(this.pd1.TLYXQ_Begin,this.pd.TLYXQ_Begin);
        this.changeTime(this.pd1.SJXFSJ_End,this.pd.SJXFSJ_End);
      }
    },
    getList(){//工作月报表
      this.getPd();
      this.$api.post(this.Global.aport2+'/gzybb/getgzybb',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.tableData=r.data;
         }
       })
    },
    getList1(){//来宁事由
      this.getPd();
      this.$api.post(this.Global.aport2+'/gzybb/czlnsy',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r=>{
         if(r.success){
           this.tableData1=r.data;
         }
       })
    },
    getList2(){//境外人员分布
      this.getPd();
      this.$api.post(this.Global.aport2+'/gzybb/czsffb',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.tableData2=r.data;
         }
       })
    },
    getList3(){//前五国家
      this.getPd();
      this.$api.post(this.Global.aport2+'/gzybb/czpmq5gjdq',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.tableData3=r.data;
         }
       })
    },
    getList4(){//涉恐
      this.getPd();
      this.$api.post(this.Global.aport2+'/gzybb/getsk31',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.tableData4=r.data;
         }
       })
    },
    getTu1(){//来宁事由图表
      this.getPd();
      this.$api.post(this.Global.aport2+'/gzybb/czlnsychart',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.drawPie(r.data.legend,r.data.series,'echartspie')
         }
       })
    },
    getTu2(){//境外人员分布
      this.getPd();
      this.$api.post(this.Global.aport2+'/gzybb/czsffbchart',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
        r =>{
          if(r.success){
            this.drawPie(r.data.legend,r.data.series,'echartspiejw')
          }
        })
    },
    getTu3(){//前五国家排名
      this.getPd();
      this.$api.post(this.Global.aport2+'/gzybb/czpmq5gjdqchart',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
        r =>{
          if(r.success){
            this.drawPie(r.data.legend,r.data.series,'echartspieq5')
          }
        })
    },
    getTu4(){//涉恐
      this.getPd();
      this.$api.post(this.Global.aport2+'/gzybb/getsk31chart',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
        r =>{
          if(r.success){
            this.drawBar(r.data.title.text,r.data.xAxis,r.data.series,'echartspiesk')
          }
        })
    },
    //折线图
    drawPie(legend,series,id){
      this.pieChart = echarts.init(document.getElementById(id));
      window.onresize = echarts.init(document.getElementById(id)).resize;
      let that = this;
      var colors = ['#5793f3', '#d14a61', '#675bba'];
              // 折线图初始化
       that.pieChart.setOption({
          color: colors,
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend:legend,
          series: [{
            type:series[0].type,
            name:series[0].name,
            data:series[0].data,
            radius: [0, '70%'],
            itemStyle:{
            normal:{
                  label:{
                    show: true,
                    formatter: '{b} : {c} ({d}%)'
                  },
                  labelLine :{show:true}
                }
            }
          }]
       })
      },
      drawBar(title,xdata,series,id){
        this.barChart = echarts.init(document.getElementById(id));
        window.onresize = echarts.init(document.getElementById(id)).resize;
        let that = this;
        // var colors = ['#5793f3', '#d14a61', '#675bba'];
        that.barChart.setOption({
          // color:colors,
          tooltip : {
             trigger: 'axis',
             axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                 type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
             }
          },
          title:{
            text:title,
            left:'center',
            textStyle:{
              color: '#606266',
            }
          },
          xAxis: {
              type: 'category',
              dataZoom: [{
                startValue: '0'    //只需要将这一项设置为0即可
              }],
              axisLabel:{
                interval:0,  //类目全显
                // rotate:-90   //顺时针旋转45度
                formatter:function(value)
                {
                    return value.split("").join("\n");
                }
              },
              data: xdata[0].data
          },
          yAxis: {
              type: 'value'
          },
          series:series
        })
      }
  }
}
</script>
