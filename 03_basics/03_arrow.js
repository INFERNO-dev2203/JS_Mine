const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);  // Prints the current context(Object ke baare me kuchh bhi, like uski properties). In this case context of user is username and price paid by him.
    }

}

// user.welcomeMessage() // Prints Hitesh, Welcome to website.
// user.username = "sam"  // Here we changed its context i.e values of user object. Therefore new context is created.
// user.welcomeMessage() // Prints Sam, welcome to website.

// console.log(this);    // prints {}

// Context works only in case of objects not in the case of functions. -- **


// ----------------------------------------------------------------------------------------

//
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  // Prints undefined due to --**
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  // Prints undefined due to --**
// }

const chai = () => {
    let username = "hitesh"
    console.log(this);              // Prints undefined due to --**
}
// chai()

// const addTwo = (num1, num2) => {        // This is known as Explicit Return Arrow function because return keyword is used explicitly in this.
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   // This is known as Implicit Return Arrow Function. Because return keyword is not used explicitly in this type of arrow function. Its assumed that return keyword is already there.

// const addTwo = (num1, num2) => ( num1 + num2 )   // There is no need for return keyword while we are using parenthesis like in this case. 

// Trick to remember the use of return keyword 
// If using curly braces then we have to use return keyword
// If writing single line body or using paraenthesis return keyword is not required.

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()