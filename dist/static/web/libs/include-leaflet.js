(function () {
    var r = new RegExp("(^|(.*?\\/))(include-leaflet\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'), targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
        document.writeln(script);
    }

    function inputCSS(url) {
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");
        var excludes = (targetScript.getAttribute('exclude') || "").split(",");
        if (!inArray(excludes, 'jquery')) {
            inputScript("../static/dist/jquery-1.10.2.js");
        }
        if (!inArray(excludes, 'leaflet')) {
            inputCSS("../static/web/libs/leaflet/leaflet.css");
            inputScript("../static/web/libs/leaflet/leaflet.js");
        }
        if (!inArray(excludes, 'moment')) {
            inputScript("../static/web/libs/moment/moment.min.js");
            inputScript("../static/web/libs/moment/zh-cn.js");
        }
        if (!inArray(excludes, 'bootstrap')) {
            inputCSS("../static/web/libs/bootstrap/bootstrap.min.css");
            inputScript("../static/web/libs/bootstrap/bootstrap.min.js");
        }
        if (!inArray(excludes, 'bootstrap-datetimepicker')) {
            inputCSS("../static/web/libs/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css");
            inputScript("../static/web/libs/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js");
        }
        if (inArray(includes, 'mapv')) {
            inputScript("../static/web/libs/mapv/mapv.min.js");
        }
        if (inArray(includes, 'turf')) {
            inputScript("../static/web/libs/turf/turf.min.js");
        }
        if (inArray(includes, 'echarts')) {

            inputScript("../static/web/libs/echarts/echarts.min.js");
        }
        if (inArray(includes, 'd3')) {
            inputScript("../static/web/libs/d3/d3.min.js");
        }
        if (inArray(includes, 'd3-hexbin')) {
            inputScript("../static/web/libs/d3/d3-hexbin.v0.2.min.js");
        }
        if (inArray(includes, 'd3Layer')) {
            inputScript("../static/web/libs/leaflet/plugins/leaflet.d3Layer/leaflet-d3Layer.min.js");
        }
        if (inArray(includes, 'elasticsearch')) {
            inputScript("../static/web/libs/elasticsearch/elasticsearch.min.js");
        }
        if (!inArray(excludes, 'iclient9-leaflet')) {
            inputScript("../static/dist/iclient9-leaflet.min.js");
        }
        if (inArray(includes, 'iclient9-leaflet-css')) {
            inputCSS("../static/dist/iclient9-leaflet.min.css");
        }
        if (inArray(includes, 'leaflet.heat')) {
            inputScript("../static/web/libs/leaflet/plugins/leaflet.heat/leaflet-heat.js");
        }
        if (inArray(includes, 'osmbuildings')) {
            inputScript("../static/web/libs/osmbuildings/OSMBuildings-Leaflet.js");
        }
        if (inArray(includes, 'leaflet.markercluster')) {
            inputCSS("../static/web/libs/leaflet/plugins/leaflet.markercluster/MarkerCluster.Default.css");
            inputCSS("../static/web/libs/leaflet/plugins/leaflet.markercluster/MarkerCluster.css");
            inputScript("../static/web/libs/leaflet/plugins/leaflet.markercluster/leaflet.markercluster.js");
        }
        if (inArray(includes, 'leaflet-icon-pulse')) {
            inputCSS("../static/web/libs/leaflet/plugins/leaflet-icon-pulse/L.Icon.Pulse.css");
            inputScript("../static/web/libs/leaflet/plugins/leaflet-icon-pulse/L.Icon.Pulse.js");
        }
        if (inArray(includes, 'leaflet.draw')) {
            inputCSS("../static/web/libs/leaflet/plugins/leaflet.draw/leaflet.draw.css");
            inputScript("../static/web/libs/leaflet/plugins/leaflet.draw/leaflet.draw.js");
        }
        if (inArray(includes, 'leaflet.pm')) {
            inputCSS("../static/web/libs/leaflet/plugins/leaflet.pm/leaflet.pm.min.css");
            inputScript("../static/web/libs/leaflet/plugins/leaflet.pm/leaflet.pm.min.js");
        }
        if (inArray(includes, 'leaflet.miniMap')) {
            inputCSS("../static/web/libs/leaflet/plugins/leaflet-miniMap/dist/Control.MiniMap.min.css");
            inputScript("../static/web/libs/leaflet/plugins/leaflet-miniMap/dist/Control.MiniMap.min.js");
        }
        if (inArray(includes, 'leaflet.sidebyside')) {
            inputScript("../static/web/libs/leaflet/plugins/leaflet-side-by-side/leaflet-side-by-side.min.js");
        }
    }

    load();
    window.isLocal = true;
    window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8090" : 'http://' + document.location.host;
})();
