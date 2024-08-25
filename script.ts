// Define os tipos para os modos de jogo e modos de jogar
type ModoJogo = 'normal'; // Remover o modo 'contorno'
type ModoJogar = 'sobrevivencia' | 'aprender';

// Define a interface para um país, incluindo o nome e URLs para as bandeiras
interface Pais {
    nome: string;
    urlBandeira: string;
    perguntas: Pergunta[]; // Adiciona um array de perguntas
}

// Define a interface para uma pergunta
interface Pergunta {
    texto: string;
    resposta: string; // Resposta correta da pergunta
    opcoes: string[]; // Opções de resposta
}

// Classe que gerencia o jogo de bandeiras
class JogoDeBandeiras {
    private paises: Pais[]; // Lista de países disponíveis no jogo
    private pontuacao: number; // Pontuação do jogador
    private modoJogar: ModoJogar; // Modo de jogar atual (sobrevivência ou aprender)
    private paisAtual: Pais | null = null; // País atual em jogo
    private perguntaAtual: Pergunta | null = null; // Pergunta atual

    constructor(paises: Pais[]) {
        this.paises = paises; // Inicializa a lista de países
        this.pontuacao = 0; // Inicializa a pontuação em 0
        this.modoJogar = 'sobrevivencia'; // Define o modo de jogar padrão
        this.configurarBotaoSom(); // Configura o botão de som
    }

    // Método para iniciar o jogo com os modos especificados
    iniciarJogo(jogar: ModoJogar) {
        this.pontuacao = 0; // Reseta a pontuação
        this.modoJogar = jogar; // Define o modo de jogar
        document.getElementById('menu')!.classList.add('escondido'); // Esconde o menu principal
        document.getElementById('jogo')!.classList.remove('escondido'); // Mostra a tela de jogo
        document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`; // Atualiza a pontuação exibida
        this.carregarNovaPergunta(); // Carrega uma nova pergunta
    }

    // Método privado para carregar uma nova pergunta
    private carregarNovaPergunta() {
        // Esconde a bandeira e limpa o container da bandeira
        let containerBandeira = document.getElementById('container-bandeira')!;
        containerBandeira.classList.add('escondido');
        containerBandeira.innerHTML = '';

        // Esconde a pergunta anterior
        let containerPergunta = document.getElementById('container-pergunta')!;
        containerPergunta.innerHTML = '';

        // Seleciona um país aleatório
        this.paisAtual = this.paises[Math.floor(Math.random() * this.paises.length)];

        if (this.paisAtual.perguntas.length === 0) {
            this.carregarNovaPergunta(); // Garante que sempre haja perguntas
            return;
        }

        // Seleciona uma pergunta aleatória que não seja a mesma da pergunta atual
        let perguntasRestantes = this.paisAtual.perguntas.filter(p => p !== this.perguntaAtual);
        if (perguntasRestantes.length === 0) {
            // Se não houver perguntas restantes, recarrega perguntas do país
            this.paisAtual = this.paises[Math.floor(Math.random() * this.paises.length)];
            perguntasRestantes.push(...this.paisAtual.perguntas);
        }

        this.perguntaAtual = perguntasRestantes[Math.floor(Math.random() * perguntasRestantes.length)];

        let containerOpcoes = document.getElementById('container-opcoes')!; // Obtém o container das opções

        containerPergunta.innerHTML = `<h3>${this.perguntaAtual.texto}</h3>`; // Exibe a pergunta

        let opcoes = this.perguntaAtual.opcoes; // Inicializa as opções com as respostas da pergunta
        this.embaralharArray(opcoes); // Embaralha as opções
        containerOpcoes.innerHTML = opcoes.map(opcao => `<button onclick="jogo.verificarResposta('${opcao}')">${opcao}</button>`).join(''); // Cria os botões de opções
    }

    // Método para verificar a resposta do jogador
    verificarResposta(selecionado: string) {
        if (selecionado === this.perguntaAtual!.resposta) {
            this.pontuacao++; // Incrementa a pontuação se a resposta estiver correta
            document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`; // Atualiza a pontuação exibida

            // Exibe a bandeira e a mensagem após a resposta correta
            let containerBandeira = document.getElementById('container-bandeira')!;
            containerBandeira.innerHTML = `<h2>${this.paisAtual!.nome}, você acertou!</h2>
                                       <img src="${this.paisAtual!.urlBandeira}" alt="Bandeira" class="bandeira">`;
            containerBandeira.classList.remove('escondido');

            // Carrega uma nova pergunta após a resposta correta no modo sobrevivência
            if (this.modoJogar === 'sobrevivencia') {
                setTimeout(() => this.carregarNovaPergunta(), 3000); // Carrega uma nova pergunta após 3 segundos
            } else {
                setTimeout(() => this.carregarNovaPergunta(), 3000); // Carrega uma nova pergunta após 3 segundos no modo aprender
            }
        } else if (this.modoJogar === 'sobrevivencia') {
            document.getElementById('jogo')!.classList.add('escondido'); // Esconde a tela de jogo
            document.getElementById('fim-de-jogo')!.classList.remove('escondido'); // Mostra a tela de fim de jogo
        } else {
            this.carregarNovaPergunta(); // Carrega uma nova pergunta se o modo for "aprender"
        }
    }

    // Método para tentar novamente no modo sobrevivência
    tentarNovamente() {
        document.getElementById('fim-de-jogo')!.classList.add('escondido'); // Esconde a tela de fim de jogo
        document.getElementById('jogo')!.classList.remove('escondido'); // Mostra a tela de jogo
        this.pontuacao = 0; // Reseta a pontuação
        document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`; // Atualiza a pontuação exibida
        this.carregarNovaPergunta(); // Carrega uma nova pergunta
    }

    // Método para retornar ao menu principal
    retornarAoMenu() {
        document.getElementById('fim-de-jogo')!.classList.add('escondido'); // Esconde a tela de fim de jogo
        document.getElementById('menu')!.classList.remove('escondido'); // Mostra o menu principal
    }

    // Método privado para embaralhar um array (utilizado para embaralhar as opções)
    private embaralharArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de lugar
        }
    }

    // Método para configurar o botão de som
    private configurarBotaoSom() {
        let botaoSom = document.getElementById('toggle-som') as HTMLButtonElement;
        let musica = document.getElementById('musica') as HTMLAudioElement;
        let somAtivado = true;

        botaoSom.addEventListener('click', () => {
            if (somAtivado) {
                musica.pause();
                botaoSom.innerText = 'Ativar Som';
            } else {
                musica.play();
                botaoSom.innerText = 'Desativar Som';
            }
            somAtivado = !somAtivado;
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
    },
    {
        nome: "Nepal",
    urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
    perguntas: [
        {
            texto: "País onde está localizado o Monte Evereste",
            resposta: "Nepal",
            opcoes: ["Nepal", "Índia", "Austrália", "Canadá"]
        }
    ]
},

{
    nome: "Rússia",
    urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
    perguntas: [
        {
            texto: "Maior país do mundo",
            resposta: "Rússia",
            opcoes: ["Rússia", "Estados Unidos", "China", "Alemanha"]
        }
    ]
},

{
    nome: "Vaticano",
    urlBandeira: "https://m.media-amazon.com/images/I/615kv83+IFL._AC_SY300_SX300_.jpg",
    perguntas: [
        {
            texto: "Menor país do mundo",
            resposta: "Vaticano",
            opcoes: ["Costa Rica", "Luxemburgo", "Mônaco", "Vaticano"]
        }
    ]
},

{
    nome: "Índia",
    urlBandeira: "https://www.bandeirasnacionais.com/data/flags/w580/in.webp",
    perguntas: [
        {
            texto: "País mais populoso do mundo",
            resposta: "Índia",
            opcoes: ["Índia", "China", "Estados Unidos", "Rússia"]
        }
    ]
},

{
    nome: "Chile",
    urlBandeira: "https://bandeira.net/wp-content/uploads/2018/08/bandeira-do-chile-300x200.png",
    perguntas: [
        {
            texto: "País da america do sul que não faz fronteira com o Brasil",
            resposta: "Chile",
            opcoes: ["Chile", "Argentina", "Colômbia", "Uruguai"]
        }
    ]
},

{
    nome: "Canadá",
    urlBandeira: "https://bandeira.net/wp-content/uploads/2018/09/bandeira-do-canada-300x150.png",
    perguntas: [
        {
            texto: "País com maior extensão litorânea do mundo",
            resposta: "Canadá",
            opcoes: ["Brasil", "Austrália", "México", "Canadá"]
        }
    ]
},
{
    nome: "França",
    urlBandeira: "https://todabandeira.com.br/wp-content/uploads/2023/08/bandeira-da-franca.jpg",
    perguntas: [
        {
            texto: "País onde nasceu Napoleão Bonaparte",
            resposta: "França",
            opcoes: ["França", "Itália", "Inglaterra", "Espanha"]
        }
    ]
},

{
    nome: "Inglaterra",
    urlBandeira: "https://pt.wikipedia.org/wiki/Bandeira_da_Inglaterra#/media/Ficheiro:Flag_of_England.svg",
    perguntas: [
        {
            texto: "País de onde surgiu o futebol",
            resposta: "Inglaterra",
            opcoes: ["Brasil", "Estados Unidos", "França", "Inglaterra"]
        }
    ]
},

    // Adicione mais países com suas perguntas conforme necessário
];

// Cria uma instância do jogo de bandeiras
let jogo = new JogoDeBandeiras(paises);

// Exponha os métodos no objeto global para que possam ser chamados a partir do HTML
(window as any).iniciarJogo = (jogar: ModoJogar) => jogo.iniciarJogo(jogar);
(window as any).tentarNovamente = () => jogo.tentarNovamente();
(window as any).retornarAoMenu = () => jogo.retornarAoMenu();
