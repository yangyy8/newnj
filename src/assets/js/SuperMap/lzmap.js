var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
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
  L.supermap.wmtsLayer("http://50.32.8.73:2333/iserver/services/map-wmts-GADT/wmts-china", {
    layer: "GADT",
    style: "default",
    tilematrixSet: "ChinaPublicServices_GADT",
    format: "image/png",
    transparent: true
  }).addTo(map);
  markerLayer = L.featureGroup().addTo(map);

  esservice = new SuperMap.ElasticSearch("http://10.33.69.24:9200/");

  //var url = "http://50.32.8.73:8090/iserver/services/map-ugcv5-njcaihuimapsymbol/rest/maps/nj_caihui@mapsymbol";
  //加载图层
  //L.supermap.tiledMapLayer(url).addTo(map);
}
export function getSearh(centers){
  if (layerGroup != null)
    {layerGroup.clearLayers();}
    map.flyTo(centers,11);

  // 以下为查询ES，由于es_lz_lzxx被删除，暂时注释掉。
//   var parameters = new Array();
//   parameters.push({index: "es_lz_lzxx", type: "doc"});
//   var searchObject = {
//     "query": {
//       "bool": {
//         "must": [
// {
// "term": {
// "DJDWXZQH.keyword": "3201"
// }
// }
//         ]
//       }
//     },
//     "size": 0,
//     "aggs": {
//       "all_counts": {
//         "terms": {"field": "DZDTID.keyword"},
//       }
//     }
//   };
//
//   if (obj.zjzl != "" && obj.zjzl!=undefined) {
//      var rr=getTerm("ZJZL", obj.zjzl, true);
//      searchObject.query.bool.must.push(eval('('+rr+')'));
//   }
//   if (obj.qzzl != "" && obj.qzzl!=undefined) {
//      var rr=getTerm("QZZL", obj.qzzl, true);
//      searchObject.query.bool.must.push(eval('('+rr+')'));
//   }
//   if (obj.gjdq != "" && obj.gjdq!=undefined) {
//      var rr=getTerm("GJDQ", obj.gjdq, true);
//      searchObject.query.bool.must.push(eval('('+rr+')'));
//   }
//   if (obj.tlsy != "" && obj.tlsy!=undefined) {
//      var rr=getTerm("JLSY", obj.tlsy, true);
//      searchObject.query.bool.must.push(eval('('+rr+')'));
//   }
//   if (obj.beginTime != "" && obj.endTime != "" && obj.beginTime!=undefined && obj.endTime!=undefined) {
//      var pp=[];
//      pp.push(obj.beginTime);
//      pp.push(obj.endTime);
//      var rr=getTerm("ZSRQ", pp, true);
//      searchObject.query.bool.must.push(eval('('+rr+')'));
//   }
//   if(obj.bzhdz!="" && obj.bzhdz!=undefined)
//     {
//       var ss="{'wildcard': {'BZHDZMC.keyword':{'wildcard:''*" + obj.bzhdz + "*'}}}";
//       console.log('ss',ss);
//       searchObject.query.bool.must.push(eval('('+ss+')'));
//     }
// if(obj.zsbg!="" && obj.zsbg!=undefined)
//     {
//     var ss="{'wildcard': {'BZHDZMC.keyword':{'wildcard:''*" + obj.zsbg + "*'}}}";
//     searchObject.query.bool.must.push(eval('('+ss+')'));
//   }
//
//   parameters.push(searchObject);
//   console.log('parameters',searchObject);
//   esservice.msearch({body: parameters}, function(error, result) {
//     var buckets = result.responses[0].aggregations.all_counts.buckets;
//     var sum=0;var kk="";
//     for (var i = 0; i < buckets.length; i++) {
//       kk=buckets[i].key;
//       sum=buckets[i].doc_count;
//      queryZrqByServer(kk,sum);
//
//     }
//   });


markerLayer.clearLayers();
var  searchResult=window.lzvm.getBZHDZ(function(data){

  if(data.length>0){
  for (var i = 0; i < data.length; i++) {
       queryZrqByServer(data[i].dm,data[i].count);
    }
   }else {
     //alert("地图库中未录入该地址的坐标。");
  }
});
}
//调用数据集获取坐标
export function queryZrqByServer(dm,num) {
  markerLayer.clearLayers();

  //数据集SQL查询服务参数
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "dz_mlp@ORCL_gt8",
      attributeFilter: "DZMC='" + dm + "'"
    },
    datasetNames: ["ORCL_gt8:dz_mlp"] //数据集名称
  });
   var features =[];
  //向服务器发送请求，并对返回的结果进行处理
   L.supermap.featureService("http://50.32.8.73:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    //debugger;

     features = serviceResult.result.features.features;

    // for (var i = 0; i < features.length; i++) {
    //   var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
    //   //features[i].properties.DWDM;

      if (features.length > 0) {
				var x = features[0].properties.SMX;
				var y = features[0].properties.SMY;
          var pp=[];
          pp.push(y);
          pp.push(x);
         // var mc=features[0].properties.DZMC;
         // var dm=features[0].properties.JWPTBH;
			   	renderMarker(pp,num,dm,dm);
			}
			else {
        var ss=window.lzvm.getXY(dm,function(datae){
          if(datae!=undefined && datae.ycoord>0 && datae.xcoord>0){
           var das=[];
           das.push(datae.ycoord);
           das.push(datae.xcoord);
           //console.log(das,data);
           renderMarker(das, num,dm,dm);
         }
        });

				//alert("地图库中未录入该地址的坐标。");
		 	}
    // }
   });
}
export function renderMarker(point, num,dm,mc) {

      // 画圆
      var myIcon = L.divIcon({
          html: "<div style='line-height:38px;text-align:center;'>" + num + "</div>",
          className: 'my-div-icon lzgreen',
          iconSize:50
      });

      var tempMarker = L.marker(point, {
        icon: myIcon,
        pcsdm: dm,
        pcsmc: mc,
        num: num
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

    window.lzvm.getRyxx(1,5,dm,dm);

  });
  }



export function getTerm(key, value, istext) {
		if (istext) {
			key = key + ".keyword";
		}
		if (value instanceof Array) { //数组}

		 	return "{'terms':{'" + key + "':['" + value.join("','") + "']}}";
		}
		else {

        var rr="{'term': {'" + key + "': '" + value + "'}}"
        return rr;
		}
	}

  //处理geometry数据数组中经纬度 与 leaflet.js API中构建polygon(纬，经)矛盾
  var changeLonAndLat = function(arr){
      var arrresult = [];
      for(var k=0; k<arr.length; k++){
          var arr1 = [];
          for(var i=0; i<arr[k].length; i++){
              var arr2 = [];
              for(var j=0; j<arr[k][i].length; j++){
                  var arr3 = [];
                  var temp = arr[k][i][j][0];
                  var t1 = arr[k][i][j][0];
                  var t2 = arr[k][i][j][1];
                  temp = t1;
                  t1 = t2;
                  t2 = temp;
                  arr3.push(t1,t2);
                  arr2.push(arr3);
              }
              arr1.push(arr2);
          }
          arrresult.push(arr1);
      }
      return arrresult;
  }
