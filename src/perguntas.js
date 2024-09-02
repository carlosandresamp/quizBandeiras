// Lista de países com suas respectivas bandeiras e perguntas
export let paises = [
    {
        nome: "Argentina",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        perguntas: [
            {
                texto: "Qual país é conhecido por seu tango e pela cidade de Buenos Aires?",
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
        nome: "Canadá",
        urlBandeira: "https://th.bing.com/th/id/OIP.33a-T-OTWFdAc2NcZKqw4AHaD_?w=338&h=182&c=7&r=0&o=5&pid=1.7",
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
        nome: "Malawi",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/1920px-Flag_of_Malawi.svg.png",
        perguntas: [
            {
                "texto": "Qual país é conhecido por seu grande lago e rica biodiversidade?",
                "resposta": "Malawi",
                "opcoes": ["Malawi", "Zâmbia", "Moçambique", "Uganda"]
            }
        ]
    },
    {
        nome: "Emirados Árabes Unidos",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por suas luxuosas cidades como Dubai e Abu Dhabi?",
                "resposta": "Emirados Árabes Unidos",
                "opcoes": ["Emirados Árabes Unidos", "Qatar", "Arábia Saudita", "Brasil"]
            }
        ]
    },
    {
        nome: "Jordânia",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por Petra, uma antiga cidade esculpida em rochas?",
                "resposta": "Jordânia",
                "opcoes": ["Jordânia", "Israel", "Líbano", "Egito"]
            }
        ]
    },
    {
        nome: "Líbano",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua capital, Beirute, e pela rica história da Fenícia?",
                "resposta": "Líbano",
                "opcoes": ["Líbano", "Israel", "Jordânia", "Egito"]
            }
        ]
    },
    {
        nome: "Síria",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido pela antiga cidade de Damasco, uma das cidades habitadas mais antigas do mundo?",
                "resposta": "Síria",
                "opcoes": ["Síria", "Líbano", "Jordânia", "Turquia"]
            }
        ]
    },
    {
        nome: "Iémen",
        urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua cidade antiga de Sana'a e sua localização na Península Arábica?",
                "resposta": "Iémen",
                "opcoes": ["Iémen", "Arábia Saudita", "Qatar", "Emirados Árabes Unidos"]
            }
        ]
    },
    {
        nome: "Afeganistão",
        urlBandeira: "https://geo5.net/imagens/bandeira-do-afeganistao-2000px.png",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua paisagem montanhosa e por ser o local de várias guerras ao longo dos anos?",
                "resposta": "Afeganistão",
                "opcoes": ["Paquistão", "Irã", "Uzbequistão", "Afeganistão"]
            }
        ]
    },
    {
        "nome": "Portugal",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/640px-Flag_of_Portugal.svg.png",
        "perguntas": [
            {
                "texto": "Qual país europeu é famoso pelo vinho do Porto e pelo Algarve?",
                "resposta": "Portugal",
                "opcoes": ["Portugal", "Espanha", "Itália", "França"]
            }
        ]
    },
    {
        "nome": "Áustria",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/640px-Flag_of_Austria.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é famoso por suas paisagens alpinas e por ser o berço de Mozart?",
                "resposta": "Áustria",
                "opcoes": ["Áustria", "Suíça", "Alemanha", "França"]
            }
        ]
    },
    {
        "nome": "Islândia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas paisagens vulcânicas, gêiseres e auroras boreais?",
                "resposta": "Islândia",
                "opcoes": ["Islândia", "Noruega", "Finlândia", "Suécia"]
            }
        ]
    },
    {
        "nome": "Chile",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Chile_%28Rectangular_canton_variant_1%29.svg/640px-Flag_of_Chile_%28Rectangular_canton_variant_1%29.svg.png",
        "perguntas": [
            {
                "texto": "Qual país sul-americano é famoso por sua longa e estreita extensão de terra?",
                "resposta": "Chile",
                "opcoes": ["Chile", "Peru", "Argentina", "Uruguai"]
            }
        ]
    },
    {
        "nome": "Vietnã",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/640px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas paisagens exuberantes e a história da Guerra do Vietnã?",
                "resposta": "Vietnã",
                "opcoes": ["Vietnã", "Tailândia", "Laos", "Camboja"]
            }
        ]
    },
    {
        "nome": "Irlanda",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/640px-Flag_of_Ireland.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é famoso por suas paisagens verdes e tradição de música celta?",
                "resposta": "Irlanda",
                "opcoes": ["Irlanda", "Escócia", "País de Gales", "Inglaterra"]
            }
        ]
    },
    {
        "nome": "Colômbia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/640px-Flag_of_Colombia.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por seu café e o carnaval de Barranquilla?",
                "resposta": "Colômbia",
                "opcoes": ["Colômbia", "Brasil", "Venezuela", "Peru"]
            }
        ]
    },
    {
        "nome": "Indonésia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/640px-Flag_of_Indonesia.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é o maior arquipélago do mundo e é conhecido pelos templos de Bali?",
                "resposta": "Indonésia",
                "opcoes": ["Indonésia", "Filipinas", "Malásia", "Tailândia"]
            }
        ]
    },
    {
        "nome": "Cuba",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/640px-Flag_of_Cuba.svg.png",
        "perguntas": [
            {
                "texto": "Qual país caribenho é conhecido por sua música salsa e a Revolução Cubana?",
                "resposta": "Cuba",
                "opcoes": ["Cuba", "República Dominicana", "Porto Rico", "Haiti"]
            }
        ]
    },
    {
        "nome": "Turquia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/640px-Flag_of_Turkey.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por sua história rica e o ponto turístico Hagia Sophia?",
                "resposta": "Turquia",
                "opcoes": ["Turquia", "Grécia", "Egito", "Irã"]
            }
        ]
    },
    {
        "nome": "Coreia do Sul",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/640px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é famoso por sua tecnologia avançada e cultura pop (K-pop)?",
                "resposta": "Coreia do Sul",
                "opcoes": ["Coreia do Sul", "Japão", "China", "Taiwan"]
            }
        ]
    },
    {
        "nome": "Mongólia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Mongolia_%281992%E2%80%932011%29.svg/640px-Flag_of_Mongolia_%281992%E2%80%932011%29.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas vastas estepes e a história de Genghis Khan?",
                "resposta": "Mongólia",
                "opcoes": ["Mongólia", "Cazaquistão", "Rússia", "China"]
            }
        ]
    },
    {
        "nome": "Quênia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/640px-Flag_of_Kenya.svg.png",
        "perguntas": [
            {
                "texto": "Qual país africano é famoso por suas vastas savanas e pelo Parque Nacional de Amboseli?",
                "resposta": "Quênia",
                "opcoes": ["Quênia", "Tanzânia", "Uganda", "Botsuana"]
            }
        ]
    },
    {
        "nome": "Peru",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/640px-Flag_of_Peru_%28state%29.svg.png",
        "perguntas": [
            {
                "texto": "Qual país andino é lar da antiga cidade de Machu Picchu?",
                "resposta": "Peru",
                "opcoes": ["Peru", "Bolívia", "Equador", "Chile"]
            }
        ]
    },
    {
        "nome": "Nova Zelândia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/640px-Flag_of_New_Zealand.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por suas paisagens deslumbrantes e foi cenário de 'O Senhor dos Anéis'?",
                "resposta": "Nova Zelândia",
                "opcoes": ["Nova Zelândia", "Austrália", "Fiji", "Tonga"]
            }
        ]
    },
    {
        "nome": "Finlândia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/640px-Flag_of_Finland.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido como 'A Terra dos Mil Lagos' e pelo maior consumo de café per capita?",
                "resposta": "Finlândia",
                "opcoes": ["Finlândia", "Noruega", "Suécia", "Dinamarca"]
            }
        ]
    },
    {
        "nome": "Etiópia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/640px-Flag_of_Ethiopia.svg.png",
        "perguntas": [
            {
                "texto": "Qual país africano é conhecido como o berço da humanidade e onde foi encontrado o fóssil de 'Lucy'?",
                "resposta": "Etiópia",
                "opcoes": ["Etiópia", "Quênia", "Sudão", "Somália"]
            }
        ]
    },
    {
        "nome": "Tailândia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Thailand_%28proposed_shade_of_colours%29.svg/640px-Flag_of_Thailand_%28proposed_shade_of_colours%29.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é famoso por suas praias exóticas, templos budistas e a culinária vibrante?",
                "resposta": "Tailândia",
                "opcoes": ["Tailândia", "Vietnã", "Camboja", "Laos"]
            }
        ]
    },
    {
        "nome": "Suíça",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/640px-Flag_of_Switzerland.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido por seus alpes, neutralidade política e chocolates famosos?",
                "resposta": "Suíça",
                "opcoes": ["Suíça", "Áustria", "Alemanha", "França"]
            }
        ]
    },
    {
        "nome": "Polônia",
        "urlBandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png",
        "perguntas": [
            {
                "texto": "Qual país é conhecido pela cidade histórica de Cracóvia e o campo de concentração de Auschwitz?",
                "resposta": "Polônia",
                "opcoes": ["Polônia", "Alemanha", "Hungria", "Romênia"]
            }
        ]
    }
    // ☝🏻 ACIMA TODAS AS PERGUNTAS ESTÃO COM AS IMAGENS DAS BANDEIRAS!!!
];
