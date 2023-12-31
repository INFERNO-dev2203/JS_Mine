//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);  // Prints 10, Because at first value of a will be checked inside the block scope and if its value is found inside the block only it will be logged on  console. 10 in this case.
    // If a is not found inside the block scope of if then it will search for a outside its scope and if we remove value of a from the scope it will print 300 that is outside if.  
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

     two()
}
// one()

// With this example we learnt that In JS child function has the access to variables declared and initialized in its parent function. But in case of parent function the case is just opposite that if we try to access any variable declared and initialized inside the child function we get an error. 

// All this happens due to Lexical chaining i.e whenever a functional execution context is created, inside its variable env. it has the lexical refrence to its parent's lexical environment(Lexical Environment (of a function) = Functional EC of that function + Lexical Ref to its parent's lexical env)

// Closure of any Function is said to be the farthest scope untill which it can access the variables.

// In above Example function two is the child function so it can access variables declared inside the global scope also hence its closure is till the global scope.





if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // Refrence Error : website is not defined.
}

// console.log(username);  // Reference Error : username is not defined.


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))       // Can Be accessed Here, works fine and prints 6 on console.

function addone(num){
    return num + 1
}



// addTwo(5)                   // Can't be accessed here as function expression are not hoisted hence this throws error.
const addTwo = function(num){
    return num + 2
}
