var map;
var marker;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.5842558, lng: 137.0665783},
		zoom: 17
	});
	marker = new google.maps.Marker({
		position: {lat: 50.5842558, lng: 137.0665783},
		map: map
	});
}