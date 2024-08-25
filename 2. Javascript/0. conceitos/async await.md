Async/await, meu amigo!

Imagine que você está cozinhando um delicioso prato e precisa esperar que o arroz cozinhe antes de servir. Em vez de ficar parado esperando o arroz cozinhar, você pode continuar preparando outros ingredientes e voltar a verificar o arroz quando ele estiver pronto.

Async/await é uma forma de escrever código assíncrono de forma mais legível e fácil de entender. Ele permite que você escreva código que parece ser síncrono, mas é executado de forma assíncrona.

Uma palavra-chave async é usada para definir uma função que retorna uma promessa. Já a palavra-chave await é usada para esperar que uma promessa seja resolvida ou rejeitada.

Aqui está um exemplo de como usar assinc/await:


Verificar

Abrir no editor
Editar
Código cópia
async function cozinharArroz() {
  console.log('Iniciando o cozimento do arroz...');
  const arrozCozido = await cozinharArrozAsync();
  console.log('Arroz cozido!');
  console.log(arrozCozido);
}

function cozinharArrozAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Arroz cozido com sucesso!');
    }, 2000);
  });
}

cozinharArroz();
Nesse exemplo, estamos definindo uma função cozinharArroz que é assíncrona. Dentro dessa função, estamos usando await para esperar que uma promessa cozinharArrozAsync seja resolvida. Quando uma promessa é resolvida, estamos imprimindo uma mensagem "Arroz cozido!" e o resultado da promessa.

Uma grande vantagem de usar assinc/await é que o código mais legislação e fácil de entender. Em vez de usar .then() e .catch() para lidar com promessas, você pode escrever que parece ser síncrono.

Agora, você entende como async/await funciona!

Você gosta de aprender sobre como lidar com erros em async/await, ou você tem outra pergunta?