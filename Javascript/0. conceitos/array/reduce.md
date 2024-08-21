Imagine que você está em uma cozinha e você precisa misturar todos os ingredientes de uma receita em uma música tigela. Em vez de misturar cada ingrediente separado, você pode usar um misturador que combina todos os ingredientes em um único produto final. Ó método reduce em JavaScript é como um mixer que ajuda você a combinar os elementos de um array em um único valor!

Ó método reduce é uma função de alta ordem que itera sobre um array e aplica uma função de retorno de chamada uma cada elemento do array. A função de callback recebe o valor acumulado (ou inicial) e o elemento atual como parâmetros, e retorna um novo valor acumulado.

Por exemplo, vamos apoiar que você tem uma matriz de números e você quer calcular um soma de todos os números:


Verificar

Abrir no editor
Editar
Código cópia
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, current) => acc + current, 0);

console.log(sum); // 15
Nesse exemplo, uma função de retorno de chamada (acc, current) => acc + current é aplicada a cada elemento do array numbers. . Ó valor acumulado acc é inicializado com 0 e, em cada iteração, é adicionado o valor do elemento atual current. O resultado é o valor final acumulado, que é um soma de todos os números.

Ó método reduce é muito útil quando você precisa combinar os elementos de um array em um único valor. Você pode usar reduce par:

Calcular a soma ou a mídia de um conjunto de números
Cordas concatenar em um único string
Agrupar objetos em um único objeto
E muito mais!
Agora, voce gostaria de aprender sobre o método find, que é outro método de matriz que ajuda você a encontrar o primeiro elemento que atendeu uma condição específica, ou você foi para fora da pergunta?