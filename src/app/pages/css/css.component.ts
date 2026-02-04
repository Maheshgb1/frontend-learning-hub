import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  imports: [],
  templateUrl: './css.component.html',
  styleUrl: './css.component.css'
})
export class CssComponent {
onGoBackClick() {
  window.location.href = '/';
}
}
