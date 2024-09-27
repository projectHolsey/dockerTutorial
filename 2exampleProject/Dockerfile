
# doesn't include npm, so we can install a different image
# FROM alpine
# Can find different images at hub.docker.com

# node:14-alpine will come with the minimal amount of addons for having node
FROM node:22-alpine

# no files in current dir are available by default. You need to add them

# WORKDIR to specify the container's working directory
WORKDIR /usr/app
# if the folder doesn't exist, it'll be created

# where (and what) to copy from files on your local machine to on the container
COPY ./package.json ./
# in this case, we copy them to the working directory as specified

RUN npm install

# now we can copy over the rest of the files, because we know the package.json
# has or hasn't been changed and we will / won't need to rerun npm install
COPY ./ ./
# stops us having to re-run npm install on any file change

CMD ["npm", "start"]
