window.onload = function () {
  setInterval(() => showDate("date"), 1000);
  setInterval(() => showTime("clock"), 1000);
  if (window.innerWidth <= 570) {
    //mobile
  } else {
    // desktop
    box();
    document.getElementById("project").innerHTML = "SELECT PROJECT"
  }
};
