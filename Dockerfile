# Use a lightweight Node image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies (only runs if package.json exists)
RUN npm install

# Copy the rest of the project
COPY . .

# Next.js dev server runs on port 3000
EXPOSE 3000

# Default command: start the dev server
CMD ["npm", "run", "dev"]