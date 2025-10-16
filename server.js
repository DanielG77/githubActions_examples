const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function saludar(nombre) {
    return `Hola ${nombre}`;
}

// Código corregido
function funcionSinError() {
    const variableDefinida = "esto está correcto";
    if (variableDefinida === "valor") {
        console.log("igual");
    }
}

// Usamos la variable para evitar warning
const x = 1;
console.log(saludar("Mundo"), x);

module.exports = { server, saludar, funcionSinError };
