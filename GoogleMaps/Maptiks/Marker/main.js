function initialize() {
    'use strict';
    var mapDiv = document.getElementById("mapGoogle"); // HTML target tag

    var mapOptions = {
        center: new google.maps.LatLng(59.0032, -120.0002),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Maptiks options
        maptiks_id: 'GoogleMap Test', // Maptiks Map ID
        mapTypeControlOptions: {
            mapTypeIds: [
                // Maptiks id (layer) are auto-assigned for these
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.TERRAIN,
                google.maps.MapTypeId.HYBRID,
                google.maps.MapTypeId.SATELLITE
            ]
        }
    };
    // Method effectivelly building the map
    var gMap = new google.maps.Map(mapDiv, mapOptions);

    // Icons and markers
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(7.0002, -2.0032),
        map: gMap,
        // Maptiks Marker ID
        maptiks_id: 'School Marker',
        icon: iconBase + 'schools_maps.png'
    });
}
// Wait until page loads to load the map
google.maps.event.addDomListener(window, 'load', initialize);