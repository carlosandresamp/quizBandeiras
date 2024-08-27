// Importa as interfaces e a lista de países do arquivo perguntas.ts
import { Pais, Pergunta, paises } from './perguntas.js';

// Classe principal para o jogo de bandeiras
class JogoDeBandeiras {
    private paises: Pais[];  // Lista de países disponíveis no jogo
    private pontuacao: number;  // Pontuação atual do jogador
    private modoJogar: 'sobrevivencia' | 'aprender';  // Modo do jogo (sobrevivência ou aprender)
    private perguntasFeitas: Set<string>;  // Conjunto de perguntas que já foram feitas
    private paisAtual: Pais | null = null;  // País atual para a pergunta
    private perguntaAtual: Pergunta | null = null;  // Pergunta atual

    // Construtor da classe
    constructor(paises: Pais[]) {
        this.paises = paises;  // Inicializa a lista de países
        this.pontuacao = 0;  // Inicializa a pontuação
        this.modoJogar = 'sobrevivencia';  // Define o modo de jogo padrão
        this.perguntasFeitas = new Set();  // Inicializa o conjunto de perguntas feitas
        this.configurarBotaoSom();  // Configura o botão de som
    }

    // Método para iniciar o jogo em um modo específico
    iniciarJogo(jogar: 'sobrevivencia' | 'aprender') {
        this.pontuacao = 0;  // Reinicia a pontuação
        this.modoJogar = jogar;  // Define o modo de jogo
        this.perguntasFeitas.clear();  // Limpa as perguntas já feitas
        document.getElementById('menu')!.classList.add('escondido');  // Esconde o menu
        document.getElementById('jogo')!.classList.remove('escondido');  // Mostra o jogo
        document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`;  // Atualiza a pontuação na tela
        this.carregarNovaPergunta();  // Carrega uma nova pergunta
    }

    // Método para carregar uma nova pergunta
    private carregarNovaPergunta() {
        let containerBandeira = document.getElementById('container-bandeira');
        if (containerBandeira) {
            containerBandeira.classList.add('escondido');  // Esconde o container da bandeira
            containerBandeira.innerHTML = '';  // Limpa o conteúdo do container da bandeira
        }

        let containerPergunta = document.getElementById('container-pergunta');
        if (containerPergunta) {
            containerPergunta.innerHTML = '';  // Limpa o conteúdo do container da pergunta
        }

        // Combina todas as perguntas de todos os países
        let todasPerguntas = ([] as Pergunta[]).concat(...this.paises.map(pais => pais.perguntas));
        // Filtra perguntas que ainda não foram feitas
        let perguntasRestantes = todasPerguntas.filter(pergunta => !this.perguntasFeitas.has(pergunta.texto));

        // Se não há perguntas restantes, exibe a tela de fim de jogo
        if (perguntasRestantes.length === 0) {
            this.exibirFimDeJogo(this.modoJogar === 'aprender');
            return;
        }

        // Escolhe uma pergunta aleatória das restantes
        this.perguntaAtual = perguntasRestantes[Math.floor(Math.random() * perguntasRestantes.length)];
        this.perguntasFeitas.add(this.perguntaAtual.texto);  // Marca a pergunta como feita
        // Encontra o país associado à pergunta atual
        this.paisAtual = this.paises.find(pais => pais.perguntas.includes(this.perguntaAtual!)) || null;

        let containerOpcoes = document.getElementById('container-opcoes');
        if (containerOpcoes && containerPergunta) {
            containerPergunta.innerHTML = `<h3>${this.perguntaAtual!.texto}</h3>`;  // Exibe a pergunta

            // Embaralha as opções da pergunta
            let opcoes = this.perguntaAtual!.opcoes.slice();
            this.embaralharArray(opcoes);
            // Cria botões para cada opção
            containerOpcoes.innerHTML = opcoes.map(opcao => `<button onclick="jogo.verificarResposta('${opcao}')">${opcao}</button>`).join('');
        }
    }

    // Método para verificar a resposta escolhida pelo jogador
    verificarResposta(selecionado: string) {
        if (selecionado === this.perguntaAtual!.resposta) {
            this.pontuacao++;  // Incrementa a pontuação
            document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`;  // Atualiza a pontuação na tela
    
            let containerBandeira = document.getElementById('container-bandeira');
            if (containerBandeira) {
                containerBandeira.innerHTML = `<h2>${this.paisAtual!.nome}, você acertou!</h2>
                                               <img src="${this.paisAtual!.urlBandeira}" alt="Bandeira" class="bandeira">`;
                containerBandeira.classList.remove('escondido');  // Mostra a bandeira do país
            }
    
            // Toca o som de acerto
            let somAcerto = document.getElementById('som-acerto') as HTMLAudioElement;
            somAcerto.play();
    
            // Carrega a próxima pergunta após um atraso
            setTimeout(() => this.carregarNovaPergunta(), 2000);
        } else if (this.modoJogar === 'sobrevivencia') {
            this.exibirFimDeJogo();  // Exibe o fim de jogo no modo sobrevivência
        } else {
            this.carregarNovaPergunta();  // Carrega a próxima pergunta no modo aprender
        }
    }

    // Método para exibir a tela de fim de jogo
    private exibirFimDeJogo(jogoZerado = false) {
        document.getElementById('jogo')!.classList.add('escondido');  // Esconde a tela do jogo
        let fimDeJogoContainer = document.getElementById('fim-de-jogo');
        let mensagemFim = document.getElementById('mensagem-fim');

        if (fimDeJogoContainer && mensagemFim) {
            if (jogoZerado) {
                mensagemFim.innerText = "Parabéns! Você zerou o jogo, acabaram as perguntas.";
            } else {
                mensagemFim.innerText = "Você errou! Fim de jogo.";
            }
            fimDeJogoContainer.classList.remove('escondido');  // Mostra a tela de fim de jogo
        }
    }

    // Método para tentar novamente no modo sobrevivência
    tentarNovamente() {
        let fimDeJogoContainer = document.getElementById('fim-de-jogo');
        if (fimDeJogoContainer) {
            fimDeJogoContainer.classList.add('escondido');  // Esconde a tela de fim de jogo
        }
        document.getElementById('jogo')!.classList.remove('escondido');  // Mostra a tela do jogo
        this.pontuacao = 0;  // Reinicia a pontuação
        document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`;  // Atualiza a pontuação na tela
        this.perguntasFeitas.clear();  // Limpa as perguntas feitas
        this.carregarNovaPergunta();  // Carrega uma nova pergunta
    }

    // Método para retornar ao menu principal
    retornarAoMenu() {
        let fimDeJogoContainer = document.getElementById('fim-de-jogo');
        if (fimDeJogoContainer) {
            fimDeJogoContainer.classList.add('escondido');  // Esconde a tela de fim de jogo
        }
        document.getElementById('menu')!.classList.remove('escondido');  // Mostra o menu principal
    }

    // Método para embaralhar um array
    private embaralharArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  // Troca os elementos aleatoriamente
        }
    }

    // Método para configurar o botão de som
    private configurarBotaoSom() {
        let botaoSom = document.getElementById('toggle-som') as HTMLButtonElement;
        let musica = document.getElementById('musica') as HTMLAudioElement;
        let somAtivado = true;

        // Adiciona um ouvinte de eventos para alternar o som
        botaoSom.addEventListener('click', () => {
            if (somAtivado) {
                musica.pause();  // Pausa a música
                botaoSom.innerText = 'Ativar Som';  // Altera o texto do botão
            } else {
                musica.play();  // Toca a música
                botaoSom.innerText = 'Desativar Som';  // Altera o texto do botão
            }
            somAtivado = !somAtivado;  // Alterna o estado do som
        });
    }
}
