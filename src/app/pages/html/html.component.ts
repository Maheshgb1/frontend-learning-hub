import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-html',
  imports: [CommonModule],
  templateUrl: './html.component.html',
  styleUrl: './html.component.css'
})
export class HtmlComponent {
onGoBackClick() {
  window.location.href = '/';
}

}
