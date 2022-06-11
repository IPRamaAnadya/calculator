const btnNumbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}
btnNumbers.forEach((btnNumber)=>{
    btnNumber.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})