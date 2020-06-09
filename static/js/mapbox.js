// trying to make the map

let test_dataOne;

function globalMap() {
  fetch(`https://www.trackcorona.live/api/countries`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      test_dataOne = data["data"];
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZGViYXNoaXMtZ3VwdGEiLCJhIjoiY2tha254b2tqMDQ5cTJwcGltc3d2dmVvNSJ9.rdvvv0pG78NU5zKMd3jgfg";
      var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom:2,
      });

      test_dataOne.forEach((element) => {
        // console.log(element["location"]);

        mapboxClient.geocoding
          .forwardGeocode({
            query: `${element["location"]}`,
            autocomplete: false,
            limit: 1,
          })
          .send()
          .then(function (response) {
            var feature = response.body.features[0];

            new mapboxgl.Marker()
              .setLngLat(feature.center)
              .setPopup(
                new mapboxgl.Popup().setHTML(`
                <div>
                <h1 style="color:#f212bc;" >${element["location"]}</h1>
        <p style="color:#31bacd;">Confiremed : ${element["confirmed"]}</p>
        <p style="color:green;">Recoverd : ${element["recovered"]}</p>
        <p style="color:red;">Dead : ${element["dead"]}</p>
                </div>
                `)
              )
              .addTo(map);
          });
      }); //inner then
    }); //outer then
}


globalMap();

setInterval(() => {
    globalMap();
}, 120000);