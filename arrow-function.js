function apresentar(nome){
    return `meu nome é ${nome}`;
}

// Arrow function, não é nomeada e sempre vem com const.
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10 ){
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// operador maior ou igual que 
// >=

// arrow function tem algumas vantagens com relações a objetos.
// Hoisting: arrow function se comporta como expressão