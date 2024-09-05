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
                setTimeout(() => this.carregarNovaPergunta(), 3000); // Carrega uma nova pergunta após 3 segundos
            }
            else {
                setTimeout(() => this.carregarNovaPergunta(), 3000); // Carrega uma nova pergunta após 3 segundos no modo aprender
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
        "nome": "Estados Unidos",
        "urlBandeira": "https://restcountries.com/v3/flags/us.png",
        "perguntas": [
            {
                "texto": "Qual país tem a maior economia do mundo e sua capital é Washington, D.C.?",
                "resposta": "Estados Unidos",
                "opcoes": ["Estados Unidos", "Canadá", "México", "Brasil", "Argentina"]
            }
        ]
    },
    {
        "nome": "Brasil",
        "urlBandeira": "https://restcountries.com/v3/flags/br.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido pela Amazônia e o Cristo Redentor?",
                "resposta": "Brasil",
                "opcoes": ["Brasil", "Colômbia", "Peru", "Venezuela", "Argentina"]
            }
        ]
    },
    {
        "nome": "Argentina",
        "urlBandeira": "https://restcountries.com/v3/flags/ar.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por seu tango e pela cidade de Buenos Aires?",
                "resposta": "Argentina",
                "opcoes": ["Argentina", "Uruguai", "Brasil", "Chile", "Paraguai"]
            }
        ]
    },
    {
        "nome": "Canadá",
        "urlBandeira": "https://restcountries.com/v3/flags/ca.png",
        "perguntas": [
            {
                "texto": "Qual país é o segundo maior do mundo em área territorial?",
                "resposta": "Canadá",
                "opcoes": ["Canadá", "Rússia", "China", "Estados Unidos", "Brasil"]
            }
        ]
    },
    {
        "nome": "Austrália",
        "urlBandeira": "https://restcountries.com/v3/flags/au.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por seus cangurus e a Grande Barreira de Corais?",
                "resposta": "Austrália",
                "opcoes": ["Austrália", "Nova Zelândia", "Indonésia", "Filipinas", "Japão"]
            }
        ]
    },
    {
        "nome": "Alemanha",
        "urlBandeira": "https://restcountries.com/v3/flags/de.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua cerveja e Oktoberfest?",
                "resposta": "Alemanha",
                "opcoes": ["Alemanha", "França", "Países Baixos", "Suíça", "Áustria"]
            }
        ]
    },
    {
        "nome": "França",
        "urlBandeira": "https://restcountries.com/v3/flags/fr.png",
        "perguntas": [
            {
                "texto": "Qual país é famoso pela Torre Eiffel e pela cidade de Paris?",
                "resposta": "França",
                "opcoes": ["França", "Itália", "Espanha", "Alemanha", "Grã-Bretanha"]
            }
        ]
    },
    {
        "nome": "Grã-Bretanha",
        "urlBandeira": "https://restcountries.com/v3/flags/gb.png",
        "perguntas": [
            {
                "texto": "Qual país é famoso por sua monarquia e o Big Ben?",
                "resposta": "Grã-Bretanha",
                "opcoes": ["Grã-Bretanha", "França", "Espanha", "Alemanha", "Itália"]
            }
        ]
    },
    {
        "nome": "Egito",
        "urlBandeira": "https://restcountries.com/v3/flags/eg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido pelas Pirâmides de Gizé e o rio Nilo?",
                "resposta": "Egito",
                "opcoes": ["Egito", "Marrocos", "Turquia", "Arábia Saudita", "Tunísia"]
            }
        ]
    },
    {
        "nome": "Grécia",
        "urlBandeira": "https://restcountries.com/v3/flags/gr.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido como o berço da democracia e dos Jogos Olímpicos?",
                "resposta": "Grécia",
                "opcoes": ["Grécia", "Itália", "Turquia", "Egito", "Chipre"]
            }
        ]
    },
    {
        "nome": "Japão",
        "urlBandeira": "https://restcountries.com/v3/flags/jp.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua cultura samurai e a cidade de Tóquio?",
                "resposta": "Japão",
                "opcoes": ["Japão", "China", "Coreia do Sul", "Taiwan", "Tailândia"]
            }
        ]
    },
    {
        "nome": "México",
        "urlBandeira": "https://restcountries.com/v3/flags/mx.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua culinária picante e as ruínas maias?",
                "resposta": "México",
                "opcoes": ["México", "Brasil", "Argentina", "Peru", "Colômbia"]
            }
        ]
    },
    {
        "nome": "Rússia",
        "urlBandeira": "https://restcountries.com/v3/flags/ru.png",
        "perguntas": [
            {
                "texto": "Qual país é o maior do mundo em área territorial?",
                "resposta": "Rússia",
                "opcoes": ["Rússia", "Canadá", "China", "Estados Unidos", "Brasil"]
            }
        ]
    },
    {
        "nome": "China",
        "urlBandeira": "https://restcountries.com/v3/flags/cn.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido pela Muralha da China e pela Cidade Proibida?",
                "resposta": "China",
                "opcoes": ["China", "Japão", "Coreia do Sul", "Mongólia", "Índia"]
            }
        ]
    },
    {
        "nome": "Índia",
        "urlBandeira": "https://restcountries.com/v3/flags/in.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido pelo Taj Mahal e por ser o segundo mais populoso do mundo?",
                "resposta": "Índia",
                "opcoes": ["Índia", "China", "Paquistão", "Bangladesh", "Nepal"]
            }
        ]
    },
    {
        "nome": "África do Sul",
        "urlBandeira": "https://restcountries.com/v3/flags/za.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua diversidade cultural e por Nelson Mandela?",
                "resposta": "África do Sul",
                "opcoes": ["África do Sul", "Nigéria", "Quênia", "Egito", "Gana"]
            }
        ]
    },
    {
        "nome": "Arábia Saudita",
        "urlBandeira": "https://restcountries.com/v3/flags/sa.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas cidades sagradas de Meca e Medina?",
                "resposta": "Arábia Saudita",
                "opcoes": ["Arábia Saudita", "Irã", "Iraque", "Egito", "Turquia"]
            }
        ]
    },
    {
        "nome": "Espanha",
        "urlBandeira": "https://restcountries.com/v3/flags/es.png",
        "perguntas": [
            {
                "texto": "Qual país é famoso por suas touradas e pela cidade de Barcelona?",
                "resposta": "Espanha",
                "opcoes": ["Espanha", "Portugal", "França", "Itália", "Grécia"]
            }
        ]
    },
    {
        "nome": "Itália",
        "urlBandeira": "https://restcountries.com/v3/flags/it.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas pizzas e pela cidade de Roma?",
                "resposta": "Itália",
                "opcoes": ["Itália", "França", "Espanha", "Portugal", "Grécia"]
            }
        ]
    },
    {
        "nome": "Suécia",
        "urlBandeira": "https://restcountries.com/v3/flags/se.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua política de bem-estar social e pelo Nobel de Literatura?",
                "resposta": "Suécia",
                "opcoes": ["Suécia", "Noruega", "Dinamarca", "Finlândia", "Países Baixos"]
            }
        ]
    },
    {
        "nome": "Dinamarca",
        "urlBandeira": "https://restcountries.com/v3/flags/dk.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas pequenas ilhas e pelo conto de fadas de Hans Christian Andersen?",
                "resposta": "Dinamarca",
                "opcoes": ["Dinamarca", "Suécia", "Noruega", "Alemanha", "Holanda"]
            }
        ]
    },
    {
        "nome": "Noruega",
        "urlBandeira": "https://restcountries.com/v3/flags/no.png",
        "perguntas": [
            {
                "texto": "Qual país é famoso por seus fiordes e pelo prêmio Nobel da Paz?",
                "resposta": "Noruega",
                "opcoes": ["Noruega", "Suécia", "Dinamarca", "Finlândia", "Islândia"]
            }
        ]
    },
    {
        "nome": "Islândia",
        "urlBandeira": "https://restcountries.com/v3/flags/is.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas paisagens vulcânicas e geiseres?",
                "resposta": "Islândia",
                "opcoes": ["Islândia", "Noruega", "Suécia", "Dinamarca", "Finlândia"]
            }
        ]
    },
    {
        "nome": "Nepal",
        "urlBandeira": "https://restcountries.com/v3/flags/np.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por ser a casa do Monte Everest?",
                "resposta": "Nepal",
                "opcoes": ["Nepal", "Índia", "Tibete", "China", "Bhutão"]
            }
        ]
    },
    {
        "nome": "Bhutão",
        "urlBandeira": "https://restcountries.com/v3/flags/bt.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por medir o sucesso através da Felicidade Interna Bruta?",
                "resposta": "Bhutão",
                "opcoes": ["Bhutão", "Nepal", "Índia", "China", "Mongólia"]
            }
        ]
    },
    {
        "nome": "Malawi",
        "urlBandeira": "https://restcountries.com/v3/flags/mw.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por seu grande lago e rica biodiversidade?",
                "resposta": "Malawi",
                "opcoes": ["Malawi", "Zâmbia", "Tanzânia", "Moçambique", "Uganda"]
            }
        ]
    },
    {
        "nome": "Zâmbia",
        "urlBandeira": "https://restcountries.com/v3/flags/zm.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas Cataratas Victoria, compartilhadas com o Zimbábue?",
                "resposta": "Zâmbia",
                "opcoes": ["Zâmbia", "Moçambique", "Tanzânia", "Botswana", "Zimbábue"]
            }
        ]
    },
    {
        "nome": "Zimbábue",
        "urlBandeira": "https://restcountries.com/v3/flags/zw.png",
        "perguntas": [
            {
                "texto": "Qual país é famoso pelas Cataratas Victoria e pela vida selvagem no Parque Nacional Hwange?",
                "resposta": "Zimbábue",
                "opcoes": ["Zimbábue", "África do Sul", "Botswana", "Namíbia", "Moçambique"]
            }
        ]
    },
    {
        "nome": "Namíbia",
        "urlBandeira": "https://restcountries.com/v3/flags/na.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por seu deserto de Sossusvlei e pela costa esquelética?",
                "resposta": "Namíbia",
                "opcoes": ["Namíbia", "Botswana", "África do Sul", "Zâmbia", "Moçambique"]
            }
        ]
    },
    {
        "nome": "Qatar",
        "urlBandeira": "https://restcountries.com/v3/flags/qa.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas reservas de petróleo e pela cidade de Doha?",
                "resposta": "Qatar",
                "opcoes": ["Qatar", "Emirados Árabes Unidos", "Arábia Saudita", "Omã", "Bahrein"]
            }
        ]
    },
    {
        "nome": "Emirados Árabes Unidos",
        "urlBandeira": "https://restcountries.com/v3/flags/ae.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas luxuosas cidades como Dubai e Abu Dhabi?",
                "resposta": "Emirados Árabes Unidos",
                "opcoes": ["Emirados Árabes Unidos", "Qatar", "Arábia Saudita", "Omã", "Bahrein"]
            }
        ]
    },
    {
        "nome": "Omã",
        "urlBandeira": "https://restcountries.com/v3/flags/om.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua costa ao longo do Mar da Arábia e sua capital, Muscat?",
                "resposta": "Omã",
                "opcoes": ["Omã", "Qatar", "Emirados Árabes Unidos", "Arábia Saudita", "Bahrein"]
            }
        ]
    },
    {
        "nome": "Bahrein",
        "urlBandeira": "https://restcountries.com/v3/flags/bh.png",
        "perguntas": [
            {
                "texto": "Qual país é um arquipélago no Golfo Pérsico, conhecido por seu setor financeiro?",
                "resposta": "Bahrein",
                "opcoes": ["Bahrein", "Qatar", "Emirados Árabes Unidos", "Omã", "Arábia Saudita"]
            }
        ]
    },
    {
        "nome": "Jordânia",
        "urlBandeira": "https://restcountries.com/v3/flags/jo.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por Petra, uma antiga cidade esculpida em rochas?",
                "resposta": "Jordânia",
                "opcoes": ["Jordânia", "Israel", "Síria", "Líbano", "Egito"]
            }
        ]
    },
    {
        "nome": "Líbano",
        "urlBandeira": "https://restcountries.com/v3/flags/lb.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua capital, Beirute, e pela rica história da Fenícia?",
                "resposta": "Líbano",
                "opcoes": ["Líbano", "Síria", "Israel", "Jordânia", "Egito"]
            }
        ]
    },
    {
        "nome": "Síria",
        "urlBandeira": "https://restcountries.com/v3/flags/sy.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido pela antiga cidade de Damasco, uma das cidades habitadas mais antigas do mundo?",
                "resposta": "Síria",
                "opcoes": ["Síria", "Líbano", "Jordânia", "Iraque", "Turquia"]
            }
        ]
    },
    {
        "nome": "Iémen",
        "urlBandeira": "https://restcountries.com/v3/flags/ye.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua cidade antiga de Sana'a e sua localização na Península Arábica?",
                "resposta": "Iémen",
                "opcoes": ["Iémen", "Arábia Saudita", "Omã", "Qatar", "Emirados Árabes Unidos"]
            }
        ]
    },
    {
        "nome": "Afeganistão",
        "urlBandeira": "https://restcountries.com/v3/flags/af.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua paisagem montanhosa e por ser o local de várias guerras ao longo dos anos?",
                "resposta": "Afeganistão",
                "opcoes": ["Afeganistão", "Paquistão", "Irã", "Uzbequistão", "Tadjiquistão"]
            }
        ]
    }
]; // Adicione mais países com suas perguntas conforme necessário
// Cria uma instância do jogo de bandeiras
const jogo = new JogoDeBandeiras(paises);
// Exponha os métodos no objeto global para que possam ser chamados a partir do HTML
window.iniciarJogo = (jogar) => jogo.iniciarJogo(jogar);
window.tentarNovamente = () => jogo.tentarNovamente();
window.retornarAoMenu = () => jogo.retornarAoMenu();
