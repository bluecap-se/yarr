# Yarr!

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

This will start the HTTP server, with [default config](https://github.com/mikelaew/yarr/blob/develop/lib/defaults.json).
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

**Make a search**  
Returned is the best matching torrent.

```Bash
$ curl http://localhost:8080/search?q=Game
{
    "name": ""
}
```

**Check version**  
Returned is the running version of Yarr!

```Bash
$ curl http://localhost:8080/version
{
    "version": "0.0.1"
}
```

## Run tests

```Bash
$ make test
```


## License

Published under MIT license.
