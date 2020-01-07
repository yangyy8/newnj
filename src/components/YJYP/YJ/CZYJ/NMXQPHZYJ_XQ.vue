<template lang="html">
  <div class="yymain tshu">
    <div class="yycontent" style="margin-top: 0px!important;">
      <!-- <div class="mb-15">
      <div class="yylbt mb-15">基本信息</div>
      <el-row type="flex" class="yyf">
        <el-col :span="24" class="stu-left">
          <el-row type="flex" class="stu-row">
            <el-col :span="6">
              <span>姓名：</span>
               {{baseinfo.ZWXM}}
            </el-col>
            <el-col :span="6" class="stu-col-row">
              <span>性别：</span>
                 {{baseinfo.XBMC}}
            </el-col>
            <el-col :span="6" class="stu-col-row">
              <span>国家地区：</span>
               {{baseinfo.GJDQMC}}
            </el-col>
            <el-col :span="6" class="stu-col-row">
              <span>证件种类：</span>
                 {{baseinfo.RJZJZLMC}}
            </el-col>
          </el-row>
          <el-row type="flex" class="stu-row">
            <el-col :span="6" class="stu-col-row">
              <span>证件号码：</span>
                 {{baseinfo.ZJHM}}
            </el-col>
            <el-col :span="6" class="stu-col-row">
              <span>签证种类：</span>
                   {{baseinfo.RJQZLXMC}}
            </el-col>
            <el-col :span="6" class="stu-col-row">
              <span>签证号码：</span>
                   {{baseinfo.QZHM}}
            </el-col>
            <el-col :span="6" class="stu-col-row">
              <span>预警时间：</span>
                  {{baseinfo.BJSJ}}
            </el-col>
          </el-row>
        </el-col>

      </el-row>
    </div> -->
      <div class="mb-15">
        <div class="yylbt mb-15">人员基本信息</div>
        <el-row type="flex" class="yyf">
         <el-col :span="24" class="stu-left">
           <el-row  class="stu-row2">
             <el-col :span="8" class="stu-col-row2">
               <span>案卷编号：</span>
                  {{baseData.AJBH}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>登记日期：</span>
                  {{baseData.ZCRQ}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>人数：</span>
                  {{baseData.RS}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>姓名：</span>
                  {{baseData.XM}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span >性别：</span>
                  {{baseData.XBMC}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>出生日期：</span>
                  {{baseData.CSRQ}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>护照号：</span>
                  {{baseData.HZHM}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>签证类型：</span>
                  {{baseData.RJQZLXMC}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>邮箱地址：</span>
               {{baseData.YXDZ}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>省：</span>
               {{baseData.SHENG}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>城市：</span>
               {{baseData.CS}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>电话号码：</span>
                 {{baseData.DHHM}}
             </el-col>
             <el-col :span="24" class="stu-col-row2">
               <span>详细地址：</span>
               {{baseData.XXDZ}}
             </el-col>

           </el-row>
         </el-col>

        </el-row>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">案事件信息</div>
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
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsasj(scope.row)"></el-button>
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
              :total="asjTotalResult">
            </el-pagination>
          </div>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">常住信息</div>
        <el-table
          :data="tableData1"
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
            <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row)"></el-button>
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
            :current-page:sync="CurrentPage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="TotalResult">
          </el-pagination>
        </div>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">临住信息</div>
        <el-table
          :data="tableData6"
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
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
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
            :current-page:sync="CurrentPage3"
            :page-size="pageSize3"
            layout="prev, pager, next"
            :total="TotalResult3">
          </el-pagination>
        </div>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">出入境记录</div>
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
          <!-- <el-table-column
          prop="RYBH"
          label="人员编号">
          </el-table-column>
          <el-table-column
          prop="NAME"
          label="人员姓名">
          </el-table-column>
          <el-table-column
          prop="DESTINATION"
          label="前往地">
          </el-table-column>
          <el-table-column
          prop="TRAFFICTOOL"
          label="交通工具">
          </el-table-column>
          <el-table-column
          prop="IOSTRING"
          label="出入境日期">
          </el-table-column>
          <el-table-column
          prop="IOTIME"
          label="出入境时间">
          </el-table-column> -->
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc(2,scope.row.RGUID)"></el-button>
          </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
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
            :current-page:sync="CurrentPage1"
            :page-size="pageSize1"
            layout="prev, pager, next"
            :total="TotalResult1">
          </el-pagination>
        </div>
      </div>
      <div class="mb-15" v-if="bshow">
        <div class="yylbt mb-15">警综接警信息</div>
        <el-table
          :data="tableData3"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="rybh"
          label="人员编号">
          </el-table-column>
          <el-table-column
          prop="bjdh"
          label="接警报警电话">
          </el-table-column>
          <el-table-column
          prop="bjdhsj"
          label="接警报警时间">
          </el-table-column>
          <el-table-column
          prop="bjlx"
          label="接警报警类型">
          </el-table-column>
          <el-table-column
          prop="bjr"
          label="接警报警人">
          </el-table-column>
          <el-table-column
          prop="bjrxb"
          label="接警报警人性别">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('警综接警信息',2,scope.row.dtid)"></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15"  v-if="bshow">
        <div class="yylbt mb-15">警综处警信息</div>
        <el-table
          :data="tableData4"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="ajsldw"
          label="处警案件受理单位">
          </el-table-column>
          <el-table-column
          prop="ajslr"
          label="处警案件受理人">
          </el-table-column>
          <el-table-column
          prop="bzdw"
          label="处警标注单位">
          </el-table-column>
          <el-table-column
          prop="bzr"
          label="处境标注人">
          </el-table-column>
          <el-table-column
          prop="bzrxm"
          label="处境标注人姓名">
          </el-table-column>
          <el-table-column
          prop="bzsj"
          label="处境标注时间">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('警综处警信息',3,scope.row.cjbh)"></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">警综涉警信息</div>
        <el-table
          :data="tableData5"
          border
          style="width: 100%" class="stu-table">
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
          prop="SJRYXGDW"
          label="涉警人员修改单位">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('警综涉警信息',4,scope.row.jlbh)"></el-button>
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
      </div>
      <div class="mb-15" v-if='bshow'>
        <div class="yylbt mb-15">车辆信息</div>
        <el-table
          :data="tableData1"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="date"
          label="涉警人员登记单位">
          </el-table-column>
          <el-table-column
          prop="name"
          label="涉警人员登记单位名称">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员登记人姓名">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员登记时间">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员修改单位">
          </el-table-column>
          <!-- <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('车辆信息')"></el-button>
          </template>
          </el-table-column> -->
        </el-table>
      </div>
    </div>
    <!-- <div class="stu-footer">
      <div class="stu-title">预警处理</div>
      <el-row type="flex" class="mb-15">
       <el-col :span="20">
         <el-input
           type="textarea"
           :autosize="{ minRows: 3, maxRows: 3}"
           placeholder="预警处理必须填写原因(不超过100个字符)"
           v-model="pc.CHANGE_RESON"
           :disabled="!clztShow">
         </el-input>


       </el-col>
       <el-col :span="4"  class="down-btn-area">
         <el-button type="primary"  size="small" class="mb-5" @click="chuli()" v-if="clztShow">确定</el-button>
       </el-col>
     </el-row>
     <el-row type="flex">
       <el-col :span="24" class="czfont">处理人：{{row.CLR}}</el-col>
     </el-row>
    </div> -->
    <!-- 分局级别是2并且是未处理状态   展示派出所详情和分局意见输入框-->
   <div class="stu-footer" v-if="jb=='2' && showFJ">
     <!-- <div class="stu-title">处理结果：{{pc.CLJG}}</div> -->
     <div class="stu-title">支队处理意见：{{pc.ZDYJ_DESC}}</div>
     <div class="stu-title">支队处理详情：{{pc.CLXQ}}</div>
     <div class="stu-title">分局调查意见</div>
     <el-row type="flex" class="mb-15">
      <el-col :span="20">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 3}"
          placeholder="分局调查意见必须填写原因(不超过100个字符)"
          v-model="pc.FJYJ">
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
     <div class="stu-title">支队处理意见：{{pc.ZDYJ_DESC}}</div>
     <div class="stu-title">支队处理详情：{{pc.CLXQ}}</div>
     <div class="stu-title">分局调查意见：{{pc.FJYJ}}</div>
     <div class="czfont" v-if="FJCLR!=''">
       处理人: {{FJCLR==''?$store.state.uname:FJCLR}}
     </div>
   </div>

   <!-- 市局和支队级别是1 且是未处理状态 展示分局和派出所意见详情 支队处理意见输入框 -->
   <div class="stu-footer" v-if="(org=='320100060000'||jb=='1') && showZD">
     <div class="stu-title">分局调查意见：{{pc.FJYJ}}</div>
     <!-- <div class="stu-title">处理结果：{{pc.CLJG}}</div> -->
     <div class="stu-title">支队处理意见</div>
     <el-row  class="mb-15">
         <el-col :span="20" style="">
           <span  style="text-align:left;font-size:12px;">处理意见：</span>
           <el-select v-model="pc.ZDYJ" placeholder="请选择"  filterable clearable default-first-option   size="small" :disabled="showXF" @change="isXF(pc.ZDYJ)">
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
          v-model="pc.CLXQ"
          @input="isXF(pc.CLXQ)"
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
     <div class="stu-title">支队处理意见：{{pc.ZDYJ_DESC}}</div>
     <div class="stu-title">支队处理详情：{{pc.CLXQ}}</div>
     <div class="stu-title">分局调查意见：{{pc.FJYJ}}</div>
     <!-- <div class="stu-title">处理结果：{{pc.CLJG}}</div> -->
     <div class="czfont">
       处理人: {{ZDCLR==''?$store.state.uname:ZDCLR}}
     </div>
   </div>

    <el-dialog title="临住信息详情" :visible.sync="lzxxDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
      <LZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()"></LZXX>
      <div slot="footer" class="dialog-footer">
        <el-button @click="lzxxDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 出入境信息 -->
   <el-dialog title="出入境信息详情" :visible.sync="crjDialogVisible"  custom-class="big_dialog combine" :append-to-body="true" :modal="false">
               <CRJXX :type="type" :xid="xid"></CRJXX>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
                </div>
   </el-dialog>
   <el-dialog title="案事件信息详情" :visible.sync="asjDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
     <ANSJ :type="type" :xid="xid"></ANSJ>
     <div slot="footer" class="dialog-footer">
       <el-button @click="asjDialogVisible = false" size="small">取 消</el-button>
     </div>
   </el-dialog>
   <el-dialog title="常住信息详情" :visible.sync="CZDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
     <CZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()" :row="allData"></CZXX>
     <div slot="footer" class="dialog-footer">
       <el-button @click="CZDialogVisible = false" size="small">取 消</el-button>
     </div>
   </el-dialog>
  </div>
</template>
<script>
import XQTC from '../../../GYZJ/XQ_TC'
import LZXX from '../../../common/lzxx_xq'
import CRJXX from '../../../common/crjxx_xq'
import ANSJ from '../../../common/ansj_xq'
import CZXX from '../../../common/czxx_xq'
export default {
  components:{XQTC,LZXX,CRJXX,ANSJ,CZXX},
  data() {
    return {
      asjDialogVisible:false,
      CurrentPage: 1,
      pageSize: 3,
      TotalResult: 0,
      CurrentPage1: 1,
      pageSize1: 3,
      TotalResult1: 0,
      CurrentPage2: 1,
      pageSize2: 3,
      TotalResult2: 0,
      CurrentPage3: 1,
      pageSize3: 3,
      TotalResult3: 0,
      asjCurrentPage: 1,
      asjpageSize: 3,
      asjTotalResult: 0,
      rybh:'',
      yjid:'',
      baseData:{},
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      tableData5:[],
      tableData6:[],
      asjData:[],
      pd:{},
      px:{},
      pcl:{},
      pc:{
        CHANGE_RESON:'',
        CLJG:'',
        FJYJ:'',
        ZDYJ:'',
      },
      jb:1,
      org:this.$store.state.orgid,

      showZD:true,
      showXF:false,
      showFJ:true,
      showPCS:true,
      isXf:false,
      FJCLR:'',//分局处理人
      ZDCLR:'',//支队处理人

      bshow:false,
      xtitle:"",
      lzxxDialogVisible:false,
      crjDialogVisible:false,
      detailsDialogVisible:false,
      CZDialogVisible:false,
      type:0,
      allData:{},
      xid:'',
      form:{},
      baseinfo:{},
      options: [{
          value: 3,
          label: "3"
        },
        {
          value: 5,
          label: "5"
        },
        {
          value: 7,
          label: "7"
        }
      ],
      clDialogVisible:false,
      withname:this.$store.state.uname,
      row:{},
      clztShow:true,
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',
    }
  },
  activated(){
    this.getJB();
    // this.rybh=this.$route.query.rybh;
    // this.yjid=this.$route.query.yjid;
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.row=this.$route.query.row;
    this.clztShow=true;
    this.FJCLR=this.row.FJCLR==undefined?'':this.row.FJCLR;
    this.ZDCLR=this.row.ZDCLR==undefined?'':this.row.ZDCLR;
    //支队  详情展示支队 分局 派出所意见
    this.showZD=true;
    this.showXF=false;//下发分局
    this.pc.CLJG='';
    this.pc.FJYJ='';
    this.pc.ZDYJ='';

    //支队已处理  展示分局和支队意见  按钮隐藏
     if(this.row!=undefined && (this.row.CLZT=='0')){
       this.showZD=false;//已处理
       this.pc.ZDYJ_DESC=this.row.ZDYJ_DESC;
       this.pc.CLXQ=this.row.CLXQ;
       this.pc.FJYJ=this.row.FJYJ;
       this.pc.CLJG=this.row.CLJG;
     }else if(this.row!=undefined && (this.row.CLZT=='2')){//支队已下发
       this.showZD=true;//需要支队处理
       this.showXF=true;//下发分局,且支队不可填写意见
       console.log('===',this.row.CLZT,this.org,this.jb,this.showZD)
     }
     //分局  详情展示分局和派出所意见
     this.showFJ=true;
     if(this.row!=undefined && (this.row.CLZT=='0'||this.row.FJCLZT=='3')){//支队已处理||分局已上报
       this.showFJ=false;//无需填写意见
       this.$set(this.pc,'FJYJ',this.row.FJYJ);
       this.$set(this.pc,'CLJG',this.row.CLJG);
     }
     //派出所
     this.showPCS=true;
     if(this.row!=undefined && (this.row.CLZT=='0'||this.row.FJCLZT=='3')){
       this.showPCS=false;//支队已处理||分局已办结||派出所已办结
       this.pc.CLJG=this.row.CLJG;
     }
    this.pd.YJID=this.row.YJID;
    this.px.RYBH=this.row.RYBH;
    this.getBase();

    this.getCZXX(this.CurrentPage, this.pageSize);
    this.getCRJ(this.CurrentPage1, this.pageSize1);
    this.getSJ(this.CurrentPage2, this.pageSize2);
    this.getLZ(this.CurrentPage3, this.pageSize3);
    this.getData0(this.asjCurrentPage,this.asjpageSize);
    // this.getList('/refugeesWarningController/getRefugeesPersBasicInfo',0);
    // this.getList('/refugeesWarningController/getPermanentResidenceInfo',1);
    // this.getList('/refugeesWarningController/getMovementRecord',2);
    // this.getList('/educationParController/getJZJJXXInfo',3);
    // this.getList('/educationParController/getJZCJXXInfo',4);
    // this.getList('/educationParController/getSJXXInfo',5);

  },
  mounted() {
    this.$store.dispatch('getShzt');
    this.$store.dispatch("getYjcl1");
    this.$store.dispatch("getYjcl2");
    this.$store.dispatch("getYjcl3");
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
    getJB(){
      let p = {
        "currentPage": 1,
        "showCount": 10,
        "pd": {"DM":this.$store.state.orgid}
      };
      this.$api.post(this.Global.aport4+'/LRDWController/getMCAndJBByDM', p,
        r => {
          this.jb=r.data[0].JB
        })
    },
    asjpageSizeChange(val) {
    this.getData0(this.asjCurrentPage,val);
    },
    asjhandleCurrentChange(val) {
      this.getData0(val,this.asjpageSize);
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getCZXX(this.CurrentPage, this.pageSize);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getCZXX(this.CurrentPage, this.pageSize);
    },
    pageSizeChange1(val) {
      this.pageSize1=val;
      this.getCRJ(this.CurrentPage1, this.pageSize1);
    },
    handleCurrentChange1(val) {
      this.CurrentPage1=val;
      this.getCRJ(this.CurrentPage1, this.pageSize1);
    },
    pageSizeChange2(val) {
      this.pageSize2=val;
      this.getSJ(this.CurrentPage2, this.pageSize2);
    },
    handleCurrentChange2(val) {
      this.CurrentPage2=val;
      this.getSJ(this.CurrentPage2, this.pageSize2);
    },
    pageSizeChange3(val) {
      this.pageSize3=val;
      this.getLZ(this.CurrentPage3, this.pageSize3);
    },
    handleCurrentChange3(val) {
      this.CurrentPage3=val;
      this.getLZ(this.CurrentPage3, this.pageSize3);
    },
    getDetails(n){
      this.xid=n.RGUID;
      this.rybh=n.RYBH;
      this.allData=n;
      this.type=1;
      this.CZDialogVisible = true;
      this.czinfo = n;
    },
    getData0(currentPage,showCount){
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport4+'/eS_AJ_GroupController/getAnJianInfoByRYBH', p,
        r => {
          this.asjData=r.data.resultList;
          this.asjTotalResult=r.data.totalResult;
      })
    },
    detailsasj(n){
      this.xid=n.RGUID+","+n.DTID;
      this.asjDialogVisible=true;
    },
    openTc(n,id){
      this.xid=id;
          if(n==1)//常住居住地
          {
            this.detailsDialogVisible=true;
          }else if(n==2)//出入境
          {    this.type=1;
               this.crjDialogVisible=true;
          }
    },
    details(n)
    { this.type=0;
      this.xid=n.DTID;
      this.rybh=n.RYBH;
      this.lzxxDialogVisible=true;
    },
    // getList(url,type){
    //   let p = {
    //     "rybh": this.rybh
    //   };
    //   this.$api.post(url, p,
    //     r => {
    //       if(type==0){
    //         this.baseData=r.data
    //       }else if(type==1){
    //         this.tableData1=r.data
    //       }else if(type==2){
    //         this.tableData2=r.data
    //       }else if(type==3){
    //         this.tableData3=r.data
    //       }else if(type==4){
    //         this.tableData4=r.data
    //       }
    //     })
    // },
    getBase() {//人员基本信息
      let p = {
        "pd": this.pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+'/warningInfoController/getEntityByYJID', p,
        r => {
          this.baseinfo = r.data;
        })

        let pp = {
          "pd": this.px,
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token
        };
        this.$api.post(this.Global.aport4+'/eS_NM_JBXXController/getEntityByRYBH', pp,
          r => {
            this.baseData = r.data;
          })
    },
    getCZXX(currentPage, showCount){//常住信息
      let pp = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
        // "orderBy":"RQ_RZRQ",
        // "orderType":"DESC"
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport3+'/ryhx/getczryjbxx', pp,
        r => {
          this.tableData1 = r.data.resultList;
          this.TotalResult=r.data.totalResult;
        })
    },
    getLZ(currentPage, showCount){
      let pp = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
        "orderBy":{value:"ZSRQ",dataType:"date"},
        "orderType":"DESC",
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getResultListByParams', pp,
        r => {
          this.tableData6 = r.data.resultList;
          this.TotalResult3=r.data.totalResult;
        })
    },
    getCRJ(currentPage, showCount)//出入境
    {
      let pp = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
        "orderBy":{value:"IOSTRING",dataType:"date"},
        "orderType":"DESC",
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport4+'/eS_CRJJLBController/getResultListByParams', pp,
        r => {
          this.tableData2 = r.data.resultList;
          this.TotalResult1=r.data.totalResult;
        })
    },
    getSJ(currentPage, showCount)//涉警信息
    {
      let pp = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
        "orderBy":{value:"CJSJ",dataType:"date"},
        "orderType":"DESC",
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+'/eS_JCJ_SJXXController/getResultListByParams', pp,
        r => {
          this.tableData5 = r.data.resultList;
          this.TotalResult2=r.data.totalResult;
        })
    },
    back(){
      this.$router.push({name:'NMXQPHZYJ_X',query:{type:4}});
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
            this.$router.push({name:'NMXQPHZYJ'})
         }
       })
    },
    chuli() {
      let url="";
        if(this.jb=="2"){//分局上报
          if(this.pc.FJYJ=="" || this.pc.FJYJ==undefined)
          {
            this.$alert('分局调查意见不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
         this.pcl.FJYJ=this.pc.FJYJ;
         this.pcl.FJCLR=this.withname;
         this.pcl.CLZT="3";
         this.pcl.FJCLZT="3";
         url="/warningInfoController/uploadData"
       }else if(this.jb=="1"||this.org=='320100060000'){
          if(this.pc.ZDYJ=="" || this.pc.ZDYJ==undefined)
          {
            this.$alert('处理意见不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
          if(this.pc.CLXQ=="" || this.pc.CLXQ==undefined)
          {
            this.$alert('处理详情不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
          this.pcl.ZDCLR=this.withname;
          this.pcl.ZDYJ=this.pc.ZDYJ;
          this.pcl.CLXQ=this.pc.CLXQ;
          this.pcl.CLZT="0";
          this.pcl.FJCLZT=this.row.FJCLZT;
          url="/warningInfoController/saveCLJG"
        }else {
          if(this.pc.CLJG=="" || this.pc.CLJG==undefined)
          {
            this.$alert('处理意见不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
         this.pcl.ZDCLR=this.withname;
         this.pcl.CLJG=this.pc.CLJG;
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
            this.$router.push({name:'NMXQPHZYJ'})
          }else {
            this.$message.error('处理失败了');
          }
        })
    },
  }

}
</script>
<style scoped>

</style>
