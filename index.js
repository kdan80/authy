const http = require("http");
const app = require("./app");

// TODO: Use https.createServer for production
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    //console.log(`Server running on port ${JWT_AUTH_PORT}...`);
    process.stdout.write(`Server running on port ${process.env.PORT}...\n`);
})