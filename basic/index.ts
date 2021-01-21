const numero1 = document.querySelector('.number1') as HTMLInputElement
const numero2 = document.querySelector('.number2') as HTMLInputElement
const button = document.querySelector('.somar')!


const sum = (a: number, b: number) => {
    return a + b
}

button.addEventListener('click', () => 
    console.log(sum(Number(numero1.value), Number(numero2.value)))
)