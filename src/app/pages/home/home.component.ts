import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  onHtmlClick() {
    this.router.navigate(['/html']);
  }

  onCssClick() {
    this.router.navigate(['/css']);
  }

  onJavascriptClick() {
    this.router.navigate(['/javascript']);
  }

  onAngularClick() {
    this.router.navigate(['/angular']);
  }

  onBootstrapClick() {
    this.router.navigate(['/bootstrap']);
  }

  onRxjsClick() {
    this.router.navigate(['/rxjs']);
  }

  onNgrxClick() {
    this.router.navigate(['/ngrx']);
  }
}
