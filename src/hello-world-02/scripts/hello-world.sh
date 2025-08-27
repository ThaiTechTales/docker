#!/bin/sh
# hello.sh
# Purpose: simple script to demonstrate Docker containerisation

# Exit immediately if a command exits with a non-zero status
set -eu

# Join all args as the name, fallback to "Thai" if none provided
NAME="${*:-Thai}"

# Greet the user
printf "👋 Hello, %s! This is a Dockerised Bash script.\n" "$NAME"

