window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var todos = ["Buy bew turtle"];

    var input = prompt("What would you like to do?");

    while(input !== "quit") {    
        if (input === "list") {
            listTodos();           
        } else if (input === "new") {
            addTodo();
        } else if(input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }
    console.log("OK, you quit the app!");

    function listTodos(){
        console.log("**********");
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });   
        console.log("**********"); 
    }

    function addTodo(){
        //ask for new todo
        var newTodo = prompt("Enter new Todo");
        todos.push(newTodo);
    }

    function deleteTodo(){
        var index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
    }
  }, 500);



//NOTAS

//Iteration over arrays
//For loops

/* var colors = ["red", "orange", "blue", "black"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//ForEach
// arr.forEach(someFunction)

colors.forEach(function(color) {
    color = "hehe";
    colors[color] = color;
});

console.log(colors) */