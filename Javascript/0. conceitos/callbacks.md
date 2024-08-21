Imagine que você está em um restaurante e pedisse um prato que leva 20 minutos para ser preparado. Em vez de esperar 20 minutos enviados à mesa, você pode dar seu número de telefone ao garçom e pedir que ele ligue para você quando o prato estiver pronto. Isso significa que você pode fazer outras coisas enquanto espera que seja preparado.

Um callback é uma diversão que é passada como argumento para outra função, e é executada quando uma determinada tarefa é concluída. Isso permite que você execute um acordo de forma mais organizada e fácil de ler.

Aqui está um exemplo de como usar retornos de chamada:


Verificar

Abrir no editor
Editar
Código cópia
function prepararPrato(callback) {
  // Preparar o prato (levar 20 minutos)
  setTimeout(() => {
    console.log("Prato preparado!");
    callback(); // Chamar o callback quando o prato estiver pronto
  }, 20000);
}

function comerPrato() {
  console.log("Comendo o prato!");
}

prepararPrato(comerPrato); // Passar o callback para a função prepararPrato
Nesse exemplo, estamos passando por uma função comerPrato como callback para a função prepararPrato. . Quando o prato estiver pronto, uma função comerPrato será executada.

Callbacks são muito úteis para lidar com côdigo assincrono, como exigências Ajax ou operações de leitura/gravação em banco de dados.

Agora, você entende como callbacks funcionam!