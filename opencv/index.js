import { drawNuggi, getImageDataGrabcut } from './nuggi.js'
import { img2ctx, setCanvasSize } from './utils.js'

const inputEl = document.querySelector('#file-input')
const cvEl = document.querySelector('canvas#canvasInput')
const cvOut = document.querySelector('canvas#canvasOutput')
const context = cvEl.getContext('2d')
const contextOut = cvOut.getContext('2d')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
const downBtn = document.querySelector('.down')

btn.addEventListener('click', () => {
  const file = inputEl.files[0]
  if (!file) {
    return alert('enter file!!!')
  }
  const img = new Image()

  img.onload = function () {
    img2ctx(img, cvEl)
    setCanvasSize(img, cvOut)

    drawNuggi(cv, cvEl.width, cvEl.height)
  }

  img.src = URL.createObjectURL(file)
})

btn2.addEventListener('click', () => {
  const file = inputEl.files[0]
  if (!file) {
    return alert('enter file!!!')
  }
  const img = new Image()

  img.onload = function () {
    img2ctx(img, cvEl)
    setCanvasSize(img, cvOut)
    const imgData = getImageDataGrabcut(cv, context.getImageData(0, 0, cvEl.width, cvEl.height))
    contextOut.putImageData(imgData, 0, 0)
  }

  img.src = URL.createObjectURL(file)
})
downBtn.addEventListener('click', () => {
  var link = document.createElement('a')
  link.download = 'down.png'
  link.href = cvOut.toDataURL()
  link.click()
})
