var http = require('http');
var customDate = require('./customDate');
var url = require('url');
var fileSystem = require('fs')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var queryString = url.parse(req.url, true).query;
    res.write('Hello World!');
    res.write('\n');
    res.write('Custom Date :' + customDate.GetDate());
    res.write('\n');
    res.write('URL after domain name : ' + req.url);
    res.write('\n');
    res.write('Query string values for id : ' + queryString.id);

    res.end();
}).listen(8080);