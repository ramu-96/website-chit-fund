import { Component } from '@angular/core';
import { ThemeService } from './theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  theme: any;

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.applyTheme();
  }
}