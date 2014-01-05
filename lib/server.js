var express = require('express'),
    fetcher = require('./fetcher'),
    parser = require('./parser'),
    config = require('./config'),
    pkg = require('../package.json'),
    app = express();


module.exports = { "start": function() {
    var port = config.port,
        host = config.host;

    app.listen(port, host, function() {
        console.log('Server started on %s:%s', host, port);
    });
}};

var parseTester = function(err, resp, body) {
    if (err || resp.statusCode !== 200) {
        return console.error(err);
    }

    var a = new parser(body);
    a.parse();

    console.log(a.data);
};

var sendError = function(res, status, msg) {
    var body = { 'error': msg },
        payload = JSON.stringify(body);

    res.setHeader('Content-Length', Buffer.byteLength(payload));
    res.status(status);
    res.end(payload);
    return;
};


/*
 * Middleware
 */

app.use(function(req, res, next) {

    // All requests are in JSON format
    res.setHeader('Content-Type', 'application/json');

    // Check for API key
    if (config.apiKey) {
        var recieved = req.query['api-key'] || req.get('X-API-KEY') || false;
        if (config.apiKey != recieved || !recieved) {
            return sendError(res, 401, 'API-key reguired, bad token supplied');
        }
    }

    next();
});


/*
 * Routes
 */

app.get('/', function(req, res) {
    res.setHeader('Location', '/search');
    sendError(res, 302, 'Welcome to Yarr! Take a look at /search');
});


app.get('/search', function(req, res) {
    var body;

    // Check for missing query param
    if (!req.query.q) {
        return sendError(res, 400, 'Missing required \'q\' parameter.');
    }

    var q = req.query.q;
    body = 'Hello World';

    var f = new fetcher(config.source);
    f.load(parseTester);

    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
});


app.get('/version', function(req, res) {
    var body = { 'version': pkg.version },
        payload = JSON.stringify(body);

    res.setHeader('Content-Length', Buffer.byteLength(payload));
    res.end(payload);
});
