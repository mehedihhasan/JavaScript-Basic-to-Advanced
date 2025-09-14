


// ===== 1. Math Practice =====
console.log("=== Math Practice ===");

let num1 = 10;
let num2 = 3;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus (Remainder):", num1 % num2);

console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8
console.log("Math.sqrt(16):", Math.sqrt(16));   // 4
console.log("Math.round(4.6):", Math.round(4.6)); // 5
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5
console.log("Math.random():", Math.random());    // Random number between 0 and 1

// ===== 2. String Practice =====
console.log("\n=== String Practice ===");

let firstName = "Ami";
let lastName = "Student";
let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);
console.log("Length:", fullName.length);
console.log("Character at index 2:", fullName[2]);

// ===== 3. String Methods =====
console.log("\n=== String Methods ===");

let text = "  Hello JavaScript World!  ";

console.log("Original:", text);
console.log("Trimmed:", text.trim());
console.log("Upper Case:", text.toUpperCase());
console.log("Lower Case:", text.toLowerCase());
console.log("Includes 'JavaScript'?", text.includes("JavaScript"));
console.log("Starts with 'Hello'?", text.trim().startsWith("Hello"));
console.log("Index of 'World':", text.indexOf("World"));
console.log("Replace 'JavaScript' with 'JS':", text.replace("JavaScript", "JS"));

// ===== 4. Array Practice =====
console.log("\n=== Array Practice ===");

let fruits = ["apple", "banana", "mango", "orange"];

console.log("Fruits:", fruits);
fruits.push("grape");           
console.log("After push:", fruits);

fruits.pop();                   
console.log("After pop:", fruits);

fruits.unshift("lemon");        
console.log("After unshift:", fruits);

fruits.shift();               
console.log("After shift:", fruits);

console.log("Index of mango:", fruits.indexOf("mango"));
console.log("Includes banana?", fruits.includes("banana"));

// ===== 5. Array Condition (Filter, Map, Find) =====
console.log("\n=== Array Conditions ===");

let numbers = [5, 10, 15, 20, 25, 30];

let filtered = numbers.filter(num => num > 15);
console.log("Numbers > 15:", filtered);

let doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

let found = numbers.find(num => num === 20);
console.log("Found 20?:", found);

// ===== 6. Basic Functions =====
console.log("\n=== Function Practice ===");

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Tumi"));
console.log(greet("JavaScript"));

function add(a, b) {
    return a + b;
}

console.log("Add(5, 7):", add(5, 7));

function isEven(num) {
    return num % 2 === 0;
}

console.log("Is 10 even?", isEven(10));
console.log("Is 11 even?", isEven(11));

function getMax(x, y) {
    return x > y ? x : y;
}

console.log("Max of 10 and 20:", getMax(10, 20));
