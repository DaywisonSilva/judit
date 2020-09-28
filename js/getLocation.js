let latitude = -33.8688;
let longitude = 151.2195;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}
else { x.innerHTML = "O seu navegador não suporta Geolocalização."; }

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude)
}