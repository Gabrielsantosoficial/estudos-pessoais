Sincrono e Assincrono, meu amigo!

Imagine que você está em uma fila de banco e precisando realizar uma transação. Você tem duas opções:

Sincrono: Você entra na fila e espera até que uma pessoa à frente de você termine sua transação. Quando ela termina, você pode realizar sua transação. Isso significa que você precisa esperar que uma pessoa termine antes de vir.

Assincrono: Você entra na fila, mas em vez de esperar, você pode ir fazer outra coisa tanto espera. Quando uma pessoa à frente de você termina sua transação, você é notificado e pode voltar para realizar sua transação. Isso significa que você não precisa esperar que uma pessoa tenha antes de vir.

Em programação, sincrono e assincrono se refere à forma como as tarefas são executadas.

Sincrono: Quando uma tarefa é executada de forma simultânea, o código espera até que uma tarefa seja concluída antes de continuar. Isso significa que o código é executado em uma ordem sequencial.

Exemplo:


Verificar

Abrir no editor
Editar
Código cópia
function fazerTarefa1() {
  console.log('Iniciando tarefa 1');
  // código da tarefa 1
  console.log('Tarefa 1 concluída');
}

function fazerTarefa2() {
  console.log('Iniciando tarefa 2');
  // código da tarefa 2
  console.log('Tarefa 2 concluída');
}

fazerTarefa1();
fazerTarefa2();
Nesse exemplo, uma tarefa 1 é executada primeiro e o código espera até que ela veja concluída antes de executar uma tarefa 2.

Assincrono: Quando uma tarefa é executada de forma assincrona, o código não espera até que uma tarefa seja concluída antes de continuar. Isso significa que o código pode executar outras tarefas tanto espera que uma tarefa seja concluída.

Exemplo:


Verificar

Abrir no editor
Editar
Código cópia
function fazerTarefa1(callback) {
  console.log('Iniciando tarefa 1');
  // código da tarefa 1
  setTimeout(() => {
    console.log('Tarefa 1 concluída');
    callback();
  }, 2000);
}

function fazerTarefa2() {
  console.log('Iniciando tarefa 2');
  // código da tarefa 2
  console.log('Tarefa 2 concluída');
}

fazerTarefa1(() => {
  fazerTarefa2();
});
Nesse exemplo, uma tarefa 1 é executada e o código não espera até que ela veja concluída antes de continuar. Em vez disso, o côdigo executa uma tarefa 2 tanto espera que uma tarefa 1 seja concluída.

Agora, você entende uma diferença entre sincero e assincrono!

Você gosta de aprender sobre retornos de chamada, promete e async/await, que são formas de lidar com côdigo assincrono, ou você tem outra pergunta?