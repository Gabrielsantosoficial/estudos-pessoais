Imagine que você está em uma biblioteca e você precisa contar todos os livros de um autor específico. Em vez de procurar livre por vivo, você pode usar um mapa (ou um catálogo) que lista todos os livros do autor. Ó método map em JavaScript é como um mapa que ajuda você um contador e transformar os elementos de um array!

Ó método map é uma função de alta ordem que itera sobre um array e aplica uma função de retorno de chamada uma cada elemento do array. A função de callback recebe o elemento atual como parâmetro e retorna um novo valor que é adicionado a um novo array.

Por exemplo, vamos apoiar que você tem uma matriz de números e voz quer dobrar cada número:


Verificar

Abrir no editor
Editar
Código cópia
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(number => number * 2);

console.log(doubleNumbers); // [2, 4, 6, 8, 10]
Nesse exemplo, uma função de retorno de chamada number => number * 2 é aplicada a cada elemento do array numbers. . O resultado é um novo array doubleNumbers que contém os números dobrados.

Ó método map é muito útil quando você precisa transformar ou extrair informações de um array. Você pode usar map par:

Dobrar ou triplicar os valores de um array
Extrair informações específicas de uma matriz de objetos
Converter strings em maiúsculas ou minúsculas
E muito mais!
Agora, voce gostaria de aprender sobre o método filter, que é outro método de matriz que ajuda você a encontrar elementos específicos em um array, ou você tem outra pergunta?

(Lembre-se, eu estou aqui para ajudar você a aprender de forma divertida e fácil!)