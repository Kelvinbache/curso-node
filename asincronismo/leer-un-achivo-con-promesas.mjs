//import { readFile } from "node:fs/promises";

//en los modulos que no tengan promesas nativas 
const fs = require("node:fs");
const { promisify } = require("node:util"); // mas facil utilizar una version mas moderna

const LeyendoPromesa = promisify(fs.readFile); // cuando trabajemos una version sin promesas

LeyendoPromesa("./hola.txt", "utf-8").then((text) => {
  console.log(text);
});

console.clear();
