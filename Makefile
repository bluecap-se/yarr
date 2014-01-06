BIN = ./node_modules/.bin/
MOCHA_OPTS= --check-leaks
REPORTER = spec

setup:
	@rm -rf node_modules
	@npm cache clean
	@npm install

test:
	@NODE_ENV=test ${BIN}mocha --reporter $(REPORTER) --globals setImmediate,clearImmediate $(MOCHA_OPTS)

test-coverage:
	@${BIN}istanbul cover ${BIN}_mocha -- -R $(REPORTER)

clean:
	@rm -rf node_modules
	@rm -rf coverage

lint:
	@${BIN}jshint .

.PHONY: setup test test-coverage clean lint