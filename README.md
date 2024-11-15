# PROJETO FRONT END

## Este projeto consiste em demonstrar uma tela de login de uma aplicação que tenho na minha empresa, onde coletamos candidatos para o projeto de estagiários (CFI).

<div>
  <p>ACESSE:  <a href="https://aribeiroc.github.io/react_codeseven_cfi/">https://aribeiroc.github.io/react_codeseven_cfi</a></p>
  <img src="https://cdn.discordapp.com/attachments/1037246336669601812/1306845899401465898/image.png?ex=67382696&is=6736d516&hm=11515bc3e9767f7a9b310f1580283a18274212a9e2f972c17a08c6c523ce66da&"
</div>

# ETAPAS

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
- [ ] ChangeForm (Este hook foi criado para trocar a tela de login e de cadastro de forma dinâmica através dos SPANs "Login", "Candidate-se")
- [ ] Criação de um token exclusivo para o usuário ao acessar a página pela primeira vez.

## FEATURES
- [ ] Armazenamento do token no Local Storage;
- [ ] Authenticação de usuário via número da matricula e senha;
- [ ] Cadastro do usuário no banco de dados;
- [ ] troca dinâmica dos formulários de login e cadastro;
- [ ] Authenticação de acesso a sessão do candidado caso o usuário já tenha acessado antes;
- [ ] Sistema de logout
- [ ] Limpeza do token ao fazer logout do sistema;
