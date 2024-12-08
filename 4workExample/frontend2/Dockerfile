# Everything under this builder is going to be reffered to as the builder phase
FROM node:lts-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . . 
RUN npm run build

# this is the second block
FROM nginx 
# We want to copy content from the builder phase.
# We're copying the /app/build directory
# We're copying it to /usr/share/nginx/html as this is the directory specified by nginx x to host the statis html file
COPY --from=builder /app/build /usr/share/nginx/html

# Note - don't need to specify the nginx x run command as when we start the container, it'll auto load nginx x and find the correct files
