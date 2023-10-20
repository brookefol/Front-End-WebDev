let age = 25;
let year = 2023;

console.log(age, year); // system.out.println of java script

let firstName = "Elle";
let lastName = "Kim"; 

let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName.length);

console.log(fullName[2]);

console.log(fullName.toUpperCase())

// Conditionals
let date = 17;
if (date === "17") { // three equal signs checks for typing
    console.log("yay!");
}

// functions
function add (a, b) {
    return a + b;
}

add(1, 2);

function printHi (name) {
    return "hi " + name;
}

function printBye(func) {
    return func ("Jolene") + " bye";
}

console.log(printBye(printHi));

const multiply = (a, b) => (a*b); // arrow function
console.log(multiply(2,3));


console.log(multiply(3, 3) === 9 ? "YAY" : "BOO"); // ternary operator