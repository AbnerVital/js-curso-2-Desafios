// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do Desafio';

// function exibirMensagemNoConsole(){
//     console.log('O botão foi clicado')
// }

// function exibirAlerta() {
//     alert('Eu amo Js')
// }

// function cidadeDoBrasil (){
//     cidade = prompt ('Em qual cidade você nasceu? ')
//     alert(`Estive em ${cidade} e lembrei de você`)
// }

// function somandoDoisNumeros() {
//     let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
//     let segundoNumero = parseInt(prompt('Digite o segundo número'));
//     let resultado = primeiroNumero + segundoNumero;
//     alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
// }


// 1. Criar uma função que exibe "Olá, mundo!" no console.
function saudacao () {  
    console.log('Olá, mundo! ');
}

saudacao();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacaoComNome(nome) {
    console.log(`Olá, ${nome}!`);
}
saudacaoComNome("Abner");

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);

//   4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function CalcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let resultadoDaMedia = CalcularMedia(10, 7, 6);
console.log(resultadoDaMedia.toFixed(1));

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function verificadorDoMaiorNumero(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

let resultadoDoMaiorNumero = verificadorDoMaiorNumero(20,10);
console.log(resultadoDoMaiorNumero);

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function multiplicador(number) {
    return number * number
}

let resultadoMultiplicacao = multiplicador(5);
console.log(resultadoMultiplicacao);