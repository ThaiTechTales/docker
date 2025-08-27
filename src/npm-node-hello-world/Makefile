# Makefile for npm-node-hello-world

# ---------- Configurable variables (avoid inline comments here) ----------
IMAGE ?= thaile/npm-node-hello-world
TAG ?= v1
NAME ?= npm-node-hello-world
HOST_PORT ?= 8080
CONTAINER_PORT ?= 3000
BUILD_CONTEXT ?= .

# ---------- Normalised (trimmed) vars ----------
IMG := $(strip $(IMAGE))
VER := $(strip $(TAG))
CTX := $(strip $(BUILD_CONTEXT))

# Build engine (override with: make build DOCKER_BUILDX="docker build")
DOCKER_BUILDX ?= docker buildx build

# Common docker run command (foreground)
DOCKER_RUN = docker run --rm --name $(NAME) -p $(HOST_PORT):$(CONTAINER_PORT) $(IMG):$(VER)

# ---------- Phony targets ----------
.PHONY: help install dev build build-plain rebuild-no-cache run run-detached logs stop restart shell curl-root curl-health ps inspect clean clean-all print-vars

help: ## Show this help
	@echo "Targets:"
	@awk 'BEGIN {FS":.*##"} /^[a-zA-Z0-9_\/-]+:.*##/ {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install node dependencies with npm
	@npm install

dev: ## Start dev server with nodemon (auto reload)
	@npm run dev

build: ## Build docker image (buildx, load into local docker)
	@echo ">> building $(IMG):$(VER) from $(CTX)"
	@$(DOCKER_BUILDX) --load -t $(IMG):$(VER) $(CTX)

build-plain: ## Build with classic 'docker build' (fallback)
	@echo ">> building (plain) $(IMG):$(VER) from $(CTX)"
	@docker build -t $(IMG):$(VER) $(CTX)

rebuild-no-cache: ## Build without cache (buildx)
	@echo ">> rebuilding (no cache) $(IMG):$(VER) from $(CTX)"
	@$(DOCKER_BUILDX) --no-cache --load -t $(IMG):$(VER) $(CTX)

run: stop ## Run container in foreground (Ctrl+C to stop)
	@$(DOCKER_RUN)

run-detached: stop ## Run container in background
	@docker run -d --name $(NAME) -p $(HOST_PORT):$(CONTAINER_PORT) $(IMG):$(VER)
	@echo "Container started: $(NAME) -> http://localhost:$(HOST_PORT)"

logs: ## Follow container logs
	@docker logs -f $(NAME)

stop: ## Stop and remove container if present
	-@docker stop $(NAME) >/dev/null 2>&1 || true
	-@docker rm $(NAME)   >/dev/null 2>&1 || true

restart: ## Restart container (detached)
	@$(MAKE) run-detached

shell: ## Open a shell in the image
	@docker run --rm -it --entrypoint /bin/sh $(IMG):$(VER)

curl-root: ## Curl the root endpoint
	@curl -sS http://localhost:$(HOST_PORT) | jq . 2>/dev/null || curl -sS http://localhost:$(HOST_PORT)

curl-health: ## Curl the health endpoint
	@curl -sS http://localhost:$(HOST_PORT)/health | jq . 2>/dev/null || curl -sS http://localhost:$(HOST_PORT)/health

ps: ## Show running containers matching NAME
	@docker ps --filter "name=$(NAME)"

inspect: ## Inspect container config
	@docker inspect $(NAME)

clean: ## Prune dangling images and build cache
	@docker image prune -f

clean-all: ## Remove the built image and prune
	-@docker rmi -f $(IMG):$(VER) 2>/dev/null || true
	@docker image prune -f

print-vars: ## Debug: show resolved vars
	@echo "IMG='$(IMG)'" ; echo "VER='$(VER)'" ; echo "CTX='$(CTX)'"
