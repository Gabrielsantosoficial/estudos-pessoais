let numero = prompt('Digite qual tabuada você quer saber:')


for(let contador = 0; contador < 11; contador++) {
    document.write(`
        ${numero} x ${contador} = ${contador * numero} <br> `) 
}
