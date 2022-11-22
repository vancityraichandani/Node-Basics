const { readFile, writeFile } = require('fs').promises

const start = async function () {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result2.txt',
      `Result : ${first} ${second}`,
    //   { flag: 'a' }
    )
  } catch (error) {
    console.log(error)
  }
};

start();