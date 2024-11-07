// 1. Basic Function Declaration
function greet(name) {
  console.log(`--- Example 1: Basic Function ---`);
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 2. Arrow Function
const multiply = (a, b) => {
  console.log(`--- Example 2: Arrow Function ---`);
  return a * b;
};
console.log(multiply(5, 3));

// 3. Function with Default Parameters
const welcome = (name = "Guest") => {
  console.log(`--- Example 3: Default Parameters ---`);
  return `Welcome, ${name}!`;
};
console.log(welcome());

// 4. Rest Parameters
const sum = (...numbers) => {
  console.log(`--- Example 4: Rest Parameters ---`);
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum(1, 2, 3, 4, 5));

// 5. Closure Example
const counter = () => {
  console.log(`--- Example 5: Closure ---`);
  let count = 0;
  return () => ++count;
};
const increment = counter();
console.log(increment());
console.log(increment());

// 6. Immediately Invoked Function Expression (IIFE)
console.log(`--- Example 6: IIFE ---`);
((name) => {
  console.log(`Hello ${name} from IIFE!`);
})("Bob");

// 7. Higher-Order Function
const operate = (func, a, b) => {
  console.log(`--- Example 7: Higher-Order Function ---`);
  return func(a, b);
};
console.log(operate((x, y) => x + y, 5, 3));

// 8. Recursive Function
const factorial = (n) => {
  console.log(`--- Example 8: Recursive Function ---`);
  return n <= 1 ? 1 : n * factorial(n - 1);
};
console.log(factorial(5));

// 9. Generator Function
function* numberGenerator() {
  console.log(`--- Example 9: Generator Function ---`);
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();
console.log([...gen]);

// 10. Async Function
async function fetchData() {
  console.log(`--- Example 10: Async Function ---`);
  try {
    const response = await fetch('https://api.example.com/data');
    return 'Data fetched successfully';
  } catch (error) {
    return 'Error fetching data';
  }
}

// 11. Curried Function
const curriedAdd = (a) => {
  console.log(`--- Example 11: Curried Function ---`);
  return (b) => a + b;
};
console.log(curriedAdd(5)(3));

// 12. Memoized Function
const memoize = (fn) => {
  console.log(`--- Example 12: Memoized Function ---`);
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn(...args));
  };
};

// 13. Function Composition
const compose = (f, g) => {
  console.log(`--- Example 13: Function Composition ---`);
  return (x) => f(g(x));
};
const addOne = x => x + 1;
const double = x => x * 2;
console.log(compose(addOne, double)(5));

// 14. Pure Function
const pureAdd = (a, b) => {
  console.log(`--- Example 14: Pure Function ---`);
  return a + b;
};
console.log(pureAdd(3, 4));

// 15. Method Chaining
class Calculator {
  constructor() {
    this.value = 0;
  }
  add(n) {
    this.value += n;
    return this;
  }
  multiply(n) {
    this.value *= n;
    return this;
  }
  getResult() {
    console.log(`--- Example 15: Method Chaining ---`);
    return this.value;
  }
}
console.log(new Calculator().add(5).multiply(2).getResult());

// Continue with more examples...
// 16. Debounced Function
const debounce = (fn, delay) => {
  console.log(`--- Example 16: Debounced Function ---`);
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// 17. Throttled Function
const throttle = (fn, delay) => {
  console.log(`--- Example 17: Throttled Function ---`);
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      fn(...args);
      lastCall = now;
    }
  };
};

// 18. Function Factory
const createMultiplier = (factor) => {
  console.log(`--- Example 18: Function Factory ---`);
  return (x) => x * factor;
};
const double2 = createMultiplier(2);
console.log(double2(5));

// 19. Partial Application
const partial = (fn, ...args) => {
  console.log(`--- Example 19: Partial Application ---`);
  return (...moreArgs) => fn(...args, ...moreArgs);
};
const addThree = partial((a, b, c) => a + b + c, 1);
console.log(addThree(2, 3));

// 20. Function with Private Variables
const createCounter = () => {
  console.log(`--- Example 20: Private Variables ---`);
  let privateCounter = 0;
  return {
    increment: () => ++privateCounter,
    decrement: () => --privateCounter,
    get: () => privateCounter
  };
};

// 21. Function Decorator
const logDecorator = (fn) => {
  console.log(`--- Example 21: Function Decorator ---`);
  return (...args) => {
    console.log(`Calling function with args: ${args}`);
    return fn(...args);
  };
};

// 22. Async Generator Function
async function* asyncNumberGenerator() {
  console.log(`--- Example 22: Async Generator ---`);
  for (let i = 0; i < 3; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

// 23. Function with Parameter Destructuring
const printPerson = ({ name, age }) => {
  console.log(`--- Example 23: Parameter Destructuring ---`);
  console.log(`${name} is ${age} years old`);
};

// 24. Function Composition with Reduce
const pipe = (...fns) => {
  console.log(`--- Example 24: Function Composition with Reduce ---`);
  return (x) => fns.reduce((v, f) => f(v), x);
};

// 25. Proxy Function
const createProxy = (target) => {
  console.log(`--- Example 25: Proxy Function ---`);
  return new Proxy(target, {
    apply: (target, thisArg, args) => {
      console.log(`Called with args: ${args}`);
      return target.apply(thisArg, args);
    }
  });
};

// 26. Function with Object Methods
const calculator = {
  add: function(a, b) {
    console.log(`--- Example 26: Object Methods ---`);
    return a + b;
  },
  subtract: (a, b) => a - b
};

// 27. Function with Symbol
const uniqueKey = Symbol('description');
const objectWithSymbol = {
  [uniqueKey]: function() {
    console.log(`--- Example 27: Symbol Function ---`);
    return 'Called with symbol';
  }
};

// 28. Function with Generator Delegation
function* delegatingGenerator() {
  console.log(`--- Example 28: Generator Delegation ---`);
  yield* [1, 2, 3];
  yield* 'Hello';
}

// 29. Tagged Template Literal Function
const tag = (strings, ...values) => {
  console.log(`--- Example 29: Tagged Template ---`);
  return strings.reduce((result, str, i) => 
    `${result}${str}${values[i] || ''}`, '');
};

// 30. Function with Error Handling
const divide = (a, b) => {
  console.log(`--- Example 30: Error Handling ---`);
  if (b === 0) throw new Error('Division by zero');
  return a / b;
};

// Execute some examples
console.log("\nExecuting selected examples:");
greet("World");
console.log(multiply(4, 6));
console.log(sum(1, 2, 3, 4, 5));
console.log(factorial(4));
console.log(calculator.add(10, 5));