<template lang="html">
  <div class="gzgl">
      <div style="color:red;font-size:12px;line-height:40px;padding-left:10px;">  注：勾选才为有效状态，在点保存时请再次确认是否勾选正确！   <el-button size="small" type="primary" @click="doset()">刷新</el-button></div>
      <el-row align="center"   :gutter="2">
        <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>预警规则管理</span>
            <el-button style="float: right; padding: 3px 5px;color:#999999" type="text" @click="canel(1)">重置</el-button>
            <el-button style="float: right; padding: 3px 0" type="text" @click="save(1)">保存</el-button>
          </div>
          <el-checkbox-group
            v-model="checkedCities1" class="text item">
            <el-checkbox v-for="(city,index) in cities1" :label="city.id" :key="index"  @change="">
            <span @click.prevent="getZJ(city.mxmc,1,city.mxsm)">{{city.mxsm}}</span>
            </el-checkbox>
          </el-checkbox-group>
        </el-card>
        </el-col>
        <el-col  :sm="24" :md="12" :lg="8"  class="input-item" v-if="card1">
          <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{name2}}</span>
            <el-button style="float: right; padding: 3px 5px;color:#999999" type="text" @click="canel(2)">重置</el-button>
            <el-button style="float: right; padding: 3px 0" type="text" @click="save(2)">保存</el-button>
          </div>
          <el-checkbox-group
            v-model="checkedCities2" class="text item">
            <el-checkbox v-for="city in cities2" :label="city.id" :key="city.id"  @change="">
                <span @click.prevent="getZJ(city.gzmc,2,city.gzsm)">{{city.gzsm}}</span>
            </el-checkbox>
          </el-checkbox-group>
        </el-card>
        </el-col>
        <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="card2">
          <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{name3}}</span>
              <el-button style="float: right; padding: 3px 5px;color:#999999" type="text" @click="canel(3)">重置</el-button>
              <el-button style="float: right; padding: 3px 0" type="text" @click="save(3)">保存</el-button>
          </div>
          <div v-if="cshow" style="text-align:center;line-height:40px;color:red;font-size:14px;"> 暂无数据</div>
          <div v-for="city in cities3" :key="city.bjmc" style="font-size:14px;line-height:40px; " v-else>
            <el-row type="display">
              <el-col :span="12" style="line-height:45px; text-align:right;">
                    {{city.bjsm}} ：
                </el-col>
                <el-col :span="12" v-if="city.bjmc.indexOf('GJDQ')>=0">
                  <el-select v-model="city.bjz"  multiple  filterable clearable default-first-option  placeholder="请选择"  size="small" class="yy-input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="12" v-else-if="city.bjmc.indexOf('QZZL')>=0">
                  <el-select v-model="city.bjz"  multiple  filterable clearable default-first-option  placeholder="请选择"  size="small" class="yy-input-input">
                    <el-option
                      v-for="item in $store.state.qzzl"
                      :key="item.dm"
                      :label="item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="12" v-else-if="city.bjmc.indexOf('ZJZL')>=0">
                  <el-select v-model="city.bjz"  multiple  filterable clearable default-first-option  placeholder="请选择"  size="small" class="yy-input-input">
                    <el-option
                      v-for="item in $store.state.zjzl"
                      :key="item.dm"
                      :label="item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="12" v-else>
                  <el-input v-model="city.bjz" size="mini" class="yy-input-input"></el-input>
                </el-col>
            </el-row>

          </div>
        </el-card>
        </el-col>
      </el-row>
  </div>
</template>
<script scoped>
import {
  formatDate
} from '@/assets/js/date.js'
export default {
  inject: ['reload'],
  data() {
    return {
      cities1: [],
      cities2: [],
      cities3: [],
      checkedCities1: [],
      checkedCities2: [],
      checkedCities3: [],
      card2: false,
      card1: false,
      input3: '',
      name2: '',
      name3: '',
      cshow:true,
      val1:'',
      val3:'',
      val01:'',
      val03:'',
    }
  },
  mounted() {
    this.$store.dispatch("getGjdq");
    this.$store.dispatch("getQzzl");
    this.getlist()
  },
  methods: {
    getlist() {

      this.$api.get(this.Global.aport7 + '/drools/getAllModels', null,
        r => {

          this.cities1 = r.data;
          var array = r.data
          for (var i = 0; i < array.length; i++) {
            if (array[i].sfyx == '1') {
              this.checkedCities1.push(array[i].id);
            }
          }


        });
    },
    getZJ(n, t, mc) {

      if (t == 1) {
    this.val1=n;this.val3=mc;
        this.name2 = mc;
        this.cities2 = [];
        let p = {
          "args": n,
          "token":this.$store.state.token
        };
        this.$api.get(this.Global.aport7 + '/drools/getRules', p,
          r => {
            this.cities2 = r.data;
            var array = r.data
            for (var i = 0; i < array.length; i++) {
              if (array[i].sfyx == '1')
                this.checkedCities2.push(array[i].id);
            }
          });
        this.card1 = true;
        this.card2 = false;
      } else {
        this.val01=n;this.val03=mc;
        this.name3 = mc;
        this.cities3 = [];
        let p = {
          "args": n,
          "token":this.$store.state.token
        };
        this.$api.get(this.Global.aport7 + '/drools/getLable', p,
          r => {
            //this.cities3=r.data;
            var array = r.data;
            this.cshow=true;
            for (var i = 0; i < array.length; i++) {
              this.cshow=false;
              this.card2 = true;
              var list = {};
              list.bjmc = array[i].bjmc;
              list.bjsm = array[i].bjsm;
              if (array[i].bjmc.indexOf("GJDQ") >= 0 || array[i].bjmc.indexOf("QZZL") >= 0 || array[i].bjmc.indexOf("ZJZL") >= 0) {
                var arr = array[i].bjz.replace(/\"/g, "");;
                var spp = arr.substring(1, arr.length - 1).split(',');
                // console.log(spp, spp.length);
                list.bjz = spp;
              } else {
                list.bjz = array[i].bjz;
              }
              list.cjr = array[i].cjr;
              list.cjsj = array[i].cjsj;
              list.gxr = array[i].gxr;
              list.gxsj = array[i].gxsj;
              list.gzmc = array[i].gzmc;
              list.mxmc = array[i].mxmc;

              this.cities3.push(list);

            }
            // console.log('this.cities3', this.cities3.length);

          });

      }

    },
    save(t) {
      if (t == 1) {
        // console.log(this.checkedCities1);
        // console.log(this.cities1);
        var alist = [];
        var arr = this.cities1;
        var srr = this.checkedCities1;
        for (var i = 0; i < arr.length; i++) {
          var list = {};
          list.id = arr[i].id;
          list.mxmc = arr[i].mxmc;
          list.mxnr = arr[i].mxnr;
          list.sfyx = '0';
          list.gxsj = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss');
          list.cjsj = arr[i].cjsj;
          list.czr = this.$store.state.uid;
          list.mxsm = arr[i].mxsm;
          list.mxlx = arr[i].mxlx;
          list.sfxs = arr[i].sfxs;
          for (var j = 0; j < srr.length; j++) {
            if (arr[i].id == srr[j]) {
              list.sfyx = '1';
            }
          }
          alist.push(list);
        }
        let p = {
          "args": alist,
          "token":this.$store.state.token
        };
        this.$api.post(this.Global.aport7 + '/drools/updateModel', p,
          r => {
            if (r.success) {
              this.$message({
                message: "更新成功！",
                type: 'success'
              });
            }
          });

      } else if (t == 2) {
        var alist = [];
        var arr = this.cities2;
        var srr = this.checkedCities2;
        for (var i = 0; i < arr.length; i++) {
          var list = {};
          list.id = arr[i].id;
          list.mxmc = arr[i].mxmc;
          list.gzmc = arr[i].gzmc;
          list.gzsm = arr[i].gzsm;
          list.sfyx = "0";
          for (var j = 0; j < srr.length; j++) {
            if (arr[i].id == srr[j]) {

              list.sfyx = '1';
            }
          }
          alist.push(list);
        }
        let p = {
          "args": alist,
          "token":this.$store.state.token
        };
        this.$api.post(this.Global.aport7 + '/drools/updateRules', p,
          r => {
            if (r.success) {
              this.$message({
                message: "更新成功！",
                type: 'success'
              });
            }
          });

      } else if (t == 3) {

        var alist = [];
        var arr = this.cities3;
        for (var i = 0; i < arr.length; i++) {
          var list = {};
          list.mxmc = arr[i].mxmc;
          list.gzmc = arr[i].gzmc;
          list.bjmc = arr[i].bjmc;
          list.bjz = arr[i].bjz;
          list.bjsm = arr[i].bjsm;
          list.cjr = arr[i].cjr;
          list.cjsj = arr[i].cjsj;
          list.gxr = this.$store.state.uid;
          list.gxsj = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss');
          alist.push(list);
        }
        // console.log(alist);
        let p = {
          "args": alist,
          "token":this.$store.state.token
        };
        this.$api.post(this.Global.aport7 + '/drools/updateLable', alist,
          r => {

            if (r.success) {
              this.$message({
                message: "更新成功！",
                type: 'success'
              });
            }
          });
      }

    },
    canel(n){
          if(n==1){
            this.getlist();
          }else if(n==2){
            this.getZJ(this.val1,1,this.val3);
          }else if(n==3){
            this.getZJ(this.val01,2,this.val03);
          }
    },
    doset() {
      this.reload();
    }
  }
}
</script>
<style scoped>
.gzgl {
  background: #FFFFFF;
  min-height: 700px;
  margin: 20px;
  padding: 20px;
}

.gzgl .el-checkbox {
  width: 100%;
  margin: 10px 0px;
}

.input-text {
  width: 75% !important;
}

.input-input {
  width: 20% !important;
}

.yy-input-input {
  width: 90% !important;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>
