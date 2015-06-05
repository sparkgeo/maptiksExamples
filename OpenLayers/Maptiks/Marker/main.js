var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point([0, 0]),
    name: 'Null Island',
    population: 4000,
    rainfall: 500
});

var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        //opacity: 0.75,
        src: 'http://www.sparkgeo.com/static/img/spkMarker.png'
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
        markerLayer
    ],
    maptiks_id:'MAPA',
    view: new ol.View({
        center: [0,0],
        zoom: 3
    })
});


