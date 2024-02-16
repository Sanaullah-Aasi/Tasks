// IMPLICIT CONVERSION
let x = 10; // x is a number
let y = "5"; // y is a string
let result = x + y; // JavaScript implicitly converts y to a number and performs addition
console.log(result); // Output: 15 (result is a number)

// IMPLICIT CONVERSION Using the Number() function
let a = "10";
let b = Number(x); // Explicitly convert a to a number
console.log(b); // Output: 10

// IMPLICIT CONVERSION Using the string() function
let c = 10;
let d = String(x); // Explicitly convert c to a string
console.log(d); // Output: "10"

// IMPLICIT CONVERSION Using the parseint() and parsefloat() function
let e = "10";
let f = parseInt(x); // Explicitly convert e to an integer
console.log(f); // Output: 10

let z = "10.5";
let w = parseFloat(z); // Explicitly convert z to a floating-point number
console.log(w); // Output: 10.5

// IMPLICIT CONVERSION Using the boolean() function
let g = "hello";
let h = Boolean(x); // Explicitly convert g to a boolean
console.log(h); // Output: true

// IMPLICIT CONVERSION Using the tostring() function
let i = 10;
let j = x.toString(); // Explicitly convert i to a string using toString() method
console.log(y); // Output: "10"

// type coercion
let k = 5;
let l = "2";
let result2 = k * l; // JavaScript coerces l to a number and performs multiplication
console.log(result2); // Output: 10 (result is a number)

// Array to string conversion
let array = [1, 2, 3, 4, 5];
let string = array.toString(); // Convert array to string
console.log(string); // Output: "1,2,3,4,5"

// String to array conversion
let string2 = "Hello world!";
let array2 = string.split(); // Convert string to array using whitespace as separator
console.log(array2); // Output: ["Hello", "world!"]

