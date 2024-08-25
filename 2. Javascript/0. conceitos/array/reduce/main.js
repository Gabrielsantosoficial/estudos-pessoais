
const aluno = {
    nome: "Maria",
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}


console.log(aluno.notas.length)

let aluno_status = aluno.notas.reduce(function(caixa, numero) {
    return (caixa + numero)
}) / aluno.notas.length

console.log(Math.round(aluno_status))

console.log(`A nota de ${aluno.nome} foi ${Math.round(aluno_status)} para um total de ${aluno.notas.length} bimestres`)