$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getassetdetails.php?id='+id, displayAssetDetails);
});

function displayAssetDetails(data) {
	var Asset = data.item;
	console.log(Asset);
	$('#projectname').html('Project Name: ' + Asset.ProjectName);
	$('#levellayer').html('<b>Level:</b> ' + Asset.LevelLayer);
	$('#elementcategory').html('<b>Category:</b> ' + Asset.ElementCategory);
	$('#elementfamily').html('<b>Family:</b> ' + Asset.ElementFamily);
	$('#elementtype').html('<b>Type:</b> ' + Asset.ElementType);
	$('#elementid').html('<b>Element ID:</b> ' + Asset.ElementID);
	
	if (Asset.Link1Name) {
		$('#actionList').append('<li><a href="' + Asset.Link1URL + '" target="_blank"><h3>'+Asset.Link1Name+'</h3>' +
				'<p>' + Asset.Link1URL + '</p></a></li>');
	}
	if (Asset.Link2Name) {
		$('#actionList').append('<li><a href="' + Asset.Link2URL + '" target="_blank"><h3>'+Asset.Link2Name+'</h3>' +
				'<p>' + Asset.Link2URL + '</p></a></li>');
	}
	if (Asset.Link2Name) {
		$('#actionList').append('<li><a href="' + Asset.Link2URL + '" target="_blank"><h3>'+Asset.Link2Name+'</h3>' +
				'<p>' + Asset.Link2URL + '</p></a></li>');
	}
	if (Asset.Link3Name) {
		$('#actionList').append('<li><a href="' + Asset.Link3URL + '" target="_blank"><h3>'+Asset.Link3Name+'</h3>' +
				'<p>' + Asset.Link3URL + '</p></a></li>');
	}
	if (Asset.Link4Name) {
		$('#actionList').append('<li><a href="' + Asset.Link4URL + '" target="_blank"><h3>'+Asset.Link4Name+'</h3>' +
				'<p>' + Asset.Link4URL + '</p></a></li>');
	}
	if (Asset.Link5Name) {
		$('#actionList').append('<li><a href="' + Asset.Link5URL + '" target="_blank"><h3>'+Asset.Link5Name+'</h3>' +
				'<p>' + Asset.Link5URL + '</p></a></li>');
	}
	if (Asset.Link6Name) {
		$('#actionList').append('<li><a href="' + Asset.Link6URL + '" target="_blank"><h3>'+Asset.Link6Name+'</h3>' +
				'<p>' + Asset.Link6URL + '</p></a></li>');
	}
	if (Asset.Link7Name) {
		$('#actionList').append('<li><a href="' + Asset.Link7URL + '" target="_blank"><h3>'+Asset.Link7Name+'</h3>' +
				'<p>' + Asset.Link7URL + '</p></a></li>');
	}
	if (Asset.Link8Name) {
		$('#actionList').append('<li><a href="' + Asset.Link8URL + '" target="_blank"><h3>'+Asset.Link8Name+'</h3>' +
				'<p>' + Asset.Link8URL + '</p></a></li>');
	}
	if (Asset.Link9Name) {
		$('#actionList').append('<li><a href="' + Asset.Link9URL + '" target="_blank"><h3>'+Asset.Link9Name+'</h3>' +
				'<p>' + Asset.Link9URL + '</p></a></li>');
	}
	if (Asset.Link10Name) {
		$('#actionList').append('<li><a href="' + Asset.Link10URL + '" target="_blank"><h3>'+Asset.Link10Name+'</h3>' +
				'<p>' + Asset.Link10URL + '</p></a></li>');
	}
	
	if (Asset.Link1Name) {
		$('#actionList').append('<li><a href="#" onClick="'+ openlink(Asset.Link1URL)+'"><h3>'+ Asset.Link1Name+'</h3>' +
		 '<p>' + Asset.Link1URL + '</p></a></li>');
	}
	
	
	
	
	
	$('#actionList').listview('refresh');
	
}

function openlink(linkurl){
	window.plugins.childBrowser.showWebPage(linkurl)
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
