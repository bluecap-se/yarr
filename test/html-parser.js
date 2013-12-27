var assert = require('assert'),
    parser = require('../lib/parser'),
    HTML = require('./resource');


describe('HTML parser', function() {
    var p = new parser(HTML);

    describe('list', function() {
        it('should have 16 rows', function() {
            var a = p.parse()
            assert.equal(16, p.data.length);
        })
    })
})
