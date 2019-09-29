function page(var baseUrl) {
		
	
}

function createPage(curPage, total) {
	var COUNT = 8;
	var pageHtml = "";
	var start = (curPage % COUNT == 0) ? (parseInt(curPage / COUNT - 1) * COUNT + 1) : (parseInt(curPage / COUNT) * COUNT + 1);
	if (curPage > 1) {
		pageHtml += "<span onclick='getOrgData(" + (start - COUNT) + ")'>&lt;</span>";
	}
	for (var i = 0; i < COUNT; i++) {
		var np = start + i;
		if (np < total + 1) {
			if (np == curPage) {
				pageHtml += "<span style='background-color: #3992d0'>" + np + "</span>";
			}
			else {
				pageHtml += "<span onclick='getOrgData(" + np + ")'>" + np + "</span>";
			}
		}
	}
	
	if (start + COUNT < total + 1) {
		pageHtml += "<span onclick='getOrgData(" + (start + COUNT) + ")'>&gt;</span>";
	}
	
	$("#pagepanel").html(pageHtml);
}