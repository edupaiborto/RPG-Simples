class Personagem {
    constructor(nome, hp) {
      this.nome = nome;
      this.hp = hp;
    }
  
    atacar() {
      return Math.floor(Math.random() * 20);
    }
  
    defender(dano) {
      const defesa = Math.floor(Math.random() * 10);
      return Math.max(dano - defesa, 0);
    }
  }
  //exporta para que outro arquivo possa usar estas insformações.
  module.exports = Personagem;
  