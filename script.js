////// product carousel //////
$('#productCarousel').carousel({
    interval: 5000
});

$('ol.carousel-indicators  li').on("click", function () {
    $('ol.carousel-indicators li.active').removeClass("active");
    $(this).addClass("active");
});

////// map //////
var mapDiv = $(".map-canvas");

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
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    alert("An error has occured. Please reload the page to display the map.");
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};

////// yelp api - reviews //////
// const testimonials = $(".testimonials");

// const myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer OOk7s2z-Ah8wHSafHFhYrWbPCakH5cOky-ww8r0KAx1wzIB7I0of71jaREePPfNCqUJUHbp3UKkRaXYolHu0zgyAeBXi05NUvA7wFuC9ubWWrY283sIy0OoSTHJEXnYx");

// const requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/maxs-vape-shop-tacoma/reviews", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error))
//   .then(testimonials.append("<div class=\"row\">"))
//   .then(function (response) {
//       console.log(result);
//   for (const i=0; i<result.reviews; i++) {
//     const col = $("<div>");
//     const body = $("<p>");
//     body.text(result.reviews[i].text);
//     col.append(body.html());
//     testimonials.html(col.html());
//   }
// });

var settings = {
    "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/maxs-vape-shop-tacoma/reviews",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Authorization": "Bearer OOk7s2z-Ah8wHSafHFhYrWbPCakH5cOky-ww8r0KAx1wzIB7I0of71jaREePPfNCqUJUHbp3UKkRaXYolHu0zgyAeBXi05NUvA7wFuC9ubWWrY283sIy0OoSTHJEXnYx"
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
