var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.transform([-122.7508939,53.9143679], 'EPSG:4326', 'EPSG:3857')),
    name: 'Sparkgeo',
    population: 4000,
    rainfall: 500
});

var iconStyle = new ol.style.Style({
    image: new ol.style.Icon( {
        src: 'http://www.sparkgeo.com/static/img/spkMarker.png'
    })
});

iconFeature.setStyle(iconStyle);

var markerSource = new ol.source.Vector({
    features:[iconFeature]
});

var markerLayer = new ol.layer.Vector({
  source: markerSource
});


var map = new ol.Map({
  target: 'map',
  layers: [
      new ol.layer.Tile({
          source: new ol.source.OSM(),
          maptiks_id:'LAYER1' 
      }),
      new ol.layer.Tile({
            source: new ol.source.MapQuest({
                layer: 'osm'
            }),
            maptiks_id:'LAYER2'
        }),
      markerLayer
  ],
  maptiks_id:'MAPA',
  view: new ol.View({
      center: [0,0],
      zoom: 2
  })
});
      


