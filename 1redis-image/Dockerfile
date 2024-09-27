# use an existing image as a base
FROM alpine
# alpine is the base os

# Download and install the dependencies
RUN apk add --update redis
# apk is the package manager
# we asked it to install redis

# Tell the image what to do when it starts as a container
CMD ["redis-server"]
# this is the commad we want to run on run
