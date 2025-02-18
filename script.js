document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const menu = document.querySelector(".menu");
    const banner = document.querySelector(".banner");

    burger.addEventListener("click", function () {
        menu.classList.toggle("active");

        // 🔥 When menu is active, push banner down
        if (menu.classList.contains("active")) {
            banner.style.marginTop = "50vh";
        } else {
            banner.style.marginTop = "10vh"; // Reset position
        }
    });
});
