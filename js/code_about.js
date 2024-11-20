window.onload = async function () {
  let home = document.getElementById("button_home");
  if (window.innerWidth <= 570) {
    //mobile
    boxes_mobile();
  }else{
    boxes();
  }
};

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

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
