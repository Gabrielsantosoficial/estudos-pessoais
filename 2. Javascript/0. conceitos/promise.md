Imagine que você compra um ingresso para um show de música e o fornecedor para o dá um recibo que diz: "Você terá um lugar garantido sem show, mas só saberá ou seu lugar exato quando chegar ao local do evento". Você não sabe exatamente depois de estar enviado, mas tem uma garantia de que terá um lugar.

Uma promessa (ou promessa) é um objeto que representa o resultado de uma operação assíncrona. Ela pode ter três estados:

Pendente (pendente): A operation ainda não foi concluída.
Resolvida (resolvida): A operation foi concluída com sucesso.
Rejeitada (rejeitada): A operation falhou.
Quando você cria uma promessa, você pode especializar o que deve ser feito quando uma operação para conclusão. Isso é feito usando os métodos then() e catch().

Aqui está um exemplo de como usar promete:


Verificar

Abrir no editor
Editar
Código cópia
function comprarIngresso() {
  return new Promise((resolve, reject) => {
    // Simular a compra do ingresso (levar 2 segundos)
    setTimeout(() => {
      resolve("Ingresso comprado com sucesso!"); // Resolva a promise com um mensagem de sucesso
    }, 2000);
  });
}

comprarIngresso()
  .then((mensagem) => {
    console.log(mensagem); // Imprimir a mensagem de sucesso
  })
  .catch((erro) => {
    console.error(erro); // Imprimir o erro se a promise for rejeitada
  });
Nesse exemplo, estamos criando uma promessa que simula uma compra de um ingresso. Quando um compra para concluída, uma promessa será resolvida com uma mensagem de sucesso. Se houver um erro, uma promessa será rejeitada com um erro.

Promessas são muito úteis para lidar com côdigo assíncrono de forma mais organizada e fácil de ler.

Agora, você entende como promete funcionam!