var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.transform([-122.7508939,53.9143679], 'EPSG:4326', 'EPSG:3857')),
    name: 'Sparkgeo',
    population: 4000,
    rainfall: 500
});

var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
        src: './spkMarker.png'
    })
});

iconFeature.setStyle(iconStyle);

var markerSource = new ol.source.Vector({
    features:[iconFeature]
});

var markerLayer = new ol.layer.Vector({
  source: markerSource,
  maptiks_id:'Sparkgeo Marker'
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
            maptiks_id:'Layer 1'
        }),
        markerLayer
    ],
    maptiks_id:'OpenLayersTest',
    view: new ol.View({
        center: [1,0],
        zoom: 1
    })
});


