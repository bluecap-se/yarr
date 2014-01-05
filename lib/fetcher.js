var request = require('request'),
    cheerio = require('cheerio'),
    config = require('./config');


module.exports = Fetcher;


function Fetcher(query, hd, season, episode) {
    this.options = {
        url: config.source,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36',
            'Cookie': 'lw=s'
        }
    };

    this.urlBuilder(query, hd, season, episode);
}

Fetcher.prototype.urlBuilder = function(query, hd, season, episode) {
    var url = this.options.url + '/search/%q/0/7/%cat';
        q = [query],
        hdChoices = ['720p', '1080p'],
        prependZero = function(num) {
            return (num.length === 1) ? '0' + num : num;
        };

    if (season) {
        var s = ['S', prependZero(season)];

        if (episode) {
            s = s.concat(['E', prependZero(episode)]);
        }

        q.push(s.join(''));
    }

    if (hd && hdChoices.indexOf(hd) > -1) {
        q.push(hd);
    }

    q = encodeURIComponent(q.join(' '));
    this.options.url = url.replace('%cat', config.categories.video).replace('%q', q);
};

Fetcher.prototype.load = function(callback) {
    request(this.options, callback);
};
