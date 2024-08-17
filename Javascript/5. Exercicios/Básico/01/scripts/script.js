/* 

1. Faça uma página que ao entrar vai pedir o nome do usuário e depois a idade, em seguida mostre na tela uma mensagem de saudação de acordo com a idade do usuário:  

2. Modifique o exercício anterior para exibir uma mensagem personalizada caso o nome da pessoa seja "Thomas Anderson", exibir: "Olá [nome], você é MAIOR de idade. Você é personagem do filme The Matrix!". 

3. Modifique o exercício anterior para pedir os dados do usuário somente depois dele clicar em um botão escrito "Entrar". 

Faça a mensagem de saudação ser exibida em um H1, e a mensagem personalizada em um H2.

*/

function entrar() {

    var nome = prompt('Digite o seu nome: ')
    let idade = parseInt(prompt('Digite sua idade: '))

    if (nome == null || idade == null) {

        if (idade >= 18 && nome == "Thomas Anderson") {
            document.write(`
                <h1>Olá ${nome} você é maior de idade! </h1>
                <h2>Você é personagem do filme The Matrix!</h2>
            `)
        } else if (idade <= 18 && nome == "Thomas Anderson") {
            document.write(`
                <h1>Olá ${nome} você é MENOR de idade! </h1>
                <h2>Você é personagem do filme The Matrix!</h2>
            `) 
        } else if (idade <= 18) {
            document.write(`
                <h1>Olá ${nome} você é MENOR de idade! </h1>
            `)
    
        } else if (idade > 18){
            document.write(`
                <h1>Olá ${nome} você é MAIOR de idade!</h1>
            `)
        }
    } else {
        document.write('Preencha os dados corretamente!')
    }
}

    let botao = document.querySelector('#entrar')
    botao.addEventListener('click', entrar );


