webpackJsonp([10],{"/D4a":function(t,i,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=l("XLwt"),A=l.n(e),s={data:function(){return{mapCenter:null,pdjhdata:[]}},mounted:function(){var t=[];t.push({dm:1,mc:"六合区",value:123}),t.push({dm:2,mc:"江宁区",value:123}),t.push({dm:3,mc:"栖霞区",value:123}),this.drawLine(t,null),this.getpdjh()},methods:{getpdjh:function(){var t=this;this.$api.get(this.Global.aport3+"/pdjh/getCenterNumToday",null,function(i){t.pdjhdata=i})},drawLine:function(t,i){null!=this.mapCenter&&this.mapCenter.clear();for(var l=[[13,27,"六合区",12,40],[11,13,"江宁区",10,40],[3,18,"浦口区",10,40],[18,7,"溧水区",10,40],[15,1,"高淳区",10,40],[11,22,"栖霞区",10,30],[7,16,"雨花台区",10,20],[10,20,"鼓楼区",10,20],[13,21,"玄武区",10,25],[8.5,18,"建邺区",10,20],[11.5,19,"秦淮区",10,20],[9,23,"江北新区",10,20]],e=0;e<l.length;e++)for(var s=0;s<t.length;s++)l[e][2]==t[s].mc&&(l[e][3]=t[s].value,l[e][6]=t[s].dm);var a={xAxis:{type:"category",data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],show:!1},yAxis:{type:"category",data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,35,26,27,28,29,30,31,32],show:!1,boundaryGap:!1},grid:{left:"0%",right:"0%",bottom:"0%",containLabel:!0},tooltip:{trigger:"item",formatter:function(t,i,l){console.log(t);var e="<div style='border-bottom: 1px dotted #666'>"+t.value[2]+"统计情况</div>";return e+="<div style='text-align: left'>总人数："+t.value[3]+"</div>"}},series:[{data:l,symbolSize:function(t){return t[4]},type:"effectScatter",rippleEffect:{brushType:"stroke"},itemStyle:{normal:{color:"#f36334",shadowBlur:20,shadowColor:"#333"}},label:{normal:{show:!0,formatter:function(t){return t.value[2]},fontSize:10,rich:{name:{textBorderColor:"#fff"}}}}}]};this.mapCenter=A.a.init(document.getElementById("home_map")),this.mapCenter.setOption(a)}}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"screen"},[t._m(0),t._v(" "),e("div",{staticClass:"main"},[e("el-row",{attrs:{gutter:3}},[e("el-col",{attrs:{span:6}},[e("div",{staticClass:"bgline1",staticStyle:{height:"296px"}},[e("div",{staticClass:"title gradient-text-one"},[t._v("\n              案件12个月变化量\n            ")])]),t._v(" "),e("div",{staticClass:"bgline1",staticStyle:{height:"296px","margin-top":"14px"}},[e("div",{staticClass:"title gradient-text-one"},[t._v("\n              常住人员身份分析\n            ")]),t._v(" "),e("div",{staticClass:"tb1"},[e("ul",[e("li",{staticClass:"color1"},[t._v("90.0%  高校留学生  (30010)")]),t._v(" "),e("li",{staticClass:"color2"},[t._v("42.2%  亲属  (11214)")]),t._v(" "),e("li",{staticClass:"color3"},[t._v("25.5%  文教专家  (8689)")]),t._v(" "),e("li",{staticClass:"color4"},[t._v("9.0%  企业工作人员  (2250)")]),t._v(" "),e("li",{staticClass:"color5"},[t._v("1.0%  其他  (265)")])])])]),t._v(" "),e("div",{staticClass:"bgline11",staticStyle:{height:"255px","margin-top":"14px"}},[e("div",{staticClass:"title gradient-text-one"},[t._v("\n              重点国家人员\n            ")])])]),t._v(" "),e("el-col",{staticStyle:{padding:"25px 62px"},attrs:{span:12}},[e("div",{staticClass:"warning"},[e("ul",[e("li",{staticStyle:{float:"left",width:"33%","list-style":"disc"}},[t._v("持短期签证非法就业 "),e("span",{staticClass:"cred"},[t._v("50")]),t._v(" 条")]),t._v(" "),e("li",{staticStyle:{float:"left",width:"33%","list-style":"disc"}},[t._v("临住核查 "),e("span",{staticClass:"cred"},[t._v("50")]),t._v(" 条")]),t._v(" "),e("li",{staticStyle:{float:"left",width:"33%","list-style":"disc"}},[t._v("违临预判预警 "),e("span",{staticClass:"cred"},[t._v("50")]),t._v(" 条")]),t._v(" "),e("li",{staticStyle:{float:"left",width:"33%","list-style":"disc"}},[t._v("布控预警 "),e("span",{staticClass:"cred"},[t._v("50")]),t._v(" 条")])])]),t._v(" "),e("div",{staticClass:"content"},[e("img",{attrs:{src:l("yrqb")}}),t._v(" "),e("div",{staticStyle:{width:"377px",height:"685px",position:"absolute",top:"10%",left:"39%"},attrs:{id:"home_map"}})]),t._v(" "),e("div",{staticClass:"lineup"},[e("img",{attrs:{src:l("7KXP")}})]),t._v(" "),e("div",{staticClass:"pdjh"},[e("ul",t._l(t.pdjhdata,function(i,A){return e("li",{staticStyle:{width:"10%",float:"left","margin-top":"10px"}},[e("div",[t._v(t._s(i.centername))]),t._v(" "),e("div",{staticClass:"mt4"},[t._l(i.queuesum,function(i){return e("span",[e("span",{staticClass:"sz ml4"},[t._v(t._s(i))])])}),t._v(" "),e("span",{staticClass:"ci"},[t._v("次")])],2),t._v(" "),0==A?e("img",{attrs:{src:l("KCHK"),width:"48"}}):t._e(),t._v(" "),1==A?e("img",{attrs:{src:l("DFzn"),width:"48"}}):t._e(),t._v(" "),2==A?e("img",{attrs:{src:l("Psu7"),width:"48"}}):t._e(),t._v(" "),0!=A&&1!=A&&2!=A?e("img",{attrs:{src:l("84XO"),width:"48"}}):t._e()])}),0)])]),t._v(" "),e("el-col",{staticStyle:{"margin-left":"-30px"},attrs:{span:6}},[e("div",{staticClass:"bgline2",staticStyle:{height:"296px"}},[e("div",{staticClass:"title gradient-text-one"},[t._v("\n           临住12个月变化量\n         ")])]),t._v(" "),e("div",{staticClass:"bgline2",staticStyle:{height:"296px","margin-top":"14px"}},[e("div",{staticClass:"title gradient-text-one"},[t._v("\n           中管12个月办理量\n         ")])]),t._v(" "),e("div",{staticClass:"bgline21",staticStyle:{height:"255px","margin-top":"14px"}},[e("div",{staticClass:"title gradient-text-one"},[t._v("\n           居留、停留12个月签发量\n         ")])])])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"banner"},[i("span",[this._v("2019-09-25 11:50")])])}]},c=l("VU/8")(s,a,!1,null,null,null);i.default=c.exports},"7KXP":function(t,i,l){t.exports=l.p+"static/img/warm.261e2c6.png"},"84XO":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAANCAYAAAAKeCiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM5RUYwOUJDRDc1NzExRTlCMDgyQkNFMDNGQ0Q1NkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM5RUYwOUJERDc1NzExRTlCMDgyQkNFMDNGQ0Q1NkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzlFRjA5QkFENzU3MTFFOUIwODJCQ0UwM0ZDRDU2RTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFRjA5QkJENzU3MTFFOUIwODJCQ0UwM0ZDRDU2RTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz55LeprAAABEUlEQVR42mJ0mBPAgARsgDgbiG2BWBSIXwPxYSCeCsRHGIYh2J+8Hq88E5RmgQYCKDAigFgaiNmgdARSILEyjDDAAqWnA3EKAbVZ0EBLHUkBxAjMYtbDNfuQCf4C8Q0gbgJmv1Us0DKHFLACiCOHaxnkODeQDVoWzwGywWWQE4lmgsqk/8MA/wTiViwB9guI9wGZcUBcBwog8RGalUApJQ+P/CkgVgUF0MsRGkC/gXgSHnkrIL4NKoP2Q7PNiCyD0AG0DLID4rlAXAaqxWyg7ZxRAAH/gPgmEDcCy6KVLNAqfiqRtRlIXc5IbEkXAvE0AmZNg6obUYAJqcCC9cFAZcwzIP4FpVdAxbOh6kYUAAgwAPQuccUP5shAAAAAAElFTkSuQmCC"},DFzn:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAANCAYAAAAKeCiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJEQURDNDA3RDc1NzExRTlCMDgyQkNFMDNGQ0Q1NkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJEQURDNDA4RDc1NzExRTlCMDgyQkNFMDNGQ0Q1NkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRBREM0MDVENzU3MTFFOUIwODJCQ0UwM0ZDRDU2RTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRBREM0MDZENzU3MTFFOUIwODJCQ0UwM0ZDRDU2RTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5fcn4vAAABb0lEQVR42uxWvU4CQRDe2eDxBIbC2k5svErAwqfAxsJA46mJjaWJJr4A4bDRHn0ILaCiJDGR2JsYK0vPKH6zjOftiYe0t07y5dvdmdtk5+aPXnZ8pUgBxFwFB+AaeBH8TEQ9pSnEum9sNE1stXyDPZkzNdHppE1Cb8G2/amfoqMMXWyTupemnFNij3XRP1dZooULQAj0gDqwBHjCdTln/YJyTArC7MbGDNtdcVrTJQcRUqwSp893qsVshWkOU8y8UVtvfgffg0+9lfY1R1Awp1O7wFZeIqS4ZtegaBhwllSBi+hu3/zLzTnv5Jo0zgFegbP047zVMPLK7Rsst4FjdlBJuSkcKQcZ+gGwzA56ctRBb0ArQ78OPHANupW0cbIGpcXUIKINFOlLbI+4i2E4xJzz38W+9h/gEfgEXeyKI6gvQ+Bfuhnb7eUpYtJd7LdJ+hDozLirI3ZOiU4ULI6gmtSYR05H4a6cB2LnlHwKMADORXDTbHr1nAAAAABJRU5ErkJggg=="},KCHK:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAANCAYAAAAKeCiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJEQURDNDAzRDc1NzExRTlCMDgyQkNFMDNGQ0Q1NkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJEQURDNDA0RDc1NzExRTlCMDgyQkNFMDNGQ0Q1NkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRBREM0MDFENzU3MTFFOUIwODJCQ0UwM0ZDRDU2RTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRBREM0MDJENzU3MTFFOUIwODJCQ0UwM0ZDRDU2RTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6wRpgqAAABCElEQVR42uyXPQ/BUBSGb4tubGLwD8wmXz9DWIVFJ4vFZDdJKhLtzq8wsFktYhdiEiYV9Z44jS5tar23b/Lkpjmny5vzca9265RFQDVggjrIgyvYAAtshaTKObvQmM5nmk0gM1qgCAw+WwGTMkIxaVxBC9CNkW+DnkoGUQVVY5ojOM+TnBfYg6bfWuafpi5BW+KiMXgW236LnXEWhHp6ggkYhcTJpDkZ5Al19QDZiEq60wy6KGqOC6YR8Qo40gxa8ypPZtCvchrAAUNqsRrfcxJ99QYHMAYrnW/IVsyfKU+TnBQokTn+micNONiPMGfGeUo+NdzAG4xmzInX4Im/6xx3Veu3jwADAHjRb411awx1AAAAAElFTkSuQmCC"},Psu7:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAANCAYAAAAKeCiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM5RUYwOUI4RDc1NzExRTlCMDgyQkNFMDNGQ0Q1NkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM5RUYwOUI5RDc1NzExRTlCMDgyQkNFMDNGQ0Q1NkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRBREM0MDlENzU3MTFFOUIwODJCQ0UwM0ZDRDU2RTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRBREM0MEFENzU3MTFFOUIwODJCQ0UwM0ZDRDU2RTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Lf8USAAABd0lEQVR42uxWvUoDQRCeC9E3CBbWvoQmQsQH0O5sLDxtPBFsUgoKvoCQ2Hi10caASBqNRc7GJ1DsA+ITGNlbv7mdcOehl6T01oGPb3Z22GWH+Vnn8aJCmghwmKtgPyKnpjVVoL9HRH1wE7YwMj7EHGnHcAxK9G/2xKZSa5Vn1xkf1jNnqh/uUb/eb96Wto/ewPbbrRvKk5JwGWgCfcAF5oFZYVfsvD9DlklZ+AzYHuO7K0HbsSlADkpsCSkXSomZdGRdj/TEVsQSS+/L+xX4GXzc866vOIP8KYPaBjaKkiHdTA9aDda4SqrAeT1Yj3vQypRnunGg/z4+gJPs4+68zvDe6/SgbgKHHKA5slM4U/Zz9p+ABQ7Qm6UB+gROc/YXgVfuQQ9SNlb2oKxwD0L9LWN+BVg2eIrhcxh/Bv+nmNEj8Av4CFPskjMolE/gJNOM/faKlDHdCX/SB0BrzFkt8bNKSqmGxRlUkx4zAIbCbbH74meVfAkwADMRXcuBNlG9AAAAAElFTkSuQmCC"},yrqb:function(t,i,l){t.exports=l.p+"static/img/map2.0d62f58.png"}});
//# sourceMappingURL=10.828fd4e991300cb45028.js.map