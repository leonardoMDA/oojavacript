const dado = require("./cliente.json");

console.log (dado);
console.log(typeof dado);

const clienteEmString = JSON.stringify (dado)

console.log(clienteEmString)
console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString)

console.log(objetoCliente);