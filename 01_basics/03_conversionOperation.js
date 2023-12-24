let score = "hitesh"

// console.log(typeof score);      These both ways of using typeof operators is correct and gives the same result.
// console.log(typeof(score));     Js allows us to use typeof with or without parentheses for consistency.

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); - Gives output - Number
// console.log(valueInNumber);

/*
We are trying to convert the string "hitesh" to a number using Number(score). Since the string is not a valid numeric representation, the result of the conversion is NaN.

NaN is used to indicate that a value is not a valid number. It is often the result of operations like attempting to perform arithmetic with non-numeric values or attempting to convert non-numeric strings to numbers.
 */


// console.log(isNaN("44")); - Gives Output - False;
// console.log(isNaN(44)); - Gives Output - False;
// console.log(isNaN("44abc")); - Gives Output - true;
//  true => 1; false => 0

let isLoggedIn = "something_present_here_gives_true_else_false(in case of null also)";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);  - Prints true as there is some value in string

// 1 => true; 0 => false
// "" => false
// null => false
// "hitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber)
// console.log(stringNumber); Gives output - number stored , 33 in this case.
// console.log(typeof stringNumber); Gives output - string, becuse we converted it into string.

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); Gives Output = -3;

// console.log(2+2);  Gives Output = 4;
// console.log(2-2);  Gives Output = 0;
// console.log(2*2);  Gives Output = 4;
// console.log(2**3); Gives Output = 8; Exponential Operator
// console.log(2/3);  Gives Output = 0.666666666...;
// console.log(2%3);  Gives Output = 2;
  

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);        Gives Output - 12
// console.log(1 + "2");        Gives Output - 12
// ___________IMP ______________
// console.log("1" + 2 + 2);    Gives Output - 122 - Agar pehle string aaya toh pure time + will act as string concatenation.
// console.log(1 + 2 + "2");    Gives Output - 32 - Agar pehle numbers add hogye toh pehle evaluation hoga fir uske baad string aa jaayega 

// console.log( (3 + 4) * 5 % 3);  Gives Output - 2

// console.log(+true);     Gives Output - 1
// console.log(+"");       Gives Output - 0


/* In JavaScript, the unary plus operator (+) can be used to convert a value to a number. Here's an explanation of the outputs for the given examples:

console.log(+true);

true is implicitly converted to the number 1 when used with the unary plus operator. So, the output is 1.
console.log(+"");

An empty string "" is converted to the number 0 when used with the unary plus operator. So, the output is 0.
In both cases, the unary plus operator is performing type conversion, trying to interpret the value on its right as a number. If the value is not already a number, JavaScript attempts to convert it to one. The conversion rules are such that true is treated as 1, and an empty string is treated as 0 when using the unary plus operator. */

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// console.log(num1);      Gives Output - 4
// console.log(num2);      Gives Output - 4
// console.log(num3);      Gives Output - 4

let gameCounter = 100
let finalresult = ++gameCounter;
let finalresult1 = gameCounter++;
// console.log(gameCounter);
// console.log(finalresult);
// console.log(finalresult1);




/* let's break down the difference between ++i and i++

++i:

"++i" means "increment i by 1 before using its value."

Here's a simple code example:

let i = 5;
let result = ++i;
In this example, i starts as 5. When we use ++i, it first adds 1 to i, making i equal to 6, and then assigns this new value to the variable result. So, after this code, result is 6, and i is also 6.

Dry Run for ++i:

i starts as 5.
Increment i by 1: i becomes 6.
Assign the new value of i (6) to result.
i++:

"i++" means "use the current value of i, and then increment it by 1."

Here's a code example:

let i = 5;
let result = i++;

In this example, i starts as 5. When we use i++, it first uses the current value of i in the expression and then increments i by 1. So, after this code, result is 5 (the original value of i), and i becomes 6.

Dry Run for i++:

i starts as 5.
Use the current value of i (5) in the expression.
Increment i by 1: i becomes 6.
Assign the original value of i (5) to result.

In summary, the key difference is when the increment happens. ++i increments before using the value, and i++ increments after using the value. For simple expressions, you might not notice much of a difference, but in more complex scenarios, this difference can affect the outcome.*/


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion