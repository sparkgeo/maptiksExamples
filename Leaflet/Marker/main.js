var map = new L.Map(
	'mapLeafLet', // HTML target tag id
	{
 	   	center: [51.5, -0.09],
	   	zoom: 5,
 	   	// Maptiks options
 	   	maptiks_id: 'LeafletTEST', // Maptiks Map ID
      	maptiks_debug: false // Stops recording map statistics and outputs it to console.log
 	}
);

var OpenStreetMap_Mapnik = L.tileLayer(
	'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
	{
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		maptiks_id: 'Tile Layer' // Maptiks Layer ID
	}
).addTo(map);

//Markers with maptiks identifier
var marker = L.marker(
	[51.5, -0.09], 
	{maptiks_id: 'Marker1'} // Maptiks Marker ID
).addTo(map);

var marker2 = L.marker(
	[52, 1], 
	{maptiks_id: 'Marker2'} // Maptiks Marker ID
).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [55.503, -2.06],
    [53.51, -4.047],
    [57, -7]
]).addTo(map);