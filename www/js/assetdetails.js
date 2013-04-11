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
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link1Name+'</h3>' +'<p>' + Asset.Link1URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
			var l1 = String(Asset.Link1URL)
		if ((l1.indexOf("doc") || l1.indexOf("xls") || l1.indexOf("rtf") || l1.indexOf("ppt") || l1.indexOf("pps") || l1.indexOf("pdf")) !=-1){
				window.plugins.childBrowser.showWebPage(encodeURI('http://docs.google.com/viewer?url=' + l1), { showNavigationBar: true, showLocationBar: true, showAddressBar: true })			 
			}
		 	else{
				window.plugins.childBrowser.showWebPage(l1, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			}
			});
	}
	if (Asset.Link2Name) {
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link2Name+'</h3>' +'<p>' + Asset.Link2URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
		 	window.plugins.childBrowser.showWebPage(Asset.Link2URL, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			});
	}
	if (Asset.Link3Name) {
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link3Name+'</h3>' +'<p>' + Asset.Link3URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
		 	window.plugins.childBrowser.showWebPage(Asset.Link3URL, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			});
	}
	if (Asset.Link4Name) {
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link4Name+'</h3>' +'<p>' + Asset.Link4URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
		 	window.plugins.childBrowser.showWebPage(Asset.Link4URL, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			});
	}
	if (Asset.Link5Name) {
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link5Name+'</h3>' +'<p>' + Asset.Link5URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
		 	window.plugins.childBrowser.showWebPage(Asset.Link5URL, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			});
	}
	if (Asset.Link6Name) {
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link6Name+'</h3>' +'<p>' + Asset.Link6URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
		 	window.plugins.childBrowser.showWebPage(Asset.Link6URL, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			});
	}
	if (Asset.Link7Name) {
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link7Name+'</h3>' +'<p>' + Asset.Link7URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
		 	window.plugins.childBrowser.showWebPage(Asset.Link7URL, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			});
	}
	if (Asset.Link8Name) {
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link8Name+'</h3>' +'<p>' + Asset.Link8URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
		 	window.plugins.childBrowser.showWebPage(Asset.Link8URL, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			});
	}
	if (Asset.Link9Name) {
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link9Name+'</h3>' +'<p>' + Asset.Link9URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
		 	window.plugins.childBrowser.showWebPage(Asset.Link9URL, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			});
	}
	if (Asset.Link10Name) {
		$('#actionList').append('<li><a href=""><h3>'+ Asset.Link10Name+'</h3>' +'<p>' + Asset.Link10URL + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
		 	window.plugins.childBrowser.showWebPage(Asset.Link10URL, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
			});
	}
	
	$('#actionList').listview('refresh');
	
}

function Addlink(linkname,linkurl){
	$('#actionList').append('<li><a href=""><h3>'+ linkname+'</h3>' +'<p>' + linkurl + '</p></a></li>').find('a:last').click(function(event){
			event.preventDefault()
			
		if ((linkurl.indexOf("doc") || linkurl.indexOf("xls") || linkurl.indexOf("rtf") || linkurl.indexOf("ppt") || linkurl.indexOf("pps") || linkurl.indexOf("pdf")) !=-1){
				window.plugins.childBrowser.showWebPage(encodeURI('http://docs.google.com/viewer?url=' + linkurl), { showNavigationBar: true, showLocationBar: true, showAddressBar: true })			 
			}
		 	else{
				window.plugins.childBrowser.showWebPage(linkurl, { showNavigationBar: true, showLocationBar: true, showAddressBar: true })
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
