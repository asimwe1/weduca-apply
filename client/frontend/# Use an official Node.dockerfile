# Use an official Node.js image
FROM node:18

WORKDIR /app

# Copy your frontend code
COPY client/frontend ./client/frontend

# Install dependencies and build
RUN cd client/frontend && npm install && npm run build

# ...rest of your Dockerfile...