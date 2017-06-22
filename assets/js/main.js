document.getElementById("partida").addEventListener("click",borrar);
document.getElementById("destino").addEventListener("click",borrar);
function borrar(){
	document.getElementById("partida").value="";
	document.getElementById("destino").value="";
}

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
}

	