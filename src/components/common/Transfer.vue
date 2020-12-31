<template>
  <div>
    <div class="transfer">
      <el-transfer
      v-model="value"
      :props="propsData"
      :data="transData"
      :titles="['可选择列', '已选择列']"
      ></el-transfer>
    </div>
    <div class="mt-30 text-center">
      <el-button size="mini" type="primary" @click="save(value)">确定</el-button>
      <el-button size="mini" type="info" @click="cancel">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
    props:{
      //数据源
      transData:{
        type:Array,
        default: () => []
      },
      //代码显示项设置
      propsData:{
        type:Object,
        default: () => {
          return{
            key:'dm',
            label:'cm'
          } 
        }
      },
      //选中项
      pointData:{
        type:Array,
        default: () => []
      }
    },
    data(){
      return{
        value:[],
      }
    },
    mounted(){
      this.$nextTick(() =>{
        let arrObj = this.pointData
        let arr = [];
        arrObj.forEach(element => {
            arr.push(element.dm)
        });
        this.value = arr
      })
    },
    methods:{
      save(data){
        this.$emit("transSave",data);
      },
      cancel() {
        this.$emit("dialogCancel");
      }
    }
}
</script>
<style scoped>
.transfer{
    display: flex;
    justify-content: center;
    /* text-align: center; */
}
</style>