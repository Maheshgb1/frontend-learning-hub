import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-html',
  imports: [CommonModule],
  templateUrl: './html.component.html',
  styleUrl: './html.component.css'
})
export class HtmlComponent {
topics = [
'Introduction to HTML'
];

onGoBackClick() {
  window.location.href = '/';
}

}
