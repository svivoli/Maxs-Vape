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

const reviewDivs = [$(".review0"), $(".review1"), $(".review2")]

$.ajax(settings).done(function (response) {
    console.log(response);
}).then(function (response) {
    for (i = 0; i < 3; i++) {
        const quote1 = $("<i>").addClass("fas fa-quote-left");
        quote1.attr("style", "color: lightgrey;");
        const quote2 = $("<i>").addClass("fas fa-quote-right");
        quote2.attr("style", "color: lightgrey;");
        const review = $("<div>");
        const body = response.reviews[i].text;
        review.append(quote1, " ", body, " ", quote2, "</br>", "<br>");
        reviewDivs[i].prepend(review.html());

        const ratings = {
            review0 : response.reviews[0].rating,
            review1 : response.reviews[1].rating,
            review2 : response.reviews[2].rating
        };
        const starTotal = 5;

        for (const rating in ratings) {
            const starPercentage = (ratings[rating] / starTotal) * 100;
            const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
            document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
        }
    }
});

//// product carousel //////
$('#productCarousel').carousel({
    interval: 5000
});

$('ol.carousel-indicators  li').on("click", function () {
    $('ol.carousel-indicators li.active').removeClass("active");
    $(this).addClass("active");
});