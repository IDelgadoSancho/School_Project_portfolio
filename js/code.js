window.onload = async function () {
  // animation landing page
  let navItems = document.querySelectorAll(".nav ul li");
  let delay = 320; // 200ms de retardo entre cada elemento

  for (let i = 0; i < navItems.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    navItems[i].style.transform = "scale(1)";
  }
};

// cursor
let cursor = document.querySelector(".cursor-pointer");
let cursorOutline = document.querySelector(".cursor-outline");
let act = false;

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  cursorOutline.style.top = e.pageY + "px";
  cursorOutline.style.left = e.pageX + "px";
});

