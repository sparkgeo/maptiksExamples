(function (ol) {
    'use strict';
    // Marker settings
    var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.transform([-122.7508939, 53.9143679], 'EPSG:4326', 'EPSG:3857')
        ),
        name: 'Sparkgeo',
        population: 4000,
        rainfall: 500
    });

    // Marker style
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({src: './spkMarker.png'})
    });

    iconFeature.setStyle(iconStyle);

    // Marker source
    var markerSource = new ol.source.Vector({
        features: [iconFeature]
    });

    // Marker Layer
    var markerLayer = new ol.layer.Vector({
        source: markerSource,
        maptiks_id: 'Sparkgeo Marker' // Maptiks Marker ID
    });

    // Map object
    var map = new ol.Map({
        target: 'map', // HTML target tag
        layers: [
            // Layer 1 Object
            new ol.layer.Tile({
                source: new ol.source.OSM(),
                maptiks_id: 'Layer 1' // Maptiks Layer ID
            }),
            // Layer 2 Object
            new ol.layer.Tile({
                source: new ol.source.MapQuest({layer: 'osm'}),
                maptiks_id: 'Layer 2' // Maptiks Layer ID
            }),
            // Marker Layer Object
            markerLayer
        ],
        maptiks_id: 'OpenLayersTest', // Maptiks Map ID
        view: new ol.View({
            center: [0, 0],
            zoom: 1
        })
    });
}(window.ol));