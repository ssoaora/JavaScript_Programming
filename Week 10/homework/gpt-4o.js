// 1. Basic Greeting Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("1. Basic Greeting Function:");
console.log(greet("Andrew"));
console.log("----------");

// 2. Arrow Function for Calculating Square
const square = num => num * num;
console.log("2. Arrow Function for Calculating Square:");
console.log(square(5)); // 25
console.log("----------");

// 3. Array Filter with Arrow Function
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log("3. Array Filter with Arrow Function:");
console.log(evens); // [2, 4]
console.log("----------");

// 4. Function with Default Parameters
function introduce(name = "Guest") {
  return `Welcome, ${name}!`;
}
console.log("4. Function with Default Parameters:");
console.log(introduce()); // "Welcome, Guest!"
console.log("----------");

// 5. Recursive Factorial Function
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log("5. Recursive Factorial Function:");
console.log(factorial(5)); // 120
console.log("----------");

// 6. IIFE (Immediately Invoked Function Expression)
console.log("6. IIFE (Immediately Invoked Function Expression):");
(function() {
  console.log("This runs immediately!");
})();
console.log("----------");

// 7. Higher-Order Function (Map)
const double = arr => arr.map(num => num * 2);
console.log("7. Higher-Order Function (Map):");
console.log(double([1, 2, 3])); // [2, 4, 6]
console.log("----------");

// 8. Currying Function
const multiply = a => b => a * b;
const doubleValue = multiply(2);
console.log("8. Currying Function:");
console.log(doubleValue(5)); // 10
console.log("----------");

// 9. Memoized Fibonacci Function
function memoizedFibonacci() {
  const cache = {};
  return function fib(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    return cache[n] = fib(n - 1) + fib(n - 2);
  };
}
const fibonacci = memoizedFibonacci();
console.log("9. Memoized Fibonacci Function:");
console.log(fibonacci(10)); // 55
console.log("----------");

// 10. Random Hex Color Generator
function randomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
}
console.log("10. Random Hex Color Generator:");
console.log(randomHexColor()); // e.g., #3e2f1b
console.log("----------");

// 11. Async Function with Fetch API
async function fetchUserData(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data = await response.json();
  return data;
}
console.log("11. Async Function with Fetch API:");
// Uncomment the line below to test in an environment where fetch is available
// fetchUserData(1).then(data => console.log(data));
console.log("----------");

// 12. Debounce Function
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
const logDebounced = debounce(() => console.log("Debounced!"), 300);
console.log("12. Debounce Function:");
logDebounced();
console.log("----------");

// 13. Throttle Function
function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}
const logThrottled = throttle(() => console.log("Throttled!"), 500);
console.log("13. Throttle Function:");
logThrottled();
console.log("----------");

// 14. Palindrome Checker
function isPalindrome(str) {
  const cleanStr = str.replace(/\W/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
console.log("14. Palindrome Checker:");
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log("----------");

// 15. Function Composition
const compose = (f, g) => x => f(g(x));
const add2 = x => x + 2;
const doubleValue2 = x => x * 2;
console.log("15. Function Composition:");
console.log(compose(add2, doubleValue2)(5)); // 12
console.log("----------");

// 16. Calculate Days Between Two Dates
function daysBetween(date1, date2) {
  const diff = Math.abs(new Date(date1) - new Date(date2));
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
console.log("16. Calculate Days Between Two Dates:");
console.log(daysBetween("2024-01-01", "2024-01-10")); // 9
console.log("----------");

// 17. Flat Nested Array
function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) =>
    flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}
console.log("17. Flat Nested Array:");
console.log(flattenArray([1, [2, [3, 4], 5]])); // [1, 2, 3, 4, 5]
console.log("----------");

// 18. Shuffle Array
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
console.log("18. Shuffle Array:");
console.log(shuffleArray([1, 2, 3, 4, 5]));
console.log("----------");

// 19. Generate UUID
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
console.log("19. Generate UUID:");
console.log(generateUUID());
console.log("----------");

// 20. Convert Object to Query String
function toQueryString(obj) {
  return new URLSearchParams(obj).toString();
}
console.log("20. Convert Object to Query String:");
console.log(toQueryString({ name: 'Andrew', age: 25 })); // name=Andrew&age=25
console.log("----------");

// 21. Unique Array Elements
function uniqueArray(arr) {
  return [...new Set(arr)];
}
console.log("21. Unique Array Elements:");
console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log("----------");

// 22. Temperature Converter (Celsius to Fahrenheit)
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
console.log("22. Temperature Converter (Celsius to Fahrenheit):");
console.log(celsiusToFahrenheit(0)); // 32
console.log("----------");

// 23. Sort Array of Objects by Key
function sortByKey(arr, key) {
  return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}
const people = [{ name: "Andrew", age: 25 }, { name: "Becky", age: 30 }];
console.log("23. Sort Array of Objects by Key:");
console.log(sortByKey(people, "age"));
console.log("----------");

// 24. Promise-based Timer
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
console.log("24. Promise-based Timer:");
delay(1000).then(() => console.log("1 second passed"));
console.log("----------");

// 25. Capitalize First Letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("25. Capitalize First Letter:");
console.log(capitalize("hello")); // "Hello"
console.log("----------");

// 26. Deep Clone Object
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const original = { name: "Andrew", hobbies: ["coding", "music"] };
const copy = deepClone(original);
console.log("26. Deep Clone Object:");
console.log(copy);
console.log("----------");

// 27. Flatten Object
function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
}
console.log("27. Flatten Object:");
console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 }));
console.log("----------");

// 28. Sort Words by Length
function sortWordsByLength(str) {
  return str.split(" ").sort((a, b) => a.length - b.length).join(" ");
}
console.log("28. Sort Words by Length:");
console.log(sortWordsByLength("This is an example sentence"));
console.log("----------");

// 29. Random Joke Generator (Sample from Array)
function getRandomJoke() {
  const jokes = [
    "Why did the developer go broke? Because he used up all his cache.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware issue!"
  ];
  return jokes[Math.floor(Math.random() * jokes.length)];
}
console.log("29. Random Joke Generator (Sample from Array):");
console.log(getRandomJoke());
console.log("----------");

// 30. Countdown Timer
function countdown(seconds) {
  let counter = seconds;
  const interval = setInterval(() => {
    if (counter === 0) {
      console.log("Time's up!");
      clearInterval(interval);
    } else {
      console.log(counter);
      counter--;
    }
  }, 1000);
}
console.log("30. Countdown Timer:");
setTimeout(() => countdown(5), 0);
console.log("----------");