
### 2. Estilizando Classes

**Estilizar classes** permite aplicar o mesmo estilo a múltiplos elementos de diferentes tipos. Isso é útil para aplicar um estilo comum a vários elementos, mas sem afetar todos os elementos do mesmo tipo.

- **Como Usar**:
  - Defina uma classe no CSS usando o ponto (`.`) seguido pelo nome da classe.
  - Aplique a classe aos elementos HTML usando o atributo `class`.

- **Exemplo**:
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Estilizando Classes</title>
      <style>
          /* Estilizando elementos com a classe .destaque */
          .destaque {
              background-color: yellow;
              font-weight: bold;
              padding: 10px;
              border-radius: 5px;
          }

          /* Estilizando elementos com a classe .erro */
          .erro {
              color: red;
              font-size: 16px;
              border: 1px solid red;
              padding: 5px;
              border-radius: 3px;
          }
      </style>
  </head>
  <body>
      <p class="destaque">Este é um parágrafo destacado.</p>
      <p class="erro">Este é um parágrafo com estilo de erro.</p>
      <div class="destaque">Este é um div com o mesmo estilo de destaque.</div>
  </body>
  </html>
  ```
