FROM node:6.9-alpine

# Install useful commands for testing service
RUN apk --no-cache add curl

# Set service location
WORKDIR /home/test-sails-swagger

# Set registry path
COPY .npmrc ./

# Install node modules
COPY package.json ./
RUN npm install

# Move service into container
COPY ./ ./

# Sails app port
EXPOSE 1337

# Build and start the app
CMD ["./node_modules/sails/bin/sails.js", "lift"]
