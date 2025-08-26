# Dockerfile
FROM alpine:3.20

# Create non-root user and working dir
RUN adduser -D appuser
WORKDIR /app

# Copy only what you need
COPY scripts/ ./scripts/
# Optionally copy tests if you want to run them inside the image
# COPY tests/ ./tests/

# Permissions for execution
RUN chmod +x /app/scripts/hello-world.sh

USER appuser

# Default command
CMD ["./scripts/hello-world.sh"]
