function initMap(){

	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    //Mostrar mapa
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat:  	-33.416667, lng:  -70.65}// Coordenadas de Recoleta
	});
	//Autocompletado
		directionsDisplay.setMap(map);
		var inicio = (document.getElementById('partida')); 
        var autocompletar = new google.maps.places.Autocomplete(inicio);
        autocompletar.bindTo('bounds', map);          
        var llegada = (document.getElementById('destino')); 
        var autocompletar = new google.maps.places.Autocomplete(llegada);
        autocompletar.bindTo('bounds', map);
    //Dibujar ruta 
   		document.getElementById("ruta").addEventListener("click", function(){
        calculateAndDisplayRoute(directionsService, directionsDisplay);
       });      
       function calculateAndDisplayRoute(directionsService, directionsDisplay) {//toma los datos de ambos input y los busca
       directionsService.route({
         origin: document.getElementById('partida').value,
         destination: document.getElementById('destino').value,
         travelMode: 'DRIVING'
       }, function(response, status) {
         if (status === 'OK') {
           directionsDisplay.setDirections(response);
         } else {
           window.alert('Directions request failed due to ' + status);
         }
       });
     }
}
