import { defineClientAppEnhance } from '@vuepress/client'
import './style.scss'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  window.addEventListener('keydown', e => {
    if (e.shiftKey && e.ctrlKey && e.keyCode === 80 && !e.repeat) {
      if (document.fullscreenElement) {
        // exitFullscreen is only available on the Document object.
        document.exitFullscreen();
      } else {
        document.body.requestFullscreen();
      }
    }
  })
})
