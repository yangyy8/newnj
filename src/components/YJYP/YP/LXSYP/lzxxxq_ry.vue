<template lang="html">
  <div class="">
    <el-form :model="form"  class="crcolor" style="padding:10px;line-height:35px;">
              <el-row type="flex">
                <el-col :span="16">
                  <el-row :gutter="2">
                    <el-col :span="12">
                      <span  class="yy-input-text">英文姓：</span>
                        <el-input placeholder="" size="small" v-model="form.firstnameEN"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">英文名：</span>
                      <el-input placeholder="" size="small" v-model="form.surnameEN"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">英文姓名：</span>
                      <el-input placeholder="" size="small" v-model="form.YWXM"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">中文姓名：</span>
                      <el-input placeholder="" size="small" v-model="form.nameCH"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">证件种类：</span>
                      <el-input placeholder="" size="small" v-model="form.paperType_desc"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">证件号码：</span>
                      <el-input placeholder="" size="small" v-model="form.paperNO"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">国家地区：</span>
                      <el-input placeholder="" size="small" v-model="form.nationality_desc"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">出生日期：</span>
                      <el-input placeholder="" size="small" v-model="form.birthday"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">性别：</span>
                      <el-input placeholder="" size="small" v-model="form.gender_desc"  class="yy-input-input"></el-input>
                    </el-col>

                    <el-col :span="12" >
                      <span class="yy-input-text">签证种类：</span>
                      <el-input placeholder="" size="small" v-model="form.visaType_desc"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12" >
                      <span class="yy-input-text" title="签证(注)号码">签证(注)号码：</span>
                        <el-input placeholder="" size="small" v-model="form.visaNO"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12" >
                      <span class="yy-input-text">签发机关：</span>
                      <el-input placeholder="" size="small" v-model="form.assignmentOrg_desc"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12" >
                      <span class="yy-input-text" title="签证(注)有效期至">停留有效期至：</span>
                        <el-input placeholder="" size="small" v-model="form.localizePeriod"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12" >
                      <span class="yy-input-text" title="数据来源">数据来源：</span>
                        <el-input placeholder="" size="small" v-model="form.dataSource_desc"  class="yy-input-input"></el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="8">
                  <el-carousel height="250px" class="photoCar">
                    <el-carousel-item v-for="(item,ind) in imagess" :key="ind" v-if="imgshow1" style="text-align:center">
                      <img  :src="item.ZPNR" @click="opentp(item.ZPNR)">
                    </el-carousel-item>
                    <el-carousel-item v-if="!imgshow1" style="text-align:center">
                      <img :src="imgURL" @click="opentp(imgURL)">
                    </el-carousel-item>
                  </el-carousel>
                </el-col>
              </el-row>

              <el-row :gutter="3" >

                <el-col :span="8">
                  <span class="yy-input-text" title="拟离开日期">离开日期：</span>
                    <el-input placeholder="" size="small" v-model="form.leaveTime"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="16">
                  <span class="yy-input-text" style="width:17.4%">接待单位：</span>
                    <el-input placeholder="" size="small" v-model="form.receiveUnit"  class="yy-input-input" style="width:80%!important"></el-input>
                </el-col>
              </el-row>


              <el-row :gutter="3" >
                <el-col :span="8">
                  <span class="yy-input-text" title="记录操作时间">记录操作时间：</span>
                  <el-input placeholder="" size="small" v-model="form.opTime"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="16" class="crcolor">
                  <span class="yy-input-text" title="散居住址或留宿单位地址" style="width:17.4%">散居住址或留宿单位地址：</span>
                  <el-input placeholder="" size="small" v-model="form.resideAddress"  class="yy-input-input" style="width:80%!important"></el-input>
                </el-col>

                <el-col :span="8">
                  <span class="yy-input-text" title="紧急情况联系人">操作类型：</span>
                      <el-input placeholder="" size="small" v-model="form.opType_desc"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="16" class="crcolor">
                  <span class="yy-input-text" title="临时住宿登记单位行政区划" style="width:17.4%">临时住宿登记单位行政区划：</span>
                   <el-input placeholder="" size="small" v-model="form.tmpResideRegOrgArea_desc"  class="input-input" style="width:80%!important"></el-input>
                </el-col>

                <el-col :span="8"   class="crcolor">
                  <span class="yy-input-text">省份：</span>
                    <el-input placeholder="" size="small" v-model="form.province"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="16" class="crcolor">
                  <span class="yy-input-text" style="width:17.4%">临时住宿登记单位：</span>
                   <el-input placeholder="" size="small" v-model="form.tmpResideRegOrgName"   class="input-input" style="width:80%!important"></el-input>
                </el-col>

                <!-- <el-col :span="8">
                  <span class="yy-input-text" title="原始文件名">原始文件名：</span>
                  <el-input placeholder="" size="small" v-model="form.origFileName"  class="yy-input-input"></el-input>
                </el-col> -->
                <el-col :span="8" class="crcolor">
                  <span class="yy-input-text">住宿日期：</span>
                  <el-input placeholder="" size="small" v-model="form.resideTime"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="16"  class="crcolor">
                  <span class="yy-input-text" style="width:17.4%">备注：</span>
                  <el-input placeholder="" size="small" v-model="form.remarks"  class="yy-input-input" style="width:80%!important"></el-input>
                </el-col>

                <!-- <el-col :span="16">
                  <span class="yy-input-text" title="核查条件" style="width:17.4%">核查条件：</span>
                  <el-input placeholder="" size="small" v-model="form.queryStr"  class="input-input" style="width:80%!important"></el-input>
                </el-col> -->
              </el-row>
         </el-form>
         <el-dialog  title="放大显示" :visible.sync="tcDialogVisible" style="text-align:center" custom-class="big_dialog" :append-to-body="false" :modal="false" >
           <div style="text-align:right;">
             <el-button  size="small" type="primary"  @click="rotate" title="旋转图片" icon="iconfont el-icon-yy-icon_rotate"></el-button>
           </div>
           <img :src="imgs" :style="{transform:'rotateZ('+deg+'deg)'}" v-drag>
         </el-dialog>
</div>
</template>
<script>
import imgUrl from '../../../../assets/img/t1.png'
export default {
  name:'LZXXRY',
  props:['type','xid','random','rybh','gjdq'],
  data(){
    return{
      form:{},
      imagess: [],
      imgshow1:false,
      typet:'1',
      shm:true,
      imgURL:imgUrl,
      tcDialogVisible:false,
      imgs:'',
      deg:0,
    }
  },

  mounted(){
    this.getData2();
  },
  watch:{
    random:function(newVal,oldVal){
        this.random = newVal;
        this.getData2()
      }
  },
  methods:{
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
    getData2(){//人员画像
      this.form={};
      this.form=this.xid;
      this.getPhoto();
    },
    getPhoto(){
      let p={
        "pd":{
          RYBH:this.rybh||'',
          YWLB:'0003',
          TXLY:'0',
          GJDQ:this.gjdq||'',
        },
        // "orderType":"DESC",
	      // "orderBy":{value:"CJSJ",dataType:"date"}
      }
      this.$api.post(this.Global.aport2+'/ryhx/getrytpxx',p,
       r =>{
         this.imagess=r.data.resultList;
         this.imagess.length!=0?this.imgshow1=true:this.imgshow1=false;
       })
    },
  },
}
</script>

<style scoped>
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

.crcolor {
  background: #EFF3F6;
}
.yy-input-text {
  text-align: left !important;
}
</style>
<style>
  .el-button+.el-button{margin-left: 0!important;}
  .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
  .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
  .bj .el-dialog__wrapper {
    background: #000;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
