#!/bin/bash

set -e

options=("setup" "test" "test-coverage" "clean" "lint" "serve")

case "${options[@]}" in  *"$1"*)
    exec make "$@"
esac

exec "$@"
