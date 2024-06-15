// <!-- 
//     ░▀▀█░█▀█░█▀▀░█▀▀░█▀█░█▀▄░█▀▄░█▀█░░░▀▀█░█▀█░█▀█░█▀▀░▀█▀░█▀▄
//     ░░░█░█░█░█░█░█▀▀░█░█░█░█░█▀▄░█▀█░░░░░█░█▀█░█░█░█░█░░█░░█░█
//     ░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀░░▀░▀░▀░▀░░░▀▀░░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀░ 
// -->

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// let a = document.querySelector("#elem1")
// let image = a.getAttribute("data-image")
// console.log(image);\\

let fixed = document.querySelector("#fixed-image")
let elemC = document.querySelector("#elem-container")
elemC.addEventListener("mouseenter",function(){
   fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

let elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`
    })
})

// hii
