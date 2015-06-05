var map = new L.Map('mapLeafLet', {
 	   	center: [51.5, -0.09],
	   	zoom: 6,
 	   	// maptiks contents - MAP ID
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
var testTileLayer = L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
                      					 maxZoom:19,
                      					 opacity: 0.7,
                                 maptiks_id: 'Extra Tile Layer'
                      					 }).addTo(map);