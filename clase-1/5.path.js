const path = require("node:path");

// Separacion segun OS
console.log(path.sep);

// Unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.js");
console.log(filePath);

//Conseguir nombre del fichero
const baseName = path.basename("content/folder/archivo.txt");
console.log(baseName);

const fileName = path.basename("content/folder/archivo.txt", ".txt");
console.log(fileName);

const extension = path.extname("sl.image.jpg");
console.log(extension);
