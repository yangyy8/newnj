<template lang="html">
    <!-- 修改密码 -->
  <div class="yymain">
    <div class="xgmm">
     <div class="xgtitle">  修改密码</div>
      <div class="ycontent">
        <el-form :model="form" ref="addForm">
            <el-row type="flex"  class="mb-6">
              <el-col :span="24" class="input-item">
                <span class="yy-input-text"><font class="yyred">*</font> 旧密码：</span>
                <el-input placeholder="请输入内容" size="small" type="password" v-model="form.oldPassword" class="yy-input-input" ></el-input>
              </el-col>
            </el-row>
            <el-row type="flex"  class="mb-6">
              <el-col :span="24" class="input-item">
                <span class="yy-input-text"><font class="yyred">*</font> 新密码：</span>
                <el-input placeholder="请输入内容" size="small" type="password"  v-model="form.newPassword1" class="yy-input-input" ></el-input>
              </el-col>
            </el-row>

            <el-row type="flex" class="mb-6" >
              <el-col :span="24" class="input-item">
                <span class="yy-input-text"><font class="yyred">*</font> 确认密码：</span>
                <el-input placeholder="请输入内容" size="small" type="password"  v-model="form.newPassword2" class="yy-input-input" ></el-input>
              </el-col>
            </el-row>
        </el-form>
          <div slot="footer" class="dialog-footer" style="text-align:center;">
            <el-button type="primary" @click="addItem('addForm')" size="small">确 定</el-button>
            <el-button @click="form={}" size="small">重 置</el-button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form:{}
    }
  },
    methods: {
       addItem(i)
       {
         if(this.form.oldPassword==undefined || this.form.oldPassword.trim()==''){
           this.$message.error("请输入旧密码!");return ;
         }
         if(this.form.newPassword1==undefined || this.form.newPassword1.trim()==''){
           this.$message.error("请输入新密码!");return ;
         }
         if(this.form.newPassword2==undefined || this.form.newPassword2.trim()==''){
           this.$message.error("请输入确认密码!");return ;
         }
         if(this.form.newPassword1!=this.form.newPassword2){
           this.$message.error("两个新密码不一致，请重新输入!");return ;
         }

         var ffs = new FormData();
         ffs.append("token", this.$store.state.token);
         ffs.append("oldPassword", this.form.oldPassword);
         ffs.append("newPassword", this.form.newPassword1);
         let p = ffs;
         this.$api.post(this.Global.aport1+'/user/changePassword', p,
           r => {
                if(r.success){
                  this.$message({
                    message: '修改成功！',
                    type: 'success'
                  });

                }
              this.form={};
           })

       }
    },
}
</script>
<style scoped>
.xgmm{width: 450px; margin: 0 auto; background: #ffffff; padding: 20px;  border-radius: 5px;}
.xgtitle{ line-height: 40px; color: blue;}
.ycontent {
  line-height: 40px;
  border: 1px solid #cccccc;
  padding: 20px 20px 20px 0px;
  border-radius: 5px;
}

.yy-input-text {
  width: 25% !important;
}

.yy-input-input {
  width: 75% !important;
}
</style>
