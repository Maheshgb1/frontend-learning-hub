import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript',
  imports: [CommonModule, FormsModule],
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent {
  constructor(private router: Router) {}

  onGoBackClick() {
    this.router.navigate(['/']);
  }

  outputMap: { [key: number]: string } = {};

  topics = [
    {
      title: 'Variables',
      description: `• var   → function scope | re-declare ✔ | re-assign ✔ | hoisting: undefined
                    • let   → block scope    | re-declare ✘ | re-assign ✔ | hoisting: TDZ
                    • const → block scope    | re-declare ✘ | re-assign ✘ | hoisting: TDZ`,
      code: `//HOISTING
console.log(a); // Output: undefined (NOT error)

//DECLARATION
var a = 10;
console.log(a); //10

//RE-ASSIGN
a = 20;
console.log(a); //20

//RE-DECLARE
var a = 30;
console.log(a); //30

//FUNCTION SCOPE
function testVarScope() {
  var x = 100;
  if (true) {
    var x = 200; // SAME variable (no block scope)
    console.log("Inside block:", x);
  }
  console.log("Inside function:", x);
}
testVarScope(); //ReferenceError (outside function)`,
    },
    {
      title: 'Data Types',
      code: `let name = "Mahesh";
let age = 25;
let isActive = true;
console.log(typeof name, typeof age, typeof isActive);`,
    },
    {
      title: 'Functions',
      code: `function greet(name) {
  return "Hello " + name;
}
console.log(greet("Mahesh"));`,
    },
    {
      title: 'Arrow Functions',
      code: `const add = (a, b) => a + b;
console.log(add(5, 3));`,
    },
    {
      title: 'Arrays & map',
      code: `const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled);`,
    },
    {
      title: 'Objects & Destructuring',
      code: `const user = { name: "Mahesh", role: "Angular Dev" };
const { name, role } = user;
console.log(name, role);`,
    },
    {
      title: 'Closures',
      code: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();`,
    },
    {
      title: 'this keyword',
      code: `const obj = {
  name: "JS",
  show() {
    console.log(this.name);
  }
};
obj.show();`,
    },
    {
      title: 'Promises',
      code: `const promise = new Promise(resolve => {
  setTimeout(() => resolve("Done"), 1000);
});
promise.then(res => console.log(res));`,
    },
    {
      title: 'async / await',
      code: `async function fetchData() {
  return "Async Result";
}
fetchData().then(console.log);`,
    },
    {
      title: 'Event Loop (Call Stack, Microtask, Macrotask)',
      code: `console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");`,
    },
    {
      title: 'Call, Apply, Bind',
      description: `
• call  → invokes function immediately, arguments passed individually
• apply → invokes function immediately, arguments passed as array
• bind  → returns a new function with fixed 'this'
`,
      code: `const user1 = {
  name: "Mahesh"
};

const user2 = {
  name: "Angular"
};

function greet(city, country) {
  console.log(
    "Hello " + this.name + 
    " from " + city + ", " + country
  );
}

// call
greet.call(user1, "Bangalore", "India");

// apply
greet.apply(user2, ["Hyderabad", "India"]);

// bind
const boundGreet = greet.bind(user1, "Chennai", "India");
boundGreet();`,
    },
    {
      title: 'Hoisting (var, let, const, functions)',
      description: `
• var → hoisted and initialized as undefined
• let / const → hoisted but in Temporal Dead Zone
• function declarations → fully hoisted
• function expressions → behave like variables
`,
      code: `// VAR
console.log(a); // undefined
var a = 10;

// LET
try {
  console.log(b);
} catch (e) {
  console.log("let error:", e.message);
}
let b = 20;

// CONST
try {
  console.log(c);
} catch (e) {
  console.log("const error:", e.message);
}
const c = 30;

// FUNCTION DECLARATION
sayHello(); // works
function sayHello() {
  console.log("Hello from function declaration");
}

// FUNCTION EXPRESSION
try {
  sayHi();
} catch (e) {
  console.log("function expression error:", e.message);
}
var sayHi = function () {
  console.log("Hello from function expression");
};`,
    },
    {
      title:
        'Objects & Prototypes (Prototype Chain, Constructor, Classes, Inheritance)',
      description: `
• Every JS object has a hidden [[Prototype]]
• Prototype chain enables inheritance
• __proto__ → points to object's prototype
• prototype → exists on constructor functions
• Classes are syntax sugar over prototypes
`,
      code: `// OBJECT & PROTOTYPE
const person = {
  greet() {
    console.log("Hello from person");
  }
};

const user = {
  name: "Mahesh"
};

// LINK prototype
user.__proto__ = person;

user.greet(); // inherited via prototype chain

// __proto__ vs prototype
function Employee(name) {
  this.name = name;
}

Employee.prototype.sayName = function () {
  console.log("Employee name:", this.name);
};

const emp1 = new Employee("Angular Dev");

console.log(emp1.__proto__ === Employee.prototype); // true
emp1.sayName();

// PROTOTYPE CHAIN
console.log(emp1.__proto__.__proto__ === Object.prototype); // true

// CLASS (ES6)
class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(this.type + " makes a noise");
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog");
    this.name = name;
  }

  speak() {
    console.log(this.name + " barks");
  }
}

const dog = new Dog("Rocky");
dog.speak();

// Verify prototype chain
console.log(dog.__proto__ === Dog.prototype); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true`,
    },
    {
      title: 'Advanced Functions (IIFE, Currying, HOF, Composition)',
      description: `
• IIFE → executes immediately, avoids global scope pollution
• Currying → transforms function with multiple args into chained functions
• Higher-Order Function → function that takes or returns another function
• Function Composition → combining multiple functions into one
`,
      code: `// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed immediately");
})();

// HIGHER-ORDER FUNCTION
function calculate(operation) {
  return function (a, b) {
    return operation(a, b);
  };
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const addCalc = calculate(add);
const mulCalc = calculate(multiply);

console.log("HOF add:", addCalc(5, 3));
console.log("HOF multiply:", mulCalc(5, 3));

// CURRYING
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Currying result:", curryAdd(1)(2)(3));

// FUNCTION COMPOSITION
const double = x => x * 2;
const square = x => x * x;

const compose = (f, g) => (x) => f(g(x));

const composedFn = compose(square, double);

console.log("Composition result:", composedFn(3));`,
    },
    {
      title: 'Arrays & Objects (Advanced)',
      description: `
• map → transforms array
• filter → selects items
• reduce → accumulates values
• Shallow vs Deep Copy → reference vs value
• freeze / seal → object immutability
• Spread & Rest → flexible data handling
• Optional chaining → safe property access
• Nullish coalescing → default only for null/undefined
`,
      code: `// MAP vs FILTER vs REDUCE
const nums = [1, 2, 3, 4, 5];

const mapped = nums.map(n => n * 2);
const filtered = nums.filter(n => n > 2);
const reduced = nums.reduce((sum, n) => sum + n, 0);

console.log("map:", mapped);
console.log("filter:", filtered);
console.log("reduce:", reduced);

// SHALLOW COPY
const user = { name: "Mahesh", address: { city: "BLR" } };
const shallowCopy = { ...user };
shallowCopy.address.city = "HYD";

console.log("Shallow city:", user.address.city);

// DEEP COPY
const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = "DEL";

console.log("Deep city:", user.address.city);

// OBJECT FREEZE
const frozenObj = Object.freeze({ role: "Admin" });
frozenObj.role = "User";
console.log("Frozen:", frozenObj.role);

// OBJECT SEAL
const sealedObj = Object.seal({ status: "Active" });
sealedObj.status = "Inactive";
delete sealedObj.status;
console.log("Sealed:", sealedObj.status);

// SPREAD OPERATOR
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Spread array:", arr2);

// REST OPERATOR
function sum(...values) {
  return values.reduce((a, b) => a + b, 0);
}
console.log("Rest sum:", sum(1, 2, 3));

// OPTIONAL CHAINING
const person = { profile: { name: "Mahesh" } };
console.log("Optional:", person?.profile?.name);
console.log("Optional missing:", person?.address?.city);

// NULLISH COALESCING
const input = 0;
const result = input ?? 10;
console.log("Nullish:", result);`,
    },
    {
      title: 'Async JavaScript (Advanced)',
      description: `
• Callbacks → async using functions
• Callback Hell → nested callbacks problem
• Promise chaining → cleaner async flow
• Promise APIs → all, allSettled, race, any
• Async error handling → try/catch
• Retry pattern → reattempt on failure
`,
      code: `// CALLBACK
function fetchDataCallback(cb) {
  setTimeout(() => {
    cb("Callback data");
  }, 500);
}

fetchDataCallback(data => {
  console.log("Callback:", data);
});

// CALLBACK HELL
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 300);
  }, 300);
}, 300);

// PROMISE CHAINING
function fetchDataPromise() {
  return Promise.resolve("Promise data");
}

fetchDataPromise()
  .then(data => {
    console.log("Promise 1:", data);
    return "Next step";
  })
  .then(step => {
    console.log("Promise 2:", step);
  });

// PROMISE APIs
const p1 = Promise.resolve("P1");
const p2 = Promise.resolve("P2");
const p3 = Promise.reject("P3 Error");

Promise.all([p1, p2])
  .then(res => console.log("all:", res));

Promise.allSettled([p1, p3])
  .then(res => console.log("allSettled:", res));

Promise.race([p1, p2])
  .then(res => console.log("race:", res));

Promise.any([p3, p1])
  .then(res => console.log("any:", res));

// ASYNC / AWAIT ERROR HANDLING
async function asyncTask() {
  try {
    throw new Error("Async failure");
  } catch (e) {
    console.log("Caught:", e.message);
  }
}

asyncTask();

// RETRY PATTERN
function retry(fn, retries) {
  return fn().catch(err => {
    if (retries === 0) throw err;
    console.log("Retrying...");
    return retry(fn, retries - 1);
  });
}

let attempt = 0;
function unstableTask() {
  return new Promise((resolve, reject) => {
    attempt++;
    attempt < 3 ? reject("Fail") : resolve("Success");
  });
}

retry(unstableTask, 3)
  .then(res => console.log("Retry result:", res));`,
    },
    {
      title: 'Browser & DOM',
      description: `
• DOM manipulation → create & modify elements
• Event Bubbling → child → parent
• Event Capturing → parent → child
• Event Delegation → single handler for many elements
• preventDefault → stop default browser behavior
• addEventListener options → capture, once
`,
      code: `// DOM MANIPULATION
const box = document.getElementById("box");
box.style.background = "lightblue";
box.textContent = "DOM Updated!";

// EVENT BUBBLING
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked (bubbling)");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked (bubbling)");
});

// EVENT CAPTURING
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked (capturing)");
  },
  true
);

// EVENT DELEGATION
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Delegated click:", e.target.textContent);
  }
});

// PREVENT DEFAULT
document.getElementById("link").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Default prevented");
});

// addEventListener OPTIONS
document.getElementById("onceBtn").addEventListener(
  "click",
  () => {
    console.log("Clicked once only");
  },
  { once: true }
);`,
    },
    {
      title: 'Performance & Optimization',
      description: `
• Debounce → delay execution until user stops triggering
• Throttle → limit execution rate
• Memoization → cache results to avoid recomputation
• Lazy Loading → load code/resources only when needed (concept)
`,
      code: `// DEBOUNCE
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debouncedFn = debounce(() => {
  console.log("Debounced function executed");
}, 500);

debouncedFn();
debouncedFn();
debouncedFn();

// THROTTLE
function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const throttledFn = throttle(() => {
  console.log("Throttled function executed");
}, 1000);

throttledFn();
throttledFn();
throttledFn();

// MEMOIZATION
function memoize(fn) {
  const cache = {};
  return function (n) {
    if (cache[n]) {
      console.log("From cache:", n);
      return cache[n];
    }
    console.log("Computing:", n);
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const slowSquare = n => {
  for (let i = 0; i < 1e7; i++) {}
  return n * n;
};

const memoizedSquare = memoize(slowSquare);

console.log("Result:", memoizedSquare(5));
console.log("Result:", memoizedSquare(5));

// LAZY LOADING (CONCEPT)
console.log(
  "Lazy Loading: load code or modules only when required (e.g., Angular lazy modules, dynamic import)"
);`,
    },
    {
      title: 'Modern JavaScript',
      description: `
• ES Modules → import/export (file-based, static analysis)
• Strict Mode → safer JavaScript execution
• Polyfills → add missing features for old browsers
• Transpilation → convert modern JS to older JS (Babel)
`,
      code: `// STRICT MODE
(function () {
  "use strict";
  try {
    x = 10; // ❌ ReferenceError in strict mode
  } catch (e) {
    console.log("Strict mode error:", e.message);
  }
})();

// NON-STRICT MODE
(function () {
  y = 20; // Allowed (bad practice)
  console.log("Non-strict global y:", y);
})();

// POLYFILL EXAMPLE (Array.includes)
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}

const nums = [1, 2, 3];
console.log("Polyfill includes:", nums.includes(2));

// ES MODULES (CONCEPT)
console.log(
  "ES Modules: use 'export' to expose code and 'import' to consume it across files"
);

// Example:
// export function add(a,b){ return a+b }
// import { add } from './math.js'

// TRANSPILATION (CONCEPT)
console.log(
  "Transpilation: tools like Babel convert modern JS to older syntax for browser compatibility"
);

// Example:
// const add = (a,b) => a+b
// becomes:
// var add = function(a,b){ return a+b }`,
    },
    {
      title: 'Memory & Garbage Collection',
      description: `
• Stack → stores primitives, function calls
• Heap → stores objects & reference types
• Garbage Collection → frees unreachable memory
• Memory leaks → closures, unused DOM references, global variables
`,
      code: `// STACK vs HEAP
function stackExample() {
  let a = 10; // stored in stack
  let b = "JS"; // stored in stack
  console.log("Stack values:", a, b);
}
stackExample();

// HEAP
let obj = { name: "Mahesh" }; // stored in heap
let ref = obj;
obj = null; // original object still reachable via ref
console.log("Heap object:", ref);

// GARBAGE COLLECTION (CONCEPT)
let user = { role: "Admin" };
user = null; // object becomes unreachable → GC eligible
console.log("Object eligible for GC");

// MEMORY LEAK – CLOSURE
function leakyClosure() {
  let largeData = new Array(1000000).fill("data");
  return function () {
    console.log("Closure still holds data");
  };
}
const leak = leakyClosure();
leak();

// MEMORY LEAK – DOM REFERENCE (CONCEPT)
console.log(
  "DOM leak example: storing removed DOM elements in variables prevents GC"
);

// MEMORY LEAK – GLOBAL VARIABLE
leakGlobal = "I live forever";
console.log("Global variable leak:", leakGlobal);`,
    },
    {
      title: 'JavaScript Edge Cases & Quirks',
      description: `
• == vs === → loose vs strict comparison
• Truthy / Falsy → unexpected boolean behavior
• NaN → special numeric value
• typeof null → historical JavaScript bug
`,
      code: `// == vs ===
console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (strict)

// TRUTHY / FALSY
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("0"));      // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false

// NaN
console.log("NaN example:", NaN === NaN); // false
console.log("isNaN:", isNaN(NaN)); // true

// typeof quirks
console.log("typeof null:", typeof null); // object (bug)
console.log("typeof NaN:", typeof NaN);   // number

// Safe NaN check
console.log("Number.isNaN:", Number.isNaN(NaN));`,
    },
  ];

  runCode(code: string, index: number) {
    let output = '';

    const customConsole = {
      log: (...args: any[]) => {
        output += args.join(' ') + '\n';
        this.outputMap[index] = output;
      },
    };

    const customSetTimeout = (fn: Function, delay: number) => {
      window.setTimeout(() => {
        try {
          fn();
        } catch (e: any) {
          customConsole.log('Error:', e.message);
        }
      }, delay);
    };

    const customPromise = Promise;

    try {
      const fn = new Function('console', 'setTimeout', 'Promise', code);

      fn(customConsole, customSetTimeout, customPromise);
    } catch (err: any) {
      this.outputMap[index] = 'Error: ' + err.message;
    }
  }
}
