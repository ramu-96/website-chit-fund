import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = {
    primary: '#16A34A',   // main green
    secondary: '#d1fae5', // light green
    hover: '#f0fdf4',     // dark green
    bg: '#ffffff',        // light background
    text: '#1F2937'       // dark text
  };

  applyTheme() {
    document.documentElement.style.setProperty('--primary', this.theme.primary);
    document.documentElement.style.setProperty('--secondary', this.theme.secondary);
    document.documentElement.style.setProperty('--hover', this.theme.hover);
    document.documentElement.style.setProperty('--bg', this.theme.bg);
    document.documentElement.style.setProperty('--text', this.theme.text);
  }
}