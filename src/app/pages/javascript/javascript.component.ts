import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-javascript',
  imports: [CommonModule],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css'
})

export class JavascriptComponent {


  
onGoBackClick() {
  let a;
  window.location.href = '/';
}

users = [
  { id: 1, name: "Mahesh", age: 25, active: true, salary: 50000 },
  { id: 2, name: "Ravi", age: 30, active: false, salary: 60000 },
  { id: 3, name: "Anita", age: 22, active: true, salary: 45000 },
  { id: 4, name: "Kiran", age: 35, active: true, salary: 80000 }
];
arrayInit() {
console.log(this.users);
}

// onMap() {
// const names = this.users.map(user => user.name);
// console.log(names);
// const activeUsers = this.users.filter(user => user.active);
// console.log(activeUsers)
// }

onMap() {
  const names = this.users.map(function (mahesh) {
    return mahesh.name;
  });

  // const names = this.users.map(user => user.name);
  console.log(names);

  const activeUsers = this.users.filter(function (user) {
    return user.active;
  });
  console.log(activeUsers);
}


}
