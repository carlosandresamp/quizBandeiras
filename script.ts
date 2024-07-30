// Define os tipos para os modos de jogo e modos de jogar
type ModoJogo = 'normal' | 'contorno';
type ModoJogar = 'sobrevivencia' | 'aprender';

// Define a interface para um país, incluindo o nome e URLs para as bandeiras e contornos
interface Pais {
    nome: string;
    urlBandeira: string;
    urlContorno: string;
}

// Classe que gerencia o jogo de bandeiras
class JogoDeBandeiras {
    private paises: Pais[]; // Lista de países disponíveis no jogo
    private pontuacao: number; // Pontuação do jogador
    private modoJogo: ModoJogo; // Modo de jogo atual (normal ou contorno)
    private modoJogar: ModoJogar; // Modo de jogar atual (sobrevivência ou aprender)

    constructor(paises: Pais[]) {
        this.paises = paises; // Inicializa a lista de países
        this.pontuacao = 0; // Inicializa a pontuação em 0
        this.modoJogo = 'normal'; // Define o modo de jogo padrão
        this.modoJogar = 'sobrevivencia'; // Define o modo de jogar padrão
    }

    // Método para iniciar o jogo com os modos especificados
    iniciarJogo(modo: ModoJogo, jogar: ModoJogar) {
        this.pontuacao = 0; // Reseta a pontuação
        this.modoJogo = modo; // Define o modo de jogo
        this.modoJogar = jogar; // Define o modo de jogar
        document.getElementById('menu')!.classList.add('escondido'); // Esconde o menu principal
        document.getElementById('jogo')!.classList.remove('escondido'); // Mostra a tela de jogo
        document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`; // Atualiza a pontuação exibida
        this.carregarNovaBandeira(); // Carrega uma nova bandeira para o jogador adivinhar
    }

    // Método privado para carregar uma nova bandeira
    private carregarNovaBandeira() {
        const paisAleatorio = this.paises[Math.floor(Math.random() * this.paises.length)]; // Seleciona um país aleatório
        const containerBandeira = document.getElementById('container-bandeira')!; // Obtém o container da bandeira
        const containerOpcoes = document.getElementById('container-opcoes')!; // Obtém o container das opções
        containerBandeira.innerHTML = `<img src="${this.modoJogo === 'normal' ? paisAleatorio.urlBandeira : paisAleatorio.urlContorno}" alt="Bandeira">`; // Define a imagem da bandeira

        const opcoes = [paisAleatorio.nome]; // Inicializa as opções com o nome do país correto
        while (opcoes.length < 3) {
            const opcaoAleatoria = this.paises[Math.floor(Math.random() * this.paises.length)].nome; // Seleciona um nome de país aleatório
            if (!opcoes.includes(opcaoAleatoria)) {
                opcoes.push(opcaoAleatoria); // Adiciona a opção aleatória se ainda não estiver na lista
            }
        }

        this.embaralharArray(opcoes); // Embaralha as opções
        containerOpcoes.innerHTML = opcoes.map(opcao => `<button onclick="jogo.verificarResposta('${opcao}', '${paisAleatorio.nome}')">${opcao}</button>`).join(''); // Cria os botões de opções
    }

    // Método para verificar a resposta do jogador
    verificarResposta(selecionado: string, correto: string) {
        if (selecionado === correto) {
            this.pontuacao++; // Incrementa a pontuação se a resposta estiver correta
            document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`; // Atualiza a pontuação exibida
            this.carregarNovaBandeira(); // Carrega uma nova bandeira
        } else if (this.modoJogar === 'sobrevivencia') {
            document.getElementById('jogo')!.classList.add('escondido'); // Esconde a tela de jogo
            document.getElementById('fim-de-jogo')!.classList.remove('escondido'); // Mostra a tela de fim de jogo
        } else {
            this.carregarNovaBandeira(); // Carrega uma nova bandeira se o modo for "aprender"
        }
    }

    // Método para tentar novamente no modo sobrevivência
    tentarNovamente() {
        document.getElementById('fim-de-jogo')!.classList.add('escondido'); // Esconde a tela de fim de jogo
        document.getElementById('jogo')!.classList.remove('escondido'); // Mostra a tela de jogo
        this.pontuacao = 0; // Reseta a pontuação
        document.getElementById('pontuacao')!.innerText = `Pontuação: ${this.pontuacao}`; // Atualiza a pontuação exibida
        this.carregarNovaBandeira(); // Carrega uma nova bandeira
    }

    // Método para retornar ao menu principal
    retornarAoMenu() {
        document.getElementById('fim-de-jogo')!.classList.add('escondido'); // Esconde a tela de fim de jogo
        document.getElementById('menu')!.classList.remove('escondido'); // Mostra o menu principal
    }

    // Método privado para embaralhar um array (utilizado para embaralhar as opções)
    private embaralharArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de lugar
        }
    }
}

// Lista de países com suas respectivas bandeiras e contornos (mapas do país)
const paises: Pais[] = [
    { nome: "Brasil", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bra-map.png" },
    { nome: "Alemanha", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Germany_map.png" },
    { nome: "Japão", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Japan_map.png" },
    { nome: "Estados Unidos", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/3/34/US_map.png" },
    { nome: "França", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/e/e4/France_map.png" },
    { nome: "Reino Unido", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/b/bc/UK_map.png" },
    { nome: "Itália", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Italy_map.png" },
    { nome: "Canadá", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Canada_map.png" },
    { nome: "China", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/1/12/China_map.png" },
    { nome: "Rússia", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Russia_map.png" },
    { nome: "Índia", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/6/62/India_map.png" },
    { nome: "México", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Mexico_map.png" },
    { nome: "Austrália", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/2/24/Australia_map.png" },
    { nome: "Espanha", urlBandeira: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/0/01/Spain_map.png" },
    { nome: "Argentina", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/2/29/Argentina_map.png" },
    { nome: "Portugal", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Portugal_map.png" },
    { nome: "África do Sul", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/c/c9/South_Africa_map.png" },
    { nome: "Egito", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Egypt_map.png" },
    { nome: "Nigéria", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/3/36/Nigeria_map.png" },
    { nome: "Coreia do Sul", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/2/29/South_Korea_map.png" },
    { nome: "Arábia Saudita", urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg", urlContorno: "https://upload.wikimedia.org/wikipedia/commons/0/09/Saudi_Arabia_map.png" },
    // Adicionar mais países conforme necessário
];

// Cria uma instância do jogo de bandeiras
const jogo = new JogoDeBandeiras(paises);

// Exponha os métodos no objeto global para que possam ser chamados a partir do HTML
(window as any).iniciarJogo = (modo: ModoJogo, jogar: ModoJogar) => jogo.iniciarJogo(modo, jogar);
(window as any).tentarNovamente = () => jogo.tentarNovamente();
(window as any).retornarAoMenu = () => jogo.retornarAoMenu();
