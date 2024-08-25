### 3. Listas

As listas ajudam a organizar informações em tópicos e subtópicos. Existem dois tipos principais de listas em HTML: listas ordenadas e listas não ordenadas.

- **Lista Não Ordenada (`<ul>`)**:
  É usada para listar itens sem uma ordem específica, com marcadores (bullets).

  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

- **Lista Ordenada (`<ol>`)**:
  É usada para listar itens em uma ordem específica, com números ou letras.

  ```html
  <ol>
    <li>Primeiro Item</li>
    <li>Segundo Item</li>
    <li>Terceiro Item</li>
  </ol>
  ```

- **Lista de Definições (`<dl>`)**:
  É usada para listar termos e suas definições.

  ```html
  <dl>
    <dt>Termo 1</dt>
    <dd>Definição do Termo 1</dd>
    <dt>Termo 2</dt>
    <dd>Definição do Termo 2</dd>
  </dl>
  ```

### Exemplo Completo

Aqui está um exemplo de como você pode usar imagens, links e listas em uma página HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imagens, Links e Listas</title>
</head>
<body>
    <h1>Exemplo de Imagens, Links e Listas</h1>
    
    <!-- Imagem -->
    <img src="https://www.example.com/imagem.jpg" alt="Uma bela paisagem" width="300">

    <!-- Links -->
    <p>Visite o <a href="https://www.example.com">Exemplo</a> para mais informações.</p>
    <p>Envie um e-mail para <a href="mailto:exemplo@dominio.com">exemplo@dominio.com</a>.</p>

    <!-- Listas Não Ordenadas -->
    <h2>Lista Não Ordenada</h2>
    <ul>
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
    </ul>

    <!-- Listas Ordenadas -->
    <h2>Lista Ordenada</h2>
    <ol>
        <li>Primeiro Item</li>
        <li>Segundo Item</li>
        <li>Terceiro Item</li>
    </ol>

    <!-- Lista de Definições -->
    <h2>Lista de Definições</h2>
    <dl>
        <dt>Termo 1</dt>
        <dd>Definição do Termo 1</dd>
        <dt>Termo 2</dt>
        <dd>Definição do Termo 2</dd>
    </dl>
</body>
</html>
```

### Algo mais para aprender?

Se você quiser, podemos explorar mais sobre como estilizar esses elementos com CSS ou aprender sobre tabelas e formulários. O que você gostaria de fazer agora? 😊