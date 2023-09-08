import typed from './typed'

const header = document.querySelector('#header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scroll-header') // Change to your desired background color
  } else {
    header.classList.remove('scroll-header') // Reset to transparent if not scrolled
  }
})
