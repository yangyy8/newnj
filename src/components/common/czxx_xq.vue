<template lang="html">
<div class="czxx">
  <div class="ak-tabs">
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
      人员基本信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
      居住地信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==2}" @click="base2">
      工作地信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==3}" @click="base3">
      走访信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==4}" @click="base4">
      安保信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==5}" @click="base5">
      重点列管信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==6}" @click="base6">
      同户人信息
    </div>
  </div>

  <div class="ak-tab-pane">
    <div v-show="page==0" style="padding:0 15px;">
      <el-row type="flex" :gutter="10">
        <el-col :span="5">
          <el-carousel height="220px" class="photoCar">
            <el-carousel-item v-for="(item,ind) in imagess" :key="ind" v-if="imgshow1" style="text-align:center">
              <img  :src="item.ZPNR" @click="opentp(item.ZPNR)">
            </el-carousel-item>
            <el-carousel-item v-if="!imgshow1" style="text-align:center">
              <img :src="imgURL" @click="opentp(imgURL)">
            </el-carousel-item>
          </el-carousel>
        </el-col>

        <!-- <el-col :span="3" style="min-width:150px;">
          <img src="../../assets/img/mrzp.png" v-if="imgshow" >
          <img :src="imgdm" v-else>
        </el-col> -->
        <el-col :span="19">
          <el-row :gutter="3" class="lh-ts">
            <el-col :span="8" class="input-item">
              <span class="input-text">英文姓：</span>
              <span class="input-input">{{czinfo.YWX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文名：</span>
              <span class="input-input">{{czinfo.YWM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">英文姓名：</span>
             <span class="input-input">{{czinfo.YWXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">中文姓名：</span>
             <span class="input-input">{{czinfo.ZWXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">性别：</span>
             <span class="input-input">{{czinfo.XB_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出生日期：</span>
              <span class="input-input">{{czinfo.CSRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出生地：</span>
              <span class="input-input">{{czinfo.CSD_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">国家地区：</span>
              <span class="input-input">{{czinfo.GJDQ_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">身份：</span>
              <span class="input-input">{{czinfo.SFDM_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件号码：</span>
              <span class="input-input">{{czinfo.ZJHM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件种类：</span>
              <span class="input-input">{{czinfo.ZJZL_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件有效期：</span>
              <span class="input-input">{{czinfo.ZJYXQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">服务处所：</span>
              <span class="input-input">{{czinfo.FWCS}}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
        <hr/>
      <el-row :gutter="3"  class="mb-6">
        <el-col :span="8" class="input-item">
          <span class="input-text">证件内人数：</span>
          <span class="input-input detailinput">  {{czinfo.ZJNRS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证种类：</span>
          <span class="input-input detailinput">  {{czinfo.QZZL_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证号码：</span>
          <span class="input-input detailinput"> {{czinfo.QZHM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证签发日期：</span>
          <span class="input-input detailinput">  {{czinfo.QZQFRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证有效期：</span>
          <span class="input-input detailinput">  {{czinfo.QZYXQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签发日期：</span>
          <span class="input-input detailinput">  {{czinfo.QFRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签发地：</span>
          <span class="input-input detailinput">  {{czinfo.QFD_DESC}}</span>
        </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">身份证号：</span>
            <span class="input-input detailinput">  {{czinfo.SFZH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">停留事由：</span>
            <span class="input-input detailinput">  {{czinfo.TLSY_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">停留有效期：</span>
            <span class="input-input detailinput">  {{czinfo.TLYXQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">是否本地签发：</span>
            <span class="input-input detailinput">  {{czinfo.ZT_BDQF=="0"?"否":czinfo.ZT_BDQF=="1"?"是":""}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">是否注销：</span>
            <span class="input-input detailinput"> {{czinfo.ZT_SFZX_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">注销理由：</span>
            <span class="input-input detailinput">  {{czinfo.ZXLY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">数据来源：</span>
            <span class="input-input detailinput">  {{czinfo.SJLY_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">有效次数：</span>
            <span class="input-input detailinput">  {{czinfo.YXCS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">所属派出所：</span>
            <span class="input-input detailinput">  {{czinfo.SSPCS_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">所属责任区：</span>
            <span class="input-input detailinput">  {{czinfo.SSZRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">市局下发时间：</span>
            <span class="input-input detailinput">  {{czinfo.SJXFSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">社区接收时间：</span>
            <span class="input-input detailinput">  {{czinfo.SQJSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">派出所接收时间：</span>
            <span class="input-input detailinput">  {{czinfo.PCSJSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">分局接收时间：</span>
            <span class="input-input detailinput">  {{czinfo.FJJSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">入境日期：</span>
            <span class="input-input detailinput">  {{czinfo.RJRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">入境事由：</span>
            <span class="input-input detailinput">  {{czinfo.RJSY}}</span>
          </el-col>


          <el-col :span="8" class="input-item">
            <span class="input-text">联系电话：</span>
            <span class="input-input detailinput">  {{czinfo.LXDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">关注程度：</span>
            <span class="input-input detailinput">  {{czinfo.GZCD}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">常住人员确认日期：</span>
            <span class="input-input detailinput">  {{czinfo.RQ_QRRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">常住人员注销日期：</span>
            <span class="input-input detailinput">  {{czinfo.RQ_ZXRQ}}</span>
          </el-col>
      </el-row>
      <hr/>
      <el-row :gutter="3" style="">
        <el-col :span="8" class="input-item">
          <span class="input-text">登记人：</span>
          <span class="input-input detailinput">  {{czinfo.DJR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">登记单位：</span>
          <span class="input-input detailinput">  {{czinfo.DJDW_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">登记日期：</span>
          <span class="input-input detailinput">  {{czinfo.DJRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">上报人：</span>
          <span class="input-input detailinput">  {{czinfo.SBR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">上报单位：</span>
          <span class="input-input detailinput">  {{czinfo.SBDW}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">上报日期：</span>
          <span class="input-input detailinput">  {{czinfo.SBRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">更新人：</span>
          <span class="input-input detailinput">  {{czinfo.GXR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">更新单位：</span>
          <span class="input-input detailinput">  {{czinfo.GXDW_DESC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">更新时间：</span>
          <span class="input-input detailinput">  {{czinfo.GXSJ}}</span>
        </el-col>
      </el-row>
    </div>
    <div v-show="page==1" style="padding:0 15px;">
      <el-table
          :data="tableDatajz"
          @row-click="getJZ"
          border
          style="width: 100%">
          <el-table-column
            prop="JZD_PCS_DESC"
            label="居住地所属派出所">
          </el-table-column>
          <el-table-column
            prop="XXDZ"
            label="详细地址">
          </el-table-column>
          <el-table-column
            prop="ZT_JZZT_DESC"
            label="居住状态名称">
          </el-table-column>
          <el-table-column
            prop="RQ_RZRQ"
            label="入住日期">
          </el-table-column>
          <el-table-column
            label="操作" width="80">
            <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,'jz')"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult1}}条
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
      <div v-if="jzshow" class="mt-10">
        <hr/>
        <el-row :gutter="3"  class="mb-6">
          <el-col :span="8" class="input-item">
            <span class="input-text" title="居住地行政区划">居住地行政区划：</span>
            <span class="input-input detailinput">  {{jzinfo.JZD_XZQH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="居住地所属派出所">居住地所属派出所：</span>
            <span class="input-input detailinput">  {{jzinfo.JZD_PCS_DESC}}</span>
          </el-col>
          <!-- <el-col :span="8" class="input-item">
            <span class="input-text">派出所中文名称：</span>
            <span class="input-input detailinput"> {{jzinfo.JZD_PCSMC}}</span>
          </el-col> -->
          <el-col :span="8" class="input-item">
            <span class="input-text">详细地址：</span>
            <span class="input-input detailinput">  {{jzinfo.XXDZ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">房主姓名：</span>
            <span class="input-input detailinput">  {{jzinfo.FZXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">房主性别：</span>
            <span class="input-input detailinput">  {{jzinfo.FZXB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">房主证件号码：</span>
            <span class="input-input detailinput">  {{jzinfo.FZZJHM}}</span>
          </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">房主工作单位：</span>
              <span class="input-input detailinput">  {{jzinfo.FZGZDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">房主联系电话：</span>
              <span class="input-input detailinput">  {{jzinfo.FZLXDH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">房屋性质：</span>
              <span class="input-input detailinput">  {{jzinfo.FWXZ}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
              <span class="input-text">入住方式：</span>
              <span class="input-input detailinput"> {{jzinfo.RZFS_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="居住初始状态产生时间">居住初始状态产生时间：</span>
              <span class="input-input detailinput">  {{jzinfo.JZZTCSSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">居住状态确认时间：</span>
              <span class="input-input detailinput">  {{jzinfo.JZZTQRSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">登记单位：</span>
              <span class="input-input detailinput">  {{jzinfo.DJDW_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">登记人：</span>
              <span class="input-input detailinput">  {{jzinfo.DJR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">登记日期：</span>
              <span class="input-input detailinput">  {{jzinfo.DJRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="居住状态类型">居住状态类型：</span>
              <span class="input-input detailinput">  {{jzinfo.ZT_JZZT_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">是否核对：</span>
              <span class="input-input detailinput">  {{jzinfo.ZT_SFHD=="0"?"否":jzinfo.ZT_SFHD=="1"?"是":""}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处理单位：</span>
              <span class="input-input detailinput">  {{jzinfo.CLDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处理时间：</span>
              <span class="input-input detailinput">  {{jzinfo.CLSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">处理责任区：</span>
              <span class="input-input detailinput">  {{jzinfo.CLZRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">更新时间：</span>
              <span class="input-input detailinput">  {{jzinfo.GXSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">更新人：</span>
              <span class="input-input detailinput">  {{jzinfo.GXR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">更新单位：</span>
              <span class="input-input detailinput">  {{jzinfo.GXDW_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">数据来源：</span>
              <span class="input-input detailinput">  {{jzinfo.SJLY_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">数据状态：</span>
              <span class="input-input detailinput">  {{jzinfo.ZT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">是否注销：</span>
              <span class="input-input detailinput">  {{jzinfo.ZT_SFZX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">标准化地址：</span>
              <span class="input-input detailinput">  {{jzinfo.JZD_DZTXT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">采集类型：</span>
              <span class="input-input detailinput">  {{jzinfo.ZT_CJLX=="1"?"宾馆":jzinfo.ZT_CJLX=="0"?"社会面":"其他"}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="是否当前居住地信息">是否当前居住地信息：</span>
              <span class="input-input detailinput">  {{jzinfo.ZT_SFYX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">居住地责任区：</span>
              <span class="input-input detailinput">  {{jzinfo.JZD_ZRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">居住地社区：</span>
              <span class="input-input detailinput">  {{jzinfo.JZD_SQ}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
              <span class="input-text">入住日期：</span>
              <span class="input-input detailinput">  {{jzinfo.RQ_RZRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">入住确认日期：</span>
              <span class="input-input detailinput">  {{jzinfo.RQ_RZQRRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">离开日期：</span>
              <span class="input-input detailinput">  {{jzinfo.RQ_LKRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">注销日期：</span>
              <span class="input-input detailinput">  {{jzinfo.RQ_ZXRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">与业主关系：</span>
              <span class="input-input detailinput">  {{jzinfo.YYZGX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">地址X坐标：</span>
              <span class="input-input detailinput">  {{jzinfo.DZXZB}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">地址Y坐标：</span>
              <span class="input-input detailinput">  {{jzinfo.DZYZB}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">备注：</span>
              <span class="input-input detailinput">  {{jzinfo.BZ}}</span>
            </el-col>
        </el-row>
      </div>
    </div>
    <div v-show="page==2" style="padding:0 15px;">
      <el-table
          :data="tableDatagz"
          border
          @row-click="getGZ"
          style="width: 100%;">
          <el-table-column
            prop="GZD_MC"
            label="工作单位名称">
          </el-table-column>
          <el-table-column
            prop="GZD_SFDM_DESC"
            label="工作单位人员身份">
          </el-table-column>
          <el-table-column
            prop="GZD_PCSMC"
            label="工作单位所属派出所名称">
          </el-table-column>
          <el-table-column
            prop="DJRQ"
            label="登记日期">
          </el-table-column>
          <el-table-column
            prop="GZD_GZDH"
            label="工作电话">
          </el-table-column>
          <el-table-column
            prop="XXDZ"
            label="工作单位详细地址">
          </el-table-column>
          <el-table-column
            label="操作" width="80">
            <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,'gz')"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult2}}条
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
        <div v-if="gzshow" class="mt-10">
          <hr/>
          <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位行政区划">工作单位行政区划：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_XZQH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位所属派出所">工作单位所属派出所：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_PCSMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位名称">工作单位名称：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_MC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位人员身份">工作单位人员身份：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_SFDM_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="任职日期">任职日期：</span>
              <span class="input-input detailinput">  {{gzinfo.RZQSSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="离职日期">离职日期：</span>
              <span class="input-input detailinput">  {{gzinfo.RZZZSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作初始状态产生时间">工作初始状态产生时间：</span>
              <span class="input-input detailinput">  {{gzinfo.GZZTCSSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作状态确认时间">工作状态确认时间：</span>
              <span class="input-input detailinput">  {{gzinfo.GZZTQRSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记单位">登记单位：</span>
              <span class="input-input detailinput">  {{gzinfo.DJDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记人">登记人：</span>
              <span class="input-input detailinput">  {{gzinfo.DJR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记日期">登记日期：</span>
              <span class="input-input detailinput">  {{gzinfo.DJRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="录入单位">录入单位：</span>
              <span class="input-input detailinput">  {{gzinfo.LRDW_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="录入日期">录入日期：</span>
              <span class="input-input detailinput">  {{gzinfo.LRRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作状态类型">工作状态类型：</span>
              <span class="input-input detailinput">  {{gzinfo.ZT_GZZT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="是否核对">是否核对：</span>
              <span class="input-input detailinput">  {{gzinfo.ZT_SFHD==0?'否':'是'}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="处理单位">处理单位：</span>
              <span class="input-input detailinput">  {{gzinfo.CLDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="处理时间">处理时间：</span>
              <span class="input-input detailinput">  {{gzinfo.CLSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="处理责任区">处理责任区：</span>
              <span class="input-input detailinput">  {{gzinfo.CLZRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新时间">更新时间：</span>
              <span class="input-input detailinput">  {{gzinfo.GXSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新人">更新人：</span>
              <span class="input-input detailinput">  {{gzinfo.GXR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新单位">更新单位：</span>
              <span class="input-input detailinput">  {{gzinfo.GXDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="数据来源">数据来源：</span>
              <span class="input-input detailinput">  {{gzinfo.SJLY_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="数据状态">数据状态：</span>
              <span class="input-input detailinput">  {{gzinfo.ZT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="是否注销">是否注销：</span>
              <span class="input-input detailinput">  {{gzinfo.ZT_SFZX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="标准化地址名">标准化地址名：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_DZTXT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="当前工作地信息">当前工作地信息：</span>
              <span class="input-input detailinput">  {{gzinfo.ZT_SFYX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作地责任区">工作地责任区：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_ZRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作地社区">工作地社区：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_SQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作电话">工作电话：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_GZDH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位详细地址">工作单位详细地址：</span>
              <span class="input-input detailinput">  {{gzinfo.XXDZ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="入驻日志">入驻日志：</span>
              <span class="input-input detailinput">  {{gzinfo.RQ_RZRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="入驻确认日期">入驻确认日期：</span>
              <span class="input-input detailinput">  {{gzinfo.RQ_RZQRRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="注销日期">注销日期：</span>
              <span class="input-input detailinput">  {{gzinfo.RQ_ZXRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="备注">备注：</span>
              <span class="input-input detailinput">  {{gzinfo.BZ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="注销日期">地址X坐标：</span>
              <span class="input-input detailinput">  {{gzinfo.DZXZB}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="备注">地址Y坐标：</span>
              <span class="input-input detailinput">  {{gzinfo.DZYZB}}</span>
            </el-col>
          </el-row>
        </div>
    </div>
    <div v-show="page==3">
      <el-table
          :data="tableDatazf"
          border
          @row-click="getZF"
          style="width: 100%">
          <el-table-column
            prop="GZXXBT"
            label="走访信息">
          </el-table-column>
          <el-table-column
            prop="GZQKMS"
            label="工作情况描述">
          </el-table-column>
          <el-table-column
            prop="ZFRQ"
            label="走访日期">
          </el-table-column>
          <el-table-column
            prop="JJCS"
            label="解决措施">
          </el-table-column>
          <el-table-column
            prop="ZT"
            label="状态">
          </el-table-column>
          <el-table-column
            label="操作" width="80">
            <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,'zf')"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult3}}条
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

        <div v-if="zfshow" class="mt-10">
          <hr/>
          <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
              <span class="input-text" title="走访信息类别">走访信息类别：</span>
              <span class="input-input detailinput">  {{zfinfo.GZXXLB_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="走访信息标题">走访信息标题：</span>
              <span class="input-input detailinput">  {{zfinfo.GZXXBT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作情况描述">工作情况描述：</span>
              <span class="input-input detailinput">  {{zfinfo.GZQKMS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记单位">登记单位：</span>
              <span class="input-input detailinput">  {{zfinfo.DJDW_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记人">登记人：</span>
              <span class="input-input detailinput">  {{zfinfo.DJR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记日期">登记日期：</span>
              <span class="input-input detailinput">  {{zfinfo.DJRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="走访人">走访人：</span>
              <span class="input-input detailinput">  {{zfinfo.ZFR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="走访日期">走访日期：</span>
              <span class="input-input detailinput">  {{zfinfo.ZFRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新时间">更新时间：</span>
              <span class="input-input detailinput">  {{zfinfo.GXSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新人">更新人：</span>
              <span class="input-input detailinput">  {{zfinfo.GXR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新单位">更新单位：</span>
              <span class="input-input detailinput">  {{zfinfo.GXDW_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="数据来源">数据来源：</span>
              <span class="input-input detailinput">  {{zfinfo.SJLY_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="状态">状态：</span>
              <span class="input-input detailinput">  {{zfinfo.ZT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="解决措施">解决措施：</span>
              <span class="input-input detailinput">  {{zfinfo.JJCS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="是否注销">是否注销：</span>
              <span class="input-input detailinput">  {{zfinfo.ZT_SFZX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="安全要求">安全要求：</span>
              <span class="input-input detailinput">  {{zfinfo.AQYQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="是否有效">是否有效：</span>
              <span class="input-input detailinput">  {{zfinfo.ZT_SFYX}}</span>
            </el-col>
          </el-row>
          </div>
    </div>
    <div v-show="page==4">
      <el-table
          :data="tableDataab"
          border
          @row-click="getAB"
          style="width: 100%">
          <el-table-column
            prop="FFBM_DESC"
            label="防范部门">
          </el-table-column>
          <el-table-column
            prop="ZHAQYS_DESC"
            label="住户安全意识">
          </el-table-column>
          <el-table-column
            prop="JCXM"
            label="检查项目">
          </el-table-column>
          <el-table-column
            prop="JCQK"
            label="检查情况">
          </el-table-column>
          <el-table-column
            prop="BCSM"
            label="补充说明">
          </el-table-column>
          <el-table-column
            label="操作" width="80">
            <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,'ab')"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult4}}条
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
        <div v-if="abshow" class="mt-10">
          <hr/>
          <el-row :gutter="3">
            <el-col :span="8" class="input-item">
              <span class="input-text" title="防范部门">防范部门：</span>
              <span class="input-input detailinput">  {{abinfo.FFBM_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="人防手段">人防手段：</span>
              <span class="input-input detailinput">  {{abinfo.RFSD_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="技防手段">技防手段：</span>
              <span class="input-input detailinput">  {{abinfo.JFSD_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="设施防范">设施防范：</span>
              <span class="input-input detailinput">  {{abinfo.SSFF_DESC}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
              <span class="input-text" title="住户安全意识">住户安全意识：</span>
              <span class="input-input detailinput">  {{abinfo.ZHAQYS_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="检查项目">检查项目：</span>
              <span class="input-input detailinput">  {{abinfo.JCXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="检查情况">检查情况：</span>
              <span class="input-input detailinput">  {{abinfo.JCQK}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="补充说明">补充说明：</span>
              <span class="input-input detailinput">  {{abinfo.BCSM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记人">登记人：</span>
              <span class="input-input detailinput">  {{abinfo.DJR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记单位">登记单位：</span>
              <span class="input-input detailinput">  {{abinfo.DJDW_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记时间">登记时间：</span>
              <span class="input-input detailinput">  {{abinfo.DJSJ}}</span>
            </el-col>
          </el-row>
        </div>
    </div>
    <div v-show="page==5">
      <el-table
          :data="tableDatalg"
          border
          @row-click="getLG"
          style="width: 100%">
          <el-table-column
            prop="YWX"
            label="英文姓">
          </el-table-column>
          <el-table-column
            prop="YWM"
            label="英文名">
          </el-table-column>
          <el-table-column
            prop="XB_DESC"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="GJDQ_DESC"
            label="国家地区">
          </el-table-column>
          <el-table-column
            prop="ZJZL_DESC"
            label="证件种类">
          </el-table-column>
          <el-table-column
            prop="ZJHM"
            label="证件号码">
          </el-table-column>
          <el-table-column
            label="操作" width="80">
            <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,'lg')"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult5}}条
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
        <div v-if="lgshow" class="mt-10">
          <hr/>
          <el-row :gutter="3">
            <el-col :span="8" class="input-item">
              <span class="input-text">列管状态：</span>
              <span class="input-input detailinput">  {{lginfo.LGZT_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文姓：</span>
              <span class="input-input detailinput">  {{lginfo.YWX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文名：</span>
              <span class="input-input detailinput">  {{lginfo.YWM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">性别：</span>
              <span class="input-input detailinput">  {{lginfo.XB_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">国家地区：</span>
              <span class="input-input detailinput">  {{lginfo.GJDQ_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出生日期：</span>
              <span class="input-input detailinput">  {{lginfo.CSRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">服务处所：</span>
              <span class="input-input detailinput">  {{lginfo.FWCS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件种类：</span>
              <span class="input-input detailinput">  {{lginfo.ZJZL_DESC}}</span>
            </el-col>

            <el-col :span="8" class="input-item">
              <span class="input-text">证件号码：</span>
              <span class="input-input detailinput">  {{lginfo.ZJHM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">管理类型：</span>
              <span class="input-input detailinput">  {{lginfo.GLLX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">所属派出所：</span>
              <span class="input-input detailinput">  {{lginfo.SSPCS_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">所属责任区：</span>
              <span class="input-input detailinput">  {{lginfo.SSZRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">登记单位：</span>
              <span class="input-input detailinput">  {{lginfo.DJDW_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">登记人：</span>
              <span class="input-input detailinput">  {{lginfo.DJR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">登记时间：</span>
              <span class="input-input detailinput">  {{lginfo.DJSJ}}</span>
            </el-col>
          </el-row>
        </div>
    </div>
    <div v-show="page==6">
      <el-table
          :data="tableDatath"
          border
          @row-click="getTH"
          style="width: 100%">
          <el-table-column
            prop="YWX"
            label="英文姓">
          </el-table-column>
          <el-table-column
            prop="YWM"
            label="英文名">
          </el-table-column>
          <el-table-column
            prop="ZWXM"
            label="中文姓名">
          </el-table-column>
          <el-table-column
            prop="CSRQ"
            label="出生日期">
          </el-table-column>
          <el-table-column
            prop="XB_DESC"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="GJDQ_DESC"
            label="国家地区">
          </el-table-column>
          <el-table-column
            prop="ZJZL_DESC"
            label="证件种类">
          </el-table-column>
          <el-table-column
            prop="ZJHM"
            label="证件号码">
          </el-table-column>
          <el-table-column
            label="操作" width="80">
            <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,'th')"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult6}}条
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

        <div v-if="thshow" class="mt-10">
        <hr/>
        <el-row :gutter="3">

          <el-col :span="8" class="input-item">
            <span class="input-text">英文姓：</span>
            <span class="input-input detailinput">  {{thinfo.YWX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">英文名：</span>
            <span class="input-input detailinput">  {{thinfo.YWM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">中文姓名：</span>
            <span class="input-input detailinput">  {{thinfo.ZWXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">性别：</span>
            <span class="input-input detailinput">  {{thinfo.XB_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">国家地区：</span>
            <span class="input-input detailinput">  {{thinfo.GJDQ_DESC}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">出生日期：</span>
            <span class="input-input detailinput">  {{thinfo.CSRQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
            <span class="input-text">证件种类：</span>
            <span class="input-input detailinput">  {{thinfo.ZJZL_DESC}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
            <span class="input-text">证件号码：</span>
            <span class="input-input detailinput">  {{thinfo.ZJHM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">停留有效期：</span>
            <span class="input-input detailinput">  {{thinfo.TLYXQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
            <span class="input-text">所属责任区：</span>
            <span class="input-input detailinput">  {{thinfo.SSZRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">登记人：</span>
            <span class="input-input detailinput">  {{thinfo.DJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">登记单位：</span>
            <span class="input-input detailinput">  {{thinfo.DJDW_DESC}}</span>
          </el-col>
        </el-row>
        </div>
    </div>
  </div>
  <el-dialog  title="放大显示" :visible.sync="tcDialogVisible" style="text-align:center" custom-class="big_dialog" :append-to-body="false" :modal="false" >
    <div style="text-align:right;">
      <el-button  size="small" type="primary"  @click="rotate" title="旋转图片" icon="iconfont el-icon-yy-icon_rotate"></el-button>
    </div>
    <img :src="imgs" :style="{transform:'rotateZ('+deg+'deg)'}" v-drag>
  </el-dialog>
</div>
</template>
<script>
import imgUrl from "../../assets/img/t1.png"
export default {
  name:'CZXX',
  props:['type','xid','rybh','random','row'],
  data(){
    return{
      imgURL:imgUrl,
      imgs:'',
      deg:0,
      tcDialogVisible:false,
      imagess:[],
      imgshow1:false,
      czinfo:{},
      jzinfo:{},
      gzinfo:{},
      zfinfo:{},
      abinfo:{},
      lginfo:{},
      thinfo:{},
      gzshow:false,
      jzshow:false,
      zfshow:false,
      abshow:false,
      lgshow:false,
      thshow:false,
      types:this.type,
      id:this.xid,
      pp:{},
      pd:{},
      pc:{},
      page:0,
      imgshow:true,
      imgdm:'',
      tableDatath:[],
      tableDatalg:[],
      tableDataab:[],
      tableDatazf:[],
      tableDatagz:[],
      tableDatajz:[],
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
      options:[{
        value: 3,
        label: "3"
      },
      {
        value:5,
        label: "5"
      },
      {
        value: 7,
        label: "7"
      }
    ],
    userCode:'',
    userName:'',
    orgCode:'',
    orgName:'',
    juState:'',
    token:'',
    }
  },
  mounted(){
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
      this.initData();
   },
  watch:{
    xid:{
      handler(val){
      this.id=val;
      this.initData()
    },
    immediate: true
    },
    random:function(newVal,oldVal){
      this.userCode=this.$store.state.uid;
      this.userName=this.$store.state.uname;
      this.orgName=this.$store.state.orgname;
      this.orgCode=this.$store.state.orgid;
      this.juState=this.$store.state.juState;
      this.token=this.$store.state.token;
      this.random=newVal;
      this.initData();
    },
    type: function(val){
      this.types=val;
    },

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
    pageSizeChange1(val) {
      this.gettableDatajz(this.CurrentPage1,val,this.pd);

    },
    handleCurrentChange1(val) {
      this.gettableDatajz(val,this.pageSize1,this.pd);

    },
    pageSizeChange2(val) {
      this.gettableDatagz(this.CurrentPage2,val,this.pd);

    },
    handleCurrentChange2(val) {
     this.gettableDatagz(val,this.pageSize2,this.pd);
    },
    pageSizeChange3(val) {
     this.gettableDatazf(this.CurrentPage3,val,this.pd);
    },
    handleCurrentChange3(val) {
        this.gettableDatazf(val,this.pageSize3,this.pd);

    },
    pageSizeChange4(val) {
       this.gettableDataab(this.CurrentPage4,val,this.pd);
    },
    handleCurrentChange4(val) {
      this.gettableDataab(val,this.pageSize4,this.pd);
    },
    pageSizeChange5(val) {
      this.gettableDatalg(this.CurrentPage5,val,this.pd);
    },
    handleCurrentChange5(val) {
      this.gettableDatalg(val,this.pageSize5,this.pd);
    },
    pageSizeChange6(val) {
      this.gettableDatath(this.CurrentPage6,val,this.pd);
    },
    handleCurrentChange6(val) {
      this.gettableDatath(val,this.pageSize6,this.pd);
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
    base4() {
      this.page = 4;
    },
    base5() {
      this.page = 5;
    },
    base6() {
      this.page = 6;
    },
    initData(){
      switch (this.types) {
        case 1://预警
        case 2://人员画像
        case 3://数据分析
            this.getData2();
            break;
        default:
      }
    },
    getPhoto(){
      let p={
        "pd":{
          RYBH:this.rybh,
          YWLB:'0004'
        },
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
        // "orderType":"DESC",
	      // "orderBy":{value:"CJSJ",dataType:"date"}
      }
      this.$api.post(this.Global.aport4+'/eS_RY_TPXXController/getResultListByParams',p,
       r =>{
         if(r.success){
           this.imagess=r.data.resultList;
           this.imagess.length!=0?this.imgshow1=true:this.imgshow1=false;
         }
       })
    },
    getData2(){
      if(this.id){
        this.pp.RGUID=this.id;
      }else{
        this.pp.RYBH=this.rybh;
      }

      this.pd.DTID=this.row.DTID;
      let p = {
        "pd": this.pp,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      //人员基本信息
       this.$api.post(this.Global.aport3+'/ryhx/getczryjbxx', p,
        r => {
          if(r.data.resultList.length!=0)
           {
              this.czinfo=r.data.resultList[0];
           }
      })

      this.gettableDatajz(this.CurrentPage1,this.pageSize1,this.pd);
      this.gettableDatagz(this.CurrentPage2,this.pageSize2,this.pd);
      this.gettableDatazf(this.CurrentPage3,this.pageSize3,this.pd);
      this.gettableDataab(this.CurrentPage4,this.pageSize4,this.pd);
      this.gettableDatalg(this.CurrentPage5,this.pageSize5,this.pd);
      this.gettableDatath(this.CurrentPage6,this.pageSize6,this.pd);
      this.getPhoto();
    },
    // 居住地信息
   gettableDatajz(currentPage,showCount,pd)
   {
     let pp = {
       "pd": pd,
       "currentPage":currentPage,
       "showCount":showCount,
       userCode:this.userCode,
       userName:this.userName,
       orgJB:this.juState,
       orgCode:this.orgCode,
       token:this.token,
     };
     this.$api.post(this.Global.aport3+'/ryhx/getczjzdxx', pp,
      r => {
            if(r.success){
              this.tableDatajz=r.data.resultList;
              this.TotalResult1=r.data.totalResult;
            }

    })

   },
   //工作地信息
   gettableDatagz(currentPage,showCount,pd){
     let pp = {
       "pd": pd,
       "currentPage":currentPage,
       "showCount":showCount,
       userCode:this.userCode,
       userName:this.userName,
       orgJB:this.juState,
       orgCode:this.orgCode,
       token:this.token,
     };
      this.$api.post(this.Global.aport3+'/ryhx/getczgzdxx', pp,
       r => {
           if(r.success){
             this.tableDatagz=r.data.resultList;
             this.TotalResult2=r.data.totalResult;
            }
     })
   },
   //走访信息
   gettableDatazf(currentPage,showCount,pd){
     let pp = {
       "pd": pd,
       "currentPage":currentPage,
       "showCount":showCount,
       userCode:this.userCode,
       userName:this.userName,
       orgJB:this.juState,
       orgCode:this.orgCode,
       token:this.token,
     };

      this.$api.post(this.Global.aport3+'/ryhx/getczzfxx', pp,
       r => {
           if(r.success){
             this.tableDatazf=r.data.resultList;
             this.TotalResult3=r.data.totalResult;
            }
      })
   },

     //安保信息
     gettableDataab(currentPage,showCount,pd){
       let pp = {
         "pd": pd,
         "currentPage":currentPage,
         "showCount":showCount,
         userCode:this.userCode,
         userName:this.userName,
         orgJB:this.juState,
         orgCode:this.orgCode,
         token:this.token,
       };
        this.$api.post(this.Global.aport3+'/ryhx/getczabxx', pp,
         r => {
             if(r.success){
               this.tableDataab=r.data.resultList;
               this.TotalResult4=r.data.totalResult;
              }
       })
       },

      //重点列管信息
       gettableDatalg(currentPage,showCount,pd){
         let pp = {
           "pd": pd,
           "currentPage":currentPage,
           "showCount":showCount,
           userCode:this.userCode,
           userName:this.userName,
           orgJB:this.juState,
           orgCode:this.orgCode,
           token:this.token,
         };

          this.$api.post(this.Global.aport3+'/ryhx/getczzdlgxx', pp,
           r => {
               if(r.success){
                 this.tableDatalg=r.data.resultList;
                 this.TotalResult5=r.data.totalResult;
                }
          })
         },
        //同户信息
          gettableDatath(currentPage,showCount,pd){
            let pp = {
              "pd": pd,
              "currentPage":currentPage,
              "showCount":showCount,
              userCode:this.userCode,
              userName:this.userName,
              orgJB:this.juState,
              orgCode:this.orgCode,
              token:this.token,
            };
             this.$api.post(this.Global.aport3+'/ryhx/getczthrxx',pp,
              r => {
                  if(r.success){
                    this.tableDatath=r.data.resultList;
                    this.TotalResult6=r.data.totalResult;
                   }
             })
            },
          getJZ(row,event,column)
            {
              this.jzinfo=row;
              this.jzshow=true;
          },
          getGZ(row,event,column)
          {
            this.gzinfo=row;
            this.gzshow=true;
          },
          getZF(row,event,column)
          {
            this.zfinfo=row;
            this.zfshow=true;
          },
          getAB(row,event,column)
          {
            this.abinfo=row;
            this.abshow=true;
          },
          getLG(row,event,column)
          {
            this.lginfo=row;
            this.lgshow=true;
          },
          getTH(row,event,column)
          {
            this.thinfo=row;
            this.thshow=true;
          },


  },
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
  background-color: #d3dce6;
}

.crcolor {
  background: #EFF3F6;padding:0 10px;
}
.input-text {
  text-align: left !important; width: 32%!important;
}
.input-input{
  width:60%!important;
}

</style>
<style>
  .el-button+.el-button{margin-left: 0!important;}
  .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
  .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
  .bj .el-dialog__wrapper {
    background: #000;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
