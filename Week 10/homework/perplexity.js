// 1. Fibonacci sequence generator
const fibonacci = (n) => {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2];
  }
  return sequence;
};
console.log("1. Fibonacci:", fibonacci(10));

// 2. Curried function for adding
const curriedAdd = (a) => (b) => (c) => a + b + c;
console.log("2. Curried Add:", curriedAdd(1)(2)(3));

// 3. Memoized factorial function
const memoizedFactorial = (() => {
  const cache = {};
  return (n) => {
    if (n in cache) return cache[n];
    if (n <= 1) return 1;
    return cache[n] = n * memoizedFactorial(n - 1);
  };
})();
console.log("3. Memoized Factorial:", memoizedFactorial(5));

// 4. Compose function
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
const doubleValue = (x) => x * 2;
const square = (x) => x * x;
const doubleSquare = compose(square, doubleValue);
console.log("4. Compose:", doubleSquare(3));

// 5. Debounce function
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
const debouncedLog = debounce(console.log, 1000);
debouncedLog("5. Debounced:", "This will appear after 1 second");

// 6. Throttle function
const throttle = (fn, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
const throttledLog = throttle(console.log, 1000);
throttledLog("6. Throttled:", "This appears immediately");
throttledLog("6. Throttled:", "This won't appear");

// 7. Partial application
const partial = (fn, ...partialArgs) => (...args) => fn(...partialArgs, ...args);
const greet = (greeting, name) => `${greeting}, ${name}!`;
const sayHello = partial(greet, "Hello");
console.log("7. Partial:", sayHello("World"));

// 8. Recursive deep clone
const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  return newObj;
};
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
console.log("8. Deep Clone:", cloned);

// 9. Pipe function
const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);
const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;
const addOneThenMultiplyByTwo = pipe(addOne, multiplyByTwo);
console.log("9. Pipe:", addOneThenMultiplyByTwo(3));

// 10. Curry function
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};
const curriedSum = curry((a, b, c) => a + b + c);
console.log("10. Curry:", curriedSum(1)(2)(3));

// 11. Once function
const once = (fn) => {
  let called = false;
  return function(...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
};
const onceLog = once(console.log);
onceLog("11. Once:", "This will appear");
onceLog("11. Once:", "This won't appear");

// 12. Memoize function
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
};
const expensiveOperation = memoize((n) => {
  console.log("Calculating...");
  return n * 2;
});
console.log("12. Memoize:", expensiveOperation(5));
console.log("12. Memoize (cached):", expensiveOperation(5));

// 13. Async retry function
const retry = async (fn, retries = 3, delay = 1000) => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay);
  }
};
const failingFunction = async () => {
  throw new Error("Failing function");
};
retry(failingFunction).catch(error => console.log("13. Async Retry:", error.message));

// 14. Lazy evaluation
const lazyEval = (fn) => {
  let result;
  return () => {
    if (result === undefined) {
      result = fn();
    }
    return result;
  };
};
const lazyValue = lazyEval(() => {
  console.log("Expensive calculation");
  return 42;
});
console.log("14. Lazy Eval:", lazyValue());
console.log("14. Lazy Eval (cached):", lazyValue());

// 15. Fluent interface
const calculator = (initialValue = 0) => ({
  value: initialValue,
  add: function(n) { this.value += n; return this; },
  subtract: function(n) { this.value -= n; return this; },
  multiply: function(n) { this.value *= n; return this; },
  divide: function(n) { this.value /= n; return this; },
  result: function() { return this.value; }
});
console.log("15. Fluent Interface:", calculator(10).add(5).multiply(2).subtract(8).divide(2).result());

// 16. Function overloading
const overload = (...fns) => (...args) => {
  const fn = fns.find(fn => fn.length === args.length);
  return fn ? fn(...args) : "No matching function";
};
const greetPerson = overload(
  () => "Hello!",
  (name) => `Hello, ${name}!`,
  (name, title) => `Hello, ${title} ${name}!`
);
console.log("16. Overloading:", greetPerson());
console.log("16. Overloading:", greetPerson("Alice"));
console.log("16. Overloading:", greetPerson("Bob", "Mr."));

// 17. Async parallel execution
const parallel = async (fns) => {
  const promises = fns.map(fn => fn());
  return await Promise.all(promises);
};
const asyncFn1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const asyncFn2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
parallel([asyncFn1, asyncFn2]).then(results => console.log("17. Parallel:", results));

// 18. Function composition with reduce
const composeWithReduce = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const composedFunction = composeWithReduce(addTwo, multiplyByThree);
console.log("18. Compose with Reduce:", composedFunction(5));

// 19. Recursive sum of nested objects
const sumNestedObject = (obj) => {
  if (typeof obj !== 'object') return obj;
  return Object.values(obj).reduce((sum, val) => sum + sumNestedObject(val), 0);
};
const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } }, f: 4 };
console.log("19. Sum Nested Object:", sumNestedObject(nestedObj));

// 20. Function decorator
const logDecorator = (fn) => {
  return function(...args) {
    console.log(`Calling function ${fn.name} with arguments:`, args);
    const result = fn.apply(this, args);
    console.log(`Function ${fn.name} returned:`, result);
    return result;
  };
};
const add = (a, b) => a + b;
const decoratedAdd = logDecorator(add);
console.log("20. Decorator:", decoratedAdd(3, 4));

// 21. Async generator function
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
(async () => {
  const results = [];
  for await (const value of asyncGenerator()) {
    results.push(value);
  }
  console.log("21. Async Generator:", results);
})();

// 22. Proxy for function calls
const createProxy = (target) => {
  return new Proxy(target, {
    apply: function(target, thisArg, argumentsList) {
      console.log(`Called with arguments: ${argumentsList}`);
      return target.apply(thisArg, argumentsList);
    }
  });
};
const multiply = (a, b) => a * b;
const proxiedMultiply = createProxy(multiply);
console.log("22. Proxy:", proxiedMultiply(3, 4));

// 23. Recursive flatten array
const flattenArray = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
  }, []);
};
console.log("23. Flatten Array:", flattenArray([1, [2, [3, 4], 5]]));

// 24. Function as object property
const mathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};
console.log("24. Function as Object Property:", mathOperations.multiply(3, 4));

// 25. Higher-order function
const repeat = (n, action) => {
  for (let i = 0; i < n; i++) {
    action(i);
  }
};
repeat(3, console.log);
console.log("25. Higher-order Function: See above outputs");

// 26. Recursive binary search
const binarySearch = (arr, target, low = 0, high = arr.length - 1) => {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
  return binarySearch(arr, target, mid + 1, high);
};
console.log("26. Binary Search:", binarySearch([1, 3, 5, 7, 9], 5));

// 27. Async function with timeout
const asyncWithTimeout = async (asyncFn, timeout) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Function timed out')), timeout)
  );
  return Promise.race([asyncFn(), timeoutPromise]);
};
const slowFunction = () => new Promise(resolve => setTimeout(() => resolve('Slow result'), 2000));
asyncWithTimeout(slowFunction, 1000)
  .then(result => console.log("27. Async with Timeout:", result))
  .catch(error => console.log("27. Async with Timeout:", error.message));

// 28. Function factory
const createMultiplier = (factor) => {
  return (number) => number * factor;
};
const doubleMultiplier = createMultiplier(2);
const triple = createMultiplier(3);
console.log("28. Function Factory:", doubleMultiplier(5), triple(5));

// 29. Recursive deep freeze
const deepFreeze = (obj) => {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null && (typeof obj[prop] === 'object' || typeof obj[prop] === 'function') && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
};
const objToFreeze = { a: 1, b: { c: 2 } };
deepFreeze(objToFreeze);
objToFreeze.b.c = 3; // This won't work
console.log("29. Deep Freeze:", objToFreeze);

// 30. Function composition with async functions
const composeAsync = (...fns) => (x) => fns.reduceRight(async (y, f) => f(await y), x);
const asyncDouble = async (x) => x * 2;
const asyncAddOne = async (x) => x + 1;
const asyncComposed = composeAsync(asyncAddOne, asyncDouble);
asyncComposed(3).then(result => console.log("30. Async Compose:", result));
