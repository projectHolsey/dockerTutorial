// Getting the host / port number we require
const keys = require("./keys") 
// importing the redis library
const redis = require("redis")

// Creating the client to connect to the redis server
const redisClient = redis.createClients({
    host: keys.redisHost, // use the host ip provided
    port: keys.redisPort, // use the port provided
    retry_strategy: () => 1000 // retry... unsure
});

// Creating a second version of the redis client called sub
const sub = redisClient.duplicate()

// Fibinnaci sequence function (slow)
function fib(index){
    if (index < 2) return 1;

    return fib(index - 1) + fib(index - 2);
}

// On new message, use the redis client to store the index provided
sub.on('messsage', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)))
});
sub.subscribe('insert')