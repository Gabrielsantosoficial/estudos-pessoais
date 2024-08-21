Imagine que você está em uma loja de departamentos e você precisa envolver uma lista de produtos para um amigo que está em outra cidade. Em vez de escrever uma carta longa e detalhada, você pode criar uma lista simples e fácil de ler com os produtos e suas informações. JSON (JavaScript Object Notation) é como uma lista de produtos que você pode criar para armazenar e trocar dados entre sistemas!

JSON é um formato de dados leve e fácil de ler que consiste em pares de chave-valor, onde as chaves são strings e os valores podem ser strings, números, booleanos, arrays ou objetos. JSON é comumente usado para armazenar e trocar dados entre sistemas, como entre um servidor web e um aplicativo cliente.

Aqui está um exemplo de um objeto JSON que representa uma pessoa:


Verificar

Abrir no editor
Editar
Código cópia
{
  "name": "John",
  "age": 30,
  " occupation": "Developer",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
Nesse exemplo, o objeto JSON tem quatro propriedades: name, age, occupation e address. . Uma propriação address é um objeto JSON aninhado que tem quatro propriedades próprias.

JSON é muito útil quando você precisa:

Armazenar e trocar dados entre sistemas
Criar configurações de aplicativos
Armazenar dados em um banco de dados NoSQL
E muito mais!
Agora, voce gostaria de aprender sobre o método parse e stringify, que são dois outros importantes para o trabalho com JSON, ou você tem outra pergunta?



JSON.parse()

Imagine que você recebeu uma carta de seu amigo com uma lista de produtos que seu ambiente anterior. Para ler uma carta, você precisa decodificar o conteúdo para entender o que está escrito. Ó método JSON.parse() é como um decodificador que converte uma string JSON em um objeto JavaScript que você pode usar seu código.

Exemplo:


Verificar

Abrir no editor
Editar
Código cópia
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // "John"
console.log(jsonObject.age); // 30
Nesse exemplo, uma corda JSON jsonString é convertida em um objeto JavaScript jsonObject usando o método JSON.parse(). Em seguida, você pode acessar como propriedades do objeto usando uma notação de ponto.

JSON.stringify()

Agora, imagine que você precisa inviar uma carta de volta para seu amigo com uma lista de produtos atualizados. Para fazer isso, você precisa conversor o objeto JavaScript em uma string JSON que possa ser enviada. Ó método JSON.stringify() é como um codificador que converte um objeto JavaScript em uma string JSON.

Exemplo:


Verificar

Abrir no editor
Editar
Código cópia
const jsonObject = { name: "John", age: 30 };
const jsonString = JSON.stringify(jsonObject);

console.log(jsonString); // '{"name": "John", "age": 30}'
Nesse exemplo, o objeto JavaScript jsonObject é convertido em uma string JSON jsonString usando o método JSON.stringify(). Em seguida, você pode inviar uma string JSON para seu amigo.

Agora, você entende como usar os métodos parse e stringify para trabalhar com JSON!

Você gostaria de aprender sobre o método fetch, que é usado para fazer exigências HTTP em JavaScript, ou você tem outra pergunta?