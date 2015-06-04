var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.MapQuest({layer: 'osm'}),
                maptiks_id:'LAYER'
            }),
        ],
        maptiks_id:'MAPA',
        view: new ol.View({
            center: [0,0],
            zoom: 3
        })
      });