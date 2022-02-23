# Bloco 03 - Introdução a HTML e CSS

## Dia 1

### introdução ao HTML

hyper text markup language - linguagem de marcação de texto

. é o esqueleto de uma página web;

. estrutura primária, com diversas tags para representar as informações que queremos transmitir;

. essas tags nos ajudam a unir texto, imagens, tabelas, listas, videos e links dentro do corpo de um site.

### primeiras tags

estrutura básica de uma página HTML 

```
1 <!DOCTYPE html> 
2 <html lang="pt-br"> 
	3 <head>
		3.1 <meta charset="UTF-8">
		3.2 <title>Aprendendo HTML</title>
	</head>
	4 <body>
		<h1> Titulo principal </h1>
		<h2> titulo de menos relevancia </h2>
		<p> Paragrafo onde vem o conteudo </p>
	</body>
</html>
```

1- informa ao navegador que estamos trabalhando com html5.

2 - raiz de toda a pagina html. tudo que estiver contidada dentre as tags `<html> </html>` vai estar dentro da página web. O atributo lang remete a linguagem que a página utilizará.

3 - vai ter as configurações da página web, ou seja, não vai aparecer como conteudo em si.
obs.: algumas outras informaçoes como o caminho para css e scripts vão ser adicionados aqui

    3.1 - charset - conjunto de caracteres que poderá utilizar naquela pagina. nesse caso, UTF-8 para português, reconhecerá caracteres como `ç` e `acentos`

    3.2 o texto entre as tags `<title> </titlie>` aparecerá na aba da página.


4 - corpo da página - vão vir todas as tags que queremos que esteja visível como conteúdo.

obs.: algumas tags podem conter ou não um fechamento  `</tag>`


### estrutura básica de uma tag

```
<nomeTag atributo=”valor”>

conteúdo da Tag

</nomeTag>
```
```
<p id=”texto”>

Olá Mundo

</p>
```

### algumas tags que podemos usar dentro do html, para formatação de texto

`<br>` - quebra de linhas

`<em> </em>` - enfase. deixa o texto em itálico, semanticamente falando, damos enfase para esse texto

`<strong> </strong>` - negrito - dando destaque/peso ao texto

```
<ul> - estrutura da lista - lista não ordenada (os itens são representados por pontos ou quadrados. Há ainda a possibilidade de customização)

<li> </li> - item da lista

</ul>
```
```
<ol> estrutura da lista - lista  ordenada (os itens são representados por números, algarismos romanos e letras maiúsculas ou minúsculas)

<li> </li> - item da lista

</ol>
```
a tag <ol> possui um atributo type=” ”, onde podemos mudar o caractere da numeração da lista para numeros romanos ou letras maiuscula ou minusculas. alem do atributo start= “ “, onde podemos por o ponto de partida da lista. ex> start=”5” vai iniciar a contagem no 5.

`<img>` - aqui podemos adicionar imagens ao nosso conteúdo.

```<img src=” caminho da imagem. pode ser local o remoto (com um link externo) ” alt=”descrição de imagens, caso não carregue ou para pessoas com deficiencia visual”> ```

### links internos e externos
`<a>` - faz referência a links inter ou externos

<a href=”URL ou ancora para própria página” target="_blank" > constroi um hiperlink para links internos e externos </a>

target - diz se o link abrirá na mesma página ou abrirá em uma nova aba. por padrão abre na mesma aba. para abrir em uma nova aba adicionamos ao atributo target o valor “_blank”

links internos - fazem referência dentro da própria página

    criamos um id para o elemento em q queremos navega e colocamos um <a href=”id”> </a> para criar o link

links externos - fazem referencia a outra pagina

    <a href=”URL” traget=” “> </a>