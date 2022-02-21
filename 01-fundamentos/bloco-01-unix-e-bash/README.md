# Bloco 01: Unix & Bash
## Dia 3

Esse bloco pertence ao módulo de `fundamentos` do curso da [Trybe](https://www.trybe.com/). Nesse bloco aprendi sobre como é montado o `Unix` e todos os seus níveis, passando por conceitos a respeito do `Kernel`, responsável por fazer a interação entre os softwares e hardwares. Também conhecemos o `Shell`, interface entre o sistema operacional, usuário e núcleo do sistema. Em geral, o shell dos sistemas operacionais usam uma `Command Line Interface (CLI)` ou uma `Graphical User Interface (GUI)` onde sua função é ler a linha de comando; interpretar seu significado; executar o comando e devolver o resultado ao usuário.

Vimos também a respeito dos `Aplicativos`. Nessa camada se encaixa os `Softwares` que os usuários podem utilizar e a maioria dos comandos unix. 

Outros pontos importantes são os `Processos` e `Arquivos`. Cada vez que é executado uma tarefa ou um comando o `Unix` interpreta como um processo. Cada processo possui um indetifiacador único, chamado `Process IDentifier (PID)`, que carrega alguma informações com o usuário proprietário do processo, sessão do shell e estado atual (se está funcionando, suspenso ou aguardando), entre outras informações.
O sistema de arquivos do `Unix` é organizado em uma hierarquia de raiz, onde o nível mais alto do sistema é o `/` ou `Diretório raiz`, que também chamamos de `root`.

Pude aprender ainda como trabalhar com `Diretórios` usando as linhas de comando, listando todos os arquivos e subdiretórios através do comando `ls`;<br>
Mundando de um diretório para outro usando o comando `cd`;<br>
Criar diretórios com o `mkdir`;<br>
Remover diretórios com `rmdir`;<br>
Observar o caminho completo do diretório atual pelo `pwd`.

A partir disso, foram feitas operações também com os arquivos, desde a criação de um arquivo sem conteúdo a principio através do comando `touch`;<br>
Criação de um arquivo com a possibilidade de inserção de conteúdo através do `cat >`;<br>
Mostrar o conteúdo inteiro na tela do terminal com o `cat`. Repare que aqui não se usa o sinal de maior `>`;<br>
Copiar e remover os arquivos com o `cp` e `rm` respectivamente;<br>
Remover tanto arquivos como diretórios sem que o sistema peça permissão com o `rm -rf`;<br>
Mover o arquivo para um diretório usando o `mv`, que também pode ser usado para mudar o nome do arquivo e também de um diretório.

Com os arquivos e seus respectivos conteúdos criados, pude, ainda através de comandos no terminal, exibir estes conteúdos.<br>
Usando o `less` mostramos na tela do terminal o conteúdo página por página, podendo procurar por um trecho específico fazendo uso do comando `/trecho que quer procurar` e usano `q` para sair da tela de exibição;<br>
O comando `head` mostra as 10 primeiras linhas do arquivo. Pode-se escolher quantas linhas mostrar usando `head -n`, onde n representa o número de linhas que deseja mostrar;<br>
O `tail` irá mostrar as 10 últimas linhas do arquivo, podendo selecionar a quantidade desejada usando o `-n` com o mesmo princípio do `head`;<br>

Podemos mostrar trechos dos arquivos separadamente usando o `grep`, que é um comando, por padrão, case sensitive, ou seja, caracteres maiúsculos são determinantes. Para ignorar essa carcterística se usa o `grep -i`.
Ainda é possível negar o comando com o `-v` e procurar pelo conteúdo que `não` contenha o trecho especificado no comando, além de mostrar a posição do trecho com o `-n` e quantas vezes uma palavra aparece no arquivo com `-c`.

E ainda com o comando `wc` mostrar o número de linhas, palavras e números de caracteres contidos em um arquivo. Podendo mostrar separadamente cada um usando `-l`, `-w` e `-c` respectivamente. 
##

## Dia 4

Voltando ao processos, foi aprendido como,de fato, se lista os processos sendo executados, identificados pelo `PID`, que é representado por um sequência numérica, para isso é utilizado o comando `ps`.

Vimos que é possível ter vários processos sendo executados ao mesmo tempo, desde que esteja em `background` enquanto se executa outro processo.
Para inicar um processo diretamente no `background`, damos o coamdno de inicialização do processo seguido do `bg`.

Um processo que está em `foreground` não permite que seja executado um outro ao mesmo tempo. Para isso deve-se suspendê-lo usando o `ctrl + z` e por através do uso do `bg` em `background`;<br>
O inverso também é possível e podemos trazer para o `foreground` um processo suspenso usando o `fg %n` onde o `n` é o número do processo, que podemos verificar usando o comando `jobs`, que nos permite ver o número do processo e seu status;<br>
Processos em `foreground` (que estejam sendo executados) podem ser cancelados usando o `ctrl + c`, assim como com `kill %n` usando o número do processo e o`kill PID`, usando o número do PID. O `kill -9 PID` força o encerramento.

Outra parte importante dos estudos veio com o aprendizado do comando `find`, usado para pesquisar em diretórios por arquivos ou outras pastas, de acordo com os parâmetros passados a ele, como: `name`, `date`, `size` e `type`<br>
Ex.: `find ./diretorio -name "*.txt"` -> localizar todos os arquivos de extensão `.txt`;<br>
`find ./diretorio -name "nome*"` -> localizar todos os arquivos que comecem com "nome";<br>
`find . -type d` -> para localizar todos os diretórios;<br>
`find . -type f` -> para localizar todos os arquivos.<br>
Podemos ainda usar mais de um dos parâmetros para filtrar ainda mais a busca.<br>
Ex.: `find . -type f -name "nome*"` -> para localizar SOMENTE arquivos que comecem com "nome";<br>
`find . -type d -name "nome*"` -> para localizar SOMENTE diretórios que comecem com "nome".

Por fim, vimos como pode ser usado o comando `echo`.<br>
Usado em `scripts` ou no terminal para exibir/adiconar mensagens à tela ou arquivos.<br>
`echo "texto"` -> exibi texto na tela;<br>
`echo "texto" > arquivo.txt` -> adiciona o texto em arquivo.
