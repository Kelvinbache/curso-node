import { platform, cpus, uptime, homedir } from "node:os"; // mas facil de importa

console.log("informacion del sistema operativo", platform());
console.log("version del sistema operativo", cpus());
console.log("tiempo que esta encendidad la pc", uptime() / 60 / 60);
console.log("direcion de archivos:", homedir());
