/*let titulo  =  document.querySelector('h1');
titulo.innerHTML   =  'Jogo de Adivinhação';

let subTitulo  =  document.querySelector('p')
subTitulo.innerHTML  =  'Escolha um número entre 0 a 100';*/

exibirTextoNaTela('h1', 'Jogo de Adivinhação');
exibirTextoNaTela('p', "Escolha um número entre 0 a 100")

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    console.log('Apertou o botão');
}

