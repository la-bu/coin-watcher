# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the remaining project files to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Set the environment variable for the app port
ENV PORT 3000

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]