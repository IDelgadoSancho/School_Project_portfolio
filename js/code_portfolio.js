window.onload = async function () {
  let home = document.getElementById("button_home");
  if (window.innerWidth <= 570) {
    //mobile
    box_mobile();
  } else {
    box();
  }

function box() {
    let box1 = document.querySelector(".box_1");
    box1.classList.add("grow_Width");
  }

function box_mobile() {
    let box1 = document.querySelector(".box_1");
    box1.classList.add("grow_Width");
  }
};

function grow(id) {
  let box = document.getElementById(id);
  box.classList.toggle("scaled");
}
