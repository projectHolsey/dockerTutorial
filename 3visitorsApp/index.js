const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({
	host: 'redis-server', // Redis server will know what this is, not node, docker will know it
	port: 6379 // default port number for redis
});

client.set('visits', 0);

app.get("/", (req, res) => {
	client.get('visits', (err, visits) => {
		res.send("Number of visits is : " + visits);
		client.set("visits", parseInt(visits) + 1);
	});
});

app.listen(8081, () => {
	console.log("listening on port 8081");
});
