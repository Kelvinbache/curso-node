import { readFile } from "node:fs/promises";

// readFile("./hola.txt", "utf-8", (err, text) => {
//   console.log(text); //estamos usando un callbal para usar sincronia
// });

const text = await readFile('./hola.txt','utf-8')
console.log("mostrando texto con await",text)




console.log("estoy esperando el archivo");
