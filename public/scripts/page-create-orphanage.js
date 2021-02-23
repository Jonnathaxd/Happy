// cria mapa
const map = L.map("mapid").setView([-9.6490982, -35.7128279], 16);

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
});

let marker;

// criando e adicionando marcas

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // removendo icone
  marker && map.removeLayer(marker);

  // adicionando icones
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos

function addPhotoField() {
  const container = document.querySelector("#images");

  const fieldsContainer = document.querySelectorAll(".new-upload");

  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  input.value = "";

  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }
  span.parentNode.remove();
}

// selecionar sim ou não

function toggleSelect(e) {
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  const button = e.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}
