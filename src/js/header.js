const menuSection = document.querySelector("#menu-section");
const menuBtn = document.querySelector("#menuBtn"); 

menuBtn.addEventListener("click", () => {
    menuSection.classList.toggle("open"); 
})
