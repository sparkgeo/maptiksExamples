(function (L) {
    'use strict';
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

    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maptiks_id: 'Tile Layer' // Maptiks Layer ID
        }
    ).addTo(map);

    //Extra tilelayer
    L.tileLayer(
        'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        {
            maxZoom: 19,
            opacity: 0.7,
            maptiks_id: 'Extra Tile Layer' // Maptiks Extra Layer ID
        }
    ).addTo(map);

}(window.L));