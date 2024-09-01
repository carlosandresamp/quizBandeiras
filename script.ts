// Importa as interfaces ou classes 'Pais', 'Pergunta' e o array 'paises' de um arquivo externo
import { Pais, Pergunta, paises } from './perguntas.js';

// Define uma classe para o jogo de bandeiras
class JogoDeBandeiras {
    // Declaração das propriedades da classe
    paises: Pais[];                   // Lista de países
    pontuacao: number;                // Pontuação do jogador
    modoJogar: 'sobrevivencia' | 'aprender'; // Modo de jogo selecionado
    perguntasFeitas: Set<string>;     // Conjunto de perguntas já feitas
    paisAtual: Pais | null = null;    // País atual da pergunta
    perguntaAtual: Pergunta | null = null; // Pergunta atual
    cronometro: number | null = null; // ID do cronômetro
    tempoRestante: number = 10;       // Tempo limite por pergunta em segundos
    nomeJogador: string = '';

    // Construtor da classe, é chamado quando uma instância da classe é criada
    constructor(paises: Pais[]) {
        this.paises = paises;                // Inicializa a lista de países
        this.pontuacao = 0;                  // Inicializa a pontuação com zero
        this.modoJogar = 'sobrevivencia';    // Define o modo padrão de jogo como sobrevivência
        this.perguntasFeitas = new Set();    // Inicializa o conjunto de perguntas feitas
        this.configurarBotoesIniciais();     // Configura os botões iniciais do jogo
        this.configurarBotaoSom();           // Configura o botão de controle do som
        this.configurarBotoesFinais();       // Configura os botões para o final do jogo
    }

    // Configura os botões de seleção do modo de jogo na interface
    configurarBotoesIniciais() {
        document.getElementById('botaoSobrevivencia')!.onclick = () => this.iniciarJogo('sobrevivencia');
        document.getElementById('botaoAprender')!.onclick = () => this.iniciarJogo('aprender');
    }

    // Inicia o jogo no modo selecionado
    iniciarJogo(jogar: 'sobrevivencia' | 'aprender') {
        this.nomeJogador = prompt('Digite seu nome de jogador:', '') || 'Jogador';
        this.pontuacao = 0;                     // Reseta a pontuação
        this.modoJogar = jogar;                 // Define o modo de jogo
        this.perguntasFeitas.clear();           // Limpa as perguntas feitas
        document.getElementById('menu')!.classList.add('escondido'); // Esconde o menu inicial
        document.getElementById('jogo')!.classList.remove('escondido'); // Mostra o jogo
        document.getElementById('fim-de-jogo')!.classList.add('escondido'); // Esconde a tela de fim de jogo
        document.getElementById('pontuacao')!.innerText = `${this.nomeJogador} - Pontuação: ${this.pontuacao}`; // Atualiza a pontuação na tela
        this.carregarNovaPergunta();            // Carrega a primeira pergunta
    }

    // Carrega uma nova pergunta e exibe na interface
    carregarNovaPergunta() {
        // Esconde o contêiner da bandeira e limpa seu conteúdo
        let containerBandeira = document.getElementById('container-bandeira');
        if (containerBandeira) {
            containerBandeira.classList.add('escondido');
            containerBandeira.innerHTML = '';
        }

        // Limpa o contêiner da pergunta
        let containerPergunta = document.getElementById('container-pergunta');
        if (containerPergunta) {
            containerPergunta.innerHTML = '';
        }

        // Combina todas as perguntas dos países em um único array
        let todasPerguntas = ([] as Pergunta[]).concat(...this.paises.map(pais => pais.perguntas));

        // Filtra as perguntas que ainda não foram feitas
        let perguntasRestantes = todasPerguntas.filter(pergunta => !this.perguntasFeitas.has(pergunta.texto));

        // Verifica se ainda há perguntas restantes, se não houver, exibe o fim do jogo
        if (perguntasRestantes.length === 0) {
            this.exibirFimDeJogo(this.modoJogar === 'aprender');
            return;
        }

        // Seleciona uma pergunta aleatória entre as restantes
        this.perguntaAtual = perguntasRestantes[Math.floor(Math.random() * perguntasRestantes.length)];
        this.perguntasFeitas.add(this.perguntaAtual.texto); // Marca a pergunta como feita

        // Encontra o país correspondente à pergunta atual
        this.paisAtual = this.paises.find(pais => pais.perguntas.includes(this.perguntaAtual!)) || null;

        // Prepara a interface para exibir a nova pergunta e suas opções
        let containerOpcoes = document.getElementById('container-opcoes');
        if (containerOpcoes && containerPergunta) {
            containerPergunta.innerHTML = `<h3>${this.perguntaAtual!.texto}</h3>`;
            let opcoes = this.perguntaAtual!.opcoes.slice(); // Copia as opções da pergunta
            this.embaralharArray(opcoes); // Embaralha as opções para exibição aleatória
            containerOpcoes.innerHTML = opcoes.map(opcao => `<button id="opcao-${opcao.replace(/\s+/g, '-')}">${opcao}</button>`).join('');

            // Configura o evento de clique para cada opção
            opcoes.forEach(opcao => {
                let botaoOpcao = document.getElementById(`opcao-${opcao.replace(/\s+/g, '-')}`);
                if (botaoOpcao) {
                    botaoOpcao.onclick = () => this.verificarResposta(opcao);
                }
            });
        }

        // Inicia o cronômetro se o modo de jogo for 'sobrevivência'
        if (this.modoJogar === 'sobrevivencia') {
            this.iniciarCronometro();
        }
    }

    // Inicia o cronômetro de contagem regressiva para responder a pergunta
    iniciarCronometro() {
        this.tempoRestante = 10; // Define o tempo inicial como 10 segundos
        let cronometroElemento = document.createElement('div');
        cronometroElemento.id = 'cronometro';
        cronometroElemento.innerText = `Tempo restante: ${this.tempoRestante}s`;
        document.getElementById('container-pergunta')?.appendChild(cronometroElemento);

        // Limpa qualquer cronômetro anterior
        if (this.cronometro) {
            clearInterval(this.cronometro);
        }

        // Define o cronômetro para diminuir o tempo a cada segundo
        this.cronometro = setInterval(() => {
            this.tempoRestante--;
            cronometroElemento.innerText = `Tempo restante: ${this.tempoRestante}s`;

            // Quando o tempo acabar, verificar o modo de jogo e proceder adequadamente
            if (this.tempoRestante <= 0) {
                clearInterval(this.cronometro!);
                if (this.modoJogar === 'sobrevivencia') {
                    this.exibirFimDeJogo(false, "O tempo acabou! Fim de jogo.");
                } else {
                    this.carregarNovaPergunta();
                }
            }
        }, 1000); // Intervalo de 1 segundo
    }

    // Verifica se a resposta selecionada está correta
    verificarResposta(selecionado: string) {
        clearInterval(this.cronometro!); // Para o cronômetro após a resposta

        let opcoes = document.querySelectorAll('#container-opcoes button');

        // Marca a resposta correta visualmente em verde em ambos os modos "sobrevivência" e "aprender"
        if (this.modoJogar === 'sobrevivencia', 'aprender') {
            opcoes.forEach((botao) => {
                if ((botao as HTMLButtonElement).innerText === this.perguntaAtual!.resposta) {
                    botao.classList.add('correta');
                }
            });

            let containerBandeira = document.getElementById('container-bandeira');
            if (containerBandeira) {
                containerBandeira.innerHTML = `<h2>${this.paisAtual!.nome}</h2>
                                           <img src="${this.paisAtual!.urlBandeira}" alt="Bandeira" class="bandeira">`;
                containerBandeira.classList.remove('escondido');
            }
        }

        if (selecionado === this.perguntaAtual!.resposta) {
            this.pontuacao++;
            (document.getElementById('pontuacao') as HTMLElement).innerText = `${this.nomeJogador} - Pontuação: ${this.pontuacao}`; // Atualiza a exibição da pontuação com o nome do jogador

            let somAcerto = document.getElementById('som-acerto') as HTMLAudioElement;
            somAcerto.play();

            let todasPerguntas = ([] as Pergunta[]).concat(...this.paises.map(pais => pais.perguntas));
            let perguntasRestantes = todasPerguntas.filter(pergunta => !this.perguntasFeitas.has(pergunta.texto));

            if (perguntasRestantes.length === 0) {
                setTimeout(() => {
                    this.exibirFimDeJogo(true);
                }, 3000); // Mantém a exibição por 3 segundos antes de mostrar a tela final
            } else {
                setTimeout(() => this.carregarNovaPergunta(), 2000); // Carrega a próxima pergunta após 2 segundos
            }
        } else if (this.modoJogar === 'sobrevivencia') {
            // No modo "sobrevivência", se errar, vai diretamente para a tela de fim de jogo
            this.exibirFimDeJogo(false, "Você errou! Fim de jogo.");
        } else {
            // No modo "aprender", carrega a próxima pergunta após 2 segundos
            setTimeout(() => this.carregarNovaPergunta(), 2000);
        }
    }

    // Exibe a tela de fim de jogo com uma mensagem apropriada
    exibirFimDeJogo(jogoZerado = false, mensagemPersonalizada?: string) {
        if (this.cronometro) {
            clearInterval(this.cronometro);
        }

        document.getElementById('jogo')!.classList.add('escondido');
        let fimDeJogoContainer = document.getElementById('fim-de-jogo');
        let mensagemFim = document.getElementById('mensagem-fim');

        if (fimDeJogoContainer && mensagemFim) {
            // Adiciona o resumo de acertos e erros
            let acertos = this.pontuacao;
            let erros = this.perguntasFeitas.size - acertos;
            mensagemFim.innerHTML = `
                <p>${mensagemPersonalizada ? mensagemPersonalizada : jogoZerado ? "Parabéns! Você zerou o jogo, acabaram as perguntas." : "Você errou! Fim de jogo."}</p>
                <p>${this.nomeJogador}, Acertos: ${acertos} | Erros: ${erros}</p>
            `;
            fimDeJogoContainer.classList.remove('escondido');
        }

        this.configurarBotoesFinais();
    }


    // Reinicia o jogo quando o jogador clica em "Tentar Novamente"
    tentarNovamente() {
        let fimDeJogoContainer = document.getElementById('fim-de-jogo');
        if (fimDeJogoContainer) {
            fimDeJogoContainer.classList.add('escondido');
        }
        document.getElementById('jogo')!.classList.remove('escondido');
        this.pontuacao = 0;
        document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`;
        this.perguntasFeitas.clear(); // Limpa as perguntas feitas
        this.carregarNovaPergunta(); // Carrega a primeira pergunta
    }

    // Volta ao menu inicial quando o jogador clica em "Retornar ao Menu"
    retornarAoMenu() {
        let fimDeJogoContainer = document.getElementById('fim-de-jogo');
        if (fimDeJogoContainer) {
            fimDeJogoContainer.classList.add('escondido');
        }
        document.getElementById('menu')!.classList.remove('escondido');
    }

    // Embaralha um array usando o algoritmo de Fisher-Yates
    embaralharArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
        }
    }

    // Configura o botão de som para alternar entre ativar e desativar a música de fundo
    configurarBotaoSom() {
        let botaoSom = document.getElementById('toggle-som') as HTMLButtonElement;
        let musica = document.getElementById('musica') as HTMLAudioElement;
        let somAtivado = true;

        // Adiciona o evento de clique para controlar o som
        botaoSom.addEventListener('click', () => {
            if (somAtivado) {
                musica.pause();              // Pausa a música
                botaoSom.innerText = 'Ativar Som'; // Atualiza o texto do botão
            } else {
                musica.play();               // Reproduz a música
                botaoSom.innerText = 'Desativar Som'; // Atualiza o texto do botão
            }
            somAtivado = !somAtivado; // Alterna o estado do som
        });
    }

    // Configura os botões para o final do jogo
    configurarBotoesFinais() {
        let botaoTentarNovamente = document.getElementById('botaoTentarNovamente');
        let botaoRetornarAoMenu = document.getElementById('botaoRetornarAoMenu');

        if (botaoTentarNovamente && botaoRetornarAoMenu) {
            botaoTentarNovamente.onclick = () => this.tentarNovamente(); // Reinicia o jogo
            botaoRetornarAoMenu.onclick = () => this.retornarAoMenu();   // Volta ao menu inicial
        }
    }
}

// Cria uma nova instância do jogo, passando a lista de países como parâmetro
let jogo = new JogoDeBandeiras(paises);