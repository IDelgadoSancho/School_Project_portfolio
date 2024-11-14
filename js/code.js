window.onload = async function () {
    let navItems = document.querySelectorAll(".nav ul li");
    let delay = 320; // 200ms de retardo entre cada elemento

    for (let i = 0; i < navItems.length; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        navItems[i].style.transform = "scale(1)";
    }
};