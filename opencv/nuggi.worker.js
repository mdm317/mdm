importScripts('https://docs.opencv.org/4.x/opencv.js')
const drawForeGround = (source, mask) => {
  console.log('[drawForGround start]')
  const startTime = performance.now()

  for (let i = 0; i < source.rows; i++) {
    for (let j = 0; j < source.cols; j++) {
      if (mask.ucharPtr(i, j)[0] == 0 || mask.ucharPtr(i, j)[0] == 2) {
        source.ucharPtr(i, j)[0] = 0
        source.ucharPtr(i, j)[1] = 0
        source.ucharPtr(i, j)[2] = 0
        source.ucharPtr(i, j)[3] = 0
      }
    }
  }
  const spendTime = performance.now() - startTime
  console.log('[duration] === ', spendTime)
  console.log('[drawForGround end]')
}

const doGrapCut = (cv, source, width, height) => {
  console.log('[grapcut start]')
  let startTime = performance.now()

  // grabcut 은 rgb 만 지원해서 rgba 를 rgb 로 바꿈
  cv.cvtColor(source, source, cv.COLOR_RGBA2RGB, 0)
  let mask = new cv.Mat()
  let bgdModel = new cv.Mat()
  let fgdModel = new cv.Mat()
  let rect = new cv.Rect(0, 0, width - 1, height - 1)

  console.log('[grapcut alg]')
  startTime = performance.now()

  cv.grabCut(source, mask, rect, bgdModel, fgdModel, 1, cv.GC_INIT_WITH_RECT)
  let spendTime = performance.now() - startTime
  console.log('[duration] === ', spendTime)
  console.log('[grapcut alg end]')

  // 배경을 transparent 로 하고 싶어서 grabcut 한 rgb 를 다시 rgba 로 바꿈
  cv.cvtColor(source, source, cv.COLOR_RGB2RGBA, 0)

  drawForeGround(source, mask)
  mask.delete()
  bgdModel.delete()
  fgdModel.delete()

  spendTime = performance.now() - startTime
  console.log('[duration] === ', spendTime)
  console.log('[grapcut end]')
}

getImageDataGrabcut = (cv, imgData) => {
  const source = cv.matFromImageData(imgData)
  doGrapCut(cv, source, imgData.width, imgData.height)

  const imageData = new ImageData(new Uint8ClampedArray(source.data), source.cols, source.rows)

  source.delete()
  return imageData
}
self.onmessage = (e) => {
  const imgData = e.data
  console.log(imgData)
  self.postMessage(getImageDataGrabcut(cv, imgData))
}
console.log(cv)
