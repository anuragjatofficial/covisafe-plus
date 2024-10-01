# Stage 1: Build React app using Node.js environment
FROM node:18-alpine as build
WORKDIR /app

# Install dependencies
COPY ./package.json ./package-lock.json ./
RUN npm install

# Copy the rest of the application code and build it
COPY . ./
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the React build from the previous step to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration to handle the React app (optional)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000 (to match your request)
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]