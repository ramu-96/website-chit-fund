import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-header',
    standalone: true,
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private router: Router) {}

  onToggle() {
    this.toggleSidebar.emit();
  }

  onLogout() {
    this.router.navigate(['/auth']);
  }
}