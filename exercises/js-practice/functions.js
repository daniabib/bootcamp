function isEven(x) {
    return x % 2 === 0;
};

function factorial(y) {
    var result = 1;
    for(i = 2; i <= y; i++) {
        result = result * i; 
    }
    return result;
};

function kebabToSnake(string) {
    return string.replace(/-/g, '_');
};