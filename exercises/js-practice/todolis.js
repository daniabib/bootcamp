// window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var todos = ["Buy bew turtle"];

    var input = prompt("What would you like to do?");

    while(input !== "quit") {    
        if (input === "list") {
            console.log(todos);
        } else if (input === "new") {
            //ask for new todo
            var newTodo = prompt("Enter new Todo");
            todos.push(newTodo);
        }
        input = prompt("What would you like to do?");
    }
    console.log("OK, you quit the app!");
//   }, 500);

//NOTAS

//Iteration over arrays
//For loops

var colors = ["red", "orange", "blue", "black"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//ForEach
// arr.forEach(someFunction)

colors.forEach(function(color) {
    color = "hehe";
    colors[color] = color;
});

console.log(colors)