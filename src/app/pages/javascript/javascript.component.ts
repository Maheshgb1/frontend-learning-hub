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
      title: 'Variables (let, const)',
      code: `let a = 10;
const b = 20;
console.log("Sum:", a + b);`,
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
