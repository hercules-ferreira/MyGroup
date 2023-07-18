  <img src="./src/components/img/logo-m.png">

<h1><span style="color:blue">
<font size=30>Conheça a sua Intranet</font></span></h1>

<h1><span style="color:blue">
Descubra quem é o seu grupo aqui!
</font></span></h1>


<h1><span style="color:blue">
<font size=30>Índice</font></span></h1>

- [Sobre o site](#Sobre-o-Site)
- [Funcionalidades](#Funcionalidades)
- [Home](#Home)
- [Área para Administradores](#Área-para-Administradores)
- [Área de usuários](#Área-de-usuários)
- [Tipos de acesso ao Site](#Tipos-de-acesso-ao-Site)
- [Botões Navbar](#Botões-Navbar)
- [Área admin](#Área-admin)
- [Listando I like](#Listando-I-like)
- [Adicionando I like](#Adicionando-I-like)
- [Visualizando I like de um usuário do Grupo](#visualizando-I-like-de-um-usuário-do-grupo)
- [Visualizando seu próprio I like](#Visualizando-seu-próprio-I-like)
- [Validações e proteção de informações incorretas](#Validações-e-proteção-de-informações-incorretas)
- [Cadastro-de-usuários](#Cadastro-de-usuários)
- [Fazendo login](#Fazendo-login)
- [Metas](#Metas)
- [Objetivos](#Objetivos)
- [Novas Versões](#Novas-Versões)
- [Issues](#Issues)
- [License](#License)
- [Contribuição](#Contribuição)

<h1><span style="color:blue">
<font size=30>Sobre o Site</font></span></h1>
<img src="icon.png" align="right" />

📜 Para a confecção do site, as principais ferramentas utilizadas, foram: React, JS ES6.
<br>
📜 Neste trabalho optei por não utilizar bibliotecas prontas, como Material-UI, Bootstrap, formik, ou core UI.
<br>
📜 Aqui o objetivo foi mostrar o máximo de conhecimento, desenvolvendo todas aplicações Hardcore Functional Programming, 
<br>
📜 A proposta principal dessa Intranet, é ter um canal direto com os colaboradores da empresa. 
<br>
📜 Assim, a empresa pode-se fazer o cadastro de cada colaborador, adicionar imagens, fazer edição, atualização, ou exclusão, seguindo o CRUD completo. 
<br>
📜 O colaborador tem sua área privativa, protegida por senha pessoal.
Nesta área é possível impulsionar suas principais qualificações, aptidões, o que ele está fazendo, como lendo um livro ou fazendo uma viagem, um curso ou uma Pós. Essa área foi denominada: <kbd>***I like***</kbd>.
<br>
📜 Desta forma a empresa, pode atuar em duas grandes frentes. Ter um cadastro atualizado de funcionários, bem como ter um termômetro individual de cada colaborador.
<br>
📜 Neste sentido, se tem uma atenção especial na experiência de employer branding, melhorando informações como: menor turnover e mais horas dedicadas, fortalecimento da cultura e clima organizacional  da empresa. 
<br>
📜 Quando o colaborador na sua área <kbd>***I like***</kbd> adiciona informações, pode disparar marcadores, de nível de informação intelectual de cada um, nível de satisfação individual e social, quando o colaborador usa suas horas vagas, para realmente praticar atividades de lazer.
<br>

<h1><span style="color:blue">
<font size=30>🛠 Funcionalidades</font></span></h1>


📌 [Home](https://github.com/ai/size-limit#readme) - Na Página inicial tem as informações atualizadas, e informações de como o site é, e uma prévia das opções que cada colaborador irá encontrar. No menu acima, no Navbar o usuário encontra os links para ir para área de Login ou Signup.
Também existe um carrossel infinito que fica passando as imagens dos colaboradores.  

  <img src="/public/README/home1.png">
  <br>
  
  📌 [Home](https://github.com/ai/size-limit#readme) - Quando o mouse passa pela foto, foi colocado uma escala para aumentar o tamanho da foto, para melhorar a experiencia o usuário. 
    <img src="/public/README/home2.png">
    <img src="/public/README/home3.png">
  <br>
  

  <br>
  



📌 [Área para Administradores](https://github.com/ai/size-limit#readme) - Área privativa com nível de acesso apenas para administradores.

📌 [Área de usuários](https://github.com/ai/size-limit#readme) - Área privativa de cada colaborador protegida com senha pessoal.

<h1><span style="color:blue">
<font size=30>📈 Exemplos de uso do Site
</font></span></h1>

📌 [Tipos de acesso ao Site](https://github.com/ai/size-limit#readme) - Área do grupo, com todos colaboradores cadastrados.
  <img src="/public/README/admin-mygroup.png">
  <br>

  📌 [botões Navbar](https://github.com/ai/size-limit#readme) - Há um Navbar, na área central mostra qual o usuário logado. Há também botões que só parecem para usuários logados. 
  <br>

  📌 [Área admin](https://github.com/ai/size-limit#readme) - Aqui pode se ver os detalhes do colaborador com nível de administrador. 
  O colaborador com nível de admin. Tem acesso á todas áreas, e funções, podendo executar qualquer função de alteração de informações do qualquer usuário.

   <img src="/public/README/admin-edit-profile.png">
  <br>
  
  📌 [Área admin](https://github.com/ai/size-limit#readme) - Edição de suas próprias informações.
  <img src="./public/README/admin-profile2.png">
  <br>

  📌 [Área admin](https://github.com/ai/size-limit#readme) - Edição de informações de outro usuário.
  <img src="/public/README/admin-edit-user.png">
 <br>

   📌 [Listando I like](https://github.com/ai/size-limit#readme) - Para visualizar um <kbd>***I like***</kbd>, seu ou de outro usuário do seu grupo basta clicar botão no Navbar <kbd>***I like***</kbd> e verá uma lista de todos <kbd>***I like***</kbd>.
   <img src="/public/README/see-list-likes.png">
 <br>

  📌 [Adicionando I like](https://github.com/ai/size-limit#readme) - Para Adicionar uma aptidão, um <kbd>***I like***</kbd> / <kbd>***Eu Gosto***</kbd> basta clicar no botão <span style="color:blue">**Abir Formulário**</span> que será aberto um formulário para a inclusão das informações.
  <img src="/public/README/add-likes.png">
 <br>

  📌 [Visualizando I like de um usuário do Grupo](https://github.com/ai/size-limit#readme) - Se você quiser saber de um livro bom para ler, ou uma indicação de um lugar para ir, ou uma Pós para fazer, poderá dar uma olhadinha nos <kbd>***I like***</kbd> / <kbd>***Eu Gosto***</kbd>  de seus colegas do grupo, e curtir essa experiência de achar uma boa indicação.
  <img src="/public/README/user-see-likes-user.png">
  <img src="/public/README/user-admin-edit-user.png">
  📌 [Área admin](https://github.com/ai/size-limit#readme) - Na imagem acima um usuário administrador está visualizando informações de outro usuário. Neste momento, o acesso é total, e todos botões são habilitados de edição ou exclusão das informações. 
  <br>  

  📌 [Usuário Comum: Visualizando I like de um usuário do Grupo](https://github.com/ai/size-limit#readme) - Esta etapa, um usuário comum, está visualizando as informações, de um outro usuário. Como usuário comum não tem privilégios sob outro usuário, os botões de edição e exclusão são ocultados, e o único botão que aparece é o botão  <span style="color:blue">**Voltar**</span>.

  <img src="/public/README/user-see-likes-user.png">
 <br>
  <br>

 
  📌 [Visualizando seu próprio I like](https://github.com/ai/size-limit#readme) - Você pode ver seus <kbd>***I like***</kbd> / <kbd>***Eu Gosto***</kbd>  e tem liberdade total para editar ou excluir a qualquer momento.  
  <img src="/public/README/user-edit-likes.png">
 <br>

  📌 [Fazendo login](https://github.com/ai/size-limit#readme) - Aqui é onde os usuários farão login e terão acesso a todas as suas informações.
  <img src="/public/README/validation-login1.png">
  <img src="/public/README/validation-login2.png">

  📌 [Validações e proteção de informações incorretas](https://github.com/ai/size-limit#readme) - Você precisa preencher todas as informações corretas para ter acesso a Intranet, ou o sistema retornará uma mensagem:   <span style="color:blue">**campos obrigatórios**</span>, <span style="color:blue">**e-mail ou senha incorretos**</span>.
 <br>

  📌 [Cadastro de usuários](https://github.com/ai/size-limit#readme) - Aqui é onde é feito o cadastro dos usuários, também é necessário preencher todas as informações corretas para ter acesso a Intranet, ou o sistema retornará uma mensagem:  <span style="color:blue">**campos obrigatórios**</span> 
  <img src="/public/README/validation-register1.png">
 <br>

<h1><span style="color:blue">
<font size=30>📋 Metas
</font></span></h1>

> :construction: Novas Versões do Site :construction:

📌 [Objetivos](https://github.com/ai/size-limit#readme) do Site serão, colocar uma área com vários níveis de privilégios, de acordo com o cargo e função de cada colaborador.

📌 [Objetivos](https://github.com/ai/size-limit#readme) Construir uma área para que cada colaborador possa também colocar imagens de suas conquistas na sua área de  <kbd>***I like***</kbd> / <kbd>***Eu Gosto***</kbd>, ou imagens de suas realizações, como livros, ou lugares que visitou.


<h1><span style="color:blue">
<font size=30>📋 License
</font></span></h1>

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, Hercules Ferreira Ribeiro has waived all copyright and related or neighboring rights to this work.

<h1><span style="color:blue">
<font size=30>🐛 Issues</font></span></h1>

Contate me através do github

<h1><span style="color:blue">
<font size=30>🚀 Contribuição
</font></span></h1>

1. Faça o _fork_ do projeto
2. Crie uma _branch_ para sua modificação (`git checkout -b meu-novo-recurso`)
3. Faça o _commit_ (`git commit -am 'Adicionando um novo recurso...'`)
4. _Push_ (`git push origin meu-novo-recurso`)
5. Crie um novo _Pull Request_

**Happy coding!** :heart:

 <br>

[Back to top](#faqs)
