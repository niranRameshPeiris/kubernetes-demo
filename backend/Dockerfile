FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy application source code
COPY . .

# Install dependencies
RUN npm install

# Define the command to run the application
CMD ["npm", "start"]