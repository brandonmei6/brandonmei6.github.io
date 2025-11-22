function initMap() {
    alert("Google Maps API loaded successfully!");

    var ele = document.getElementById('canvas');
    var myLocation = new google.maps.LatLng(37.7749, -122.4194);

    var mapOptions = {
        center: myLocation,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    };

    var myMap = new google.maps.Map(ele, mapOptions);

    var marker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
        title: "My Location"
    });
}