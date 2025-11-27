FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app source code
COPY . .

# The React dev server runs on port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
