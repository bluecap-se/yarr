var request = require('request'),
    cheerio = require('cheerio'),
    config = require('../config.json');

var BASE_URL = config.tpb.url;

var requestOptions = {
    url: BASE_URL + '/search/brooklyn/0/7/200',
    headers: {
        'User-Agent': config.fake_user_agent
    }
};


function parseHTML(err, resp, body) {
    if (err || resp.statusCode !== 200) {
        return console.error(err);
    }

    var $ = cheerio.load(body);

    console.log($("h2").text());

    $('#searchResult tr').each(function(index, value) {
        console.log(index, value.text());
    });
}

request(requestOptions, parseHTML);

module.exports = parseHTML;
