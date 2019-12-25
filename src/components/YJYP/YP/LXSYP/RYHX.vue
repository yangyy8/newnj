<template lang="html">
  <!-- 人员画像 -->
  <div class="yymain" >
    <div class="yytitle t-tsh" style="min-height:700px;">
      <div class="yycontent ryhm">
        <div class="title"><img src="../../../../assets/img/js.png" border='0'></div>
        <div class="zhcx">
            <el-input placeholder=" " v-model="zjhm" class="inputs" max="500" @keyup.enter.native="getList()">
              <el-select v-model="selecttype" slot="prepend" placeholder="请选择" style="width:100px;">
                 <el-option label="综合" value="all"></el-option>
                 <el-option label="组织" value="org"></el-option>
                 <el-option label="人员" value="user"></el-option>
                 <el-option label="案件" value="aj"></el-option>
                 <el-option label="地址" value="addr"></el-option>
            </el-select>
            </el-input>
          <el-button type="primary"  @click="getList()" style="margin-left:-10px;">查询</el-button>
          <el-button type="primary"  @click="$router.push({name:'GJCX'})">高级查询</el-button>
          <el-button type="warning"  @click="$router.push({name:'RYPLCX',query:{}})">模板导入</el-button>
          <el-button type="success"  @click="$router.push({name:'ZDYCX'})">自定义查询</el-button>
        </div>
        <div class="tjsy" v-if="gjshow">
           <el-row class="t-choose">
             <el-col  :sm="24" :md="12" :lg="8"  class="input-item t-tjsr">
               <span class="input-text t-tj">选择组合查询条件：</span>
               <el-select v-model="queryTerm" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input t-sr" @change="conditionChange">
                 <el-option value="1" label="证件号码+证件种类+国籍"></el-option>
                 <el-option value="2" label="姓名+性别+出生日期+国籍"></el-option>
               </el-select>
             </el-col>
           </el-row>
           <div class="t-ak-tab-pane">
             <el-row align="center" :gutter="2" v-if="queryTerm=='1'">
               <el-col  :sm="24" :md="12" :lg="8"  class="input-item my-form-group" data-scope="demo1" data-name="zjzl" data-type="select"
            v-validate-easy="[['required']]">
                   <span class="input-text"><i class="t-must">*</i>证件种类：</span>
                   <el-select v-model="pd1.zjzl" filterable clearable default-first-option placeholder="请选择"  size="mini" class="input-input">
                     <el-option
                       v-for="(item,ind1) in $store.state.zjzl"
                       :key="ind1"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item my-form-group" data-scope="demo1" data-name="zjhm" data-type="input"
               v-validate-easy="[['required']]">
                  <span class="input-text"><i class="t-must">*</i>证件号码：</span>
                  <el-input placeholder="请输入内容" size="mini" v-model="pd1.zjhm" class="input-input"></el-input>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                   <span class="input-text">国家地区：</span>
                   <el-select v-model="pd1.gjdq" filterable clearable default-first-option placeholder="请选择"  size="mini" class="input-input">
                     <el-option
                       v-for="(item,ind) in $store.state.gjdq"
                       :key="ind"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
               </el-col>
             </el-row>
             <el-row align="center" :gutter="2" v-if="queryTerm=='2'">
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">中文姓名：</span>
                  <el-input placeholder="请输入内容" size="mini" v-model="pd2.zwxm" class="input-input"></el-input>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">英文姓名：</span>
                  <el-input placeholder="请输入内容" size="mini" v-model="pd2.ywxm" class="input-input"></el-input>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                 <span class="input-text">性别：</span>
                 <el-select v-model="pd2.xb" placeholder="请选择"  filterable clearable default-first-option size="mini" class="input-input">
                   <el-option
                     v-for="(item,ind1) in $store.state.xb"
                     :key="ind1"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                 <span class="input-text">出生日期：</span>
                 <div class="input-input t-flex t-date">
                   <el-date-picker
                      v-model="pd2.beginCSRQ" format="yyyy-MM-dd"
                      type="date" size="mini" value-format="yyyyMMdd"
                      placeholder="开始时间" >
                   </el-date-picker>
                   <span class="septum">-</span>
                   <el-date-picker
                       v-model="pd2.endCSRQ" format="yyyy-MM-dd"
                       type="date" size="mini" value-format="yyyyMMdd"
                       placeholder="结束时间" >
                   </el-date-picker>
                </div>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                   <span class="input-text">国家地区：</span>
                   <el-select v-model="pd2.gjdq" filterable clearable default-first-option placeholder="请选择"  size="mini" class="input-input">
                     <el-option
                       v-for="(item,ind) in $store.state.gjdq"
                       :key="ind"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
               </el-col>
             </el-row>
           </div>

          <el-row type="flex" class="t-mt20">
             <el-col :span="24">
                <el-button type="primary" size="small"  @click="getListBet()">&nbsp;&nbsp;高级查询&nbsp;&nbsp;</el-button>
             </el-col>
           </el-row>
       </div>
      </div>
    </div>
    <el-dialog title="列表" :visible.sync="listDialogVisible"  width="900px">
      <el-table
         :data="tableData"
         border
         style="width: 100%">
         <el-table-column
           prop="zwxm"
           label="中文姓名">
         </el-table-column>
         <el-table-column
           prop="ywxm"
           label="英文姓名">
         </el-table-column>
         <el-table-column
           prop="xb_desc"
           label="性别">
         </el-table-column>
         <el-table-column
           prop="csrq"
           label="出生日期">
         </el-table-column>
         <el-table-column
           prop="gjdq_desc"
           label="国家地区">
         </el-table-column>
         <el-table-column
           prop="zjzl_desc"
           label="证件种类">
         </el-table-column>
         <el-table-column
           prop="zjhm"
           label="证件号码">
           <template slot-scope="scope">
              <span class="tc-b hand" @click="moreFn(scope.row)">{{scope.row.zjhm}}</span>
            </template>
         </el-table-column>
         <el-table-column
           prop="zjyxq"
           label="证件有效期">
         </el-table-column>
         <!-- <el-table-column
           label="操作">
           <template slot-scope="scope">
             <el-button type="text"  class="a-btn" title="详情" size="mini" icon="el-icon-tickets" @click="details(scope.row)"></el-button>
           </template>
         </el-table-column> -->
       </el-table>
    </el-dialog>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      queryTerm:'1',//组合查询条件
      zjhm: '',
      gjshow:false,
      pd1:{},
      pd2:{},
      pd: {CSRQ_DateRange:{},TLYXQ_DateRange:{},DDRQ_DateRange:{}},
      pd0:{},
      listDialogVisible:false,
      tableData:[],
      selecttype:'all',
    }
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getZjzl');
  },
  methods: {
    moreFn(i){
      this.$router.push({name:'RYHX_XQ',query:{zjhm:i.zjhm,row:i}});
      this.listDialogVisible=false;
    },
    getList(){

        if(this.selecttype==undefined || this.selecttype==""){
          this.$message.error("请选择类型！");return ;
        }
        if(this.zjhm==undefined || this.zjhm==""){
          this.$message.error("请输入内容再进行查询！");return ;
        }
       // this.$router.push({name:'RYHX_XQ',query:{zjhm:this.zjhm}})   //人员画像
      this.$store.state.queryType='' ;
      this.$router.push({name:'QWJS',query:{zjhmes:this.zjhm,stype:this.selecttype}})    //全文检索

    },
    conditionChange(){
      this.V.$reset('demo1')
    },
    getListBet() {
      let p={}
      if(this.queryTerm=='1'){
        p=this.pd1
        this.V.$submit('demo1', (canSumit,data) => {
          if(!canSumit) return
          this.$api.post(this.Global.aport2+'/ryhxhx/getjbxx',p,
           r =>{
             if(r.success){
               this.listDialogVisible=true;
               this.tableData=r.data;
             }
           })
        })
      }else if(this.queryTerm=='2'){
        p=this.pd2
        if((this.pd2.zwxm==''||this.pd2.zwxm==undefined)&&(this.pd2.ywxm==''||this.pd2.ywxm==undefined)){
          this.$alert('中文姓名和英文姓名二者必选其一！', '提示', {
            confirmButtonText: '确定',
          });
          return false
        }
        this.$api.post(this.Global.aport2+'/ryhxhx/getjbxx',p,
         r =>{
           this.listDialogVisible=true;
           this.tableData=r.data;
         })
      }


      // if (this.zjhm == "") {
      //   this.$alert('证件号码不能为空！', '提示', {
      //     confirmButtonText: '确定',
      //
      //   });
      // } else {
      //   this.$router.push({
      //     name: 'RYHX_XQ',
      //     query: {
      //       ZJHM: this.zjhm
      //     }
      //   });
      // }
    },
    // getSubmit(){
    //   this.pd.CSRQ_DateRange.begin=this.pd0.beginCSRQ;
    //   this.pd.CSRQ_DateRange.end=this.pd0.endCSRQ;
    //   this.pd.TLYXQ_DateRange.begin=this.pd0.beginTL;
    //   this.pd.TLYXQ_DateRange.end=this.pd0.endTL;
    //   this.pd.DDRQ_DateRange.begin=this.pd0.beginDA;
    //   this.pd.DDRQ_DateRange.end=this.pd0.endDA;
    //   this.$router.push({name:'RYHXGJCX',query:{row:this.pd}});
    // },
  },

}
</script>
<style scoped>
.title {
  padding: 82px 0px 36px 0px;
  font-size: 35px;
  color: #048DE7;
  font-weight: bold;
}

.ryhm {
  text-align: center;
}


.yycontent {
  background: none;
}
.inputs{
width:400px;
height: 40px;
}
.gjcx{
font-size:14px;
font-weight:400;
text-decoration:underline;
color:rgba(51,51,51,1);
height: 40px;vertical-align:bottom;margin-left: 10px;cursor:pointer; padding-right: 5px;
}
.tjsy{
  margin-top:40px; padding: 30px 60px;color:rgba(51,51,51,1);
background:rgba(255,255,255,0.2);
border:1px solid rgba(255,255,255,1);
}
.input-text{width: 30%!important;}
</style>
<style>
.ryhm .el-input__inner {
  border-color:#BACAD7;

}
.ryhm .el-button+.el-button {
    margin-left: 5px;
}

.zhcx  .el-input-group__prepend {
    background-color: #fff;
  }
</style>
