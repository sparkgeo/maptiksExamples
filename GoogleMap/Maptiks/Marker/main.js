
		function initialize() 
		{
			var mapDiv = document.getElementById("mapGoogle");

			var mapOptions = 
			{
				center: new google.maps.LatLng(7.0002, -2.0032),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROADMAP,

				//Maptiks options - MAP ID
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

			//General map customizing
			gMap.set('styles', [
			  {
			    featureType: 'road',
			    elementType: 'geometry',
			    stylers: [
			      { color: '#0A0700' },
			      { weight: 0.3 }
			    ]
			  }, {
			    featureType: 'road',
			    elementType: 'labels',
			    stylers: [
			      { saturation: 4 },
			      { invert_lightness: false }
			    ]
			  }, {
			    featureType: 'landscape',
			    elementType: 'geometry',
			    stylers: [
			      { hue: '#ffaa00' },
			      { gamm: 1 },
			      { saturation: 82 },
			      { lightness: 0 }
			    ]
			  }, {
			    featureType: 'poi.school',
			    elementType: 'geometry',
			    stylers: [
			      { hue: '#fff700' },
			      { lightness: -15 },
			      { saturation: 50 }
			    ]
			  }
			]);

			//Icons and markers
			var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

			var marker = new google.maps.Marker(
				{
	  				position: new google.maps.LatLng(7.0002, -2.0032),
	  				map: gMap,
	  				//Maptiks marker ID
	  				maptiks_id: 'School Marker',
	  				icon: iconBase + 'schools_maps.png'
				}
			);

		}

		//Wait until page loads to load the map
		google.maps.event.addDomListener(window, 'load', initialize);