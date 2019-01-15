/* var answer = prompt("Are we there yet?");

while(answer !== "yes") {
    var answer = prompt("Are we thre yet?");
}

alert("YAY, We made it!"); */

/* var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("Are we thre yet?");
}

alert("YAY, We made it!"); */

// FOR LOOPS problem set
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");

for (var i=-10; i<20; i++) {
    console.log(i);
};

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 and 40");

for(var i=10; i<=40; i+=2) {
    console.log(i);
};

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");

for(var i = 301; i<334; i+=2) {
    console.log(i);
};

console.log("PRINT ALL NUMBER DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(var i = 5; i<=50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

