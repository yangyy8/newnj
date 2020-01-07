<template lang="html">
  <!-- 留學生信息管理預警详情 -->
  <div class="yymain tshu">
    <div class="yycontent">
      <div class="mb-15">
        <div class="yylbt mb-15 hyst">基本信息</div>
        <div class="hybutton">
        <el-button type="button"  class="el-button el-button--primary el-button--small"  title="人员档案" @click="$router.push({name:'RYHX_XQ',query:{zjhm:$route.query.row.ZJHM,gjdq:$route.query.row.GJ,row:$route.query.row}})">人员档案</el-button>
        </div>
        <el-row type="flex" class="yyf">
          <el-col :span="24" class="stu-left">
            <el-row  class="stu-row tt-bb">
              <el-col :span="6" class="stu-col-row slh">
                <el-tooltip placement="top">
                  <div slot="content">
                    <label  v-if="baseData.YWXM!=undefined && baseData.ZWXM!=undefined">{{baseData.YWXM}}({{baseData.ZWXM}})</label>
                    <label  v-else-if="baseData.ZWXM!=undefined">{{baseData.ZWXM}}</label>
                    <label  v-else>{{baseData.YWXM}}</label>
                  </div>
                  <span class="texth">姓名：
                     <label  v-if="baseData.YWXM!=undefined && baseData.ZWXM!=undefined">{{baseData.YWXM}}({{baseData.ZWXM}})</label>
                     <label  v-else-if="baseData.ZWXM!=undefined">{{baseData.ZWXM}}</label>
                     <label  v-else>{{baseData.YWXM}}</label>
                   </span>
                </el-tooltip>

              </el-col>
              <el-col :span="6" class="stu-col-row">
                <span>性别：{{baseData.XB_DESC}}</span>

              </el-col>
              <el-col :span="6" class="stu-col-row">
                <span title="国家/地区">国家/地区：{{baseData.GJDQ_DESC}}</span>

              </el-col>
              <el-col :span="6" class="stu-col-row">
                <span title="证件种类">证件种类：{{baseData.ZJZL_DESC}}</span>

              </el-col>
            </el-row>
            <el-row class="stu-row tt-bb">
              <el-col :span="6" class="stu-col-row">
                <span title="证件有效期">证件有效期：</span>
                   {{baseData.ZJYXQ}}
              </el-col>
              <el-col :span="6" class="stu-col-row">
                <span>证件号码：</span>
                   {{baseData.ZJHM}}
              </el-col>
              <el-col :span="6" class="stu-col-row">
                <span>签证种类：</span>
                   {{baseData.QZZL_DESC}}
              </el-col>
              <el-col :span="6" class="stu-col-row">
                <span>签证号码：</span>
                   {{baseData.QZHM}}
              </el-col>
            </el-row>
            <el-row class="stu-row tt-bb">
              <el-col :span="6" class="stu-col-row">
                <span>预警时间：</span>
                  {{baseData.BJSJ}}
              </el-col>
              <el-col :span="6" class="stu-col-row">
                <span>出生日期：</span>
                  {{baseData.CSRQ}}
              </el-col>
                </el-row>

            <!-- <el-row  :gutter="4">
              <el-col :span="6" class="stu-col-row2">
                <span>预警时间：</span>
                  {{baseData.BJSJ}}
              </el-col>

            </el-row> -->
          </el-col>
          <!-- <el-col :span="4" class="stu-right">
            <el-button type="primary" size="small" @click="$router.push({name:'StuBaseInfo',query:{id:'11',AlarmType:'11'}})">详情</el-button>
          </el-col> -->
        </el-row>

      </div>
       <div class="yylbt yt-16 mb-15">预警原因 <span class="yyf ycolor">{{baseData.ZBXDATADESC}}</span></div>
      <!--yjType 1.外国人visa  2.持短期签证  4.违临预判  5.临住布控  20.公务护照预警  3.处罚人员未办证预警-->
      <!-- <div class="yylbt yt-16">预警原因 <span class="yyf ycolor">出入境过多，签证过期</span></div> -->
      <!-- 1  签证信息详情  2 出入境信息   3 境外人员住宿登记信息  4 境外人员常住信息  5 案事件信息-->
      <div class="mb-15" v-if="yjType==3">
        <div class="stru-lal">案事件信息</div>
        <el-table
             :data="asjData"
             border
             style="width: 100%" class="stu-table"
             >
             <el-table-column
               prop="ASJBH"
               label="案事件编号">
             </el-table-column>
             <el-table-column
               prop="AJMC"
               label="案件名称">
             </el-table-column>
             <el-table-column
               prop="AJLB"
               label="案件类别">
             </el-table-column>
             <el-table-column
               prop="AJZT"
               label="案件状态">
             </el-table-column>
             <el-table-column
               prop="FXSJ"
               label="发现时间">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,6)"></el-button>
               </template>
             </el-table-column>
         </el-table>
         <div class="middle-foot mt-10">
            <div class="page-msg">
              <div class="">
            共{{asjTotalResult}}条记录
              </div>
              <div class="">
                每页显示
                <el-select v-model="asjpageSize" @change="asjpageSizeChange(asjpageSize)" placeholder="10" size="mini" class="page-select">
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
                共{{Math.ceil(asjTotalResult/asjpageSize)}}页
              </div>
            </div>
            <el-pagination
              background
              @current-change="asjhandleCurrentChange"
              :page-size="asjpageSize"
              layout="prev, pager, next"
              :total="asjTotalResult"
              :current-page.sync="asjCurrentPage">
            </el-pagination>
          </div>
      </div>
      <div class="mb-15" v-if="yjType==1||yjType==2||yjType==5||yjType==3">
        <div class="stru-lal">签证信息</div>
        <el-table
           :data="tableData1"
           border
           style="width: 100%" class="stu-table">
           <el-table-column
             prop="QZZL_DESC"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="QZHM"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="QZYXQZ"
             label="签证有效期至">
           </el-table-column>
           <el-table-column
             prop="QFJG_DESC"
             label="签发地">
           </el-table-column>
           <el-table-column
             label="操作" width="80">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,1)"></el-button>
             </template>
           </el-table-column>
         </el-table>
         <div class="middle-foot mt-10">
            <div class="page-msg">
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
              :page-size="pageSize1"
              layout="prev, pager, next"
              :total="TotalResult1"
              :current-page.sync ="CurrentPage1">
            </el-pagination>
          </div>
      </div>
      <div class="mb-15" v-if="yjType==1||yjType==2||yjType==4||yjType==5||yjType==20||yjType==3">
        <div class="stru-lal">出入境信息</div>
        <el-table
             :data="tableData2"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="IOSTRING"
               label="出入境日期">
             </el-table-column>
             <el-table-column
               prop="CRJBS_DESC"
               label="出入境状态">
             </el-table-column>
             <el-table-column
               prop="IOPORT_DESC"
               label="出入境口岸">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,2)"></el-button>
               </template>
             </el-table-column>
         </el-table>
         <div class="middle-foot mt-10">
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
              :page-size="pageSize2"
              layout="prev, pager, next"
              :total="TotalResult2"
              :current-page.sync ="CurrentPage2">
            </el-pagination>
          </div>
      </div>
      <div class="mb-15" v-if="yjType==1||yjType==4||yjType==5||yjType==2||yjType==20">
        <div class="stru-lal">临住信息</div>
        <el-table
             :data="tableData3"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="ZSRQ"
               label="住宿时间">
             </el-table-column>
             <el-table-column
               prop="LSDWDZ"
               label="住宿地址">
             </el-table-column>
             <!-- <el-table-column
               prop="NLKRQ"
               label="拟离开时间">
             </el-table-column>
             <el-table-column
               prop="ZFZL_DESC"
               label="住宿类型">
             </el-table-column> -->
             <el-table-column
               prop="DJDWMC"
               label="登记单位">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,3)"></el-button>
               </template>
             </el-table-column>
         </el-table>
         <div class="middle-foot mt-10">
            <div class="page-msg">
              <div class="">
            共{{TotalResult3}}条记录
              </div>
              <div class="">
                每页显示
                <el-select v-model="pageSize3" @change="pageSizeChange3(pageSize3)" placeholder="10" size="mini" class="page-select">
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
              :page-size="pageSize3"
              layout="prev, pager, next"
              :total="TotalResult3"
              :current-page.sync ="CurrentPage3">
            </el-pagination>
          </div>
      </div>
      <div class="mb-15" v-if="yjType==1||yjType==3">
        <div class="stru-lal">常住信息</div>
        <el-table
             :data="tableData4"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="SFDM_DESC"
               label="身份">
             </el-table-column>
             <el-table-column
               prop="FWCS"
               label="服务处所">
             </el-table-column>
             <el-table-column
               label="签证有效期">
               <template slot-scope="scope">
                 <span>{{scope.row.SSCS=='3201'?scope.row.TLYXQ:scope.row.QZYXQ}}</span>
               </template>
             </el-table-column>
             <el-table-column
               prop="SSPCS_DESC"
               label="所属单位">
             </el-table-column>
             <el-table-column
               prop="XXDZ"
               label="居住地址">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,4)"></el-button>
               </template>
             </el-table-column>
         </el-table>
         <div class="middle-foot mt-10">
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
              :page-size="pageSize4"
              layout="prev, pager, next"
              :total="TotalResult4"
              :current-page.sync ="CurrentPage4">
            </el-pagination>
          </div>
      </div>
      <div class="mb-15" v-if="yjType==10">
        <div class="stru-lal">非法就业信息</div>
        <el-table
             :data="tableData5"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="date"
               label="人员编号">
             </el-table-column>
             <el-table-column
               prop="name"
               label="案事件编号">
             </el-table-column>
             <el-table-column
               prop="address"
               label="案件类别">
             </el-table-column>
             <el-table-column
               prop="address"
               label="案件状态">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
               </template>
             </el-table-column>
         </el-table>
         <div class="middle-foot mt-10">
            <div class="page-msg">
              <div class="">
            共{{TotalResult5}}条记录
              </div>
              <div class="">
                每页显示
                <el-select v-model="pageSize5" @change="pageSizeChange5(pageSize5)" placeholder="10" size="mini" class="page-select">
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
                共{{Math.ceil(TotalResult5/pageSize5)}}页
              </div>
            </div>
            <el-pagination
              background
              @current-change="handleCurrentChange1"
              :page-size="pageSize5"
              layout="prev, pager, next"
              :total="TotalResult5"
              :current-page.sync ="CurrentPage5">
            </el-pagination>
          </div>
      </div>
      <div class="mb-15" v-if="yjType==2||yjType==4||yjType==5">
      <el-collapse  accordion>
       <el-collapse-item >
         <template slot="title">
          <div class="stru-lal">交通信息<span style="color:red;font-size:11px;"> ( 点击查看列表 )</span></div>
         </template>
        <div class="stru-lal">
         民航进出港订票信息
        </div>
        <el-table
            :data="tableData60"
            border
            style="width: 100%" class="stu-table">
            <el-table-column
              prop="AIR_SEG_FLT_NBR"
              label="航班号">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_DPT_DT_LCL"
              label="当地出发日期">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_DPT_TM_LCL"
              label="当地出发时间">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_ARRV_DT_LCL"
              label="当地到达日期">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_ARRV_TM_LCL"
              label="当地到达时间">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_DPT_AIRPT_CD"
              label="登机机场代码">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_ARRV_AIRPT_CD"
              label="到达机场代码">
            </el-table-column>
            <el-table-column
              prop="PAS_CHN_NM"
              label="旅客中文名">
            </el-table-column>
            <!-- <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column> -->
        </el-table>
        <div class="stru-lal">
         民航进出港信息
        </div>
        <el-table
            :data="tableData61"
            border
            style="width: 100%" class="stu-table">
            <el-table-column
              prop="FLT_NUMBER"
              label="航班号">
            </el-table-column>
            <el-table-column
              prop="FLT_DATE"
              label="航班日期">
            </el-table-column>
            <el-table-column
              prop="SEG_DEPT_CODE"
              label="起飞航站">
            </el-table-column>
            <el-table-column
              prop="SEG_DEST_CODE"
              label="到达航站">
            </el-table-column>
            <el-table-column
              prop="PDT_FIRSTNAME"
              label="旅客名">
            </el-table-column>
            </el-table-column>
            <!-- <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column> -->
        </el-table>
        <div class="stru-lal">
          高速公路出口信息
        </div>
        <el-table
             :data="tableData64"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="EXITSTATION"
               label="出口站编号">
             </el-table-column>
             <el-table-column
               prop="EXITTIME"
               label="出口日期及时间">
             </el-table-column>
             <el-table-column
               prop="VEHICLECLASS"
               label="车型">
             </el-table-column>
             <el-table-column
               prop="VEHICLEKIND"
               label="车种">
             </el-table-column>
             <el-table-column
               prop="AUTOLICENSE"
               label="牌照">
             </el-table-column>
             <!-- <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
               </template>
             </el-table-column> -->
         </el-table>
        <div class="stru-lal">
         高速公路入口信息
        </div>
        <el-table
           :data="tableData63"
           border
           style="width: 100%" class="stu-table">
           <el-table-column
             prop="ENTRYSTATION"
             label="入口站编号">
           </el-table-column>
           <el-table-column
             prop="ENTRYTIME"
             label="入口日期及时间">
           </el-table-column>
           <el-table-column
             prop="VEHICLECLASS"
             label="车型">
           </el-table-column>
           <el-table-column
             prop="VEHICLEKIND"
             label="车种">
           </el-table-column>
           <el-table-column
             prop="AUTOLICENSE"
             label="牌照">
           </el-table-column>
           <!-- <el-table-column
             label="操作" width="80">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
             </template>
           </el-table-column> -->
        </el-table>

        <div class="stru-lal">
         铁路订票信息
        </div>
        <el-table
            :data="tableData62"
            border
            style="width: 100%" class="stu-table">
            <el-table-column
              prop="XM"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="ZJHM"
              label="证件号码">
            </el-table-column>
            <el-table-column
              prop="TRAIN_NO"
              label="列车车次">
            </el-table-column>
            <el-table-column
              prop="STARTTIME"
              label="发车时间">
            </el-table-column>
            <el-table-column
              prop="FROM_STATION"
              label="发车车站">
            </el-table-column>
            <!-- <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column> -->
        </el-table>

      </el-collapse-item>
    </el-collapse>
      </div>
    </div>
    <!-- 分局级别是2并且是未处理状态   展示派出所详情和分局意见输入框-->
   <div class="stu-footer" v-if="jb=='2' && showFJ">
     <!-- <div class="stu-title">处理结果：{{pd.CLJG}}</div> -->
     <div class="stu-title">支队处理意见：{{pd.ZDYJ_DESC}}</div>
     <div class="stu-title">支队处理详情：{{pd.CLXQ}}</div>
     <div class="stu-title">分局调查意见</div>
     <el-row type="flex" class="mb-15">
      <el-col :span="20">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 3}"
          placeholder="分局调查意见必须填写原因(不超过100个字符)"
          v-model="pd.FJYJ">
        </el-input>
      </el-col>
      <el-col :span="4"  class="down-btn-area">
        <el-button type="primary" class="mb-5" size="small" @click="chuli()">确定</el-button>
        <!-- <el-button type="warning" class="m0" size="small" @click="$router.go(-1)">返回</el-button> -->
      </el-col>
    </el-row>
    <div class="czfont">
      处理人: {{FJCLR==''?$store.state.uname:FJCLR}}
    </div>
   </div>
   <!-- 分局级别是2且是已处理状态  展示两个详情 -->
   <div class="stu-footer" v-if="jb=='2' && !showFJ">
     <!-- <div class="stu-title">处理结果：{{pd.CLJG}}</div> -->
     <div class="stu-title">支队处理意见：{{pd.ZDYJ_DESC}}</div>
     <div class="stu-title">支队处理详情：{{pd.CLXQ}}</div>
     <div class="stu-title">分局调查意见：{{pd.FJYJ}}</div>
     <div class="czfont" v-if="FJCLR!=''">
       处理人: {{FJCLR==''?$store.state.uname:FJCLR}}
     </div>
   </div>

   <!-- 市局和支队级别是1 且是未处理状态 展示分局和派出所意见详情 支队处理意见输入框 -->
   <div class="stu-footer" v-if="(org=='320100060000'||jb=='1') && showZD">
     <div class="stu-title">分局调查意见：{{pd.FJYJ}}</div>
     <!-- <div class="stu-title">处理结果：{{pd.CLJG}}</div> -->
     <div class="stu-title">支队处理意见</div>
     <el-row  class="mb-15">
         <el-col :span="20" style="">
           <span  style="text-align:left;font-size:12px;">处理意见：</span>
           <el-select v-model="pd.ZDYJ" placeholder="请选择"  filterable clearable default-first-option   size="small" :disabled="showXF" @change="isXF(pd.ZDYJ)">
             <el-option v-for="item in $store.state.yjcl2"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
             </el-option>
           </el-select>
         </el-col>
     </el-row>
     <el-row  class="mb-15">
      <el-col :span="20">

        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 3}"
          placeholder="处理详情必须填写原因(不超过100个字符)"
          v-model="pd.CLXQ"
          @input="isXF(pd.CLXQ)"
          :disabled="showXF">
        </el-input>
      </el-col>
      <el-col :span="4"  class="down-btn-area">
        <el-button type="warning" class="mb-5" size="small" @click="release()" v-if="!showXF" :disabled="isXf" style="width:78px">下发分局</el-button>
        <el-button type="warning" class="mb-5" size="small" @click="release()" :disabled="showXF" v-if="showXF" style="width:78px;margin-left:0px">已下发</el-button>
        <el-button type="primary" class="mb-5" size="small" @click="chuli()" :disabled="showXF" style="width:78px;margin-left:0px">确定</el-button>
      </el-col>
    </el-row>
    <div class="czfont">
      处理人: {{ZDCLR==''?$store.state.uname:ZDCLR}}
    </div>
   </div>
   <!-- 市局和支队 已处理状态 展示三个详情 -->
   <div class="stu-footer" v-if="(org=='320100060000'||jb=='1') && !showZD">
     <div class="stu-title">支队处理意见：{{pd.ZDYJ_DESC}}</div>
     <div class="stu-title">支队处理详情：{{pd.CLXQ}}</div>
     <div class="stu-title">分局调查意见：{{pd.FJYJ}}</div>
     <!-- <div class="stu-title">处理结果：{{pd.CLJG}}</div> -->
     <div class="czfont">
       处理人: {{ZDCLR==''?$store.state.uname:ZDCLR}}
     </div>
   </div>

   <!-- 派出所级别是3 且是未处理状态 展示处理结果输入框 -->
   <!-- <div class="stu-footer" v-if="jb=='3' && showPCS">
     <div class="stu-title">处理结果</div>
     <el-row type="flex" class="mb-15">

      <el-col :span="20">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 3}"
          placeholder="处理必须填写原因(不超过100个字符)"
          v-model="pd.CLJG">
        </el-input>
      </el-col>
      <el-col :span="4"  class="down-btn-area">
        <el-button type="primary" class="mb-5" size="small" @click="chuli()">确定</el-button>
      </el-col>
    </el-row>
    <div class="czfont">
      处理人: {{FJCLR==''?$store.state.uname:FJCLR}}
    </div>
   </div> -->
   <!-- 派出所级别是3 且是已处理状态 展示处理结果详情 -->
   <!-- <div class="stu-footer" v-if="jb=='3' && !showPCS">
     <div class="stu-title">处理结果：{{pd.CLJG}}</div>
     <div c lass="czfont">
       处理人: {{FJCLR==''?$store.state.uname:FJCLR}}
     </div>
   </div> -->

   <!-- 签证信息 -->
     <el-dialog
         title="签证信息详情"
         :visible.sync="QZDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
         <QZ :xid="xid" :random="new Date().getTime()"></QZ>
         <div slot="footer" class="dialog-footer">
           <el-button @click="QZDialogVisible = false" size="small">取 消</el-button>
         </div>
     </el-dialog>

    <el-dialog title="出入境信息详情" :visible.sync="CRJDialogVisible"  custom-class="big_dialog combine" :append-to-body="true" :modal="false">
                <CRJXX :type="type" :xid="xid" :random="(new Date()).getTime()"></CRJXX>
                 <div slot="footer" class="dialog-footer">
                   <el-button @click="CRJDialogVisible = false" size="small">取 消</el-button>
                 </div>
    </el-dialog>

    <!-- 临住信息详情 -->

      <el-dialog title="临住信息详情" :visible.sync="LZDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
        <LZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()"></LZXX>
        <div slot="footer" class="dialog-footer">
          <el-button @click="LZDialogVisible = false" size="small">取 消</el-button>
        </div>
      </el-dialog>

      <!-- 境外人员常住信息 -->
        <!-- <el-dialog
                title="境外人员常住信息详情"
                :visible.sync="CZDialogVisible">
                <el-form   ref="czinfo">
                  <el-row :gutter="2"  class="mb-6">
                      <el-col :span="12" class="input-item">
                       <span class="input-text">英文名：</span>
                       <span class="input-input detailinput">  {{czinfo.YWM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">英文姓：</span>
                        <span class="input-input detailinput">  {{czinfo.YWX}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                       <span class="input-text">英文姓名：</span>
                       <span class="input-input detailinput">  {{czinfo.YWXM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                       <span class="input-text">出生日期：</span>
                       <span class="input-input detailinput">  {{czinfo.CSRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">中文姓名：</span>
                        <span class="input-input detailinput">  {{czinfo.ZWXM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">性别：</span>
                        <span class="input-input detailinput">  {{czinfo.XB}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">证件种类：</span>
                        <span class="input-input detailinput">  {{czinfo.ZJZL}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">证件号码：</span>
                        <span class="input-input detailinput">  {{czinfo.ZJHM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">证件有效期至：</span>
                        <span class="input-input detailinput">  {{czinfo.YXQZ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">停留有效期：</span>
                        <span class="input-input detailinput">  {{czinfo.TLYXQZ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">国家地区：</span>
                        <span class="input-input detailinput">  {{czinfo.GJDQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">身份证号：</span>
                        <span class="input-input detailinput">  {{czinfo.FZSFZH}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">签证种类：</span>
                        <span class="input-input detailinput">  {{czinfo.QZZL}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">签证(注)号码：</span>
                        <span class="input-input detailinput">  {{czinfo.QZHM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">签证(注)签发日期：</span>
                        <span class="input-input detailinput">  {{czinfo.QFRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">签发地：</span>
                        <span class="input-input detailinput">  {{czinfo.QFD}}</span>
                      </el-col>

                      <el-col :span="12" class="input-item">
                        <span class="input-text">入境日期：</span>
                        <span class="input-input detailinput">  {{czinfo.RJRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">入境口岸：</span>
                        <span class="input-input detailinput">  {{czinfo.RJKA}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">标准化地址名称：</span>
                        <span class="input-input detailinput">  {{czinfo.BZHDZMC}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">房号：</span>
                        <span class="input-input detailinput">  {{czinfo.FH}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">留宿单位(户主)姓名：</span>
                        <span class="input-input detailinput">  {{czinfo.LSDW}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">留宿单位(户主)电话：</span>
                        <span class="input-input detailinput">  {{czinfo.LSDWDH}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">与境外人员关系：</span>
                        <span class="input-input detailinput">  {{czinfo.QSGX}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">留宿单位(户主)地址：</span>
                        <span class="input-input detailinput">  {{czinfo.LSDWDZ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">何处来：</span>
                        <span class="input-input detailinput">  {{czinfo.LYD}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">前往地区：</span>
                        <span class="input-input detailinput">  {{czinfo.QWD}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">拟离开日期：</span>
                        <span class="input-input detailinput">  {{czinfo.NLKRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">录入人：</span>
                        <span class="input-input detailinput">  {{czinfo.LRR}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">录入日期：</span>
                        <span class="input-input detailinput">  {{czinfo.LRRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">录入单位：</span>
                        <span class="input-input detailinput">  {{czinfo.LRDW}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">修改人：</span>
                        <span class="input-input detailinput">  {{czinfo.GXR}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">修改时间：</span>
                        <span class="input-input detailinput">  {{czinfo.GXSJ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">修改单位：</span>
                        <span class="input-input detailinput">  {{czinfo.GXDW}}</span>
                      </el-col>
                  </el-row>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="CZDialogVisible = false" size="small">取 消</el-button>
                </div>
        </el-dialog> -->
        <el-dialog title="常住信息详情" :visible.sync="CZDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
          <CZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()" :row="allData"></CZXX>
          <div slot="footer" class="dialog-footer">
            <el-button @click="CZDialogVisible = false" size="small">取 消</el-button>
          </div>
        </el-dialog>

        <el-dialog title="案事件信息详情" :visible.sync="asjDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
          <ANSJ :type="type" :xid="xid" :dtid="dtid" :random="(new Date()).getTime()"></ANSJ>
          <div slot="footer" class="dialog-footer">
            <el-button @click="asjDialogVisible = false" size="small">取 消</el-button>
          </div>
        </el-dialog>
  </div>

</template>
<script>
import LZXX from '../common/lzxx_xq'
import CZXX from '../common/czxx_xq'
import CRJXX from '../common/crjxx_xq'
import QZ from '../common/qz_xq'
import ANSJ from '../common/ansj_xq'
export default {
  components:{LZXX,CZXX,CRJXX,QZ,ANSJ},
  data() {
    return {
      rybh:'',
      dtid:'',
      yjType: 0,
      baseData: {},
      baseDatazj: {},
      baseDataqz: {},
      baseDatayj: {},
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5: [],
      tableData6: [],
      tableData60:[],
      tableData61:[],
      tableData62:[],
      tableData63:[],
      tableData64:[],
      type:1,
      xid:'',
      pd: {},
      pcl:{},
      cdt: {},
      QZDialogVisible: false,
      qzinfo: {},
      CRJDialogVisible: false,
      crjinfo: {},
      LZDialogVisible: false,
      lzinfo: {},
      CZDialogVisible: false,
      czinfo: {},
      asjDialogVisible:false,
      row:{},
      pd:{
        CLJG:'',
        FJYJ:'',
        ZDYJ:'',
      },
      type:1,
      xid:'',
      allData:{},
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,

      CurrentPage2: 1,
      pageSize2: 10,
      TotalResult2: 0,

      CurrentPage3: 1,
      pageSize3: 10,
      TotalResult3: 0,

      CurrentPage4: 1,
      pageSize4: 10,
      TotalResult4: 0,

      CurrentPage5: 1,
      pageSize5: 10,
      TotalResult5: 0,

      asjData:[],
      asjCurrentPage: 1,
      asjpageSize: 10,
      asjTotalResult: 0,

      options: this.pl.ps,
      url0:this.Global.aport4 + '/warningInfoController/getEntityByYJID',//人员基本信息
      url1:this.Global.aport4 + '/eS_FNVISASController/getResultListByParams',//签证信息
      url2:this.Global.aport4 + '/eS_CRJJLBController/getResultListByParams',//出入境信息
      url3:this.Global.aport4 + '/eS_LZ_LZXXController/getResultListByParams',////临住信息
      url4:this.Global.aport3 + '/ryhx/getczryjbxx',//常住信息
      url5:this.Global.aport4 + '/illegalEmploymentWarningController/getInfoByRybh',//非法就业
      url6:this.Global.aport4 + '/eS_AJ_GroupController/getAnJianInfoByRYBH',//案事件

      url61:this.Global.aport4 + '/eS_JT_MH_JGDPXX_NController/getResultListByParams',//民航进出港订票信息
      url62:this.Global.aport4 + '/eS_JT_MH_JGXX_NController/getResultListByParams',//民航进出港信息
      url63:this.Global.aport4 + '/eS_JT_TL_DPXXController/getResultListByParams',//铁路订票信息
      url64:this.Global.aport4 + '/eS_ST_GSGL_CKXXController/getResultListByParams',//高速公路出口信息
      url65:this.Global.aport4 + '/eS_ST_GSGL_RKXXController/getResultListByParams',//高速公路入口信息

      url10:this.Global.aport4 + '/illegalEmploymentWarningController/getYuJingXinXiByRybh',//预警信息
      jb:1,
      org:'320100060000',

      showZD:true,
      showXF:false,
      showFJ:true,
      showPCS:true,
      isXf:false,

      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',
      withname:this.$store.state.uname,
      FJCLR:'',//分局处理人
      ZDCLR:'',//支队处理人
    }
  },
  activated() {
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;

    this.getJB();
    this.CurrentPage1=1;//临住信息
    this.CurrentPage2=1;//临住信息
    this.CurrentPage3=1;//临住信息
    this.CurrentPage4=1;//临住信息
    this.CurrentPage5=1;//临住信息
    this.asjCurrentPage=1;
    this.yjType = this.$route.query.yjType;
    this.row = this.$route.query.row;
    this.org=this.$store.state.orgid;
    console.log(this.row,this.row.FJCLR,this.row.ZDCLR);
    this.FJCLR=this.row.FJCLR==undefined?'':this.row.FJCLR;
    this.ZDCLR=this.row.ZDCLR==undefined?'':this.row.ZDCLR;
    //支队  详情展示支队 分局 派出所意见
    this.showZD=true;
    this.showXF=false;//下发分局
    this.pd.CLJG='';
    this.pd.FJYJ='';
    this.pd.ZDYJ='';
   //支队已处理  展示分局和支队意见  按钮隐藏
    if(this.row!=undefined && (this.row.CLZT=='0')){
      this.showZD=false;//已处理
      this.pd.ZDYJ_DESC=this.row.ZDYJ_DESC;
      this.pd.CLXQ=this.row.CLXQ;
      this.pd.FJYJ=this.row.FJYJ;
      this.pd.CLJG=this.row.CLJG;
    }else if(this.row!=undefined && (this.row.CLZT=='2')){//支队已下发
      this.showZD=true;//需要支队处理
      this.showXF=true;//下发分局,且支队不可填写意见
    }
    //分局  详情展示分局和派出所意见
    this.showFJ=true;
    if(this.row!=undefined && (this.row.CLZT=='0'||this.row.FJCLZT=='3')){//支队已处理||分局已上报
      this.showFJ=false;//无需填写意见
      this.$set(this.pd,'FJYJ',this.row.FJYJ);
      this.$set(this.pd,'CLJG',this.row.CLJG);
    }
    //派出所
    this.showPCS=true;
    if(this.row!=undefined && (this.row.CLZT=='0'||this.row.FJCLZT=='3')){
      this.showPCS=false;//支队已处理||分局已办结||派出所已办结
      this.pd.CLJG=this.row.CLJG;
    }
      this.getList(1,10,this.url0, 0); //人员基本信息
      if(this.yjType=="1" || this.yjType=="2" || this.yjType=="5"){
        this.getList(this.CurrentPage1,this.pageSize1,this.url1, 1); //签证信息
      }

      if(this.yjType=="1" || this.yjType=="2" || this.yjType=="4" || this.yjType=="5"|| this.yjType=="20"){
      this.getList(this.CurrentPage2,this.pageSize2,this.url2, 2); //出入境信息
      this.getList(1,10,this.url61, 61); //交通信息
      this.getList(1,10,this.url62, 62); //交通信息
      this.getList(1,10,this.url63, 63); //交通信息
      this.getList(1,10,this.url64, 64); //交通信息
      this.getList(1,10,this.url65, 65); //交通信息
      }

      if(this.yjType=="1" || this.yjType=="2" || this.yjType=="4" || this.yjType=="5" || this.yjType=="20"){
      this.getList(this.CurrentPage3,this.pageSize3,this.url3, 3); //临住信息
      }
      if(this.yjType=="1"){
          this.getList(this.CurrentPage4,this.pageSize4,this.url4, 4); //常住信息
      }
      if(this.yjType=="10"){
            // this.getList(this.url10, 10); //预警信息
        this.getList(this.CurrentPage5,this.pageSize5,this.url5, 5); //非法就业
      }
      if(this.yjType==3){
        this.getList(this.asjCurrentPage,this.asjpageSize,this.url6, 6);//案事件
        this.getList(this.CurrentPage2,this.pageSize2,this.url2, 2); //出入境信息
        this.getList(this.CurrentPage4,this.pageSize4,this.url4, 4); //常住信息
        this.getList(this.CurrentPage1,this.pageSize1,this.url1, 1); //签证信息
      }
  },
  mounted() {
   this.$store.dispatch("getYjcl2");
   this.getJB();
  },
  methods: {
    isXF(item){
      if(item!=''){
        this.isXf=true;
      }else{
        this.isXf=false;
      }
    },
    goBackS(){
      if(this.yjType==2){this.$router.push({name:'DQQZFFJYYJ'})}//持短期签证非法就业
      if(this.yjType==1){this.$router.push({name:'WGRFFJLYJ'})}//外国人非法居留预警
      if(this.yjType==20){this.$router.push({name:'GWHZYJ'})}//公务护照预警
      if(this.yjType==3){this.$router.push({name:'CFRYWBZYJ'})}//处罚人员未办证预警
    },
    getJB(){
      let p = {
        "currentPage": 1,
        "showCount": 10,
        "pd": {"DM":this.$store.state.orgid},
      };
      this.$api.post(this.Global.aport4+'/LRDWController/getMCAndJBByDM', p,
        r => {
          this.jb=r.data[0].JB
        })
    },
    asjpageSizeChange(val) {
      this.asjpageSize=val;
      this.getList(this.asjCurrentPage,val,this.url6, 6);
    },
    asjhandleCurrentChange(val) {
      this.asjCurrentPage=val;
      this.getList(val,this.asjpageSize,this.url6, 6);
    },
    pageSizeChange1(val) {
      this.pageSize1=val;
      this.getList(this.CurrentPage1,this.pageSize1,this.url1, 1);
    },
    handleCurrentChange1(val) {
      this.CurrentPage1=val;
      this.getList(this.CurrentPage1,this.pageSize1,this.url1, 1);
    },
    pageSizeChange2(val) {
      this.pageSize2=val;
      this.getList(this.CurrentPage2,this.pageSize2,this.url2, 2);
    },
    handleCurrentChange2(val) {
      this.CurrentPage2=val;
      this.getList(this.CurrentPage2,this.pageSize2,this.url2, 2);
    },
    pageSizeChange3(val) {
      this.pageSize3=val;
      this.getList(this.CurrentPage3,this.pageSize3,this.url3, 3);
    },
    handleCurrentChange3(val) {
      this.CurrentPage3=val;
      this.getList(this.CurrentPage3,this.pageSize3,this.url3, 3);
    },
    pageSizeChange4(val) {
      this.pageSize4=val;
      this.getList(this.CurrentPage4,this.pageSize4,this.url4, 4);
    },
    handleCurrentChange4(val) {
      this.CurrentPage4=val;
      this.getList(this.CurrentPage4,this.pageSize4,this.url4, 4);
    },
    pageSizeChange5(val) {
      this.pageSize5=val;
      this.getList(this.CurrentPage5,this.pageSize5,this.url5, 5);
    },
    handleCurrentChange5(val) {
      this.CurrentPage5=val;
      this.getList(this.CurrentPage5,this.pageSize5,this.url5, 5);
    },
    openTc(title, type, id) {
      this.xtitle = title;
      this.xtype = type;
      this.xid = id;
      this.detailsDialogVisible = true;
    },
    getList(currentPage,showCount, url, type) {

      if(type==0){
        if(this.row.YJID!=undefined){
          this.cdt={};
          this.cdt.YJID=this.row.YJID;
        }else {
          return ;
        }
      }else {
        if(this.row.RYBH!=undefined){
          this.cdt={};
          this.cdt.RYBH = this.row.RYBH;
        }else {
          return ;
        }
      }
      let p = {
        "pd": this.cdt,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      switch (type) {
        case 1:
          p={
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": this.cdt,
            "orderBy": 'QZYXQZ',
            "orderType": 'DESC',
            userCode:this.userCode,
            userName:this.userName,
            orgJB:this.juState,
            orgCode:this.orgCode,
            token:this.token,
          };
          break;
        case 4:
        case 6:
          p={
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": this.cdt,
            userCode:this.userCode,
            userName:this.userName,
            orgJB:this.juState,
            orgCode:this.orgCode,
            token:this.token,
          };
          break;
        case 2:
            p={
              "currentPage": currentPage,
              "showCount": showCount,
              "pd": this.cdt,
              "orderBy":{value:"IOSTRING",dataType:"date"},
              "orderType":"DESC",
              userCode:this.userCode,
              userName:this.userName,
              orgJB:this.juState,
              orgCode:this.orgCode,
              token:this.token,
            };
            break;
        case 3:
          p={
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": this.cdt,
            "orderBy":{value:"ZSRQ",dataType:"date"},
            "orderType":"DESC",
            userCode:this.userCode,
            userName:this.userName,
            orgJB:this.juState,
            orgCode:this.orgCode,
            token:this.token,
          };
          break;
        default:
      }

      this.$api.post(url, p,
        r => {
          if (type == 0) {
            this.baseData = r.data;
          } else if (type == 10) {
            this.baseDatayj = r.data.eS_YJ_BJXXBEntity
          } else if (type == 1) {
            this.tableData1 = r.data.resultList;
            this.TotalResult1=r.data.totalResult;
          } else if (type == 2) {
            this.tableData2 = r.data.resultList;
            this.TotalResult2=r.data.totalResult;
          } else if (type == 3) {
            this.tableData3= r.data.resultList;
            this.TotalResult3=r.data.totalResult;
          } else if (type == 4) {
            this.tableData4 = r.data.resultList;
            this.TotalResult4=r.data.totalResult;
          } else if (type == 5) {
            this.tableData5 = r.data
          } else if (type == 61) {
            this.tableData60=r.data.resultList;
          }
          else if (type == 62) {
           this.tableData61=r.data.resultList;
          }
          else if (type == 63) {
           this.tableData62=r.data.resultList;
          }
          else if (type == 64) {
             this.tableData64=r.data.resultList;
          }
          else if (type == 65) {
           this.tableData63=r.data.resultList;
         }else if(type == 6){
           this.asjData=r.data.resultList;
           this.asjTotalResult=r.data.totalResult;
         }
        })

    },
    getDetails(n, t) {
      switch (t) {
        case 1:
          this.xid=n.RGUID;
          this.QZDialogVisible = true;
          break;
        case 2:
          this.xid=n.RGUID;
          this.type=1;
          this.CRJDialogVisible = true;
          break;
        case 3:
          this.xid=n.DTID;
          this.rybh=n.RYBH;
          this.type=0;
          this.LZDialogVisible = true;
          break;
        case 4:
          this.xid=n.RGUID;
          this.rybh=n.RYBH;
          this.allData=n;
          this.type=1;
          this.CZDialogVisible = true;
          this.czinfo = n;
          break;
        case 6:
          this.xid=n.RGUID+","+n.DTID;
          this.type=1;
          this.asjDialogVisible=true;
          break;
        default:
      }
    },
    release(){//支队下发分局  已下发状态是2

      // if(this.pd.ZDYJ==undefined || this.pd.ZDYJ==''){
      //   this.$message.error("请选择处理意见 ！");return ;
      // }
      let p={
        pd:{
          YJID:this.row.YJID,
          CLZT:'2',
          FJCLZT:'2',
        },
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/warningInfoController/sentData',p,
       r =>{
         if(r.success){
           this.$message({
             message: '下发成功！',
             type: 'success'
            });
            this.goBackS();
         }
       })

    },
    chuli() {
      let url="";
        if(this.jb=="2"){//分局上报
          if(this.pd.FJYJ=="" || this.pd.FJYJ==undefined)
          {
            this.$alert('分局调查意见不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
         this.pcl.FJYJ=this.pd.FJYJ;
         this.pcl.FJCLR=this.withname;
         this.pcl.CLZT="3";
         this.pcl.FJCLZT="3";
         url="/warningInfoController/uploadData"
       }else if(this.jb=="1"||this.org=='320100060000'){
          if(this.pd.ZDYJ=="" || this.pd.ZDYJ==undefined)
          {
            this.$alert('处理意见不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
          if(this.pd.CLXQ=="" || this.pd.CLXQ==undefined)
          {
            this.$alert('处理详情不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
          this.pcl.ZDCLR=this.withname;
          this.pcl.ZDYJ=this.pd.ZDYJ;
          this.pcl.CLXQ=this.pd.CLXQ;
          this.pcl.CLZT="0";
          this.pcl.FJCLZT=this.row.FJCLZT;
          url="/warningInfoController/saveCLJG"
        }else {
          if(this.pd.CLJG=="" || this.pd.CLJG==undefined)
          {
            this.$alert('处理意见不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
         this.pcl.ZDCLR=this.withname;
         this.pcl.CLJG=this.pd.CLJG;
         this.pcl.CLZT="3";
      }

      this.pcl.YJID=this.row.YJID;
      this.pcl.CLDW=this.$store.state.orgid;
      this.pcl.CLR=this.withname;
      this.pcl.CLRID=this.$store.state.uid;

      console.log(this.pcl);
      let p = {
        "pd":this.pcl,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+url, p,
        r => {
          if(r.success){
          this.$message({
            message: '处理成功！',
            type: 'success'
           });
            this.goBackS();
          }else {
            this.$message.error('处理失败了');
          }
        })
    },

  }

}
</script>
<style scoped>
.input-text {
  width: 29% !important
}
.el-dialog {
  width: 60%!important;
}
.texth{line-height: 20px;}
</style>
<style>

</style>
