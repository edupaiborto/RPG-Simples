//importa o prompt e as os arquivos que serão usados pra funcionar o jogo
const prompt = require('prompt-sync')();
const Heroi = require('./classe/heroi');
const Vilao = require('./classe/vilao');
const Boss = require('./classe/boss');
const Fase = require('./classe/fase');

//validade das entradas do usuário.
function obterEntrada(mensagem, opcoesValidas) {
  let entrada;
  do {
    entrada = prompt(mensagem).trim();
  } while (!opcoesValidas.includes(entrada));
  return entrada;
}

//função que da inicio o jogo.
function iniciarJogo() {
  console.log('Bem-vindo, Eduardo! Seu objetivo é resgatar a princesa que foi raptada pelo vilão.');

//tratamento para não deixar entrada com nome do heroi em branco
  while (true) {
    const nomeHeroi = prompt('Digite o nome do herói: ').trim();
    if (!nomeHeroi) {
      console.log('Nome do herói não pode ser vazio.');
      continue;
    }
    //criação do heroi e inicio das fases e por ultimo o boss
    const heroi = new Heroi(nomeHeroi, 100);

    const fases = [
      new Fase('Floresta densa', new Vilao('Vilão 1', 50, 20)),
      new Fase('Caverna sombria', new Vilao('Vilão 2', 50, 25)),
      new Fase('Castelo do vilão', new Vilao('Vilão 3', 50, 30), new Boss('Chefe 1', 50, 30)) // Passando o boss
    ];
    //estrutura pra saber se passou de fase ou não 
    let faseAtual = 0;

    while (faseAtual < fases.length) {
      console.log(`\nVocê está prestes a enfrentar um vilão na fase ${faseAtual + 1}.`);
      fases[faseAtual].descrever();

      const vitoria = iniciarCombate(heroi, fases[faseAtual].vilao, fases[faseAtual].boss);

      if (!vitoria) {
        console.log('Você foi derrotado.');
        const opcao = obterEntrada('Deseja tentar novamente ou voltar ao início?\n1. Tentar novamente\n2. Voltar ao início\n3. Sair\nDigite o número da ação: ', ['1', '2', '3']);

        //estrutura de decisão para saber qual atitude em relação a derrota. repetir/voltar/sair
        if (opcao === '1') {
          heroi.hp = 100; // Restaurar o HP do herói
          faseAtual--; // Repetir a mesma fase
        } else if (opcao === '2') {
          break; // Voltar ao início do jogo
        } else if (opcao === '3') {
          console.log('Saindo do jogo. Até a próxima!');
          return; // Sair do jogo
        }
      } else {
        console.log('Você derrotou o vilão!');//caso houver vitoria do heroi vai pra proxima fase
        faseAtual++;
      }
    }
    //Ao fim do jogo recebe esta mensagem e pergunta se quer jogar novamente ou sair
    console.log('Parabéns! Você resgatou a princesa e completou o jogo.');
    const opcaoFinal = obterEntrada('Deseja jogar novamente ou sair?\n1. Jogar novamente\n2. Sair\nDigite o número da ação: ', ['1', '2']);
    //Se a opção for a 2 sai do jogo
    if (opcaoFinal === '2') {
      console.log('Saindo do jogo. Até a próxima!');
      return; // Sair do jogo
    }
  }
}
//para o heroi não chegar com hp baixo pra enfrentar o boss 
function restaurarHP(heroi) {
  console.log('Você está prestes a enfrentar o boss. Seu HP será restaurado.');
  heroi.hp = 100; // Restaurar HP para 100 antes do combate com o boss
}
//inicio do combate onde ambos se atacam ou defende ou foge, e ainda da opção de sair no meio da luta
function iniciarCombate(heroi, vilao, boss = null) {
  while (heroi.hp > 0 && vilao.hp > 0) {
    console.log(`\nHP do Herói: ${heroi.hp}`);
    console.log(`HP do Inimigo: ${vilao.hp}`);

    const acao = obterEntrada('Escolha uma ação:\n1. Atacar\n2. Defender\n3. Fugir\n4. Sair\nDigite o número da ação: ', ['1', '2', '3', '4']);

    if (acao === '4') {
      console.log('Saindo do jogo. Até a próxima!');
      return false; // Sair do jogo
    }
    //Estrutura de decisão que vai que pelo usuario ira indicar qual será a ação
    if (acao === '1') {
      const danoHeroi = heroi.atacar();
      vilao.hp = Math.max(vilao.hp - danoHeroi, 0);
      console.log(`${heroi.nome} atacou ${vilao.nome} e causou ${danoHeroi} de dano.`);
    } else if (acao === '2') {
      const danoInimigo = vilao.atacar();
      const danoRecebido = heroi.defender(danoInimigo);
      heroi.hp = Math.max(heroi.hp - danoRecebido, 0);
      console.log(`${vilao.nome} atacou ${heroi.nome} e causou ${danoRecebido} de dano após defesa.`);
      continue;
    } else if (acao === '3') {
      console.log('Você fugiu da batalha!');
      return false;
    }

    if (vilao.hp > 0) {
      const danoInimigo = vilao.atacar();
      heroi.hp = Math.max(heroi.hp - danoInimigo, 0);
      console.log(`${vilao.nome} atacou ${heroi.nome} e causou ${danoInimigo} de dano.`);
    }
  }

  if (vilao.hp === 0 && boss) {
    restaurarHP(heroi); // Restaurar HP antes de enfrentar o boss
    console.log('Prepare-se para enfrentar o boss!');
    return iniciarCombate(heroi, boss);
  }
  //retorna se o heroi venceu
  return heroi.hp > 0;
}

iniciarJogo();
