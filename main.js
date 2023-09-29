const menuHamber = document.querySelector('#menu-hamber')
const menuCross = document.querySelector('#menu-cross')
const nav = document.querySelector('#nav')



menuHamber.addEventListener('click', ()=> {    
    nav.classList.toggle('mr-[-100%]')
} )

menuCross.addEventListener('click', ()=> {    
    nav.classList.toggle('mr-[-100%]')
} )

const mode = document.querySelector('.mode')
const button = document.querySelector('#toggle-mode')

button.addEventListener('click', () => {
    mode.classList.toggle('dark')
})