// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';

let tentativas = 5;

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

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
    if(tentativas > 0) {
        let chute = parseInt(document.querySelector('input').value);
        tentativas--;
        let palavraTentativa = tentativas === 1 ? `tentativa` : `tentativas`;
        if(chute === numeroSecreto) {
            exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        }else {
            if(tentativas === 0){
                exibirTextoNaTela('h1', `Você perdeu!`);
                exibirTextoNaTela('p', `Já era! O número secreto era ` +  numeroSecreto)
            } else if(chute < numeroSecreto){
                exibirTextoNaTela('h1', `Você errou! O numero é maior, Você tem mais ${tentativas} ${palavraTentativa}`)
            } else {
                exibirTextoNaTela('h1', `Você errou! O numero é menor, Você tem mais ${tentativas} ${palavraTentativa}`)
            }
        }
    }
}



   

//<h1>Jogo de adivinhação</h1>
//<p>Escolha um número entre 1 e 100</p>
