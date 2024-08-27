// Define uma interface para representar um país
interface Pais {
    nome: string;  // Nome do país
    urlBandeira: string;  // URL da imagem da bandeira do país
    perguntas: Pergunta[];  // Lista de perguntas relacionadas ao país
}

// Define uma interface para representar uma pergunta
interface Pergunta {
    texto: string;  // Texto da pergunta
    resposta: string;  // Resposta correta para a pergunta
    opcoes: string[];  // Lista de opções de resposta
}

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


// Lista de países com suas respectivas bandeiras e perguntas
let paises: Pais[] = [
    {
        nome: "Brasil",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
        perguntas: [
            {
                texto: "Qual é o país do futebol?",
                resposta: "Brasil",
                opcoes: ["Venezuela", "Acre", "Brasil", "México"]
            }
        ]
    },
    {
        nome: "Argentina",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        perguntas: [
            {
                texto: "São os maiores rivais do Brasil no futebol...",
                resposta: "Argentina",
                opcoes: ["Alemanha", "Angola", "Venezuela", "Argentina"]
            }
        ]
    },
    {
        nome: "Estados Unidos",
        urlBandeira: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg",
        perguntas: [
            {
                "texto": "Qual país tem a maior economia do mundo e sua capital é Washington, D.C.?",
                "resposta": "Estados Unidos",
                "opcoes": ["Estados Unidos", "Canadá", "México", "Brasil"]
            }
        ]
    },
    {
        nome: "Argentina",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por seu tango e por sua capital, Buenos Aires?",
                "resposta": "Argentina",
                "opcoes": ["Brasil", "Uruguai", "Argentina", "Chile"]
            }
        ]
    },
    {
        nome: "Canadá",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.png",
        perguntas: [
            {
                "texto": "Qual país é o segundo maior do mundo em área territorial?",
                "resposta": "Canadá",
                "opcoes": ["Rússia", "Canadá", "China", "Estados Unidos"]
            }
        ]
    },
    {
        nome: "Austrália",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por seus cangurus e a Grande Barreira de Corais?",
                "resposta": "Austrália",
                "opcoes": ["Austrália", "Japão", "Nova Zelândia", "Indonésia"]
            }
        ]
    },
    {
        nome: "Alemanha",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua cerveja e Oktoberfest?",
                "resposta": "Alemanha",
                "opcoes": ["Alemanha", "Áustria", "Suíça", "França"]
            }
        ]
    },
    {
        nome: "França",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
        perguntas: [
            {
                "texto": "Qual país é famoso pela Torre Eiffel e pela cidade de Paris?",
                "resposta": "França",
                "opcoes": ["França", "Espanha", "Alemanha", "Itália"]
            }
        ]
    },
    {
        nome: "Reino Unido",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
        perguntas: [
            {
                "texto": "Qual país é famoso por sua monarquia e o Big Ben?",
                "resposta": "Reino Unido",
                "opcoes": ["Grã-Bretanha", "Alemanha", "Reino Unido", "Espanha"]
            }
        ]
    },
    {
        nome: "Egito",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido pelas Pirâmides de Gizé e o rio Nilo?",
                "resposta": "Egito",
                "opcoes": ["Turquia", "Egito", "Arábia Saudita", "Marrocos"]
            }
        ]
    },
    {
        nome: "Grécia",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido como o berço da democracia e dos Jogos Olímpicos?",
                "resposta": "Grécia",
                "opcoes": ["Grécia", "Itália", "Egito", "Turquia"]
            }
        ]
    },
    {
        nome: "Japão",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua cultura samurai e a cidade de Tóquio?",
                "resposta": "Japão",
                "opcoes": ["Japão", "China", "Coreia do Sul", "Taiwan"]
            }
        ]
    },
    {
        nome: "México",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua culinária picante e as ruínas maias?",
                "resposta": "México",
                "opcoes": ["México", "Brasil", "Argentina", "Peru"]
            }
        ]
    },
    {
        nome: "Rússia",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
        perguntas: [
            {
                "texto": "Qual país é o maior do mundo em área territorial?",
                "resposta": "Rússia",
                "opcoes": ["Brasil", "Estados Unidos", "Rússia", "China"]
            }
        ]
    },
    {
        nome: "China",
        urlBandeira: "https://static.significados.com.br/foto/china.jpg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua grande Muralha e pela Cidade Proibida?",
                "resposta": "China",
                "opcoes": ["China", "Mongólia", "Coreia do Sul", "Japão"]
            }
        ]
    },
    {
        nome: "Índia",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido pelo Taj Mahal e por ser o segundo mais populoso do mundo?",
                "resposta": "Índia",
                "opcoes": ["Índia", "Nepal", "China", "Paquistão"]
            }
        ]
    },
    {
        nome: "África do Sul",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua diversidade cultural e por Nelson Mandela?",
                "resposta": "África do Sul",
                "opcoes": ["Egito", "Nigéria", "África do Sul", "Quênia"]
            }
        ]
    },
    {
        nome: "Arábia Saudita",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por suas cidades sagradas de Meca e Medina?",
                "resposta": "Arábia Saudita",
                "opcoes": ["Arábia Saudita", "Egito", "Iraque", "Irã"]
            }
        ]
    },
    {
        nome: "Espanha",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
        perguntas: [
            {
                "texto": "Qual país é famoso por suas touradas e pela cidade de Barcelona?",
                "resposta": "Espanha",
                "opcoes": ["Espanha", "Grécia", "França", "Itália"]
            }
        ]
    },
    {
        nome: "Itália",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por suas pizzas e pela cidade de Roma?",
                "resposta": "Itália",
                "opcoes": ["França", "Portugal", "Itália", "Espanha"]
            }
        ]
    },
    {
        nome: "Suécia",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua política de bem-estar social e pelo Nobel de Literatura?",
                "resposta": "Suécia",
                "opcoes": ["Noruega", "Suécia", "Dinamarca", "Países Baixos"]
            }
        ]
    },
    {
        nome: "Dinamarca",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por suas pequenas ilhas e pelo conto de fadas de Hans Christian Andersen?",
                "resposta": "Dinamarca",
                "opcoes": ["Noruega", "Dinamarca", "Alemanha", "Suécia"]
            }
        ]
    },
    {
        nome: "Noruega",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
        perguntas: [
            {
                "texto": "Qual país é famoso por seus fiordes e pelo prêmio Nobel da Paz?",
                "resposta": "Noruega",
                "opcoes": ["Noruega", "Dinamarca", "Islândia", "Suécia"]
            }
        ]
    },
    {
        nome: "Nepal",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
        perguntas: [
            {
                "texto": "Qual país é famoso pelo Monte Everest e por ser o berço do Buda?",
                "resposta": "Nepal",
                "opcoes": ["Butão", "Nepal", "Tibete", "Paquistão"]
            }
        ]
    },
    {
        nome: "Brasil",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido pelo Carnaval e pelo Cristo Redentor?",
                "resposta": "Brasil",
                "opcoes": ["Argentina", "Brasil", "México", "Colômbia"]
            }
        ]
    },
    {
        nome: "Argentina",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido pelo tango e pela cidade de Buenos Aires?",
                "resposta": "Argentina",
                "opcoes": ["Uruguai", "Argentina", "Chile", "Paraguai"]
            }
        ]
    }

    // ☝🏻 ACIMA TODAS AS PERGUNTAS ESTÃO COM AS IMAGENS DAS BANDEIRAS!!!
];

// Cria uma instância do jogo de bandeiras
let jogo = new JogoDeBandeiras(paises);

// Expõem os métodos no objeto global para que possam ser chamados a partir do HTML
(window as any).iniciarJogo = (jogar: 'sobrevivencia' | 'aprender') => jogo.iniciarJogo(jogar);
(window as any).tentarNovamente = () => jogo.tentarNovamente();
(window as any).retornarAoMenu = () => jogo.retornarAoMenu();