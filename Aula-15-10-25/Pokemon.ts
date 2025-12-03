class Pokemon{
    protected nome:String;
    protected tipagem:String;

    constructor(nome:String, tipagem:String){
        this.nome = nome;
        this.tipagem = tipagem;
    }

    atacar(){
        console.log("Um Pokémon atacou!")
    }

    protected resmungar(): void{
    }

    humor(): void{
        this.resmungar()
    }
}

class Pikachu extends Pokemon{

    constructor(nome:String, tipagem:String){
        super(nome, tipagem)
    }

    atacar(): void {
            console.log(this.nome+" atacou com Raios!")
    }

    protected resmungar(): void{
        console.log(this.nome+ " está resmungando!")
    }

    humor(): void{
        console.log(this.nome+ " não parece contente!")
        this.resmungar()
    }
}

class Raichu extends Pikachu{
    constructor(nome:String, tipagem:String){
        super(nome, tipagem)
    }
}

const poke:Pikachu = new Pikachu("Kachu", "Elétrico")
const poke2:Raichu = new Raichu("Kachuzão", "Elétrico")

poke2.atacar()
poke.atacar()

poke2.humor()