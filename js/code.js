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
  footer.style.transform = "width(100%)";
};
