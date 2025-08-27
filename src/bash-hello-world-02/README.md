# ⚙️ Makefile Commands (Dockerised Bash)

## Usage Guide

| Action             | Make Command    | Example(s)                                      | Explanation                                                                                  |
|--------------------|-----------------|-------------------------------------------------|----------------------------------------------------------------------------------------------|
| Build image        | `make build`    | `make build`                                    | Builds the Docker image from the `Dockerfile` in the current directory.                      |
| Stop container     | `make stop`     | `make stop`                                     | Stops and removes any existing container with the same name to avoid conflicts.              |
| Run (default)      | `make run`      | `make run`                                      | Runs the container, auto removes it after exit. Depends on `stop`.                           |
| Run with a name    | `make run-name` | `make run-name WHO=Bob`                         | Passes a single value via the **`WHO`** variable to your script. Variable name is case-sensitive. |
| Run with free args | `make run-args` | `make run-args bob` <br> `make run-args "Bob Smith"` | Passes arbitrary arguments captured as `ARGS`. Quote when spaces are present.                 |
| Run tests          | `make test`     | `make test`                                     | Executes the smoke test that builds the image and asserts expected output.                   |
