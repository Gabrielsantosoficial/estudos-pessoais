const alunos = [
    {
      nome: 'Carla',
      sobrenome: 'Campos',
      nota: 3,
    },
    {
      nome: 'José',
      sobrenome: 'Moreira',
      nota: 3,
    },
    {
      nome: 'Rodrigo',
      sobrenome: 'Barros',
      nota: 4,
    },
    {
      nome: 'Sara',
      sobrenome: 'Souza',
      nota: 5,
    },
    {
      nome: 'Andrea',
      sobrenome: 'Batista',
      nota: 6,
    },
    {
      nome: 'Paulo',
      sobrenome: 'Henrique',
      nota: 7,
    },
    {
      nome: 'Renato',
      sobrenome: 'Barros',
      nota: 7,
    },
    {
      nome: 'Clara',
      sobrenome: 'Barbosa',
      nota: 9,
    },
    {
      nome: 'Maria',
      sobrenome: 'da Silva',
      nota: 10,
    },
];

let mostrarAlunos = document.querySelector("#aluno")
let botao = document.querySelector('#botao')


botao.addEventListener('click', function() {
    let input = document.querySelector('#input').value
    
    let filtro = alunos.filter(function(aluno) {

        if(input == aluno.nota) {
            mostrarAlunos.innerHTML += `${aluno.nome}  ${aluno.sobrenome} | Nota: ${aluno.nota} <br>`
        } else {
            mostrarAlunos.innerHTML = `Nenhum aluno tirou essa nota`
        }
    })

    console.log(filtro)

})