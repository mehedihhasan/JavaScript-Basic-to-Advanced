// Expressions and Operators
console.log("---- Expressions and Operators ----");

let x = 20;
let y = 6;

console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** y =", x ** y);

let z = 15;
z += 10;
console.log("z after += 10:", z);
z -= 5;
console.log("z after -= 5:", z);
z *= 2;
console.log("z after *= 2:", z);
z /= 4;
console.log("z after /= 4:", z);

console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x == '20':", x == "20");
console.log("x === '20':", x === "20");
console.log("x !== y:", x !== y);

let cond1 = (x > 10);
let cond2 = (y < 5);
console.log("cond1 && cond2:", cond1 && cond2);
console.log("cond1 || cond2:", cond1 || cond2);
console.log("!cond1:", !cond1);

let score = 82;
let grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 70 ? "B" : "Fail";
console.log("Grade:", grade);

let name = "Mehedi";
let greet = name || "Guest";
console.log("Greeting:", greet);

let lang = "JavaScript";
let check = lang && "Awesome!";
console.log("Check with &&:", check);


// Numbers and Strings
console.log("\n---- Numbers and Strings ----");

let num1 = 45.6789;
console.log("Fixed(2):", num1.toFixed(2));
console.log("Exponential:", num1.toExponential(2));
console.log("toPrecision(5):", num1.toPrecision(5));

console.log("Math.round:", Math.round(num1));
console.log("Math.floor:", Math.floor(num1));
console.log("Math.ceil:", Math.ceil(num1));
console.log("Math.abs(-50):", Math.abs(-50));
console.log("Random (0-1):", Math.random());

console.log("Max(1,99,33):", Math.max(1, 99, 33));
console.log("Min(1,99,33):", Math.min(1, 99, 33));

let str1 = "JavaScript";
let str2 = "Practice";
console.log("Concat:", str1.concat(" ", str2));
console.log("Slice(0,4):", str1.slice(0, 4));
console.log("Substring(4,10):", str1.substring(4, 10));
console.log("CharAt(3):", str1.charAt(3));
console.log("IndexOf('S'):", str1.indexOf("S"));
console.log("LastIndexOf('a'):", str1.lastIndexOf("a"));

let sentence = "  JavaScript is fun and powerful!  ";
console.log("Trim:", sentence.trim());
console.log("Uppercase:", sentence.toUpperCase());
console.log("Lowercase:", sentence.toLowerCase());
console.log("Includes 'fun'?", sentence.includes("fun"));
console.log("StartsWith 'Java':", sentence.startsWith("Java"));
console.log("EndsWith '!'?", sentence.endsWith("!"));
console.log("Split words:", sentence.trim().split(" "));

let priceStr = "199.99";
console.log("parseInt:", parseInt(priceStr));
console.log("parseFloat:", parseFloat(priceStr));

let n = 123;
console.log("Number to String:", n.toString());

let boolValue = false;
console.log("Boolean to String:", String(boolValue));
console.log("String to Boolean:", Boolean("true"));


// Dates & Times
console.log("\n---- Dates & Times ----");

let now = new Date();
console.log("Now:", now);
console.log("ISO:", now.toISOString());
console.log("Locale:", now.toLocaleString());

let birthday = new Date(2000, 4, 15);
console.log("Birthday:", birthday.toDateString());

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day (0=Sun):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

let newYear = new Date("2026-01-01T00:00:00");
let diffMs = newYear - now;
let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log("Days left until New Year:", diffDays);

function formatDate(date) {
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  return `${d}/${m}/${y}`;
}
console.log("Formatted date:", formatDate(now));

function countdown(targetDate) {
  let now = new Date();
  let diff = targetDate - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let mins = Math.floor((diff / (1000 * 60)) % 60);
  let secs = Math.floor((diff / 1000) % 60);
  return `${days}d ${hours}h ${mins}m ${secs}s`;
}
console.log("Countdown to 2026 New Year:", countdown(newYear));


// Regular Expressions
console.log("\n---- Regular Expressions ----");

let text = "Contact me at test@mail.com or call 01712345678";
let emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
let phoneRegex = /01\d{9}/;

console.log("Email found?", emailRegex.test("abc@mail.com"));
console.log("Phone match:", text.match(phoneRegex));

let words = "Apple, banana, cherry, Apple, Banana";
console.log("Find 'apple' (case-insensitive):", words.match(/apple/gi));

let html = "<div><h1>Hello</h1><p>World</p></div>";
console.log("Remove tags:", html.replace(/<\/?[^>]+>/g, ""));

let password = "MyPass@123";
let strongPassRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
console.log("Strong password?", strongPassRegex.test(password));

let multiLine = `Line1
Line2
Line3
Line42`;
console.log("Match Line + number:", multiLine.match(/^Line\d+/gm));

let numbers = "Bill: 1200, Tax: 200, Total: 1400";
console.log("Extract digits:", numbers.match(/\d+/g));

let replaceSpaces = "I love coding in JavaScript";
console.log("Replace spaces with - :", replaceSpaces.replace(/\s+/g, "-"));

let vowels = "Regular expressions are powerful!".match(/[aeiou]/gi);
console.log("Vowels:", vowels);

let notDigits = "User123";
console.log("Remove digits:", notDigits.replace(/\d/g, ""));
