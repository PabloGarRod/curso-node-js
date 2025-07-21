import { readFile } from "node:fs/promises";

console.log("Leyendo primer archivo...");
const text1 = await readFile("./archivo.txt", "utf-8");

console.log("Primer texto:", text1);

console.log("mientras lee el archivo 1...");

console.log("Leyendo segundo archivo...");

const text2 = await readFile("./archivo2.txt", "utf-8");
console.log("Segundo texto:", text2);

console.log("mientras lee el archivo 2...");
