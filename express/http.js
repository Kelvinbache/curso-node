const http = require("node:http");
const fs = require("node:fs");

const port = 1234;

const precessResquest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain"); //cabezera de la peticion
    res.end("hola mundo");
  } else if (req.url === "/imagen") {
    fs.readFile("./images.png", (err, data) => {
      //viendo si el documento existe
      if (err) {
        res.statusCode === 500;
        res.end("tenemo un error 500");
      } else {
        res.setHeader("content-type", "image/png"); //los encabeazados transforman, los datos binarios en lenguaje humano
        res.end(data); //pasando el dato
      }
    });
  }
};

const server = http.createServer(precessResquest);

server.listen(port, () => {
  console.log(`server create in port: http://localhost:${port}`);
});
