import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text1, text2]) => {
  console.log("Texto 1:", text1);
  console.log("Texto 2:", text2);
});

console.log("Leyendo primer archivo...");
// const text1 = await fs.readFile("./archivo.txt", "utf-8");

// console.log("Primer texto:", text1);

console.log("mientras lee el archivo 1...");

console.log("Leyendo segundo archivo...");

// const text2 = await fs.readFile("./archivo2.txt", "utf-8");
// console.log("Segundo texto:", text2);

console.log("mientras lee el archivo 2...");
