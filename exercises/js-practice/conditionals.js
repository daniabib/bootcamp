var age = Number(prompt("Please, say me your age."));

if (age < 0) {
    prompt("Error!");
}

else if (age === 21) {
    prompt("Happy 21st birthday!");
}

else if (age %2 !== 0) {
    prompt("Yout age is odd!");
}

else {
    prompt("Hellow!");
}