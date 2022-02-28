# Bloco 02: Git, GitHub e Internet :hourglass_flowing_sand:

## Git

Guarda um conjunto de alterações dos arquivos através dos `commits`. O conjunto desses commits cria um histórico de alterações ao longo de todos momentos cronológicos que o repositório viveu. isso mostra um caminho claro onde podemos ir e voltar entre as diferentes versões que aquele conjunto de arquivo viveu. Esse conjunto de arquivos será o projeto

Sistema de controle de versão distribuído (DVCS), que permite que um time trabalhe em um mesmo projeto ou em um arquivo e provê ferramentas para contornar a maioria dos problemas que podemos ter nesse tipo de situação.

Através dele podemos colaborar de forma assíncrona e harmoniosa, podendo juntar as partes que cada um fez e ter a segurança de que todo o trabalho está salvo.

## GitHub

Ferramenta online que hospeda repositórios **Git** e faz toda a gestão do código, tendo recursos para acompanhamento de projeto ágil de software, controle de *Issues*, quadros *Kanban*, *Pull* *Requests* que permitem um *Code* *Review* mais bem feito, etc

## Branching (ramificação)

Uma versão independente e editável dentro do código. Entre as **branches** que um repositório pode ter, existe a **branch main**, *branch principal* do código, onde vamos deixar o código q vamos dar **deploy**, ou seja, que vamos *colocar no ar*. É editável como qualquer outra branch, podemos dar **commits** e agregamos esse commit à **branch main**

No dia a dia costumamos **criar uma branch de outra branch**, comumente da main, para que possamos trabalhar cada contribuidor com sua versão. - **branch feature** que é independente da main e podemos criar um commit só para a feature, da mesma forma do exemplo da main.

Através do **merge** podemos então juntar as duas versões, caso seja a versão final acordada por todos. 
Alguns comando para se trabalhar com branchs:
```
git branch nome - cria outra branch

git checkout nome - muda de branch. inicia trabalho na branch 'nome'
git checkout -b nomedabranch - já cria e inicia o trabalho na branch

git add . - adiciona todas as alterações feitas nos arquivos no stage e deixa pronto para dar o commit
git add alteração-específica - adiciona uma alteração específica

git commit -m "texto informando as alterações feitas" - Confirma alterações feitas na branch

git branch -d - para deletar um branch
```

## Merge (mesclagem)

git merge nome da beanch - com o merge, na branch em que queremos 'mergear' as modificações de outra branch, conseguimos atualizar uma branch com essas alterações

ex: alterações da feature para a main : na branch main damos um git merge feature

## Do git init ao git push


Na *pasta raiz* do projeto damos o **git init**, para inicializar o *repositório local* ( git init só deve ser criado na pasta pai de todos )

Criar um arquivo README.md é importante para *botarmos informações sobre aquele repositório*

Para adicioná-lo no repositorio local damos o **git add .** (para adicionar todos os arquivos modificados em backstage) e **git add nomedoarquivo** (para adicionar um arquivo especifico)

Depois o **git commit -m “Texto do que foi commitado**” adiciona efetivamente o arquivo no repositório local

Para criação do repositório remoto,devemos ir ao **GitHub** e *criar um novo repositorio*

Após criar repositório uma **URL** será criada e devemos escolher a opção de **SSH**, copiamos e seguimos para o próximo passo

**git remote add origin “URL”** irá *vincular* o repositório *remoto ao local*

Depois de tudo “commitado” localmente, daremos um **push** para o repositório remoto através do **git push origin ~~master~~ main**

(pela expressão master ser considerada pejorativa, a comunidade decidiu por mudar para main, mas ainda vem como master nas maquinas)

Para mudar damos o comando **git branch -M “main”** após ter enviado o README para o repositorio local

***obs.:*** Importante lembrar que **devemos** criar **branches** para novas **features** e só dar o **push** após termos **certeza** que iremos **mergear** e dar o push

Com o README já em ambos repositórios podemos editá-lo e dar um novo commit e push, já com a branch master renomeada e no padrão para main
