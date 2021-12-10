import { defineClientAppSetup } from '@vuepress/client'
import { onMounted } from 'vue'
import './style.scss'

export default defineClientAppSetup(() => {
  onMounted(() => {
    window.addEventListener('keydown', e => {
      if (e.shiftKey && e.ctrlKey && e.keyCode === 70 && !e.repeat) {
        if (document.fullscreenElement) {
          // exitFullscreen is only available on the Document object.
          document.exitFullscreen();
        } else {
          document.body.requestFullscreen();
        }
      }
    })
  })
})
