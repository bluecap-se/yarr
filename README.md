# Yarr!

*I feel lucky*, for [The Pirate Bay](https://thepiratebay.se/). A micro HTTP service,
for picking the best torrent available for download, by searching TPB.

## Install

```
$ git clone https://github.com/mikelaew/yarr.git .`
$ cd yarr
$ npm install
```

## Use

```
$ bin/yarr -h

I feel lucky, for The Pirate Bay

Usage:
    yarr [<config>]
    yarr [options]

Options:
    --host=HOST       Set server host
    --port=PORT       Set server port
    --source=URL      Set The Pirate Bay URL
    -h --help         Show this screen
    -v --version      Show version

Examples:
       yarr (run the server with default config)
       yarr ~/config.json
       yarr --host localhost --port 8080
```


## Run tests

```
$ make test
```


## License

Published under MIT license.
