const http = require("node:http"); //procolo http
const {find} = require('./aplicacionServer')

const server = http.createServer((req, res) => {
  console.log("request receved"); //no se ve en 
  res.end("hola mundo");
});

server.listen(0,()=>{ // puerto 0 significa buscar un puerto libre
    console.log(`server listening en port http://localhost:${server.address().port} `) //podemos hacer eso 
})
