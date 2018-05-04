var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.5914764, lng: 137.0656908},
		zoom: 17
	});
}