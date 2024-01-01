// 3 Ways of declaring an object in JS
// singleton
// Object Constructors - Using Object.create
// Object literals

const mySym = Symbol("key1")  // This way we can create a new symbol

// ---------------------------------------------------------------

// Object literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",              // We can use the symbol declared as property of a object using this syntax. Remember to add [] while using the name of symbol as a key. This would not throw an error but in that case if we print the typeof mySym it will show us string.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof(JsUser[mySym]))       Prints String. But correct usage of symbol is this only.



JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)   // freeze is used to freeze the values of properties of object after this if any changes are made to the value of object then its value would not be changed
JsUser.email = "hitesh@microsoft.com"  // Since this change is made to the JsUser object after using freeze this change will not propogate 
// console.log(JsUser);  // Prints the older value of object (before calling freeze).


// We can append functions to objects as key value pair. Here in this case greeting will be the key and this function's refrence will be the value of that key.
JsUser.greeting = function(){
    // console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());      // Prints Hello Js User

// console.log(JsUser.greetingTwo());   // Prints Hello Js User, Hitesh

// console.log(JsUser);         // Prints 
//  {
//   name: 'Hitesh',
//   'full name': 'Hitesh Choudhary',
//   age: 18,
//   location: 'Jaipur',
//   email: 'hitesh@microsoft.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   greeting: [Function (anonymous)],
//   greetingTwo: [Function (anonymous)],
//   [Symbol(key1)]: 'mykey1'
// }    


