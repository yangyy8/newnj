<template lang="html">
  <!-- 留學生信息管理預警详情 -->
  <div class="yymain">
    <div class="yycontent" style="margin-top: 0px!important;">
       <div class="yylbt mb-15">预警信息</div>
       <el-row type="flex" class="yyf">
         <el-col :span="22" class="stu-left">
             <el-table
                  ref="multipleTable"
                  :data="tableData"
                  border
                  style="width: 100%" class="stu-table"
                  >
                  <el-table-column
                    prop="ywxm"
                    label="英文姓名">
                  </el-table-column>
                  <el-table-column
                    prop="zwxm"
                    label="中文姓名">
                  </el-table-column>
                  <el-table-column
                    prop="xb"
                    label="性别">
                  </el-table-column>
                  <el-table-column
                    prop="gjdq"
                    label="国家地区">
                  </el-table-column>
                  <el-table-column
                    prop="zsdw"
                    label="招收单位">
                  </el-table-column>
                  <el-table-column
                    prop="yjxq"
                    label="预警详情">
                  </el-table-column>
                  <el-table-column
                    label="操作" width="70">
                    <template slot-scope="scope">
                    <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="get5(scope.row)"></el-button>
                    </template>
                  </el-table-column>
               </el-table>
         </el-col>
         <el-col :span="2" class="stu-right">
           <el-button type="primary" size="small" @click="Handle">处理</el-button>
         </el-col>
       </el-row>
    </div>
    <div class="stu-footer">
       <div class="yylbt mb-15">案事件历史信息 </div>
       <div class="stru-lal">案事件信息</div>
       <el-table
            ref="multipleTable"
            :data="tableData1"
            border
            style="width: 100%" class="stu-table"
            >
            <el-table-column
              prop="asjbh"
              label="案件编号">
            </el-table-column>
            <el-table-column
              prop="ajmc"
              label="案件名称">
            </el-table-column>
            <el-table-column
              prop="ajlb"
              label="案件类别">
            </el-table-column>
            <el-table-column
              prop="ajzt"
              label="案件状态">
            </el-table-column>
            <el-table-column
              prop="asjlx"
              label="案件类型">
            </el-table-column>
            <el-table-column
              prop="fxsj"
              label="发现时间">
            </el-table-column>
            <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="get1"></el-button>
              </template>
            </el-table-column>
        </el-table>
        <div class="stru-lal">警综接警信息</div>
        <el-table
             ref="multipleTable"
             :data="tableData2"
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
               label="操作" width="70">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="get2"></el-button>
               </template>
             </el-table-column>
         </el-table>
         <div class="stru-lal">警综处警信息</div>
         <el-table
              ref="multipleTable"
              :data="tableData3"
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
                label="处警标注人">
              </el-table-column>
              <el-table-column
                prop="bzrxm"
                label="处警标注人姓名">
              </el-table-column>
              <el-table-column
                prop="bzsj"
                label="处警标注时间">
              </el-table-column>
              <el-table-column
                label="操作" width="70">
                <template slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="get3"></el-button>
                </template>
              </el-table-column>
          </el-table>
          <div class="stru-lal">警综渉警信息</div>
          <el-table
               ref="multipleTable"
               :data="tableData4"
               border
               style="width: 100%" class="stu-table">
               <el-table-column
                 prop="djdw"
                 label="涉警人员登记单位">
               </el-table-column>
               <el-table-column
                 prop="djdwmc"
                 label="涉警人员登记单位名称">
               </el-table-column>
               <el-table-column
                 prop="djrxm"
                 label="涉警人员登记人姓名">
               </el-table-column>
               <el-table-column
                 prop="djsj"
                 label="涉警人员登记时间">
               </el-table-column>
               <el-table-column
                 prop="sjlb"
                 label="涉警人员涉警类别">
               </el-table-column>
               <el-table-column
                 prop="xgdw"
                 label="涉警人员修改单位">
               </el-table-column>
               <el-table-column
                 label="操作" width="70">
                 <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="get4"></el-button>
                 </template>
               </el-table-column>
           </el-table>
    </div>
    <!-- 处理 -->
  <el-dialog title="处理" :visible.sync="wDialogVisible" width="600px">
    <el-form :model="form">
      <el-row :gutter="1">
        <el-col :span="24">
          <span class="input-text">处理单位：</span>
          <el-input placeholder="请输入内容" size="small" v-model="form.cldw"  class="yy-input-input"></el-input>
        </el-col>
        <el-col :span="24">
          <span class="input-text">处理结果：</span>
        <el-input type="textarea" placeholder="请输入内容" :autosize="{ minRows: 3, maxRows: 6}" v-model="form.cljg" class="yy-input-input"></el-input>
        </el-col>
        <el-col :span="24">
          <span class="input-text">审核结果：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.shjg"  class="yy-input-input"></el-input>
        </el-col>
      </el-row>
    </el-form>
     <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="getHandle('addForm')" size="small">提 交</el-button>
      <el-button @click="wDialogVisible = false" size="small">取 消</el-button>
     </div>
  </el-dialog>
  <div class="xq">
<!-- 案事件信息详情 -->
  <el-dialog
    title="案事件信息详情"
    :visible.sync="detailsDialogVisible1">
      <div class="ak-tabs">
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
          案件基本信息
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
          涉案人员基本信息
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==2}" @click="base2">
          涉案人员嫌疑人信息
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==3}" @click="base3">
          案件人员证件信息
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==4}" @click="base4">
          案件涉案单位
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==5}" @click="base5">
          处理结果
        </div>
      </div>
      <div class="ak-tab-pane" >
          <div v-show="page==0">
                    <el-form   ref="aForm1">
                      <el-row :gutter="3"  class="mb-6">
                          <el-col :span="8" class="input-item">
                           <span class="input-text">人员编号：</span>
                           <span class="input-input detailinput">  {{aForm1.RYBH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="航信案事件编号">航信案事件编号：</span>
                            <span class="input-input detailinput">  {{aForm1.HXASJBH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="案事件编号">案事件编号：</span>
                           <span class="input-input detailinput">  {{aForm1.ASJBH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="警综案件编号">警综案件编号：</span>
                           <span class="input-input detailinput">  {{aForm1.JZAJBH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">案件密级：</span>
                            <span class="input-input detailinput">  {{aForm1.AJMJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">案件类别：</span>
                            <span class="input-input detailinput">  {{aForm1.AJLB}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件副案别">案件副案别：</span>
                            <span class="input-input detailinput">  {{aForm1.AJFAB}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件可防性案件类别">案件可防性案件类别：</span>
                            <span class="input-input detailinput">  {{aForm1.KFXAJLB}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件侵害关系">案件侵害关系：</span>
                            <span class="input-input detailinput">  {{aForm1.QHGX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="被侵害对象类别">被侵害对象类别：</span>
                            <span class="input-input detailinput">  {{aForm1.BQHDXLB}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">案件名称：</span>
                            <span class="input-input detailinput">  {{aForm1.AJMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">案件属性：</span>
                            <span class="input-input detailinput">  {{aForm1.AJSX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">案件状态：</span>
                            <span class="input-input detailinput">  {{aForm1.AJZT}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">案件性质：</span>
                            <span class="input-input detailinput">  {{aForm1.AJXZ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案事件类型">案事件类型：</span>
                            <span class="input-input detailinput">  {{aForm1.ASJLX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">案件来源：</span>
                            <span class="input-input detailinput">  {{aForm1.AJLY}}</span>
                          </el-col>

                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="报案人姓名">报案人姓名：</span>
                           <span class="input-input detailinput">  {{aForm1.BARXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="报案人性别">报案人性别：</span>
                            <span class="input-input detailinput">  {{aForm1.BARXB}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="报案人出生日期">报案人出生日期：</span>
                           <span class="input-input detailinput">  {{aForm1.BARCSRQ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="报案人单位">报案人单位：</span>
                           <span class="input-input detailinput">  {{aForm1.BARDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="报案人联系方式">报案人联系方式：</span>
                            <span class="input-input detailinput">  {{aForm1.BARLXFS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="报案人住址">报案人住址：</span>
                            <span class="input-input detailinput">  {{aForm1.BARZZ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="报案人证件种类">报案人证件种类：</span>
                            <span class="input-input detailinput">  {{aForm1.BARZJZL}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="报案人证件号码">报案人证件号码：</span>
                            <span class="input-input detailinput">  {{aForm1.BARZJHM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="报案人保密级别">报案人保密级别：</span>
                            <span class="input-input detailinput">  {{aForm1.BARBMJB}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">报案时间：</span>
                            <span class="input-input detailinput">  {{aForm1.BASJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">发现时间：</span>
                            <span class="input-input detailinput">  {{aForm1.FXSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="发案时间上限">发案时间上限：</span>
                            <span class="input-input detailinput">  {{aForm1.FASJSX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="发案时间下限">发案时间下限：</span>
                            <span class="input-input detailinput">  {{aForm1.FASJXX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="省市县区">省市县区：</span>
                            <span class="input-input detailinput">  {{aForm1.AJSSXQ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="街路巷">街路巷：</span>
                            <span class="input-input detailinput">  {{aForm1.AJJLX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="门楼牌号">门楼牌号：</span>
                            <span class="input-input detailinput">  {{aForm1.AJMLPH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="门牌后缀">门牌后缀：</span>
                            <span class="input-input detailinput">  {{aForm1.AJMPHZ}}</span>
                          </el-col>

                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="门楼详址">门楼详址：</span>
                           <span class="input-input detailinput">  {{aForm1.AJMLXZ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件详细地址名称">案件详细地址名称：</span>
                            <span class="input-input detailinput">  {{aForm1.AJDZMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="案件所属责任区">案件所属责任区：</span>
                           <span class="input-input detailinput">  {{aForm1.AJSSZRQ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="案件所属责任区名称">案件所属责任区名称：</span>
                           <span class="input-input detailinput">  {{aForm1.AJSSZRQMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="发案地域">发案地域：</span>
                            <span class="input-input detailinput">  {{aForm1.FADY}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">发案处所：</span>
                            <span class="input-input detailinput">  {{aForm1.FACS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">发案部位：</span>
                            <span class="input-input detailinput">  {{aForm1.FABW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">受理时间：</span>
                            <span class="input-input detailinput">  {{aForm1.SLSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">受理人姓名：</span>
                            <span class="input-input detailinput">  {{aForm1.SLRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">受理单位：</span>
                            <span class="input-input detailinput">  {{aForm1.SLDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">受理单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.SLDWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">受理方式：</span>
                            <span class="input-input detailinput">  {{aForm1.SLFS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">简要案情：</span>
                            <span class="input-input detailinput">  {{aForm1.JYAQ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="对外说辞">对外说辞：</span>
                            <span class="input-input detailinput">  {{aForm1.DWSC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="主办单位">主办单位：</span>
                            <span class="input-input detailinput">  {{aForm1.ZBDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="主办单位名称">主办单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.ZBDWMC}}</span>
                          </el-col>

                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="主办单位警种">主办单位警种：</span>
                           <span class="input-input detailinput">  {{aForm1.ZBDWJZ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件协办单位">案件协办单位：</span>
                            <span class="input-input detailinput">  {{aForm1.XBDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="直属办案单位">直属办案单位：</span>
                           <span class="input-input detailinput">  {{aForm1.ZSBADW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                           <span class="input-text" title="直属办案单位名称">直属办案单位名称：</span>
                           <span class="input-input detailinput">  {{aForm1.ZSBADWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案发地管辖机关联系人">案发地管辖机关联系人：</span>
                            <span class="input-input detailinput">  {{aForm1.AFDGXJGLXR}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案发地管辖机关联系电话">案发地管辖机关联系电话：</span>
                            <span class="input-input detailinput">  {{aForm1.AFDGXJGLXDH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="主办人姓名">主办人姓名：</span>
                            <span class="input-input detailinput">  {{aForm1.ZBRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="协办人姓名">协办人姓名：</span>
                            <span class="input-input detailinput">  {{aForm1.XBRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="立案单位">立案单位：</span>
                            <span class="input-input detailinput">  {{aForm1.LADW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="立案单位名称">立案单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.LADWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text">立案时间：</span>
                            <span class="input-input detailinput">  {{aForm1.LASJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="立案批准人姓名">立案批准人姓名：</span>
                            <span class="input-input detailinput">  {{aForm1.LAPZRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="专案标记">专案标记：</span>
                            <span class="input-input detailinput">  {{aForm1.ZABJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="补立原因">补立原因：</span>
                            <span class="input-input detailinput">  {{aForm1.BLYY}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="危害程度">危害程度：</span>
                            <span class="input-input detailinput">  {{aForm1.WHCD}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="督办级别">督办级别：</span>
                            <span class="input-input detailinput">  {{aForm1.DBJB}}</span>
                          </el-col>

                          <el-col :span="8" class="input-item">
                            <span class="input-text">督办编号：</span>
                            <span class="input-input detailinput">  {{aForm1.DBBH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="管辖分工">管辖分工：</span>
                            <span class="input-input detailinput">  {{aForm1.GXFG}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="犯罪主体类型">犯罪主体类型：</span>
                            <span class="input-input detailinput">  {{aForm1.FZZTLX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="破案日期">破案日期：</span>
                            <span class="input-input detailinput"> {{aForm1.PARQ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="破案方式">破案方式：</span>
                            <span class="input-input detailinput">  {{aForm1.PAFS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="破案类型">破案类型：</span>
                            <span class="input-input detailinput">  {{aForm1.PALX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >破案单位：</span>
                            <span class="input-input detailinput">  {{aForm1.PADW}}</span>
                          </el-col>

                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="破案单位名称">破案单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.PADWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >协破单位：</span>
                            <span class="input-input detailinput">  {{aForm1.XPDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >破案简况：</span>
                            <span class="input-input detailinput">  {{aForm1.PAJK}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >案情综述：</span>
                            <span class="input-input detailinput">  {{aForm1.AQZS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >结案日期：</span>
                            <span class="input-input detailinput">  {{aForm1.JARQ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >撤销日期：</span>
                            <span class="input-input detailinput">  {{aForm1.CXRQ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >撤销原因：</span>
                            <span class="input-input detailinput">  {{aForm1.CXYY}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >归档状态：</span>
                            <span class="input-input detailinput">  {{aForm1.GDZT}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >归档时间：</span>
                            <span class="input-input detailinput">  {{aForm1.GDSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >接收单位：</span>
                            <span class="input-input detailinput">  {{aForm1.JSDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >移送时间：</span>
                            <span class="input-input detailinput">  {{aForm1.YSSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >移送单位：</span>
                            <span class="input-input detailinput">  {{aForm1.YSDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >移送人：</span>
                            <span class="input-input detailinput">  {{aForm1.YSR}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="移送单位联系电话">移送单位联系电话：</span>
                            <span class="input-input detailinput">  {{aForm1.YSDWLXDH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >移送原因：</span>
                            <span class="input-input detailinput">  {{aForm1.YSYY}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >涉案总价值：</span>
                            <span class="input-input detailinput">  {{aForm1.SAZJZ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" >经济损失：</span>
                            <span class="input-input detailinput">  {{aForm1.JJSS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="挽回总价值">挽回总价值：</span>
                            <span class="input-input detailinput">  {{aForm1.WHZJZ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="缴获总价值">缴获总价值：</span>
                            <span class="input-input detailinput">  {{aForm1.PAZJZ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="作案人数">作案人数：</span>
                            <span class="input-input detailinput">  {{aForm1.ZARS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="解救儿童数">解救儿童数：</span>
                            <span class="input-input detailinput">  {{aForm1.AJJJETS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="解救妇女数">解救妇女数：</span>
                            <span class="input-input detailinput">  {{aForm1.AJJJFNS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="解救人质数">解救人质数：</span>
                            <span class="input-input detailinput">  {{aForm1.AJJJRZS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="人员受伤数">人员受伤数：</span>
                            <span class="input-input detailinput">  {{aForm1.AJRYSSS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="人员死亡数">人员死亡数：</span>
                            <span class="input-input detailinput">  {{aForm1.AJRYSWS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="是否有现场">是否有现场：</span>
                            <span class="input-input detailinput">  {{aForm1.SFYXC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="是否勘查现场">是否勘查现场：</span>
                            <span class="input-input detailinput">  {{aForm1.SFKCXC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="分局串案编号">分局串案编号：</span>
                            <span class="input-input detailinput">  {{aForm1.FJCABH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="市局串案编号">市局串案编号：</span>
                            <span class="input-input detailinput">  {{aForm1.SJCABH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="线索编号">线索编号：</span>
                            <span class="input-input detailinput">  {{aForm1.XSBH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="转案件编号">转案件编号：</span>
                            <span class="input-input detailinput">  {{aForm1.ZAJBH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="登记时间">登记时间：</span>
                            <span class="input-input detailinput">  {{aForm1.DJSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="登记人">登记人：</span>
                            <span class="input-input detailinput">  {{aForm1.DJRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="登记单位">登记单位：</span>
                            <span class="input-input detailinput">  {{aForm1.DJDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="登记单位名称">登记单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.DJDWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="修改时间">修改时间：</span>
                            <span class="input-input detailinput">  {{aForm1.XGSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="修改人姓名">修改人姓名：</span>
                            <span class="input-input detailinput">  {{aForm1.XGRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="修改单位">修改单位：</span>
                            <span class="input-input detailinput">  {{aForm1.XGDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="修改单位名称">修改单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.XGDWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="接收时间">接收时间：</span>
                            <span class="input-input detailinput">  {{aForm1.JSSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="分类案件编号">分类案件编号：</span>
                            <span class="input-input detailinput">  {{aForm1.FLAJBH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="省厅串案编号">省厅串案编号：</span>
                            <span class="input-input detailinput">  {{aForm1.STCABH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="撤销单位">撤销单位：</span>
                            <span class="input-input detailinput">  {{aForm1.CXDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="撤销单位名称">撤销单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.CXDWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="撤销批准人姓名">撤销批准人姓名：</span>
                            <span class="input-input detailinput">  {{aForm1.CXPZRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="破案批准时间">破案批准时间：</span>
                            <span class="input-input detailinput">  {{aForm1.PAPZSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="破案批准人">破案批准人：</span>
                            <span class="input-input detailinput">  {{aForm1.PAPZR}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="破案批准单位">破案批准单位：</span>
                            <span class="input-input detailinput">  {{aForm1.PAPZDW}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="受理单位联系电话">受理单位联系电话：</span>
                            <span class="input-input detailinput">  {{aForm1.SLDWDH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="主办人电话">主办人电话：</span>
                            <span class="input-input detailinput">  {{aForm1.ZBRDH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="其他受害人数">其他受害人数：</span>
                            <span class="input-input detailinput">  {{aForm1.AJQTSHRS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="接收单位名称">接收单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.JSDWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="移送单位名称">移送单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.YSDWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="移送人姓名">移送人姓名：</span>
                            <span class="input-input detailinput">  {{aForm1.YSRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="接收姓名">接收姓名：</span>
                            <span class="input-input detailinput">  {{aForm1.JSRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件移送接收单位联系电话">案件移送接收单位联系电话：</span>
                            <span class="input-input detailinput">  {{aForm1.YSJSDWLXDH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="直属分局案件－是否">直属分局案件－是否：</span>
                            <span class="input-input detailinput">  {{aForm1.ZSAJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="关联编号">关联编号：</span>
                            <span class="input-input detailinput">  {{aForm1.GLBH}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="外部接收单位">外部接收单位：</span>
                            <span class="input-input detailinput">  {{aForm1.WBJSDWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="外部接收人">外部接收人：</span>
                            <span class="input-input detailinput">  {{aForm1.WBJSRXM}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="发案时间段">发案时间段：</span>
                            <span class="input-input detailinput">  {{aForm1.FASJD}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="涉及国家地区">涉及国家地区：</span>
                            <span class="input-input detailinput">  {{aForm1.SJGJDQ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件内外勾结">案件内外勾结：</span>
                            <span class="input-input detailinput">  {{aForm1.NWGJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="内外勾结对象">内外勾结对象：</span>
                            <span class="input-input detailinput">  {{aForm1.NWGJDX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="立案审查到期时间">立案审查到期时间：</span>
                            <span class="input-input detailinput">  {{aForm1.SCDQSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="审查时间">审查时间：</span>
                            <span class="input-input detailinput">  {{aForm1.SCSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="经侦案件属性">经侦案件属性：</span>
                            <span class="input-input detailinput">  {{aForm1.JZAJSX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件报案单位名称">案件报案单位名称：</span>
                            <span class="input-input detailinput">  {{aForm1.BADWMC}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件报案单位地址">案件报案单位地址：</span>
                            <span class="input-input detailinput">  {{aForm1.BADWDZ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件报案单位联系人">案件报案单位联系人：</span>
                            <span class="input-input detailinput">  {{aForm1.BADWLXR}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案件报案单位联系方式">案件报案单位联系方式：</span>
                            <span class="input-input detailinput">  {{aForm1.BADWLXFS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="破案时间段">破案时间段：</span>
                            <span class="input-input detailinput">  {{aForm1.PASJD}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="大要案标识">大要案标识：</span>
                            <span class="input-input detailinput">  {{aForm1.DYABS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="典型案例标识">典型案例标识：</span>
                            <span class="input-input detailinput">  {{aForm1.DXALBS}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="结案报告的文件类型">结案报告的文件类型：</span>
                            <span class="input-input detailinput">  {{aForm1.JABGDWJLX}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="结案报告的文件内容">结案报告的文件内容：</span>
                            <span class="input-input detailinput">  {{aForm1.JABGDWJNR}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="更新时间">更新时间：</span>
                            <span class="input-input detailinput">  {{aForm1.GXSJ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="数据来源">数据来源：</span>
                            <span class="input-input detailinput">  {{aForm1.SJLY}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="数据状态">数据状态：</span>
                            <span class="input-input detailinput">  {{aForm1.ZT}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="注销原因">注销原因：</span>
                            <span class="input-input detailinput">  {{aForm1.ZXYY}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="恢复原因">恢复原因：</span>
                            <span class="input-input detailinput">  {{aForm1.HFYY}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="案事件种类">案事件种类：</span>
                            <span class="input-input detailinput">  {{aForm1.ASJZL=="01"?"案件":aForm1.ASJZL=="04"?"事件":""}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="是否单位案事件">是否单位案事件：</span>
                            <span class="input-input detailinput">  {{aForm1.SFDWASJ=="0"?"人员":aForm1.SFDWASJ=="0"?"企业单位":""}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="报案人国家地区">报案人国家地区：</span>
                            <span class="input-input detailinput">  {{aForm1.BARGJDQ}}</span>
                          </el-col>
                          <el-col :span="8" class="input-item">
                            <span class="input-text" title="入库时间">入库时间：</span>
                            <span class="input-input detailinput">  {{aForm1.RKSJ}}</span>
                          </el-col>
                      </el-row>
                    </el-form>

          </div>

          <div v-show="page==1">
            <el-table
                 ref="multipleTable"
                 :data="aForm2"
                 border
                 style="width: 100%" class="stu-table"
                 >
                 <el-table-column
                   prop="ASJBH"
                   label="案事件编号">
                 </el-table-column>
                 <el-table-column
                   prop="SAJS"
                   label="涉案角色">
                 </el-table-column>
                 <el-table-column
                   prop="YWXM"
                   label="英文姓名">
                 </el-table-column>
                 <el-table-column
                   prop="ZWXM"
                   label="中文姓名">
                 </el-table-column>
                 <el-table-column
                   prop="XB"
                   label="性别">
                 </el-table-column>
                 <el-table-column
                   prop="CSRQ"
                   label="出生日期">
                 </el-table-column>
                 <el-table-column
                   prop="GJDQ"
                   label="国家/地区">
                 </el-table-column>
                 <el-table-column
                   prop="LRSJ"
                   label="录入时间">
                 </el-table-column>
                 <el-table-column
                   prop="LRR"
                   label="录入人">
                 </el-table-column>
             </el-table>
          </div>

          <div v-show="page==2">
            <el-table
                 ref="multipleTable"
                 :data="aForm3"
                 border
                 style="width: 100%" class="stu-table"
                 >
                 <el-table-column
                   prop="JLBH"
                   label="嫌疑人记录编号">
                 </el-table-column>
                 <el-table-column
                   prop="BMJB"
                   label="保密级别">
                 </el-table-column>
                 <el-table-column
                   prop="XZZ"
                   label="现住址">
                 </el-table-column>
                 <el-table-column
                   prop="XYRSX"
                   label="嫌疑属性">
                 </el-table-column>
                 <el-table-column
                   prop="ZAYY"
                   label="作案原因">
                 </el-table-column>
                 <el-table-column
                   prop="ZHRQ"
                   label="抓获日期">
                 </el-table-column>
                 <el-table-column
                   prop="GXR"
                   label="更新人">
                 </el-table-column>
                 <el-table-column
                   prop="GXSJ"
                   label="更新时间">
                 </el-table-column>

             </el-table>
          </div>

          <div v-show="page==3">
            <el-table
                 ref="multipleTable"
                 :data="aForm4"
                 border
                 style="width: 100%" class="stu-table"
                 >
                 <el-table-column
                   prop="ASJBH"
                   label="案件编号">
                 </el-table-column>
                 <el-table-column
                   prop="YWX"
                   label="英文姓名">
                 </el-table-column>
                 <el-table-column
                   prop="ZWX"
                   label="中文姓名">
                 </el-table-column>
                 <el-table-column
                   prop="XB"
                   label="性别">
                 </el-table-column>
                 <el-table-column
                   prop="CSRQ"
                   label="出生日期">
                 </el-table-column>
                 <el-table-column
                   prop="SFZHM"
                   label="身份证号码">
                 </el-table-column>
                 <el-table-column
                   prop="GJDQ"
                   label="国家/地区">
                 </el-table-column>
                 <el-table-column
                   prop="ZJYXQZ"
                   label="证件有效期至">
                 </el-table-column>

             </el-table>
          </div>

          <div v-show="page==4">
            <el-table
                 ref="multipleTable"
                 :data="aForm5"
                 border
                 style="width: 100%" class="stu-table"
                 >
                 <el-table-column
                   prop="ASJBH"
                   label="案件编号">
                 </el-table-column>
                 <el-table-column
                   prop="SALB"
                   label="涉案类别">
                 </el-table-column>
                 <el-table-column
                   prop="SAJS"
                   label="涉案角色">
                 </el-table-column>
                 <el-table-column
                   prop="SAJE"
                   label="涉案金额">
                 </el-table-column>
                 <el-table-column
                   prop="JJSS"
                   label="经济损失">
                 </el-table-column>
                 <el-table-column
                   prop="DJRXM"
                   label="登记人">
                 </el-table-column>
                 <el-table-column
                   prop="DJDW"
                   label="登记单位">
                 </el-table-column>
                 <el-table-column
                   prop="ZJYXQZ"
                   label="登记时间">
                 </el-table-column>

             </el-table>
          </div>

          <div v-show="page==5">
            <el-form   ref="aForm6">
              <el-row :gutter="3"  class="mb-6">
                  <el-col :span="8" class="input-item">
                   <span class="input-text">案件编号：</span>
                   <span class="input-input detailinput">  {{aForm6.ASJBH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="涉案实体编号">涉案实体编号：</span>
                    <span class="input-input detailinput">  {{aForm6.AJSTBH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="案事件类别">案事件类别：</span>
                   <span class="input-input detailinput">  {{aForm6.ASJLB}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="措施编号">措施编号：</span>
                   <span class="input-input detailinput">  {{aForm6.CSBH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">决定结果：</span>
                    <span class="input-input detailinput">  {{aForm6.JDJG}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">决定期限：</span>
                    <span class="input-input detailinput">  {{aForm6.JDQX}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="决定金额">决定金额：</span>
                    <span class="input-input detailinput">  {{aForm6.JDJE}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="决定时间">决定时间：</span>
                    <span class="input-input detailinput">  {{aForm6.JDSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="决定人姓名">决定人姓名：</span>
                    <span class="input-input detailinput">  {{aForm6.JDRXM}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="决定单位">决定单位：</span>
                    <span class="input-input detailinput">  {{aForm6.JDDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="决定单位名称">决定单位名称：</span>
                    <span class="input-input detailinput">  {{aForm6.JDDWMC}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">执行人：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXR}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">执行单位：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">文书号：</span>
                    <span class="input-input detailinput">  {{aForm6.WSH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="对外说辞">对外说辞：</span>
                    <span class="input-input detailinput">  {{aForm6.DWSC}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">签证号码：</span>
                    <span class="input-input detailinput">  {{aForm6.ZJHM}}</span>
                  </el-col>

                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="要求离境时间">要求离境时间：</span>
                   <span class="input-input detailinput">  {{aForm6.YQLJSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="执行金额">执行金额：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXJE}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="拘留天数">拘留天数：</span>
                   <span class="input-input detailinput">  {{aForm6.JLTS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="执行期限">执行期限：</span>
                   <span class="input-input detailinput">  {{aForm6.ZXQX}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="执行地点">执行地点：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXDD}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="执行情况">执行情况：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXQK}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="执行开始时间">执行开始时间：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXKSSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="执行结束时间">执行结束时间：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXJSSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="执行标识">执行标识：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXBS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">撤销原因：</span>
                    <span class="input-input detailinput">  {{aForm6.CXYY}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">撤销时间：</span>
                    <span class="input-input detailinput">  {{aForm6.CXSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="撤销审批单位">撤销审批单位：</span>
                    <span class="input-input detailinput">  {{aForm6.CXSPDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="撤销批准人">撤销批准人：</span>
                    <span class="input-input detailinput">  {{aForm6.CXPZR}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="撤销审批意见">撤销审批意见：</span>
                    <span class="input-input detailinput">  {{aForm6.CXSPYJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="拘留审查结束期限">拘留审查结束期限：</span>
                    <span class="input-input detailinput">  {{aForm6.JLSCJSQX}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="接收单位">接收单位：</span>
                    <span class="input-input detailinput">  {{aForm6.JSDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="接收人">接收人：</span>
                    <span class="input-input detailinput">  {{aForm6.JSR}}</span>
                  </el-col>

                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="接收时间">接收时间：</span>
                   <span class="input-input detailinput">  {{aForm6.JSSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="RAS标识">RAS标识：</span>
                    <span class="input-input detailinput">  {{aForm6.RAS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="登记时间">登记时间：</span>
                   <span class="input-input detailinput">  {{aForm6.DJSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="登记人">登记人：</span>
                   <span class="input-input detailinput">  {{aForm6.DJRXM}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="登记单位">登记单位：</span>
                    <span class="input-input detailinput">  {{aForm6.DJDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="登记单位名称">登记单位名称：</span>
                    <span class="input-input detailinput">  {{aForm6.DJDWMC}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">修改时间：</span>
                    <span class="input-input detailinput">  {{aForm6.XGSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">修改人：</span>
                    <span class="input-input detailinput">  {{aForm6.XGR}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">修改人姓名：</span>
                    <span class="input-input detailinput">  {{aForm6.XGRXM}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">修改单位：</span>
                    <span class="input-input detailinput">  {{aForm6.XGDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">修改单位名称：</span>
                    <span class="input-input detailinput">  {{aForm6.XGDWMC}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">案件编号：</span>
                    <span class="input-input detailinput">  {{aForm6.AJBH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">呈请类别：</span>
                    <span class="input-input detailinput">  {{aForm6.CQLB}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="对象编号">对象编号：</span>
                    <span class="input-input detailinput">  {{aForm6.DXBH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="对象类别">对象类别：</span>
                    <span class="input-input detailinput">  {{aForm6.DXLB}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="对象名称">对象名称：</span>
                    <span class="input-input detailinput">  {{aForm6.DXMC}}</span>
                  </el-col>

                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="执行单位名称">执行单位名称：</span>
                   <span class="input-input detailinput">  {{aForm6.ZXDWMC}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="法律依据">法律依据：</span>
                    <span class="input-input detailinput">  {{aForm6.JGFLYJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="执行原因">执行原因：</span>
                   <span class="input-input detailinput">  {{aForm6.ZXYY}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                   <span class="input-text" title="通知家属情况">通知家属情况：</span>
                   <span class="input-input detailinput">  {{aForm6.TZJSQK}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="不准出境是否登记">不准出境是否登记：</span>
                    <span class="input-input detailinput">  {{aForm6.BZCJSFDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="有无外伤">有无外伤：</span>
                    <span class="input-input detailinput">  {{aForm6.YWWS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="是否进入候问室">是否进入候问室：</span>
                    <span class="input-input detailinput">  {{aForm6.SFJRHWS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="传唤方式">传唤方式：</span>
                    <span class="input-input detailinput">  {{aForm6.CHFS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="继续盘问理由">继续盘问理由：</span>
                    <span class="input-input detailinput">  {{aForm6.JPWLY}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="代收银行">代收银行：</span>
                    <span class="input-input detailinput">  {{aForm6.DSYX}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="检察机关措施意见">检察机关措施意见：</span>
                    <span class="input-input detailinput">  {{aForm6.JCJGCSYJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="办理人">办理人：</span>
                    <span class="input-input detailinput">  {{aForm6.BLR}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="辨认检查地点">辨认检查地点：</span>
                    <span class="input-input detailinput">  {{aForm6.BRDD}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="辨认检查人姓名">辨认检查人姓名：</span>
                    <span class="input-input detailinput">  {{aForm6.BRR}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="见证人">见证人：</span>
                    <span class="input-input detailinput">  {{aForm6.JZRXX}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="记录人">记录人：</span>
                    <span class="input-input detailinput">  {{aForm6.JLR}}</span>
                  </el-col>

                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="辨认检查对象">辨认检查对象：</span>
                    <span class="input-input detailinput">  {{aForm6.BRDX}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="辨认检查人住址">辨认检查人住址：</span>
                    <span class="input-input detailinput">  {{aForm6.BRRZZ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="辨认检查人单位">辨认检查人单位：</span>
                    <span class="input-input detailinput">  {{aForm6.BRRDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="辨认检查目的">辨认检查目的：</span>
                    <span class="input-input detailinput"> {{aForm6.BRMD}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="辨认检查过程及结果">辨认检查过程及结果：</span>
                    <span class="input-input detailinput">  {{aForm6.BRGCJJG}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="鉴定方式">鉴定方式：</span>
                    <span class="input-input detailinput">  {{aForm6.JDFS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >协作具体事项：</span>
                    <span class="input-input detailinput">  {{aForm6.XZSX}}</span>
                  </el-col>

                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="发布范围">发布范围：</span>
                    <span class="input-input detailinput">  {{aForm6.FBFW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="结果执行保证人">结果执行保证人：</span>
                    <span class="input-input detailinput">  {{aForm6.BZR}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="结果执行通知对象">结果执行通知对象：</span>
                    <span class="input-input detailinput">  {{aForm6.TZDX}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="结果执行补充信息">结果执行补充信息：</span>
                    <span class="input-input detailinput">  {{aForm6.BCXX}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >有效标识：</span>
                    <span class="input-input detailinput">  {{aForm6.YXBS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="关联措施编号">关联措施编号：</span>
                    <span class="input-input detailinput">  {{aForm6.GLCSBH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >执行结果：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXJG}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >事实情况：</span>
                    <span class="input-input detailinput">  {{aForm6.SSQK}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >证据情况：</span>
                    <span class="input-input detailinput">  {{aForm6.ZJQK}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >执行方式：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXFS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >复议机关：</span>
                    <span class="input-input detailinput">  {{aForm6.FYJG}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >诉讼机构：</span>
                    <span class="input-input detailinput">  {{aForm6.SSJG}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >材料清单：</span>
                    <span class="input-input detailinput">  {{aForm6.CLQD}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="材料清单数量">材料清单数量：</span>
                    <span class="input-input detailinput">  {{aForm6.CLQDSL}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="结果执行通知对象地址">结果执行通知对象地址：</span>
                    <span class="input-input detailinput">  {{aForm6.TZDXDZ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="主关联措施编号">主关联措施编号：</span>
                    <span class="input-input detailinput">  {{aForm6.ZGLCSBH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" >检查机关：</span>
                    <span class="input-input detailinput">  {{aForm6.JCJG}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="检查机关名称">检查机关名称：</span>
                    <span class="input-input detailinput">  {{aForm6.JCJGMC}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="检查机关决定结果">检查机关决定结果：</span>
                    <span class="input-input detailinput">  {{aForm6.JCJGJDJG}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="检查机关决定期限">检查机关决定期限：</span>
                    <span class="input-input detailinput">  {{aForm6.JCJGJDQX}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="检查机关决定时间">检查机关决定时间：</span>
                    <span class="input-input detailinput">  {{aForm6.JCJGJDSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="检查机关意见">检查机关意见：</span>
                    <span class="input-input detailinput">  {{aForm6.JCJGYJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="执行处所名称">执行处所名称：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXCSMC}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="执行处所代码">执行处所代码：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXCSDM}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="人员姓名">人员姓名：</span>
                    <span class="input-input detailinput">  {{aForm6.RYMC}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text">性别：</span>
                    <span class="input-input detailinput">  {{aForm6.RYXB}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="出生日期">出生日期：</span>
                    <span class="input-input detailinput">  {{aForm6.RYCSRQ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="证件种类号码">证件种类号码：</span>
                    <span class="input-input detailinput">  {{aForm6.RYZJZLHM}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="住(地)址">住(地)址：</span>
                    <span class="input-input detailinput">  {{aForm6.RYXZZ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="工作单位">工作单位：</span>
                    <span class="input-input detailinput">  {{aForm6.RYGZDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="联系方式">联系方式：</span>
                    <span class="input-input detailinput">  {{aForm6.RYLXFS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="执行人员证件号码">执行人员证件号码：</span>
                    <span class="input-input detailinput">  {{aForm6.ZXZH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="检察机关文书号">检察机关文书号：</span>
                    <span class="input-input detailinput">  {{aForm6.JCJGWSH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="措施人员编号">措施人员编号：</span>
                    <span class="input-input detailinput">  {{aForm6.CSRYBH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="措施执行时间">措施执行时间：</span>
                    <span class="input-input detailinput">  {{aForm6.CSZXSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="结果执行人员工作单位">结果执行人员工作单位：</span>
                    <span class="input-input detailinput">  {{aForm6.JGZXLXDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="结果执行人员联系电话">结果执行人员联系电话：</span>
                    <span class="input-input detailinput">  {{aForm6.JGZXLXDH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="结果执行联系人">结果执行联系人：</span>
                    <span class="input-input detailinput">  {{aForm6.JGZXLXR}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="涉外事件简要描述">涉外事件简要描述：</span>
                    <span class="input-input detailinput">  {{aForm6.SWSJJYMS}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="更新时间">更新时间：</span>
                    <span class="input-input detailinput">  {{aForm6.GXSJ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="更新人">更新人：</span>
                    <span class="input-input detailinput">  {{aForm6.GXR}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="更新单位">更新单位：</span>
                    <span class="input-input detailinput">  {{aForm6.GXDW}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="数据来源">数据来源：</span>
                    <span class="input-input detailinput">  {{aForm6.SJLY}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="数据状态">数据状态：</span>
                    <span class="input-input detailinput">  {{aForm6.ZT}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="备注">备注：</span>
                    <span class="input-input detailinput">  {{aForm6.BZ}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="警综措施结果记录编号">警综措施结果记录编号：</span>
                    <span class="input-input detailinput">  {{aForm6.JZCSJGJLBH}}</span>
                  </el-col>
                  <el-col :span="8" class="input-item">
                    <span class="input-text" title="内部措施结果编号">内部措施结果编号：</span>
                    <span class="input-input detailinput">  {{aForm6.NBCSJGBH}}</span>
                  </el-col>

              </el-row>
            </el-form>
          </div>
      </div>
  </el-dialog>
<!-- 警综接警信息 -->
  <el-dialog
    title="警综接警信息详情"
    :visible.sync="detailsDialogVisible2" class="xx">
    <el-form   ref="mapForm2">
      <el-row :gutter="3"  class="mb-6">
          <el-col :span="8" class="input-item">
           <span class="input-text">人员编号：</span>
           <span class="input-input detailinput">  {{mapForm2.RYBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">接警补充接警内容：</span>
            <span class="input-input detailinput">  {{mapForm2.BCJJNR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text">接警处警意见：</span>
           <span class="input-input detailinput">  {{mapForm2.BJCJYJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text">接警报警电话：</span>
           <span class="input-input detailinput">  {{mapForm2.BJDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警报警电话用户地址">接警报警电话用户地址：</span>
            <span class="input-input detailinput">  {{mapForm2.BJDHDZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警报警电话用户姓名">接警报警电话用户姓名：</span>
            <span class="input-input detailinput">  {{mapForm2.BJDHHM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警报警时间">接警报警时间：</span>
            <span class="input-input detailinput">  {{mapForm2.BJDHSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警报警类型">接警报警类型：</span>
            <span class="input-input detailinput">  {{mapForm2.BJLX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警报警内容">接警报警内容：</span>
            <span class="input-input detailinput">  {{mapForm2.BJNR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警报警人">接警报警人：</span>
            <span class="input-input detailinput">  {{mapForm2.BJR2}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警报警人性别">接警报警人性别：</span>
            <span class="input-input detailinput">  {{mapForm2.BJRXB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警退单原因">接警退单原因：</span>
            <span class="input-input detailinput">  {{mapForm2.BJTDYY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警报警方式">接警报警方式：</span>
            <span class="input-input detailinput">  {{mapForm2.BJXS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警毗领情况">接警毗领情况：</span>
            <span class="input-input detailinput">  {{mapForm2.BLQK}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警标注单位">接警标注单位：</span>
            <span class="input-input detailinput">  {{mapForm2.BZDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警标注单位名称">接警标注单位名称：</span>
            <span class="input-input detailinput">  {{mapForm2.BZDWMC}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警标注来源">接警标注来源：</span>
           <span class="input-input detailinput">  {{mapForm2.BZLY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警标注人">接警标注人：</span>
            <span class="input-input detailinput">  {{mapForm2.BZR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警标注人姓名">接警标注人姓名：</span>
           <span class="input-input detailinput">  {{mapForm2.BZRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警标注时间">接警标注时间：</span>
           <span class="input-input detailinput">  {{mapForm2.BZSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警建(构)筑物情况">接警建(构)筑物情况：</span>
            <span class="input-input detailinput">  {{mapForm2.BZWQK}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警处警标识">接警处警标识 title="接警处警标识"：</span>
            <span class="input-input detailinput">  {{mapForm2.CJBS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警车辆类型">接警车辆类型：</span>
            <span class="input-input detailinput">  {{mapForm2.CLLX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警车辆去向">接警车辆去向：</span>
            <span class="input-input detailinput">  {{mapForm2.CLQX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警登记单位">接警登记单位：</span>
            <span class="input-input detailinput">  {{mapForm2.DJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警登记单位名称">接警登记单位名称：</span>
            <span class="input-input detailinput">  {{mapForm2.DJDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警登记人">接警登记人：</span>
            <span class="input-input detailinput">  {{mapForm2.DJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警登记人姓名">接警登记人姓名：</span>
            <span class="input-input detailinput">  {{mapForm2.DJRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警登记时间">接警登记时间：</span>
            <span class="input-input detailinput">  {{mapForm2.DJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警二级接警单位到达时间">接警二级接警单位到达时间：</span>
            <span class="input-input detailinput">  {{mapForm2.EJDDSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警二级接警单位">接警二级接警单位：</span>
            <span class="input-input detailinput">  {{mapForm2.EJJSDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警二级接警单位名称">接警二级接警单位名称：</span>
            <span class="input-input detailinput">  {{mapForm2.EJJSDWMC}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警二级接警单位接收人">接警二级接警单位接收人：</span>
           <span class="input-input detailinput">  {{mapForm2.EJJSR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警二级接警单位接收人姓名">接警二级接警单位接收人姓名：</span>
            <span class="input-input detailinput">  {{mapForm2.EJJSRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警二级接警单位接收时间">接警二级接警单位接收时间：</span>
           <span class="input-input detailinput">  {{mapForm2.EJJSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警二级接警单位下发时间">接警二级接警单位下发时间：</span>
           <span class="input-input detailinput">  {{mapForm2.EJXFSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警X坐标(报警人位置)">接警X坐标(报警人位置)：</span>
            <span class="input-input detailinput">  {{mapForm2.GIS_X}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警Y坐标(报警人位置)">接警Y坐标(报警人位置)：</span>
            <span class="input-input detailinput">  {{mapForm2.GIS_Y}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警关联接警编号">接警关联接警编号：</span>
            <span class="input-input detailinput">  {{mapForm2.GLJJDBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警火灾等级">接警火灾等级：</span>
            <span class="input-input detailinput">  {{mapForm2.HZDJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警编号（警综案件编号关联）">接警编号（警综案件编号关联）：</span>
            <span class="input-input detailinput">  {{mapForm2.JJBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警接警单号">接警接警单号：</span>
            <span class="input-input detailinput">  {{mapForm2.JJDBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警单位">接警单位：</span>
            <span class="input-input detailinput">  {{mapForm2.JJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警单位名称">接警单位名称：</span>
            <span class="input-input detailinput">  {{mapForm2.JJDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警交警短信内容">接警交警短信内容：</span>
            <span class="input-input detailinput">  {{mapForm2.JJDXNR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警交警短信发送时间">接警交警短信发送时间：</span>
            <span class="input-input detailinput">  {{mapForm2.JJDXSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警管辖单位">接警管辖单位：</span>
            <span class="input-input detailinput">  {{mapForm2.JJGXDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警接警录音编号">接警接警录音编号：</span>
            <span class="input-input detailinput">  {{mapForm2.JJLYH}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警人">接警人：</span>
           <span class="input-input detailinput">  {{mapForm2.JJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警日期时间">接警日期时间：</span>
            <span class="input-input detailinput">  {{mapForm2.JJRQSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警人姓名">接警人姓名：</span>
           <span class="input-input detailinput">  {{mapForm2.JJRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警行政区划">接警行政区划：</span>
           <span class="input-input detailinput">  {{mapForm2.JJXZQH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警员姓名">接警员姓名：</span>
            <span class="input-input detailinput">  {{mapForm2.JJYXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警建筑结构">接警建筑结构：</span>
            <span class="input-input detailinput">  {{mapForm2.JZJG}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警建筑类别">接警建筑类别：</span>
            <span class="input-input detailinput">  {{mapForm2.JZLB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警路灯杆编号">接警路灯杆编号：</span>
            <span class="input-input detailinput">  {{mapForm2.LDGBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警来话类别">接警来话类别：</span>
            <span class="input-input detailinput">  {{mapForm2.LHLBDM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警报警人联系电话">接警报警人联系电话：</span>
            <span class="input-input detailinput">  {{mapForm2.LXDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警派警单号">接警派警单号：</span>
            <span class="input-input detailinput">  {{mapForm2.PJDBH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警派警录音编号">接警派警录音编号：</span>
            <span class="input-input detailinput">  {{mapForm2.PJLYH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警处警单派警时间">接警处警单派警时间：</span>
            <span class="input-input detailinput">  {{mapForm2.PJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警派警员姓名">接警派警员姓名：</span>
            <span class="input-input detailinput">  {{mapForm2.PJYXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警起火场所">接警起火场所：</span>
            <span class="input-input detailinput">  {{mapForm2.QHCS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警燃烧物性质">接警燃烧物性质：</span>
            <span class="input-input detailinput">  {{mapForm2.RSWXZ}}</span>
          </el-col>


          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警是否拨打电话">接警是否拨打电话：</span>
           <span class="input-input detailinput">  {{mapForm2.SFBDDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警事发部位(燃烧部位)">接警事发部位(燃烧部位)：</span>
            <span class="input-input detailinput">  {{mapForm2.SFBW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警事发地址">接警事发地址：</span>
           <span class="input-input detailinput">  {{mapForm2.SFDD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警是否已发告知短信">接警是否已发告知短信：</span>
           <span class="input-input detailinput">  {{mapForm2.SFYFDX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警是否重点单位">接警是否重点单位：</span>
            <span class="input-input detailinput">  {{mapForm2.SFZDDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警是否符合自行协商处理">接警是否符合自行协商处理：</span>
            <span class="input-input detailinput">  {{mapForm2.SFZXXS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警涉警车牌">接警涉警车牌：</span>
            <span class="input-input detailinput">  {{mapForm2.SJCPH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警三级接警单位到达时间">接警三级接警单位到达时间：</span>
            <span class="input-input detailinput">  {{mapForm2.SJDDSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警三级接警单位">接警三级接警单位：</span>
            <span class="input-input detailinput">  {{mapForm2.SJJSD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警三级接警单位名称">接警三级接警单位名称：</span>
            <span class="input-input detailinput">  {{mapForm2.SJJSDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警三级接警单位接收人">接警三级接警单位接收人：</span>
            <span class="input-input detailinput">  {{mapForm2.SJJSR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警三级接警单位接收人姓名">接警三级接警单位接收人姓名：</span>
            <span class="input-input detailinput">  {{mapForm2.SJJSRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警三级接警单位接收时间">接警三级接警单位接收时间：</span>
            <span class="input-input detailinput">  {{mapForm2.SJJSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警伤员去向">接警伤员去向：</span>
            <span class="input-input detailinput">  {{mapForm2.SYQX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警通话时长">接警通话时长：</span>
            <span class="input-input detailinput">  {{mapForm2.THSC2}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警修改单位">接警修改单位：</span>
            <span class="input-input detailinput">  {{mapForm2.XGDW}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警修改单位名称">接警修改单位名称：</span>
           <span class="input-input detailinput">  {{mapForm2.XGDWMC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警修改人">接警修改人：</span>
            <span class="input-input detailinput">  {{mapForm2.XGR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警修改人姓名">接警修改人姓名：</span>
           <span class="input-input detailinput">  {{mapForm2.XGRXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警修改时间">接警修改时间：</span>
           <span class="input-input detailinput">  {{mapForm2.XGSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警是否逃逸">接警是否逃逸：</span>
            <span class="input-input detailinput">  {{mapForm2.YFTY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警有无危险物质">接警有无危险物质：</span>
            <span class="input-input detailinput">  {{mapForm2.YFWXWZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警移交单位">接警移交单位：</span>
            <span class="input-input detailinput">  {{mapForm2.YJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警移交人">接警移交人：</span>
            <span class="input-input detailinput">  {{mapForm2.YJR}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警移交时间">接警移交时间：</span>
           <span class="input-input detailinput">  {{mapForm2.YJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警移交说明">接警移交说明：</span>
            <span class="input-input detailinput">  {{mapForm2.YJSM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警有无被困人员">接警有无被困人员：</span>
           <span class="input-input detailinput">  {{mapForm2.YWBKRY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警有无爆炸/泄漏">接警有无爆炸/泄漏：</span>
           <span class="input-input detailinput">  {{mapForm2.YWBZXL}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警重点单位编码">接警重点单位编码：</span>
            <span class="input-input detailinput">  {{mapForm2.ZDDWBM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警指定移交单位">接警指定移交单位：</span>
            <span class="input-input detailinput">  {{mapForm2.ZDYJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警指定移交人">接警指定移交人：</span>
            <span class="input-input detailinput">  {{mapForm2.ZDYJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警指定移交时间">接警指定移交时间：</span>
            <span class="input-input detailinput">  {{mapForm2.ZDYJSJ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警指定移交说明">接警指定移交说明：</span>
           <span class="input-input detailinput">  {{mapForm2.ZDYJSM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
           <span class="input-text" title="接警警员位置X坐标">接警警员位置X坐标：</span>
           <span class="input-input detailinput">  {{mapForm2.ZHDDGIS_X}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警警员位置Y坐标">接警警员位置Y坐标：</span>
            <span class="input-input detailinput">  {{mapForm2.ZHDDGIS_Y}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警指挥调度接警单位">接警指挥调度接警单位：</span>
            <span class="input-input detailinput">  {{mapForm2.ZHDDJJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警指挥调度警员接收时间">接警指挥调度警员接收时间：</span>
            <span class="input-input detailinput">  {{mapForm2.ZHDDJJSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="接警指挥调度接警员">接警指挥调度接警员：</span>
            <span class="input-input detailinput">  {{mapForm2.ZHDDJJY}}</span>
          </el-col>
      </el-row>

    </el-form>
  </el-dialog>
<!-- 警综处警信息 -->
  <el-dialog
      title="警综处警信息详情"
      :visible.sync="detailsDialogVisible3" class="xx">
      <el-form   ref="mapForm3">
        <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
             <span class="input-text">处警案件受理单位：</span>
             <span class="input-input detailinput">  {{mapForm3.AJSLDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警案件受理人：</span>
              <span class="input-input detailinput">  {{mapForm3.AJSLR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警补充处理结果：</span>
             <span class="input-input detailinput">  {{mapForm3.BCCLJG}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警标注单位：</span>
             <span class="input-input detailinput">  {{mapForm3.BZDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警标注单位名称：</span>
              <span class="input-input detailinput">  {{mapForm3.BZDWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警标注来源：</span>
              <span class="input-input detailinput">  {{mapForm3.BZLY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警标注人：</span>
              <span class="input-input detailinput">  {{mapForm3.BZR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警标注人姓名：</span>
              <span class="input-input detailinput">  {{mapForm3.BZRXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警标注时间：</span>
              <span class="input-input detailinput">  {{mapForm3.BZSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警出动船只：</span>
              <span class="input-input detailinput">  {{mapForm3.CDCZ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警出动机动车：</span>
              <span class="input-input detailinput">  {{mapForm3.CDJDC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警出动警力：</span>
              <span class="input-input detailinput">  {{mapForm3.CDJL}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警编号：</span>
              <span class="input-input detailinput">  {{mapForm3.CJBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警处警单位：</span>
              <span class="input-input detailinput">  {{mapForm3.CJDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警处警单位名称：</span>
              <span class="input-input detailinput">  {{mapForm3.CJDWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警反馈时间：</span>
              <span class="input-input detailinput">  {{mapForm3.CJFKSJ}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
             <span class="input-text">处警结果：</span>
             <span class="input-input detailinput">  {{mapForm3.CJJG}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警街路巷：</span>
              <span class="input-input detailinput">  {{mapForm3.CJJLX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警类别：</span>
             <span class="input-input detailinput">  {{mapForm3.CJLB}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警门楼牌号：</span>
             <span class="input-input detailinput">  {{mapForm3.CJMLPH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警门牌后缀：</span>
              <span class="input-input detailinput">  {{mapForm3.CJMPHZ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警人：</span>
              <span class="input-input detailinput">  {{mapForm3.CJR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警人姓名：</span>
              <span class="input-input detailinput">  {{mapForm3.CJRHZXS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警人联系方式：</span>
              <span class="input-input detailinput">  {{mapForm3.CJRLXFS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警时间：</span>
              <span class="input-input detailinput">  {{mapForm3.CJSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警发生地点详址：</span>
              <span class="input-input detailinput">  {{mapForm3.CJXXDD}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警详址：</span>
              <span class="input-input detailinput">  {{mapForm3.CJXZ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警行政区划：</span>
              <span class="input-input detailinput">  {{mapForm3.CJXZQH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警移送接收单位：</span>
              <span class="input-input detailinput">  {{mapForm3.CJYSJSDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警移送接收人：</span>
              <span class="input-input detailinput">  {{mapForm3.CJYSJSR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警移送接收时间：</span>
              <span class="input-input detailinput">  {{mapForm3.CJYSJSSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警简要警情及处理结果：</span>
              <span class="input-input detailinput">  {{mapForm3.CLJGNR}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
             <span class="input-text">处警到达现场时间：</span>
             <span class="input-input detailinput">  {{mapForm3.DDXCSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警登记单位：</span>
              <span class="input-input detailinput">  {{mapForm3.DJDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警登记单位名称：</span>
             <span class="input-input detailinput">  {{mapForm3.DJDWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警登记人：</span>
             <span class="input-input detailinput">  {{mapForm3.DJR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警登记人姓名：</span>
              <span class="input-input detailinput">  {{mapForm3.DJRXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警登记时间：</span>
              <span class="input-input detailinput">  {{mapForm3.DJSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警反馈录音号：</span>
              <span class="input-input detailinput">  {{mapForm3.FKLYH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警发生原因：</span>
              <span class="input-input detailinput">  {{mapForm3.FSYY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警关联案件编号：</span>
              <span class="input-input detailinput">  {{mapForm3.GLAJBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警关联案件状态：</span>
              <span class="input-input detailinput">  {{mapForm3.GLAJZT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警更新单位：</span>
              <span class="input-input detailinput">  {{mapForm3.GXDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警更新单位名称：</span>
              <span class="input-input detailinput">  {{mapForm3.GXDWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警更新人：</span>
              <span class="input-input detailinput">  {{mapForm3.GXR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警更新人姓名：</span>
              <span class="input-input detailinput">  {{mapForm3.GXRXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警更新时间：</span>
              <span class="input-input detailinput">  {{mapForm3.GXSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警接警编号：</span>
              <span class="input-input detailinput">  {{mapForm3.JJBH}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
             <span class="input-text">处警接警单编号：</span>
             <span class="input-input detailinput">  {{mapForm3.JJDBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警解救儿童数：</span>
              <span class="input-input detailinput">  {{mapForm3.JJETS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警解救妇女数：</span>
             <span class="input-input detailinput">  {{mapForm3.JJFNS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警解救人质数：</span>
             <span class="input-input detailinput">  {{mapForm3.JJRZS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警警情属性：</span>
              <span class="input-input detailinput">  {{mapForm3.JQSX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警救助群众：</span>
              <span class="input-input detailinput">  {{mapForm3.JZQZ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警救助伤员：</span>
              <span class="input-input detailinput">  {{mapForm3.JZSY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警领导处理时间：</span>
              <span class="input-input detailinput">  {{mapForm3.LDCLSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警继续审查人数：</span>
              <span class="input-input detailinput">  {{mapForm3.LZSCRS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警破获刑事案件：</span>
              <span class="input-input detailinput">  {{mapForm3.PHXSAJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警破获现行案件：</span>
              <span class="input-input detailinput">  {{mapForm3.PHXXAJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警破获治安案件：</span>
              <span class="input-input detailinput">  {{mapForm3.PHZAAJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警派警单编号：</span>
              <span class="input-input detailinput">  {{mapForm3.PJDBH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警人员受伤数：</span>
              <span class="input-input detailinput">  {{mapForm3.RYSSS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警人员死亡数：</span>
              <span class="input-input detailinput">  {{mapForm3.RYSWS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警事发场所：</span>
              <span class="input-input detailinput">  {{mapForm3.SFCS}}</span>
            </el-col>


            <el-col :span="8" class="input-item">
             <span class="input-text">处警事发时间上限：</span>
             <span class="input-input detailinput">  {{mapForm3.SFSJSX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警事发时间下限：</span>
              <span class="input-input detailinput">  {{mapForm3.SFSJXX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警事发星期：</span>
             <span class="input-input detailinput">  {{mapForm3.SFXQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警审批时间：</span>
             <span class="input-input detailinput">  {{mapForm3.SPSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警审批修改时间：</span>
              <span class="input-input detailinput">  {{mapForm3.SPXGSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警所属辖区：</span>
              <span class="input-input detailinput">  {{mapForm3.SSXQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警损失详细情况：</span>
              <span class="input-input detailinput">  {{mapForm3.SSXXQK}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警逃跑人犯：</span>
              <span class="input-input detailinput">  {{mapForm3.TPRF}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警天气情况：</span>
              <span class="input-input detailinput">  {{mapForm3.TQQK}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警挽回损失：</span>
              <span class="input-input detailinput">  {{mapForm3.WHSS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警修改单位：</span>
              <span class="input-input detailinput">  {{mapForm3.XGDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警修改单位名称：</span>
              <span class="input-input detailinput">  {{mapForm3.XGDWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警修改人：</span>
              <span class="input-input detailinput">  {{mapForm3.XGR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警修改人姓名：</span>
              <span class="input-input detailinput">  {{mapForm3.XGRXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警修改时间：</span>
              <span class="input-input detailinput">  {{mapForm3.XGSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警地址X坐标：</span>
              <span class="input-input detailinput">  {{mapForm3.XZB}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
             <span class="input-text">处警移送接收内部单位：</span>
             <span class="input-input detailinput">  {{mapForm3.YSJSNBDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警地址Y坐标：</span>
              <span class="input-input detailinput">  {{mapForm3.YZB}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警值班领导：</span>
             <span class="input-input detailinput">  {{mapForm3.ZBLD}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">处警值班领导单位：</span>
             <span class="input-input detailinput">  {{mapForm3.ZBLDDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警值班领导单位名称：</span>
              <span class="input-input detailinput">  {{mapForm3.ZBLDDWMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警值班领导姓名：</span>
              <span class="input-input detailinput">  {{mapForm3.ZBLDXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警抓获作案成员：</span>
              <span class="input-input detailinput">  {{mapForm3.ZHZACY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处警直接经济损失：</span>
              <span class="input-input detailinput">  {{mapForm3.ZJJJSS}}</span>
            </el-col>
        </el-row>

      </el-form>
  </el-dialog>
<!-- 警综渉警信息 -->
    <el-dialog
        title="警综渉警信息详情"
        :visible.sync="detailsDialogVisible4">
        <el-form   ref="mapForm4">
          <el-row :gutter="3"  class="mb-6">
              <el-col :span="8" class="input-item">
               <span class="input-text">涉警人员登记单位：</span>
               <span class="input-input detailinput">  {{mapForm4.DJDW}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员登记单位名称：</span>
                <span class="input-input detailinput">  {{mapForm4.DJDWMC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
               <span class="input-text">涉警人员登记人：</span>
               <span class="input-input detailinput">  {{mapForm4.DJR}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
               <span class="input-text">涉警人员登记人姓名：</span>
               <span class="input-input detailinput">  {{mapForm4.DJRXM}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员登记时间：</span>
                <span class="input-input detailinput">  {{mapForm4.DJSJ}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员接警编号：</span>
                <span class="input-input detailinput">  {{mapForm4.JJBH}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员记录编号：</span>
                <span class="input-input detailinput">  {{mapForm4.JLBH}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员关联标识：</span>
                <span class="input-input detailinput">  {{mapForm4.RAS}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">人员编号：</span>
                <span class="input-input detailinput">  {{mapForm4.RYBH}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员涉警类别：</span>
                <span class="input-input detailinput">  {{mapForm4.SJLB}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员修改单位：</span>
                <span class="input-input detailinput">  {{mapForm4.XGDW}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员修改单位名称：</span>
                <span class="input-input detailinput">  {{mapForm4.XGDWMC}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员修改人：</span>
                <span class="input-input detailinput">  {{mapForm4.XGR}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员修改人姓名：</span>
                <span class="input-input detailinput">  {{mapForm4.XGRXM}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员修改时间：</span>
                <span class="input-input detailinput">  {{mapForm4.XGSJ}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">涉警人员现住址：</span>
                <span class="input-input detailinput">  {{mapForm4.XZZ}}</span>
              </el-col>
          </el-row>

        </el-form>
    </el-dialog>
<!-- 202申请信息详情 -->
  <el-dialog
          title="202申请信息详情"
          :visible.sync="detailsDialogVisible5">
          <el-form   ref="mapForm5">
            <el-row :gutter="3"  class="mb-6">
                <el-col :span="8" class="input-item">
                 <span class="input-text">201/202表编号：</span>
                 <span class="input-input detailinput">  {{mapForm5.TABID}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">护照姓：</span>
                  <span class="input-input detailinput">  {{mapForm5.PASSFAMILY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                 <span class="input-text">护照名：</span>
                 <span class="input-input detailinput">  {{mapForm5.PASSNAME}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                 <span class="input-text">英文姓：</span>
                 <span class="input-input detailinput">  {{mapForm5.EFAMILY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">英文名：</span>
                  <span class="input-input detailinput">  {{mapForm5.ENAME}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">本国语言名：</span>
                  <span class="input-input detailinput">  {{mapForm5.LANGUAGE}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">中文姓名：</span>
                  <span class="input-input detailinput">  {{mapForm5.CNAME}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">性别：</span>
                  <span class="input-input detailinput">  {{mapForm5.SEX}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">出生日期：</span>
                  <span class="input-input detailinput">  {{mapForm5.BIRTHDAY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">国籍：</span>
                  <span class="input-input detailinput">  {{mapForm5.NATIONALITY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">出生国籍：</span>
                  <span class="input-input detailinput">  {{mapForm5.BCOUNTRY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">出生地：</span>
                  <span class="input-input detailinput">  {{mapForm5.BPLACE}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">身份证号：</span>
                  <span class="input-input detailinput">  {{mapForm5.IDCARD}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">护照号码：</span>
                  <span class="input-input detailinput">  {{mapForm5.PASSNO}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">最高学历：</span>
                  <span class="input-input detailinput">  {{mapForm5.EDUCATION}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">婚姻状况：</span>
                  <span class="input-input detailinput">  {{mapForm5.MARITAL}}</span>
                </el-col>

                <el-col :span="8" class="input-item">
                 <span class="input-text">宗教信仰：</span>
                 <span class="input-input detailinput">  {{mapForm5.RELIGIOUS}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="宗教信仰(其他)">宗教信仰(其他)：</span>
                  <span class="input-input detailinput">  {{mapForm5.OTHERRELIGIOUS}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                 <span class="input-text">母语：</span>
                 <span class="input-input detailinput">  {{mapForm5.MLANGUAGE}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                 <span class="input-text">特殊身份类别：</span>
                 <span class="input-input detailinput">  {{mapForm5.SPECIALID}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">停留期限：</span>
                  <span class="input-input detailinput">  {{mapForm5.RESTIME}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">职业：</span>
                  <span class="input-input detailinput">  {{mapForm5.OCCUPATION}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="工作或学习单位">工作或学习单位：</span>
                  <span class="input-input detailinput">  {{mapForm5.WORK}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="家庭所在国家">家庭所在国家：</span>
                  <span class="input-input detailinput">  {{mapForm5.RECOUNTRY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">家庭地址：</span>
                  <span class="input-input detailinput">  {{mapForm5.REPLACE}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">家庭电话：</span>
                  <span class="input-input detailinput">  {{mapForm5.FAMILYTEL}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">电子邮箱：</span>
                  <span class="input-input detailinput">  {{mapForm5.EMAIL}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">英语水平：</span>
                  <span class="input-input detailinput">  {{mapForm5.ELEVEL}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="新旧汉语水平">新旧汉语水平：</span>
                  <span class="input-input detailinput">  {{mapForm5.CNLEVEL}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="汉语水平考试等级">汉语水平考试等级：</span>
                  <span class="input-input detailinput">  {{mapForm5.HSKLEVEL}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="汉语水平考试听力成绩">汉语水平考试听力成绩：</span>
                  <span class="input-input detailinput">  {{mapForm5.HSKLISTENING}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="汉语水平考试阅读成绩">汉语水平考试阅读成绩：</span>
                  <span class="input-input detailinput">  {{mapForm5.HSKREADING}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="汉语水平考试书写成绩">汉语水平考试书写成绩：</span>
                  <span class="input-input detailinput">  {{mapForm5.HSKWRITE}}</span>
                </el-col>

                <el-col :span="8" class="input-item">
                 <span class="input-text">推荐单位：</span>
                 <span class="input-input detailinput">  {{mapForm5.COMPANY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="推荐单位电话">推荐单位电话：</span>
                  <span class="input-input detailinput">  {{mapForm5.REFTEL}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                 <span class="input-text" title="在华事务担保人">在华事务担保人：</span>
                 <span class="input-input detailinput">  {{mapForm5.LINKNAME}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                 <span class="input-text" title="在华事务担保人电话">在华事务担保人电话：</span>
                 <span class="input-input detailinput">  {{mapForm5.LINKTEL}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="经费担保人或机构">经费担保人或机构：</span>
                  <span class="input-input detailinput">  {{mapForm5.GUNAME}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">csc编号：</span>
                  <span class="input-input detailinput">  {{mapForm5.CSC}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">招收单位：</span>
                  <span class="input-input detailinput">  {{mapForm5.ACCACADEMY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">申请编号：</span>
                  <span class="input-input detailinput">  {{mapForm5.APPLICATIONID}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">录取编号：</span>
                  <span class="input-input detailinput">  {{mapForm5.RECRUITID}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">学号：</span>
                  <span class="input-input detailinput">  {{mapForm5.STUID}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">学生类别：</span>
                  <span class="input-input detailinput">  {{mapForm5.STUTYPE}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">学科门类：</span>
                  <span class="input-input detailinput">  {{mapForm5.SCI}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">一级学科：</span>
                  <span class="input-input detailinput">  {{mapForm5.MADEGREE}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="院系中文名称">院系中文名称：</span>
                  <span class="input-input detailinput">  {{mapForm5.CFACULTY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="院系英文名称">院系英文名称：</span>
                  <span class="input-input detailinput">  {{mapForm5.EFACULTY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="专业中文名称">专业中文名称：</span>
                  <span class="input-input detailinput">  {{mapForm5.CPROFESSIONAL}}</span>
                </el-col>

                <el-col :span="8" class="input-item">
                 <span class="input-text" title="专业英文名称">专业英文名称：</span>
                 <span class="input-input detailinput">  {{mapForm5.EPROFESSIONAL}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="研究方向中文名称">研究方向中文名称：</span>
                  <span class="input-input detailinput">  {{mapForm5.DIRECTION}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                 <span class="input-text" title="研究方向英文名称">研究方向英文名称：</span>
                 <span class="input-input detailinput">  {{mapForm5.EDIRECTION}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                 <span class="input-text">学制：</span>
                 <span class="input-input detailinput">  {{mapForm5.SCHOOLSYS}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="报到开始时间">报到开始时间：</span>
                  <span class="input-input detailinput">  {{mapForm5.STAREPORTS}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="报到截止时间">报到截止时间：</span>
                  <span class="input-input detailinput">  {{mapForm5.ENDREPORTS}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="学习开始日期">学习开始日期：</span>
                  <span class="input-input detailinput">  {{mapForm5.STASTUDY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="学习结束日期">学习结束日期：</span>
                  <span class="input-input detailinput">  {{mapForm5.ENDSTUDY}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="重点关注类别">重点关注类别：</span>
                  <span class="input-input detailinput">  {{mapForm5.FOCUSTYPE}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="重点关注说明">重点关注说明：</span>
                  <span class="input-input detailinput">  {{mapForm5.INSTRUCTIONS}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text">授课语言：</span>
                  <span class="input-input detailinput">  {{mapForm5.TLANGUAGE}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="入学学年度">入学学年度：</span>
                  <span class="input-input detailinput">  {{mapForm5.YEAR}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="入学学期">入学学期：</span>
                  <span class="input-input detailinput">  {{mapForm5.SEMESTER}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="博士生导师姓名">博士生导师姓名：</span>
                  <span class="input-input detailinput">  {{mapForm5.DOCNAME}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="导师编号">导师编号：</span>
                  <span class="input-input detailinput">  {{mapForm5.DOCNO}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="学历学籍注册号">学历学籍注册号：</span>
                  <span class="input-input detailinput">  {{mapForm5.REGISTEREDNO}}</span>
                </el-col>

                <el-col :span="8" class="input-item">
                  <span class="input-text">备注：</span>
                  <span class="input-input detailinput">  {{mapForm5.NOTE}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="公安厅审核状态">公安厅审核状态：</span>
                  <span class="input-input detailinput">  {{mapForm5.FLAG=="1"?"未审核":mapForm5.FLAG=="2"?"审核未通过":mapForm5.FLAG=="3"?"审核通过":""}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="当前年份">当前年份：</span>
                  <span class="input-input detailinput">  {{mapForm5.NOWYEAR}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="逻辑删除">逻辑删除：</span>
                  <span class="input-input detailinput">  {{mapForm5.PHYSICALDEL=="1"?"已删除":mapForm5.PHYSICALDEL=="0"?"已删除":""}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="是否到校">是否到校：</span>
                  <span class="input-input detailinput">  {{mapForm5.ISARRIVE=="1"?"到校":mapForm5.ISARRIVE=="0"?"到校":""}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" title="公安审核不通过备注信息">公安审核不通过备注信息：</span>
                  <span class="input-input detailinput">  {{mapForm5.POLICEINFO}}</span>
                </el-col>
                <el-col :span="8" class="input-item">
                  <span class="input-text" >编号：</span>
                  <span class="input-input detailinput">  {{mapForm5.CODE}}</span>
                </el-col>

            </el-row>

          </el-form>
  </el-dialog>

  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData:[],
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      detailsDialogVisible1:false,
      detailsDialogVisible2:false,
      detailsDialogVisible3:false,
      detailsDialogVisible4:false,
      detailsDialogVisible5:false,
      wDialogVisible:false,
      mapForm1:{},

      mapForm2:{},
      mapForm3:{},
      mapForm4:{},
      mapForm5:{},
      aForm1:{},
      aForm2:[],
      aForm3:[],
      aForm4:[],
      aForm5:[],
      aForm6:{},
      pd:{},
      form:{},
      page:0,
      row:{},
    }
  },
  activated(){
    this.row=this.$route.query.row;
    console.log('this.row',this.row);
  },
  mounted() {

  },
  methods: {
        base() {
          this.page = 0;
        },
        base1() {
          this.page = 1;
        },
        base2() {
          this.page = 2;
        },
        base3() {
          this.page = 3;
        },
        base4() {
          this.page = 4;
        },
        base5() {
          this.page = 5;
        },
    Handle()
    {
      this.wDialogVisible=true;
    },
    getHandle()
    {

    },
    get1(){
        this.detailsDialogVisible1=true;
        let p = {
          "asjbh": i.asjbh
        };
        this.$api.post('/educationParController/getASJXXXQInfo', p,
          r => {
            this.aForm1 = r.data.eS_AJ_JBXXEntity;
            this.aForm2 = r.data.eS_AJ_RY_JBXXList;
            this.aForm3 = r.data.eS_AJ_RY_XYRXXList;
            this.aForm4 = r.data.eS_AJ_RY_ZJXXList;
            this.aForm5 = r.data.eS_AJ_SADWList;
            this.aForm6 = r.data.eS_AJ_CLJGEntity;
          })
    },
    get2(){
        this.detailsDialogVisible2=true;
        let p = {
          "dtid": i.dtid
        };
        this.$api.post('/educationParController/getJZJXXParInfo', p,
          r => {
            this.mapForm2 = r.data;
          })
    },
    get3(){
        this.detailsDialogVisible3=true;
        let p = {
          "cjbh": i.cjbh
        };
        this.$api.post('/educationParController/getJZCJXXParInfo', p,
          r => {
            this.mapForm3 = r.data;
          })
    },
    get4(i){
        this.detailsDialogVisible4=true;
        let p = {
          "jlbh": i.jlbh
        };
        this.$api.post('/educationParController/getSJXXParInfo', p,
          r => {
            this.mapForm4 = r.data;
          })
    },
    get5(i){
        this.detailsDialogVisible5=true;
        let p = {
          "rybh": i.rybh
        };
        this.$api.post('/educationParController/getTwoTableInfo', p,
          r => {
            this.mapForm4 = r.data;
          })
    },
  }

}
</script>
<style scoped>
.xq .input-text{ width: 50%!important;}
.detailinput{width: 60%!important; min-height: 28px;line-height: 28px;border: none;   background: #ffffff;padding-left: 10px; color: #999999;}

</style>
<style>
.xq .el-dialog{ width: 60%!important; }
.xx .el-dialog__body{max-height: 550px!important; overflow-y: scroll;}
</style>
