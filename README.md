# Yarr!

[![Build Status](https://travis-ci.org/mikelaew/yarr.png?branch=develop,master)](https://travis-ci.org/mikelaew/yarr)
[![Dependency Status](https://gemnasium.com/mikelaew/yarr.png)](https://gemnasium.com/mikelaew/yarr)

*I feel lucky*, for [The Pirate Bay](https://thepiratebay.se/). A micro HTTP service,
for picking the best torrent available for download, by searching TPB.


## Install

```Bash
$ git clone https://github.com/mikelaew/yarr.git .
$ cd yarr
$ npm install
```


## Usage

```Bash
$ bin/yarr
Server started on localhost:8080
```

This will start the HTTP server, with [default config](https://github.com/mikelaew/yarr/blob/master/lib/defaults.json).
Then navigate to [localhost:8080](http://localhost:8080)

#### Full options

```Bash
$ bin/yarr -h

I feel lucky, for The Pirate Bay

Usage:
    yarr [<config>]
    yarr [options]

Options:
    --host=HOST       Set server host
    --port=PORT       Set server port
    --source=URL      Set The Pirate Bay URL
    --api-key=TOKEN   Set API-key
    -h --help         Show this screen
    -v --version      Show version

Examples:
       yarr (run the server with default config)
       yarr ~/config.json
       yarr --host localhost --port 8080
```


## API

All response is JSON formatted.

**Perform a search**  
Returned is the best matching torrent.

<table>
    <tr>
        <th>Param</th>
        <th>Required</th>
        <th>Description</th>
        <th>Input type</th>
    </tr>
    <tr>
        <td>q</td>
        <td>Yes</td>
        <td>Search query.</td>
        <td>Freetext string</td>
    </tr>
    <tr>
        <td>s</td>
        <td>No</td>
        <td>Season, for shows.</td>
        <td>Number</td>
    </tr>
    <tr>
        <td>e</td>
        <td>No</td>
        <td>Episode, for shows. Requires season.</td>
        <td>Number</td>
    </tr>
    <tr>
        <td>hd</td>
        <td>No</td>
        <td>Flag for HD.</td>
        <td>720p, 1080p</td>
    </tr>
</table>

```Bash
$ curl 'http://localhost:8080/search?q=Game&s=1&e=5&hd=720p'
{
    "name": "...",
    "added": "05-16 2011",
    "magnet": "magnet:...",
    "size": "1.46 GiB",
    "seeders": "69",
    "leachers": "10"
}
```

**Check version**  
Returned is the running version of Yarr!

```Bash
$ curl http://localhost:8080/version
{
    "version": "1.0.0"
}
```

## Run tests

```Bash
$ make test
```


## License

Published under [MIT License](https://github.com/mikelaew/yarr/blob/master/LICENSE).
