<template>
<el-form :model="form">
  <el-row type="flex" class="crcolor">
    <el-col :span="19">
      <el-row :gutter="2">
        <el-col :span="8">
          <span class="yy-input-text">英文姓：</span>
          <el-input placeholder="" size="small" v-model="form.YWX" class="yy-input-input"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="yy-input-text">英文名：</span>
          <el-input placeholder="" size="small" v-model="form.YWM" class="yy-input-input"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="yy-input-text">通报编号：</span>
          <el-input placeholder="" size="small" v-model="form.TBBH" class="yy-input-input"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="yy-input-text">性别：</span>
          <el-select v-model="form.XBDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="yy-input-input">
            <el-option
              v-for="(item,ind) in $store.state.xb"
              :key="ind"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <span class="yy-input-text">出生日期：</span>
          <el-date-picker class="yy-input-input"
             v-model="form.CSRQ" format="yyyy-MM-dd"
             type="date" size="small" value-format="yyyy-MM-dd"
             placeholder="选择日期" >
          </el-date-picker>
        </el-col>
        <el-col :span="8">
          <span class="yy-input-text">入库时间：</span>
          <el-date-picker class="yy-input-input"
             v-model="form.RKSJ" format="yyyy-MM-dd"
             type="date" size="small" value-format="yyyy-MM-dd"
             placeholder="选择时间" >
          </el-date-picker>
        </el-col>
        <el-col :span="8">
          <span class="yy-input-text">发布时间：</span>
          <el-date-picker class="yy-input-input"
             v-model="form.FBSJ" format="yyyy-MM-dd"
             type="date" size="small" value-format="yyyy-MM-dd"
             placeholder="选择时间" >
          </el-date-picker>
        </el-col>
        <el-col :span="8">
          <span class="yy-input-text">通报类型：</span>
          <el-select v-model="form.TBRYZLDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="yy-input-input">
            <el-option
              v-for="(item,ind) in $store.state.tbry"
              :key="ind"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
      </el-col>
        <el-col :span="24">
          <span class="yy-input-text" style="width:11.7%!important">备注：</span>
          <el-input placeholder="" size="small" v-model="form.BZ" class="input-input" style="width:86.8%!important"></el-input>
        </el-col>
        <el-col :span="24" style="text-align:center" v-if="allshow">
          <el-button type="primary" @click="basesave()" size="small">保存基本信息</el-button>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4" style="margin-left:20px;" >
      <el-carousel height="160px" class="photoCar"  indicator-position="outside">
        <el-carousel-item v-for="(item,ind) in imagess" :key="ind" v-if="imgshow1" style="text-align:center">
          <img :src="item" @click="opentp(item)">
        </el-carousel-item>
        <el-carousel-item v-if="!imgshow1" style="text-align:center">
          <img :src="imgURL" @click="opentp(imgURL)">
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
  <div class="stu-footerd">
    <el-row>
      <el-col :span="12">
        <div class="yylbt">证件列表</div>
      </el-col>
      <el-col :span="12" style="text-align:right" v-if="allshow">
        <el-button type="primary" size="mini" @click="editdia(0,1)">添加</el-button>
      </el-col>
    </el-row>

    <el-table :data="tableData1" border style="width: 100%" class="stu-table">
      <el-table-column prop="ZJZL_DESC" label="证件种类">
      </el-table-column>
      <el-table-column prop="ZJHM" label="证件号码">
      </el-table-column>
      <el-table-column label="操作" width="80" v-if="allshow">
        <template slot-scope='scope'>
          <el-button type="text" class="a-btn" title="编辑" icon="el-icon-edit" @click="editdia(1,1,scope.row)"></el-button>
          <el-button type="text" class="a-btn" title="删除" icon="el-icon-delete" @click="deletes(scope.row.DTID,1)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="stu-footerd">
    <el-row type="flex">
      <el-col :span="12">

        <el-row>
          <el-col :span="12">
            <div class="yylbt">国家地区</div>
          </el-col>
          <el-col :span="12" style="text-align:right" v-if="allshow">
            <el-button type="primary" size="mini" @click="editdia(0,2)">添加</el-button>
          </el-col>
        </el-row>
        <el-table :data="tableData2" border style="width: 100%" class="stu-table">
          <el-table-column prop="GJDQ_DESC" label="国家地区">
          </el-table-column>
          <el-table-column label="操作" width="80" v-if="allshow">
            <template slot-scope='scope'>
              <el-button type="text" class="a-btn" title="编辑" icon="el-icon-edit" @click="editdia(1,2,scope.row)"></el-button>
              <el-button type="text" class="a-btn" title="删除" icon="el-icon-delete" @click="deletes(scope.row.DTID,2)"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <el-col :span="12" style="padding-left:20px;">
        <el-row>
          <el-col :span="12">
            <div class="yylbt">请求国</div>
          </el-col>
          <el-col :span="12" style="text-align:right" v-if="allshow">
            <el-button type="primary" size="mini" @click="editdia(0,3)">添加</el-button>
          </el-col>
        </el-row>

        <el-table :data="tableData3" border style="width: 100%" class="stu-table">
          <el-table-column prop="GJDQ_DESC" label="请求国">
          </el-table-column>
          <el-table-column label="操作" width="80" v-if="allshow">
            <template slot-scope='scope'>
              <el-button type="text" class="a-btn" title="编辑" icon="el-icon-edit" @click="editdia(1,3,scope.row)"></el-button>
              <el-button type="text" class="a-btn" title="删除" icon="el-icon-delete" @click="deletes(scope.row.DTID,3)"></el-button>

            </template>
          </el-table-column>

        </el-table>
      </el-col>
    </el-row>

  </div>
  <div class="stu-footerd">
    <el-row>
      <el-col :span="12">
        <div class="yylbt">案由信息</div>
      </el-col>
      <el-col :span="12" style="text-align:right" v-if="allshow">
        <el-button type="primary" size="mini"  @click="anadd()">添加</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData4" border style="width: 100%" class="stu-table">
      <el-table-column prop="SJNAME" label="附件名称">
      </el-table-column>
      <el-table-column prop="SJPAPERTYPE" label="附件类型">
      </el-table-column>
      <el-table-column prop="CREATETIME" label="上传时间">
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope='scope'>
          <a @click="downloadM(scope.row.AY,scope.row.SJPAPERTYPE,scope.row.SJNAME)">
            <el-button type="text" class="a-btn" title="下载" icon="el-icon-download"></el-button>
          </a>
          <el-button type="text" v-if="allshow" class="a-btn" title="删除" icon="el-icon-delete" @click="deletes(scope.row.DTID,4)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog :title="dialogtxt" :visible.sync="editDialogVisible" :append-to-body="true">
    <el-row :gutter="1" v-if="zjshow">
      <el-col :span="24">
        <span class="yy-input-text" style="width:26%!important;text-align:right!important;">证件种类：</span>
        <el-select v-model="pd.ZJZLDM" filterable clearable default-first-option placeholder="请选择" size="small" class="yy-input-input" style="width:55%!important;">
          <el-option v-for="(item,ind1) in $store.state.zjzl" :key="ind1" :label="item.dm+' - '+item.mc" :value="item.dm">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="24">
        <span class="yy-input-text" style="width:26%!important;text-align:right!important;">证件号码：</span>
        <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="yy-input-input" style="width:55%!important;"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="1" v-if="gjshow">
      <el-col :span="24">
        <span class="yy-input-text" style=" width:26%!important;text-align:right!important;">国家地区：</span>
        <el-select v-model="pd.GJDQDM" filterable clearable default-first-option placeholder="请选择" size="small" class="yy-input-input" style="width:55%!important;">
          <el-option v-for="(item,ind2) in $store.state.gjdq" :key="ind2" :label="item.dm+' - '+item.mc" :value="item.dm">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addsave()" size="small">确 定</el-button>
      <el-button @click="editDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
  <el-dialog title="放大显示" :visible.sync="tcDialogVisible" style="text-align:center" :append-to-body="true">
    <div style="text-align:right;">
      <el-button size="small" type="primary" @click="rotate" title="旋转图片" icon="iconfont el-icon-yy-icon_rotate"></el-button>
    </div>
    <img :src="imgs" :style="{transform:'rotateZ('+deg+'deg)'}" style="max-width:400px;max-height:400px;" v-drag>
  </el-dialog>
  <el-dialog title="上传文件" :visible.sync="fileDialogVisible" :append-to-body="true">
    <el-row type="flex">
      <el-col :span="24">
        <el-upload
         class="input-input"
         ref="upload"
         :action='actions+"/drtbry/addReadAy"'
         :file-list="fileList"
         multiple
         :on-success="upSuccess"
         :data="uploadIconData"
         :before-upload="beforeAvatarUpload"
         :limit="1"
         :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <br />
          <span slot="tip" class="el-upload__tip">上传pdf文件或者png,jpg图片格式</span>
        </el-upload>
      </el-col>
    </el-row>
  </el-dialog>
</el-form>
</template>
<script>
import imgUrl from "../../assets/img/mrzp.png"
let Base64 = require('js-base64').Base64;
export default {
  name: 'TBRYEDIT',
  props: ['type', 'xid', 'random'],
  data() {
    return {
      form: {},
      imgURL: imgUrl,
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      imagess: [],
      fileList: [],
      actions: '',
      imgshow1: false,
      imgshow2: true,
      uploadIconData: {
        token: this.$store.state.token,
        DTID:  this.xid,
      },
      typet: '1',
      shm: true,
      lg: false,
      pd: {},
      dialogtxt: '添加',
      editDialogVisible: false,
      tcDialogVisible: false,
      fileDialogVisible: false,
      allshow:true,
      gjshow: false,
      zjshow: false,
      pp: {},
      imgs: '',
      deg: 0,
      datatype: 0,
      savetype:0,
      savadtid:'',
    }
  },
  mounted() {
    this.tableData1=[];
    this.tableData2=[];
    this.tableData3=[];
    this.tableData4=[];
    this.imagess=[];
    this.$store.dispatch("getZjzl");
    this.$store.dispatch("getXB");
    this.$store.dispatch("getTbry");
    this.actions = window.IPConfig.IP + this.Global.aport3;
      // this.actions = this.Global.aport3;
  //  this.getData0(this.id);

  },
  watch: {
    random:{
     handler(newVal, oldVa){
     this.getData0(this.xid);
   },
   immediate: true
   },
   //  type:{
   //   handler(val){
   //   this.page=val;
   //    this.getData0(this.id);
   // },
   // immediate: true
   // },
   // xid:{
   //   handler(val){
   //   this.getData0(this.id);
   // },
   // immediate: true
   // },
  },

  methods: {
    getData0(xid) {
      if(this.type==1)
      {
        this.allshow=true;
      }else {
        this.allshow=false;
      }
      let p = {
        "DTID": xid,
        "token": this.$store.state.token
      };
      this.$api.post(this.Global.aport3 + '/drtbry/getTBRYInfor', p,
        r => {
          this.form = r.data.JBXX;
          this.tableData1 = r.data.ZJXX;
          this.tableData2 = r.data.GJDQ;
          this.tableData3 = r.data.QQGJDQ;
          this.tableData4 = r.data.SJNAME;
          this.imagess = r.data.tp;
          this.imagess.length != 0 ? this.imgshow1 = true : this.imgshow1 = false;
        })
    },
    //上传文件

    anadd(){
      if (this.$refs.upload) {
        this.$refs.upload.clearFiles();
      }
        this.fileDialogVisible = true;
    },
    upSuccess(r) {
      if (r.success) {
        this.$message({
          message: r.data,
          type: 'success'
        });

      } else {
        this.$message.error(r.message);
      }
      this.fileDialogVisible = false;
      this.getData0(this.xid);
    },
    beforeAvatarUpload(file) {

      var filextension = file.name.substring(file.name.lastIndexOf("."), file.name.length);
      filextension = filextension.toLowerCase();

      if ((filextension != '.jpg') && (filextension != '.png') && (filextension != '.pdf')) {

        this.$message({
          message: '上传文件只能是pdf文件或者png,jpg图片格式!',
          type: 'warning'
        });
        return false;
      }
      return true;
    },
    showUpload() {
      console.log(this.xid);
      this.fileDialogVisible = true;
      this.typemd = "";

      console.log(this.$refs.upload)
      if (this.$refs.upload) {
        this.$refs.upload.clearFiles();
      }
    },
    submitUpload() {
      if (this.$refs.upload.uploadFiles.length == 0) {
        this.$message({
          message: '请先选择文件！',
          type: 'warning'
        });
        return
      }
      this.uploadIconData.fileName=this.$refs.upload.uploadFiles[0].name;

      this.$refs.upload.submit();
    },
    downloadM(data,tt,fname) {
      if (!data) {
        return
      }
      if(tt=="pdf"){
      let URL = this.dataURLtoBlob(data);

      var reader = new FileReader();
      reader.readAsDataURL(URL);
      reader.onload = function(e) {
        // 兼容IE
        console.log(window.navigator.msSaveOrOpenBlob);
        if (window.navigator.msSaveOrOpenBlob) {
          var bstr = atob(e.target.result.split(",")[1]);
          var n = bstr.length;
          var u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          var blob = new Blob([u8arr]);
          window.navigator.msSaveOrOpenBlob(blob, fname+'.pdf');
        } else {
          // 转换完成，创建一个a标签用于下载
          var a = document.createElement('a');
          a.download = fname+'.pdf';
          a.href = e.target.result;
          a.setAttribute("id", "export")
          a.click();
        }
      }
    }else {
      //下载图片
        var imgUrl=data;

         // let timestamp = new Date().getTime()
        // let name = imgUrl.substring(22, 30) + timestamp + '.png'
        //
        // this.downloadUrl = imgUrl
        // this.downloadfilename = name
        // setTimeout(() => {
        //  this.$refs.download.click()
        // }, 200)

        var a = document.createElement('a');
        a.href = imgUrl;
        a.setAttribute("download", fname)
        a.click();
        }
    },
    dataURLtoBlob(dataurl) {
      var bstr = atob(dataurl)
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
        type: 'pdf'
      });
    },

    editdia(t, n, i) {
      this.$set(this.pd, "ZJHM", '');
      this.$set(this.pd, "ZJZLDM", '');
      this.$set(this.pd, "GJDQDM", '');
      this.gjshow = false
      this.zjshow = false
      this.datatype = t;
      this.savetype= n;
      if (t == 0) {

        this.savadtid=this.xid;
        if (n == 1) { //证件信息
          this.zjshow = true;
        } else if (n == 2) { //国家地区//请求图

          this.gjshow = true
        }else if (n == 3) {
          this.gjshow = true
        }
        this.dialogtxt = "添加";
      } else {
        if (n == 1) { //证件信息
          this.pd.ZJZLDM=i.ZJZLDM;
          this.pd.ZJHM=i.ZJHM;
          this.savadtid=i.DTID;
          this.zjshow = true;
        } else if (n == 2) { //国家地区
          this.pd.GJDQDM=i.GJDQDM;
          this.savadtid=i.DTID;
          this.gjshow = true
        } else if (n == 3) { //请求图
          this.pd.GJDQDM=i.GJDQDM;
          this.savadtid=i.DTID;
          this.gjshow = true
        }
        this.dialogtxt = "编辑";
      }
      this.editDialogVisible = true;
    },
    basesave(){
      let p = {
        "CSRQ": this.form.CSRQ,
        "YWX": this.form.YWX,
        "YWM": this.form.YWM,
        "TBBH": this.form.TBBH,
        "FBSJ": this.form.FBSJ,
        "TBRYZL": this.form.TBRYZLDM,
        "XB": this.form.XBDM,
        "DTID": this.xid,
        "token": this.$store.state.token,
      };
      this.$api.post(this.Global.aport3 + '/drtbry/updateTBRY', p,
        r => {
          if (r.success) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });

          } else {
            this.$message.error("保存失败");
            return;
          }
        });
    },
    addsave() {

  if(this.savetype=='1')
  {
    console.log(this.pd.ZJZLDM+'1111');
    if(this.pd.ZJZLDM==undefined || this.pd.ZJZLDM==""){
      this.$message({
        message: '请选择证件种类!',
        type: 'warning'
      });
      return ;
    }
    if(this.pd.ZJHM==undefined || this.pd.ZJHM==""){
      this.$message({
        message: '请输入证件号码！!',
        type: 'warning'
      });
      return ;

    }
  }else if(this.savetype=='2'){

    if(this.pd.GJDQDM==undefined || this.pd.GJDQDM==""){
      this.$message({
        message: '请选择国家地区！!',
        type: 'warning'
      });
      return ;
    }
  }else if(this.savetype=='3'){
    if(this.pd.GJDQDM==undefined || this.pd.GJDQDM==""){
      this.$message({
        message: '请选择国家地区！!',
        type: 'warning'
      });
      return ;
    }
  }
      if (this.datatype == 1) {
        let p = {
          "TYPE": this.savetype+'',
          "ZJZL": this.pd.ZJZLDM,
          "GJDQ": this.pd.GJDQDM,
          "ZJHM": this.pd.ZJHM,
          "DTID": this.savadtid,
          "token": this.$store.state.token,
        };
        this.$api.post(this.Global.aport3 + '/drtbry/updateTbryAndZjxxOrGjdqOrQqg', p,
          r => {
            if (r.success) {
              this.$message({
                message: '保存成功',
                type: 'success'
              });
              this.editDialogVisible=false;
              this.getData0(this.xid);
            } else {
              this.$message.error("保存失败");
              return;
            }
          });
      } else if (this.datatype == 0) {
        let p = {
          "TYPE": this.savetype+'',
          "ZJZL": this.pd.ZJZLDM,
          "GJDQ": this.pd.GJDQDM,
          "ZJHM": this.pd.ZJHM,
          "DTID": this.savadtid,
          "token": this.$store.state.token,
        };
        this.$api.post(this.Global.aport3 + '/drtbry/addTbryAndZjxxOrGjdqOrQqg', p,
          r => {
            if (r.success) {
              this.$message({
                message: '保存成功',
                type: 'success'
              });
              this.editDialogVisible=false;
              this.getData0(this.xid);
            } else {
              this.$message.error("保存失败");
              return;
            }
          });
      }
    },
    deletes(dtid,n) {
      let p = {
        "DTID": dtid,
        "token": this.$store.state.token,
        "TYPE": n+''
      };
      this.$api.post(this.Global.aport3 + '/drtbry/deleteTbryAndZjxxOrGjdqOrQqgOrAy', p,
        r => {
          if (r.success) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
          this.getData0(this.xid);
          } else {
            this.$message.error("删除失败");
            return;
          }
        });
    },
    rotate() {
      this.deg += 90;
      if (this.deg >= 360) {
        this.deg = 0
      }
    },
    opentp(item) {
      this.imgs = item;
      this.tcDialogVisible = true;
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
  padding: 0 10px;
}

.yy-input-text {
  text-align: left !important;
}
</style>
<style>
.el-button+.el-button {
  margin-left: 0 !important;
}
.yycontent .el-checkbox {
  margin-left: 20px !important;
  line-height: 30px;
}
.yycontent .el-checkbox+.el-checkbox {
  margin-left: 20px !important;
}
.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
.crcolor .el-carousel__indicators--outside button {
    background-color: blue !important;
    opacity: .24;
}
.crcolor .el-carousel__button{
  height: 5px!important;
  border-radius: 50%;
}
.crcolor .el-carousel__indicators{
  line-height: 8px!important;
}
</style>
