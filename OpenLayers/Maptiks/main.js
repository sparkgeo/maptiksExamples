maptiks.trackcode='e1ea1acb-e139-48eb-b105-4af2c373ba13';
maptiks.debug=true;

var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'osm'})
          }),
          new ol.layer.Vector({
            title: 'Earthquakes',
            source: new ol.source.Vector() ,
            style: new ol.style.Style({
              image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                  color: '#0000FF'
                }),
                stroke: new ol.style.Stroke({
                  color: '#000000'
                })
              })
            })
          })
        ],
        view: new ol.View({
          center: ol.proj.transform([70.41, 2.82], 'EPSG:4326', 'EPSG:3857'),
          zoom: 3
        })
      });