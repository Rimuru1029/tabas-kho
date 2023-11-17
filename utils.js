
export function splitLetter({ el=null, selector=null, lines=false }) {

  let element = el;
  if (selector && !el) {
    console.log("select")
    element = document.querySelector(selector)
  }

  console.log(element, el)

  if (lines) {
    const lines = element.querySelectorAll('div')
    console.log(lines)

    lines.forEach(line => {
      const tempText = line.innerText;
      line.innerText = "";

      for (const l of tempText) {
        let letterSpan = document.createElement('span')
        letterSpan.innerText = l;
        line.appendChild(letterSpan)
      }
    })
  } else {
    const tempText = element.innerText;
    element.innerText = "";

    for (const l of tempText) {
      let letterSpan = document.createElement('span')
      letterSpan.innerText = l;
      element.appendChild(letterSpan)
    }
  }
}
