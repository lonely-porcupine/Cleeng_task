window.simulationMode = false;
window.map_center = {lat: 52.4064, lng: 16.9252};
window.markers = [];
window.firstFromGPS = true;
window.addMarker = (function(feature) {
	var marker = new google.maps.Marker({
		position: feature.position,
		icon: icons[feature.type].icon,
		map: window.map
	});
});
window.initMap = (function() {
	window.map = new google.maps.Map(document.getElementById("map"), {
		zoom: 14,
		center: window.map_center
	});
	google.maps.event.addListener(window.map, "click", function (event) {
		var latitude = event.latLng.lat();
		var longitude = event.latLng.lng();
		if(window.simulationMode) {
			window.setCurrentUserLocation(latitude, longitude);
		}
	});
	window.getUserPositionFromGPS();
	window.onMapLoadedCallback();
});

window.getUserPositionFromGPS = (function() {
	navigator.geolocation.getCurrentPosition(function(location) {
	 	if(!window.simulationMode) {
			window.setCurrentUserLocation(location.coords.latitude, location.coords.longitude, window.firstFromGPS);
	 	}
	});
	setTimeout(function() { window.getUserPositionFromGPS() }, 1000);
});

window.setCurrentUserLocation = (function(lat, lng, moveMap) {
	if(typeof moveMap === "undefined") {
		moveMap = true;
	}
	window.map_center = {lat: lat, lng: lng};
	if(moveMap) {
		window.map.panTo(window.map_center);
		window.map.setZoom(16);
	}
	if(typeof window.positionMarker !== "undefined") {
		window.positionMarker.setMap(null);
	}	
	window.positionMarker = new google.maps.Marker({
		position: window.map_center,
		map: window.map
	});

	for(var i = 0; i < window.markers.length; i++) {
		if(getDistanceFromLatLon(lat, lng, window.markers[i].position.lat, window.markers[i].position.lng) <= 300) {
			if(typeof window.markers[i].in_radius === "undefined" || window.markers[i].in_radius == false) {
				switch(window.markers[i].type) {
					case 1:
						vex.dialog.alert("Construction works nearby!")
						break;
					case 2:
						vex.dialog.alert("High traffic nearby!");
						break;
					case 3:
						vex.dialog.alert("Transit accident nearby!");
						break;
				}
				window.markers[i].in_radius = true
			} else {
				window.markers[i].in_radius = false;
			}
		}
	}
	window.firstFromGPS = false;
});

window.onMapLoadedCallback = (function() {
	window.includeMarkerScript();
});

window.onMarkersLoadedCallback = (function(markers) {
	window.markers = markers;
	for(var i = 0; i < window.markers.length; i++) {
		window.addMarker(window.markers[i]);
	}
});

$(function() {
	$("#simulationToggle a").on('click', function() {
		if(window.simulationMode) {
			$("#simulationToggle a span").text("off");
			$("#simulationToggle").removeClass("active");
			window.simulationMode = false;
			vex.dialog.alert("User's location will be updated automatically using GPS coordinates");
		} else {
			$("#simulationToggle a span").text("ON");
			$("#simulationToggle").addClass("active");
			window.simulationMode = true;
			vex.dialog.alert("Select user's location by clicking on a map");
		}
	});
});

// credits: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function getDistanceFromLatLon(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c * 1000; // Distance in m
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
