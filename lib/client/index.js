import { defineClientAppEnhance } from '@vuepress/client'
import './style.css'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  console.log('presentation works')
  window.addEventListener('keydown', e => {
    if (e.shiftKey && e.ctrlKey && e.key === 'p') {
      document.querySelector(".theme-container").classList.toggle('presentation-mode')
    }
  })
})
