# Yarr!

[![Circle CI](https://img.shields.io/circleci/project/bluecap-se/yarr.svg)](https://circleci.com/gh/bluecap-se/yarr)
[![Dependency Status](https://img.shields.io/gemnasium/bluecap-se/yarr.svg)](https://gemnasium.com/bluecap-se/yarr)
[![NPM version](https://img.shields.io/npm/v/yarr.svg)](https://www.npmjs.com/package/yarr)

*I feel lucky*, for [The Pirate Bay](https://thepiratebay.se/). A micro HTTP service,
for picking the best torrent available for download, by searching TPB.

## Install

```console
$ npm install yarr
```

## Usage

```console
$ yarr
Server started on localhost:8080
```

This will start the HTTP server, with [default config](https://github.com/bluecap-se/yarr/blob/master/lib/defaults.json).
Then navigate to [localhost:8080](http://localhost:8080)

#### Full options

```console
$ yarr -h

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

## Use case

#### Getting the best torrent

Here, [HTTPie](https://github.com/jakubroztocil/httpie) is used when calling the API over HTTP. Using Curl is another option.

```console
$ http localhost:8080/search q==Game s==1 e==5 hd==720p
{
    "name": "...",
    "added": "05-16 2011",
    "magnet": "magnet:?xt=urn:...",
    "size": "1.46 GiB",
    "seeders": "69",
    "leachers": "10"
}
```

#### Getting the magnet

Here, [jq](http://stedolan.github.io/jq/) is used to parse the result from Yarr!. The result can then be piped to a torrent application of your choice.

```console
$ http localhost:8080/search q==Game s==1 e==5 hd==720p | jq .magnet
magnet:?xt=urn:
```

## API

All response is JSON formatted.

#### Perform a search
Returned is the best matching torrent.

```console
$ http localhost:8080/search q==value [param==value]
```

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

#### Check version
Returned is the running version of Yarr!

```console
$ http localhost:8080/version
{
    "version": "1.0.1"
}
```

## Run tests

```console
$ make test
```

## License

Published under [MIT License](https://github.com/bluecap-se/yarr/blob/master/LICENSE).
