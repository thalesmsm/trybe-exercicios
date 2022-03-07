# Bloco 04 - Introdução à JavaScript e Lógica de Programação

## DIA 1

### JavaScript - Primeiros passos

### variáveis

Variáveis são espaços na memória do computador onde podemos armazenar dados. Para declararmos uma variável utilizaremos a palavra-chave `let` ou `const`, seguida pelo nome que deseja dar a aquela variável.

`let minhaVariavel ;` / `const minhaVariavel ;`

‘’’ O ponto-e-vírgula indica onde uma instrução se encerra. Não obrigatório, mas como boa prática coloca-se o potnto e vírgula ao final de cada instrução.’’’

É importante salientar que o JavaScript é case sensitive, ou seja, letras maiúsculas e minúsculas fazem diferença. Por exemplo, uma variavel que recebe um nome como `minhaVariavel` não será reconhecida se em algum momento chamarmos por `minhavariavel`.

Como forma de melhorar a leitura a primeira forma com foi escrita minhaVriavel é usada uma pratica de escrita das variaveis conhecida como `camelCase`, onde se inicia com a primeira letra minúscula e cada primeira letra das próximas palavras iniciam com a letra maiúscula. Por isso a expressão camelCase, por lembrar corcovas de camelos.

Depois de declararmos uma variável, podemos dar a ela um valor:

`let minhaVariavel = ‘texto’;`, onde lemos o sinal de igual como ‘recebe’.

obs.: esse valor atribuido não pode ser uma palavra-chave especial do JS.

As variáveis declaradas através do `let` nos permitem reatribuir valores a elas, para isso, informamos o novo valor que a variável irá receber.

Ex: `minhaVariavel = ‘outro valor’;` 

Já as variáveis declaradas através do const não nos permite essa mudança. Uma vez declarada essa variável não pode ser reatribuída.

### ****Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas****

As variáveis podem conter valores de diferentes tipos de dados, como :

string - uma sequencia de texto, sempre representada entre aspas. O que for colocado entre aspas será considerada string;

number - um número, seja inteiro ou real. Para números não usamos as aspas.

boolean - um valor verdadeiro ou falso, representados pelas suas traduções para o inglês `true` e `false`, respectivamente. 

undefined - não recebe nenhum valor

null - valores nulos - util para sites com nenhuma cor e a pessoa mude a cor  - redefinição

tipagem dinamica - ao reatribuir o valor de uma variavel ela passa a ter outro tipo

operações aritméticas 

Operador é um símbolo matemático que produz um resultado baseado em dois ou mais valores ou varáveis.

‘’’

adição `+` - adiciona um numero a outro

Subtração `-` - subtrai o numero da direita do número da esquerda

multiplicação `*` - multiplica um número pelo outro

divisão `/` - divide o número da esquerda pelo da direita

Exponenciação `**` - multiplica o numero da esquerda por ele mesmo o numero de vezes representado pelo numero da direita

Módulo `%` - retorna (número inteiro) o resto da divisão  do número da esquerda pelo da direita

Incremento (+1) `+=`

Decremento (-1) `-=`

‘’’

### condições if e else

Operadores condicionais são estruturas que nos permitem testar se uma expressão é verdadeira ou não. Uma forma comum de condicional é a instrução `if/else`, que tem sua estrutura sendo como:

```
if (teste) {

bloco a executar

} else {

boco a executar

}
```

### operadores lógicos

Os operadores lógicos nos permitem comparar variáveis e fazer algo baseado no resultado da comparação. Como trabalhamos com os resultados sendo `true` ou `false`, os operadores funcionam da seguinte forma.

#### Operador E
```

true && true → true

true && false → false

false && true → false

false && false → false
```

#### Operador OU
```

true || true → true

true || false → true

false || true → true

false || false → false
```

#### Operador de negação
```

!true → false

!false → true
```

obs: o número 0 tem o valor falsy no js, logo !0 = true

### switch case

O switch tem a capacidade de pegar o resultado de alguma expressão e rodar um bloco de código com base nela.

O break encerra a operação e deve ser escrito após todo case inserido, caso queira finalizar o código.

```
let number = 10;
switch(number) {
 case 1:
  bloco1
  break
 case 5:
  bloco2
  break
 case 10:
  bloco3
  break
 default:
  bloco
caso nenhum dos casos seja verdadeiro executa o default
}
```
Neste caso o bloco3 seria executado.
