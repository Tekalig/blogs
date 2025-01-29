# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ ./


# Command to run the application
CMD ["npm", "start"]
