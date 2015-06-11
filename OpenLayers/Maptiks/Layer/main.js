var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.MapQuest({
                layer: 'osm'
            }),
            maptiks_id:'Layer 2'
        }),
    ],
    maptiks_id:'OpenLayersTest',
    view: new ol.View({
        center: [0,0],
        zoom: 1
    })
});