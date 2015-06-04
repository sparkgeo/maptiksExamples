//maptiks.trackcode='e1ea1acb-e139-48eb-b105-4af2c373ba13';
//maptiks.debug=true;

var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point([0, 0]),
    name: 'Null Island',
    population: 4000,
    rainfall: 500
});

var iconStyle = new ol.style.Style({
    image: new ol.style.Icon( ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        //opacity: 0.75,
        src: 'spkMarker.png'
    }))
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
            // new ol.layer.Tile({
            //     source: new ol.source.MapQuest({layer: 'osm'}),
            //     maptiks_id:'LAYER'
            // }),
            markerLayer
        ],
        maptiks_id:'MAPA',
        view: new ol.View({
            center: [0,0],
            zoom: 3
        })
      });
      
/*

      var iconFeature = new ol.Feature({
  geometry: new ol.geom.Point([0, 0]),
  name: 'Null Island',
  population: 4000,
  rainfall: 500
});

var iconStyle = new ol.style.Style({
  image: new ol.style.Icon( ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 0.75,
    src: 'spkMarker.png'
  }))
});

iconFeature.setStyle(iconStyle);

var vectorSource = new ol.source.Vector({
  features: [iconFeature]
});

var vectorLayer = new ol.layer.Vector({
  source: vectorSource
});

var rasterLayer = new ol.layer.Tile({
  source: new ol.source.TileJSON({
    url: 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.jsonp',
    crossOrigin: ''
  })
});

var map = new ol.Map({
  layers: [rasterLayer, vectorLayer],
  target: document.getElementById('map'),
  view: new ol.View({
    center: [0, 0],
    zoom: 3
  })
});
*/

