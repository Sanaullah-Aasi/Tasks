function convertStringToNumber(str) {
    // Using parseInt for converting to integer
    let num1 = parseInt(str);

    // Using parseFloat for converting to float
    let num2 = parseFloat(str);

    return { integer: num1, float: num2 };
}

// Test the function
let inputString = "123.45";
let result = convertStringToNumber(inputString);
console.log("Converted number as integer:", result.integer);
console.log("Converted number as float:", result.float);
function isObject(variable) {
    return typeof variable === 'object' && variable !== null;
}

// Test the function
let obj = { key: 'value' };
let notObj = "string";

console.log("Is 'obj' an object?", isObject(obj));
console.log("Is 'notObj' an object?", isObject(notObj));
let myArray = [1, 2, 3, 4, 5];

// Accessing elements
console.log("Element at index 2:", myArray[2]); // Output: 3

// Modifying elements
myArray[3] = 10;
console.log("Modified array:", myArray); // Output: [1, 2, 3, 10, 5]


let myObject = { key1: 'value1', key2: 'value2' };

// Adding a new property
myObject.key3 = 'value3';
console.log("Object after adding property:", myObject);

// Removing a property
delete myObject.key2;
console.log("Object after removing property:", myObject);
