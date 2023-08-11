import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, Draggable)
  }

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
    },
  }
})
