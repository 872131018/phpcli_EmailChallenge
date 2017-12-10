module.exports = function() {
    let address = 'Lakewood CO, 80214';

    window.map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 14,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    window.geocoder = new google.maps.Geocoder();
    window.geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            window.map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: window.map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
