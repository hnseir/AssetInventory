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
		$('#actionList').append('<li><a href="#"><h3>'+ Asset.Link1Name+'</h3>' +'<p>' + Asset.Link1URL + '</p></a></li>').find('a:last').click(function(){
		 	window.plugins.childBrowser.showWebPage(Asset.Link1URL)
			});
	}
	if (Asset.Link2Name) {
		$('#actionList').append('<li><a href="#"><h3>'+ Asset.Link2Name+'</h3>' +'<p>' + Asset.Link2URL + '</p></a></li>').find('a:last').click(function(){
		 	window.plugins.childBrowser.showWebPage(Asset.Link2URL)
			});
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
