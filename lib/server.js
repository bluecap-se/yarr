var app = require('express')(),
    fetcher = require('./fetcher'),
    parser = require('./parser'),
    HTML = require('../test/resource'),
    config = require('../config.json');


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

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
});


app.listen(config.server.port, config.server.host, function() {
    console.log('Express server started on %s:%s', config.server.host, config.server.port);
});
