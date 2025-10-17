var Pokemon = /** @class */ (function () {
    function Pokemon() {
        this.nome = "Pikachu";
    }
    Pokemon.prototype.comer = function () {
        console.log("Comendo ".concat(this.nome));
    };
    return Pokemon;
}());
var poke = new Pokemon();
poke.comer();
