function myMap(){
    let cabinet = {lat: 44.452851, lng: 26.091139};
    let map = new google.maps.Map(document.getElementById("Maps"), {zoom: 18, center: cabinet});
    let marker = new google.maps.Marker({position: cabinet, map: map})
}