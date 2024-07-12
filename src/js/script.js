document.addEventListener('copy', function(e) {
  e.preventDefault();
});

const menu_button = document.querySelector(".header__menu-button");
const nav_menu = document.querySelector(".header__nav-menu");
menu_button.addEventListener("click", (event) => {
  event.stopPropagation();
  nav_menu.classList.toggle("header__menu-active");
  menu_button.classList.toggle("header__menu-buttonActive");
});

document.body.addEventListener("click", () => {
  nav_menu.classList.remove("header__menu-active");
  menu_button.classList.remove("header__menu-buttonActive");
});

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_xrmad5f";
    const templateID = "template_e8vlpjt";

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            btn.value = "Send";
            alert("Sent!");
            document.getElementById("form").reset();
        },
        (err) => {
            btn.value = "Send";
            alert(JSON.stringify(err));
        }
    );
});