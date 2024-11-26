# PROJETO CFI (CURSOS DE FORMAÇÃO DE INSTRUTORES)

## Este é um projeto FRONT-END desenvolvido para testar meus conhecimentos e claro obter experiência no desenvolvimento de uma aplicação simples com gestão de usuários. Ele é um teste de um projeto maior de ERP que estou desenvolvendo para uma escola de cursos profissionalizantes.

<div>
  <p>ACESSE:  <a href="https://aribeiroc.github.io/CodeSevenCFIReact/">https://aribeiroc.github.io/CodeSevenCFIReact/</a></p>
  <img src="https://cdn.discordapp.com/attachments/1037246336669601812/1306845899401465898/image.png?ex=6746a716&is=67455596&hm=5b2651f4660a9085d2a508272f96441a32ad3ba51f1eb1fed0f91537dcdc8147&"
</div>

# ETAPAS

### Elaboração do Design
- [X] Tela do Login
- [X] Tela de Cadastro
- [ ] Tela de acesso (HOME PAGE)
- [ ] Tela da Prova.

### Utilização do react router dom
- [X] Configuração do main
  - [X] Definição da BASE em App.jsx
  - [X] Definição das Childrens
  - [X] Utilização do RouteProvider

### COMPONENTS
- [X] Button (Botões das páginas)
- [X] FormSign (Este componente é um conteiner com o banner e toda a estrutura para receber os formulários de signIn e signout de forma dinâmica)
- [X] SignIn (Formulário de login da página)
- [X] SignUp (Formulário de cadastro de candidato)

### HOOKS
- [X] ChangeForm (Este hook foi criado para trocar a tela de login e de cadastro de forma dinâmica através dos SPANs "Login", "Candidate-se")
- [ ] Criação de um token exclusivo para o usuário ao acessar a página pela primeira vez.

## FEATURES
- [X] Validação dos caracteres inseridos no input de matricula para apenas números.
- [ ] Armazenamento do token no Local Storage;
- [X] Autenticação de usuário via número da matricula e senha;
- [ ] Cadastro do usuário no banco de dados;
- [X] troca dinâmica dos formulários de login e cadastro;
- [ ] Authenticação de acesso a sessão do candidado caso o usuário já tenha acessado antes;
- [ ] Sistema de logout
- [ ] Limpeza do token ao fazer logout do sistema;
