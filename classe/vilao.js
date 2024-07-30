const Personagem = require('./personagem');//importa informções da classe Personagem

class Vilao extends Personagem {
  constructor(nome, hp) {
    super(nome, hp);
  }

  atacar() {
    return Math.floor(Math.random() * 20);// Dano do vilão é um pouco menor do que a do herói
  }

  defender(dano) {
    return super.defender(dano);// Usa o método da classe Personagem
}

}
//exporta para que outro arquivo possa usar estas insformações.
module.exports = Vilao;
