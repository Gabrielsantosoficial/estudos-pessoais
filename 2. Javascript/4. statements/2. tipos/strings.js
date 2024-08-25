const escola = "Cod3rs"

console.log(escola.charAt(4)) // Quarta posição da string
console.log(escola.indexOf("3")) // Procura o 3 na string e retornar a posição

console.log(escola.substring(1)) // da 1 posição para frente
console.log(escola.substring(1,4)) // da posição 1 ao 4 (sem incluir 4)

console.log("Escola ".concat(escola).concat("!")) // Concatenação
console.log(escola.replace(3, "e"))


/*  Template Strings */

nome = "Gabriel"
template = `Olá ${nome}`

console.log(template)