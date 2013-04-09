var serviceURL = "http://10.1.2.85/AssetInventory/services/";

var assets;

$('#AssetListPage').bind('pageinit', function(event) {
    getAssetList();
});

function getAssetList() {
    $.getJSON(serviceURL + 'getassetlist.php', function (data) {
		$('#assetList li').remove();
		assets = data.items;
		$.each(assets, function (index, asset) {
			$('#assetList').append('<li><a href="assetdetails.html?id=' + asset.id + '">' +
					'<h4>' + asset.ElementType + ' (' + asset.ElementID + ') ' + '</h4>' +
					'<p>' + asset.ElementFamily + ', ' + asset.ProjectName + '</p>' + '</a></li>');
		});
		$('#assetList').listview('refresh');
	});
}