window.onload = async function () {
  let navItems = document.querySelectorAll(".nav ul li");
  let landing = document.getElementById("landing_div");
  let footer = document.getElementById("footer");
  let delay = 320; // 200ms de retardo entre cada elemento

  for (let i = 0; i < navItems.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    navItems[i].style.transform = "scale(1)";
  }

  landing.style.transform = "scale(1)";

  if (window.innerWidth <= 570) {
    footer.style.transform = "translateX(0%)";
    document.getElementById("map_container").style.display = "none";
  } else {
    footer.style.transform = "translateX(10%)";
  }
  document.getElementById("data_div").onload = showTime();
  document.getElementById("clock_div").onload = showTime();

  setInterval(showTime, 1000);
  showTime();
  showMap();
};

function showTime() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let hora = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    hora = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let data = `${day}/${month}/${year}`;
  let time = `${h}:${m}:${s} ${hora}`;

  document.getElementById("data_div").innerText = data;
  document.getElementById("clock_div").innerText = time;
  setTimeout(showTime, 1000);
}

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
