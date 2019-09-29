<template lang="html">
    <!-- 涉外单位分布分析 -->
      <div class="yymain swdw">
        <!-- 地图 -->

        <div id="mainMap" class="mapbj"></div>

        <!-- 查询导航 -->
        <div class="fxleft">
             <div class="fxbnt">
               <el-button  size="mini" type="primary" @click="changtab()" v-if="show" icon="iconfont el-icon-yy-xiangshangjiantou" style="border-radius:0px!important;border-width: 1px 1px 0px 1px"></el-button>
               <el-button  size="mini" type="primary" @click="changtab()" v-else icon="iconfont el-icon-yy-xiangxiajiantou" style="border-radius:0px!important;"></el-button>
             </div>
             <el-collapse-transition>
             <div class="fxcont" v-if="show">
                <el-row :gutter="1">
                  <el-col :span="24">
                      <span class="yy-input-text">涉外单位性质：</span>
                      <el-select v-model="pd.dwxz" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in $store.state.dwxz"
                          :key="ind1"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">境外人员人数：</span>
                        <el-input placeholder="请输入境外人数" size="small" v-model="pd.jwrs"   class="yy-input-input"></el-input>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">单位所在地：</span>
                      <el-select v-model="pd.swdw" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in swdw"
                          :key="ind1"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">单位类别：</span>
                      <el-select v-model="pd.dwlb" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in $store.state.dwlb"
                          :key="ind1"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">单位等级：</span>
                      <el-select v-model="pd.swdw" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in swdw"
                          :key="ind1"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                </el-row>
                <el-row type="flex">
                  <el-col :span="24" style="text-align:center;">
                    <el-button type="primary" size="mini" @click="doSearch()">查询</el-button>
                    <el-button type="primary" size="mini" @click="doset()">重置</el-button>
                  </el-col>
                </el-row>
             </div>
            </el-collapse-transition>
        </div>
        <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
            <el-table
                 ref="multipleTable"
                 :data="tableData"
                 border
                 style="width: 100%">
                 <el-table-column
                   prop="DWMC"
                   label="单位名称">
                 </el-table-column>
                 <el-table-column
                   prop="SWDWXZ"
                   label="涉外单位性质">
                 </el-table-column>
                 <el-table-column
                   prop="DWLB"
                   label="单位类别">
                 </el-table-column>
                 <el-table-column
                   prop="DWDJ"
                   label="单位等级">
                 </el-table-column>
                 <el-table-column
                   prop="SSZR"
                   label="所属责任区">
                 </el-table-column>
               </el-table>
          <div slot="footer" class="dialog-footer">
            <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
          </div>
        </el-dialog>



        <div class="bottompanel">
        	<div onclick="$('.bottompanel').hide()" class="closed">关闭</div>
        	<table id="cztable" style="width: 95%; margin-top:15px">
        		<thead>
        			<tr>
        				<th width="200px;">单位名称</th>
        				<th width="120px">涉外单位性质</th>
        				<th width="100px;">单位类别</th>
        				<th width="100px">单位等级</th>
        				<th>所属责任区</th>
        			</tr>
        		</thead>
        		<tbody id="cztablebody"></tbody>
        	</table>
        	<div class="pagepanel">
        		<span>1</span>
        		<span>1</span>
        		<span>1</span>
        		<span>1</span>
        		<span>1</span>
        		<span>1</span>
        		<span>1</span>
        		<span>1</span>
        	</div>
        </div>
      </div>
</template>

<script scoped>
import {createMapL,getSearh} from '@/assets/js/SuperMap/swdwmap.js'
let vmswdm;
export default {
  data(){
    return{
       pd:{},
       swdw:[],
       show: true,
       detailsDialogVisible:false,
       form:{},
       swdata:'11',
       tableData:[],
    }
  },
  mounted() {
    window.vmswdm=this;
    this.$store.dispatch('getDwlb');
    this.$store.dispatch('getDwxz');

        createMapL();


  },
  methods:{
    changtab(){
      this.show=!this.show;
    },
    doset(){
       this.$set(this.pd,"dwlb",'');
    },

    doSearch() {

      // var dwxz = $("#query_dwxz").val();
      // var jwrs = $("#query_jwrs").val();
      //
      // //ES； http://10.33.69.24:9200/es_lz_lzxx/doc
   //    var searchResult = [
   //      { dm: '320115560103', mc: '禄口派出所南片责任区', num: 111},
   //      { dm: '320115730102', mc: '江宁派出所司新责任区', num: 111},
   //      { dm: '320115610101', mc: '百家湖派出所钱庄责任区', num: 111},
   //      { dm: '320115690101', mc: '东善桥派出所祖堂责任区', num: 111},
   //      { dm: '320115600101', mc: '岔路派出所岔路责任区', num: 111},
   //      { dm: '320115570101', mc: '秣陵派出所双金责任区', num: 111},
   //      { dm: '320115590102', mc: '高新园派出所共和责任区', num: 111}
   //      ];
   //
   // for (var i = 0; i < searchResult.length; i++) {
   //   console.log(searchResult[i].mc+"        "+searchResult[i].num);
   // }
   //      return ;
      //
      // for (var i = 0; i < searchResult.length; i++) {
      //      queryZrqByServer(searchResult[i]);
      // }

      getSearh();
  	},
    //后期匹配地址
    getXY(dz,callback){

      let p={
        "dz":dz,
      };
      this.$api.get(this.Global.xyaddress, p,
        r => {
        callback(r.result)
        });
    },
}

}
</script>

<style scoped>
.yy-input-text{text-align: left!important;}


.leftpanel {
  position:absolute; top:0; left:0; background-color:#fff; width:300px; height:100%; z-index:555;
}
.leftpanel .expanded {
  width: 35px;
  height: 70px;
  line-height:60px;
  border: 1px solid #bbb;
  border-left-width: 0px;
  margin-left:100%;
  margin-top:150px;
  background-color:#fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor:pointer;
  font-size:12px;
  text-align:center;
  vertical-align:middle;
  font-weight: bolder;
  position:absolute;
}
.leftpanel table {
  width: 100%;
}
.leftpanel table .button {
  background-color: #3992d0;
  color:#fff;
  padding: 6px 12px;
  border:0;
}

#filttable td, #cztable td {
  padding: 5px 0 5px 5px;
}
#cztable {
  font-size:14px;
}

.bottompanel {
  width: 100%;
  height: 530px;
  position:absolute; bottom:0; left:0; z-index:9999;
  background:#fff;
  border: 1px solid #3992d0;
  text-align:middle;
  display:none;
}
.bottompanel .closed{
  position:absolute; right:10px; top:0;
}
.bottompanel .pagepanel {
  padding-top:5px;
  width: 300px;
  text-align:center;
  font-size:12px;
  margin: 0 auto;
}
.bottompanel .pagepanel span {
  padding: 2px 7px;
  border: 1px solid #ccc;
  text-align:center;
  cursor:pointer;
}
</style>
<style>
.swdw .my-div-icon {
         background: red;
         border-radius: 50%;
         width: 40px !important;
        height: 40px !important;
        background: red;
        line-height:40px;
        text-align: center;
        vertical-align: middle;
        font-weight:border; color: #ffffff;
        border: 2px #ffffff solid;
    }

</style>
