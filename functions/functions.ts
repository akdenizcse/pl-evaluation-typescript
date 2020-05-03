/**
 * Functions are the primary blocks of any program. In JavaScript, functions are the most important part 
 * since the JavaScript is a functional programming language.
 * Function declaration works similar to the Javascript in TypeScript *
 */

// In TypeScript, functions can be of two types: named and anonymous.


// A named function is one where you declare and call a function by its given name.

function display() {
    console.log("Hello TypeScript!");
}

display(); //Output: Hello TypeScript 

/** 
 * An anonymous function is one which is defined as an expression. 
 * This expression is stored in a variable.
 */
let sum = function (x: number, y: number) {
    console.log("The sum is", x + y);
};

// Similar in OOPs a function can have a return type and arguments
let Sum = function (x: number, y: number): number {
    return x + y;
}

// Function parameters can be optional

/** 
 * In the below code, there is no need to add second argument 
 to call the function 
*/
function Greet(greeting: string, name?: string): string {
    return greeting + ' ' + name + '!';
}

//Default parameters
function GreetDefault(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

