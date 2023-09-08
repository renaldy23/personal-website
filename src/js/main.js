import AOS from 'aos'
import 'aos/dist/aos.css'
import typed from './typed'

AOS.init()

const header = document.querySelector('#header')
const button_nav = document.querySelector('#btn-mobile-nav')
const menu_list = document.querySelector('#mobile-menu')
const menu_icon = document.querySelector('#menu-icon')
const close_icon = document.querySelector('#close-icon')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scroll-header') // Change to your desired background color
  } else {
    header.classList.remove('scroll-header') // Reset to transparent if not scrolled
  }
})

button_nav.addEventListener('click', () => {
  menu_list.classList.toggle('!-left-full')
  menu_icon.classList.toggle('hidden')
  close_icon.classList.toggle('hidden')
})
