const texto = document.querySelector('#texto')
const caixa = document.querySelector('#caixa')
const numero = document.querySelector('#numero')
texto.addEventListener("input",() => {
caixa.style.background = texto.value
})
numero.addEventListener("input",()  => {
caixa.style.border = numero.value

})