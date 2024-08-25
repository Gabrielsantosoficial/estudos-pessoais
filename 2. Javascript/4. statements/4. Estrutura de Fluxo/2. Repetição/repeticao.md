**Vamos falar sobre laços de repetição em JavaScript!**

**Imagine que você está fazendo exercícios e decide fazer 10 flexões.** Cada vez que você faz uma flexão, você conta uma repetição até chegar a 10. Em JavaScript, laços de repetição funcionam de maneira semelhante: eles permitem que você repita um bloco de código várias vezes, até que uma condição seja atendida.

## Tipos de Laços de Repetição

Em JavaScript, os laços de repetição mais comuns são `for`, `while`, `do...while`, e `for...of`. Cada um deles é útil em diferentes situações.

### 1. **Laço `for`**

O laço `for` é usado quando você sabe exatamente quantas vezes deseja repetir um bloco de código.

**Exemplo:**

```javascript
for (let i = 1; i <= 10; i++) {
  console.log('Flexão número ' + i);
}
```

**Como funciona:**

- `let i = 1;` inicializa a variável `i` com o valor 1.
- `i <= 10;` define a condição para continuar o laço (enquanto `i` for menor ou igual a 10).
- `i++` incrementa `i` em 1 a cada iteração.

Esse laço vai imprimir no console a mensagem `"Flexão número X"` 10 vezes, onde `X` vai de 1 a 10.

### 2. **Laço `while`**

O laço `while` continua a repetir um bloco de código enquanto uma condição for verdadeira. É usado quando você não sabe exatamente quantas vezes o laço precisará ser executado.

**Exemplo:**

```javascript
let contador = 1;

while (contador <= 10) {
  console.log('Flexão número ' + contador);
  contador++;
}
```

**Como funciona:**

- O laço começa verificando a condição `contador <= 10`.
- Se a condição for verdadeira, ele executa o bloco de código e incrementa `contador`.
- O laço continua até que a condição se torne falsa.

### 3. **Laço `do...while`**

O laço `do...while` é semelhante ao `while`, mas a condição é verificada após a execução do bloco de código. Isso garante que o bloco seja executado pelo menos uma vez.

**Exemplo:**

```javascript
let contador = 1;

do {
  console.log('Flexão número ' + contador);
  contador++;
} while (contador <= 10);
```

**Como funciona:**

- O código dentro do bloco `do` é executado primeiro.
- Em seguida, a condição `contador <= 10` é verificada.
- Se a condição for verdadeira, o laço repete.

### 4. **Laço `for...of`**

O laço `for...of` é usado para iterar sobre elementos de uma coleção, como um array.

**Exemplo:**

```javascript
let frutas = ['maçã', 'banana', 'laranja'];

for (let fruta of frutas) {
  console.log('Eu gosto de ' + fruta);
}
```

**Como funciona:**

- O laço `for...of` percorre cada elemento do array `frutas`.
- A cada iteração, `fruta` recebe o valor do próximo elemento do array.

Esse laço vai imprimir no console `"Eu gosto de maçã"`, `"Eu gosto de banana"`, e `"Eu gosto de laranja"`.

## Exemplo Prático na Tela

Aqui está um exemplo completo que você pode usar em um arquivo HTML para ver como os laços de repetição funcionam na prática:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Laços de Repetição</title>
</head>
<body>
    <h1>Exemplo de Laços de Repetição em JavaScript</h1>
    <p id="resultado"></p>

    <script>
        let resultado = '';

        // Exemplo de laço for
        for (let i = 1; i <= 5; i++) {
            resultado += 'For loop: Flexão número ' + i + '<br>';
        }

        // Exemplo de laço while
        let contador = 1;
        while (contador <= 3) {
            resultado += 'While loop: Flexão número ' + contador + '<br>';
            contador++;
        }

        // Exemplo de laço do...while
        contador = 1;
        do {
            resultado += 'Do...While loop: Flexão número ' + contador + '<br>';
            contador++;
        } while (contador <= 2);

        // Exemplo de laço for...of
        let frutas = ['maçã', 'banana', 'laranja'];
        for (let fruta of frutas) {
            resultado += 'For...Of loop: Eu gosto de ' + fruta + '<br>';
        }

        // Exibir o resultado na tela
        document.getElementById('resultado').innerHTML = resultado;
    </script>
</body>
</html>
```

### O que esse código faz:

1. **Laço `for`:** Imprime uma mensagem cinco vezes, uma para cada iteração do laço.
2. **Laço `while`:** Imprime uma mensagem três vezes, enquanto a condição é verdadeira.
3. **Laço `do...while`:** Imprime uma mensagem duas vezes, garantindo que o código seja executado pelo menos uma vez.
4. **Laço `for...of`:** Itera sobre um array de frutas e imprime uma mensagem para cada fruta.

### Como testar:

1. Crie um arquivo HTML (por exemplo, `index.html`).
2. Cole o código acima no arquivo.
3. Abra o arquivo HTML em um navegador.

### O que você verá:

As mensagens de cada laço de repetição serão exibidas na tela, mostrando como eles funcionam de forma prática.