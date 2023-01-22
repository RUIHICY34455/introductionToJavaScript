// console.log(`Текст из script.js`)

const cube = (number) => {
    return number * 3
}
console.log(cube(2) + cube(3));


function inputSomeValue() {
    var userAnswer = prompt("Введите число:", "Ваше значение")
    if (isNaN(userAnswer)) {
        alert("Это не цифра :( Попробуйте снова.")
        inputSomeValue();
    } else {
        alert(`Размер заработной платы за вычетом налогов равен ${salary(userAnswer)}`);
    }
}
const salary = (money) => {
    return money * 0.87;
}
inputSomeValue();
let number1 = prompt("Введите число:");
let number2 = prompt("Введите число:");
let number3 = prompt("Введите число:");
console.log(Math.max(number1, number2, number3));

const sum = (params1, params2) => {
    return params1 + params2
}
const diff = (params1, params2) => {
    return params1 - params2
}
const Multiply = (params1, params2) => {
    return params1 * params2
}
const div = (params1, params2) => {
    return params1 / params2
}
console.log(sum(2, 5));
console.log(diff(2, 5));
console.log(Multiply(2, 5));
console.log(div(2, 5));