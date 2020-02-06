var map, infoWindow;
function initMap() {
    var latlong = { lat: 47.255389, lng: -122.520929 };
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: latlong,
        zoom: 15
    });
    marker = new google.maps.Marker({
        position: latlong,
        map: map
      });
    infoWindow = new google.maps.InfoWindow;
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};