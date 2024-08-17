// Variáveis que representam as condições
let temperatura = prompt('Qual temperatura hoje? '); // Modifique esse valor para testar diferentes saídas
let diaDaSemana = prompt('Hoje é que dia da semana? '); // Modifique esse valor para testar diferentes saídas

// Decisão baseada na temperatura

let mensagem = '';

if (temperatura > 30) {
    mensagem += 'Está muito quente, use roupas leves e beba muita água.<br>';
} else if (temperatura > 20) {
    mensagem += 'Está quente, use uma camiseta.<br>';
} else if (temperatura > 10) {
    mensagem += 'Está um pouco frio, use um casaco leve.<br>';
} else {
    mensagem += 'Está muito frio, vista um casaco pesado.<br>';
}

// Decisão baseada no dia da semana

switch (diaDaSemana) {
    case 'segunda-feira':
        mensagem += 'Hoje é segunda, hora de começar a semana com energia!<br>';
        break;
    case 'quarta-feira':
        mensagem += 'Hoje é quarta, estamos no meio da semana. Continue firme!<br>';
        break;
    case 'sexta-feira':
        mensagem += 'Hoje é sexta, o fim de semana está chegando! Prepare-se para relaxar.<br>';
        break;
    case 'sábado':
    case 'domingo':
        mensagem += 'É fim de semana, aproveite para descansar!<br>';
        break;
    default:
        mensagem += 'Hoje é um dia comum, siga sua rotina.<br>';
}

// Exemplo de combinação de decisões

if (temperatura > 20 && (diaDaSemana === 'sábado' || diaDaSemana === 'domingo')) {
    mensagem += 'Está quente e é fim de semana, ótimo para ir à praia!';
} else if (temperatura <= 20 && diaDaSemana === 'sexta-feira') {
    mensagem += 'Está frio, mas é sexta-feira. Que tal um filme em casa?';
}

// Exibir a mensagem na tela
document.getElementById('mensagem').innerHTML = mensagem;