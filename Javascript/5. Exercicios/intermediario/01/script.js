var contador = 0;
let flag = null;
let intervalId = null; // Variável para armazenar o identificador do intervalo

// Mostrar contador
let numero = document.querySelector('#numero');
numero.innerHTML = `<h1>${contador}</h1>`;

// Adicionar mais
let mais = document.querySelector('#mais');
let menos = document.querySelector('#menos');

// Evento para incrementar
mais.addEventListener('click', function() {
    flag = true;
    iniciarContagem();
});

// Evento para decrementar
menos.addEventListener('click', function() {
    flag = false;
    iniciarContagem();
});



function iniciarContagem() {

    // Limpar qualquer intervalo existente
    if (intervalId !== null) {
        clearInterval(intervalId);
        mais.classList.remove('mais')
        menos.classList.remove('menos')
    }

    if (flag === true) {
        console.log('Entrou no incremento');
        
        // Iniciar um novo intervalo para incrementar
        intervalId = setInterval(function() {
            contador++;
            
            // Atualizar na variável
            console.log(contador);
            numero.innerHTML = `<h1>${contador}</h1>`;

            // adicionar css
            mais.classList.add('mais') 


        }, 300);
        
    } else if (flag === false) {
        console.log('Entrou no decremento');
        
        // Iniciar um novo intervalo para decrementar
        intervalId = setInterval(function() {
            contador--;
            
            // Atualizar na variável
            console.log(contador);
            numero.innerHTML = `<h1>${contador}</h1>`;

            // adicionar css
            menos.classList.add('menos')
            
            
        }, 300);
    }
}
