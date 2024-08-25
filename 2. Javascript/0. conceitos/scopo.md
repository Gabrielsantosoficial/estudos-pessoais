O escopo em JavaScript se refere ao ambiente em que uma variável, função ou objeto é acessível. Imagine que você está em uma sala de aula, e dentro dessa sala, você tem uma mesa com um lápiz. O lápiz é uma variável, e uma sala de aula é o escopo.

Se você está dentro da sala de aula, você pode pegar o lápiz e usá-lo. Mas se você sai da sala de aula, você não pode mais ter acesso o lápiz, porque ele está fora do seu escopo.

Em JavaScript, existem dois tipos de escopo: o escopo global e o escopo local.

O escopo global é como uma biblioteca inteira que eu mencionei anteriormente. É o escopo mais amplo, e todas como variáveis, funções e objetos declarados fora de uma diversão estão nesse escopo.

Já o escopo local é como a sala de aula. É um escopo mais resto, e como variáveis, funções e objetos declarados dentro de uma função estão nesse escopo.

Vamos ver um exemplo:


Verificar

Abrir no editor
Editar
Código cópia
var x = 10; // escopo global

function minhaFuncao() {
  var y = 20; // escopo local
  console.log(x); // 10
  console.log(y); // 20
}

console.log(y); // undefined, porque y está fora do escopo
Você entendeu? O escopo é como um contêiner que define onde uma variável, função ou objeto pode ser acessado.