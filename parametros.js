//parâmetros de função

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(2, 2))

// parâmetro x argumento

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Juliana", 40))

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma (3, 3)))

// função sem retorno e sem parâmetro

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

// função sem retorno, com parâmetro

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

// função com retorno, sem parâmetro

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// função com return e mais de um parâmetro

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90

