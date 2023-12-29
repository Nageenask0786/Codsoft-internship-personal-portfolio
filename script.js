const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const navItemsSmall = document.getElementById("small-menu");
const HamburgerMenu = document.getElementById("menu");

console.log(navLinks);
navLinks.forEach((each) => {
  each.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    each.classList.add("active");
  });
});

let role = new Typed(".role", {
  strings: [
    "Frontend Developer",
    "Web developer",
    "Full stack Web developer",
    "MERN Stack Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backTypeSpeed: 500,
  loop: true,
});
 HamburgerMenu.addEventListener("click",function() {
  document.getElementById("mobile-menu-items").classList.toggle("nav-menu-list-mobile")
 })
