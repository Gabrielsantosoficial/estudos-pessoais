
const alunos = [

    {

      nome: 'Maria',

      sobrenome: 'da Silva',

    },

    {

      nome: 'José',

      sobrenome: 'Moreira',

    },

    {

      nome: 'Paulo',

      sobrenome: 'Henrique',

    },

    {

      nome: 'Pedro',

      sobrenome: 'Souza',

    },

]

// Geral

let listaAlunos = alunos.map(function(aluno) {

    return aluno.nome + " " + aluno.sobrenome
})

console.log(listaAlunos)



// arrow function

let listaAlunos2 = alunos.map(aluno => aluno.nome + " " + aluno.sobrenome)

console.log(listaAlunos2)

