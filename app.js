let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 a ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você Descobriu o número!! com ${tentativas} ${palavraTentativa}!!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'número secreto menor que o chute');
        }
        else {
            exibirTextoNaTela('p', 'número secreto maior que o chute');
        }
        tentativas++;
    }
    limparCampo()


}

function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // quero que ele esteja desabilitado
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt((Math.random() * numeroLimite + 1));
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []; //limpar a lista toda vez que a quantidade de elementos da lista ficar cheia 
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

