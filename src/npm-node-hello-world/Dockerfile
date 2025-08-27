FROM node:20-alpine

# Create non-root user and working dir
# -D: create a user with no home directory
RUN adduser -D appuser
WORKDIR /app

# 1) Copy only what is required for npm install
# ./ = <app-root>/
COPY package*.json ./

# 2) Install dependencies
RUN npm ci --omit=dev

# 3) Copy application code
COPY src ./src

# Document the port the app listens on (informational)
EXPOSE 3000

# Basic healthcheck against the /health endpoint
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
    CMD wget -qO- http://localhost:3000/health || exit 1

# Drop root privileges to the built-in 'node' user for safety
USER node

# Default command
CMD ["node", "src/index.js"]