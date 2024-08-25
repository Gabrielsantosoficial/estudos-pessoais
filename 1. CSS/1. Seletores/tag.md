Ótima escolha! Vamos explorar como estilizar elementos HTML usando **tags**, **classes** e **IDs** com CSS. Esses métodos ajudam a aplicar estilos específicos a diferentes partes do seu conteúdo.

### 1. Estilizando Tags

**Estilizar tags** é o método mais básico. Ele aplica estilos a todos os elementos de um tipo específico na página.

- **Como Usar**:
  - Selecione a tag HTML diretamente no CSS e aplique as regras de estilo desejadas.

- **Exemplo**:
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Estilizando Tags</title>
      <style>
          /* Estilizando todas as tags <p> */
          p {
              color: blue;
              font-size: 18px;
              line-height: 1.6;
          }

          /* Estilizando todas as tags <h1> */
          h1 {
              color: darkgreen;
              text-align: center;
          }
      </style>
  </head>
  <body>
      <h1>Bem-vindo ao Meu Site</h1>
      <p>Este é um parágrafo estilizado com CSS.</p>
      <p>Mais um parágrafo com o mesmo estilo.</p>
  </body>
  </html>
  ```
