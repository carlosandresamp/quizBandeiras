class ModoSobrevivência {
    respostaSobrevivencia: unknown;

    constructor(respostaSobrevivencia: Respostas[]) {
        this.respostaSobrevivencia = respostaSobrevivencia;
    }

}

class ModoAprender {
    respostaAprender: unknown;

    constructor(respostaAprender: Respostas[]) {
        this.respostaAprender = respostaAprender;

    }

}

class BandeiraPais {
    bandeiraDoPais: string;
    nomeDoPais: string;

    constructor(bandeiraDoPais: string, nomeDoPais: string) {
        this.bandeiraDoPais = bandeiraDoPais;
        this.nomeDoPais = nomeDoPais;
    }
}

class ContornoPais {
    contornoDoPais: string;
    nomeDoPaisDoContorno: string;

    constructor(contornoDoPais: string, nomeDoPaisDoContorno: string) {
        this.contornoDoPais = contornoDoPais;
        this.nomeDoPaisDoContorno = nomeDoPaisDoContorno;
    }

}

class Respostas {

    //respostas do tipo certo e errado fazem parte do modo "sobrevivência"
    //resposta NemCertoOuErrado fazem parte do modo de jogo "aprender", pois não há que se falar derrota nesse modo, haja vista que apenas será mostrada a resposta certa, sem que o jogador seja eliminado.

    certo: boolean;
    errado: boolean;
    nemCertoOuErrado: unknown;

    constructor(certo: boolean, errado: boolean, nemCertoOuerrado: unknown) {
        this.certo = certo;
        this.errado = errado;
        this.nemCertoOuErrado = nemCertoOuerrado;

    }

}

class Alternativas {

    //As alternativas estão diretamente ligadas ás respostas. Elas receberão os valores da classe Resposta de acordo com o modo de jogo escolhido e com a resposta marcado pelo jogador no momento em que ele estiver jogando. 

    pergunta: Respostas[];

    constructor(pergunta: Respostas[]) {
        this.pergunta = pergunta;
    }

}




// Deixei algumas variáveis como "unknown" para que depois eu possa verificar o tipo no qual ela se encaixe melhor...