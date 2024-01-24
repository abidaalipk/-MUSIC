const menuBarEl = document.getElementById("menubar");
const menuMobileEl = document.querySelector('.menu-mobile')
const onClose = () => {
    menuMobileEl.classList.toggle("show-menu");
};

menuBarEl.addEventListener("click", () => {
    console.log("menubar clicked");
    
  onClose();
});


