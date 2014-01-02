var fs = require('fs');


/*
 * Support functions for tests
 */

module.exports = readFile;


/*
 * Load file contents,
 * specified by @file param
 */
function readFile(file) {
    try {
        // Yep, loading synchronously...
        // There's no need for speed here
        return fs.readFileSync(file, 'utf8');
    }
    catch (e) {
        console.error(e);
    }
}
