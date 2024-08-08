// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)

// Funções
function handleTryClick(event) {
    event.preventDefault() // não faz o evento padrão (não envia o formulário)

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toogleScreen()

        // document
        //     .querySelector(".screen2 h2")
        //     .innerText = `Você acertou em ${xAttempts} tentativas.`
        
        // or
        screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas.`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toogleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterReset(event) {
    if(event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}