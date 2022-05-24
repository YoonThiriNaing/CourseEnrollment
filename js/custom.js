const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// $('.dropdown ul li').hide();
$('.nav-b').click(function() {
    $('.dropdown ul li').toggle(200);
});    
