"use strict";
const paises = [
    { nome: "Brasil", urlBandeira: "../public/img/semContorno/brazil.png", urlContorno: "../public/img/contorno/brazil.jpg" },
    { nome: "Alemanha", urlBandeira: "bandeiras/alemanha.png", urlContorno: "contornos/alemanha.png" },
    { nome: "Japão", urlBandeira: "bandeiras/japao.png", urlContorno: "contornos/japao.png" },
    // Adicione mais países conforme necessário
];
let pontuacao = 0;
let modoJogo = 'normal';
let modoJogar = 'sobrevivencia';
function iniciarJogo(modo, jogar) {
    pontuacao = 0;
    modoJogo = modo;
    modoJogar = jogar;
    document.getElementById('menu').classList.add('escondido');
    document.getElementById('jogo').classList.remove('escondido');
    document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao}`;
    carregarNovaBandeira();
}
function carregarNovaBandeira() {
    const paisAleatorio = paises[Math.floor(Math.random() * paises.length)];
    const containerBandeira = document.getElementById('container-bandeira');
    const containerOpcoes = document.getElementById('container-opcoes');
    containerBandeira.innerHTML = `<img src="${modoJogo === 'normal' ? paisAleatorio.urlBandeira : paisAleatorio.urlContorno}" alt="Bandeira">`;
    const opcoes = [paisAleatorio.nome];
    while (opcoes.length < 3) {
        const opcaoAleatoria = paises[Math.floor(Math.random() * paises.length)].nome;
        if (!opcoes.includes(opcaoAleatoria)) {
            opcoes.push(opcaoAleatoria);
        }
    }
    embaralharArray(opcoes);
    containerOpcoes.innerHTML = opcoes.map(opcao => `<button onclick="verificarResposta('${opcao}', '${paisAleatorio.nome}')">${opcao}</button>`).join('');
}
function verificarResposta(selecionado, correto) {
    if (selecionado === correto) {
        pontuacao++;
        document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao}`;
        carregarNovaBandeira();
    }
    else if (modoJogar === 'sobrevivencia') {
        document.getElementById('jogo').classList.add('escondido');
        document.getElementById('fim-de-jogo').classList.remove('escondido');
    }
    else {
        carregarNovaBandeira();
    }
}
function tentarNovamente() {
    document.getElementById('fim-de-jogo').classList.add('escondido');
    document.getElementById('jogo').classList.remove('escondido');
    pontuacao = 0;
    document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao}`;
    carregarNovaBandeira();
}
function retornarAoMenu() {
    document.getElementById('fim-de-jogo').classList.add('escondido');
    document.getElementById('menu').classList.remove('escondido');
}
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
