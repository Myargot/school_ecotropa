let btn = document.querySelector('.burger')
let menu = document.querySelector('.nav-list')
btn.addEventListener('click', function(){
    menu.classList.toggle('nav-list--open')
})

let arrow1 = document.querySelector('.demon-text__arrow1')
let text1 = document.querySelector('.demon-text__block1')
let arrow2 = document.querySelector('.demon-text__arrow2')
let text2 = document.querySelector('.demon-text__block2')
let arrow3 = document.querySelector('.demon-text__arrow3')
let text3 = document.querySelector('.demon-text__block3')
let arrow4 = document.querySelector('.demon-text__arrow4')
let text4 = document.querySelector('.demon-text__block4')
let arrow5 = document.querySelector('.demon-text__arrow5')
let text5 = document.querySelector('.demon-text__block5')
let arrow6 = document.querySelector('.demon-text__arrow6')
let text6 = document.querySelector('.demon-text__block6')
let arrow7 = document.querySelector('.demon-text__arrow7')
let text7 = document.querySelector('.demon-text__block7')


arrow1.addEventListener('click', function(){
    text1.classList.toggle('demon-text__block--open')
    arrow1.classList.toggle('demon-text__arrow--open')
})

arrow2.addEventListener('click', function(){
    text2.classList.toggle('demon-text__block--open')
    arrow2.classList.toggle('demon-text__arrow--open')
})

arrow3.addEventListener('click', function(){
    text3.classList.toggle('demon-text__block--open')
    arrow3.classList.toggle('demon-text__arrow--open')
})

arrow4.addEventListener('click', function(){
    text4.classList.toggle('demon-text__block--open')
    arrow4.classList.toggle('demon-text__arrow--open')
})

arrow5.addEventListener('click', function(){
    text5.classList.toggle('demon-text__block--open')
    arrow5.classList.toggle('demon-text__arrow--open')
})

arrow6.addEventListener('click', function(){
    text6.classList.toggle('demon-text__block--open')
    arrow6.classList.toggle('demon-text__arrow--open')
})

arrow7.addEventListener('click', function(){
    text7.classList.toggle('demon-text__block--open')
    arrow7.classList.toggle('demon-text__arrow--open')
})
