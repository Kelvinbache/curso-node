import{ statSync, statfsSync }from 'node:fs';

const stats = statSync('./hola.txt');
console.log(
    stats.isDirectory(),
    stats.isFile(),
    stats.isSymbolicLink(),
    stats.size,
)