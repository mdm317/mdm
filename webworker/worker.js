const longTask = () => {
  console.log('start task')
  let a = 0
  for (let index = 0; index < 1000000000; index++) {
    a += 1
  }
  console.log(a)
  console.log('end task')
}

self.onmessage = (e) => {
  console.log(e.data)
  longTask()
}
