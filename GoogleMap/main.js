
		function initialize() 
		{
			var mapDiv = document.getElementById("mapGoogle");

			var mapOptions = 
			{
				center: new google.maps.LatLng(7.0002, -2.0032),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROADMAP

			}

			var gMap = new google.maps.Map(mapDiv, mapOptions);

			gMap.set('styles', [
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

			var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

			var marker = new google.maps.Marker({
  			position: new google.maps.LatLng(7.0002, -2.0032),
  			map: gMap,
  			icon: iconBase + 'schools_maps.png'
			});


		}


		google.maps.event.addDomListener(window, 'load', initialize);