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
        urlBandeira: "data:image/jpeg;base64,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",
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
        urlBandeira: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAmVBMVEUAAAAAej3OESb///8AbR/NAB3RDCYAfD3LAAAAfz6tDiDWACStLytCaTnWEidCBQzYV2H12dvZW2T44uTMAAvMABHMABbjjpT88fLqrbH++frYVWDooqc/BQtFBgzVAB/la3TQHzHyzc/VRlHklZvdbnftt7vSMkDhg4rwxcjTO0jppqvaYGnz0NL12tz56OnvvcHffoXlZHJFSJA/AAAEKUlEQVR4nO3cW1faQBSG4XTS0Kk92ZIgKG1FxKJibfv/f1wJGuSQw0z27MSZ/b0XLi/MWvismR2UJNHJ9wi1b/D55Effr8HjlFoDfun7VXibUgAkpBQACSm1BcQMtE+pHUCsQNuUAiAhpQBISKkjQMxA8w75AGjVMR+2sEVlfAA0rpwPgIZV8WEGGlXNhxVoUB0fABur5wNgQ018mIG1NfMBsCYTPmzhysz4AFiRKR8ASzPnwwwsyYYPK/AoOz4AHmTLB8C97PkwA3dqwwfAbe34sIWfa8sHwE3t+bCFIxofAIl84rcwlU84IJ1PNKALPsEz0A2f2BXoik8ooDs+kYAu+QTOQLd84gBd8wnbwu75RAFy8AkC5OETMwO5+ISsQD4+EYCcfAIAefmCn4HcfIED8vMFvYW74NsAhvnMhG741oA/L4dxcHXGp1SiT7/2/eu6rkO+HPBbYICd8oUH2DFfDngREGDnfGHNwB74QgLshS+cGdgTXygrsDe+ME4iPfKFsAJ75fN/BvbM5ztg73x+z0B7voQD0NcZaM03WzH4eQtoyzc6u9IMfL7OQFs+PYzVgMXPyxVozJds9mwyj+PrLP9uwDIDfTuJmPIliwudJiq9ieNHrZJM/1piBprzDe7i8c0q1efrY071fDqMz0YMfL7NQOPNqyfrnz7f/GbDx3izBpnyaQWanzpG53sHnnLs3S2gLzPQnC9b7h53y7b4NvmyAi3euOjdz2lnTO9etvkxAy02b/Lwcth4zrv68nwAND7z6sX+7JtqxuH3XKaXFS/7tWTIN0puD498vEt58cJZfcmi7Ngp5/rzAc+Ub3B3sby/2jl1jB8mZ6s5J15QZ95BMsq0viyOmmidjhK2k2+I7/vyf1YVR7G+6/Nl5eXZ8GXT9QEP+ZfffHx+zLwiG750kq87fc34B69PKy/Piu9PfLN203/jMc97Fn9mXpENnx7eb1Zduorxv76nbPiSxfOezVYzBjyfZl6R1WcdydE37vD8W3l5r+Bjcn/xXgWffyeMl3rn83PmFeEKK1K4vo8Uri4lhWubSeHKelK4r4MU7ioihXvaSOGOSlK4n5cU7iYn1eGzDP7hWQat8T58/PT+bXh18xyXHO/dmwDr4ilCweJ1wBcyHjtf2HjMfKHjsfKFj8fIJwGPjU8GHhOfFDwWPjl4DHyS8JzzycJzzCcNzymfPDyHfBLxnPHJxHPEJxXPCZ9cPAd8kvHIfLLxiHzS8Uh8wCPwAS+vJR/wnmrFB7yiFnzAe8maD3i7WfIBbz8rPuAdZsEHvOOM+YBXlumDSIBXmhEf8Koy4ANedY18wKurgQ949dXyAa+pGj7gNVfJBzyTKviAZ1YpH/BMK+EDnnlHfMCzKQIepQh4lCLgUYqARykCHqUIeJQi4FGKgEcpAh6l/0PGOJFQFSTfAAAAAElFTkSuQmCC",
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
        urlBandeira: "data:image/png;base64,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",
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
        urlBandeira: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAjVBMVEUAAADOESb///8Aej3ODyTk5ORbW1vOABsAcCgAcisAeDoAdzcAdDEAci0AbiMAbyby+PVUmnHK39O+2Mnt9fEAbB56r5AVgEbR49mDs5eMuZ8bhEzZ6OAAZQCy0L/4/PtfoHqHtpovilcAaRRBkWNJlWmTvaWmybVmpH/g7eY2jFtwqYjD281QmW+exa4j3+/7AAAEZklEQVR4nO2b2XLaQBBFCZNFswixyIANRpg4NgTb//95kUBsujIYq7uSVN3z5qLc1To9PZug9YVUaf3tBP5B6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6AShE4ROEDpB6ARpfSVVWj9IlVabVKEThE4QOkHoBKEThE4QTSfd/zS2ppN1phY6W6uF1nVi+2qh+1YttKqT/s1QLfbwRs+3ppNhGGmFzkZBz7emE+MSrWL2E2eUQrc1nYytUSvmMBg7Voqt6eQ2GDdRij1xJtwqxdZ0YpwxkU4xx5Exis2j5qTIW6uY+RBU891WdPJQ5K3UPHnr5L4fVGK3FZ0UrWN0ZsJ89jaazaPlZJoUeZtwpxD7LmxiJ1OF2AVaTsq8VZpn0zpKvgu0nJR5GytfzKk1er4LlJysOtu8NYr5FMrYnZV47A1KTvZ5KxRzNwRNeBKPvUHJyWKXt7HSxVzZXWi3EA5dIuEkm98n0Sl7JcbElY9+mmvW56n5Wfn/+BDaVT5K7ucS11gy42QWvPkYrnPtuXDYcZfDbvBhJvI0Qr2TPtrLORdp+8HVsQf+Y8LtYyrzMGLzyV30gXJ+Lu301weEu0Rsry83x/ZH4VLa0WcX5qeLwoORu78SXHeyeXI+7dHn0x5fEB71BF9uiK7Fz/ZM50fLJmtCtjwzVLx9FnuGtvT+ZLV4r5w+bpr287trW5jIHiCk92zr+nLGi+Zbt9XvuC60i6Tff4nvY2tXzkTmsvq2ZsLy4frV/QLye/v0F4wU/yIU+wV8O6lNyREK550eJG6lXhxnsFHxPaHQRyiME5xmG8+vO55xRgn/wziZYd5ixcQhaGKZM84x8k5ea+ZYK7Oj6tbs8f2rSOhjxJ2kdbsIoWLWDMFcinjziDuZHWrp9wuQUPMcWscdzFvx5hF3ss/b2eFon3mQaJ7ufvYOo6HdCZdfeaSddHcafH5QTXtWspj7IWhf03bf7Ax56e+2STsZlHmXB9W3spx+LhB77ssBuLmbznqRUvNIO9nm7exb+fd0EqSKWQ7BMNnd55bHcBHfxwg7ycI27cNBNVtvDim2+alkOwSToyuH1VZ4EP5+pbCTIm+XnB5UZ0leTr9sHHtZhElOG2WdOBHfJwg7yfP2cTXF9Lc1zjQtZpbHiBfVzcggeAnfJwg7ieuvoR86LmpazEHkOjXX0OmjdXHD0BVknbwknfr3lX1jmxZzaV39fe5TJ5G6i9gi62Tp33vH1503vDDI7LvX0GMj2zyyTl7PPPdbs+YZnHlhnsluZUWdnB8JDceJYuwK/P0OQicInSB0gtAJQidI6xup0iKEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgi5lu+kyh+02AB/6fbY8QAAAABJRU5ErkJggg==",
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
        urlBandeira: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAAD1BMVEXOESb///8AAADeX21VVVXuw+J9AAAAoElEQVR4nO3PCQ0AMAwAoe7xr3k2lhw4YAYAAAAAAAAAAAAAAAAA+M5pm9Xm3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t+W/9+22W3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m3+bf5t/m31/wMJkK5SavsmOgAAAABJRU5ErkJggg==",
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
        urlBandeira: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAA8FBMVEUAAAAAejbTIBH///3oiH/ZPjHleW/ial/WLyHql4/fW0/zxL/cTUHrnJXUJRfqlIzjc2nVKhztpJ3aRTjpjobmgHfXNijlfnTwta/jcGbfX1PnhXzvr6nYOCvrmpP65eH32dT77endVEjuqKL1y8b20szwsqzyvLbcUEScy7BgYF+8vLvD4M6Ojo398/D76OWQxad1t5GioqHIyMZhrYEZGRmAgH81NTUVhUdPo3NbW1qsrKux1sE1lmDR0c+32cVycnFJSUgkjVLP5teAvZqGhoUjIyNPT05ts4vp6efn8urN5dYzlV6YmJcwMDBHn20SWkoCAAAeo0lEQVR4nO2dCXuiSrOAsdlBdlQWjSggIor7Fo1LNImaMf7/f3Mb1MQsc849X8j9Muemnxk1CD6+dFV1VXV1iyBf0cBXtNRXtC/B/+H/4f/h/+H/4f/h/+H/4f/h/+H/4f/h/+H/4f/h/+G/aFn1/yM/Hz8aDADp/Otj/3Z+KnrQy/ChbOI4UEhgkgDgVcNW/j/wU54EeCENX6k8L2vwGS9ZgEkDHOcBReEsz6f/pfxxzwMV9jklwRc2DxQcPrk6fATVrC0AmaqGJMP+S/ktI3rUoxsRIUKxN+U0r4bFPAVIR/JkYENpsEUG/EYT/mh+g2EI+CRJQLJBrmxqWtEJLbQY2jkCZEslvcgBLhILFZiMrpcpKvuv4lcqIMPjOVBQWA1IhMEVGKIgkMxRK7Kk62lAiOyDAiqAV0heJv4V/DFfFT4bQCIN76qI5nTAMad3+TIPeF46vgY40FGXJw1gVBRey+o8Jf3x/GIWDm85Eho9qPvpJqtkQTavnZUiT1SzGTVLlU8HJJIEOZCBIkIauAxK+p/OT5E0U1ABNHGwy+0sTl7wqBld4DFcyZnUhazrOsBJl7KBgIM8Rl390fw8zlOUJqrZK2DLlgW4y8HdxAiBzOF5g8Nf+PkMVBaeDZmInDFNGUh/Lr8Uya9eZitVA1Q9WaEverMqkwWV5Bkj73rUO5+HB1WoMFUuA68/34A/j58T4YOXY73yW75INAAg3x8+txwN6eXoepH7U/lNAnJTrOVIHyJKIFsGmegmfPB+mgFM0YleMYT5Z/Kr6UwU06mF39CbkoRJqqSCNPnRHYAiEh/lM2n1D+Tnof3+q9ie5kkyo0Ytg6Up7C/OVAEu8H8cP12IZFjRMSH3QeeacKQXBEFVo3+CgFX5d+4eFJGcgIkKMNIgS/9p/CY0b7KpkmVB/CixUSaEK0FjtYpd8dg8pnIq/pECiEKZVDMyjIvMP4j/GgEkdHdIjuLN3G/SOqpmmwp8T6SAVKY1W/z4NJ7AeIqDwyhDgtH4T+CvIchikYX6nIZxnfBRrx7BqvETJcc2gjd+dx7A6SwgoH+AZTeb1Kj37fkHNWSwUCWAY1Br/y6nJ3EK85uef7lT8AaYCpDU9jq1aX9v/iHkHyyHAwyUYb8KH4/7F01Vs78bHy9uEjR+GAOw9c1hDflvvjH/vn99vxggjWwOKgDxtxlNIGg4MMp/d1YaesFmJtsardu3vdvWN+a/W3Tu94vhRHZ0VbX0d+L/1uFlPBmrvDmr/Dbxw+uWqoqOPb3Z+Lf+Zv19+R+G++11MNgHuIfz9Ae2z6Ne/63nKMC9OUd9bwtxmoefWG+t671d6ybRYSBB+iEy6E+CYBJs7w1Tkd/l72B36288QqWCYfnXh3DiA7ORlRXTuN3N/fl8OlqPEjQBCfI/DWodZLYNhrNlxch/oPxpGbt65eYpV/AsQ7hUAErGhCvwril5Ujusfs13q5HfW//6jvwPD9vr5XDb3faDjuiVP+hEIUcQ2It0S7kMHCcBRV6Vn4/xWIYgzPe+sFT2dL8+2tV3N4fxbpycCiTHfz976D7MZt2noLukHez90I/Z0SNxGu4oE0vbRmQPqgYpnA0jEfvB1XcmgDedq8Nj/Vd9tRrXD6vb78c/rM2ur2fL2vZhsh9cCR9ofyaM0kHpY+6XxHBaS5OQFlcYkmCujreFcISINvOB8Fyt/el41zuser1VLzELkBg/sh1OOneDWRDMkKFlf8BPaKzIkEdtx8qkRUo0BTva4Im0YuPxpCBg8k6GIT9wibK2dZN6nM936/V0erMbfTf+YX97Pex2rjuLfacz0d59/0iq8zRNy3GkTzJiqACbIqD8UyKgcSkvcZHFwG06Oukjx1Hzp77f9nt+/aa3S2wISIy/U+s2AmSBLiZ9pCEzHwBkjuiRgguFMAdE5ijnJi/ZQBHw6I+cGYkHrr+/mpFbqdF0g7ZT01a95yc1BCTF3+8+9O+Czn7S6XRmM+ajwEes2LDBYB4oJIYWgAeq8W1i0gA6CzaIchxpLWreB9ojGauV7/vTll9f344fk1KAhPCvF50ACe6RzqRbGz7c0R/FNGXUELQ4m0sqNipBfjLW+TQJsCrIR9N/AJREFjOKH1xdoNfj297j1E/d1lNzv53QEJgQf397v5hMBt1tt4ZczwaVjxT4hZ+pyqgCWL4cD3sGA2QF3o2/5qcq61Uv1XvcPUIDuLlNygImAo/0n7Y1ZN+4Xk46tdly//Rh4vOFP0uQqApoko99f2j4HCBpsfz/nh+ov/zDY8+f3oxbrVRvdztKJeEFJMH/1HjoLIPhBEGCbjC87neuP0hmXvIDgXfCAu4ArBBXgBECyJGM8df8uZ4/6t3UH+ej1PRmfvDHrSRsYBL8yGK/HfaDSSOYzYbdYRBsP5zYueDHTcq1KJXkRUoiJcqRspXTTOfv+cldvX7zeLPa1VswCLrZ+YnkwhLhry0HDWTygCxmwXLQXeyvP0zpXPADhhM8z7VgKxYtl/Xs85j/e/5Cz9/U14f5Yzs1no5a7fG34R8savv+PnhadGZQAx4Wwf6D8es1P/Bcl9VsmTZpOm97rGud0oC/58/69c24Xh+t/PbN3B+1eu0kMiFJ8CNBLUD6s1owmN0PBvvBpP/R93/Nr3EqpmIYZqqYoKqqYBN/xw9G03Zr3b7dree9FbQBvXkC+InwN/aLbuQBBYOn7uypP+kOX750lXxO+Vzwk4L6ZoSkMscZkDf8hYuE0U19OrqFMWB7+ggtf33TSiITmAT/06y26MMbMNsjg8EEKsFL/QeHotZbfl6k7eL7EZIXoxDoNT+Goi/psdRoNZ2u1ykf9n5q1IZD4LfgX9buZuhsiUQ34Ho/RK73tdpz8odj3ed6xjIq5B3ZzgmCWywWbVJ5nx4VmJLs2sIzf8YpoWcJUHobaPJ/+ZHwp1KHHbpa9w7fgB+5G9zf38ev+t3JPpgtFotnIlwzCKCUwtDFMJWOW6T1v23HU4T4tSOBMse+TI+0N+1V3Z/WY89vdHt7u07AACbAv1zu++fXk9qwsUCuX7q0nIZRH4lCOf4r7I+aDbVBL1xkQnqpTeumNz07vqPW4fPdnwD/8G4/aSzPf93tr+/vL+wfn4kiWmgGHOKftTgfol/Oodz8uh37z11+aE1brc9nAT7P/xAsZ4va4vznYj+8vqj/SztxkGujaFHB/0Ejoqsow6u+fFSqd+M/z/+1e+3VYf75IDAB/ocgmHQnnfPfg1rthV+y0GguGFAaHAj+gQoIcTBEUqElXfD3zr0/8v36dD4ffwf7t7h7QO/vG3eN+9OBzvCl/o9FUTEe6ghoAth/oPyxBykaKOo9jxKpg3/60retVuv2Fh2vN/99/vtJ56nbRZaD+9nT8cjTi/zDXkc1ET/x08dx7CI4yqYZkmTwi4GQOM6axbkAIMrR9S/9fwr4fu1u24dR/fGXP/20C/Bp/uFkEHRrk0mnC0Pg46HBmZ+04PcPC8QzfzEMZYWUwzB0SJ7MF+G7YXSKYxYkAoZCRZLAPfjmkT+twBNQ9JxLTJ2k/6Z+A4fBae9xvp5+2gB+mv9pMajNBshi0u9v98NX/JlQiL+/8MxfQtG8QuZRVOUzxVDTFajdfDoHtSSUs1n4pBM4G7mMMb+oRJd7FvGK/8bfjUbTTWq92rQ3n04BfJof6SCN2raGTPpB92lyf8GfhpgRAK3yZ34rXYn4Q0NxQ+HCtVeiOyACOuZn1BM/gcWXo6Fy4o+G/tvpLxgETlObXa+V8v+W7+v5G7VhcPcQNLr3i05/Dw8sT/YPKr8bGQCLYZ75AQf5bYYJ2Tchsg71wAZ0xE+JR36KdOBFTSgt3sn+HSLLP/Lbt/VWfQyFv/d5B/Dz/Eh3cL297wdPSNBAlvuo+2N+PtLsWABw4TV/gQnfhz9KE+oGKFzwk3h0MRd9TCwqqUgB/EOqNYdh4Oh2N17XP42fBP9g0ZjNBsFDMGgsFrXlmT/+9nJkwXL0a3689FF+EIfGQQAX/IR+FH/Yqmf+Q6/dbq3r4/l6tWolUQ31afp7yDtAJ7Wgc3+/XQ6QBtI9yn82+uLhVWTBcvgrfjb3AT4ATGQrL/nzkc/gvvAfHlOt1PoGvb31p705uk61U/99+1cb3C+GaKezuEMm204DCfbBKf4voScFCJXcJX9F/hAfQPOHWi/81XTp3P2odOz/uV9PtfzdNLVu+z56s7ldfzoH+Pn+b9xNuoNl2AmCwbbW6MzuGkf7z1eib+5Ay44anJR54Xd/VxUoQRPAPvPnyvCSkh19yDGFklq31iu/1du151MfPbQfp+vWd/B/Ov27h8mg21n2Z7N+9/561o/58xn0LAAybUa3wsY8zM4LnE1wJJAEoQr0ywUxjNtEWVbVVA6exhm5qOvlyPqhWJwbT41WPWj4Vqvbm+ljezpej/xv4P8gy6A7218Pt0E/2F7PJvtJJ45/Mmg+Vl0OSrFrGHAgPNv8LCeppKBSICcYr9KAcLgzz6/lAumexR+6UZHFSG38qT9d9Xbz0XR3GPurev07xD/7bv++Owwm2+1wu7zvXPdnD5Cfgh0XdTpa4lBHr9JUEQ3L6bjJEpDJU3tV/FaNTAUVN1PR0zSLOpEHgF410RCOgKnxbjT2bw+7m91uOv/1eDt6/HwG9PP8yGzW6Exqw9mg1gkW24dunP+M7F0+/vaqlaVMGd6Pks7ETeaBqJ3aq+JfeL/CzDH7YVOZHFMoxt1filQICsYotXoc7zZzv7deHXpTv7VafRo/Cfnf1vqLALnrTmZdZLHo3A86/TjhgaKxBbChiNNmOkTdEyZ0fFXmGOZWr3joBxZe+r+UPfY/kc5VeFDg4hsYjQPQBRz561u/1049rqb1dWq6GfV230H+B8Gs1u8sgqfJBMZBMBIOIvk/Gn/4WIro1HIGhoLeMbUB7QAmgjRBKICgmTRIP1dLRKbi1P9lJqqLjHwiK74JTiT/80OqDuOe6fTXvO2PNqv65x2gz/M3httGd9LoP80GjX3Q2Xcn9wsSHMdtMzxatDRpQ36zaoi4kM1AfiKqejYYyC/iJHfBn1cIskzzQoYUTyqRiz9JA2T71q/78B8cBX+NWtN6a3fzHfS/gTw0Hh66yORu0UWuBzWksd8fnblYdY/CfSVH/GVSVK6O/LEHnCPonK15Nrjgx3UjjfGCeayfpU5GJBoAWtG8/3qcqm/W01R9PG6NU9+Bv/YEbcBi3+nCIaBxPXt6mPWj/H+cukDtY+gGriJf3sSrTEGP+c246tcT6ZxAyK/4C2Q5TfC2frrQiWNgNIR3ow3H/1+rXms3rc99fwOH/l+fnwL+PP9T7fll/364rO2DRZT/joMX6PodMXQj4tdVzrCO/R+rhSnSVyFsuQt+RjYJhyoyxwwYKMdedDwLdmhPW73Dr9uXypfe52fAPs8PFeBN68T5f/akt3GjVOsVvxjLv0jQav6M94rfU8vHQ3EAjTajAPjGf1vzk8AEaAL8+/dH4iK+2HUNz/7c7/iBjOP4yQK+8HMn8QexD4lGKVP+fbLne/DXlm+PDHMvXXdycKNB/GP+yA067o1ywV85rwqIb2J8MzLvYt1DAhUgCfAjjYe3R+Ja1sgFRs9TuelI/xk9l7bf8kuaw7Is8Wz/CYMR+OK5AjTKIKNRkCTJb7/6uJX6fBHcp+Gfgv1gFgyW/cuDeBzrRMm/50RX1P94upolT/yxlxfxAz1Kbwpn/iyTVnS+eU6OYufwV8Uvv/bosK6v1v70v5//gA5gv4buO4tJMOlE1a/7Rq0P4vp36Ly8TF9F+k9m1DIb8+eEqBZWjfnJaF5MO/OnVZHMS2f1BxIcR6N8SZYGo17Ljypg/el82vZbaG/0Pea/oQfYqQ3voCA8ILX+ftCfNDgl6k8RLT1P30b+kBa7tiZ0g1nOjhvneGdDoWFYFDOc/d/zdQAGDpEM0Yrcmo6g19uDcj+/Wf/q+Ql4f4nEP8unxnWwfJgsZ53r+8ViPxxeay4NBSBXfJm9xiMf5hjbcNFD+er4RxwByzAqhhoR+QjM8fDF5EA5hPeycOVqvZuD397c9vzdYTo+zHvrm/Hh0wbg8/z3k+vGFkb/wVMjaAwfZrNg0S1YHDRozMUMR5QNPlV+OPE/Gv7H3GM4FE0MVt1KFOjIx3MuF8pF82cEZ+H1TbT65aY1b/2a7nbTXavnfwv/p3/Xb3SvkUmwbASdweDufj/QbedtiruEhvox56ExDGfC/yrDmDbDqAK4gqrgCYIOdf2UI1HfLB8jLFtct27X67U/bx3m01Gv3hqtE6iBToAfuW8Mtmg3aCwm97NBdxY0Jh4oMYW3/KgQVzYwqnZkzF0dn02M9+IsHw0HTO+DvBCUHqYEPL81Xz2uV7fTdmteR3ftzyc/E+JHFotJuOjfTxrIrIFOlssGRrIY947/WMujeKx9LHOyuNNzhqLhjZGjMeK09k94ffGVypJq63CYoq1VqjW9HbXRaTJrwZPA3y8Q5GHWbQyCYWeIzma1heZItvo7/nj+nz+v8SGhopBmVCMiRPnvj/lVW3Iqm95uhd74N/N263E1To02n5/9TIR/uOx3asiys+wP4NA/CzoPC06kXFlXLpRYCl/6n6ahANga7HkOvmChFDgO/MOLfP0P+BVFlF1K5DZjv7667bXWo4N/SPX80SGBRVBJ8D/1l/3Fw34LJWBfu+507/qKDeWVA87LEuhojD+W9akw9CXPNSD06RZhTFwkhqKVo/2/WBSMO4BTSTaPj9aP/rjnr1v1XWvcHh1GvxJYAJAAP1KLNr2oXd8toCoEyCIIusUcDeQ8fqxiiloUC5wNgqnGA9/xZlinF5Ya45/nhtIvG+LQgpK3AU0UH+vz9mgOhb697sHIp5dKogA+Cf4Fslj2l7XubAtN/3DfmfVBjlZcWhaUc36bhpHQsyssH30cKkOeXgix1xNVST5rjH5eAksogky7Cp0Do5Xv30xh76/qvcPosEl9vvopofU/i2FQ288m+w60AdvaYrI1Sc/JmpYOTiVPzZdMEDhuZnPU8rN+HNWARC9s5vk9GuiWSTmeju2m0AJC3YchwMrvzW82SSyBSoIfWfQbi36wHGy32wGMhO4CRucE4LnprBl1eiGu47iobmNPnqD6Rg2ci9pg1Y23zqHMbNr1gMDpzHy98f31brdrH+ajTSuZvWAS4UcGDw+L2mwYXG8ng8asu+WypCeYRNYQozgQxj5h+p8Ufx5bnAIsiEaWMGmPzMq7+qrVnu7G85tVrz0eJ7MPRjL8/evlQzALtg/7zmDSGQQC7Xk2wKiMGtszMiTI/6CJMg94NUNhQPagezyH8f7a98e7+uP8MO4lswAwGX5keIfUgsVitmhMoB+MOApf1QlHUTUCI+EtUP6y6P23jSPUnKYqDkFW+bSTarfq01Z7tdnUe6l1QgugE+JHlnAQnF3XZl1kuw9qNEukxTLn2WSWKtsvBZ9/u8f5q3N0u0plSdu7YsQ0wQq9ur9L1R9742gdaAKl74nyI0vkodudBJ1+pzFrWOSVyrnnPUAM+1zCebmvAwMMPi1dQQP5eqOY8zmGfXql5F0OuyKt1m7tj6bz6ao+TiWFn+D+B0so/kvo/UAhqOksV2Uv6nxJuxw/Zy6iYjaLlaKEMCi/JHtgyx0nQ5gLqQEGW+VYsbfq9eab1OFx0x5/u/0PkP7ybjjZdjuNu85wQuQd80LWeVwi4gkNUXwp/SrrvA0YzwTq5U5BGTHK/JYFQsIvSkN406kQ0xvo+/r13fRm/fm8T+L8sC26i85TfzJBJpx6kb8hWU8uZUgPgpUZhX5+h4j3h9QYEX/OdlK0wlThbfJIM5S1SwmiVG6amk5HN9P2Y5KboCXJjwSz2XY/mO0Xl6W9dj5LK15edrwq7EcIcq58LcSFD9Em+Of+z6oSgL5h2XPsvKcI2bx8EUFSG2gAWrvVapogfrL8tUUnaAyGF+v/eJPjDJGvZOywqJokdAnK1MuueHiZAgXmmVESstWsCsiM2gztTAUQjHx1sY9OKnWzbs39TaJ7ACbKj3ROsyDPOu6WrmS57LkGp4dygVEzNq+efvJESsuiYXIZg5DTR1WH7/D5jFrG5VDnDNcryzJXcpkX/qiNksh6fBV//3QDThJru2YxFJuWQWgWz3o2j+OmbRI6DsocpxLPXUuoHMcAXCdMO1PAedtjeatCMHZTDIsZN5+94B+9mwT+TvzwBjzzS6plFLN50ypamu3KBSdtadkMQTFsQRXfVwATolpgy1Qul/UsxcFt1847RSuTzxYNS5XO/EnjJ8jfv7gB0eZeeUN0bLaicHQTZakMa4NSxWUUmy5wHP0OHwa6HFfgbMVwKyVgszmJRJsCp1RY2RGNfEaK+c/433D/K2R4XP3S3y8RpKpyaVFw4D+PFQqcgLKsnOe9QqgLetmrFk+eHaNijHqudDCKVa+qq2RY8Pi8zNpFlSsIrOYIoqOKypVaTqXGMf7o0ErM/UtS/peTRdSuO8FWlgxDSXOWDcqOQwqUa7NZoaKCEscrdFWTGTgMyqps8FmS4klOiPwFRtaqNM5zTYBpKsA5VxJ0xykD2ZLTaYaUuF3d7/Xa6/bGT3AHxAT5kfvGaQEYwmByTqYxoYRyFOV4WU9yiy7NUZ7BZoGQdnK8nAXS2RGgeJCVpYyTVkGWNTxKpl3Z4+FVDiVdQS1QaVq9wpjTN/6VyLzHV/AjyPXgOjYD0W9duCZuk1CAWZ10i7zG0Dnby0mCzfA0w1bf7pBCVlmGBlVZkAhPlkBZ44uuocOrVTJPCY5CnOzf+PMl/1/ID2XgerBoBEXLwTxd43Ke1pR1VctrJUtli1gGd0gMo1TBiHM72YxxZWQKkRsIj6hUJqM7hQzmZIRiSbM9QZeLmpajNd0l2GKx7rfXCVR8fSU/1H5oAWpDSSioms5hssyWmmglV3YtxyUVrchRJEfajJmXC4SMFfEQNAtFUyZwOY8xtiGTlOylKRt1LCedy6OlkifLGK07GE5Lv3rtdru3aSc6AibLjwwasfwXCJpgxTKPa/kiZ4eCJeYsQxV1z2JdtijKspC3ZMJwpSKwKNcQZStPy5zYhO9aeZ21DYsQXSyUuWI+j/NKziFtMh193VEim758HT/SXwzuBgOM4My8yZOYqhU83NYljSrTQLBLNlMmtJB1QzbPkjqLu8DBoYGAf4VFq5QXyww8RwBXaUrjRRn3spqKkfAVJhOZ9jra/iVZ/K/b/18hOYfhy0XPc1274pbyluOVjp4/z3BuiJa8imtajItZnhOGVj53ioOEkuda+ZJbsV3H0yyGMlw53jQwYfIv5gcShes5u0rIklfOVmD/U5x1zAbHmAqZofMay2o2nTHiFeACiH/7jrc4iS5TWrbs8bJYtgkSp5793z+IP2KUNQuFuo1ZZTOPX6GRp0cBAwa9HyVC8SqIF/szKIfnTcbC8kUZLWrcOT7+c/gXp1VdCk8y5SvD49Qip6qlaDIw+kkgD9jv6XMgHZLHqmeipGKcJdAeQ6fL5Pnn8NJJTPf93/DXUO1iA9BstaxXKaYZl3SauUjQZSb3Uh6TLkTvVCnKcqWrOBWkN5lsWS+XL0poDA9N/LcPvowfCWWrKOtVJU0KXqnpsmwRLZaPHCgrK0ouy7ys/87wUYGjg4oizUjHyKjcRC2WdZolltbT6aooF105TDjy/Up+0+EVM89arqYyke1SmkUhd0TGdRyIAnWR2GMKET+MES0rzhvipGrnw2Z0hsRgmmuxdg6X3MxX4H+V/dPYVzvdW7DXba9ZlI9LnRSraAnR/lc4j6cBI5okyVlYJvq9gCptNTWVyORD6/IDKLbyB9k/BPBy8SLCKYfHbXyUjBvKx5ek7YRos2SVilbRKDSteLqDylmWcDZ3YfnlA8gix/9R/FCqLStzzmuLL/YeV18QswUjXc6SJ1PJG/mwcmE28+faEcW04iTon8Jf6wxIhjHMZnhe3Ws4F6LMG5VmMU9UL1f+ZpmMFrp0+tItOCd+eTVsYvAD9XUyO35+OT+y3UK/zqOff7gPunR0/FpiBDgSlJphKR/CEYGtyHRUCOeUwmJoF8NiEx4TjPhUintZJi+RdOQo7lZfMAJ8Bf/9zDFeO3hZLXQ0zwodOnZ1ebLU5HnFEE0Mw3I6gwO+WYou4QuG4IQWq7lh5fVPhfCk85h07PNV/AhCuCVPjZY7kxnOs0ph07LcCnkh3vk3v/oB8hflsgoJBz14VWh5shmpkih4oSt+Af3X2T9cpyss1ALOJJUslVUYjA2jfUDOuG/Lw19WPCgZL/RMRslKlGJkOPgpXl4gC3+O/UN+8/vnlJ5vNismQwGeaFJv32wSEqCgu1Mq2uTbN4/tT+ePGi7KMNgP2fe/DqN40a5gnP77X8P6N/Af2/+mDOjfzP+ftR/+H/4f/h/+H/4f/h/+H/4f/h/+H/4f/h/+H/4f/h/+H/4f/h/+H/4f/n/Q/geZdyJIFxWregAAAABJRU5ErkJggg==",
        perguntas: [
            {
                "texto": "Qual país é conhecido por sua paisagem montanhosa e por ser o local de várias guerras ao longo dos anos?",
                "resposta": "Afeganistão",
                "opcoes": ["Afeganistão", "Paquistão", "Irã", "Uzbequistão"]
            }
        ]
    }
    
    
    // ☝🏻 ACIMA TODAS AS PERGUNTAS ESTÃO COM AS IMAGENS DAS BANDEIRAS!!!
];