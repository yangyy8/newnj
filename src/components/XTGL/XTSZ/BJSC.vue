<template lang="html">
  <!-- 背景审查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">性别：</span>
                    <el-select v-model="pd.XB" filterable clearable   placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.xb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQ" filterable clearable   placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="pd.ZJZL" filterable clearable placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zjzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">审查时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.SCSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.SCSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="primary" size="small"  class="t-mb" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd,0)">查询</el-button>
          <el-button type="primary" size="small"  class="t-ml0" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd,1)">核查</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
      <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="showUpload">批量核查</el-button>
        <el-button type="warning" size="small" @click="downcontent">模板下载</el-button>
        <el-button type="success" size="small" @click="download">列表导出</el-button>
        <el-button type="danger" size="small" @click="delbjsc" :disabled="bnt">批量删除</el-button>
        </el-row>
      <el-table
           :data="tableData"
           border
           ref="multipleTable"
           :highlight-current-row="true"
           @select="selectfn"
           style="width: 100%"
           @header-click="titleShow">
           <el-table-column
             type="selection"
             width="55">
           </el-table-column>
           <el-table-column
             prop="YWXM"
             label="英文姓名">
           </el-table-column>
           <el-table-column
             prop="XB_DESC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="GJDQ_DESC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="ZJZL_DESC"
             label="证件种类">
           </el-table-column>
           <el-table-column
             prop="ZJHM"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="AJHCJG_DESC"
             label="案件核查结果">
             <template slot-scope="scope">
              <span  class="bjscblue" v-if="scope.row.AJHCJG_DESC == '无异常'">{{scope.row.AJHCJG_DESC}}</span>
              <span  class="hand bjscred" v-else @click="gotos(scope.row,1)">{{scope.row.AJHCJG_DESC}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="TBRYHCJG_DESC"
             label="通报人员核查结果">
             <template slot-scope="scope">
               <span class="bjscblue" v-if="scope.row.TBRYHCJG_DESC == '无异常'">{{scope.row.TBRYHCJG_DESC}}</span>
               <span class="bjscyellow hand" @click="gotos(scope.row,2)" v-else>{{scope.row.TBRYHCJG_DESC}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="SJXXHCJG_DESC"
             label="涉警信息核查结果">
             <template slot-scope="scope">
               <span  class="bjscblue" v-if="scope.row.SJXXHCJG_DESC == '无异常'">{{scope.row.SJXXHCJG_DESC}}</span>
               <span  class="hand bjscred" v-else @click="gotos(scope.row,3)">{{scope.row.SJXXHCJG_DESC}}</span>
              <!-- <span :class="{'bjscred':scope.row.SJXXHCJG_DESC == '查中','bjscblue':scope.row.SJXXHCJG_DESC == '无异常','bjscyellow':scope.row.SJXXHCJG_DESC == '疑似'}" @click="gotos(scope.row,3)">{{scope.row.SJXXHCJG_DESC}}</span> -->
             </template>
           </el-table-column>
           <el-table-column
             prop="CRJJLHCJG_DESC"
             label="出入境核查结果">
             <template slot-scope="scope">
              <span :class="{'bjscred':scope.row.CRJJLHCJG_DESC == '境外','bjscblue':scope.row.CRJJLHCJG_DESC == '境内'}" @click="gotos(scope.row,4)">{{scope.row.CRJJLHCJG_DESC}}</span>
             </template>
           </el-table-column>
           <!-- <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
               <div>
                  <el-button type="text"  class="a-btn"  title="处理"  icon="el-icon-tickets" @click="$router.push({name:'SLRY_XQ',query:{hiType:'slry',row:scope.row}})"></el-button>
               </div>
             </template>
           </el-table-column> -->
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
    <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">
    <el-form>
    <el-row type="flex" class="mb-6">
     <el-col :span="14" class="input-item">
       <label class="file">
         上传文件
         <input type="file" name=""  @change="uploadFile">
       </label>
       <div class="t-input input-input">
         <div class="t-input-content" v-for="(x,ind) in fileData" :key="ind">
           <span class="mr-30" style="color: #606266;font-size:15px">{{x.name}}</span>
         </div>
       </div>
        </el-col>
        <el-col :span="10" class="input-item">
          <el-button type="primary" size="small"  @click="getList(CurrentPage,pageSize,pd,2)">&nbsp;&nbsp;查询&nbsp;&nbsp;</el-button>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
  <el-dialog title="通报人员记录" :visible.sync="tbryDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">

      <el-table
          :data="tableData9"
          border
          style="width: 100%" class="stu-table t-mt10">
          <el-table-column
            prop="TBRYZL_DESC"
            label="通报人员类别">
          </el-table-column>
          <el-table-column
            prop="TBBH"
            label="通报编号">
          </el-table-column>
          <el-table-column
            prop="FBSJ"
            label="发布时间">
          </el-table-column>
          <el-table-column
            label="操作" width="120">
            <template slot-scope="scope">
            <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailstbxx(scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult9}}条记录
            </div>
            <div class="">
              每页显示
              <el-select v-model="pageSize9" @change="pageSizeChange9(pageSize9)" placeholder="10" size="mini" class="page-select">
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
              共{{Math.ceil(TotalResult9/pageSize9)}}页
            </div>
          </div>
              <el-pagination
                background
                @current-change="handleCurrentChange9"
                :current-page:sync="CurrentPage9"
                :page-size="pageSize9"
                layout="prev, pager, next"
                :total="TotalResult9">
              </el-pagination>
            </div>

      <TBRYXX  :xid="xid" :random="new Date().getTime()" v-if='tbshow'></TBRYXX>
    <div slot="footer" class="dialog-footer">
      <el-button @click="tbryDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
  <el-dialog title="案事件记录" :visible.sync="asjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
    <el-table
       :data="tableData4.length==0?tableData4:tableData4.slice((CurrentPage4-1)*pageSize4,CurrentPage4*pageSize4)"
       border
       style="width: 100%" class="stu-table t-mt10">
       <el-table-column
         prop="caseType_desc"
         label="案事件类型">
       </el-table-column>
       <el-table-column
         prop="caseTime"
         label="案发时间">
       </el-table-column>
       <el-table-column
         prop="caseName"
         label="案件名称">
       </el-table-column>
       <el-table-column
         prop="caseRegion_desc"
         label="案发地区">
       </el-table-column>
       <el-table-column
         label="操作" width="120">
         <template slot-scope="scope">
         <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsasj(scope.row)"></el-button>
         </template>
       </el-table-column>
     </el-table>
    <div class="middle-foot">
    <div class="page-msg">
      <div class="">
    共{{TotalResult4}}条记录
      </div>
      <div class="">
        每页显示
        <el-select v-model="pageSize4" @change="pageSizeChange4(pageSize4)" placeholder="10" size="mini" class="page-select">
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
        共{{Math.ceil(TotalResult4/pageSize4)}}页
      </div>
    </div>
    <el-pagination
      background
      @current-change="handleCurrentChange4"
      :current-page:sync="CurrentPage4"
      :page-size="pageSize4"
      layout="prev, pager, next"
      :total="TotalResult4">
    </el-pagination>
  </div>

    <ANSJRY :type="type" :xid="xid" :random="randomasj" :rybh="rybh" v-if="anshow"></ANSJRY>
    <div slot="footer" class="dialog-footer">
      <el-button @click="asjDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
  <el-dialog title="警综涉警信息记录" :visible.sync="sjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
    <el-table
         ref="multipleTable"
         :data="sjtableData"
         border
         style="width: 100%" class="stu-table">
         <el-table-column
           prop="SJRYDJDW"
           label="涉警人员登记单位">
         </el-table-column>
         <el-table-column
           prop="SJRYDJDWMC"
           label="涉警人员登记单位名称">
         </el-table-column>
         <el-table-column
           prop="SJRYDJRXM"
           label="涉警人员登记人姓名">
         </el-table-column>
         <el-table-column
           prop="SJRYDJSJ"
           label="涉警人员登记时间">
         </el-table-column>
         <el-table-column
           prop="SJRYSJLB"
           label="涉警人员涉警类别">
         </el-table-column>
         <el-table-column
           prop="SJRYXGDWMC"
           label="涉警人员修改单位">
         </el-table-column>
         <el-table-column
           label="操作" width="70">
           <template slot-scope="scope">
           <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailssj(scope.row)"></el-button>
           </template>
         </el-table-column>
     </el-table>
     <div class="middle-foot mt-10">
        <div class="page-msg">
          <div class="">
        共{{sjTotalResult}}条记录
          </div>
          <div class="">
            每页显示
            <el-select v-model="sjpageSize" @change="sjpageSizeChange(sjpageSize)" placeholder="10" size="mini" class="page-select">
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
            共{{Math.ceil(sjTotalResult/sjpageSize)}}页
          </div>
        </div>
        <el-pagination
          background
          @current-change="sjhandleCurrentChange"
          :page-size="sjpageSize"
          layout="prev, pager, next"
          :total="sjTotalResult"
          :current-page.sync="sjCurrentPage">
        </el-pagination>
      </div>

    <JZSJ :type="type" :xid="xid" v-if='sjshow'></JZSJ>
    <div slot="footer" class="dialog-footer">
      <el-button @click="sjDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>

  <el-dialog title="出入境记录" :visible.sync="crjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
    <el-table
       :data="tableData1.length==0?tableData1:tableData1.slice((CurrentPage1-1)*pageSize1,CurrentPage1*pageSize1)"
       border
       style="width: 100%;" class="stu-table t-mt10">
       <el-table-column
         prop="IO_DATE"
         label="出入境日期">
       </el-table-column>
       <el-table-column
         prop="PERSON_TYPE_DESC"
         label="人员类别（出入境状态）">
       </el-table-column>
       <el-table-column
         prop="IO_PORT_DESC"
         label="出入境口岸">
       </el-table-column>
       <el-table-column
         label="操作" width="120">
         <template slot-scope="scope">
           <div>
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailscrj(scope.row)"></el-button>
           </div>
         </template>
       </el-table-column>
     </el-table>
     <div class="middle-foot mt-10">
     <!-- <div class="page-msg">
       <div class="">
     共{{TotalResult1}}条记录
       </div>
       <div class="">
         每页显示
         <el-select v-model="pageSize1" @change="pageSizeChange1(pageSize1)" placeholder="10" size="mini" class="page-select">
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
         共{{Math.ceil(TotalResult1/pageSize1)}}页
       </div>
     </div>
     <el-pagination
       background
       @current-change="handleCurrentChange1"
       :current-page:sync="CurrentPage1"
       :page-size="pageSize1"
       layout="prev, pager, next"
       :total="TotalResult1">
     </el-pagination>-->
    </div>
    <!-- <CRJXXRY :type="type" :xid="xid" :random="randomcrj" v-if="crjshow"></CRJXXRY> -->
    <el-form :model="crjinfo" v-if="crjshow">
        <el-row :gutter="2"  class="mb-6">
            <el-col :span="8" class="input-item">
              <span class="input-text">人员姓名：</span>
              <span class="input-input detailinput">  {{crjinfo.NAME}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">人员类别：</span>
              <span class="input-input detailinput">  {{crjinfo.PERSON_TYPE_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">国家地区：</span>
             <span class="input-input detailinput">  {{crjinfo.NATIONALITY_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">性别：</span>
             <span class="input-input detailinput">  {{crjinfo.GENDER_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出生日期：</span>
              <span class="input-input detailinput">  {{crjinfo.BIRTH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件号码：</span>
              <span class="input-input detailinput">  {{crjinfo.CERTIFICATENO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件类型：</span>
              <span class="input-input detailinput">  {{crjinfo.CERTIFICATE_TYPE_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">签证类型：</span>
              <span class="input-input detailinput">  {{crjinfo.VISA_TYPE_DESC}}</span>
            </el-col>
            <!-- <el-col :span="8" class="input-item">
              <span class="input-text">职业代码：</span>
              <span class="input-input detailinput">  {{crjinfo.profCode}}</span>
            </el-col> -->
            <el-col :span="8" class="input-item">
              <span class="input-text">出入境日期：</span>
              <span class="input-input detailinput">  {{crjinfo.IO_DATE}}</span>
            </el-col>


            <!-- <el-col :span="8" class="input-item">
              <span class="input-text">出入境时间：</span>
              <span class="input-input detailinput">  {{crjinfo.IO_TIME}}</span>
            </el-col> -->
            <el-col :span="8" class="input-item">
              <span class="input-text">出入口岸：</span>
              <span class="input-input detailinput">  {{crjinfo.IO_PORT_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">检查员号：</span>
              <span class="input-input detailinput">  {{crjinfo.INSPECTORID}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">交通方式：</span>
              <span class="input-input detailinput">  {{crjinfo.TRAFFIC_MODE_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">交通工具：</span>
              <span class="input-input detailinput">  {{crjinfo.TRAFFIC_TOOL}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">前往地：</span>
              <span class="input-input detailinput">  {{crjinfo.DESTINATION}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">发证机关：</span>
              <span class="input-input detailinput">  {{crjinfo.GRANT_CERT_ORG}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">发证日期：</span>
              <span class="input-input detailinput">  {{crjinfo.GRANT_CERT_DATE}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出境理由：</span>
              <span class="input-input detailinput">  {{crjinfo.OUT_REASON_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">通道号：</span>
              <span class="input-input detailinput">  {{crjinfo.CHANNELNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">旅游团号：</span>
              <span class="input-input detailinput">  {{crjinfo.TOUR_GROUPNO}}</span>
            </el-col>
            <!-- <el-col :span="8" class="input-item">
              <span class="input-text">入库时间：</span>
              <span class="input-input detailinput">  {{crjinfo.IN_TIME}}</span>
            </el-col> -->
            <!-- <el-col :span="8" class="input-item">
              <span class="input-text">境内外标识：</span>
              <span class="input-input detailinput">  {{crjinfo.id}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出入境标识：</span>
              <span class="input-input detailinput">  {{crjinfo.CRJBS_DESC}}</span>
            </el-col> -->
        </el-row>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script>
import {format} from '@/assets/js/date.js'
import TBRYXX from '../../common/tbryxx_xq'
import ANSJRY from '../../YJYP/YP/LXSYP/ansjxq_ry'
import CRJXXRY from '../../YJYP/YP/LXSYP/crjxq_ry'
import JZSJ from '../../common/jzsj_xq'
export default {
  components:{TBRYXX,ANSJRY,JZSJ,CRJXXRY},
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      CurrentPage4: 1,
      pageSize4: 10,
      TotalResult4: 0,
      CurrentPage9: 1,
      pageSize9: 10,
      TotalResult9: 0,
      sjCurrentPage: 1,
      sjpageSize: 10,
      sjTotalResult: 0,
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      pd: {SCSJ_DateRange:{begin:'',end:''}},
      pd0:{SCSJ_DateRange:{begin:'',end:''}},
      options: this.pl.ps,
      tableData: [],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      fileData:null,
      selectionReal:[],
      uploadDialogVisible:false,
      tbryDialogVisible:false,
      tbshow:false,
      asjDialogVisible:false,
      anshow:false,
      sjDialogVisible:false,
      sjshow:false,
      crjDialogVisible:false,
      crjshow:false,
      type:2,
      xid:'',
      dtid:'',
      rybh:'',
      tableData4:[],
      tableData9:[],
      sjtableData:[],
      tableData1:[],
      randomasj:'',
      px:{},
      crjinfo:{},
      bnt:true,
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],
    }
  },

  activated(){
      // let _this = this;
      // setTimeout(function(){
      //   _this.getList(_this.CurrentPage, _this.pageSize, _this.pd);
      // },1000)
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getZjzl');
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgCode=this.$store.state.orgname;
    this.orgName=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
  },
  methods: {
    delbjsc(){

      if(this.multipleSelection.length>0){
        this.$confirm('您是否确认删除？', '提示', {
                       confirmButtonText: '确定',
                       cancelButtonText: '取消',
                       type: 'warning'
                   }).then(() => {
                        var rybh=[];
                        var array=this.multipleSelection;
                        for (var i = 0; i < array.length; i++) {
                           rybh.push(array[i].RYBH);
                        }
                      let p={
                        'pd':{
                          'RYBH':rybh
                        },
                        userCode:this.userCode,
                        userName:this.userName,
                        orgCode:this.orgCode,
                        orgJB:this.juState,
                        token:this.token,
                      }
                      this.$api.post(this.Global.aport2+'/bjsc/deletebjsc',p,
                       r =>{
                              if(r.success){
                                this.$message({
                                  type: 'success',
                                  message: '删除成功'
                                });
                                this.getList(this.CurrentPage, this.pageSize, this.pd,this.type);
                              }else {
                                this.$message.error("删除失败！");
                              }
                       });
                }).catch(() => {
                   this.$message({
                   type: 'info',
                   message: '已取消删除'
                   });
               });
      }else {
        this.$message.error("请至少选择一条数据!");return ;
      }
    },
    titleShow(e,el){
      el.target.title = e.label;
    },
    pageSizeChange4(val) {
    this.pageSize4=val;
    },
    handleCurrentChange4(val) {
      this.CurrentPage4=val;
    },
    pageSizeChange9(val) {
      this.getTbxx(this.CurrentPage9,val);
    },
    handleCurrentChange9(val) {
      this.getTbxx(val,this.pageSize9);
    },
    sjpageSizeChange(val) {
      this.sjpageSize=val;
      this.getSJ(this.sjCurrentPage,val);
    },
    sjhandleCurrentChange(val) {
      this.sjCurrentPage=val;
      this.getSJ(val,this.sjpageSize);
    },
    pageSizeChange1(val) {
      this.pageSize1=val;
    },
    handleCurrentChange1(val) {
      this.CurrentPage1=val;
    },
    selectfn(a,b){
      this.multipleSelection = a;
      if(this.multipleSelection.length>0){
        this.bnt=false;
      }else {
        this.bnt=true;
      }
      this.dataSelection();
    },
    dataSelection(){
      // console.log('this.multipleSelection',this.multipleSelection)
      this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection);
      // console.log('this.selectionReal',this.selectionReal);
      this.selectionAll=[];
      for(var i=0;i<this.selectionReal.length;i++){
        if(this.selectionReal[i]){
          for(var j=0;j<this.selectionReal[i].length;j++){
            this.selectionAll.push(this.selectionReal[i][j])
          }
        }
      }
      // console.log('this.selectionAll',this.selectionAll);
    },
    uploadFile(event){//获取上传的文件
      // const isEXL = event.target.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      // const isExls=event.target.files[0].type==='application/vnd.ms-excel';
      //
      // if (!isEXL && !isExls) {
      //   this.$message.error('上传文件只能是 xlsx或者xls 格式!'); return false;
      // }

       this.fileData=event.target.files;
     },
     upload(){//上传文件
       var formData = new FormData();
       let arr=this.fileData;
       for(var i=0;i<arr.length;i++){
         formData.append("file",arr[i]);
       }
       formData.append("orgCode",this.orgCode);
       formData.append("orgName",this.orgName);
       formData.append("userCode",this.userCode);
       formData.append("userName",this.userName);
       formData.append("orgJB",this.juState);
       formData.append("token",this.token);
       let p=formData;
       this.$api.post(this.Global.aport2+'/bjsc/getplbjsc',p,
        r =>{
          if(r.success){
            this.uploadDialogVisible=false;
            this.fileData=[];
            this.tableData=r.data.resultList;
            this.TotalResult = r.data.totalResult;
            this.$message({
              type: 'info',
              message: '导入成功'
            });
          }else{
            this.$confirm('上传文件存在错误信息, 是否导出错误信息?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$api.post(this.Global.aport2+'/bjsc/geterrdata',p,
               r =>{
                 this.uploadDialogVisible=false;
                 this.downloadM(r,'错误信息')
               },e=>{},{},'blob')
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消导出'
              });
            });
          }
        },e => {
        },{'Content-Type': 'multipart/form-data'})
     },
    showUpload() {
      this.uploadDialogVisible = true;
    },
    downcontent() {
      var url= window.IPConfig.IP +"/"+ this.Global.aport3 + '/webapp/templateFile/背景审查核查模板.xls';
      window.location.href =url;
    },
    download(){
      let p={};
      if(this.tableData.length==0){
        this.$message({
         message: '列表还没有数据，请进行查询！',
         type: 'warning'
        });
        return;
      }
      // var arr=this.tableData;
      // var srr=[];
      // for (var i = 0; i < arr.length; i++) {
      // srr.push(arr[i].RYBH);
      // }
      // var pes={
      //   "RYBH":srr
      // };
      //
      // let p={
      //   "pd": pes,
      //   "userCode":this.$store.state.uid,
      //   "userName":this.$store.state.uname,
      // };
      this.pd0.SCSJ_DateRange.begin==''?this.pd.SCSJ_DateRange.begin='':this.pd0.SCSJ_DateRange.begin==null?this.pd.SCSJ_DateRange.begin=null:this.pd.SCSJ_DateRange.begin=this.pd0.SCSJ_DateRange.begin+'000000';
      this.pd0.SCSJ_DateRange.end==''?this.pd.SCSJ_DateRange.end='':this.pd0.SCSJ_DateRange.end==null?this.pd.SCSJ_DateRange.end=null:this.pd.SCSJ_DateRange.end=this.pd0.SCSJ_DateRange.end+'000000';
      if(this.selectionAll.length==0){//全部导出
        p={
          "pd":this.pd,
          "userCode":this.$store.state.uid,
          "userName":this.$store.state.uname,
          userCode:this.userCode,
          userName:this.userName,
          orgCode:this.orgCode,
          orgJB:this.juState,
          token:this.token,
        }
      }else{//导出选中
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].RYBH)
        };
        p={
         "pd": {RYBH:this.yuid},
         "userCode":this.$store.state.uid,
         "userName":this.$store.state.uname,
         userCode:this.userCode,
         userName:this.userName,
         orgCode:this.orgCode,
         orgJB:this.juState,
         token:this.token,
      }
      }
      this.$api.post(this.Global.aport2+'/bjsc/exportdate',p,
        r =>{
          this.downloadM(r)
        },e=>{},{},'blob')
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '背景审查'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd,this.type);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd,this.type);
    },
    getList(currentPage, showCount, pd, type) {
        this.type=type;
         if(type==2){
           if(this.fileData==null){
             this.$message({
              message: '上传文件不能为空！',
              type: 'warning'
             });
             return
           }
           this.upload();
         }else {
          var url='';
           if(type==1){
             if(this.pd.GJDQ=="" || this.pd.GJDQ==undefined){
              this.$message({
                  offset:50,
                  showClose: true,
                  message: '请选择国家地区！',
                  type: 'error'
                });
              return;
             }
             if(this.pd.ZJHM=="" || this.pd.ZJHM==undefined){
              this.$message({
                  offset:50,
                  showClose: true,
                  message: '请输入证件号码！',
                  type: 'error'
                });
              return;
             }
             url=this.Global.aport2+'/bjsc/getdtbjsc';
           }else {
             url=this.Global.aport2+'/bjsc/getbjsc';
           }
           this.pd0.SCSJ_DateRange.begin==''?this.pd.SCSJ_DateRange.begin='':this.pd0.SCSJ_DateRange.begin==null?this.pd.SCSJ_DateRange.begin=null:this.pd.SCSJ_DateRange.begin=this.pd0.SCSJ_DateRange.begin+'000000';
           this.pd0.SCSJ_DateRange.end==''?this.pd.SCSJ_DateRange.end='':this.pd0.SCSJ_DateRange.end==null?this.pd.SCSJ_DateRange.end=null:this.pd.SCSJ_DateRange.end=this.pd0.SCSJ_DateRange.end+'000000';
           if(pd.hasOwnProperty('RYBH')){
             delete pd['RYBH']
           }
           let p = {
             "currentPage": currentPage,
             "showCount": showCount,
             "userCode":this.$store.state.uid,
             "userName":this.$store.state.uname,
             "pd": pd,
             orgCode:this.orgCode,
             orgJB:this.juState,
             token:this.token,
           };
       this.$api.post(url, p,
        r => {
          if(r.success){
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
            if(this.selectionReal.length==0){//声明一个数组对象
              this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
            }
            this.$nextTick(()=>{
              this.multipleSelection=[]
              for(var i=0;i<this.tableData.length;i++){
                for(var j=0;j<this.selectionAll.length;j++){
                  if(this.tableData[i].RYBH==this.selectionAll[j].RYBH){
                    this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                  }
                }
              }
            })
          }
        })
      }
    },
    //涉警
    getSJ(currentPage,showCount){
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
        "userCode":this.$store.state.uid,
        "userName":this.$store.state.uname,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getsjxx', p,
        r => {
          this.sjtableData=r.data.resultList;
          this.sjTotalResult=r.data.totalResult;
      })
    },
    // 案事件
    getASJXX(currentPage,showCount){
      let p={
        // "currentPage":currentPage,
        // "showCount":showCount,
        // "pd":pd
        "paperNO":this.px.ZJHM,
        "nationality":this.px.GJDQ
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getajjbxx', p,
        r => {
          this.tableData4 = r.data;
          this.TotalResult4=r.data.length;
        })
    },
    //通报信息
    getTbxx(currentPage,showCount){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":this.px,
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhx/gettbryjbxx', p,
        r => {
          this.tableData9 = r.data.resultList;
          this.TotalResult9=r.data.totalResult;
        })
    },
    //出入境
    getCrj(currentPage,showCount){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":{
          "RYBH":this.px.RYBH,
        },
        "userCode":this.userCode,
        "userName":this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      };
      this.$api.post(this.Global.aport3+'/bjsc/getbjsccrjjl', p,
        r => {
          // if(r.data.length>1){
          //   var pp=[];
          //   pp.push(r.data[0]);
          //   this.tableData1 = pp;
          // }
          if(r.success){
            this.tableData1 = r.data.resultList;
          }
        })
    },
    //通报详情
    detailstbxx(val){
      this.xid=val;
      this.tbshow=true;
    },
    //案事件信息详情
    detailsasj(n){
      this.xid=n;
      this.randomasj=new Date().getTime();
      this.anshow=true;
    },
    //出入境详情
    detailscrj(n){
        this.crjinfo=n;
        // this.randomcrj=new Date().getTime();
        this.crjshow=true;
    },
    detailssj(n){
      this.xid=n.RGUID;
      this.type=1;
      this.sjshow=true;
    },
    gotos(n,t){
      this.px.ZJHM=n.ZJHM;
      this.px.GJDQ=n.GJDQ;
      this.px.RYBH=n.RYBH;
      this.sjshow=false;
      this.crjshow=false;
      this.anshow=false;
      this.tbshow=false;
      if(t==1){
       this.getASJXX(this.CurrentPage4,this.pageSize4);
        this.asjDialogVisible=true;
      }else if(t==2) {
        this.getTbxx(this.CurrentPage9,this.pageSize9);
        this.tbryDialogVisible=true;
      }else if(t==3) {
        this.getSJ(this.sjCurrentPage,this.sjpageSize);
        this.sjDialogVisible=true;
      }else if(t==4) {
        this.getCrj(this.crjCurrentPage,this.pageSize);
        this.crjDialogVisible=true;
      }
    },
  }
}
</script>
<style scoped>
.file {
  position: relative;
  display: inline-block;
  color: #fff;
  background-color: #409EFF;
  border:1px solid #409EFF;
  border-radius: 3px;
  border-top-right-radius: 0!important;
  border-bottom-right-radius: 0!important;
  padding: 0px 15px;;
  overflow: hidden;
  text-decoration: none;
  text-indent: 0;
  line-height: 32px;
  font-size: 12px;

}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.file:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.bjscred{color: red}
.bjscblue{color: blue}
.bjscyellow{color: #D07D00}
</style>
