class Pokemon{
    private nome:String;
    private tipagem:String;

    constructor(nome:String, tipagem:String){
        this.nome = nome;
        this.tipagem = tipagem;
    }

    protected atacar(){}
}

class Pikachu extends Pokemon{

    constructor(nome:String, tipagem:String){
        super(nome, tipagem)
    }

    protected atacar(): void {
            console.log(this+" atacou com Raios")
    }
}