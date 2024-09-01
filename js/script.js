let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector(".container")
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let itens = container.querySelectorAll('.list .item')
let list = container.querySelector('.list')

nextButton.addEventListener('click', nextFunction)
prevButton.addEventListener('click', prevFunction)

let active = 0
let firstPosition = 0
let lastPosition = itens.length -1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

function nextFunction() {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    itens[active].classList.add('active')
}

function prevFunction() {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    itens[active].classList.add('active')
}


