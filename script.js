// Task 1.
// Виведіть у консоль ваше ім'я. Нагадую - в ході роботи, консоль відкрита завжди!
console.log("Dmitro");
// Task 2.
// Виведіть у консоль номер місяця в якому ви народилися. Вивчіть чим відрізняється вивід числа і рядка.
console.log(11);
// Task 3.
// Виведіть у консоль рядок: 'Ласкаво '+'просимо '+' на курс'
console.log("Ласкаво" + "просимо" + "на курс");
// Task 4.
// За допомогою alert виведіть число 2019. Після спрацювання коду - закоментуйте його, щоб не заважав подальшої розробки
// alert(2019);
// confirm('');
// const userInput = prompt('введіть ваш вік');
// console.log(userInput);
// Task 5.
// За допомогою console.log виведіть результат операції 2019 - 200. Перевірте результат в консолі.
console.log(2019 - 200);
// Task 6.
// На сторінці створено div#six. За допомогою document.getElementById запишіть в div#six текст 'Hello World'.
document.getElementById("six");
const divElement = document.getElementById("six");
console.log(divElement);
divElement.textContent = "Hello World";

// Task 7.
// На сторінці створено div#seven. За допомогою document.getElementById запишіть в даний елемент результат множення 12 на 12. Множення можна зробити за допомогою знака зірочки (shift + 8).
const divEL = document.getElementById("seven");
console.log(divEl);
divEL.textContent = 12 * 12;

// Task 8.
// На сторінці створено div.out-8. За допомогою document.querySelector запишіть в даний елемент текст "task-8".
const divE = document.querySelector(".out-8");
divE.textContent = "task-8";
// Task 9.
// На сторінці створена верстка:
// <h2>Hello <span class="out-8">everyone</span></h2>
// Замініть за допомогою querySelector текст всередині span на 'world'
const spanEl = document.querySelector(".out-9");
console.log(spanEl);
spanEl.textContent = "world";

// ⚠️ точно виводимо результат в елемент з селектором .out-8❓
// оскільки document.querySelector() шукає до першого співпадіння резулатат буде інший

// Task 10.
// На сторінці створено div.out-10. За допомогою innerHTML запишіть всередину нього наступний рядок  '<h2>Hi</h2>'.
const divElm = document.querySelector(".out-10");
console.log(divElm);
divElm.innerHTML = "<h2>Hi</h2>";

// Task 11.
// На сторінці створено div.out-11. Запишіть всередину нього рядок '123'. Для запису використовуйте innerHTML. Другою операцією - допишіть в div.out-11 рядок '456'. Для дозапису застосуйте +=.
const divElm = document.querySelector;
// Task 12.
//  На сторінці створено div.out-12. Отримайте його в змінну a. За допомогою innerHTML запишіть всередину змінної a число 3.1415. Вивчіть як в JS пишуться дробові значення - через крапку або через кому!

// Task 13.
// На сторінці створено div.out-13. Отримайте його в змінну out13. За допомогою innerHTML запишіть в нього рядок: '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">'
// Зверніть увагу. Вам доведеться вставити рядок, який вже містить лапки. Головне щоб лапки чергувалися.
// Тому при вставці оберніть даний рядок одинарними лапками. Якщо все зроблено вірно - то на сторінці з'явиться картинка.
const divImg = document.querySelector(".out-13");
console.log(divImg);
divImg.innerHTML =
  '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">';

// Task 14.
// Створіть дві змінні x1 = 6, x2 = 3. В div.out-14 виведіть результат множення x1 на x2.
const x1 = 6;
const x2 = 3;
const divX = document.querySelector(".out-14");
divX.textContent = x1 = x2;
// Task 15.
// Створіть дві змінні y1 = 6, y2 = 3. В div.out-15 виведіть результат ділення y1 на y2.
const y1 = 6;
const y2 = 3;
const divY = document.querySelector(".out-15");
divY.textContent = y1 / y2;
// console.log(num.value);
// console.dir(num);
// num.onchange = function onInputChange(event) {
//   console.log(event.target.value);
// };
/**
 * Створіть функцію greet, яка приймає ім'я
 * та повертає привітання у форматі "Hello, name!".
 * Де замість name потрібно підставити ім'я користувача.
 */

function greet(name) {
  return "Ytllo, ${name}";
}
const res1 = greet("Iryna");
console.log(res1);
const res2 = greet("Ania");
console.log(res2);
console.log(greet("Inna"));

/**
 * Створіть функцію makeFullName, яка приймає ім'я та прізвище
 * і повертає повне ім'я у форматі "firstName lastName".
 * Де замість firstName та lastName потрібно підставити ім'я та прізвище.
 */

function makeFullName(firstName, lastName) {
  return "${firstName} ${lastName}";
  // return firstName + ' ' + lastName;
}
console.log(makeFullName("Iryna", "pol"));

/**
 * Створіть функцію getAverage, яка приймає три числа
 * і повертає їх середнє арифметичне.
 */

function getAverage(x, y, z) {
  return (x + y + z) / 3;
}

/**
 * Створіть функцію isInStock, яка приймає необхідну
 * кількість товару в замовленні, та доступну кількість
 * товару на складі і повертає true, якщо на складі
 * достатньо товару для замовлення, і false в іншому випадку.
 */

function isInStock(orderetItems, items) {
  return orderedItems <= items;
}
const res1 = isInStock(5, 10);
console.log(res1);

isInStock(10, 5);
isInStock(5, 5);

/**
 * Створіть функцію convertToCSSValue, яка приймає
 * число (значення) та рядок (одиниця вимірювання),
 * і повертає значення як рядок для використання в CSS властивості.
 */

function convertToCSSValue(value, unit) {
  return value + unit.trim();
}
const res1 = convertToCSSValue(4, "px");
console.log(res1);

/**
 * Створіть функцію isEven, яка приймає число і повертає true,
 * якщо число парне, і false в іншому випадку.
 */
function isEven(number) {
  return number % 2 === 0;
}
const res1 = isEven(5);
console.log(res1);

const res2 = isEven(10);
console.log(res2);
