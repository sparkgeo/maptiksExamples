//maptiks.trackcode='e1ea1acb-e139-48eb-b105-4af2c373ba13';
//maptiks.debug=true;


//var marker = new ol.


var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'osm'}),
            maptiks_id:'LAYER'
          })
        ],
        maptiks_id:'MAPA',
        view: new ol.View({
          center: ol.proj.transform([70.41, 2.82], 'EPSG:4326', 'EPSG:3857'),
          zoom: 3
        })
      });