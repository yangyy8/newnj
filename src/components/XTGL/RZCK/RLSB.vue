<template lang="html">
<div class="yyryhm">
      <div class="ryhm">
               <div class="tkin">
               <el-upload
                 ref="upload"
                 class="avatar-uploader tkimimg"
                 :action="actions"
                 :show-file-list="false"
                 :on-change='changeUpload'
                 :on-success="handleAvatarSuccess"
                 :before-upload="beforeAvatarUpload">
                 <img v-if="imageUrl" :src="imageUrl" class="avatar">
                 <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </el-upload>
                  <div class="bnt" @click="getrlsb()"> </div>
              </div>
                <transition name="slide-fade">
              <div class="tkinr" v-if="lh">
                 <el-row :gutter="1" style="text-align:left;color:rgba(19,210,247,1)">
                   <el-col :span="24" style="margin-top:50px;">
                    <span style="float:left;"> 相 似 度：</span> <slider :min='0' :max='100' v-model="per" class="input-input"></slider>
                   </el-col>
                   <el-col :span="24" style="margin-top:90px;">人员性别：
                     <el-button :class="tshow ? 'sex' : 'sexx'"  circle @click="getXB(1)">男</el-button>
                     <el-button :class="bshow ? 'sex' : 'sexx'"  circle @click="getXB(2)">女</el-button>
                   </el-col>
                   <el-col :span="24" style="margin-top:85px;">年龄范围：
                     <el-input-number v-model="num1"  size="small" controls-position="right" @change="handleChange" :min="1" :max="150" ></el-input-number>  -
                     <el-input-number v-model="num2" size="small" controls-position="right" @change="handleChange" :min="1" :max="150" ></el-input-number>
                   </el-col>
                 </el-row>
              </div>
              </transition>
      </div>
</div>
</template>
<script>
import slider from '../../common/slider.vue'
export default {
  components:{slider},
  data(){
    return {
      pd:{},
      per:80,
      limitNum:1,
      fileList2: [],
      uploadDialogVisible:false,
      actions:'',
      num1:20,
      num2:60,
      cont:"暂无数据",
      base64:'',
      imgs:{},
      imageUrl: '',
      tshow:false,
      bshow:true,
      lh:false,
      hnum:1,
    };
  },
   activated(){
     this.imageUrl='';
     this.lh=false;
     this.hnum=1;
   },
   mounted(){
     this.$store.dispatch("getXB");
     this.actions = window.IPConfig.IP+this.Global.aport3+"/getTp";
     // this.actions = "http://10.0.9.175:9439/getTp";
   },
   methods: {
     getXB(n){
       this.pd.xb=n;
       if(n==2){
         this.tshow=true;
         this.bshow=false;
       }else{
         this.tshow=false;
         this.bshow=true;
       }
     },
     handleChange(value) {
        console.log(value);
      },
     handleAvatarSuccess(res, file) {
       console.log(res)
       console.log(file)
       this.imageUrl = URL.createObjectURL(file.raw);
       console.log('==',this.imageUrl)
     },
     changeUpload(file,fileList){
       // const loading = this.$loading({
       //   lock: true,
       //   text: 'Loading',
       //   spinner: 'el-icon-loading',
       //   background: 'rgba(0, 0, 0, 0.7)'
       // });
      //  setTimeout(() => {
      //    loading.close();
      //   this.base64= this.getBase64(file.raw);
      //   console.log('---==---',this.base64);
      // }, 500);

        this.pd.base64= this.getBase64(file.raw);

        this.pd.age1=this.num1;
        this.pd.age2=this.num2;

        this.lh=true;

     },
     beforeAvatarUpload(file) {

       const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
       const isLt2M = file.size / 1024 / 1024 < 10;
       if (!isJPG) {
             this.hnum=1;
             this.$message.error('上传图片的格式只能是 JPG或PNG 格式!');
          }
       if (!isLt2M) {
            this.hnum=1;
           return this.$message.error('上传图片大小不能超过 10MB!');
         }
       this.hnum=0;
       return isJPG && isLt2M;
     },
     handleChange(value) {
      console.log(value);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    upSuccess(r) {

      if (r.success) {
        this.$message({
          message: r.data,
          type: 'success'
        });
      }
      // this.uploadDialogVisible = false;

    },
    submitUpload() {
      console.log('=====',this.$refs.upload.uploadFiles);
      if (this.$refs.upload.uploadFiles.length == 0) {
        this.$message({
          message: '请先选择图片！',
          type: 'warning'
        });
        return
      }
      // let p={
      //   // "token":this.$store.state.wtoken,
      //   // "serverip":this.$store.state.serverip,
      //   "token":'1111',
      //   "serverip":'222',
      //   "image":this.pd.base64,
      //   "xb":this.pd.xb,
      //   "csrq":this.pd.csrq,
      //   "xsd":this.pd.xsd
      // };

      // var url='http://10.0.8.231:9439/rlsb';
      // var url=this.Global.aport3+"/rlsb";
      //
      // this.$api.post(url,p,r => {
      //   if(r.status){
      //       this.imgs=r.data;
      //       this.tshow=false;
      //       this.bshow=true;
      //
      //       // this.uploadDialogVisible=true;
      //   }else {
      //
      //     this.cont="查询无数据";
      //     this.tshow=true;
      //     this.bshow=false;
      //     this.$message.error(r.msg);
      //   }
      // });

    //  this.$refs.upload.submit();
    },
    getBase64(file) {
       return new Promise(function(resolve, reject) {
       let reader = new FileReader();
       let imgResult = "";
       reader.readAsDataURL(file);
       reader.onload = function() {
         imgResult = reader.result;
       };
       reader.onerror = function(error) {
         reject(error);
       };
       reader.onloadend = function() {
         resolve(imgResult);
       };
     });
    },
      getrlsb(){

       if(this.hnum==1){
             this.$message.error('请上传图片!');
            return;
       }
        this.pd.xsd=this.Global.xsd;
        this.$router.push({name:'TZSF',query:{row:this.pd}});
      },
  },


}
</script>

<style scoped>
.ryhm {
  text-align: center; margin: auto;display: flex;justify-content:center;
}
.yyryhm{
  background: url(../../../assets/img/tb/bgry.png) repeat;
  min-height: 690px;
  padding: 66px 0 10px 0;
  width: 100%;
},
.tkin{
  width:280px;
  /* float: left; */
}
.tkimimg{
    height: 340px;
    background: url(../../../assets/img/tb/txk.png) no-repeat;
}
.tkinr{
background: url(../../../assets/img/tb/line.png) no-repeat; padding-left:350px;margin-left: -50px;
}
.bnt{
  margin-top: -91px;
  margin-left: 60px;
  width:160px;
  height:44px;
  cursor: pointer;
  background: url(../../../assets/img/tb/bnt1.png) no-repeat;
}
.bnt:hover{
  width:160px;
  height:44px;
  background: url(../../../assets/img/tb/bnt2.png) no-repeat;
}
.sex{
width:30px;
height:28px;
line-height: 5px;
background:rgba(0,85,148,1);
color: #13D2F7;
border:1px solid rgba(19,210,247,1);
cursor: pointer;
}
.sex:hover{
width:30px;
height:28px;
color: #FFFFFF;
line-height: 5px;
background:rgba(14,180,223,1);
border:1px solid rgba(19,210,247,1);
}
.sexx{
  width:30px;
  height:28px;
  color: #FFFFFF;
  line-height: 5px;
  background:rgba(14,180,223,1);
  border:1px solid rgba(19,210,247,1);
}
.slider{margin-left: 80px!important;margin-top: 5px;}
</style>
<style>

.tkin .avatar-uploader .el-upload {
  width:160px;
  height:160px;
  background:rgba(24,201,250,0.2);
  border:3px solid rgba(14, 180, 223, 0.5);
  border-radius:50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 49px;
 }

 .tkin .avatar-uploader-icon {
   font-size: 28px;
   color: #8c939d;
   width:160px;
   height:160px;
   line-height: 178px;
   text-align: center;
   background: url(../../../assets/img/tb/tx.png) no-repeat
 }
 .tkin .avatar {
   width:160px;
   height:160px;
   display: block;
 }
 .tkin .el-icon-plus:before {
    content: none;
}
.yyryhm .el-input-number--small {
    width: 50px;
    line-height: 30px;
}
.yyryhm .el-input-number.is-controls-right .el-input__inner {
    padding-left: 5px;
     padding-right:23px;
     background:#054473;
     border:1px solid rgba(19,210,247,1);
     color: #13D2F7;
   }
.yyryhm .el-input-number--small .el-input-number__decrease,
.yyryhm .el-input-number--small .el-input-number__increase {
    width: 15px!important;
    font-size: 13px;
    background:linear-gradient(0deg,rgba(0,255,234,1),rgba(24,201,250,1),rgba(0,255,234,1));
    opacity:0.6;
    color: #333;
}
.yyryhm .el-button.is-circle {
    border-radius: 50%;
    padding: 2px;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .2000s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(900px);
  opacity: 0;
}
</style>
