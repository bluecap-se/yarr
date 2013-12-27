var cheerio = require('cheerio'),
    request = require('request');

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


var HTML = '<table id="searchResult"><thead id="tableHead"><tr class="header"><th><a href="/search/brooklyn%20nine%20s01e05/0/13/200" title="Sortera efter Typ">Typ</a></th>            <th><div class="sortby"><a href="/search/brooklyn%20nine%20s01e05/0/1/200" title="Sortera efter Namn">Namn</a></div><div class="viewswitch"> View: Single / <a href="/switchview.php?view=d">Double</a>&nbsp;</div></th>\
<th><a href="/search/brooklyn%20nine%20s01e05/0/3/200" title="Sortera efter Uppladdad">Uppladdad</a></th><th>&nbsp;</th><th><a href="/search/brooklyn%20nine%20s01e05/0/5/200" title="Sortera efter Storlek">Storlek</a></th><th><abbr title="Distributörer"><a href="/search/brooklyn%20nine%20s01e05/0/8/200" title="Sortera efter Distributörer">DB</a></abbr></th><th><abbr title="Reciprokörer"><a href="/search/brooklyn%20nine%20s01e05/0/9/200" title="Sortera efter Reciprokörer">RP</a></abbr></th></tr></thead><tbody><tr>\
<td class="vertTh"><a href="/browse/205" title="Mer från denna kategori">Video &gt; TV</a></td>\
<td><a href="/torrent/9053036/Brooklyn_Nine_Nine_S01E05_HDTV_x264-LOL_[eztv]" title="Detaljer för Brooklyn Nine Nine S01E05 HDTV x264-LOL [eztv]">Brooklyn Nine Nine S01E05 HDTV x264-LOL [eztv]</a>\
</td>\
<td>10-16&nbsp;03:13</td>\
<td><nobr><a href="magnet:?xt=urn:btih:843e55e285faf4fe73b1c28e82b75f51c3c146eb&amp;dn=Brooklyn+Nine+Nine+S01E05+HDTV+x264-LOL+%5Beztv%5D&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><img src="/static/img/icon_comment.gif" alt="This torrent has 6 kommentarer." title="This torrent has 6 kommentarer."><a href="/user/eztv"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">154.1&nbsp;MiB</td>\
<td align="right">408</td>\
<td align="right">21</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/208" title="Mer från denna kategori">Video &gt; HD - TV shows</a></td>\
<td><a href="/torrent/9053003/Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION_[PublicHD]" title="Detaljer för Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION [PublicHD]">Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION [PublicHD]</a>\
</td>\
<td>10-16&nbsp;03:06</td>\
<td><nobr><a href="magnet:?xt=urn:btih:273c54dd8b191882025c211e64d895d96368bc02&amp;dn=Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION+%5BPublicHD%5D&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="/user/DibyaTPB"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">700.73&nbsp;MiB</td>\
<td align="right">31</td>\
<td align="right">3</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/205" title="Mer från denna kategori">Video &gt; TV</a></td>\
<td><a href="/torrent/9052989/Brooklyn_Nine_Nine_S01E05_HDTV_x264-LOL[ettv]" title="Detaljer för Brooklyn Nine Nine S01E05 HDTV x264-LOL[ettv]">Brooklyn Nine Nine S01E05 HDTV x264-LOL[ettv]</a>\
</td>\
<td>10-16&nbsp;03:03</td>\
<td><nobr><a href="magnet:?xt=urn:btih:8a720dc126fe2ea818fa39e2bbafc67a5c3225f9&amp;dn=Brooklyn+Nine+Nine+S01E05+HDTV+x264-LOL%5Bettv%5D&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="/user/ettv"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">154.1&nbsp;MiB</td>\
<td align="right">27</td>\
<td align="right">0</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/205" title="Mer från denna kategori">Video &gt; TV</a></td>\
<td><a href="/torrent/9053161/Brooklyn_Nine_Nine_S01E05_HDTV_XviD-AFG[ettv]" title="Detaljer för Brooklyn Nine Nine S01E05 HDTV XviD-AFG[ettv]">Brooklyn Nine Nine S01E05 HDTV XviD-AFG[ettv]</a>\
</td>\
<td>10-16&nbsp;03:57</td>\
<td><nobr><a href="magnet:?xt=urn:btih:50ceab8f6b2829b6f97b23c2b1805ffb09406f86&amp;dn=Brooklyn+Nine+Nine+S01E05+HDTV+XviD-AFG%5Bettv%5D&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="/user/ettv"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">176.53&nbsp;MiB</td>\
<td align="right">18</td>\
<td align="right">2</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/205" title="Mer från denna kategori">Video &gt; TV</a></td>\
<td><a href="/torrent/9052985/Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL[rartv]" title="Detaljer för Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL[rartv]">Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL[rartv]</a>\
</td>\
<td>10-16&nbsp;03:01</td>\
<td><nobr><a href="magnet:?xt=urn:btih:3a325303265f30dacd9b54589f1afec3dd4d0ae6&amp;dn=Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL%5Brartv%5D&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9052985/Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL[rartv].9052985.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><a href="/user/Drarbg"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">154.1&nbsp;MiB</td>\
<td align="right">9</td>\
<td align="right">0</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/208" title="Mer från denna kategori">Video &gt; HD - TV shows</a></td>\
<td><a href="/torrent/9052991/Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION[rartv]" title="Detaljer för Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION[rartv]">Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION[rartv]</a>\
</td>\
<td>10-16&nbsp;03:03</td>\
<td><nobr><a href="magnet:?xt=urn:btih:42e6acddf1e41abf589c52e0db5f06227439a3fe&amp;dn=Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION%5Brartv%5D&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9052991/Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION[rartv].9052991.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><a href="/user/Drarbg"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">740.17&nbsp;MiB</td>\
<td align="right">8</td>\
<td align="right">2</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/205" title="Mer från denna kategori">Video &gt; TV</a></td>\
<td><a href="/torrent/9056250/Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL" title="Detaljer för Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL">Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL</a>\
</td>\
<td>10-16&nbsp;21:14</td>\
<td><nobr><a href="magnet:?xt=urn:btih:8fe6946547f63ec98f0ebfbc33e5eea44315cc90&amp;dn=Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9056250/Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL.9056250.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><a href="/user/Thhaque"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">154.1&nbsp;MiB</td>\
<td align="right">6</td>\
<td align="right">0</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/208" title="Mer från denna kategori">Video &gt; HD - TV shows</a></td>\
<td><a href="/torrent/9055757/Brooklyn.Nine-Nine.S01E05.1080p.WEB-DL.DD5.1.H.264-NTb_[PublicHD" title="Detaljer för Brooklyn.Nine-Nine.S01E05.1080p.WEB-DL.DD5.1.H.264-NTb [PublicHD">Brooklyn.Nine-Nine.S01E05.1080p.WEB-DL.DD5.1.H.264-NTb [PublicHD</a>\
</td>\
<td>10-16&nbsp;19:06</td>\
<td><nobr><a href="magnet:?xt=urn:btih:bb18db666c2bf4eff69654916cf75de88ed80e9f&amp;dn=Brooklyn.Nine-Nine.S01E05.1080p.WEB-DL.DD5.1.H.264-NTb+%5BPublicHD&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9055757/Brooklyn.Nine-Nine.S01E05.1080p.WEB-DL.DD5.1.H.264-NTb_[PublicHD.9055757.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><img src="/static/img/icon_comment.gif" alt="This torrent has 2 kommentarer." title="This torrent has 2 kommentarer."><a href="/user/DibyaTPB"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">879.25&nbsp;MiB</td>\
<td align="right">5</td>\
<td align="right">3</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/205" title="Mer från denna kategori">Video &gt; TV</a></td>\
<td><a href="/torrent/9053165/Brooklyn.Nine.Nine.S01E05.HDTV.XviD-AFG" title="Detaljer för Brooklyn.Nine.Nine.S01E05.HDTV.XviD-AFG">Brooklyn.Nine.Nine.S01E05.HDTV.XviD-AFG</a>\
</td>\
<td>10-16&nbsp;03:58</td>\
<td><nobr><a href="magnet:?xt=urn:btih:2e66563741914cdfe8e1c1299395caa76d97b507&amp;dn=Brooklyn.Nine.Nine.S01E05.HDTV.XviD-AFG&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9053165/Brooklyn.Nine.Nine.S01E05.HDTV.XviD-AFG.9053165.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><a href="/user/TvTeam"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">176.53&nbsp;MiB</td>\
<td align="right">4</td>\
<td align="right">1</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/205" title="Mer från denna kategori">Video &gt; TV</a></td>\
<td><a href="/torrent/9053053/Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL.[VTV].mp4" title="Detaljer för Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL.[VTV].mp4">Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL.[VTV].mp4</a>\
</td>\
<td>10-16&nbsp;03:21</td>\
<td><nobr><a href="magnet:?xt=urn:btih:a522863884b39e5265eb8b5358d94baeadf046c4&amp;dn=Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL.%5BVTV%5D.mp4&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9053053/Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL.[VTV].mp4.9053053.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><a href="/user/VTV"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">154.1&nbsp;MiB</td>\
<td align="right">4</td>\
<td align="right">1</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/205" title="Mer från denna kategori">Video &gt; TV</a></td>\
<td><a href="/torrent/9056286/Brooklyn.Nine.Nine.S01E05.HDTV.Subtitulado.Esp.SC.avi" title="Detaljer för Brooklyn.Nine.Nine.S01E05.HDTV.Subtitulado.Esp.SC.avi">Brooklyn.Nine.Nine.S01E05.HDTV.Subtitulado.Esp.SC.avi</a>\
</td>\
<td>10-16&nbsp;21:21</td>\
<td><nobr><a href="magnet:?xt=urn:btih:b1f3c9b74fac43ac06ff009b618bb34846c3e53c&amp;dn=Brooklyn.Nine.Nine.S01E05.HDTV.Subtitulado.Esp.SC.avi&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9056286/Brooklyn.Nine.Nine.S01E05.HDTV.Subtitulado.Esp.SC.avi.9056286.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a></nobr></td>\
<td align="right">171.35&nbsp;MiB</td>\
<td align="right">3</td>\
<td align="right">0</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/208" title="Mer från denna kategori">Video &gt; HD - TV shows</a></td>\
<td><a href="/torrent/9055726/Brooklyn.Nine-Nine.S01E05.720p.WEB-DL.DD5.1.H.264-NTb_[PublicHD]" title="Detaljer för Brooklyn.Nine-Nine.S01E05.720p.WEB-DL.DD5.1.H.264-NTb [PublicHD]">Brooklyn.Nine-Nine.S01E05.720p.WEB-DL.DD5.1.H.264-NTb [PublicHD]</a>\
</td>\
<td>10-16&nbsp;18:53</td>\
<td><nobr><a href="magnet:?xt=urn:btih:7fbc9b239e7f4cbbb151933e68970ddd1468188a&amp;dn=Brooklyn.Nine-Nine.S01E05.720p.WEB-DL.DD5.1.H.264-NTb+%5BPublicHD%5D&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9055726/Brooklyn.Nine-Nine.S01E05.720p.WEB-DL.DD5.1.H.264-NTb_[PublicHD].9055726.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><a href="/user/DibyaTPB"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">679.31&nbsp;MiB</td>\
<td align="right">1</td>\
<td align="right">1</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/208" title="Mer från denna kategori">Video &gt; HD - TV shows</a></td>\
<td><a href="/torrent/9056247/Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION" title="Detaljer för Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION">Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION</a>\
</td>\
<td>10-16&nbsp;21:14</td>\
<td><nobr><a href="magnet:?xt=urn:btih:85542775136a64c3b541aa4d880c54a49a9c6368&amp;dn=Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9056247/Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION.9056247.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><a href="/user/Thhaque"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">700.73&nbsp;MiB</td>\
<td align="right">1</td>\
<td align="right">0</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/205" title="Mer från denna kategori">Video &gt; TV</a></td>\
<td><a href="/torrent/9053016/Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL" title="Detaljer för Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL">Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL</a>\
</td>\
<td>10-16&nbsp;03:09</td>\
<td><nobr><a href="magnet:?xt=urn:btih:b4d2eda4f2f66b3c7433b536acdb7b986bbf93c5&amp;dn=Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9053016/Brooklyn.Nine.Nine.S01E05.HDTV.x264-LOL.9053016.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><a href="/user/TvTeam"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">154.1&nbsp;MiB</td>\
<td align="right">1</td>\
<td align="right">0</td>\
</tr>\
<tr>\
<td class="vertTh"><a href="/browse/208" title="Mer från denna kategori">Video &gt; HD - TV shows</a></td>\
<td><a href="/torrent/9053037/Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION" title="Detaljer för Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION">Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION</a>\
</td>\
<td>10-16&nbsp;03:13</td>\
<td><nobr><a href="magnet:?xt=urn:btih:fc8d6405ac55215fb3e9b9024ce267d565c8bfc7&amp;dn=Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9053037/Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION.9053037.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><a href="/user/TvTeam"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">740.17&nbsp;MiB</td>\
<td align="right">0</td>\
<td align="right">1</td>\
</tr>\
\
<tr>\
<td class="vertTh"><a href="/browse/208" title="Mer från denna kategori">Video &gt; HD - TV shows</a></td>\
<td><a href="/torrent/9053077/Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION" title="Detaljer för Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION">Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION</a>\
</td>\
<td>10-16&nbsp;03:29</td>\
<td><nobr><a href="magnet:?xt=urn:btih:d485d58417fdfde6cb771359d52b713800a28e21&amp;dn=Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&amp;tr=udp%3A%2F%2Ftracker.istole.it%3A6969&amp;tr=udp%3A%2F%2Ftracker.ccc.de%3A80&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337" title="Download this torrent using magnet"><img src="/static/img/icon-magnet.gif" alt="Magnet link"></a><a href="//torrents.thepiratebay.se/9053077/Brooklyn.Nine.Nine.S01E05.720p.HDTV.X264-DIMENSION.9053077.TPB.torrent" title="Ladda ner denna torrent"><img src="/static/img/dl.gif" class="dl" alt="Ladda ner"></a><img src="/static/img/icon_comment.gif" alt="This torrent has 1 kommentarer." title="This torrent has 1 kommentarer."><a href="/user/sceneline"><img src="/static/img/vip.gif" alt="VIP" title="VIP" style="width:11px;" border="0"></a></nobr></td>\
<td align="right">740.17&nbsp;MiB</td>\
<td align="right">0</td>\
<td align="right">1</td>\
</tr>\
\
</tbody></table>';


var ParseResults = function(html) {
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

ParseResults.prototype.extract = function(index, $el) {
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

ParseResults.prototype.cols = function($row) {
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

ParseResults.prototype.parse = function() {
    var self = this,
        obj;

    this.$('#searchResult tr:not(.header)').each(function(i) {
        obj = self.cols(self.$(this));
        self.data.push(obj);
    });
}

ParseResults.prototype.results = function(filter) {
    return this.data;
}


var a = new ParseResults(HTML);
a.parse();

console.log(a.data);

