
// Exemplo de laço for

let opcoes

for ( let contador = 2024; contador >= 2000; contador--) {
  opcoes += `<option>${contador}</option>`;
}

document.querySelector("#ano").innerHTML = opcoes


// Exemplo de laço while
let contador = 1;
while (contador <= 3) {
  resultado += "While loop: Flexão número " + contador + "<br>";
  contador++;
}

// Exemplo de laço do...while
contador = 1;
do {
  resultado += "Do...While loop: Flexão número " + contador + "<br>";
  contador++;
} while (contador <= 2);

// Exemplo de laço for...of
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
  resultado += "For...Of loop: Eu gosto de " + fruta + "<br>";
}

// Exibir o resultado na tela
document.getElementById("resultado").innerHTML = resultado;




