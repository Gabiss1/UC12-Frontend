class teste {
    constructor(){
    }

    testar (): void{
        console.log("Oi")
    }
}

class testes extends teste{
    teeh (): void{
        console.log("Comeraqui")
    }
}

const teste1: testes = new testes();

teste1.testar();
teste1.teeh();