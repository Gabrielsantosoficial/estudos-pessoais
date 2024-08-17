// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(10, 10)


// Função com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(5, 10))


// Armazenando uma função em uma váriavel

const mostrarSoma = function(a, b) { // Função anonima
    console.log(a + b)
}

mostrarSoma(2, 3)


// Armazenando uma função arrow em uma váriavel

const subtracao = (a, b) => {
    return a - b
}

console.log(subtracao(10, 2))


// Armazenando uma função arrow em uma váriavel com retorno implicito

const multiplicacao = (a, b) => a * b

console.log(multiplicacao(10, 2))