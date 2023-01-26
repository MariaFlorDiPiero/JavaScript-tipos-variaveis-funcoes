const nome = "Ju";
const idade = 2021 - 1981;
const cidadeDeNascimento = "São Paulo";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)

const nome2 = "Leo";
const idade3 = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

