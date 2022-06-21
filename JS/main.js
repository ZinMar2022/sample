const toggle =document.querySelector(".toggle");
const navbar=document.querySelector(".navbar-menu");
const icon=document.querySelector(".fa-solid");

toggle.addEventListener("click", function(){
    navbar.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
})
const nav =document.querySelector("nav");
const up =document.querySelector("#up");

window.addEventListener("scroll",function(){
    if(window.scroll >= 850){
        nav.style.background ="#add";
    }else{
        nav.style.backgroundColor="";
    }
    if(this.window.scrollY >= 850){
        up.classList.add("active");
    }else{
        up.classList.remove("active");
    }
    
})
up.onclick=()=>{
    window.scrollTo({
        behavior:"smooth",
        top:0,
    });
}
