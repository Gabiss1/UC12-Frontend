var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pokemon = /** @class */ (function () {
    function Pokemon(nome, tipagem) {
        this.nome = nome;
        this.tipagem = tipagem;
    }
    Pokemon.prototype.atacar = function () {
        console.log("Um Pokémon atacou!");
    };
    return Pokemon;
}());
var Pikachu = /** @class */ (function (_super) {
    __extends(Pikachu, _super);
    function Pikachu(nome, tipagem) {
        return _super.call(this, nome, tipagem) || this;
    }
    Pikachu.prototype.atacar = function () {
        console.log(this.nome + " atacou com Raios!");
    };
    return Pikachu;
}(Pokemon));
var Raichu = /** @class */ (function (_super) {
    __extends(Raichu, _super);
    function Raichu(nome, tipagem) {
        return _super.call(this, nome, tipagem) || this;
    }
    return Raichu;
}(Pikachu));
var poke = new Pikachu("Kachu", "Elétrico");
var poke2 = new Raichu("Kachuzão", "Elétrico");
poke2.atacar();
poke.atacar();
