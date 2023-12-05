// elementi-catturati
let navbar = document.querySelector('#navbar');
let logo = document.querySelector('#logo');
let links = document.querySelectorAll('.nav-links');
let containerfluid = document.querySelector('#containerfluid');
let row = document.querySelector('#row');
let accertazioni2 = document.querySelector('#accertazioni2');
let accertazioni = document.querySelector('#accertazioni');

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');


// console.dir(window);
console.dir(logo)
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 0) {
        navbar.style.height = '70px';
        navbar.classList.remove('bg-a');
        navbar.classList.add('bg-w');
        links.forEach((el)=>{
            el.classList.remove('text-w');
            el.classList.add('text-r');
        })
        logo.src = "http://127.0.0.1:5500/media/onda-arancione.png";
        containerfluid.classList.remove('bg-w');
        containerfluid.classList.add('bg-w');
        containerfluid.classList.remove('text-w');
        containerfluid.classList.add('text-r')
    } else {
        navbar.style.height = '90px';
        navbar.classList.add('bg-r');
        navbar.classList.remove('bg-w');
        links.forEach((el)=>{
            el.classList.remove('text-r');
            el.classList.add('text-w');
        })
        logo.src = "http://127.0.0.1:5500/media/onda-arancione.png";
        containerfluid.classList.remove('bg-w');
        containerfluid.classList.add('bg-r');
    }
})
    function createInterval(total, finalNumber, time) {
        let counter = 0;
        let interval = setInterval(()=>{
            if (counter< total) {
                counter++;
                finalNumber.innerHTML = counter;
            }else{
                clearInterval(interval)
            }
        }, time)
    }
// intersectionObserver()
let check = true;
let observer = new IntersectionObserver((entries)=>{
    entries.forEach((el)=>{
        if (el.isIntersecting && check == true){
            createInterval(600, firstNumber, 10);
            createInterval(570, secondNumber, 11);
            createInterval(90, thirdNumber, 70);
            check = false;
            setTimeout(()=> {
                check = true;
            }, 5000);
        }
    })
})
observer.observe(thirdNumber)