# 👋 Hello World (Dockerised Bash)

## Usage Guide

| Action                | Command                                                                                       | Explanation                                                                 |
|------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Build image**        | ```docker build -t thaile/hello-world:v1 .```                                     | Builds the Docker image from the `Dockerfile` in the current directory.     |
| **Run (default)**      | ```docker run --rm --name hello-world thaile/hello-world:v1```                     | Runs the container, auto-removes it after exit, names it `hello-world`.      |
| **Run with argument**  | ```docker run --rm --name hello-world thaile/hello-world:v1 Thai```                | Runs container and passes `Thai` as argument to the script.                 |
| **Run tests**          | ```1. chmod +x tests/hello-world-test.sh ``` <br><br>```2. IMAGE=thaile/hello-world TAG=v1 sh tests/hello-world-test.sh``` | Executes smoke test that builds and asserts output.                         |