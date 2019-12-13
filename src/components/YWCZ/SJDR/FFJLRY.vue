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
                   <span class="input-text">签证号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.QZHM" class="input-input"></el-input>
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
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent ffjs">

      <div class="ak-tabs">
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
          有内地签发签证居留许可
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
          有入境口岸但无住宿无内地签发签证居留许可
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==2}" @click="base2">
          有住宿但无内地签发签证居留许可
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==3}" @click="base3">
          逾期越南入出境通行证
        </div>
      </div>
      <div class="ak-tab-pane" >
          <div v-show="page==0">
     <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="showUpload(0)">批量导入</el-button>
        <el-button type="success" size="small" @click="download(0)">模板下载</el-button>
      </el-row>
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
             prop="QZHM"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="GJDQMC"
             label="国家地区">
           </el-table-column>

           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row,0)"></el-button>
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row,0)"></el-button>
             <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row,0)"></el-button>

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
                :action='actions+"/drffjlyndjlxk/readExcel"'
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
             <span class="input-text">省：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.SHENG" class="input-input"></el-input>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">行政区划：</span>
              <el-select v-model="editForm.XZQHDM" @change="getLable(1,editForm.XZQHDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                <el-option
                  v-for="(item,ind2) in $store.state.xzqh"
                  :key="ind2"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">签发机关：</span>
              <el-select v-model="editForm.QFJGDM" @change="getLable(2,editForm.QFJGDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                <el-option
                  v-for="(item,ind3) in $store.state.qfjg"
                  :key="ind3"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>

            <el-col :span="12" class="input-item">
             <span class="input-text">姓名：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm.XM" class="input-input"></el-input>
            </el-col>
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
             <span class="input-text">国家地区：</span>
             <el-select v-model="editForm.GJDQDM" @change="getLable(4,editForm.GJDQDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="(item,ind5) in $store.state.gjdq"
                 :key="ind5"
                 :label="item.dm+' - '+item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">证件种类：</span>
             <el-select v-model="editForm.ZJZLDM" @change="getLable(5,editForm.ZJZLDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="(item,ind6) in $store.state.zjzl"
                 :key="ind6"
                 :label="item.dm+' - '+item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text" title="入境证件号码">入境证件号码：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.RJZJHM" class="input-input"></el-input>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">签证种类：</span>
              <el-select v-model="editForm.RJQZLXDM" @change="getLable(6,editForm.RJQZLXDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                <el-option
                  v-for="(item,ind7) in $store.state.rjqzzl"
                  :key="ind7"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">签证号码：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editForm.QZHM" class="input-input"></el-input>
            </el-col>
            <el-col :span="12" class="input-item">
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
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">入境日期：</span>
              <el-date-picker
                    v-model="editForm.RJRQ" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                    placeholder="选择时间" >
              </el-date-picker>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">入境口岸：</span>
              <el-select v-model="editForm.RJKADM" @change="getLable(7,editForm.RJKADM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                <el-option
                  v-for="(item,ind8) in $store.state.rjkn"
                  :key="ind8"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">邀请单位：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.YQDW" class="input-input"></el-input>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">住址：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.DZ" class="input-input"></el-input>
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
               <span class="input-text">省：</span>
               <span class="input-input detailinput">  {{mapForm.SHENG}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">行政区划：</span>
                <span class="input-input detailinput">  {{mapForm.XZQHMC}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">签发机关：</span>
                <span class="input-input detailinput">  {{mapForm.QFJGMC}}</span>
              </el-col>

              <el-col :span="12" class="input-item">
               <span class="input-text">姓名：</span>
               <span class="input-input detailinput">  {{mapForm.XM}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">性别：</span>
                <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">出生日期：</span>
                <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
              </el-col>

              <el-col :span="12" class="input-item">
               <span class="input-text">国家地区：</span>
               <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">证件种类：</span>
                <span class="input-input detailinput">  {{mapForm.ZJZLMC}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text" title="入境证件号码">入境证件号码：</span>
                <span class="input-input detailinput">  {{mapForm.RJZJHM}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
               <span class="input-text">签证种类：</span>
               <span class="input-input detailinput">  {{mapForm.RJQZLXMC}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">签证号码：</span>
                <span class="input-input detailinput">  {{mapForm.QZHM}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text" title="签证签发日期">签证签发日期：</span>
                <span class="input-input detailinput">  {{mapForm.QZQFRQ}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text" title="签证有效日期">签证有效日期：</span>
                <span class="input-input detailinput">  {{mapForm.QZYXRQ}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">入境日期：</span>
                <span class="input-input detailinput">  {{mapForm.RJRQ}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">入境口岸：</span>
                <span class="input-input detailinput">  {{mapForm.RJKAMC}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">邀请单位：</span>
                <span class="input-input detailinput">  {{mapForm.YQDW}}</span>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text" style="width:11.5%!important">住址：</span>
                <span class="input-input detailinput" style="width:80%!important">  {{mapForm.DZ}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">联系电话：</span>
                <span class="input-input detailinput">  {{mapForm.LXDH}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">操作人：</span>
                <span class="input-input detailinput">  {{mapForm.CZR}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">操作日期：</span>
                <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">修改人：</span>
                <span class="input-input detailinput">  {{mapForm.XGR}}</span>
              </el-col>
              <el-col :span="12" class="input-item">
                <span class="input-text">修改日期：</span>
                <span class="input-input detailinput">  {{mapForm.XGSJ}}</span>
              </el-col>
          </el-row>
          <!-- <el-row :gutter="2" style="border-top:1px solid #eee; padding-top:10px;">
          
          </el-row>
          <el-row :gutter="2">

          </el-row> -->

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
        </div>
      </el-dialog>

      </div>
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
                prop="QZHM"
                label="签证号码">
              </el-table-column>
              <el-table-column
                prop="GJDQMC"
                label="国家地区">
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
                   ref="upload"
                   :action='actions+"/drffjlyrjkawzswjlxk/readExcel"'
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
         <el-dialog title="编辑" :visible.sync="editsDialogVisible1">
           <el-form   ref="editForm1">
             <el-row :gutter="3"  class="mb-6">
               <el-col :span="12" class="input-item">
                <span class="input-text">省：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm1.SHENG" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">入境口岸：</span>

                   <el-select v-model="editForm1.RJKADM" @change="getLable1(8,editForm1.RJKADM)"  filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="(item,ind10) in $store.state.rjkn"
                       :key="ind10"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
               </el-col>

               <el-col :span="12" class="input-item">
                <span class="input-text">姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm1.XM" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">性别：</span>
                   <el-select v-model="editForm1.XBDM" @change="getLable1(3,editForm1.XBDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                     <el-option
                       v-for="(item,ind11) in $store.state.xb"
                       :key="ind11"
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
                <span class="input-text">国家地区：</span>
                  <el-select v-model="editForm1.GJDQDM" @change="getLable1(4,editForm1.GJDQDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="(item,ind12) in $store.state.gjdq"
                      :key="ind12"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                <span class="input-text">证件种类：</span>
                  <el-select v-model="editForm1.ZJZLDM"  @change="getLable1(5,editForm1.ZJZLDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="(item,ind13) in $store.state.zjzl"
                      :key="ind13"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text" title="入境证件号码">入境证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.RJZJHM" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">签证种类：</span>
                 <el-select v-model="editForm1.RJQZLXDM" @change="getLable1(6,editForm1.RJQZLXDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind14) in $store.state.rjqzzl"
                     :key="ind14"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                <span class="input-text">签证号码：</span>
                 <el-input placeholder="请输入内容" size="small" v-model="editForm1.QZHM" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text" title="签证签发日期">签证签发日期：</span>
                   <el-date-picker
                         v-model="editForm1.QZQFRQ" format="yyyy-MM-dd"
                         type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                         placeholder="选择时间" >
                   </el-date-picker>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">签发机关：</span>
                 <el-select v-model="editForm1.QFJGDM" @change="getLable1(7,editForm1.QFJGDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind15) in $store.state.qfjg"
                     :key="ind15"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text" title="签证有效日期">签证有效日期：</span>
                 <el-date-picker
                       v-model="editForm1.QZYXRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">入境日期：</span>
                 <el-date-picker
                       v-model="editForm1.RJRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>

             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button type="primary" @click="editsItem('editForm',1)" size="small">确 定</el-button>
             <el-button @click="editsDialogVisible1 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
         <el-dialog title="详情" :visible.sync="detailsDialogVisible1">
           <el-form   ref="mapForm1">
             <el-row :gutter="3"  class="mb-6">
                 <el-col :span="12" class="input-item">
                  <span class="input-text">省：</span>
                  <span class="input-input detailinput">  {{mapForm1.SHENG}}</span>
                 </el-col>

                 <el-col :span="12" class="input-item">
                   <span class="input-text">签发机关：</span>
                   <span class="input-input detailinput">  {{mapForm1.QFJGMC}}</span>
                 </el-col>

                 <el-col :span="12" class="input-item">
                  <span class="input-text">姓名：</span>
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
                  <span class="input-text">国家地区：</span>
                  <span class="input-input detailinput">  {{mapForm1.GJDQMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">证件种类：</span>
                   <span class="input-input detailinput">  {{mapForm1.ZJZLMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text" title="入境证件号码">入境证件号码：</span>
                   <span class="input-input detailinput">  {{mapForm1.RJZJHM}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                  <span class="input-text">签证种类：</span>
                  <span class="input-input detailinput">  {{mapForm1.RJQZLXMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签证号码：</span>
                   <span class="input-input detailinput">  {{mapForm1.QZHM}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签证签发日期：</span>
                   <span class="input-input detailinput">  {{mapForm1.QZQFRQ}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签证有效日期：</span>
                   <span class="input-input detailinput">  {{mapForm1.QZYXRQ}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">入境日期：</span>
                   <span class="input-input detailinput">  {{mapForm1.RJRQ}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">入境口岸：</span>
                   <span class="input-input detailinput">  {{mapForm1.RJKAMC}}</span>
                 </el-col>


             </el-row>
             <el-row :gutter="2" style="border-top:1px solid #eee; padding-top:10px;">
               <el-col :span="12" class="input-item">
                 <span class="input-text">操作人：</span>
                 <span class="input-input detailinput">  {{mapForm1.CZR}}</span>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">操作日期：</span>
                 <span class="input-input detailinput">  {{mapForm1.CZSJ}}</span>
               </el-col>
             </el-row>
             <el-row :gutter="2">
               <el-col :span="12" class="input-item">
                 <span class="input-text">修改人：</span>
                 <span class="input-input detailinput">  {{mapForm1.XGR}}</span>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">修改日期：</span>
                 <span class="input-input detailinput">  {{mapForm1.XGSJ}}</span>
               </el-col>
             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible1 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
      </div>
      <div v-show="page==2">
        <el-row class="mb-15">
           <el-button type="primary"  size="small" @click="showUpload(2)">批量导入</el-button>
           <el-button type="success" size="small" @click="download(2)">模板下载</el-button>
         </el-row>
         <el-table
              ref="multipleTable"
              :data="tableData2"
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
                prop="QZHM"
                label="签证号码">
              </el-table-column>
              <el-table-column
                prop="GJDQMC"
                label="国家地区">
              </el-table-column>

              <el-table-column
                label="操作" width="120">
                <template slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row,2)"></el-button>
                <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row,2)"></el-button>
                <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row,2)"></el-button>

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
             :current-page.sync ="CurrentPage2"
             :page-size="pageSize2"
             layout="prev, pager, next"
             :total="TotalResult2">
           </el-pagination>
        </div>
         <el-dialog title="上传模板" :visible.sync="uploadDialogVisible2"  width="640px">
           <el-form>
           <el-row type="flex" class="mb-6">
            <el-col :span="24" class="input-item">
                 <el-upload
                   class="input-input"
                   ref="upload"
                   :action='actions+"/drffjlyzswjlxk/readExcel"'
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
         <el-dialog title="编辑" :visible.sync="editsDialogVisible2">
           <el-form   ref="editForm2">
             <el-row :gutter="3"  class="mb-6">
               <el-col :span="12" class="input-item">
                <span class="input-text">省：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm2.SHENG" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">行政区划：</span>
                 <el-select v-model="editForm2.XZQHDM" @change="getLable2(1,editForm2.XZQHDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind20) in $store.state.xzqh"
                     :key="ind20"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">住宿登记地：</span>
                 <el-select v-model="editForm2.ZSDJDDM" @change="getLable2(2,editForm2.ZSDJDDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind27) in $store.state.xzqh"
                     :key="ind27"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>

               <el-col :span="12" class="input-item">
                <span class="input-text">姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm2.XM" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">出生日期：</span>
                 <el-date-picker
                       v-model="editForm2.CSRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">性别：</span>
                 <el-select v-model="editForm2.XBDM" @change="getLable2(3,editForm2.XBDM)"  filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind21) in $store.state.xb"
                     :key="ind21"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>

               <el-col :span="12" class="input-item">
                <span class="input-text">国家地区：</span>
                <el-select v-model="editForm2.GJDQDM" @change="getLable2(4,editForm2.GJDQDM)"  filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                  <el-option
                    v-for="(item,ind22) in $store.state.gjdq"
                    :key="ind22"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                <span class="input-text">证件种类：</span>
                <el-select v-model="editForm2.ZJZLDM" @change="getLable2(5,editForm2.ZJZLDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                  <el-option
                    v-for="(item,ind23) in $store.state.zjzl"
                    :key="ind23"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text" title="入境证件号码">入境证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.RJZJHM" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">签证种类：</span>
                 <el-select v-model="editForm2.RJQZLXDM"  @change="getLable2(6,editForm2.RJQZLXDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind24) in $store.state.rjqzzl"
                     :key="ind24"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                <span class="input-text">签证号码：</span>
                 <el-input placeholder="请输入内容" size="small" v-model="editForm2.QZHM" class="input-input"></el-input>
               </el-col>

               <el-col :span="12" class="input-item">
                 <span class="input-text">签发机关：</span>
                 <el-select v-model="editForm2.QFJGDM"  @change="getLable2(7,editForm2.QFJGDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind25) in $store.state.qfjg"
                     :key="ind25"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text" title="签证签发日期">签证签发日期：</span>
                 <el-date-picker
                       v-model="editForm2.QZQFRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text" title="签证有效日期">签证有效日期：</span>
                 <el-date-picker
                       v-model="editForm2.QZYXRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">入境日期：</span>
                 <el-date-picker
                       v-model="editForm2.RJRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">入境口岸：</span>
                 <el-select v-model="editForm2.RJKADM" @change="getLable2(8,editForm2.RJKADM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind26) in $store.state.rjkn"
                     :key="ind26"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
                </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">入境签证号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.RJZJHM" class="input-input"></el-input>
               </el-col>

               <el-col :span="12" class="input-item">
                 <span class="input-text">最后住宿登记日期：</span>
                 <el-date-picker
                       v-model="editForm2.ZHZSDJRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>
             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button type="primary" @click="editsItem('editForm',2)" size="small">确 定</el-button>
             <el-button @click="editsDialogVisible2 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
         <el-dialog title="详情" :visible.sync="detailsDialogVisible2">
           <el-form   ref="mapForm2">
             <el-row :gutter="3"  class="mb-6">
                 <el-col :span="12" class="input-item">
                  <span class="input-text">省：</span>
                  <span class="input-input detailinput">  {{mapForm2.SHENG}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">行政区划：</span>
                   <span class="input-input detailinput">  {{mapForm2.XZQHMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">住宿登记地：</span>
                   <span class="input-input detailinput">  {{mapForm2.ZSDJD}}</span>
                 </el-col>

                 <el-col :span="12" class="input-item">
                  <span class="input-text">姓名：</span>
                  <span class="input-input detailinput">  {{mapForm2.XM}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">性别：</span>
                   <span class="input-input detailinput">  {{mapForm2.XBMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">出生日期：</span>
                   <span class="input-input detailinput">  {{mapForm2.CSRQ}}</span>
                 </el-col>

                 <el-col :span="12" class="input-item">
                  <span class="input-text">国家地区：</span>
                  <span class="input-input detailinput">  {{mapForm2.GJDQMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">证件种类：</span>
                   <span class="input-input detailinput">  {{mapForm2.ZJZLMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text" title="入境证件号码">入境证件号码：</span>
                   <span class="input-input detailinput">  {{mapForm2.RJZJHM}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                  <span class="input-text">签证种类：</span>
                  <span class="input-input detailinput">  {{mapForm2.RJQZLXMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签证号码：</span>
                   <span class="input-input detailinput">  {{mapForm2.QZHM}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签证签发日期：</span>
                   <span class="input-input detailinput">  {{mapForm2.QZQFRQ}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签发机关：</span>
                   <span class="input-input detailinput">  {{mapForm2.QFJGMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签证有效日期：</span>
                   <span class="input-input detailinput">  {{mapForm2.QZYXRQ}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">入境日期：</span>
                   <span class="input-input detailinput">  {{mapForm2.RJRQ}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">入境口岸：</span>
                   <span class="input-input detailinput">  {{mapForm2.RJKAMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">入境签证号码：</span>
                   <span class="input-input detailinput">  {{mapForm2.RJZJHM}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">住宿城市：</span>
                   <span class="input-input detailinput">  {{mapForm2.XZQHMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">最后住宿登记日期：</span>
                   <span class="input-input detailinput">  {{mapForm2.ZHZSDJRQ}}</span>
                 </el-col>
             </el-row>
             <el-row :gutter="2" style="border-top:1px solid #eee; padding-top:10px;">
               <el-col :span="12" class="input-item">
                 <span class="input-text">操作人：</span>
                 <span class="input-input detailinput">  {{mapForm2.CZR}}</span>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">操作日期：</span>
                 <span class="input-input detailinput">  {{mapForm2.CZSJ}}</span>
               </el-col>
             </el-row>
             <el-row :gutter="2">
               <el-col :span="12" class="input-item">
                 <span class="input-text">修改人：</span>
                 <span class="input-input detailinput">  {{mapForm2.XGR}}</span>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">修改日期：</span>
                 <span class="input-input detailinput">  {{mapForm2.XGSJ}}</span>
               </el-col>
             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible2 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
      </div>
      <div v-show="page==3">
        <el-row class="mb-15">
           <el-button type="primary"  size="small" @click="showUpload(3)">批量导入</el-button>
           <el-button type="success" size="small" @click="download(3)">模板下载</el-button>
         </el-row>
         <el-table
              ref="multipleTable"
              :data="tableData3"
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
                prop="QZHM"
                label="签证号码">
              </el-table-column>
              <el-table-column
                prop="GJDQMC"
                label="国家地区">
              </el-table-column>

              <el-table-column
                label="操作" width="120">
                <template slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row,3)"></el-button>
                <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row,3)"></el-button>
                <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row,3)"></el-button>

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
             :current-page.sync ="CurrentPage3"
             :page-size="pageSize3"
             layout="prev, pager, next"
             :total="TotalResult3">
           </el-pagination>
        </div>
         <el-dialog title="上传模板" :visible.sync="uploadDialogVisible3"  width="640px">
           <el-form>
           <el-row type="flex" class="mb-6">
            <el-col :span="24" class="input-item">
                 <el-upload
                   class="input-input"
                   ref="upload"
                   :action='actions+"/drffjlyqynrcjtxz/readExcel"'
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
         <el-dialog title="编辑" :visible.sync="editsDialogVisible3">
           <el-form   ref="editForm3">
             <el-row :gutter="3"  class="mb-6">
               <el-col :span="12" class="input-item">
                <span class="input-text">省：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TITLE" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">口岸：</span>
                 <el-select v-model="editForm3.KADM" @change="getLable3(8,editForm3.KADM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind31) in $store.state.rjkn"
                     :key="ind31"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>


               <el-col :span="12" class="input-item">
                <span class="input-text">姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm3.XM" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">性别：</span>
                 <el-select v-model="editForm3.XBDM" @change="getLable3(3,editForm3.XBDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind32) in $store.state.xb"
                     :key="ind32"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">出生日期：</span>
                 <el-date-picker
                       v-model="editForm3.CSRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>

               <el-col :span="12" class="input-item">
                <span class="input-text">入境证件种类：</span>
                  <el-select v-model="editForm3.RJZJZLDM" @change="getLable3(5,editForm3.RJZJZLDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="(item,ind33) in $store.state.zjzl"
                      :key="ind33"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text" title="入境证件号码">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.ZJHM" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">签证种类：</span>
                 <el-select v-model="editForm3.QZLXDM" @change="getLable3(6,editForm3.QZLXDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind34) in $store.state.rjqzzl"
                     :key="ind34"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
                 </el-col>
               <el-col :span="12" class="input-item">
                <span class="input-text">签证号码：</span>
                 <el-input placeholder="请输入内容" size="small" v-model="editForm3.QZHM" class="input-input"></el-input>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text" title="签证签发日期">签发日期：</span>
                 <el-date-picker
                       v-model="editForm3.QFRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
                  </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text" title="签证地">签证地：</span>
                 <el-select v-model="editForm3.QFDDM"  @change="getLable3(4,editForm3.QFDDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind35) in $store.state.qfjg"
                     :key="ind35"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
                  </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">签证有效日期：</span>
                 <el-date-picker
                       v-model="editForm3.QZYXRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">入境日期：</span>
                 <el-date-picker
                       v-model="editForm3.RJRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">最后住宿登记地：</span>
                 <el-select v-model="editForm3.ZHZSDJDDM" @change="getLable3(1,editForm3.ZHZSDJDDM)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind36) in $store.state.xzqh"
                     :key="ind36"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">住宿登记日期：</span>
                 <el-date-picker
                       v-model="editForm3.ZSDJRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                       placeholder="选择时间" >
                 </el-date-picker>
               </el-col>
             </el-row>
           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button type="primary" @click="editsItem('editForm',3)" size="small">确 定</el-button>
             <el-button @click="editsDialogVisible3 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
         <el-dialog title="详情" :visible.sync="detailsDialogVisible3">
           <el-form   ref="mapForm3">
             <el-row :gutter="3"  class="mb-6">
                 <el-col :span="12" class="input-item">
                  <span class="input-text">省：</span>
                  <span class="input-input detailinput">  {{mapForm3.SHENG}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">口岸：</span>
                   <span class="input-input detailinput">  {{mapForm3.KAMC}}</span>
                 </el-col>
                <el-col :span="12" class="input-item">
                  <span class="input-text">姓名：</span>
                  <span class="input-input detailinput">  {{mapForm3.XM}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">性别：</span>
                   <span class="input-input detailinput">  {{mapForm3.XBMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">出生日期：</span>
                   <span class="input-input detailinput">  {{mapForm3.CSRQ}}</span>
                 </el-col>

                 <el-col :span="12" class="input-item">
                  <span class="input-text">国家地区：</span>
                  <span class="input-input detailinput">  {{mapForm3.GJDQMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">入境证件种类：</span>
                   <span class="input-input detailinput">  {{mapForm3.RJZJZLMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text" >证件号码：</span>
                   <span class="input-input detailinput">  {{mapForm3.ZJHM}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                  <span class="input-text">签证种类：</span>
                  <span class="input-input detailinput">  {{mapForm3.QZLXMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签证号码：</span>
                   <span class="input-input detailinput">  {{mapForm3.QZHM}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签发日期：</span>
                   <span class="input-input detailinput">  {{mapForm3.QFRQ}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签证地：</span>
                   <span class="input-input detailinput">  {{mapForm3.QFDMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">签证有效期：</span>
                   <span class="input-input detailinput">  {{mapForm3.QZYXRQ}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">入境日期：</span>
                   <span class="input-input detailinput">  {{mapForm3.RJRQ}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">最后住宿登记地：</span>
                   <span class="input-input detailinput">  {{mapForm3.ZHZSDJDMC}}</span>
                 </el-col>
                 <el-col :span="12" class="input-item">
                   <span class="input-text">住宿登记日期：</span>
                   <span class="input-input detailinput">  {{mapForm3.ZSDJRQ}}</span>
                 </el-col>

             </el-row>
             <el-row :gutter="2" style="border-top:1px solid #eee; padding-top:10px;">
               <el-col :span="12" class="input-item">
                 <span class="input-text">操作人：</span>
                 <span class="input-input detailinput">  {{mapForm3.CZR}}</span>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">操作日期：</span>
                 <span class="input-input detailinput">  {{mapForm3.CZSJ}}</span>
               </el-col>
             </el-row>
             <el-row :gutter="2">
               <el-col :span="12" class="input-item">
                 <span class="input-text">修改人：</span>
                 <span class="input-input detailinput">  {{mapForm3.XGR}}</span>
               </el-col>
               <el-col :span="12" class="input-item">
                 <span class="input-text">修改日期：</span>
                 <span class="input-input detailinput">  {{mapForm3.XGSJ}}</span>
               </el-col>
             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible3 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
      </div>
     </div>
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
      uploadIconData:{token:this.$store.state.token},
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

    this.getList(this.CurrentPage, this.pageSize, this.pd);

  },
  methods: {
    getLable(t,val){
     if(t==1){//行政区划

       let obj = {};
        obj = this.$store.state.xzqh.find((item)=>{
            return item.dm === val;
        });
        this.editForm.XZQHMC = obj.mc;
     }
     if(t==2){//签发机关
       let obj = {};
        obj = this.$store.state.qfjg.find((item)=>{
            return item.dm === val;
        });
        this.editForm.QFJGMC = obj.mc;
     }
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
        this.editForm.RJQZLXMC = obj.mc;
     }

     if(t==7){//入境口岸
       let obj = {};
        obj = this.$store.state.rjkn.find((item)=>{
            return item.dm === val;
        });
        this.editForm.RJKAMC = obj.mc;
     }
   },
   getLable1(t,val){
    if(t==1){//行政区划

      let obj = {};
       obj = this.$store.state.xzqh.find((item)=>{
           return item.dm === val;
       });
       this.editForm1.XZQHMC = obj.mc;
    }
    if(t==2){//住宿登记地
      let obj = {};
       obj = this.$store.state.xzqh.find((item)=>{
           return item.dm === val;
       });
       this.editForm1.ZSDJDMC = obj.mc;
    }
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
       this.editForm1.RJQZLXMC = obj.mc;
    }
    if(t==7){//签发机关
      let obj = {};
       obj = this.$store.state.qfjg.find((item)=>{
           return item.dm === val;
       });
       this.editForm1.QFJGMC = obj.mc;
    }
    if(t==8){//入境口岸
      let obj = {};
       obj = this.$store.state.rjkn.find((item)=>{
           return item.dm === val;
       });
       this.editForm1.RJKAMC = obj.mc;
    }
  },
    getLable2(t,val){
     if(t==1){//行政区划

       let obj = {};
        obj = this.$store.state.xzqh.find((item)=>{
            return item.dm === val;
        });
        this.editForm2.XZQHMC = obj.mc;
     }
     if(t==2){//住宿登记地
       let obj = {};
        obj = this.$store.state.xzqh.find((item)=>{
            return item.dm === val;
        });
        this.editForm2.ZSDJDMC = obj.mc;
     }
     if(t==3){//性别
       let obj = {};
        obj = this.$store.state.xb.find((item)=>{
            return item.dm === val;
        });
        this.editForm2.XBMC = obj.mc;
     }
     if(t==4){//国家地区
       let obj = {};
        obj = this.$store.state.gjdq.find((item)=>{
            return item.dm === val;
        });
        this.editForm2.GJDQMC = obj.mc;
     }
     if(t==5){//证件种类
       let obj = {};
        obj = this.$store.state.zjzl.find((item)=>{
            return item.dm === val;
        });
        this.editForm2.ZJZLMC = obj.mc;
     }
     if(t==6){//签证种类
       let obj = {};
        obj = this.$store.state.rjqzzl.find((item)=>{
            return item.dm === val;
        });
        this.editForm2.RJQZLXMC = obj.mc;
     }
     if(t==7){//签发机关
       let obj = {};
        obj = this.$store.state.qfjg.find((item)=>{
            return item.dm === val;
        });
        this.editForm2.QFJGMC = obj.mc;
     }
     if(t==8){//入境口岸
       let obj = {};
        obj = this.$store.state.rjkn.find((item)=>{
            return item.dm === val;
        });
        this.editForm2.RJKAMC = obj.mc;
     }
   },
   getLable3(t,val){
    if(t==1){//行政区划

      let obj = {};
       obj = this.$store.state.xzqh.find((item)=>{
           return item.dm === val;
       });
       this.editForm3.ZHZSDJDMC = obj.mc;
    }
    if(t==2){//住宿登记地
      let obj = {};
       obj = this.$store.state.xzqh.find((item)=>{
           return item.dm === val;
       });
       this.editForm3.ZSDJDMC = obj.mc;
    }
    if(t==3){//性别
      let obj = {};
       obj = this.$store.state.xb.find((item)=>{
           return item.dm === val;
       });
       this.editForm3.XBMC = obj.mc;
    }
    if(t==4){//国家地区
      let obj = {};
       obj = this.$store.state.gjdq.find((item)=>{
           return item.dm === val;
       });
       this.editForm3.QFDMC = obj.mc;
    }
    if(t==5){//证件种类
      let obj = {};
       obj = this.$store.state.zjzl.find((item)=>{
           return item.dm === val;
       });
       this.editForm3.RJZJZLMC = obj.mc;
    }
    if(t==6){//签证种类
      let obj = {};
       obj = this.$store.state.rjqzzl.find((item)=>{
           return item.dm === val;
       });
       this.editForm3.QZLXMC = obj.mc;
    }
    if(t==7){//签发机关
      let obj = {};
       obj = this.$store.state.qfjg.find((item)=>{
           return item.dm === val;
       });
       this.editForm3.QFJGMC = obj.mc;
    }
    if(t==8){//入境口岸
      let obj = {};
       obj = this.$store.state.rjkn.find((item)=>{
           return item.dm === val;
       });
       this.editForm3.KAMC = obj.mc;
    }
  },
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
    pageSizeChange1(val) {
      this.getList1(this.CurrentPage1, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      this.getList1(val, this.pageSize1, this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange2(val) {
      this.getList2(this.CurrentPage2, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange2(val) {
      this.getList(val, this.pageSize2, this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange3(val) {
      this.getList3(this.CurrentPage3, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange3(val) {
      this.getList(val, this.pageSize3, this.pd);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "token":this.$store.state.token,
      };
      this.$api.post(this.Global.aport3 + '/drffjlyndjlxk/getFFJL_YNDJLXKPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })

      this.getList1(this.CurrentPage1, this.pageSize1, this.pd);
      this.getList2(this.CurrentPage2, this.pageSize2, this.pd);
      this.getList3(this.CurrentPage3, this.pageSize3, this.pd);
    },
    getList1(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "token":this.$store.state.token,
      };
      this.$api.post(this.Global.aport3 + '/drffjlyrjkawzswjlxk/getFFJL_YRJKAWZSWJLXKPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData1 = r.data.resultList;
          this.TotalResult1 = r.data.totalResult;
        })
    },
    getList2(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "token":this.$store.state.token,
      };
      this.$api.post(this.Global.aport3 + '/drffjlyzswjlxk/getFFJL_YZSWJLXKPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData2 = r.data.resultList;
          this.TotalResult2 = r.data.totalResult;
        })
    },
    getList3(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "token":this.$store.state.token,
      };
      this.$api.post(this.Global.aport3 + '/drffjlyqynrcjtxz/getFFJL_YQYNRCJTXZPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData3 = r.data.resultList;
          this.TotalResult3 = r.data.totalResult;
        })
    },
    details(n, t) {
      if (t == 0) {
        this.detailsDialogVisible = true;
        this.mapForm = n;
      } else if (t == 1) {
        this.detailsDialogVisible1 = true;
        this.mapForm1 = n;
      } else if (t == 2) {
        this.detailsDialogVisible2 = true;
        this.mapForm2 = n;
      } else if (t == 3) {
        this.detailsDialogVisible3 = true;
        this.mapForm3 =n;
      }
    },
    edits(n, t) {
      if (t == 0) {
        this.editsDialogVisible = true;
        this.editForm = n;
      } else if (t == 1) {
        this.editsDialogVisible1 = true;
        this.editForm1 = n;
      } else if (t == 2) {
        this.editsDialogVisible2 = true;
        this.editForm2 = n;
      } else if (t == 3) {
        this.editsDialogVisible3 = true;
        this.editForm3 = n;
      }
    },
    editsItem(formName, t) {
      var ff = {};
      var url = "";
      if (t == 0) {
        url = this.Global.aport3 + "/drffjlyndjlxk/updateFFJL_YNDJLXK";
        this.editForm.token=this.$store.state.token;
        ff=this.editForm;
      } else if (t == 1) {
        url = this.Global.aport3 + "/drffjlyrjkawzswjlxk/updateFFJL_YRJKAWZSWJLXK";
        this.editForm1.token=this.$store.state.token;
        ff=this.editForm1;
      } else if (t == 2) {
        url = this.Global.aport3 + "/drffjlyzswjlxk/updateFFJL_YZSWJLXK";
        this.editForm2.token=this.$store.state.token;
        ff=this.editForm2;
      } else if (t == 3) {
        url = this.Global.aport3 + "/drffjlyqynrcjtxz/updateFFJL_YQYNRCJTXZ";
        this.editForm3.token=this.$store.state.token;
        ff=this.editForm3;
      }

      this.$api.post(url, ff,
        r => {
          console.log(r);
          if (r.success) {
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
            this.$refs[afrom].resetFields();
            switch (t) {
              case 0:
                this.eidtsDialogVisible = false;
                this.getList(this.CurrentPage, this.pageSize, this.pd);
                break;
              case 1:
                this.eidtsDialogVisible1 = false;
                this.getList1(this.CurrentPage1, this.pageSize1, this.pd1);
                break;
              case 2:
                this.eidtsDialogVisible2 = false;
                this.getList2(this.CurrentPage2, this.pageSize2, this.pd2);
                break;
              case 3:
                this.eidtsDialogVisible3 = false;
                this.getList3(this.CurrentPage3, this.pageSize3, this.pd3);
                break;
              default:

            }

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
    deletes(i, t) {
      let p = {
        "RYBH": i.RYBH,
        "token":this.$store.state.token,
      };
      var url = this.Global.aport3 + '/drffjlyndjlxk/deleteFFJL_YNDJLXKById';
      if (t == 1) {
        url = this.Global.aport3 + '/drffjlyrjkawzswjlxk/deleteFFJL_YRJKAWZSWJLXKById';
      } else if (t == 2) {
        url = this.Global.aport3 + '/drffjlyzswjlxk/deleteFFJL_YZSWJLXKById';
      } else if (t == 3) {
        url = this.Global.aport3 + '/drffjlyqynrcjtxz/deleteFFJL_YQYNRCJTXZById';
      }
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
                  this.getList1(this.CurrentPage1, this.pageSize1, this.pd1);
                  break;
                case 2:
                  this.getList2(this.CurrentPage2, this.pageSize2, this.pd2);
                  break;
                case 3:
                  this.getList3(this.CurrentPage3, this.pageSize3, this.pd3);
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
      this.uploadDialogVisible = false;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
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
      this.uploadDialogVisible = true;
      if (t == 1) {
        this.uploadDialogVisible1 = true;
      } else if (t == 2) {
        this.uploadDialogVisible2 = true;
      } else if (t == 3) {
        this.uploadDialogVisible3 = true;
      }

      this.typemd = "";
        // this.actions = "http://10.0.9.51:9439";
      this.actions = window.IPConfig.IP+this.Global.aport3;
      console.log(this.$refs.upload)
      if (this.$refs.upload) {
        this.$refs.upload.clearFiles();
      }
    },
    submitUpload() {
      if (this.$refs.upload.uploadFiles.length == 0) {
        this.$message({
          message: '请先选择文件！',
          type: 'warning'
        });
        return
      }
      this.$refs.upload.submit();
    },
    download(t) {
      switch (t) {
        case 0:
          window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/持护照入境并有内地签发签证或停居留许可非法居留人员名单导入模板.xls'
          break;
        case 1:
          window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/持护照入境仅有入境口岸记录非法居留人员名单导入模板.xls'
          break;
        case 2:
          window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/持护照入境并有住宿登记信息但无公安机关签发签证或停居留许可人员名单导入模板.xls'
          break;
        case 3:
          window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/持越南入出境通行证入境非法居留人员名单导入模板.xlsx'
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
