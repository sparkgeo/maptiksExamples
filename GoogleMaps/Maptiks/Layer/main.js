
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


		}

		//Wait until page loads to call function to load the map
		google.maps.event.addDomListener(window, 'load', initialize);