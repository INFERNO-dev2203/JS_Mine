// Immediately Invoked Function Expressions (IIFE)

// IIFE is required when we write a function and it gets executed as soon as the code starts to run.

// Another reason for use of IIFE is that there are global variables in the program in the outer scope (of a purticular function) and we don't want variables inside(that function) to get polluted/changed/affected due to global/outer scope. In such cases we use IIFE.  

// Syntax - ()() - 1st paranthesis contains definition of the function.
//                 2nd paranthesis contains params passed inside the iife.

// Working - Immediately gets invoked when code is run.

// Examples of both Syntax have been provided below.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')




