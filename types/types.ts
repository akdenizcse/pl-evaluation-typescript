/**
 * To be able to check various cases, 
 * TypeScript contains numereous variable types.
 * To declare a variable with a type, ":" is used.
 */

// boolean
let isCompleted: boolean = false;

// number
let myFavoriteNumber: number = 13;

// string
let helloWorld: string = "Hello World!";

// array
let myArray: number[] = [1, 2, 3, 4]
let myAnotherArray: any[] = ["1", 2, 3] // Compile error

// tuple
let x: [string, number];
x = ["hello", 10];

// enum
enum Season { SPRING, SUMMER, FALL, WINTER }
let c: Season = Season.SUMMER;

/**
 * Any
 * This is the a important type of the TypeScript.
 * When developer is not sure about the type,
 * (i.e when using 3rd party library) this
 * type could be used
 *  */

let myAnotherArrayv2: any[] = ["1", 2, 3] // No problem

// void

function warnUserByMessage(): void {
    console.log("This is my warning message");
}

// null & undefined
let u: undefined = undefined;
let n: null = null;