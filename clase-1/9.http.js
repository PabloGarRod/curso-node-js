const http = require("node:http");
const { findAvailablePort } = require("./10.free-port");

const desiredPort = parseInt(process.env.PORT) ?? 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received`);
  res.end("Hola Mundo!");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(
      `Server listening on port http://localhost:${server.address().port}`
    );
  });
});
