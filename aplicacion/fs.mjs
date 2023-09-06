import { Stats } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import pc from "picocolors"; //dependencia de producion 

// readdir nos muestra los directorios que tenemos

const folder = process.argv[2] ?? "."; // estamos pasando un algumento por la consola para hacer, el recorrido entre los archivos

async function ls(directorios) {
  let files;
  try {
    files = await readdir(directorios); // recorriendo los archivo que tenemos ahora
  } catch {
    // si tenmos un error al recorrer los archivos
    console.error(pc.red(" X directorio no existe"));
    process.exit(1); // salimos de la peticion
  }
  const filesPromeses = files.map(async (file) => {
    /*
    // ver la forma de dependencia o sermantic version
    x,y,z la x seria la mayor se rompe la compatibilidad hacia atras
    x,y,z la y seria la menor se anade nuevas funciones 
    x,y,z la z seria patch es cuando arreglan bugs 
    
    
    */
    //el map esta haciendo en paralelo
    const filePath = path.join(directorios, file);
    let filesStar;
    try {
      filesStar = await stat(filePath); //retorna la informacion de los archivos
    } catch {
      console.error(pc.red("tenemos un error leyendo los archivos"));
    }

    const isDirectory = filesStar.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = filesStar.size.toString().padStart(20);
    const fileModified = filesStar.mtime.toLocaleString();

    return `${fileType}-${pc.blue(file.padEnd(20))}${fileSize}/${pc.bgGreen(fileModified)}`;
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
