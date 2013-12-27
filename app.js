var parser = require('./parser');
    HTML = require('test/resource');

var a = new parser(HTML);
a.parse();

console.log(a.data);
