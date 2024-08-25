Vamos explorar os diferentes métodos para adicionar CSS (Cascading Style Sheets) aos seus documentos HTML: CSS Externo, Interno e Inline. Cada método tem suas vantagens e é usado em diferentes situações. 🌟

### 1. CSS Externo

O CSS Externo é a melhor maneira de aplicar estilos a várias páginas ao mesmo tempo. Você cria um arquivo CSS separado e o vincula ao seu HTML. Isso ajuda a manter o HTML limpo e permite a reutilização dos estilos em várias páginas.

- **Como Usar**:
  - Crie um arquivo CSS separado (por exemplo, `estilos.css`).
  - Adicione suas regras de estilo nesse arquivo.
  - Vincule o arquivo CSS ao seu documento HTML usando a tag `<link>`.

- **Exemplo**:

  **Arquivo CSS (`estilos.css`)**:
  ```css
  body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
  }

  h1 {
      color: #333;
  }

  .button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      border-radius: 5px;
  }
  ```

  **Arquivo HTML (`index.html`)**:
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Externo</title>
      <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
      <h1>Bem-vindo ao Meu Site!</h1>
      <a href="#" class="button">Clique Aqui</a>
  </body>
  </html>
  ```
