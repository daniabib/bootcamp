function printReverse(array){
    for(i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
};

function isUniform(array){
    var firstNumber = array[0];
    for(var i = 1; i < array.length; i++){
        if(array[i] !== first){
            return false
        }
    }
    return true;
};

function sumArray(numbers){
    var sum = 0;
    numbers.forEach(function(i){
        sum = sum + i
    })
    return sum;
};

function max(array){
    var max = 0;
    array.forEach(function(i){
        if(i > max){
            max = i;
        }
    })
    return max;
};

// ***** BONUS: HOW forEach WORKS *****

function myForEach(arr, func) {
    //loop trough the array
    for(i = 0; i < arr.length; i++) {
        //call func for each item in array
        func(arr[i]);
    }
}

//turn it into a method
