<template lang="html">
  <div class="">
    <div v-if="typeCount==true">
      <ul class="count-ul">
        <li><span class="t-red">未处理：  {{countPd.red}}</span></li>
        <li><span>已处理：  {{countPd.Black}}</span></li>
        <div style="clear:both"></div>
      </ul>
    </div>
    <div v-else>
      <ul class="count-ul" v-if="juState=='1'">
        <li><span>已处理：  {{countPd.Black}}</span></li>
        <li><span class="t-red">未处理：  {{countPd.red}}</span></li>
        <li><span class="t-blue">已下发：  {{countPd.blue}}</span></li>
        <li><span class="t-yel">待确认：  {{countPd.yellow}}</span></li>
        <div style="clear:both"></div>
      </ul>
      <ul class="count-ul" v-if="juState=='2'">
        <li><span>不需处理：  {{countPd.Black}}</span></li>
        <li><span class="t-red">未处理：  {{countPd.red}}</span></li>
        <li><span class="t-blue">支队下发：  {{countPd.blue}}</span></li>
        <li><span class="t-yel">已上报：  {{countPd.yellow}}</span></li>
        <div style="clear:both"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'COUNT',
  props:['ccPd','random','typeCount','state'],
  data(){
    return{
      countPd:{
        Black:'',
        red:'',
        blue:'',
        yellow:'',
      },
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
    this.getCount();
  },
  watch: {
    random:function(newVal,oldVal){
      this.random = newVal;
      this.getCount();
    }
  },
  methods:{
    getCount(){
      let p={};
      let url="";
      if(this.state=='LN'){
        url = '/JTLNInfoController/getClztCount';
        p={
          pd:{
            FJ:this.ccPd.FJ,
            PCS:this.ccPd.PCS,
          },
          'userCode':this.userCode,
          'userName':this.userName,
          'orgJB':this.juState,
          'orgCode':this.orgCode,
          'token':this.token,
          "orderBy": {"dataType":"date","value":"LNSJ"},
          "orderType":'DESC',
        }
      }else{
        url='/warningInfoController/getClztCount';
        p={
         pd:{
           MXLX:this.ccPd.MXLX,
           FJ:this.ccPd.FJ,
           PCS:this.ccPd.PCS,
         },
         'userCode':this.userCode,
         'userName':this.userName,
         'orgJB':this.juState,
         'orgCode':this.orgCode,
         'token':this.token
       }
      }
      this.$api.post(this.Global.aport4+url,p,
       r =>{
         if(r.success){
           if(this.juState=='1'){
             this.countPd.Black=r.data['已处理']||'0';
             this.countPd.red=r.data['未处理']||'0';
             this.countPd.blue=r.data['已下发']||'0';
             this.countPd.yellow=r.data['待确认']||'0';
           }else if(this.juState=='2'){
             this.countPd.Black=r.data['不需处理']||'0';
             this.countPd.red=r.data['未处理']||'0';
             this.countPd.blue=r.data['支队下发']||'0';
             this.countPd.yellow=r.data['已上报']||'0';
           }
         }
       })
    },

  }
}
</script>

<style lang="css" scoped>
</style>
