var config = defaults = require('./defaults.json');

module.exports = new Config();


function Config() {
    this.host = config.server.host;
    this.port = config.server.port;
    this.source = config.tpb.url;
}

/*
    Load configuration file
*/
Config.prototype.load = function(path) {
    try {
        config = require(path);
        this.setByEval('host', 'config.server.host');
        this.setByEval('port', 'config.server.port');
        this.setByEval('source', 'config.tpb.url');
    }
    catch(e) {
        console.error('Error: Failed to load config file, ' +
                      'defaulting to standard config...');
    }
};

/*
    Setting a config value,
    by evaluating and catching key errors
*/
Config.prototype.setByEval = function(name, value) {
    try {
        this.set(name, eval(value));
    }
    catch(e) {}
};

/*
    Setting a config value,
    default back to original
*/
Config.prototype.set = function(name, value) {
    try {
        if (!(name in this)) {
            throw 'KeyError';
        }
        this[name] = value || this[name];
    }
    catch(e) {
        console.error('Error: Config key "%s" doesn\'t exist.', name);
    }
}
