import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterModule,RouterLinkActive } from '@angular/router'; // ✅ Needed for routerLink
import { LayoutDashboard,Users,IndianRupee,LucideAngularModule } from 'lucide-angular';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,LucideAngularModule,RouterLinkActive,CommonModule],   // ✅ Must import RouterModule
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  readonly LayoutDashboard = LayoutDashboard;
  readonly Users = Users;
  readonly IndianRupee = IndianRupee;
  @Input() collapsed = false;
}