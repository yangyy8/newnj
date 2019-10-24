
<template lang="html">
  <!-- 留學生信息管理預警详情 -->

  <div class="yymain ">
      <div class="tshu">
    <div class="yycontent" style="margin-top: 0px!important;">
      <div class="mb-15">
        <div class="yylbt hyst">基本信息</div>
        <div class="hybutton">
        <el-button type="button"  class="el-button el-button--primary el-button--small"  title="人员档案" @click="$router.push({name:'RYHX_XQ',query:{zjhm:$route.query.row.ZJHM,gjdq:$route.query.row.GJ,row:$route.query.row}})">人员档案</el-button>
        </div>
      </div>
       <el-row type="flex" class="yyf hyst_a">
         <el-col :span="24" class="stu-left">
           <el-row type="flex" class="stu-row">
             <el-col :span="6">
               <span class="texth">姓名：
            <label v-if="basedata.YWXM!=undefined && basedata.ZWXM!=undefined">{{basedata.YWXM}}({{basedata.ZWXM}})</label>
            <label v-else-if="basedata.ZWXM!=undefined">{{basedata.ZWXM}}</label>
            <label v-else>{{basedata.YWXM}}</label>
            </span>
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>性别：</span>
                  {{basedata.XB_DESC}}
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>国家地区：</span>
                {{basedata.GJDQ_DESC}}
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span class="texth">证件种类：</span>
                  {{basedata.ZJZL_DESC}}
             </el-col>
           </el-row>
           <el-row type="flex" class="stu-row">
             <el-col :span="6" class="stu-col-row">
               <span>证件号码：</span>
                  {{basedata.ZJHM}}
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span class="texth">签证种类：</span>
                    {{basedata.QZZL_DESC}}
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>签证号码：</span>
                    {{basedata.QZHM}}
             </el-col>
             <el-col :span="6" class="stu-col-row">
               <span>预警时间：</span>
                   {{basedata.BJSJ}}
             </el-col>
           </el-row>
           <el-row type="flex" class="stu-row">
             <el-col :span="6" class="stu-col-row">
               <span>出生日期：</span>
                   {{basedata.CSRQ}}
             </el-col>
           </el-row>
         </el-col>

       </el-row>
       <div class="yylbt yt-16">预警原因 <span class="yyf ycolor">{{basedata.ZBXDATADESC}}</span></div>
       <div v-if="zjshow" >
         <div class="stru-lal">证件信息</div>
         <el-table
              ref="multipleTable"
              :data="tableData6"
              border
              style="width: 100%" class="stu-table"
              >
              <el-table-column
                prop="ZJZL_DESC"
                label="证件种类">
              </el-table-column>
              <el-table-column
                prop="ZJHM"
                label="证件号码">
              </el-table-column>
              <el-table-column
                prop="ZJZT"
                label="证件状态">
              </el-table-column>
              <el-table-column
                prop="ZJYXQ"
                label="证件有效期">
              </el-table-column>
              <el-table-column
                prop="QZQFD_DESC"
                label="签证签发地">
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
               :total="TotalResult4">
             </el-pagination>
           </div>
        </div>
        <div v-if="qzshow" >
          <div class="stru-lal">签证信息</div>
          <el-table
               ref="multipleTable"
               :data="tableData7"
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
                    <div>
                      <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row)"></el-button>
                    </div>
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
                @current-change="handleCurrentChange5"
                :page-size="pageSize5"
                layout="prev, pager, next"
                :total="TotalResult5">
              </el-pagination>
            </div>
         </div>
     <div v-if="lzshow" >
       <div class="stru-lal">临住信息</div>
       <el-table
            ref="multipleTable"
            :data="tableData1"
            border
            style="width: 100%" class="stu-table"
            >
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
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslzxx(scope.row)"></el-button>
              </template>
            </el-table-column>
        </el-table>
        <div class="middle-foot mt-10">
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
             :page-size="pageSize"
             layout="prev, pager, next"
             :total="TotalResult"
             :current-page.sync="CurrentPage">
           </el-pagination>
         </div>
      </div>

       <div v-if="crjshow" >
         <div class="stru-lal">出入境信息</div>
         <el-table
              ref="multipleTable"
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
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailscrj(scope.row)"></el-button>
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
               :current-page.sync="CurrentPage1">
             </el-pagination>
           </div>
      </div>

        <div v-if="tbshow">
         <div class="stru-lal">通报人员信息</div>
         <el-table
              :data="tableData3"
              border
              style="width: 100%" class="stu-table">
              <el-table-column
                prop="TBRYZL"
                label="通报人员类别"
                :key="Math.random()">
              </el-table-column>
              <el-table-column
                prop="TBBH"
                label="通报编号"
                :key="Math.random()">
              </el-table-column>
              <el-table-column
                prop="FBSJ"
                label="发布时间"
                :key="Math.random()">
              </el-table-column>
              <el-table-column
                prop="BZ"
                label="备注"
                :key="Math.random()">
              </el-table-column>
              <el-table-column
                label="操作" width="120">
                <template slot-scope="scope">
                  <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailstbry(scope.row)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

        <div v-if='bkshow'>
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
                :total="asjTotalResult"
                :current-page.sync="asjCurrentPage">
              </el-pagination>
            </div>
            <div class="stru-lal">警综渉警信息</div>
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
        </div>
        <div v-if="skshow">
            <div class="stru-lal">非法居留信息</div>
            <el-table
                 :data="tableData4"
                 border
                 style="width: 100%" class="stu-table">
                 <el-table-column
                   prop="RJRQ"
                   label="入境日期">
                 </el-table-column>
                 <el-table-column
                   prop="RJKAMC"
                   label="入境口岸名称">
                   <template slot-scope="scope">
                     <span>{{scope.row.RJKAMC==null?scope.row.KAMC:scope.row.RJKAMC}}</span>
                   </template>
                 </el-table-column>
                 <el-table-column
                   prop="RJQZHM"
                   label="入境签证号码">
                   <template slot-scope="scope">
                     <span>{{scope.row.RJQZHM==null?scope.row.QZHM:scope.row.RJQZHM}}</span>
                   </template>
                 </el-table-column>
                 <el-table-column
                   label="操作" width="120">
                   <template slot-scope="scope">
                   <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsffjl(scope.row)"></el-button>
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
                    :current-page.sync="CurrentPage2">
                  </el-pagination>
                </div>

               <div class="stru-lal">记者信息</div>
               <el-table
                    :data="tableData5"
                    border
                    style="width: 100%" class="stu-table">
                    <el-table-column
                      prop="ZWXM"
                      label="中文姓名">
                    </el-table-column>
                    <el-table-column
                      prop="YWXM"
                      label="英文姓名">
                    </el-table-column>
                    <el-table-column
                      prop="GJDQ_DESC"
                      label="国家地区">
                    </el-table-column>
                    <el-table-column
                      prop="ZJHM"
                      label="证件号码">
                    </el-table-column>
                    <el-table-column
                      label="操作" width="120">
                      <template slot-scope="scope">
                      <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsjz(scope.row)"></el-button>
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
                       :current-page.sync="CurrentPage3">
                     </el-pagination>
                   </div>
                 </div>

                 <div v-if="nmshow">
                 <div class="stru-lal">难民信息</div>
                 <el-table
                      :data="tableData8"
                      border
                      style="width: 100%" class="stu-table">
                      <el-table-column
                        prop="XM"
                        label="姓名">
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
                        prop="CSRQ"
                        label="出生日期">
                      </el-table-column>
                      <el-table-column
                        prop="LZDJMC"
                        label="临住登记名称">
                      </el-table-column>
                      <el-table-column
                        label="操作" width="120">
                        <template slot-scope="scope">
                        <el-button type="text" class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsnm(scope.row)"></el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                    <div class="middle-foot mt-10">
                       <div class="page-msg">
                         <div class="">
                       共{{TotalResult6}}条记录
                         </div>
                         <div class="">
                           每页显示
                           <el-select v-model="pageSize6" @change="pageSizeChange6(pageSize6)" placeholder="10" size="mini" class="page-select">
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
                           共{{Math.ceil(TotalResult6/pageSize6)}}页
                         </div>
                       </div>
                       <el-pagination
                         background
                         @current-change="handleCurrentChange6"
                         :page-size="pageSize6"
                         layout="prev, pager, next"
                         :total="TotalResult6"
                         :current-page.sync="CurrentPage6">
                       </el-pagination>
                     </div>
                   </div>
                 </div>

   <div class="stu-footer" v-if="this.$route.query.sh_special">
     <div class="stu-title">处理意见</div>
     <el-row>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
         <span class="input-text" style="width:13%!important">审核状态：</span>
         <el-select v-model="pc.SHZT" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input" :disabled="!qdshow">
           <el-option
             v-for="item in $store.state.shzt"
             :key="item.dm"
             :label="item.dm+' - '+item.mc"
             :value="item.dm">
           </el-option>
         </el-select>
       </el-col>
     </el-row>
     <el-row type="flex" class="mb-15">
      <el-col :span="20">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 3}"
          placeholder="预警处理必须填写原因(不超过100个字符)"
          v-model="pc.CHANGE_RESON"
          :disabled="!qdshow">
        </el-input>
      </el-col>
      <el-col :span="4"  class="down-btn-area">
        <el-button type="primary" v-if="qdshow"  size="small" class="mb-5" @click="addJytSave()">确定</el-button>
        <!-- <el-button type="warning" size="small" class="m0" @click="getback()">返回</el-button> -->
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="24" class="czfont">处理人：{{withname}}</el-col>
    </el-row>
   </div>

   <div class="stu-footer" v-else>
     <!-- 分局级别是2并且是未处理状态   展示派出所详情和分局意见输入框-->
     <div v-if="jb=='2' && showFJ">
       <div class="stu-title">处理结果：{{pc.CLJG}}</div>
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
          <el-button type="primary" class="mb-5" size="small" @click="addSaves()">确定</el-button>
        </el-col>
      </el-row>
     </div>
     <div v-if="jb=='2' && !showFJ">
       <div class="stu-title">处理结果：{{pc.CLJG}}</div>
       <div class="stu-title">分局调查意见：{{pc.FJYJ}}</div>
     </div>
     <div v-if="(org=='320100060000'||jb=='1') && showZD">
       <div class="stu-title">分局调查意见：{{pc.FJYJ}}</div>
       <div class="stu-title">处理结果：{{pc.CLJG}}</div>
       <div class="stu-title">支队处理意见</div>
       <el-row type="flex" class="mb-15">
        <el-col :span="20">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 3}"
            placeholder="支队处理意见必须填写原因(不超过100个字符)"
            v-model="pc.ZDYJ">
          </el-input>
        </el-col>
        <el-col :span="4"  class="down-btn-area">
          <el-button type="primary" class="mb-5" size="small" @click="addSaves()">确定</el-button>
        </el-col>
      </el-row>
     </div>
     <div v-if="(org=='320100060000'||jb=='1') && !showZD">
       <div class="stu-title">支队处理意见：{{pc.ZDYJ}}</div>
       <div class="stu-title">分局调查意见：{{pc.FJYJ}}</div>
       <div class="stu-title">处理结果：{{pc.CLJG}}</div>
     </div>
     <div v-if="jb=='3' && showPCS">
       <div class="stu-title">处理结果</div>
       <el-row type="flex" class="mb-15">
        <el-col :span="20">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 3}"
            placeholder="处理必须填写原因(不超过100个字符)"
            v-model="pc.CLJG">
          </el-input>
        </el-col>
        <el-col :span="4"  class="down-btn-area">
          <el-button type="primary" class="mb-5" size="small" @click="addSaves()">确定</el-button>
        </el-col>
      </el-row>
     </div>
     <div v-if="jb=='3' && !showPCS">
       <div class="stu-title">处理结果：{{pc.CLJG}}</div>
     </div>
     <div class="czfont">
       处理人: {{$store.state.uname}}
     </div>
   </div>

   <el-dialog
       title="签证信息详情" :visible.sync="QZDialogVisible" width="900px">
       <QZ :xid="xid" :random="new Date().getTime()"></QZ>
       <div slot="footer" class="dialog-footer">
         <el-button @click="QZDialogVisible = false" size="small">取 消</el-button>
       </div>
   </el-dialog>
   <el-dialog title="临住信息详情" :visible.sync="lzxxDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
     <LZXX :type="type" :xid="xid" :rybh="rybh" :random="(new Date()).getTime()"></LZXX>
     <div slot="footer" class="dialog-footer">
       <el-button @click="lzxxDialogVisible = false" size="small">取 消</el-button>
     </div>
   </el-dialog>
   <el-dialog title="通报人员详情" :visible.sync="tbryDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
     <TBRY :type="type" :xid="xid" :rybh="rybh" :random="(new Date()).getTime()"></TBRY>
     <div slot="footer" class="dialog-footer">
       <el-button @click="tbryDialogVisible = false" size="small">取 消</el-button>
     </div>
   </el-dialog>
   <el-dialog title="案事件信息详情" :visible.sync="asjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
     <ANSJ :type="type" :xid="xid" :dtid="dtid" :random="(new Date()).getTime()"></ANSJ>
     <div slot="footer" class="dialog-footer">
       <el-button @click="asjDialogVisible = false" size="small">取 消</el-button>
     </div>
   </el-dialog>
   <el-dialog title="警综涉警信息详情" :visible.sync="sjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
     <JZSJ :type="type" :xid="xid"></JZSJ>
     <div slot="footer" class="dialog-footer">
       <el-button @click="sjDialogVisible = false" size="small">取 消</el-button>
     </div>
   </el-dialog>
   <!-- 出入境信息 -->
  <el-dialog title="出入境信息详情" :visible.sync="crjDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
        <CRJXX :type="type" :xid="xid" :random="(new Date()).getTime()"></CRJXX>
         <div slot="footer" class="dialog-footer">
           <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
         </div>
  </el-dialog>
  </div>
<!-- 非法居留 -->
    <el-dialog title="非法居留信息详情" :visible.sync="ffjlDialogVisible"  width="900px">
          <el-form    ref="jlinfo">
            <el-row :gutter="2"  class="mb-6">
                <el-col :span="12" class="input-item">
                  <span class="input-text">姓名：</span>
                  <span class="input-input detailinput">  {{jlinfo.XM}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                 <span class="input-text">国家地区：</span>
                 <span class="input-input detailinput">  {{jlinfo.GJDQMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                 <span class="input-text">性别：</span>
                 <span class="input-input detailinput">  {{jlinfo.XBMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">出生日期：</span>
                  <span class="input-input detailinput">  {{jlinfo.CSRQ}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">证件种类：</span>
                  <span class="input-input detailinput">  {{jlinfo.ZJZLMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">证件号码：</span>
                  <span class="input-input detailinput">  {{jlinfo.ZJHM}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">入境证件种类：</span>
                  <span class="input-input detailinput">  {{jlinfo.RJZJZLMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">入境证件号码：</span>
                  <span class="input-input detailinput">  {{jlinfo.RJZJHM}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">签证类型：</span>
                  <span class="input-input detailinput">  {{jlinfo.QZLXMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">签证号码：</span>
                  <span class="input-input detailinput">  {{jlinfo.QZHM}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">入境签证类型：</span>
                  <span class="input-input detailinput">  {{jlinfo.RJQZLXMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">入境签证号码：</span>
                  <span class="input-input detailinput">  {{jlinfo.RJQZHM}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">签证签发日期：</span>
                  <span class="input-input detailinput">  {{jlinfo.QZQFRQ}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">签证有效日期：</span>
                  <span class="input-input detailinput">  {{jlinfo.QZYXRQ}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">入境日期：</span>
                  <span class="input-input detailinput">  {{jlinfo.RJRQ}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">入境口岸：</span>
                  <span class="input-input detailinput">  {{jlinfo.RJKAMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">签发机关：</span>
                  <span class="input-input detailinput">  {{jlinfo.QFJGMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">行政区划：</span>
                  <span class="input-input detailinput">  {{jlinfo.XZQH_DESC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">口岸：</span>
                  <span class="input-input detailinput">  {{jlinfo.KAMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">签发地：</span>
                  <span class="input-input detailinput">  {{jlinfo.QFDMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">住宿登记日期：</span>
                  <span class="input-input detailinput">  {{jlinfo.ZSDJRQ}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">住宿登记地：</span>
                  <span class="input-input detailinput">  {{jlinfo.ZSDJD}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">最后住宿登记日期：</span>
                  <span class="input-input detailinput">  {{jlinfo.ZHZSDJRQ}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">最后住宿登记地：</span>
                  <span class="input-input detailinput">  {{jlinfo.ZHZSDJDMC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">邀请单位：</span>
                  <span class="input-input detailinput">  {{jlinfo.YQDW}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">地址：</span>
                  <span class="input-input detailinput">  {{jlinfo.DZ}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">联系电话：</span>
                  <span class="input-input detailinput">  {{jlinfo.LXDH}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">操作人：</span>
                  <span class="input-input detailinput">  {{jlinfo.CZR}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">操作时间：</span>
                  <span class="input-input detailinput">  {{jlinfo.CZSJ}}</span>
                </el-col>
            </el-row>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="ffjlDialogVisible = false" size="small">取 消</el-button>
          </div>
        </el-dialog>

<!-- 记者信息 -->
    <el-dialog title="记者信息详情" :visible.sync="jzDialogVisible" width="900px">
          <el-form    ref="jzinfo">
            <el-row :gutter="2"  class="mb-6">
                <el-col :span="12" class="input-item">
                  <span class="input-text">中文姓名：</span>
                  <span class="input-input detailinput">  {{jzinfo.ZWXM}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">英文姓名：</span>
                  <span class="input-input detailinput">  {{jzinfo.YWXM}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                 <span class="input-text">国家地区：</span>
                 <span class="input-input detailinput">  {{jzinfo.GJDQ_DESC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                 <span class="input-text">性别：</span>
                 <span class="input-input detailinput">  {{jzinfo.XB_DESC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">出生日期：</span>
                  <span class="input-input detailinput">  {{jzinfo.CSRQ}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">证件种类：</span>
                  <span class="input-input detailinput">  {{jzinfo.ZJZL_DESC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">证件号码：</span>
                  <span class="input-input detailinput">  {{jzinfo.ZJHM}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">签证类型：</span>
                  <span class="input-input detailinput">  {{jzinfo.QZZL_DESC}}</span>
                </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">签证号码：</span>
                  <span class="input-input detailinput">  {{jzinfo.QZHM}}</span>
                </el-col>
            </el-row>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="jzDialogVisible = false" size="small">取 消</el-button>
          </div>
        </el-dialog>
        <!-- 难民信息 -->
            <el-dialog title="难民信息详情" :visible.sync="nmDialogVisible" width="900px">
                  <el-form    ref="jzinfo">
                    <el-row :gutter="2"  class="mb-6">
                        <el-col :span="12" class="input-item">
                          <span class="input-text">姓名：</span>
                          <span class="input-input detailinput">  {{nzinfo.XM}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">国家地区：</span>
                          <span class="input-input detailinput">  {{nzinfo.GJDQMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">性别：</span>
                          <span class="input-input detailinput">  {{nzinfo.XBDM}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">出生日期：</span>
                          <span class="input-input detailinput">  {{nzinfo.CSRQ}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                         <span class="input-text">电话号码：</span>
                         <span class="input-input detailinput">  {{nzinfo.DHHM}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                         <span class="input-text">邮箱：</span>
                         <span class="input-input detailinput">  {{nzinfo.YXDZ}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">护照号码：</span>
                          <span class="input-input detailinput">  {{nzinfo.HZHM}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">现持证件种类：</span>
                          <span class="input-input detailinput">  {{nzinfo.XCQZLX}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">身份：</span>
                          <span class="input-input detailinput">  {{nzinfo.SFMC}}</span>
                        </el-col>

                        <el-col :span="12" class="input-item">
                          <span class="input-text">省：</span>
                          <span class="input-input detailinput">  {{nzinfo.SHENG}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">城市：</span>
                          <span class="input-input detailinput">  {{nzinfo.CS}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">入境签证类型：</span>
                          <span class="input-input detailinput">  {{nzinfo.RJQZLXMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">有效签证：</span>
                          <span class="input-input detailinput">  {{nzinfo.SFCYYXQZ}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">临住登记情况：</span>
                          <span class="input-input detailinput">  {{nzinfo.LZDJMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">人数：</span>
                          <span class="input-input detailinput">  {{nzinfo.RS}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">案卷编号：</span>
                          <span class="input-input detailinput">  {{nzinfo.AJBH}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">注册日期：</span>
                          <span class="input-input detailinput">  {{nzinfo.ZCRQ}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">详细地址：</span>
                          <span class="input-input detailinput">  {{nzinfo.XXDZ}}</span>
                        </el-col>
                    </el-row>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="nmDialogVisible = false" size="small">取 消</el-button>
                  </div>
                </el-dialog>
  </div>

</template>
<script>
import LZXX from '../../../common/lzxx_xq'
import TBRY from '../../../common/tbry_xq'
import ANSJ from '../../../common/ansj_xq'
import CRJXX from '../../../common/crjxx_xq'
import JZSJ from '../../../common/jzsj_xq'
import QZ from '../../../common/qz_xq'
export default {
  components:{LZXX,TBRY,ANSJ,CRJXX,JZSJ,QZ},
  data() {
    return {
      rybh:'',
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
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

      CurrentPage6: 1,
      pageSize6: 10,
      TotalResult6: 0,

      asjCurrentPage: 1,
      asjpageSize: 10,
      asjTotalResult: 0,

      sjCurrentPage: 1,
      sjpageSize: 10,
      sjTotalResult: 0,

      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      tableData5:[],
      tableData6:[],
      tableData7:[],
      tableData8:[],
      asjData:[],
      sjtableData:[],
      lzshow:true,
      crjshow:true,
      tbshow:true,
      bkshow:true,
      skshow:true,
      zjshow:true,
      qzshow:true,
      nmshow:false,

      pd:{},
      px:{},
      pp:{},
      pm:{},
      pcl:{},
      pc:{
        CHANGE_RESON:'',
        CLJG:'',
        FJYJ:'',
        ZDYJ:'',
      },
      pxcrj:{},
      pxlz:{},
      crjinfo:{},
      jzinfo:{},
      jlinfo:{},
      nzinfo:{},
      type:1,
      xid:'',
      dtid:'',
      options:this.pl.ps,
      basedata:{},
      qdshow:true,
      lzxxDialogVisible:false,
      crjDialogVisible:false,
      tbryDialogVisible:false,
      jzDialogVisible:false,
      ffjlDialogVisible:false,
      nmDialogVisible:false,
      asjDialogVisible:false,
      sjDialogVisible:false,
      QZDialogVisible:false,
      withname:this.$store.state.uname,
      jb:1,
      org:this.$store.state.orgid,
      showZD:true,
      showFJ:true,
      showPCS:true,
    }
  },
  activated(){
    console.log('this.$route.query.sh_special',this.$route.query.sh_special)
    this.CurrentPage=1;
    this.CurrentPage1=1;
    this.CurrentPage2=1;
    this.CurrentPage3=1;
    this.CurrentPage4=1;
    this.CurrentPage5=1;
    this.CurrentPage6=1;
    this.asjCurrentPage=1;
    this.sjCurrentPage=1;
    this.tbryDialogVisible=false;
    this.lzxxDialogVisible=false;
    this.crjDialogVisible=false;
    this.row=this.$route.query.row;
    this.pc={CHANGE_RESON:'',CLJG:'',FJYJ:'',ZDYJ:''};
    this.qdshow=true;
    this.showZD=true;
    console.log(this.row.RYBH);
    if(this.row!=undefined && (this.row.CLZT=='0')){
      if(this.$route.query.sh_special){
        this.qdshow=false;
        this.pc.CHANGE_RESON=this.row.CLJG;
      }else{
        this.showZD=false;//已处理
        this.pc.ZDYJ=this.row.ZDYJ;
        this.pc.FJYJ=this.row.FJYJ;
        this.pc.CLJG=this.row.CLJG;
      }
     }
     //分局  详情展示分局和派出所意见
     this.showFJ=true;
     if(this.row!=undefined && (this.row.CLZT=='0'||this.row.CLZT=='2')){
       this.showFJ=false;//已处理
       this.$set(this.pc,'FJYJ',this.row.FJYJ);
       this.$set(this.pc,'CLJG',this.row.CLJG);
     }
     //派出所
     this.showPCS=true;
     if(this.row!=undefined && (this.row.CLZT=='0'||this.row.CLZT=='2'||this.row.CLZT=='3')){
       this.showPCS=false;//已处理
       this.pc.CLJG=this.row.CLJG;
     }
     if(this.row.RYBH!=undefined){
        this.pd.YJID=this.row.YJID;
        this.px.RYBH=this.row.RYBH;
        this.xid=this.row.RYBH;
        this.getBase();
        this.crjshow=false;
        this.lzshow=false;
        this.tbshow=false;
        this.skshow=false;
        this.bkshow=false;
        this.zjshow=false;
        this.qzshow=false;
        this.nmshow=false;
        if(this.row.MXLX=="LXS_CRJTX"){ //出入境提醒
           this.crjshow=true;
           this.getCrjxx(this.CurrentPage1,this.pageSize1);
        }else if(this.row.MXLX=="LXS_WBDYJ")//留学生未报到
        {
          this.crjshow=true;
          this.lzshow=true;
          this.zjshow=true;
          this.qzshow=true;
          this.getZJXX(this.CurrentPage4,this.pageSize4);
          this.getQZXX(this.CurrentPage5,this.pageSize5);
          this.getLzxx(this.CurrentPage,this.pageSize);
          this.getCrjxx(this.CurrentPage1,this.pageSize1);
        }
        else {
          this.lzshow=true;
          this.pm.YWX=this.row.YWX==null?"":this.row.YWX;
          this.pm.YWM=this.row.YWM==null?"":this.row.YWM;
          this.pm.XB=this.row.XB;
          this.pm.CSRQ=this.row.CSRQ;
          this.pm.ZJHM=this.row.ZJHM;
          if(this.row.MXLX=="LZ_HC"){   //临住核查预警
            this.tbshow=true;
            this.skshow=true;
            this.nmshow=true;
            this.pp={};
            this.getTBRY(this.pm);
            this.pp.RYBH=this.row.RYBH;
            this.getFFJY(this.CurrentPage2,this.pageSize2,this.pp);
            this.getJZ(this.CurrentPage3,this.pageSize3,this.pp);
            this.getNMXX(this.CurrentPage6,this.pageSize6);
          }else if(this.row.MXLX=="BKYJ")  //布控预警
          { this.crjshow=true;
            this.tbshow=true;
            this.pxcrj.CERTIFICATENO=this.row.ZJHM;
            this.pxcrj.NATIONALITY=this.row.GJ;
            this.pxlz.ZJHM=this.row.ZJHM;
            this.pxlz.GJDQ=this.row.GJ;
            this.getTBRY(this.pm);
            this.getCrjxx(this.CurrentPage1,this.pageSize1);
          }else if(this.row.MXLX=="QZ_HCYJ"){//受理、签发信息核查预警
            this.zjshow=true;
            this.qzshow=true;
            this.tbshow=true;
            this.getZJXX(this.CurrentPage4,this.pageSize4);
            this.getQZXX(this.CurrentPage5,this.pageSize5);
            this.getTBRY(this.pm);
          }else if(this.row.MXLX=="ASJ_SKGJRY"||this.row.MXLX=="LXS_SKYJ") { //涉恐国家人员预警
            this.crjshow=true;
            this.getCrjxx(this.CurrentPage1,this.pageSize1);
          }
          else if(this.row.MXLX=="LXS_ZSYJ") { //教育厅
            this.bkshow=true;
            this.lzshow=false;
            this.getData0(this.asjCurrentPage,this.asjpageSize);
            this.getData1(this.sjCurrentPage,this.sjpageSize);
          }
          this.getLzxx(this.CurrentPage,this.pageSize);
         }
   }
  },
  mounted() {
      this.$store.dispatch('getShzt');
      this.getJB();
  },
  methods: {
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
      this.asjpageSize=val;
      this.getData0(this.asjCurrentPage,val);
      console.log(`每页 ${val} 条`);
    },
    asjhandleCurrentChange(val) {
      this.asjCurrentPage=val;
      this.getData0(val,this.asjpageSize);
      console.log(`当前页: ${val}`);
    },
    sjpageSizeChange(val) {
      this.sjpageSize=val;
      this.getData1(this.sjCurrentPage,val);
      console.log(`每页 ${val} 条`);
    },
    sjhandleCurrentChange(val) {
      this.sjCurrentPage=val;
      this.getData1(val,this.sjpageSize);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange(val) {
      this.pageSiz=val;
      this.getLzxx(this.CurrentPage,val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getLzxx(val,this.pageSize);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange1(val) {
      this.pageSize1=val;
      this.getCrjxx(this.CurrentPage1,val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
       this.CurrentPage1=val;
       this.getCrjxx(val,this.pageSize1);
       console.log(`当前页: ${val}`);
    },
    pageSizeChange2(val) {
      this.pageSize2=val;
      this.getFFJY(this.CurrentPage2,val,this.pp);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange2(val) {
       this.CurrentPage2=val;
       this.getFFJY(val,this.pageSize2,this.pp);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange3(val) {
      this.pageSize3=val;
      this.getJZ(this.CurrentPage3,val,this.pp);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange3(val) {
       this.CurrentPage3=val;
       this.getJZ(val,this.pageSize3,this.pp);
       console.log(`当前页: ${val}`);
    },
    pageSizeChange4(val) {
      this.pageSize4=val;
      this.getZJXX(this.CurrentPage4,val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange4(val) {
      this.CurrentPage4=val;
      this.getZJXX(val,this.pageSize4);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange5(val) {
      this.pageSize5=val;
      this.getQZXX(this.CurrentPage5,val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange5(val) {
      this.CurrentPage5=val;
      this.getQZXX(val,this.pageSize5);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange6(val) {
      this.pageSize6=val;
      this.getNMXX(this.CurrentPage6,val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange6(val) {
      this.CurrentPage6=val;
      this.getNMXX(val,this.pageSize6);
      console.log(`当前页: ${val}`);
    },
    getDetails(n){
      this.xid=n.RGUID;
      this.QZDialogVisible = true;
    },
    getData0(currentPage,showCount){

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
      };
      this.$api.post(this.Global.aport4+'/eS_AJ_GroupController/getAnJianInfoByRYBH', p,
        r => {
          this.asjData=r.data.resultList;
          this.asjTotalResult=r.data.totalResult;
      })
    },
    getData1(currentPage,showCount){
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
      };
      this.$api.post(this.Global.aport4+'/eS_JCJ_SJXXController/getResultListByParams', p,
        r => {
          this.sjtableData=r.data.resultList;
          this.sjTotalResult=r.data.totalResult;
      })
    },
    getBase() {
      let p = {
        "pd": this.pd
      };
      this.$api.post(this.Global.aport4+'/warningInfoController/getEntityByYJID', p,
        r => {
          this.basedata = r.data;
        })
    },
    //证件信息
    getZJXX(currentPage,showCount){
      this.pd={};
      this.pd.RYBH=this.row.RYBH;
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.pd
      };
      this.$api.post(this.Global.aport4+'/eS_RY_JWRYZJController/getResultListByParams', p,
        r => {
          this.tableData6 = r.data.resultList;
          this.TotalResult4=r.data.totalResult;
        })
    },
    //签证信息
    getQZXX(currentPage,showCount){
      this.pd={};
      this.pd.RYBH=this.row.RYBH;
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.pd,
        "orderBy":'QZYXQZ',
        "orderType": 'DESC'
      };
      this.$api.post(this.Global.aport4+'/eS_FNVISASController/getResultListByParams', p,
        r => {
          this.tableData7 = r.data.resultList;
          this.TotalResult5=r.data.totalResult;
        })
    },
    //临住信息
    getLzxx(currentPage,showCount) {
      // this.pd={};
      // if(this.row.MXLX=="LXS_SWLZYJ")
      //  {
      //   this.pd.DJDWXZQH_Like="3201";
      // }else if(this.row.MXLX=="LXS_SKYJ"){
      //   this.px.LRDW_Like=this.row.PCS.substr(0,2);
      // }
      // else if(this.row.MXLX=="LXS_LZHCYJ"){
      //   var org=this.$store.state.orgid;
      //   var arr=0;
      //   for (var i = org.length-1; i > 0; i--) {
      //    if(org[i]=="0"){
      //      arr++;
      //    }else {
      //      break ;
      //    }
      //   }
      //  var str=parseInt(org.length)-parseInt(arr);
      //   this.px.LRDW_Like=org.substr(0,str);
      //   console.log('this.px.LRDW_Like',this.px.LRDW_Like);
      // }

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
        "orderBy":{value:"ZSRQ",dataType:"date"},
        "orderType":"DESC"
      };
      if(this.row.MXLX=="BKYJ"){
            console.log(this.pxcrj);
        p = {
          "currentPage": currentPage,
          "showCount": showCount,
          "pd": this.pxlz,
          "orderBy":{value:"ZSRQ",dataType:"date"},
          "orderType":"DESC"
        };
      }
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getResultListByParams', p,
        r => {
          this.tableData1 = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    //出入境信息
    getCrjxx(currentPage,showCount) {

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.px,
        "orderBy":{value:"IOSTRING",dataType:"date"},
        "orderType":"DESC"
      };
      if(this.row.MXLX=="BKYJ"){
        console.log(this.pxcrj);
        p = {
          "currentPage": currentPage,
          "showCount": showCount,
          "pd": this.pxcrj,
          "orderBy":{value:"IOSTRING",dataType:"date"},
          "orderType":"DESC"
        };
      }

      this.$api.post(this.Global.aport4+'/eS_CRJJLBController/getResultListByParams', p,
        r => {
          this.tableData2 = r.data.resultList;
          this.TotalResult1 = r.data.totalResult;
        })
    },
    //通报人员信息
    getTBRY(px){
      let p = {
        "pd":px
      };
      this.$api.post(this.Global.aport4+'/eS_Tbry_GroupController/getTongBaoListByRyxx', p,
        r => {
          this.tableData3 = r.data;
        })
    },
    //难民信息
    getNMXX(currentPage,showCount){
      let p = {
        "pd":this.px
      };
      this.$api.post(this.Global.aport4+'/eS_NM_JBXXController/getResultListByParams', p,
        r => {
          this.tableData8 = r.data.resultList;
          this.TotalResult6 = r.data.totalResult;
        })
    },
    //非法居留
    getFFJY(currentPage,showCount,px){
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd":px,
        "orderBy":{value:"CJSJ",dataType:"date"},
        "orderType":"DESC"
      };
      this.$api.post(this.Global.aport4+'/eS_FFJL_GroupController/getResultListByParams', p,
        r => {
          this.tableData4 = r.data.resultList;
          this.TotalResult2 = r.data.totalResult;
        })
    },
    //记者
    getJZ(currentPage,showCount,px){
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd":px,
        "orderBy":{value:"RQRB",dataType:"date"},
        "orderType":"DESC"
      };
      this.$api.post(this.Global.aport4+'/eS_KZ_CZWGMTJZController/getResultListByParams', p,
        r => {
          this.tableData5 = r.data.resultList;
          this.TotalResult3 = r.data.totalResult;
        })
    },
    detailslzxx(n){
        this.xid=n.DTID;
        this.rybh=n.RYBH;
        this.type=0;
        this.lzxxDialogVisible=true;
    },
    detailscrj(n){
     this.xid=n.RGUID;
     this.type=1;
     this.crjDialogVisible=true;
    },
    detailstbry(n){
      this.xid=n.RGUID;
      this.rybh=n.RYBH;
      this.type=1;
      this.tbryDialogVisible=true;
    },
    detailsjz(n){
      this.jzinfo=n;
      this.jzDialogVisible=true;
    },
    detailsnm(n){
      this.nzinfo=n;
      this.nmDialogVisible=true;
    },
    detailsffjl(n){
      this.jlinfo=n;
      this.ffjlDialogVisible=true;
    },

    detailsasj(n){
       this.xid=n.RGUID;
       this.dtid=n.DTID;
       this.type=1;
       this.asjDialogVisible=true;
    },
    detailssj(n){
      this.xid=n.RGUID;
      this.type=1;
      this.sjDialogVisible=true;
   },
   getMX(mm){

     switch (mm) {
     //case 'LXS_SWLZYJ':
     case '0':
         //留学生市外临住预警
         this.$router.push({name:'LXSSWLZ_X',query:{type:0}});
         break;
     // case 'LXS_SKYJ':
      case '1':
      //留学生涉恐预警
      this.$router.push({name:'LXSSKYJ_X',query:{type:1}});
       break;
     // case 'LXS_CRJTX':
     case '2':
      //留学生出入境提醒
      this.$router.push({name:'LXSCRJYJ_X',query:{type:2}});
       break;
     // case 'LZ_HC':
     case '3':
         //临住核查预警
         this.$router.push({name:'LZHCYJ_X',query:{type:3}});
       break;
     // case 'CZ_NMYJ':
     case '4':
        //难民
         this.$router.push({name:'NMXQPHZYJ_X',query:{type:4}});
         break;
     // case 'BKYJ':
     case '5':
        //布控预警
          this.$router.push({name:'ZBKYJ_X',query:{type:5}});
         break;
     // case 'LXS_WBDYJ':
     case '6':
         //留学生录取未报到预警
         this.$router.push({name:'LXSWBDYJ_X',query:{type:6}});
         break;
     // case 'QZ_HCYJ':
     case '7':
          //受理、签发信息核查预警
          this.$router.push({name:'SLQFXXYJ',query:{type:7}});
         break;
     // case 'ASJ_SKGJRY':
     case '8':
         //涉恐国家人员预警
         this.$router.push({name:'SKGJRYXXYJ_X',query:{type:8}});
         break;
     default:
        break;
      }

   },
   getback(){
     this.$router.go(-1)
     // this.getMX(this.row.MXLX);

   },
   addJytSave(){
     if(this.pc.CHANGE_RESON=="" || this.pc.CHANGE_RESON==undefined){
       this.$alert('处理意见不能为空！', '提示', {
         confirmButtonText: '确定',
       });
       return;
     }
     this.pcl.CLJG=this.pc.CHANGE_RESON;
     this.pcl.YJID=this.row.YJID;
     this.pcl.SHZT=this.pc.SHZT;
     this.pcl.CLDW=this.$store.state.orgname;
     this.pcl.CLR=this.withname;
     let p = {
       "pd":this.pcl
     };
     this.$api.post(this.Global.aport4+"/warningInfoController/saveLXS_ZSYJCLJG", p,
       r => {
          if(r.success){
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.$router.go(-1);
          }

       })
   },
  addSaves(){
    if(this.jb=="2"){
    if(this.pc.FJYJ=="" || this.pc.FJYJ==undefined){
      this.$alert('分局调查意见不能为空！', '提示', {
        confirmButtonText: '确定',
      });
      return;
    }
   this.pcl.FJYJ=this.pc.FJYJ;
   this.pcl.CLZT="2";
 }else if(this.jb=="1"||this.org=='320100060000'){
    if(this.pc.ZDYJ=="" || this.pc.ZDYJ==undefined){
      this.$alert('支队处理意见不能为空！', '提示', {
        confirmButtonText: '确定',
      });
      return;
    }
    this.pcl.ZDYJ=this.pc.ZDYJ;
    this.pcl.CLZT="0";
  }else{
    if(this.pc.CLJG=="" || this.pc.CLJG==undefined){
      this.$alert('处理意见不能为空！', '提示', {
        confirmButtonText: '确定',
      });
      return;
    }
   this.pcl.CLJG=this.pc.CLJG;
   this.pcl.CLZT="3";
  }
    this.pcl.YJID=this.row.YJID;
    this.pcl.CLDW=this.$store.state.orgname;
    this.pcl.CLR=this.withname;
    let p = {
      "pd":this.pcl
    };
    let url='/warningInfoController/saveCLJG';
    this.$api.post(this.Global.aport4+url, p,
      r => {
         if(r.success){
           this.$message({
             message: '保存成功',
             type: 'success'
           });
           this.$router.go(-1);
         }
      })
  },
},
}
</script>
<style scoped>
.input-text{width: 30%!important;}
.texth{line-height: 20px;}
</style>
<style>
.el-table--border, .el-table--group {
    border: 1px solid #E5ECF1!important;
}
</style>
