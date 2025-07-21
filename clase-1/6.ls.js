const fs = require("node:fs");

fs.readdir(".", (err, files) => {
  if (err) {
    console.log("Ha habido un error:", err.message);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});
