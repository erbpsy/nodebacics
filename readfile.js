var http = require('http');
var fileSystem = require('fs')
http.createServer(function (req, res) {
    fileSystem.readFile("index.html", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(data);
        return res.end();
    })
}).listen(8080);