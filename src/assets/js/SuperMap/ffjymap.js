var map;
var markerLayer;
var markerLayer1;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
var resultLayer;
var sdas=[];
var sdanum=0;
//地图加载
export function createMapL() {
  map = L.map('mainMap', {
    crs: L.CRS.EPSG4326,
    preferCanvas: true,
    center: [32.03613281, 118.78211975],
    maxZoom: 18,
    zoom: 10,
    maxZoom: 16,
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
  markerLayer1 = L.featureGroup().addTo(map);
  //esservice = new SuperMap.ElasticSearch("http://10.33.69.24:9200/");

  //var url = "http://10.33.66.183:8090/iserver/services/map-ugcv5-njcaihuimapsymbol/rest/maps/nj_caihui@mapsymbol";
  //加载图层
  //L.supermap.tiledMapLayer(url).addTo(map);
}


// 左边列表点击
export function createDWMap(id, mc) {

  //map.zoomTo(14);
  markerLayer.clearLayers();
  markerLayer1.clearLayers();
  //	mapSqlSearch("DH_PT学校", "ID='" + id + "'", 0, 5,0, function(features) {
  var see = window.ffvm.getxxinfo(id, function(data) {

    if (data.length > 0) {
      sdas=[];
      sdanum=data.length;
      for (var i = 0; i < data.length; i++) {
        var dzdm = data[i].DZXQ;

        // mapSqlSearch("dz_mlp", "DZMC='" + dzdm + "'", dzdm, 0, 5, function(features, dm) {
        //   if (features.length > 0) {
        //     var x = features[0].properties.SMX;
        //     var y = features[0].properties.SMY;
        //
        //     var tmmc = "<div style='line-height:25px;'>学校：" + mc + " <br/>地址：" + dm + "</div>";
        //     var tm = L.marker([y, x]).bindPopup(tmmc);
        //
        //     markerLayer1.addLayer(tm);
        //     // tm.openPopup();
        //     // map.flyTo(L.latLng(y, x), 12);
        //
        //     arr.push(y);
        //     arr.push(x);
        //
        //     //getXXDZInfo(id, arr, mc, dm);
        //     // getStudents(id, parseFloat(x), parseFloat(y));
        //   } else {

            var ss = window.ffvm.getXY(dzdm, function(datae) {

              var arr = [];
              if (datae != undefined && datae.ycoord > 0 && datae.xcoord > 0) {
                arr.push(datae.ycoord+'');
                arr.push(datae.xcoord+'');

                var tmmc = "<div style='line-height:25px;'>学校：" + mc + " <br/>地址：" + dzdm + "</div>";

                var tm = L.marker([arr[0], arr[1]]).bindPopup(tmmc);
                markerLayer1.addLayer(tm);

                getXXDZInfo(id, arr, mc, datae.src_addr);
              }
            });

        //   }
        // });
      }
    }
  });

}

function getXXDZInfo(id, arr, mc, dm) {
sdas.push(arr);
// console.log(sdas.length,sdas.length==sdanum);
if(sdas.length==sdanum){

  var relt = window.ffvm.getXXDZ(id, function(data) {
    for (var i = 0; i < data.length; i++) {
      //var num = data[i].count;
      // var id = data[i].dm;
      mapSqlSearch("dz_mlp", "DZMC='" + id + "'", data[i], 0, 5, function(features, data) {

        if (features.length > 0) {
          for (var j = 0; j < features.length; j++) {
            //  var mc=features[j].properties.DZMC;
            renderMarkerbzh(features[j].geometry.coordinates.reverse(), data.dm, data.dm, arr, data.count, mc);
          }
        } else {
          var ss = window.ffvm.getXY2(data, function(datae, ids, num) {

            if (datae != undefined && datae.ycoord > 0 && datae.xcoord > 0) {
              var das = [];
              das.push(datae.ycoord);
              das.push(datae.xcoord);

              renderMarkerbzh(das, ids, ids, sdas, num, mc);
            }

          });
        }
      });
    }
  });
}else {

}

}

export function renderMarkerbzh(point, dm, mc, sdas, num, xmc) {

  measureDistance(point[0], point[1], sdas, dm, mc, num, xmc);
  //debugger;
  // 画圆
  // var myIcon = L.divIcon({
  //   html: "<div style='line-height:40px;text-align:center;font-weight:bold'>" + data.count + "</div>",
  //   className: 'my-div-icon lz',
  //   iconSize: 50
  // });
  // var tempMarker = L.marker(point, {
  //   icon: myIcon,
  //   pcsdm: data.dm,
  //   pcsmc: mc,
  //   num: data.count
  // });
  // markerLayer.addLayer(tempMarker);
  //
  // markerLayer.on("mousemove", function(e) {
  //   e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "总人数：" + e.layer.options.num + "</div>").openPopup();
  // });
  // markerLayer.on("mouseout", function(e) {
  //   e.layer.closePopup();
  // });
  //
  // tempMarker.on('click', function(e) {
  //   // alert(e.target.options.pcsmc);
  //  //  requestTableData(e.target.options.pcsdm, 1);
  //  //从库里得到派出所数据
  //
  // //  window.vm.getRyxx(1,5,data.dm,mc,'');
  //
  // });
}

function measureDistance(x1, y1, sdas, dm, mc, num, xmc) {
 var gg=0; var ii=0;
for (var i = 0; i < sdas.length; i++) {
    var x2=sdas[i][0];
    var y2=sdas[i][1];
ii=i+1;
  var polyLine = L.polyline([
    [x1, y1],
    [x2, y2]
  ]);

  // var marker1 = L.marker([x1, y1]),
  //     marker2 = L.marker([x2, y2]);
  // var tmmc = "<div style='line-height:25px;'>学校：" + xmc +" <br/>地址：" + xdm + "</div>";
  // var tm = marker2.bindPopup(tmmc);
  // markerLayer.addLayer(tm);
  var distanceMeasureParam = new SuperMap.MeasureParameters(polyLine);
  L.supermap
    .measureService("http://10.33.66.183:2334/iserver/services/map-world/rest/maps/World")
    .measureDistance(distanceMeasureParam, function(serviceResult) {
      var gl = parseInt(serviceResult.result.distance / 1000);
      if (gl > window.ffvm.jlsz) {
        //markerLayer1.addLayer(polyLine);
        gg=gg+1;

        if(gg==sdas.length){
          // console.log(gg,sdas.length,gl);
          redergls([x1, y1], num, dm, xmc,mc,gl);
        }


        // markerLayer.addLayer(marker1);
        // marker1.bindPopup(content).openPopup(marker1.getLatLng());
        // marker1.on("mousemove", function(e) {
        //   marker1.bindPopup(content).openPopup(marker1.getLatLng());
        // });
        // marker1.on('click', function(e) {
        //   window.ffvm.getRyxx(1, 5, dm, mc, '');
        // });

      } else {
        return;
      }

    });
  }
}

function redergls(arr,num,dm,xmc,mc,gl) {

  var content = "<div style='line-height:25px;'>距离<font color=blue>" + xmc + "</font>： 大约 <font style='color:red;font-weight:bold;font-size:16px;'>" + gl + "</font>  公里<br/>" + mc + " <br/>总人数：" + num + "</div>";
  renderMarkercontent(arr, num, dm, content);
}

export function renderMarkercontent(point, num, dm, mc) {

  // 画圆
  var myIcon = L.divIcon({
    html: "<div style='line-height:38px;text-align:center;'>" + num + "</div>",
    className: 'my-div-icon cqred',
    iconSize: 50
  });

  var tempMarker = L.marker(point, {
    icon: myIcon,
    pcsdm: dm,
    pcsmc: mc,
    num: num
  });
  markerLayer.addLayer(tempMarker);

  markerLayer.on("mousemove", function(e) {
    e.layer.bindPopup("<div style=''>" + e.layer.options.pcsmc + "</div>").openPopup();
  });
  markerLayer.on("mouseout", function(e) {
    e.layer.closePopup();
  });
  tempMarker.on('click', function(e) {
    // alert(e.target.options.pcsmc);
    //  requestTableData(e.target.options.pcsdm, 1);
    //从库里得到派出所数据

    window.ffvm.getRyxx(1, 5, dm, dm);

  });
}

//dz_mlpxx_3201_pt	DH_PT学校
export function mapSqlSearch(tableName, attributeFilter, dm, from, to, callback) {
  //向服务器发送请求，并对返回的结果进行处理
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: tableName + "@ORCL_gt8",
      attributeFilter: attributeFilter
    },
    datasetNames: ["ORCL_gt8:" + tableName], //数据集名称
    fromIndex: 0,
    toIndex: 10
  });

  L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    var features = serviceResult.result.features.features;
    callback && callback(features, dm);
  });
}
