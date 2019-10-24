<template lang="html">
  <div class="yymain">
    <div class="yytitle">
      <div style="text-align:left">
        <el-button type="primary" size="small" class="mb-5" @click="exportexcel">导出</el-button>
        <el-button type="success" size="small" class="mb-5" @click="$router.go(-1)">返回</el-button>
      </div>
      <el-table
          ref="multipleTable"
         :data="tableData"
         border
         style="width: 100%">
         <!-- <el-table-column
           type="selection"
           width="55">
         </el-table-column> -->
         <el-table-column
           prop="zwxm"
           label="中文姓名">
         </el-table-column>
         <el-table-column
           prop="ywxm"
           label="英文姓名">
         </el-table-column>
         <el-table-column
           prop="zjzl"
           label="证件种类">
         </el-table-column>
         <el-table-column
           prop="zjhm"
           label="证件号码">
         </el-table-column>
         <el-table-column
           prop="xb"
           label="性别">
         </el-table-column>
         <el-table-column
           prop="gjdq"
           label="国家地区">
         </el-table-column>
         <el-table-column
           prop="csrq"
           label="出生日期">
         </el-table-column>
         <el-table-column
           prop="zsrq"
           label="住宿日期">
         </el-table-column>
         <el-table-column
           prop="djsj"
           label="登记日期">
         </el-table-column>
         <el-table-column
           prop="djdw"
           label="登记单位">
         </el-table-column>
         <el-table-column
           prop="ssfj"
           label="所属分局">
         </el-table-column>
         <el-table-column
           prop="tlyxqz"
           label="停留有效期至">
         </el-table-column>
         <el-table-column
           prop="lzdwmc"
           :show-overflow-tooltip="true"
           label="地址">
         </el-table-column>
         <el-table-column
           prop="bz"
           label="备注">
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
            </el-row>
           </el-form>
            <div slot="footer" class="dialog-footer">
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
import imgUrl from "../../../../assets/img/t1.png"
export default {
  data(){
    return{
      tableData:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      options:this.pl.options,
      pd:{},
      xid:'',
      rybh:'',

      detailsDialogVisible:false,
      form:{},
      imagess: [],
      imgshow1:false,
      imgshow2:true,
      typet:'1',
      shm1:true,
      shm2:true,
      pp:{},
      imgURL:imgUrl,
      tcDialogVisible:false,
      imgs:'',
      deg:0,
    }
  },
  activated(){
    this.pd = this.$route.query.row;
    this.getList(this.CurrentPage,this.pageSize,this.pd)
  },
  methods:{
    pageSizeChange(val) {
      this.pageSize=val;
      this.getListTu(this.CurrentPage,val,this.pdTu);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getListTu(val,this.pageSize,this.pdTu);
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
    getList(currentPage,pageSize,pd){
      let p={
        'currentPage':currentPage,
        'showCount':pageSize,
        'pd':pd,
        'userCode':this.$store.state.uid,
        'userName':this.$store.state.uname,
      }
      this.$api.post(this.Global.aport3+'/rxtj/getRxtjList',p,
       r =>{
         if(r.success){
           this.tableData = r.data.list;
           this.TotalResult = r.data.size;
         }
       })
    },
    details(i){
      console.log(i);
      this.form=i;
      this.detailsDialogVisible = true;
      this.getImg(i.uuid)
    },
    rotate(){
      this.deg += 90;
      if(this.deg >= 360){
          this.deg = 0
      }
    },
    opentp(item){
      this.imgs=item;
      this.tcDialogVisible=true;
    },
    exportexcel(){
      let p={
        'currentPage':1,
        'showCount':10000,
        'pd':this.pd
      }
      this.$api.post(this.Global.aport3+'/rxtj/exportRxList',p,
        r =>{
          this.downloadM(r,'临住人像统计列表');
        },e=>{},{},'blob')
    },
    downloadM (data,name) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
  },
}
</script>

<style lang="css" scoped>
</style>
