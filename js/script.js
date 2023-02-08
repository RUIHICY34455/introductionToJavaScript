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

// const cube = (number) => {
//     return Math.pow(number, 3)
// }
// console.log(cube(2) + cube(3));

// for (let i = 0; i < 11; i++) {
//     if (i == 0) { console.log(`${i} – это ноль`); } else if (i % 2 != 0) { console.log(`${i} – нечетное число`); } else { console.log(`${i} – четное число`); }
// }
// const arr = [1, 2, 3, 4, 5, 6, 7];
// delete arr[3];
// delete arr[4];
// console.log(arr);


// for (let j = 1; j <= 20; j++) {
//     for (let n = 1; n <= j; n++) {
//         console.log(' x ');
//     }
//     console.log(' ');
// }
// const arr2 = [];
// for (i = 0; i < 5; i++) {
//     arr2.push(Math.round(Math.random() * 10));
// }
// console.log(arr2);
// let sumResultArr2 = 0;
// for (i = 0; i < arr2.length; i++) {
//     sumResultArr2 += arr2[i]
// }
// console.log(sumResultArr2);
// const minimum = Math.min.apply(null, arr2);
// console.log(minimum);
// for (i = 0; i < arr2.length; i++) {
//     if (arr2[i] == 3) { console.log(`в массиве есть цифра 3`); }
// }
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}
console.log(numbers.keyin3);
console.log(numbers.keyin4);
console.log(numbers.keyin5);
console.log(numbers.keyin6);
console.log(numbers.keyin7);
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
console.log(post.author);
// console.log(post.comments.rating.dislikes);
console.log(post.comments.userId);
console.log(post.comments.text);
//Дан массив products, необходимо цену каждого продукта уменьшить на 15 % используя метод forEach.
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(products.price) => { console.log(products.price); }

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];