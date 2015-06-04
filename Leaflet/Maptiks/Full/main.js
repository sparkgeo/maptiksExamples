var map = new L.Map('mapLeafLet', {
 	   	center: [51.5, -0.09],
	   	zoom: 6,
 	   	// maptiks contents
 	   	maptiks_id: 'LeafletTEST',
      maptiks_debug: false
 	   	});

var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                           		 					maxZoom: 19,
                          		 					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                                        //maptiks identification
                                        maptiks_id: 'Tile Layer'
                        						    }).addTo(map);

//Extra tilelayer
var testTileLayer = L.tileLayer('http://www.craiglarman.com/wiki/images/2/2e/Free-icon.png', {
                      					 maxZoom:19,
                      					 opacity: 0.4,
                                 maptiks_id: 'Extra Tile Layer' //ID for the extra layer
                      					 }).addTo(map);

//Markers with maptiks identification
var marker = L.marker([51.5, -0.09], {maptiks_id: 'Marker1'}).addTo(map);

var marker2 = L.marker([52, 1], {maptiks_id: 'Marker2'}).addTo(map);

//var circle = L.circle([53, -1], 201320).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [55.503, -2.06],
    [53.51, -4.047],
    [57, -7]
    //Polygon with maptiks identification (doesn't work)
    //{maptiks_id: 'Polygon1'}
]).addTo(map);