
function getLocation(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position)=>initMap(position));
    }
    else    
        alert("O seu navegador não suporta geolocalização");
}

function initMap(position){
    let map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        },
        zoom: 15,
    });
}