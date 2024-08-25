
### 2. CSS Interno

O CSS Interno é usado quando você deseja aplicar estilos que se aplicam apenas a um documento HTML específico. Ele é definido dentro da tag `<style>` no `<head>` do HTML.

- **Como Usar**:
  - Adicione uma tag `<style>` dentro do `<head>` do seu documento HTML.
  - Escreva suas regras de estilo dentro dessa tag.

- **Exemplo**:

  **Arquivo HTML (`index.html`)**:
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Interno</title>
      <style>
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
      </style>
  </head>
  <body>
      <h1>Bem-vindo ao Meu Site!</h1>
      <a href="#" class="button">Clique Aqui</a>
  </body>
  </html>
  ```

