window.onload = async function () {
  let navItems = document.querySelectorAll(".nav ul li");
  let landing = document.getElementById("landing_div");
  let footer = document.getElementById("footer");
  let delay = 320;

  for (let i = 0; i < navItems.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    navItems[i].style.transform = "scale(1)";
  }

  landing.style.transform = "scale(1)";
  setInterval(() => showDate("date"), 1000);
  setInterval(() => showTime("clock"), 1000);
  let since = document.getElementById("since2024");
  since.innerHTML = calcular2024();

  // conditional for mobile page
  if (window.innerWidth <= 570) {
    // mobile
    footer.style.transform = "translateX(0%)";
    document.getElementById("map_container").style.display = "none";
  } else {
    // desktop
    footer.style.transform = "translateX(10%)";
    showMap();
  }
};