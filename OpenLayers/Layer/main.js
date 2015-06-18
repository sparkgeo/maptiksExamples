// Map object
var map = new ol.Map({
    target: 'map', // HTML target tag
    layers: [
    	// Layer Object
        new ol.layer.Tile({
            source: new ol.source.MapQuest({
                layer: 'osm'
            }),
            maptiks_id:'Layer 2' // Maptiks Layer ID
        }),
    ],
    maptiks_id:'OpenLayersTest', // Maptiks Map ID
    view: new ol.View({
        center: [0,0],
        zoom: 1
    })
});