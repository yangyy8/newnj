<template lang="html">
    <!-- 出入境记录核查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ywx" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ywm" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">中文姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.zwxm" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.gjdq" @visible-change="gjdq=gjdq0" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="(item,ind3) in gjdq"
                      :key="ind3"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.zjhm" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.csrqBegin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.csrqEnd" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">身份证号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.sfzh" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">宾馆名称：</span>
                   <el-select v-model="pd.bgmc" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="(item,indb) in bgmc"
                       :key="indb"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
                </el-col>
              </el-row>
         </el-col>

            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
              <el-button  size="small" @click="$router.push({name:'CRJJLHC'})">返回</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
          <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="ywx"
             label="英文姓">
           </el-table-column>
           <el-table-column
             prop="ywm"
             label="英文名">
           </el-table-column>
           <el-table-column
             prop="zwxm"
             label="中文姓名">
           </el-table-column>
           <el-table-column
             prop="zjhm"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="gjdq"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="lsdwhz"
             label="留宿单位(户主)">
           </el-table-column>
           <el-table-column
             prop="lsdwhzdz"
             label="留宿单位(户主)地址" width="200">
             <template slot-scope="scope">
                      <span :title="scope.row.lsdwhzdz" class="titlelen">{{scope.row.lsdwhzdz}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="pcsmc"
             label="派出所名称">
           </el-table-column>
           <el-table-column
             label="操作" width="70">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit-outline" @click="edits(scope.row)"></el-button>
             </template>
           </el-table-column>
         </el-table>
     <div class="middle-foot">
        <div class="page-msg">
          <div class="">
        共{{TotalResult}}条记录
          </div>
          <div class="">
            每页显示
            <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            条
          </div>
          <div class="">
          共{{Math.ceil(TotalResult/pageSize)}}页
          </div>
        </div>
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync ="CurrentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
    </div>
    <div class="bj">
      <el-dialog title="编辑" :visible.sync="eidtsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
        <el-form :model="form" ref="addForm" class="crcolor" style="padding:10px">
          <el-row>
            <el-col :span="16">
              <el-row :gutter="2">
                <!-- <el-col :span="24" v-if="wccshow" style="border-bottom:1px solid #cccccc">
                  <span  class="yy-input-text" style="width:18%">上报类型：</span>
                  <el-radio v-model="sbtype" label="1" @change="getSB(1)">正确</el-radio>
                  <el-radio v-model="sbtype" label="2" @change="getSB(2)">错误</el-radio>
                </el-col>
                <el-col :span="24" v-if="checkshow">
                  <span  class="input-text" style="width:18%"></span>
                  <el-checkbox v-model="checkList1" label="1" @change="getCK(1)">英文姓名错误</el-checkbox>
                  <el-checkbox v-model="checkList2" label="2" @change="getCK(2)">英文姓错误&emsp;</el-checkbox>
                  <el-checkbox v-model="checkList3" label="3" @change="getCK(3)">英文名错误&emsp;</el-checkbox>
                  <el-checkbox v-model="checkList4" label="4" @change="getCK(4)">中文姓名错误</el-checkbox>
                </el-col>
                <el-col :span="24" v-if="checkshow">
                  <span  class="input-text" style="width:18%"> </span>
                  <el-checkbox v-model="checkList5" label="5" @change="getCK(5)">国家地区错误</el-checkbox>
                  <el-checkbox v-model="checkList6" label="6" @change="getCK(6)">证件种类错误</el-checkbox>
                  <el-checkbox v-model="checkList9" label="5" @change="getCK(9)">证件号码错误</el-checkbox>
                  <el-checkbox v-model="checkList8" label="8" @change="getCK(8)">出生日期错误</el-checkbox>

                </el-col>
                <el-col :span="24" v-if="checkshow">
                  <span  class="input-text" style="width:18%"> </span>
                  <el-checkbox v-model="checkList7" label="7" @change="getCK(7)">性别错误</el-checkbox>
                </el-col> -->
                <el-col :span="12">
                  <span  class="yy-input-text">英文姓：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.ywx_t" :content="form.ywx_xgq" placement="top-start">
                    <el-input placeholder="请输入内容" size="small"  v-model="form.ywx"  :class="{'yy-input-input yyinput':form.ywx_t == true,'yy-input-input':form.ywx_t== false}" :disabled="!edit"></el-input>
                  </el-tooltip>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">英文名：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.ywm_t" :content="form.ywm_xgq" placement="top-start">
                    <el-input placeholder="请输入内容" size="small" v-model="form.ywm"  :class="{'yy-input-input yyinput':form.ywm_t == true,'yy-input-input':form.ywm_t== false}" :disabled="!edit"></el-input>
                  </el-tooltip>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">英文姓名：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.ywxm_t" :content="form.ywxm_xgq" placement="top-start">
                    <el-input placeholder="请输入内容" size="small" v-model="form.ywxm"  :class="{'yy-input-input yyinput':form.ywxm_t == true,'yy-input-input':form.ywxm_t== false}" :disabled="!edit"></el-input>
                  </el-tooltip>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">中文姓名：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.zwxm_t" :content="form.zwxm_xgq" placement="top-start">
                    <el-input placeholder="请输入内容" size="small" v-model="form.zwxm"  :class="{'yy-input-input yyinput':form.zwxm_t == true,'yy-input-input':form.zwxm_t== false}" :disabled="!edit"></el-input>
                  </el-tooltip>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">证件种类：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.zjzl_t" :content="form.zjzl_xgq" placement="top-start">
                    <el-select v-model="form.zjzl" filterable clearable default-first-option placeholder="请选择"  size="small" :class="{'yy-input-input yyinput':form.zjzl_t == true,'yy-input-input':form.zjzl_t== false}" :disabled="!edit">
                      <el-option
                        v-for="(item,ind4) in zjzl"
                        :key="ind4"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">证件号码：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.zjhm_t" :content="form.zjhm_xgq" placement="top-start">
                    <el-input placeholder="请输入内容" size="small" v-model="form.zjhm"  :class="{'yy-input-input yyinput':form.zjhm_t == true,'yy-input-input':form.zjhm_t== false}" :disabled="!edit"></el-input>
                  </el-tooltip>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">国家地区：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.gjdq_t" :content="form.gjdq_xgq" placement="top-start">
                    <el-select v-model="form.gjdq" @visible-change="gjdq=gjdq0" filterable clearable default-first-option placeholder="请选择"  size="small" :class="{'yy-input-input yyinput':form.gjdq_t == true,'yy-input-input':form.gjdq_t== false}" :disabled="!edit">
                      <el-option
                        v-for="(item,ind5) in gjdq"
                        :key="ind5"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">出生日期：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.csrq_t" :content="form.csrq_xgq" placement="top-start">
                    <el-date-picker :class="{'yy-input-input yyinput':form.csrq_t == true,'yy-input-input':form.csrq_t== false}"
                       v-model="form.csrq" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="选择日期"
                       :disabled="!edit">
                    </el-date-picker>
                  </el-tooltip>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">性别：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.xb_t" :content="form.xb_xgq" placement="top-start">
                    <el-select v-model="form.xb" placeholder="请选择"  filterable clearable default-first-option size="small" :class="{'yy-input-input yyinput':form.xb_t == true,'yy-input-input':form.xb_t== false}" :disabled="!edit">
                      <el-option
                        v-for="(item,ind5) in xb"
                        :key="ind5"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </el-col>
                <el-col :span="12">
                  <span class="yy-input-text">身份证号：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="form.sfzh"  class="yy-input-input" :disabled="!edit"></el-input>
                </el-col>
                <el-col :span="12" >
                  <span class="yy-input-text">签证种类：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.qzzl_t" :content="form.qzzl_xgq" placement="top-start">
                    <el-select v-model="form.qzzl" filterable clearable  :class="{'yy-input-input yyinput':form.qzzl_t == true,'yy-input-input':form.qzzl_t== false}"
                    default-first-option placeholder="请选择"  size="small" class="yy-input-input" :disabled="!edit">
                      <el-option
                        v-for="(item,ind6) in qzzl"
                        :key="ind6"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </el-col>
                <el-col :span="12" >
                  <span class="yy-input-text" title="签证(注)号码">签证(注)号码：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="form.qzhm"  class="yy-input-input" :disabled="!edit"></el-input>
                </el-col>
                <el-col :span="12" >
                  <span class="yy-input-text">签发机关：</span>
                  <el-select v-model="form.qfjg" @visible-change="qfjg=qfjg0" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input" :disabled="!edit">
                    <el-option
                      v-for="(item,ind8) in qfjg"
                      :key="ind8"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="12" >
                  <span class="yy-input-text" title="签证(注)有效期至">停留有效期至：</span>
                  <el-date-picker class="yy-input-input"
                     v-model="form.tlyxqz" format="yyyy-MM-dd"
                     type="date" size="small" value-format="yyyyMMdd"
                     placeholder="选择日期"
                     :disabled="!edit">
                  </el-date-picker>
                </el-col>
              </el-row>
              <el-col :span="12">
                <span class="yy-input-text" title="签证签发日期：">签证签发日期：</span>
                <el-date-picker class="yy-input-input"
                   v-model="form.qfrq" format="yyyy-MM-dd"
                   type="date" size="small" value-format="yyyyMMdd"
                   placeholder="选择日期"
                   :disabled="!edit">
                </el-date-picker>
              </el-col>
              <el-col :span="12">
                <span class="yy-input-text" title="与境外联系人员">与境外联系人员：</span>
                <el-select v-model="form.yjwrygx" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input" :disabled="!edit">
                  <el-option
                    v-for="(item,indx) in jtgx"
                    :key="indx"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
              </el-col>
            </el-col>
            <el-col :span="8">
              <div class="block">
                <el-carousel height="300px">
                  <el-carousel-item v-for="(item,ind7) in imagess" :key="ind7" v-if="imgshow1" style="text-align: center;">
                    <img  :src="item.tp" @click="opentp(item,1)">
                  </el-carousel-item>
                  <el-carousel-item v-if="imgshow2" style="text-align: center;">
                    <img src="../../../assets/img/t1.png" @click="opentp(null,0)">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>
          </el-row>
          <div v-if="allshow">
            <!-- <el-row :gutter="3" > -->
              <!-- <el-col :span="8">
                <span class="yy-input-text">行政区划：</span>
                <el-select v-model="form.lzdwxzqh" @visible-change="xzqh=xzqh0"  filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                  <el-option
                    v-for="(item,ind9) in xzqh"
                    :key="ind9"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
              </el-col> -->
              <!-- <el-col :span="8">
                <span class="yy-input-text" title="签证签发日期：">签证签发日期：</span>
                <el-date-picker class="yy-input-input"
                   v-model="form.qfrq" format="yyyy-MM-dd"
                   type="date" size="small" value-format="yyyyMMdd"
                   placeholder="选择日期" >
                </el-date-picker>
              </el-col> -->
              <!-- <el-col :span="8">
                <span class="yy-input-text">何处来：</span>
                <el-radio v-model="hcl_gnw" label="0" @change="getXGL">国内</el-radio>
                <el-radio v-model="hcl_gnw" label="1" @change="getXGL">国外</el-radio>
              </el-col> -->
            <!-- </el-row> -->
            <el-row :gutter="3" >
              <el-col :span="8">
                <span class="yy-input-text">入境日期：</span>
                  <el-tooltip class="item" effect="dark" :disabled="!form.rjrq_t" :content="form.rjrq_xgq" placement="top-start">
                    <el-date-picker :class="{'yy-input-input yyinput':form.rjrq_t == true,'yy-input-input':form.rjrq_t== false}"
                       v-model="form.rjrq" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="选择日期"
                       :disabled="!edit">
                    </el-date-picker>
                </el-tooltip>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text">入境口岸：</span>
                <el-select v-model="form.rjka" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input" :disabled="!edit">
                  <el-option
                    v-for="(item,ind10) in rjkn"
                    :key="ind10"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
              </el-col>
              <!-- <el-col :span="8">
                <span class="yy-input-text">&nbsp;</span>
                <template v-if="hclshow1">
                <el-select v-model="hcl1" @visible-change="xzqh=xzqh0" :key="Math.random()" filterable clearable default-first-option class="yy-input-input"  placeholder="请选择何处来"  size="small">
                  <el-option
                    v-for="(item,inde) in  xzqh"
                    :key="inde"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
              </template>
                <template v-if="hclshow2">
                <el-select v-model="hcl2"  @visible-change="gjdq=gjdq0" :key="Math.random()"  filterable clearable default-first-option class="yy-input-input"  placeholder="请选择何处来"  size="small">
                  <el-option
                    v-for="(item,indee) in  gjdq"
                    :key="indee"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
                </template>
              </el-col> -->
              <el-col :span="8">
                <span class="yy-input-text">入境事由：</span>
                <el-tooltip class="item" effect="dark" :disabled="!form.rjsy_t" :content="form.rjsy_xgq" placement="top-start">
                  <el-select v-model="form.rjsy" filterable clearable :class="{'yy-input-input yyinput':form.rjsy_t == true,'yy-input-input':form.rjsy_t== false}"
                  default-first-option placeholder="请选择"  size="small" :disabled="!edit">
                    <el-option
                      v-for="(item,ind11) in rjsy"
                      :key="ind11"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-tooltip>
              </el-col>
            </el-row>

            <el-row :gutter="3" >


              <!-- <el-col :span="8">
                <span class="yy-input-text">何处去：</span>
                <el-radio-group v-model="hcq_gnw" @change="getXGQ()">
                  <el-radio  label="0">国内</el-radio>
                  <el-radio  label="1" >国外</el-radio>
                </el-radio-group>
              </el-col> -->
            </el-row>
            <el-row :gutter="3" >
              <el-col :span="8">
                <span class="yy-input-text">接待单位：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.jddw"  class="yy-input-input" :disabled="!edit"></el-input>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text">入住日期：</span>
                <el-tooltip class="item" effect="dark" :disabled="!form.zsrq_t" :content="form.zsrq_xgq" placement="top-start">
                  <el-date-picker class="yy-input-input" :class="{'yy-input-input yyinput':form.zsrq_t == true,'yy-input-input':form.zsrq_t== false}"
                     v-model="form.zsrq" format="yyyy-MM-dd"
                     type="date" size="small" value-format="yyyyMMdd"
                     placeholder="选择日期"
                     :disabled="!edit">
                  </el-date-picker>
                </el-tooltip>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text" title="拟离开日期">拟离开日期：</span>
                <el-date-picker class="yy-input-input"
                   v-model="form.nlkrq" format="yyyy-MM-dd"
                   type="date" size="small" value-format="yyyyMMdd"
                   placeholder="选择日期"
                   :disabled="!edit">
                </el-date-picker>
              </el-col>
            </el-row>
            <el-row :gutter="3" >
              <el-col :span="8" class="crcolor">
                <span class="yy-input-text">投宿于：</span>
                <el-radio v-model="typet" label="1" @change="getTS('1')" :disabled="!edit">社会面</el-radio>
                <el-radio v-model="typet" label="2" @change="getTS('2')" :disabled="!edit">旅馆</el-radio>
              </el-col>
              <el-col :span="16" v-show="shm"  class="crcolor">
                <span class="yy-input-text" title="标准化地址" style="width:17.4%">标准化地址：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.bzhdzmc"  class="input-input" style="width:80%!important" :disabled="!edit"></el-input>
              </el-col>
              <el-col :span="16" v-show="lg"  class="crcolor">
                <span class="yy-input-text" style="width:17.4%">旅馆名称：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.lzdwmc"  class="input-input" style="width:80%!important" :disabled="!edit"></el-input>
              </el-col>
              <el-col :span="8"  class="crcolor">
                <span class="yy-input-text">房号：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.fh"  class="yy-input-input" :disabled="!edit"></el-input>
              </el-col>

              <el-col :span="8">
                <span class="yy-input-text" title="本人联系电话">本人联系电话：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.brlxdh"  class="yy-input-input" :disabled="!edit"></el-input>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text" title="紧急情况联系人">紧急情况联系人：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.jjlxr"  class="yy-input-input" :disabled="!edit"></el-input>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text" title="紧急情况联系电话">紧急情况联系电话：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.jjlxrdh"  class="yy-input-input" :disabled="!edit"></el-input>
              </el-col>
              <el-col :span="8"   class="crcolor">
                <span class="yy-input-text">派出所名称：</span>
                <el-select v-model="form.pcsbh" @visible-change="pcs=pcs0"  filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input" :disabled="!edit">
                  <el-option
                    v-for="item in pcs"
                    :key="item.dm"
                    :label="item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text" title="留宿单位(户主)电话" >留宿单位(户主)电话：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.lsdwhzdh"  class="yy-input-input" :disabled="!edit"></el-input>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text" title="留宿单位(户主)">留宿单位(户主)：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.lsdwhz"  class="yy-input-input" :disabled="!edit"></el-input>
              </el-col>

              <el-col :span="8">
                <span class="yy-input-text">房屋性质：</span>
                <el-select v-model="form.fwxz" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input" :disabled="!edit">
                  <el-option
                    v-for="(item,ind2) in zsxz"
                    :key="ind2"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text" title="房主身份证号">房主身份证号：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.lsrzjhm"  class="yy-input-input" :disabled="!edit"></el-input>
              </el-col>
              <el-col :span="8" v-if="rgsb">
                <span class="yy-input-text">上报类型：</span>
                <el-select v-model="form.rgsblx" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                  <el-option value="1" label="1 - 正确"></el-option>
                  <el-option value="2" label="2 - 错误"></el-option>
                  <el-option value="3" label="3 - 缺项"></el-option>
                </el-select>
              </el-col>
              <el-col :span="8" v-else>
                <span class="yy-input-text">&nbsp;</span>
              </el-col>
            </el-row>
            <el-row :gutter="1">
              <el-col :span="24">
                <span class="yy-input-text" style="width:11.5%;">备注：</span>
                <el-input placeholder="请输入内容" size="small" v-model="form.bz"   class="input-input" style="width:87%!important;" :disabled="!edit"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="3" >
              <el-col :span="8">
                <span class="yy-input-text">录入人：</span>
                <el-input size="small" v-model="form.djr"  :disabled="true" class="yy-input-input"></el-input>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text">录入单位：</span>
                <!-- <el-input placeholder="请输入内容" size="small" v-model="form.djdw" :disabled="true"  class="yy-input-input"></el-input> -->
                <el-select v-model="form.djdw"  filterable clearable default-first-option :disabled="true"   size="small" class="yy-input-input">
                  <el-option
                    v-for="(item,inde2) in pcs"
                    :key="inde2"
                    :label="item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text">录入日期：</span>
                <el-input size="small" v-model="form.djsj" :disabled="true" class="yy-input-input"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="3">
              <el-col :span="8">
                <span class="yy-input-text">修改人：</span>
                <el-input size="small" v-model="form.gxr" :disabled="true"  class="yy-input-input"></el-input>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text">修改单位：</span>
                <el-input size="small" v-model="form.gxdw" :disabled="true"  class="yy-input-input"></el-input>
              </el-col>
              <el-col :span="8">
                <span class="yy-input-text">修改日期：</span>
                <el-input  size="small" v-model="form.gxsj"  :disabled="true" class="yy-input-input"></el-input>
              </el-col>
            </el-row>

          </div>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addItem('addForm')" size="small" v-if="edit">确 定</el-button>
          <el-button @click="eidtsDialogVisible = false" size="small">取 消</el-button>
        </div>
      </el-dialog>

      <el-dialog  title="放大显示" :visible.sync="tcDialogVisible" style="text-align:center" custom-class="big_dialog" :append-to-body="false" :modal="false" >
        <div style="text-align:right;">
          <el-button  size="small" type="primary"  @click="rotate" title="旋转图片" icon="iconfont el-icon-yy-icon_rotate"></el-button>
        </div>
          <img style="" src="../../../assets/img/t1.png" v-if="imgshow2" :style="{transform:'rotateZ('+deg+'deg)'}" style="max-height:700px;max-width:700px;" v-drag>
          <img style="" :src="imgs" v-if="imgshow1" :style="{transform:'rotateZ('+deg+'deg)'}" style="max-height:700px;max-width:700px;" v-drag>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import {
  ToArray
} from '@/assets/js/ToArray.js'
import {
  formatDate
} from '@/assets/js/date.js'
export default {

  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {},
      form: {
        hcl:null,
        hcq_gnw: '0',
        hcl_gnw: '0'
      },
      hcl_gnw: '0',
      hcq_gnw: '0',
      typet: '1',
      gjdq: [],
      zjzl: [],
      qzzl: [],
      rjkn: [],
      rjsy: [],
      qfjg: [],
      qfjg0: [],
      pcs0:[],
      pcs: [],
      jzlx: [],
      zsxz: [],
      jzzt: [],
      xzqh0:[],
      xzqh: [],
      xb: [],
      jtgx: [],
      bgmc:[],
      tableData: [],
      cdt: [],
      hcqlist: [],
      hcwlist: [],
      imagess: [],
      eidtsDialogVisible: false,
      tcDialogVisible: false,
      options:[{
        value: 10,
        label: "10"
      },
      {
        value: 20,
        label: "20"
      },
      {
        value: 30,
        label: "30"

      }
    ],
      tableData: [],
      shm: true,
      lg: false,
      edit: false,
      rgsb: false,
      imgshow1: false,
      imgshow2: false,
      imgs: [],
      uuid: '',
      hclshow1: true,
      hclshow2: false,
      hcqshow1: true,
      hcqshow2: false,
      hcq1: '',
      hcq2: '',
      hcl1: '',
      hcl2: '',
      wccshow: false,
      allshow: true,
      sbtype: '',
      deg:0,
      checkshow: false,
      checkList1: false,
      checkList2: false,
      checkList3: false,
      checkList4: false,
      checkList5: false,
      checkList6: false,
      checkList7: false,
      checkList8: false,
      checkList9: false,
      xg1:false,
      xg2:false,
      xg3:false,
      yx:false,
    }
  },
  activated() {
    this.eidtsDialogVisible=false;
    this.CurrentPage=1;
    this.cdt = this.$route.query.cdt;
    if (this.cdt.sblx == "cgts" || this.cdt.sblx=="jsts"||this.cdt.sblx=="ygy") {
      this.edit = false;
    } else {
      this.edit = true;
    }
    if (this.cdt.sblx == "rgsbts") {
      this.rgsb = true;
      this.yx = true;
    } else {
      this.rgsb = false;
    }
    if (this.cdt.sblx == "sbts") {
      this.wccshow = true;
      this.allshow = false;
      this.checkshow = true;
    } else {
      this.wccshow = false;
      this.allshow = true;
      this.checkshow = false;
    }
    this.pd = {};
    this.getList(this.CurrentPage, this.pageSize, this.pd);

  },
  mounted() {
    this.eidtsDialogVisible=false;
    this.tcDialogVisible=false;
    this.getAll();
  },
  methods: {
    // 旋转
   rotate(){
       this.deg += 90;
       if(this.deg >= 360){
           this.deg = 0
       }
   },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    getAll() {
      this.$api.get(this.Global.aport2 + this.Global.dmall, null,
        r => {
          // console.log("---",r.data.DM_XB);
          this.gjdq0 = r.data.DM_GJDQ;//国家地区
          this.zjzl = r.data.DM_ZJZL;//证件种类
          this.qzzl = r.data.DM_WGR_QZZL;//签证种类
          this.rjkn = r.data.DM_RJKA;//入境口岸
          this.rjsy = r.data.DM_RJSY;//入境事由
          this.qfjg0 = r.data.DM_QFJG;//签发机关
           this.pcs0 = r.data.DM_PCS;
           // this.jzlx=r.data.DM_JZLX;
          this.zsxz = r.data.DM_ZSXZ;//房屋性质
          // // this.jzzt=r.data.DM_JZZT;
          //this.xzqh0 = r.data.DM_XZQH;
          this.xb = r.data.DM_XB;//性别
          this.jtgx = r.data.DM_JTGX;//与境外联系人员
          this.bgmc=r.data.JZ_LGBM;
        })
    },

    getSelect(t) {
      var tablename="";
       switch (t) {
        case 1://国家地区
          tablename="DM_GJDQ"
           break;
        case 2://签发机关
           tablename="DM_QFJG"
           break;
        case 3://派出所
           tablename="DM_PCS"
           break;
        case 4://行政区划
           tablename="DM_XZQH"
           break;
         default:
            break;
       }
          let p={
          	"tablename":tablename,
          }
        this.$api.post(this.Global.aport2 + '/data_report/selectDm', p,
        r => {
          switch (t) {
           case 1://国家地区
             tablename="DM_GJDQ"
             this.gjdq = r.data.DM_GJDQ;
              break;
           case 2://签发机关
              this.qfjg = r.data.DM_QFJG;
              break;
           case 3://派出所
              this.pcs = r.data.DM_PCS;
              break;
           case 4://行政区划
              this.xzqh = r.data.DM_XZQH;
              break;
            default:
               break;
          }


        })


     },

    getList(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "beginTime": this.cdt.beginTime,
        "endTime": this.cdt.endTime,
        "ssfjmc": this.cdt.ssfjmc,
        "sblx": this.cdt.sblx,
        'zjhm':this.cdt.zjhm,
        'type':this.cdt.type,
        'gjdqList':this.cdt.gjdqList,
        "pd": pd,
        "operatorId":this.$store.state.uid,
        "operatorNm":this.$store.state.uname,
      };
      var url = this.Global.aport2 + '/data_report/findAll';
      this.$api.post(url, p,
        r => {
          this.tableData = r.data.pdList;
          this.TotalResult = r.data.totalResult;
        })

    },
    getTS(n) {
      if (n == "1") {
        this.shm = true;
        this.lg = false;
      } else {
        this.shm = false;
        this.lg = true;
      }
    },
    getXGL() {
      if (this.hcl_gnw == '0') {
        this.$set(this,'hcl2','');
        this.hclshow1 = true;
        this.hclshow2 = false;
      } else if (this.hcl_gnw == '1') {
        this.$set(this,'hcl1','');
        this.hclshow1 = false;
        this.hclshow2 = true;
      }
    },
    getXGQ() {
      if (this.hcq_gnw == '0') {
        this.$set(this,'hcq2','');
        this.hcqshow1 = true;
        this.hcqshow2 = false;
      } else if (this.hcq_gnw == '1') {
        this.$set(this,'hcq1','');
        this.hcqshow1 = false;
        this.hcqshow2 = true;
      }
    },
    edits(n) {
      this.form={};

      this.checkList1=false;  this.checkList2=false;  this.checkList3=false;  this.checkList4=false;  this.checkList5=false;  this.checkList6=false;  this.checkList7=false;  this.checkList8=false;  this.checkList9=false;
      // this.form={};
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        this.eidtsDialogVisible = true;
        let p = {
          "id": n.uuid,
          "operatorId":this.$store.state.uid,
          "operatorNm":this.$store.state.uname,
        };
        var url = this.Global.aport2 + '/data_report/selectDjxx';
        this.$api.post(url, p,
          r => {
            this.form = r.data;
            this.hcl_gnw = r.data.hcl_gnw;
            this.hcq_gnw = r.data.hcq_gnw;
            this.typet = r.data.tsy;
            if (r.data.tsy == "1") {
              this.shm = true;
              this.lg = false;
            } else {
              this.shm = false;
              this.lg = true;
            }
            this.getImg(n.uuid, r.data.hcl, r.data.hcq);
          });
      }, 200);
    },
    addItem(afrom) {
      if (this.form.gjdq == "CHN") {

        if (this.form.zwxm == "" || this.form.sfzh == "") {

          this.open('中文姓名和身份证号都不能为空！');
          return false;
        }
      } else if (this.form.gjdq == "") {
        this.open('国家地区不能为空！');
        return false;
      } else {

        if (this.form.ywx == "" || this.form.ywm == "" || this.form.ywxm == "" || this.form.zjhm == "") {
          this.open('英文姓、英文名、英文姓名和证件号码都不能为空！');
          return false;
        }
      }
      if(this.form.rjsy == "") {
        this.open('入境事由不能为空！');
        return false;
      }
      this.form.tsy = this.typet;

      if (this.wccshow == true) {
        if (this.checkList1 == false && this.checkList2 == false && this.checkList3 == false && this.checkList4 == false && this.checkList5 == false && this.checkList6 == false && this.checkList7 == false && this.checkList8 == false && this.checkList9 ==
          false) {
          this.$message.error('至少选择一项错误！');
          return;
        }
        if (this.sbtype == '1') {
          this.form.ywxm_t = false;
          this.form.ywx_t = false;
          this.form.ywm_t = false;
          this.form.zwxm_t = false;
          this.form.gjdq_t = false;
          this.form.zjzl_t = false;
          this.form.xb_t = false;
          this.form.csrq_t = false;
          this.form.zjhm_t = false;
        }
        this.form.rgsblx = this.sbtype;
        this.form.gxr = this.$store.state.uname;
      }
      this.form.gxdw = this.$store.state.orgid;
      console.log('this.form.gxdw',this.form.gxdw,this.$store.state.orgid)
      var url = this.Global.aport2 + "/data_report/update";
      this.$api.post(url, this.form,
        r => {
          console.log(r);
          if (r.success) {
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
            this.$refs[afrom].resetFields();
            this.eidtsDialogVisible = false;
            this.getList(this.CurrentPage, this.pageSize, this.pd);
          } else {
            this.$message.error(r.message);
          }
          // this.$refs[afrom].resetFields();
          // this.eidtsDialogVisible = false;
          // this.getList(this.CurrentPage,this.pageSize,this.pd);
        }, e => {
          this.$message.error('失败了');
        });
    },
    open(content) {
      this.$alert(content, '提示', {
        confirmButtonText: '确定',
      });
    },
    getImg(id, hcl, hcq) {
      var url = this.Global.aport2 + '/data_report/selectTpxx';

      let p = {
        "id": id,
        "operatorId":this.$store.state.uid,
        "operatorNm":this.$store.state.uname,
      };
      this.$api.post(url, p,
        r => {
          if (r.success) {
            this.imagess = r.data;
            if(this.imagess.length!=0){
              this.imgshow1 = true;
              this.imgshow2 = false;
            }else{
              this.imgshow1 = false;
              this.imgshow2 = true;
            }
          }
          if (this.hcl_gnw == "0") {
            this.hcl1 = hcl;
            this.hclshow1 = true;
            this.hclshow2 = false;
          } else if (this.hcl_gnw == "1") {
            this.hcl2 = hcl;
            this.hclshow1 = false;
            this.hclshow2 = true;
          }

          if (this.hcq_gnw == "0") {
            this.hcq1 = hcq;
            this.hcqshow1 = true;
            this.hcqshow2 = false;

          } else if (this.hcq_gnw == "1") {
            this.hcq2 = hcq;
            this.hcqshow1 = false;
            this.hcqshow2 = true;
          }
          if (this.wccshow == true) {
            this.sbtype = '2';
            this.getSB(2);
          }

         if(this.yx==true){
             this.form.gxr = this.$store.state.uname;
             this.form.gxdw = this.$store.state.orgname;
             this.form.gxsj = formatDate(new date(), 'yyyymmddhhmmss');
           }else{
             if(this.form.gxr=="" || this.form.gxr==undefined)
             {
               this.xg1=false;
             }
             if(this.form.gxdw=="" || this.form.gxdw==undefined)
             {
               this.xg2=false;
             }
             if(this.form.gxsj=="" || this.form.gxsj==undefined)
             {
               this.xg3=false;
             }
           }

        });
    },
    opentp(row, t) {
      if (t == 0) {
        this.imgshow1 = false;
        this.imgshow2 = true;
        // this.imgs="require('../../../assets/img/t1.png')";
      } else {
        this.imgshow1 = true;
        this.imgshow2 = false;
        this.imgs = row.tp;
      }
      this.tcDialogVisible = true;
    },
    getSB(n) {

      if (n == 1) {
        this.checkshow = false;

      } else if (n == 2) {
        this.checkshow = true;

        if (this.form.ywxm_t == true) {
          this.checkList1 = true;
        }
        if (this.form.ywx_t == true) {
          this.checkList2 = true;
        }
        if (this.form.ywm_t == true) {
          this.checkList3 = true;
        }
        if (this.form.zwxm_t == true) {
          this.checkList4 = true;
        }
        if (this.form.gjdq_t == true) {
          this.checkList5 = true;
        }
        if (this.form.zjzl_t == true) {
          this.checkList6 = true;
        }
        if (this.form.xb_t == true) {
          this.checkList7 = true;
        }
        if (this.form.csrq_t == true) {
          this.checkList8 = true;
        }
        if (this.form.zjhm_t == true) {
          this.checkList9 = true;
        }
      }

    },
    getCK(n) {
      console.log('this.sbtype', this.sbtype);
      if (this.sbtype == "2") {
        if (this.checkList1 == false && this.checkList2 == false && this.checkList3 == false && this.checkList4 == false && this.checkList5 == false && this.checkList6 == false && this.checkList7 == false && this.checkList8 == false && this.checkList9 ==
          false) {
          this.$message.error('至少选择一项错误！');

          return;
        } else {
          switch (n) {
            case 1:

              if (this.checkList1 == false) {
                this.form.ywxm_t = false;

              } else {
                this.form.ywxm_t = true;
              }

              break;
            case 2:
              if (this.checkList2 == false) {
                this.form.ywx_t = false;
              } else {
                this.form.ywx_t = true;
              }
              break;
            case 3:
              if (this.checkList3 == false) {
                this.form.ywm_t = false
              } else {
                this.form.ywm_t = true
              }
              break;
            case 4:
              if (this.checkList4 == false) {
                this.form.zwxm_t = false
              } else {
                this.form.zwxm_t = true
              }
              break;
            case 5:
              if (this.checkList5 == false) {
                this.form.gjdq_t = false
              } else {
                this.form.gjdq_t = true;
              }
              break;
            case 6:
              if (this.checkList6 == false) {
                this.form.zjzl_t = false
              } else {
                this.form.zjzl_t = true
              }
              break;
            case 7:
              if (this.checkList7 == false) {
                this.form.xb_t = false
              } else {
                this.form.xb_t = true;
              }
              break;
            case 8:
              if (this.checkList8 == false) {
                this.form.csrq_t = false
              } else {
                this.form.csrq_t = true;
              }
              break;
            case 9:
              if (this.checkList9 == false) {
                this.form.zjhm_t = false
              } else {
                this.form.zjhm_t = true;
              }
              break;
            default:
              break;

          }
        }

      }
    },
  }
}
</script>
<style scoped>
.el-button+.el-button {
  margin-left: 0px;
  margin-top: 10px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item img {
  max-width: 100%;
  height: 100%;
  cursor: pointer;
}

.el-carousel__item:nth-child(2n) {
  /* background: url(../../../assets/img/t1.png); */
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #EFF3F6;
}

.block {
  padding-top: 5px;
}

.crcolor {
  background: #EFF3F6;
}

.yy-input-text {
  text-align: left !important;
}

.titlelen {
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<style>
.yyinput input.el-input__inner {
  color: red!important;
}
</style>
