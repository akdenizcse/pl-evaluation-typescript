let arr: number[] = [1, 2, 3, 4, 5]; //Strongly Typed Array 
let str = "Hello World"; // Dynamicly typed variable

for (let i = 0; i < 3; i++) {
    console.log("Now Running." + i);
}
/**
     * Now running 0
     * Now running 1
     * Now running 2
*/

for (var val of arr) {
    console.log(val); // prints values: 1,2,3,4,5
}


for (var char of str) {
    console.log(char); // prints chars: H e l l o  W o r l d
}


for (var index in arr) {
    console.log(index); // prints indexes: 0,1,2,3,4
    console.log(arr[index]); // prints elements: 1,2,3,4,5
}