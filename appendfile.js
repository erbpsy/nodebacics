var http = require('http');
var fileSystem = require('fs')
http.createServer(function (req, res) {
    fileSystem.appendFile("index.html","<!-- this is for comment -->", function (error) {
        if(error) throw error;
        console.log('Changes saved into file');
        res.end('Changes saved into file');
    })
}).listen(8080);