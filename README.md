Jogo RPG
Bem-vindo ao Jogo RPG! Este é um jogo interativo onde você cria um herói e enfrenta vilões e bosses para resgatar a princesa raptada. O jogo é implementado em JavaScript utilizando Node.js.

Descrição
O jogo RPG é uma aplicação de texto onde o jogador assume o papel de um herói e deve enfrentar uma série de vilões e bosses em diferentes fases. O objetivo final é resgatar uma princesa que foi raptada pelo vilão principal. O jogo utiliza conceitos de programação orientada a objetos e interação com o usuário através do terminal.

Funcionalidades
Criação do Herói: O jogador pode nomear seu herói e iniciar o jogo.
Combate: O herói enfrenta vilões e bosses. O combate pode incluir ações como atacar, defender, e fugir.
Fases: O jogo possui várias fases com vilões e um boss final.
Interação do Usuário: O jogador pode escolher ações durante o combate e decidir o que fazer após ser derrotado.
Reinício e Saída: Após completar o jogo ou ser derrotado, o jogador pode optar por reiniciar o jogo ou sair.
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/edupaiborto/RPG-Simples.git
Navegue para o diretório do projeto:

bash
Copiar código
cd seu-repositorio
Instale as dependências:

bash
Copiar código
npm install
Uso
Para iniciar o jogo, execute o seguinte comando:

bash
Copiar código
node index.js
Siga as instruções no terminal para jogar. Você será solicitado a inserir o nome do herói e escolher ações durante o combate.

Estrutura do Projeto
O projeto está organizado da seguinte forma:

index.js: Arquivo principal que inicia o jogo e gerencia a lógica do jogo.
classe/
heroi.js: Define a classe Heroi.
vilao.js: Define a classe Vilao.
boss.js: Define a classe Boss.
fase.js: Define a classe Fase.
personagem.js: Define a classe base Personagem utilizada por Heroi, Vilao, e Boss.
Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, por favor, abra uma issue ou envie um pull request.

Faça um fork do repositório.

Crie uma branch para sua modificação:

bash
Copiar código
git checkout -b minha-nova-feature
Faça as alterações e commit:

bash
Copiar código
git commit -am 'Adiciona nova feature'
Envie para o repositório remoto:

bash
Copiar código
git push origin minha-nova-feature
Abra um pull request.

Licença
Este projeto está licenciado sob a Licença GNU Affero General Public License v3.0