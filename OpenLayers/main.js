var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'sat'})
          })
        ],
        view: new ol.View({
          center: ol.proj.transform([70.41, 2.82], 'EPSG:4326', 'EPSG:3857'),
          zoom: 3
        })
      });