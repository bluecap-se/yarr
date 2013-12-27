var request = require('request')

var BASE_URL = 'https://thepiratebay.se';


var requestOptions = {
    url: BASE_URL + '/search/brooklyn/0/7/200',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36'
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

//request(requestOptions, parseHTML);

module.exports = parseHTML;
