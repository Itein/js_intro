//1. Об'єм
let dia = prompt("Вкажіть діаметр циліндра");
let height = prompt("Вкажіть висоту циліндра");
let radius = dia / 2;
let volume = radius * radius * Math.PI * height;
alert(volume);

//2. Привітання
let userName = prompt("Вкажіть ваше ім'я");
alert(`Привіт, ${userName}!`);

//3. Периметр квадрата
let squareSide = prompt("Вкажіть сторону квадрата");
let perimeter = squareSide * 4;
alert(perimeter);

//4. Швидкість
let distance = prompt("Яка відстань до вашої точки признаячення? Вкажіть в км");
let time = prompt("Скільки часу ви хотіли б витрати на подорож? Вкажіть в хв");
let timeInHours = time * 0.0167;
let speed = distance / timeInHours;
alert(`Ваша швидкість має бути ${Math.round(speed)} км/год`);
if (speed > 150) {
  alert("Схоже знадобиться 🚁 або 🚀");
}

//HARD
//1. Навпаки
let userNumber = prompt("Введіть тризначне число");
/*let reverseUserNumber = userNumber.split("").reverse().join("");
alert(reverseUserNumber); */
let units = userNumber % 10;
let dozens = (userNumber / 10) % 10;
let hudreds = userNumber % 100;
console.log(`${units}${dozens}${hudreds}`);

//2. Температурний помічник.
let tempCelsius = prompt("Яка сьогодні температура?");
let tempFahrenheit = (9 / 5) * tempCelsius + 32;
console.log(tempFahrenheit);

//3. Конвертер кольору.
let red = prompt("Введіть наченість червоного кольору [0,255]");
let green = prompt("Введіть наченість зеленого кольору [0,255]");
let blue = prompt("Введіть наченість синього кольору [0,255]");

let rgbRed = parseInt(red, 16);
let rgbGreen = parseInt(green, 16);
let rgbBlue = parseInt(blue, 16);
alert(`rgb(${rgbRed},${rgbGreen},${rgbBlue})`);
