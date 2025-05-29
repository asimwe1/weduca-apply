# Use Node.js LTS version
FROM node:18-alpine

# Install necessary build tools
RUN apk add --no-cache python3 make g++

# Create app directory and set permissions
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

<<<<<<< HEAD
# Build frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Go back to backend directory
WORKDIR /app

=======
>>>>>>> d6de5d71966745acdd17eae120a7772b9d7d0750
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