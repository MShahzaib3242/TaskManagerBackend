const { createClient } = require("redis");

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
  },
});

redisClient.on("error", (err) => {
  console.error("Redis Error: ", err);
});

// (async () => {
//   await redisClient.connect();
//   console.log("Redis Connected");
// })();

module.exports = redisClient;
