import { img2ctx, setCanvasSize } from './utils.js'

const worker = new Worker('./nuggi.worker.js')

const inputEl = document.querySelector('#file-input')
const cvEl = document.querySelector('canvas#canvasInput')
const cvOut = document.querySelector('canvas#canvasOutput')
const context = cvEl.getContext('2d')
const btn = document.querySelector('.btn-worker')

worker.onmessage = (e) => {
  const ctx = cvOut.getContext('2d')
  ctx.putImageData(e.data, 0, 0, 0, 0, e.data.width, e.data.height)
}

btn.addEventListener('click', () => {
  const file = inputEl.files[0]
  if (!file) {
    return alert('enter file!!!')
  }
  const img = new Image()

  img.onload = function () {
    // targetSize = img.width;
    img2ctx(img, cvEl)

    setCanvasSize(img, cvOut)

    const imageData = context.getImageData(0, 0, img.width, img.height)
    worker.postMessage(imageData)
  }

  img.src = URL.createObjectURL(file)
})
