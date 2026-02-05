import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-angular',
  imports: [CommonModule, FormsModule],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  value = 'Hello Angular';
  imageUrl = 'E:\JOB Preparation\frontend-learning-hub\public\favicon.ico';
  name = '';


onGoBackClick() {
  window.location.href = '/';
}

isButtonClicked() {
  alert('event binding is working');
}
}
