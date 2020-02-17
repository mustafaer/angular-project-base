import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor() {
    AppComponent.setLanguage();
  }

  static setLanguage() {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
    }
  }
}
