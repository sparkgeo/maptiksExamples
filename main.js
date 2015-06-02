var map = new L.Map('mapLeafLet', {
 	   	center: [50, -100],
	   	zoom: 4,
 	   	// maptiks id (map)
 	   	maptiks_id: 'Leaflet'
 	   	});

var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   		 maxZoom: 19,
  		 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
