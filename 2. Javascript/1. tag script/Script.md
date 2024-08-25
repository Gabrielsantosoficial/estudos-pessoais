**Imagine que a tag `<script>` é como um estúdio de gravação em um programa de rádio.** Quando você coloca um script em uma página web, é como se estivesse gravando uma transmissão que vai ser executada no navegador. O JavaScript dentro da tag `<script>` é responsável por fazer a "transmissão" de lógica e interatividade na sua página.

## Tag `<script>`

A tag `<script>` é usada para incluir e executar código JavaScript em uma página HTML. Ela pode ser colocada em diferentes partes do documento HTML, e o código JavaScript pode ser incluído diretamente entre as tags `<script>`, ou você pode referenciar um arquivo externo.

### Exemplo Básico

**Código JavaScript Inline:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo de Script</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <script>
    // Código JavaScript diretamente dentro da tag <script>
    console.log("Olá, Console!");
  </script>
</body>
</html>
```

Neste exemplo, o JavaScript é executado diretamente dentro da tag `<script>`, e a mensagem `"Olá, Console!"` é exibida no console do navegador.

### Referência a Arquivo Externo

**Código JavaScript em Arquivo Externo:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo de Script Externo</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <script src="script.js"></script>
</body>
</html>
```

**Arquivo `script.js`:**

```javascript
console.log("Olá, Console do arquivo externo!");
```

Aqui, o JavaScript é mantido em um arquivo separado chamado `script.js`. O código é referenciado pela tag `<script>` usando o atributo `src`, e a mensagem `"Olá, Console do arquivo externo!"` é exibida no console.

### Atributos da Tag `<script>`

- **`src`**: Especifica a URL do arquivo JavaScript externo.
- **`type`**: Define o tipo de script. O valor padrão é `"text/javascript"` e geralmente não é necessário especificar em HTML5.
- **`async`**: Carrega o script de forma assíncrona, ou seja, não bloqueia o carregamento da página.
- **`defer`**: Garante que o script será executado após o carregamento completo do documento.

**Exemplo com `async` e `defer`:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo com async e defer</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <script src="script.js" async></script> <!-- Carrega o script de forma assíncrona -->
  <script src="outro-script.js" defer></script> <!-- Executa o script após o carregamento do documento -->
</body>
</html>
```

## Gerando Saídas com JavaScript

JavaScript pode gerar saídas de várias formas em uma página web:

### 1. **Console**

O método `console.log()` é usado para imprimir mensagens no console do navegador, o que é útil para depuração.

**Exemplo:**

```javascript
console.log("Mensagem no console!");
```

### 2. **Alertas**

O método `alert()` exibe uma caixa de diálogo com uma mensagem para o usuário.

**Exemplo:**

```javascript
alert("Mensagem de alerta!");
```

### 3. **Escrevendo no Documento**

O método `document.write()` escreve diretamente no documento HTML. Não é recomendado para uso em páginas em produção, pois pode substituir o conteúdo da página se chamado após o carregamento.

**Exemplo:**

```javascript
document.write("Texto escrito diretamente no documento!");
```

### 4. **Manipulando o DOM**

Você pode manipular o DOM para alterar o conteúdo de elementos HTML.

**Exemplo:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Manipulação de DOM</title>
</head>
<body>
  <h1 id="titulo">Título Original</h1>
  <script>
    document.getElementById('titulo').innerText = 'Título Alterado';
  </script>
</body>
</html>
```

Aqui, o texto do elemento `<h1>` com `id="titulo"` é alterado para `"Título Alterado"`.

## Resumo

- **Tag `<script>`**: Usada para incluir e executar código JavaScript. Pode ser inline ou referenciar arquivos externos.
- **Atributos `src`, `async`, `defer`**: Usados para carregar scripts de diferentes maneiras.
- **Saídas JavaScript**: Incluem `console.log()`, `alert()`, `document.write()`, e manipulação do DOM.

## Quer saber mais?

Gostaria de explorar como usar `async` e `defer` em mais detalhes, ou tem outra pergunta sobre JavaScript e a manipulação do DOM?