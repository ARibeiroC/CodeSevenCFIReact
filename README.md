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

## RESPONSIVIDADE
- [ ] Login
- [ ] Cadastro
- [ ] Área do candidato
- [ ] Prova

## Design
- [X] Tela do Login
- [X] Tela de Cadastro
- [ ] Área do Candidato
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
  - [X] Validação de dados dos inputs.
  - [X] Mascara dos inputs de telefone.
  - [X] Validação dos campos de Nomes, onde o usuário não consegue inserir valores numéricos.
  - [X] Validação dos campos de telefone, onde o usuário não consegue inserir valores de texto.
  - [X] Mascara de formatação de texto nos campos de telefones
  - [X] Validação de campos vazios, onde é impossibilitados de submeter o formulário com campos vazios
  - [X] Gerador de Token.
  - [X] Armazenamento do token no Local Storage.
  - [X] Persistencia de dados, quando o usuário loga no sistema é armazenado qual o usuário que logou no sistema.
  - [X] Autenticação de usuário via número da matricula e senha.
  - [X] Cadastro do usuário no banco de dados.
  - [X] troca dinâmica dos formulários de login e cadastro.
  - [X] Authenticação de acesso a sessão do candidado caso o usuário já tenha acessado antes.
  - [X] Validação automática e carregamento da sessão se o usuário não deslogou do sistema.
  - [ ] Envio dos dados de Usuário e Senha por email.
  - [ ] Sistema de logout.
  - [ ] Limpeza do token ao fazer logout do sistema.