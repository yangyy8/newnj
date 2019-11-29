<template lang="html">
    <!-- 难民和寻求庇护者数据采集 -->
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
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind1) in $store.state.gjdq"
                        :key="ind1"
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
                  <span class="input-text">登记日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.ZCRQKSSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.ZCRQJSSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">身份类型：</span>
                  <el-select v-model="pd.SFDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="(item,ind2) in $store.state.sflx"
                      :key="ind2"
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
    <div class="yycontent">

      <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="showUpload">批量导入</el-button>
        <el-button type="success" size="small" @click="download">模板下载</el-button>
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
             prop="AJBH"
             label="案卷编号">
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
             prop="HZHM"
             label="护照号码">
           </el-table-column>
           <el-table-column
             prop="GJDQMC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="ZCRQ"
             label="登记日期">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row)"></el-button>
             <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row)"></el-button>

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
    <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">
    <el-form>
    <el-row type="flex" class="mb-6">
     <el-col :span="24" class="input-item">
          <el-upload
            class="input-input"
            ref="upload"
            :action='actions+"/drnmhxqbhz/readExcel"'
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
  <div class="nmsj">
  <el-dialog title="编辑" :visible.sync="editsDialogVisible">
    <el-form   ref="editForm">
      <el-row :gutter="2"  class="mb-6">
        <el-col :span="12" class="input-item">
         <span class="input-text">案卷编号：</span>
        <el-input placeholder="请输入内容" size="small" v-model="editForm.AJBH" class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">登记日期：</span>
            <el-date-picker
                  v-model="editForm.ZCRQ" format="yyyy-MM-dd"
                  type="date" size="small" value-format="yyyy-MM-dd" class="input-input"
                  placeholder="选择时间" >
            </el-date-picker>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">人数：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.RS" class="input-input"></el-input>
        </el-col>

        <el-col :span="12" class="input-item">
         <span class="input-text">姓名：</span>
           <el-input placeholder="请输入内容" size="small" v-model="editForm.XM" class="input-input"></el-input>
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
          <span class="input-text">性别：</span>
          <el-select v-model="editForm.XBDM" placeholder="请选择" @change="getLable(1,editForm.XBDM)"   filterable clearable default-first-option size="small" class="input-input">
            <el-option
              v-for="(item,ind3) in $store.state.xb"
              :key="ind3"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">国家地区：</span>
          <el-select v-model="editForm.GJDQDM" filterable clearable default-first-option @change="getLable(2,editForm.GJDQDM)" placeholder="请选择"  size="small" class="input-input">
            <el-option
              v-for="item in $store.state.gjdq"
              :key="item.dm"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>

        <el-col :span="12" class="input-item">
         <span class="input-text">护照号码：</span>
           <el-input placeholder="请输入内容" size="small" v-model="editForm.HZHM" class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="入境签证类型">入境签证类型：</span>
          <el-select v-model="editForm.RJQZLXDM" placeholder="请选择" @change="getLable(3,editForm.RJQZLXDM)"   filterable clearable default-first-option size="small" class="input-input">
            <el-option
              v-for="(item,ind4) in $store.state.rjqzzl"
              :key="ind4"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">身份类型：</span>
          <el-select v-model="editForm.SFDM" placeholder="请选择" @change="getLable(4,editForm.SFDM)"   filterable clearable default-first-option size="small" class="input-input">
            <el-option
              v-for="(item,ind5) in $store.state.sflx"
              :key="ind5"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">电话号码：</span>
          <el-input placeholder="请输入内容" size="small" v-model="editForm.DHHM" class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">邮箱地址：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.YXDZ" class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="临住登记编号">临住登记编号：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.LSZSDJXXBH" class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">省：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.SHENG" class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">城市：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.CS" class="input-input"></el-input>
        </el-col>
        <el-col :span="24" class="input-item">
          <span class="input-text" style="width:11%!important;">详细地址：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.XXDZ" class="input-input"  style="width:80%!important;"></el-input>
        </el-col>

      </el-row>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="editsItem('editForm')" size="small">确 定</el-button>
      <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>

  <el-dialog title="详情" :visible.sync="detailsDialogVisible">
    <el-form   ref="mapForm">
      <el-row :gutter="2"  class="mb-6">
          <el-col :span="12" class="input-item">
           <span class="input-text">案卷编号：</span>
           <span class="input-input detailinput">  {{mapForm.AJBH}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">登记日期：</span>
            <span class="input-input detailinput">  {{mapForm.ZCRQ}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">人数：</span>
            <span class="input-input detailinput">  {{mapForm.RS}}</span>
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
           <span class="input-text">护照号码：</span>
           <span class="input-input detailinput">  {{mapForm.HZHM}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text" title="入境签证类型">入境签证类型：</span>
            <span class="input-input detailinput">  {{mapForm.RJQZLXMC}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">身份类型：</span>
            <span class="input-input detailinput">  {{mapForm.SFMC}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
           <span class="input-text">电话号码：</span>
           <span class="input-input detailinput">  {{mapForm.DHHM}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">邮箱地址：</span>
            <span class="input-input detailinput">  {{mapForm.YXDZ}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text" title="临住登记编号">临住登记编号：</span>
            <span class="input-input detailinput">  {{mapForm.LSZSDJXXBH}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">省：</span>
            <span class="input-input detailinput">  {{mapForm.SHENG}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">城市：</span>
            <span class="input-input detailinput">  {{mapForm.CS}}</span>
          </el-col>
        </el-row>
        <el-row :gutter="1">
          <el-col :span="24" class="input-item">
            <span class="input-text" style="width:11%!important;">详细地址：</span>
            <span class="input-input detailinput" style="width:80%!important;">  {{mapForm.XXDZ}}</span>
          </el-col>
        </el-row>
        <el-row :gutter="2">
          <el-col :span="12" class="input-item">
            <span class="input-text">操作人：</span>
            <span class="input-input detailinput">  {{mapForm.CZR}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">操作日期：</span>
            <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
          </el-col>
          </el-row>
      </el-row>

      <div class="stu-title mt-10" style="border-top:1px solid #cccccc">临住登记</div>
      <el-table
        :data="tableData1"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand dfrom">
              <el-row type="flex">
                <el-col :span="16">
                    <el-row :gutter="2">
                      <el-col :span="12">
                        <el-form-item label="英文姓：">
                          <span>{{ props.row.YWX }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="英文名：">
                          <span>{{ props.row.YWM }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="英文姓名：">
                          <span>{{ props.row.YWXM }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="中文姓名：">
                          <span>{{ props.row.ZWXM }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="证件种类：">
                          <span>{{ props.row.ZJZL }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="证件号码：">
                          <span>{{ props.row.ZJHM }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="国家地区：">
                          <span>{{ props.row.GJDQ }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="出生日期：">
                          <span>{{ props.row.CSRQ }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="性别：">
                          <span>{{ props.row.XB }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="身份证号：">
                          <span>{{ props.row.FZSFZH }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="签证种类：">
                          <span>{{ props.row.QZZL }}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="签证(注)号码：">
                          <span>{{ props.row.QZHM }}</span>
                        </el-form-item>
                      </el-col>

                    </el-row>
                </el-col>
                <el-col :span="8" class="imgt">
                     <el-carousel height="300px">
                       <el-carousel-item  v-if="imgshow1" style="text-align: center;padding-top:10px;">
                         <img  :src="props.row.ZPNR" width="400px;" height="250">
                       </el-carousel-item>
                       <el-carousel-item v-else style="text-align: center;padding-top:10px;">
                         <img src="../../../assets/img/t1.png"  width="400px;" height="250">
                       </el-carousel-item>
                     </el-carousel>
                </el-col>
              </el-row>


              <el-row :gutter="3">
                <el-col :span="8">
                  <el-form-item label="签发机关：">
                    <span>{{ props.row.QFD }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="签证(注)有效期：">
                    <span>{{ props.row.TLYXQZ }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="入境日期：">
                    <span>{{ props.row.RJRQ }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="入境口岸：">
                    <span>{{ props.row.RJKA }}</span>
                  </el-form-item>
                </el-col>
                <!-- <el-col :span="8">
                  <el-form-item label="何处来：">
                    <span>{{ props.row.LYD }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="何处去：">
                    <span>{{ props.row.GJDQ }}</span>
                  </el-form-item>
                </el-col> -->
                <!-- <el-col :span="8">
                  <el-form-item label="行政区划：">
                    <span>{{ props.row.DJDWXZQH }}</span>
                  </el-form-item>
                </el-col> -->
                <el-col :span="8">
                  <el-form-item label="入境事由：">
                    <span>{{ props.row.JLSY }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="入住日期：">
                    <span>{{ props.row.ZSRQ }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="接待单位：">
                    <span>{{ props.row.JDDW }}</span>
                  </el-form-item>
                </el-col>
                <!-- <el-col :span="8">
                  <el-form-item label="拟离开日期：">
                    <span>{{ props.row.NLKRQ }}</span>
                  </el-form-item>
                </el-col> -->
                <el-col :span="8">
                  <el-form-item label="投宿于：">
                    <span>{{ props.row.LB_DJDW==1?"社会面":"酒店" }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8" v-if="props.row.LB_DJDW==1">
                  <el-form-item label="标准化地址：">
                    <span>{{ props.row.BZHDZMC }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8" v-if="props.row.LB_DJDW==2">
                  <el-form-item label="旅馆名称：">
                    <span>{{ props.row.BZHDZMC }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="本人联系电话：">
                    <span>{{ props.row.LSDWDH }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="紧急联系人：">
                    <span>{{ props.row.JJLXR }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="派出所名称：">
                    <span>{{ props.row.LRDW }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="留宿单位(户主)：">
                    <span>{{ props.row.LSDW }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="留宿单位(户主)电话：">
                    <span>{{ props.row.LSDWDH }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="紧急情况联系电话：">
                    <span>{{ props.row.JJLXDH }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="与境外人员关系：">
                    <span>{{ props.row.QSGX }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="房屋性质：">
                    <span>{{ props.row.ZFZL }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="房主身份证号：">
                    <span>{{ props.row.FZSFZH }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="备注：">
                    <span>{{ props.row.FZSFZH }}</span>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="3">
                <el-col :span="8">
                  <el-form-item label="录入人：">
                    <span>{{ props.row.LRR }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="录入单位：">
                    <span>{{ props.row.LRDW }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="录入日期：">
                    <span>{{ props.row.LRRQ }}</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="YWXM">
        </el-table-column>
        <el-table-column
          label="性别"
          prop="XB">
        </el-table-column>
        <el-table-column
          label="出生日期"
          prop="CSRQ">
        </el-table-column>
        <el-table-column
          label="证件号码"
          prop="ZJHM">
        </el-table-column>
        <el-table-column
          label="国家地区"
          prop="GJDQ">
        </el-table-column>
        <el-table-column
          label="入住日期"
          prop="DJRQ">
        </el-table-column>
        <el-table-column
          label="拟离开时间"
          prop="NLKRQ">
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
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
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
      pd: {},
      uploadIconData:{token:this.$store.state.token},
      nation: [],
      fileList: [],
      actions: "",
      uploadDialogVisible: false,
      detailsDialogVisible:false,
      editsDialogVisible:false,
      editForm:{},
      mapForm:{},
      options:this.pl.options,
      tableData: [],
      tableData1:[],
      imgshow1: false,

    }
  },
  mounted() {
     this.$store.dispatch('getGjdq');
     this.$store.dispatch('getSflx');
     this.$store.dispatch('getXB');
     this.$store.dispatch('getRjqzzl');
     this.getList(this.CurrentPage,  this.pageSize, this.pd);
  },
  methods: {
    getLable(t,val){
      if(t==1){//性别

        let obj = {};
         obj = this.$store.state.xb.find((item)=>{
             return item.dm === val;
         });
         this.editForm.XBMC = obj.mc;
      }
      if(t==2){//国家地区
        let obj = {};
         obj = this.$store.state.gjdq.find((item)=>{
             return item.dm === val;
         });
         this.editForm.GJDQMC = obj.mc;
      }
      if(t==3){
        let obj = {};
         obj = this.$store.state.rjqzzl.find((item)=>{
             return item.dm === val;
         });
         this.editForm.RJQZLXMC = obj.mc;

      }
      if(t==4){
        let obj = {};
         obj = this.$store.state.sflx.find((item)=>{
             return item.dm === val;
         });
         this.editForm.SFMC = obj.mc;

      }
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
      this.getList1(this.CurrentPage1, val, this.pd1);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      this.getList1(val, this.pageSize1, this.pd1);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "token":this.$store.state.token
      };
      this.$api.post(this.Global.aport3+'/drnmhxqbhz/getNMHXQBHZPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData = r.data.resultList;

          this.TotalResult = r.data.totalResult;
        })
    },
    getList1(currentPage, showCount, pd) {
      let p = {
        	"currentPage":currentPage,
        	"showCount":showCount,
        	"pd":this.mapForm,
        	"orderBy":"",
        	"orderType":"DESC",
          "token":this.$store.state.token
      };
      this.$api.post(this.Global.aport3+'/ywescxlszsdjxx/getLSZSDJXXList', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData1 = r.data.resultList;
          if(r.data.resultList.ZPNR==undefined){
            this.imgshow1=false;
          }else {
            this.imgshow1=true;
          }
          this.TotalResult1 = r.data.totalResult;
        })

    },
    details(n)
    {
      this.detailsDialogVisible=true;
      this.mapForm=n;
      this.getList1(this.CurrentPage1, this.pageSize1, this.pd1);
    },
    edits(n){
      this.editsDialogVisible=true;
      this.editForm=n;
    },
    editsItem(formName)
    {
      this.editForm.token=this.$store.state.token;
      this.$api.post(this.Global.aport3+'/drnmhxqbhz/updateNMHXQBHZ', this.editForm,
      r => {
        if(r.code=="1000001"){
            window.location.href ="#/";
        }
        if (r.success) {
          this.$message({
            message: '保存成功！',
            type: 'success'
          });
        } else {
          this.$message.error(r.Message);
        }
        // this.$refs[afrom].resetFields();
        this.editsDialogVisible = false;
        this.getList(this.CurrentPage,this.pageSize,this.pd);
      }, e => {
        this.$message.error('失败了');
      });
    },
    deletes(i) {
    let p = {
      "RYBH": i.RYBH,
      "token":this.$store.state.token
    };
    this.$confirm('您是否确认删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$api.post(this.Global.aport3+'/drnmhxqbhz/deleteNMHXQBHZById', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          if (r.success) {
            this.$message({
              message: '删除成功！',
              type: 'success'
            });
            this.getList(this.CurrentPage, this.pageSize, this.pd);
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
    showUpload() {
      this.uploadDialogVisible = true;
      this.typemd = "";
      this.actions = window.IPConfig.IP+this.Global.aport3;
      // this.actions="http://10.0.30.63:9439/"
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
    download() {
      var url= window.IPConfig.IP +"/"+ this.Global.aport3 + '/webapp/templateFile/难民和寻求庇护者导入模板.xlsx';
      console.log('dddd,',url);
      window.location.href =url;
    },
  }
}
</script>

<style scoped>
.imgt{ height: 250px;}
.dfrom{padding:0px 10px;}
.img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
<style>
.nmsj .el-dialog {
  width: 70% !important;
  /* max-height: 400px!important;
  overflow-y: scroll; */
}
.nmsj .el-col-12 {text-align: left;}
.nmsj .el-col-8 {text-align: left;}
.nmsj .el-form-item{margin-bottom: 0px!important;  width: 90%!important;}
</style>
