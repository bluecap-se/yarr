var expect = require('chai').expect,
    parser = require('../lib/parser'),
    readFile = require('./support/readfile');


describe('Parser', function() {
    var file = __dirname + '/fixtures/thepiratebay.html',
        HTML = readFile(file),
        p = new parser(HTML);

    describe('list', function() {
        it('should have 14 rows', function() {
            var a = p.parse();
            expect(p.data.length).to.equal(14);
        });
    });
});
