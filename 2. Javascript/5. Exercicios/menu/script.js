let menuMobile = document.querySelector(".menumobile");
let botaomenu = document.querySelector(".botaomenu");

let aberto = false

function abriroufecharMenu() {

    if (aberto == true) {
        aberto = false
        menuMobile.classList.remove("aberto");
        botaomenu.innerText = 'Abrir menu'
    } else {
        aberto = true
        menuMobile.classList.add("aberto");
        botaomenu.innerText = 'Fechar menu'
    }
}
