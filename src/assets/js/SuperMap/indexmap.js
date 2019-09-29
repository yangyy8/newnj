var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
var type;
var centers=[32.03613281, 118.78211975];

//地图加载
export function createMapL(id,mc,num,t) {
type=t;

var ss=getcenter(id,function(centers){
  console.log(id,mc,centers);
  map = L.map('mainMap', {
    crs: L.CRS.EPSG4326,
    preferCanvas: true,
    center: centers,
    maxZoom: 18,
    minZoom: 8,
    zoom: 10,
    zoomControl: false,
    attributionControl: false,
    closePopupOnClick: false //点击地图不关闭popup框
  });
  L.supermap.wmtsLayer("http://10.33.66.183:2333/iserver/services/map-wmts-GADT/wmts-china", {
    layer: "GADT",
    style: "default",
    tilematrixSet: "ChinaPublicServices_GADT",
    format: "image/png",
    transparent: true
  }).addTo(map);
  markerLayer = L.featureGroup().addTo(map);
  getSearch(id,mc,num);
  // esservice = new SuperMap.ElasticSearch("http://10.33.69.24:9200/");
});

  //var url = "http://10.33.66.183:8090/iserver/services/map-ugcv5-njcaihuimapsymbol/rest/maps/nj_caihui@mapsymbol";
  //加载图层
  //L.supermap.tiledMapLayer(url).addTo(map);
}

function getcenter(id,callback) {
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "XZ_QU_A@ORCL_gt8",
      attributeFilter: "ADMINCODE='1CHN" + id + "'"
    },
    datasetNames: ["ORCL_gt8:XZ_QU_A"]
  });

  // 列出选中的区域。
  L.supermap
    .featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data")
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
  // console.log(id);
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_fj_3201_pg@ORCL_gt8",
      //attributeFilter: "ADMINCODE='1CHN" + id + "'"
      attributeFilter:"DWBM='" + id + "000000'"
    },
    datasetNames: ["ORCL_gt8:gajg_fj_3201_pg"]
  });

  // 列出选中的区域。
  L.supermap
    .featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data")
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




  //   var parameters = new Array();
  //   parameters.push({index: "es_lz_lzxx", type: "doc"});
  //   var searchObject = {
  //     "query": {
  //       "bool": {
  //         "must": [
  //           {
  //             "term": {
  //             "ZJZL.keyword": "16"
  //               }
  //           },
  // {
  // "term": {
  // "DJDWXZQH.keyword": "3201"
  // }
  // }
  //         ]//,
  //         //"filter": {
  //         //	"range" {
  //         //		"gte": '',
  //         //		"lte": '',
  //         //	}
  //         //}
  //       }
  //     },
  //     "size": 0,
  //     "aggs": {
  //       "all_counts": {
  //         "terms": {"field": "GJDQ.keyword"}
  //       }
  //     }
  //   };
  //   parameters.push(searchObject);
  //    //根据条件获取某区的临住总数
  //   esservice.msearch({body: parameters}, function(error, result) {
  //     var buckets = result.responses[0].aggregations.all_counts.buckets;
  //     console.log('========',buckets.length);
  //     var sum=0;
  //     for (var i = 0; i < buckets.length; i++) {
  //       //buckets[i].key;
  //       //buckets[i].doc_count
  //
  //       // var point = [32.03613281 + i / 100, 118.78211975];
  //       // renderMarker(point, 'cz');
  //       //
  //        sum=sum+buckets[i].doc_count;
  //     }
      //name
      var searchResult = [
        { dm: id+"000000", mc: mc, num: num},
        ];
        queryZrqByServer(searchResult[0]);
    // });

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
  L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    //debugger;

    var features = serviceResult.result.features.features;

    for (var i = 0; i < features.length; i++) {
      var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
      //features[i].properties.DWDM;
      console.log('data.dm',data.dm);
      if(data.dm=="320112000000"){
      renderMarker([center.lat+0.05, center.lng-0.07], data);
    }else {
        renderMarker([center.lat, center.lng], data);
      }

    }
  });
}
export function renderMarker(point, data) {

  //debugger;
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

  tempMarker.on('click', function(e) {
    // alert(e.target.options.pcsmc);
   //  requestTableData(e.target.options.pcsdm, 1);
   //从库里得到派出所数据
     var  searchResult=window.vm.getpcs(data.dm,function(data){

       if(data!=undefined){
       for (var i = 0; i < data.length; i++) {
            renderPCS(data[i]);
       }
      }
     });
  });
}

//获取派出所
function renderPCS(data) {

  markerLayer.clearLayers();

  //数据集SQL查询服务参数
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_pcs_3201_pg@ORCL_gt8",
      attributeFilter: "DWBM='" + data.dm + "'"
    },
    datasetNames: ["ORCL_gt8:gajg_pcs_3201_pg"] //数据集名称
  });

  //向服务器发送请求，并对返回的结果进行处理
  L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    //debugger;

    var features = serviceResult.result.features.features;

    for (var i = 0; i < features.length; i++) {
      var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
      //features[i].properties.DWDM;
      renderMarkerpcs([center.lat, center.lng], data);

    }
  });
}

export function renderMarkerpcs(point, data) {
 map.flyTo(point,11);
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

  tempMarker.on('click', function(e) {
    // alert(e.target.options.pcsmc);
   //  requestTableData(e.target.options.pcsdm, 1);
   //从库里得到派出所数据


     var searchResult=window.vm.getbzhdz(data.dm,function(data){
       for (var i = 0; i < data.length; i++) {
            renderBzhid(data[i]);
       }
     });


  });
}
//获取标准化地址
function renderBzhid(data) {
  markerLayer.clearLayers();
  //数据集SQL查询服务参数
  // var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
  //   queryParameter: {
  //     name: "dz_mlpxx_3201_pt@ORCL_gt8",
  //     attributeFilter: "JWPTBH='" + data.dm + "'"
  //   },
  //   datasetNames: ["ORCL_gt8:dz_mlpxx_3201_pt"], //数据集名称
  //   fromIndex:0,
  //   toIndex:10
  // });
  //
  // //向服务器发送请求，并对返回的结果进行处理
  // L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
  //   //debugger;
  //
  //   var features = serviceResult.result.features.features;
  //   console.log('features',serviceResult);
  //
  //   for (var i = 0; i < features.length; i++) {
  //    //var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
  //     //features[i].properties.DWDM;
  //      renderMarkerbzh(features[i].geometry.coordinates.reverse(), data);
  //   }
  //   if (features.length > 0) {
  //     var x = features[0].properties.SMX;
  //     var y = features[0].properties.SMY;
  //
  //     map.flyTo(new SuperMap.LonLat(x, y), 13);
  //   }
  //   else {
  //     alert("地图库中未录入该地址的坐标。");
  //   }
   var uurl="DZMC='"+data.dm+"'";
   if(type=="C")
   {
     // var mm=data.dm.split("号");
     uurl="DZMC='"+data.dm+"'";
   }

    mapSqlSearch(uurl, 0, 5, function(features) {
      if (features.length > 0) {
        // var x = features[0].properties.SMX;
        // var y = features[0].properties.SMY;
       for (var i = 0; i < features.length; i++) {
         // console.log(features[i]);
         var mc=features[i].properties.DZMC;
        renderMarkerbzh(features[i].geometry.coordinates.reverse(), data,mc);
        }
      }
      else {
        var ss=window.vm.getXY(data.dm,function(datae){

          if(datae!=undefined && datae.ycoord>0 && datae.xcoord>0){
           var das=[];
           das.push(datae.ycoord);
           das.push(datae.xcoord);
           //console.log(das,data);
           renderMarkerbzh(das, data,data.dm);
         }

        });
        //alert("地图库中未录入该地址的坐标。");
      }
    });

  // });
}

function mapSqlSearch(attributeFilter, from, to, callback) {
  //向服务器发送请求，并对返回的结果进行处理
  var url = "http://10.33.66.183:2333/iserver/services/data-gt8/rest/data";
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
// console.log('--==',point);
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
    // alert(e.target.options.pcsmc);
   //  requestTableData(e.target.options.pcsdm, 1);
   //从库里得到派出所数据

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
