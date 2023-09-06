const net = require("node:net");

function find(adressPort) {
  return new Promise((resolve, reject) => {
    const serve = net.createServer();

    serve.listen(adressPort, () => {
      const port = serve.address().port;
      serve.close(() => {
        resolve(port);
      });
    });

    serve.on("error", (err) => {
      if (err.code === "EADORINUSE") {
        find(0).then((port) => resolve(port));
      } else {
        reject(err);
      }
    });
  });
}

