import { url } from '../js/metadata.js'

const nameInput = document.getElementById("name");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

// CREATE
addBtn.onclick = function () {
  const name = nameInput.value;

  fetch(`${url}.json`, {
    method: "POST",
    body: JSON.stringify({ name })
  }).then(() => {
    nameInput.value = "";
    loadData();
  });
};

// READ
function loadData() {
  fetch(`${url}.json`)
    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      for (let key in data) {
        list.innerHTML += `<li>${data[key].name}</li>`;
      }
    });
}

loadData();
