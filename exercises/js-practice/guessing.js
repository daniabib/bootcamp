//create secret number

/* var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check guess
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
} else if (guess > secretNumber) {
    alert("Too high. Guess again!");
} else {
    alert("Too low. Guess again!");
} */

// Problem Set - Lec 134

// 1. Print all numbers btwenn -10 and 19
var number = -10;

while (number < 20) {
    console.log(number);
    number++;
}

//2. Print all even numbers between 10 and 40
var num2 = 10

while (num2 <= 40) {
    console.log(num2);
    num2 += 2;
}

//3. Print all odd numbers between 300 and 333
var num3 = 300;

while (num3 <= 333) {
    if (num3 % 2 !== 0) {
    console.log(num3); }
    num3++;
}

//4. Print all numbers divisible by 5 AND 3 between 5 and 50
var num4 = 0;

while (num4 <= 50) {
    if (num4 % 5 === 0 && num4 % 3 === 0) {
        console.log(num4);
    }
    num4++;
}