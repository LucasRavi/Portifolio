function escrevendoLetra() {
    function ativarletra(elemento) {
        let arrayTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrayTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i)
        })
    }
    let titulo = document.querySelector('.digitando');
    ativarletra(titulo);
}

const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .navegacao-primaria')

console.log(ativaMenu)

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})




