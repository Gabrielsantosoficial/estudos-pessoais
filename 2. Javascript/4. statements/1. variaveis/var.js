/* CONCEITOS CHAVE

    - É possível sobrescrever uma váriavel várias vezes

*/







console.log(a)

var a = 10

console.log(a)



// Entendo o escopo (até onde é acessivel) do va

{
    {
        {
            var sera = "Será???"
        }
    }
}

console.log(sera) // Será visivel fora do escopo

// Evite usar var para não criar VÁRIAVEIS GLOBAIS

function teste() {
    var local = 123
}

console.log(local) // fora do escopo de uma função não vai funcionar