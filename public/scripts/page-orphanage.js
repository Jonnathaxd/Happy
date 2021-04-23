const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
const lat = + document.querySelector("span[data-lat]").dataset.lat;
const lng = + document.querySelector("span[data-lat]").dataset.lng;
console.log(lat, lng)
// cria mapa
const map = L.map("mapid", options).setView([lat, lng], 16);

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
  popupAnchor: [170, 2],
});

// cria e adiciona o icone
L.marker([lat, lng], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes ativas
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  //selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  // atualizar o container de imagem
  imageContainer.src = image.src;
  //adicionar a classse .active para o botão que foi clicado
  button.classList.add("active");
}
