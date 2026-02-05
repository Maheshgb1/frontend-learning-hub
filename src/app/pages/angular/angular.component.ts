import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-angular',
  imports: [CommonModule, FormsModule],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  constructor(private router: Router) {}

  value = 'Hello Angular';
  imageUrl = 'E:\JOB Preparation\frontend-learning-hub\public\favicon.ico';
  name = '';


onGoBackClick() {
  this.router.navigate(['/']);
}

isButtonClicked() {
  alert('event binding is working');
}
}
