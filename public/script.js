"use strict";
// Classe que gerencia o jogo de bandeiras
class JogoDeBandeiras {
    constructor(paises) {
        this.paisAtual = null; // País atual em jogo
        this.perguntaAtual = null; // Pergunta atual
        this.paises = paises; // Inicializa a lista de países
        this.pontuacao = 0; // Inicializa a pontuação em 0
        this.modoJogar = 'sobrevivencia'; // Define o modo de jogar padrão
        this.configurarBotaoSom(); // Configura o botão de som
    }
    // Método para iniciar o jogo com os modos especificados
    iniciarJogo(jogar) {
        this.pontuacao = 0; // Reseta a pontuação
        this.modoJogar = jogar; // Define o modo de jogar
        document.getElementById('menu').classList.add('escondido'); // Esconde o menu principal
        document.getElementById('jogo').classList.remove('escondido'); // Mostra a tela de jogo
        document.getElementById('pontuacao').innerText = `Pontuação: ${this.pontuacao}`; // Atualiza a pontuação exibida
        this.carregarNovaPergunta(); // Carrega uma nova pergunta
    }
    // Método privado para carregar uma nova pergunta
    carregarNovaPergunta() {
        // Esconde a bandeira e limpa o container da bandeira
        const containerBandeira = document.getElementById('container-bandeira');
        containerBandeira.classList.add('escondido');
        containerBandeira.innerHTML = '';
        // Esconde a pergunta anterior
        const containerPergunta = document.getElementById('container-pergunta');
        containerPergunta.innerHTML = '';
        // Seleciona um país aleatório
        this.paisAtual = this.paises[Math.floor(Math.random() * this.paises.length)];
        if (this.paisAtual.perguntas.length === 0) {
            this.carregarNovaPergunta(); // Garante que sempre haja perguntas
            return;
        }
        // Seleciona uma pergunta aleatória que não seja a mesma da pergunta atual
        const perguntasRestantes = this.paisAtual.perguntas.filter(p => p !== this.perguntaAtual);
        if (perguntasRestantes.length === 0) {
            // Se não houver perguntas restantes, recarrega perguntas do país
            this.paisAtual = this.paises[Math.floor(Math.random() * this.paises.length)];
            perguntasRestantes.push(...this.paisAtual.perguntas);
        }
        this.perguntaAtual = perguntasRestantes[Math.floor(Math.random() * perguntasRestantes.length)];
        const containerOpcoes = document.getElementById('container-opcoes'); // Obtém o container das opções
        containerPergunta.innerHTML = `<h3>${this.perguntaAtual.texto}</h3>`; // Exibe a pergunta
        const opcoes = this.perguntaAtual.opcoes; // Inicializa as opções com as respostas da pergunta
        this.embaralharArray(opcoes); // Embaralha as opções
        containerOpcoes.innerHTML = opcoes.map(opcao => `<button onclick="jogo.verificarResposta('${opcao}')">${opcao}</button>`).join(''); // Cria os botões de opções
    }
    // Método para verificar a resposta do jogador
    verificarResposta(selecionado) {
        if (selecionado === this.perguntaAtual.resposta) {
            this.pontuacao++; // Incrementa a pontuação se a resposta estiver correta
            document.getElementById('pontuacao').innerText = `Pontuação: ${this.pontuacao}`; // Atualiza a pontuação exibida
            // Exibe a bandeira e a mensagem após a resposta correta
            const containerBandeira = document.getElementById('container-bandeira');
            containerBandeira.innerHTML = `<h2>${this.paisAtual.nome}, você acertou!</h2>
                                       <img src="${this.paisAtual.urlBandeira}" alt="Bandeira" class="bandeira">`;
            containerBandeira.classList.remove('escondido');
            // Carrega uma nova pergunta após a resposta correta no modo sobrevivência
            if (this.modoJogar === 'sobrevivencia') {
                setTimeout(() => this.carregarNovaPergunta(), 2000); // Carrega uma nova pergunta após 2 segundos
            }
            else {
                setTimeout(() => this.carregarNovaPergunta(), 2000); // Carrega uma nova pergunta após 2 segundos no modo aprender
            }
        }
        else if (this.modoJogar === 'sobrevivencia') {
            document.getElementById('jogo').classList.add('escondido'); // Esconde a tela de jogo
            document.getElementById('fim-de-jogo').classList.remove('escondido'); // Mostra a tela de fim de jogo
        }
        else {
            this.carregarNovaPergunta(); // Carrega uma nova pergunta se o modo for "aprender"
        }
    }
    // Método para tentar novamente no modo sobrevivência
    tentarNovamente() {
        document.getElementById('fim-de-jogo').classList.add('escondido'); // Esconde a tela de fim de jogo
        document.getElementById('jogo').classList.remove('escondido'); // Mostra a tela de jogo
        this.pontuacao = 0; // Reseta a pontuação
        document.getElementById('pontuacao').innerText = `Pontuação: ${this.pontuacao}`; // Atualiza a pontuação exibida
        this.carregarNovaPergunta(); // Carrega uma nova pergunta
    }
    // Método para retornar ao menu principal
    retornarAoMenu() {
        document.getElementById('fim-de-jogo').classList.add('escondido'); // Esconde a tela de fim de jogo
        document.getElementById('menu').classList.remove('escondido'); // Mostra o menu principal
    }
    // Método privado para embaralhar um array (utilizado para embaralhar as opções)
    embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de lugar
        }
    }
    // Método para configurar o botão de som
    configurarBotaoSom() {
        const botaoSom = document.getElementById('toggle-som');
        const musica = document.getElementById('musica');
        let somAtivado = true;
        botaoSom.addEventListener('click', () => {
            if (somAtivado) {
                musica.pause();
                botaoSom.innerText = 'Ativar Som';
            }
            else {
                musica.play();
                botaoSom.innerText = 'Desativar Som';
            }
            somAtivado = !somAtivado;
        });
    }
}
// Lista de países com suas respectivas bandeiras e perguntas
const paises = [
    {
        nome: "Brasil",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
        perguntas: [
            {
                texto: "É o país do futebol...",
                resposta: "Brasil",
                opcoes: ["Venezuela", "Acre", "Brasil", "México"]
            }
        ]
    },
    {
        nome: "Argentina",
        urlBandeira: "https://bandeira.net/wp-content/uploads/2018/08/bandeira-da-argentina-300x187.png",
        perguntas: [
            {
                texto: "São os maiores rivais do Brasil no futebol...",
                resposta: "Argentina",
                opcoes: ["Alemanha", "Angola", "Venezuela", "Argentina"]
            }
        ]
    }
    // Adicione mais países com suas perguntas conforme necessário
];
// Cria uma instância do jogo de bandeiras
const jogo = new JogoDeBandeiras(paises);
// Exponha os métodos no objeto global para que possam ser chamados a partir do HTML
window.iniciarJogo = (jogar) => jogo.iniciarJogo(jogar);
window.tentarNovamente = () => jogo.tentarNovamente();
window.retornarAoMenu = () => jogo.retornarAoMenu();
