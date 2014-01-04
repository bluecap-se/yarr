var express = require('express'),
    fetcher = require('./fetcher'),
    parser = require('./parser'),
    config = require('./defaults.json'),
    pkg = require('../package.json');


module.exports = server = new Server();


function Server() {
    this.app = express();
    this.tpbSource = config.tpb.url;
}

Server.prototype.set = function(config) {
    this.tpbSource = config.source;
    this.apiKey = config.apiKey;
};

Server.prototype.start = function(port, host) {
    this.app.listen(port, host, function() {
        console.log('Server started on %s:%s', host, port);
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

Server.prototype.sendError = function(res, status, msg) {
    var body = {'error': msg},
        payload = JSON.stringify(body);

    res.setHeader('Content-Length', Buffer.byteLength(payload));
    res.status(status);
    res.end(payload);
    return;
};


/*
 * Routes
 */

server.app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');

    if (server.apiKey) {
        var recieved = req.query['api-key'] || req.get('X-API-KEY') || false;
        if (server.apiKey != recieved || !recieved) {
            return server.sendError(res, 401, 'API-key reguired, bad token supplied');
        }
    }

    next();
});


server.app.get('/', function(req, res) {
    res.setHeader('Location', '/search');
    server.sendError(res, 302, 'Welcome to Yarr! Take a look at /search');
});


server.app.get('/search', function(req, res) {
    var body;

    // Check for missing query param
    if (!req.query.q) {
        return server.sendError(res, 400, 'Missing \'q\' parameter.');
    }

    var q = req.query.q;
    body = 'Hello World';

    var f = new fetcher(server.tpbSource);
    f.load(server.parseTester);

    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
});


server.app.get('/version', function(req, res) {
    var body = { 'version': pkg.version },
        payload = JSON.stringify(body);

    res.setHeader('Content-Length', Buffer.byteLength(payload));
    res.end(payload);
});
