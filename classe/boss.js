const Personagem = require('./personagem');//importa informções da classe Personagem


class Boss extends Personagem {
  constructor(nome, hp, poder) {
    super(nome, hp);
    this.poder = poder;
  }

  atacar() {
    return Math.floor(Math.random() * (this.poder/2)+1);
  }

  defender(dano) {
    return super.defender(dano);
  }
}
//exporta para que outro arquivo possa usar estas insformações.
module.exports = Boss;
