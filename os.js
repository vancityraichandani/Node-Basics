const os = require("os");

console.log(os.freemem()/1024/1024/1024);
console.log(os.uptime()/60/60);
console.log(os.version());