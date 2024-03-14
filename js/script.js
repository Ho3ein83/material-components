const switch_dark = document.getElementsByClassName("switch-dark");
const switch_light = document.getElementsByClassName("switch-light");

if(switch_dark.length) {
    switch_dark[0].addEventListener("click", function () {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    });
}

if(switch_light.length) {
    switch_light[0].addEventListener("click", function () {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    });
}