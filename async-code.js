const { readFile, writeFile } = require('fs')

console.log('1')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Result : ${first}, ${second}`, {flag: 'a'},
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('2')
      }
    )
  })
})
console.log('3')