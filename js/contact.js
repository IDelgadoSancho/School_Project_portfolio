window.onload = function () {
  document.getElementById("clock_container").onload = showTime();

  setInterval(showTime, 1000);
  showTime();
};
