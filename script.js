/* js para poder llevar a cabo los efectos para la barar con el scroll*/

window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);

});

const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".navigation")
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",()=> {
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")
})

navigationItems.forEach((navigationItems)=>{
    navigationItems.addEventListener("click",()=> {
        menuBtn.classList.remove("active")
        navigation.classList.remove("active")
    })
})

///responsive navigation sidebar menu

