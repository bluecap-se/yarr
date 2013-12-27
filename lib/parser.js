var cheerio = require('cheerio');


var ParseHTML = function(html) {
    this.$ = cheerio.load(html);
    this.data = [];
    this.types = {
        1: 'name',
        2: 'added',
        3: 'magnet',
        4: 'size',
        5: 'seeders',
        6: 'leachers'
    };
};

ParseHTML.prototype.extract = function(index, $el) {
    switch(index) {
        case 1:
            return $el.find('a').text() || '';
            break;
        case 2:
        case 4:
        case 5:
        case 6:
            return $el.text();
            break;
        case 3:
            return $el.find('a[href^=magnet]').attr('href') || '';
    }
}

ParseHTML.prototype.cols = function($row) {
    var self = this,
        obj = {},
        key, val;

    $row.find('td').each(function(i) {
        if (i === 0) {
            return;
        }

        val = self.extract(i, self.$(this));
        key = self.types[i];
        obj[key] = val;
    });

    return obj;
};

ParseHTML.prototype.parse = function() {
    var self = this,
        obj;

    this.$('#searchResult tr:not(.header)').each(function(i) {
        obj = self.cols(self.$(this));
        self.data.push(obj);
    });
}

ParseHTML.prototype.results = function(filter) {
    return this.data;
}

module.exports = ParseHTML;
