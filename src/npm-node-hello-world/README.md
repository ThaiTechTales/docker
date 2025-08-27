# ⚙️ Makefile Commands (npm-node-hello-world)

## Usage Guide

| Action                | Make command        | Example(s)                                                | What it does |
|-----------------------|---------------------|-----------------------------------------------------------|--------------|
| Install deps          | `make install`      | `make install`                                            | Runs `npm install` locally. |
| Dev server            | `make dev`          | `make dev`                                                | Starts nodemon for local development with auto reload. |
| Build image           | `make build`        | `make build`                                              | Builds the Docker image using buildx and loads it into the local daemon. |
| Build image (plain)   | `make build-plain`  | `make build-plain`                                        | Builds the image using classic `docker build`. |
| Rebuild no cache      | `make rebuild-no-cache` | `make rebuild-no-cache`                               | Forces a clean build without cache using buildx. |
| Run foreground        | `make run`          | `make run`                                                | Runs the container in the foreground. Press Ctrl+C to stop. |
| Run detached          | `make run-detached` | `make run-detached`                                       | Runs the container in the background and prints the local URL. |
| Follow logs           | `make logs`         | `make logs`                                               | Streams logs from the running container. Press Ctrl+C to stop tailing. |
| Stop and remove       | `make stop`         | `make stop`                                               | Stops and removes the container if it exists. Safe to run repeatedly. |
| Restart detached      | `make restart`      | `make restart`                                            | Stops any existing container then starts a fresh one in the background. |
| Shell in image        | `make shell`        | `make shell`                                              | Opens an interactive shell inside the image for debugging. |
| Curl root endpoint    | `make curl-root`    | `make curl-root`                                          | Calls `GET /` on the running container via `localhost:HOST_PORT`. Uses `jq` if available. |
| Curl health endpoint  | `make curl-health`  | `make curl-health`                                        | Calls `GET /health` on the running container. Uses `jq` if available. |
| Show running          | `make ps`           | `make ps`                                                 | Lists running containers filtered by the configured name. |
| Inspect container     | `make inspect`      | `make inspect`                                            | Prints full container configuration. |
| Prune images          | `make clean`        | `make clean`                                              | Removes dangling images and build cache. |
| Remove built image    | `make clean-all`    | `make clean-all`                                          | Removes the tagged image and prunes dangling layers. |
| Print vars            | `make print-vars`   | `make print-vars`                                         | Shows resolved values for image, tag and build context for debugging. |

### Variable overrides

Override variables inline:

- Change tag: `make build TAG=v2`
- Change host port: `make run-detached HOST_PORT=5000`
- Change image name: `make build IMAGE=thaile/custom-app`

**Defaults in the Makefile**

- `IMAGE=thaile/npm-node-hello-world`
- `TAG=v1`
- `NAME=npm-node-hello-world`
- `HOST_PORT=8080`
- `CONTAINER_PORT=3000`
- `BUILD_CONTEXT=.`

### Typical flow

```bash
make build
make run-detached
make curl-health
make curl-root
make logs
make stop
```

## 🌐 Viewing the app in browser

**Open:** <http://localhost:8080>

### Why `8080` and not `3000`?

Node app listens **inside the container** on port **3000**, but Docker maps a **host port** to that container port.

| Where            | Port | Notes                                 |
|------------------|------|---------------------------------------|
| Inside container | 3000 | App listens here                      |
| Locally          | 8080 | Mapped to the container with `-p 8080:3000` |

Visit **<http://localhost:8080>** in browser.

### Quick checks

Open a second terminal if ran `make run` in the first one:

```bash
# Root endpoint
curl http://localhost:8080/

# Health endpoint
curl http://localhost:8080/health

# Verify port mapping
docker ps --filter "name=npm-node-hello-world" --format "table {{.Names}}\t{{.Ports}}"
# Expect: 0.0.0.0:8080->3000/tcp
