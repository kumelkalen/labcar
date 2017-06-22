function initMap(){
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat:  	-33.416667, lng:  -70.65}// Coordenadas de Recoleta
	});
	directionsDisplay.setMap(map);
}