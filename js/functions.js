// function make clock
function showTime(id) {
  let date = new Date();
  //hora
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds + " " + amPm;
  document.getElementById(id).innerHTML = time;
}

// function make data
function showDate(id) {
  let date = new Date();
  //data
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  let now_date = day + "/" + month + "/" + year;
  document.getElementById(id).innerHTML = now_date;
}

// function make map
function showMap() {
  navigator.geolocation.getCurrentPosition(map);
  function map(position) {
    let latt = position.coords.latitude;
    let long = position.coords.longitude;
    var map = L.map("map_container").setView([latt, long], 10);
    L.tileLayer(
      "https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}",
      {
        // attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 0,
        maxZoom: 15,
        accessToken: "<your accessToken>",
      }
    ).addTo(map);
    // L.control.scale().addTo(map);
    L.marker([latt, long], { draggable: false }).addTo(map);
  }
}

// function portfolio page
function box() {
  let box = document.querySelector(".box_1");
  box.classList.add("grow_Width");
}

function box_mobile() {
  let box = document.querySelector(".box_1");
  box.classList.add("grow_Width");
}

function grow(id) {
  let box = document.getElementById(id);
  box.classList.toggle("scaled");
}

// function about page
async function boxes() {
  let box1 = document.querySelector(".box_1");
  let box2 = document.querySelector(".box_2");

  box1.classList.add("grow-height");
  await delay(800);
  box2.classList.add("grow-height2");
}

async function boxes_mobile() {
  let box1 = document.querySelector(".box_1");
  let box2 = document.querySelector(".box_2");

  box1.style.transform = "scale(1)";
  await delay(800);
  box2.style.transform = "scale(1)";
}
