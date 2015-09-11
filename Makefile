BIN = ./node_modules/.bin/
MOCHA_OPTS= --check-leaks
REPORTER = spec

API_KEY ?= ''
SOURCE ?= ''

setup: clean
	npm install

serve:
	node /yarr/bin/yarr --host 0.0.0.0 --api-key $(API_KEY) --source $(SOURCE)

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

.PHONY: setup test test-coverage clean lint serve
