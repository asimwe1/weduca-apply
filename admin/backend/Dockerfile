# Use Node.js LTS version
FROM node:18-alpine

# Install necessary build tools
RUN apk add --no-cache python3 make g++ && apk upgrade --no-cache

# Create app directory and set permissionsX
WORKDIR /app
RUN chown -R node:node /app

# Switch to non-root user
USER node

# Copy package files with correct ownership
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm ci --production

# Copy app source with correct ownership
COPY --chown=node:node . .

# Go back to backend directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/api/health || exit 1

# Expose port
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
