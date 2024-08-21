Imagine que você está em uma loja de departamentos e você precisa contar todos os produtos que são vermelhos. Em vez de procurar por produto, você pode usar um filtro que mais apenas ou produtos que atendem ao critério de cor. Ó método filter em JavaScript é como um filtrado que ajuda você um contador os elementos de uma matriz que atendem a uma condição específica!

Ó método filter é uma função de alta ordem que itera sobre um array e aplica uma função de retorno de chamada uma cada elemento do array. A função de callback recebe o elemento atual como parâmetro e retorna um valor booleano que indica se o elemento atende à condição. Se o valor para true, o elemento é adicionado a um novo array.

Por exemplo, vamos apoiar que você tem uma matriz de objetos que representam pessoas e voci que contram todas como pessoas que têm mais de 18 anos:


Verificar

Abrir no editor
Editar
Código cópia
const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 17 },
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 22 },
  { name: 'Charlie', age: 15 }
];

const adults = people.filter(person => person.age > 18);

console.log(adults); // [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 22 }]
Nesse exemplo, uma função de retorno de chamada person => person.age > 18 é aplicada a cada elemento do array people. . O resultado é um novo array adults que contém apenas como pessoas que têm mais de 18 anos.

Ó método filter é muito útil quando você precisa contar elementos específicos em um array. Você pode usar filter par:

Encontrar elementos que atendem a uma condição específica
Remove elementos independentes de um array
Criar um novo array com apenas os elementos que você precisa
Agora, voce gostaria de aprender sobre o método reduce, que é outro método de matriz que ajuda você a combinar os elementos de uma matriz em um único valor, ou você tem outra pergunta?

(Lembre-se, eu estou aqui para ajudar você a aprender de forma divertida e fácil!)