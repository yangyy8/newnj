<template lang="html">
  <!-- 常住登记变化量 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
         <el-col :span="16" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="12" :offset="6"  class="input-item">
                  <span class="input-text" title="市局下发时间" style="width:30%">市局下发时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd1.SJXFSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间">
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd1.SJXFSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
          </el-row>
        </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"   @click="getData">查询</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="yycontent">
      <div class="ak-tabs">
        <div class="ak-tab-item hand" :class="{'ak-checked':page==1}" @click="page=1;getList1()">
        各分局错误信息名单
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==0}" @click="page=0;getList()">
         境外人员管理情况通报表
        </div>
      </div>
      <div class="ak-tab-pane">
        <el-button  size="small"  class="mb-15" type="primary" plain @click="download">导出</el-button>
        <div v-show="page==0">
          <el-table
             :data="tableData"
             border
             style="width: 100%"
             @header-click="titleShow">
             <el-table-column
               prop="fjmc"
               label="分局名称">
             </el-table-column>
             <el-table-column label="基本数据">
                <el-table-column
                prop="totalResult"
                label="当前总数">
                </el-table-column>
                <el-table-column
                prop="fwnCount"
                label="范围内总数">
                </el-table-column>
             </el-table-column>
             <el-table-column label="数据登记时效">
                <el-table-column
                prop="fjcsjsList"
                label="分局超时接收">
                <template slot-scope="scope">
                  <span>{{scope.row.fjcsjsList.length==0?'0':scope.row.fjcsjsList.length}}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="pcscsjsList"
                label="派出所超时接收">
                <template slot-scope="scope">
                  <span>{{scope.row.pcscsjsList.length==0?'0':scope.row.pcscsjsList.length}}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="cssmzfList"
                label="超时上门走访">
                <template slot-scope="scope">
                  <span>{{scope.row.cssmzfList.length==0?'0':scope.row.cssmzfList.length}}</span>
                </template>
                </el-table-column>
             </el-table-column>
             <el-table-column label="数据登记质量">
                <el-table-column
                prop="jzxxqlList"
                label="居住信息缺漏">
                <template slot-scope="scope">
                  <span>{{scope.row.jzxxqlList.length==0?'0':scope.row.jzxxqlList.length}}</span>
                </template>
                </el-table-column>
                <!-- <el-table-column
                prop="abxxqlList"
                label="安保状况缺漏">
                <template slot-scope="scope">
                  <span>{{scope.row.abxxqlList.length==0?'0':scope.row.abxxqlList.length}}</span>
                </template>
                </el-table-column> -->
                <el-table-column
                prop="zfxxqlList"
                label="安全走访缺漏">
                <template slot-scope="scope">
                  <span>{{scope.row.zfxxqlList.length==0?'0':scope.row.zfxxqlList.length}}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="dqwtxList"
                label="到期无提醒登记数">
                <template slot-scope="scope">
                  <span>{{scope.row.dqwtxList.length==0?'0':scope.row.dqwtxList.length}}</span>
                </template>
                </el-table-column>

                <el-table-column
                prop="wabList"
                label="无安保登记数">
                <template slot-scope="scope">
                  <span>{{scope.row.wabList.length==0?'0':scope.row.wabList.length}}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="wzfList"
                label="无安全走访登记数">
                <template slot-scope="scope">
                  <span>{{scope.row.wzfList.length==0?'0':scope.row.wzfList.length}}</span>
                </template>
                </el-table-column>
             </el-table-column>
             <el-table-column
               prop="djsxyssbfList"
               label="登记事项与事实严重不符">
                <template slot-scope="scope">
                  <span>{{scope.row.djsxyssbfList.length==0?'0':scope.row.djsxyssbfList.length}}</span>
                </template>
             </el-table-column>
           </el-table>
        </div>

        <div v-show="page==1">
          <el-table
             :data="tableData1"
             border
             style="width: 100%"
             @header-click="titleShow">
             <el-table-column
               prop="fjmc"
               label="单位">
             </el-table-column>
             <el-table-column
               prop="fjcsjsList"
               label="分局接收超时">
                <template slot-scope="scope">
                  <span v-html="sjzh(scope.row.fjcsjsList)"></span>
                </template>
             </el-table-column>
             <el-table-column
               prop="pcscsjsList"
               label="派出所接收超时效数">
               <template slot-scope="scope">
                  <span v-html="sjzh(scope.row.pcscsjsList)"></span>
                </template>
             </el-table-column>
             <el-table-column
               prop="jzxxqlList"
               label="居住信息登记缺项">
               <template slot-scope="scope">
                  <span v-html="sjzh(scope.row.jzxxqlList)"></span>
                </template>
             </el-table-column>
             <!-- <el-table-column
               prop="abxxqlList"
               label="安保状况缺项">
               <template slot-scope="scope">
                  <span v-html="sjzh(scope.row.abxxqlList)"></span>
                </template>
             </el-table-column> -->
             <el-table-column
               prop="zfxxqlList"
               label="安全走访缺项">
               <template slot-scope="scope">
                  <span v-html="sjzh(scope.row.zfxxqlList)"></span>
                </template>
             </el-table-column>
             <el-table-column
               prop="wabList"
               label="无安保登记数">
               <template slot-scope="scope">
                  <span v-html="sjzh(scope.row.wabList)"></span>
                </template>
             </el-table-column>
             <el-table-column
               prop="wzfList"
               label="无安全走访登记数">
               <template slot-scope="scope">
                  <span v-html="sjzh(scope.row.wzfList)"></span>
                </template>
             </el-table-column>
             <el-table-column
               prop="clfwwqzaList"
               label="承租房屋未签治安责任书数">
               <template slot-scope="scope">
                  <span v-html="sjzh(scope.row.clfwwqzaList)"></span>
                </template>
             </el-table-column>
             <el-table-column
               prop="dqwtxList"
               label="到期无提醒登记数">
               <template slot-scope="scope">
                  <span v-html="sjzh(scope.row.dqwtxList)"></span>
                </template>
             </el-table-column>
           </el-table>
        </div>

      </div>
    </div>
    <el-dialog title="常住信息详情" :visible.sync="CZDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <CZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()" :row="allData" :jbts="1"></CZXX>
      <div slot="footer" class="dialog-footer">
        <el-button @click="CZDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script scoped>
 import CZXX from '../../../common/czxx_xq'
 export default {
  components:{CZXX},
  data() {
    return {
      type:3,
      rybh:'',
      xid:'',
      allData:{},
      page:1,
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{
        SJXFSJ_DateRange:{begin:'',end:'',dataType:"date"}
      },
      pd1:{
        SJXFSJ_DateRange:{begin:'',end:'',dataType:"date"}
      },
      tableData:[],
      tableData1:[],
      CZDialogVisible:false,
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
  },
  activated(){
    // this.getList()
  },
  created(){
    // let that = this;
    window.cardDetail= this.cardDetail
  },
  methods:{
    titleShow(e,el){
      el.target.title = e.label;
    },
    download(){
      this.getPd();
      if(this.page==0){
        if(this.tableData.length==0){
           this.$message.error('无可导出数据！');
           return
        }
        this.$api.post(this.Global.aport2+'/czgltb/exportglqktbb',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
         r =>{
           this.downloadM(r,'境外人员管理情况')
         },e=>{},{},'blob')
      }else{
        if(this.tableData1.length==0){
           this.$message.error('无可导出数据！');
           return
        }
        this.$api.post(this.Global.aport2+'/czgltb/exportcwxxmd',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
         r =>{
           this.downloadM(r,'各分局错误信息名单')
         },e=>{},{},'blob')
      }
    },
    downloadM (data,name) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/octet-stream"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name+'报表.xls')
        document.body.appendChild(link)
        link.click()
    },
     sjzh(val){
      let str=""
      if(val.length==0){
        return ''
      }else{
        for (var i in val) {
            str+='<span class="tc-b hand" onclick="cardDetail('+JSON.stringify(val[i]).replace(/\"/g, "'")+')">'+val[i].ZJHM+'/</span>'
        }
        return str
      }
    },
    cardDetail(i){
      this.rybh=i.RYBH;
      this.allData=i;
      this.CZDialogVisible=true;
    },
    getData(){
      if(this.page==0){
        this.getList();
      }else if(this.page==1){
        this.getList1();
      }
    },
    changeTime(time,timeReal){
      time.begin==''?timeReal.begin='':time.begin==null?timeReal.begin=null:timeReal.begin=time.begin+' 00:00:00';
      time.end==''?timeReal.end='':time.end==null?timeReal.end=null:timeReal.end=time.end+' 00:00:00';
    },
    getPd(pd,pd1){
        this.changeTime(this.pd1.SJXFSJ_DateRange,this.pd.SJXFSJ_DateRange);
    },
    getList(){
      this.getPd();
      this.$api.post(this.Global.aport2+'/czgltb/getgltb',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           for(var i=r.data.length-1;i>=0;i--){
             if(r.data[i]==null){
               r.data.splice(i,1)
             }
           }
           this.tableData=r.data;
         }
       })
    },
    getList1(){
      this.getPd();
      this.$api.post(this.Global.aport2+'/czgltb/getgltb',{pd:this.pd,userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r=>{
         if(r.success){
           for(var i=r.data.length-1;i>=0;i--){
             if(r.data[i]==null||r.data[i].fjmc=='合计'){
               r.data.splice(i,1)
             }
           }
           this.tableData1=r.data;
         }
       })
    },

  }
}
</script>
