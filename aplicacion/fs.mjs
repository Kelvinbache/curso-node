import { Stats } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

// readdir nos muestra los directorios que tenemos

const folder = process.argv[2] ?? "."; // estamos pasando un algumento por la consola para hacer, el recorrido entre los archivos

async function ls(directorios) {
  let files;
  try {
    files = await readdir(directorios); // recorriendo los archivo que tenemos ahora
  } catch {
    // si tenmos un error al recorrer los archivos
    console.error("directorio no existe");
    process.exit(1); // salimos de la peticion
  }
  const filesPromeses = files.map(async (file) => { //el map esta haciendo en paralelo
    const filePath = path.join(directorios, file);
    let filesStar;
    try {
      filesStar = await stat(filePath); //retorna la informacion de los archivos
    } catch {
      console.error("tenemos un error leyendo los archivos");
    }

    const isDirectory = filesStar.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = filesStar.size.toString().padStart(20);
    const fileModified = filesStar.mtime.toLocaleString();

    return `${fileType}-${file.padEnd(20)}${fileSize}/${fileModified}`;
  });
  const filesInfo = await Promise.all(filesPromeses);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder); //pasando el directorio

// stat("./ejemplos/hola.txt")
//   .then((content) => {
//     console.log(content);
//   })

//   .catch((err) => {
//     console.error("el contenido no existe", err);
//   });
