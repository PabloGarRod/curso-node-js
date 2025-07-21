const fs = require("node:fs");

// Sincrono

// console.log("Leyendo primer archivo...");
// const text = fs.readFileSync("./archivo.txt", "utf-8");
// console.log(text);

// console.log("Leyendo segundo archivo...");
// const text2 = fs.readFileSync("./archivo2.txt", "utf-8");

// console.log(text2);

// Asincrono

console.log("Leyendo primer archivo...");
const text1 = fs.readFileSync("./archivo.txt", "utf-8");

console.log("Texto1:", tex);

console.log("mientras lee el archivo 1...");

console.log("Leyendo segundo archivo...");
fs.readFileSync("./archivo2.txt", "utf-8", (err, text) => {
  console.log(text);
});

console.log("mientras lee el archivo 2...");
