#!/bin/sh
# tests/hello_test.sh
# Very basic smoke test

# -eu: exit on error and unset variables
set -eu

# Run the hello.sh script and capture the output
OUTPUT="$(sh ./scripts/hello-world.sh Thai)"

# Check if the output contains the expected greeting
echo "$OUTPUT" | grep -q "Hello, Thai" && echo "PASS" || (echo "FAIL"; exit 1)
