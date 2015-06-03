(function (ol) {
  'use strict';

  // map object
  var mapOpts = {
    target: 'map-canvas',
    view: new ol.View({
      center: ol.proj.transform([-100, 50], 'EPSG:4326', 'EPSG:3857'),
      zoom: 4
    }),
    // maptiks id (map)
    maptiks_id: 'OpenLayers 3 Map Example'
  };
  var map = new ol.Map(mapOpts);


  // xyz layer
  var xyzSource = new ol.source.XYZ({
    url: 'https://{s}.tiles.mapbox.com/v3/examples.map-i86nkdio/{z}/{x}/{y}.png',
    attributions: [new ol.Attribution({
      html: 'Map data &copy; ' +
        '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>'
    })]
  });
  var xyzTile = new ol.layer.Tile({
    type: 'base',
    source: xyzSource,
    title: 'XYZ Layer',
    // maptiks id (layer)
    maptiks_id: 'XYZ'
  });
  map.addLayer(xyzTile);


  // wms layer
  var wmsSource = new ol.source.TileWMS({
    url: 'http://demo.opengeo.org/geoserver/wms',
    params: {layers: 'ne:ne'}
  });
  var wmsTile = new ol.layer.Tile({
    source: wmsSource,
    title: 'WMS Layer',
    // maptiks id (layer)
    maptiks_id: 'WMS'
  });
  map.addLayer(wmsTile);


  // layer control (not used by maptiks)
  var layerSwitcher = new ol.control.LayerSwitcher()
  map.addControl(layerSwitcher);

})(window.ol);