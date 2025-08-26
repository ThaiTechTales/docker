# 👋 Hello World (Dockerised Bash)

## Usage Guide

| Action                | Command                                                                                       | Explanation                                                                 |
|------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Build image**        | ```docker build -t thaile/hello-world:v1 .```                                     | Builds the Docker image from the `Dockerfile` in the current directory.     |
| **Run (default)**      | ```docker run --rm --name hello-world thaile/hello-world:v1```                     | Runs the container, auto-removes it after exit, names it `hello-world`.      |
| **Run with argument**  | ```docker run --rm --name hello-world thaile/hello-world:v1 Thai```                | Runs container and passes `Thai` as argument to the script.                 |
| **Run tests**          | ```chmod +x tests/hello_test.shIMAGE=thaile/hello-world TAG=v1 sh tests/hello_test.sh``` | Executes smoke test that builds and asserts output.                         |
| **Debug shell**        | ```docker run --rm -it --entrypoint /bin/sh thaile/hello-world:v1```              | Starts an interactive shell inside the container for debugging.             |