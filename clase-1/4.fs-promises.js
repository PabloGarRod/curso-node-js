// Solo en modulos nativos sin promesas nativas
// const { promisify } = require("node:util");
// const readFile = promisify(fs.readFile);

const fs = require("node:fs/promises");

console.log("Leyendo primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((text) => console.log(text));

console.log("mientras lee el archivo 1...");

console.log("Leyendo segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8").then((text) => console.log(text));

console.log("mientras lee el archivo 2...");
