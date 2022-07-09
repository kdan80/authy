const http = require("http");
const app = require("./app");

// TODO: Use https.createServer for production
const server = http.createServer(app);

const { AUTHY_PORT } = process.env || 4000;

server.listen(AUTHY_PORT, () => {
    //console.log(`Server running on port ${JWT_AUTH_PORT}...`);
    process.stdout.write(`Server running on port ${AUTHY_PORT}...\n`);
})