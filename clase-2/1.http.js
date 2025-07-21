const http = require("node:http"); //protocolo http
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; Charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end(
      "<p>Bienvenido a mi página de desarrollo <strong>backend</strong></p>"
    );
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.end("<h1>Contacto</h1>");
  } else if (req.url === "/eren") {
    fs.readFile("./eren.png", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h1>Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(
    `Server listening on port http://localhost:${server.address().port}`
  );
});
