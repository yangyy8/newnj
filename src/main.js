// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto'
import store from './assets/js/store' //注册store
import './assets/css/normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/index.js';
import App from './App'
import global_ from './Global.js'
import pl from './assets/js/pl.js'
import router from './router'
import './assets/icon/iconfont.css'
import vueValidateEasy from './assets/js/vue-validate-easy'
import VueImageSwipe from 'vue-image-swipe';
import 'vue-image-swipe/dist/vue-image-swipe.css';

var validators ={
   cname(val){
     var len = 0;
      for (var i=0; i<val.length; i++) {
          if (val.charCodeAt(i)>127 || val.charCodeAt(i)==94) {
               len += 3;
           } else {
               len ++;
           }
       }
     // var p = /^[a-zA-Z0-9]{0,35}$|^[\u4e00-\u9fa5]{0,11}$/.test(val)
     if(len>35) return '字符不能超过35位'
   },
   noCinese(val){
     var p = /[\u4E00-\u9FA5]/g.test(val)
     if(p) return '不可以输入中文'
   },
   number(val){
     var p = !(/^-?\d+(\.\d{1,5})?$/.test(val))
     if(p) return '请输入数字aaa'
   }
};
// import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'
//
// Vue.use(Viewer);
// Viewer.setDefaults({
//   Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
// });
Vue.use(vueValidateEasy,{validators});
Vue.use(ElementUI);
Vue.use(VueImageSwipe);
Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.prototype.Global = global_;
Vue.prototype.pl = pl;
Vue.prototype.objCompare=function(objRow,objPd){
  for(var i in objPd){
    for(var j in objRow){
      if(j==i){
        delete objPd[i]
      }
    }
  }
};
Vue.prototype.downLoadCom=function(data){
  let prefix =  'data:application/vnd.ms-excel;base64,'
  let url = prefix+data;
  let link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', "错误信息.xlsx")
  document.body.appendChild(link)
  link.click()
};
Vue.prototype.format=function(date,format){
  var args = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "q+": Math.floor((date.getMonth() + 3) / 3),  //quarter
      "S": date.getMilliseconds()
  };
  if (/(y+)/.test(format))
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var i in args) {
      var n = args[i];
      if (new RegExp("(" + i + ")").test(format))
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
  }
  return format;
};
Vue.prototype.chargeObjectEqual = function(obj1,obj2){
    // 当前Object对象
    var propsCurr = Object.getOwnPropertyNames(obj1);
    // console.log('obj1',propsCurr,propsCurr.length)
    // 要比较的另外一个Object对象
    var propsCompare = Object.getOwnPropertyNames(obj2);
    // console.log('obj2',propsCompare,propsCompare.length)
    if (propsCurr.length != propsCompare.length) {
        return false;
    }
    for (var i = 0,max = propsCurr.length; i < max; i++) {
        var propName = propsCurr[i];
        // console.log('name',propName,obj1[propName],obj2[propName],obj1[propName] !== obj2[propName])
        if ((obj1[propName] !== obj2[propName])&&(propName!='__ob__')) {
            return false;
        }
    }
    return true;
}
Vue.prototype.closeP = function(tab,routeList){
  if(tab==undefined){
    Vue.prototype.closeT(tab,0,routeList)
  }else{
    if(tab.length==0){
      Vue.prototype.closeT(tab,0,routeList)
    }else{
      Vue.prototype.closeT(tab,tab.length-1,routeList)
    }
  }
}
Vue.prototype.closeT = function(tab,index,routeList){
  if(tab!=undefined){
    tab.splice(index,1);
  }
  if(index>0){
    router.push({name:tab[index-1].name})
  }
  if(index==0){
    if(tab!=undefined&&tab.length!=0){
      router.push({name:tab[index].name})
    }else{
      router.push({name:'Home'})
      routeList=[];
    }
  }
}
router.beforeResolve((to, from, next) => {
  // console.log("token",store.state.token)
  let state=store.state.token;
  if(!state&&to.matched.some(function (item) {
    return item.meta.logined;
  })){
    console.log("未登录")
    next({
      path: '/',
      query:{isLogin:false}
    })
  }else{
    // console.log("已登录")
    next();
  }

})
// 全局混入，关闭tab时清除组件缓存
Vue.mixin({
  beforeRouteLeave(to, from, next) {
    // debugger;
    let flag = true
    store.state.tabList.forEach(e => {    // options存储打开的tabs的组件路由
      if(from.path == e.fullPath) {
        flag = false;
      }
    })

    if(flag && this.$vnode.parent && this.$vnode.parent.componentInstance.cache) {
      // debugger;
      let key = this.$vnode.tag.split('-')[2]   // 当前关闭的组件名
      let cache = this.$vnode.parent.componentInstance.cache  // 缓存的组件
      let keys = this.$vnode.parent.componentInstance.keys  // 缓存的组件名
      if(cache[key] != null) {
        delete cache[key]
        let index = keys.indexOf(key)
        if(index > -1) {
          keys.splice(index, 1)
        }
      }
    }
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//自定义拖动
Vue.directive('drag',
     function (el, binding) {
        let oDiv = el;   //当前元素
         oDiv.onmousedown = function (e) {
            e.preventDefault();
            let bw = document.body.clientWidth;
            let bh = document.body.clientHeight;
            //鼠标按下，计算当前元素距离可视区的距离
             let disX = e.clientX - oDiv.offsetLeft;
             let disY = e.clientY - oDiv.offsetTop;
             // 计算两边坐标
             document.onmousemove = function (e) {
                 let l = 0, t = 0;
                 // 拖动边界
                 if (e.clientX >= bw) {
                     l = bw - disX;
                 } else if (e.clientX <= 0) {
                     {
                         l = 0- disX;
                     }
                 } else {
                     l = e.clientX - disX;
                 }
                 if (e.clientY >= bh) {
                     t = bh - disY;
                 }else if(e.clientY <= 0) {
                     t = 0- disY;
                 }
                 else {
                     t = e.clientY - disY;
                 }
                 //移动当前元素
                 oDiv.style.left = l + 'px';
                 oDiv.style.top = t + 'px';
             };
             // 鼠标停止移动时，事件移除
             document.onmouseup = function (e) {
                 document.onmousemove = null;
                 document.onmouseup = null;
             };
         };
     }
 );
