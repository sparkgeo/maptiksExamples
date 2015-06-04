
		function initialize() 
		{
			var mapDiv = document.getElementById("mapGoogle");

			var mapOptions = 
			{
				center: new google.maps.LatLng(7.0002, -2.0032),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROADMAP,

				//Maptiks options
				maptiks_id: 'GoogleMap Test',
				mapTypeControlOptions:
				{ 
					mapTypeIds:
					[
        				//  maptiks id (layer) are auto-assigned for these
        				google.maps.MapTypeId.ROADMAP,
        				google.maps.MapTypeId.TERRAIN,
        				google.maps.MapTypeId.HYBRID,
        				google.maps.MapTypeId.SATELLITE
      				]
      			}
			}

			//Method effectivelly building the map
			var gMap = new google.maps.Map(mapDiv, mapOptions);


			// xyz layer (maptiks example code)
    		var getXyzTileUrl = function (tile, zoom)
    		{
	     		var sub = ['a.', 'b.', 'c.'];
				var url = 'https://';
	      		url += sub[Math.floor(Math.random() * sub.length)];
	      		url += 'tiles.mapbox.com/v3/examples.map-i86nkdio/';
	      		url += zoom + '/' + tile.x + '/' + tile.y + '.png';

	      		return url;
    		};

		    var xyz = new google.maps.ImageMapType(
			    {
				    getTileUrl: getXyzTileUrl,
				    tileSize: new google.maps.Size(256, 256),
				    // maptiks_id (layer)
				    maptiks_id: 'XYZ'
			    }
		    );

    		gMap.overlayMapTypes.push(xyz);

			//General map customizing
			/*gMap.set('styles', [
			  {
			    featureType: 'road',
			    elementType: 'geometry',
			    stylers: [
			      { color: '#000000' },
			      { weight: 1.6 }
			    ]
			  }, {
			    featureType: 'road',
			    elementType: 'labels',
			    stylers: [
			      { saturation: -100 },
			      { invert_lightness: true }
			    ]
			  }, {
			    featureType: 'landscape',
			    elementType: 'geometry',
			    stylers: [
			      { hue: '#ffff00' },
			      { gamm: 1.4 },
			      { saturation: 82 },
			      { lightness: 0 }
			    ]
			  }, {
			    featureType: 'poi.school',
			    elementType: 'geometry',
			    stylers: [
			      { hue: '#fff700' },
			      { lightness: -15 },
			      { saturation: 99 }
			    ]
			  }
			]);

			//Icons and markers
			var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

			var marker = new google.maps.Marker(
				{
	  				position: new google.maps.LatLng(7.0002, -2.0032),
	  				map: gMap,
	  				icon: iconBase + 'schools_maps.png'
				}
			);*/

		}

		//Wait until page loads to call function to load the map
		google.maps.event.addDomListener(window, 'load', initialize);