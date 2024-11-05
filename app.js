// const toggleSideBar = (event) => {
//     if (event.key ==="Escape") {
//         document.querySelector(".hamburger").classList.toggle("active");
//         const menu = document.querySelector(" .nav-hamburger__link-wrapper ");
//         menu.classList.toggle("nav-hamburger__link-wrapper--active");
//     }
//     else if (!event.key) {
//         document.querySelector(".hamburger").classList.toggle("active");
//         const menu = document.querySelector(" .nav-hamburger__links-wrapper");
//         menu.classList.toggle("nav-hamburger__links-wrapper--active");
//       }
// };

// document.querySelector(".hamburger").addEventListener("click", toggleSideBar);
// document.querySelector(".overlay").addEventListener("click", toggleSideBar);
// window.addEventListener("keyup", toggleSideBar);


const toggleNav = (event) => {
    if (event.key === "Escape") {
      document.querySelector(".hamburger").classList.toggle("active");
      const menu = document.querySelector(" .nav-hamburger__links-wrapper");
      menu.classList.toggle("nav-hamburger__links-wrapper--active");
    } else if (!event.key) {
      document.querySelector(".hamburger").classList.toggle("active");
      const menu = document.querySelector(" .nav-hamburger__links-wrapper");
      menu.classList.toggle("nav-hamburger__links-wrapper--active");
    }
  };
  
  document.querySelector(".hamburger").addEventListener("click", toggleNav);
  document.querySelector(".overlay").addEventListener("click", toggleNav);
  window.addEventListener("keyup", toggleNav);