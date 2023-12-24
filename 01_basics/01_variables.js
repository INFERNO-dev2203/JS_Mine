// const accountId = 144553        
// let accountEmail = "hitesh@google.com"
// var accountPassword = "12345"
// accountCity = "Jaipur"
// let accountState;

// accountId = 2 // not allowed


// accountEmail = "hc@hc.com"
// accountPassword = "21212121"
// accountCity = "Bengaluru"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// const keyword and let keyword
/*  1. Variables declared using const keyword is used to store those values which are meant to remain same througout the program.
    2. const is block scoped that means whenever we declare a variable using const inside a block represented as {} then it    can be accessed only inside that block.
    Block could be any type of block example  if(){} , {} , function(){}.

    Example -
    
{    var b = 20;
     const a = 10;
     let c = 30
}
 console.log(a); - Gives output -Refrence a is not defined that means it can't access a out of the block, Same is the case with let also.
 console.log(b); - Gives output 20 because var is not block scoped.
 console.log(c); - Gives output - Refrence c is not defined.

    3. Variables declared using let keyword is used to store those values which are meant to change througout the program.
    4. There is no difference in working of const and let except of the fact that values stored using const are Constant throughout the program and values stored using let are meant to be changed.
    5. There is a Temporal Dead Zone for variables using let and const keyword as it do not gets attached to window object and can be accessed even before their initalization. This is safer as variables cannot be accessed before intialization and don't gets attached to the window object.  
    
    console.log(second)      Gives Output - ReferenceError: Cannot access 'second' before initialization
    console.log(third)       Gives Output - ReferenceError: Cannot access 'third' before initialization
    const second = 20;
    let third = 10;
    6. Originates from ES6 version of JS.
 */ 

// var Keyword
/* 1. Originates from ES5 version of JS.
   2. It is not block scoped that means if we declare some value using var we can access it from outside of the block.
   3. There is no Temporal Dead Zone for variables using var keyword as it gets attached to window object and can be accessed even before their initalization. This is not safe as values can be manipulated by the users, var is used for learning purposes only.
   Example - 
    console.log(first)       Gives Output - undefined      
    var first = 30;
 */















