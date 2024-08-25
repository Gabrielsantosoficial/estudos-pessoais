**Vamos falar sobre os *statements* (declarações) em JavaScript!**

**Imagine que você está dando uma série de comandos para um robô seguir.** Cada comando que você dá ao robô é como um *statement* em JavaScript. Esses *statements* dizem ao programa o que fazer, passo a passo, para executar uma tarefa.

## O que são *Statements*?

Em JavaScript, um *statement* é uma instrução que realiza uma ação específica. Ele pode ser algo simples, como definir uma variável, ou algo mais complexo, como tomar decisões ou executar um bloco de código repetidamente.

### Tipos Comuns de *Statements*

Aqui estão alguns dos *statements* mais comuns em JavaScript:

### 1. **Declaração de Variáveis (`var`, `let`, `const`)**

Esses *statements* são usados para criar variáveis.

**Exemplo:**

```javascript
let nome = 'Alice'; // Cria uma variável chamada "nome" e atribui o valor "Alice"
```

### 2. **Declarações de Controle de Fluxo**

Esses *statements* controlam o fluxo de execução do código.

- **`if`, `else if`, `else`**: Executa código baseado em condições.

  ```javascript
  let idade = 20;
  
  if (idade >= 18) {
    console.log('Você é maior de idade.');
  } else {
    console.log('Você é menor de idade.');
  }
  ```

- **`switch`**: Escolhe uma das várias opções baseadas no valor de uma variável.

  ```javascript
  let cor = 'vermelho';
  
  switch(cor) {
    case 'vermelho':
      console.log('Cor escolhida: Vermelho');
      break;
    case 'azul':
      console.log('Cor escolhida: Azul');
      break;
    default:
      console.log('Cor não reconhecida.');
  }
  ```

### 3. **Declarações de Laço (`for`, `while`)**

Esses *statements* permitem que você execute um bloco de código repetidamente.

- **`for`**: Executa um bloco de código um número determinado de vezes.

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log('Número: ' + i);
  }
  ```

- **`while`**: Executa um bloco de código enquanto uma condição é verdadeira.

  ```javascript
  let i = 0;
  
  while (i < 5) {
    console.log('Número: ' + i);
    i++;
  }
  ```

### 4. **Declaração de Função (`function`)**

Define um bloco de código que pode ser executado posteriormente.

**Exemplo:**

```javascript
function saudar(nome) {
  return 'Olá, ' + nome + '!';
}

console.log(saudar('Maria'));
```

### 5. **Declaração de Retorno (`return`)**

Finaliza a execução de uma função e pode retornar um valor.

**Exemplo:**

```javascript
function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(2, 3);
console.log(resultado); // Imprime 6
```

### 6. **Declaração de Bloco (`{}`)**

Um bloco é um conjunto de *statements* agrupados entre chaves `{}`. Blocos são usados com *statements* de controle de fluxo como `if`, `for`, `while`, etc.

**Exemplo:**

```javascript
if (true) {
  let mensagem = 'Dentro do bloco!';
  console.log(mensagem);
}
```

## Conclusão

*Statements* são os blocos básicos que constroem o comportamento de qualquer programa JavaScript. Eles podem ser simples, como a criação de uma variável, ou complexos, como um loop que repete um conjunto de instruções. Cada *statement* é uma ordem que o navegador executa para fazer o programa funcionar.

### Resumo

- **Variáveis**: `let`, `const`, `var`.
- **Controle de Fluxo**: `if`, `else`, `switch`.
- **Laços**: `for`, `while`.
- **Funções**: `function`.
- **Blocos**: Agrupam *statements* entre `{}`.
