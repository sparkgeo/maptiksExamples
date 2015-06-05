/*var map = new ol.Map({
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
      }); */

      var source = new ol.source.Vector({
        //url: 'data/layers/7day-M2.5.json',
       // format: new ol.format.GeoJSON()
      });

      var draw = new ol.interaction.Draw({
        source: source,
        type: 'Point'
      });

      var map = new ol.Map({
        interactions: ol.interaction.defaults().extend([draw]),
        target: 'map',
        layers: [
          new ol.layer.Tile({
            title: "Global Imagery",
            source: new ol.source.OSM() //new ol.source.TileWMS({
            //   url: 'http://maps.opengeo.org/geowebcache/service/wms',
            //   params: {LAYERS: 'bluemarble', VERSION: '1.1.1'}
            // })
          }),
          new ol.layer.Vector({
            title: 'Earthquakes',
            source: source,
            style: new ol.style.Style({
              image: new ol.style.RegularShape({
                points:3,
                angle:5,
                radius: 30,
                fill: new ol.style.Fill({
                  color: '#00AAFF'
                }),
                stroke: new ol.style.Stroke({
                  color: '#FFFFFF'
                })
              })
            })
          })
        ],
        view: new ol.View({
          //projection: 'EPSG:4326',
          center: [0,0],
          zoom: 2,
          minZoom: 2,
          maxZoom:20
        })
      });