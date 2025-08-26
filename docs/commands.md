# 🔧 Essential Docker Commands

## ✅ Quick Commands
```bash
docker ps -a                               # list all containers
docker run -d -p 5000:8080 <image>         # run image as a container with port mapping
docker stop <id>                           # stop a container
docker rm <id>                             # remove a container
docker images                              # list all images
docker build -t <name> .                   # build an image from Dockerfile
docker logs <id>                           # view logs from a container
docker exec -it <id> sh                    # open shell inside a running container
docker volume create <name>                # create a volume
docker compose up -d                       # run multiple containers with docker-compose
```

## 1. Check Docker installation

| Command Template        | Example                | Explanation |
|--------------------------|------------------------|-------------|
| `docker --version`      | `docker --version`     | Check Docker version installed |
| `docker info`           | `docker info`          | Display detailed system-wide Docker info |

---

## 2. Working with Images

| Command Template                    | Example                                  | Explanation |
|-------------------------------------|------------------------------------------|-------------|
| `docker images`                     | `docker images`                          | List all images stored locally |
| `docker pull <image>:<tag>`         | `docker pull nginx:latest`               | Download an image (default tag = latest) |
| `docker rmi <image_id>`             | `docker rmi 1a2b3c4d5e6f`                | Remove an image from local system |
| `docker build -t <name>:<tag> .`    | `docker build -t thaile/myapp:1.0 .`     | Build an image from a Dockerfile in current directory |
| `docker push <name>:<tag>`          | `docker push thaile/myapp:1.0`           | Upload image to a registry (Docker Hub, AWS ECR, etc.) |

---

## 3. Running Containers

| Command Template                          | Example                                         | Explanation |
|-------------------------------------------|-------------------------------------------------|-------------|
| `docker run <image>`                      | `docker run nginx`                              | Run container in the foreground |
| `docker run -d <image>`                   | `docker run -d nginx`                           | Run container in background (detached) |
| `docker run -it <image> /bin/bash`        | `docker run -it ubuntu /bin/bash`               | Run container with interactive shell access |
| `docker run -p <host>:<container> <image>`| `docker run -p 5000:8080 nginx`                 | Map host port 5000 → container port 8080 |
| `docker run -v <volume>:<path> <image>`   | `docker run -v myvolume:/data nginx`            | Attach a volume for persistent storage |

---

## 4. Managing Containers

| Command Template         | Example                         | Explanation |
|--------------------------|---------------------------------|-------------|
| `docker ps`              | `docker ps`                     | List running containers |
| `docker ps -a`           | `docker ps -a`                  | List all containers (including stopped) |
| `docker stop <id>`       | `docker stop 1a2b3c4d5e6f`      | Stop a running container |
| `docker start <id>`      | `docker start 1a2b3c4d5e6f`     | Start a stopped container |
| `docker restart <id>`    | `docker restart 1a2b3c4d5e6f`   | Restart a container |
| `docker rm <id>`         | `docker rm 1a2b3c4d5e6f`        | Remove a container |
| `docker logs <id>`       | `docker logs 1a2b3c4d5e6f`      | View container logs |
| `docker exec -it <id> sh`| `docker exec -it 1a2b3c4d5e6f sh`| Open shell inside a running container |

---

## 5. Volumes (persistent storage)

| Command Template                             | Example                                            | Explanation |
|----------------------------------------------|----------------------------------------------------|-------------|
| `docker volume create <name>`                | `docker volume create myvolume`                    | Create a named volume |
| `docker volume ls`                           | `docker volume ls`                                 | List all volumes |
| `docker run -v <volume>:<path> <image>`      | `docker run -v myvolume:/app/data mysql`           | Run container with a mounted volume |
| `docker volume rm <name>`                    | `docker volume rm myvolume`                        | Delete a volume |

---

## 6. Docker Compose (multi-container apps)

| Command Template             | Example                   | Explanation |
|------------------------------|---------------------------|-------------|
| `docker compose up`          | `docker compose up`       | Start all services defined in `docker-compose.yaml` |
| `docker compose down`        | `docker compose down`     | Stop and remove all containers defined in `docker-compose.yaml` |
| `docker compose ps`          | `docker compose ps`       | Check running services from docker-compose |
| `docker compose up -d`       | `docker compose up -d`    | Run all services in detached mode |

## 📖 Common Docker Flags & Arguments

| Flag / Argument       | Full Form / Meaning                         | Example Usage                        | Explanation |
|-----------------------|---------------------------------------------|--------------------------------------|-------------|
| `-d`                 | **Detached mode**                          | `docker run -d nginx`                | Runs container in background. Without this, it runs in foreground and blocks the terminal. |
| `-a`                 | **All**                                    | `docker ps -a`                       | Shows all containers (running + stopped). Without `-a`, only running containers are shown. |
| `-t` (in build)      | **Tag**                                    | `docker build -t thaile/myapp:1.0 .` | Tags an image with a name and version (`name:tag`). |
| `-t` (in run)        | **TTY (allocate terminal)**                 | `docker run -it ubuntu /bin/bash`    | Allocates a terminal session for interaction inside the container. Usually paired with `-i`. |
| `-i`                 | **Interactive**                            | `docker run -it ubuntu /bin/bash`    | Keeps STDIN open, even if not attached — needed for interactive shells. |
| `-p`                 | **Port mapping**                           | `docker run -p 5000:8080 nginx`      | Maps host port → container port (`host:container`). Here, host port 5000 maps to container port 8080. |
| `-v`                 | **Volume mount**                           | `docker run -v myvol:/data mysql`    | Mounts a volume for persistent data. First part = volume name, second = path inside container. |
| `--name`             | **Assign a name**                          | `docker run --name webserver nginx`  | Gives container a human-readable name instead of random ID. |
| `--rm`               | **Remove on exit**                         | `docker run --rm ubuntu echo "hi"`   | Automatically removes the container when it stops. Useful for short-lived containers. |
| `-f`                 | **Force**                                  | `docker rmi -f <image_id>`           | Forces removal of images or containers (even if in use). |
| `--build-arg`        | **Build argument**                         | `docker build --build-arg NODE_ENV=dev .` | Pass arguments into Dockerfile at build time. |
| `--env` or `-e`      | **Set environment variable**                | `docker run -e NODE_ENV=prod nginx`  | Injects environment variables into the container. |
| `--network`          | **Specify network**                        | `docker run --network=my-net nginx`  | Connects container to a user-defined Docker network. |
| `--restart`          | **Restart policy**                         | `docker run --restart=always nginx`  | Defines when container should auto-restart (always, on-failure, unless-stopped). |


---