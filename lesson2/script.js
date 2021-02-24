        //  Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...)


 let age = parseInt(prompt("Введите свой возраст"));

if (age >= 0 && age < 2){
     console.log('Вы ребенок');
}
else if (age > 12 && age < 18){
     console.log('Вы подросток');
}
else if (age >= 18 && age < 60){
     console.log('Вы взрослый');
}
else if (age >= 60){
     console.log('Вы пенсионер');
}

          //Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д)


let yourNumber = parseInt(prompt("Enter your number from 0 to 9"));

    if (yourNumber == 1){
        console.log('!');
    }
    switch (Number(yourNumber)){
        case 2:
            console.log("@");
            break;
        case 3:
            console.log("#");
            break;
        case 4:
            console.log("$");
            break;
        case 5:
            console.log("%");
            break;
        case 6:  
            console.log("^");
            break;
        case 7:  
            console.log("&");
            break;
        case 8:  
            console.log("*");
            break;
        case 9:  
            console.log("(");
            break;
        case 0:  
            console.log(")");
            break;
}


          //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры

let YourNumber = prompt("Введите трехзначное число");

let firstNumeral = parseInt(YourNumber.charAt(0));

let secondNumeral = parseInt(YourNumber.charAt(1));

let thirdNumeral = parseInt(YourNumber.charAt(2));

if (firstNumeral === secondNumeral){
     console.log("Первая и вторая цифры равны");
}

if (secondNumeral === thirdNumeral){
     console.log("Вторая и третья цифры равны");
}

if (firstNumeral === thirdNumeral){
     console.log("Первая и третья цифры равны");
}

if (firstNumeral != secondNumeral != thirdNumeral){
     console.log("Нет одинаковых цифр");
}

               //Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let year = parseInt(prompt("Введите год"));

if (year % 4 === 0 || (year % 400 === 0 && year % 100 === 0)){
    console.log("Год високосный");
}
else {
    console.log("Год не високосный");
}

          //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом

let enterNumber = prompt("Введите пятизначное число");

let numOne = parseInt(enterNumber.charAt(0));

let numTwo = parseInt(enterNumber.charAt(1));

let numFour = parseInt(enterNumber.charAt(3));

let numFive = parseInt(enterNumber.charAt(4));

if (numOne === numFive && 
numTwo === numFour){
    console.log("Число является палиндромом");
}

else {
    console.log("Число не является палиндромом");
}

          //Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму

let moneyUSD = parseInt(prompt('Enter amount of money, please (in USD)'));
console.log("You entered:" + " " + moneyUSD + " " + 'USD');

let a = parseInt(prompt('If you like to convert your money into EUR ? - enter "1". If you like to convert your money into UAH ? - enter "2". If you like to convert your money into  AZN? - enter "3"'));

if (a === 1){
    let receiveEUR = moneyUSD * 0.9;
    console.log("Please, take your money:" + " " + receiveEUR + " " + 'EUR');
}
if (a === 2){   
    let receiveUAH = moneyUSD * 28.05;
    console.log("Please, take your money:" + " " + receiveUAH + " " + 'UAH');
}
if (a === 3){   
    let receiveAZN = moneyUSD * 1.7;
    console.log("Please, take your money:" + " " + receiveAZN + " " + 'AZN');
}         