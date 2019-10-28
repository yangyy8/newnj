<template lang="html">
   <div class="ryhx">
    <div class="tshu" id="target">
      <div class="yycontent">
        <el-row>
           <el-col :span="3" style="">
            <div class="photo-content">
              <img :src="imgdm" @click="getZP()" style="height:160px;width:128px;">
              <div class="hisPhoto">
                查看历史照片
              </div>
            </div>
           </el-col>
           <el-col :span="21" class="bainfo">
               <el-row :gutter="3">
                 <el-col :span="8">
                   英文姓名：{{baseinfo.ywxm}}
                 </el-col>
                 <el-col :span="8">
                   中文姓名：{{baseinfo.zwxm}}
                 </el-col>
                 <el-col :span="8">
                   性别：{{baseinfo.xb_desc}}
                 </el-col>
                 <el-col :span="8">
                   国家地区：{{baseinfo.gjdq_desc}}
                 </el-col>
                 <el-col :span="8">
                   出生日期：{{baseinfo.csrq}}
                 </el-col>
                 <el-col :span="8">
                   证件号码：{{baseinfo.zjhm}}
                 </el-col>
               </el-row>
               <el-row class="mb-10">
                 <el-col :span="22">
                   <el-tag
                    v-for="(item,i) in labs"
                    :key="item.BQBH"
                    closable
                    :type="suc[i]"
                    @close="delLable(item.BQBH)">
                    {{item.MC}}
                  </el-tag>
                  <el-button type="primary" plain  size="small" icon="el-icon-plus" @click="addLable" style="margin-left: 10px;">添加标签</el-button>

                   <!-- <span v-for="(item,i) in labs">
                   <el-button :type="suc[i]" size="small" @click="delid(item.BQBH)">{{item.MC}}</el-button>  &nbsp;
                   </span> -->
                   <!-- <span>&nbsp; -->

                     <!-- <el-button type="warning" plain  size="small" icon="el-icon-delete" @click="delLable">删除标签</el-button> -->
                   <!-- </span> -->

                 </el-col>
                 <el-col :span="2">
                   <!-- <el-button type="primary" size="small" @click="ggo()" style="margin-left:15px;">返 回</el-button> -->
                 </el-col>
               </el-row>
           </el-col>
        </el-row>
      </div>

      <div class="yycontent">

        <div class="ak-tabs bb" style="display:flex;justify-content: space-between;margin-bottom:10px">
            <div class="qz" id="box1">签证信息</div>
            <div class="t-flex" style="">
              <!-- <div class="ak-tab-item hand" :class="{'ak-checked':pageQz==0}" @click="pageQz=0;" v-if="tableDataQ.length!=0">
                全部
              </div> -->
              <div class="ak-tab-item hand" :class="{'ak-checked':pageQz==(ind+1)}" @click="pageQz=(ind+1);" v-for="(i,ind) in tabLength">
                证件{{ind+1}}
              </div>
            </div>
        </div>
        <!-- <div v-if="pageQz==0&&tableDataQ.length!=0">
          <el-row :gutter="3" class="bainfo">
            <el-col :span="6">
              证件种类：{{j.xczjzl_desc}}
            </el-col>
            <el-col :span="6">
              证件号码：{{j.xczjhm}}
            </el-col>
            <el-col :span="6">
              证件有效期：{{j.xczjyxqz}}
            </el-col>
          </el-row>
          <el-table
           :data="tableDataQ"
           border
           style="width: 100%;margin-left:5px;" class="stu-table">
           <el-table-column
             prop="qzzl_desc"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="qzhm"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="qzyxqz"
             label="签证有效期">
           </el-table-column>
           <el-table-column
             prop="qzqfjg"
             label="签发单位">
             </el-table-column>
             <el-table-column
               prop="qzqfrq"
               label="签发日期">
             </el-table-column>
             <el-table-column
               prop="qzyxcs"
               label="签证有效次数">
             </el-table-column>
             <el-table-column
               prop="jlxksy_desc"
               label="居留许可事由">
             </el-table-column>
             </el-table>
        </div> -->
        <div v-for="(j,ind) in tabLength" v-if="pageQz==(ind+1)">
          <el-row :gutter="10" class="bainfo t-mb10">
            <el-col :span="3" class="basicInfo">
              证件种类：{{j.paperType.value}}
            </el-col>
            <el-col :span="4" class="basicInfo">
              证件号码：{{j.paperNO}}
            </el-col>
            <el-col :span="4" class="basicInfo">
              证件有效期：{{j.paperExpiredDay}}
            </el-col>
          </el-row>
          <el-table
           :data="j.visaInfo"
           border
           style="width: 100%;margin-left:5px;" class="stu-table">
           <el-table-column
             prop="visaType.value"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="visaNo"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="visaExpiredDay"
             label="签证有效期">
           </el-table-column>
           <el-table-column
             prop="visaAssignmentOrg.value"
             label="签发单位">
             </el-table-column>
             <el-table-column
               prop="visaAssignDay"
               label="签发日期">
             </el-table-column>
             <el-table-column
               prop="visaAvailableTime.value"
               label="签证有效次数">
             </el-table-column>
             <el-table-column
               prop="localizeReason.value"
               label="居留许可事由">
             </el-table-column>
             </el-table>
        </div>
      </div>

      <div class="yycontent">
        <div class="stru-lal bb" id="box2" @click="con1=!con1">出入境记录<i class="el-icon-d-caret"></i></div>
        <div v-show="tableData1.length==0?(!con1):con1">
          <el-table
             :data="tableData1.length==0?tableData1:tableData1.slice((CurrentPage1-1)*pageSize1,CurrentPage1*pageSize1)"
             border
             style="width: 100%;" class="stu-table t-mt10">
             <el-table-column
               prop="ioDate"
               label="出入境日期">
             </el-table-column>
             <el-table-column
               prop="personType.value"
               label="人员类别（出入境状态）">
             </el-table-column>
             <el-table-column
               prop="ioPort.value"
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
        <div class="stru-lal bb" id="box3" @click="con2=!con2">临住信息<i class="el-icon-d-caret"></i></div>
        <div v-show="tableData2.length==0?(!con2):con2">
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
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslzxx(scope.row)"></el-button>
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
        <div class="stru-lal bb" id="box4" @click="con3=!con3">常住信息<i class="el-icon-d-caret"></i></div>
        <div v-show="tableData3.length==0?(!con3):con3">
          <el-table
              :data="tableData3.length==0?tableData3:tableData3.slice((CurrentPage3-1)*pageSize3,CurrentPage3*pageSize3)"
              border
              style="width: 100%" class="stu-table t-mt10">
              <el-table-column
                prop="inhabiDetailAddr"
                label="居住地详细地址">
              </el-table-column>
              <el-table-column
                prop="assignmentOrg_desc"
                label="签发机关">
              </el-table-column>
              <el-table-column
                prop="degreeCode_desc"
                label="身份">
              </el-table-column>
              <el-table-column
                prop="inhabiState_desc"
                label="居住状态">
              </el-table-column>
              <el-table-column
                label="操作" width="120">
                <template slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailscz(scope.row)"></el-button>
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
        <div class="stru-lal bb" id="box5" @click="con4=!con4">案事件记录<i class="el-icon-d-caret"></i></div>
        <div v-show="tableData4.length==0?(!con4):con4">
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
      </div>
        <div class="stru-lal bb" id="box6" @click="con5=!con5">民航进出港信息<i class="el-icon-d-caret"></i></div>
        <div v-show="tableData5.length==0?(!con5):con5">
          <el-table
            :data="tableData5"
            border
            style="width: 100%" class="stu-table t-mt10">
            <el-table-column
              prop="STA_ARVETM"
              label="进港时间">
            </el-table-column>
            <el-table-column
              prop="STA_DEPTTM"
              label="出港时间">
            </el-table-column>
            <el-table-column
              prop="FLT_AIRLCODE"
              label="航空公司代码">
            </el-table-column>
            <el-table-column
              prop="FLT_NUMBER"
              label="航班号">
            </el-table-column>
            <el-table-column
              label="操作" width="120">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsMH(scope.row)"></el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="middle-foot">
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
           :current-page:sync="CurrentPage5"
           :page-size="pageSize5"
           layout="prev, pager, next"
           :total="TotalResult5">
         </el-pagination>
       </div>
     </div>
        <div class="stru-lal bb" id="box7" @click="con6=!con6">单位信息<i class="el-icon-d-caret"></i></div>
        <div v-show="tableData6.length==0?(!con6):con6">
          <el-table
           :data="tableData6"
           border
           style="width: 100%" class="stu-table t-mt10">
           <el-table-column
             prop="GZD_MC"
             label="单位名称">
           </el-table-column>
           <el-table-column
             prop="GZD_ZZJG"
             label="组织机构代码">
           </el-table-column>
           <el-table-column
             prop="XXDZ"
             label="单位地址">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsdw(scope.row)"></el-button>
             </template>
           </el-table-column>
         </el-table>
          <div class="middle-foot">
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
              :current-page:sync="CurrentPage6"
              :page-size="pageSize6"
              layout="prev, pager, next"
              :total="TotalResult6">
            </el-pagination>
          </div>
        </div>
        <div class="stru-lal bb" id="box8" @click="con7=!con7">留学生信息-申请信息<i class="el-icon-d-caret"></i></div>
        <div v-show="tableData7.length==0?(!con7):con7">
          <el-table
          :data="tableData7"
          border
          style="width: 100%" class="stu-table t-mt10">
          <el-table-column
            prop="STAREPORTS"
            label="报到时间">
          </el-table-column>
          <el-table-column
            prop="CFACULTY"
            label="院系中文名称">
          </el-table-column>
          <el-table-column
            prop="ACCACADEMY"
            label="学校名称">
          </el-table-column>
          <el-table-column
            label="操作" width="120">
            <template slot-scope="scope">
            <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslxs(scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
         <div class="page-msg">
           <div class="">
         共{{TotalResult7}}条记录
           </div>
           <div class="">
             每页显示
             <el-select v-model="pageSize7" @change="pageSizeChange7(pageSize7)" placeholder="10" size="mini" class="page-select">
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
             共{{Math.ceil(TotalResult7/pageSize7)}}页
           </div>
         </div>
         <el-pagination
           background
           @current-change="handleCurrentChange7"
           :current-page:sync="CurrentPage7"
           :page-size="pageSize7"
           layout="prev, pager, next"
           :total="TotalResult7">
         </el-pagination>
       </div>
     </div>
       <div class="stru-lal bb" id="box9" @click="con8=!con8">留学生信息-在校信息<i class="el-icon-d-caret"></i></div>
       <div v-show="tableData8.length==0?(!con8):con8">
         <el-table
             :data="tableData8"
             border
             style="width: 100%" class="stu-table t-mt10">
             <el-table-column
               prop="COLLEGENAME"
               label="院系名称">
             </el-table-column>
             <el-table-column
               prop="MAJORNAME"
               label="学习专业">
             </el-table-column>
             <el-table-column
               prop="SIGNUPDATE"
               label="报到时间">
             </el-table-column>
             <el-table-column
               label="操作" width="120">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslxszx(scope.row)"></el-button>
               </template>
             </el-table-column>
           </el-table>
           <div class="middle-foot">
             <div class="page-msg">
               <div class="">
             共{{TotalResult8}}条记录
               </div>
               <div class="">
                 每页显示
                 <el-select v-model="pageSize8" @change="pageSizeChange8(pageSize8)" placeholder="10" size="mini" class="page-select">
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
                 共{{Math.ceil(TotalResult8/pageSize8)}}页
               </div>
             </div>
                 <el-pagination
                   background
                   @current-change="handleCurrentChange8"
                   :current-page:sync="CurrentPage8"
                   :page-size="pageSize8"
                   layout="prev, pager, next"
                   :total="TotalResult8">
                 </el-pagination>
               </div>
             </div>

             <div class="stru-lal bb" id="box10" @click="con9=!con9">通报人员信息<i class="el-icon-d-caret"></i></div>
             <div v-show="tableData9.length==0?(!con9):con9">
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
                   </div>
       <el-dialog title="案事件详情" :visible.sync="asjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
         <ANSJRY :type="type" :xid="xid" :random="randomasj" :rybh="rybh"></ANSJRY>
         <div slot="footer" class="dialog-footer">
           <el-button @click="asjDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
       <el-dialog title="临住信息详情" :visible.sync="lzxxDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
         <LZXXRY :type="type" :xid="xid" :random="randomlzxx" :rybh="rybh" :gjdq="gjdqxq"></LZXXRY>
         <div slot="footer" class="dialog-footer">
           <el-button @click="lzxxDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
       <el-dialog title="常住信息详情" :visible.sync="czDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
         <CZXXRY :type="type" :xid="xid" :random="randomczxx" :rid="rid" :rybh="rybh" :gjdq="gjdqxq"></CZXXRY>
         <div slot="footer" class="dialog-footer">
           <el-button @click="czDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
       <el-dialog title="民航进出港信息详情" :visible.sync="mhDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
         <MHXX :type="type" :xid="xid"></MHXX>
         <div slot="footer" class="dialog-footer">
           <el-button @click="mhDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
       <!-- 出入境信息 -->
      <el-dialog title="出入境信息详情" :visible.sync="crjDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
                <CRJXXRY :type="type" :xid="xid" :random="randomcrj"></CRJXXRY>
                   <div slot="footer" class="dialog-footer">
                     <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
                   </div>
      </el-dialog>
      <!-- 单位信息详情 -->
     <el-dialog title="单位信息详情" :visible.sync="dwDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
               <DWXX :type="type" :xid="xid" :random="new Date().getTime()"></DWXX>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dwDialogVisible = false" size="small">取 消</el-button>
                  </div>
     </el-dialog>

      <!-- 留学生信息详情 -->
      <el-dialog title="留学生申请信息详情" :visible.sync="lxsDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
                  <LXSXX :type="type" :xid="xid" :random="new Date().getTime()"></LXSXX>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="lxsDialogVisible = false" size="small">取 消</el-button>
                  </div>
     </el-dialog>
     <!-- 留学生信息详情 -->
     <el-dialog title="留学生在校信息详情" :visible.sync="lxsZXDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
                 <LXSXXZX :type="type" :xid="xid" :random="new Date().getTime()"></LXSXXZX>
                 <div slot="footer" class="dialog-footer">
                   <el-button @click="lxsZXDialogVisible = false" size="small">取 消</el-button>
                 </div>
    </el-dialog>
    <!-- 通报信息详情 -->
    <el-dialog title="通报人员信息详情" :visible.sync="tbDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
                <TBRYXX  :xid="xid" :random="new Date().getTime()"></TBRYXX>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="tbDialogVisible = false" size="small">取 消</el-button>
                </div>
   </el-dialog>
       </div>
      </div>
<!-- 弹出小的窗口 -->
       <el-dialog title="添加标签" :visible.sync="bqDialogVisible" width="600px">
         <el-row :gutter="1">
           <el-col  :span="24"  class="input-item my-form-group" data-scope="demo1" data-name="labmc" data-type="select"
        v-validate-easy="[['required']]">
              <span class="input-text">标签名称：</span>
              <el-select v-model="labmc" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                <el-option
                  v-for="(item,ind) in labels"
                  :key="ind"
                  :label="item.MC"
                  :value="item.BM+','+item.MC">
                </el-option>
              </el-select>
           </el-col>
         </el-row>
         <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="saveLabls()" size="small">确 定</el-button>
           <el-button @click="bqDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
       <el-dialog title="历史照片" :visible.sync="zpDialogVisible" width="800px">
         <div class="photoCon">
           <div class="photoItem" v-for="img in images">
              <img  :src="img.ZPNR" style="width:100%">
           </div>
         </div>
         <div slot="footer" class="dialog-footer">
           <el-button @click="zpDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
        <transition name="el-zoom-in-top">
         <div class="meunSlid" v-show="menuShow">
           <ul>
             <li v-for="(item,ind) in menu" :key="ind" @click="toTegional(item.id)">{{item.name}}</li>
           </ul>
           <span class="switch el-icon-d-arrow-right hand" @click="menuShow=!menuShow"></span>
         </div>
        </transition>
        <transition name="el-zoom-in-bottom">
         <div class="meunSlidhide" v-show="!menuShow">
           <span class="switchhide el-icon-d-arrow-left hand" @click="menuShow=!menuShow"></span>
         </div>
        </transition>
   </div>
</template>
<script scoped>
import LZXXRY from './lzxxxq_ry'
import ANSJRY from './ansjxq_ry'
import CRJXXRY from './crjxq_ry'
import LXSXX from '../../../common/lxsxx_xq'
import LXSXXZX from '../../../common/lxsZx_xq'
import CZXXRY from './czxxxq_ry'
import DWXX from '../../../common/dwxx_xq'
import MHXX from '../../../common/mhjcg_xq'
import TBRYXX from '../../../common/tbryxx_xq'
import imgUrl from '../../../../assets/img/mrzp.png'
export default{
    components:{LZXXRY,ANSJRY,CRJXXRY,LXSXX,CZXXRY,DWXX,MHXX,LXSXXZX,TBRYXX},
  data(){
    return{
      con1:true,
      con2:true,
      con3:true,
      con4:true,
      con5:true,
      con6:true,
      con7:true,
      con8:true,
      con9:true,
      menu:[
        {
          name:'签证信息',
          id:'box1'
        },
        {
          name:'出入境信息',
          id:'box2'
        },
        {
          name:'临住信息',
          id:'box3'
        },
        {
          name:'常住信息',
          id:'box4'
        },
        {
          name:'案事件记录',
          id:'box5'
        },
        {
          name:'民航进出港信息',
          id:'box6'
        },
        {
          name:'单位信息',
          id:'box7'
        },
        {
          name:'留学生信息',
          id:'box8'
        },
        {
          name:'通报人员信息',
          id:'box10'
        },
      ],
      menuShow:true,
      rybh:'',
      tabLength:[],
      pageQz:1,
      suc:['success','info','warning','danger','primary'],
      colorType:'',
       baseinfo:{},
       row:{},
       labmc:'',
       zjhm:'',
       labs:[],
       labels:[],
       images:[],
       type:2,
       xid:'',
       randomcrj:'',
       randomlzxx:'',
       randomczxx:'',
       randomasj:'',
       rid:{},
       pd:{},
       imgdm:imgUrl,
       moveid:'',
       // imgshow:true,
       bqDialogVisible:false,
       zpDialogVisible:false,
       lzxxDialogVisible:false,
       crjDialogVisible:false,
       asjDialogVisible:false,
       lxsDialogVisible:false,
       czDialogVisible:false,
       dwDialogVisible:false,
       mhDialogVisible:false,
       lxsZXDialogVisible:false,
       tbDialogVisible:false,
       tableData1:[],
       tableData2:[],
       tableData3:[],
       tableData4:[],
       tableData5:[],
       tableData6:[],
       tableData7:[],
       tableData8:[],
       tableData9:[],
       tableData10:[],
       tableData11:[],
       tableDataQ:[],
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
       CurrentPage7: 1,
       pageSize7: 10,
       TotalResult7: 0,
       CurrentPage8: 1,
       pageSize8: 10,
       TotalResult8: 0,
       CurrentPage9: 1,
       pageSize9: 10,
       TotalResult9: 0,
       options: this.pl.ps,
       gjdq:'',
       gjdqxq:'',
    }
  },
  activated(){
    this.bqDialogVisible=false;
    this.zpDialogVisible=false;
    this.lzxxDialogVisible=false;
    this.crjDialogVisible=false;
    this.asjDialogVisible=false;
    this.lxsDialogVisible=false;
    this.czDialogVisible=false;
    this.dwDialogVisible=false;
    this.mhDialogVisible=false;
    this.lxsZXDialogVisible=false;
    this.row=this.$route.query.row;
    this.zjhm=this.$route.query.zjhm;
    this.gjdq=this.$route.query.gjdq;
    if(this.zjhm!="" && this.zjhm!=undefined){
      this.pd.ZJHM=this.zjhm;
    }else if(this.row.RYBH){
      this.pd.RYBH=this.row.RYBH;
    }else{
      this.pd.RYBH=""
    }
    if(this.gjdq){
      this.pd.GJDQ=this.gjdq
    }else{
      this.pd.GJDQ=''
    }
    this.getRYXX();
    this.getLable();
    this.getZXZP();
    this.getCrj(this.CurrentPage1,this.pageSize1,this.pd);
    this.getLzxx(this.CurrentPage2, this.pageSize2,this.pd);
    this.getCZXX(this.CurrentPage3,this.pageSize3,this.pd);
    this.getASJXX(this.CurrentPage4,this.pageSize4,this.pd);
    this.getMHJCGXX(this.CurrentPage5,this.pageSize5,this.pd);
    this.getDWJBXX(this.CurrentPage6,this.pageSize6,this.pd);
    this.getLXSXX(this.CurrentPage7,this.pageSize7,this.pd);
    this.getLXSXXZXXX(this.CurrentPage8,this.pageSize8,this.pd);
    this.getTbxx(this.CurrentPage9,this.pageSize9
      ,this.pd);
    this.getQZXX(this.pd);
    // this.getZJXX(this.pd);
  },
  // watch:{
  //   $route:function(val){
  //     console.log("==============",val)
  //   }
  // },
  mounted(){
    this.bqDialogVisible=false;
    this.zpDialogVisible=false;
    this.lzxxDialogVisible=false;
    this.crjDialogVisible=false;
    this.asjDialogVisible=false;
    this.lxsDialogVisible=false;
    this.czDialogVisible=false;
    this.dwDialogVisible=false;
    this.mhDialogVisible=false;
    this.lxsZXDialogVisible=false;
  },
  methods:{
    toTegional(id){
      console.log()
      document.querySelector('#'+id).scrollIntoView(true);
    },
    pageSizeChange1(val) {
      this.pageSize1=val;
      //   this.getCrj(this.CurrentPage1,val,this.pd);
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      //   this.getCrj(val,this.pageSize1,this.pd);
      // console.log(`当前页: ${val}`);
      this.CurrentPage1=val;
    },
    pageSizeChange2(val) {
      this.pageSize2=val;
      // this.getLzxx(this.CurrentPage2, val,this.pd);
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange2(val) {
      // this.getLzxx(val, this.pageSize2,this.pd);
      // console.log(`当前页: ${val}`);
      this.CurrentPage2=val;
    },
    pageSizeChange3(val) {
      // this.getCZXX(this.CurrentPage3,val,this.pd)
      // console.log(`每页 ${val} 条`);
      this.pageSize3=val;
    },
    handleCurrentChange3(val) {
      // this.getCZXX(val,this.pageSize3,this.pd)
      // console.log(`当前页: ${val}`);
      this.CurrentPage3=val;
    },
    pageSizeChange4(val) {
    // this.getASJXX(this.CurrentPage4,val,this.pd);
    //   console.log(`每页 ${val} 条`);
    this.pageSize4=val;
    },
    handleCurrentChange4(val) {
      // this.getASJXX(val,this.pageSize4,this.pd);
      // console.log(`当前页: ${val}`);
      this.CurrentPage4=val;
    },
    pageSizeChange5(val) {
        this.getMHJCGXX(this.CurrentPage5,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange5(val) {
        this.getMHJCGXX(val,this.pageSize5,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange6(val) {
      this.getDWJBXX(this.CurrentPage6,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange6(val) {
      this.getDWJBXX(val,this.pageSize6,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange7(val) {
        this.getLXSXX(this.CurrentPage7,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange7(val) {
      this.getLXSXX(val,this.pageSize7,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange8(val) {
      this.getLXSXXZXXX(this.CurrentPage8,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange8(val) {
      this.getLXSXXZXXX(val,this.pageSize8,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange9(val) {
      this.getTbxx(this.CurrentPage9,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange9(val) {
      this.getTbxx(val,this.pageSize9,this.pd);
      console.log(`当前页: ${val}`);
    },
    //最新照片
    getZXZP(){
      let p = {
        "pd": this.pd,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getrytpxxpro', p,
        r => {
          this.imgdm = imgUrl
          if(r.data.ZPNR){
            this.imgdm = r.data.ZPNR;
          }
        })
    },
    //人员基本信息
    getRYXX(){
      let p = {
        "certificateNO": this.zjhm,
        "GJDQ":this.gjdq
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getryryxx', p,
        r => {
          // if(r.data.resultList.length!=0){
            this.baseinfo = r.data;
            this.rybh = r.data.RYBH;
            this.gjdqxq = r.data.gjdq;
          // }
        })
    },
    //获取标签
    getLable(){
      let p = {
        "pd": this.pd,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getrybqxx', p,
        r => {
          var arrAfter=[];
          var arrReal=[];
          for(var i=0;i<r.data.resultList.length;i++){
            if(arrAfter.indexOf(r.data.resultList[i].MC)==-1){
              arrAfter.push(r.data.resultList[i].MC);
              arrReal.push(r.data.resultList[i])
            }
          }
          this.labs = arrReal;
        })
    },
     //获取标签标签
    addLable(){
      this.bqDialogVisible=true;
      this.labmc='';
      this.$api.post(this.Global.aport3+'/ryhx/getreslab',{},
        r => {
          this.labels = r.data.resultList;
          // let rand = Math.floor( Math.random() * this.suc.length );
          // console.log('rand',rand)
          // this.colorType = this.suc.slice(rand, 1)[0];
          this.getLable();
        })
        this.V.$reset('demo1')
    },
    //保存标签
    saveLabls(){
      this.V.$submit('demo1', (canSumit,data) => {
        if(!canSumit) return
        var srr=this.labmc.split(',');
        let p={
          // "RYBH":this.row.RYBH||this.rybh,
          "BM":srr[0],
          "MC":srr[1],
        };
        if(this.row){
          p.RYBH=this.row.RYBH
        }else if(this.rybh){
          p.RYBH=this.rybh
        }else{
          p.RYBH=''
        }
        this.$api.post(this.Global.aport3+'/ryhx/addrybqbyrybh', p,
          r => {
            if(r.success){
              this.$message({
                message: '保存成功',
                type: 'success'
              });
             this.bqDialogVisible=false;
             this.getLable();
            }else {
              this.$message.error(r.message);return;
            }
          })
      })

    },
    delid(dm){

      this.moveid=dm;
    },
    // 删除标签
    delLable(i){
      if(i==""||i==undefined){
        this.$message.error("请选择标签!");
        return;
      }
      let p={
        "BQBH":i,
      };
      if(this.row){
        p.RYBH=this.row.RYBH
      }else if(this.rybh){
        p.RYBH=this.rybh
      }else{
        p.RYBH=''
      }
      this.$api.post(this.Global.aport3+'/ryhx/deleterybqbyrybh', p,
        r => {
          if(r.success){
            this.$message({
              message: '删除成功',
              type: 'success'
            });
           this.getLable();
          }else {
            this.$message.error(r.message);
          }
        })

    },
    //历史照片
    getZP(){
      this.pd={};
      if(this.row){
        this.pd.RYBH=this.row.RYBH;
      }else if(this.rybh){
        this.pd.RYBH=this.rybh;
      }else{
        this.pd.RYBH='';
      }
      if(this.gjdq){
        this.pd.GJDQ=this.gjdq
      }else{
        this.pd.GJDQ=''
      }
      let p={
        "pd":this.pd,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getrytpxx', p,
        r => {
          this.images = r.data.resultList;
        })
      this.zpDialogVisible=true;
    },
    //出入境
    getCrj(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
      	"showCount":showCount,
        // "pd":pd
        "certificateNO":this.zjhm,
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getcrjjl', p,
        r => {
          this.tableData1 = r.data;
          console.log(this.tableData1.length)
          this.TotalResult1=r.data.length;
        })
    },
    //临住信息
    getLzxx(currentPage,showCount,pd){
      let p={
        // "currentPage":currentPage,
        // "showCount":showCount,
        // "pd":pd
        "paperNO":this.zjhm,
        "nationality":this.gjdq

      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getlzxx', p,
        r => {
          this.tableData2 = r.data.info;
          this.TotalResult2=r.data.info.length;
        })
    },
    // 常住信息
    getCZXX(currentPage,showCount,pd){
      let p={
        // "currentPage":currentPage,
        // "showCount":showCount,
        // "pd":pd
        "paperNO":this.zjhm,
        "nationality":this.gjdq
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getczxx', p,
        r => {
          this.tableData3 = r.data.info;
          this.TotalResult3=r.data.info.length;
        })
    },
    // 案事件
    getASJXX(currentPage,showCount,pd){
      let p={
        // "currentPage":currentPage,
        // "showCount":showCount,
        // "pd":pd
        "paperNO":this.zjhm,
        "nationality":this.gjdq

      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getajjbxx', p,
        r => {
          this.tableData4 = r.data;
          this.TotalResult4=r.data.length;
        })
    },
    // 民航进出港
    getMHJCGXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd

      };
      this.$api.post(this.Global.aport3+'/ryhx/getstmhjgxxn', p,
        r => {
          this.tableData5 = r.data.resultList;
          this.TotalResult5=r.data.totalResult;
        })
    },
    // 单位基本信息
    getDWJBXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd

      };
      this.$api.post(this.Global.aport3+'/ryhx/getczgzdxx', p,
        r => {
          this.tableData6 = r.data.resultList;
          this.TotalResult6=r.data.totalResult;
        })
    },
    // 留学生基本信息
    getLXSXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd
      };
      this.$api.post(this.Global.aport3+'/ryhx/getlxjsbaseinfo', p,
        r => {
          this.tableData7 = r.data.resultList;
          this.TotalResult7=r.data.totalResult;
        })
    },
    // 留学生基本信息 在校信息
    getLXSXXZXXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd
      };
      this.$api.post(this.Global.aport3+'/ryhx/getzyxdcrjstudent', p,
        r => {
          this.tableData8 = r.data.resultList;
          this.TotalResult8=r.data.totalResult;
        })
    },
    //证件信息
    // getZJXX(pd){
    //   let p={
    //     "currentPage":"1",
    //     "showCount":"1",
    //     "pd":pd,
    //     "orderBy":"RJRQ",
    //     "orderType":"DESC"
    //   };
    //   this.$api.post(this.Global.aport3+'/ryhx/getryjwryzj', p,
    //     r => {
    //       this.tableData10 = r.data.resultList;
    //     })
    // },
    //签证信息
    getQZXX(pd){
      let p={
        "passportNO":this.zjhm,
        "nationality":this.gjdq
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getwgrzjxx', p,
        r => {
          this.tabLength = r.data.paperInfo;
          this.tableDataQ = r.data.wgrqzxxs;
        })
    },
    //通报信息
    getTbxx(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd
      };
      this.$api.post(this.Global.aport3+'/ryhx/gettbryjbxx', p,
        r => {
          this.tableData9 = r.data.resultList;
          this.TotalResult9=r.data.totalResult;
        })
    },
    //通报详情
    detailstbxx(val){
      this.xid=val;
      target.scrollIntoView();
      this.tbDialogVisible=true;
    },
    //出入境详情
    detailscrj(n){
        this.xid=n;
        this.randomcrj=new Date().getTime();
        target.scrollIntoView();
        this.crjDialogVisible=true;
    },
    //临住信息详情
    detailslzxx(n){
      this.xid=n;
      this.randomlzxx=new Date().getTime();
      target.scrollIntoView();
      this.lzxxDialogVisible=true;
    },
    //案事件信息详情
    detailsasj(n){
      this.xid=n;
      this.randomasj=new Date().getTime();
      target.scrollIntoView();
      this.asjDialogVisible=true;
    },
    //留学生申请信息
    detailslxs(n){
      this.xid=n;
      this.type=2;
      target.scrollIntoView();
      this.lxsDialogVisible=true;
    },
    //留学生在校信息
    detailslxszx(n){
      this.xid=n;
      target.scrollIntoView();
      this.lxsZXDialogVisible=true;
    },
    //常住信息详情
    detailscz(n){
      this.xid=n.DTID;
      this.rid=n;
      this.randomczxx=new Date().getTime();
      target.scrollIntoView();
      this.czDialogVisible=true;
    },
    detailsdw(n){
      // this.xid=n.RGUID;
      // this.type=2;
      this.xid=n;
      target.scrollIntoView();
      this.dwDialogVisible=true;
    },
    detailsMH(n)
    {
      this.xid=n.RGUID;
      this.mhDialogVisible==true;
    },
    ggo(){
      console.log('-----',this.$route.query.stype);
      if(this.$route.query.stype!=undefined){
      var tt=this.$route.query.stype;
      var cc=this.$route.query.zjhmes;

      if((tt!=undefined && tt!="") || (cc!=undefined && cc!=""))
      {
        this.$router.push({name:'QWJS',query:{zjhmes:cc,stype:tt}})
      }else {
          this.$router.go(-1);
      }
    }else {
      this.$router.go(-1);
    }
    },
  },
}
</script>
<style scoped>
.bainfo{font-size: 12px;line-height: 30px; padding-left:15px;}
.middle-foot{ margin-top: 10px;}
.v-modal{background: none!important;}
</style>
