

let slides = document.querySelectorAll('.slide')
let index = 0
setInterval( nextSlide, 2000)
function activeSlide(i) {
    for(slide of slides){
        slide.classList.remove('active')
    }
    slides[i].classList.add('active')
}
function nextSlide(){
    if(index == slides.length - 1){
        index = 0
        activeSlide(index)
    }else{
        index++
        activeSlide(index)
    }
}

document.getElementById('home').onclick = function(){
    document.querySelector('header').scrollIntoView({behavior: "smooth"})
}
document.getElementById('benefits').onclick = function(){
    document.querySelector('.benefits').scrollIntoView({behavior: "smooth"})
}

document.getElementById('subjects').onclick = function(){
    document.querySelector('.subjects').scrollIntoView({behavior: "smooth"})
}
document.getElementById('about').onclick = function(){
    document.querySelector('.about').scrollIntoView({behavior: "smooth"})
}
document.getElementById('contacts').onclick = function(){
    document.querySelector('.contacts').scrollIntoView({behavior: "smooth"})
}


document.getElementById('home2').onclick = function(){
    document.querySelector('.nav__down').classList.remove('active')
    openBtn.classList.add('active')
    closeBtn.classList.remove('active')
    document.querySelector('header').scrollIntoView({behavior: "smooth"})

}
document.getElementById('benefits2').onclick = function(){
    document.querySelector('.nav__down').classList.remove('active')
    openBtn.classList.add('active')
    closeBtn.classList.remove('active')
    document.querySelector('.benefits').scrollIntoView({behavior: "smooth"})
}

document.getElementById('subjects2').onclick = function(){
    document.querySelector('.nav__down').classList.remove('active')
    openBtn.classList.add('active')
    closeBtn.classList.remove('active')
    document.querySelector('.subjects').scrollIntoView({behavior: "smooth"})
}
document.getElementById('about2').onclick = function(){
    document.querySelector('.nav__down').classList.remove('active')
    openBtn.classList.add('active')
    closeBtn.classList.remove('active')
    document.querySelector('.about').scrollIntoView({behavior: "smooth"})
}
document.getElementById('contacts2').onclick = function(){
    document.querySelector('.nav__down').classList.remove('active')
    openBtn.classList.add('active')
    closeBtn.classList.remove('active')
    document.querySelector('.contacts').scrollIntoView({behavior: "smooth"})
}

let openBtn = document.getElementById('open-menu-btn')
let closeBtn = document.getElementById('close-menu-btn')
openBtn.addEventListener('click', ()=>{
    document.querySelector('.nav__down').classList.add('active')
    openBtn.classList.remove('active')
    closeBtn.classList.add('active')
})
closeBtn.addEventListener('click', ()=>{
    document.querySelector('.nav__down').classList.remove('active')
    openBtn.classList.add('active')
    closeBtn.classList.remove('active')
})