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

navigationItems.forEach((navigationItem)=>{
    navigationItem.addEventListener("click",()=> {
        menuBtn.classList.remove("active")
        navigation.classList.remove("active")
    })
})

///responsive navigation sidebar menu

///js for scroll to top button

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll",function(){
    scrollBtn.classList.toggle("active",this.window.scrollY>500)
})

//js for come back to top of website so click in the scroll-btn

scrollBtn.addEventListener("click",()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
})

//js for reveal website elements on scroll

window.addEventListener("scroll",reveal);

function reveal(){
    let reveals = document.querySelectorAll(".reveal")

    for(let i = 0;i<reveals.length;i++){
        let windowsHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top

        let revealPoint = 50

        if(revealTop<windowsHeight-revealPoint){
            reveals[i].classList.add("active")
        }
    }
}