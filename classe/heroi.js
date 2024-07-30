const Personagem = require('./personagem');//importa informções da classe Personagem

class Heroi extends Personagem {
  constructor(nome, hp) {
    super(nome, hp);
  }

  atacar() {
    return Math.floor(Math.random() * 25);  // Dano do herói pode ser maior
  }

  defender(dano) {
    return super.defender(dano);  // Usa o método da classe Personagem
  }
}
//exporta para que outro arquivo possa usar estas insformações.s
module.exports = Heroi;
