window.onload = async function () {
  if (window.innerWidth <= 570) {
    //mobile
  } else {
    // desktop
    setInterval(() => showDate("date"), 1000);
    setInterval(() => showTime("clock"), 1000);
    boxes();
  }
};
