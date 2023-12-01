// elementi-catturati
let navbar = document.querySelector('#navbar');
let logo = document.querySelector('#logo');
let links = document.querySelectorAll('.nav-links');
let containerfluid =document.querySelector('#containerfluid');
// console.dir(window);
console.dir(logo)
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 0) {
        navbar.style.height = '70px';
        navbar.classList.remove('bg-r');
        navbar.classList.add('bg-b');
        links.forEach((el)=>{
            el.classList.remove('text-w');
            el.classList.add('text-r');
        })
        logo.src = "http://127.0.0.1:5500/media/ondaWhite.png";
        containerfluid.classList.remove('bg-r');
        containerfluid.classList.add('bg-b');
        containerfluid.classList.remove('text-w');
        containerfluid.classList.add('text-w')      

    } else {
        navbar.style.height = '90px';
        navbar.classList.add('bg-r');
        navbar.classList.remove('bg-b');
        links.forEach((el)=>{
            el.classList.remove('text-r');
            el.classList.add('text-v');
        })
        logo.src = "http://127.0.0.1:5500/media/ondaBlu.png";
        containerfluid.classList.remove('bg-b');
        containerfluid.classList.add('bg-r');
        
    }
})