"use strict";
// Classe principal que gerencia o jogo de bandeiras
class JogoDeBandeiras {
    // Construtor da classe que inicializa as propriedades
    constructor(paises) {
        this.paisAtual = null;
        this.perguntaAtual = null;
        this.paises = paises;
        this.pontuacao = 0;
        this.modoJogar = 'sobrevivencia';
        this.perguntasFeitas = new Set();
        this.configurarBotaoSom();
    }
    // Método para iniciar o jogo em um modo específico
    iniciarJogo(jogar) {
        this.pontuacao = 0;
        this.modoJogar = jogar;
        this.perguntasFeitas.clear(); // Limpa as perguntas feitas ao iniciar um novo jogo
        document.getElementById('menu').classList.add('escondido');
        document.getElementById('jogo').classList.remove('escondido');
        document.getElementById('pontuacao').innerText = `Pontuação: ${this.pontuacao}`;
        this.carregarNovaPergunta();
    }
    // Método privado para carregar uma nova pergunta
    carregarNovaPergunta() {
        let containerBandeira = document.getElementById('container-bandeira');
        if (containerBandeira) {
            containerBandeira.classList.add('escondido');
            containerBandeira.innerHTML = '';
        }
        let containerPergunta = document.getElementById('container-pergunta');
        if (containerPergunta) {
            containerPergunta.innerHTML = '';
        }
        // Combinação de todas as perguntas dos países
        let todasPerguntas = [].concat(...this.paises.map(pais => pais.perguntas));
        // Filtra as perguntas que ainda não foram feitas
        let perguntasRestantes = todasPerguntas.filter(pergunta => !this.perguntasFeitas.has(pergunta.texto));
        if (perguntasRestantes.length === 0) {
            this.exibirFimDeJogo(); // Se não houver mais perguntas, exibe o fim de jogo
            return;
        }
        // Seleciona uma nova pergunta aleatória
        this.perguntaAtual = perguntasRestantes[Math.floor(Math.random() * perguntasRestantes.length)];
        this.perguntasFeitas.add(this.perguntaAtual.texto); // Marca a pergunta como feita
        // Encontra o país atual com base na pergunta selecionada
        this.paisAtual = this.paises.find(pais => pais.perguntas.includes(this.perguntaAtual)) || null;
        let containerOpcoes = document.getElementById('container-opcoes');
        if (containerOpcoes && containerPergunta) {
            containerPergunta.innerHTML = `<h3>${this.perguntaAtual.texto}</h3>`;
            // Embaralha as opções de resposta
            let opcoes = this.perguntaAtual.opcoes.slice();
            this.embaralharArray(opcoes);
            containerOpcoes.innerHTML = opcoes.map(opcao => `<button onclick="jogo.verificarResposta('${opcao}')">${opcao}</button>`).join('');
        }
    }
    // Método para verificar a resposta escolhida pelo jogador
    verificarResposta(selecionado) {
        if (selecionado === this.perguntaAtual.resposta) {
            this.pontuacao++;
            document.getElementById('pontuacao').innerText = `Pontuação: ${this.pontuacao}`;
            let containerBandeira = document.getElementById('container-bandeira');
            if (containerBandeira) {
                containerBandeira.innerHTML = `<h2>${this.paisAtual.nome}, você acertou!</h2>
                                        <img src="${this.paisAtual.urlBandeira}" alt="Bandeira" class="bandeira">`;
                containerBandeira.classList.remove('escondido');
            }
            setTimeout(() => this.carregarNovaPergunta(), 3000);
        }
        else if (this.modoJogar === 'sobrevivencia') {
            this.exibirFimDeJogo();
        }
        else {
            this.carregarNovaPergunta();
        }
    }
    // Método para exibir a tela de fim de jogo
    exibirFimDeJogo() {
        document.getElementById('jogo').classList.add('escondido');
        let fimDeJogoContainer = document.getElementById('fim-de-jogo');
        if (fimDeJogoContainer) {
            fimDeJogoContainer.classList.remove('escondido');
        }
    }
    // Método para tentar novamente no modo sobrevivência
    tentarNovamente() {
        let fimDeJogoContainer = document.getElementById('fim-de-jogo');
        if (fimDeJogoContainer) {
            fimDeJogoContainer.classList.add('escondido');
        }
        document.getElementById('jogo').classList.remove('escondido');
        this.pontuacao = 0;
        document.getElementById('pontuacao').innerText = `Pontuação: ${this.pontuacao}`;
        this.perguntasFeitas.clear();
        this.carregarNovaPergunta();
    }
    // Método para retornar ao menu principal
    retornarAoMenu() {
        let fimDeJogoContainer = document.getElementById('fim-de-jogo');
        if (fimDeJogoContainer) {
            fimDeJogoContainer.classList.add('escondido');
        }
        document.getElementById('menu').classList.remove('escondido');
    }
    // Método privado para embaralhar um array (utilizado para embaralhar as opções)
    embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    // Método para configurar o botão de som
    configurarBotaoSom() {
        let botaoSom = document.getElementById('toggle-som');
        let musica = document.getElementById('musica');
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
let paises = [
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
        urlBandeira: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/01/bandeira-da-argentina.jpg",
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
    // ACIMA TODAS AS PERGUNTAS ESTÃO COM AS IMAGENS DAS BANDEIRAS!!!
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
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_China.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido pela Muralha da China e pela Cidade Proibida?",
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
    // Adicione mais países com suas perguntas conforme necessário
];
// Cria uma instância do jogo de bandeiras
let jogo = new JogoDeBandeiras(paises);
// Exponha os métodos no objeto global para que possam ser chamados a partir do HTML
window.iniciarJogo = (jogar) => jogo.iniciarJogo(jogar);
window.tentarNovamente = () => jogo.tentarNovamente();
window.retornarAoMenu = () => jogo.retornarAoMenu();
