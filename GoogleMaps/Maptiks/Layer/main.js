function initialize() {
    'use strict';
    var mapDiv = document.getElementById("mapGoogle"); // HTML target tag

    var mapOptions = {
        center: new google.maps.LatLng(59.0032, -120.0002),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Maptiks options
        maptiks_id: 'GoogleMap Test', // Maptiks Map ID
        mapTypeControlOptions: {
            mapTypeIds: [
                // Maptiks id (layer) are auto-assigned for these
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.TERRAIN,
                google.maps.MapTypeId.HYBRID,
                google.maps.MapTypeId.SATELLITE
            ]
        }
    };
    // Method effectivelly building the map
    var gMap = new google.maps.Map(mapDiv, mapOptions);

    // xyz layer (maptiks example code)
    var getXyzTileUrl = function (tile, zoom) {
        var sub = ['a.', 'b.', 'c.'];
        var url = 'https://';
        url += sub[Math.floor(Math.random() * sub.length)];
        url += 'tiles.mapbox.com/v3/examples.map-i86nkdio/';
        url += zoom + '/' + tile.x + '/' + tile.y + '.png';
        return url;
    };

    var xyz = new google.maps.ImageMapType({
        getTileUrl: getXyzTileUrl,
        tileSize: new google.maps.Size(256, 256),
        // Maptiks Options
        maptiks_id: 'XYZ' // Maptiks Layer ID
    });

    gMap.overlayMapTypes.push(xyz);
}
// Wait until page loads to load the map
google.maps.event.addDomListener(window, 'load', initialize);