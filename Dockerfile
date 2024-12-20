# Use the official Node.js image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port your Node.js server runs on
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "start"]