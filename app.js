/*let titulo  =  document.querySelector('h1');
titulo.innerHTML   =  'Jogo de Adivinhação';

let subTitulo  =  document.querySelector('p')
subTitulo.innerHTML  =  'Escolha um número entre 0 a 100';*/

exibirTextoNaTela('h1', 'Jogo de Adivinhação');
exibirTextoNaTela('p', "Escolha um número entre 0 a 100")

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1;
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    console.log('Apertou o botão');
}

