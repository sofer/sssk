var http = require('http');
var router  = require('./router');
var port = process.env.port || 4000;
var app = function(req, res) {
    router(req, res);
};
http.createServer(app).listen(port);
console.log('server listening on port', port);
