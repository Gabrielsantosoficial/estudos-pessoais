/* CONCEITOS CHAVE

    - Não é possível sobrescrever uma váriavel Let
*/



// Entendo o escopo (até onde é acessivel) do let

let numero = 1

{
    let numero = 2 // Será visivel só dentro do escopo
    console.log("Dentro = ", numero)
}

console.log("Fora = ", numero)
