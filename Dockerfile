# Step 1: Build the Vite app
FROM node:16 AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code
COPY . ./

# Build the Vite app
RUN npm run build

# Step 2: Serve the Vite app with NGINX
FROM nginx:alpine

# Copy the build output from the previous stage to the NGINX directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
