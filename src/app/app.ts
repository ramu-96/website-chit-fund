import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('expensive-tracker');
  constructor(private themeService: ThemeService) {}

ngOnInit() {
  this.themeService.applyTheme(); // ✅ clean
}
}
