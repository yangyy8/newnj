<template lang="html">
    <!-- 非法居留人员导入 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.XBDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="(item,ind0) in $store.state.xb"
                      :key="ind0"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.CSRQKSSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.CSRQJSSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQDM" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind1) in $store.state.gjdq"
                        :key="ind1"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="pd.ZJZLDM" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind2) in $store.state.zjzl"
                        :key="ind2"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">身份证号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.SFZH" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">户口所在地：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.HKSZD" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">联系电话：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.LXDH" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">入境出发地：</span>
                    <el-select v-model="pd.WLGDM" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind4) in $store.state.wlg"
                        :key="ind4"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">出入境状态：</span>
                    <el-select v-model="pd.CRJBSDM" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind3) in $store.state.crjbs"
                        :key="ind3"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">标题：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.BT" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small"  @click="getListType" class="mb-15">查询</el-button>
              <el-button type="primary"  size="small" class="t-ml0" @click="downloadAll">导出</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent ffjs">
      <!-- <div class="ak-tabs">
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
          边防检查国外归来中国人
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
          边防检查入境外国人
        </div>
      </div> -->
      <!-- <div class="ak-tab-pane" > -->
          <div v-show="page==0">
            <!-- <el-row class="mb-15">
              <el-button type="primary"  size="small" @click="showUpload(0)">批量导入</el-button>
              <el-button type="success" size="small" @click="download(0)">模板下载</el-button>
            </el-row> -->
            <div class="yylbt mb-15">预警信息列表</div>
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
                   prop="BT"
                   label="标题">
                 </el-table-column>
                 <el-table-column
                   prop="XM"
                   label="姓名">
                 </el-table-column>
                 <el-table-column
                   prop="XBMC"
                   label="性别">
                 </el-table-column>
                 <el-table-column
                   prop="CSRQ"
                   label="出生日期">
                 </el-table-column>
                 <el-table-column
                   prop="ZJHM"
                   label="证件号码">
                 </el-table-column>
                 <el-table-column
                   prop="HKSZD"
                   label="户口所在地">
                 </el-table-column>
                 <el-table-column
                   prop="JTZZ"
                   label="家庭住址">
                 </el-table-column>
                 <el-table-column
                   prop="LXDH"
                   label="联系电话">
                 </el-table-column>
                 <el-table-column
                   prop="SFZH"
                   label="身份证号">
                 </el-table-column>
                 <el-table-column
                   label="操作" width="120">
                   <template slot-scope="scope">
                   <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row,0)"></el-button>
                   <!-- <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row,0)"></el-button>
                   <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row,0)"></el-button> -->
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
            <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">
              <el-form>
              <el-row type="flex" class="mb-6">
               <el-col :span="24" class="input-item">
                    <el-upload
                      class="input-input"
                      ref="upload"
                      :action='actions+"/drbjmd/readExcel"'
                      :file-list="fileList"
                      multiple
                      :on-success="upSuccess"
                      :data="uploadIconData"
                      :before-upload="beforeAvatarUpload"
                      :limit="1"
                      :auto-upload="false">
                      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                      <br/>
                      <span slot="tip" class="el-upload__tip">只能上传EXCEL文件</span>
                    </el-upload>
                  </el-col>
                </el-row>
              </el-form>
            </el-dialog>
            <el-dialog title="编辑" :visible.sync="editsDialogVisible">
              <el-form   ref="editForm">
                <el-row :gutter="2"  class="mb-6">
                  <el-col :span="12" class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm.XM" class="input-input"></el-input>
                  </el-col>

                  <!-- <el-col :span="12" class="input-item">
                   <span class="input-text">民族：</span>
                   <el-select v-model="editForm.MZDM" @change="getLable(10,editForm.MZDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="(item,ind2) in $store.state.mz"
                       :key="ind2"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
                  </el-col> -->

                  <el-col :span="12" class="input-item">
                    <span class="input-text">性别：</span>
                    <el-select v-model="editForm.XBDM" @change="getLable(3,editForm.XBDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind4) in $store.state.xb"
                        :key="ind4"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text">出生日期：</span>
                    <el-date-picker
                          v-model="editForm.CSRQ" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                          placeholder="选择时间" >
                    </el-date-picker>
                  </el-col>


                  <el-col :span="12" class="input-item">
                    <span class="input-text" title="证件号码">证件号码：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm.ZJHM" class="input-input"></el-input>
                  </el-col>


                  <el-col :span="12" class="input-item">
                    <span class="input-text">出入境时间：</span>
                    <el-date-picker
                          v-model="editForm.CRJSJ" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                          placeholder="选择时间" >
                    </el-date-picker>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text" title="出入境口岸">出入境口岸：</span>
                    <el-select v-model="editForm.CRJKADM" @change="getLable(7,editForm.CRJKADM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind8) in $store.state.rjkn"
                        :key="ind8"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text" title="出入境标识">出入境标识：</span>
                    <el-select v-model="editForm.CRJBSDM" @change="getLable1(11,editForm.CRJBSDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind11) in $store.state.crjbs"
                        :key="ind11"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                  </el-col>
                  <!-- <el-col :span="12" class="input-item">
                    <span class="input-text">住址：</span>
                      <el-input placeholder="请输入内容" size="small" v-model="editForm.DZ" class="input-input"></el-input>
                  </el-col> -->
                  <el-col :span="12" class="input-item">
                    <span class="input-text">交通方式：</span>
                    <el-select v-model="editForm.JTFSDM" @change="getLable(8,editForm.JTFSDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind9) in $store.state.jtfs"
                        :key="ind9"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text">往来国：</span>
                    <el-select v-model="editForm1.WLGDM" @change="getLable(9,editForm.WLGDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind10) in $store.state.wlg"
                        :key="ind10"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text">交通工具：</span>
                      <el-input placeholder="请输入内容" size="small" v-model="editForm.JTGJ" class="input-input"></el-input>
                  </el-col>

                  <!-- <el-col :span="12" class="input-item">
                    <span class="input-text">操作人：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm.CZR" class="input-input"></el-input>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text">操作时间：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm.CZSJ" class="input-input"></el-input>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text">修改人：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm.XGR" class="input-input"></el-input>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text">修改时间：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm.XGSJ" class="input-input"></el-input>
                  </el-col> -->

                  <el-col :span="12" class="input-item">
                    <span class="input-text">身份证号：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm.SFZH" class="input-input"></el-input>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text">户口所在地：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm.HKSZD" class="input-input"></el-input>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text">家庭住址：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm.JTZZ" class="input-input"></el-input>
                  </el-col>
                  <el-col :span="12" class="input-item">
                    <span class="input-text">联系电话：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm.LXDH" class="input-input"></el-input>
                  </el-col>
                </el-row>

              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editsItem('editForm',0)" size="small">确 定</el-button>
                <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
              </div>
            </el-dialog>
            <el-dialog title="详情" :visible.sync="detailsDialogVisible">
              <el-form   ref="mapForm">
                <el-row :gutter="3"  class="mb-6">
                    <el-col :span="12" class="input-item">
                     <span class="input-text">姓名：</span>
                     <span class="input-input detailinput">  {{mapForm.XM}}</span>
                    </el-col>

                    <!-- <el-col :span="12" class="input-item">
                      <span class="input-text">民族：</span>
                      <span class="input-input detailinput">  {{mapForm.MZMC}}</span>
                    </el-col> -->

                    <el-col :span="12" class="input-item">
                      <span class="input-text">性别：</span>
                      <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">出生日期：</span>
                      <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
                    </el-col>

                    <el-col :span="12" class="input-item">
                      <span class="input-text" title="证件号码">证件号码：</span>
                      <span class="input-input detailinput">  {{mapForm.ZJHM}}</span>
                    </el-col>

                    <el-col :span="12" class="input-item">
                      <span class="input-text" title="证件号码">人员类别：</span>
                      <span class="input-input detailinput">  {{mapForm.RYLBMC}}</span>
                    </el-col>

                    <el-col :span="12" class="input-item">
                      <span class="input-text" title="证件号码">证件签发机关：</span>
                      <span class="input-input detailinput">  {{mapForm.QFJGMC}}</span>
                    </el-col>

                    <el-col :span="12" class="input-item">
                      <span class="input-text" title="证件号码">所属派出所：</span>
                      <span class="input-input detailinput">  {{mapForm.SSPCSMC}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text" title="出入境时间">出入境时间：</span>
                      <span class="input-input detailinput">  {{mapForm.CRJSJ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text" title="出入境口岸">出入境口岸：</span>
                      <span class="input-input detailinput">  {{mapForm.CRJKAMC}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text" title="出入境标识">出入境标识：</span>
                      <span class="input-input detailinput">  {{mapForm.CRJBSMC}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">交通工具：</span>
                      <span class="input-input detailinput">  {{mapForm.JTGJ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">交通方式：</span>
                      <span class="input-input detailinput">  {{mapForm.JTFSMC}}</span>
                    </el-col>
                    <!-- <el-col :span="24" class="input-item">
                      <span class="input-text" style="width:11.5%!important">住址：</span>
                      <span class="input-input detailinput" style="width:80%!important">  {{mapForm.DZ}}</span>
                    </el-col> -->
                    <el-col :span="12" class="input-item">
                      <span class="input-text">往来国：</span>
                      <span class="input-input detailinput">  {{mapForm.WLGMC}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text" title="签证号（注）码">签证号（注）码：</span>
                      <span class="input-input detailinput">  {{mapForm.QZHM}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">操作人：</span>
                      <span class="input-input detailinput">  {{mapForm.CZR}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">操作时间：</span>
                      <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">修改人：</span>
                      <span class="input-input detailinput">  {{mapForm.XGR}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">修改时间：</span>
                      <span class="input-input detailinput">  {{mapForm.XGSJ}}</span>
                    </el-col>

                    <el-col :span="12" class="input-item">
                      <span class="input-text">身份证号：</span>
                      <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">户口所在地：</span>
                      <span class="input-input detailinput">  {{mapForm.HKSZD}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">家庭住址：</span>
                      <span class="input-input detailinput">  {{mapForm.JTZZ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">联系电话：</span>
                      <span class="input-input detailinput">  {{mapForm.LXDH}}</span>
                    </el-col>
                </el-row>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
              </div>
            </el-dialog>
         </div>
         <!-- 暂时不用 -->
          <div v-show="page==1">
             <el-row class="mb-15">
               <el-button type="primary"  size="small" @click="showUpload(1)">批量导入</el-button>
               <el-button type="success" size="small" @click="download(1)">模板下载</el-button>
             </el-row>
             <el-table
                  ref="multipleTable"
                  :data="tableData1"
                  border
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
                  <!-- <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column> -->
                  <el-table-column
                    prop="XM"
                    label="姓名">
                  </el-table-column>
                  <el-table-column
                    prop="XBMC"
                    label="性别">
                  </el-table-column>
                  <el-table-column
                    prop="CSRQ"
                    label="出生日期">
                  </el-table-column>
                  <el-table-column
                    prop="ZJHM"
                    label="证件号码">
                  </el-table-column>
                  <el-table-column
                    prop="CRJSJ"
                    label="出入境时间">
                  </el-table-column>
                  <el-table-column
                    label="操作" width="120">
                    <template slot-scope="scope">
                    <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row,1)"></el-button>
                    <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row,1)"></el-button>
                    <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row,1)"></el-button>

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
                 :current-page.sync ="CurrentPage1"
                 :page-size="pageSize1"
                 layout="prev, pager, next"
                 :total="TotalResult1">
               </el-pagination>
            </div>
             <el-dialog title="上传模板" :visible.sync="uploadDialogVisible1"  width="640px">
               <el-form>
               <el-row type="flex" class="mb-6">
                <el-col :span="24" class="input-item">
                     <el-upload
                       class="input-input"
                       ref="upload1"
                       :action='actions+"/drbjmd/readExcel"'
                       :file-list="fileList"
                       multiple
                       :on-success="upSuccess"
                       :data="uploadIconData1"
                       :before-upload="beforeAvatarUpload"
                       :limit="1"
                       :auto-upload="false">
                       <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                       <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                       <br/>
                       <span slot="tip" class="el-upload__tip">只能上传EXCEL文件</span>
                     </el-upload>
                   </el-col>
                 </el-row>
               </el-form>
             </el-dialog>
             <el-dialog title="编辑" :visible.sync="editsDialogVisible1">
               <el-form   ref="editForm1">
                 <el-row :gutter="2"  class="mb-6">
                   <el-col :span="12" class="input-item">
                    <span class="input-text">姓名：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm1.XM" class="input-input"></el-input>
                   </el-col>
                   <el-col :span="12" class="input-item">
                    <span class="input-text">国籍/地区：</span>
                    <el-select v-model="editForm1.GJDQDM" @change="getLable1(4,editForm1.GJDQDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind5) in $store.state.gjdq"
                        :key="ind5"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                   </el-col>
                   <el-col :span="12" class="input-item">
                    <span class="input-text">民族：</span>
                    <el-select v-model="editForm1.MZDM" @change="getLable1(10,editForm1.MZDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind2) in $store.state.mz"
                        :key="ind2"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                   </el-col>

                   <el-col :span="12" class="input-item">
                     <span class="input-text">性别：</span>
                     <el-select v-model="editForm1.XBDM" @change="getLable1(3,editForm1.XBDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                       <el-option
                         v-for="(item,ind4) in $store.state.xb"
                         :key="ind4"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">出生日期：</span>
                     <el-date-picker
                           v-model="editForm1.CSRQ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                           placeholder="选择时间" >
                     </el-date-picker>
                   </el-col>

                   <el-col :span="12" class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="editForm1.ZJZLDM" @change="getLable1(5,editForm1.ZJZLDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind6) in $store.state.zjzl"
                        :key="ind6"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text" title="证件号码">证件号码：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="editForm1.ZJHM" class="input-input"></el-input>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text" title="签证（注）类型">签证（注）类型：</span>
                     <el-select v-model="editForm1.QZLXDM" @change="getLable1(6,editForm1.QZLXDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                       <el-option
                         v-for="(item,ind7) in $store.state.rjqzzl"
                         :key="ind7"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                   </el-col>
                   <el-col :span="12" class="input-item">
                    <span class="input-text" title="签证（注）号码">签证（注）号码：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm1.QZHM" class="input-input"></el-input>
                   </el-col>
                   <el-col :span="12" class="input-item">
                    <span class="input-text" title="停留天数">停留天数：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm1.TLTS" class="input-input"></el-input>
                   </el-col>
                   <el-col :span="12" class="input-item">
                    <span class="input-text" title="自定义代码">自定义代码：</span>
                    <el-input placeholder="请输入内容" size="small" v-model="editForm1.ZDYDM" class="input-input"></el-input>
                   </el-col>
                   <!-- <el-col :span="12" class="input-item">
                     <span class="input-text" title="签证签发日期">签证签发日期：</span>
                     <el-date-picker
                           v-model="editForm.QZQFRQ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                           placeholder="选择时间" >
                     </el-date-picker>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text" title="签证有效日期">签证有效日期：</span>
                     <el-date-picker
                           v-model="editForm.QZYXRQ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                           placeholder="选择时间" >
                     </el-date-picker>
                   </el-col> -->
                   <el-col :span="12" class="input-item">
                     <span class="input-text">出入境时间：</span>
                     <el-date-picker
                           v-model="editForm1.CRJSJ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                           placeholder="选择时间" >
                     </el-date-picker>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text" title="出入境口岸">出入境口岸：</span>
                     <el-select v-model="editForm1.CRJKADM" @change="getLable1(7,editForm1.CRJKADM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                       <el-option
                         v-for="(item,ind8) in $store.state.rjkn"
                         :key="ind8"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text" title="出入境标识">出入境标识：</span>
                     <el-select v-model="editForm1.CRJBSDM" @change="getLable1(11,editForm1.CRJBSDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                       <el-option
                         v-for="(item,ind11) in $store.state.crjbs"
                         :key="ind11"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                   </el-col>
                   <!-- <el-col :span="12" class="input-item">
                     <span class="input-text">住址：</span>
                       <el-input placeholder="请输入内容" size="small" v-model="editForm.DZ" class="input-input"></el-input>
                   </el-col> -->
                   <el-col :span="12" class="input-item">
                     <span class="input-text">交通方式：</span>
                     <el-select v-model="editForm1.JTFSDM" @change="getLable1(8,editForm1.JTFSDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                       <el-option
                         v-for="(item,ind9) in $store.state.jtfs"
                         :key="ind9"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">交通工具：</span>
                       <el-input placeholder="请输入内容" size="small" v-model="editForm1.JTGJ" class="input-input"></el-input>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">往来国：</span>
                     <el-select v-model="editForm1.WLGDM" @change="getLable1(9,editForm1.WLGDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                       <el-option
                         v-for="(item,ind10) in $store.state.wlg"
                         :key="ind10"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">员工标记：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="editForm1.YGBJ" class="input-input"></el-input>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">操作人：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="editForm1.CZR" class="input-input"></el-input>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">操作时间：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="editForm1.CZSJ" class="input-input"></el-input>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">修改人：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="editForm1.XGR" class="input-input"></el-input>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">修改时间：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="editForm1.XGSJ" class="input-input"></el-input>
                   </el-col>
                 </el-row>

               </el-form>
               <div slot="footer" class="dialog-footer">
                 <el-button type="primary" @click="editsItem('editForm1',1)" size="small">确 定</el-button>
                 <el-button @click="editsDialogVisible1 = false" size="small">取 消</el-button>
               </div>
             </el-dialog>
             <el-dialog title="详情" :visible.sync="detailsDialogVisible1">
               <el-form   ref="mapForm1">
                 <el-row :gutter="3"  class="mb-6">
                     <el-col :span="12" class="input-item">
                      <span class="input-text">姓名：</span>
                      <span class="input-input detailinput">  {{mapForm1.XM}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text" title="国籍/地区">国籍/地区：</span>
                       <span class="input-input detailinput">  {{mapForm1.GJDQMC}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text">民族：</span>
                       <span class="input-input detailinput">  {{mapForm1.MZMC}}</span>
                     </el-col>

                     <el-col :span="12" class="input-item">
                      <span class="input-text">性别：</span>
                      <span class="input-input detailinput">  {{mapForm1.XM}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text">性别：</span>
                       <span class="input-input detailinput">  {{mapForm1.XBMC}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text">出生日期：</span>
                       <span class="input-input detailinput">  {{mapForm1.CSRQ}}</span>
                     </el-col>

                     <el-col :span="12" class="input-item">
                       <span class="input-text">证件种类：</span>
                       <span class="input-input detailinput">  {{mapForm1.ZJZLMC}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text" title="证件号码">证件号码：</span>
                       <span class="input-input detailinput">  {{mapForm1.ZJHM}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                      <span class="input-text" title="签证（注）类型">签证（注）类型：</span>
                      <span class="input-input detailinput">  {{mapForm1.QZLXMC}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text" title="签证号（注）码">签证号（注）码：</span>
                       <span class="input-input detailinput">  {{mapForm1.QZHM}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text" title="停留天数">停留天数：</span>
                       <span class="input-input detailinput">  {{mapForm1.TLTS}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text" title="自定义代码">自定义代码：</span>
                       <span class="input-input detailinput">  {{mapForm1.ZDYDM}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text" title="出入境时间">出入境时间：</span>
                       <span class="input-input detailinput">  {{mapForm1.CRJSJ}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text" title="出入境口岸">出入境口岸：</span>
                       <span class="input-input detailinput">  {{mapForm1.CRJKAMC}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text" title="出入境标识">出入境标识：</span>
                       <span class="input-input detailinput">  {{mapForm1.CRJBSMC}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text">交通方式：</span>
                       <span class="input-input detailinput">  {{mapForm1.JTFSMC}}</span>
                     </el-col>
                     <!-- <el-col :span="24" class="input-item">
                       <span class="input-text" style="width:11.5%!important">住址：</span>
                       <span class="input-input detailinput" style="width:80%!important">  {{mapForm.DZ}}</span>
                     </el-col> -->
                     <el-col :span="12" class="input-item">
                       <span class="input-text">往来国：</span>
                       <span class="input-input detailinput">  {{mapForm1.WLGMC}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text">员工标记：</span>
                       <span class="input-input detailinput">  {{mapForm1.YGBJ}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text">操作人：</span>
                       <span class="input-input detailinput">  {{mapForm1.CZR}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text">操作时间：</span>
                       <span class="input-input detailinput">  {{mapForm1.CZSJ}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text">修改人：</span>
                       <span class="input-input detailinput">  {{mapForm1.XGR}}</span>
                     </el-col>
                     <el-col :span="12" class="input-item">
                       <span class="input-text">修改时间：</span>
                       <span class="input-input detailinput">  {{mapForm1.XGSJ}}</span>
                     </el-col>
                 </el-row>
               </el-form>
               <div slot="footer" class="dialog-footer">
                 <el-button @click="detailsDialogVisible1 = false" size="small">取 消</el-button>
               </div>
             </el-dialog>
          </div>
     <!-- </div> -->
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
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
      pd: {},
      uploadIconData:{token:this.$store.state.token,SFZGR:'1'},
      uploadIconData1:{token:this.$store.state.token,SFZGR:'2'},
      nation: [],
      fileList: [],
      actions: "",
      page: 0,
      uploadDialogVisible: false,
      detailsDialogVisible: false,
      editsDialogVisible: false,
      uploadDialogVisible1: false,
      detailsDialogVisible1: false,
      editsDialogVisible1: false,
      uploadDialogVisible2: false,
      detailsDialogVisible2: false,
      editsDialogVisible2: false,
      uploadDialogVisible3: false,
      detailsDialogVisible3: false,
      editsDialogVisible3: false,
      editForm: {},
      mapForm: {},
      editForm1: {},
      mapForm1: {},
      editForm2: {},
      mapForm2: {},
      editForm3: {},
      mapForm3: {},
      options: [{
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
      tableData1: [],
      tableData2: [],
      tableData3: [],

    }
  },
  mounted() {
    this.$store.dispatch('getXB');
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXzqh');
    this.$store.dispatch('getQfjg');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getRjqzzl');
    this.$store.dispatch('getRjkn');
    this.$store.dispatch('getMz');
    this.$store.dispatch('getWlg');
    this.$store.dispatch('getJtfs');
    this.$store.dispatch('getCrjbs');
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  methods: {
    getLable(t,val){
     // if(t==1){//行政区划
     //
     //   let obj = {};
     //    obj = this.$store.state.xzqh.find((item)=>{
     //        return item.dm === val;
     //    });
     //    this.editForm.XZQHMC = obj.mc;
     // }
     // if(t==2){//签发机关
     //   let obj = {};
     //    obj = this.$store.state.qfjg.find((item)=>{
     //        return item.dm === val;
     //    });
     //    this.editForm.QFJGMC = obj.mc;
     // }

     if(t==3){//性别
       let obj = {};
        obj = this.$store.state.xb.find((item)=>{
            return item.dm === val;
        });
        this.editForm.XBMC = obj.mc;
     }

     if(t==4){//国家地区
       let obj = {};
        obj = this.$store.state.gjdq.find((item)=>{
            return item.dm === val;
        });
        this.editForm.GJDQMC = obj.mc;
     }
     if(t==5){//证件种类
       let obj = {};
        obj = this.$store.state.zjzl.find((item)=>{
            return item.dm === val;
        });
        this.editForm.ZJZLMC = obj.mc;
     }
     if(t==6){//签证种类
       let obj = {};
        obj = this.$store.state.rjqzzl.find((item)=>{
            return item.dm === val;
        });
        this.editForm.QZLXMC = obj.mc;
     }

     if(t==7){//出入境口岸
       let obj = {};
        obj = this.$store.state.rjkn.find((item)=>{
            return item.dm === val;
        });
        this.editForm.CRJKAMC = obj.mc;
     }
     if(t==8){//交通方式
       let obj = {};
        obj = this.$store.state.jtfs.find((item)=>{
            return item.dm === val;
        });
        this.editForm.JTFSMC = obj.mc;
     }
     if(t==9){//往来国
       let obj = {};
        obj = this.$store.state.wlg.find((item)=>{
            return item.dm === val;
        });
        this.editForm.WLGMC = obj.mc;
     }
     if(t==10){//民族
       let obj = {};
        obj = this.$store.state.mz.find((item)=>{
            return item.dm === val;
        });
        this.editForm.MZMC = obj.mc;
     }
     if(t==11){//民族
       let obj = {};
        obj = this.$store.state.crjbs.find((item)=>{
            return item.dm === val;
        });
        this.editForm.CRJBSMC = obj.mc;
     }
   },
   getLable1(t,val){
     // if(t==1){//行政区划
     //
     //   let obj = {};
     //    obj = this.$store.state.xzqh.find((item)=>{
     //        return item.dm === val;
     //    });
     //    this.editForm.XZQHMC = obj.mc;
     // }
     // if(t==2){//签发机关
     //   let obj = {};
     //    obj = this.$store.state.qfjg.find((item)=>{
     //        return item.dm === val;
     //    });
     //    this.editForm.QFJGMC = obj.mc;
     // }

     if(t==3){//性别
       let obj = {};
        obj = this.$store.state.xb.find((item)=>{
            return item.dm === val;
        });
        this.editForm1.XBMC = obj.mc;
     }

     if(t==4){//国家地区
       let obj = {};
        obj = this.$store.state.gjdq.find((item)=>{
            return item.dm === val;
        });
        this.editForm1.GJDQMC = obj.mc;
     }
     if(t==5){//证件种类
       let obj = {};
        obj = this.$store.state.zjzl.find((item)=>{
            return item.dm === val;
        });
        this.editForm1.ZJZLMC = obj.mc;
     }
     if(t==6){//签证种类
       let obj = {};
        obj = this.$store.state.rjqzzl.find((item)=>{
            return item.dm === val;
        });
        this.editForm1.QZLXMC = obj.mc;
     }

     if(t==7){//出入境口岸
       let obj = {};
        obj = this.$store.state.rjkn.find((item)=>{
            return item.dm === val;
        });
        this.editForm1.CRJKAMC = obj.mc;
     }
     if(t==8){//交通方式
       let obj = {};
        obj = this.$store.state.jtfs.find((item)=>{
            return item.dm === val;
        });
        this.editForm1.JTFSMC = obj.mc;
     }
     if(t==9){//往来国
       let obj = {};
        obj = this.$store.state.wlg.find((item)=>{
            return item.dm === val;
        });
        this.editForm1.WLGMC = obj.mc;
     }
     if(t==10){//民族
       let obj = {};
        obj = this.$store.state.mz.find((item)=>{
            return item.dm === val;
        });
        this.editForm1.MZMC = obj.mc;
     }
     if(t==11){//民族
       let obj = {};
        obj = this.$store.state.crjbs.find((item)=>{
            return item.dm === val;
        });
        this.editForm1.CRJBSMC = obj.mc;
     }
  },
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
    },
    pageSizeChange1(val) {
      this.getList1(this.CurrentPage1, val, this.pd);
    },
    handleCurrentChange1(val) {
      this.getList1(val, this.pageSize1, this.pd);
    },
    downloadAll(){
      if(this.tableData.length==0){
        this.$message({
          message: '无可导出数据！',
          type: 'warning'
        });
        return
      }
      this.pd.token = this.$store.state.token;
      this.$api.post(this.Global.aport3 + '/drbjmd/exportByzggm',this.pd,
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
        link.setAttribute('download', '入境人员来宁核查列表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    getListType(){
      if(this.page==0){
        this.CurrentPage=1;this.getList(this.CurrentPage,this.pageSize,this.pd)
      }else if(this.page==1){
        this.CurrentPage1=1;this.getList1(this.CurrentPage1,this.pageSize1,this.pd)
      }
    },
    getList(currentPage, showCount, pd) {
      pd.SFZGR = '1';
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "token":this.$store.state.token,
      };
      this.$api.post(this.Global.aport3 + '/drbjmd/getBJMDPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })

      // this.getList1(this.CurrentPage1, this.pageSize1, this.pd);
    },
    getList1(currentPage, showCount, pd) {
      pd.SFZGR = '2';
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "token":this.$store.state.token,
      };
      this.$api.post(this.Global.aport3 + '/drbjmd/getBJMDPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData1 = r.data.resultList;
          this.TotalResult1 = r.data.totalResult;
        })
    },
    details(n, t) {
      if (t == 0) {
        this.detailsDialogVisible = true;
        this.mapForm = n;
      } else if (t == 1) {
        this.detailsDialogVisible1 = true;
        this.mapForm1 = n;
      }
    },
    edits(n, t) {
      if (t == 0) {
        this.editsDialogVisible = true;
        this.editForm = n;
      } else if (t == 1) {
        this.editsDialogVisible1 = true;
        this.editForm1 = n;
      }
    },
    editsItem(formName, t) {
      var ff = {};
      var url = "";
      if (t == 0) {
        url = this.Global.aport3 + "/drbjmd/updateBJMD";
        this.editForm.token=this.$store.state.token;
        ff=this.editForm;
      } else if (t == 1) {
        url = this.Global.aport3 + "/drbjmd/updateBJMD";
        this.editForm1.token=this.$store.state.token;
        ff=this.editForm1;
      }

      this.$api.post(url, ff,
        r => {
          if (r.success) {
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
            // this.$refs[afrom].resetFields();
            switch (t) {
              case 0:
                this.editsDialogVisible = false;
                this.getList(this.CurrentPage, this.pageSize, this.pd);
                break;
              case 1:
                this.editsDialogVisible1 = false;
                this.getList1(this.CurrentPage1, this.pageSize1, this.pd);
                break;
              default:
            }
          } else {
            this.$message.error(r.message);
          }
        }, e => {
          this.$message.error('失败了');
        });
    },
    deletes(i, t) {
      let p = {
        "GUID": i.GUID,
        "token":this.$store.state.token,
      };
      var url = this.Global.aport3 + '/drbjmd/deleteBJMDById';
      // if (t == 1) {
      //   url = this.Global.aport3 + '/drffjlyrjkawzswjlxk/deleteFFJL_YRJKAWZSWJLXKById';
      // }
      this.$confirm('您是否确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api.post(url, p,
          r => {
            if(r.code=="1000001"){
                window.location.href ="#/";
            }
            if (r.success) {
              this.$message({
                message: '删除成功！',
                type: 'success'
              });

              switch (t) {
                case 0:
                  this.getList(this.CurrentPage, this.pageSize, this.pd);
                  break;
                case 1:
                  this.getList1(this.CurrentPage1, this.pageSize1, this.pd);
                  break;
                default:
              }
            } else {
              this.$message.error(r.Message);
            }
          }, e => {
            this.$message.error('失败了');
          });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    upSuccess(r) {
      if (r.success) {
        this.$message({
          message: r.data,
          type: 'success'
        });

      } else {
        this.$message.error(r.message);
      }
      if(this.page==0){
        this.uploadDialogVisible = false;
        this.getList(this.CurrentPage, this.pageSize, this.pd);
      }else if(this.page==1){
        this.uploadDialogVisible1 = false;
        this.getList1(this.CurrentPage1, this.pageSize1, this.pd);
      }
    },
    beforeAvatarUpload(file) {
      // console.log(file.type)
      // const isEXL = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      // const isExls=file.type==='application/vnd.ms-excel';
      //
      // if (!isEXL && !isExls) {
      //   this.$message.error('上传文件只能是 xlsx或者xls 格式!');
      // }
      // return isEXL?isEXL:isExls;
    },
    showUpload(t) {
      this.actions = window.IPConfig.IP+this.Global.aport3;
      if(t == 0){
        this.uploadDialogVisible = true;
        if (this.$refs.upload) {
          this.$refs.upload.clearFiles();
        }
      }
      if (t == 1) {
        this.uploadDialogVisible1 = true;
        if (this.$refs.upload1) {
          this.$refs.upload1.clearFiles();
        }
      }
      this.typemd = "";
        // this.actions = "http://10.0.9.51:9439";

      // console.log(this.$refs.upload)

    },
    submitUpload() {
      if(this.page==0){
        if (this.$refs.upload.uploadFiles.length == 0) {
          this.$message({
            message: '请先选择文件！',
            type: 'warning'
          });
          return
        }
        this.$refs.upload.submit();
      }else if(this.page==1){
        if (this.$refs.upload1.uploadFiles.length == 0) {
          this.$message({
            message: '请先选择文件！',
            type: 'warning'
          });
          return
        }
        this.$refs.upload1.submit();
      }
    },
    download(t) {
      switch (t) {
        case 0:
          window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/边防检查国外归来中国人.xls'
          break;
        case 1:
          window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/边防检查入境外国人.xls'
          break;
        default:
          break;

      }
    },
  }
}
</script>

<style scoped>

</style>
<style>
.ffjs .el-dialog {
  width: 60% !important;
  /* max-height: 400px!important;
  overflow-y: scroll; */
}
</style>
