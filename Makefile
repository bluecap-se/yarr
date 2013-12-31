BIN = ./node_modules/.bin/

test:
	@${BIN}mocha

clean:
	@rm -rf node_modules

lint:
	@${BIN}jshint .

.PHONY: test clean lint