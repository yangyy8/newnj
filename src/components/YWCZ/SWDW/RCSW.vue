<template lang="html">
  <div class="yymain">
    <div class="yycontent">
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="t-bjxq">
            <!-- <img :src="imgURL" alt="" style="width:100%;"> -->
            <div class="del-title">
              <span>个人信息</span>
            </div>
            <div v-if="$route.query.hiType=='gzc'">
              <div class="border-bot">
                <div class="t-el-content del-pb"><div class="t-el-text">英文姓：</div><div class="t-el-sub fw600">{{gzinfo.YWX}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">英文名：</div><div class="t-el-sub fw600">{{gzinfo.YWM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">国籍：</div><div class="t-el-sub fw600">{{gzinfo.GJDQ_DESC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">公证处单位：</div><div class="t-el-sub fw600">{{gzinfo.GZCDW}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">护照号码：</div><div class="t-el-sub fw600">{{gzinfo.HZHM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">曾持护照号码：</div><div class="t-el-sub fw600">{{gzinfo.CCHZHM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">核查开始时间：</div><div class="t-el-sub fw600">{{gzinfo.HCSJDSTART}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">核查结束时间：</div><div class="t-el-sub fw600">{{gzinfo.HCSJDEND}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">数据上报时间：</div><div class="t-el-sub fw600">{{gzinfo.SBSJ}}</div></div>
              </div>
              <div class="t-mt20 border-bot t-pb20">
                <div class="del-title">
                  <span>文件列表</span>
                </div>
                <el-table
                   :data="tableDatagzc"
                   border
                   style="width: 100%" class="stu-table">
                   <el-table-column
                     prop="FILENAME"
                     label="附件名">
                   </el-table-column>
                   <el-table-column
                     label="操作">
                     <template slot-scope="scope">
                       <el-button type="text"  class="a-btn"  title="下载" icon="el-icon-download" @click="downFiles(scope.row.DTID,scope.row.FILENAME,scope.row.SJPAPERTYPE)"></el-button>
                     </template>
                   </el-table-column>
                 </el-table>
              </div>
              <div class="t-mt20">
                <div class="del-title">
                  <span>图片展示</span>
                </div>
                <el-carousel height="220px" class="photoCar">
                  <el-carousel-item v-for="(item,ind) in imagegzc" :key="ind" v-if="imgshowgzc" style="text-align:center">
                    <img  :src="item.NR_DESC" @click="opentp(item.NR_DESC)">
                  </el-carousel-item>
                  <el-carousel-item v-if="!imgshowgzc" style="text-align:center">
                    <img :src="imgURL" @click="opentp(imgURL)">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-if="$route.query.hiType=='wlj'">
              <div class="border-bot">
                <div class="t-el-content del-pb"><div class="t-el-text">姓名：</div><div class="t-el-sub fw600">{{wljinfo.XM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">国籍：</div><div class="t-el-sub fw600">{{wljinfo.GJDQ_DESC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">上报单位：</div><div class="t-el-sub fw600">{{wljinfo.SBDWMC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">证件号码：</div><div class="t-el-sub fw600">{{wljinfo.ZJHM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">数据上报时间：</div><div class="t-el-sub fw600">{{wljinfo.SBSJ}}</div></div>
              </div>
              <div class="t-mt20 border-bot t-pb20">
                <div class="del-title">
                  <span>文件列表</span>
                </div>
                <el-table
                   :data="tableDatawlj"
                   border
                   style="width: 100%" class="stu-table">
                   <el-table-column
                     prop="FILENAME"
                     label="附件名">
                   </el-table-column>
                   <el-table-column
                     label="操作">
                     <template slot-scope="scope">
                       <el-button type="text"  class="a-btn"  title="下载" icon="el-icon-download" @click="downFiles(scope.row.DTID,scope.row.FILENAME,scope.row.SJPAPERTYPE)"></el-button>
                     </template>
                   </el-table-column>
                 </el-table>
              </div>
              <div class="t-mt20">
                <div class="del-title">
                  <span>图片展示</span>
                </div>
                <el-carousel height="220px" class="photoCar">
                  <el-carousel-item v-for="(item,ind) in imagewlj" :key="ind" v-if="imgshowwlj" style="text-align:center">
                    <img  :src="item.NR_DESC" @click="opentp(item.NR_DESC)">
                  </el-carousel-item>
                  <el-carousel-item v-if="!imgshowwlj" style="text-align:center">
                    <img :src="imgURL" @click="opentp(imgURL)">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-if="$route.query.hiType=='zxx'">
              <div class="border-bot">
                <div class="t-el-content del-pb"><div class="t-el-text">英文姓：</div><div class="t-el-sub fw600">{{zxxinfo.YWX}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">英文名：</div><div class="t-el-sub fw600">{{zxxinfo.YWM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">国籍：</div><div class="t-el-sub fw600">{{zxxinfo.GJDQ_DESC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">证件号码：</div><div class="t-el-sub fw600">{{zxxinfo.ZJHM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">签证种类：</div><div class="t-el-sub fw600">{{zxxinfo.QZZL_DESC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">停留有效期：</div><div class="t-el-sub fw600">{{zxxinfo.TLYXQ_DESC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">婚姻状态：</div><div class="t-el-sub fw600">{{zxxinfo.HYZT}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">宗教信仰：</div><div class="t-el-sub fw600">{{zxxinfo.ZJXY}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">学历：</div><div class="t-el-sub fw600">{{zxxinfo.XL}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">职业资格：</div><div class="t-el-sub fw600">{{zxxinfo.ZYZG}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">授课课程：</div><div class="t-el-sub fw600">{{zxxinfo.SKKC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">手机号码：</div><div class="t-el-sub fw600">{{zxxinfo.SJHM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">电子邮箱：</div><div class="t-el-sub fw600">{{zxxinfo.DZYX}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">境内联系人：</div><div class="t-el-sub fw600">{{zxxinfo.JNLXR}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">联系人手机号码：</div><div class="t-el-sub fw600">{{zxxinfo.LXRSJHM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">居住地址：</div><div class="t-el-sub fw600">{{zxxinfo.JZDZ}}</div></div>
              </div>
              <div class="t-mt20 border-bot t-pb20">
                <div class="del-title">
                  <span>文件列表</span>
                </div>
                <el-table
                   :data="tableDatazxx"
                   border
                   style="width: 100%" class="stu-table">
                   <el-table-column
                     prop="FILENAME"
                     label="附件名">
                   </el-table-column>
                   <el-table-column
                     label="操作">
                     <template slot-scope="scope">
                       <el-button type="text"  class="a-btn"  title="下载" icon="el-icon-download" @click="downFiles(scope.row.DTID,scope.row.FILENAME,scope.row.SJPAPERTYPE)"></el-button>
                     </template>
                   </el-table-column>
                 </el-table>
              </div>
              <div class="t-mt20">
                <div class="del-title">
                  <span>图片展示</span>
                </div>
                <el-carousel height="220px" class="photoCar">
                  <el-carousel-item v-for="(item,ind) in imagezxx" :key="ind" v-if="imgshowzxx" style="text-align:center">
                    <img  :src="item.NR_DESC" @click="opentp(item.NR_DESC)">
                  </el-carousel-item>
                  <el-carousel-item v-if="!imgshowzxx" style="text-align:center">
                    <img :src="imgURL" @click="opentp(imgURL)">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-if="$route.query.hiType=='gx'">
              <div class="border-bot">
                <div class="t-el-content del-pb"><div class="t-el-text">姓名：</div><div class="t-el-sub fw600">{{gxinfo.XM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">国籍：</div><div class="t-el-sub fw600">{{gxinfo.GJDQ_DESC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">护照号码：</div><div class="t-el-sub fw600">{{gxinfo.HZHM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">上报单位：</div><div class="t-el-sub fw600">{{gxinfo.SBDWMC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">核查时间：</div><div class="t-el-sub fw600">{{gxinfo.HCSJ}}</div></div>
              </div>
              <div class="t-mt20 border-bot t-pb20">
                <div class="del-title">
                  <span>文件列表</span>
                </div>
                <el-table
                   :data="tableDatagx"
                   border
                   style="width: 100%" class="stu-table">
                   <el-table-column
                     prop="FILENAME"
                     label="附件名">
                   </el-table-column>
                   <el-table-column
                     label="操作">
                     <template slot-scope="scope">
                       <el-button type="text"  class="a-btn"  title="下载" icon="el-icon-download" @click="downFiles(scope.row.DTID,scope.row.FILENAME,scope.row.SJPAPERTYPE)"></el-button>
                     </template>
                   </el-table-column>
                 </el-table>
              </div>
              <div class="t-mt20">
                <div class="del-title">
                  <span>图片展示</span>
                </div>
                <el-carousel height="220px" class="photoCar">
                  <el-carousel-item v-for="(item,ind) in imagegx" :key="ind" v-if="imgshowgx" style="text-align:center">
                    <img  :src="item.NR_DESC" @click="opentp(item.NR_DESC)">
                  </el-carousel-item>
                  <el-carousel-item v-if="!imgshowgx" style="text-align:center">
                    <img :src="imgURL" @click="opentp(imgURL)">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-if="$route.query.hiType=='slry'">
              <div class="border-bot">
                <div class="t-el-content del-pb"><div class="t-el-text">姓名：</div><div class="t-el-sub fw600">{{slryinfo.XM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">国籍：</div><div class="t-el-sub fw600">{{slryinfo.GJDQ_DESC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">护照号码：</div><div class="t-el-sub fw600">{{slryinfo.HZHM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">失联时间：</div><div class="t-el-sub fw600">{{slryinfo.SLSJ}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">简要情况：</div><div class="t-el-sub fw600">{{slryinfo.JYQK}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">手机号码：</div><div class="t-el-sub fw600">{{slryinfo.SJHM}}</div></div>
              </div>
              <div class="t-mt20 border-bot t-pb20">
                <div class="del-title">
                  <span>文件列表</span>
                </div>
                <el-table
                   :data="tableDataslry"
                   border
                   style="width: 100%" class="stu-table">
                   <el-table-column
                     prop="FILENAME"
                     label="附件名">
                   </el-table-column>
                   <el-table-column
                     label="操作">
                     <template slot-scope="scope">
                       <el-button type="text"  class="a-btn"  title="下载" icon="el-icon-download" @click="downFiles(scope.row.DTID,scope.row.FILENAME,scope.row.SJPAPERTYPE)"></el-button>
                     </template>
                   </el-table-column>
                 </el-table>
              </div>
              <div class="t-mt20">
                <div class="del-title">
                  <span>图片展示</span>
                </div>
                <el-carousel height="220px" class="photoCar">
                  <el-carousel-item v-for="(item,ind) in imageslry" :key="ind" v-if="imgshowslry" style="text-align:center">
                    <img  :src="item.NR_DESC" @click="opentp(item.NR_DESC)">
                  </el-carousel-item>
                  <el-carousel-item v-if="!imgshowslry" style="text-align:center">
                    <img :src="imgURL" @click="opentp(imgURL)">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-if="$route.query.hiType=='jlxk'">
              <div class="border-bot">
                <div class="t-el-content del-pb"><div class="t-el-text">姓名：</div><div class="t-el-sub fw600">{{jlxkinfo.XM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">国籍：</div><div class="t-el-sub fw600">{{jlxkinfo.GJDQ_DESC}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">护照号码：</div><div class="t-el-sub fw600">{{jlxkinfo.HZHM}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">签证有效期：</div><div class="t-el-sub fw600">{{jlxkinfo.QZYXQZ}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">申请作废原因：</div><div class="t-el-sub fw600">{{jlxkinfo.SQZFYY}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">申请时间：</div><div class="t-el-sub fw600">{{jlxkinfo.SQSJ}}</div></div>
                <div class="t-el-content del-pb"><div class="t-el-text">上报单位：</div><div class="t-el-sub fw600">{{jlxkinfo.SBDWMC}}</div></div>
              </div>
              <div class="t-mt20 border-bot t-pb20">
                <div class="del-title">
                  <span>文件列表</span>
                </div>
                <el-table
                   :data="tableDatajlxk"
                   border
                   style="width: 100%" class="stu-table">
                   <el-table-column
                     prop="FILENAME"
                     label="附件名">
                   </el-table-column>
                   <el-table-column
                     label="操作">
                     <template slot-scope="scope">
                       <el-button type="text"  class="a-btn"  title="下载" icon="el-icon-download" @click="downFiles(scope.row.DTID,scope.row.FILENAME,scope.row.SJPAPERTYPE)"></el-button>
                     </template>
                   </el-table-column>
                 </el-table>
              </div>
              <div class="t-mt20">
                <div class="del-title">
                  <span>图片展示</span>
                </div>
                <el-carousel height="220px" class="photoCar">
                  <el-carousel-item v-for="(item,ind) in imagejlxk" :key="ind" v-if="imgshowjlxk" style="text-align:center">
                    <img  :src="item.NR_DESC" @click="opentp(item.NR_DESC)">
                  </el-carousel-item>
                  <el-carousel-item v-if="!imgshowjlxk" style="text-align:center">
                    <img :src="imgURL" @click="opentp(imgURL)">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div v-if="$route.query.hiType=='rysh'">
              <div class="t-el-content del-pb"><div class="t-el-text">姓名：</div><div class="t-el-sub fw600">{{ryshinfo.XM}}</div></div>
              <div class="t-el-content del-pb"><div class="t-el-text">性别：</div><div class="t-el-sub fw600">{{ryshinfo.XB_DESC}}</div></div>
              <div class="t-el-content del-pb"><div class="t-el-text">国籍：</div><div class="t-el-sub fw600">{{ryshinfo.GJDQ_DESC}}</div></div>
              <div class="t-el-content del-pb"><div class="t-el-text">单位名称：</div><div class="t-el-sub fw600">{{ryshinfo.SSDWMC}}</div></div>
              <div class="t-el-content del-pb"><div class="t-el-text">单位类别：</div><div class="t-el-sub fw600">{{ryshinfo.DWLB}}</div></div>
              <div class="t-el-content del-pb"><div class="t-el-text">出生日期：</div><div class="t-el-sub fw600">{{ryshinfo.CSRQ}}</div></div>
              <div class="t-el-content del-pb"><div class="t-el-text">身份证号：</div><div class="t-el-sub fw600">{{ryshinfo.ZJHM}}</div></div>
              <div class="t-el-content del-pb"><div class="t-el-text">联系方式：</div><div class="t-el-sub fw600">{{ryshinfo.LXFS}}</div></div>
            </div>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="t-bjrt">
            <div v-if="$route.query.hiType=='zxx'||$route.query.hiType=='gx'||$route.query.hiType=='slry'||$route.query.hiType=='jlxk'" class="t-mb16">
              <div class="sw-title hand bb" @click="con1=!con1">临住信息<i class="el-icon-d-caret"></i></div>
              <div v-show="tableData.length==0?(!con1):con1" class="t-mt10">
                <el-table
                   ref="multipleTable"
                   :data="tableData"
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
            </div>

            <div v-if="$route.query.hiType=='zxx'||$route.query.hiType=='gx'||$route.query.hiType=='slry'||$route.query.hiType=='jlxk'" class="t-mb16">
             <div class="sw-title hand bb" @click="con2=!con2">出入境信息<i class="el-icon-d-caret"></i></div>
             <div v-show="tableData1.length==0?(!con2):con2" class="t-mt10">
               <el-table
                  ref="multipleTable"
                  :data="tableData1"
                  border
                  style="width: 100%" class="stu-table sw-table">
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
            </div>

            <div v-if="$route.query.hiType=='gzc'||$route.query.hiType=='wlj'||$route.query.hiType=='zxx'||$route.query.hiType=='slry'" class="t-mb16">
              <div class="sw-title hand bb" @click="con3=!con3">案事件信息<i class="el-icon-d-caret"></i></div>
              <div v-show="asjData.length==0?(!con3):con3" class="t-mt10">
                <el-table
                   :data="asjData"
                   border
                   style="width: 100%" class="stu-table sw-table">
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
              </div>
            </div>
            <div v-if="$route.query.hiType=='wlj'" class="t-mb16">
             <div class="sw-title hand bb" @click="con4=!con4">通报人员信息<i class="el-icon-d-caret"></i></div>
             <div v-show="tableData3.length==0?(!con4):con4" class="t-mt10">
               <el-table
                  :data="tableData3"
                  border
                  style="width: 100%" class="stu-table sw-table">
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
            </div>
            <div v-if="$route.query.hiType=='zxx'||$route.query.hiType=='slry'" class="t-mb16">
              <div class="sw-title hand bb" @click="con5=!con5">警综渉警信息<i class="el-icon-d-caret"></i></div>
              <div v-show="sjtableData.length==0?(!con5):con5" class="t-mt10">
                <el-table
                   ref="multipleTable"
                   :data="sjtableData"
                   border
                   style="width: 100%" class="stu-table sw-table">
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
            </div>

            <div v-if="$route.query.hiType=='zxx'||$route.query.hiType=='gx'||$route.query.hiType=='slry'||$route.query.hiType=='jlxk'" class="t-mb16">
              <div class="sw-title hand bb" @click="con6=!con6">签证信息<i class="el-icon-d-caret"></i></div>
              <div v-show="tableData5.length==0?(!con6):con6" class="t-mt10">
                <el-table
                     ref="multipleTable"
                     :data="tableData5"
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
                            <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsqz(scope.row)"></el-button>
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
             </div>
             <!-- <div v-if="$route.query.hiType=='jlxk'" class="t-mb16">
               <el-table
                  :data="tableDatajlxk"
                  border
                  style="width: 100%" class="stu-table sw-table">
                  <el-table-column
                    prop="FILENAME"
                    label="文件名">
                  </el-table-column>
                  <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                      <el-button type="text" class="a-btn"  title="预览"  icon="el-icon-view" @click="viewFiles(scope.row.state)"></el-button>
                      <el-button type="text"  class="a-btn"  title="下载" icon="el-icon-download" @click="downFiles(scope.row.state)"></el-button>
                    </template>
                  </el-table-column>
                </el-table>
             </div> -->
             <div v-if="$route.query.hiType=='jlxk'" class="t-mb16">
               <el-table
                  :data="tableDatajlxklb"
                  border
                  style="width: 100%" class="stu-table sw-table">
                  <el-table-column
                    prop="FILENAME"
                    label="文件名">
                  </el-table-column>
                  <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                      <el-button type="text"  class="a-btn"  title="下载" icon="el-icon-download" @click="downloadJlxklb(scope.row.state)"></el-button>
                    </template>
                  </el-table-column>
                </el-table>
             </div>
            <div v-if="$route.query.hiType=='rysh'">
              <div>
                <img src="../../../assets/img/author-img.png" style="vertical-align: -5px;">
                <span class="aImg-title">授权申请图片</span>
              </div>
              <div class="t-mt15 t-mb28">
                <el-carousel height="400px" style="overflow-x:unset;text-align:center">
                  <el-carousel-item v-for="(item,index) in imgArr" :key="index" v-if="imgshow1">
                    <img  :src="item.NR_DESC" style="height: 352px;width: 600px;" @click="opentp(item.NR_DESC)">
                  </el-carousel-item>
                  <el-carousel-item v-if="!imgshow1" style="text-align:center">
                    <img  :src="imgURL" style="height: 352px;width: 600px;" @click="opentp(imgURL)">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div class="t-check" v-if="$route.query.hiType!='rysh'">
               <div class="aImg-title t-mb10">核查处理</div>
               <el-row v-if="$route.query.hiType=='slry'||$route.query.hiType=='jlxk'">
                 <el-col :span="20" class="input-item t-mb10">
                   <span class="input-text t-mb10" style="width:70px!important">核查状态：</span>
                   <el-select v-model="pc.HCZT" placeholder="请选择"  filterable clearable default-first-option class="input-input t-width31 inputInner" :disabled="!hcShow">
                     <el-option label="核查通过" value="0"></el-option>
                     <el-option label="核查未通过" value="1"></el-option>
                   </el-select>
                 </el-col>
               </el-row>
               <el-row type="flex" class="mb-15 t-ml70">
                <el-col :span="20">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 4}"
                    placeholder="核查备注(不超过100个字符)"
                    v-model="pc.HCBZ"
                    :disabled="!hcShow"
                    class="inputInner"
                    style="width:99%">
                  </el-input>
                </el-col>
                <el-col :span="4"  class="down-btn-area">
                  <el-button type="primary" v-if="hcShow"  size="small" class="mb-5" @click="addSaves()">确定</el-button>
                  <el-button type="warning" size="small" class="m0" @click="$router.go(-1)" v-show="false">返回</el-button>
                </el-col>
              </el-row>
              <el-row type="flex">
                <el-col :span="24" class="czfont t-ml70">处理人：{{withname}}</el-col>
              </el-row>
             </div>
             <div class="t-footer" v-if="$route.query.hiType=='rysh'">
                <div class="t-mb10">
                  <img src="../../../assets/img/application-img.png" style="vertical-align: -5px;">
                  <span class="aImg-title">审核处理</span>
                </div>
                <el-row class="t-ml24">
                  <el-col  :span="20"   class="input-item t-mb10">
                    <span class="input-text" style="width:70px!important">审核状态：</span>
                    <el-select v-model="shpc.SHZT" placeholder="请选择"  filterable clearable default-first-option  class="input-input t-width31 inputInner" :disabled="!shShow">
                      <el-option label="0 - 待审核" value="0"></el-option>
                      <el-option label="1 - 审核通过" value="1"></el-option>
                      <el-option label="2 - 审核不通过" value="2"></el-option>
                      <el-option label="3 - 注销" value="3"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
                <el-row type="flex" class="t-ml94">
                 <el-col :span="20">
                   <el-input
                     type="textarea"
                     :autosize="{ minRows: 4, maxRows: 4}"
                     placeholder="审核备注(不超过100个字符)"
                     v-model="shpc.SHNR"
                     :disabled="!shShow"
                     class="inputInner"
                     style="width:99%">
                   </el-input>
                 </el-col>
                 <el-col :span="4"  class="down-btn-area">
                   <el-button type="primary" v-if="shShow"  size="small" class="mb-5" @click="shSaves()">确定</el-button>
                   <el-button type="warning" size="small" class="m0" @click="$router.go(-1)" v-show="false">返回</el-button>
                 </el-col>
               </el-row>
              </div>
           </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="临住信息详情" :visible.sync="lzxxDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <LZXX :type="type" :xid="xid" :rybh="rybh" :random="(new Date()).getTime()"></LZXX>
      <div slot="footer" class="dialog-footer">
        <el-button @click="lzxxDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="出入境信息详情" :visible.sync="crjDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
       <CRJXX :type="type" :xid="xid" :random="(new Date()).getTime()"></CRJXX>
       <div slot="footer" class="dialog-footer">
         <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
       </div>
    </el-dialog>
    <el-dialog title="案事件信息详情" :visible.sync="asjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <ANSJ :type="type" :xid="xid" :dtid="dtid" :random="(new Date()).getTime()"></ANSJ>
      <div slot="footer" class="dialog-footer">
        <el-button @click="asjDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="通报人员详情" :visible.sync="tbryDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <TBRY :type="type" :xid="xid" :rybh="rybh" :random="(new Date()).getTime()"></TBRY>
      <div slot="footer" class="dialog-footer">
        <el-button @click="tbryDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="警综涉警信息详情" :visible.sync="sjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
      <JZSJ :type="type" :xid="xid"></JZSJ>
      <div slot="footer" class="dialog-footer">
        <el-button @click="sjDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="签证信息详情" :visible.sync="QZDialogVisible" width="900px">
      <QZ :xid="xid" :random="new Date().getTime()"></QZ>
      <div slot="footer" class="dialog-footer">
        <el-button @click="QZDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog  title="放大显示" :visible.sync="tcDialogVisible" style="text-align:center" custom-class="big_dialog imgFd" :append-to-body="false" :modal="false" >
      <div style="text-align:right;">
        <el-button  size="small" type="primary"  @click="rotate" title="旋转图片" icon="iconfont el-icon-yy-icon_rotate"></el-button>
      </div>
      <img :src="imgs" :style="{transform:'rotateZ('+deg+'deg)'}" style="max-height:700px;max-width:700px;" v-drag>
    </el-dialog>
  </div>
</template>

<script>
import imgUrl from "../../../assets/img/t1.png"
import LZXX from '../../common/lzxx_xq'
import TBRY from '../../common/tbry_xq'
import ANSJ from '../../common/ansj_xq'
import CRJXX from '../../common/crjxx_xq'
import JZSJ from '../../common/jzsj_xq'
import QZ from '../../common/qz_xq'
export default {
  components:{LZXX,TBRY,ANSJ,CRJXX,JZSJ,QZ},
  data(){
    return {
      con1:true,
      con2:true,
      con3:true,
      con4:true,
      con5:true,
      con6:true,
      con7:true,


      imgURL:imgUrl,
      defaultImg:[imgUrl],
      options:this.pl.ps,
      type:1,
      xid:'',
      dtid:'',

      asjData:[],
      asjCurrentPage: 1,
      asjpageSize: 10,
      asjTotalResult: 0,
      asjDialogVisible:false,

      sjtableData:[],
      sjCurrentPage: 1,
      sjpageSize: 10,
      sjTotalResult: 0,
      sjDialogVisible:false,

      tableData:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      lzxxDialogVisible:false,

      tableData1:[],
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      crjDialogVisible:false,

      tableData5:[],
      CurrentPage5: 1,
      pageSize5: 10,
      TotalResult5: 0,
      QZDialogVisible:false,

      tableData3:[],
      tbryDialogVisible:false,

      gzinfo:{},

      wljinfo:{},
      zxxinfo:{},
      gxinfo:{},
      slryinfo:{},
      jlxkinfo:{},
      ryshinfo:{},

      pc:{HCBZ:''},
      pcl:{},
      shpc:{},
      withname:this.$store.state.uname,
      hcShow:true,

      rybh:'',
      row:{},
      imgArr:[],
      imgshow1:false,
      shShow:true,

      imgs:'',
      deg:0,
      tcDialogVisible:false,

      tableDatajlxk:[],
      imagejlxk:[],
      imgshowjlxk:false,

      tableDatagzc:[],
      imagegzc:[],
      imgshowgzc:false,

      tableDatawlj:[],
      imagewlj:[],
      imgshowwlj:false,

      tableDatazxx:[],
      imagezxx:[],
      imgshowzxx:false,

      tableDatagx:[],
      imagegx:[],
      imgshowgx:false,

      tableDataslry:[],
      imageslry:[],
      imgshowslry:false,

      tableDatajlxklb:[
        {
          FILENAME:'宣布作废审批表',
          state:'1',
        },
        {
          FILENAME:'居留许可宣布作废公示',
          state:'2',
        }
      ],

      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  mounted(){
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgCode=this.$store.state.orgname;
    this.orgName=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    // this.getData();
  },
  activated(){
    this.asjCurrentPage=1;
    this.sjCurrentPage=1;
    this.CurrentPage=1;
    this.CurrentPage1=1;
    this.CurrentPage5=1;
    this.row = this.$route.query.row
    this.rybh=this.$route.query.row.RYBH;
    this.hcShow=true;
    this.shShow=true;
    this.pc={HCBZ:''};
    this.shpc.SHBZ='';
    if(this.row.CLZT=='0'){
      this.hcShow=false;
      // this.pc.HCZT = this.row.HCZT;
      this.pc.HCBZ = this.row.HCBZ;
    }
    if(this.row.SFYX=='1'){
      this.shShow=false;
      this.shpc.SHZT = this.row.SFYX;
      this.shpc.SHNR = this.row.FKNR;
    }
    this.getData();
  },
  methods:{
    rotate(){
      this.deg += 90;
      if(this.deg >= 360){
          this.deg = 0
      }
    },
    opentp(item){
      this.imgs=item;
      this.tcDialogVisible=true;
    },
    getAllFile(){
      let p={
        pd:{YWDTID:this.row.DTID,SJLX:'wj'},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/SWDW_PAPERController/getInfoList',p,
       r =>{
         if(r.success){
           if(this.$route.query.hiType=='jlxk'){this.tableDatajlxk = r.data.resultList;}
           if(this.$route.query.hiType=='gzc'){this.tableDatagzc = r.data.resultList;}
           if(this.$route.query.hiType=='wlj'){this.tableDatawlj = r.data.resultList;}
           if(this.$route.query.hiType=='zxx'){this.tableDatazxx = r.data.resultList;}
           if(this.$route.query.hiType=='gx'){this.tableDatagx = r.data.resultList;}
           if(this.$route.query.hiType=='slry'){this.tableDataslry = r.data.resultList;}
         }
       })
       let pp={
         pd:{YWDTID:this.row.DTID,SJLX:'tp'},
         userCode:this.userCode,
         userName:this.userName,
         orgCode:this.orgCode,
         orgJB:this.juState,
         token:this.token,
       }
       this.$api.post(this.Global.aport4+'/SWDW_PAPERController/getInfoList',pp,
        r =>{
          if(r.success){
            if(this.$route.query.hiType=='jlxk'){this.imagejlxk = r.data.resultList;this.imagejlxk.length==0?this.imgshowjlxk=false:this.imgshowjlxk=true;}
            if(this.$route.query.hiType=='gzc'){this.imagegzc = r.data.resultList;this.imagegzc.length==0?this.imgshowgzc=false:this.imgshowgzc=true;}
            if(this.$route.query.hiType=='wlj'){this.imagewlj = r.data.resultList;this.imagewlj.length==0?this.imgshowwlj=false:this.imgshowwlj=true;}
            if(this.$route.query.hiType=='zxx'){this.imagezxx = r.data.resultList;this.imagezxx.length==0?this.imgshowzxx=false:this.imgshowzxx=true;}
            if(this.$route.query.hiType=='gx'){this.imagegx = r.data.resultList;this.imagegx.length==0?this.imgshowgx=false:this.imgshowgx=true;}
            if(this.$route.query.hiType=='slry'){this.imageslry = r.data.resultList;this.imageslry.length==0?this.imgshowslry=false:this.imgshowslry=true;}
          }
        })
    },
    view(data,type){
      if(type=='tp'){
        this.$imagePreview({
          images: [data],
          index: 0,
        })
      }
    },
    downFiles(id,name,type){
      let p={
        pd:{DTID:id},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/SWDW_PAPERController/downloadByDTID',p,
       r =>{
         this.downloadMFiles(r,name,type)
       },e=>{},{},'blob')
    },
    downloadMFiles (data,name,type) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/"+type}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name+'.'+type)
        document.body.appendChild(link)
        link.click()
    },
    downloadM (data,name) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    downloadJlxklb(val){
      if(val=='1'){
        let p={
          pd:{DTID:this.row.DTID},
          userCode:this.userCode,
          userName:this.userName,
          orgCode:this.orgCode,
          orgJB:this.juState,
          token:this.token,
        }
        this.$api.post(this.Global.aport4+'/JLXKXBZFWarningInfoController/exportZFSPBByDTID',p,
         r =>{
           this.downloadM(r,'宣布作废审批表')
         },e=>{},{},'blob')
      }else if(val=='2'){
        let p={
          pd:{DTIDs:[this.row.DTID]},
          userCode:this.userCode,
          userName:this.userName,
          orgCode:this.orgCode,
          orgJB:this.juState,
          token:this.token,
        }
        this.$api.post(this.Global.aport4+'/JLXKXBZFWarningInfoController/exportZFGSByDTIDs',p,
         r =>{
           if (!r) {
               return
           }
           let url = window.URL.createObjectURL(new Blob([r],{type:"application/doc"}))
           let link = document.createElement('a')
           link.style.display = 'none'
           link.href = url
           link.setAttribute('download', '作废公示表'+this.format(new Date(),'yyyyMMddhhmmss')+'.doc')
           document.body.appendChild(link)
           link.click()
         },e=>{},{},'blob')
      }
    },
    getData(){
      if(this.$route.query.hiType=='gzc'){
        this.gzinfo = this.row;
        this.getGzcFile();
        this.getData0(this.asjCurrentPage,this.asjpageSize);
        this.getAllFile();
      }else if(this.$route.query.hiType=='wlj'){
        this.wljinfo = this.row;
        this.getData0(this.asjCurrentPage,this.asjpageSize);
        this.getTBRY();
        this.getAllFile();
      }else if(this.$route.query.hiType=='zxx'){
        this.zxxinfo = this.row;
        this.getData0(this.asjCurrentPage,this.asjpageSize);
        this.getData1(this.sjCurrentPage,this.sjpageSize);
        this.getLzxx(this.CurrentPage,this.pageSize);
        this.getCrjxx(this.CurrentPage1,this.pageSize1);
        this.getQZXX(this.CurrentPage5,this.pageSize5);
        this.getAllFile();
      }else if(this.$route.query.hiType=='gx'){
        this.gxinfo = this.row;
        this.getLzxx(this.CurrentPage,this.pageSize);
        this.getCrjxx(this.CurrentPage1,this.pageSize1);
        this.getQZXX(this.CurrentPage5,this.pageSize5);
        this.getAllFile();
      }else if(this.$route.query.hiType=='slry'){
        this.slryinfo = this.row;
        this.getData0(this.asjCurrentPage,this.asjpageSize);
        this.getData1(this.sjCurrentPage,this.sjpageSize);
        this.getLzxx(this.CurrentPage,this.pageSize);
        this.getCrjxx(this.CurrentPage1,this.pageSize1);
        this.getAllFile();
      }else if(this.$route.query.hiType=='jlxk'){
        this.jlxkinfo = this.row;
        this.getLzxx(this.CurrentPage,this.pageSize);
        this.getCrjxx(this.CurrentPage1,this.pageSize1);
        this.getQZXX(this.CurrentPage5,this.pageSize5);
        this.getAllFile();
      }else if(this.$route.query.hiType=='rysh'){
        this.ryshinfo = this.row;
        this.getPhoto();
      }
    },
    getPhoto(){
      let p={
        pd:{USERID:this.row.ID},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/ES_SWDW_XT_USERShenHeController/getUSERDATABASEEntityByUSERID',p,
        r => {
          if(r.success){
            this.imgArr=r.data.resultList;
            this.imgArr.length==0?this.imgshow1=false:this.imgshow1=true;
          }
      })
    },
    asjpageSizeChange(val) {
      this.asjpageSize=val;
      this.getData0(this.asjCurrentPage,val);
    },
    asjhandleCurrentChange(val) {
      this.asjCurrentPage=val;
      this.getData0(val,this.asjpageSize);
    },
    sjpageSizeChange(val) {
      this.sjpageSize=val;
      this.getData1(this.sjCurrentPage,val);
    },
    sjhandleCurrentChange(val) {
      this.sjCurrentPage=val;
      this.getData1(val,this.sjpageSize);
    },
    pageSizeChange(val) {
      this.pageSiz=val;
      this.getLzxx(this.CurrentPage,val);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getLzxx(val,this.pageSize);
    },
    pageSizeChange1(val) {
      this.pageSize1=val;
      this.getCrjxx(this.CurrentPage1,val);
    },
    handleCurrentChange1(val) {
       this.CurrentPage1=val;
       this.getCrjxx(val,this.pageSize1);
    },
    pageSizeChange5(val) {
      this.pageSize5=val;
      this.getQZXX(this.CurrentPage5,val);
    },
    handleCurrentChange5(val) {
      this.CurrentPage5=val;
      this.getQZXX(val,this.pageSize5);
    },
    getData0(currentPage,showCount){
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": {RYBH:this.rybh},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
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
        "pd": {RYBH:this.rybh},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+'/eS_JCJ_SJXXController/getResultListByParams', p,
        r => {
          this.sjtableData=r.data.resultList;
          this.sjTotalResult=r.data.totalResult;
      })
    },
    //临住信息
    getLzxx(currentPage,showCount) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": {RYBH:this.rybh},
        "orderBy":{value:"ZSRQ",dataType:"date"},
        "orderType":"DESC",
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getResultListByParams', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    //出入境信息
    getCrjxx(currentPage,showCount) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": {RYBH:this.rybh},
        "orderBy":{value:"IOSTRING",dataType:"date"},
        "orderType":"DESC",
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+'/eS_CRJJLBController/getResultListByParams', p,
        r => {
          this.tableData1 = r.data.resultList;
          this.TotalResult1 = r.data.totalResult;
        })
    },
    //签证信息
    getQZXX(currentPage,showCount){
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": {RYBH:this.rybh},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+'/eS_FNVISASController/getResultListByParams', p,
        r => {
          this.tableData5 = r.data.resultList;
          this.TotalResult5=r.data.totalResult;
        })
    },
    //通报人员信息
    getTBRY(){
      let p = {
        "pd":{RYBH:this.rybh},
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+'/eS_Tbry_GroupController/getTongBaoListByRyxx', p,
        r => {
          this.tableData3 = r.data;
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
   detailsqz(n){
     this.xid=n.RGUID;
     this.QZDialogVisible = true;
   },
    addSaves(){
      if(this.pc.HCBZ=="" || this.pc.HCBZ==undefined){
        this.$alert('核查结果不能为空！', '提示', {
          confirmButtonText: '确定',
        });
        return;
      }
      let url="";
      this.pcl={
        HCZT:this.pc.HCZT,
        HCBZ:this.pc.HCBZ,
        HCCLRDW:this.$store.state.orgname,
        HCCLR:this.withname,
      }
      if(this.$route.query.hiType=='slry'){
        this.pcl.DTID=this.row.DTID,
        url="/SLRYSBWarningInfoController/saveCLJG"
      }else if(this.$route.query.hiType=='jlxk'){
        this.pcl.DTID=this.row.DTID,
        url="/JLXKXBZFWarningInfoController/saveCLJG"
      }else{
        this.pcl.YJID=this.row.YJID,
        url="/SWDWWarningInfoController/saveCLJG"
      }
      this.$confirm('是否将处理结果反馈至外网?', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         type: 'warning',
         center: true
       }).then(() => {
         this.pcl.SFFK='1'
         let p = {
           "pd":this.pcl,
           userCode:this.userCode,
           userName:this.userName,
           orgCode:this.orgCode,
           orgJB:this.juState,
           token:this.token,
         };
         this.$api.post(this.Global.aport4+url, p,
           r => {
              if(r.success){
                this.$message({
                  message: '反馈成功',
                  type: 'success'
                });
                this.$router.go(-1);
              }
           })
       }).catch(() => {
         this.pcl.SFFK='0';
         let p = {
           "pd":this.pcl,
           userCode:this.userCode,
           userName:this.userName,
           orgCode:this.orgCode,
           orgJB:this.juState,
           token:this.token,
         };
         this.$api.post(this.Global.aport4+url, p,
           r => {
              if(r.success){
                this.$message({
                  message: '取消反馈，保存成功',
                  type: 'success'
                });
                this.$router.go(-1);
              }
           })
       });

    },
    shSaves(){
      if(this.shpc.SHNR=="" || this.shpc.SHNR==undefined){
        this.$alert('审核结果不能为空！', '提示', {
          confirmButtonText: '确定',
        });
        return;
      }
      let p={
        pd:{
          ID:this.row.ID,
          SHZT:this.shpc.SHZT,
          SHNR:this.shpc.SHNR,
          CLR:this.withname,
        },
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+'/ES_SWDW_XT_USERShenHeController/saveSHJG', p,
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
  }
}
</script>

<style scoped>
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
  /* background-color: #EFF3F6; */
}

.crcolor {
  background: #EFF3F6;
}
.yy-input-text {
  text-align: left !important;
}
</style>
