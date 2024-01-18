# Stage 1: Build the React application
FROM node:latest as build

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and yarn.lock to the Docker container
COPY package.json yarn.lock ./

# Install dependencies in the Docker container
RUN yarn install

# Copy the rest of your app's source code from your host to your Docker container
COPY . .

# Build the React application
RUN yarn build

# Stage 2: Serve the application using a lightweight Node image
FROM node:alpine

# Install serve to serve the static files
RUN yarn global add serve

# Set the working directory in the Docker container
WORKDIR /app

# Copy the built application from the build stage to the current stage
COPY --from=build /app/dist /app

# Expose the port the app runs on
EXPOSE 80

# Command to run the application
CMD ["serve", "-s", ".", "-l", "80"]
