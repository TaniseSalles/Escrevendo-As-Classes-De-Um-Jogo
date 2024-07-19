class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}


const heroiNovo = new Heroi("Tanise", 423, "mago");
console.log(heroiNovo.atacar()); 

// testando
const heroiNovo2 = new Heroi ("Malévola", 525, "gurreira") 
console.log(heroiNovo2.idade)