            //Подсчитать сумму всех чисел в заданном пользователем диапазоне
        
let firstNumber, lastNumber, summa, i;

firstNumber = parseInt(
    prompt('Enter the first number'));

lastNumber = parseInt(
    prompt('Enter the second number'));

summa = 0;

for (i = firstNumber; i <= lastNumber; i++){    
    summa = summa  + i;   
}
console.log("The sum of numbers is:" + " " + summa);

            //Запросить 2 числа и найти только наибольший общий делитель

let NumberOne, NumberTwo, a;

NumberOne = parseInt(prompt('Enter the first number'));

NumberTwo = parseInt(prompt('Enter the second  number'));

for(a = NumberOne; a >= 1; a--){
   if (NumberOne % a === 0 && NumberTwo % a === 0){
        console.log("Наибольший общий делитель:" + " " + a);
        break;
   }
}

            //Запросить у пользователя число и вывести все делители этого числа

let yourNumber = parseInt(prompt('Enter your number'));
 
    for (let j = 1; j <= yourNumber; j++){
        if(yourNumber % j === 0){
            console.log('Все делители числа:' + j);
    }
}


            //Определить количество цифр в введенном числе

let SetNumber = prompt('Enter the number');

console.log('Количество введенных цифр:' + " " + SetNumber.length);


            //Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран

let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;

for (let n = 1; n <= 10; n++){

    let yourNumber = parseInt(prompt('Enter your number'));

    if (yourNumber > 0){
        b = b + 1;
    }        

    if (yourNumber < 0){
        c = c + 1;                
    }

    if (yourNumber == 0){
        d = d + 1;
    }

    if (yourNumber % 2 === 0 && yourNumber != 0){
        e = e + 1;
    } 
        
    if (yourNumber % 2 != 0){
        f = f + 1;
    } 
}       
console.log("положительных чисел:" + " " + b);
console.log("отрицательных чисел:" + " " + c);
console.log("нулей:" + " " + d);
console.log("четных чисел:" + " " + e);
console.log("нечетных чисел:" + " " + f);


            //Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10

let firstMultiplier, secondMultiplier, result;

for (firstMultiplier = 2; firstMultiplier <= 9; firstMultiplier ++){
    
    for (secondMultiplier = 1; secondMultiplier <= 10; secondMultiplier ++){
        
        result = firstMultiplier * secondMultiplier;

        console.log(firstMultiplier + "*" + secondMultiplier + "=" + result);
   }
}