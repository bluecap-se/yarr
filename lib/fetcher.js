var request = require('request'),
    cheerio = require('cheerio'),
    config = require('../config.json');


module.exports = Fetcher;


function Fetcher(source) {
    var baseUrl = source;
    this.options = {
        url: baseUrl + '/search/brooklyn/0/7/200',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36',
            'Cookie': 'lw=s'
        }
    };
}

Fetcher.prototype.construct = function() {

};

Fetcher.prototype.load = function(callback) {
    request(this.options, callback);
};
