<template lang="html">
    <!-- 出入境记录核查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ywx" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ywm" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">中文姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.zwxm" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="(item,ind3) in $store.state.gjdq"
                      :key="ind3"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.zjhm" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.csrqBegin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.csrqEnd" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
              </el-row>
         </el-col>

            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
              <el-button type="primary" size="small" @click="$router.push({name:'ZJZWHC'})">返回</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
          <el-button type="primary" size="small" @click="download" class="t-mb">导出</el-button>
          <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange"
           @header-click="titleShow">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="ywx"
             label="英文姓">
           </el-table-column>
           <el-table-column
             prop="ywm"
             label="英文名">
           </el-table-column>
           <el-table-column
             prop="zwxm"
             label="中文姓名">
           </el-table-column>
           <el-table-column
             prop="zjhm"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="gjdq"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="zsrq"
             label="入住日期">
           </el-table-column>
           <el-table-column
             prop="lsdwhzdz"
             label="留宿单位(户主)地址" width="200">
             <template slot-scope="scope">
                      <span :title="scope.row.lsdwhzdz" class="titlelen">{{scope.row.lsdwhzdz}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="pcsmc"
             label="派出所名称">
           </el-table-column>
           <el-table-column
             prop="TLYXQZ"
             label="停留有效期">
           </el-table-column>
           <el-table-column
             label="操作" width="70">
             <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-tickets" @click="details(scope.row)"></el-button>
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
      <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
        <el-form :model="form"  class="crcolor" style="padding:10px;line-height:35px;">
          <el-row type="flex">
            <el-col :span="16">
              <el-row :gutter="2">
                <el-col :span="12">
                  <span  class="yy-input-text">英文姓：</span>
                   <el-input placeholder="" size="small" v-model="form.ywx"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">英文名：</span>
                  <el-input placeholder="" size="small" v-model="form.ywm"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">英文姓名：</span>
                  <el-input placeholder="" size="small" v-model="form.ywxm"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">中文姓名：</span>
                  <el-input placeholder="" size="small" v-model="form.zwxm"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">证件种类：</span>
                  <el-input placeholder="" size="small" v-model="form.zjzl"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">证件号码：</span>
                  <el-input placeholder="" size="small" v-model="form.zjhm"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">国家地区：</span>
                  <el-input placeholder="" size="small" v-model="form.gjdq"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">出生日期：</span>
                  <el-input placeholder="" size="small" v-model="form.csrq"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">性别：</span>
                  <el-input placeholder="" size="small" v-model="form.xb"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">身份证号：</span>
                  <el-input placeholder="" size="small" v-model="form.sfzh"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12" >
                  <span class="yy-input-text">签证种类：</span>
                  <el-input placeholder="" size="small" v-model="form.qzzl"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12" >
                  <span class="yy-input-text" title="签证(注)号码">签证(注)号码：</span>
                    <el-input placeholder="" size="small" v-model="form.qzhm"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12" >
                  <span class="yy-input-text">签发机关：</span>
                  <el-input placeholder="" size="small" v-model="form.qfjg"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12" >
                  <span class="yy-input-text" title="停留有效期至">停留有效期至：</span>
                    <el-input placeholder="" size="small" v-model="form.tlyxqz"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text" title="签证签发日期">签证签发日期：</span>
                      <el-input placeholder="" size="small" v-model="form.qfrq"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>

                <el-col :span="12">
                  <span class="yy-input-text">入境日期：</span>
                  <el-input placeholder="" size="small" v-model="form.rjrq"  class="yy-input-input" :disabled='true'></el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-carousel height="300px" class="photoCar">
                <el-carousel-item v-for="(item,ind) in imagess" :key="ind" v-if="imgshow1" style="text-align:center">
                  <img  :src="item.tp" @click="opentp(item.tp)">
                </el-carousel-item>
                <el-carousel-item v-if="!imgshow1" style="text-align:center">
                  <img :src="imgURL" @click="opentp(imgURL)">
                </el-carousel-item>
              </el-carousel>
            </el-col>
          </el-row>

          <el-row  :gutter="3">
            <el-col :span="8">
              <span class="yy-input-text">入境口岸：</span>
              <el-input placeholder="" size="small" v-model="form.rjka"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">入境事由：</span>
              <el-input placeholder="" size="small" v-model="form.rjsy"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>

            <el-col :span="8">
              <span class="yy-input-text">入住日期：</span>
              <el-input placeholder="" size="small" v-model="form.zsrq"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="拟离开日期">拟离开日期：</span>
              <el-input placeholder="" size="small" v-model="form.lkrq"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">接待单位：</span>
              <el-input placeholder="" size="small" v-model="form.jddw"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>

            <el-col :span="8">
              <span class="yy-input-text" title="与境外联系人员">与境外联系人员：</span>
              <el-input placeholder="" size="small" v-model="form.yjwrygx"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="16" v-if="shm2"  class="crcolor">
              <span class="yy-input-text" style="width:17.4%">旅馆名称：</span>
               <el-input placeholder="" size="small" v-model="form.lzdwmc"   class="input-input" style="width:80%!important" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8"  class="crcolor">
              <span class="yy-input-text">房号：</span>
              <el-input placeholder="" size="small" v-model="form.fh"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>

            <el-col :span="8">
              <span class="yy-input-text" title="本人联系电话">本人联系电话：</span>
              <el-input placeholder="" size="small" v-model="form.brlxdh"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="紧急情况联系人">紧急情况联系人：</span>
                  <el-input placeholder="" size="small" v-model="form.jjlxr"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="紧急情况联系电话">紧急情况联系电话：</span>
              <el-input placeholder="" size="small" v-model="form.jjlxrdh"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8"   class="crcolor">
              <span class="yy-input-text">派出所名称：</span>
                <el-input placeholder="" size="small" v-model="form.pcsmc"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="留宿单位(户主)电话" >留宿单位(户主)电话：</span>
              <el-input placeholder="" size="small" v-model="form.lsdwhzdh"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
             <el-col :span="8">
                <span class="yy-input-text">房屋性质：</span>
                <el-input placeholder="" size="small" v-model="form.fwxz"  class="yy-input-input" :disabled='true'></el-input>
              </el-col>
            <el-col :span="16">
              <span class="yy-input-text" title="留宿单位(户主)" style="width:17.4%">留宿单位(户主)：</span>
              <el-input placeholder="" size="small" v-model="form.lsdwhz"  class="input-input" style="width:80%!important" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text" title="房主身份证号">房主身份证号：</span>
                <el-input placeholder="" size="small" v-model="form.fzsfzh"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>

            <el-col :span="8">
              <span class="yy-input-text">录入人：</span>
                <el-input placeholder="" size="small" v-model="form.djr"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">录入单位：</span>
              <el-input placeholder="" size="small" v-model="form.djdw"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">录入日期：</span>
              <el-input placeholder="" size="small" v-model="form.djsj"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>

            <el-col :span="8">
              <span class="yy-input-text">修改人：</span>
                  <el-input placeholder="" size="small" v-model="form.gxr"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8" >
              <span class="yy-input-text">修改单位：</span>
              <el-input placeholder="" size="small" v-model="form.gxdw"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <el-col :span="8" >
              <span class="yy-input-text">修改日期：</span>
              <el-input placeholder="" size="small" v-model="form.xgsj"  class="yy-input-input" :disabled='true'></el-input>
            </el-col>
            <!-- <el-col :span="24" >
              <span class="yy-input-text" style="width:11.6%!important">处理意见：</span>
              <el-input type="textarea" placeholder="请输入处理意见" size="small" v-model="form.clyj"  class="yy-input-input" style="width:86.8%!important" :disabled="form.clzt=='1'"></el-input>
            </el-col> -->
          </el-row>
         </el-form>
          <div slot="footer" class="dialog-footer">
            <!-- <el-button @click="save(form.uuid)" size="small" type="primary">确 定</el-button> -->
            <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
          </div>
      </el-dialog>
      <el-dialog  title="放大显示" :visible.sync="tcDialogVisible" style="text-align:center" custom-class="big_dialog" :append-to-body="false" :modal="false" >
        <div style="text-align:right;">
          <el-button  size="small" type="primary"  @click="rotate" title="旋转图片" icon="iconfont el-icon-yy-icon_rotate"></el-button>
        </div>
        <img :src="imgs" :style="{transform:'rotateZ('+deg+'deg)'}" v-drag>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import imgUrl from "../../../assets/img/t1.png"
import {ToArray} from '@/assets/js/ToArray.js'
import {formatDate} from '@/assets/js/date.js'
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {zjhm:''},
      gjdq: [],
      tableData: [],
      cdt: [],
      options:this.pl.options,

      detailsDialogVisible:false,
      form:{},
      imagess: [],
      imgshow1:false,
      imgshow2:true,
      shm1:true,
      shm2:true,
      imgURL:imgUrl,
      tcDialogVisible:false,
      imgs:'',
      deg:0,

      deg:0,
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  activated() {
    this.CurrentPage=1;
    this.cdt = this.$route.query.cdt;
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
  },
  methods: {
    // 旋转
   rotate(){
       this.deg += 90;
       if(this.deg >= 360){
           this.deg = 0
       }
   },
   getImg(id){
     let p={
       "id": id,
       "operatorId":this.$store.state.uid,
       "operatorNm":this.$store.state.uname,
     }
     this.$api.post(this.Global.aport3+'/data_report/selectTpxx',p,
      r =>{
        if(r.success){
          this.imagess=r.data;
          this.imagess.length!=0?this.imgshow1=true:this.imgshow1=false;
        }
      })
   },
   // save(val){
   //   if(this.form.clyj==''||this.form.clyj==undefined){
   //     this.$alert('处理意见不能为空！', '提示', {
   //       confirmButtonText: '确定',
   //     });
   //     return;
   //   }
   //   let p={
   //     pd:{
   //       uuid:val,
   //       clyj:this.form.clyj,
   //     },
   //     currentPage: 1,
   //     showCount: 10000,
   //     userName:this.userName,
   //     userCode:this.userCode,
   //     token:this.token,
   //     orgJB:this.juState,
   //     orgCode:this.orgCode,
   //   }
   //   this.$api.post(this.Global.aport3+'/lzbjxx/updateLzbjxx',p,
   //    r =>{
   //      if(r.success){
   //        this.$message({
   //          message: '处理成功！',
   //          type: 'success'
   //         });
   //         this.getList(this.CurrentPage, this.pageSize, this.pd);
   //         this.detailsDialogVisible = false;
   //      }
   //    })
   // },
   details(i){
     this.form.clyj='';
     this.form=i;
     this.detailsDialogVisible = true;
     this.getImg(i.uuid);
   },
   opentp(item){
     this.imgs=item;
     this.tcDialogVisible=true;
   },
   titleShow(e,el){
     el.target.title = e.label;
   },
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
      let p = {
         pd:{
           begin:this.cdt.begin,
           end:this.cdt.end,
           type:this.cdt.type,
           ssfj:this.cdt.ssfj,
           // size:this.cdt.size,
           zjhm:pd.zjhm==''?this.cdt.zjhm:pd.zjhm,
        	 ywx:pd.ywx,
        	 ywm:pd.ywm,
        	 zwxm:pd.zwxm,
        	 gjdq:pd.gjdq,
        	 csrqbegin:pd.csrqbegin,
        	 csrqEnd:pd.csrqEnd,
         },
        currentPage: currentPage,
        showCount: showCount,
        userName:this.userName,
        userCode:this.userCode,
        token:this.token,
        orgJB:this.juState,
        orgCode:this.orgCode,
      };
      var url = this.Global.aport2 + '/lzbjxx/getLzList';
      this.$api.post(url, p,
        r => {
          this.tableData = r.data.list;
          this.TotalResult = r.data.size;
        })
    },
    download(){
      if(this.tableData.length==0){
         this.$message.error('无可导出数据！');
         return
      }
      let p = {
         pd:{
           begin:this.cdt.begin,
           end:this.cdt.end,
           type:this.cdt.type,
           ssfj:this.cdt.ssfj,
           size:this.cdt.size,
           zjhm:this.pd.zjhm==''?this.cdt.zjhm:pd.zjhm,
        	 ywx:this.pd.ywx,
        	 ywm:this.pd.ywm,
        	 zwxm:this.pd.zwxm,
        	 gjdq:this.pd.gjdq,
        	 csrqbegin:this.pd.csrqbegin,
        	 csrqEnd:this.pd.csrqEnd,
         },
        currentPage: 1,
        showCount: 100000,
        userName:this.userName,
        userCode:this.userCode,
        token:this.token,
        orgJB:this.juState,
        orgCode:this.orgCode,
      };
      this.$api.post(this.Global.aport2 + '/lzbjxx/exportLzList',p,
       r =>{
         this.downloadM(r)
       },e=>{},{},'blob')
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/octet-stream"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '临住证件真伪核查.xls')
        document.body.appendChild(link)
        link.click()
    },
  }
}
</script>
<style scoped>
.el-button+.el-button {
  margin-left: 0px;
  margin-top: 10px;
}

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
  background-color: #EFF3F6;
}

.block {
  padding-top: 5px;
}

.crcolor {
  background: #EFF3F6;
}

.yy-input-text {
  text-align: left !important;
}

.titlelen {
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<style>
.yyinput input.el-input__inner {
  color: red!important;
}
</style>
