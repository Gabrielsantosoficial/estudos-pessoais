
**Imagine uma peneira**  que deixa passar apenas os itens que atendem a um certo critério. Da mesma forma, o método `filter()` cria um novo array com todos os elementos do array original que passam em um teste (definido por uma função).

### O que é `filter()`?

O método `filter()` percorre cada item do array original e cria um novo array contendo apenas os itens que retornam `true` para a condição que você definir na função de callback.

```javascript
let novoArray = arrayOriginal.filter(function(elemento) {
    // Retorne true para incluir o elemento no novo array
    // Retorne false para excluir o elemento do novo array
});
```


### Exemplo Básico

Imagine que você tem um array de números e deseja criar um novo array que contenha apenas os números maiores que 10:

```javascript
let numeros = [5, 12, 8, 130, 44];

let maioresQueDez = numeros.filter(function(numero) {
    return numero > 10;
});

console.log(maioresQueDez); 
// [12, 130, 44]
```


### Outro Exemplo: Filtrar Objetos

Agora, imagine que você tem um array de objetos representando pessoas, e deseja filtrar apenas as pessoas com mais de 18 anos:

```javascript
let pessoas = [
    { nome: "João", idade: 16 },
    { nome: "Maria", idade: 23 },
    { nome: "Pedro", idade: 17 },
    { nome: "Ana", idade: 21 }
];

let adultos = pessoas.filter(function(pessoa) {
    return pessoa.idade >= 18;
});

console.log(adultos); 
// [{ nome: "Maria", idade: 23 }, { nome: "Ana", idade: 21 }]
```

### Usando Arrow Function

Podemos simplificar o código usando uma **arrow function**:

```javascript
let adultos = pessoas.filter(pessoa => pessoa.idade >= 18);

console.log(adultos); 
// [{ nome: "Maria", idade: 23 }, { nome: "Ana", idade: 21 }]
```

### Características do `filter()`

- **Imutável**: O array original não é modificado.
- **Novo Array**: Retorna um novo array com os elementos que passam no teste. Se nenhum elemento passar no teste, retorna um array vazio.

### Resumo

- **`filter()`** é usado para criar um novo array que contém apenas os elementos que atendem a uma condição específica.
- Pode ser aplicado tanto em arrays de valores simples quanto em arrays de objetos.
- Muito útil quando você precisa extrair um subconjunto de dados com base em algum critério.

Se tiver mais alguma dúvida ou quiser ver exemplos sobre outros conceitos, sinta-se à vontade para perguntar!