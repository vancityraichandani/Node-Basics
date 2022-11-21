const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Yo bro!");
    res.end();
})

server.listen(5000);