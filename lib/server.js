var app = require('express')(),
    fetcher = require('./fetcher'),
    parser = require('./parser'),
    HTML = require('../test/resource'),
    config = require('../config.json'),
    pkg = require('../package.json');


function parseTester(err, resp, body) {
    if (err || resp.statusCode !== 200) {
        return console.error(err);
    }

    var a = new parser(body);
    a.parse();

    console.log(a.data);
}


app.get('/', function(req, res) {
    var body = 'Hello World';

    var f = new fetcher();
    f.load(parseTester);

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
});


app.get('/version', function(req, res) {
    var body = { 'version': pkg.version },
        payload = JSON.stringify(body);

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', Buffer.byteLength(payload));
    res.end(payload);
});


app.listen(config.server.port, config.server.host, function() {
    console.log('Express server started on %s:%s', config.server.host, config.server.port);
});
