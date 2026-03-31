import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from './header/header'; // ✅ ADD THIS
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    Sidebar,
    Header   // ✅ ADD HERE
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  isCollapsed = false;
  isHide = false;

  toggleSidebar() {
    if(window.innerWidth >= 1024){
      this.isCollapsed = !this.isCollapsed;
    }
    else{
      this.isHide = !this.isHide;
    }
  }
  ngOnInit() {
  this.checkScreen();
}

@HostListener('window:resize')
onResize() {
  this.checkScreen();
}

checkScreen() {
  if (window.innerWidth <= 1024) {
    this.isCollapsed = true;   // 👉 mobile → collapse
  } else {
    this.isCollapsed = false;  // 👉 desktop → expand
  }
}

}