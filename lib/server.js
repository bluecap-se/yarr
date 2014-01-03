var express = require('express')(),
    fetcher = require('./fetcher'),
    parser = require('./parser'),
    config = require('./defaults.json'),
    pkg = require('../package.json');


module.exports = server = new Server();


function Server() {
    this.app = express;
    this.tpbSource = config.tpb.url;
}

Server.prototype.setTPB = function(source) {
    this.tpbSource = source;
};

Server.prototype.start = function(port, host) {
    this.app.listen(port, host, function() {
        console.log('Express server started on %s:%s', host, port);
    });
};

Server.prototype.parseTester = function(err, resp, body) {
    if (err || resp.statusCode !== 200) {
        return console.error(err);
    }

    var a = new parser(body);
    a.parse();

    console.log(a.data);
};


/*
    Routes
*/

server.app.get('/', function(req, res) {
    var body = 'Hello World';

    var f = new fetcher(server.tpbSource);
    f.load(server.parseTester);

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
});


server.app.get('/version', function(req, res) {
    var body = { 'version': pkg.version },
        payload = JSON.stringify(body);

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', Buffer.byteLength(payload));
    res.end(payload);
});
