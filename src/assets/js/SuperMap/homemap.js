var map;
var markerLayer;
var layerGroup;
var layerGrouppcs;
var groupse=[];
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
var type;
var centers=[32.03613281, 118.78211975];
//地图加载
export function createMapL(id,mc,num,t) {
type=t;
var ss=getcenter(id,function(centers){
  map = L.map('mainMap', {
    crs: L.CRS.EPSG4326,
    preferCanvas: true,
    center: centers,
    maxZoom: 12,
    minZoom: 9,
    zoom: 10,
    zoomControl: false,
    attributionControl: false,
    closePopupOnClick: false //点击地图不关闭popup框
  });
  L.supermap.wmtsLayer("http://50.32.8.73:2333/iserver/services/map-wmts-GADT/wmts-china", {
    layer: "GADT",
    style: "default",
    tilematrixSet: "ChinaPublicServices_GADT",
    format: "image/png",
    transparent: true
  }).addTo(map);
  markerLayer = L.featureGroup().addTo(map);

  getSearch(id,mc,num);
  map.on('zoomend', function(e) {
  var sz = e.target.getZoom();
  if (sz <11) {

markerLayer.clearLayers();
layerGroup.clearLayers();
layerGrouppcs.clearLayers();
removepcs();

        getSearch(id,mc,num);
    }
  });


});

}

function removepcs() {
  for (var i = 0; i < groupse.length; i++) {
    map.removeLayer(groupse[i]);
  }
}

function getcenter(id,callback) {
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_fj_3201_pg@ORCL_gt8",
      // attributeFilter: "ADMINCODE='1CHN" + id + "'"
      attributeFilter:"DWBM='" + id + "000000'"
    },
    datasetNames: ["ORCL_gt8:gajg_fj_3201_pg"]
  });

  // 列出选中的区域。
  L.supermap
    .featureService("http://50.32.8.73:2333/iserver/services/data-gt8/rest/data")
    .getFeaturesBySQL(sqlParam, function(serviceResult) {
      var resultData = serviceResult.result.features;
      var resultList = resultData.features;
      for (var index = 0; index < resultList.length; index++) {
       var cc = L.latLngBounds(changeLonAndLat(resultList[index].geometry.coordinates)).getCenter();
       centers=[];
       centers.push(cc.lat);
       centers.push(cc.lng);
      }
callback(centers);

    });
}
//查询行政区划
export function getSearch(id,mc,num) {

  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_fj_3201_pg@ORCL_gt8",
      attributeFilter:"DWBM='" + id + "000000'"
    },
    datasetNames: ["ORCL_gt8:gajg_fj_3201_pg"]
  });
  // 列出选中的区域。
  L.supermap
    .featureService("http://50.32.8.73:2333/iserver/services/data-gt8/rest/data")
    .getFeaturesBySQL(sqlParam, function(serviceResult) {
      var resultData = serviceResult.result.features;
      var resultList = resultData.features;
      var layers = [];
      for (var index = 0; index < resultList.length; index++) {

        var resultLayer = L.polygon(changeLonAndLat(resultList[index].geometry.coordinates), {
          color: 'red',
          fillColor: 'red',
          fillOpacity: 0.2,
          className: 'pcs-layer',
        });
        layers.push(resultLayer);
       var cc = L.latLngBounds(changeLonAndLat(resultList[index].geometry.coordinates)).getCenter();
       centers=[];
       centers.push(cc.lat);
       centers.push(cc.lng);
      }
      layerGroup = L.layerGroup(layers);
      map.addLayer(layerGroup);
    });
      var searchResult = [
        { dm: id+"000000", mc: mc, num: num},
        ];
        queryZrqByServer(searchResult[0]);
}
//调用数据集获取坐标   分局
export function queryZrqByServer(data) {

  //数据集SQL查询服务参数
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_fj_3201_pg@ORCL_gt8",
      attributeFilter: "DWBM='" + data.dm + "'"
    },
    datasetNames: ["ORCL_gt8:gajg_fj_3201_pg"] //数据集名称
  });
  //向服务器发送请求，并对返回的结果进行处理
  L.supermap.featureService("http://50.32.8.73:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    //debugger;
    var features = serviceResult.result.features.features;
    for (var i = 0; i < features.length; i++) {
      var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
      //features[i].properties.DWDM;

      if(data.dm=="320112000000"){
       renderMarker([center.lat+0.05, center.lng-0.07], data);
    }else {
        renderMarker([center.lat, center.lng], data);
      }

    }
  });
}
export function renderMarker(point, data) {
  // 画圆
  var myIcon = L.divIcon({
    html: "<div style='line-height:48px;text-align:center;font-size:16px;'>" + data.num + "</div>",
    className: 'my-div-icon',
    iconSize: 60
  });
  var tempMarker = L.marker(point, {
    icon: myIcon,
    pcsdm: data.dm,
    pcsmc: data.mc,
    num: data.num
  });
  markerLayer.addLayer(tempMarker);
  markerLayer.on("mousemove", function(e) {
    e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "总人数：" + e.layer.options.num + "</div>").openPopup();
  });
  markerLayer.on("mouseout", function(e) {
    e.layer.closePopup();
  });

  // tempMarker.on('click', function(e) {
  //  //从库里得到派出所数据
  //    var  searchResult=window.vm.getpcs(data.dm,function(data){
  //      if(data!=undefined){
  //      for (var i = 0; i < data.length; i++) {
  //           renderPCS(data[i]);
  //      }
  //     }
  //    });
  // });

  map.on('zoomend', function(e) {
  var sz = e.target.getZoom();

  if (sz > 10) {

    markerLayer.clearLayers();
    layerGroup.clearLayers();
    // removepcs();
          var  searchResult=window.vm.getpcs(data.dm,function(data){

            if(data!=undefined){
             for (var i = 0; i < data.length; i++) {
                renderPCS(data[i]);
                }
              }
          });
    }
  });

}

//获取派出所
function renderPCS(data) {


  //数据集SQL查询服务参数
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_pcs_3201_pg@ORCL_gt8",
      attributeFilter: "DWBM='" + data.dm + "'"
    },
    datasetNames: ["ORCL_gt8:gajg_pcs_3201_pg"] //数据集名称
  });

  //向服务器发送请求，并对返回的结果进行处理
  L.supermap.featureService("http://50.32.8.73:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    //debugger;

    var features = serviceResult.result.features.features;
   var layers=[];
    for (var i = 0; i < features.length; i++) {
      var resultLayer = L.polygon(changeLonAndLat(features[i].geometry.coordinates), {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.2,
        className: 'pcs-layer',
      });
      layers.push(resultLayer);

      layerGrouppcs = L.layerGroup(layers);

      groupse.push(layerGrouppcs);
      map.addLayer(layerGrouppcs);
      var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
      renderMarkerpcs([center.lat, center.lng], data);

    }



  });
}
export function renderMarkerpcs(point, data) {
  //debugger;
  // 画圆
  var myIcon = L.divIcon({
    html: "<div style='line-height:40px;text-align:center;font-weight:bold'>" + data.count + "</div>",
    className: 'my-div-icon icon1',
    iconSize: 50
  });
  var tempMarker = L.marker(point, {
    icon: myIcon,
    pcsdm: data.dm,
    pcsmc: data.mc,
    num: data.count
  });
  markerLayer.addLayer(tempMarker);

  markerLayer.on("mousemove", function(e) {
    e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "总人数：" + e.layer.options.num + "</div>").openPopup();
  });
  markerLayer.on("mouseout", function(e) {
    e.layer.closePopup();
  });

  // tempMarker.on('click', function(e) {
  //
  //    var searchResult=window.vm.getbzhdz(data.dm,function(data){
  //      for (var i = 0; i < data.length; i++) {
  //           renderBzhid(data[i]);
  //      }
  //    });
  // });
  map.on('zoomend', function(e) {
      var sz = e.target.getZoom();
      console.log('sz',sz);
      if (sz > 11) {
        markerLayer.clearLayers();

        layerGroup.clearLayers();

        var searchResult=window.vm.getbzhdz(data.dm,function(data){

            for (var i = 0; i < data.length; i++) {
                 renderBzhid(data[i]);
            }
        });
      }
    });

}
//获取标准化地址
function renderBzhid(data) {
  markerLayer.clearLayers();
  layerGroup.clearLayers();
   var uurl="JWPTBH='"+data.dm+"'";

   if(type=="C")
   {
     var mm=data.dm.split("号");
     uurl="DZMC='"+mm[0]+"号'";
   }
   // console.log(uurl);
    mapSqlSearch(uurl, 0, 5, function(features) {
      if (features.length > 0) {

       for (var i = 0; i < features.length; i++) {

         var mc=features[i].properties.DZMC;
        renderMarkerbzh(features[i].geometry.coordinates.reverse(), data,mc);
        }
      }
      else {
        //alert("地图库中未录入该地址的坐标。");
      }
    });

}

function mapSqlSearch(attributeFilter, from, to, callback) {
  //向服务器发送请求，并对返回的结果进行处理
  var url = "http://50.32.8.73:2333/iserver/services/data-gt8/rest/data";
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
                          queryParameter: {
                              name: "dz_mlp@ORCL_gt8",
                              attributeFilter: attributeFilter
                          },
                          datasetNames: ["ORCL_gt8:dz_mlp"], //数据集名称
                          fromIndex:0,
                          toIndex:10
                      });
   L.supermap.featureService(url).getFeaturesBySQL(sqlParam, function (serviceResult) {
          var features = serviceResult.result.features.features;
    callback(features);
  });
}

export function renderMarkerbzh(point, data,mc) {

  //debugger;
  // 画圆
  var myIcon = L.divIcon({
    html: "<div style='line-height:40px;text-align:center;font-weight:bold'>" + data.count + "</div>",
    className: 'my-div-icon icon2',
    iconSize: 50
  });
  var tempMarker = L.marker(point, {
    icon: myIcon,
    pcsdm: data.dm,
    pcsmc: mc,
    num: data.count
  });
  markerLayer.addLayer(tempMarker);

  markerLayer.on("mousemove", function(e) {
    e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "总人数：" + e.layer.options.num + "</div>").openPopup();
  });
  markerLayer.on("mouseout", function(e) {
    e.layer.closePopup();
  });

  tempMarker.on('click', function(e) {

    window.vm.getRyxx(1,5,data.dm,mc,'');

  });
}


//处理geometry数据数组中经纬度 与 leaflet.js API中构建polygon(纬，经)矛盾
var changeLonAndLat = function(arr) {
  var arrresult = [];
  for (var k = 0; k < arr.length; k++) {
    var arr1 = [];
    for (var i = 0; i < arr[k].length; i++) {
      var arr2 = [];
      for (var j = 0; j < arr[k][i].length; j++) {
        var arr3 = [];
        var temp = arr[k][i][j][0];
        var t1 = arr[k][i][j][0];
        var t2 = arr[k][i][j][1];
        temp = t1;
        t1 = t2;
        t2 = temp;
        arr3.push(t1, t2);
        arr2.push(arr3);
      }
      arr1.push(arr2);
    }
    arrresult.push(arr1);
  }
  return arrresult;
}
