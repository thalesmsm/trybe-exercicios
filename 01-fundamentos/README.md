# Bloco 01: Unix & Bash

Esse bloco pertence ao módulo de `fundamentos` do curso da [Trybe](https://www.trybe.com/). Nesse bloco aprendi sobre como é montado o Unix e todos os seus níveis, passando por conceitos a respeito do `Kernel`, responsável por fazer a interação entre os softwares e hardwares. Também conhecemos o `Shell`, interface entre o sistema operacional, usuário e núcleo do sistema. Em geral, o shell dos sistemas operacionais usam uma `Command Line Interface (CLI)` ou uma `Graphical User Interface (GUI)` onde sua função é ler a linha de comando; interpretar seu significado; executar o comando e devolver o resultado ao usuário.

Vimos também a respeito dos `Aplicativos`. Nessa camada se encaixa os `Softwares` que os usuários podem utilizar e a maioria dos comandos unix. 

Outros pontos importantes são os `Processos` e `Arquivos`. Cada vez que é executado uma tarefa ou um comando o `Unix` interpreta como um processo. Cada processo possui um indetifiacador único, chamado `Process IDentifier (PID)`, que carrega alguma informações com o usuário proprietário do processo, sessão do shell e estado atual (se está funcionando, suspenso ou aguardando), entre outras informações.
O sistema de arquivos do `Unix` é organizado em uma hierarquia de raiz, onde o nível mais alto do sistema é o `/` ou `Diretório raiz`, que também chamamos de `root`.

Pude aprender ainda como trabalhar com `Diretórios` usando as linhas de comando, listando todos os arquivos e subdiretórios através do comando `ls`;
Mundando de um diretório para outro usando o comando `cd`;
Criar diretórios com o `mkdir`;
Remover diretórios com `rmdir`;
Observar o caminho completo do diretório atual pelo `pwd`.

A partir disso, foram feitas operações também com os arquivos, desde a criação de um arquivo sem conteúdo a principio através do comando `touch`;
Criação de um arquivo com a possibilidade de inserção de conteúdo através do `cat >`;
Mostrar o conteúdo inteiro na tela do terminal com o `cat`. Repare que aqui não se usa o sinal de maior `>`;
Copiar e remover os arquivos com o `cp` e `rm` respectivamente;
Remover tanto arquivos como diretórios sem que o sistema peça permissão com o `rm -rf`;
Mover o arquivo para um diretório usando o `mv`, que também podeser usado para mudar o nome do arquivo e também de um diretório.

Com os arquivos e seus respectivos conteúdos criados, pude, ainda através de comandos no terminal, exibir estes conteúdos.
Usando o `less` mostramos na tela do terminal o conteúdo página por página, podendo procurar por um trecho específico fazendo uso do comando `/trecho que quer procurar` e usano `q` para sair da tela de exibição;
O comando `head` mostra as 10 primeiras linhas do arquivo. Pode-se escolher quantas linhas mostrar usando `head -n`, onde n representa o número de linhas que deseja mostrar;
O `tail` irá mostrar as 10 últimas linhas do arquivo, podendo selecionar a quantidade desejada usando o `-n` com o mesmo princípio do `head`;
Podemos mostrar trechos dos arquivos separadamente usando o `grep`, que é um comando, por padrão, case sensitive, ou seja, caracteres maiúsculos são determinantes. Para ignorar essa carcterística se usa o `grep -i`.
Ainda é possível negar o comando com o `-v` e procurar pelo conteúdo que `não` contenha o trecho especificado no comando, além de mostrar a posição do trecho com o `-n` e quantas vezes uma palavra aparece no arquivo com `-c`.

E ainda com o comando `wc` mostrar o número de linhas, palavras e números de caracteres contidos em um arquivo. Podendo mostrar separadamente cada um usando `l`, `w` e `c` respectivamente. 
