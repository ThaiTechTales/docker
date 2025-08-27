IMAGE := thaile/hello-world
TAG   := v1
NAME  := hello-world

# Paths
TEST   := tests/hello-world-test.sh

WHO ?= Thai

# Capture any extra words after the target as ARGS (evaluate at run time)
ARGS = $(filter-out $@,$(MAKECMDGOALS))

# Dummy rule so extra words do not error
%:
	@:

# .PHONY makes sure your make targets always run as tasks, instead of being mistaken for files.
# Don’t look for a file with this name. Treat this purely as a command/task, and always run it.”
.PHONY: build run run-arg sh stop clean test

build:
	@docker build -t $(IMAGE):$(TAG) .

stop:
	-@docker stop $(NAME) >/dev/null 2>&1 || true # Stop the container if it's running
	-@docker rm $(NAME)   >/dev/null 2>&1 || true # Remove the container if it exists

# : stop is a dependency and will run before the following targets
run: stop
	@docker run --rm --name $(NAME) $(IMAGE):$(TAG)

# pass a single name via WHO
# e.g. make run-name Bob
run-name: stop
	@docker run --rm --name $(NAME) $(IMAGE):$(TAG) $(WHO)

# pass arbitrary arguments after the target
# e.g. make run-args Bob   |  make run-args "Bob Smith 123"
run-args: stop
	@docker run --rm --name $(NAME) $(IMAGE):$(TAG) $(if $(strip $(ARGS)),$(ARGS),$(WHO))

test:
	@chmod +x $(TEST)
	@IMAGE=$(IMAGE) TAG=$(TAG) sh $(TEST)
