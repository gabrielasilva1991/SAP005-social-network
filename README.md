# :books: A Menina que Trocava Livros

Acesse a aplicação aqui: https://rede-social-4f31b.web.app/

## Índice

- [1. Apresentação](#1-apresentação)
- [2. Objetivo](#2-objetivo)
- [3. Usuários](#3-usuários)
- [4. Interface de Usuário](#4-interface-de-usuário)
- [5. Desensolvimento](#5-desenvolvimento)
- [6. Pontos de Melhoria](#6-pontos-de-melhoria)
- [7. Devas](#7-devas)

---

## 1.Apresentação :book:

Projeto desenvolvido em trio durante o Bootcamp da <a href=“https://github.com/Laboratoria“>Laboratória</a> com o objetivo de construir uma aplicação web em formato de rede social capaz de armazenar, manipular, excluir e visualizar dados de acordo com a necessidade do usuário. Para hospedagem dos dados utilizamos o <a href=“https://firebase.google.com/>Firebase</a>, o banco de dados do Google. A temática escolhida para representar o projeto foi livros e leitores.
 
 ### 2.Objetivo :trophy:
 
A aplicação tem o objetivo de apreciar o hobbie e paixão de alguns que é a leitura de livros fisicos, de modo que possam compartilhar suas experiências individuais com a leitura entre rede de amigos, com foco em facilitar a troca de livros entre os usuários, para que possam sempre renovar suas leituras e devolver os livros parados na estante, à ativa na comunidade! Assim, diminuindo os impactos ambientais produzidos pelo consumismo não consciente e pelo descarte desnecessário de produtos que ainda podem ser reutilizados.

 <img src="https://www.anica.com.br/wp-content/uploads/2017/05/15676363.gif"/>

## 3.Usuários :dancers:

Após pesquisa de mercado, caracterizamos nossos usuários como sendo os leitores ativos de livros físicos, pessoas com afinidade pela leitura e pessoas que tem interesse em adquirir o hábito de ler frequentemente.

<img src="https://64.media.tumblr.com/e2d3d40a51352499580ce80aee320d52/tumblr_nd3nvtdkyy1toi58to1_500.gif"/>

### Entrevistas

Realizamos entrevistas para investigação para com potenciais usuários a respeito do interesse em utilização de rede social focada a leitura e troca de livros e de como seria a visualização da página e suas funcionalidades esperadas, e obtivemos as seguintes respostas:

![](/src/img/pesquisas.PNG)

### Histórias de Usuário 

Com base nas entrevistas e pesquisa realizada definimos as seguintes histórias de usuário:

:blush: Eu como usuário de rede social desejo criar uma conta através de email e senha<br/>
:blush: Eu como usuário de rede social desejo fazer login com conta cadastrada do proprio site<br/>
:blush: Eu como usuário de rede social desejo fazer login através da conta Google<br/>
:blush: Eu como usuário de rede social necessito fazer uma publicação<br/>
:blush: Eu como usuário de rede social necessito curtir as publicações no feed<br/>
:blush: Eu como usuário de rede social necessito deletar algum post específico<br/>
:blush: Eu como usuário de rede social necessito editar alguma publicação específica

## 4.Interface de Usuário :computer:

### Protótipo de baixa fidelidade

Durante o processo de criação da aplicação, definimos o seguinte protótipo de baixa fidelidade da página de login:

![](/src/img/prototipo_login.jpeg)

E a partir das histórias de usuário, desenvolvemos o seguinte protótipo de baixa fidelidade da página principal:

![](/src/img/prototipo_feed.jpeg)

### Testes de Usuabilidade e Feedback

Os testes realizados com os usuários trouxeram os seguintes problemas, e tivemos as seguintes resoluções:

:exclamation: Dificuldade em visualizar os campos de email e senha para realização de login<br/>
:star: Resolução: trocamos as cores de fundo para branco e inserimos placeholder nos inputs, para melhor visualização

:exclamation: Dificuldade em criação de conta devido senha não atender pré requisitos<br/>
:star: Resolução: inserimos orientação a respeito dos pré requisitos da senha logo abaixo do campo de senha

:exclamation: Dificuldade em curtir e descurtir publicação devido botão chamar "curtir" somente<br/>
:star: Resolução: trocamos botão de curtir para ícone que representa tanto curtir como descurtir

### Layout 

Após analisarmos os testes de usabilidade e resolver as dificuldades, finalizamos o layout da página desta forma:

![](/src/img/layout_web01.PNG) ![](/src/img/layout_web02.PNG) ![](/src/img/layout_web03.PNG)

### Responsividade :iphone:

Sabendo que smarthphones é um meio de acesso à internet muito importante e amplamente utilizado, elaboramos a responsividade da aplicação de forma que o resultado foi esse:

![](/src/img/layout_mobile.PNG)


## 5.Desenvolvimento :fireworks:

### Planejamento :bar_chart:

Neste projeto foi utilizado a ferramenta Trello para organizar todas as atividades que deveriam ser entregues até a data final do projeto, nos planejamos com base na metodologia ágile, definindo entregas de funcionalidades do projeto a cada sprint, no total seguiram-se 4 sprints para finalização do projeto.
Abaixo nosso quadro de organização:

![](/src/img/trello.jpeg)

### Aprendizagem :eyeglasses:

Neste projeto aprendemos principalmente:

:heavy_check_mark: Construir uma SPA responsiva<br/>
:heavy_check_mark: Configuração, armazenamento, edição, delete e apresentação de dados no Firebase<br/>
:heavy_check_mark: Consumo de promisses<br/>
:heavy_check_mark: Colaboração pelo Github

## 6.Pontos de Melhoria :zap:

Definimos que para as próximas refatorações iremos seguir nos seguintes aprimoramentos(não necessariamente nesta ordem):

- Implementação da funcionalidade comentar nas publicações, disponível para todos usuários
- Implementação de categorização das publicações de acordo com a temática do livro referido
- Implementação de página de perfil, onde haja funcionalidade e inserção de foto ao perfil e delete da conta
- Implementação da funcionalidade anexar imagens/fotos em publicações

## 7.Devas :woman:

Esta aplicação foi desenvolvida com muita dedicação pelas devs: 

:princess: <a href=“https://github.com/BiancaSherika“> Bianca Shérika</a><br/>
:princess: <a href=“https://github.com/ly-cardozo“> Eliane Cardozo</a><br/>
:princess: <a href=“https://github.com/gabrielasilva1991/“> Gabriela Silva</a>