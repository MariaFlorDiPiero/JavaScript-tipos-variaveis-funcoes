// declaração de função

function minhaFuncao(param){
     // bloco de codigo
}

 minhaFuncao("param")

// expressão de função (não tem nome)

const soma = function(num1, num2){return num1 + num2}
console.log(soma(1, 1))

// diferença principal: HOISTING
// Funções e Var são "listadas" primeiro no código, no topo do arquivo.  

console.log(apresentar())

function apresentar (){
    return "Olá";
}

console.log(soma2(1, 1))
const soma2 = function(num1, num2){return num1 + num2}

