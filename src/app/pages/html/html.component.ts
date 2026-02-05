import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html',
  imports: [CommonModule],
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css'],
})
export class HtmlComponent {
  constructor(private router: Router) {}

  onGoBackClick() {
    this.router.navigate(['/']);
  }
}
