<template lang="html">
  <!-- 留学生预警 -->
  <div class="yymain">
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
                    <el-select v-model="pd.XBDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
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
                    <el-select v-model="pd.GJDQDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">护照号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.HZHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">核查时间：</span>
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
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">是否入境：</span>
                    <el-select v-model="pd.SFRJ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="0" label="否"></el-option>
                      <el-option value="1" label="是"></el-option>
                      <el-option value="2" label="已出境"></el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">是否存在临住：</span>
                    <el-select v-model="pd.SFCZLZ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="0" label="否"></el-option>
                      <el-option value="1" label="是"></el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">是否申请居留许可：</span>
                    <el-select v-model="pd.SFSQJLXK" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="0" label="否"></el-option>
                      <el-option value="1" label="是"></el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">上报单位：</span>
                   <el-select v-model="pd.CZDWID" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" :filter-method="userFilter" @visible-change="getDw();">
                     <el-option
                       v-for="(item,index) in dwdata"
                       :key="index"
                       :label="item.ZZJGDM+' - '+item.DWZWMC"
                       :value="item.ZZJGDM">
                     </el-option>
                   </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  class="t-mb" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">预警信息列表</div>
      <el-table
           :data="tableData"
           border
           ref="multipleTable"
           :highlight-current-row="true"
           style="width: 100%">
           <el-table-column
             prop="YWXM"
             label="英文姓名">
           </el-table-column>
           <el-table-column
             prop="XBMC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="GJDQMC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="HZHM"
             label="护照号码">
           </el-table-column>
           <el-table-column
             prop="CSRQ"
             label="出生日期">
           </el-table-column>
           <el-table-column
             prop="DWZWMC"
             label="上报单位">
           </el-table-column>
           <el-table-column
             prop="SFRJ_DESC"
             label="是否入境">
             <template slot-scope="scope">
               <span  class="hand" v-if="scope.row.SFRJ_DESC=='是'" @click="getCrj(scope.row)">{{scope.row.SFRJ_DESC}}</span>
               <span class="redx" v-else>{{scope.row.SFRJ_DESC}}</span>
              </template>
           </el-table-column>
           <el-table-column
             prop="SFCZLZ_DESC"
             label="是否有临住">
             <template slot-scope="scope">
               <span class="hand" v-if="scope.row.SFCZLZ_DESC=='是'" @click="getLz(scope.row)">{{scope.row.SFCZLZ_DESC}}</span>
               <span class="redx" v-else>{{scope.row.SFCZLZ_DESC}}</span>
              </template>
           </el-table-column>
           <el-table-column
             prop="SFSQJLXK_DESC"
             label="是否申请居留许可">
             <template slot-scope="scope">
               <span class="hand" v-if="scope.row.SFSQJLXK_DESC=='是'" @click="getQz(scope.row)">{{scope.row.SFSQJLXK_DESC}}</span>
               <span class="redx" v-else>{{scope.row.SFSQJLXK_DESC}}</span>
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
    <el-dialog title="出入境记录" :visible.sync="crjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <el-table
         :data="tableData1"
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
          </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="临住信息记录" :visible.sync="lzDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <el-table
        :data="tableData2.length==0?tableData2:tableData2.slice((CurrentPage2-1)*pageSize2,CurrentPage2*pageSize2)"
         border
         style="width: 100%" class="stu-table t-mt10">
         <el-table-column
           prop="resideTime"
           label="住宿日期">
         </el-table-column>
         <el-table-column
           prop="leaveTime"
           label="离开日期">
         </el-table-column>
         <el-table-column
           prop="tmpResideRegOrgName"
           label="登记单位">
         </el-table-column>
         <el-table-column
           prop="tmpResideRegOrgArea_desc"
           label="登记单位行政区划">
         </el-table-column>
         <el-table-column
           prop="visaType_desc"
           label="签证种类">
         </el-table-column>
         <el-table-column
           label="操作" width="120">
           <template slot-scope="scope">
           <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslz(scope.row)"></el-button>
           </template>
         </el-table-column>
       </el-table>
      <div class="middle-foot">
        <div class="page-msg">
          <div class="">
        共{{TotalResult2}}条记录
          </div>
          <div class="">
            每页显示
            <el-select v-model="pageSize2" @change="pageSizeChange2(pageSize2)" placeholder="10" size="mini" class="page-select">
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
            共{{Math.ceil(TotalResult2/pageSize2)}}页
          </div>
        </div>
        <el-pagination
          background
          @current-change="handleCurrentChange2"
          :current-page:sync="CurrentPage2"
          :page-size="pageSize2"
          layout="prev, pager, next"
          :total="TotalResult2">
        </el-pagination>
      </div>
      <!-- <CRJXXRY :type="type" :xid="xid" :random="randomcrj" v-if="crjshow"></CRJXXRY> -->
      <el-form :model="lzinfo" v-if="lzshow">
          <el-row :gutter="2"  class="mb-6">
              <el-col :span="8" class="input-item">
                <span class="input-text">中文姓名：</span>
                <span class="input-input detailinput">  {{lzinfo.nameCH}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">英文名：</span>
                <span class="input-input detailinput">  {{lzinfo.surnameEN}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
               <span class="input-text">英文姓：</span>
               <span class="input-input detailinput">  {{lzinfo.firstnameEN}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
               <span class="input-text">数据来源：</span>
               <span class="input-input detailinput">  {{lzinfo.dataSource_desc}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">性别：</span>
                <span class="input-input detailinput">  {{lzinfo.gender_desc}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">出生日期：</span>
                <span class="input-input detailinput">  {{lzinfo.birthday}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">国籍/地区：</span>
                <span class="input-input detailinput">  {{lzinfo.nationality_desc}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="所持证件种类">所持证件种类：</span>
                <span class="input-input detailinput">  {{lzinfo.paperType_desc}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="所持证件号码">所持证件号码：</span>
                <span class="input-input detailinput">  {{lzinfo.paperNO}}</span>
              </el-col>


              <el-col :span="8" class="input-item">
                <span class="input-text">签证种类：</span>
                <span class="input-input detailinput">  {{lzinfo.visaType_desc}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="签证（注）号码">签证（注）号码：</span>
                <span class="input-input detailinput">  {{lzinfo.visaNO}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="签证（注）停留有效期">签证（注）停留有效期：</span>
                <span class="input-input detailinput">  {{lzinfo.localizePeriod}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">签发单位：</span>
                <span class="input-input detailinput">  {{lzinfo.assignmentOrg_desc}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">住宿日期：</span>
                <span class="input-input detailinput">  {{lzinfo.resideTime}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="散居住址或留宿单位地址">散居住址或留宿单位地址：</span>
                <span class="input-input detailinput">  {{lzinfo.resideAddress}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">离开日期：</span>
                <span class="input-input detailinput">  {{lzinfo.leaveTime}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">接待单位：</span>
                <span class="input-input detailinput">  {{lzinfo.receiveUnit}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="临时住宿登记单位行政区划">临时住宿登记单位行政区划：</span>
                <span class="input-input detailinput">  {{lzinfo.tmpResideRegOrgArea_desc}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="临时住宿登记单位">临时住宿登记单位：</span>
                <span class="input-input detailinput">  {{lzinfo.tmpResideRegOrgName}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">备注：</span>
                <span class="input-input detailinput">  {{lzinfo.remarks}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="记录操作时间">记录操作时间：</span>
                <span class="input-input detailinput">  {{lzinfo.opTime}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">操作类型：</span>
                <span class="input-input detailinput">  {{lzinfo.opType_desc}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">省份：</span>
                <span class="input-input detailinput">  {{lzinfo.province}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">核查条件：</span>
                <span class="input-input detailinput">  {{lzinfo.queryStr}}</span>
              </el-col>
          </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="lzDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="签证信息记录" :visible.sync="qzDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <el-table
        :data="tableData3.length==0?tableData3:tableData3.slice((CurrentPage3-1)*pageSize3,CurrentPage3*pageSize3)"
         border
         style="width: 100%" class="stu-table t-mt10">
         <el-table-column
           prop="VISA_AVAILABLE_PERIOD_DESC"
           label="签证有效期">
         </el-table-column>
         <el-table-column
           prop="VISA_AVAILABLE_TIME_DESC"
           label="签证有效次数">
         </el-table-column>
         <el-table-column
           prop="VISA_NO"
           label="签证号码">
         </el-table-column>
         <el-table-column
           prop="VISA_TYPE_DESC"
           label="签证种类">
         </el-table-column>
         <el-table-column
           label="操作" width="120">
           <template slot-scope="scope">
           <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsqz(scope.row)"></el-button>
           </template>
         </el-table-column>
       </el-table>
      <div class="middle-foot">
        <div class="page-msg">
          <div class="">
        共{{TotalResult3}}条记录
          </div>
          <div class="">
            每页显示
            <el-select v-model="pageSize2" @change="pageSizeChange3(pageSize3)" placeholder="10" size="mini" class="page-select">
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
            共{{Math.ceil(TotalResult3/pageSize3)}}页
          </div>
        </div>
        <el-pagination
          background
          @current-change="handleCurrentChange3"
          :current-page:sync="CurrentPage3"
          :page-size="pageSize3"
          layout="prev, pager, next"
          :total="TotalResult3">
        </el-pagination>
      </div>
      <!-- <CRJXXRY :type="type" :xid="xid" :random="randomcrj" v-if="crjshow"></CRJXXRY> -->
      <el-form :model="qzinfo" v-if="qzshow">
          <el-row :gutter="2"  class="mb-6">
              <el-col :span="8" class="input-item">
                <span class="input-text" title="受理机关">受理机关：</span>
                <span class="input-input detailinput">  {{qzinfo.ACCEPT_ORG_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="受理时间">受理时间：</span>
                <span class="input-input detailinput">  {{qzinfo.ACCEPT_TIME}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
               <span class="input-text" title="出生日期">出生日期：</span>
               <span class="input-input detailinput">  {{qzinfo.BIRTHDAY}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
               <span class="input-text" title="核查用姓名">核查用姓名：</span>
               <span class="input-input detailinput">  {{qzinfo.CHECK_NAMEEN}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="核查用证号">核查用证号：</span>
                <span class="input-input detailinput">  {{qzinfo.CHECK_PAPERNO}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="工作单位所在区县">工作单位所在区县：</span>
                <span class="input-input detailinput">  {{qzinfo.COMPANY_AREA_CODE_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="工作(学习)单位所在派出所名称">工作(学习)单位所在派出所名称：</span>
                <span class="input-input detailinput">  {{qzinfo.COMPANY_PS_NAME}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="境外人员身份证号码">境外人员身份证号码：</span>
                <span class="input-input detailinput">  {{qzinfo.FOREIGNER_ID}}</span>
              </el-col>


              <el-col :span="8" class="input-item">
                <span class="input-text" title="境外人员类别">境外人员类别：</span>
                <span class="input-input detailinput">  {{qzinfo.FOREIGNER_TYPE_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">性别：</span>
                <span class="input-input detailinput">  {{qzinfo.GENDER_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">身份：</span>
                <span class="input-input detailinput">  {{qzinfo.IDENTITY_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">邀请单位：</span>
                <span class="input-input detailinput">  {{qzinfo.INVITE_ORG_NAME}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="人员地域类别">人员地域类别：</span>
                <span class="input-input detailinput">  {{qzinfo.KIND_OF_ZONE_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="居住地详细地址">居住地详细地址：</span>
                <span class="input-input detailinput">  {{qzinfo.LOCALIZE_ADDRESS}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="居住地所在区县">居住地所在区县：</span>
                <span class="input-input detailinput">  {{qzinfo.LOCALIZE_AREA_CODE_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="签证停留期">签证停留期：</span>
                <span class="input-input detailinput">  {{qzinfo.LOCALIZE_PERIOD}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="境内居住地所在派出所">境内居住地所在派出所：</span>
                <span class="input-input detailinput">  {{qzinfo.LOCALIZE_PS_NAME}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="签证居留许可事由">签证居留许可事由：</span>
                <span class="input-input detailinput">  {{qzinfo.LOCALIZE_REASON_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">制证单位：</span>
                <span class="input-input detailinput">  {{qzinfo.MAKE_VISA_ORG_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">备注：</span>
                <span class="input-input detailinput">  {{qzinfo.MEMO}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">中文姓名：</span>
                <span class="input-input detailinput">  {{qzinfo.NAMECH}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="英文名">英文名：</span>
                <span class="input-input detailinput">  {{qzinfo.FIRSTNAMEEN}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">英文姓：</span>
                <span class="input-input detailinput">  {{qzinfo.SURNAMEEN}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">英文姓名：</span>
                <span class="input-input detailinput">  {{qzinfo.NAMEEN}}</span>
              </el-col>

              <el-col :span="8" class="input-item">
                <span class="input-text" title="国家/地区">国家/地区：</span>
                <span class="input-input detailinput">  {{qzinfo.NATIONALITY_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="原签证/居留许可号码">原签证/居留许可号码：</span>
                <span class="input-input detailinput">  {{qzinfo.ORIGIN_PAPER_NO}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="原签证/居留许可种类">原签证/居留许可种类：</span>
                <span class="input-input detailinput">  {{qzinfo.ORIGIN_PAPER_TYPE_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="证件有效期">证件有效期：</span>
                <span class="input-input detailinput">  {{qzinfo.PAPER_EXPIRED_DAY}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="证件号码">证件号码：</span>
                <span class="input-input detailinput">  {{qzinfo.PAPERNO}}</span>
              </el-col>

              <el-col :span="8" class="input-item">
                <span class="input-text">证件种类：</span>
                <span class="input-input detailinput">  {{qzinfo.PAPER_TYPE_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="人员编号">人员编号：</span>
                <span class="input-input detailinput">  {{qzinfo.PERSONNEL_ID}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="偕行人数">偕行人数：</span>
                <span class="input-input detailinput">  {{qzinfo.QTY_OF_PARTY}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="申请事由">申请事由：</span>
                <span class="input-input detailinput">  {{qzinfo.REQ_REASON_DESC}}</span>
              </el-col>
              <el-col :span="16" class="input-item">
                <span class="input-text" title="拼接的查询条件" style="width:11%!important">拼接的查询条件：</span>
                <span class="input-input detailinput" style="width:80%!important">  {{qzinfo.QUERY_STR}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="团队人数">团队人数：</span>
                <span class="input-input detailinput">  {{qzinfo.TEAM_NUM}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="签证签发日期">签证签发日期：</span>
                <span class="input-input detailinput">  {{qzinfo.VISA_ASSIGN_DAY}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="签证签发单位">签证签发单位：</span>
                <span class="input-input detailinput">  {{qzinfo.VISA_ASSIGNMENT_ORG_DESC}}</span>
              </el-col>

              <el-col :span="8" class="input-item">
                <span class="input-text" title="签证有效期">签证有效期：</span>
                <span class="input-input detailinput">  {{qzinfo.VISA_AVAILABLE_PERIOD_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="签证有效次数">签证有效次数：</span>
                <span class="input-input detailinput">  {{qzinfo.VISA_AVAILABLE_TIME_DESC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text" title="签证有效期截止日期">签证有效期截止日期：</span>
                <span class="input-input detailinput">  {{qzinfo.VISA_EXPIRED_DAY}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">签证号码：</span>
                <span class="input-input detailinput">  {{qzinfo.VISA_NO}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">团队号：</span>
                <span class="input-input detailinput">  {{qzinfo.VISA_TEAM_NO}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">签证种类：</span>
                <span class="input-input detailinput">  {{qzinfo.VISA_TYPE_DESC}}</span>
              </el-col>
          </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="qzDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      CurrentPage2: 1,
      pageSize2: 10,
      TotalResult2: 0,
      CurrentPage3: 1,
      pageSize3: 10,
      TotalResult3: 0,
      pd: {SCSJ_DateRange:{begin:'',end:''}},
      pd0:{SCSJ_DateRange:{begin:'',end:''}},
      options: this.pl.ps,
      tableData: [],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',

      crjDialogVisible:false,
      tableData1:[],
      crjinfo:{},
      crjshow:false,

      lzDialogVisible:false,
      tableData2:[],
      lzinfo:{},
      lzshow:false,

      qzDialogVisible:false,
      tableData3:[],
      qzinfo:{},
      qzshow:false,

      dwdata:[],
      dwList:{},

    }
  },
  activated(){
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  mounted() {
    this.Global.indexstate=1;
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.userName=this.$store.state.uname;
    this.userCode=this.$store.state.uid;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.getDw();
  },
  methods: {
    getDw(){
      this.$api.post(this.Global.aport4+'/SWDW_SJSBController/getAllDW',{},
        r =>{
          if(r.success){
            this.dwList = r.data.resultList;
            this.userFilter();
          }
        })
    },
    userFilter(query = '') {
             let arr = this.dwList.filter((item) => {
              if(item.DWZWMC!=undefined){
                  return item.DWZWMC.includes(query)
               }
             })
             if (arr.length > 50) {
               this.dwdata = arr.slice(0, 50)
             } else {
               this.dwdata= arr
             }
           },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    pageSizeChange2(val) {//临住
      this.pageSize2=val;
    },
    handleCurrentChange2(val) {
      this.CurrentPage2=val;
    },
    pageSizeChange3(val) {//临住
      this.pageSize3=val;
    },
    handleCurrentChange3(val) {
      this.CurrentPage3=val;
    },
    getList(currentPage, showCount, pd) {
      this.pd0.SCSJ_DateRange.begin==''?this.pd.SCSJ_DateRange.begin='':this.pd0.SCSJ_DateRange.begin==null?this.pd.SCSJ_DateRange.begin=null:this.pd.SCSJ_DateRange.begin=this.pd0.SCSJ_DateRange.begin+'000000';
      this.pd0.SCSJ_DateRange.end==''?this.pd.SCSJ_DateRange.end='':this.pd0.SCSJ_DateRange.end==null?this.pd.SCSJ_DateRange.end=null:this.pd.SCSJ_DateRange.end=this.pd0.SCSJ_DateRange.end+'000000';
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "userCode":this.userCode,
	      "userName":this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      this.$api.post(this.Global.aport3+'/lxslqwbd/getlxslqwbd', p,
        r => {
          if(r.success){
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
          }
        })
    },
    getCrj(n){
      this.crjshow = false;
      let p={
        "pd":{
          "GJDQDM":n.GJDQDM,
          "HZHM":n.HZHM
        },
        "userCode":this.userCode,
        "userName":this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      }
      this.$api.post(this.Global.aport3+'/lxslqwbd/getlxslrwbdcrjjl',p,
      r =>{
        if(r.success){
          this.tableData1 = r.data.resultList;
          this.crjDialogVisible=true;
        }
      })
    },
    //出入境详情
    detailscrj(n){
        this.crjinfo=n;
        this.crjshow=true;
    },
    getLz(n){
      this.lzshow = false;
      let p={
        "pd":{
          "GJDQDM":n.GJDQDM,
          "HZHM":n.HZHM
        },
        "userCode":this.userCode,
        "userName":this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      }
      this.$api.post(this.Global.aport3+'/lxslqwbd/getlxslrwbdlzxx',p,
      r =>{
        if(r.success){
          this.tableData2 = r.data.resultList;
          this.TotalResult2 = r.data.totalResult;
          this.lzDialogVisible=true;
        }
      })
    },
    detailslz(n){
      this.lzinfo=n;
      this.lzshow=true;
    },
    getQz(n){
      this.qzshow = false;
      let p={
        "pd":{
          "GJDQDM":n.GJDQDM,
          "HZHM":n.HZHM
        },
        "userCode":this.userCode,
        "userName":this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      }
      this.$api.post(this.Global.aport3+'/lxslqwbd/getlxslrwbdqzxx',p,
      r =>{
        if(r.success){
          this.tableData3 = r.data.resultList;
          this.TotalResult3 = r.data.totalResult;
          this.qzDialogVisible=true;
        }
      })
    },
    detailsqz(n){
      this.qzinfo=n;
      this.qzshow=true;
    },
  }
}
</script>
<style scoped>

</style>
