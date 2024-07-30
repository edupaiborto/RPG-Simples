class Fase {
    constructor(nome, vilao, boss = null) {
      this.nome = nome;
      this.vilao = vilao;
      this.boss = boss; // Pode ser null se não houver um boss para a fase
    }
  
    descrever() {
      console.log(`Você está em ${this.nome}`);//descreve em qual floresta vc se encontra
      console.log(`Você está enfrentando ${this.vilao.nome} com ${this.vilao.hp} HP.`);//aqui informa qual vilão vc esta enfrentando
  
      if (this.boss) {
        console.log(`O boss da fase é ${this.boss.nome} com ${this.boss.hp} HP.`);//traz informaçoes antes de vc enfrentar o boss
      }
    }
  }
  //exporta para que outro arquivo possa usar estas insformações.
  module.exports = Fase;
  