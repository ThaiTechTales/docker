# Dockerfile
FROM alpine:3.20

# Create non-root user and working dir
# -D: create a user with no home directory
RUN adduser -D appuser
WORKDIR /app

# Copy only what is required
COPY scripts/ ./scripts/
# Optionally copy tests to run inside the image
# COPY tests/ ./tests/

# Permissions for execution
RUN chmod +x /app/scripts/hello-world.sh

# Switch to non-root user
USER appuser

# Set the script as the executable, and a default argument
ENTRYPOINT ["./scripts/hello-world.sh"]

# Default command
CMD ["Thai"]
