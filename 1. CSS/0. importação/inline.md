### 3. CSS Inline

O CSS Inline é usado para aplicar estilos a um único elemento HTML. As regras de estilo são adicionadas diretamente no atributo `style` do elemento HTML. Esse método é útil para estilos rápidos e específicos.

- **Como Usar**:
  - Adicione a propriedade `style` diretamente ao elemento HTML.
  - Defina suas regras de estilo dentro do atributo `style`.

- **Exemplo**:

  **Arquivo HTML (`index.html`)**:
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Inline</title>
  </head>
  <body>
      <h1 style="color: #333; font-family: Arial, sans-serif;">Bem-vindo ao Meu Site!</h1>
      <a href="#" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px;">Clique Aqui</a>
  </body>
  </html>
  ```

### Resumo das Vantagens e Desvantagens

- **CSS Externo**:
  - **Vantagens**: Reutilizável em várias páginas, mantém HTML limpo, fácil de manter e atualizar.
  - **Desvantagens**: Requer um arquivo CSS adicional, carregamento inicial pode ser um pouco mais lento.

- **CSS Interno**:
  - **Vantagens**: Facilita o estilo de uma única página sem múltiplos arquivos, bom para projetos pequenos ou exemplos.
  - **Desvantagens**: Não é reutilizável em outras páginas, pode deixar o HTML mais carregado.

- **CSS Inline**:
  - **Vantagens**: Fácil de aplicar estilos rápidos e específicos, útil para testes rápidos.
  - **Desvantagens**: Não é reutilizável, dificulta a manutenção, não é ideal para grandes projetos.
