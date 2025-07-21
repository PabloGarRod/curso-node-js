const express = require("express");
const dittoJSON = require("./pokemon/ditto.json");

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();
//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });
//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.createdAt = Date();
//     req.body = data;
//     next();
//   });
// });

app.disable("x-powered-by");

const PORT = process.env.PORT ?? 1234;

app.get("/", (req, res) => {
  res.send("<h1>Mi página</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
  return res.json(dittoJSON);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
