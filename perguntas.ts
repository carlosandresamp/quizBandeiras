// Define uma interface para representar um país
export interface Pais {
    nome: string;  // Nome do país
    urlBandeira: string;  // URL da imagem da bandeira do país
    perguntas: Pergunta[];  // Lista de perguntas relacionadas ao país
}

// Define uma interface para representar uma pergunta
export interface Pergunta {
    texto: string;  // Texto da pergunta
    resposta: string;  // Resposta correta para a pergunta
    opcoes: string[];  // Lista de opções de resposta
}

// Lista de países com suas respectivas bandeiras e perguntas
export let paises: Pais[] = [
//    {
//         nome: "Argentina",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
//         perguntas: [
//             {
//                 texto: "Qual país é conhecido por seu tango e pela cidade de Buenos Aires?",
//                 resposta: "Argentina",
//                 opcoes: ["Alemanha", "Angola", "Venezuela", "Argentina"]
//             }
//         ]
//     },
//     {
//         nome: "Estados Unidos",
//         urlBandeira: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg",
//         perguntas: [
//             {
//                 "texto": "Qual país tem a maior economia do mundo e sua capital é Washington, D.C.?",
//                 "resposta": "Estados Unidos",
//                 "opcoes": ["Estados Unidos", "Canadá", "México", "Brasil"]
//             }
//         ]
//     },
//     {
//         nome: "Canadá",
//         urlBandeira: "https://th.bing.com/th/id/OIP.33a-T-OTWFdAc2NcZKqw4AHaD_?w=338&h=182&c=7&r=0&o=5&pid=1.7",
//         perguntas: [
//             {
//                 "texto": "Qual país é o segundo maior do mundo em área territorial?",
//                 "resposta": "Canadá",
//                 "opcoes": ["Rússia", "Canadá", "China", "Estados Unidos"]
//             }
//         ]
//     },
//     {
//         nome: "Austrália",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por seus cangurus e a Grande Barreira de Corais?",
//                 "resposta": "Austrália",
//                 "opcoes": ["Austrália", "Japão", "Nova Zelândia", "Indonésia"]
//             }
//         ]
//     },
//     {
//         nome: "Alemanha",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por sua cerveja e Oktoberfest?",
//                 "resposta": "Alemanha",
//                 "opcoes": ["Alemanha", "Áustria", "Suíça", "França"]
//             }
//         ]
//     },
//     {
//         nome: "França",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é famoso pela Torre Eiffel e pela cidade de Paris?",
//                 "resposta": "França",
//                 "opcoes": ["França", "Espanha", "Alemanha", "Itália"]
//             }
//         ]
//     },
//     {
//         nome: "Reino Unido",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é famoso por sua monarquia e o Big Ben?",
//                 "resposta": "Reino Unido",
//                 "opcoes": ["Grã-Bretanha", "Alemanha", "Reino Unido", "Espanha"]
//             }
//         ]
//     },
//     {
//         nome: "Egito",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido pelas Pirâmides de Gizé e o rio Nilo?",
//                 "resposta": "Egito",
//                 "opcoes": ["Turquia", "Egito", "Arábia Saudita", "Marrocos"]
//             }
//         ]
//     },
//     {
//         nome: "Grécia",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido como o berço da democracia e dos Jogos Olímpicos?",
//                 "resposta": "Grécia",
//                 "opcoes": ["Grécia", "Itália", "Egito", "Turquia"]
//             }
//         ]
//     },
//     {
//         nome: "Japão",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por sua cultura samurai e a cidade de Tóquio?",
//                 "resposta": "Japão",
//                 "opcoes": ["Japão", "China", "Coreia do Sul", "Taiwan"]
//             }
//         ]
//     },
//     {
//         nome: "México",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por sua culinária picante e as ruínas maias?",
//                 "resposta": "México",
//                 "opcoes": ["México", "Brasil", "Argentina", "Peru"]
//             }
//         ]
//     },
//     {
//         nome: "Rússia",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é o maior do mundo em área territorial?",
//                 "resposta": "Rússia",
//                 "opcoes": ["Brasil", "Estados Unidos", "Rússia", "China"]
//             }
//         ]
//     },
//     {
//         nome: "China",
//         urlBandeira: "https://static.significados.com.br/foto/china.jpg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por sua grande Muralha e pela Cidade Proibida?",
//                 "resposta": "China",
//                 "opcoes": ["China", "Mongólia", "Coreia do Sul", "Japão"]
//             }
//         ]
//     },
//     {
//         nome: "Índia",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido pelo Taj Mahal e por ser o segundo mais populoso do mundo?",
//                 "resposta": "Índia",
//                 "opcoes": ["Índia", "Nepal", "China", "Paquistão"]
//             }
//         ]
//     },
//     {
//         nome: "África do Sul",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por sua diversidade cultural e por Nelson Mandela?",
//                 "resposta": "África do Sul",
//                 "opcoes": ["Egito", "Nigéria", "África do Sul", "Quênia"]
//             }
//         ]
//     },
//     {
//         nome: "Arábia Saudita",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por suas cidades sagradas de Meca e Medina?",
//                 "resposta": "Arábia Saudita",
//                 "opcoes": ["Arábia Saudita", "Egito", "Iraque", "Irã"]
//             }
//         ]
//     },
//     {
//         nome: "Espanha",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é famoso por suas touradas e pela cidade de Barcelona?",
//                 "resposta": "Espanha",
//                 "opcoes": ["Espanha", "Grécia", "França", "Itália"]
//             }
//         ]
//     },
//     {
//         nome: "Itália",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por suas pizzas e pela cidade de Roma?",
//                 "resposta": "Itália",
//                 "opcoes": ["França", "Portugal", "Itália", "Espanha"]
//             }
//         ]
//     },
//     {
//         nome: "Suécia",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por sua política de bem-estar social e pelo Nobel de Literatura?",
//                 "resposta": "Suécia",
//                 "opcoes": ["Noruega", "Suécia", "Dinamarca", "Países Baixos"]
//             }
//         ]
//     },
//     {
//         nome: "Dinamarca",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por suas pequenas ilhas e pelo conto de fadas de Hans Christian Andersen?",
//                 "resposta": "Dinamarca",
//                 "opcoes": ["Noruega", "Dinamarca", "Alemanha", "Suécia"]
//             }
//         ]
//     },
//     {
//         nome: "Noruega",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é famoso por seus fiordes e pelo prêmio Nobel da Paz?",
//                 "resposta": "Noruega",
//                 "opcoes": ["Noruega", "Dinamarca", "Islândia", "Suécia"]
//             }
//         ]
//     },
//     {
//         nome: "Nepal",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é famoso pelo Monte Everest e por ser o berço do Buda?",
//                 "resposta": "Nepal",
//                 "opcoes": ["Butão", "Nepal", "Tibete", "Paquistão"]
//             }
//         ]
//     },
//     {
//         nome: "Brasil",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido pelo Carnaval e pelo Cristo Redentor?",
//                 "resposta": "Brasil",
//                 "opcoes": ["Argentina", "Brasil", "México", "Colômbia"]
//             }
//         ]
//     },
//     {
//         nome: "Malawi",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/1920px-Flag_of_Malawi.svg.png",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por seu grande lago e rica biodiversidade?",
//                 "resposta": "Malawi",
//                 "opcoes": ["Malawi", "Zâmbia", "Moçambique", "Uganda"]
//             }
//         ]
//     },
//     {
//         nome: "Emirados Árabes Unidos",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por suas luxuosas cidades como Dubai e Abu Dhabi?",
//                 "resposta": "Emirados Árabes Unidos",
//                 "opcoes": ["Emirados Árabes Unidos", "Qatar", "Arábia Saudita", "Brasil"]
//             }
//         ]
//     },
//     {
//         nome: "Jordânia",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por Petra, uma antiga cidade esculpida em rochas?",
//                 "resposta": "Jordânia",
//                 "opcoes": ["Jordânia", "Israel", "Líbano", "Egito"]
//             }
//         ]
//     },
//     {
//         nome: "Líbano",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido por sua capital, Beirute, e pela rica história da Fenícia?",
//                 "resposta": "Líbano",
//                 "opcoes": ["Líbano", "Israel", "Jordânia", "Egito"]
//             }
//         ]
//     },
//     {
//         nome: "Síria",
//         urlBandeira: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
//         perguntas: [
//             {
//                 "texto": "Qual país é conhecido pela antiga cidade de Damasco, uma das cidades habitadas mais antigas do mundo?",
//                 "resposta": "Síria",
//                 "opcoes": ["Síria", "Líbano", "Jordânia", "Turquia"]
//             }
//         ]
//     },
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
    }
    
    
    // ☝🏻 ACIMA TODAS AS PERGUNTAS ESTÃO COM AS IMAGENS DAS BANDEIRAS!!!
];