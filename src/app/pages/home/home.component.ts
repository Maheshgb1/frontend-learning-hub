import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
onHTMLClick() {
  window.location.href = '/html';
}

onCSSClick() {
  window.location.href = '/css';
}

onJavascriptClick() {
  window.location.href = '/javascript';
}

onAngularClick() {
  window.location.href = '/angular';
}

}
