var request = require('supertest'),
    expect = require('chai').expect,
    config = require('../lib/config'),
    app = require('../lib/server').app,
    pkg = require('../package.json');


describe('Server', function() {

    describe('responds with JSON', function() {
        it('on /', function(done) {
            request(app)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(302, done);
        });

        it('on /search', function(done) {
            request(app)
                .get('/search')
                .expect('Content-Type', /json/)
                .expect(400, done);
        });

        it('on /version', function(done) {
            request(app)
                .get('/version')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('runs with API-key', function() {
        before(function() {
            config.apiKey = 'testing';
        });

        it('with invalid token', function(done) {
            request(app)
                .get('/')
                .expect(401, done);
        });

        it('from querystring', function(done) {
            request(app)
                .get('/?api-key=testing')
                .expect(302, done);
        });

        it('from header', function(done) {
            request(app)
                .get('/')
                .set('X-API-KEY', 'testing')
                .expect(302, done);
        });

        after(function() {
            config.apiKey = "";
        })
    });

    describe('GET /', function() {
        it('contains a redirection', function(done) {
            request(app)
                .get('/')
                .expect('Location', /search/)
                .expect(302, done);
        });
    });

    describe('GET /search', function() {
        it('requires a query param', function(done) {
            request(app)
                .get('/search')
                .expect(400, function(err, res) {
                    if (err) {
                        return done(err);
                    }

                    expect(res.query).to.not.exist;
                    expect(res.body.error).to.not.be.empty;
                    done();
                });

            request(app)
                .get('/search?q=test')
                .end(function(err, res) {
                    if (err) {
                        return done(err);
                    }

                    expect(res.query.q).to.exist;
                    done();
                });
        });
    });

    describe('GET /version', function() {
        it('shows correct version', function(done) {
            request(app)
                .get('/version')
                .end(function(err, res) {
                    if (err) {
                        return done(err);
                    }

                    expect(res.body.version).to.equal(pkg.version);
                    done();
                });
        });
    });

});
