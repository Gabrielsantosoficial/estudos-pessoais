**Imagine que você está arrumando sua mochila para a escola.** Você sempre coloca seus livros no fundo da mochila, mas quando vai pegá-los, parece que eles magicamente aparecem no topo, prontos para serem usados. O "hoisting" em JavaScript funciona de uma forma parecida!

## O que é "hoisting" em JavaScript?

**Hoisting** é um comportamento do JavaScript onde você declara uma variável, o JavaScript automaticamente a "eleva" ao topo do escopo. Mas atenção: só a declaração da variável é elevada, não a sua atribuição de valor.

```javascript

// Variaveis
console.log(nome); // Isso vai mostrar: undefined
var nome = "Alice";
console.log(nome); // Isso vai mostrar: "Alice"


// Funções
saudar();

function saudar() {
  console.log("Olá!");
}

```

### Por que entender hoisting é importante?

**Entender o hoisting ajuda a evitar erros misteriosos** em seu código. Se você souber que variáveis e funções são elevadas, pode escrever um código mais claro e evitar bugs que acontecem quando você tenta usar algo antes de sua declaração.