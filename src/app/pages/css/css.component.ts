import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-css',
  imports: [],
  templateUrl: './css.component.html',
  styleUrl: './css.component.css',
})
export class CssComponent {
  constructor(private router: Router) {}

  onGoBackClick() {
    this.router.navigate(['/']);
  }
}
