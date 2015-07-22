BIN = ./node_modules/.bin/
MOCHA_OPTS= --check-leaks
REPORTER = spec

setup: clean
	npm install

test:
	NODE_ENV=test ${BIN}mocha --reporter $(REPORTER) --globals setImmediate,clearImmediate $(MOCHA_OPTS)

test-coverage:
	${BIN}istanbul cover ${BIN}_mocha -- -R $(REPORTER)

clean:
	npm cache clean
	rm -rf node_modules
	rm -rf coverage

lint:
	${BIN}jshint .

.PHONY: setup test test-coverage clean lint
