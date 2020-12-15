<template lang="html">
<div class="yyryhm">
      <div class="ryhm">
       <el-row type="flex">
         <el-col :span="24">
        <el-container>
          <el-aside class="kuang">
           <el-row :gutter="1" >
             <el-col :span="24" class="mb-10">
               <el-upload
                 ref="upload"
                 class="avatar-uploader"
                 :action="actions"
                 :show-file-list="false"
                 :on-change='changeUpload'
                 :on-success="handleAvatarSuccess"
                 :before-upload="beforeAvatarUpload">
                 <img v-if="imageUrl" :src="imageUrl" class="avatar">
                 <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </el-upload>
             </el-col>
             <el-col :span="24" class="mb-15 colleft">
               <span class="input-text" style="float:left"> 相&nbsp; 似 度：</span>
               <slider :min='0' :max='100' v-model="pxr" class="input-input"></slider>
             </el-col>
             <el-col :span="24" class="mb-15 colleft">
               <span class="input-text">人员性别：</span>
                <el-button :class="xshow ? 'sex' : 'sexx'"  circle @click="getXB(1)">男</el-button>
                <el-button :class="fshow ? 'sex' : 'sexx'"  circle @click="getXB(2)">女</el-button>
             </el-col>
             <el-col :span="24" class="mb-15 colleft">
               <span class="input-text">年龄范围：</span>
                <el-input-number v-model="num1"  size="small" controls-position="right" @change="handleChange" :min="1" :max="150" ></el-input-number>  -
                <el-input-number v-model="num2" size="small" controls-position="right" @change="handleChange" :min="1" :max="150" ></el-input-number>
             </el-col>
             <el-col :span="24">
               <div class="bnt" @click="submitUpload()"> </div>
             </el-col>
           </el-row>
           <div class="arrow_line" style="left:0px;top:0px; border-bottom-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="left:281px;top:0px; border-bottom-width:0;border-left-width:0"></div>
           <div class="arrow_line" style="left:0px;bottom:0px; border-top-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="left:281px;bottom:0px; border-top-width:0;border-left-width:0"></div>
         </el-aside>
          <el-container class="kuangr">
                  <div style="padding-top: 15%;width:100%" v-if="tshow">{{cont}}</div>
                  <div  v-if="bshow" style="width:calc(100%)">
                  <div class="total">共{{TotalResult}}条记录</div>
                  <div class="yline"></div>
                  <div style="overflow-y:auto; height:430px;">
                  <div v-for="item in imgs" >
                  <el-row class="crry">
                   <el-col :span="9" style="padding:10px 5px;">
                     <img :src="item.imageBase64" width="110" height="140" class="imgcs">
                   </el-col>
                   <el-col  :span="15" class="crryfont" >
                    <p style="text-align:right;padding-right:5px;margin-top:5px; color:#FFFF04; font-size:16px; font-weight:400;">
                      {{item.xsd | filteint}}<br/>匹配</p>
                     <p class="slh" style="margin-top:-38px;">国家地区：<span>{{item.gjdq}}</span></p>
                     <p class="slh" >证件号码：<span>{{item.zjhm}}</span></p>
                     <p class="slh" >人员性别：<span>{{item.xb}}</span></p>
                     <p class="slh" >中文姓名：<span>{{item.zwmc}}</span></p>
                     <p class="slh" >英文姓名：<span :title="item.ywx+item.ywm">{{item.ywx}}{{item.ywm}}</span></p>
                   </el-col>
                  </el-row>
                  </div>
                  </div>  </div>
                  <div class="arrow_line" style="left:314px;top:0px; border-bottom-width:0;border-right-width:0"></div>
                  <div class="arrow_line" style="right:0px;top:0px; border-bottom-width:0;border-left-width:0"></div>
                  <div class="arrow_line" style="left:314px;bottom:0px; border-top-width:0;border-right-width:0"></div>
                  <div class="arrow_line" style="right:0px;bottom:0px; border-top-width:0;border-left-width:0"></div>

                </el-container>
        </el-container>
      </el-col>
         </el-row>
      </div>
</div>
</template>
<script>
import slider from "../../common/slider.vue";
export default {
  components: { slider },
  data() {
    return {
      pd: { xb: "1" },
      limitNum: 1,
      fileList2: [],
      TotalResult: 0,
      uploadDialogVisible: false,
      actions: "",
      num1: 20,
      num2: 60,
      cont: "暂无数据",
      base64: "",
      imgs: {},
      imageUrl: "",
      tshow: true,
      bshow: false,
      xshow: false,
      fshow: true,
      hnum: 1,
      pxr: this.Global.xsd
    };
  },

  activated() {
    console.log("------", this.$route.query.row);
    if (this.$route.query.row) {
      this.pd.xb = this.$route.query.row.xb;
      this.pxr = this.$route.query.row.xsd;
      this.num1 = this.$route.query.row.age1;
      this.num2 = this.$route.query.row.age2;
      this.imageUrl = this.$route.query.row.base64._v;
      this.base64 = this.$route.query.row.base64._v;
      this.submitUpload();
    }
    this.actions = window.IPConfig.IP + this.Global.aport3 + "/getTp";
    // this.actions = "http://10.0.9.175:9439/getTp";
  },
  methods: {
    getXB(n) {
      this.pd.xb = n;
      if (n == 2) {
        this.xshow = true;
        this.fshow = false;
      } else {
        this.xshow = false;
        this.fshow = true;
      }
    },
    handleChange(value) {
      console.log(value);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    changeUpload(file, fileList) {
      this.base64 = this.getBase64(file.raw);
      console.log("---==---", this.base64);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isJPG) {
        this.hnum = 1;
        this.$message.error("上传图片的格式只能是 JPG或PNG 格式!");
      }
      if (!isLt2M) {
        this.hnum = 1;
        return this.$message.error("上传图片大小不能超过 10MB!");
      }
      this.hnum = 0;
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
          type: "success"
        });
      }
      // this.uploadDialogVisible = false;
    },
    submitUpload() {
      if (
        this.$refs.upload.uploadFiles.length == 0 &&
        this.imageUrl == "" &&
        this.hnum != 1
      ) {
        this.$message({
          message: "请先选择图片！",
          type: "warning"
        });
        return;
      }
      let p = {
        token: this.$store.state.wtoken,
        serverip: this.$store.state.serverip,
        // "token":'1111',
        // "serverip":'222',
        image: this.base64,
        xb: this.pd.xb,
        csrq: this.pd.csrq,
        xsd: this.Global.xsd
      };
      console.log("xsd", this.Global.xsd);
      // var url='http://10.0.9.175:9439/rlsb';
      var url = this.Global.aport3 + "/rlsb";

      this.$api.post(url, p, r => {
        if (r.status) {
          this.imgs = r.data;
          this.tshow = false;
          this.bshow = true;
          this.TotalResult = r.total;
          // this.uplo adDialogVisible=true;
        } else {
          this.cont = "查询无数据";
          this.tshow = true;
          this.bshow = false;
          this.$message.error(r.msg);
        }
      });

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
    }
  },
  filters: {
    filteint(n) {
      var ss = n.split(".");
      console.log(ss);
      if (ss.length > 1) {
        return parseInt(n * 100) + "%";
      }
      return n;
    }
  }
};
</script>

<style scoped>
.ryhm {
  text-align: center;
  margin: auto;
}
.slh {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  position: relative !important;
  padding-left: 8px;
}
.slh span {
  color: #13d2f7;
}
.rowcont1 {
  width: 390px !important;
  line-height: 50px;
  font-size: 16px;
  padding-right: 10px;
}
.rowcont2 {
  width: 380px !important;
  font-size: 16px;
  padding-left: 10px;
  margin-top: 30px;
}
.input-text {
  text-align: left !important;
  width: 28% !important;
  padding-left: 30px;
  color: #55d5f4;
}
.input-input {
  width: 55% !important;
}
.colleft {
  text-align: left;
}
.yyryhm {
  background: url(../../../assets/img/tb/bgry.png) repeat;
  min-height: 650px;
  min-width: 1100px;
  padding: 20px;
}
.kuang {
  padding: 10px;
  width: 280px;
  height: 510px;
  color: #13d2f7;
  border: 2px solid rgba(11, 154, 251, 0.9);
}
.kuangr {
  width: 100%;
  padding: 10px;
  margin-left: 15px;
  min-height: 510px;
  color: #13d2f7;
  border: 2px solid rgba(11, 154, 251, 0.9);
}
.crry {
  width: 47%;
  border: 2px solid rgba(33, 148, 226, 1);
  border-radius: 3px;
  float: left;
  margin: 5px 10px 10px 10px;
  background: url(../../../assets/img/tb/brj.png) no-repeat top right
    rgba(1, 95, 159, 0.47);
}
.crryfont {
  font-size: 14px;
  color: rgba(205, 229, 254, 1);
  text-align: left;
}
.bnt {
  margin-top: 20px;
  margin-left: 30px;
  width: 200px;
  height: 44px;
  cursor: pointer;
  background: url(../../../assets/img/tb/bnt01.png) no-repeat;
}
.bnt:hover {
  width: 200px;
  height: 44px;
  background: url(../../../assets/img/tb/bnt02.png) no-repeat;
}
.arrow_line {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 3px solid #01fbef;
}
.sex {
  width: 30px;
  height: 28px;
  line-height: 5px;
  background: rgba(0, 85, 148, 1);
  color: #13d2f7;
  border: 1px solid rgba(19, 210, 247, 1);
  cursor: pointer;
}
.sex:hover {
  width: 30px;
  height: 28px;
  color: #ffffff;
  line-height: 5px;
  background: rgba(14, 180, 223, 1);
  border: 1px solid rgba(19, 210, 247, 1);
}
.sexx {
  width: 30px;
  height: 28px;
  color: #ffffff;
  line-height: 5px;
  background: rgba(14, 180, 223, 1);
  border: 1px solid rgba(19, 210, 247, 1);
}
.yline {
  width: 100%;
  height: 1px;
  background: rgba(33, 148, 226, 1);
  margin-bottom: 10px;
}
.total {
  padding-left: 15px;
  line-height: 40px;
  color: #13d2f7;
  text-align: left;
}
.imgcs {
  border-radius: 15px;
  border: 1px solid rgba(11, 154, 251, 0.6);
  padding: 5px;
  background: #0b5298;
}
.slider {
  margin-left: 100px !important;
  margin-top: 12px;
}
</style>
<style>
.yyryhm .avatar-uploader .el-upload {
  width: 160px;
  height: 160px;
  background: rgba(24, 201, 250, 0.2);
  border: 3px solid rgba(14, 180, 223, 0.5);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 49px;
}

.yyryhm .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 160px;
  height: 160px;
  line-height: 178px;
  text-align: center;
  background: url(../../../assets/img/tb/tx.png) no-repeat;
}
.yyryhm .avatar {
  width: 160px;
  height: 160px;
  display: block;
}
.yyryhm .el-icon-plus:before {
  content: none;
}
.yyryhm .el-input-number--small {
  width: 50px;
  line-height: 30px;
}
.yyryhm .el-input-number.is-controls-right .el-input__inner {
  padding-left: 5px;
  padding-right: 23px;
  background: #054473;
  border: 1px solid rgba(19, 210, 247, 1);
  color: #13d2f7;
}
.yyryhm .el-input-number--small .el-input-number__decrease,
.yyryhm .el-input-number--small .el-input-number__increase {
  width: 15px !important;
  font-size: 13px;
  background: linear-gradient(
    0deg,
    rgba(0, 255, 234, 1),
    rgba(24, 201, 250, 1),
    rgba(0, 255, 234, 1)
  );
  opacity: 0.6;
  color: #333;
}
.yyryhm .el-button.is-circle {
  border-radius: 50%;
  padding: 2px;
}
</style>
