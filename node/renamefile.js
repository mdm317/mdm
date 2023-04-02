const fs = require('fs')
const path = require('path')

main()
// 바꿀 파일들이 있는 디렉토리
const directoryName = '/pfp'
// 어떤식으로 파일 이름을 바꿀지 결정
function changeNameFun (curFilename){
  const index = Number(curFilename.slice(0, 2))
  const newfileName = index - 1 + '.jpg'
  return newfileName
}

async function main() {
  const filenames = await getCurrentFilenames()
  console.log(filenames)
  filenames.forEach((filename) => {
    const newfileName = changeNameFun(filename)
    fs.rename(
      path.join(__dirname, directoryName, filename),
      path.join(__dirname, directoryName, newfileName),
      () => {
        console.log('\nFile Renamed!\n')
      }
    )
  })
}

async function getCurrentFilenames() {
  console.log('Current filenames:')
  const res = await fs.readdirSync(path.join(__dirname, directoryName))
  return res
}
