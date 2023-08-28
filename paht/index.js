const path = require("node:path");
//barra separadora segun el sistema operativo
console.log(path.sep, "muestra la barra que utiliza nuestra pc");

console.log("------------------------------------------------------------");
//unir rutas con path.join
const filePath = path.join("./content", "subfolder", "test.text"); // -> unir rutas
console.log(filePath, "pega diferentes rutas");

console.log("------------------------------------------------------------");
//te muestra el nombre del archico o mas simple busca un archivo dentro de un archivo
const base = path.basename("/esta/es/una/ruta.text");
console.log(base, "muestra el archivo y su extencion");

console.log("------------------------------------------------------------");

// te devuelve una extencion
const extencion = path.extname("hola.txt");
console.log(extencion, "muestra la extencion del archivo");
