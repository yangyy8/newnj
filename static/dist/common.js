function ajaxSubmit(url, data, callback, completeCallback) {
    $.ajax({
        type: "POST",
        data: data,
        url: url,
        datatype: "json",
        traditional:true,
        timeout: 60000,
        beforeSend: function () {
            //var sload = "<div style='text-align:center; margin-top:20px'><img src='/Image/wait.gif' /><div>正在加载</div></div>";
            //$('#' + pid).html(sload);
        },
        success: function (re) {
            if (typeof callback == "function") {
                callback(re);
            }
        },
        error: function (e) {
            if (e.statusText == "timeout") {
                alert("网络超时，请重试。");
                return;
            }
            if (e.responseText != null && e.responseText.indexOf('非法请求，请重新登陆。') > 0) {
                alert("非法请求，请重新登陆。");
                return;
            }
        },
        complete: function () {
            if (typeof completeCallback == "function") {
                completeCallback();
            }
        }
    });
}

function getSubmit(url, callback, completeCallback) {
    $.ajax({
        type: "GET",
        url: url,
        datatype: "json",
        traditional:true,
        timeout: 60000,
        beforeSend: function () {
            //var sload = "<div style='text-align:center; margin-top:20px'><img src='/Image/wait.gif' /><div>正在加载</div></div>";
            //$('#' + pid).html(sload);
        },
        success: function (re) {
            if (typeof callback == "function") {
                callback(re);
            }
        },
        error: function (e) {
            if (e.statusText == "timeout") {
                alert("网络超时，请重试。");
                return;
            }
            if (e.responseText != null && e.responseText.indexOf('非法请求，请重新登陆。') > 0) {
                alert("非法请求，请重新登陆。");
                return;
            }
        },
        complete: function () {
            if (typeof completeCallback == "function") {
                completeCallback();
            }
        }
    });
}

function fillSelect(id, url, hasAll, callback) {
	$("#" + id + " option").remove();
	if (url == null || url == "") return;

    $.ajax({
        type: "GET",
        url: url,
        datatype: "json",
        traditional:true,
        timeout: 60000,
        success: function (re) {
			if (re.code == "200") {
				if (hasAll) {
					$("#" + id).append("<option value=''>全部</option>");
				}
				if (re.data != null && re.data.length == null) {
					for (var dm in re.data) {
						$("#" + id).append("<option value='" + dm + "'>" + re.data[dm] + "</option>");
					}
				}
				else {
					for (var i = 0; i < re.data.length; i++) {
						$("#" + id).append("<option value='" + re.data[i].dm + "'>" + re.data[i].mc + "</option>");
					}
				}

				if (typeof callback == "function") {
					callback(re);
				}
			}
        },
        error: function (e) {
            if (e.statusText == "timeout") {
                alert("网络超时，请重试。");
                return;
            }
            if (e.responseText != null && e.responseText.indexOf('非法请求，请重新登陆。') > 0) {
                alert("非法请求，请重新登陆。");
                return;
            }
        }
    });
}

function clearSelect(id, hasAll) {
	$("#" + id + " option").remove();
	if (hasAll) {
		$("#" + id).append("<option value=''>全部</option>");
	}
}
