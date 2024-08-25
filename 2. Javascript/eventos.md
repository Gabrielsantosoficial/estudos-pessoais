
Criar a função fora

**Imagine que você está organizando um show ao vivo.** Quando o público aplaude, as luzes piscam. Quando o cantor começa a cantar, a banda toca junto. Esses são exemplos de "eventos" que acontecem em resposta a certas ações. Em JavaScript, eventos funcionam de maneira semelhante: eles são ações ou ocorrências que acontecem na página web e que podem ser detectadas e respondidas pelo JavaScript.



## O que são Eventos?

Eventos em JavaScript são ações que acontecem no navegador, como um clique do mouse, uma tecla pressionada, ou o carregamento de uma página. Você pode usar JavaScript para "escutar" esses eventos e responder a eles, executando algum código quando eles ocorrerem.

Para trabalhar com eventos, você geralmente segue três etapas principais:

1. **Selecionar o elemento**: Escolher o elemento HTML que vai "ouvir" o evento.
2. **Adicionar o ouvinte de evento**: Associar o evento que você quer ouvir ao elemento.
3. **Definir a função de resposta**: Criar a função que será executada quando o evento ocorrer.



## Principais Tipos de Eventos

Aqui estão alguns dos eventos mais comuns que você pode usar em JavaScript:

### 1. **Eventos de Mouse**

- **`click`**: Aciona quando o elemento é clicado.
  - **Exemplo**:

  ```javascript
  let botao = document.querySelector('#meuBotao');
  botao.addEventListener('click', function() {
      alert('Botão clicado!');
  });
  ```

- **`mouseover`**: Aciona quando o mouse passa sobre o elemento.
  - **Exemplo**:

  ```javascript
  let imagem = document.querySelector('#minhaImagem');
  imagem.addEventListener('mouseover', function() {
      imagem.style.border = '2px solid red';
  });
  ```

- **`mouseout`**: Aciona quando o mouse sai de cima do elemento.
  - **Exemplo**:

  ```javascript
  imagem.addEventListener('mouseout', function() {
      imagem.style.border = 'none';
  });
  ```

### 2. **Eventos de Teclado**

- **`keydown`**: Aciona quando uma tecla é pressionada.
  - **Exemplo**:

  ```javascript
  document.addEventListener('keydown', function(event) {
      console.log('Tecla pressionada: ' + event.key);
  });
  ```

- **`keyup`**: Aciona quando uma tecla é solta.
  - **Exemplo**:

  ```javascript
  document.addEventListener('keyup', function(event) {
      console.log('Tecla liberada: ' + event.key);
  });
  ```

### 3. **Eventos de Formulário**

- **`submit`**: Aciona quando um formulário é enviado.
  - **Exemplo**:

  ```javascript
  let formulario = document.querySelector('#meuFormulario');
  formulario.addEventListener('submit', function(event) {
      event.preventDefault();  // Impede o envio do formulário
      alert('Formulário enviado!');
  });
  ```

- **`change`**: Aciona quando o valor de um elemento de formulário é alterado.
  - **Exemplo**:

  ```javascript
  let campoTexto = document.querySelector('#meuCampo');
  campoTexto.addEventListener('change', function() {
      alert('O valor foi alterado!');
  });
  ```

### 4. **Eventos de Janela**

- **`load`**: Aciona quando a página ou um recurso é completamente carregado.
  - **Exemplo**:

  ```javascript
  window.addEventListener('load', function() {
      console.log('Página carregada!');
  });
  ```

- **`resize`**: Aciona quando a janela do navegador é redimensionada.
  - **Exemplo**:

  ```javascript
  window.addEventListener('resize', function() {
      console.log('A janela foi redimensionada!');
  });
  ```

## Exemplo Prático na Tela

Vamos combinar alguns desses eventos em um exemplo prático:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Eventos em JavaScript</title>
</head>
<body>
    <button id="meuBotao">Clique em mim!</button>
    <input type="text" id="meuCampo" placeholder="Digite algo aqui...">
    <img id="minhaImagem" src="https://via.placeholder.com/150" alt="Imagem Exemplo">
    
    <script>
        // Evento de clique no botão
        let botao = document.querySelector('#meuBotao');
        botao.addEventListener('click', function() {
            alert('Você clicou no botão!');
        });

        // Evento de mudança no campo de texto
        let campoTexto = document.querySelector('#meuCampo');
        campoTexto.addEventListener('change', function() {
            alert('Você alterou o texto para: ' + campoTexto.value);
        });

        // Eventos de mouse na imagem
        let imagem = document.querySelector('#minhaImagem');
        imagem.addEventListener('mouseover', function() {
            imagem.style.border = '2px solid blue';
        });

        imagem.addEventListener('mouseout', function() {
            imagem.style.border = 'none';
        });

        // Evento de tecla pressionada
        document.addEventListener('keydown', function(event) {
            console.log('Tecla pressionada: ' + event.key);
        });
    </script>
</body>
</html>
```

### Como esse código funciona:

1. **Clique no botão**: Quando você clica no botão, aparece um alerta dizendo "Você clicou no botão!".
2. **Mudança no campo de texto**: Quando você digita algo no campo de texto e depois clica fora dele, aparece um alerta com o novo valor.
3. **Mouse sobre a imagem**: Quando você passa o mouse sobre a imagem, uma borda azul aparece ao redor dela.
4. **Mouse fora da imagem**: Quando o mouse sai de cima da imagem, a borda desaparece.
5. **Tecla pressionada**: Cada vez que você pressiona uma tecla, o nome da tecla aparece no console do navegador.

### Como testar:

1. Crie um arquivo HTML (por exemplo, `index.html`).
2. Cole o código acima no arquivo.
3. Abra o arquivo HTML em um navegador.

### O que você verá:

A página terá um botão, um campo de texto e uma imagem. Interaja com eles para ver como os eventos são disparados e como o JavaScript responde a essas interações.