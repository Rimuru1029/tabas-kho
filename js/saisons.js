
import Lenis from "@studio-freight/lenis"

function initLenis() {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

initLenis()