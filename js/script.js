// console.log(`Текст из script.js`)




// function inputSomeValue() {
//     var userAnswer = prompt("Введите число:", "Ваше значение")
//     if (isNaN(userAnswer)) {
//         alert("Это не цифра :( Попробуйте снова.")
//         inputSomeValue();
//     } else {
//         alert(`Размер заработной платы за вычетом налогов равен ${salary(userAnswer)}`);
//     }
// }
// const salary = (money) => {
//     return money * 0.87;
// }
// inputSomeValue();
// let number1 = prompt("Введите число:");
// let number2 = prompt("Введите число:");
// let number3 = prompt("Введите число:");
// console.log(Math.max(number1, number2, number3));

// const sum = (params1, params2) => {
//     return params1 + params2
// }
// const diff = (params1, params2) => {
//     return params1 - params2
// }
// const Multiply = (params1, params2) => {
//     return params1 * params2
// }
// const div = (params1, params2) => {
//     return params1 / params2
// }
// console.log(sum(2, 5));
// console.log(diff(2, 5));
// console.log(Multiply(2, 5));
// console.log(div(2, 5));

const cube = (number) => {
    return Math.pow(number, 3)
}
console.log(cube(2) + cube(3));

for (let i = 0; i < 11; i++) {
    if (i == 0) { console.log(`${i} – это ноль`); } else if (i % 2 != 0) { console.log(`${i} – нечетное число`); } else { console.log(`${i} – четное число`); }
}
const arr = [1, 2, 3, 4, 5, 6, 7];
delete arr[3];
delete arr[4];
console.log(arr);


for (let j = 1; j <= 20; j++) {
    for (let n = 1; n <= j; n++) {
        console.log(' x ');
    }
    console.log(' ');
}
const arr2 = [];
for (i = 0; i < 5; i++) {
    arr2.push(Math.round(Math.random() * 10));
}
console.log(arr2);
let sumResultArr2 = 0;
for (i = 0; i < arr2.length; i++) {
    sumResultArr2 += arr2[i]
}
console.log(sumResultArr2);
const minimum = Math.min.apply(null, arr2);
console.log(minimum);
for (i = 0; i < arr2.length; i++) {
    if (arr2[i] == 3) { console.log(`в массиве есть цифра 3`); }
}