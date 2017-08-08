window.map_center = {lat: 52.4064, lng: 16.9252};
window.addMarker = (function(feature) {
	var marker = new google.maps.Marker({
		position: feature.position,
		icon: icons[feature.type].icon,
		map: window.map
	});
});
function initMap() {
	window.map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: window.map_center
	});
	navigator.geolocation.getCurrentPosition(function(location) {
		window.map_center = {lat: location.coords.latitude, lng: location.coords.longitude};
		window.map.panTo(window.map_center);
		window.map.setZoom(15);
	});
	window.onMapLoadedCallback();
}

window.onMapLoadedCallback = (function() {
	window.includeMarkerScript();
});

window.onMarkersLoadedCallback = (function(markers) {
	for(var i = 0; i < markers.length; i++) {
		window.addMarker(markers[i]);
	}
});
