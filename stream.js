const {createReadStream} = require("fs");

const stream = createReadStream('./content/result2.txt', 'utf8');

stream.on('data', (result) => { //data is an event for stream, like open, close, ready
    console.log(result);
})