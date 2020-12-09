var http = require('http');
var url = require('url');
var file = require('fs');

http.createServer(function (req, res) {
    var urldata = url.parse(req.url, true);
    var filename = "." + urldata.pathname;
    file.readFile(filename, function (error, data) {
        if (error) {
            res.writeHead("404", { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }
        res.writeHead("200", { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen("8080");

