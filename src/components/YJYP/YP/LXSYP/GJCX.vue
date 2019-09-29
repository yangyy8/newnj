<template lang="html">
  <div class="qwjs">
    <el-tabs type="border-card">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全部展开</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <div v-if="jbshow">
      <el-divider content-position="left">基本信息</el-divider>
      <el-row align="center"   :gutter="1">
        <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
           <span class="input-text">中文姓名：</span>
           <el-input placeholder="请输入内容" clearable size="small" v-model="pdjb.zwxm" class="input-input"></el-input>
        </el-col>
        <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
           <span class="input-text">英文姓名：</span>
           <el-input placeholder="请输入内容" clearable size="small" v-model="pdjb.ywxm" class="input-input"></el-input>
        </el-col>
        <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
          <span class="input-text">出生日期：</span>
            <el-date-picker class="input-input"
               v-model="pdjb.csrq" format="yyyy-MM-dd"
               type="date" size="small" value-format="yyyy/MM/dd"
               placeholder="选择时间" >
            </el-date-picker>
        </el-col>
        <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">性别：</span>
          <el-select v-model="pdjb.xb" placeholder="请选择"  filterable clearable  default-first-option size="small" class="input-input">
            <el-option v-for="item in $store.state.xb"
             :key="item.dm"
             :label="item.mc"
             :value="item.dm"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
            <span class="input-text">国家地区：</span>
            <el-select v-model="pdjb.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
              <el-option
                v-for="item in $store.state.gjdq"
                :key="item.dm"
                :label="item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
        </el-col>
        <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
           <span class="input-text">证件号码：</span>
           <el-input placeholder="请输入内容" clearable size="small" v-model="pdjb.zjhm" class="input-input"></el-input>
        </el-col>
     </el-row>
    </div>
    <div v-if="qzshow">

       <el-divider content-position="left">签证信息</el-divider>
       <el-row align="center"   :gutter="1">
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
             <span class="input-text">签证种类：</span>
             <el-select v-model="pdqz.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="item in $store.state.qzzl"
                 :key="item.dm"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">证件号码：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdqz.zjhm" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
           <span class="input-text">停留有效期至：</span>

             <el-date-picker class="input-input"
                v-model="pdqz.tlyxqz" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy/MM/dd"
                placeholder="选择日期" >
             </el-date-picker>

         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
           <span class="input-text">签证有效期至：</span>

             <el-date-picker class="input-input"
                v-model="pdqz.qzyxqz" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy/MM/dd"
                placeholder="选择日期" >
             </el-date-picker>

         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
           <span class="input-text">签发日期：</span>
             <el-date-picker class="input-input"
                v-model="pdqz.qzqfrq" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy/MM/dd"
                placeholder="选择日期" >
             </el-date-picker>
         </el-col>
        </el-row>
     </div>
    <div v-if="lzshow">

       <el-divider content-position="left">临住信息</el-divider>
       <el-row align="center"   :gutter="1">
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">中文姓名：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdlz.zwxm" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">英文姓名：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdlz.ywxm" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
           <span class="input-text">性别：</span>
           <el-select v-model="pdlz.xb" placeholder="请选择"  filterable clearable  default-first-option size="small" class="input-input">
             <el-option v-for="item in $store.state.xb"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm"
             >
             </el-option>
           </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
           <span class="input-text">出生日期：</span>
             <el-date-picker class="input-input"
                v-model="pdlz.csrq" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy/MM/dd"
                placeholder="选择时间" >
             </el-date-picker>

         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
           <span class="input-text">登记日期：</span>
             <el-date-picker class="input-input"
                v-model="pdlz.djrq" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy/MM/dd"
                placeholder="选择时间" >
             </el-date-picker>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
             <span class="input-text">证件种类：</span>
             <el-select v-model="pdlz.zjzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="item in $store.state.zjzl"
                 :key="item.dm"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">证件号码：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdlz.zjhm" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
             <span class="input-text">国家地区：</span>
             <el-select v-model="pdlz.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="item in $store.state.gjdq"
                 :key="item.dm"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">住宿地址：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdlz.lsdwdz" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">住宿单位名称：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdlz.bzhdzmc" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">房号：</span>
            <el-input placeholder="请输入内容"  clearable size="small" v-model="pdlz.fh" class="input-input"></el-input>
         </el-col>
           <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
             <span class="input-text">停留事由：</span>
             <el-select v-model="pdlz.jlsy" filterable clearable default-first-option @change="getSSPCS(pdlz.sszrq)" placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="(item,ind1) in $store.state.rjsy"
                 :key="ind1"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                 <span class="input-text">所属分局：</span>
                 <el-select v-model="pdlz.sszrq" filterable clearable default-first-option @change="getSSPCS(pdlz.sszrq,0)" placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind1) in sszrq"
                     :key="ind1"
                     :label="item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
                   </el-col>
                   <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                     <span class="input-text">派出所：</span>
                       <el-select v-model="pdlz.lrdw" filterable clearable default-first-option placeholder="请输入关键字"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind1) in lrdw"
                        :key="ind1"
                        :label="item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                       </el-col>
       </el-row>
     </div>
    <div v-if="czshow">
       <el-divider content-position="left">常住信息</el-divider>
       <el-row align="center"   :gutter="1">
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">中文姓名：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdcz.zwxm" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">英文姓名：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdcz.ywxm" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
           <span class="input-text">性别：</span>
           <el-select v-model="pdcz.xb" placeholder="请选择"  filterable clearable  default-first-option size="small" class="input-input">
             <el-option v-for="item in $store.state.xb"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm"
             >
             </el-option>
           </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
             <span class="input-text">证件种类：</span>
             <el-select v-model="pdcz.zjzl"  filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="item in $store.state.zjzl"
                 :key="item.dm"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">证件号码：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdcz.zjhm" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
             <span class="input-text">签证种类：</span>
             <el-select v-model="pdcz.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="item in $store.state.qzzl"
                 :key="item.dm"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">签证号码：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdcz.qzhm" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
             <span class="input-text">身份：</span>
             <el-select v-model="pdcz.sfdm" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="item in $store.state.sf"
                 :key="item.dm"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">身份号码：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdcz.sfzh" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
             <span class="input-text">国家地区：</span>
             <el-select v-model="pdcz.gjdq"  filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="item in $store.state.gjdq"
                 :key="item.dm"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
           <span class="input-text">登记日期：</span>
             <el-date-picker class="input-input"
                v-model="pdcz.djrq" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy/MM/dd"
                placeholder="选择时间">
             </el-date-picker>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
           <span class="input-text">市局下发时间段：</span>
             <el-date-picker class="input-input"
                v-model="pdcz.sjxfsj" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy/MM/dd"
                placeholder="选择时间">
             </el-date-picker>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">服务处所：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdcz.fwcs" class="input-input"></el-input>
         </el-col>
           <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
             <span class="input-text">停留事由：</span>
             <el-select v-model="pdcz.jlsy" filterable clearable default-first-option @change="getSSPCS(pdlz.sszrq)" placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="(item,ind1) in $store.state.rjsy"
                 :key="ind1"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                 <span class="input-text">所属分局：</span>
                 <el-select v-model="pdcz.sszrq" filterable clearable default-first-option @change="getSSPCS(pdcz.sszrq,1)" placeholder="请选择"  size="small" class="input-input">
                   <el-option
                     v-for="(item,ind1) in sszrq"
                     :key="ind1"
                     :label="item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
                   </el-col>
                   <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                     <span class="input-text">派出所：</span>
                       <el-select v-model="pdcz.sspcs" filterable clearable default-first-option placeholder="请输入关键字"  size="small" class="input-input">
                      <el-option
                        v-for="(item,ind1) in lrdw1"
                        :key="ind1"
                        :label="item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                       </el-col>
       </el-row>
     </div>
    <div v-if="jzdshow">
      <el-divider content-position="left">常住居住地信息</el-divider>
       <el-row align="center"   :gutter="1">
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
           <span class="input-text">派出所：</span>
             <el-select v-model="pdczjzd.jzd_pcs" filterable clearable default-first-option placeholder="请输入关键字"  size="small" class="input-input">
            <el-option
              v-for="(item,ind) in $store.state.pcs"
              :key="ind"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">详细地址：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdczjzd.xxdz" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">房主姓名：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdczjzd.fzxm" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
           <span class="input-text">登记日期：</span>
             <el-date-picker class="input-input"
                v-model="pdczjzd.djrq" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy/MM/dd"
                placeholder="选择时间">
             </el-date-picker>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
             <span class="input-text">居住状态：</span>
             <el-select v-model="pdczjzd.zt_jzzt"  filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
               <el-option
                 v-for="item in $store.state.jzztcz"
                 :key="item.dm"
                 :label="item.mc"
                 :value="item.dm">
               </el-option>
             </el-select>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">更新单位：</span>
            <el-input placeholder="请输入内容" clearable size="small" v-model="pdczjzd.gxdw" class="input-input"></el-input>
         </el-col>
       </el-row>
    </div>
    <div v-if="gzdshow">
       <el-divider content-position="left">常住工作地信息</el-divider>
       <el-row align="center"   :gutter="1">
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">更新人：</span>
          <el-input placeholder="请输入内容" clearable size="small" v-model="pdczgzd.gxr" class="input-input"></el-input>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">更新单位：</span>
          <el-input placeholder="请输入内容" clearable size="small" v-model="pdczgzd.gxdw" class="input-input"></el-input>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">登记单位：</span>
          <el-input placeholder="请输入内容" clearable size="small" v-model="pdczgzd.djdw" class="input-input"></el-input>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">详细地址：</span>
          <el-input placeholder="请输入内容" clearable size="small" v-model="pdczgzd.xxdz" class="input-input"></el-input>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">工作地电话：</span>
          <el-input placeholder="请输入内容" clearable size="small" v-model="pdczgzd.gzd_gzdh" class="input-input"></el-input>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">工作单位名称：</span>
          <el-input placeholder="请输入内容" clearable size="small" v-model="pdczgzd.gzd_mc" class="input-input"></el-input>
       </el-col>
      </el-row>
    </div>
    <div v-if="ajshow">
      <el-divider content-position="left">案件信息</el-divider>
       <el-row align="center"   :gutter="1">
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">案件名称：</span>
          <el-input placeholder="请输入内容" clearable size="small" v-model="pdaj.ajmc" class="input-input"></el-input>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">案件性质：</span>
          <el-input placeholder="请输入内容" clearable size="small" v-model="pdaj.ajxz" class="input-input"></el-input>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">案件类型：</span>
          <el-input placeholder="请输入内容" clearable size="small" v-model="pdaj.ajlb" class="input-input"></el-input>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">受理时间：</span>
          <el-date-picker class="input-input"
             v-model="pdaj.slsj" format="yyyy-MM-dd"
             type="date" size="small" value-format="yyyy/MM/dd"
             placeholder="选择时间">
          </el-date-picker>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">简要案情：</span>
           <el-input placeholder="请输入内容" clearable size="small" v-model="pdaj.jyaq" class="input-input"></el-input>
       </el-col>
       <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
          <span class="input-text">主办单位：</span>
           <el-input placeholder="请输入内容" clearable size="small" v-model="pdaj.zbdw" class="input-input"></el-input>
       </el-col>
        <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
            <span class="input-text">修改单位：</span>
             <el-input placeholder="请输入内容" clearable size="small" v-model="pdaj.xgdw" class="input-input"></el-input>
         </el-col>
         <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
             <span class="input-text">所属责任区：</span>
              <el-input placeholder="请输入内容" clearable size="small" v-model="pdaj.xgdw" class="input-input"></el-input>
          </el-col>
          <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">案件地址名称：</span>
               <el-input placeholder="请输入内容" clearable size="small" v-model="pdaj.badwdz" class="input-input"></el-input>
           </el-col>
       </el-row>
    </div>
  </el-tabs>

<div style="width:100%; text-align:center; padding-top:30px;">
  <el-button type="primary" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize)">查 询</el-button>
  <el-button type="success" size="small" @click="$router.go(-1)">返回</el-button>
  </div>
<div class="main">
   <el-row   :gutter="2">
  <el-col :sm="24" :md="12" :lg="8" :key="index" v-for="(item,index) in items">
     <el-card class="box-card" style="margin:5px 5px; min-width:350px;">
       <el-row type="flex">
       <el-col :span="2" style="padding:10px;width:140px;">
         <div class="shover"  @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type,gjdq:item.gjdq}})">
         <img :src="item.photo" v-if="item.photo!=''" width="120" height="140">
         <img src="../../../../assets/img/mrzp.png" width="120" height="140" v-else >
        </div>
       </el-col>
       <el-col :span="22">
         <div class="shover" @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type,gjdq:item.gjdq}})">
           <div class="list" style=" padding-left:10px;">
             <p style="margin-bottom:15px!important"><b>{{item.ywxm}}</b></p>
             <el-row :gutter="1">
                   <el-col :span="24" class="t-el-content"><div class="t-el-text">性别：</div><div class="t-el-sub">{{item.xb}}</div></el-col>
                   <el-col :span="24" class="t-el-content"><div class="t-el-text">出生日期：</div><div class="t-el-sub">{{item.csrq}}</div></el-col>
                   <el-col :span="24" class="t-el-content"><div class="t-el-text">国家地区：</div><div class="t-el-sub">{{item.gjdqmc}}</div></el-col>
                   <el-col :span="24" class="t-el-content"><div class="t-el-text">证件号码：</div><div class="t-el-sub">{{item.zjhm}}</div></el-col>
             </el-row>
           </div>
         </div>
       </el-col>
       </el-row>
       </el-card>

  </el-col>

   </el-row>

   <div class="middle-foot" style="margin-top:10px;" v-if="TotalResult!=0">
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

  </div>
</template>
<script scoped>
const cityOptions = ['基本信息', '签证信息', '临住信息', '常住信息', '常住居住地信息', '常住工作地信息', '案件信息'];
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 8,
      TotalResult: 0,
      items: [],
      type: '',
      content: '',
      pdjb: {},
      pdqz: {},
      pdlz: {},
      pdcz: {},
      pdczjzd: {},
      pdczgzd: {},
      pdaj: {},
      sszrq: '',
      lrdw: '',
      lrdw1: '',
      checkAll: false,
      checkedCities: ['基本信息'],
      cities: cityOptions,
      isIndeterminate: true,
      jbshow: true,
      qzshow: false,
      lzshow: false,
      czshow: false,
      jzdshow: false,
      gzdshow: false,
      ajshow: false,
    }
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getRjsy');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getQzzl');
    this.$store.dispatch('getSf');
    this.$store.dispatch('getPcs');
    this.$store.dispatch('getJzztcz');
    this.getSsfj();
  },
  methods: {
    handleCheckAllChange(val) {

      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
      if (val) {
        this.jbshow = true;
        this.qzshow = true;
        this.lzshow = true;
        this.czshow = true;
        this.jzdshow = true;
        this.gzdshow = true;
        this.ajshow = true;
      } else {
        this.jbshow = false;
        this.qzshow = false;
        this.lzshow = false;
        this.czshow = false;
        this.jzdshow = false;
        this.gzdshow = false;
        this.ajshow = false;
      }
    },
    handleCheckedCitiesChange(value) {

      this.jbshow = false;
      this.qzshow = false;
      this.lzshow = false;
      this.czshow = false;
      this.jzdshow = false;
      this.gzdshow = false;
      this.ajshow = false;
      let checkedCount = value.length;

      if (value.length > 0) {

        for (var i = 0; i < value.length; i++) {
          var ss = value[i];

        console.log(ss);
          switch (ss) {
            case "基本信息":
              this.jbshow = true;
              break;
            case "签证信息":
            console.log('==',ss);
              this.qzshow = true;
              break;
            case "临住信息":
              this.lzshow = true;
              break;
            case "常住信息":
              this.czshow = true;
              break;
            case "常住居住地信息":
              this.jzdshow = true;
              break;
            case "常住工作地信息":
              this.gzdshow = true;
              break;
            case "案件信息":
              this.ajshow = true;
              break;
            default:
            this.jbshow = true;
               break;

          }
        }
      }
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize);
      console.log(`当前页: ${val}`);
    },
    getSsfj() {
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname
      };
      var url = this.Global.aport2 + "/data_report/selectSsfjDm";
      this.$api.post(url, p,
        r => {
          this.sszrq = r.data.SSFJ;
        })
    },
    getSSPCS(arr, n) {

      if (n == 0) {
        this.$set(this.pdlz, "lrdw", '');
      } else if (n == 1) {
        this.$set(this.pdcz, "sspcs", '');
      }
      var srr = [];
      srr.push(arr);
      let p = {
        "fjdmList": srr
      }
      this.$api.post(this.Global.aport2 + '/data_report/selectPcsDm', p,
        r => {
          if (r.success) {
            if (n == 0) {
              this.lrdw = r.data.PCS;
            } else {
              this.lrdw1 = r.data.PCS;
            }
          }
        })
    },
    getList(currentPage, pageSize) {
    this.handleCheckAllChange(false);
      let p = {
        'page': currentPage,
        'pageSize': pageSize,
        'esRyRyxx': this.pdjb,
        'esLzLzxx': this.pdlz,
        'esFnVisas': this.pdqz,
        'esCzRyjbxx': this.pdcz,
        'esCzJzdxx': this.pdczjzd,
        'esCzGzdxx': this.pdczgzd,
        'esAjJbxx': this.pdaj,
        "token":this.$store.state.token,
        "userCode":this.$store.state.uid,
        "userName":this.$store.state.uname
      }
      this.$api.post(this.Global.aport6 + '/api/es/search/advanceSearch', p,
        r => {
          console.log(r.success);
          if (r.success) {

            this.items = r.respondResult.respondData;
            this.TotalResult = r.respondResult.totalSize;
          }
        })
    },

  },
}
</script>

<style scoped>
.qwjs {
  background: #ffffff;
  min-height: 700px;
  margin: 10px;
}

.qwjs .top {
  width: 100%;
  height: 40px;

}

.qwjs .inputs {
  width: 480px;
}

.qwjs .main {
  width: 95%;
  padding-left: 30px;
  font-size: 13px;
  margin-top: 20px;
  padding-bottom: 20px;
}

.qwjs .main .list {
  width: 99%;
  margin-top: 10px;
}

.qwjs .main .list span {
  margin-left: 10px;
}

.shover {
  cursor: pointer;
}

.shover:hover {
  font-size: 14px;
  font-weight: bold;
}

.input-text {
  color: #99999 !important;
}
</style>
<style>
.qwjs .el-input-group__prepend {
  background-color: #fff;
}

.box-card .el-card__body {
  padding: 5px 20px !important;
}

.qwjs .el-divider__text {
  color: red !important
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
