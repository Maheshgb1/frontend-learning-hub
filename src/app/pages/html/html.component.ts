import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-html',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent {

onGoBackClick() {
  window.location.href = '/';
}

}
