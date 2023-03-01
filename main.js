var typed = new Typed(".auto-type",{
    strings:["FRONTEND DEVELOPER","ANGULAR DEVELOPER","GRAPHIC DESIGNER"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})

let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse")
navbar.forEach(function (a){
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show")
    })
})