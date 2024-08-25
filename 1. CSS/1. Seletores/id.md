
### 3. Estilizando IDs

**Estilizar IDs** é usado para aplicar estilos únicos a um único elemento. IDs devem ser únicos em uma página, e cada ID pode ser associado a apenas um elemento.

- **Como Usar**:
  - Defina um ID no CSS usando o `#` seguido pelo nome do ID.
  - Aplique o ID ao elemento HTML usando o atributo `id`.

- **Exemplo**:
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Estilizando IDs</title>
      <style>
          /* Estilizando o elemento com o ID #cabecalho */
          #cabecalho {
              background-color: #4CAF50;
              color: white;
              padding: 15px;
              text-align: center;
              font-size: 24px;
          }

          /* Estilizando o elemento com o ID #rodape */
          #rodape {
              background-color: #333;
              color: white;
              padding: 10px;
              text-align: center;
              position: fixed;
              bottom: 0;
              width: 100%;
          }
      </style>
  </head>
  <body>
      <div id="cabecalho">Cabeçalho do Site</div>
      <p>Conteúdo da página vai aqui...</p>
      <div id="rodape">Rodapé do Site</div>
  </body>
  </html>
  ```

### Resumo das Vantagens e Usos

- **Tags**:
  - **Vantagens**: Fácil de aplicar a todos os elementos de um tipo específico.
  - **Uso Ideal**: Estilizar elementos HTML de forma geral.

- **Classes**:
  - **Vantagens**: Flexível e reutilizável em múltiplos elementos.
  - **Uso Ideal**: Aplicar o mesmo estilo a diferentes tipos de elementos.

- **IDs**:
  - **Vantagens**: Específico e único para um elemento.
  - **Uso Ideal**: Aplicar estilos únicos a um único elemento, geralmente usado para layouts e seções específicas.
