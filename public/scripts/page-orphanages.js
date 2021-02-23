// cria mapa
const map = L.map("mapid").setView([-9.6490982,-35.7128279], 16);


// cria localização pela longetude e latitude
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//criando icone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170,2]
})

function addMarker({id, name, lat, lng}){
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
  }).setContent(`${name} <a href='/orphanage?id=${id}'> <img src='/images/arrow-white.svg'></a>`)
  
  // cria e adiciona o icone
  L.marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span=>{
  console.log(span)
  const orphanage = {
    id:span.dataset.id,
    name: span.dataset.name,
    lng: span.dataset.lng,
    lat: span.dataset.lat,
  }
  addMarker(orphanage)
})

