x'x'**Imagine que você está assistindo um jogo de futebol, e a cada 5 minutos o placar é atualizado automaticamente.** Em JavaScript, o `setInterval` faz algo semelhante: ele executa uma função repetidamente em intervalos de tempo regulares, como atualizar o placar de tempos em tempos.

## O que é `setInterval`?

`setInterval` é uma função em JavaScript que permite executar um pedaço de código ou uma função repetidamente, com um intervalo de tempo fixo entre cada execução.

### Como usar `setInterval`

Aqui está a sintaxe básica de `setInterval`:

```javascript
setInterval(funcao, intervalo);
```

- **`funcao`**: A função que você quer executar repetidamente.
- **`intervalo`**: O tempo, em milissegundos, a esperar entre cada execução da função.

### Exemplo Básico

Vamos ver um exemplo simples onde exibimos uma mensagem na tela a cada 2 segundos (2000 milissegundos):

```javascript
setInterval(function() {
    console.log('2 segundos se passaram...');
}, 2000);
```

Neste exemplo, a mensagem "2 segundos se passaram..." será exibida no console a cada 2 segundos, repetidamente.

### Cancelando um `setInterval`

Assim como o `setTimeout`, você pode cancelar um `setInterval` usando `clearInterval`. Para isso, você precisa armazenar o `setInterval` em uma variável.

```javascript
let meuIntervalo = setInterval(function() {
    console.log('Esta mensagem aparecerá repetidamente a cada 3 segundos.');
}, 3000);

// Cancelando o intervalo após 10 segundos
setTimeout(function() {
    clearInterval(meuIntervalo);
    console.log('O intervalo foi cancelado!');
}, 10000);
```

Neste exemplo, a mensagem será exibida a cada 3 segundos, mas o intervalo será cancelado após 10 segundos, então a mensagem será exibida apenas três vezes.

## Exemplo Prático na Tela

Vamos criar um exemplo onde um contador na tela é incrementado a cada segundo, e você pode parar o contador quando quiser.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de setInterval</title>
</head>
<body>
    <p id="contador">Contador: 0</p>
    <button id="iniciar">Iniciar Contador</button>
    <button id="parar">Parar Contador</button>

    <script>
        let contador = 0;
        let intervaloId;

        document.getElementById('iniciar').onclick = function() {
            intervaloId = setInterval(function() {
                contador++;
                document.getElementById('contador').textContent = 'Contador: ' + contador;
            }, 1000);
        };

        document.getElementById('parar').onclick = function() {
            clearInterval(intervaloId);
            alert('O contador foi parado!');
        };
    </script>
</body>
</html>
```

### Como esse código funciona:

1. **Iniciar Contador**: Quando você clica no botão "Iniciar Contador", um `setInterval` é acionado para incrementar o valor do contador na tela a cada segundo.
2. **Parar Contador**: Se você clicar no botão "Parar Contador", o `setInterval` é cancelado, parando o contador.

### Como testar:

1. Crie um arquivo HTML (por exemplo, `index.html`).
2. Cole o código acima no arquivo.
3. Abra o arquivo HTML em um navegador.

### O que você verá:

A página terá um contador que começa em 0 e dois botões. Se você clicar em "Iniciar Contador", o contador começará a incrementar a cada segundo. Se clicar em "Parar Contador", o contador parará de incrementar, e uma mensagem de alerta aparecerá indicando que o contador foi parado.