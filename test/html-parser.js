var assert = require('assert'),
    parser = require('../lib/parser'),
    readFile = require('./support/readfile');


describe('HTML parser', function() {
    var file = __dirname + '/fixtures/thepiratebay.html',
        HTML = readFile(file),
        p = new parser(HTML);

    describe('list', function() {
        it('should have 14 rows', function() {
            var a = p.parse()
            assert.equal(14, p.data.length);
        })
    })
})
