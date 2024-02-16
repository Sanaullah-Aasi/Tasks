function exampleVar() {
    console.log(x);  // undefined
    var x = 5;
    console.log(x);  // 5
}
function exampleLet() {
    console.log(y);  // ReferenceError: y is not defined
    let y = 10;
    console.log(y);  // 10
}
function exampleConst() {
    console.log(z);  // ReferenceError: z is not defined
    const z = 15;
    console.log(z);  // 15
}
var globalVar = "I'm global!";
function exampleGlobalScope() {
    console.log(globalVar);  // I'm global!
}
function exampleFunctionScope() {
    var localVar = "I'm local!";
    console.log(localVar);  // I'm local!
}
function exampleBlockScope() {
    if (true) {
        let blockVar = "I'm in a block!";
        console.log(blockVar);  // I'm in a block!
    }
    console.log(blockVar);  // ReferenceError: blockVar is not defined
}
