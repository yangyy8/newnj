var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
var polygonLayer;
//地图加载
export function createMapL() {
  map = L.map('mainMap', {
    crs: L.CRS.EPSG4326,
    preferCanvas: true,
    center: [32.03613281, 118.78211975],
    maxZoom: 18,
    minZoom: 11,
    zoom: 15,
    zoomControl: true,
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
  var drawControl = new L.Control.Draw();
  map.addControl(drawControl);
  //var editableLayers = new L.FeatureGroup();

}
export function doSearch(className) {
  if (markerLayer != null) {
    markerLayer.clearLayers();
  }
  if (polygonLayer != null) {
    // polygonLayer.remove();
    map.removeLayer(polygonLayer);
  }
  // var options = {
  //   position: 'topleft',
  //   draw: {
  //     polyline: false,
  //     polygon: {},
  //     circle: {},
  //     rectangle: {},
  //     marker: false,
  //     remove: true,
  //     circlemarker: false
  //   }
  // };

  map.on(L.Draw.Event.CREATED, function(e) {
    if (polygonLayer != null) {
      // polygonLayer.remove();
      map.removeLayer(polygonLayer);
    }
    var arr = [];
    if (e.layerType == "circle") {
      var latLng = e.layer.getLatLng();
      var radius = e.layer.getRadius();
      var queryResult = L.supermap.plotting.query(map).getGObjectsInCircle(latLngs, radius);
    } else {
      var latLngs = e.layer.getLatLngs();
      var ps = latLngs[0];
      for (var i = 0; i < ps.length + 1; i++) {
        var arr1 = [];
        if (i == ps.length) {
          arr1.push(ps[0].lat);
          arr1.push(ps[0].lng);
        } else {
          arr1.push(ps[i].lat);
          arr1.push(ps[i].lng);
        }
        arr.push(arr1);
      }
    }
    polygonLayer = L.polygon(arr);
    polygonLayer.addTo(map);
    var geometryParam = new SuperMap.GetFeaturesByGeometryParameters({
      datasetNames: ['ORCL_gt8:dz_mlp'],//数据集集合中的数据集名称列表
      geometry: polygonLayer,//用于查询的稽核对象
      spatialQueryMode: 'INTERSECT',
      maxFeatures:300000,
      fromIndex: 0,
      toIndex: 300000
    });
    console.log(geometryParam)
    L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesByGeometry(geometryParam, function(serviceResult) {
      // console.log(serviceResult)
      var resultdata = serviceResult.result.features.features;
      // console.log('resultdata.length',resultdata.length);
      var markers = [];
      var ids = [];

      // var sdata=[
      //   {dm:'江苏南京市浦口区乌江镇林山村南埂组17号',count:320},
      // ];

    var data=[];
    var datapcs=[];

      for(var i = 0; i < resultdata.length; i++) {

        var id=resultdata[i].properties.DZMC.split('号');
        var pcsid=resultdata[i].properties.PCS;
        var zb=resultdata[i].geometry.coordinates.reverse();

    var das=new Object();

    das.dm=id[0]+"号";
    das.zb=zb;
    data.push(das);
    // console.log(pcsid);
    // console.log(datapcs.indexOf(pcsid));
        if(datapcs.indexOf(pcsid)==-1){
          datapcs.push(pcsid);
        }

    }
       // console.log('-----',data);
      var searchResult=window.zdvm.getbzhdz(data,datapcs,function(sdata){
        // console.log(sdata);
       for (var j = 0; j < sdata.length; j++) {
         var dm=sdata[j].dm.split('号')[0]+'号';
          renderMarkerbzh(sdata[j].zb,dm,sdata[j].count,dm);
       }
      });


     // if(ids.length==0){
     //   alert("该选中区域没有人员!");
     //   return;
     // }


      // 获取所有的范围的点。输出到页面
      // 代码写在这，从ES中获取数据的标准化地址ID，然后筛选。
      //for (var i = 0; i < ids.length; i++) {
        // markers.push({SMY:resultdata[i].properties.SMY, SMY:resultdata[i].properties.SMX, DZID:resultdata[i].properties.JWPTBH, DZMC:resultdata[i].properties.DZMC});
        // ids.push(resultdata[i].properties.JWPTBH);
        // console.log('ids',ids);
        // var tm = L.marker([resultdata[i].properties.SMY, resultdata[i].properties.SMX]).bindPopup(resultdata[i].properties.DZMC);
        // markerLayer.addLayer(tm);
      //}

    });

  })

		//删除
		// if (markerLayer != null) {
		// 	markerLayer.clearLayers();
		// }


		$("." + className)[0].click(function(){
      if (polygonLayer != null) {
      	map.removeLayer(polygonLayer);
      }
    });
	}

  export function renderMarkerbzh(point, dm,num,mc) {

    //debugger;
    // 画圆
    var myIcon = L.divIcon({
      html: "<div style='line-height:40px;text-align:center;font-weight:bold'>" + num + "</div>",
      className: 'my-div-icon lz',
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
      e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "总人数：" + e.layer.options.num + "</div>").openPopup();
    });
    markerLayer.on("mouseout", function(e) {
      e.layer.closePopup();
    });

    tempMarker.on('click', function(e) {
      window.zdvm.getRyxx(1,5,dm,mc,'');

    });
  }
