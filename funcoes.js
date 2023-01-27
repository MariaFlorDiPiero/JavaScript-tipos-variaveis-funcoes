
//DECLARAÇÃO DE FUNÇÃO

// 1º Declara a função

                      //string
function imprimeTexto(texto) {
    console.log(texto)
}

//2º Executa a função (1 ou + vezes)

imprimeTexto(soma())
imprimeTexto("outro texto")

// três formas de escrever funções

function soma(){
    // outros códigos
    // linha do return é a última antes de fechar o bloco
    return 2 + 2;

}

console.log(soma ())