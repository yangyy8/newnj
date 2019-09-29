<template>
  <div class="loginbg">
     <div class="logintop">
        <img src="../assets/img/logodl.png">
     </div>
       <div class="login-box">
         <div class="logintitle">用户登录</div>
         <div class="login-item yzform"  data-scope="demo" data-name="userName" data-type="input"
          v-validate-easy="[['required']]">
        <el-input  placeholder="用户名" v-model="user.userName" @keyup.enter.native="keyLogin">
          <i slot="prefix" class="el-input__icon"><img src="../assets/img/logo01.png"></i>
        </el-input>
        </div>
      <div class="login-item yzform"  data-scope="demo" data-name="password" data-type="input"
       v-validate-easy="[['required']]">
        <el-input
          placeholder="密码"
          type="password" v-model="user.password" @keyup.enter.native="keyLogin">
          <i slot="prefix" class="el-input__icon"><img src="../assets/img/logo02.png"></i>
        </el-input>
      </div>
        <!-- <div class="login-item2">
         <el-checkbox v-model="jzmm">记住密码</el-checkbox>
         <a class="login-a">忘记密码</a>
        </div> -->
      <button class="login-btn" @click="login">登录</button>
       <div class="loginmessage">
         供下载内容:
         <el-select v-model="downtype" placeholder="请选择需要下载的内容"  @change="getUP(downtype)">
           <el-option
             v-for="(item,ind) in downs"
             :key="ind"
             :label="item.dm"
             :value="item.mc">
           </el-option>
         </el-select>
       </div>
    </div>

<el-dialog title="选择单位" :visible.sync="companyDialogVisible" width="20%">

  <el-row align="center"   :gutter="1">
        <el-col  :span="24"  class="input-item yzform"  data-scope="demo2" data-name="org" data-type="select"
         v-validate-easy="[['required']]">
          <span class="input-text">所属单位：</span>
           <el-select v-model="org"  filterable clearable  default-first-option class="input-input" placeholder="请选择"  size="small">
             <el-option
              v-for="item in companys"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
           </el-select>
        </el-col>
  </el-row>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="getLogin()" size="small">确定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
import {ToData} from '@/assets/js/ToArray.js'
export default {
  data(){
    return {
      user:{},
      jzmm:false,
      org:'',
      downtype:'',
      downs:[],
      companyDialogVisible:false,
      companys:[],
      token:'',
      serverip:'',
    }
  },
  mounted(){
    this.token=this.$route.query.token;
    this.serverip=this.$route.query.serverip;
    console.log('this.token',this.token);
    console.log('this.serviceip',this.serverip);
    if(this.token!=undefined && this.serverip!=undefined)
    {
        var url=this.Global.aport1+'/sso/api/checkUserLogin';
        var ff=new FormData();
        ff.append("token",this.token);
        ff.append("serverIp",this.serverip);
        let p=ff;
        this.$api.post(url,p,r => {
          if(r.success){
           this.user.userName=r.data.userName;
           this.user.password=r.data.passWord;
           this.$store.commit('getWtoken',this.token)
           this.$store.commit('getServerip',this.serverip)
           this.login();
         }else {
           window.location.href="http://tymh.gaj.nkg.js:908/loginOperate/toUserLogin";
         }
        });

     }else{
         this.getDown();
     }
    this.initJzmm();

    console.log('this.$store.state.orgid',this.$store.state.orgid)
  },
  methods:{
    getJuState(){
      let p={
        "currentPage":1,
        "showCount":10,
        "pd":{"DM":this.$store.state.orgid}
      }
      this.$api.post(this.Global.aport4+'/LRDWController/getMCAndJBByDM',p,
       r =>{
         if(r.success){
           this.$store.commit('getJuS',r.data[0].JB);
           if(this.$store.state.juState=='3'){
             this.$api.post(this.Global.aport4+'/LRDWController/getParentByDM',p,
              r =>{
                if(r.success){
                  this.$store.commit('PcsToJu',r.data.DM);
                }
              })
           }
         }
       })
    },
    initJzmm(){
      if(sessionStorage.getItem('jzmm')==1){
        this.user={
          userName:sessionStorage.getItem('userName'),
          password:sessionStorage.getItem('password')
        }
      }
    },
    isJzmm(){
      if(this.jzmm){
        sessionStorage.setItem('jzmm',1);
        sessionStorage.setItem('userName',this.user.userName);
        sessionStorage.setItem('password',this.user.password);
      }else {
        sessionStorage.clear();
      }
    },
    login(){
        // this.V.$submit('demo', (canSumit,data) => {
        //
        //   if(!canSumit) return;

            if(this.user.userName=="" || this.user.userName==undefined){
              this.$message.error("请输入用户名！");return;
            }
            if(this.user.password=="" || this.user.password==undefined){
              this.$message.error("请输入密码！");return;
            }
          var ff=new FormData();
          ff.append("userName",this.user.userName);
          ff.append("password",this.user.password);
          let p=ff;
          var url=this.Global.aport1+'/user/doLogin';
          this.$api.post(url,p,
             r => {
              if(r.success){
                  if(r.code==302){
                    this.companys=r.data;
                    this.companyDialogVisible=true;
                  }else if(r.code==200){

                    this.$store.commit('getToken',r.data.token)
                    this.$store.commit('getUid',this.user.userName)
                    this.$store.commit('getUname',r.data.mc)
                    this.$store.commit('getOrgname',r.data.ssdw.mc)
                    this.$store.commit('getOrgid',r.data.ssdw.dm)
                    this.$store.commit('getType','99')
                    this.Global.hasEnter="1";
                    this.$router.push({name: 'Index'});
                    this.getJuState();
                  }
              }else {
                  this.$message.error("用户名或者密码输入错误！");return;
              }
          })
      // });
    },
    getDown(){

      var url=this.Global.aport1+'/service/getfiles';
      this.$api.get(url,null,r => {
        if(r.success){
         this.downs=r.data;
        }
      });
    },
    getUP(n){
      console.log('n',n);
         window.location.href =n;
    },
    getLogin(){

      this.V.$submit('demo2', (canSumit,data) => {
        if(!canSumit) return;
        var ff=new FormData();
        ff.append("userName",this.user.userName);
        ff.append("password",this.user.password);
        ff.append("org",this.org);
        let p=ff;
        var url=this.Global.aport1+'/user/doLogin';
        this.$api.post(url,p,r => {
          if(r.success){
            // this.$message({
            //   message: '登录成功',
            //   type: 'success'
            // });
            this.$store.commit('getToken',r.data.token)
            this.$store.commit('getUid',this.user.userName)
            this.$store.commit('getUname',r.data.mc)
            this.$store.commit('getOrgname',r.data.ssdw.mc)
            this.$store.commit('getOrgid',r.data.ssdw.dm)
            this.$store.commit('getType','99')
            // this.$store.state.token=r.data.token;
            this.Global.hasEnter="1";
            this.$router.push({name: 'Index',params:{ id:'1'}});
          }else {
              this.$message.error("用户名或者密码输入错误！");return;
          }
        })
      });
    },
    keyLogin(){
     if(this.user.userName&&this.user.password){
       this.login();
     }
   },
  },
}
</script>
<style scoped>
.logintop{
  padding: 76px 0px 0px 10%;
}
.loginbg{
  width: 100%;
  height: 100%;
  position: absolute;
  /* z-index: 2001; */
  /* min-height: 1000px; */
  background: url('../assets/img/loginbg.png');
  background-size: 100% 100%;
  color: #fff;

}
.login-box{
  width: 25%;
  height: 40%;
  position: fixed;
  top:180px;
  left:50%;
  background: #ffffff;
  border-radius: 10px;
  margin-left: -12.0%;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  min-height: 360px;
  /* justify-content:center; */
}
.logintitle{
  font-size: 20px; text-align: center; color: #3E79EA;
  margin: 45px 0 15px 0;
}
.loginmessage{font-size: 12px; text-align:center;color: #999999; padding-top: 10px;}
.login-item{
  margin-top: 20px;
  width: 80%;
  color: #fff;

}
.login-item2{
  margin-top: 15px;
  width: 80%;
  font-size: 14px;
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.login-btn{
  margin-top: 40px;
  border: none;
  border-radius: 5px;
  background: #4186F4;
  width: 80%;
  min-height: 35px;
  height: 48px;
  cursor:pointer;
  font-size: 16px;
  color: #FFFFFF;
}
.el-input__icon img{
  padding-left: 8px;
  vertical-align: middle;
}
.login-a{
  color: #6d90c0;
  text-decoration: underline;
}

</style>
<style>
.login-box .el-input__inner{
  height: 45px!important;
  line-height: 45px!important;
}
.loginmessage .el-input__inner{
  height: 30px!important;

}
.loginmessage .el-input__icon{
    line-height: 30px!important;
}
  .loginbg .el-dialog__wrapper{
   padding-top: 10%;
  }
</style>
