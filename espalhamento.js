const cliente = {
    nome :"João",
    idade: 24,
    email:["(41) 9999-0000", "(41) 9988-0000"]
};

cliente.enderecos = [
{
    rua: "R. joseph Climber",
    numero : 1337,
    apartamento : true,
    complemento : "Ap 934"
},
];

function ligaParaCliente (telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone);

const encomenda ={
    destinatario : cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);