
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()          // Prints HITESH vertically.

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers()  Prints - NaN  If we call the funtion without passing any arguments    into it then it will return NaN and we confirm this by printing it on console.

// addTwoNumbers(4 , "Prajjwal")  Prints - 4Prajjwal

// If we call this function with one argument as 
// string and other as the number it will concatenate the string with the number. 

// addTwoNumbers(4 , null)  Prints - 4 
// If we call this function with one argument as 
// null and other as the number it will concatenate the string with the number. 
 
// remove the numbering before executing the code
// function addTwoNumbers(number1, number2){

    /* let result = number1 + number2
    1. return result                            
    2. return number1 + number2
    Both return statements return the same result hence we can return it by storing into a variable or simply by evaluting the sum in return itself.
     */
// }

// const result = addTwoNumbers(3, 5)       // we can store the value returned by the function in a variable.

// BUT THE CATCH IS - If you don't return anything from function i.e if your return statement is missing inside the body of invoked functions then in that case undefined will be present in console if we print it. 


// console.log("Result: ", result);         Prints 8 on console  AND  Prints undefined if return statement is not present in function body.


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("PLease enter a username");
//         // return           
//        /* This return statement prevents further code from execution with this return output will be Please enter a username undefined printed vertically AND without this output will be PLease enter a username in 1st line and 'undefined just logged in', in the next line.*/


//     }
//     return `${username} just logged in`
// }


// This function code is same as the function code written above actual point to remember is that whenever we pass a value that is falsy in nature like an empty string or undefined in that case we need to keep a check. As in this case we check for if(!username) that means if value of username is any falsy value execute the code inside the if block. Output of this function code will be same as output of above function code.

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//     }
//     return `${username} just logged in`
// }



// console.log(loginUserMessage())      //Prints the message on console and returns undefined. If we have default value then undefined will be replced with that default value as in the function above.
// If we want to avoid these kinds of situation i.e we don't want that user can enter any wrong values then we can set the default values while defining the function.
// console.log(loginUserMessage("hitesh"))     // Prints hitesh on console.


function calculateCartPrice(val1, val2, ...num1){

    return num1; // Returns [500, 2000] 
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  // Prints [500,2000] as output

// function calculateCartPrice(...num1 ,val1, val2 ) - If we use rest operator like this then it will not store 200 and 400 in an array it will give an error "SyntaxError: Rest parameter must be last formal parameter". SO ALWAYS USE REST PARAMETER AT LAST.

// REST OPERATOR - Rest operator was introduced in ES6 in 2015. It is used to accept multiple parameters in a function with the help of single parameter like we did in above function

// Above one is a real world Example of function very close to what is present in ecommerce apps that we use on daily basis used to calculate the total price of items added to the cart. 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);  
    // Prints the above message on console but remember that property name after dot operator should be same as what is written inside the object.
}

// We can call the function by Below two ways, Both are Correct.
// handleObject(user)
// handleObject({
//     username: "sam",
//     prices: 399
// })

// Same things happen with function and arrays

// Remember the fact function never knows with what name we declared any variable, Object or Array, for the function as an entity we need to refer to what is passed inside the parameter list.

// For below given case if we return myNewArray then it will give some error. Because it dosent know what is myNewArray. IT ONLY KNOWS GETARRAY WHICH IS PASSED TO IT.

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));