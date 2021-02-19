mapboxgl.accessToken =
  "pk.eyJ1IjoibmF0aGVua29yc3RlbiIsImEiOiJja2xiejA1NzYwYnF5MzJtMW5wbXc4dmJ5In0.ZHjBAAp_hF5ZCt7pG5vECw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setUpMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setUpMap(-2.24, 53.48);
}

function setUpMap(center) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
