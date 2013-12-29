var request = require('request'),
    cheerio = require('cheerio'),
    config = require('../config.json');


module.exports = Fetcher;


function Fetcher() {
    this.baseUrl = config.tpb.url;
    this.options = {
        url: this.baseUrl + '/search/brooklyn/0/7/200',
        headers: {
            'User-Agent': config.fake_user_agent,
            'Cookie': 'lw=s'
        }
    };
}

Fetcher.prototype.construct = function() {

};

Fetcher.prototype.load = function(callback) {
    request(this.options, callback);
};
