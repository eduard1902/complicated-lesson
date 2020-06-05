//Создать переменную num со значением 266219 (тип данных число)

const num = 266219;

// Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.
// Правильно использовать цикл или методы перебора.

const arrNum = Array.from(String(num), Number);

//Array.from() позволяет создавать массивы из массивоподобных объектов

console.log(arrNum); 

const arrNumReducer = (accumulator, currentValue) => accumulator * currentValue;

//Метод reduce() применяет функцию arrNumReducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

console.log(arrNum.reduce(arrNumReducer));

const amount = arrNum.reduce(arrNumReducer);

//Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)

let result = amount ** 3;

console.log(result);

//Вывести на экран первые 2 цифры полученного числа

let answer = String(result).slice(0,2);

console.log(answer);

document.getElementById("answer").innerHTML = answer;