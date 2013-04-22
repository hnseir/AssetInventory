//$('#detailsPage').bind('pageshow', function(event) {
$(document).on('pageshow', '#detailsPage', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getassetdetails.php?id='+id, displayAssetDetails);
});

function displayAssetDetails(data) {
	var Asset = data.item;
	console.log(Asset);
	$('#elementName').html( Asset.ElementCategory);
	$('#projectname').html('Project Name: ' + Asset.ProjectName);
	$('#levellayer').html('<b>Level:</b> ' + Asset.LevelLayer);
	$('#elementcategory').html('<b>Category:</b> ' + Asset.ElementCategory);
	$('#elementfamily').html('<b>Family:</b> ' + Asset.ElementFamily);
	$('#elementtype').html('<b>Type:</b> ' + Asset.ElementType);
	$('#elementid').html('<b>Element ID:</b> ' + Asset.ElementID);
	
	

	if (Asset.Link1Name) {
		Addlink(Asset.Link1Name,Asset.Link1URL);
	}
	if (Asset.Link2Name) {
		Addlink(Asset.Link2Name,Asset.Link2URL);
	}
	if (Asset.Link3Name) {
		Addlink(Asset.Link3Name,Asset.Link3URL);
	}
	if (Asset.Link4Name) {
		Addlink(Asset.Link4Name,Asset.Link4URL);
	}
	if (Asset.Link5Name) {
		Addlink(Asset.Link5Name,Asset.Link5URL);
	}
	if (Asset.Link6Name) {
		Addlink(Asset.Link6Name,Asset.Link6URL);
	}
	if (Asset.Link7Name) {
		Addlink(Asset.Link7Name,Asset.Link7URL);
	}
	if (Asset.Link8Name) {
		Addlink(Asset.Link8Name,Asset.Link8URL);
	}
	if (Asset.Link9Name) {
		Addlink(Asset.Link9Name,Asset.Link9URL);
	}
	if (Asset.Link10Name) {
		Addlink(Asset.Link10Name,Asset.Link10URL);
	}
	
	$('#actionList').listview('refresh');
	
}

function Addlink(linkname,linkurl){
	$('#actionList').append('<li><a href=""><h3>'+ linkname+'</h3>' +'<p>' + linkurl + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault();			
		if ((linkurl.indexOf("doc")!=-1 || linkurl.indexOf("xls")!=-1 || linkurl.indexOf("rtf")!=-1 ||
		 linkurl.indexOf("ppt")!=-1 || linkurl.indexOf("pps")!=-1 || linkurl.indexOf("pdf")!=-1) ){
				window.plugins.childBrowser.showWebPage(encodeURI('http://docs.google.com/viewer?url=' + linkurl),
				 { showNavigationBar: true, showLocationBar: true, showAddress: true });			 
			}
			else if (linkurl.indexOf("@")!=-1){
				window.location.href = 'mailto:'+linkurl;
			}
		 	else{
				window.plugins.childBrowser.showWebPage(linkurl, { showNavigationBar: true, showLocationBar: true, showAddress: true });
			}
			});
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
