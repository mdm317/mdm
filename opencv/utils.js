export const scale = 1
export const previewRatio = 0.3

export const img2ctx = (img, canvasEl) => {
  canvasEl.width = img.width * scale
  canvasEl.height = img.height * scale
  canvasEl.style.width = img.width * previewRatio + 'px'
  canvasEl.style.height = img.height * previewRatio + 'px'
  const ctx = canvasEl.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvasEl.width, canvasEl.height)
}
export const setCanvasSize = (img, canvasEl) => {
  canvasEl.width = img.width * scale
  canvasEl.height = img.height * scale
  canvasEl.style.width = img.width * previewRatio + 'px'
  canvasEl.style.height = img.height * previewRatio + 'px'
}
