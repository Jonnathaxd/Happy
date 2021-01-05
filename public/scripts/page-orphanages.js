// cria mapa
const map = L.map("mapid").setView([-9.6490982,-35.7128279], 16);


// cria localização pela longetude e latitude
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//criando icone
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170,2]
})

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent("Lar das meninas <a href='orphanage.html?id=1' class='choose-orphanage'> <img src='./public/images/arrow-white.svg'></a>")

// cria e adiciona o icone
L.marker([-9.6490982,-35.7128279], { icon })
  .addTo(map)
  .bindPopup(popup)

