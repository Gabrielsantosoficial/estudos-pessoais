Imagine que você está escrevendo uma carta para um amigo, e você quer ser mais conciso e direto. Em vez de escrever uma carta longa e detalhada, você pode usar um cartão-postal para inviar uma mensagem curva e simples. Funções de seta são como cartões-postais em JavaScript!

Uma seta função é uma forma mais concisa de declarar uma função em JavaScript. Em vez de usar uma palavra-chave function, você usa uma seta (=>) para separar os parâmetros da função do corpo da função.

Por exemplo, vamos comparar uma função tradicional com uma função de seta:


Verificar

Abrir no editor
Editar
Código cópia
// Função tradicional
function soma(a, b) {
  return a + b;
}

// Arrow function
const soma = (a, b) => a + b;
Ambas as funções fazem uma mesma coisa, mas uma função de seta é mais concisa e fácil de ler.

Funções de flecha também três algomas vantagens adicionais, como:

Não precisam de uma palavra-chave return explícita, pois o resultado da expressão é retornado automatizado.
Não criam um novo escopo, então você não precisa se preocupar com a palavra-chave this.
São mais fáceis de usar como callbacks em funções de alta ordem.
Agora, você gostaria de aprender sobre como usar funções de seta em conjunto com outras características fazer JavaScript, como mapa, filtro e reduzir, ou você tem fora pergunta?

(Lembre-se, eu estou aqui para ajudar você a aprender de forma divertida e fácil!)