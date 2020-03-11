<template lang="html">
  <div class="">
    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
        <span class="input-text">所属分局：</span>
        <el-select v-model="pd.SSFJ" @change="getPSC(pd.SSFJ)" filterable clearable multiple collapse-tags default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='1'?false:true">
          <el-option
            v-for="item in getallfj"
            :key="item.DM"
            :label="item.DM+' - '+item.MC"
            :value="item.DM">
          </el-option>
        </el-select>
    </el-col>
    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
        <span class="input-text" title="所属派出所">所属派出所：</span>
        <el-select v-model="pd.SSPCS" @change="getZrq(pd.SSPCS)" filterable clearable multiple collapse-tags default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='3'||juState=='4'" :no-data-text="pd.SSFJ==''||pd.SSFJ==undefined?'请先选择所属分局':'无数据'">
          <el-option
            v-for="item in PSC"
            :key="item.DM"
            :label="item.DM+' - '+item.MC"
            :value="item.DM">
          </el-option>
        </el-select>
    </el-col>
    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
        <span class="input-text">责任区：</span>
        <el-select v-model="pd.SSZRQ" @change="getZrqProp(pd.SSZRQ)" filterable clearable multiple collapse-tags default-first-option placeholder="请选择"  size="small" class="input-input"
        :no-data-text="pd.SSFJ==''||pd.SSFJ==undefined?'请先选择所属分局':pd.SSPCS==''||pd.SSPCS==undefined?'请先选择派出所':'无数据'">
          <el-option
            v-for="item in zrq"
            :key="item.dm"
            :label="item.dm+' - '+item.mc"
            :value="item.dm">
          </el-option>
        </el-select>
    </el-col>
  </div>
</template>

<script>
export default {
  name:'AREAMS',
  props:[],
  data(){
    return{
      pd:{},
      getallfj:[],
      PSC:[],
      zrq:[],

      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
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
    this.getFj();
    if(this.juState=='2'){//分局登录
      this.pd.SSFJ = [this.orgCode];
      this.getPSC(this.pd.SSFJ);
    }
    if(this.juState=='3'){//派出所登录
      this.pd.SSFJ = [this.$store.state.pcsToju];
      this.getPSC(this.pd.SSFJ);
      this.pd.SSPCS = [this.orgCode];
    }
    if(this.juState=='4'){
      this.pd.SSFJ = [this.$store.state.pcsToju];
      this.getPSC(this.pd.SSFJ);
      this.pd.SSPCS = [this.$store.state.zrqTopcs];
      this.getZrq(this.pd.SSPCS);
    }
    this.$emit('getArea',this.pd);
    console.log('this.pd',this.pd)
    // this.getZrq();
  },
  activated(){

  },
  methods:{
    getFj(){
      this.$api.post(this.Global.aport5+'/djbhl/getallfj',{userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.getallfj=r.data;
         }
       })
    },
    getPSC(i){
      this.$emit('getArea',this.pd);
      this.$set(this.pd,'SSPCS','');
      this.$api.post(this.Global.aport5+'/djbhl/getpcsbyfjdm',{pd:{fjdm:i},userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
      r =>{
        if(r.success){
          this.PSC=r.data;
        }
      })
    },
    getZrq(arr) {
      this.$emit('getArea',this.pd);
      this.$set(this.pd,'SSZRQ','');
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname,
        "pcsdm":arr
      };
      var url = this.Global.aport2 + "/data_report/selectZrqDm";
      this.$api.post(url, p,
        r => {
          this.zrq = r.data.ZRQ;
        })
    },
    getZrqProp(val){
      this.$emit('getArea',this.pd);
    },
  },
}
</script>

<style lang="css" scoped>
</style>
