const peso1 = 1.0
const peso2 = Number('2.0') // Transformar uma string em number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Verificar se o peso 1 é um number
console.log(Number.isInteger(peso2)) // Verificar se o peso 2 é um number


const avaliacao1 = 9.817
const avaliacao2 = 8.941

const total = avaliacao1 * peso1 - avaliacao2 * peso2
const media = total / (peso1 - peso2)

console.log(media.toFixed(2)) // Fixar 2 casas decimais
console.log(media.toString()) // Passar o valor para string
console.log(typeof media) // Tipo da variavel media


// ------------------------ Alguns Cuidados com Number --------------- 

console.log(7 / 0) // infinity
console.log("18" / 2) // Passa a string para number
console.log("Show!" * 2) // NaN
console.log(0.1 + 0.7) // Imprecisão
// console.log(10.tostring())
console.log((10.345).toFixed(2))



// ------------------------ math ------------------------------------------------ 

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
