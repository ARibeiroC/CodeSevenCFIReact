# PROJETO CFI (CURSOS DE FORMAÇÃO DE INSTRUTORES)
## Este é um projeto FRONT-END desenvolvido para testar meus conhecimentos e claro obter experiência no desenvolvimento de uma aplicação simples com gestão de usuários. Ele é um teste de um projeto maior de ERP que estou desenvolvendo para uma escola de cursos profissionalizantes.

## EM PROCESSO DE DESENVOLVIMENTO #

<div>
  <p>ACESSE:  <a href="https://aribeiroc.github.io/CodeSevenCFIReact/">https://aribeiroc.github.io/CodeSevenCFIReact/</a></p>
  <img src="https://cdn.discordapp.com/attachments/1037246336669601812/1306845899401465898/image.png?ex=6746a716&is=67455596&hm=5b2651f4660a9085d2a508272f96441a32ad3ba51f1eb1fed0f91537dcdc8147&"
</div>

# TECNOLOGIAS
<div style="display: inline_block">
 <img align="center" alt="Ribeiro-JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
 <img align="center" alt="Ribeiro-JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
 <img align="center" alt="Ribeiro-JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
 <img align="center" alt="Ribeiro-JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
 <img align="center" alt="Ribeiro-JS" height="30" width="30" src="https://dl.flathub.org/media/org/sqlitebrowser/sqlitebrowser/3c094fb8038e961ea106f2bf8c8318f5/icons/128x128@2/org.sqlitebrowser.sqlitebrowser.png">
</div>

# ETAPAS

## Design
- [X] Tela do Login
- [X] Tela de Cadastro
- [ ] Tela de acesso (HOME PAGE)
- [ ] Tela da Prova.


## Coding
  ### Instalação e configuração do React-Router-DOM.
  - [X] Configuração do main
    - [X] Definição da BASE em App.jsx
    - [X] Definição das Childrens
    - [X] Utilização do RouteProvider

  ### Criação dos Componentes
  - [X] Button (Botões das páginas)
  - [X] SignIn (Formulário de login da página)
  - [X] SignUp (Formulário de cadastro de candidato)

  ### Criação dos Hooks
  - [X] ChangeForm (Este hook foi criado para trocar a tela de login e de cadastro de forma dinâmica através dos SPANs "Login", "Candidate-se")
  - [X] Criação de um token exclusivo para o usuário ao acessar a página pela primeira vez.

  ### Criação dos Routers
  - [X] FormSign (Este componente é um conteiner com o banner e toda a estrutura para receber os formulários de signIn e signout de forma dinâmica)
  
  ### Features
  - [X] Validação dos caracteres inseridos no input de matricula para apenas números.
  - [X] Armazenamento do token no Local Storage;
  - [X] Autenticação de usuário via número da matricula e senha;
  - [ ] Cadastro do usuário no banco de dados;
  - [X] troca dinâmica dos formulários de login e cadastro;
  - [X] Authenticação de acesso a sessão do candidado caso o usuário já tenha acessado antes;
  - [ ] Sistema de logout
  - [ ] Limpeza do token ao fazer logout do sistema;
