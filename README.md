# Ghost Game - React
### Descrição
Este projeto utiliza a biblioteca React para criar páginas dinâmicas que se atualizam em tempo real conforme o usuário navega pelos caminhos. Com o uso de React, é possível criar uma experiência interativa e responsiva para o usuário, proporcionando uma sensação mais fluida e natural ao explorar o conteúdo disponível.

## Características
Durante o desenvolvimento deste jogo, foram criados scripts para controlar a movimentação e interação do personagem. Esses scripts permitem que o jogador possa controlar o personagem através de comandos de teclado e interagir com o ambiente e outros elementos do jogo.

### Movimentação e Colisão
Foi implementado um evento na página que lê as teclas pressionadas pelo jogador e verifica se elas correspondem às teclas predefinidas (WASD) para a movimentação. O script então realiza uma verificação para garantir que a movimentação não resultará em uma colisão com algum objeto presente no ambiente do jogo.

### Corredor Infinito
Para criar o efeito de um corredor infinito no segundo mapa, o script faz com que as barras dos extremos e os blocos do início do corredor se movam para trás e cresçam continuamente. A diferença é que os blocos iniciais movem somente uma parte da distância e, em seguida, param e aguardam o retorno do personagem, enquanto as barras  continuam se movendo e crescendo sem parar.

### Páginas dinâmicas
Utilizando o React para atualizar a página de forma eficiente, foi criada uma variável de estado que controla o mapa do jogo. Essa variável é atualizada a cada colisão do personagem com um caminho, permitindo que o ambiente do jogo mude dinamicamente de acordo com a ação do jogador.

## Instalação
<ul>
  <li>Clone este repositório usando o comando git clone https://github.com/ThiagoCrepequer/ghost-game</li>
  <li>Navegue até a pasta do projeto com cd ghost-game</li>
  <li>Instale as dependências do projeto com npm install</li>
  <li>Inicie a aplicação com npm start</li>
</ul>

## Licença
Este projeto está licenciado sob a licença MIT.
