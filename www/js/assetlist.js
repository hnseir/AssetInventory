var serviceURL = "http://10.1.2.85/AssetInventory/services/";

var assets;

$(document).ajaxError(function(){
    alert('An error occured!');
});

//$(document).on('pageshow', '#AssetListPage', function(event) {
$('#AssetListPage').bind('pageinit', function(event) {
    getAssetList();
});

function getAssetList() {
    $.getJSON(serviceURL + 'getassetlist.php', function (data) {
		$('#assetList li').remove();
		assets = data.items;
		//console.log(assets[1]);
		//var hussam = assets[1]
		//for (var prop in hussam) {
				  //if (hussam.hasOwnProperty(prop)) { 
				  // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
				    //alert("prop: " + prop + " value: " + hussam[prop])
				  //}
				 //}
		$.each(assets, function (index, asset) {
			$('#assetList').append('<li><a href="assetdetails.html?id=' + asset.id + '">' +
					'<h4>' + asset.ElementType + ' (' + asset.ElementID + ') ' + '</h4>' +
					'<p>' + asset.ElementFamily + ', ' + asset.ProjectName + '</p>' + '</a></li>');
		});
		$('#assetList').listview('refresh');
	});
}